import { readFile } from "node:fs/promises";
import path from "node:path";
import { getResource } from "@/lib/resources";
import { KitError, SITE_TAG, subscribe } from "@/lib/kit";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Email-gated download: adds the reader to Kit with the site tag, then returns the PDF.
export async function POST(request: Request) {
  let body: { email?: unknown; resource?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const resource =
    typeof body.resource === "string" ? getResource(body.resource) : undefined;
  if (!resource)
    return Response.json({ error: "Unknown download." }, { status: 404 });
  if (!EMAIL.test(email) || email.length > 254)
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  // Honeypot: real visitors never see or fill this field.
  const isBot = typeof body.website === "string" && body.website !== "";
  if (!isBot) {
    try {
      const saved = await subscribe(email, [
        SITE_TAG,
        `${SITE_TAG}: ${resource.title}`,
      ]);
      if (!saved)
        console.warn("resource_download: KIT_API_KEY is not set; signup not saved");
    } catch (error) {
      if (error instanceof KitError && error.status === 422)
        return Response.json(
          { error: "Please check your email address and try again." },
          { status: 400 },
        );
      // Never block the download on a Kit outage; log it so the gap is visible.
      console.error("resource_download: Kit signup failed", error);
    }
  }
  const file = await readFile(
    path.join(process.cwd(), "resources/files", resource.file),
  );
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resource.downloadName}"`,
      "Cache-Control": "no-store",
    },
  });
}
