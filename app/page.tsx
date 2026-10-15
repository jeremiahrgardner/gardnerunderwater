import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ConsultationCTA } from "@/components/SiteUI";
import { AgencyCredentials } from "@/components/AgencyCredentials";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata("DIR Scuba Training in San Diego", "DIR-based scuba training and coaching in San Diego. Build real buoyancy, trim and team skills with UTD instructor Jeremiah Gardner in classes of 3 or fewer.", "/");

const paths = [
  {
    label: "Refine your skills",
    title: "Feel more at home in the water.",
    text: "Build the buoyancy, trim, and propulsion that make every dive feel more controlled. For certified divers at any stage.",
    href: "/courses/essentials-of-recreational-diving",
    link: "Explore foundational training",
    detail: "Essentials of Recreational Diving",
  },
  {
    label: "Keep progressing",
    title: "A coach in your corner.",
    text: "Turn practice into progress with a consistent plan, video review, and honest feedback. Work on the diver you want to become.",
    href: "/courses/scuba-coaching",
    link: "Discover scuba coaching",
    detail: "$129 / month · No minimum commitment",
  },
  {
    label: "Take the next step",
    title: "Build a foundation for going further.",
    text: "Prepare for the demands of technical diving through precise personal skills, clear thinking, and a team approach.",
    href: "/courses/essentials-of-tech",
    link: "Explore technical training",
    detail: "Essentials of Tech · Techreational · Tech 1",
  },
];

export default function HomePage() {
  const articles = getArticles().slice(0, 2);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"LocalBusiness\", \"@id\": \"https://gardnerunderwater.com/#organization\", \"name\": \"Gardner Underwater\", \"url\": \"https://gardnerunderwater.com\", \"logo\": \"https://gardnerunderwater.com/logo.png\", \"telephone\": \"+1-619-880-0684\", \"areaServed\": \"San Diego\", \"sameAs\": [\"https://www.facebook.com/gardnerunderwater/\", \"https://www.instagram.com/gardnerunderwater/\", \"https://www.youtube.com/@thedivetable\", \"https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1\"]}" }} />
      <section className="landing-hero" aria-labelledby="home-title">
        <Image
          src="/hero-cave.jpg"
          alt="Two divers exploring a sunlit cave in control and as a team"
          fill
          sizes="100vw"
          priority
        />
        <div className="landing-hero-shade" />
        <div className="container landing-hero-content">
          <div className="eyebrow">
            Scuba instruction & coaching · San Diego & beyond
          </div>
          <h1 id="home-title">
            Become the diver
            <br />
            you want to be.
          </h1>
          <p>
            Better control. Clearer thinking. More confidence.
            <br className="desktop-break" /> Personal training for certified
            divers ready to grow.
          </p>
          <div className="hero-actions">
            <Link href="#training-paths" className="btn btn-primary">
              Find your path <Arrow />
            </Link>
            <Link href="/about" className="hero-instructor-link">
              <span>Meet your instructor</span>
              <Arrow diagonal />
            </Link>
          </div>
          <div className="landing-hero-footer">
            <span>Eyes open. Brain on. Unified team.</span>
            <a
              href="#training-paths"
              aria-label="Start exploring training below"
            >
              <span>Start exploring</span>
              <Arrow />
            </a>
          </div>
        </div>
      </section>
      <AgencyCredentials />
      <section className="section landing-paths" id="training-paths">
        <div className="container">
          <div className="landing-section-heading">
            <div>
              <span className="eyebrow">Good divers never stop learning</span>
              <h2>
                Where would you
                <br />
                like to feel better?
              </h2>
            </div>
            <p>
              You’re already a diver. Your next step should match the diving you
              want to do and the skills you want to improve.
            </p>
          </div>
          <div className="training-paths-grid">
            {paths.map((item, index) => (
              <article key={item.label} className="training-path">
                <div className="path-index">
                  <span>0{index + 1}</span>
                  <span>{item.label}</span>
                </div>
                <h3>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p>{item.text}</p>
                <span className="training-path-detail">{item.detail}</span>
                <Link href={item.href} className="text-link">
                  {item.link}
                  <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <div className="landing-catalog-link">
            <p>Looking for a specific course, a specialty, or DAN first aid?</p>
            <Link href="/courses" className="text-link">
              See all training <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="landing-instructor">
        <div className="container landing-instructor-grid">
          <div className="landing-instructor-image">
            <Image
              src="/portrait.jpg"
              alt="Jay Gardner, UTD and DAN instructor, preparing scuba equipment"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <div className="instructor-nameplate">
              <strong>Jay Gardner</strong>
              <span>Your instructor. Your teammate.</span>
            </div>
          </div>
          <div className="landing-instructor-copy">
            <span className="eyebrow">
              Personal training. A real relationship.
            </span>
            <h2>
              Someone who sees
              <br />
              the diver in you.
            </h2>
            <p className="large-copy">
              “I teach because I love it.
              <br />I dive because I’m obsessed with it.”
            </p>
            <p>
              I know what it’s like to want more from your diving and feel
              stuck. The right coaching changed that for me. Now I help other
              divers find their way forward.
            </p>
            <p>
              I’m Jay—a UTD instructor, DAN instructor, and co-host of The Dive
              Table. You’ll train directly with me, in a small team, with time
              to understand the why and work on what matters to you.
            </p>
            <Link href="/about" className="text-link">
              Get to know Jay <Arrow />
            </Link>
            <figure className="instructor-student-proof">
              <blockquote>
                “He took the time to help me dial in the skills I really wanted
                to focus on. I gained a lot from this training.”
              </blockquote>
              <figcaption>
                Thomas K <span>· Gardner Underwater student</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {articles.length > 0 && (
        <section className="section landing-articles">
          <div className="container">
            <div className="landing-section-heading">
              <div>
                <span className="eyebrow">Field notes</span>
                <h2>
                  A little perspective.
                  <br />
                  For your next dive.
                </h2>
              </div>
              <Link href="/articles" className="text-link">
                Read all articles <Arrow />
              </Link>
            </div>
            <div className="article-grid">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
      <ConsultationCTA />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${site.name} articles`}
        href={absoluteUrl("/articles/feed.xml")}
      />
    </>
  );
}
