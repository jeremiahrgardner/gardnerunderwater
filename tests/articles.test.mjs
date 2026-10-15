import test from "node:test";
import assert from "node:assert/strict";
import { getArticles, getArticle, renderArticle } from "../lib/articles.ts";
import { courses, courseSlug } from "../lib/courses.ts";

test("published articles have unique slugs and real training destinations", () => {
  const articles = getArticles();
  assert.deepEqual(readFixture([{}]), ["useful-article"]);
  assert.equal(
    new Set(articles.map((article) => article.slug)).size,
    articles.length,
  );
  for (const article of articles) {
    assert.equal(article.draft, false);
    const slug = article.course.replace("/courses/", "");
    assert.ok(
      article.course === "/courses" ||
        courses.some((course) => courseSlug(course.title) === slug),
    );
  }
});

test("draft articles and unknown slugs cannot be retrieved for public pages", () => {
  assert.equal(getArticle("choosing-your-next-scuba-course"), undefined);
  assert.equal(getArticle("scuba-coaching-or-a-course"), undefined);
  assert.equal(getArticle("your-article-slug"), undefined);
  assert.equal(getArticle("not-an-article"), undefined);
  assert.equal(getArticle("../../package.json"), undefined);
});

test("article rendering removes scripts, event handlers, and executable link protocols", () => {
  const { html } = renderArticle(
    '<script>alert("bad")</script>\n\n<img src="/photo.jpg" onerror="alert(1)" alt="A photo">\n\n[Unsafe](javascript:alert(1))\n\n[Training](/courses)',
  );
  assert.doesNotMatch(html, /<script|onerror=|href="javascript:/i);
  assert.match(html, /href="\/courses"/);
  assert.match(html, /loading="lazy"/);
});

test("repeated headings get unique fragment IDs and a matching table of contents", () => {
  const { html, headings } = renderArticle(
    "## A good question\n\nAn answer.\n\n## A good question\n\nAnother answer.\n\n### Details",
  );
  assert.deepEqual(
    headings.map((heading) => heading.id),
    ["a-good-question", "a-good-question-2", "details"],
  );
  for (const heading of headings)
    assert.ok(html.includes(`id="${heading.id}"`));
});

test("Markdown preserves accessible link text, image descriptions, lists, and emphasis", () => {
  const { html } = renderArticle(
    "## Start here\n\n**Clear advice.** [Explore training](/courses)\n\n- A useful step\n- Another step\n\n![Jay demonstrating a reel](/landscape.jpg)",
  );
  assert.match(html, /<strong>Clear advice\.<\/strong>/);
  assert.match(html, />Explore training<\/a>/);
  assert.match(html, /<ul>/);
  assert.match(html, /alt="Jay demonstrating a reel"/);
});

test("course detail routes are unique across the full catalog", () => {
  assert.equal(
    new Set(courses.map((course) => courseSlug(course.title))).size,
    courses.length,
  );
});

// Use isolated content trees to exercise publishing failures without touching real posts.
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

function readFixture(overrides) {
  const root = mkdtempSync(path.join(tmpdir(), "gu-articles-"));
  try {
    mkdirSync(path.join(root, "content/articles"), { recursive: true });
    mkdirSync(path.join(root, "public"));
    writeFileSync(path.join(root, "public/photo.jpg"), "fixture");
    const base = {
      title: "A useful article",
      slug: "useful-article",
      description: "A real answer",
      date: "2020-01-01",
      author: "Gardner Underwater",
      category: "Training",
      image: "/photo.jpg",
      imageAlt: "A photo",
      course: "/courses",
      draft: false,
    };
    overrides.forEach((override, i) => {
      const fields = { ...base, ...override };
      const frontmatter = Object.entries(fields)
        .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
        .join("\n");
      writeFileSync(
        path.join(root, "content/articles", `${i}.md`),
        `---\n${frontmatter}\n---\nA useful answer.\n\n## More details\n\nSome context.\n`,
      );
    });
    const moduleUrl = new URL("../lib/articles.ts", import.meta.url).href;
    return JSON.parse(
      execFileSync(
        process.execPath,
        [
          "--experimental-strip-types",
          "--input-type=module",
          "-e",
          `import { getArticles } from ${JSON.stringify(moduleUrl)}; console.log(JSON.stringify(getArticles().map(a=>a.slug)));`,
        ],
        { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      ),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("draft and future-dated content are excluded from every shared public listing", () => {
  assert.deepEqual(
    readFixture([
      {},
      { slug: "draft-example", draft: true },
      { slug: "future-example", date: "2999-01-01" },
    ]),
    ["useful-article"],
  );
});

test("duplicate slugs fail instead of producing conflicting article routes", () => {
  assert.throws(
    () => readFixture([{}, {}]),
    (error) => error.stderr.includes("article slugs must be unique"),
  );
});

test("invalid dates, ambiguous draft flags, and escaping asset paths fail validation", () => {
  assert.throws(
    () => readFixture([{ date: "2026-02-30" }]),
    (error) => error.stderr.includes("valid YYYY-MM-DD"),
  );
  assert.throws(
    () => readFixture([{ draft: "false" }]),
    (error) => error.stderr.includes("draft must be true or false"),
  );
  assert.throws(
    () => readFixture([{ image: "/../content/articles/0.md" }]),
    (error) => error.stderr.includes("local file in public"),
  );
});
