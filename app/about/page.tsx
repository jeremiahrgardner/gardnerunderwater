import { personSchema, jsonLd } from "@/lib/site";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { Arrow, ConsultationCTA } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata(
  "Jeremiah Gardner, UTD Scuba Instructor",
  "Jeremiah Gardner is a UTD scuba instructor, cave diver and coach in San Diego. His background, teaching philosophy and how to train with him.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(personSchema) }}
      />
      <section className="about-hero">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">The person behind the training</div>
            <h1>
              Cave Diver.
              <br />
              Teacher.
              <br />
              <span className="serif-accent">Teammate.</span>
            </h1>
            <p className="large-copy">
              Hey, I’m Jay Gardner.
              <br />
              Let’s find your next level.
            </p>
            <span className="intro-note">
              UTD Instructor #08 · Former UTD co-owner · San Diego
            </span>
          </div>
          <div className="about-portrait">
            <Image
              src="/photos/jay-gardner-leia-vita.webp"
              alt="Jay Gardner smiling in his drysuit beside the water"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
              priority
            />
            <span className="portrait-credit">Photo: Leia Vita</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container note-grid">
          <div className="note-photo">
            <Image
              src="/photos/cave-diving-artwork-2.webp"
              alt="A cave diver beneath a limestone ceiling, illuminating the passage with a primary light"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
          </div>
          <div className="prose">
            <div className="eyebrow">A note from me</div>
            <h2>Why I teach.</h2>
            <p>
              As a growing diver, I wanted to get better. But I reached a point
              where I wasn’t getting the feedback, observation, and guidance I
              needed. I was stuck.
            </p>
            <p>
              Then everything changed. I joined the UTD Coaching Program as a
              student. Its consistent, weekly, and tailored approach catapulted
              my diving to levels I had never imagined.
            </p>
            <p>
              As my journey expanded into technical diving, cave diving, and
              exploration, I received an exceptional education, continual
              feedback from a coach who had been there, and a unified approach
              to diving as a team.
            </p>
            <p>
              I started my professional diving career with one intention: to
              provide that same catapult for other divers. I teach because I
              love it. I dive because I’m obsessed with it.
            </p>
            <span className="signature">— Jay</span>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-content">
          <div>
            <div className="eyebrow">A little about me</div>
            <h2>
              Diving is the passion.
              <br />
              Teaching is the point.
            </h2>
          </div>
          <div className="prose">
            <p>
              I’m the founder of Gardner Underwater and a{" "}
              <a
                href="https://utdscubadiving.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unified Team Diving
              </a>{" "}
              instructor (#08). I was also a co-owner and Director of
              Development at UTD, so I know this system from the inside: how
              it’s built, why each piece is there, and how it should be taught.
            </p>
            <p>
              I hold recreational, technical, cave, and instructor ratings, and
              I dive the same system I teach. I’m also a Divers Alert Network
              (DAN) instructor for Basic Life Support (BLS), Emergency Oxygen for
              Scuba Diving Injuries (EO2), and Diving First Aid for Professional
              Divers (DFA Pro).
            </p>
            <p>
              Out of the water, I’m a girl dad, entrepreneur, best-selling
              author,{" "}
              <a
                href="https://jeremiahgardner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                internationally recognized speaker
              </a>{" "}
              and coach, and former co-host of{" "}
              <a
                href="https://www.thedivetable.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dive Table
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container podcast-feature">
          <div>
            <div className="eyebrow">From the archive</div>
            <h2>The Dive Table.</h2>
            <p className="large-copy">
              Good conversations about the world beneath the surface.
            </p>
          </div>
          <div>
            <p>
              I co-hosted The Dive Table, a podcast about recreational and
              technical diving, travel, equipment, training, instruction, and
              the industry around it. We’re no longer recording new episodes,
              but the archive is still there to explore.
            </p>
            <a
              href="https://www.thedivetable.com/episodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Listen to the archive <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
