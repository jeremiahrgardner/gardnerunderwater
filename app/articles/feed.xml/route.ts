import { getArticles } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";
const escapeXml = (text: string) =>
  text.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );
export function GET() {
  const items = getArticles()
    .map(
      (article) =>
        `<item><title>${escapeXml(article.title)}</title><link>${absoluteUrl(`/articles/${article.slug}`)}</link><guid isPermaLink="true">${absoluteUrl(`/articles/${article.slug}`)}</guid><description>${escapeXml(article.description)}</description><pubDate>${new Date(`${article.date}T12:00:00Z`).toUTCString()}</pubDate><category>${escapeXml(article.category)}</category></item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${site.name} · Field notes</title><link>${absoluteUrl("/articles")}</link><description>Training advice and perspectives for better diving.</description><language>en-us</language><atom:link href="${absoluteUrl("/articles/feed.xml")}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
