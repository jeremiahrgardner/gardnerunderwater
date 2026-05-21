import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Gardner Underwater training philosophy: individual attention, team diving context, real-world application, and a holistic diving system.",
};

export default function TrainingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--ink-dark)" }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">How We Train</span>
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
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  color: "var(--canvas)",
                  maxWidth: "22ch",
                  marginBottom: "0",
                  letterSpacing: "-0.03em",
                }}
              >
                Training designed to help you achieve the highest standards of excellence in your
                diving and unlock your path forward in your diving career.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ash)",
                  maxWidth: "58ch",
                  lineHeight: 1.8,
                  marginTop: "2rem",
                  fontWeight: 300,
                }}
              >
                It starts with a simple philosophy: you pay for{" "}
                <strong style={{ color: "var(--gold)" }}>training</strong> but you earn certification.
                Your focus will be on the process of training to meet the highest level of standards.
                Certification is the outcome.
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

      {/* ── The How ── */}
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
                THE HOW
              </h2>
            </div>
          </ScrollReveal>

          {[
            {
              title: "Individual Attention",
              body: "All courses have a maximum student-instructor ratio of 3:1 to maintain a personal, engaged, and focused training environment.",
            },
            {
              title: "Correlation & Application",
              body: "Every skill, procedure, and theory is presented in the context of real diving rather than in isolated \"training\" to help you correlate your training to your actual diving.",
            },
            {
              title: "Within A Team Diving Context",
              body: "The team is your backup – gas, equipment and brain. All courses are taught within the context of operating, thinking, and making decisions as a team.",
            },
            {
              title: "A Holistic Diving System",
              body: "Our unique approach of providing a unified, consistent, scalable and interchangeable system, we can help you reach your passion and dreams of achieving excellence.",
            },
            {
              title: "Neutrally Buoyant, In Trim, Switched On",
              body: "We dive how we teach, and teach how we dive in neutral buoyancy, in trim, and with our brains switched on.",
            },
            {
              title: "Train Anywhere, Anytime",
              body: "We conduct classes either at our homebase (San Diego, CA), your homebase (wherever you call home), or anywhere in the world (wherever you'd like to train).",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(3rem, 6vw, 4.5rem) 1fr",
                  gap: "clamp(1rem, 3vw, 2.5rem)",
                  alignItems: "start",
                  marginBottom: i < 5 ? "clamp(2rem, 4vw, 3.5rem)" : "0",
                  position: "relative",
                }}
              >
                {/* Vertical connector line */}
                {i < 5 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "clamp(1.1rem, 2vw, 1.6rem)",
                      top: "clamp(1.8rem, 3vw, 2.4rem)",
                      width: "1px",
                      height: "calc(100% + clamp(2rem, 4vw, 3.5rem))",
                      background:
                        "linear-gradient(to bottom, var(--gold), var(--border))",
                      opacity: 0.3,
                      pointerEvents: "none",
                    }}
                  />
                )}

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    paddingTop: "0.25rem",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}.
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                      fontWeight: 700,
                      color: "var(--canvas)",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.88rem, 1.2vw, 0.97rem)",
                      color: "var(--ash)",
                      lineHeight: 1.8,
                      maxWidth: "64ch",
                      fontWeight: 300,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── The Agencies ── */}
      <section className="section" style={{ position: "relative" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.5rem",
                  marginBottom: "2rem",
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
                    color: "var(--ash)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  THE AGENCIES
                </h2>
              </div>
            </ScrollReveal>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              <ScrollReveal delay={100}>
                <div
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "-1rem",
                      right: "-1rem",
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
                    UTD
                  </div>
                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 1.2vw, 0.97rem)",
                      color: "var(--ash)",
                      lineHeight: 1.85,
                      marginBottom: "1.5rem",
                      maxWidth: "48ch",
                      fontWeight: 300,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    We are proud to be a part of{" "}
                    <strong style={{ color: "var(--canvas)" }}>Unified Team Diving</strong>, an agency obsessed
                    with training <strong style={{ color: "var(--gold)" }}>Thinking Divers</strong>. UTD&apos;s roots
                    can be found in Hogarthian/DIR diving principles and equipment configuration. UTD has
                    continued to evolve and highlights consistency on multiple diving platforms offering over
                    60 courses from foundational to technical, cave, wreck, CCR, and more.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "-1rem",
                      right: "-1rem",
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
                    DAN
                  </div>
                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 1.2vw, 0.97rem)",
                      color: "var(--ash)",
                      lineHeight: 1.85,
                      marginBottom: "1.5rem",
                      maxWidth: "48ch",
                      fontWeight: 300,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    We are proud to be a part of{" "}
                    <strong style={{ color: "var(--canvas)" }}>Divers Alert Network</strong>, the world's most
                    recognized and respected dive safety organization. DAN promotes diver safety worldwide
                    through research, medicine, education &amp; emergency support.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <Link href="/contact" className="btn btn-primary">
                Book Your Course
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── The Training Philosophy ── */}
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
          04
        </div>

        <div className="container--narrow">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.5rem",
                marginBottom: "4rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2rem",
                position: "relative",
                zIndex: 1,
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
                  color: "var(--ash)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                THE TRAINING PHILOSOPHY
              </h2>
            </div>
          </ScrollReveal>

          {[
            {
              num: "1",
              title: "HONOR THE RELATIONSHIP",
              body: "I believe there is a sacred relationship that develops between a mentor and a mentee when both come together with an openness to grow. I will always honor the relationship first above all else.",
            },
            {
              num: "2",
              title: "Stay Humble. Stay Hungry.",
              body: "There is always more to learn. When the student learns one thing, the instructor learns a hundred. I will always be humble in my approach and hungry to learn more.",
            },
            {
              num: "3",
              title: "Put In The Work",
              body: "Any growth in training is the result of a consistent, resilient, and earnest application of work. I will always search for opportunities to focus on the work rather than the outcome.",
            },
            {
              num: "4",
              title: "Make Mistakes",
              body: "Mistakes come from taking new chances to grow. They represent opportunities to learn, to refine, and to move forward with more clarity than we had before. I will always be open to making mistakes.",
            },
            {
              num: "5",
              title: "Feedback Is A Mirror",
              body: "Feedback, which is different from judgment, is the fuel for growth. Feedback is the process of holding a mirror to allow you to see what you can't otherwise see. I will always prioritize feedback as a tool in my coaching.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 100}>
              <div
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {item.num}.
                </span>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                    fontWeight: 800,
                    color: "var(--canvas)",
                    marginBottom: "0.85rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.88rem, 1.2vw, 0.97rem)",
                    color: "var(--ash)",
                    lineHeight: 1.85,
                    maxWidth: "56ch",
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(20rem, 50vw, 40rem)",
            height: "clamp(20rem, 50vw, 40rem)",
            background:
              "radial-gradient(circle, rgba(241, 194, 51, 0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container--narrow">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "var(--canvas)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              +1 (619) 880-0684
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div
              style={{
                display: "flex",
                gap: "clamp(1.25rem, 2.5vw, 2rem)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              <a
                href="https://www.facebook.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
              >
                Instagram
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
              >
                Apple Podcasts
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
              >
                YouTube
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}