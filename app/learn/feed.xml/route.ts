import { getArticles } from "@/lib/articles";
import { absoluteUrl, site } from "@/lib/site";
const escape = (s:string) => s.replace(/[<>&"']/g,c => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"}[c]!));
export function GET() {
 const items = getArticles().map(a => `<item><title>${escape(a.title)}</title><link>${absoluteUrl(`/learn/${a.slug}`)}</link><guid>${absoluteUrl(`/learn/${a.slug}`)}</guid><description>${escape(a.description)}</description><pubDate>${new Date(a.publishedAt!).toUTCString()}</pubDate></item>`).join("");
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name} Learn</title><link>${absoluteUrl('/learn')}</link><description>Articles from Gardner Underwater</description>${items}</channel></rss>`,{headers:{"Content-Type":"application/rss+xml; charset=utf-8"}});
}
