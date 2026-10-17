// Common scuba cylinders: rated volume (cu ft) at rated pressure (psi). These
// match the quick-reference table in the Tank Factors PDF
// (scripts/resources/build_pdfs.py, QUICK). Doubles are two of the same cylinder.
export type Cylinder = {
  id: string;
  name: string;
  ratedVolume: number;
  ratedPressure: number;
};

export const cylinderGroups: { group: string; cylinders: Cylinder[] }[] = [
  {
    group: "Aluminum",
    cylinders: [
      { id: "AL40", name: "AL40", ratedVolume: 40, ratedPressure: 3000 },
      { id: "AL80", name: "AL80", ratedVolume: 77.4, ratedPressure: 3000 },
    ],
  },
  {
    group: "Steel, high pressure",
    cylinders: [
      { id: "HP80", name: "HP80", ratedVolume: 80, ratedPressure: 3442 },
      { id: "HP100", name: "HP100", ratedVolume: 100, ratedPressure: 3442 },
      { id: "HP117", name: "HP117", ratedVolume: 117, ratedPressure: 3442 },
      { id: "HP120", name: "HP120", ratedVolume: 120, ratedPressure: 3442 },
      { id: "HP133", name: "HP133", ratedVolume: 133, ratedPressure: 3442 },
    ],
  },
  {
    group: "Steel, low pressure",
    cylinders: [
      { id: "LP50", name: "LP50", ratedVolume: 50, ratedPressure: 2640 },
      { id: "LP85", name: "LP85", ratedVolume: 85, ratedPressure: 2640 },
      { id: "LP95", name: "LP95", ratedVolume: 95, ratedPressure: 2640 },
      { id: "LP104", name: "LP104", ratedVolume: 104, ratedPressure: 2640 },
      { id: "LP108", name: "LP108", ratedVolume: 108, ratedPressure: 2640 },
    ],
  },
];

export const allCylinders = cylinderGroups.flatMap((g) => g.cylinders);

/** Cylinders commonly set up as doubles. */
export const doublesCylinders = allCylinders.filter((c) => c.id !== "AL40");

export function getCylinder(id: string) {
  return allCylinders.find((c) => c.id === id);
}

/** Cubic feet of gas in every 100 psi. */
export function tankFactor(
  ratedVolume: number,
  ratedPressure: number,
  doubles = false,
) {
  return (ratedVolume / ratedPressure) * 100 * (doubles ? 2 : 1);
}

/** The tank factor rounded down to one decimal for mental math, so the rounding stays on the safe side. */
export function mentalFactor(factor: number) {
  return Math.floor(factor * 10 + 1e-9) / 10;
}

/**
 * A cylinder choice from the tools' select: "AL80", "2xHP100" (doubles) or
 * "custom" (rated volume and pressure entered by hand).
 */
export type CylinderSpec = {
  label: string;
  ratedVolume: number;
  ratedPressure: number;
  doubles: boolean;
};

export function resolveCylinder(
  choice: string,
  custom?: { ratedVolume: number; ratedPressure: number; doubles: boolean },
): CylinderSpec | undefined {
  if (choice === "custom") {
    if (!custom) return undefined;
    return {
      label: custom.doubles ? "Custom doubles" : "Custom cylinder",
      ...custom,
    };
  }
  const doubles = choice.startsWith("2x");
  const cylinder = getCylinder(doubles ? choice.slice(2) : choice);
  if (!cylinder) return undefined;
  return {
    label: doubles ? `Double ${cylinder.name}s` : cylinder.name,
    ratedVolume: cylinder.ratedVolume,
    ratedPressure: cylinder.ratedPressure,
    doubles,
  };
}
