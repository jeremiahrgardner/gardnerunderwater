import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Gardner Underwater 'Save A Course' shop: equipment rentals, tank rentals, service, and convenience items for enrolled students.",
};

export default function ShopPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Gear &amp; Rentals</span>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
            }}
          >
            <ScrollReveal delay={80}>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--white)",
                  marginBottom: "0",
                  letterSpacing: "-0.03em",
                  maxWidth: "20ch",
                }}
              >
                THE SHOP
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginTop: "1.5rem",
                  marginBottom: "0",
                }}
              >
                &ldquo;Save A Course&rdquo; Shop
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted)",
                  maxWidth: "58ch",
                  lineHeight: 1.85,
                  marginTop: "2rem",
                  fontWeight: 300,
                }}
              >
                At Gardner Underwater HQ there is a small &ldquo;Save A Course&rdquo; retail offering that
                includes items you may need to rent or purchase during your course. This is offered as a
                convenience to students enrolled in a class, it is not a full service retail operation.
              </p>
            </ScrollReveal>
          </div>

          {/* Decorative oversized number */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "clamp(1rem, 5vw, 4rem)",
              bottom: "-1rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(8rem, 18vw, 16rem)",
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
            01
          </div>
        </div>
      </section>

      {/* ── Equipment Rentals & Service ── */}
      <section className="section section--dark" style={{ position: "relative", overflow: "hidden" }}>
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
          }}
        />

        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.5rem",
                marginBottom: "4rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  paddingTop: "0.3rem",
                }}
              >
                02
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
                  fontWeight: 400,
                  color: "var(--muted)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Equipment Rentals &amp; Service
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            {/* Rental Kits */}
            <ScrollReveal delay={80}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    marginBottom: "2rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Rental Kits (Per Day)
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    ["DIR Singles Backplate & Wing", "$20"],
                    ["DIR Doubles Backplate & Wing", "$20"],
                    [
                      "DIR Singles Regulator Kit (1x First Stage, Longhose, Necklace, SPG, Power Inflator, Drysuit Inflator)",
                      "$20",
                    ],
                    [
                      "DIR Doubles Regulator Kit (2x First Stages, Longhose, Necklace, SPG, Power Inflator, Drysuit Inflator)",
                      "$30",
                    ],
                    ["DIR Deco/Stage Regulator Kit (1x First Stage, 36\" Deco/Stage Regulator, SPG)", "$15"],
                    ["Weights with Weight Belt", "$10"],
                  ].map(([item, price], i, arr) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        borderBottom: i < arr.length - 1 ? "1px solid var(--border-dim)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                          color: "var(--muted)",
                          fontWeight: 300,
                          lineHeight: 1.5,
                          paddingRight: "1rem",
                        }}
                      >
                        {item}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "clamp(0.78rem, 0.9vw, 0.85rem)",
                          color: "var(--gold)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          fontWeight: 500,
                        }}
                      >
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Rental Tanks & Service */}
            <ScrollReveal delay={160}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    marginBottom: "2rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Rental Tanks (Gas Not Included)
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    ["Double Backmount Cylinders (AL80, HP100, LP85)", "$20"],
                    ["Double Sidemount (L/R Valves) Cylinders (AL80)", "$20"],
                    ["Single Cylinder (AL80)", "$10"],
                    ["Stage Cylinder with Rigging (AL80)", "$10"],
                    ["Deco Cylinder with Rigging (AL40)", "$10"],
                    ["Suit Inflation Cylinder (AL6)", "$5"],
                  ].map(([item, price], i, arr) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        borderBottom: i < arr.length - 1 ? "1px solid var(--border-dim)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                          color: "var(--muted)",
                          fontWeight: 300,
                          lineHeight: 1.5,
                          paddingRight: "1rem",
                        }}
                      >
                        {item}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "clamp(0.78rem, 0.9vw, 0.85rem)",
                          color: "var(--gold)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          fontWeight: 500,
                        }}
                      >
                        {price}
                      </span>
                    </div>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    marginTop: "3rem",
                    marginBottom: "2rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Service
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    ["Cylinder Visual Inspection (VIP)", "$10"],
                    ["Regulator Service (HOG)", "$45 + parts"],
                  ].map(([item, price], i, arr) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        borderBottom: i < arr.length - 1 ? "1px solid var(--border-dim)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                          color: "var(--muted)",
                          fontWeight: 300,
                          lineHeight: 1.5,
                          paddingRight: "1rem",
                        }}
                      >
                        {item}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "clamp(0.78rem, 0.9vw, 0.85rem)",
                          color: "var(--gold)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          fontWeight: 500,
                        }}
                      >
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Save A Course Shop ── */}
      <section className="section" style={{ position: "relative" }}>
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.5rem",
                marginBottom: "4rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  paddingTop: "0.3rem",
                }}
              >
                03
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
                  fontWeight: 400,
                  color: "var(--muted)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                &ldquo;Save A Course&rdquo; Shop
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.1rem, 1.5vw, 1.2rem)",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "3rem",
              }}
            >
              Some of the items we stock include:
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "3rem",
            }}
          >
            {[
              { cat: "Hardware", items: "Bolt Snaps, D-rings, Triglides, Cylinder Clamps, etc." },
              { cat: "Harness", items: "Webbing, Buckles, EPDM Bands, Backplate Hardware, etc." },
              { cat: "Consumables", items: "O-rings, Bungee, Cave Line, etc." },
              { cat: "Apparel", items: "Hats, Stickers, etc." },
            ].map((col, i) => (
              <ScrollReveal key={col.cat} delay={160 + i * 80}>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {col.cat}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.85rem, 1vw, 0.92rem)",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {col.items}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Relationships ── */}
      <section className="section section--dark" style={{ position: "relative" }}>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.5rem",
                marginBottom: "3rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2rem",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  paddingTop: "0.3rem",
                }}
              >
                04
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
                  fontWeight: 400,
                  color: "var(--muted)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Key Relationships
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.1vw, 0.97rem)",
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              Gardner Underwater is proud to have key relationships with the following organizations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 500,
                color: "var(--white)",
                marginBottom: "2.5rem",
                letterSpacing: "0.05em",
              }}
            >
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="https://www.facebook.com/gardnerunderwater/"
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
              >
                YouTube
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}