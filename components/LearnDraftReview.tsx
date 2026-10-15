import Link from "next/link";
import { getRenderableArticles, isContentPreview } from "@/lib/articles";

export function LearnDraftReview() {
  if (!isContentPreview) return null;
  const drafts = getRenderableArticles().filter((article) => article.draft);
  if (!drafts.length) return null;
  return (
    <details className="learn-review">
      <summary>Draft review · {drafts.length} unpublished articles</summary>
      <p>Preview only. These drafts are excluded from the public collection.</p>
      <ul>
        {drafts.map((article) => (
          <li key={article.slug}>
            <Link href={`/learn/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
