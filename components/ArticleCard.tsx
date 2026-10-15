import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { Arrow } from "./SiteUI";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article
      className={`article-card ${featured ? "article-card-featured" : ""}`}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="article-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 45vw"
        />
      </Link>
      <div className="article-card-copy">
        <div className="article-meta">
          <span>{article.draft ? "Draft template" : article.category}</span>
          <span>{article.readingMinutes} min read</span>
        </div>
        <h3>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <Link className="text-link" href={`/articles/${article.slug}`}>
          Read article <Arrow />
        </Link>
      </div>
    </article>
  );
}
