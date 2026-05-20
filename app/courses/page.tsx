import Link from "next/link";

const courses = [
  // TECHNICAL TRAINING
  {
    category: "TECHNICAL TRAINING",
    items: [
      {
        title: "Essentials of Technical Diving",
        subtitle: "Tranistion From Recreational To Technical",
        description:
          "The Essentials of Technical Diving is the first step to move you from 'Recreational' diver to 'Technical' Diver and gives you all the personal skills you need to move to a technical training program. Essentials of Tec is a personal skills class that prepares you for technical depths by advancing your control of buoyancy, trim, and propulsion, while introducing you to more advanced air sharing procedures and deco bottle handling protocols. The class also introduces you to more advanced gas planning and more complicated ascent strategies.",
        duration: "Course Duration: 4 Days*",
      },
      {
        title: "Doubles (Backmount or Sidemount)",
        subtitle: "Learn To Dive Doubles",
        description:
          "The Purpose of the Doubles MINI is to introduce and train a diver in the use of either double tank back mount or side mount configurations. The course focuses on cultivating the practical, normal, and emergency skills required by all double tank divers, including buoyancy control, emergency procedures, and care and maintenance.",
        duration: "Course Duration: 1-2 Days*",
      },
    ],
  },
  // DAN
  {
    category: "DAN FIRST AID TRAINING",
    items: [
      {
        title: "Diving First Aid for Professional Divers (DFA Pro)",
        subtitle: "",
        description:
          "DAN's Diving First Aid for Professional Divers course is designed for commercial, professional, aquarium, and scientific divers, and it provides knowledge and first aid skills specifically for these work environments. DFA Pro includes all elements of the DAN BLS and EO2 courses and includes material on neurological assessment and first aid for hazardous marine life injuries.",
        duration: "",
      },
      {
        title: "Basic Life Support: CPR and First Aid (BLS)",
        subtitle: "",
        description:
          "This fundamental course prepares you to provide proper care for life-threatening illnesses or injuries until professional emergency medical care is available. The life-support skills taught in this course include one- and two-rescuer CPR for adults, children and infants. Use of automatic external defibrillators, bleeding management, assisting a choking victims and responding to a person in shock. The first aid skills taught include conducting secondary assessments, splinting and responding to medical emergencies.",
        duration: "",
      },
      {
        title: "Emergency Oxygen for Scuba Diving Injuries (EO2)",
        subtitle: "",
        description:
          "The DAN Emergency Oxygen for Scuba Diving Injuries course teaches you how to administer life-saving oxygen first aid to divers who may be suffering from decompression illness (DCI). Additionally, this course will teach you how to recognize the signs and symptoms of decompression illness and respond to them accordingly.",
        duration: "",
      },
    ],
  },
  // SCOUTING / COACHING
  {
    category: "SCOUTING COACHING",
    items: [
      {
        title: "Scuba Coaching",
        subtitle: "",
        description:
          "Coaching is a unique training model built for all levels of divers wanting to achieve gains in their diving. Great scuba training does not have to be focused on the outcome. It can be about the process. Utilizing a thorough, structured, and weekly process, coaching includes all the aspects to make you a better, well rounded diver including:",
        bullets: [
          "Weekly foundational diving training program",
          "Access to all of the Recreational online course content",
          "Regular communication with your coach",
          "Video review and feedback",
        ],
        duration: "",
      },
    ],
  },
  // FOUNDATIONAL TRAINING
  {
    category: "FOUNDATIONAL TRAINING",
    items: [
      {
        title: "Essentials of Recreational Diving",
        subtitle: 'Become a "Thinking Diver"',
        description:
          "Essentials of Rec is a skills class for certified divers. It brings you into the UTD diving system training you in all the techniques we use – proper buoyancy control through breathing, horizontal trim in the water, propulsion techniques that give you precise control, and much more.",
        duration: "Course Duration: 3-days*",
      },
      {
        title: "Open Water Diver / Recreational 1",
        subtitle: "Become a Scuba Diver",
        description:
          "The Open Water Diver course is an entry level class designed to teach NON-certified divers to be safe and comfortable while enjoying the wonders of our oceans, lakes and other waters. This class is structured to prepare divers for recreational diving using proper equipment and proper diving techniques. Recreational 1 adds Nitrox as a breathing gas.",
        duration: "Course Duration: 4-days*",
      },
      {
        title: "Recreational 2 / Advanced Open Water",
        subtitle: "Expand Your Diving To Deeper Depths, Night, and Navigation",
        description:
          "The Recreational 2 and Advanced Open Water Diver (Rec 2 and AOW) course is the next step for recreational divers to expand their diving to slightly deeper depths with more advanced gases. Rec 2/AOW is a modular class structured to prepare divers for a wider range of environmental conditions and more advanced recreational diving using proper equipment, diving techniques and breathing mixtures including a thorough knowledge of the use of Nitrox.",
        duration: "Course Duration: 2-3 Days*",
      },
      {
        title: "Rescue Diver",
        subtitle: "Be Prepared and Ready To Handle Emergencies",
        description:
          "Rescue and Emergency Procedures may be one of the most valuable courses any diver can take. The Rescue Diver course is designed to prepare the student for a variety of emergency situations and is centered around both self-rescue and buddy-rescue. The Prerequisites for the UTD Rescue Diver course include First Aid/CPR/AED/Oxygen administration certifications.",
        duration: "Course Duration: 2-3 Days*",
      },
      {
        title: "ESM — Efficient Sound Mindset",
        subtitle: "",
        description:
          "The ESM (Efficient Sound Mindset) course is a foundational mindset and personal development course for divers who want to build the mental skills that support peak performance in diving and in life.",
        duration: "",
      },
      {
        title: "Cave Diving Training",
        subtitle: "",
        description:
          "Comprehensive cave diving courses following UTD protocols. Cavern, Full Cave, and stage-dependent cave training available for divers ready to explore the underwater cave environment.",
        duration: "",
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <section style={{ background: "#000", padding: "4rem 1.5rem 3rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem" }}>COURSES</h1>
          <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 400, color: "#ccc" }}>The Courses</h2>
        </div>
      </section>

      {courses.map((section) => (
        <section key={section.category} style={{ background: "#000", padding: "4rem 1.5rem", borderTop: "1px solid #222" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", marginBottom: "2.5rem", borderBottom: "1px solid #333", paddingBottom: "0.75rem" }}>
              {section.category}
            </h2>
            <div style={{ display: "grid", gap: "3rem" }}>
              {section.items.map((course) => (
                <div key={course.title}>
                  <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", marginBottom: "0.5rem" }}>{course.title}</h3>
                  {course.subtitle && (
                    <p style={{ color: "#aaa", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                      <strong>{course.subtitle}</strong>
                    </p>
                  )}
                  <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#ccc" }}>{course.description}</p>
                  {"bullets" in course && Array.isArray((course as { bullets?: string[] }).bullets) && (
                    <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem", color: "#ccc" }}>
                      {(course as { bullets: string[] }).bullets.map((b) => (
                        <li key={b} style={{ marginBottom: "0.4rem" }}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {course.duration && (
                    <p style={{ fontStyle: "italic", color: "#888", fontSize: "0.9rem" }}>{course.duration}</p>
                  )}
                  <div style={{ marginTop: "1.25rem" }}>
                    <Link href="/contact" className="btn" style={{ fontSize: "0.8rem" }}>
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: "#111", padding: "4rem 1.5rem", textAlign: "center" }}>
        <Link href="/contact" className="btn">
          Book Your Course
        </Link>
      </section>
    </>
  );
}