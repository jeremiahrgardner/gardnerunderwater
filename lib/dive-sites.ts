// Dive sites with live conditions pages. All three La Jolla sites share one buoy, tide station and forecast point.

export type DiveSite = {
  slug: string;
  name: string;
  area: string;
  title: string; // page <title>
  description: string; // meta description, 160 characters or fewer
  summary: string; // one line for cards
  intro: string;
  entry: string;
  depth: string;
  watch: { label: string; text: string }[];
  related: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const diveSites: DiveSite[] = [
  {
    slug: "la-jolla-shores",
    name: "La Jolla Shores",
    area: "La Jolla",
    title: "La Jolla Shores Dive Conditions Today",
    description:
      "Live La Jolla Shores dive conditions: swell and period from the Scripps buoy, water temperature, today's tides, wind and active surf alerts.",
    summary: "Wide sandy beach, a gentle slope and the edge of the La Jolla canyon.",
    intro:
      "San Diego's most used training site. A wide beach, a gentle sandy slope and, a short swim out, the edge of the La Jolla canyon.",
    entry:
      "Beach entry. Most divers go in near the Vallecitos Street restrooms, in front of the main lifeguard tower, or in front of the Sea Lodge for a shorter swim to the canyon. Stay clear of the boat launch lane.",
    depth: "Shallow sand flats, a slope that gets deeper toward the canyon, and the canyon edge itself.",
    watch: [
      { label: "Shore break", text: "The entry is a beach, so the waves breaking on it decide your day. Even small surf is harder with heavy gear." },
      { label: "Swell period", text: "Long-period swell carries more energy than its height suggests. It means bigger sets on the beach and more surge." },
      { label: "Boats", text: "The launch area is busy. Surface with a plan, and send up your SMB before you ascend." },
    ],
    related: [
      { href: "/learn/la-jolla-shores-skills-practice", label: "La Jolla Shores for skills practice" },
      { href: "/learn/san-diego-water-temperature-diving", label: "San Diego water temperature by month" },
      { href: "/learn/plan-the-dive-for-the-exit", label: "Plan the dive for the exit" },
    ],
    faqs: [
      {
        q: "Where do these La Jolla Shores conditions come from?",
        a: "Swell, period and direction come from the Scripps Nearshore wave buoy, just offshore of La Jolla. Water temperature and tides come from NOAA's station at Scripps Pier, right at the north end of the Shores. Wind, the forecast and surf alerts come from the National Weather Service.",
      },
      {
        q: "What's the visibility at La Jolla Shores today?",
        a: "Nobody measures it, so we don't guess. Swell, recent rain and plankton drive it. Small swell, no recent rain and no bloom usually mean better visibility. The only real answer is a diver who was just in the water.",
      },
    ],
  },
  {
    slug: "la-jolla-cove",
    name: "La Jolla Cove",
    area: "La Jolla",
    title: "La Jolla Cove Dive Conditions Today",
    description:
      "Live La Jolla Cove dive conditions: swell, period and direction from the Scripps buoy, water temperature, today's tides, wind and surf alerts.",
    summary: "A small pocket beach, rocky reef, kelp and sea lions inside the marine reserve.",
    intro:
      "A small pocket beach below the cliffs, with rocky reef, kelp and plenty of marine life. It's inside a marine reserve, so look and leave everything as you found it.",
    entry:
      "Down the stairs to a small sandy pocket beach. It's a short, rocky, often crowded entry, and it gets harder fast when there's surge.",
    depth: "Shallow reef near the entry, getting deeper as you head offshore toward the canyon.",
    watch: [
      { label: "Surge", text: "The Cove is more exposed to swell than the Shores. Surge on the pocket beach and over the rocks is the main concern." },
      { label: "Swell direction", text: "Check where the swell is coming from, not just how big it is. Direction decides how much of it reaches the Cove." },
      { label: "Crowds", text: "Swimmers, snorkelers and sea lions share the entry. Plan where you'll get in and out." },
    ],
    related: [
      { href: "/learn/technical-diving-san-diego", label: "DIR and technical diving in San Diego" },
      { href: "/learn/san-diego-water-temperature-diving", label: "San Diego water temperature by month" },
      { href: "/learn/plan-the-dive-for-the-exit", label: "Plan the dive for the exit" },
    ],
    faqs: [
      {
        q: "Where do these La Jolla Cove conditions come from?",
        a: "Swell, period and direction come from the Scripps Nearshore wave buoy, just offshore of La Jolla. Water temperature and tides come from NOAA's Scripps Pier station. Wind, the forecast and surf alerts come from the National Weather Service.",
      },
      {
        q: "What's the visibility at La Jolla Cove today?",
        a: "Nobody measures it, so we don't guess. Swell, recent rain and plankton drive it. The only real answer is a diver who was just in the water.",
      },
    ],
  },
  {
    slug: "marine-room",
    name: "Marine Room",
    area: "La Jolla",
    title: "Marine Room Dive Conditions Today",
    description:
      "Live dive conditions for the Marine Room at the south end of La Jolla Shores: swell from the Scripps buoy, water temperature, tides, wind and alerts.",
    summary: "The shallow south end of the Shores, known for leopard sharks in summer.",
    intro:
      "The south end of La Jolla Shores, in front of the Marine Room restaurant. Shallow sand and a reef edge, best known for the leopard sharks that gather here in summer.",
    entry:
      "Beach entry at the south end of the Shores. At high tide there's little or no beach in front of the seawall, so the tide decides where and when you get in.",
    depth: "Shallow. Most of the dive is on sand and along the reef edge.",
    watch: [
      { label: "Tide", text: "Check the tide table below before you go. A high tide can leave you no beach to get in or out on." },
      { label: "Shore break", text: "Waves against the seawall make the entry and exit harder. Watch a few sets before you commit." },
      { label: "Shallow water", text: "Shallow sand stirs easily. Good trim and a frog kick keep the bottom where it belongs." },
    ],
    related: [
      { href: "/learn/la-jolla-shores-skills-practice", label: "La Jolla Shores for skills practice" },
      { href: "/learn/how-to-frog-kick", label: "How to frog kick" },
      { href: "/learn/plan-the-dive-for-the-exit", label: "Plan the dive for the exit" },
    ],
    faqs: [
      {
        q: "Where do these Marine Room conditions come from?",
        a: "Swell, period and direction come from the Scripps Nearshore wave buoy, just offshore of La Jolla. Water temperature and tides come from NOAA's Scripps Pier station. Wind, the forecast and surf alerts come from the National Weather Service.",
      },
      {
        q: "Does the tide matter at the Marine Room?",
        a: "Yes. At high tide there's little or no beach in front of the seawall. Check the tide table before you go and plan your entry and exit around it.",
      },
    ],
  },
];

export const siteBySlug = (slug: string) => diveSites.find((s) => s.slug === slug);
export const conditionPaths = ["/conditions", ...diveSites.map((s) => `/conditions/${s.slug}`)];
