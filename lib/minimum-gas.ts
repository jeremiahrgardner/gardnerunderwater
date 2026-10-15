// TODO(jeremiah): Confirm all minimum-gas defaults against your teaching before publishing the calculator.
export const minimumGasDefaults = {
  divers: 2,
  sacPerDiver: 1,
  problemMinutes: 1,
  ascentRate: 30,
  stopDepth: 15,
  stopMinutes: 3,
  floorPsi: 500,
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
  stopDepth: number;
  stopMinutes: number;
  floorPsi: number;
};
export function calculateMinimumGas(input: MinimumGasInputs) {
  const {
    depth: D,
    stopDepth: S,
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
    D < 0 ||
    S < 0 ||
    S > D ||
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
      "Use finite positive cylinder, ascent and SAC values, whole divers, nonnegative times, and a stop depth no deeper than the dive.",
    );
  const ata = (depth: number) => depth / 33 + 1;
  const segments = [
    {
      name: "Problem solving at depth",
      minutes: problemMinutes,
      averageDepth: D,
    },
    {
      name: "Ascent to stop",
      minutes: (D - S) / rate,
      averageDepth: (D + S) / 2,
    },
    { name: "Stop", minutes: stopMinutes, averageDepth: S },
    { name: "Ascent to surface", minutes: S / rate, averageDepth: S / 2 },
  ].map((s) => ({
    ...s,
    ata: ata(s.averageDepth),
    surfaceMinutes: s.minutes * ata(s.averageDepth),
    gasCuFt: s.minutes * ata(s.averageDepth) * divers * sacPerDiver,
  }));
  const surfaceMinutes = segments.reduce((sum, s) => sum + s.surfaceMinutes, 0);
  const gasCuFt = surfaceMinutes * divers * sacPerDiver;
  const rawPsi = gasCuFt / (ratedVolume / ratedPressure);
  const reservePsi = Math.max(floorPsi, Math.ceil(rawPsi / 100) * 100);
  return {
    segments,
    surfaceMinutes,
    gasCuFt,
    rawPsi,
    reservePsi,
    reserveBar: reservePsi / 14.5038,
    exceedsCylinder: reservePsi > ratedPressure,
  };
}
