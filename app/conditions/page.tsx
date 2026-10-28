import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getConditions } from "@/lib/conditions";
import { diveSites } from "@/lib/dive-sites";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { ConditionsPanel } from "@/components/conditions/ConditionsPanel";
import { Arrow } from "@/components/SiteUI";

// Rebuilt in the background at most every 30 minutes.
export const revalidate = 1800;

const title = "La Jolla Dive Conditions Today";
const description =
  "Live La Jolla dive conditions for the Shores, the Cove and the Marine Room: swell, water temperature, tides, wind, rain and surf alerts from NOAA.";

export const metadata = pageMetadata(title, description, "/conditions");

export default async function ConditionsPage() {
  const data = await getConditions();
  const graph = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl("/conditions"),
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: diveSites.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/conditions/${s.slug}`),
        name: `${s.name} dive conditions`,
      })),
    },
  };
  return (
    <div className="learn-index container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
      <header className="learn-index-header">
        <span className="eyebrow">Dive conditions</span>
        <h1>La Jolla, right now.</h1>
        <p>
          The numbers that decide a shore dive here: swell, water temperature, tide, wind and rain.
          Pulled from NOAA and the National Weather Service. No guesses. Look at the water before you
          commit.
        </p>
      </header>

      <section aria-labelledby="sites-title" className="tools-section">
        <div className="tools-section-head">
          <h2 id="sites-title">Sites</h2>
          <p>Same buoy, same tide station. Different entries.</p>
        </div>
        <div className="tool-cards">
          {diveSites.map((s) => (
            <Link key={s.slug} href={`/conditions/${s.slug}`} className="tool-card">
              <span className="learn-resource-kicker">{s.area}</span>
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
              <span className="tool-card-cta">
                What to watch <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ConditionsPanel data={data} />

      <section className="resource-note">
        <h2>Conditions don’t make the call. Your team does.</h2>
        <p>
          A buoy reading tells you what the ocean is doing offshore. It doesn’t tell you what the
          entry looks like, how your team feels or whether the plan still works. Plan the exit first,
          then decide. See <Link href="/learn/plan-the-dive-for-the-exit">plan the dive for the exit</Link>.
        </p>
      </section>
    </div>
  );
}
