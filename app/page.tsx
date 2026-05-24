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
          {/* Top-left ornamental corner */}
          <div style={{
            position: "absolute",
            top: "clamp(4rem, 8vw, 6rem)",
            left: "clamp(1.25rem, 4vw, 3rem)",
            width: "24px",
            height: "24px",
            borderTop: "2px solid var(--gold)",
            borderLeft: "2px solid var(--gold)",
            opacity: 0.6,
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
            Training designed to advance your skills, your control, and your brain.
            For dedicated divers who are done coasting.
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

      {/* ── The Why — paper background ── */}
      <section className="section section--paper">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 7rem)", alignItems: "start" }}>
            {/* Left: heading + label */}
            <ScrollReveal>
              <div className="section-label">The Foundation</div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
              }}>
                The<br />
                <span style={{ color: "var(--gold-dark)" }}>Why</span>
              </h2>

              {/* Ornamental rule */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{ width: "2rem", height: "1.5px", background: "var(--gold)", opacity: 0.5 }} />
                <div style={{ width: "5px", height: "5px", background: "var(--gold)", transform: "rotate(45deg)", opacity: 0.6 }} />
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--ash)", lineHeight: 1.9, maxWidth: "42ch" }}>
                We serve divers who want to be the best they can possibly be — and are willing to do the work to get there.
              </p>
            </ScrollReveal>

            {/* Right: content block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "clamp(1rem, 3vw, 2.5rem)" }}>
              <ScrollReveal delay={100}>
                <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem" }}>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.9 }}>
                    We&apos;ve all experienced{" "}
                    <strong>underwhelming</strong> training — the kind that leaves us with a plastic certification card but without the confidence to actually apply what we&apos;ve &quot;mastered.&quot;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.9 }}>
                  Too often traditional scuba classes are designed to sell you the next class, the next trip, or more gear. Not here.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p style={{ fontSize: "1rem", color: "var(--ink-dark)", lineHeight: 1.85, fontWeight: 500 }}>
                  <strong>Gardner Underwater is built differently.</strong> We focus on the{" "}
                  <span style={{ color: "var(--gold-dark)" }}>training</span>, not the certification.
                  On reaching the{" "}
                  <span style={{ color: "var(--gold-dark)" }}>next plateau</span>, not selling you gear you don&apos;t need.
                  On turning you into a{" "}
                  <span style={{ color: "var(--gold-dark)" }}>Thinking Diver</span>.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <Link href="/contact" className="btn btn-primary">
                  Book Your Course
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Who — cream bg, centered quote ── */}
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
                  letterSpacing: "-0.03em",
                  marginBottom: "2rem",
                }}>
                  The<br />
                  <span style={{ color: "var(--gold-dark)" }}>Who</span>
                </h2>
              </ScrollReveal>

              {/* Ornament box quote */}
              <ScrollReveal delay={150}>
                <div className="ornament-box">
                  <blockquote style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                    fontWeight: 700,
                    color: "var(--ink-dark)",
                    lineHeight: 1.35,
                    fontStyle: "normal",
                  }}>
                    Dedicated divers.<br />
                    Committed to growth.<br />
                    Ready to advance.
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", paddingTop: "clamp(1rem, 3vw, 2.5rem)" }}>
              <ScrollReveal delay={150}>
                <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.9 }}>
                  Divers often come to us knowing they want to improve, but not having a clear path forward. They&apos;ve been endlessly fumbling with gear configuration, trying to learn a back kick from YouTube, or spending countless hours to dial in the &quot;right&quot; gradient factor.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.9 }}>
                  If you&apos;re tired of getting the next certification card without truly advancing in your diving confidence, skill, and awareness — you&apos;ve found a home at Gardner Underwater.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p style={{ fontSize: "1rem", color: "var(--ink-dark)", lineHeight: 1.8, fontWeight: 500 }}>
                  <strong>Eyes Open. Brain On. Unified Team.</strong> These are the foundations upon which you will build a scalable platform for reaching the highest levels in your diving.
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

      {/* ── Explore grid — ink bg, paper cards ── */}
      <section className="section section--ink">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">Explore</div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
              color: "var(--canvas)",
            }}>
              Discover What Awaits
            </h2>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "rgba(248, 248, 244, 0.08)",
            border: "1px solid rgba(248, 248, 244, 0.08)",
          }}>
            {[
              { label: "THE COURSES", href: "/courses", sub: "Find the right course for your goals" },
              { label: "THE TRAINING", href: "/training", sub: "How we train, and why it works" },
              { label: "THE PRICING", href: "/pricing", sub: "Upfront about money. No surprises." },
              { label: "THE SHOP", href: "/shop", sub: "Gear, resources, and more" },
            ].map((item) => (
              <ScrollReveal key={item.label} delay={150}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "clamp(2rem, 4vw, 2.75rem)",
                    background: "var(--paper)",
                    textDecoration: "none",
                    height: "100%",
                    transition: "background 0.25s",
                  }}
                  className="explore-card"
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                    color: "var(--gold-dark)",
                    marginBottom: "1rem",
                    opacity: 0.7,
                  }}>
                    {item.label}
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                    fontWeight: 900,
                    color: "var(--ink-dark)",
                    marginBottom: "0.65rem",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}>
                    {item.label.replace("THE ", "")}
                  </h3>
                  <p style={{
                    fontSize: "0.82rem",
                    color: "var(--ash)",
                    lineHeight: 1.65,
                  }}>
                    {item.sub}
                  </p>

                  {/* Bottom arrow */}
                  <div style={{ marginTop: "1.5rem", color: "var(--gold-dark)", fontSize: "1.2rem" }}>→</div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact bar — paper bg ── */}
      <section
        className="section section--paper"
        style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}
      >
        <div className="container--narrow">
          <ScrollReveal>
            <div className="section-label" style={{ justifyContent: "center" }}>Ready to Start?</div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}>
              Let&apos;s dive in.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
              fontWeight: 700,
              color: "var(--gold-dark)",
              marginBottom: "1.5rem",
              letterSpacing: "0.04em",
            }}>
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
              {[
                { href: "https://www.facebook.com/gardnerunderwater/", label: "Facebook" },
                { href: "https://www.instagram.com/gardnerunderwater/", label: "Instagram" },
                { href: "https://www.youtube.com/@thedivetable", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hover-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "var(--ash)",
                    transition: "color 0.15s",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .explore-card:hover { background: var(--ink-dark) !important; }
        .explore-card:hover h3 { color: var(--canvas); }
        .explore-card:hover p { color: var(--dim); }
        .explore-card:hover .arrow-gold { color: var(--gold); }
      `}</style>
    </>
  );
}