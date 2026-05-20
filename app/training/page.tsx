import Link from "next/link";

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--dark)",
          padding: "5rem 1.5rem 4rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <span className="section-label">Our Approach</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Training
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--light)", maxWidth: "680px" }}>
            Training designed to help you achieve the highest standards of excellence in your diving and unlock your path forward in your diving career.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: "680px" }}>
            It starts with a simple philosophy: you pay for <em style={{ color: "var(--light)" }}>training</em> but you earn certification. Training with Gardner Underwater means we focus on <strong style={{ color: "var(--white)" }}>training first</strong>. Your focus will be on the process of training to meet the highest level of standards. Certification is the outcome.
          </p>
        </div>
      </section>

      {/* The How */}
      <section style={{ background: "var(--deep)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <span className="section-label">How We Do It</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: "3rem" }}>The How</h2>
          <div style={{ display: "grid", gap: "0" }}>
            {[
              {
                num: "01",
                title: "Individual Attention",
                text: 'All courses have a maximum student-instructor ratio of 3:1 to maintain a personal, engaged, and focused training environment.',
              },
              {
                num: "02",
                title: "Correlation & Application",
                text: 'Every skill, procedure, and theory is presented in the context of real diving rather than in isolated "training" to help you correlate your training to your actual diving.',
              },
              {
                num: "03",
                title: "Within A Team Diving Context",
                text: "The team is your backup – gas, equipment and brain. All courses are taught within the context of operating, thinking, and making decisions as a team.",
              },
              {
                num: "04",
                title: "A Holistic Diving System",
                text: "Our unique approach of providing a unified, consistent, scalable and interchangeable system, we can help you reach your passion and dreams of achieving excellence.",
              },
              {
                num: "05",
                title: "Neutrally Buoyant, In Trim, Switched On",
                text: "We dive how we teach, and teach how we dive — in neutral buoyancy, in trim, and with our brains switched on.",
              },
              {
                num: "06",
                title: "Train Anywhere, Anytime",
                text: "We conduct classes at our homebase (San Diego, CA), your homebase, or anywhere in the world.",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderBottom: i < 5 ? "1px solid var(--border)" : "none",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "var(--border)",
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--white)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies */}
      <section style={{ background: "var(--navy)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <span className="section-label">Our Affiliations</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: "2rem" }}>The Agencies</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.95, marginBottom: "2rem", color: "var(--muted)" }}>
            We are proud to be a part of <strong style={{ color: "var(--white)" }}>Unified Team Diving</strong>, an agency obsessed with training <strong style={{ color: "var(--white)" }}>Thinking Divers</strong>. UTD&apos;s roots can be found in Hogarthian/DIR diving principles and equipment configuration. UTD has continued to evolve and highlights consistency on multiple diving platforms offering over 60 courses from foundational to technical, cave, wreck, CCR, and more.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.95, color: "var(--muted)" }}>
            We are proud to be a part of <strong style={{ color: "var(--white)" }}>Divers Alert Network</strong>, the world&apos;s most recognized and respected dive safety organization, DAN promotes diver safety worldwide through research, medicine, education &amp; emergency support.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "var(--dark)", padding: "5rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <span className="section-label">The Foundation</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: "3rem" }}>Training Philosophy</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              {
                num: "1",
                title: "Honor The Relationship",
                text: "There is a sacred relationship that develops between a mentor and a mentee when both come together with an openness to grow. I will always honor the relationship first above all else.",
              },
              {
                num: "2",
                title: "Stay Humble. Stay Hungry.",
                text: "There is always more to learn. When the student learns one thing, the instructor learns a hundred. I will always be humble in my approach and hungry to learn more.",
              },
              {
                num: "3",
                title: "Put In The Work",
                text: "Any growth in training is the result of a consistent, resilient, and earnest application of work. I will always search for opportunities to focus on the work rather than the outcome.",
              },
              {
                num: "4",
                title: "Make Mistakes",
                text: "Mistakes come from taking new chances to grow. They represent opportunities to learn, to refine, and to move forward with more clarity than we had before.",
              },
              {
                num: "5",
                title: "Feedback Is A Mirror",
                text: "Feedback, which is different from judgment, is the fuel for growth. I will always prioritize feedback as a tool in my coaching.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "var(--navy)",
                  border: "1px solid var(--border)",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "var(--ocean)",
                    color: "var(--deep)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.num}
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--white)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--deep)", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}