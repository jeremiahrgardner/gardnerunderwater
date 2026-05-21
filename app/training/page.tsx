import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Gardner Underwater training philosophy: individual attention, team diving context, real-world application, and a holistic diving system.",
};

export default function TrainingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">How We Train</span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--white)",
              maxWidth: "28ch",
              marginBottom: "1.5rem",
            }}
          >
            Training designed to help you achieve the highest standards of excellence in your
            diving and unlock your path forward in your diving career.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              maxWidth: "62ch",
              lineHeight: 1.75,
            }}
          >
            It starts with a simple philosophy: you pay for{" "}
            <strong style={{ color: "var(--gold)" }}>training</strong> but you earn certification.
            Your focus will be on the process of training to meet the highest level of standards.
            Certification is the outcome.
          </p>
        </div>
      </section>

      {/* ── The How ── */}
      <section className="section section--dark">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "2.5rem",
            }}
          >
            THE HOW
          </h2>

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
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1.5rem",
                alignItems: "start",
                marginBottom: i < 5 ? "2rem" : "0",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "var(--gold)",
                  paddingTop: "0.2rem",
                }}
              >
                0{i + 1}.
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Agencies ── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            THE AGENCIES
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
              maxWidth: "68ch",
            }}
          >
            We are proud to be a part of{" "}
            <strong style={{ color: "var(--white)" }}>Unified Team Diving</strong>, an agency obsessed
            with training <strong style={{ color: "var(--gold)" }}>Thinking Divers</strong>. UTD&apos;s roots
            can be found in Hogarthian/DIR diving principles and equipment configuration. UTD has
            continued to evolve and highlights consistency on multiple diving platforms offering over
            60 courses from foundational to technical, cave, wreck, CCR, and more.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "68ch",
            }}
          >
            We are proud to be a part of{" "}
            <strong style={{ color: "var(--white)" }}>Divers Alert Network</strong>, the world's most
            recognized and respected dive safety organization. DAN promotes diver safety worldwide
            through research, medicine, education &amp; emergency support.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* ── The Training Philosophy ── */}
      <section className="section section--dark">
        <div className="container--narrow">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--white)",
              marginBottom: "2.5rem",
            }}
          >
            THE TRAINING PHILOSOPHY
          </h2>

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
          ].map((item) => (
            <div
              key={item.num}
              style={{
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                {item.num}.
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--white)",
                  marginBottom: "0.75rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8 }}>
                {item.body}
              </p>
            </div>
          ))}
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
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Book Your Course
          </Link>
        </div>
      </section>
    </>
  );
}