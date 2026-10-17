// Downloadable resources. One email unlocks the whole library: the unlock
// route (app/api/resources/route.ts) adds the reader to Kit and sets the
// gu_library cookie, and the file route (app/api/resources/[slug]/route.ts)
// serves files from resources/files (not public/) to browsers with that cookie.
// Rebuild the PDFs with scripts/resources/build_pdfs.py and print_pdfs.mjs,
// then the ZIP with scripts/resources/bundle.py.
export type Resource = {
  slug: string;
  title: string;
  description: string;
  file: string;
  downloadName: string;
  pages: number;
};

export const LIBRARY_COOKIE = "gu_library";

export const library = {
  slug: "all",
  file: "dive-planning-library.zip",
  downloadName: "Gardner-Underwater-Dive-Planning-Library.zip",
  contentType: "application/zip",
};

export const resources: Resource[] = [
  {
    slug: "gas-planning-worksheet",
    title: "Gas Planning Worksheet",
    description:
      "A fill-in sheet for rock bottom, usable gas, turn pressure, gas needed, bottom time and SAC rate, with a team table and a worked example.",
    file: "gas-planning-worksheet.pdf",
    downloadName: "Gardner-Underwater-Gas-Planning-Worksheet.pdf",
    pages: 2,
  },
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
