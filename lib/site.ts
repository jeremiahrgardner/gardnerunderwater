export const site = {
  name: "Gardner Underwater",
  url: "https://gardnerunderwater.com",
  email: "jay@gardnerunderwater.com",
  phone: "+16198800684",
  description:
    "Scuba instruction and coaching for certified divers who want better skills and confidence. Train with Jay Gardner in San Diego and beyond.",
};

export function absoluteUrl(path: string) {
  return new URL(path, `${site.url}/`).toString();
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
