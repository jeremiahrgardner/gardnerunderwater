// The math behind the dive planning tools (/tools). Imperial units, salt water:
// 33 feet of seawater adds one atmosphere. Every function is pure so the tools
// can show their work and the tests can check them against the PDFs' examples.
import { calculateMinimumGas, minimumGasDefaults } from "./minimum-gas.ts";
import { tankFactor } from "./cylinders.ts";

export const CU_FT_TO_LITERS = 28.3168;

/** Atmospheres absolute at a depth in feet of seawater. */
export const ata = (depthFt: number) => depthFt / 33 + 1;

/** Rounds up to the next step, ignoring floating-point dust. */
export const roundUpTo = (value: number, step: number) =>
  Math.ceil(value / step - 1e-9) * step;

const finite = (...values: number[]) => values.every(Number.isFinite);

// ------------------------------------------------------------- Gas planner

export const turnRules = [
  { value: 1, name: "All usable", use: "drift or live-boat pickup" },
  { value: 2, name: "Halves", use: "shore or anchored boat" },
  { value: 3, name: "Thirds", use: "must return to the start" },
] as const;

export type TurnRule = (typeof turnRules)[number]["value"];

export type PlanDiver = {
  name: string;
  cylinder: string;
  ratedVolume: number;
  ratedPressure: number;
  doubles: boolean;
  startPsi: number;
};

export type GasPlanInputs = {
  maxDepth: number;
  /** Depth the working breathing rate is applied at; defaults to the maximum depth. */
  averageDepth: number;
  turnRule: TurnRule;
  /** Working (swimming) breathing rate per diver, cu ft/min. */
  workingSac: number;
  /** Stressed breathing rate per diver for rock bottom, cu ft/min. */
  stressedSac: number;
  problemMinutes: number;
  /** Divers breathing from one cylinder during the emergency ascent. */
  sharing: number;
  team: PlanDiver[];
};

/**
 * Rock bottom, usable gas and turn pressure for a team. Rock bottom uses the
 * site's rock bottom method (lib/minimum-gas.ts). The team plans in volume:
 * the diver with the least usable gas sets the plan, and every diver turns
 * after spending the same volume, converted to their own pressure.
 */
export function planGas(input: GasPlanInputs) {
  const { maxDepth, averageDepth, turnRule, workingSac, team } = input;
  if (
    !finite(maxDepth, averageDepth, workingSac) ||
    maxDepth <= 0 ||
    averageDepth <= 0 ||
    workingSac <= 0
  )
    throw new RangeError("Enter a depth and a working breathing rate above zero.");
  if (averageDepth > maxDepth)
    throw new RangeError("Average depth can't be deeper than maximum depth.");
  if (!team.length) throw new RangeError("Add at least one diver.");
  if (
    team.some(
      (d) =>
        !finite(d.startPsi, d.ratedVolume, d.ratedPressure) ||
        d.startPsi <= 0 ||
        d.ratedVolume <= 0 ||
        d.ratedPressure <= 0,
    )
  )
    throw new RangeError("Enter a start pressure above zero for every diver.");

  // Rock bottom is a volume, the same for the whole team. The cylinder passed
  // here only sets calculateMinimumGas's psi figure, which isn't used.
  const rockBottom = calculateMinimumGas({
    ...minimumGasDefaults,
    depth: maxDepth,
    divers: input.sharing,
    sacPerDiver: input.stressedSac,
    problemMinutes: input.problemMinutes,
    ratedVolume: 1,
    ratedPressure: 1,
  });

  const divers = team.map((d) => {
    const factor = tankFactor(d.ratedVolume, d.ratedPressure, d.doubles);
    const rockBottomRawPsi = (rockBottom.gasCuFt / factor) * 100;
    const rockBottomPsi = roundUpTo(rockBottomRawPsi, 100);
    const usablePsi = d.startPsi - rockBottomPsi;
    return {
      ...d,
      factor,
      startCuFt: (d.startPsi / 100) * factor,
      rockBottomRawPsi,
      rockBottomPsi,
      usablePsi,
      usableCuFt: (usablePsi / 100) * factor,
      exceedsCylinder: rockBottomPsi > d.ratedPressure,
    };
  });

  const short = divers.filter((d) => d.usablePsi <= 0);
  const limitingIndex = divers.reduce(
    (min, d, i) => (d.usableCuFt < divers[min].usableCuFt ? i : min),
    0,
  );
  const limiting = divers[limitingIndex];
  // Volume each diver may spend before the team turns.
  const spendCuFt = Math.max(0, limiting.usableCuFt / turnRule);
  const withTurn = divers.map((d) => {
    const spendPsi = (spendCuFt / d.factor) * 100;
    const turnRawPsi = d.startPsi - spendPsi;
    return { ...d, spendPsi, turnRawPsi, turnPsi: roundUpTo(turnRawPsi, 100) };
  });
  const workingAta = ata(averageDepth);
  const teamCuFtPerMinute = workingSac * workingAta;
  return {
    rockBottom,
    divers: withTurn,
    limitingIndex,
    limitingName: limiting.name,
    matched: new Set(divers.map((d) => d.factor.toFixed(4) + d.startPsi)).size === 1,
    short: short.map((d) => d.name),
    spendCuFt,
    workingAta,
    cuFtPerMinute: teamCuFtPerMinute,
    minutesToTurn: spendCuFt > 0 ? Math.floor(spendCuFt / teamCuFtPerMinute + 1e-9) : 0,
  };
}

// ------------------------------------------------------------- Tank factor

export function convertPressure(psi: number, factor: number) {
  return (psi / 100) * factor;
}

export function convertVolume(cuFt: number, factor: number) {
  return (cuFt / factor) * 100;
}

