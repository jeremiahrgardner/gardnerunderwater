import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CourseNav } from "@/components/CourseNav";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Gardner Underwater course curriculum: foundational, technical, DAN first aid, scuba coaching, and specialty courses.",
};

const courses = [
  // ── Technical Training ─────────────────────────────────────────────
  {
    category: "Technical Training",
    title: "Tech 1",
    tagline: "",
    desc: "Tech 1 is the next step beyond Techreational, expanding your abilities into deeper decompression diving while introducing Oxygen as a dedicated decompression gas. As depth and decompression obligations increase, so do the demands of proper gas management, team awareness, and precision execution. This course uses a critical skills approach where dives are treated as real dives with real objectives and evolving failures that require the team to problem-solve together under pressure. Training focuses heavily on mid-water control, ascent discipline, gas switches, valve drills, and handling failures away from the bottom — building the comfort, awareness, and confidence required for more advanced technical diving. Prerequisites include Techreational certification or equivalent, strong foundational technical skills, and comfort diving a twinset. Divers needing additional refinement may benefit from completing an Essentials of Tech course beforehand.",
    duration: "",
    bullets: null,
  },
  {
    category: "Technical Training",
    title: "Techreational",
    tagline: "",
    desc: "Techreational is the entry point into technical diving, introducing the theory, equipment, and in-water skills required for decompression diving. Despite the name and conservative limits, this is one of the most demanding courses in diving because the focus is not simply on depth, but on precision, awareness, and team performance under pressure. Training is built around critical skills dives where teams are given real objectives and unexpected failures that must be solved together in the water. The course develops advanced buoyancy, trim, propulsion, gas management, valve drills, ascent strategies, and decompression discipline while building the mindset and confidence required for safe technical diving. Students should already be comfortable with foundational technical skills such as frog kick, back kick, valve drills, and gas-switching procedures. Divers needing additional refinement are encouraged to complete an Essentials of Tech course beforehand.",
    duration: "",
    bullets: null,
  },
  {
    category: "Technical Training",
    title: "Essentials of Tech",
    tagline: "",
    desc: "Essentials of Tech is a personal skills class that prepares you for technical diving by advancing your control of buoyancy, trim, and propulsion, while introducing you to more advanced air sharing procedures and decompression bottle handling protocols. The class also introduces you to more advanced gas planning and more complicated ascent strategies.",
    duration: "4 Days*",
    bullets: null,
  },
  {
    category: "Technical Training",
    title: "Doubles (Backmount or Sidemount)",
    tagline: "Learn To Dive Doubles",
    desc: "The Purpose of the Doubles MINI is to introduce and train a diver in the use of either double tank back mount or side mount configurations. The course focuses on cultivating the practical, normal, and emergency skills required by all double tank divers, including buoyancy control, emergency procedures, and care and maintenance.",
    duration: "1-2 Days*",
    bullets: null,
  },

  // ── DAN First Aid Training ─────────────────────────────────────────
  {
    category: "DAN First Aid Training",
    title: "Diving First Aid for Professional Divers (DFA Pro)",
    tagline: "",
    desc: "DAN's DFA Pro course for commercial/professional divers. Includes all elements of DAN BLS and EO2 courses plus neurological assessment and hazardous marine life injuries.",
    duration: "",
    bullets: null,
  },
  {
    category: "DAN First Aid Training",
    title: "Basic Life Support: CPR and First Aid (BLS)",
    tagline: "",
    desc: "This fundamental course prepares you to provide proper care for life-threatening illnesses or injuries until professional emergency medical care is available. The life-support skills taught in this course include one- and two-rescuer CPR for adults, children and infants. Use of automatic external defibrillators, bleeding management, assisting a choking victims and responding to a person in shock.",
    duration: "",
    bullets: null,
  },
  {
    category: "DAN First Aid Training",
    title: "Emergency Oxygen for Scuba Diving Injuries (EO2)",
    tagline: "",
    desc: "The DAN Emergency Oxygen for Scuba Diving Injuries course teaches you how to administer life-saving oxygen first aid to divers who may be suffering from decompression illness (DCI).",
    duration: "",
    bullets: null,
  },

  // ── Scuba Coaching ────────────────────────────────────────────────
  {
    category: "Scuba Coaching",
    title: "Scuba Coaching",
    tagline: "",
    desc: "Coaching is a unique training model built for all levels of divers wanting to achieve gains in their diving. Great scuba training does not have to be focused on the outcome. It can be about the process.",
    duration: "",
    bullets: [
      "Weekly foundational diving training program",
      "Access to all of the Recreational online course content",
      "Regular communication with your coach",
      "Video review and feedback",
    ],
  },

  // ── Foundational Training ────────────────────────────────────────
  {
    category: "Foundational Training",
    title: "Essentials of Recreational Diving",
    tagline: "Become a \"Thinking Diver\"",
    desc: "Essentials of Rec is a skills class for certified divers. It brings you into the UTD diving system training us in all the techniques we use – proper buoyancy control through breathing, horizontal trim in the water, propulsion techniques that give you precise control, and much more.",
    duration: "3-days*",
    bullets: null,
  },
  {
    category: "Foundational Training",
    title: "Open Water Diver / Recreational 1",
    tagline: "Become a Scuba Diver",
    desc: "The Open Water Diver course is an entry level class designed to teach NON-certified divers to be safe and comfortable while enjoying the wonders of our oceans, lakes and other waters. This class is structured to prepare divers for recreational diving using proper equipment and proper diving techniques. Recreational 1 adds Nitrox as a breathing gas.",
    duration: "4-days*",
    bullets: null,
  },
  {
    category: "Foundational Training",
    title: "Recreational 2 / Advanced Open Water",
    tagline: "Expand Your Diving To Deeper Depths, Night, and Navigation",
    desc: "The Recreational 2 and Advanced Open Water Diver (Rec 2 and AOW) course is the next step for recreational divers to expand their diving to slightly deeper depths with more advanced gases. Rec 2/AOW is a modular class structured to prepare divers for a wider range of environmental conditions and more advanced recreational diving using proper equipment, diving techniques and breathing mixtures including a thorough knowledge of the use of Nitrox.",
    duration: "2-3 Days*",
    bullets: null,
  },
  {
    category: "Foundational Training",
    title: "Rescue Diver",
    tagline: "Be Prepared and Ready To Handle Emergencies",
    desc: "Rescue and Emergency Procedures may be one of the most valuable courses any diver can take. The Rescue Diver course is designed to prepare the student for a variety of emergency situations and is centered around both self-rescue and buddy-rescue. The Prerequisites for the UTD Rescue Diver course include First Aid/CPR/AED/Oxygen administration certifications.",
    duration: "2-3 Days*",
    bullets: null,
  },

  // ── Extensions & Specialties ──────────────────────────────────────
  {
    category: "Extensions & Specialties",
    title: "IDC Prep",
    tagline: "",
    desc: "Prepare for instructor development by refining buoyancy, trim, propulsion, basic skills, S-drills, valve drills, SMB deployment, weighting, ascent strategies, and Rock Bottom gas planning to demonstration quality.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Drysuit Diver",
    tagline: "",
    desc: "Learn the practical, normal, and emergency skills required for drysuit diving, including buoyancy control, emergency procedures, and suit care and maintenance.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "SMB/Surface Marker Buoy Extension",
    tagline: "",
    desc: "Develop the skills to deploy, manage, and recover a surface marker buoy while maintaining buoyancy, control, and safe ascent procedures.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Scooter/DPV",
    tagline: "",
    desc: "Learn to safely operate, manage, and maintain a scooter or DPV while improving efficiency, awareness, communication, and team diving skills.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Propulsion and/or Back Kick Extension",
    tagline: "",
    desc: "Refine non-silting propulsion and positioning kicks while maintaining neutral buoyancy, trim, and control.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Night Diver Extension",
    tagline: "",
    desc: "Build the skills for night diving, including light management, light signals, buoyancy control, emergency procedures, and safe ascents and descents.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Navigation Extension",
    tagline: "",
    desc: "Learn underwater navigation using both natural references and compass techniques while maintaining buoyancy, awareness, and emergency readiness.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Cylinder and Valve Technician",
    tagline: "",
    desc: "Learn to visually inspect, maintain, and oxygen-clean scuba cylinders and valves using organized procedures and proper safety precautions.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Nitrox Diver",
    tagline: "",
    desc: "Learn to safely plan and dive with Nitrox 32, including gas analysis, oxygen exposure, maximum operating depths, gas planning, and safe diving practices.",
    duration: "",
    bullets: null,
  },
  {
    category: "Extensions & Specialties",
    title: "Stage and/or Deco Bottle Extension",
    tagline: "",
    desc: "Learn proper stage or deco bottle handling, including rigging, gas management, gas switching, bottle passing, and related emergency procedures.",
    duration: "",
    bullets: null,
  },
];

