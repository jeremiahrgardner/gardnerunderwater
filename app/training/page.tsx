import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { PageIntro, ConsultationCTA, Arrow } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata("How We Train Thinking Divers", "Training first, certification second. Small 3:1 classes, skills taught in real-dive context, team-based procedures and video feedback in San Diego.", "/training");
const approach = [
  [
    "Individual attention",
    "All courses have a maximum student-to-instructor ratio of 3:1. A personal, engaged, and focused training environment gives you space to learn.",
  ],
  [
    "Real-world application",
    "Every skill, procedure, and theory is presented in the context of real diving. Connect what you practice to the dives you actually want to do.",
  ],
  [
    "A team diving mindset",
    "The team is your backup: gas, equipment, and brain. Learn to operate, think, and make decisions together.",
  ],
  [
    "One consistent system",
    "A unified, consistent, scalable, and interchangeable diving system helps you build on your skills as your goals evolve.",
  ],
  [
    "In trim. Switched on.",
    "We dive how we teach, and teach how we dive: neutrally buoyant, in trim, and with our brains switched on.",
  ],
  [
    "Train where you dive",
    "Train at our home base in San Diego, at your home base, or somewhere new. Your learning belongs in the environment where you’ll use it.",
  ],
];
const principles = [
  [
    "Honor the relationship",
    "There is a sacred relationship between a mentor and a mentee when both come together with an openness to grow. I will always honor the relationship first.",
  ],
  [
    "Stay humble. Stay hungry.",
    "There is always more to learn. When the student learns one thing, the instructor learns a hundred. I will always be humble in my approach and hungry to learn more.",
  ],
  [
    "Put in the work",
    "Growth comes from consistent, resilient, and earnest work. I will always search for opportunities to focus on the work rather than the outcome.",
  ],
  [
    "Make mistakes",
    "Mistakes come from taking new chances to grow. They are opportunities to learn, refine, and move forward with more clarity. I will always be open to making mistakes.",
  ],
  [
    "Feedback is a mirror",
    "Feedback is different from judgment. It is a mirror that lets you see what you can’t otherwise see. I will always prioritize feedback as a tool in my coaching.",
  ],
];

export default function TrainingPage() {
  return (
    <>
      <PageIntro
        eyebrow="The way we train"
        title={
          <>
            Train with
            <br />
            <span className="serif-accent">intention.</span>
          </>
        }
      >
        <p>
          You pay for training. You earn certification. Our focus is the process
          of building skills, confidence, and awareness that stay with you.
        </p>
        <span className="intro-note">
          The outcome is a more capable, thinking diver.
        </span>
      </PageIntro>
      <section className="wide-photo">
        <Image
          src="/hero-cave.jpg"
          alt="Divers maintaining trim while exploring together inside an underwater cave"
          fill
          sizes="100vw"
        />
        <div className="container">
          <span className="photo-label">
            Eyes open. Brain on. Unified team.
          </span>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The how</div>
              <h2>
                Good training.
                <br />
                Built around you.
              </h2>
            </div>
            <p>
              A deliberate approach, from the first conversation to the last
              debrief.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map(([title, body], i) => (
              <article key={title} className="approach-card">
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-content">
          <div>
            <div className="eyebrow">The training philosophy</div>
            <h2>
              Five things
              <br />I come back to.
            </h2>
            <p className="large-copy">
              A commitment to the relationship, the work, and the person behind
              the gear.
            </p>
            <span className="signature">— Jay Gardner</span>
          </div>
          <div className="principle-list">
            {principles.map(([title, body], i) => (
              <article key={title}>
                <span className="eyebrow">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The agencies</div>
              <h2>A shared standard.</h2>
            </div>
          </div>
          <div className="agency-grid">
            <a
              className="agency-card"
              href="https://utdscubadiving.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-topline">
                <span>Unified Team Diving</span>
                <Arrow diagonal />
              </div>
              <h3>UTD</h3>
              <p>
                Obsessed with training thinking divers. Rooted in Hogarthian/DIR
                principles, with a consistent approach across foundational,
                technical, cave, wreck, and CCR diving.
              </p>
            </a>
            <a
              className="agency-card"
              href="https://dan.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-topline">
                <span>Divers Alert Network</span>
                <Arrow diagonal />
              </div>
              <h3>DAN</h3>
              <p>
                Advancing diver safety worldwide through research, medicine,
                education, and emergency support. Practical first aid training
                for the moments that matter.
              </p>
            </a>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
