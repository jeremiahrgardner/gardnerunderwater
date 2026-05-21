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
          backgroundImage: "url('/hero-dive.jpg')",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        <div className="container">
          <div className="hero-kicker">Gardner Underwater</div>
          <h1 className="hero-title">
            Ready to{" "}
            <span style={{ color: "var(--gold)" }}>Unlock</span>
            <br />
            Your Diving
            <br />
            <span style={{ color: "var(--gold)" }}>Potential</span>?
          </h1>
          <p className="hero-sub">
            Training Designed To Advance Your Skills, Your Control, and Your
            Brain.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start Your Training Journey
            </Link>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── The Why ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">The Foundation</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "var(--white)",
                marginBottom: "3rem",
                maxWidth: "18ch",
              }}
            >
              The Why
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: "72ch",
            }}
          >
            <ScrollReveal delay={150}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "0.5rem",
                }}
              >
                We&apos;ve all experienced{" "}
                <span style={{ color: "var(--gold)" }}>underwhelming</span>{" "}
                training.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "0.5rem",
                }}
              >
                Training that leaves us with a plastic certification card but
                without the confidence to apply the skills we&apos;ve now
                apparently &apos;mastered.&apos; Too often traditional scuba classes
                leave us disappointed — designed to simply sell you the next
                class, or the next trip, or more gear.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "0.5rem",
                }}
              >
                <strong style={{ color: "var(--white)" }}>
                  Gardner Underwater is built differently.
                </strong>{" "}
                Instead of selling certifications, we focus on the{" "}
                <strong style={{ color: "var(--gold)" }}>training</strong>.
                Instead of selling the next class, we focus on{" "}
                <strong style={{ color: "var(--gold)" }}>
                  reaching the next plateau
                </strong>
                . Instead of selling gear you don&apos;t need, we focus on turning
                you into a{" "}
                <strong style={{ color: "var(--gold)" }}>Thinking Diver</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                }}
              >
                If you&apos;re tired of getting the next certification card but not
                truly advancing in your diving confidence, skill, and awareness;
                you&apos;ve found a home at Gardner Underwater.{" "}
                <strong style={{ color: "var(--white)" }}>
                  Eyes Open. Brain On. Unified Team.
                </strong>{" "}
                These are the foundations upon which you will build a scalable
                platform for reaching the highest levels in your diving. Are you
                ready to elevate your diving to new places?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Link href="/contact" className="btn btn-primary">
                Book Your Course
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── The Who ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <ScrollReveal>
              <div className="section-label">Who We Serve</div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--white)",
                  marginBottom: "1rem",
                  maxWidth: "15ch",
                }}
              >
                The Who
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
                  color: "var(--gold)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  marginBottom: "2rem",
                  lineHeight: 1.45,
                  maxWidth: "55ch",
                }}
              >
                Who We Serve: Dedicated Divers. Committed To Growth. Ready To
                Advance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "1rem",
                  maxWidth: "68ch",
                }}
              >
                We serve divers who have a desire to be the best they can
                possibly be and unlock new heights in their diving careers.
                Divers often come to us knowing they want to improve, but not
                having a clear path forward.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                  maxWidth: "68ch",
                }}
              >
                If you&apos;ve been endlessly fumbling around with your gear
                configuration, or trying to learn a back kick from YouTube, or
                spending countless hours to dial in the &apos;right&apos; gradient
                factor; you&apos;re not alone. The divers we serve best understand
                the importance of great training and are driven to continue to
                improve.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
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
      </section>

      {/* ── Course / Training / Pricing / Shop links ── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-label">Explore</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--white)",
                marginBottom: "3rem",
              }}
            >
              Discover What Awaits
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                label: "THE COURSES",
                href: "/courses",
                sub: "Find The Right Course For You",
                delay: 150,
              },
              {
                label: "THE TRAINING",
                href: "/training",
                sub: "Learn More About How We Train",
                delay: 200,
              },
              {
                label: "THE PRICING",
                href: "/pricing",
                sub: "Let&apos;s Be Upfront About Money",
                delay: 250,
              },
              {
                label: "THE SHOP",
                href: "/shop",
                sub: "Learn More About Our Operation",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.label} delay={item.delay}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition:
                      "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    height: "100%",
                  }}
                  className="card"
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      color: "var(--gold)",
                      marginBottom: "1rem",
                      opacity: 0.7,
                    }}
                  >
                    {item.label}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                      fontWeight: 800,
                      color: "var(--white)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
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
        className="section"
        style={{
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container--narrow">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--white)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
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
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
              >
                YouTube
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}