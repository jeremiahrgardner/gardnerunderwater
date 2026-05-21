import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          backgroundImage: "url('/hero-dive.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(2,5,10,0.85) 0%, rgba(2,5,10,0.5) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}
          >
            READY TO{" "}
            <span style={{ color: "var(--gold)" }}>UNLOCK</span>
            <br />
            YOUR DIVING
            <br />
            <span style={{ color: "var(--gold)" }}>POTENTIAL</span>?
          </h1>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 600,
              color: "var(--white)",
              maxWidth: "52ch",
              lineHeight: 1.4,
              marginBottom: "2rem",
            }}
          >
            Training Designed To Advance Your Skills, Your Control, and Your Brain.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Start Your Training Journey
          </Link>
        </div>
      </section>

      {/* ── The Why ── */}
      <section className="section section--dark">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "2rem",
            }}
          >
            The Why
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            We&apos;ve all experienced <span style={{ color: "var(--gold)" }}>underwhelming</span>{" "}
            training.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Training that leaves us with a plastic certification card but without the confidence to
            apply the skills we&apos;ve now apparently &apos;mastered.&apos; Too often traditional scuba classes
            leave us disappointed — designed to simply sell you the next class, or the next trip, or
            more gear.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            <strong style={{ color: "var(--white)" }}>Gardner Underwater is built differently.</strong>{" "}
            Instead of selling certifications, we focus on the{" "}
            <strong style={{ color: "var(--gold)" }}>training</strong>. Instead of selling the next
            class, we focus on <strong style={{ color: "var(--gold)" }}>reaching the next plateau</strong>.
            Instead of selling gear you don&apos;t need, we focus on turning you into a{" "}
            <strong style={{ color: "var(--gold)" }}>Thinking Diver</strong>.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            If you&apos;re tired of getting the next certification card but not truly advancing in your
            diving confidence, skill, and awareness; you&apos;ve found a home at Gardner Underwater.{" "}
            <strong style={{ color: "var(--white)" }}>Eyes Open. Brain On. Unified Team.</strong> These are
            the foundations upon which you will build a scalable platform for reaching the highest
            levels in your diving. Are you ready to elevate your diving to new places?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* ── The Who ── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "1rem",
            }}
          >
            The Who
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--gold)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              marginBottom: "1.5rem",
              lineHeight: 1.4,
            }}
          >
            Who We Serve: Dedicated Divers. Committed To Growth. Ready To Advance.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
              maxWidth: "68ch",
            }}
          >
            We serve divers who have a desire to be the best they can possibly be and unlock new
            heights in their diving careers. Divers often come to us knowing they want to improve, but
            not having a clear path forward.
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
            If you&apos;ve been endlessly fumbling around with your gear configuration, or trying to learn
            a back kick from YouTube, or spending countless hours to dial in the &apos;right&apos; gradient factor;
            you&apos;re not alone. The divers we serve best understand the importance of great training and
            are driven to continue to improve.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
            <Link href="/courses" className="btn btn-outline">
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── Course / Training / Pricing / Shop links ── */}
      <section className="section section--dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { label: "THE COURSES", href: "/courses", sub: "Find The Right Course For You" },
              { label: "THE TRAINING", href: "/training", sub: "Learn More About How We Train" },
              { label: "THE PRICING", href: "/pricing", sub: "Let's Be Upfront About Money" },
              { label: "THE SHOP", href: "/shop", sub: "Learn More About Our Operation" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                className="card"
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact bar ── */}
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