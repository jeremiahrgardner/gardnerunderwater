import Link from "next/link";
import { getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { ArticleCard } from "@/components/ArticleCard";
import { LearnTopics } from "@/components/LearnTopics";
import { LearnDraftReview } from "@/components/LearnDraftReview";

export const metadata = pageMetadata(
  "Learn About DIR Diving",
  "Explore DIR foundations, dive gear, buoyancy, propulsion, gas planning and team diving. Learn with Gardner Underwater and find your next training step.",
  "/learn",
);

export default function LearnPage() {
  const articles = getArticles();
  return (
    <div className="learn-index container">
      <header className="learn-index-header">
        <h1>Learn.</h1>
        <p>Practical guidance for more confident, thoughtful diving.</p>
        <p className="learn-downloads-link">
          <Link href="/tools">Free tools and downloads: gas planner, SAC rate, nitrox and more</Link>
        </p>
      </header>
      <LearnTopics />
      <section
        className="learn-collection"
        aria-labelledby="learn-articles-title"
      >
        <div className="learn-collection-heading">
          <h2 id="learn-articles-title">Latest articles</h2>
          {articles.length > 0 && <span>{articles.length} articles</span>}
        </div>
        {articles.length ? (
          <div className="learn-article-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        ) : (
          <p className="learn-empty">
            Articles are being prepared. Explore our{" "}
            <Link href="/courses">training options</Link> in the meantime.
          </p>
        )}
      </section>
      <LearnDraftReview />
    </div>
  );
}
