import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "4rem 1.5rem",
          background: "#000",
        }}
      >
        <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
          READY TO{" "}
          <span style={{ color: "#ffffff", textDecoration: "underline", textDecorationThickness: "3px" }}>
            UNLOCK
          </span>
          <br />
          YOUR DIVING
          <br />
          <span style={{ color: "#ffffff", textDecoration: "underline", textDecorationThickness: "3px" }}>POTENTIAL</span>
          ?
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", maxWidth: "600px", marginBottom: "2.5rem", color: "#ccc" }}>
          Training Designed To Advance Your Skills, Your Control, and Your Brain.
        </p>
        <Link href="/contact" className="btn">
          START YOUR TRAINING JOURNEY
        </Link>
      </section>

      {/* The Why */}
      <section style={{ background: "#111", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2rem" }}>
            The Why
          </h2>
          <div style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            <p style={{ marginBottom: "1.5rem" }}>
              We've all experienced <strong>underwhelming</strong> training.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Training that leaves us with a plastic certification card but without the confidence to apply the skills we've now apparently 'mastered.' Too often traditional scuba classes leave us dissapointed -- designed to simply sell you the next class, or the next trip, or more gear.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              <strong>Gardner Underwater is built differently.</strong> Instead of selling certifications, we focus on the <strong>training</strong>. Instead of selling the next class, we focus on <strong>reaching the next plateau</strong>. Instead of selling gear you don't need, we focus on turning you into a <strong>Thinking Diver</strong>.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              If you're tired of getting the next certification card but not truly advancing in your diving confidence, skill, and awareness; you've found a home at Gardner Underwater. <em>Eyes Open. Brain On. Unified Team.</em> These are the foundations upon which you will build a scalable platform for reaching the highest levels in your diving. Are you ready to elevate your diving to new places?
            </p>
          </div>
        </div>
      </section>

      {/* The Who */}
      <section style={{ background: "#000", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2rem" }}>
            The Who
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            <strong>Who We Serve:</strong> <strong>Dedicated Divers.</strong> <strong>Committed To Growth.</strong> <strong>Ready To</strong> <strong>Advance</strong>.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            We serve divers who have a desire to be the best they can possibly be and unlock new heights in their diving careers. Divers often come to us knowing they want to improve, but not having a clear path forward.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            If you've been endlessly fumbling around with your gear configuration, or trying to learn a back kick from YouTube, or spending countless hours to dial in the 'right' gradient factor; you're not alone. The divers we serve best understand the importance of great training and are driven to continue to improve.
          </p>
          <Link href="/contact" className="btn">
            Book Your Course
          </Link>
        </div>
      </section>

      {/* Page Links */}
      <section style={{ background: "#111", padding: "5rem 1.5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { href: "/courses", title: "THE COURSES", desc: "Find The Right Course For You", ref: "e20" },
              { href: "/training", title: "THE TRAINING", desc: "Learn More About How We Train", ref: "e22" },
              { href: "/pricing", title: "THE PRICING", desc: "Let's Be Upfront About Money", ref: "e24" },
              { href: "/shop", title: "THE SHOP", desc: "Learn More About Our Operation", ref: "e26" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  padding: "2rem",
                  display: "block",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#888", fontSize: "0.9rem" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}