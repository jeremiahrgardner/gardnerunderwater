import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticle,
  getArticles,
  getRenderableArticles,
  renderArticle,
  formatArticleDate,
} from "@/lib/articles";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { Arrow } from "@/components/SiteUI";
import { courses, courseSlug } from "@/lib/courses";
import { ArticleCard } from "@/components/ArticleCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return getRenderableArticles().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  return {
    robots: article.draft ? { index: false, follow: false } : undefined,
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/articles/${article.slug}`,
      publishedTime: article.draft ? undefined : `${article.date}T12:00:00Z`,
      modifiedTime: article.draft
        ? undefined
        : `${article.updated || article.date}T12:00:00Z`,
      authors: [absoluteUrl("/about")],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const { html, headings } = renderArticle(article.body);
  const relatedCourse = courses.find(
    (course) => `/courses/${courseSlug(course.title)}` === article.course,
  );
  const related = getArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl(`/articles/${article.slug}#article`),
        headline: article.title,
        description: article.description,
        datePublished: article.draft ? undefined : `${article.date}T12:00:00Z`,
        dateModified: article.draft
          ? undefined
          : `${article.updated || article.date}T12:00:00Z`,
        author: {
          "@type": "Organization",
          name: article.author,
          url: absoluteUrl("/about"),
        },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
        image: absoluteUrl(article.image),
        articleSection: article.category,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: absoluteUrl("/articles"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: absoluteUrl(`/articles/${article.slug}`),
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <article>
        <header className="article-header">
          {article.draft && (
            <div className="container draft-banner" role="status">
              <strong>Draft preview</strong>
              <span>
                Unpublished template. Article copy must be written and approved
                by Jeremiah.
              </span>
            </div>
          )}
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/articles">Articles</Link>
              <span aria-hidden="true">/</span>
              <span>{article.category}</span>
            </nav>
            <div className="article-header-grid">
              <div>
                <span className="eyebrow">{article.category}</span>
                <h1>{article.title}</h1>
                <p className="article-deck">{article.description}</p>
                <div className="byline">
                  <span className="byline-mark">
                    <Image src="/logo.png" width={26} height={26} alt="" />
                  </span>
                  <div>
                    <Link href="/about">{article.author}</Link>
                    <span>
                      {article.draft ? (
                        "Not published"
                      ) : (
                        <time dateTime={article.date}>
                          {formatArticleDate(article.date)}
                        </time>
                      )}
                      <span aria-hidden="true"> · </span>
                      {article.readingMinutes} min read
                      {article.updated && (
                        <>
                          {" "}
                          · Updated{" "}
                          <time dateTime={article.updated}>
                            {formatArticleDate(article.updated)}
                          </time>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="article-header-image">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </header>
        <div className="container article-reading-grid">
          <aside className="article-sidebar">
            <nav aria-label="In this article">
              <h2>In this article</h2>
              {headings
                .filter((h) => h.depth === 2)
                .map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`}>
                    {heading.text}
                  </a>
                ))}
            </nav>
            <div className="article-sidebar-help">
              <span className="eyebrow">Your next step</span>
              <p>Turn the ideas into a training plan that fits your diving.</p>
              <Link href={article.course} className="text-link">
                Explore this training <Arrow />
              </Link>
            </div>
          </aside>
          <div className="article-main">
            <details className="article-mobile-toc">
              <summary>
                In this article <span aria-hidden="true">+</span>
              </summary>
              <nav aria-label="Article contents">
                {headings
                  .filter((h) => h.depth === 2)
                  .map((heading) => (
                    <a key={heading.id} href={`#${heading.id}`}>
                      {heading.text}
                    </a>
                  ))}
              </nav>
            </details>
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="article-training-cta">
              <span className="eyebrow">Put it into practice</span>
              <h2>
                What would you like
                <br />
                to work on?
              </h2>
              <p>
                Talk to Jay about your experience and goals. Start with a free
                15-minute consultation, then decide on your training together.
              </p>
              <div>
                <Link
                  href={`/contact?course=${encodeURIComponent(relatedCourse?.title || "Training consultation")}#consultation`}
                  className="btn btn-dark"
                >
                  Let’s talk training <Arrow />
                </Link>
                <Link href={article.course} className="text-link">
                  Explore related training <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section related-articles">
          <div className="container">
            <div className="landing-section-heading">
              <h2>Keep exploring.</h2>
              <Link href="/articles" className="text-link">
                All articles <Arrow />
              </Link>
            </div>
            <div className="article-grid">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
