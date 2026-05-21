import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jay Gardner — San Diego scuba instructor specializing in technical diving, CCR, and cave training. 10+ years teaching dedicated divers.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "var(--abyss)",
        }}
      >
        <Image
          src="/portrait.jpg"
          alt="Jay Gardner"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="100vw"
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(2,5,10,0.2) 0%, rgba(2,5,10,0.7) 60%, rgba(2,5,10,1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <span className="hero-kicker" style={{ opacity: 1, animation: "none" }}>
              The Instructor
            </span>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "var(--white)",
                maxWidth: "14ch",
              }}
            >
              Jay Gardner.
            </h1>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="section section--dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(3rem, 7vw, 7rem)",
              alignItems: "start",
            }}
          >
            {/* Left: text */}
            <div>
              <span className="section-label">Background</span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Teaching diving the way it should be taught.
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.75 }}>
                  Jay Gardner has been diving since he was a teenager and has accumulated over a decade
                  of experience teaching technical and cave diving. His background spans recreational,
                  technical, CCR, and cave diving across multiple certifying agencies.
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75 }}>
                  He holds certifications through UTD, IANTD, RAID International, and NSS-CDS, and
                  has trained divers from complete beginners to full cave and CCR specialists.
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75 }}>
                  Jay teaches in San Diego and travels for specialized training. His students describe
                  his instruction as demanding, precise, and transformative — the kind of training that
                  changes how you think underwater, not just what you can do.
                </p>
              </div>

              <div className="divider" style={{ margin: "2rem 0" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "UTD & IANTD Full Cave Instructor",
                  "CCR (JJ-CCR & KISS) Instructor",
                  "RAID International Instructor",
                  "NSS-CDS Cave Diving Instructor",
                  "Sidemount Specialist Instructor",
                ].map((cred) => (
                  <div
                    key={cred}
                    style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.8rem" }}>◆</span>
                    <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: portrait + personal note */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3 / 4",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/portrait.jpg"
                  alt="Jay Gardner portrait"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div
                style={{
                  background: "var(--navy)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "1.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Personal Note
                </span>
                <blockquote
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "var(--white)",
                    lineHeight: 1.5,
                    fontStyle: "normal",
                  }}
                >
                  "I got into diving because I wanted to go somewhere quiet. I stayed because
                  I found out how much there is to learn — and how much of that learning happens
                  between your ears."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy / How I teach ── */}
      <section className="section">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            How I Teach
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            The standard is not the ceiling.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "62ch",
              margin: "0 auto 2rem",
            }}
          >
            Most training programs teach to a minimum standard. That standard is a floor, not a
            destination. My job is to find out how good you want to get — and then build the
            training that gets you there. If you are content being adequate, there are cheaper
            options. If you want to be genuinely good, we should talk.
          </p>
          <Link href="/training" className="btn btn-outline">
            Read the Training Philosophy →
          </Link>
        </div>
      </section>

      {/* ── Podcasts / Media ── */}
      <section className="section section--dark">
        <div className="container">
          <span className="section-label">Media &amp; Appearances</span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            Conversations on diving, training, and learning.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                title: "The Unified Team Podcast",
                desc: "Hosting conversations with instructors and students on what it means to be part of a competent dive team.",
                tag: "Podcast",
                href: "#",
              },
              {
                title: "DIR and the Modern Diver",
                desc: "An exploration of the DIR philosophy — why it works, where it falls short, and what it gets right about team diving.",
                tag: "Article",
                href: "#",
              },
              {
                title: "Cave Diving: What Nobody Tells You",
                desc: "On the gap between certification and real competence in overhead environments.",
                tag: "Talk",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="card"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="card-body" style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ padding: "0.85rem 1.5rem", borderTop: "1px solid var(--border-dim)" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.85rem" }}>Access →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section section--void"
        style={{ textAlign: "center" }}
      >
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Ready to start?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Tell me what you want to accomplish and I will tell you what it takes to get there.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Dive
            </Link>
            <Link href="/courses" className="btn btn-outline">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}