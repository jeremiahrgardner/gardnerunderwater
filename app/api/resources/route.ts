import { cookies } from "next/headers";
import { LIBRARY_COOKIE } from "@/lib/resources";
import { KitError, SITE_TAG, subscribe } from "@/lib/kit";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ONE_YEAR = 60 * 60 * 24 * 365;

// Unlocks the downloads library: adds the reader to Kit, then remembers the
// unlock in this browser with a cookie. No accounts or passwords; on a new
// device the reader enters the same email again.
export async function POST(request: Request) {
  let body: { email?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL.test(email) || email.length > 254)
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  // Honeypot: real visitors never see or fill this field.
  const isBot = typeof body.website === "string" && body.website !== "";
  if (!isBot) {
    try {
      const saved = await subscribe(email, [SITE_TAG, `${SITE_TAG}: Downloads`]);
      if (!saved)
        console.warn("library_unlock: KIT_API_KEY is not set; signup not saved");
    } catch (error) {
      if (error instanceof KitError && error.status === 422)
        return Response.json(
          { error: "Please check your email address and try again." },
          { status: 400 },
        );
      // Never block access on a Kit outage; log it so the gap is visible.
      console.error("library_unlock: Kit signup failed", error);
    }
  }
  (await cookies()).set(LIBRARY_COOKIE, "1", {
    maxAge: ONE_YEAR,
    path: "/",
    sameSite: "lax",
    httpOnly: false, // read by the page to show the unlocked state
    secure: process.env.NODE_ENV === "production",
  });
  return Response.json({ ok: true });
}
