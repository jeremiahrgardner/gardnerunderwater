import Image from "next/image";
import Link from "next/link";
import { Arrow, ConsultationCTA } from "@/components/SiteUI";

const pathways = [
  {
    number: "01",
    title: "Build your foundation.",
    label: "Foundational training",
    text: "Buoyancy. Trim. Control. Develop the skills and awareness that make every dive better.",
    href: "/courses#foundational-training",
    tag: "Start here",
  },
  {
    number: "02",
    title: "Explore what’s next.",
    label: "Technical training",
    text: "Move beyond recreational limits with a deliberate, team-based approach to technical diving.",
    href: "/courses#technical-training",
    tag: "Go further",
  },
  {
    number: "03",
    title: "Keep getting better.",
    label: "Scuba coaching",
    text: "Build momentum through consistent practice, honest feedback, and a plan that grows with you.",
    href: "/courses#scuba-coaching",
    tag: "Stay curious",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Independent scuba training · San Diego & beyond
            </div>
            <h1>
              More control.
              <br />
              More confidence.
              <br />
              <span>Better diving.</span>
            </h1>
            <p>
              Training designed to advance your skills, your control, and your
              brain. For dedicated divers who are ready to grow.
            </p>
            <div className="hero-actions">
              <Link href="/courses" className="btn btn-dark">
                Find your next course <Arrow />
              </Link>
              <Link href="/training" className="text-link">
                The way we train <Arrow diagonal />
              </Link>
            </div>
            <div className="hero-bottom">
              <span className="hero-coordinate">32°43′ N &nbsp; 117°09′ W</span>
              <span>Eyes open. Brain on.</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/hero-cave.jpg"
              alt="Two divers exploring a sunlit underwater cave as a team"
              fill
              sizes="(max-width: 760px) 100vw, 52vw"
              priority
            />
            <div className="photo-marker">
              <span className="marker-cross" aria-hidden="true">
                +
              </span>
              There’s more to discover.
            </div>
            <div className="photo-caption">
              <span>
                Built for the dive.
                <br />
                Not just the certification.
              </span>
              <span className="photo-arrow">
                <Arrow />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container trust-grid">
          <div>
            <span className="trust-number">3:1</span>
            <span>Maximum student-to-instructor ratio</span>
          </div>
          <div>
            <span className="trust-name">UTD + DAN</span>
            <span>Thoughtful training. Real-world skills.</span>
          </div>
          <div>
            <span className="trust-name">Your goals. Your pace.</span>
            <span>Train in San Diego, or wherever you dive.</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A path forward</div>
              <h2>
                Where do you
                <br />
                want to go?
              </h2>
            </div>
            <p>
              You don’t need another certification card.
              <br />
              You need a clear path to becoming the diver you want to be.
            </p>
          </div>
          <div className="pathways">
            {pathways.map((path) => (
              <Link key={path.number} href={path.href} className="pathway-card">
                <div className="card-topline">
                  <span>
                    {path.number} / {path.label}
                  </span>
                  <Arrow diagonal />
                </div>
                <span className="pathway-tag">{path.tag}</span>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <span className="text-link">
                  Explore the training <Arrow />
                </span>
              </Link>
            ))}
          </div>
          <div className="section-footnote">
            <span>Looking for first aid training or a specific skill?</span>
            <Link href="/courses" className="text-link">
              See the full curriculum <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="philosophy-feature">
        <div className="container philosophy-grid">
          <div>
            <div className="eyebrow">The Gardner Underwater difference</div>
            <h2>
              Train for the diver
              <br />
              you’re becoming.
            </h2>
            <p className="large-copy">
              We focus on the training, not the certification. On reaching your
              next plateau, not selling you gear you don’t need.
            </p>
            <p>
              We’ve all experienced underwhelming training: a plastic
              certification card without the confidence to apply what we’ve
              learned. Here, you’ll find focused instruction, honest feedback,
              and a team that challenges you to think.
            </p>
            <Link href="/training" className="text-link">
              Get to know our approach <Arrow />
            </Link>
          </div>
          <div className="principle-stack">
            {[
              [
                "01",
                "Eyes open.",
                "See the whole dive. Build awareness of yourself, your team, and your environment.",
              ],
              [
                "02",
                "Brain on.",
                "Understand the why. Make deliberate decisions, rather than just following a checklist.",
              ],
              [
                "03",
                "Unified team.",
                "Train together. Your team is your backup: gas, equipment, and brain.",
              ],
            ].map(([num, title, text]) => (
              <div key={num}>
                <span className="eyebrow">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container instructor-grid">
          <div className="instructor-photo">
            <Image
              src="/portrait.jpg"
              alt="Jay Gardner smiling while preparing scuba equipment"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span className="photo-label">
              Jay Gardner · UTD Instructor #225
            </span>
          </div>
          <div className="instructor-copy">
            <div className="eyebrow">Your instructor. Your teammate.</div>
            <h2>Hey, I’m Jay.</h2>
            <p className="large-copy">
              I teach because I love it.
              <br />I dive because I’m obsessed with it.
            </p>
            <p>
              I know what it feels like to want more from your diving and not
              know how to get there. Coaching changed that for me. Now I help
              other divers find their own next plateau, with practical training
              and feedback that makes a difference.
            </p>
            <p>
              Founder of Gardner Underwater, UTD instructor, DAN instructor, and
              co-host of The Dive Table.
            </p>
            <Link href="/about" className="text-link">
              A little more about me <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container testimonial-grid">
          <div className="eyebrow">From the dive team</div>
          <figure>
            <blockquote>
              “He took the time to help me dial in the skills I really wanted to
              focus on. I gained a lot from this training.”
            </blockquote>
            <figcaption>
              <span className="quote-rule" />
              Thomas K <span>· Gardner Underwater student</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
