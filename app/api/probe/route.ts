// Temporary: checks which public water-clarity feeds respond. Removed before merge.
export const dynamic = "force-dynamic";
const urls = [
  "https://erddap.sccoos.org/erddap/search/index.json?page=1&itemsPerPage=50&searchFor=scripps",
  "https://erddap.sensors.ioos.us/erddap/search/index.json?page=1&itemsPerPage=50&searchFor=scripps%20pier",
];
export async function GET(req: Request) {
  const extra = new URL(req.url).searchParams.getAll("u");
  const out: Record<string, string> = {};
  for (const u of [...urls, ...extra]) {
    try {
      const r = await fetch(u, { cache: "no-store" });
      out[u] = `${r.status} ` + (await r.text()).slice(0, 6000);
    } catch (e) {
      out[u] = "ERR " + String(e);
    }
  }
  return Response.json(out);
}
