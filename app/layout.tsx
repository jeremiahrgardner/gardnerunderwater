import type { Metadata } from "next";
import "./globals.css";
import "./editorial.css";
import { getArticles, isContentPreview } from "@/lib/articles";
import { site, jsonLd } from "@/lib/site";
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
  alternates: { types: { "application/rss+xml": "/articles/feed.xml" } },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": `${site.url}/#organization`,
                  name: site.name,
                  url: site.url,
                  logo: `${site.url}/logo.png`,
                  description: site.description,
                  telephone: site.phone,
                  email: site.email,
                  areaServed: { "@type": "City", name: "San Diego" },
                  founder: { "@id": `${site.url}/#jay-gardner` },
                  sameAs: [
                    "https://www.instagram.com/gardnerunderwater/",
                    "https://www.facebook.com/gardnerunderwater/",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": `${site.url}/#jay-gardner`,
                  name: "Jay Gardner",
                  jobTitle: "Scuba instructor and coach",
                  url: `${site.url}/about`,
                  image: `${site.url}/portrait.jpg`,
                  worksFor: { "@id": `${site.url}/#organization` },
                },
                {
                  "@type": "WebSite",
                  "@id": `${site.url}/#website`,
                  name: site.name,
                  url: site.url,
                  publisher: { "@id": `${site.url}/#organization` },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav showArticles={getArticles().length > 0 || isContentPreview} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
