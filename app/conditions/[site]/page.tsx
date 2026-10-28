import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { getConditions } from "@/lib/conditions";
import { diveSites, siteBySlug } from "@/lib/dive-sites";
import { absoluteUrl, jsonLd, site as siteInfo } from "@/lib/site";
import { ConditionsPanel } from "@/components/conditions/ConditionsPanel";

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return diveSites.map((s) => ({ site: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ site: string }> }) {
  const s = siteBySlug((await params).site);
  if (!s) return {};
  return pageMetadata(s.title, s.description, `/conditions/${s.slug}`);
}

export default async function SiteConditionsPage({ params }: { params: Promise<{ site: string }> }) {
  const s = siteBySlug((await params).site);
  if (!s) notFound();
  const data = await getConditions();
  const url = absoluteUrl(`/conditions/${s.slug}`);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: s.title,
        description: s.description,
        url,
        publisher: { "@id": `${siteInfo.url}/#organization` },
        about: { "@type": "Place", name: `${s.name}, ${s.area}, San Diego` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Dive conditions", item: absoluteUrl("/conditions") },
          { "@type": "ListItem", position: 2, name: s.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
  const others = diveSites.filter((o) => o.slug !== s.slug);
  return (
    <div className="learn-index container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
      <nav className="cond-crumbs" aria-label="Breadcrumb">
        <Link href="/conditions">Dive conditions</Link> / <span>{s.name}</span>
      </nav>
      <header className="learn-index-header">
        <span className="eyebrow">{s.area} dive conditions</span>
        <h1>{s.name}, right now.</h1>
        <p>{s.intro}</p>
      </header>

      <ConditionsPanel data={data} />

      <section className="cond-site" aria-labelledby="site-title">
        <h2 id="site-title">What to watch at {s.name}</h2>
        <dl className="cond-watch">
          {s.watch.map((w) => (
            <div key={w.label}>
              <dt>{w.label}</dt>
              <dd>{w.text}</dd>
            </div>
          ))}
        </dl>
        <div className="cond-site-facts">
          <p><strong>Entry.</strong> {s.entry}</p>
          <p><strong>Depth.</strong> {s.depth}</p>
        </div>
      </section>

      <section className="cond-site" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions</h2>
        {s.faqs.map((f) => (
          <div key={f.q} className="cond-faq">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <section className="cond-site" aria-labelledby="more-title">
        <h2 id="more-title">Before you go</h2>
        <ul className="cond-links">
          {s.related.map((r) => (
            <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
          ))}
          {others.map((o) => (
            <li key={o.slug}><Link href={`/conditions/${o.slug}`}>{o.name} conditions</Link></li>
          ))}
        </ul>
      </section>

      <section className="resource-note">
        <h2>Conditions don’t make the call. Your team does.</h2>
        <p>
          A buoy reading tells you what the ocean is doing offshore. It doesn’t tell you what the
          entry looks like or whether the plan still works. Watch a few sets, plan the exit first,
          then decide. Want to dive it with us? See <Link href="/courses/essentials-of-recreational-diving">Essentials of Recreational Diving</Link>.
        </p>
      </section>
    </div>
  );
}
