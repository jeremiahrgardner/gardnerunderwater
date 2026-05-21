import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Gardner Underwater pricing: upfront, no hidden fees, no upselling. Training, coaching, and DAN emergency courses.",
};

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--ink-dark)", position: "relative", overflow: "hidden" }}>
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

        <div className="container">
          <ScrollReveal>
            <span className="section-label">Transparent Pricing</span>
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
                  fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--canvas)",
                  marginBottom: "0",
                  letterSpacing: "-0.03em",
                  maxWidth: "20ch",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                THE PRICING
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginTop: "1.25rem",
                  marginBottom: "2rem",
                  letterSpacing: "0.02em",
                }}
              >
                Paying For Value
              </p>
            </ScrollReveal>
          </div>

          <div style={{ maxWidth: "60ch", position: "relative", zIndex: 1 }}>
            {[
              "At Gardner Underwater, our prices reflect the value we deliver. We stand by the following principles to guide our pricing.",
              "No one likes to talk about money. As such, let's be up front about money. No hidden fees, upselling, fine print, false discounts, sunshine taxes, or other means of being shady about money.",
              "Great training should be priced to reflect the same value a student receives in the knowledge, skills, and techniques gained in their training which carry on through the career of a diver.",
              "Great training should reflect a living wage for the expertise and commitment of a great instructor.",
              "Scuba Diving is, by its very nature, a risky sport. Bargain shopping for the cheapest and fastest training in other inherently risky sports like BASE jumping, or big wave surfing, or high-altitude mountaineering would be considered senseless. Scuba diving is the same.",
            ].map((para, i) => (
              <ScrollReveal key={i} delay={240 + i * 80}>
                <p
                  style={{
                    fontSize: "clamp(0.88rem, 1.2vw, 0.97rem)",
                    color: "var(--ash)",
                    lineHeight: 1.85,
                    marginBottom: i < 4 ? "1.25rem" : "0",
                    fontWeight: 300,
                    maxWidth: "64ch",
                  }}
                >
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course & Equipment Fees ── */}
      <section className="section section--ink" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background texture line */}
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
                  color: "var(--ash)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                COURSE &amp; EQUIPMENT FEES
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {/* Training */}
            <ScrollReveal delay={80}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "-0.5rem",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1px var(--border)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  01
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "1.25rem",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Training
                </span>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                    fontWeight: 700,
                    color: "var(--canvas)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  In Water Courses &amp; Training
                </h3>

                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  $300 / DAY
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                    color: "var(--ash)",
                    marginBottom: "2rem",
                    fontWeight: 300,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Minimum 1 Day
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Book Now
                </Link>
              </div>
            </ScrollReveal>

            {/* Coaching */}
            <ScrollReveal delay={160}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "-0.5rem",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1px var(--border)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  02
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "1.25rem",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Coaching
                </span>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                    fontWeight: 700,
                    color: "var(--canvas)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Foundational Scuba Coaching.
                </h3>

                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  $129 / MO
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                    color: "var(--ash)",
                    marginBottom: "2rem",
                    fontWeight: 300,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  No Minimum Commitment
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Book Now
                </Link>
              </div>
            </ScrollReveal>

            {/* DAN Training */}
            <ScrollReveal delay={240}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "-0.5rem",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1px var(--border)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  03
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "1.25rem",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Dan Training
                </span>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                    fontWeight: 700,
                    color: "var(--canvas)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  In Person Emergency Training
                </h3>

                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  $300 / COURSE
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.88rem)",
                    color: "var(--ash)",
                    marginBottom: "2rem",
                    fontWeight: 300,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Typically 1 Day
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Book Now
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section section--ink"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Oversized background number */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-2rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(10rem, 22vw, 20rem)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px var(--border)",
            lineHeight: 1,
            letterSpacing: "-0.07em",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          03
        </div>

        <div className="container--narrow" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
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
                03
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
                  fontWeight: 400,
                  color: "var(--ash)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                GET IN TOUCH
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--canvas)",
                marginBottom: "2rem",
                letterSpacing: "-0.02em",
              }}
            >
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <a
                href="https://www.facebook.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  fontWeight: 300,
                  transition: "color 0.2s ease",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  fontWeight: 300,
                  transition: "color 0.2s ease",
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--ash)",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  fontWeight: 300,
                  transition: "color 0.2s ease",
                }}
              >
                YouTube
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}