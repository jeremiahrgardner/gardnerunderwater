import Link from "next/link";

export default function TrainingPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Training
          </h1>
          <p style={{ fontSize: "1.15rem", maxWidth: "700px", lineHeight: 1.7 }}>
            Training designed to help you achieve the highest standards of excellence in your diving and unlock your path forward in your diving career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#111", padding: "3rem 1.5rem" }}>
        <div className="container">
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "750px" }}>
            It starts with a simple philosophy: you pay for <em>training</em> but you earn certification. Training with Gardner Underwater means we focus on <strong>training first</strong>. Your focus will be on the process of training to meet the highest level of standards. Certification is the outcome.
          </p>
        </div>
      </section>

      {/* The How */}
      <section style={{ background: "#000", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2.5rem" }}>THE HOW</h2>
          <div style={{ display: "grid", gap: "2rem" }}>
            {[
              {
                title: "Individual Attention",
                text: 'All courses have a maximum student-instructor ratio of 3:1 to maintain a personal, engaged, and focused training environment.',
              },
              {
                title: "Correlation & Application",
                text: 'Every skill, procedure, and theory is presented in the context of real diving rather than in isolated "training" to help you correlate your training to your actual diving.',
              },
              {
                title: "Within A Team Diving Context",
                text: "The team is your backup – gas, equipment and brain. All courses are taught within the context of operating, thinking, and making decisions as a team.",
              },
              {
                title: "A Holistic Diving System",
                text: "Our unique approach of providing a unified, consistent, scalable and interchangeable system, we can help you reach your passion and dreams of achieving excellence.",
              },
              {
                title: "Neutrally Buoyant, In Trim, Switched On",
                text: "We dive how we teach, and teach how we dive in neutral buoyancy, in trim, and with our brains switched on.",
              },
              {
                title: "Train Anywhere, Anytime",
                text: "We conduct classes either at our homebase (San Diego, CA), your homebase (wherever you call home), or anywhere in the world (wherever you'd like to train).",
              },
            ].map((item) => (
              <div key={item.title} style={{ borderLeft: "3px solid #fff", paddingLeft: "1.5rem" }}>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#aaa", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Agencies */}
      <section style={{ background: "#111", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2rem" }}>THE AGENCIES</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            We are proud to be a part of <strong>Unified Team Diving</strong>, an agency obsessed with training <strong>Thinking Divers</strong>. UTD's roots can be found in Hogarthian/DIR diving principles and equipment configuration. UTD has continued to evolve and highlights consistency on multiple diving platforms offering over 60 courses from foundational to technical, cave, wreck, CCR, and more.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
            We are proud to be a part of <strong>Divers Alert Network</strong>, the world's most recognized and respected dive safety organization, DAN promotes diver safety worldwide through research, medicine, education & emergency support.
          </p>
        </div>
      </section>

      {/* Training Philosophy */}
      <section style={{ background: "#000", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2.5rem" }}>THE TRAINING PHILOSOPHY</h2>
          <div style={{ display: "grid", gap: "2.5rem" }}>
            {[
              {
                num: "1",
                title: "HONOR THE RELATIONSHIP",
                text: "I believe there is a sacred relationship that develops between a mentor and a mentee when both come together with an openness to grow. I will always honor the relationship first above all else.",
              },
              {
                num: "2",
                title: "STAY HUMBLE. STAY HUNGRY.",
                text: "There is always more to learn. When the student learns one thing, the instructor learns a hundred. I will always be humble in my approach and hungry to learn more.",
              },
              {
                num: "3",
                title: "PUT IN THE WORK",
                text: "Any growth in training is the result of a consistent, resilient, and earnest application of work. I will always search for opportunities to focus on the work rather than the outcome.",
              },
              {
                num: "4",
                title: "MAKE MISTAKES",
                text: "Mistakes come from taking new chances to grow. They represent opportunities to learn, to refine, and to move forward with more clarity than we had before. I will always be open to making mistakes.",
              },
              {
                num: "5",
                title: "FEEDBACK IS A MIRROR",
                text: 'Feedback, which is different from judgment, is the fuel for growth. Feedback is the process of holding a mirror to allow you to see what you can\'t otherwise see. I will always prioritize feedback as a tool in my coaching.',
              },
            ].map((item) => (
              <div key={item.num}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                  {item.num}. {item.title}
                </h3>
                <p style={{ color: "#aaa", lineHeight: 1.8 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}