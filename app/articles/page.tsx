import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticles,
  getRenderableArticles,
  isContentPreview,
} from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Arrow, ConsultationCTA } from "@/components/SiteUI";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  robots:
    getArticles().length === 0 || isContentPreview
      ? { index: false, follow: true }
      : undefined,
  title: "Scuba Training Articles & Field Notes",
  description:
    "Practical perspectives on scuba training, coaching, and choosing your next step as a certified diver.",
  alternates: {
    canonical: "/articles",
    types: { "application/rss+xml": "/articles/feed.xml" },
  },
  openGraph: {
    title: "Field notes for better diving",
    description: "Training advice and perspectives from Gardner Underwater.",
    url: "/articles",
    images: ["/social.jpg"],
  },
};

export default function ArticlesPage() {
  const articles = getArticles();
  const drafts = isContentPreview
    ? getRenderableArticles().filter((article) => article.draft)
    : [];
  return (
    <>
      <section className="journal-intro">
        <div className="container">
          <span className="eyebrow">The Gardner Underwater journal</span>
          <h1>
            Good questions.
            <br />
            <span>Better diving.</span>
          </h1>
          <div className="journal-intro-bottom">
            <p>
              Ideas, answers, and a little perspective on becoming a more
              capable diver. Start with what you’re curious about.
            </p>
            <a className="text-link" href="/articles/feed.xml">
              Follow the feed <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="journal-label">
            <h2>From the field notes</h2>
            <span>{articles.length} articles</span>
          </div>
          {articles.length > 0 ? (
            <div className="article-grid">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} featured />
              ))}
            </div>
          ) : (
            <div className="journal-empty">
              <h2>The next field notes are in preparation.</h2>
              <p>
                In the meantime, explore the training approach or talk to Jay
                about your diving.
              </p>
              <Link href="/training" className="text-link">
                How we train <Arrow />
              </Link>
            </div>
          )}
          {drafts.length > 0 && (
            <section className="draft-review-section">
              <div className="draft-banner">
                <strong>Drafts for editorial review</strong>
                <span>
                  These templates are excluded from the production site.
                </span>
              </div>
              <div className="article-grid">
                {drafts.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}
          <div className="journal-bottom-note">
            <span>
              Reading is a starting point. Good training puts it into practice.
            </span>
            <Link href="/courses" className="text-link">
              Explore training <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <ConsultationCTA />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Gardner Underwater articles"
        href={absoluteUrl("/articles/feed.xml")}
      />
    </>
  );
}
