import posthog from "posthog-js";

// Events are tagged with `site` so this domain can be filtered on its own in
// PostHog. Gardner Underwater is deliberately standalone: no visitor IDs are
// passed to or accepted from other domains.
const SITE = "gardnerunderwater.com";

let started = false;

/** Starts PostHog once. Does nothing until NEXT_PUBLIC_POSTHOG_KEY is set. */
export function initPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (started || !key || typeof window === "undefined") return;
  started = true;
  posthog.init(key, {
    api_host: "/ingest", // proxied to PostHog US cloud in next.config
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
    person_profiles: "identified_only",
  });
  posthog.register({ site: SITE });
}

export { posthog };