// ------------------------------------------------------------- SAC rate

export type SacInputs = {
  factor: number;
  startPsi: number;
  endPsi: number;
  minutes: number;
  averageDepth: number;
};

/** Surface consumption rate from a real dive. */
export function measureSac({ factor, startPsi, endPsi, minutes, averageDepth }: SacInputs) {
  if (!finite(factor, startPsi, endPsi, minutes, averageDepth) || factor <= 0)
    throw new RangeError("Enter every field.");
  if (endPsi >= startPsi)
    throw new RangeError("End pressure has to be lower than start pressure.");
  if (endPsi < 0) throw new RangeError("End pressure can't be negative.");
  if (minutes <= 0) throw new RangeError("Enter a dive time above zero.");
  if (averageDepth < 0) throw new RangeError("Average depth can't be negative.");
  const usedPsi = startPsi - endPsi;
  const usedCuFt = convertPressure(usedPsi, factor);
  const perMinuteAtDepth = usedCuFt / minutes;
  const averageAta = ata(averageDepth);
  const sac = perMinuteAtDepth / averageAta;
  return {
    usedPsi,
    usedCuFt,
    perMinuteAtDepth,
    averageAta,
    sac,
    sacLiters: sac * CU_FT_TO_LITERS,
    sacPsi: usedPsi / minutes / averageAta,
  };
}

export type ConsumptionInputs = {
  sac: number;
  depth: number;
  factor: number;
  /** Pressure available to spend, e.g. start pressure minus turn pressure. */
  psi: number;
};

/** How fast gas goes at depth, and how long a given pressure lasts. */
export function consumptionAtDepth({ sac, depth, factor, psi }: ConsumptionInputs) {
  if (!finite(sac, depth, factor, psi) || sac <= 0 || factor <= 0)
    throw new RangeError("Enter a breathing rate above zero.");
  if (depth < 0) throw new RangeError("Depth can't be negative.");
  if (psi < 0) throw new RangeError("Pressure can't be negative.");
  const depthAta = ata(depth);
  const cuFtPerMinute = sac * depthAta;
  const psiPerMinute = (cuFtPerMinute / factor) * 100;
  return {
    depthAta,
    cuFtPerMinute,
    psiPerMinute,
    minutes: psi / psiPerMinute,
  };
}

// ------------------------------------------------------------- Nitrox and trimix

// NOAA single-exposure oxygen limits, minutes by PPO2.
export const noaaLimits = [
  [0.6, 720],
  [0.7, 570],
  [0.8, 450],
  [0.9, 360],
  [1.0, 300],
  [1.1, 240],
  [1.2, 210],
  [1.3, 180],
  [1.4, 150],
  [1.5, 120],
  [1.6, 45],
] as const;

/** The NOAA row at or above a PPO2. "none" at 0.5 or below; "over" above 1.6. */
export function noaaLimit(ppo2: number) {
  if (ppo2 <= 0.5 + 1e-9) return "none" as const;
  const row = noaaLimits.find(([p]) => ppo2 <= p + 1e-9);
  return row ? { ppo2: row[0], minutes: row[1] } : ("over" as const);
}

export const MIN_PPO2 = 0.16;

export type MixInputs = {
  /** Oxygen, percent. */
  o2: number;
  /** Helium, percent. */
  he: number;
  depth: number;
  maxPpo2: number;
  targetEnd: number;
  minutes: number;
};

export function analyzeMix({ o2, he, depth, maxPpo2, targetEnd, minutes }: MixInputs) {
  if (!finite(o2, he, depth, maxPpo2, targetEnd, minutes))
    throw new RangeError("Enter every field.");
  if (o2 <= 0 || o2 > 100) throw new RangeError("Oxygen has to be above 0% and at most 100%.");
  if (he < 0) throw new RangeError("Helium can't be negative.");
  if (o2 + he > 100) throw new RangeError("Oxygen and helium can't add up to more than 100%.");
  if (depth < 0) throw new RangeError("Depth can't be negative.");
  if (maxPpo2 <= 0) throw new RangeError("Enter a PPO2 limit above zero.");
  if (minutes < 0) throw new RangeError("Minutes can't be negative.");
  const fo2 = o2 / 100;
  const fhe = he / 100;
  const fn2 = 1 - fo2 - fhe;
  const depthAta = ata(depth);
  const ppo2 = depthAta * fo2;
  const modRaw = (maxPpo2 / fo2) * 33 - 33;
  const endRaw = (1 - fhe) * (depth + 33) - 33;
  const eadRaw = (fn2 * (depth + 33)) / 0.79 - 33;
  const bestRaw = maxPpo2 / depthAta;
  const heliumRaw = 1 - (targetEnd + 33) / (depth + 33);
  const limit = noaaLimit(ppo2);
  return {
    fo2,
    fhe,
    fn2,
    depthAta,
    ppo2,
    modRaw,
    // Rounded toward the safe side: MOD and best mix down, helium up.
    mod: Math.floor(modRaw + 1e-9),
    endRaw,
    end: Math.round(endRaw),
    eadRaw,
    ead: Math.round(eadRaw),
    bestRaw,
    bestO2: Math.min(100, Math.floor(bestRaw * 100 + 1e-9)),
    heliumRaw,
    heliumNeeded: Math.max(0, Math.ceil(heliumRaw * 100 - 1e-9)),
    overLimit: ppo2 > maxPpo2 + 1e-9,
    hypoxic: fo2 < MIN_PPO2,
    minDepth: fo2 < MIN_PPO2 ? Math.ceil((MIN_PPO2 / fo2) * 33 - 33 - 1e-9) : 0,
    limit,
    cns: typeof limit === "object" ? (minutes * 100) / limit.minutes : null,
  };
}
