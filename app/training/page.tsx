import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training Philosophy",
  description:
    "The Gardner Underwater training philosophy: Eyes Open. Brain On. Unified Team. How we build divers who think, communicate, and perform.",
};

const principles = [
  {
    num: "01",
    title: "Eyes Open",
    subtitle: "Situational Awareness Is Everything",
    body:
      "Most diving accidents are preceded by a chain of observable events. Divers who see early, see accurately, and act on what they see — those divers tend to stay alive. Situational awareness is not a personality trait. It is a trained skill, and we train it explicitly.",
    quote:
      "You cannot manage what you cannot see. And you cannot see if you are not looking.",
  },
  {
    num: "02",
    title: "Brain On",
    subtitle: "Thinking Underwater Is Not Optional",
    body:
      "The ocean is a decision-making environment. Equipment failures, teammate errors, unexpected currents, changing visibility — any of these can end your dive or end your life. Divers who think through problems before they become emergencies are the ones who handle those situations when they arise. We train decision-making as seriously as we train skills.",
    quote:
      "Certification proves you can do it once. Competence means you can do it when it matters.",
  },
  {
    num: "03",
    title: "Unified Team",
    subtitle: "No One Dives Alone — Actually",
    body:
      "Technical diving is team diving. Even when you are in the water with a buddy, you are part of a team that has to communicate, coordinate, and execute under pressure. A team that has trained together — that knows each other's patterns, signals, and limits — is fundamentally safer and more capable than two individuals sharing gas. We build teams, not individuals.",
    quote:
      "The goal is not to be the best diver in the water. The goal is to be the best teammate.",
  },
  {
    num: "04",
    title: "Trim & Buoyancy",
    subtitle: "The Foundation Under Everything",
    body:
      "Good trim is not about looking like a pro. It is about efficiency, control, and the ability to operate in tight spaces without disturbing the environment. We spend more time than most programs on buoyancy and trim because everything else — propulsion, communication, gas management — is harder without it.",
    quote:
      "If you are working harder than necessary to stay off the bottom, something is wrong.",
  },
  {
    num: "05",
    title: "Gas Management",
    subtitle: "The Skill That Separates Real Divers from Rented Ones",
    body:
      "Most divers run out of gas because they did not manage it. Real gas management is about knowing your SAC, planning your consumption, tracking your run time, and making decisions before the situation forces them on you. We train gas management as a continuous cognitive process, not a rule of thumb.",
    quote:
      "The rule is simple: turn before you have to. The discipline is actually doing it.",
  },
  {
    num: "06",
    title: "Communication",
    subtitle: "Underwater Communication Is a Learned Skill",
    body:
      "Clear underwater communication is a trained skill. Most divers use three signals and hope for the best. We train a full communication protocol — hand signals, light signals, contact protocols, abort criteria — so that when things get complicated, the team is already speaking the same language.",
    quote:
      "If you have to explain a signal underwater, you waited too long to communicate.",
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Training Philosophy</span>
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
            How we train divers who think.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "52ch",
              lineHeight: 1.75,
            }}
          >
            This is not a resort course. It is not a factory. It is a training program built around the
            belief that good diving is a trained skill, not an innate talent — and that the standard
            most programs call "certified" is just the beginning.
          </p>
        </div>
      </section>

      {/* ── Manifesto band ── */}
      <section
        style={{
          background: "var(--abyss)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(3rem, 5vw, 5rem) 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { label: "Core principle", value: "Eyes Open" },
              { label: "Core principle", value: "Brain On" },
              { label: "Core principle", value: "Unified Team" },
            ].map((item) => (
              <div key={item.value} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    fontWeight: 800,
                    color: "var(--teal)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="section">
        <div className="container">
          {principles.map((p, i) => (
            <div
              key={p.num}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(2rem, 5vw, 5rem)",
                alignItems: "start",
                paddingBottom: "clamp(3rem, 6vw, 6rem)",
                marginBottom: "clamp(2rem, 4vw, 3rem)",
                borderBottom: i < principles.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Big number — left column */}
              <div
                style={{
                  position: "relative",
                  paddingTop: "clamp(2rem, 4vw, 4rem)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(6rem, 14vw, 12rem)",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1px var(--border)",
                    lineHeight: 1,
                    display: "block",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {p.num}
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3rem",
                    height: "2px",
                    background: "var(--teal)",
                    marginTop: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                />
              </div>

              {/* Content — right column */}
              <div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--teal)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.num} / 06
                </span>
                <h2
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--white)",
                    lineHeight: 1.1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.subtitle}
                </p>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.body}
                </p>
                <blockquote
                  style={{
                    borderLeft: "2px solid var(--teal)",
                    paddingLeft: "1.25rem",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.95rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.55,
                  }}
                >
                  "{p.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section section--dark"
        style={{ textAlign: "center" }}
      >
        <div className="container--narrow">
          <span className="section-label" style={{ justifyContent: "center" }}>
            Ready to Train
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            See the courses.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Every course we offer is built on these principles. Browse the full curriculum and find where
            you want to be.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn btn-primary">
              View All Courses
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Jay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}