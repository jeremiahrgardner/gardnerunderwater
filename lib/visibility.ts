// Visibility estimate for the La Jolla sites from measured drivers. These are starting rules,
// not a calibrated model: every diver report stores the inputs and the estimate so the rules
// can be checked and tuned against what divers actually saw.

import type { Conditions } from "./conditions.ts";

export const MODEL_VERSION = "v1-2026-10";

export type VisInputs = {
  swellPeakFt: number | null; // largest combined wave height in the last 24 h
  swellPeakPeriodS: number | null;
  rainIn72h: number | null;
  chlorophyllUgL: number | null; // Scripps Pier, median of the last 6 h
};

export type VisFactor = { name: string; points: number; note: string };

export type VisEstimate = {
  score: number;
  rangeFt: [number, number] | null; // null when there's nothing to estimate from
  label: "Good" | "Fair" | "Poor" | "Unknown";
  factors: VisFactor[];
  missing: string[];
  model: string;
};

const BANDS: { range: [number, number]; label: VisEstimate["label"] }[] = [
  { range: [15, 30], label: "Good" },
  { range: [12, 20], label: "Good" },
  { range: [10, 15], label: "Fair" },
  { range: [6, 12], label: "Fair" },
  { range: [5, 10], label: "Poor" },
  { range: [0, 6], label: "Poor" },
];

export function swellPoints(ft: number, periodS: number | null): number {
  let p = ft < 2 ? 0 : ft < 3 ? 1 : ft < 4.5 ? 2 : ft < 6 ? 3 : 4;
  // Long-period swell reaches deeper and stirs more bottom than its height suggests.
  if (periodS !== null && periodS >= 14 && ft >= 2) p += 1;
  return p;
}

export function rainPoints(inches: number): number {
  return inches < 0.1 ? 0 : inches < 0.5 ? 1 : 2;
}

export function chlorophyllPoints(ugL: number): number {
  return ugL < 1 ? 0 : ugL < 3 ? 1 : ugL < 8 ? 2 : 3;
}

export function estimateVisibility(i: VisInputs): VisEstimate {
  const factors: VisFactor[] = [];
  const missing: string[] = [];

  if (i.swellPeakFt !== null) {
    const pts = swellPoints(i.swellPeakFt, i.swellPeakPeriodS);
    const ft = i.swellPeakFt;
    const size = ft < 2 ? "Small" : ft < 4.5 ? "Moderate" : ft < 6 ? "Large" : "Very large";
    const long = i.swellPeakPeriodS !== null && i.swellPeakPeriodS >= 14 && ft >= 2;
    factors.push({
      name: "Swell",
      points: pts,
      note: `${size}${long ? ", long period, so it reaches deeper" : ""}. Up to ${i.swellPeakFt} ft${i.swellPeakPeriodS !== null ? ` at ${i.swellPeakPeriodS} s` : ""} in the last 24 hours.`,
    });
  } else missing.push("swell");

  if (i.rainIn72h !== null) {
    const pts = rainPoints(i.rainIn72h);
    factors.push({
      name: "Rain",
      points: pts,
      note: i.rainIn72h > 0 ? `${i.rainIn72h.toFixed(2)} in over the last 72 hours.` : "None in the last 72 hours.",
    });
  } else missing.push("rain");

  if (i.chlorophyllUgL !== null) {
    const pts = chlorophyllPoints(i.chlorophyllUgL);
    const level = pts === 0 ? "Low" : pts === 1 ? "Moderate" : pts === 2 ? "High" : "Bloom levels";
    factors.push({ name: "Plankton", points: pts, note: `${level}. Chlorophyll ${i.chlorophyllUgL} µg/L at Scripps Pier.` });
  } else missing.push("plankton");

  // Swell is the main driver at these sites; without it there's no estimate.
  if (i.swellPeakFt === null) {
    return { score: 0, rangeFt: null, label: "Unknown", factors, missing, model: MODEL_VERSION };
  }
  const score = factors.reduce((s, f) => s + f.points, 0);
  const band = BANDS[Math.min(score, BANDS.length - 1)];
  return { score, rangeFt: band.range, label: band.label, factors, missing, model: MODEL_VERSION };
}

/** Pull the estimate's inputs out of the live conditions. */
export function visInputs(data: Conditions): VisInputs {
  return {
    swellPeakFt: data.swellPeak24h?.heightFt ?? data.swell?.waveHeightFt ?? null,
    swellPeakPeriodS: data.swellPeak24h?.periodS ?? data.swell?.dominantPeriodS ?? null,
    rainIn72h: data.rain && data.rain.hoursReported > 0 ? data.rain.inches : data.rain ? 0 : null,
    chlorophyllUgL: data.chlorophyll?.ugL ?? null,
  };
}

