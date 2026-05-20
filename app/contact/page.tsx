"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    text: "Jay has a great teaching style and presence in his approach to scuba instruction. He took the time to help me dial in the skills I really wanted to focus on. I gained a lot from this training.",
    author: "Thomas K",
  },
  {
    text: "I have been diving and training together with Jay since the start of my scuba journey. He is a born leader and a hell of a teammate. Jay has helped me to grow into a better diver in the past year and he has this amazing talent of coaching in and out of water. He is a fun dude to talk to, a trustworthy dive buddy who will always have your back and a passionate instructor/coach whom you can learn a lot from.",
    author: "X. Kong",
  },
];

export default function ContactPage() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      {/* Top band */}
      <section
        style={{
          background: "var(--dark)",
          padding: "5rem 1.5rem 4rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              lineHeight: 1.0,
            }}
          >
            LET&apos;S GO!
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--light)", maxWidth: "600px", lineHeight: 1.7 }}>
            Let&apos;s start the conversation. Fill out the form and we&apos;ll be back in touch.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--deep)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "grid", gap: "1.5rem" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      required
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        background: "var(--navy)",
                        border: "1px solid var(--border)",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      required
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        background: "var(--navy)",
                        border: "1px solid var(--border)",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      background: "var(--navy)",
                      border: "1px solid var(--border)",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
                    I&apos;M INTERESTED IN
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      background: "var(--navy)",
                      border: "1px solid var(--border)",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  >
                    <option value="technical">Technical Training</option>
                    <option value="foundational">Foundational Training</option>
                    <option value="specialties">Specialties / MINIS</option>
                    <option value="dan">DAN Emergency Training</option>
                    <option value="coaching">Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
                    MESSAGE
                  </label>
                  <textarea
                    placeholder="Tell us about your goals, experience level, and what you're hoping to get out of training..."
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      background: "var(--navy)",
                      border: "1px solid var(--border)",
                      color: "#fff",
                      fontSize: "1rem",
                      resize: "vertical",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <button type="submit" className="btn" style={{ width: "100%", textAlign: "center" }}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Call / Social */}
            <div>
              <h2 style={{ fontSize: "1rem", letterSpacing: "0.12em", color: "var(--ocean)", marginBottom: "1.5rem" }}>
                PREFER THE DIRECT ROUTE?
              </h2>
              <p style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem" }}>
                <Link href="tel:+16198800684" style={{ color: "var(--white)" }}>
                  +1 (619) 880-0684
                </Link>
              </p>

              <div className="divider" style={{ marginBottom: "2.5rem" }} />

              <h2 style={{ fontSize: "1rem", letterSpacing: "0.12em", color: "var(--ocean)", marginBottom: "1rem" }}>
                FIND US ONLINE
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "@GardnerUnderwater", href: "https://www.instagram.com/gardnerunderwater/" },
                  { label: "Facebook / GardnerUnderwater", href: "https://www.facebook.com/gardnerunderwater/" },
                  { label: "YouTube / @thedivetable", href: "https://www.youtube.com/@thedivetable" },
                  { label: "The Dive Table Podcast", href: "https://www.thedivetable.com/" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--gray)", fontSize: "1rem" }}
                  >
                    {link.label} ↗
                  </Link>
                ))}
              </div>

              <div className="divider" style={{ margin: "2.5rem 0" }} />

              <h2 style={{ fontSize: "1rem", letterSpacing: "0.12em", color: "var(--ocean)", marginBottom: "1.5rem" }}>
                TESTIMONIALS
              </h2>
              <div
                style={{
                  background: "var(--navy)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                    color: "var(--light)",
                  }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <p style={{ fontWeight: 700, color: "var(--gray)", fontSize: "0.9rem" }}>
                  — {testimonials[current].author}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
                  <button
                    onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--gray)",
                      padding: "0.4rem 1rem",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--gray)",
                      padding: "0.4rem 1rem",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "3rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Link href="/courses" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            Browse courses →
          </Link>
        </div>
      </section>
    </>
  );
}