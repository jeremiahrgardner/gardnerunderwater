import type { Metadata } from "next";
import "./globals.css";
import "./editorial.css";
import { site } from "@/lib/site";
import { ConversionTracking } from "@/components/ConversionTracking";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : undefined,
  metadataBase: new URL(site.url),
  title: {
    default: "Scuba Instruction & Coaching | Gardner Underwater",
    template: "%s | Gardner Underwater",
  },
  description: site.description,
  alternates: { types: { "application/rss+xml": "/learn/feed.xml" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: "Two divers exploring an underwater cave as a team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/social.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav showArticles={true} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ConversionTracking />
        <Analytics />
      </body>
    </html>
  );
}
