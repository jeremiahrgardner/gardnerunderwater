const address = /^[^\s@<>"\\]+@[^\s@<>"\\]+\.[^\s@<>"\\]+$/;

// Server-only delivery. Never use a visitor's address as From, or allow the
// browser to choose recipients. Reply-To makes Jay's reply reach the visitor.
export async function deliverContact(subject: string, message: string, replyTo: string) {
  const to = process.env.CONTACT_EMAIL_TO || "jay@gardnerunderwater.com";
  const from = process.env.CONTACT_EMAIL_FROM || "j@jeremiahgardner.com";
  if (![to, from, replyTo].every(value => address.test(value))) throw new Error("Invalid delivery configuration");
  if (process.env.CONTACT_EMAIL_PROVIDER === "resend") {
    if (!process.env.RESEND_API_KEY) throw new Error("Delivery not configured");
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text: message }),
      signal: AbortSignal.timeout(12_000),
    });
    const data = await result.json();
    if (!result.ok || typeof data.id !== "string" || !data.id) throw new Error("Delivery rejected");
    return;
  }
  if (process.env.CONTACT_EMAIL_PROVIDER && process.env.CONTACT_EMAIL_PROVIDER !== "gmail") throw new Error("Unknown provider");
  const { GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN } = process.env;
  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) throw new Error("Delivery not configured");
  const tokenResult = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: GMAIL_CLIENT_ID, client_secret: GMAIL_CLIENT_SECRET, refresh_token: GMAIL_REFRESH_TOKEN, grant_type: "refresh_token" }),
    signal: AbortSignal.timeout(12_000),
  });
  const token = await tokenResult.json();
  if (!tokenResult.ok || typeof token.access_token !== "string" || !token.access_token) throw new Error("Authentication failed");
  const mime = [
    `To: ${to}`, `From: ${from}`, `Reply-To: ${replyTo}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,
    "MIME-Version: 1.0", "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64", "",
    Buffer.from(message).toString("base64").match(/.{1,76}/g)?.join("\r\n") || "",
  ].join("\r\n");
  const result = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ raw: Buffer.from(mime).toString("base64url") }),
    signal: AbortSignal.timeout(12_000),
  });
  const data = await result.json();
  if (!result.ok || typeof data.id !== "string" || !data.id) throw new Error("Delivery rejected");
}
