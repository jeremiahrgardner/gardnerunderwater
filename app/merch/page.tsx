import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Gardner Underwater gear — UTD-logo shirts, patches, and stickers. Represent the unified team.",
};

const merch = [
  {
    name: "UTD Logo Tee — Black",
    desc: "Standard Unisex fit. Gardner Underwater / UTD logo on left chest, small wordmark on back.",
    tag: "Apparel",
    price: "$30",
    image: "/portrait.jpg",
  },
  {
    name: "UTD Logo Tee — White",
    desc: "Standard Unisex fit. Same as the black — choose based on your wardrobe preferences.",
    tag: "Apparel",
    price: "$30",
    image: "/portrait.jpg",
  },
  {
    name: "UTD Logo Hoodie",
    desc: "Heavyweight cotton blend. Warm enough for a long surface interval or a cold boat ride.",
    tag: "Apparel",
    price: "$55",
    image: "/portrait.jpg",
  },
  {
    name: "UTD Patch Set",
    desc: "Two Moray-style Moray patches + one Gardner Underwater wordmark patch. Sew onto your favorite jacket.",
    tag: "Patches",
    price: "$15",
    image: "/portrait.jpg",
  },
  {
    name: "Unified Team Sticker Pack",
    desc: "Five stickers: Eyes Open, Brain On, Unified Team, UTD logo, Gardner Underwater wordmark.",
    tag: "Stickers",
    price: "$8",
    image: "/portrait.jpg",
  },
  {
    name: "Training Log / Dive Planner",
    desc: "50-page dive planning log with gas management tables, deco planners, and note pages. Designed for serious divers.",
    tag: "Tools",
    price: "$20",
    image: "/portrait.jpg",
  },
];

export default function MerchPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Gear &amp; Merch</span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--white)",
              maxWidth: "16ch",
              marginBottom: "1.5rem",
            }}
          >
            Represent the unified team.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "52ch",
              lineHeight: 1.75,
            }}
          >
            Gear for serious divers. All items ship within 3–5 business days. Contact Jay for
            bulk orders or custom embroidery.
          </p>
        </div>
      </section>

      {/* ── Merch grid ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {merch.map((item) => (
              <div key={item.name} className="card">
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    position: "relative",
                    background: "var(--navy)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, var(--navy) 0%, var(--abyss) 100%)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                      }}
                    >
                      {item.tag}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.price}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.desc}
                  </p>
                  <a
                    href={`mailto:jay@gardnerunderwater.com?subject=Merch%20Order:%20${encodeURIComponent(item.name)}`}
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
                    Order this item →
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
            Questions about sizing or availability?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Email Jay directly — he manages all merch orders personally.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Jay
          </Link>
        </div>
      </section>
    </>
  );
}