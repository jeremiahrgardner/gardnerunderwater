import { readArticles, validateArticles } from "../lib/articles.ts";
const articles = readArticles();
const { errors, warnings } = validateArticles(articles);
if (warnings.length)
  console.warn(
    `Content: ${warnings.length} warnings across ${articles.filter((a) => a.draft).length} drafts (expected until owner review). Use --verbose for details.`,
  );
if (process.argv.includes("--verbose"))
  warnings.forEach((w) => console.warn(w));
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  `Validated ${articles.length} articles; ${articles.filter((a) => !a.draft).length} published.`,
);
