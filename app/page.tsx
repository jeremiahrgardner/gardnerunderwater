"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero-cave.jpg')",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        <div className="container">
          {/* Ornamental top corner */}
          <div style={{
            position: "absolute",
            top: "clamp(4rem, 8vw, 6rem)",
            left: "clamp(1.5rem, 4vw, 3.5rem)",
            width: "20px",
            height: "20px",
            borderTop: "2px solid var(--gold)",
            borderLeft: "2px solid var(--gold)",
            opacity: 0.5,
            zIndex: 10,
          }} />

          <div className="hero-kicker">Gardner Underwater</div>

          <h1 className="hero-title">
            Ready to<br />
            <span style={{ color: "var(--gold)" }}>Unlock</span><br />
            Your Diving<br />
            <span style={{ color: "var(--gold)" }}>Potential</span>?
          </h1>

          <p className="hero-sub">
            Training designed to advance your skills, your control,
            and your brain. For dedicated divers who are done coasting.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
            <Link href="/courses" className="btn btn-outline">
              View Courses
            </Link>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── The Why ── */}
      <section className="section section--ink">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">The Foundation</div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}>
            {/* Left: heading block */}
            <ScrollReveal delay={100}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                color: "var(--off-white)",
                letterSpacing: "-0.03em",
                marginBottom: "2.5rem",
              }}>
                The<br />
                <span style={{ color: "var(--gold)" }}>Why</span>
              </h2>

              {/* Ornamental rule */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ width: "2rem", height: "2px", background: "var(--gold)", opacity: 0.5 }} />
                <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)", opacity: 0.6 }} />
                <div style={{ flex: 1, height: "1px", background: "var(--border)", opacity: 0.5 }} />
              </div>

              <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "42ch" }}>
                We serve divers who want to be the best they can possibly be — and are willing to do the work to get there.
              </p>
            </ScrollReveal>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <ScrollReveal delay={150}>
                <div style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1.5rem",
                }}>
                  <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85 }}>
                    We&apos;ve all experienced{" "}
                    <span style={{ color: "var(--gold)", fontWeight: 600 }}>underwhelming</span>{" "}
                    training — the kind that leaves us with a plastic certification card but
                    without the confidence to actually apply what we&apos;ve &quot;mastered.&quot;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85 }}>
                  Too often traditional scuba classes are designed to sell you the next class,
                  the next trip, or more gear. Not here.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p style={{ fontSize: "1.05rem", color: "var(--off-white)", lineHeight: 1.8, fontWeight: 500 }}>
                  <strong>Gardner Underwater is built differently.</strong> We focus on the{" "}
                  <span style={{ color: "var(--gold)" }}>training</span>, not the certification.
                  On reaching the{" "}
                  <span style={{ color: "var(--gold)" }}>next plateau</span>, not selling you gear
                  you don&apos;t need. On turning you into a{" "}
                  <span style={{ color: "var(--gold)" }}>Thinking Diver</span>.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Link href="/contact" className="btn btn-primary">
                  Book Your Course
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Who ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}>
            {/* Left: label + heading */}
            <div>
              <ScrollReveal>
                <div className="section-label">Who We Serve</div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "var(--off-white)",
                  letterSpacing: "-0.03em",
                  marginBottom: "2rem",
                }}>
                  The<br />
                  <span style={{ color: "var(--gold)" }}>Who</span>
                </h2>
              </ScrollReveal>

              {/* Quote block */}
              <ScrollReveal delay={150}>
                <div className="ornament-box" style={{ marginTop: "2rem" }}>
                  <blockquote style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    fontWeight: 700,
                    color: "var(--off-white)",
                    lineHeight: 1.4,
                    fontStyle: "normal",
                  }}>
                    Dedicated divers. Committed to growth. Ready to advance.
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", paddingTop: "clamp(1rem, 3vw, 3rem)" }}>
              <ScrollReveal delay={150}>
                <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85 }}>
                  Divers often come to us knowing they want to improve, but not having a clear
                  path forward. They&apos;ve been endlessly fumbling with gear configuration,
                  trying to learn a back kick from YouTube, or spending countless hours to dial
                  in the &quot;right&quot; gradient factor.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85 }}>
                  If you&apos;re tired of getting the next certification card without truly advancing
                  in your diving confidence, skill, and awareness — you&apos;ve found a home at
                  Gardner Underwater.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p style={{ fontSize: "1.05rem", color: "var(--off-white)", lineHeight: 1.75, fontWeight: 500 }}>
                  <strong>Eyes Open. Brain On. Unified Team.</strong> These are the foundations
                  upon which you will build a scalable platform for reaching the highest levels
                  in your diving.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Book Your Course
                  </Link>
                  <Link href="/courses" className="btn btn-outline">
                    View Courses
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore grid ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">Explore</div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "var(--off-white)",
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}>
              Discover What Awaits
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1px",
              background: "var(--border-mid)",
              border: "1px solid var(--border-mid)",
            }}
          >
            {[
              {
                label: "THE COURSES",
                href: "/courses",
                sub: "Find the right course for your goals",
                delay: 150,
              },
              {
                label: "THE TRAINING",
                href: "/training",
                sub: "How we train, and why it works",
                delay: 200,
              },
              {
                label: "THE PRICING",
                href: "/pricing",
                sub: "Upfront about money. No surprises.",
                delay: 250,
              },
              {
                label: "THE SHOP",
                href: "/shop",
                sub: "Gear, resources, and more",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.label} delay={item.delay}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "clamp(2rem, 4vw, 3rem)",
                    background: "var(--abyss)",
                    textDecoration: "none",
                    height: "100%",
                    transition: "background 0.3s",
                  }}
                  className="explore-card"
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    color: "var(--gold)",
                    marginBottom: "1.25rem",
                    opacity: 0.7,
                  }}>
                    {item.label}
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    fontWeight: 900,
                    color: "var(--off-white)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}>
                    {item.label.replace("THE ", "")}
                  </h3>
                  <p style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}>
                    {item.sub}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact bar ── */}
      <section
        className="section section--void"
        style={{ textAlign: "center", borderTop: "1px solid var(--border-mid)" }}
      >
        <div className="container--narrow">
          <ScrollReveal>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "var(--off-white)",
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}>
              Ready to dive in?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--gold)",
              marginBottom: "1.5rem",
              letterSpacing: "0.05em",
            }}>
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}>
              {[
                { href: "https://www.facebook.com/gardnerunderwater/", label: "Facebook" },
                { href: "https://www.instagram.com/gardnerunderwater/", label: "Instagram" },
                { href: "https://www.youtube.com/@thedivetable", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    color: "var(--muted)",
                    transition: "color 0.2s",
                  }}
                  className="hover-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .explore-card:hover { background: var(--ink) !important; }
      `}</style>
    </>
  );
}