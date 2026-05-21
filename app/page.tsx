import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero-dive.jpg')",
        }}
      >
        <div className="container" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <p className="hero-kicker">San Diego · Scuba Instruction</p>
          <h1 className="hero-title">
            Training<br />Built for<br />Dedicated<br />Divers.
          </h1>
          <p className="hero-sub">
            Precision instruction in technical diving, CCR, and cave training.
            No shortcuts. No fluff. Just real skill development.
          </p>
          <div className="hero-actions">
            <Link href="/courses" className="btn btn-primary">
              View Courses
            </Link>
            <Link href="/about" className="btn btn-outline">
              Meet the Instructor
            </Link>
          </div>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section style={{ background: "var(--abyss)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          {[
            {
              num: "01",
              title: "Eyes Open",
              body: "Situational awareness is not optional. You learn to see everything — environment, team, gas, self.",
            },
            {
              num: "02",
              title: "Brain On",
              body: "Thinking through problems before they become emergencies. Diving is a cognitive practice first.",
            },
            {
              num: "03",
              title: "Unified Team",
              body: "A team that communicates effortlessly. Training to be a better teammate makes you a better diver.",
            },
          ].map((item) => (
            <div key={item.num}>
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
                {item.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Training ── */}
      <section className="section">
        <div className="container">
          <span className="section-label">What We Train</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                maxWidth: "16ch",
                lineHeight: 1.05,
              }}
            >
              Serious training for serious divers.
            </h2>
            <Link href="/courses" className="btn btn-ghost">
              All Courses →
            </Link>
          </div>

          {/* Course cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                category: "Fundamentals",
                title: "UTD Basic / Essentials",
                desc: "The foundation everything else is built on. Buoyancy, trim, situational awareness.",
                level: "All Levels",
                href: "/courses",
              },
              {
                category: "Technical",
                title: "UTD Tech 1 & Tech 2",
                desc: "Deco procedures, stage breathing, team protocols. The full technical diving path.",
                level: "Advanced",
                href: "/courses",
              },
              {
                category: "CCR",
                title: "Closed-Circuit Rebreather",
                desc: "JJ-CCR and KISS-side mount CCR training. From first breathe to full cave configuration.",
                level: "Technical",
                href: "/courses",
              },
              {
                category: "Cave",
                title: "Full Cave Certification",
                desc: "IANTD and UTD full cave training. Cave diving is the ultimate test and the ultimate teacher.",
                level: "Expert",
                href: "/courses",
              },
              {
                category: "Sidemount",
                title: "Sidemount Specialist",
                desc: "Maximum flexibility, minimum drag. From basic sidemount to full cave sidemount configurations.",
                level: "Intermediate+",
                href: "/courses",
              },
              {
                category: " rescue & leadership",
                title: "Rescue & Leadership",
                desc: "Problem recognition, management, and resolution. Learning to lead and be led.",
                level: "Intermediate",
                href: "/courses",
              },
            ].map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="card"
                style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
              >
                <div className="card-body" style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {course.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {course.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    {course.desc}
                  </p>
                </div>
                <div
                  style={{
                    padding: "0.85rem 1.5rem",
                    borderTop: "1px solid var(--border-dim)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      color: "var(--dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    {course.level}
                  </span>
                  <span style={{ color: "var(--gold)", fontSize: "0.85rem" }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo band ── */}
      <section
        style={{
          position: "relative",
          height: "clamp(280px, 40vw, 480px)",
          overflow: "hidden",
        }}
      >
        <Image
          src="/landscape.jpg"
          alt="Jay Gardner — instructor"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(2,5,10,0.7) 0%, transparent 50%, rgba(2,5,10,0.5) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(1.25rem, 4vw, 3rem)",
          }}
        >
          <div style={{ maxWidth: "580px" }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              The Instructor
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Jay Gardner has been teaching diving for over a decade.
            </h2>
            <Link href="/about" className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
              About Jay →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Gardner Underwater ── */}
      <section className="section section--dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-label">Why Train Here</span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Not a resort course. Not a factory.
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Most dive training is designed to check boxes. Gardner Underwater is designed to
                actually build skill — the kind that stays with you when everything goes wrong.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Small groups. Real feedback. Training that prioritizes competence over certification
                count. If you are committed to getting better, you are in the right place.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a Dive
                </Link>
                <Link href="/training" className="btn btn-outline">
                  Our Approach
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "var(--border)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {[
                { stat: "10+", label: "Years teaching" },
                { stat: "500+", label: "Students trained" },
                { stat: "4", label: "Certifying agencies" },
                { stat: "1", label: "Philosophy" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--abyss)",
                    padding: "clamp(1.5rem, 3vw, 2.5rem)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 800,
                      color: "var(--gold)",
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {stat}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section--sm section--void">
        <div className="container">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--dim)",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Certifications &amp; Affiliations
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(1.5rem, 4vw, 3.5rem)",
              flexWrap: "wrap",
            }}
          >
            {["UTD", "IANTD", "RAID International", "NSS-CDS", "Cave Divers Association"].map((org) => (
              <span
                key={org}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}