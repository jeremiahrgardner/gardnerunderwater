import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "2rem" }}>ABOUT</h1>
          <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 400, color: "#ccc", marginBottom: "2.5rem" }}>
            <strong>JAY GARDNER</strong>
            <br />
            DIVER. INSTRUCTOR. COACH. DAD. ENTREPRENEUR. TEACHER.
          </h3>
          <div style={{ maxWidth: "800px", lineHeight: 1.9, fontSize: "1.05rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              <strong>Jay Gardner is the founder and operator of Gardner Underwater.</strong> Jay is co-owner and Director of Development at{" "}
              <Link href="https://utdscubadiving.com/" target="_blank" rel="noopener noreferrer">
                Unified Team Diving
              </Link>
              , a training agency that is committed to building thinking divers. Jay is dedicated to diving and holds multiple diving qualifications ranging from technical diving to cave diving. As an instructor and coach for UTD, Jay trains divers in building foundational, transformative, and sustaining scuba diving skills, approaches, and mindset.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Jay is an instructor for Divers Alert Network (DAN) where he trains divers in Basic Life Support: CPR and First Aid (BLS), Emergency Oxygen for Scuba Diving Injuries (EO2), and Diving First Aid for Professional Divers (DFA Pro).
            </p>
            <p style={{ marginBottom: "2.5rem" }}>
              He is also the co-host of the scuba diving podcast,{" "}
              <Link href="https://www.thedivetable.com/" target="_blank" rel="noopener noreferrer">
                The Dive Table
              </Link>
              . In his non-scuba life, Jay is a girl dad, an entrepreneur, a best-selling author, and an internationally recognized speaker/coach in the entrepreneurship/startup field.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* Why I Teach */}
      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", marginBottom: "2rem" }}>A NOTE FROM ME: WHY I TEACH</h2>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", fontStyle: "italic", color: "#ccc" }}>
            &ldquo;Hey There, As a growing diver, I wanted to get better. But I had reached a point in my dive training where I was just not getting the level of feedback, observation, and guidance I desired for my growth. I was stuck. Then everything changed. I joined the UTD Coaching Program as a student. The program's consistent, weekly, and tailored approach catapulted my diving to levels I never had imagined. As my journey expanded into the new frontiers of technical diving, cave diving, and exploration; I received an extremely high level of education from my instructors, continual feedback from my coach who had &quot;been there and done that,&quot; and a unified, consistent, and team approach to my diving. I started my professional diving career with one intention: to provide that &quot;catapult&quot; for other divers just like me. I teach because I love it. I dive because I'm obsessed with it. Instructing allows me to combine my love for diving and my passion for teaching into a natural, powerful fit.&rdquo;
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "#888" }}>UTD Instructor #225</p>
        </div>
      </section>

      {/* The Dive Table Podcast */}
      <section style={{ background: "#000", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", marginBottom: "1.5rem" }}>THE DIVE TABLE PODCAST</h2>
          <p style={{ lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem", color: "#ccc" }}>
            Weekly episodes exploring various topics in scuba diving ranging from: recreational diving, technical diving, dive travel, dive equipment, training and certification, scuba instruction, and the general scuba diving industry; The Dive Table will entertain and inform. You can find the Podcast on your favorite podcast platform.
          </p>
          <a
            href="https://www.thedivetable.com/episodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LISTEN TO THE SHOW
          </a>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}