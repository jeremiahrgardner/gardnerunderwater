// Human check for contact forms (same file on every site except deadreckon.io).
// Cloudflare Turnstile proves a person filled the form; a short time trap catches
// scripts that submit instantly. With TURNSTILE_SECRET_KEY unset, nothing changes.
//
// Results:
//   { ok: true, verified: true }   passed: handle normally
//   { ok: true, verified: false }  Cloudflare unreachable or misconfigured: keep the
//                                  inquiry, but send no confirmation email
//   { ok: false }                  failed: reject the submission

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
export const MIN_FORM_MS = 2500;

export type HumanResult = { ok: true; verified: boolean } | { ok: false };

export async function checkHuman(
  body: Record<string, unknown>,
  request: Request,
  fetcher: typeof fetch = fetch,
): Promise<HumanResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true, verified: true };

  const token = typeof body["cf-turnstile-response"] === "string" ? body["cf-turnstile-response"] : "";
  const elapsed = typeof body.formMs === "number" ? body.formMs : 0;
  if (!token || token.length > 2048 || elapsed < MIN_FORM_MS) return { ok: false };

  try {
    const form = new URLSearchParams({ secret, response: token });
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (ip) form.set("remoteip", ip);
    const response = await fetcher(VERIFY_URL, { method: "POST", body: form, signal: AbortSignal.timeout(5000) });
    const data = (await response.json()) as { success?: boolean; "error-codes"?: string[] };
    if (data.success === true) return { ok: true, verified: true };
    const codes = data["error-codes"] ?? [];
    // Our own setup problem or a Cloudflare fault: never lose a real inquiry over it.
    if (codes.some((code) => code === "internal-error" || code.includes("secret"))) {
      console.error("Turnstile check unavailable:", codes.join(","));
      return { ok: true, verified: false };
    }
    return { ok: false };
  } catch {
    console.error("Turnstile check unavailable: request failed");
    return { ok: true, verified: false };
  }
}
