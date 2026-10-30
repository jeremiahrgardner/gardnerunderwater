// Temporary: checks which public water-clarity feeds respond. Removed before merge.
export const dynamic = "force-dynamic";
const urls = [
  "https://erddap.sccoos.org/erddap/search/index.json?page=1&itemsPerPage=50&searchFor=scripps",
  "https://erddap.sensors.ioos.us/erddap/search/index.json?page=1&itemsPerPage=50&searchFor=scripps%20pier",
];
export async function GET(req: Request) {
  const sp = new URL(req.url).searchParams;
  const extra = sp.getAll("u");
  const g = sp.get("g");
  const out: Record<string, string> = {};
  for (const u of extra.length ? extra : urls) {
    try {
      const r = await fetch(u, { cache: "no-store" });
      let body = await r.text();
      if (g) body = body.split("\n").filter((l) => l.toLowerCase().includes(g)).join("\n");
      out[u] = `${r.status} ` + body.slice(0, 12000);
    } catch (e) {
      out[u] = "ERR " + String(e);
    }
  }
  return Response.json(out);
}
