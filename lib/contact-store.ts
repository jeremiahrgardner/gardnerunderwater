import { put } from "@vercel/blob";

// Contact requests are saved privately before anything else, so an email or
// receiver outage never loses one. One file per request:
// inquiries/<YYYY-MM-DD>/<reference>.json (the vis reports live under vis/).

export function isContactStorageConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export type StoredContact = {
  name: string;
  email: string;
  message: string;
  interest: string;
  discovery: string;
  experience: string;
  sourcePath: string;
};

export async function saveContact(contact: StoredContact, reference: string, submittedAt: string): Promise<void> {
  if (!isContactStorageConfigured()) throw new Error("Contact storage unavailable");
  const pathname = `inquiries/${submittedAt.slice(0, 10)}/${reference}.json`;
  const stored = await put(pathname, JSON.stringify({ ...contact, reference, submittedAt }), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });
  if (stored.pathname !== pathname) throw new Error("Contact storage did not confirm receipt");
}
