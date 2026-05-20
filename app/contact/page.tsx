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
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>LET&apos;S GO!</h1>
          <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 400, color: "#ccc" }}>
            Let&apos;s Start The Conversation
          </h3>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <p style={{ fontSize: "1.05rem", marginBottom: "2.5rem", color: "#ccc" }}>
            Fill out this form and we will be back in touch.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "grid", gap: "1.5rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#aaa" }}>
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "#000",
                    border: "1px solid #333",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#aaa" }}>
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "#000",
                    border: "1px solid #333",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#aaa" }}>
                Email*
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "#000",
                  border: "1px solid #333",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#aaa" }}>
                I&apos;m interested in:*
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "#000",
                  border: "1px solid #333",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                <option value="technical">Technical Training</option>
                <option value="foundational">Foundational Training</option>
                <option value="specialties">Specialties/MINIS</option>
                <option value="dan">DAN Emergency Training</option>
                <option value="coaching">Coaching</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#aaa" }}>
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "#000",
                  border: "1px solid #333",
                  color: "#fff",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input type="checkbox" id="not-robot" />
              <label htmlFor="not-robot" style={{ fontSize: "0.9rem", color: "#aaa" }}>
                I am not a Robot
              </label>
            </div>

            <button type="submit" className="btn" style={{ alignSelf: "flex-start" }}>
              SEND
            </button>
          </form>
        </div>
      </section>

      {/* Call / Social */}
      <section style={{ background: "#000", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "1rem" }}>MAKE THE CALL...</h2>
          <p style={{ fontSize: "1.05rem", marginBottom: "2rem", color: "#ccc" }}>
            Call us &apos;old fashioned&apos; but it&apos;s the most direct option.
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "3rem" }}>+1 (619) 880-0684</p>

          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "1rem" }}>BE SOCIAL...</h2>
          <p style={{ fontSize: "1.05rem", marginBottom: "0.75rem", color: "#ccc" }}>
            Not ready for direct contact yet...you can still browse online.
          </p>
          <p style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>@GardnerUnderwater</p>
          <p style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
            <Link href="https://www.facebook.com/gardnerunderwater" target="_blank" rel="noopener noreferrer">
              facebook.com/gardnerunderwater
            </Link>
          </p>
          <p style={{ fontSize: "1.05rem" }}>
            <Link href="https://www.youtube.com/@thedivetable" target="_blank" rel="noopener noreferrer">
              @thedivetable
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#111", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: "2.5rem", textAlign: "center" }}>
            TESTIMONIALS
          </h2>
          <div style={{ background: "#1a1a1a", border: "1px solid #333", padding: "2.5rem", textAlign: "center", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic", color: "#ddd" }}>
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <p style={{ fontWeight: 700, color: "#888" }}>— {testimonials[current].author}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              style={{
                background: "transparent",
                border: "1px solid #444",
                color: "#fff",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              ← Prev
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              style={{
                background: "transparent",
                border: "1px solid #444",
                color: "#fff",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <section style={{ background: "#000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}