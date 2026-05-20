import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "The full Gardner Underwater course curriculum: UTD fundamentals, technical diving, CCR, cave diving, sidemount, and leadership programs.",
};

type Course = {
  category: string;
  level: string;
  title: string;
  duration: string;
  desc: string;
  bullets: string[];
  cert: string;
  prerequisites: string;
};

const courses: Course[] = [
  {
    category: "Fundamentals",
    level: "All Levels",
    title: "UTD Basic / Essentials",
    duration: "2–3 days",
    desc: "The foundation everything else is built on. If you are new to diving or want to rebuild your fundamentals from scratch, this is where you start. Buoyancy, trim, situational awareness, and the habits that keep you alive.",
    bullets: [
      "Buoyancy and trim fundamentals",
      " situational awareness protocols",
      "Team diving basics",
      "Problem recognition and management",
      "Proper equipment configuration",
    ],
    cert: "UTD Essentials / Basic",
    prerequisites: "Open Water (or equivalent)",
  },
  {
    category: "Fundamentals",
    level: "Intermediate",
    title: "UTD Level 1 / Certec",
    duration: "3–4 days",
    desc: "Proper breathing, stage management, and team protocols. The first real step into technical diving methodology — the kind of training that changes how you think about every dive.",
    bullets: [
      "Stage breathing and gas management",
      "Primary / backup team protocols",
      "Hovering trim with stage bottles",
      "Simulated deco procedures",
      "Underwater communication systems",
    ],
    cert: "UTD Level 1 / Certec",
    prerequisites: "UTD Basic or equivalent",
  },
  {
    category: "Technical",
    level: "Advanced",
    title: "UTD Tech 1",
    duration: "4–5 days",
    desc: "Your first real decompression diving. We go beyond no-decompression limits, train proper deco procedures, and build the habits that make deco diving routine rather than scary.",
    bullets: [
      "Full deco procedures and planning",
      "Multiple gas management",
      "Altitude and flying after diving protocols",
      "SOR / bailout procedures",
      "Team abort criteria and execution",
    ],
    cert: "UTD Tech 1",
    prerequisites: "UTD Level 1, 25 logged dives",
  },
  {
    category: "Technical",
    level: "Advanced",
    title: "UTD Tech 2",
    duration: "4–5 days",
    desc: "Advanced deco diving including pure O2 and high-oxygen deco procedures. Longer bottoms, more complex planning, greater team demands.",
    bullets: [
      "Pure O2 deco procedures",
      "Advanced gas planning (fly / soar)",
      "Multi-gas CCR crossover",
      "Deep stop protocols",
      "Complex team management",
    ],
    cert: "UTD Tech 2",
    prerequisites: "UTD Tech 1, 50 logged dives",
  },
  {
    category: "CCR",
    level: "Technical",
    title: "CCR — JJ-CCR Fundamentals",
    duration: "4–5 days",
    desc: "Closed-circuit rebreather diving from first breath. The JJ-CCR is one of the most reliable recreational CCRs and a legitimate pathway to extended technical diving. You learn the scrubber, the loop, the bailout — the whole thing.",
    bullets: [
      "CCR equipment and configuration",
      "Breathing loop management",
      "Scrubber duration planning",
      "Bailout procedures and totals",
      "Dive planning for CCR",
    ],
    cert: "CCR Basic / Normoxic",
    prerequisites: "UTD Tech 1 or equivalent",
  },
  {
    category: "CCR",
    level: "Technical",
    title: "CCR — KISS Side Mount CCR",
    duration: "3–4 days",
    desc: "KISS-side-mount CCR training for maximum flexibility and minimum drag. Ideal for shallow deco diving and a perfect complement to a sidemount cave configuration.",
    bullets: [
      "KISS-side-mount CCR configuration",
      "In-water bubble checking",
      "Loop management in sidemount",
      "Bailout procedures",
      "Dive planning and gas management",
    ],
    cert: "KISS CCR Certified",
    prerequisites: "Sidemount certified, 30 logged dives",
  },
  {
    category: "Cave",
    level: "Expert",
    title: "IANTD / UTD Full Cave",
    duration: "6–8 days",
    desc: "The definitive cave diving certification. This is the training that separates overhead environment diving from everything else. Permanent primary lights, reel use, jump / gap procedures, complex line circuits, gas management in zero visibility.",
    bullets: [
      "Permanent primary light configuration",
      "Tricky and gap procedures",
      "Complex line circuits",
      "Zero-visibility search procedures",
      "Full cave team protocols",
    ],
    cert: "IANTD Full Cave / UTD Cave 1",
    prerequisites: "Full cave prerequisites apply — contact for assessment",
  },
  {
    category: "Sidemount",
    level: "Intermediate+",
    title: "Sidemount Specialist",
    duration: "2–3 days",
    desc: "Maximum flexibility, minimum drag. From basic sidemount configuration to cave-ready setups. Sidemount is not just about comfort — it changes how you manage gas, navigate, and interact with the environment.",
    bullets: [
      "Sidemount harness and rig configuration",
      "Gas management in sidemount",
      "Tank switching procedures",
      "Sidemount in restricted spaces",
      "Cave-ready sidemount setups",
    ],
    cert: "Sidemount Specialist",
    prerequisites: "Open Water or equivalent",
  },
  {
    category: "Leadership",
    level: "Intermediate",
    title: "Rescue Diver",
    duration: "3 days",
    desc: "Problem recognition, management, and resolution in a team context. The course that makes you useful to your team — not just competent as an individual.",
    bullets: [
      "Problem recognition protocols",
      "Panicked diver management",
      "Unconscious diver rescue",
      "Emergency equipment deployment",
      "Team rescue coordination",
    ],
    cert: "UTD / RAID Rescue Diver",
    prerequisites: "UTD Level 1 or equivalent, 30 logged dives",
  },
  {
    category: "Leadership",
    level: "Leadership",
    title: "Instructor Development",
    duration: "5–7 days",
    desc: "For divers who want to teach. We do not train instructors to check boxes — we train instructors who can actually convey skill and judgment to students. Contact Jay directly to discuss requirements.",
    bullets: [
      "Instructional methodology",
      "Confined water teaching skills",
      "Open water teaching evaluation",
      "Risk management for instructors",
      "Student evaluation and feedback",
    ],
    cert: "UTD / IANTD Instructor",
    prerequisites: "Varies by agency — contact for assessment",
  },
];

