import { track as vercelTrack } from "@vercel/analytics";
import { posthog } from "./posthog";

type Properties = Record<string, string>;

/** Sends a conversion event to Vercel Analytics and PostHog. Never pass form values. */
export function track(event: string, properties: Properties = {}) {
  vercelTrack(event, properties);
  if (posthog.__loaded) posthog.capture(event, properties);
}
