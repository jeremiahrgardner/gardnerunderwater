import Link from "next/link";
import type { Article } from "@/lib/articles";
import { clusters } from "@/lib/articles";
import { Arrow } from "./SiteUI";
export function ArticleCard({ article }: { article: Article; featured?: boolean }) {
  return <article className="article-card"><div className="article-card-copy"><span className="eyebrow">{clusters.find(c => c.slug === article.cluster)?.name}</span><h3><Link href={`/learn/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><Link className="text-link" href={`/learn/${article.slug}`}>Read article <Arrow /></Link></div></article>;
}
