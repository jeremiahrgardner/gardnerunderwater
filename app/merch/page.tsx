import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Gardner Underwater gear — Fly the Black with GU scuba apparel. Eyes Open. Brain On. Unified Team.",
};

const tees = [
  {
    name: "GU LOGO TEE",
    price: "$30",
    tagline: "Eyes OPEN. Brain ON. Unified TEAM.",
    desc: "We train hard to dive easy. Wear your pride in your training as the hard work you've put in has led you to a new plateau in your diving journey. You are switched on, situationally aware, and diving as a team member.",
    bullets: [
      "Pre-shrunk fabric",
      "Shoulder-to-shoulder taping",
      "Sourced from the US",
      "This product is made on demand.",
    ],
    buyUrl:
      "https://gardnerunderwater.square.site/product/gu-logo-tee/5?cp=true&sa=true&sbp=false&q=false",
  },
  {
    name: "ALL SEEING EYE TEE",
    price: "$30",
    tagline: "Providence, the eye watches over the divers of humankind.",
    desc: "This 'All Seeing Eye' represents protection, health, and the re-establishment of order from chaos in reaching your excellence as a diver. Get in trim, switch that brain on, and get those fins up...the eye is always watching.",
    bullets: [
      "Pre-shrunk fabric",
      "Shoulder-to-shoulder taping",
      "Sourced from the US",
      "This product is made on demand.",
    ],
    buyUrl:
      "https://gardnerunderwater.square.site/product/all-seeing-eye-tee/6?cp=true&sa=true&sbp=false&q=false",
  },
  {
    name: "SHAKA TEE",
    price: "$30",
    tagline: "Universal underwater sign for, 'Bada&*!'",
    desc: "The shaka story about Hamana Kalili.",
    bullets: [
      "Pre-shrunk fabric",
      "Shoulder-to-shoulder taping",
      "Sourced from the US",
      "This product is made on demand.",
    ],
    buyUrl:
      "https://gardnerunderwater.square.site/product/shaka-tee/8?cp=true&sa=true&sbp=false&q=false",
  },
];

const hats = [
  {
    name: "GU LOGO SB",
    price: "$25",
    buyUrl:
      "https://gardnerunderwater.square.site/product/gu-logo-snapback/7?cp=true&sa=true&sbp=false&q=false",
  },
  {
    name: "ALL SEEING EYE SB",
    price: "$25",
    buyUrl:
      "https://gardnerunderwater.square.site/product/shaka-snapback/2?cp=true&sa=true&sbp=false&q=false",
  },
  {
    name: "SHAKA SB",
    price: "$25",
    buyUrl:
      "https://gardnerunderwater.square.site/product/all-seing-eye-snapback/1?cp=true&sa=true&sbp=false&q=false",
  },
];

export default function MerchPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--ink-dark)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>Gear &amp; Merch</span>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
            <ScrollReveal delay={80}>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(3rem, 9vw, 7.5rem)",
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.05em",
                  color: "var(--canvas)",
                  maxWidth: "14ch",
                  marginBottom: "0",
                }}
              >
                Fly The Black
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--ash)",
                  maxWidth: "54ch",
                  lineHeight: 1.8,
                  marginTop: "2rem",
                  fontWeight: 300,
                }}
              >
                As a pirate symbol, the black flag communicated to all that could see it that a pirate captain and his crew were powerful and unafraid to challenge the status quo. Fly your Black Flag with scuba apparel that shows you have your eyes open, your brain on, and your crew as a unified team.
              </p>
            </ScrollReveal>
          </div>

          {/* Decorative oversized ghost text */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "clamp(1rem, 5vw, 4rem)",
              bottom: "-2rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(10rem, 22vw, 20rem)",
              fontWeight: 800,
              color: "transparent",
              WebkitTextStroke: "1px var(--border)",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            M
          </div>
        </div>
      </section>

      {/* ── TEES ── */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background accent line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: "clamp(1.25rem, 4vw, 3rem)",
            width: "1px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          {/* Section header */}
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "3.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                T-Shirts
              </h2>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--dim)",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                }}
              >
                01
              </span>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {tees.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Image placeholder */}
                  <div
                    style={{
                      aspectRatio: "4 / 5",
                      position: "relative",
                      background: "var(--ink-dark)",
                      overflow: "hidden",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(160deg, var(--ink-dark) 0%, var(--paper) 100%)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--dim)",
                        }}
                      >
                        Apparel
                      </div>
                    </div>
                    {/* Price badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        right: "1.25rem",
                        background: "var(--gold)",
                        color: "var(--ink-dark)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "0.35rem 0.75rem",
                      }}
                    >
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "var(--canvas)",
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "var(--gold)",
                        marginBottom: "1.25rem",
                        lineHeight: 1.5,
                        letterSpacing: "0.05em",
                        fontStyle: "italic",
                      }}
                    >
                      {item.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ash)",
                        lineHeight: 1.75,
                        marginBottom: "1.25rem",
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <ul
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--dim)",
                        lineHeight: 1.7,
                        marginBottom: "1.5rem",
                        paddingLeft: "1.2rem",
                        listStyleType: "disc",
                      }}
                    >
                      {item.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: "0.25rem" }}>{b}</li>
                      ))}
                    </ul>
                    <a
                      href={item.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", alignSelf: "flex-start" }}
                    >
                      <span>Buy Now</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HATS ── */}
      <section className="section section--ink" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background accent line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "clamp(1.25rem, 4vw, 3rem)",
            width: "1px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
            pointerEvents: "none",
          }}
        />

        <div className="container">
          {/* Section header */}
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "3.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--dim)",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                }}
              >
                02
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Headwear
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {hats.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Image placeholder */}
                  <div
                    style={{
                      aspectRatio: "1 / 1",
                      position: "relative",
                      background: "var(--ink-dark)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(160deg, var(--paper) 0%, var(--ink-dark) 100%)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--dim)",
                        }}
                      >
                        Headwear
                      </div>
                    </div>
                    {/* Price badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        right: "1.25rem",
                        background: "var(--gold)",
                        color: "var(--ink-dark)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "0.35rem 0.75rem",
                      }}
                    >
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--canvas)",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.name}
                    </h3>
                    <a
                      href={item.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", alignSelf: "flex-start", marginTop: "auto" }}
                    >
                      <span>Buy Now</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Decorative oversized ghost text */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(6rem, 18vw, 14rem)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px var(--border)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
            whiteSpace: "nowrap",
          }}
        >
          ?
        </div>

        <div className="container--narrow" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 800,
                marginBottom: "1.25rem",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--canvas)",
              }}
            >
              Questions about sizing or availability?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p style={{ fontSize: "1rem", color: "var(--ash)", marginBottom: "2rem", lineHeight: 1.75, maxWidth: "44ch", margin: "0 auto 2rem" }}>
              Email Jay directly — he manages all merch orders personally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link href="/contact" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span>Contact Jay</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}