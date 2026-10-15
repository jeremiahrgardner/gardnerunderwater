import Link from "next/link";
import {
  clusters,
  getArticles,
  getRenderableArticles,
  isContentPreview,
} from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/SiteUI";
import { ArticleCard } from "@/components/ArticleCard";
export const metadata = pageMetadata(
  "Learn About DIR Diving",
  "Explore DIR foundations, dive gear, buoyancy, propulsion, gas planning and team diving. Learn with Gardner Underwater and find your next training step.",
  "/learn",
);
export default function LearnPage() {
  const articles = getArticles();
  return (
    <>
      <PageIntro eyebrow="Learn" title="Build your understanding.">
        <p>
          Explore the skills, equipment and decisions behind thoughtful team
          diving.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="article-grid">
            {clusters.map((c) => (
              <article className="article-card" key={c.slug}>
                <div className="article-card-copy">
                  <h2>
                    <Link href={`/learn/topic/${c.slug}`}>{c.name}</Link>
                  </h2>
                </div>
              </article>
            ))}
          </div>
          <h2>Latest articles</h2>
          {articles.length ? (
            <div className="article-grid">
              {articles.slice(0, 6).map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <p>
              Articles are being prepared. Explore our{" "}
              <Link href="/courses">training options</Link> in the meantime.
            </p>
          )}
          {isContentPreview && (
            <aside className="learn-draft">
              <h2>Draft review · preview only</h2>
              <ul>
                {getRenderableArticles()
                  .filter((a) => a.draft)
                  .map((a) => (
                    <li key={a.slug}>
                      <Link href={`/learn/${a.slug}`}>{a.title}</Link>
                    </li>
                  ))}
              </ul>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
