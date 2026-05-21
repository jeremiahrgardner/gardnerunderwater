import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Gear and equipment recommended by Gardner Underwater. Quality dive gear for serious divers.",
};

const gear = [
  {
    name: "Primary Dive Light",
    desc: "High-output canister light — 2000+ lumens, reliable lock mechanism, suitable for cave and night diving.",
    tag: "Lighting",
    href: "#",
  },
  {
    name: "Backup Lights (Pair)",
    desc: "Compact backup lights with Goodman handles. The minimum for any overhead environment dive.",
    tag: "Lighting",
    href: "#",
  },
  {
    name: "Sidemount Harness System",
    desc: "Adjustable sidemount harness compatible with double tanks or independent cylinders. Contact Jay for sizing.",
    tag: "Harness",
    href: "#",
  },
  {
    name: "Drysuit Undergarment",
    desc: "Layered undergarment system for cold water diving. Breathable, quick-drying, sized for full range of motion.",
    tag: "Exposure",
    href: "#",
  },
  {
    name: "Technical Diving Reel",
    desc: "Heavy-duty dive reel with locking spool. Available in 200ft and 300ft configurations.",
    tag: "Tools",
    href: "#",
  },
  {
    name: "Slate & Wetnotes",
    desc: "Underwater slates and wetnotes for dive planning and communication. Standard equipment for any serious diver.",
    tag: "Tools",
    href: "#",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Gear &amp; Equipment</span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--white)",
              maxWidth: "14ch",
              marginBottom: "1.5rem",
            }}
          >
            Gear recommended for serious divers.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "52ch",
              lineHeight: 1.75,
            }}
          >
            Not a full retail shop — a curated selection of gear that Jay uses, trusts, and recommends.
            All available via inquiry or through the links below.
          </p>
        </div>
      </section>

      {/* ── Gear grid ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {gear.map((item) => (
              <div key={item.name} className="card">
                <div className="card-body">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.desc}
                  </p>
                  <a
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      transition: "gap 0.2s",
                    }}
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Need gear advice?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Contact Jay before buying — he will tell you what you actually need vs. what the industry
            wants you to buy.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Ask Jay
          </Link>
        </div>
      </section>
    </>
  );
}