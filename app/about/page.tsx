import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jay Gardner — founder and operator of Gardner Underwater. UTD Instructor #225, co-owner of Unified Team Diving, and co-host of The Dive Table podcast.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
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
            background: "linear-gradient(180deg, rgba(2,5,10,0.3) 0%, rgba(2,5,10,0.8) 70%, rgba(2,5,10,1) 100%)",
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
              About
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
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
                letterSpacing: "0.15em",
                color: "var(--gold)",
                marginTop: "1rem",
                textTransform: "uppercase",
              }}
            >
              DIVER. INSTRUCTOR. COACH. DAD. ENTREPRENEUR. TEACHER.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="section section--dark">
        <div className="container">
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text)",
              lineHeight: 1.8,
              maxWidth: "72ch",
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "var(--white)" }}>
              Jay Gardner is the founder and operator of Gardner Underwater.
            </strong>{" "}
            Jay is co-owner and Director of Development at{" "}
            <Link href="https://utdscubadiving.com/" style={{ color: "var(--gold)" }}>
              Unified Team Diving
            </Link>
            , a training agency that is committed to building thinking divers. Jay is dedicated to
            diving and holds multiple diving qualifications ranging from technical diving to cave
            diving. As an instructor and coach for UTD, Jay trains divers in building foundational,
            transformative, and sustaining scuba diving skills, approaches, and mindset.
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "72ch",
              marginBottom: "1.5rem",
            }}
          >
            Jay is an instructor for Divers Alert Network (DAN) where he trains divers in Basic Life
            Support: CPR and First Aid (BLS), Emergency Oxygen for Scuba Diving Injuries (EO2), and
            Diving First Aid for Professional Divers (DFA Pro).
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "72ch",
              marginBottom: "2rem",
            }}
          >
            He is also the co-host of the scuba diving podcast,{" "}
            <Link href="https://www.thedivetable.com/" style={{ color: "var(--gold)" }}>
              The Dive Table
            </Link>
            . In his non-scuba life, Jay is a girl dad, an entrepreneur, a best-selling author, and
            an internationally recognized speaker/coach in the entrepreneurship/startup field.
          </p>

          <Link href="/contact" className="btn btn-primary">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* ── A Note From Me: Why I Teach ── */}
      <section className="section">
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "var(--white)",
            }}
          >
            A NOTE FROM ME: WHY I TEACH
          </h2>
          <div
            style={{
              borderLeft: "2px solid var(--gold)",
              paddingLeft: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Hey There, As a growing diver, I wanted to get better. But I had reached a point in my
              dive training where I was just not getting the level of feedback, observation, and
              guidance I desired for my growth. I was stuck. Then everything changed. I joined the UTD
              Coaching Program as a student. The program&apos;s consistent, weekly, and tailored approach
              catapulted my diving to levels I never had imagined. As my journey expanded into the new
              frontiers of technical diving, cave diving, and exploration; I received an extremely high
              level of education from my instructors, continual feedback from my coach who had &ldquo;been
              there and done that,&rdquo; and a unified, consistent, and team approach to my diving.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I started my professional diving career with one intention: to provide that &ldquo;catapult&rdquo;
              for other divers just like me. I teach because I love it. I dive because I&apos;m obsessed with
              it. Instructing allows me to combine my love for diving and my passion for teaching into a
              natural, powerful fit.
            </p>
          </div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--dim)",
              marginTop: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            UTD Instructor #225
          </p>
        </div>
      </section>

      {/* ── The Dive Table Podcast ── */}
      <section className="section section--dark">
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "var(--white)",
            }}
          >
            THE DIVE TABLE PODCAST
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            Weekly episodes exploring various topics in scuba diving ranging from: recreational
            diving, technical diving, dive travel, dive equipment, training and certification, scuba
            instruction, and the general scuba diving industry; The Dive Table will entertain and
            inform. You can find the Podcast on your favorite podcast platform.
          </p>
          <Link
            href="https://www.thedivetable.com/episodes/"
            className="btn btn-primary"
            style={{ display: "inline-flex" }}
          >
            Listen to the Show
          </Link>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            +1 (619) 880-0684
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="https://www.facebook.com/gardnerunderwater/"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/gardnerunderwater/"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Instagram
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/@thedivetable"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              YouTube
            </a>
            <a
              href="tel:+16198800684"
              style={{ color: "var(--muted)", fontSize: "0.85rem" }}
            >
              Call Jay
            </a>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Book Your Course
          </Link>
        </div>
      </section>
    </>
  );
}