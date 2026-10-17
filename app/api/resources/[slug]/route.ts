import { readFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { getResource, library, LIBRARY_COOKIE } from "@/lib/resources";

// Serves one PDF, or the whole library as a ZIP, to browsers that unlocked
// the library. Everyone else is sent to the library page to enter an email.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const item =
    slug === library.slug
      ? { ...library }
      : (() => {
          const r = getResource(slug);
          return r && { ...r, contentType: "application/pdf" };
        })();
  if (!item) return Response.json({ error: "Unknown download." }, { status: 404 });
  if ((await cookies()).get(LIBRARY_COOKIE)?.value !== "1")
    return Response.redirect(new URL("/tools#library", request.url), 303);
  const file = await readFile(
    path.join(process.cwd(), "resources/files", item.file),
  );
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": item.contentType,
      "Content-Disposition": `attachment; filename="${item.downloadName}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
