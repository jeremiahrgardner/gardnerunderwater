import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { resources } from "@/lib/resources";
import { tools } from "@/lib/tools";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Arrow } from "@/components/SiteUI";

const title = "Free Dive Planning Tools and Downloads";
const description =
  "Free dive planning tools: a gas planner and tank factor, SAC rate and nitrox and trimix calculators, plus worksheets, a dive log and an emergency plan.";

export const metadata = pageMetadata(title, description, "/tools");

const related: Record<string, { href: string; label: string }> = {
  "tank-factors": { href: "/learn/tank-factors", label: "Tank factors, explained" },
  "gas-consumption-table": { href: "/learn/sac-rate-and-rmv", label: "How to calculate your SAC rate" },
  "gas-math-formulas": { href: "/learn/instruments-confirm-what-you-know", label: "Doing the math underwater" },
  "gas-planning-worksheet": { href: "/learn/rock-bottom-calculator", label: "Rock bottom, step by step" },
  "dive-log": { href: "/learn/why-divers-plateau", label: "Why divers plateau" },
  "emergency-action-plan": { href: "/learn/five-minute-dive-check", label: "The five-minute check" },
};

// Each download that has an online version.
const online: Record<string, { href: string; label: string }> = Object.fromEntries(
  tools.map((t) => [t.resource, { href: `/tools/${t.slug}`, label: t.name }]),
);

export default function ToolsPage() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl("/tools"),
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...tools.map((t) => ({
          "@type": "WebApplication",
          name: t.title,
          description: t.description,
          url: absoluteUrl(`/tools/${t.slug}`),
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any web browser",
          isAccessibleForFree: true,
        })),
        ...resources.map((r) => ({
          "@type": "DigitalDocument",
          name: r.title,
          description: r.description,
          encodingFormat: "application/pdf",
          isAccessibleForFree: true,
        })),
      ].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
    },
  };
  return (
    <div className="learn-index container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
      />
      <header className="learn-index-header">
        <span className="eyebrow">{"Tools & downloads"}</span>
        <h1>Do the math before the dive.</h1>
        <p>
          Work it out by hand first. Then check it here. Every tool shows the
          math with your numbers in it, because the point isn’t the answer.
          It’s knowing the answer before your gauge tells you.
        </p>
      </header>

      <section aria-labelledby="tools-title" className="tools-section">
        <div className="tools-section-head">
          <h2 id="tools-title">Tools</h2>
          <p>Free. No email. Nothing you enter is saved.</p>
        </div>
        <div className="tool-cards">
          {tools.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="tool-card">
              <span className="learn-resource-kicker">Free tool</span>
              <h3>{t.name}</h3>
              <p>{t.summary}</p>
              <span className="tool-card-cta">
                Open the tool <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="downloads" aria-labelledby="downloads-title" className="tools-section">
        <div className="tools-section-head">
          <h2 id="downloads-title">Downloads</h2>
          <p>Print them. Write on them. Bring them on the boat.</p>
        </div>
        <ResourceLibrary related={related} online={online} />
      </section>

      <section className="resource-note">
        <h2>Tools don’t replace training</h2>
        <p>
          A calculator tells you what the numbers are. Training teaches you to
          run them in your head, at depth, with your team, while something else
          is going wrong. That’s where{" "}
          <Link href="/courses/essentials-of-tech">Essentials of Tech</Link>{" "}
          starts.
        </p>
      </section>
    </div>
  );
}
