import { list, put } from "@vercel/blob";
import { diveSites } from "./dive-sites.ts";
import type { VisEstimate, VisInputs } from "./visibility.ts";

// Each report is one private file. The site, date and visibility live in the file name,
// so one list call reads every recent report without opening the files.
// vis/<site>/<YYYY-MM-DD>_<feet>ft_<epoch ms>_<random>.json

export type VisReport = { site: string; date: string; feet: number; submittedAt: string };

export type VisReportInput = {
  site: string;
  date: string;
  feet: number;
  depthFt: number | null;
  notes: string;
};

const NAME = /^vis\/([a-z0-9-]+)\/(\d{4}-\d{2}-\d{2})_(\d{1,3})ft_(\d+)_[a-z0-9]+\.json$/;

export function parseReportPath(pathname: string): VisReport | null {
  const m = NAME.exec(pathname);
  if (!m) return null;
  return { site: m[1], date: m[2], feet: Number(m[3]), submittedAt: new Date(Number(m[4])).toISOString() };
}

/** San Diego calendar date, YYYY-MM-DD. */
export function sdDate(d = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

export function validateReport(body: unknown, now = new Date()): VisReportInput | string {
  const b = (body ?? {}) as Record<string, unknown>;
  if (typeof b.website === "string" && b.website) return "spam";
  const site = String(b.site ?? "");
  if (!diveSites.some((s) => s.slug === site)) return "Pick a site.";
  const date = String(b.date ?? "");
  const today = sdDate(now);
  const earliest = sdDate(new Date(now.getTime() - 3 * 86400000));
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today || date < earliest) return "Pick the date you dived, within the last three days.";
  const feet = Number(b.feet);
  if (!Number.isInteger(feet) || feet < 0 || feet > 100) return "Visibility should be a whole number of feet, 0 to 100.";
  const depthRaw = b.depthFt === "" || b.depthFt === undefined || b.depthFt === null ? null : Number(b.depthFt);
  if (depthRaw !== null && (!Number.isFinite(depthRaw) || depthRaw < 0 || depthRaw > 400)) return "Depth should be in feet.";
  const notes = String(b.notes ?? "").slice(0, 280);
  return { site, date, feet, depthFt: depthRaw === null ? null : Math.round(depthRaw), notes };
}

export async function saveReport(r: VisReportInput, inputs: VisInputs, estimate: VisEstimate): Promise<void> {
  const rand = Math.random().toString(36).slice(2, 8);
  const pathname = `vis/${r.site}/${r.date}_${r.feet}ft_${Date.now()}_${rand}.json`;
  const body = JSON.stringify({ ...r, submittedAt: new Date().toISOString(), inputs, estimate });
  await put(pathname, body, { access: "private", contentType: "application/json", addRandomSuffix: false });
}

/** Reports for dives in the last `days` days, newest first. Empty if storage isn't configured. */
export async function recentReports(days = 3, now = new Date()): Promise<VisReport[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  const earliest = sdDate(new Date(now.getTime() - days * 86400000));
  const out: VisReport[] = [];
  try {
    let cursor: string | undefined;
    do {
      const page = await list({ prefix: "vis/", cursor, limit: 1000 });
      for (const b of page.blobs) {
        const r = parseReportPath(b.pathname);
        if (r && r.date >= earliest) out.push(r);
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
  } catch {
    return [];
  }
  return out.sort((a, b) => (a.date === b.date ? b.submittedAt.localeCompare(a.submittedAt) : b.date.localeCompare(a.date)));
}

export function summarize(reports: VisReport[]): { count: number; medianFt: number; latest: VisReport } | null {
  if (!reports.length) return null;
  const ft = reports.map((r) => r.feet).sort((a, b) => a - b);
  const mid = Math.floor(ft.length / 2);
  const medianFt = ft.length % 2 ? ft[mid] : Math.round((ft[mid - 1] + ft[mid]) / 2);
  return { count: reports.length, medianFt, latest: reports[0] };
}
