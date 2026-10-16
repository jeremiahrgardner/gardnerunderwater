export const site = {
  name: "Gardner Underwater",
  url: "https://gardnerunderwater.com",
  email: "jay@gardnerunderwater.com",
  phone: "+16198800684",
  description:
    "Small-team UTD training and coaching for committed divers who want more than another certification card. Train with Jay Gardner in San Diego and beyond.",
};

export function absoluteUrl(path: string) {
  return new URL(path, `${site.url}/`).toString();
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

// TODO(jeremiah): Supply a public business street address if desired; do not infer one.
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/brand/gu-logo-landscape.png"),
  telephone: "+1-619-880-0684",
  areaServed: "San Diego",
  sameAs: [
    "https://www.facebook.com/gardnerunderwater/",
    "https://www.instagram.com/gardnerunderwater/",
    "https://www.youtube.com/@thedivetable",
    "https://podcasts.apple.com/us/podcast/the-dive-table/id1611099442?mt=2&ls=1",
  ],
};
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about#jeremiah-gardner`,
  name: "Jeremiah Gardner",
  image: absoluteUrl("/photos/jay-gardner-leia-vita.webp"),
  jobTitle: "UTD scuba instructor",
  worksFor: { "@id": `${site.url}/#organization` },
  sameAs: ["https://jeremiahgardner.com", "https://x.com/JeremiahGardner"],
};
