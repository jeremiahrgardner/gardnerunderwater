// Minimal Kit (kit.com) v4 client for resource downloads.
// Needs KIT_API_KEY in the environment. Docs: https://developers.kit.com/api-reference
const KIT = "https://api.kit.com/v4";
export const SITE_TAG = "Gardner Underwater";

const tagIds = new Map<string, number>();

async function kit(path: string, body: unknown, key: string) {
  const res = await fetch(`${KIT}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Kit-Api-Key": key },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new KitError(res.status, await res.text());
  return res.json();
}

export class KitError extends Error {
  constructor(
    public status: number,
    detail: string,
  ) {
    super(`Kit API ${status}: ${detail.slice(0, 300)}`);
  }
}

// Creating a tag that already exists returns the existing tag, so this is safe to repeat.
async function tagId(name: string, key: string) {
  const cached = tagIds.get(name);
  if (cached) return cached;
  const { tag } = await kit("/tags", { name }, key);
  tagIds.set(name, tag.id);
  return tag.id as number;
}

/** Adds (or updates) a subscriber and applies each tag. Returns false when no API key is set. */
export async function subscribe(email: string, tags: string[]) {
  const key = process.env.KIT_API_KEY;
  if (!key) return false;
  await kit("/subscribers", { email_address: email }, key);
  for (const name of tags) {
    const id = await tagId(name, key);
    await kit(`/tags/${id}/subscribers`, { email_address: email }, key);
  }
  return true;
}
