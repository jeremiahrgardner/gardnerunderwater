import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gardner Underwater — book a course, ask a question, and start the conversation.",
};

const testimonials = [
  {
    quote:
      "Jay has a great teaching style and presence in his approach to scuba instruction. He took the time to help me dial in the skills I really wanted to focus on. I gained a lot from this training.",
    author: "Thomas K",
  },
  {
    quote:
      "I have been diving and training together with Jay since the start of my scuba journey. He is a born leader and a hell of a teammate. Jay has helped me to grow into a better diver in the past year and he has this amazing talent of coaching in and out of water. He is a fun dude to talk to, a trustworthy dive buddy who will always has your back and a passionate instructor/coach whom you can learn a lot from.",
    author: "X. Kong",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--ink-dark)" }}>
        <div className="container">
          {/* Oversized section marker */}
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

          <ScrollReveal>
            <span className="section-label">Get In Touch</span>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ScrollReveal delay={80}>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "var(--canvas)",
                  marginBottom: "1.5rem",
                  maxWidth: "14ch",
                }}
              >
                LET&apos;S GO!
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  fontWeight: 400,
                  color: "var(--ash)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                Let&apos;s{" "}
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>
                  START THE CONVERSATION
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ash)",
                  maxWidth: "52ch",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Fill out this form and we will be back in touch.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section section--dark" style={{ position: "relative", overflow: "hidden" }}>
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
          }}
        />

        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(4rem, 8vw, 8rem)",
          }}
        >
          {/* Form */}
          <ScrollReveal>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "1.5rem",
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
                  Send a Message
                </h2>
              </div>

              <form
                style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
              >
                <div>
                  <label
                    htmlFor="firstName"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      display: "block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Enter your first name"
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      background: "var(--paper)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--canvas)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      display: "block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Enter your last name"
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      background: "var(--paper)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--canvas)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      display: "block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your Email Address"
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      background: "var(--paper)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--canvas)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      display: "block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    I&apos;m interested in:*
                  </label>
                  <select
                    id="interest"
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      background: "var(--paper)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--canvas)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <option value="technical">Technical Training</option>
                    <option value="foundational">Foundational Training</option>
                    <option value="specialties">Specialties/MINIs</option>
                    <option value="dan">DAN Emergency Training</option>
                    <option value="coaching">Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      display: "block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    style={{
                      width: "100%",
                      padding: "0.9rem 1.1rem",
                      background: "var(--paper)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      color: "var(--canvas)",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                >
                  SEND
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {/* Make the call */}
            <ScrollReveal delay={80}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                    }}
                  >
                    03
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                      fontWeight: 400,
                      color: "var(--ash)",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Make the Call...
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--ash)",
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                    maxWidth: "38ch",
                  }}
                >
                  Call us &apos;old fashioned&apos; but it&apos;s the most direct option.
                </p>
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: "var(--gold)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  +1 (619) 880-0684
                </p>
              </div>
            </ScrollReveal>

            {/* Be social */}
            <ScrollReveal delay={160}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                    }}
                  >
                    04
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                      fontWeight: 400,
                      color: "var(--ash)",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Be Social...
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    @GardnerUnderwater
                  </p>
                  <a
                    href="https://www.facebook.com/gardnerunderwater"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--ash)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    facebook.com/gardnerunderwater
                  </a>
                  <a
                    href="https://www.youtube.com/@thedivetable"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--ash)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    @thedivetable
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonials */}
            <ScrollReveal delay={240}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "2rem",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                    }}
                  >
                    05
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                      fontWeight: 400,
                      color: "var(--ash)",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Testimonials
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      style={{
                        borderLeft: "2px solid var(--gold)",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--ash)",
                          lineHeight: 1.75,
                          fontStyle: "italic",
                          marginBottom: "0.75rem",
                        }}
                      >
                        &quot;{t.quote}&quot;
                      </p>
                      <p
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.58rem",
                          letterSpacing: "0.12em",
                          color: "var(--dim)",
                          textTransform: "uppercase",
                        }}
                      >
                        — {t.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact bar ── */}
      <section
        className="section"
        style={{
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Oversized section marker */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "clamp(1rem, 5vw, 4rem)",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(6rem, 14vw, 12rem)",
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
          06
        </div>

        <div className="container--narrow" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "var(--canvas)",
                marginBottom: "1rem",
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
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="https://www.facebook.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s ease",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s ease",
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s ease",
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