import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // PostHog's API paths end in a slash, so Next's automatic trailing-slash
  // redirect is switched off and re-added below for every path except /ingest.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    // First-party proxy for PostHog (US cloud) so ad blockers don't drop events.
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/array/:path*", destination: "https://us-assets.i.posthog.com/array/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
  async redirects() {
    return [
      { source: "/:path((?!ingest(?:/|$)).+)/", destination: "/:path", permanent: true },
      { source: "/articles", destination: "/learn", permanent: true },
      {
        source: "/articles/feed.xml",
        destination: "/learn/feed.xml",
        permanent: true,
      },
      {
        source: "/articles/:slug",
        destination: "/learn/:slug",
        permanent: true,
      },
      {
        source: "/courses/doubles-backmount-or-sidemount",
        destination: "/courses/doubles",
        permanent: true,
      },
      {
        source: "/courses/open-water-diver-recreational-1",
        destination: "/courses/open-water-rec-1",
        permanent: true,
      },
      {
        source: "/courses/recreational-2-advanced-open-water",
        destination: "/courses/rec-2-advanced-open-water",
        permanent: true,
      },
      {
        source: "/courses/smb-surface-marker-buoy-extension",
        destination: "/courses/smb-extension",
        permanent: true,
      },
      {
        source: "/courses/propulsion-and-or-back-kick-extension",
        destination: "/courses/propulsion-back-kick-extension",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
