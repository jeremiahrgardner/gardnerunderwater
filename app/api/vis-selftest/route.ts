// Temporary, preview only: proves a private report can be written, listed and deleted. Removed before merge.
import { del, list, put } from "@vercel/blob";
export const dynamic = "force-dynamic";
export async function GET() {
  if (process.env.VERCEL_ENV !== "preview") return new Response("no", { status: 404 });
  const path = `selftest/${Date.now()}.json`;
  const steps: string[] = [];
  try {
    const b = await put(path, JSON.stringify({ t: 1 }), { access: "private", contentType: "application/json", addRandomSuffix: false });
    steps.push("put " + b.pathname);
    const l = await list({ prefix: "selftest/" });
    steps.push("list " + l.blobs.map((x) => x.pathname).join(","));
    await del(b.url);
    steps.push("deleted");
  } catch (e) {
    steps.push("ERR " + String(e));
  }
  return Response.json(steps);
}
