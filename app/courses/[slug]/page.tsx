import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, courseSlug } from "@/lib/courses";
import { categoryHeadings, courseDetails } from "@/lib/course-details";
import { getArticles } from "@/lib/articles";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { Arrow } from "@/components/SiteUI";
import { ArticleCard } from "@/components/ArticleCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return courses.map((course) => ({ slug: courseSlug(course.title) }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const item = courses.find((course) => courseSlug(course.title) === slug);
  if (!item) notFound();
  const description =
    courseDetails[slug]?.metaDescription ||
    item.desc.slice(0, 157).replace(/\s+\S*$/, "") + "…";
  return pageMetadata(
    `${item.title} in San Diego`,
    description,
    `/courses/${slug}`,
  );
}
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => courseSlug(item.title) === slug);
  if (!course) notFound();
  const sentences = course.desc.split(/(?<=[.!?])\s+/);
  const paragraphs = Array.from(
    { length: Math.ceil(sentences.length / 3) },
    (_, index) => sentences.slice(index * 3, index * 3 + 3).join(" "),
  );
  const detail = courseDetails[slug];
  const heading = detail?.heading || categoryHeadings[course.category] || "Train with purpose.";
  const isCoaching = course.category === "Scuba Coaching";
  const isDan = course.category === "DAN First Aid Training";
  const pricing = isCoaching
    ? { amount: "129", unit: "per month", note: "No minimum commitment" }
    : isDan
      ? { amount: "300", unit: "per course", note: "Typically one day" }
      : {
          amount: "300",
          unit: "per training day",
          note: "Total days discussed before booking",
        };
  const related = getArticles()
    .filter((article) => article.ctaCourse === slug)
    .slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: course.title,
        description: course.desc,
        url: absoluteUrl(`/courses/${slug}`),
        provider: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Training",
            item: absoluteUrl("/courses"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: course.title,
            item: absoluteUrl(`/courses/${slug}`),
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
      <section className="course-detail-intro">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/courses">Training</Link>
            <span aria-hidden="true">/</span>
            <span>{course.category}</span>
          </nav>
          <span className="eyebrow">{course.category}</span>
          <h1>{course.title}</h1>
          {course.tagline && <p className="large-copy">{course.tagline}</p>}
          <div className="course-detail-quicklinks">
            <Link
              href={`/contact?course=${course.slug}#consultation`}
              className="btn btn-dark"
            >
              Book this course <Arrow />
            </Link>
            <span>Start with a free 15-minute consultation.</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container course-detail-grid">
          <div className="course-detail-copy">
            <span className="eyebrow">About this training</span>
            <h2>{heading}</h2>
            <div className="prose">
              {(detail ? detail.lead : paragraphs).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {detail?.sections.map((section) => (
                <div key={section.title}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {detail?.next && (
                <div>
                  <h3>{detail.next.title}</h3>
                  <ul>
                    {detail.next.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>.{" "}
                        {link.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!detail && course.bullets && (
                <ul>
                  {course.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="course-detail-expectations">
              <h2>A personal approach.</h2>
              <p>
                You train directly with me, in a team of three or fewer. Every
                skill connects to a real dive, with time for observation,
                practice, and feedback.
              </p>
              <p>
                Start with a free 15-minute call. We’ll go over your experience,
                the prerequisites, your equipment, and what you want to achieve,
                then set dates together.
              </p>
              <Link href="/training" className="text-link">
                How we train <Arrow />
              </Link>
            </div>
          </div>
          <aside className="course-booking-card">
            <span className="eyebrow">Let’s make a plan</span>
            <div className="course-booking-price">
              ${pricing.amount}
              <span>{pricing.unit}</span>
            </div>
            <p>{pricing.note}</p>
            {course.duration && (
              <div className="course-duration">
                <strong>Typical duration</strong>
                <span>{course.duration}</span>
                <p>
                  Duration is a guide. Additional days may be recommended based
                  on your needs.
                </p>
              </div>
            )}
            <Link
              href={`/contact?course=${course.slug}#consultation`}
              className="btn btn-dark"
            >
              Book this course <Arrow />
            </Link>
            <span className="course-booking-note">
              Free 15-minute call · Arrange a time by email
            </span>
            <Link href="/pricing" className="text-link">
              See pricing details <Arrow />
            </Link>
          </aside>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section related-articles">
          <div className="container">
            <div className="landing-section-heading">
              <h2>Related reading</h2>
            </div>
            <div className="article-grid">
              {related.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
