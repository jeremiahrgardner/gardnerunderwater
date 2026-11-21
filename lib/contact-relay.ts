// Hands a saved inquiry to the contact forms receiver (a Google Apps Script
// kept in the jeremiahgardner.com repo, integrations/contact-receiver). The
// receiver adds a row to the contact forms sheet, emails the notification and
// sends the visitor's confirmation. jeremiahgardner.com uses the same module.

export type RelayConfirmation = { subject: string; text: string; replyTo?: string; fromName?: string };

export type RelayInquiry = {
  site: 'jeremiahgardner.com' | 'gardnerunderwater.com';
  reference: string;
  submittedAt: string;
  name: string;
  email: string;
  subject: string;
  /** Label/value pairs, in display order. Plain text only. */
  fields: [string, string][];
  confirmation?: RelayConfirmation;
};

export type RelayResult = { notified: boolean; confirmed: boolean | null };

export function isRelayConfigured(): boolean {
  return Boolean(process.env.CONTACT_RELAY_URL && process.env.CONTACT_RELAY_SECRET);
}

const TIMEOUT_MS = 20_000;

/** Resolves once the receiver confirms the row is saved. Throws otherwise. */
export async function relayInquiry(inquiry: RelayInquiry, fetchImpl: typeof fetch = fetch): Promise<RelayResult> {
  const url = process.env.CONTACT_RELAY_URL;
  const secret = process.env.CONTACT_RELAY_SECRET;
  if (!url || !secret) throw new Error('Contact relay not configured');
  if (!url.startsWith('https://script.google.com/')) throw new Error('Contact relay URL must be an Apps Script web app');

  // Apps Script answers 200 even on failure and reports it as { ok: false }.
  const response = await fetchImpl(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...inquiry, secret }),
    redirect: 'follow',
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`Contact relay responded ${response.status}`);
  const data = await response.json().catch(() => null) as { ok?: boolean; error?: string; notified?: boolean; confirmed?: boolean | null } | null;
  if (!data || data.ok !== true) throw new Error(`Contact relay rejected inquiry: ${data?.error || 'unreadable response'}`);
  return { notified: data.notified !== false, confirmed: data.confirmed ?? null };
}
