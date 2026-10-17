// Downloadable resources. Files live in resources/files (not public/), so the
// only way to get one is through the email form, which serves it from
// app/api/resources/route.ts. Rebuild the Gardner PDFs with
// scripts/resources/build_pdfs.py and print_pdfs.mjs.
export type Resource = {
  slug: string;
  title: string;
  description: string;
  file: string;
  downloadName: string;
  pages: number;
  credit?: string;
};

export const resources: Resource[] = [
  {
    slug: "tank-factors",
    title: "Tank Factors and Gas Consumption",
    description:
      "Tank factors for singles and doubles, psi per minute at every depth, and specs for 88 steel and aluminum cylinders.",
    file: "tank-factors.pdf",
    downloadName: "Gardner-Underwater-Tank-Factors.pdf",
    pages: 6,
  },
  {
    slug: "gas-consumption-table",
    title: "Gas Consumption Table",
    description:
      "How depth multiplies gas use, how long a cylinder lasts at each depth, and an AL80 gauge-over-time table in bar and psi.",
    file: "gas-consumption-table.pdf",
    downloadName: "Gardner-Underwater-Gas-Consumption-Table.pdf",
    pages: 3,
  },
  {
    slug: "gas-math-formulas",
    title: "Formulas for Gas Math",
    description:
      "ATA, MOD, best mix, tank factor, END, EAD, partial pressure, SAC rate and the CNS clock, each with a worked example.",
    file: "gas-math-formulas.pdf",
    downloadName: "Gardner-Underwater-Gas-Math-Formulas.pdf",
    pages: 2,
  },
  {
    slug: "utd-gas-planning-worksheet",
    title: "UTD Gas Planning Worksheet",
    description:
      "UTD's fill-in worksheet for rock bottom, usable gas, gas needed, bottom time and SAC rate, in metric and imperial.",
    file: "utd-gas-planning-worksheet.pdf",
    downloadName: "UTD-Gas-Planning-Worksheet.pdf",
    pages: 3,
    credit: "© 2020 UTD Unified Team Diving. Shared with permission.",
  },
  {
    slug: "dive-log",
    title: "Dive Log",
    description:
      "A printable log built for improvement: depth, time, pressure and SAC rate, weighting, team, and what you'll work on next.",
    file: "dive-log.pdf",
    downloadName: "Gardner-Underwater-Dive-Log.pdf",
    pages: 1,
  },
  {
    slug: "emergency-action-plan",
    title: "Dive Emergency Action Plan",
    description:
      "Fill in your site's oxygen, AED, phone numbers and nearest chamber before you dive, then work through an emergency step by step.",
    file: "emergency-action-plan.pdf",
    downloadName: "Gardner-Underwater-Emergency-Action-Plan.pdf",
    pages: 3,
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
