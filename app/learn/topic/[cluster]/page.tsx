import Link from "next/link";
import { notFound } from "next/navigation";
import { clusters, getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { LearnTopics } from "@/components/LearnTopics";
import { ArticleCard } from "@/components/ArticleCard";
export const dynamicParams = false;
export function generateStaticParams() {
  return clusters.map((c) => ({ cluster: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const slug = (await params).cluster;
  const cluster = clusters.find((c) => c.slug === slug);
  if (!cluster) notFound();
  return pageMetadata(
    `${cluster.name} Articles`,
    `Explore ${cluster.name.toLowerCase()} with Gardner Underwater. Browse published articles and connect what you learn to scuba training in San Diego.`,
    `/learn/topic/${slug}`,
  );
}
export default async function TopicPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const slug = (await params).cluster;
  const topic = clusters.find((c) => c.slug === slug);
  if (!topic) notFound();
  const articles = getArticles()
    .filter((a) => a.cluster === slug)
    .sort((a, b) => Number(b.isPillar) - Number(a.isPillar));
  return (
    <div className="learn-index container">
      <header className="learn-index-header">
        <Link href="/learn" className="learn-back-link">
          ← All articles
        </Link>
        <h1>{topic.name}</h1>
        <p>Build your understanding, one dive at a time.</p>
      </header>
      <LearnTopics active={topic.slug} />
      <section
        className="learn-collection"
        aria-labelledby="learn-articles-title"
      >
        <div className="learn-collection-heading">
          <h2 id="learn-articles-title">Articles in this topic</h2>
          {articles.length > 0 && (
            <span>
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </span>
          )}
        </div>
        {articles.length ? (
          <div className="learn-article-grid">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.slug} compact />
            ))}
          </div>
        ) : (
          <p className="learn-empty">
            Articles in this topic are being prepared.{" "}
            <Link href="/learn">Browse all articles</Link> in the meantime.
          </p>
        )}
      </section>
    </div>
  );
}
