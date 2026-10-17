import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { extractInternalLinks } from "./content-links.ts";
import { courses } from "./courses.ts";
import { getResource } from "./resources.ts";
import { toolPaths } from "./tools.ts";

const plan = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "docs/seo/articles.json"), "utf8"),
);
export const clusters: { slug: string; name: string; pillar: string }[] =
  plan.clusters;
export type Article = {
  title: string;
  description: string;
  slug: string;
  cluster: string;
  isPillar: boolean;
  pillar: string | null;
  wave: number;
  primaryKeyword: string;
  secondaryKeywords: string[];
  ctaCourse: string | null;
  ctaPage: string | null;
  extraLinks: string[];
  answer: string;
  faqs: { q: string; a: string }[];
  video?: { youtubeId: string; title: string; uploadDate: string };
  publishedAt: string | null;
  lastReviewed: string | null;
  draft: boolean;
  body: string;
  calculatorDefaultsConfirmed?: boolean;
};
export const isContentPreview =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development";
const publicPages = new Set([
  "/",
  "/training",
  "/about",
  "/contact",
  "/pricing",
  "/shop",
  "/merch",
  "/courses",
  "/learn",
  ...toolPaths,
  "/privacy",
]);
const validDate = (value: unknown): value is string =>
  typeof value === "string" &&
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  Number.isFinite(Date.parse(value)) &&
  new Date(value).toISOString().slice(0, 10) === value;
export function validateArticles(articles: Article[]) {
  const errors: string[] = [],
    warnings: string[] = [];
  for (const article of articles) {
    const problems: string[] = [];
    const words = (article.answer || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    if (words < 40 || words > 60)
      problems.push("answer must contain 40–60 words");
    if (!article.description || article.description.length > 160)
      problems.push(
        "description is required and must be at most 160 characters",
      );
    if (!validDate(article.lastReviewed))
      problems.push("lastReviewed must be a valid YYYY-MM-DD date");
    if (!validDate(article.publishedAt))
      problems.push("publishedAt must be a valid YYYY-MM-DD date");
    if (!clusters.some((c) => c.slug === article.cluster))
      problems.push("unknown cluster");
    if (!article.title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug))
      problems.push("title and valid slug required");
    if (articles.filter((a) => a.slug === article.slug).length !== 1)
      problems.push("duplicate slug");
    if (article.ctaCourse && !courses.some((c) => c.slug === article.ctaCourse))
      problems.push("unknown ctaCourse");
    if (
      !article.ctaCourse &&
      (!article.ctaPage || !publicPages.has(article.ctaPage))
    )
      problems.push("valid ctaPage required when ctaCourse is null");
    if (
      article.isPillar
        ? article.pillar !== null
        : !articles.some(
            (a) =>
              a.slug === article.pillar &&
              a.isPillar &&
              a.cluster === article.cluster,
          )
    )
      problems.push("missing or invalid pillar target");
    if (/TODO\(jeremiah\)/.test(JSON.stringify(article)))
      problems.push("unresolved owner placeholders");
    if (
      article.slug === "rock-bottom-calculator" &&
      article.calculatorDefaultsConfirmed !== true
    )
      problems.push("calculator defaults require Jeremiah confirmation");
    if (!article.body.trim()) problems.push("body required");
    for (const [, slug] of article.body.matchAll(
      /<ResourceDownload\s+resource="([^"]+)"/g,
    ))
      if (!getResource(slug)) problems.push(`unknown resource: ${slug}`);
    let bodyLinks: string[] = [];
    try {
      bodyLinks = extractInternalLinks(article.body);
    } catch {
      problems.push("body must be valid MDX");
    }
    const links = [...(article.extraLinks || []), ...bodyLinks];
    for (const link of links) {
      if (typeof link !== "string") {
        problems.push("extraLinks must contain paths");
        continue;
      }
      const route = link.split(/[?#]/)[0];
      if (
        route.startsWith("/courses/") &&
        !courses.some((c) => `/courses/${c.slug}` === route)
      )
        problems.push(`unresolved link: ${route}`);
      if (
        route.startsWith("/learn/topic/") &&
        !clusters.some((c) => `/learn/topic/${c.slug}` === route)
      )
        problems.push(`unresolved link: ${route}`);
      else if (
        route.startsWith("/learn/") &&
        !route.startsWith("/learn/topic/") &&
        !articles.some(
          (a) => `/learn/${a.slug}` === route && (article.draft || !a.draft),
        )
      )
        problems.push(`unresolved link: ${route}`);
    }
    if (
      article.video?.youtubeId &&
      (!/^[A-Za-z0-9_-]{11}$/.test(article.video.youtubeId) ||
        !validDate(article.video.uploadDate) ||
        !article.video.title)
    )
      problems.push("video requires a valid YouTube ID, title and uploadDate");
    for (const problem of problems)
      (article.draft ? warnings : errors).push(`${article.slug}: ${problem}`);
  }
  return { errors, warnings };
}
export function readArticles(): Article[] {
  const directory = path.join(process.cwd(), "content/learn");
  if (!fs.existsSync(directory)) return [];
  const articles = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      if (data.slug !== file.slice(0, -4))
        throw new Error(`${file}: slug must match filename`);
      if (typeof data.draft !== "boolean")
        throw new Error(`${file}: draft must be explicitly true or false`);
      return { ...data, body: content } as Article;
    });
  const { errors } = validateArticles(articles);
  if (errors.length) throw new Error(errors.join("\n"));
  return articles.sort(
    (a, b) =>
      (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
      a.title.localeCompare(b.title),
  );
}
export function getArticles() {
  return readArticles().filter(
    (a) =>
      !a.draft &&
      !!a.publishedAt &&
      a.publishedAt <= new Date().toISOString().slice(0, 10),
  );
}
export function getRenderableArticles() {
  return isContentPreview ? readArticles() : getArticles();
}
export function getArticle(slug: string) {
  return getRenderableArticles().find((a) => a.slug === slug);
}
export function getRelatedArticles(
  article: Article,
  published: Article[] = getArticles(),
) {
  const siblings = published.filter(
    (a) => !a.draft && a.cluster === article.cluster && a.slug !== article.slug,
  );
  if (article.isPillar) return siblings;
  return [
    ...siblings.filter((a) => a.slug === article.pillar),
    ...siblings.filter((a) => a.slug !== article.pillar).slice(0, 2),
  ];
}
export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
