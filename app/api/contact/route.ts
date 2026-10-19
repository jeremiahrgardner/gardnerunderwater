import { deliverContact } from "@/lib/contact-delivery";
import { handleContact } from "@/lib/contact-request";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleContact(request, deliverContact);
}
