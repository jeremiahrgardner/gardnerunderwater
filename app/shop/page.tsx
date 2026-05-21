import type { Metadata } from "next";
import Link from "next/link";

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
          <span className="section-label">Gear & Rentals</span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            THE SHOP
          </h1>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--gold)",
              marginBottom: "1rem",
            }}
          >
            &quot;Save A Course&quot; Shop
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "62ch",
              marginBottom: "2rem",
            }}
          >
            At Gardner Underwater HQ there is a small &ldquo;Save A Course&rdquo; retail offering that
            includes items you may need to rent or purchase during your course. This is offered as a
            convenience to students enrolled in a class, it is not a full service retail operation.
          </p>
        </div>
      </section>

      {/* ── Equipment Rentals ── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "2rem",
            }}
          >
            EQUIPMENT RENTALS &amp; SERVICE
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Rental Kits */}
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                RENTAL KITS (PER DAY)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
                ].map(([item, price]) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--border-dim)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{item}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.85rem",
                        color: "var(--gold)",
                        whiteSpace: "nowrap",
                        marginLeft: "1rem",
                      }}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Tanks */}
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                RENTAL TANKS (GAS NOT INCLUDED)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  ["Double Backmount Cylinders (AL80, HP100, LP85)", "$20"],
                  ["Double Sidemount (L/R Valves) Cylinders (AL80)", "$20"],
                  ["Single Cylinder (AL80)", "$10"],
                  ["Stage Cylinder with Rigging (AL80)", "$10"],
                  ["Deco Cylinder with Rigging (AL40)", "$10"],
                  ["Suit Inflation Cylinder (AL6)", "$5"],
                ].map(([item, price]) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--border-dim)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{item}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.85rem",
                        color: "var(--gold)",
                        whiteSpace: "nowrap",
                        marginLeft: "1rem",
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
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginTop: "2.5rem",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                SERVICE
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  ["Cylinder Visual Inspection (VIP)", "$10"],
                  ["Regulator Service (HOG)", "$45 + parts"],
                ].map(([item, price]) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--border-dim)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{item}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.85rem",
                        color: "var(--gold)",
                        whiteSpace: "nowrap",
                        marginLeft: "1rem",
                      }}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Save A Course Shop ── */}
      <section className="section section--dark">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            &quot;SAVE A COURSE&quot; SHOP
          </h2>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--gold)",
              marginBottom: "1.25rem",
            }}
          >
            Some of the items we stock include:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { cat: "Hardware", items: "Bolt Snaps, D-rings, Triglides, Cylinder Clamps, etc." },
              { cat: "Harness", items: "Webbing, Buckles, EPDM Bands, Backplate Hardware, etc." },
              { cat: "Consumables", items: "O-rings, Bungee, Cave Line, etc." },
              { cat: "Apparel", items: "Hats, Stickers, etc." },
            ].map((col) => (
              <div key={col.cat}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {col.cat}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  {col.items}
                </p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn btn-primary">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* ── Key Relationships ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            KEY RELATIONSHIPS
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Gardner Underwater is proud to have key relationships with the following organizations.
          </p>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            +1 (619) 880-0684
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="https://www.facebook.com/gardnerunderwater/"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/gardnerunderwater/"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@thedivetable"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              YouTube
            </a>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Book Your Course
          </Link>
        </div>
      </section>
    </>
  );
}