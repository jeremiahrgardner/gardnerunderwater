import Link from "next/link";
import { notFound } from "next/navigation";
import { clusters, getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/SiteUI";
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
    <>
      <PageIntro eyebrow="Learn" title={topic.name}>
        <p>
          <Link href="/learn">All learning topics</Link>
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          {articles.length ? (
            <div className="article-grid">
              {articles.map((a) => (
                <ArticleCard article={a} key={a.slug} />
              ))}
            </div>
          ) : (
            <p>Articles in this topic are being prepared.</p>
          )}
        </div>
      </section>
    </>
  );
}
