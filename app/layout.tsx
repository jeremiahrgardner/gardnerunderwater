import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gardner Underwater",
    template: "%s | Gardner Underwater",
  },
  description:
    "Training designed to advance your skills, your control, and your brain. Scuba instruction for dedicated divers committed to growth.",
  keywords: [
    "scuba diving",
    "dive training",
    "technical diving",
    "UTD",
    "San Diego dive instructor",
    "cave diving",
    "CCR diving",
  ],
  openGraph: {
    type: "website",
    siteName: "Gardner Underwater",
    title: "Gardner Underwater",
    description:
      "Training designed to advance your skills, your control, and your brain.",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}