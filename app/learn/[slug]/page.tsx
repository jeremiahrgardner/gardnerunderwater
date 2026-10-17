import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  clusters,
  getArticle,
  getRenderableArticles,
  getRelatedArticles,
  formatArticleDate,
} from "@/lib/articles";
import { courses } from "@/lib/courses";
import { pageMetadata } from "@/lib/metadata";
import {
  absoluteUrl,
  businessSchema,
  jsonLd,
  personSchema,
  site,
} from "@/lib/site";
import { Figure } from "@/components/Figure";
import { MinimumGasCalculator } from "@/components/MinimumGasCalculator";
import { YouTube } from "@/components/YouTube";
import { ArticleCard } from "@/components/ArticleCard";
export const dynamicParams = false;
export function generateStaticParams() {
  return getRenderableArticles().map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const cluster = clusters.find((c) => c.slug === article.cluster);
  return {
    ...pageMetadata(
      article.title,
      article.description,
      `/learn/${article.slug}`,
    ),
    keywords: articleKeywords(article),
    robots: article.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      ...pageMetadata(
        article.title,
        article.description,
        `/learn/${article.slug}`,
      ).openGraph,
      type: "article" as const,
      publishedTime: article.publishedAt || undefined,
      modifiedTime: article.lastReviewed || undefined,
      authors: [absoluteUrl("/about")],
      section: cluster?.name,
      tags: articleKeywords(article),
    },
  };
}
// The article's target search terms, deduplicated, for meta and structured data.
function articleKeywords(article: {
  primaryKeyword: string;
  secondaryKeywords: string[];
}) {
  return [
    ...new Set(
      [article.primaryKeyword, ...(article.secondaryKeywords || [])]
        .map((k) => k?.trim())
        .filter(Boolean),
    ),
  ];
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const cluster = clusters.find((c) => c.slug === article.cluster)!;
  const course = courses.find((c) => c.slug === article.ctaCourse);
  const related = getRelatedArticles(article);
  const crumbs = [
    { name: "Learn", path: "/learn" },
    { name: cluster.name, path: `/learn/topic/${cluster.slug}` },
    { name: article.title, path: `/learn/${article.slug}` },
  ];
  const keywords = articleKeywords(article);
  // Graph nodes share the page's @context, so drop each schema's own.
  const node = (schema: Record<string, unknown>) =>
    Object.fromEntries(
      Object.entries(schema).filter(([k]) => k !== "@context"),
    );
  const graph: object[] = [
    {
      "@type": "Article",
      headline: article.title,
      description: article.description,
      abstract: article.answer,
      datePublished: article.publishedAt || undefined,
      dateModified: article.lastReviewed || undefined,
      author: { "@id": `${site.url}/about#jeremiah-gardner` },
      publisher: { "@id": `${site.url}/#organization` },
      image: absoluteUrl("/social.jpg"),
      mainEntityOfPage: absoluteUrl(`/learn/${article.slug}`),
      articleSection: cluster.name,
      keywords: keywords.join(", "),
      inLanguage: "en-US",
      wordCount: article.body
        .replace(/<!--[\s\S]*?-->/g, "")
        .split(/\s+/)
        .filter((w) => /[A-Za-z0-9]/.test(w)).length,
    },
    { ...node(personSchema), url: absoluteUrl("/about") },
    node(businessSchema),
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.path),
      })),
    },
  ];
  // The same questions and answers are rendered visibly in the FAQ section below.
  if (article.faqs?.length)
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  if (article.video?.youtubeId && article.video.uploadDate)
    graph.push({
      "@type": "VideoObject",
      name: article.video.title,
      description: article.description,
      uploadDate: article.video.uploadDate,
      thumbnailUrl: `https://i.ytimg.com/vi/${article.video.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${article.video.youtubeId}`,
    });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      <article className="section">
        <div className="container learn-reading">
          {article.draft && (
            <aside className="learn-draft" role="note">
              <strong>Draft · preview only</strong>
              <p>
                Owner review required. This page is excluded from production and
                search indexing.
              </p>
            </aside>
          )}
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            {crumbs.map((c, i) => (
              <span key={c.path}>
                {i > 0 && <span aria-hidden="true"> › </span>}
                {i < 2 ? <Link href={c.path}>{c.name}</Link> : c.name}
              </span>
            ))}
          </nav>
          <header>
            <h1>{article.title}</h1>
            <div className="learn-answer">{article.answer}</div>
            <p className="article-meta">
              By <Link href="/about">Jeremiah Gardner</Link> · Last reviewed{" "}
              {article.lastReviewed ? (
                <time dateTime={article.lastReviewed}>
                  {formatArticleDate(article.lastReviewed)}
                </time>
              ) : (
                "Pending owner review"
              )}
            </p>
          </header>
          <div className="article-prose">
            <MDXRemote
              source={article.body.replace(/<!--[\s\S]*?-->/g, "")}
              components={{ Figure, YouTube, MinimumGasCalculator }}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
          {!!article.faqs?.length && (
            <section className="article-prose">
              <h2>Frequently asked questions</h2>
              {article.faqs.map((faq, i) => (
                <div key={i}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </section>
          )}
          <aside className="learn-course">
            <h2>{course?.title || "Find your next training step"}</h2>
            {course && (
              <p>{course.tagline || course.desc.split(/(?<=[.!?])\s+/)[0]}</p>
            )}
            <Link
              className="btn btn-dark"
              data-course-cta="true"
              data-course={course?.slug || ""}
              href={
                course
                  ? `/courses/${course.slug}`
                  : article.ctaPage || "/training"
              }
            >
              {course ? "Explore this course" : "Explore our approach"}
            </Link>
          </aside>
          {related.length > 0 && (
            <section>
              <h2>Related reading</h2>
              <div className="article-grid">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          )}
          <aside className="learn-author">
            <Image
              src="/photos/jay-gardner-shore.webp"
              alt="Jay Gardner in his drysuit beside the water"
              width={112}
              height={112}
              className="learn-author-photo"
            />
            <h2>Jeremiah Gardner</h2>
            <p>
              Jeremiah “Jay” Gardner teaches UTD recreational and technical
              diving in San Diego. He is a cave diver, a former UTD co-owner and
              a Divers Alert Network (DAN) instructor.
            </p>
            <p>
              <Link href="/about">About Jeremiah</Link> ·{" "}
              <a href="https://jeremiahgardner.com">jeremiahgardner.com</a>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
