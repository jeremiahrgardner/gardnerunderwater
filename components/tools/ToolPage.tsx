import Link from "next/link";
import type { ReactNode } from "react";
import { getArticles } from "@/lib/articles";
import { courses } from "@/lib/courses";
import { absoluteUrl, businessSchema, jsonLd, personSchema, site } from "@/lib/site";
import type { Tool } from "@/lib/tools";
import { ArticleCard } from "../ArticleCard";
import { ResourceDownload } from "../ResourceDownload";

// Layout for one tool page: answer, calculator, explainer, download, FAQ, course and reading.
export function ToolPage({
  tool,
  children,
  explainer,
}: {
  tool: Tool;
  children: ReactNode;
  explainer: ReactNode;
}) {
  const url = absoluteUrl(`/tools/${tool.slug}`);
  const course = courses.find((c) => c.slug === tool.course);
  const articles = getArticles();
  const related = tool.related
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a) => !!a);
  const crumbs = [
    { name: "Tools", path: "/tools" },
    { name: tool.name, path: `/tools/${tool.slug}` },
  ];
  // Graph nodes share the page's @context, so drop each schema's own.
  const node = (schema: Record<string, unknown>) =>
    Object.fromEntries(
      Object.entries(schema).filter(([k]) => k !== "@context"),
    );
  const graph = [
    {
      "@type": "WebApplication",
      "@id": `${url}#tool`,
      name: tool.title,
      description: tool.description,
      abstract: tool.answer,
      url,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any web browser",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
      inLanguage: "en-US",
      author: { "@id": `${site.url}/about#jeremiah-gardner` },
      publisher: { "@id": `${site.url}/#organization` },
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
    {
      "@type": "FAQPage",
      mainEntity: tool.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }),
        }}
      />
      <article className="section">
        <div className="container learn-reading tool-page">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            {crumbs.map((c, i) => (
              <span key={c.path}>
                {i > 0 && <span aria-hidden="true"> › </span>}
                {i < crumbs.length - 1 ? <Link href={c.path}>{c.name}</Link> : c.name}
              </span>
            ))}
          </nav>
          <header>
            <h1>{tool.title}</h1>
            <div className="learn-answer">{tool.answer}</div>
            <p className="article-meta">
              By <Link href="/about">Jeremiah Gardner</Link> · Free. Runs in
              your browser. Nothing you enter is saved or sent.
            </p>
          </header>
          {children}
          <p className="tool-disclaimer">
            A training aid, not a substitute for training or your team’s plan.
            Imperial units, salt water.
          </p>
          <div className="article-prose">{explainer}</div>
          <ResourceDownload resource={tool.resource} />
          <section className="article-prose">
            <h2>Frequently asked questions</h2>
            {tool.faqs.map((faq) => (
              <div key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </section>
          {course && (
            <aside className="learn-course">
              <h2>{course.title}</h2>
              <p>{course.tagline || course.desc.split(/(?<=[.!?])\s+/)[0]}</p>
              <Link
                className="btn btn-dark"
                data-course-cta="true"
                data-course={course.slug}
                href={`/courses/${course.slug}`}
              >
                Explore this course
              </Link>
            </aside>
          )}
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
          <p className="tool-more">
            <Link href="/tools">All tools and downloads</Link>
          </p>
        </div>
      </article>
    </>
  );
}
