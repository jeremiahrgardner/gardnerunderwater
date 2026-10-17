// Long-form course page content, keyed by course slug. Courses without an
// entry fall back to their `desc` in lib/courses.ts.
// Facts here (limits, prerequisites, progression) follow the UTD references
// already used in content/learn/how-to-become-a-technical-diver.mdx.

export type CourseDetail = {
  heading: string;
  metaDescription?: string;
  lead: string[];
  sections: { title: string; items: string[] }[];
  next?: { title: string; links: { label: string; href: string; text: string }[] };
};

export const courseDetails: Record<string, CourseDetail> = {
  "essentials-of-tech": {
    heading: "Where technical diving starts.",
    metaDescription:
      "Essentials of Tech in San Diego: the UTD personal skills class where technical diving starts. Train with Jay Gardner in teams of three or fewer.",
    lead: [
      "Most divers think technical diving is about going deeper. It isn’t. It’s about control, awareness, and a team that can solve problems without a direct ascent. Essentials of Tech is where you build that.",
      "It’s a personal skills class in shallow open water, within no-decompression limits. The depth stays easy so the standard can go up. Go on to decompression diving or don’t. Either way, you’ll dive differently when you’re done.",
    ],
    sections: [
      {
        title: "What you’ll train",
        items: [
          "Buoyancy, trim, and propulsion held to a technical standard, including the back kick and helicopter turn",
          "Valve shutdowns and more advanced air-sharing procedures",
          "Handling a decompression bottle",
          "Advanced gas planning and more complex ascent strategies",
        ],
      },
      {
        title: "Course limits",
        items: ["60 feet / 18 meters", "Air or nitrox 32", "No decompression"],
      },
      {
        title: "Before you start",
        items: [
          "Minimum age 18",
          "Advanced (UTD Rec 2) or equivalent certification",
          "50 logged dives beyond open water, including 25 non-training dives",
          "We’ll confirm prerequisites together on your free call",
        ],
      },
    ],
    next: {
      title: "Where it leads",
      links: [
        {
          label: "Techreational",
          href: "/courses/techreational",
          text: "Your first decompression course: trimix 25/25 to 130 feet with one oxygen bottle.",
        },
        {
          label: "Tech 1",
          href: "/courses/tech-1",
          text: "Deeper decompression diving to 160 feet.",
        },
        {
          label: "Doubles",
          href: "/courses/doubles",
          text: "Backmount or sidemount, when you’re ready to move into twins.",
        },
        {
          label: "Essentials of Recreational Diving",
          href: "/courses/essentials-of-recreational-diving",
          text: "Not ready yet? Build the foundation first.",
        },
      ],
    },
  },
};

export const categoryHeadings: Record<string, string> = {
  "Technical Training": "Precision under pressure.",
  "Foundational Training": "Train with purpose.",
  "Extensions & Specialties": "Train with purpose.",
  "DAN First Aid Training": "Be ready to respond.",
  "Scuba Coaching": "Keep your progress going.",
};
