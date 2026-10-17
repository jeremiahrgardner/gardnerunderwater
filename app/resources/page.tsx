import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { resources } from "@/lib/resources";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { ResourceDownload } from "@/components/ResourceDownload";

const title = "Free Dive Planning Downloads: Gas Math, Tank Factors, Dive Log";
const description =
  "Free PDFs for technical and recreational divers: tank factor charts, gas consumption tables, gas math formulas, a dive log and an emergency action plan.";

export const metadata = pageMetadata(title, description, "/resources");

const related: Record<string, { href: string; label: string }> = {
  "tank-factors": { href: "/learn/tank-factors", label: "Tank factors, explained" },
  "gas-consumption-table": { href: "/learn/sac-rate-and-rmv", label: "How to calculate your SAC rate" },
  "gas-math-formulas": { href: "/learn/instruments-confirm-what-you-know", label: "Doing the math underwater" },
  "utd-gas-planning-worksheet": { href: "/learn/rock-bottom-calculator", label: "Rock bottom, step by step" },
  "dive-log": { href: "/learn/why-divers-plateau", label: "Why divers plateau" },
  "emergency-action-plan": { href: "/learn/five-minute-dive-check", label: "The five-minute check" },
};

export default function ResourcesPage() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl("/resources"),
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resources.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "DigitalDocument",
          name: r.title,
          description: r.description,
          encodingFormat: "application/pdf",
          isAccessibleForFree: true,
        },
      })),
    },
  };
  return (
    <div className="learn-index container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
      />
      <header className="learn-index-header">
        <span className="eyebrow">Free downloads</span>
        <h1>Do the math before the dive.</h1>
        <p>
          These are the sheets I use and teach from. Tank factors, gas
          consumption, the formulas behind gas planning, a dive log built for
          getting better, and an emergency plan you fill in before you need
          it. Print them. Write on them. Bring them on the boat.
        </p>
      </header>
      <div className="resource-grid">
        {resources.map((r) => (
          <div key={r.slug} className="resource-cell">
            <ResourceDownload resource={r.slug} />
            {related[r.slug] && (
              <p className="resource-related">
                Read next:{" "}
                <Link href={related[r.slug].href}>{related[r.slug].label}</Link>
              </p>
            )}
          </div>
        ))}
      </div>
      <section className="resource-note">
        <h2>Paper doesn&rsquo;t replace training</h2>
        <p>
          A worksheet tells you what the numbers are. Training teaches you to
          run them in your head, at depth, with your team, while something else
          is going wrong. That&rsquo;s where{" "}
          <Link href="/courses/essentials-of-tech">Essentials of Tech</Link>{" "}
          starts.
        </p>
      </section>
    </div>
  );
}
