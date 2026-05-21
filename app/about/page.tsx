import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

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
          minHeight: "65vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "var(--paper)",
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
            background: "linear-gradient(180deg, rgba(2,5,10,0.25) 0%, rgba(2,5,10,0.75) 60%, rgba(2,5,10,1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <span className="hero-kicker" style={{ opacity: 1, animation: "none" }}>
              About
            </span>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "var(--canvas)",
                maxWidth: "14ch",
                marginBottom: "1.5rem",
              }}
            >
              Jay Gardner.
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                textTransform: "uppercase",
                maxWidth: "40ch",
                lineHeight: 1.6,
              }}
            >
              DIVER. INSTRUCTOR. COACH. DAD. ENTREPRENEUR. TEACHER.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="section section--ink">
        <div className="container">
          <ScrollReveal>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--ink-dark)",
                lineHeight: 1.85,
                maxWidth: "70ch",
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              <strong style={{ color: "var(--canvas)", fontWeight: 600 }}>
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
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--ash)",
                lineHeight: 1.85,
                maxWidth: "70ch",
                marginBottom: "1.5rem",
              }}
            >
              Jay is an instructor for Divers Alert Network (DAN) where he trains divers in Basic Life
              Support: CPR and First Aid (BLS), Emergency Oxygen for Scuba Diving Injuries (EO2), and
              Diving First Aid for Professional Divers (DFA Pro).
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--ash)",
                lineHeight: 1.85,
                maxWidth: "70ch",
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
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── A Note From Me: Why I Teach ── */}
      <section className="section">
        <div className="container--narrow">
          <ScrollReveal>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="section-label">Philosophy</span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--canvas)",
                  letterSpacing: "-0.03em",
                }}
              >
                A NOTE FROM ME: WHY I TEACH
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div
              style={{
                borderLeft: "3px solid var(--gold)",
                paddingLeft: "2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-3px",
                  top: 0,
                  width: "3px",
                  height: "4rem",
                  background: "var(--gold)",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                  color: "var(--ink-dark)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
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
                  fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                  color: "var(--ink-dark)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                I started my professional diving career with one intention: to provide that &ldquo;catapult&rdquo;
                for other divers just like me. I teach because I love it. I dive because I&apos;m obsessed with
                it. Instructing allows me to combine my love for diving and my passion for teaching into a
                natural, powerful fit.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
              <div className="accent-line" />
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--gold)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                UTD Instructor #225
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Dive Table Podcast ── */}
      <section className="section section--ink">
        <div className="container--narrow">
          <ScrollReveal>
            <span className="section-label">Podcast</span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "var(--canvas)",
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              THE DIVE TABLE PODCAST
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--ash)",
                lineHeight: 1.85,
                maxWidth: "65ch",
                marginBottom: "2rem",
              }}
            >
              Weekly episodes exploring various topics in scuba diving ranging from: recreational
              diving, technical diving, dive travel, dive equipment, training and certification, scuba
              instruction, and the general scuba diving industry; The Dive Table will entertain and
              inform. You can find the Podcast on your favorite podcast platform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              href="https://www.thedivetable.com/episodes/"
              className="btn btn-primary"
              style={{ display: "inline-flex" }}
            >
              Listen to the Show
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" style={{ textAlign: "center", background: "var(--ink-dark)" }}>
        <div className="container--narrow">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--canvas)",
                marginBottom: "2rem",
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
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Instagram
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Apple Podcasts
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                YouTube
              </a>
              <a
                href="tel:+16198800684"
                style={{
                  color: "var(--ash)",
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Call Jay
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}