const categories = [...new Set(courses.map((c) => c.category))];

export default function CoursesPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--void)" }}>
        <div className="container">
          <span className="section-label">Full Curriculum</span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--white)",
              maxWidth: "18ch",
              marginBottom: "1.5rem",
            }}
          >
            Courses built for actual skill.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "54ch",
              lineHeight: 1.75,
            }}
          >
            Every course here is designed to produce real competence — not to check a box on the way to
            the next certification level. Look through the curriculum. If you are not sure where to start,
            contact Jay.
          </p>
        </div>
      </section>

      {/* ── Course listing ── */}
      <section className="section">
        <div className="container">
          {categories.map((cat) => {
            const catCourses = courses.filter((c) => c.category === cat);
            return (
              <div key={cat} style={{ marginBottom: "clamp(4rem, 8vw, 7rem)" }}>
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                      fontWeight: 800,
                      color: "var(--white)",
                    }}
                  >
                    {cat}
                  </h2>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                </div>

                {/* Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {catCourses.map((course) => (
                    <div key={course.title} className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "0.75rem",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.62rem",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              color: "var(--teal)",
                            }}
                          >
                            {course.category}
                          </span>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.6rem",
                              letterSpacing: "0.1em",
                              color: "var(--dim)",
                              background: "var(--navy)",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "2px",
                            }}
                          >
                            {course.level}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            color: "var(--white)",
                            marginBottom: "0.35rem",
                            lineHeight: 1.2,
                          }}
                        >
                          {course.title}
                        </h3>

                        <p
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.62rem",
                            color: "var(--muted)",
                            marginBottom: "0.75rem",
                          }}
                        >
                          {course.duration} · {course.cert}
                        </p>

                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--muted)",
                            lineHeight: 1.7,
                            marginBottom: "1rem",
                          }}
                        >
                          {course.desc}
                        </p>

                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.35rem",
                            marginBottom: "1.25rem",
                          }}
                        >
                          {course.bullets.map((b) => (
                            <li
                              key={b}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                fontSize: "0.82rem",
                                color: "var(--muted)",
                              }}
                            >
                              <span style={{ color: "var(--teal)", flexShrink: 0 }}>→</span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div
                          style={{
                            borderTop: "1px solid var(--border-dim)",
                            paddingTop: "0.85rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.6rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--dim)",
                            }}
                          >
                            Req: {course.prerequisites}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <span className="section-label" style={{ justifyContent: "center" }}>
            Not Sure Where to Start?
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s talk about your goals.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
            I do a free 15-minute call with prospective students before booking. Tell me where you are
            and where you want to go — I will tell you what it takes to get there.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Call
          </Link>
        </div>
      </section>
    </>
  );
}