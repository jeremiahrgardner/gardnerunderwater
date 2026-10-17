import { businessSchema, jsonLd } from "@/lib/site";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ConsultationCTA } from "@/components/SiteUI";
import { AgencyCredentials } from "@/components/AgencyCredentials";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Technical & DIR Dive Training in San Diego",
  "Technical dive training and in-water training days in San Diego. Build buoyancy, trim, gas and team skills with UTD instructor Jay Gardner in teams of 3 or fewer.",
  "/",
);

const paths = [
  {
    label: "Essentials of Tech",
    title: "Where technical diving starts.",
    text: "Buoyancy, trim, and propulsion held to a technical standard, plus air sharing, bottle handling, and gas planning. Go on to decompression diving or don’t. Either way, you won’t dive the same again.",
    href: "/courses/essentials-of-tech",
    link: "Explore Essentials of Tech",
    detail: "4 days · Leads to Techreational and Tech 1",
    featured: true,
  },
  {
    label: "Training days",
    title: "One day. One clear goal.",
    text: "Book a day in the water with me and work on what matters to you. Trim, propulsion, valve drills, gas switches, or getting ready for Essentials of Tech. Come with a goal. Leave with a plan.",
    href: "/contact?course=Training%20days#consultation",
    link: "Book a training day",
    detail: "$300 / day · Minimum 1 day",
  },
  {
    label: "Foundations",
    title: "Make the fundamentals automatic.",
    text: "Buoyancy, trim, and propulsion taught to one standard, so the basics stop taking up your attention. For certified divers at any stage.",
    href: "/courses/essentials-of-recreational-diving",
    link: "Explore foundational training",
    detail: "Essentials of Recreational Diving",
  },
];

const team = [
  [
    "Same gear. Same procedures.",
    "One consistent system means anyone trained this way can dive with you. No renegotiating the basics before every dive.",
  ],
  [
    "Small teams, real bonds",
    "Three students or fewer. You train alongside divers who want what you want, and you solve problems together in the water.",
  ],
  [
    "A team that keeps diving",
    "Training days, local dives, and trips with a community of like-minded thinking divers. The course ends. The team doesn’t.",
  ],
];

export default function HomePage() {
  const articles = getArticles().slice(0, 2);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema) }}
      />
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
            Technical dive training · Training days · San Diego & beyond
          </div>
          <h1 id="home-title">
            Certified isn’t{" "}
            <br />
            the same as capable.
          </h1>
          <p>
            Most divers stop getting better the day they get the card.
            <br className="desktop-break" /> I train the ones who don’t want
            to: technical training, focused training days, and a team that
            dives to one standard.
          </p>
          <div className="hero-actions">
            <Link href="/courses/essentials-of-tech" className="btn btn-primary">
              Explore Essentials of Tech <Arrow />
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
      <section className="section section-paper" aria-labelledby="why-title">
        <div className="container split-content">
          <div>
            <div className="eyebrow">Sound familiar?</div>
            <h2 id="why-title">
              Most training
              <br />
              sells the next card.
            </h2>
          </div>
          <div className="prose">
            <p>
              Every instructor taught it a little differently. You collected
              cards, not confidence. You’ve tried to fix your trim from YouTube,
              read every thread on gradient factors, and rebuilt your rig more
              than once. And the people you dive with at home don’t dive the way
              you want to.
            </p>
            <p>That isn’t a you problem. It’s a training problem.</p>
            <p>
              <strong>I don’t sell certifications. I train.</strong> You pay for
              the training. You earn the card. Teams of three or fewer. One
              consistent system, from your first skills day to your first
              decompression dive.
            </p>
            <p>
              Eyes open. Brain on. Unified team. That’s the standard. Everything
              here is built on it.
            </p>
          </div>
        </div>
      </section>
      <section className="section landing-paths" id="training-paths">
        <div className="container">
          <div className="landing-section-heading">
            <div>
              <span className="eyebrow">Where to start</span>
              <h2>
                What’s your
                <br />
                next level?
              </h2>
            </div>
            <p>
              You’re already a diver. The real question is what you want to be
              able to do next, and what’s in the way. Start where your skills
              are. Build from there.
            </p>
          </div>
          <div className="training-paths-grid">
            {paths.map((item, index) => (
              <article
                key={item.label}
                className={`training-path${"featured" in item ? " training-path-featured" : ""}`}
              >
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
            <p>Looking for monthly coaching, a specialty, or DAN first aid?</p>
            <Link href="/courses" className="text-link">
              See all training <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="landing-instructor">
        <div className="container landing-instructor-grid">
          <div className="landing-instructor-image instructor-surface-photo">
            <Image
              src="/photos/twin-caves-surface.webp"
              alt="Jay Gardner beside the boat at the Twin Caves surface entry"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <div className="instructor-nameplate">
              <strong>Jay Gardner</strong>
              <span>Your instructor. Your teammate.</span>
            </div>
          </div>
          <div className="landing-instructor-copy">
            <span className="eyebrow">Your instructor</span>
            <h2>
              I’ve been stuck.
              <br />
              I know the way out.
            </h2>
            <p className="large-copy">
              “I teach because I love it.
              <br />I dive because I’m obsessed with it.”
            </p>
            <p>
              I hit a wall as a diver. No feedback, no plan, no one to show me
              what I couldn’t see. Then I found training that held a standard
              and a coach who held me to it. It took me into technical diving,
              cave diving, and exploration. Now I do that for other divers.
            </p>
            <p>
              I’m Jay: UTD instructor, DAN instructor, cave diver, and co-host
              of The Dive Table. You train directly with me, in a team of three
              or fewer, with time to understand the why behind every skill.
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
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The team</div>
              <h2 id="team-title">
                Find your
                <br />
                crew.
              </h2>
            </div>
            <p>
              Diving the right way gets lonely when your local crew dives a
              different way. Here, you join a community of thinking divers who
              share one standard, in training and long after it.
            </p>
          </div>
          <div className="approach-grid">
            {team.map(([title, body], i) => (
              <article key={title} className="approach-card">
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
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
                  The thinking
                  <br />
                  behind the skills.
                </h2>
              </div>
              <Link href="/learn" className="text-link">
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
        href={absoluteUrl("/learn/feed.xml")}
      />
    </>
  );
}
