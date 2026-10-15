// UTD rock bottom method: one minute to solve the problem at depth, an ascent
// to half the maximum depth, then one-minute stops every 10 ft to the surface,
// at 1.0 cu ft/min per diver for two divers sharing gas.
export const minimumGasDefaults = {
  divers: 2,
  sacPerDiver: 1,
  problemMinutes: 1,
  ascentRate: 30,
  stopInterval: 10,
  stopMinutes: 1,
  floorPsi: 0,
} as const;
export const cylinders = {
  AL80: { ratedVolume: 77.4, ratedPressure: 3000 },
  HP100: { ratedVolume: 100, ratedPressure: 3442 },
} as const;
export type MinimumGasInputs = {
  depth: number;
  ratedVolume: number;
  ratedPressure: number;
  divers: number;
  sacPerDiver: number;
  problemMinutes: number;
  ascentRate: number;
  stopInterval: number;
  stopMinutes: number;
  floorPsi: number;
};
export function calculateMinimumGas(input: MinimumGasInputs) {
  const {
    depth: D,
    stopInterval: interval,
    ascentRate: rate,
    problemMinutes,
    stopMinutes,
    divers,
    sacPerDiver,
    ratedVolume,
    ratedPressure,
    floorPsi,
  } = input;
  if (
    Object.values(input).some((v) => !Number.isFinite(v)) ||
    D <= 0 ||
    interval <= 0 ||
    rate <= 0 ||
    ratedVolume <= 0 ||
    ratedPressure <= 0 ||
    sacPerDiver <= 0 ||
    divers < 1 ||
    !Number.isInteger(divers) ||
    problemMinutes < 0 ||
    stopMinutes < 0 ||
    floorPsi < 0
  )
    throw new RangeError(
      "Use a positive depth, stop interval, ascent rate, SAC and cylinder size, whole divers and nonnegative times.",
    );
  const ata = (depth: number) => depth / 33 + 1;
  // First stop: half the maximum depth, rounded deeper to a whole stop interval.
  const firstStop = Math.min(D, Math.ceil(D / 2 / interval - 1e-9) * interval);
  const stops: number[] = [];
  for (let s = firstStop; s > 0; s -= interval) stops.push(s);
  const raw = [
    {
      name: "Solve the problem at depth",
      minutes: problemMinutes,
      averageDepth: D,
    },
    ...(firstStop < D
      ? [
          {
            name: `Ascend to ${firstStop} ft`,
            minutes: Math.ceil((D - firstStop) / rate - 1e-9),
            averageDepth: (D + firstStop) / 2,
          },
        ]
      : []),
    ...stops.map((s) => ({
      name: `Stop at ${s} ft`,
      minutes: stopMinutes,
      averageDepth: s,
    })),
  ];
  const segments = raw.map((s) => ({
    ...s,
    ata: ata(s.averageDepth),
    surfaceMinutes: s.minutes * ata(s.averageDepth),
    gasCuFt: s.minutes * ata(s.averageDepth) * divers * sacPerDiver,
  }));
  const ascentMinutes = segments.reduce((sum, s) => sum + s.minutes, 0);
  const surfaceMinutes = segments.reduce((sum, s) => sum + s.surfaceMinutes, 0);
  const gasCuFt = surfaceMinutes * divers * sacPerDiver;
  const rawPsi = gasCuFt / (ratedVolume / ratedPressure);
  const reservePsi = Math.max(floorPsi, Math.ceil(rawPsi / 100 - 1e-9) * 100);
  return {
    segments,
    ascentMinutes,
    averageAta: ascentMinutes ? surfaceMinutes / ascentMinutes : 1,
    surfaceMinutes,
    gasCuFt,
    rawPsi,
    reservePsi,
    reserveBar: reservePsi / 14.5038,
    exceedsCylinder: reservePsi > ratedPressure,
  };
}
