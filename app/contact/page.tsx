import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gardner Underwater — book a course, ask a question, or set up a free 15-minute call.",
};

const testimonials = [
  {
    quote:
      "Jay changed how I think about diving. Not just the mechanics — the whole framework. I came out of the cave course a better diver, and more importantly, a better teammate.",
    author: "Alex R.",
    location: "San Diego, CA",
    cert: "Full Cave, CCR",
  },
  {
    quote:
      "I have been diving for 15 years. Jay's Tech 1 course was the most demanding and most valuable training I have ever done. He does not let you get away with shortcuts.",
    author: "Morgan L.",
    location: "Portland, OR",
    cert: "UTD Tech 1",
  },
  {
    quote:
      "If you are serious about getting better at this, train with Jay. Not because he is easy — because he actually cares about whether you can perform when it matters.",
    author: "Sam K.",
    location: "Austin, TX",
    cert: "Tech 2, Sidemount",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
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
            Let&apos;s talk diving.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "50ch",
              lineHeight: 1.75,
            }}
          >
            Free 15-minute call with every prospective student. Tell me where you are and where you
            want to go — I will tell you what it takes to get there.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
          }}
        >
          <div>
            <span className="section-label">Send a Message</span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: "2rem",
              }}
            >
              Book or inquire.
            </h2>
            <ContactForm />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div
              style={{
                background: "var(--navy)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <span className="section-label" style={{ marginBottom: "1rem" }}>Direct Contact</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <p className="form-label" style={{ marginBottom: "0.25rem" }}>Email</p>
                  <a href="mailto:jay@gardnerunderwater.com" className="hover-teal" style={{ fontSize: "0.92rem" }}>
                    jay@gardnerunderwater.com
                  </a>
                </div>
                <div>
                  <p className="form-label" style={{ marginBottom: "0.25rem" }}>Location</p>
                  <p style={{ fontSize: "0.92rem" }}>San Diego, California</p>
                </div>
                <div>
                  <p className="form-label" style={{ marginBottom: "0.25rem" }}>Response time</p>
                  <p style={{ fontSize: "0.92rem" }}>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--void)",
                border: "1px solid var(--teal)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <span className="form-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                Free intro call
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                15 minutes. No sales pitch.
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                I do a free call with every prospective student before booking.
              </p>
              <p className="form-label">Use the form or email directly to schedule.</p>
            </div>

            <div>
              <span className="section-label" style={{ marginBottom: "1rem" }}>From Students</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {testimonials.map((t) => (
                  <div key={t.author} style={{ borderLeft: "2px solid var(--teal)", paddingLeft: "1.25rem" }}>
                    <blockquote
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--white)",
                        lineHeight: 1.5,
                        fontStyle: "normal",
                        marginBottom: "0.5rem",
                      }}
                    >
                      "{t.quote}"
                    </blockquote>
                    <p className="form-label">
                      {t.author} — {t.location} · {t.cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}