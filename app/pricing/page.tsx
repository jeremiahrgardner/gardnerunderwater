import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Gardner Underwater course pricing. Training designed to advance your skills, your control, and your brain.",
};

const pricingTiers = [
  {
    name: "Fundamentals",
    desc: "Build a foundation that everything else depends on.",
    price: "$550",
    unit: "per person",
    courses: [
      "UTD Basic / Essentials",
      "Sidemount Specialist",
    ],
    cta: "Book Essentials",
  },
  {
    name: "Technical",
    desc: "The full technical diving progression — deco, CCR, and beyond.",
    price: "Varies",
    unit: "per course",
    courses: [
      "UTD Level 1 / Certec",
      "UTD Tech 1",
      "UTD Tech 2",
      "CCR (JJ-CCR)",
    ],
    cta: "Contact for Pricing",
    highlight: true,
  },
  {
    name: "Cave & CCR",
    desc: "The highest-level training available — full cave, side-mount CCR.",
    price: "By inquiry",
    unit: "6–8 day programs",
    courses: [
      "Full Cave Certification",
      "CCR Full Cave",
      "KISS Side Mount CCR",
    ],
    cta: "Contact Jay",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Pricing</span>
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
            What it costs to train for real.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "52ch",
              lineHeight: 1.75,
            }}
          >
            Good training is an investment. These are guide prices — exact costs depend on course
            configuration, student-to-instructor ratio, and location. Contact Jay for a specific quote.
          </p>
        </div>
      </section>

      {/* ── Pricing tiers ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlight ? "var(--navy)" : "var(--abyss)",
                  border: tier.highlight ? "1px solid var(--teal)" : "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: tier.highlight ? "0 0 40px rgba(13, 148, 136, 0.08)" : "none",
                }}
              >
                {tier.highlight && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--void)",
                      background: "var(--teal)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                      alignSelf: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Most popular
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {tier.desc}
                </p>

                <div style={{ marginBottom: "1.5rem" }}>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                      fontWeight: 800,
                      color: tier.highlight ? "var(--teal)" : "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "var(--muted)",
                      letterSpacing: "0.05em",
                      marginTop: "0.25rem",
                    }}
                  >
                    {tier.unit}
                  </p>
                </div>

                <div className="divider" style={{ marginBottom: "1.25rem" }} />

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    flex: 1,
                    marginBottom: "1.75rem",
                  }}
                >
                  {tier.courses.map((course) => (
                    <li
                      key={course}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                      }}
                    >
                      <span style={{ color: "var(--teal)", fontSize: "0.7rem" }}>◆</span>
                      {course}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn ${tier.highlight ? "btn-primary" : "btn-outline"}`}
                  style={{ justifyContent: "center" }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notes ── */}
      <section className="section section--dark">
        <div className="container--narrow">
          <span className="section-label">Pricing Notes</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "What's included",
                body: "Instructor time, in-water training, course materials, and certification fees. Equipment rental available separately — contact Jay for rental pricing.",
              },
              {
                title: "What's not included",
                body: "Gases (nitrox, trimix where used), entrance fees, travel, accommodation, and meals. These vary by location and program.",
              },
              {
                title: "Group discounts",
                body: "Two or more students booking together receive a 10% discount on most courses. Small group training is better training — book with a teammate.",
              },
              {
                title: "Payment terms",
                body: "A 50% deposit is required to book a course. Balance due before the course start date. Payment via cash, check, or Square invoice.",
              },
              {
                title: "Cancellation",
                body: "Full refund with 14+ days notice. 50% refund with 7–14 days. No refund within 7 days of the course start (except in exceptional circumstances).",
              },
            ].map((note) => (
              <div
                key={note.title}
                style={{
                  borderBottom: "1px solid var(--border-dim)",
                  paddingBottom: "1.25rem",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {note.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--void" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Ready to start?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
            Tell me what you want to accomplish. I will tell you what it takes to get there and what it
            will cost.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Jay
            </Link>
            <Link href="/courses" className="btn btn-outline">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}