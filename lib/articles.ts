import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked, Renderer } from "marked";
import sanitizeHtml from "sanitize-html";

const directory = path.join(process.cwd(), "content/articles");
export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  course: string;
  draft: boolean;
  body: string;
  readingMinutes: number;
};

function requiredString(
  data: Record<string, unknown>,
  field: string,
  file: string,
): string {
  const value = data[field];
  if (typeof value !== "string" || !value.trim())
    throw new Error(`${file}: ${field} must be a nonempty string.`);
  return value.trim();
}

function validDate(value: string, file: string): string {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    !Number.isFinite(Date.parse(value)) ||
    new Date(value).toISOString().slice(0, 10) !== value
  )
    throw new Error(`${file}: use a valid YYYY-MM-DD date.`);
  return value;
}

const readArticles = cache((): Article[] => {
  const slugs = new Set<string>();
  const articles = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      const read = (field: string) => requiredString(data, field, file);
      const slug = read("slug");
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug))
        throw new Error(
          `${file}: article slugs must be unique, lowercase, and hyphenated.`,
        );
      slugs.add(slug);
      if (typeof data.draft !== "boolean")
        throw new Error(`${file}: draft must be true or false.`);
      const image = read("image");
      const publicRoot = path.join(process.cwd(), "public");
      const imagePath = path.resolve(publicRoot, `.${image}`);
      if (
        !image.startsWith("/") ||
        image.startsWith("//") ||
        !imagePath.startsWith(publicRoot + path.sep) ||
        !fs.existsSync(imagePath)
      )
        throw new Error(
          `${file}: image must reference a local file in public/.`,
        );
      const course = read("course");
      if (!/^\/courses(?:\/[a-z0-9-]+|#[a-z0-9-]+)?$/.test(course))
        throw new Error(`${file}: course must be a local training URL.`);
      const date = validDate(read("date"), file);
      const updated =
        data.updated === undefined
          ? undefined
          : validDate(read("updated"), file);
      if (updated && updated < date)
        throw new Error(`${file}: updated cannot precede date.`);
      if (!content.trim())
        throw new Error(`${file}: article body cannot be empty.`);
      if (
        marked
          .lexer(content)
          .some((token) => token.type === "heading" && token.depth === 1)
      )
        throw new Error(
          `${file}: start body headings at ##; the page already has a title.`,
        );
      return {
        slug,
        title: read("title"),
        description: read("description"),
        date,
        updated,
        author: read("author"),
        category: read("category"),
        image,
        imageAlt: read("imageAlt"),
        course,
        draft: data.draft,
        body: content,
        readingMinutes: Math.max(
          1,
          Math.ceil(content.split(/\s+/).length / 200),
        ),
      };
    });
  return articles.sort(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
  );
});

export const isContentPreview =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview";

export const getArticles = cache(() =>
  readArticles().filter(
    (article) =>
      !article.draft && article.date <= new Date().toISOString().slice(0, 10),
  ),
);

export function getRenderableArticles() {
  return isContentPreview ? readArticles() : getArticles();
}

export function getArticle(slug: string) {
  return getRenderableArticles().find((article) => article.slug === slug);
}

export function renderArticle(body: string) {
  const headings: { id: string; text: string; depth: number }[] = [];
  const seen = new Map<string, number>();
  const renderer = new Renderer();
  renderer.heading = function ({ tokens, depth, text }) {
    const label = sanitizeHtml(text, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const base =
      label
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "section";
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    const id = count ? `${base}-${count + 1}` : base;
    if (depth <= 3) headings.push({ id, text: label, depth });
    return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`;
  };
  const raw = marked.parse(body, { renderer, async: false, gfm: true });
  const html = sanitizeHtml(raw, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags.filter((tag) => tag !== "h1"),
      "img",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      h2: ["id"],
      h3: ["id"],
      h4: ["id"],
      img: ["src", "alt", "width", "height", "loading"],
      code: ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }),
    },
  });
  return { html, headings };
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
