import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero with portrait */}
      <section
        style={{
          background: "var(--dark)",
          padding: "0 1.5rem 0",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ maxWidth: "1100px", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              padding: "4rem 0",
            }}
          >
            <div>
              <span className="section-label">About</span>
              <h1
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  lineHeight: 1.05,
                }}
              >
                JAY GARDNER
              </h1>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  color: "var(--ocean)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Diver. Instructor. Coach. Dad. Entrepreneur. Teacher.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <Image
                src="/portrait.jpg"
                alt="Jay Gardner"
                width={500}
                height={625}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ background: "var(--deep)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "1.08rem", lineHeight: 1.95 }}>
            <p style={{ marginBottom: "2rem", color: "var(--light)" }}>
              <strong style={{ color: "var(--white)" }}>Jay Gardner is the founder and operator of Gardner Underwater.</strong> Jay is co-owner and Director of Development at{" "}
              <Link href="https://utdscubadiving.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ocean)" }}>
                Unified Team Diving
              </Link>
              , a training agency that is committed to building thinking divers. Jay is dedicated to diving and holds multiple diving qualifications ranging from technical diving to cave diving. As an instructor and coach for UTD, Jay trains divers in building foundational, transformative, and sustaining scuba diving skills, approaches, and mindset.
            </p>
            <p style={{ marginBottom: "2rem", color: "var(--muted)" }}>
              Jay is an instructor for Divers Alert Network (DAN) where he trains divers in Basic Life Support: CPR and First Aid (BLS), Emergency Oxygen for Scuba Diving Injuries (EO2), and Diving First Aid for Professional Divers (DFA Pro).
            </p>
            <p style={{ marginBottom: "3rem", color: "var(--muted)" }}>
              He is also the co-host of the scuba diving podcast,{" "}
              <Link href="https://www.thedivetable.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ocean)" }}>
                The Dive Table
              </Link>
              . In his non-scuba life, Jay is a girl dad, an entrepreneur, a best-selling author, and an internationally recognized speaker and coach in the entrepreneurship and startup field.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Book Your Course
          </Link>
        </div>
      </section>

      <div className="divider" />

      {/* Why I Teach */}
      <section style={{ background: "var(--dark)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-label">Personal</span>
          <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", marginBottom: "2.5rem" }}>
            A Note From Me: Why I Teach
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 2.0,
              fontStyle: "italic",
              color: "var(--light)",
              marginBottom: "2rem",
            }}
          >
            &ldquo;Hey There, As a growing diver, I wanted to get better. But I had reached a point in my dive training where I was just not getting the level of feedback, observation, and guidance I desired for my growth. I was stuck. Then everything changed. I joined the UTD Coaching Program as a student. The program&apos;s consistent, weekly, and tailored approach catapulted my diving to levels I never had imagined. As my journey expanded into the new frontiers of technical diving, cave diving, and exploration; I received an extremely high level of education from my instructors, continual feedback from my coach who had &quot;been there and done that,&quot; and a unified, consistent, and team approach to my diving. I started my professional diving career with one intention: to provide that &quot;catapult&quot; for other divers just like me. I teach because I love it. I dive because I&apos;m obsessed with it. Instructing allows me to combine my love for diving and my passion for teaching into a natural, powerful fit.&rdquo;
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
            UTD Instructor #225
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* The Dive Table */}
      <section style={{ background: "var(--deep)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-label">Podcast</span>
          <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", marginBottom: "1.5rem" }}>
            The Dive Table Podcast
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "2rem", color: "var(--muted)" }}>
            Weekly episodes exploring various topics in scuba diving ranging from: recreational diving, technical diving, dive travel, dive equipment, training and certification, scuba instruction, and the general scuba diving industry. The Dive Table will entertain and inform.
          </p>
          <a
            href="https://www.thedivetable.com/episodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Listen To The Show
          </a>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}