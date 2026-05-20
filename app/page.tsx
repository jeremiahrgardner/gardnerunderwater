import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero with dive photo */}
      <section
        className="hero-photo"
        style={{
          backgroundImage: "url('/hero-dive.jpg')",
          padding: "0 1.5rem 5rem",
        }}
      >
        <div className="container" style={{ paddingTop: "12rem", paddingBottom: "6rem" }}>
          <span className="section-label">Gardner Underwater</span>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 9vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            READY TO{" "}
            <em style={{ fontStyle: "normal", textDecoration: "underline", textDecorationThickness: "4px" }}>
              UNLOCK
            </em>
            <br />
            YOUR DIVING
            <br />
            <em style={{ fontStyle: "normal", textDecoration: "underline", textDecorationThickness: "4px" }}>
              POTENTIAL
            </em>
            ?
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              maxWidth: "520px",
              color: "#d1d5db",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            Training Designed To Advance Your Skills, Your Control, and Your Brain.
          </p>
          <Link href="/contact" className="btn">
            START YOUR TRAINING JOURNEY
          </Link>
        </div>
      </section>

      {/* The Why */}
      <section style={{ background: "var(--dark)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <span className="section-label">The Philosophy</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: "2.5rem" }}>
            The Why
          </h2>
          <div style={{ fontSize: "1.1rem", lineHeight: 1.9 }}>
            <p style={{ marginBottom: "1.5rem", color: "var(--light)" }}>
              We've all experienced <strong style={{ color: "var(--white)" }}>underwhelming</strong> training.
            </p>
            <p style={{ marginBottom: "1.5rem", color: "var(--muted)" }}>
              Training that leaves us with a plastic certification card but without the confidence to apply the skills we've now apparently 'mastered.' Too often traditional scuba classes leave us disappointed — designed to simply sell you the next class, or the next trip, or more gear.
            </p>
            <p style={{ marginBottom: "1.5rem", color: "var(--light)" }}>
              <strong style={{ color: "var(--white)" }}>Gardner Underwater is built differently.</strong> Instead of selling certifications, we focus on the <strong style={{ color: "var(--white)" }}>training</strong>. Instead of selling the next class, we focus on <strong style={{ color: "var(--white)" }}>reaching the next plateau</strong>. Instead of selling gear you don't need, we focus on turning you into a <strong style={{ color: "var(--white)" }}>Thinking Diver</strong>.
            </p>
            <p style={{ marginBottom: "1.5rem", color: "var(--muted)" }}>
              If you're tired of getting the next certification card but not truly advancing in your diving confidence, skill, and awareness; you've found a home at Gardner Underwater.
            </p>
            <p style={{ color: "var(--gray)", fontSize: "1rem", fontStyle: "italic" }}>
              <em>Eyes Open. Brain On. Unified Team.</em> These are the foundations upon which you build a scalable platform for reaching the highest levels in your diving.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* The Who */}
      <section style={{ background: "var(--deep)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <span className="section-label">Who We Serve</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: "2rem" }}>The Who</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "1.5rem", color: "var(--light)" }}>
            <strong style={{ color: "var(--white)" }}>Dedicated Divers.</strong>{" "}
            <strong style={{ color: "var(--white)" }}>Committed To Growth.</strong>{" "}
            <strong style={{ color: "var(--white)" }}>Ready To Advance.</strong>
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.5rem", color: "var(--muted)" }}>
            We serve divers who have a desire to be the best they can possibly be and unlock new heights in their diving careers. Divers often come to us knowing they want to improve, but not having a clear path forward.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "2.5rem", color: "var(--muted)" }}>
            If you've been endlessly fumbling around with your gear configuration, or trying to learn a back kick from YouTube, or spending countless hours to dial in the 'right' gradient factor; you're not alone. The divers we serve best understand the importance of great training and are driven to continue to improve.
          </p>
          <Link href="/contact" className="btn">
            Book Your Course
          </Link>
        </div>
      </section>

      <div className="divider" />

      {/* Course teasers */}
      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div className="container">
          <div className="card-grid">
            {[
              {
                href: "/courses",
                label: "THE COURSES",
                desc: "Find The Right Course For You",
                icon: "→",
              },
              {
                href: "/training",
                label: "THE TRAINING",
                desc: "Learn More About How We Train",
                icon: "→",
              },
              {
                href: "/pricing",
                label: "THE PRICING",
                desc: "Let's Be Upfront About Money",
                icon: "→",
              },
              {
                href: "/shop",
                label: "THE SHOP",
                desc: "Equipment Rentals & More",
                icon: "→",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="course-card"
                style={{ textDecoration: "none" }}
              >
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--ocean)", textTransform: "uppercase" }}>
                  {item.label}
                </span>
                <p style={{ fontSize: "1rem", marginTop: "0.75rem", marginBottom: "1.25rem", color: "var(--light)" }}>
                  {item.desc}
                </p>
                <span style={{ color: "var(--ocean)", fontSize: "1.2rem", fontWeight: 700 }}>{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom tagline */}
      <section
        style={{
          background: "var(--deep)",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", fontWeight: 700, color: "var(--gray)", fontStyle: "italic" }}>
          Eyes Open. Brain On. Unified Team.
        </p>
      </section>
    </>
  );
}