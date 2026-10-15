import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { courses, courseSlug } from "@/lib/courses";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro, Arrow } from "@/components/SiteUI";

export const metadata: Metadata = pageMetadata(
  "Book a Course | Gardner Underwater, San Diego",
  "Book a scuba course or coaching with Gardner Underwater in San Diego. Call +1 (619) 880-0684 or send a message.",
  "/contact",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedCourse =
    typeof params.course === "string" ? params.course.slice(0, 200) : "";
  const matchedCourse = courses.find(
    (c) =>
      courseSlug(c.title) === requestedCourse || c.title === requestedCourse,
  );
  const selectedCourse = matchedCourse?.title || requestedCourse;
  return (
    <>
      <PageIntro
        eyebrow="Let’s start a conversation"
        title={
          <>
            Let’s find your
            <br />
            <span className="serif-accent">next level.</span>
          </>
        }
      >
        <p>
          Not sure which course is right for you? Start with a free 15-minute
          consultation. We’ll talk about your experience and arrange training
          that fits.
        </p>
        <span className="intro-note">
          Request a call by email. We’ll agree on a time together.
        </span>
      </PageIntro>
      <section className="section" id="consultation">
        <div className="container contact-grid">
          <ContactForm
            key={selectedCourse}
            selectedCourse={selectedCourse}
            courseSlug={matchedCourse ? courseSlug(matchedCourse.title) : ""}
          />
          <aside className="contact-sidebar">
            <div className="contact-direct">
              <div className="eyebrow">Prefer a direct conversation?</div>
              <h2>Give Jay a call.</h2>
              <p>Sometimes the simplest way is the best way.</p>
              <a className="contact-phone" href="tel:+16198800684">
                (619) 880-0684 <Arrow diagonal />
              </a>
              <a className="text-link" href="mailto:jay@gardnerunderwater.com">
                jay@gardnerunderwater.com <Arrow diagonal />
              </a>
            </div>
            <div className="next-steps">
              <div className="eyebrow">What happens next</div>
              {[
                [
                  "01",
                  "Share your goals",
                  "Tell me about your experience and what you want to work on.",
                ],
                [
                  "02",
                  "Have a conversation",
                  "We’ll arrange a free 15-minute call to find the right fit.",
                ],
                [
                  "03",
                  "Make a training plan",
                  "Choose training and dates that make sense for you.",
                ],
              ].map(([num, title, body]) => (
                <div key={num}>
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <span className="sidebar-location">
              <span className="status-dot" />
              Based in San Diego. Ready to train wherever you dive.
            </span>
          </aside>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">In their words</div>
              <h2>
                Better divers.
                <br />
                Better teammates.
              </h2>
            </div>
          </div>
          <div className="student-quotes">
            <figure>
              <blockquote>
                “Jay has a great teaching style and presence in his approach to
                scuba instruction. He took the time to help me dial in the
                skills I really wanted to focus on. I gained a lot from this
                training.”
              </blockquote>
              <figcaption>Thomas K</figcaption>
            </figure>
            <figure>
              <blockquote>
                “I have been diving and training together with Jay since the
                start of my scuba journey. He is a born leader and a hell of a
                teammate. Jay has helped me to grow into a better diver in the
                past year and he has this amazing talent of coaching in and out
                of water. He is a fun dude to talk to, a trustworthy dive buddy
                who will always has your back and a passionate instructor/coach
                whom you can learn a lot from.”
              </blockquote>
              <figcaption>X. Kong</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
