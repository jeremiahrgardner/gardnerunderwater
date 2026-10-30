import { revalidatePath } from "next/cache";
import { getConditions } from "@/lib/conditions";
import { saveReport, validateReport } from "@/lib/vis-reports";
import { estimateVisibility, visInputs } from "@/lib/visibility";

// A diver's visibility report. Stored privately with the conditions and estimate at the time,
// so the estimate can be checked against what divers saw.
export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(req.url).host) {
    return Response.json({ ok: false, error: "Not allowed." }, { status: 403 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }
  const r = validateReport(body);
  if (r === "spam") return Response.json({ ok: true });
  if (typeof r === "string") return Response.json({ ok: false, error: r }, { status: 400 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ ok: false, error: "Reports aren't switched on yet." }, { status: 503 });
  }
  const inputs = visInputs(await getConditions());
  try {
    await saveReport(r, inputs, estimateVisibility(inputs));
  } catch {
    return Response.json({ ok: false, error: "Couldn't save that. Try again in a minute." }, { status: 502 });
  }
  revalidatePath("/conditions");
  revalidatePath(`/conditions/${r.site}`);
  return Response.json({ ok: true });
}