const categories = [...new Set(courses.map((c) => c.category))];

const categoryNumbers: Record<string, string> = {
  "Technical Training": "01",
  "DAN First Aid Training": "02",
  "Scuba Coaching": "03",
  "Foundational Training": "04",
  "Extensions & Specialties": "05",
};

export default function CoursesPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero" style={{ background: "var(--ink-dark)" }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Full Curriculum</span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "var(--canvas)",
                maxWidth: "18ch",
                marginBottom: "0",
              }}
            >
              The Courses.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--ash)",
                maxWidth: "54ch",
                lineHeight: 1.8,
                marginTop: "2rem",
                fontWeight: 300,
              }}
            >
              Every course here is taught by Jay Gardner. If you are not sure where to start,
              contact me and we will figure it out together.
            </p>
          </ScrollReveal>

          {/* Decorative oversized number */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "clamp(1rem, 5vw, 4rem)",
              bottom: "-1.5rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(8rem, 18vw, 16rem)",
              fontWeight: 800,
              color: "transparent",
              WebkitTextStroke: "1px var(--border)",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            02
          </div>
        </div>
      </section>

      {/* ── Not sure? callout ── */}
      <div
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(1.5rem, 4vw, 2.5rem) 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  flexShrink: 0,
                }}
              >
                Not sure where you fit?
              </span>
              <p
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                  color: "var(--ash)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  maxWidth: "52ch",
                }}
              >
                Jay offers a free 15-minute call to help you find the right course for your goals and experience level.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>

      {/* ── Sticky section nav ── */}
      <CourseNav />

      {/* ── Course listing ── */}
      <section className="section">
        <div className="container">
          {categories.map((cat, catIndex) => {
            const catCourses = courses.filter((c) => c.category === cat);
            const sectionIds: Record<string, string> = {
              "Technical Training": "technical-training",
              "DAN First Aid Training": "dan-first-aid-training",
              "Scuba Coaching": "scuba-coaching",
              "Foundational Training": "foundational-training",
              "Extensions & Specialties": "extensions-specialties",
            };
            return (
              <div key={cat} id={sectionIds[cat]} style={{ marginBottom: "clamp(5rem, 10vw, 8rem)" }}>
                {/* Category header */}
                <ScrollReveal>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1.5rem",
                      marginBottom: "clamp(2.5rem, 5vw, 4rem)",
                      borderBottom: "1px solid var(--border)",
                      paddingBottom: "2rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                        letterSpacing: "0.2em",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        paddingTop: "0.25rem",
                      }}
                    >
                      {categoryNumbers[cat]}
                    </span>
                    <h2
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                        fontWeight: 800,
                        color: "var(--canvas)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {cat}
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: "clamp(1.25rem, 2.5vw, 2rem)",
                  }}
                >
                  {catCourses.map((course, courseIndex) => (
                    <ScrollReveal key={course.title} delay={courseIndex * 80}>
                      <div
                        className="card"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div className="card-body" style={{ flex: 1 }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.6rem",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              color: "var(--gold)",
                              display: "block",
                              marginBottom: "1rem",
                              opacity: 0.7,
                            }}
                          >
                            {course.category}
                          </span>

                          <h3
                            style={{
                              fontFamily: "'Syne', sans-serif",
                              fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                              fontWeight: 700,
                              color: "var(--canvas)",
                              marginBottom: "0.5rem",
                              lineHeight: 1.25,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {course.title}
                          </h3>

                          {course.tagline && (
                            <p
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.62rem",
                                color: "var(--gold)",
                                marginBottom: "1rem",
                                letterSpacing: "0.05em",
                                fontWeight: 500,
                              }}
                            >
                              {course.tagline}
                            </p>
                          )}

                          {course.desc && (
                            <p
                              style={{
                                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                                color: "var(--ash)",
                                lineHeight: 1.75,
                                marginBottom: "1.25rem",
                                fontWeight: 300,
                              }}
                            >
                              {course.desc}
                            </p>
                          )}

                          {course.bullets && course.bullets.length > 0 && (
                            <ul
                              style={{
                                fontSize: "clamp(0.82rem, 1.1vw, 0.9rem)",
                                color: "var(--ash)",
                                lineHeight: 1.75,
                                marginBottom: "1.25rem",
                                paddingLeft: "1.25rem",
                                listStyleType: "none",
                              }}
                            >
                              {course.bullets.map((b, i) => (
                                <li
                                  key={i}
                                  style={{
                                    position: "relative",
                                    paddingLeft: "1rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  <span
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      color: "var(--gold)",
                                      fontFamily: "'JetBrains Mono', monospace",
                                      fontSize: "0.5rem",
                                      top: "0.35rem",
                                    }}
                                  >
                                    —
                                  </span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {course.duration && (
                          <div
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.6rem",
                              color: "var(--dim)",
                              borderTop: "1px solid var(--border)",
                              padding: "clamp(0.85rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Course Duration: {course.duration}
                          </div>
                        )}

                        <div
                          style={{
                            borderTop: "1px solid var(--border)",
                            padding: "clamp(0.85rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)",
                          }}
                        >
                          <Link
                            href="/contact"
                            className="arrow-link"
                            style={{ fontSize: "0.65rem" }}
                          >
                            Book Now
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                              <path d="M1 5h12M8.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Duration footnote */}
          <ScrollReveal>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "2rem",
                marginTop: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--dim)",
                  lineHeight: 1.7,
                  letterSpacing: "0.03em",
                }}
              >
                *The course duration is determined by a baseline of the abilities of the average students and
                coupled with what we need to comfortably introduce the skills and go over the theory content.
                Additional training days may be added based on the diver&apos;s need.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--ink" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="container--narrow">
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Ready to book?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s talk about your goals.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                color: "var(--ash)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: "52ch",
                margin: "0 auto 2.5rem",
              }}
            >
              I do a free 15-minute call with prospective students before booking. Tell me where you are
              and where you want to go — I will tell you what it takes to get there.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Course
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}