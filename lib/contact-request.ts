import { createHash, randomUUID } from "node:crypto";
import type { RelayInquiry, RelayResult } from "./contact-relay.ts";
import type { StoredContact } from "./contact-store.ts";

class InvalidForm extends Error {
  status: number;
  constructor(message: string, status = 400) { super(message); this.status = status; }
}

// Best-effort per-instance limiter; use a Vercel WAF rule for cross-instance limits.
const attempts = new Map<string, { count: number; expires: number }>();
function limit(email: string) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const key = createHash("sha256").update(email.toLowerCase()).digest("hex");
  const entry = attempts.get(key) || { count: 0, expires: now + 3_600_000 };
  if (entry.count >= 5 || attempts.size >= 10_000) throw new InvalidForm("Too many requests. Please try again later or email Jay.", 429);
  entry.count++;
  attempts.set(key, entry);
}

async function read(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) throw new InvalidForm("Please submit from this website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) throw new InvalidForm("Expected JSON.", 415);
  const reader = request.body?.getReader();
  if (!reader) throw new InvalidForm("Please complete the form.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 16_384) { await reader.cancel(); throw new InvalidForm("Your message is too long.", 413); }
    chunks.push(value);
  }
  let data: unknown;
  try { data = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new InvalidForm("Please check your form details."); }
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new InvalidForm("Please complete the form.");
  const body = data as Record<string, unknown>;
  if (body.website) throw new InvalidForm("Unable to submit this form.");
  return body;
}

function field(body: Record<string, unknown>, key: string, max: number, required = false) {
  const raw = body[key];
  if (raw !== undefined && typeof raw !== "string") throw new InvalidForm(`Please check ${key}.`);
  const value = typeof raw === "string" ? raw.trim() : "";
  if ((required && !value) || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) throw new InvalidForm(`Please check ${key}.`);
  return value;
}

export type ContactDeps = {
  save: (contact: StoredContact, reference: string, submittedAt: string) => Promise<void>;
  relay: (inquiry: RelayInquiry) => Promise<RelayResult>;
};

const CONFIRMATION_TEXT = (name: string) => [
  `Hi ${name.split(/\s+/)[0]},`,
  "",
  "Thanks for reaching out to Gardner Underwater. Your consultation request is in, and Jay will reply by email.",
  "",
  "Anything to add? Reply to this email and it will reach Jay.",
  "",
  "Gardner Underwater",
  "gardnerunderwater.com",
].join("\n");

// Same flow on every site's contact form:
// 1. save privately, 2. relay to the contact forms sheet (row + notification + confirmation).
// The visitor sees success when either step worked, so one outage never loses a request.
export async function handleContact(request: Request, deps: ContactDeps) {
  try {
    const body = await read(request);
    const name = field(body, "name", 120, true);
    const email = field(body, "email", 254, true);
    if (!/^[^\s@<>"\\]+@[^\s@<>"\\]+\.[^\s@<>"\\]+$/.test(email)) throw new InvalidForm("Please enter a valid email address.");
    const message = field(body, "message", 4000, true);
    const interest = field(body, "interest", 200) || "Dive training";
    const discovery = field(body, "discovery", 200, true);
    const experience = field(body, "experience", 100) || "Not specified";
    const sourcePath = field(body, "sourcePath", 500) || "/contact";
    limit(email);

    const reference = randomUUID();
    const submittedAt = new Date().toISOString();
    const saved = await deps.save({ name, email, message, interest, discovery, experience, sourcePath }, reference, submittedAt)
      .then(() => true, () => { console.error("Contact storage failed", reference); return false; });
    const relayed = await deps.relay({
      site: "gardnerunderwater.com",
      reference, submittedAt, name, email,
      subject: `Gardner Underwater consultation: ${interest}`,
      fields: [
        ["Experience", experience], ["Training interest", interest], ["Found us via", discovery],
        ["Referring path", sourcePath], ["Goals and availability", message],
      ],
      confirmation: process.env.CONTACT_CONFIRMATION_ENABLED === "false" ? undefined : {
        subject: "We received your consultation request",
        text: CONFIRMATION_TEXT(name),
        replyTo: process.env.CONTACT_REPLY_TO || "jay@gardnerunderwater.com",
        fromName: "Gardner Underwater",
      },
    }).then((result) => {
      if (!result.notified) console.error("Contact relayed but notification email failed", reference);
      return true;
    }, (error) => {
      // Never log form contents; the reference finds the saved copy.
      console.error("Contact relay failed", reference, error instanceof Error ? error.message : "");
      return false;
    });

    if (!saved && !relayed) throw new Error("Contact not saved or relayed");
    return Response.json({ success: true, reference }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof InvalidForm) return Response.json({ error: error.message }, { status: error.status });
    // No form content, email addresses, provider responses, or credentials logged.
    return Response.json({ error: "Your request was not sent. Please try again or email jay@gardnerunderwater.com." }, { status: 503 });
  }
}
