export const site = {
  name: "Gardner Underwater",
  url: "https://gardnerunderwater.com",
  email: "jay@gardnerunderwater.com",
  phone: "+16198800684",
  description:
    "Technical dive training, training days, and UTD courses for committed divers who want more than another card. Train with Jay Gardner in San Diego and beyond.",
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
  founder: { "@id": `${site.url}/about#jeremiah-gardner` },
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
  // The site calls him Jay; this ties "Jay Gardner" to the same person.
  alternateName: "Jay Gardner",
  image: absoluteUrl("/photos/jay-gardner-leia-vita.webp"),
  jobTitle: "UTD scuba instructor",
  worksFor: { "@id": `${site.url}/#organization` },
  sameAs: [
    "https://jeremiahgardner.com",
    "https://x.com/JeremiahGardner",
    "https://www.linkedin.com/in/jeremiahgardner/",
  ],
};
