import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Gardner Underwater course curriculum: foundational, technical, DAN first aid, scuba coaching, and specialty courses.",
};

type Course = {
  category: string;
  title: string;
  tagline: string;
  desc: string;
  duration: string;
};

const courses: Course[] = [
  // ── Technical Training ─────────────────────────────────────────────
  {
    category: "Technical Training",
    title: "Essentials of Technical Diving",
    tagline: "Transition From Recreational To Technical",
    desc: "The Essentials of Technical Diving is the first step to move you from 'Recreational' diver to 'Technical' Diver and gives you all the personal skills you need to move to a technical training program. Essentials of Tec is a personal skills class that prepares you for technical depths by advancing your control of buoyancy, trim, and propulsion, while introducing you to more advanced air sharing procedures and deco bottle handling protocols. The class also introduces you to more advanced gas planning and more complicated ascent strategies.",
    duration: "4 Days*",
  },
  {
    category: "Technical Training",
    title: "Doubles (Backmount or Sidemount)",
    tagline: "Learn To Dive Doubles",
    desc: "The Purpose of the Doubles MINI is to introduce and train a diver in the use of either double tank back mount or side mount configurations. The course focuses on cultivating the practical, normal, and emergency skills required by all double tank divers, including buoyancy control, emergency procedures, and care and maintenance.",
    duration: "1–2 Days*",
  },

  // ── DAN First Aid Training ─────────────────────────────────────────
  {
    category: "DAN First Aid Training",
    title: "Diving First Aid for Professional Divers (DFA Pro)",
    tagline: "",
    desc: "DAN's Diving First Aid for Professional Divers course is designed for commercial, professional, aquarium, and scientific divers, and it provides knowledge and first aid skills specifically for these work environments. DFA Pro includes all elements of the DAN BLS and EO2 courses and includes material on neurological assessment and first aid for hazardous marine life injuries.",
    duration: "",
  },
  {
    category: "DAN First Aid Training",
    title: "Basic Life Support: CPR and First Aid (BLS)",
    tagline: "",
    desc: "This fundamental course prepares you to provide proper care for life-threatening illnesses or injuries until professional emergency medical care is available. The life-support skills taught in this course include one- and two-rescuer CPR for adults, children and infants. Use of automatic external defibrillators, bleeding management, assisting a choking victims and responding to a person in shock. The first aid skills taught include conducting secondary assessments, splinting and responding to medical emergencies.",
    duration: "",
  },
  {
    category: "DAN First Aid Training",
    title: "Emergency Oxygen for Scuba Diving Injuries (EO2)",
    tagline: "",
    desc: "The DAN Emergency Oxygen for Scuba Diving Injuries course teaches you how to administer life-saving oxygen first aid to divers who may be suffering from decompression illness (DCI). Additionally, this course will teach you how to recognize the signs and symptoms of decompression illness and respond to them accordingly.",
    duration: "",
  },

  // ── Scuba Coaching ────────────────────────────────────────────────
  {
    category: "Scuba Coaching",
    title: "Scuba Coaching",
    tagline: "",
    desc: "Coaching is a unique training model built for all levels of divers wanting to achieve gains in their diving. Great scuba training does not have to be focused on the outcome. It can be about the process. Utilizing a thorough, structured, and weekly process, coaching includes all the aspects to make you a better, well rounded diver.",
    duration: "",
  },

  // ── Foundational Training ────────────────────────────────────────
  {
    category: "Foundational Training",
    title: "Essentials of Recreational Diving",
    tagline: "Become a \"Thinking Diver\"",
    desc: "Essentials of Rec is a skills class for certified divers. It brings you into the UTD diving system training us in all the techniques we use – proper buoyancy control through breathing, horizontal trim in the water, propulsion techniques that give you precise control, and much more.",
    duration: "3 Days*",
  },
  {
    category: "Foundational Training",
    title: "Open Water Diver / Recreational 1",
    tagline: "Become a Scuba Diver",
    desc: "The Open Water Diver course is an entry level class designed to teach NON-certified divers to be safe and comfortable while enjoying the wonders of our oceans, lakes and other waters. This class is structured to prepare divers for recreational diving using proper equipment and proper diving techniques. Recreational 1 adds Nitrox as a breathing gas.",
    duration: "4 Days*",
  },
  {
    category: "Foundational Training",
    title: "Recreational 2 / Advanced Open Water",
    tagline: "Expand Your Diving To Deeper Depths, Night, and Navigation",
    desc: "The Recreational 2 and Advanced Open Water Diver (Rec 2 and AOW) course is the next step for recreational divers to expand their diving to slightly deeper depths with more advanced gases. Rec 2/AOW is a modular class structured to prepare divers for a wider range of environmental conditions and more advanced recreational diving using proper equipment, diving techniques and breathing mixtures including a thorough knowledge of the use of Nitrox.",
    duration: "2–3 Days*",
  },
  {
    category: "Foundational Training",
    title: "Rescue Diver",
    tagline: "Be Prepared and Ready To Handle Emergencies",
    desc: "Rescue and Emergency Procedures may be one of the most valuable courses any diver can take. The Rescue Diver course is designed to prepare the student for a variety of emergency situations and is centered around both self-rescue and buddy-rescue. The Prerequisites for the UTD Rescue Diver course include First Aid/CPR/AED/Oxygen administration certifications.",
    duration: "2–3 Days*",
  },
  {
    category: "Foundational Training",
    title: "ESM",
    tagline: "UTD's Extreme Scuba Makeover",
    desc: "UTD's Extreme Scuba Makeover is an entry level class designed to teach certified divers the foundational trim, buoyancy, and balance skills to be safe and comfortable in the water. This mini-class is structured to prepare divers for recreational diving and more advanced UTD classes.",
    duration: "1 Day*",
  },

  // ── Specialties & Minis ──────────────────────────────────────────
  {
    category: "Specialties & Minis",
    title: "IDC Prep",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Drysuit Diver",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "SMB/Surface Marker Buoy MINI",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Scooter/DPV",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Propulsion MINI and/or Back Kick MINI",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Night Diver MINI",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Navigation MINI",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Cylinder and Valve Technician",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Nitrox Diver",
    tagline: "",
    desc: "",
    duration: "",
  },
  {
    category: "Specialties & Minis",
    title: "Stage and/or Deco Bottle MINI",
    tagline: "",
    desc: "",
    duration: "",
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
            The Courses.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "54ch",
              lineHeight: 1.75,
            }}
          >
            Every course here is taught by Jay Gardner. If you are not sure where to start,
            contact me and we will figure it out together.
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
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.62rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            display: "block",
                            marginBottom: "0.75rem",
                          }}
                        >
                          {course.category}
                        </span>

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

                        {course.tagline && (
                          <p
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.65rem",
                              color: "var(--gold)",
                              marginBottom: "0.75rem",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {course.tagline}
                          </p>
                        )}

                        {course.desc && (
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
                        )}

                        {course.duration && (
                          <p
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.62rem",
                              color: "var(--dim)",
                              borderTop: "1px solid var(--border-dim)",
                              paddingTop: "0.85rem",
                              marginTop: "auto",
                            }}
                          >
                            Course Duration: {course.duration}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Duration footnote */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: "var(--dim)",
              lineHeight: 1.6,
              marginTop: "1rem",
            }}
          >
            *The course duration is determined by a baseline of the abilities of the average students and
            coupled with what we need to comfortably introduce the skills and go over the theory content.
            Additional training days may be added based on the diver&apos;s need.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container--narrow">
          <span className="section-label" style={{ justifyContent: "center" }}>
            Ready to book?
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
            Book Your Course
          </Link>
        </div>
      </section>
    </>
  );
}