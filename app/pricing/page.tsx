import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Gardner Underwater pricing: upfront, no hidden fees, no upselling. Training, coaching, and DAN emergency courses.",
};

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Transparent Pricing</span>
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
            THE PRICING
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
            Paying For Value
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "64ch",
              marginBottom: "1rem",
            }}
          >
            At Gardner Underwater, our prices reflect the value we deliver. We stand by the following
            principles to guide our pricing.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "64ch",
              marginBottom: "1rem",
            }}
          >
            No one likes to talk about money. As such,{" "}
            <strong style={{ color: "var(--white)" }}>let&apos;s be up front about money</strong>. No hidden
            fees, upselling, fine print, false discounts, sunshine taxes, or other means of being
            shady about money.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "64ch",
              marginBottom: "1rem",
            }}
          >
            Great training should be priced to{" "}
            <strong style={{ color: "var(--gold)" }}>reflect the same value</strong> a student receives
            in the knowledge, skills, and techniques gained in their training which carry on through
            the career of a diver.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "64ch",
              marginBottom: "1rem",
            }}
          >
            Great training should reflect a{" "}
            <strong style={{ color: "var(--gold)" }}>living wage</strong> for the expertise and
            commitment of a great instructor.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "64ch",
              marginBottom: "2rem",
            }}
          >
            Scuba Diving is, by its very nature, a risky sport. Bargain shopping for the cheapest and
            fastest training in other inherently risky sports like BASE jumping, or big wave surfing,
            or high-altitude mountaineering would be{" "}
            <strong style={{ color: "var(--gold)" }}>considered senseless</strong>. Scuba diving is the
            same.
          </p>
        </div>
      </section>

      {/* ── Course & Equipment Fees ── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "2.5rem",
            }}
          >
            COURSE &amp; EQUIPMENT FEES
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Training */}
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                TRAINING
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                }}
              >
                TRAINING
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1rem" }}>
                In Water Courses &amp; Training
              </p>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  marginBottom: "0.25rem",
                }}
              >
                $300 / DAY
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                Minimum 1 Day
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Book Now
              </Link>
            </div>

            {/* Coaching */}
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                COACHING
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                }}
              >
                COACHING
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1rem" }}>
                Foundational Scuba Coaching.
              </p>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  marginBottom: "0.25rem",
                }}
              >
                $129 / MO
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                No Minimum Commitment
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Book Now
              </Link>
            </div>

            {/* DAN Training */}
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                DAN TRAINING
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                }}
              >
                DAN Training
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1rem" }}>
                In Person Emergency Training
              </p>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  marginBottom: "0.25rem",
                }}
              >
                $300 / COURSE
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                Typically 1 Day
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container--narrow">
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