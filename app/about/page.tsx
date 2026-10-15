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
              Diver.
              <br />
              Teacher.
              <br />
              <span className="serif-accent">Teammate.</span>
            </h1>
            <p className="large-copy">
              Hey, I’m Jay Gardner.
              <br />
              Let’s find your next plateau.
            </p>
            <span className="intro-note">
              UTD Instructor #225 · San Diego, California
            </span>
          </div>
          <div className="about-portrait">
            <Image
              src="/portrait.jpg"
              alt="Jay Gardner, founder and instructor at Gardner Underwater"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
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
              Jay Gardner is the founder and operator of Gardner Underwater, and
              co-owner and Director of Development at{" "}
              <a
                href="https://utdscubadiving.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unified Team Diving
              </a>
              , a training agency committed to building thinking divers.
            </p>
            <p>
              His qualifications range from technical diving to cave diving. As
              a UTD instructor and coach, Jay helps divers build foundational,
              transformative, and sustaining skills, approaches, and mindset.
            </p>
            <p>
              Jay is also an instructor for Divers Alert Network (DAN), teaching
              Basic Life Support: CPR and First Aid (BLS), Emergency Oxygen for
              Scuba Diving Injuries (EO2), and Diving First Aid for Professional
              Divers (DFA Pro).
            </p>
            <p>
              Out of the water, he’s a girl dad, entrepreneur, best-selling
              author, internationally recognized speaker and coach, and co-host
              of{" "}
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
      <section className="section section-paper">
        <div className="container note-grid">
          <div className="note-photo">
            <Image
              src="/landscape.jpg"
              alt="Jay demonstrating how to handle a dive reel"
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
      <section className="section">
        <div className="container podcast-feature">
          <div>
            <div className="eyebrow">Pull up a chair</div>
            <h2>The Dive Table.</h2>
            <p className="large-copy">
              Good conversations about the world beneath the surface.
            </p>
          </div>
          <div>
            <p>
              Recreational and technical diving, travel, equipment, training,
              instruction, and the industry around it. Join the conversation on
              your favorite podcast platform.
            </p>
            <a
              href="https://www.thedivetable.com/episodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Listen to the show <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
