import { relayInquiry } from "@/lib/contact-relay";
import { handleContact } from "@/lib/contact-request";
import { saveContact } from "@/lib/contact-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleContact(request, { save: saveContact, relay: (inquiry) => relayInquiry(inquiry) });
}
