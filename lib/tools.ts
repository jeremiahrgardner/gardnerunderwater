// The free dive planning tools at /tools. Each pairs with a gated PDF from
// lib/resources.ts. The calculators live in components/tools; the math is in
// lib/gas-tools.ts.
export type Tool = {
  slug: string;
  /** Short name for cards, breadcrumbs and links. */
  name: string;
  /** H1 and page title. */
  title: string;
  /** Meta description, 160 characters or fewer. */
  description: string;
  /** One line for the tool cards. */
  summary: string;
  /** The answer box under the H1, 40 to 60 words. */
  answer: string;
  /** The matching download in lib/resources.ts. */
  resource: string;
  course: string;
  /** Learn article slugs for related reading. */
  related: string[];
  faqs: { q: string; a: string }[];
};

export const tools: Tool[] = [
  {
    slug: "gas-planner",
    name: "Gas Planner",
    title: "Scuba Gas Planner: Rock Bottom, Usable Gas and Turn Pressure",
    description:
      "Free scuba gas planner. Work out rock bottom, usable gas and turn pressure for your whole team, including mismatched cylinders, with every step shown.",
    summary:
      "Rock bottom, usable gas and turn pressure for the whole team, including mismatched cylinders. Print the plan.",
    answer:
      "Enter your depth, how the dive ends and each diver’s cylinder and start pressure. The planner works out rock bottom, the gas two divers need to reach the surface in an emergency, then each diver’s usable gas and turn pressure. Every step of the math is shown, so you can check your own.",
    resource: "gas-planning-worksheet",
    course: "essentials-of-tech",
    related: ["rock-bottom-calculator", "rule-of-thirds-diving", "scuba-gas-management", "tank-factors"],
    faqs: [
      {
        q: "What breathing rate does rock bottom use?",
        a: "1.0 cubic foot per minute per diver, a stressed rate, for two divers breathing from one cylinder. It covers one minute to solve the problem at depth and the ascent to the surface.",
      },
      {
        q: "Why is rock bottom rounded up?",
        a: "So the reserve never comes up short. Rounding up to the next 100 psi keeps the error on the safe side, and it matches how you read a gauge.",
      },
      {
        q: "How do mismatched cylinders change the plan?",
        a: "Plan in cubic feet. The diver with the least usable gas sets how much everyone can spend before turning. Each diver converts that same volume into their own turn pressure.",
      },
      {
        q: "Can I use this for decompression dives?",
        a: "No. It plans no-stop dives with a direct ascent to the surface. On decompression dives, rock bottom covers the ascent to the next gas source and the team’s decompression, which is part of technical training.",
      },
      {
        q: "Does the planner save what I enter?",
        a: "No. It runs in your browser, and nothing you enter is stored or sent. Print your plan if you want to keep it.",
      },
    ],
  },
  {
    slug: "tank-factor-calculator",
    name: "Tank Factor Calculator",
    title: "Tank Factor Calculator: Convert PSI to Cubic Feet",
    description:
      "Free tank factor calculator for scuba cylinders. Convert psi to cubic feet and back for singles and doubles, with a tank factor chart for common tanks.",
    summary:
      "Convert psi to cubic feet and back for any cylinder, single or doubles, plus the factor for mental math.",
    answer:
      "A tank factor is the cubic feet of gas in every 100 psi. Pick your cylinder, single or doubles, and enter a pressure or a volume. The calculator converts one to the other, gives you the exact factor and a rounded-down one for mental math, and shows each step so you can check yours.",
    resource: "tank-factors",
    course: "essentials-of-tech",
    related: ["tank-factors", "instruments-confirm-what-you-know", "sac-rate-and-rmv"],
    faqs: [
      {
        q: "What is the tank factor of an AL80?",
        a: "About 2.58, from 77.4 cubic feet at 3,000 psi. UTD rounds it down to 2.5 for mental math. Double AL80s are about 5.16, which UTD rounds to 5.",
      },
      {
        q: "How do I convert psi to cubic feet?",
        a: "Divide the pressure by 100 and multiply by the tank factor. 1,800 psi in an AL80 is 18 × 2.58, or about 46 cubic feet.",
      },
      {
        q: "How do I convert cubic feet to psi?",
        a: "Divide the volume by the tank factor and multiply by 100. 30 cubic feet in an AL80 is 30 ÷ 2.58 × 100, or about 1,160 psi.",
      },
      {
        q: "Why round the tank factor down?",
        a: "So the rounding errs on the safe side. A smaller factor means you count a little less gas than you have, and a reserve converted to psi comes out a little higher.",
      },
      {
        q: "Why does my low-pressure steel tank hold less than its label?",
        a: "Many low-pressure steel cylinders reach their nominal volume only with an overfill. Check your tank’s spec sheet before you trust the number on the label.",
      },
    ],
  },
  {
    slug: "sac-rate-calculator",
    name: "SAC Rate Calculator",
    title: "SAC Rate Calculator: Measure and Plan Your Gas Consumption",
    description:
      "Free SAC rate calculator for scuba divers. Measure your surface consumption rate from a real dive, then see how fast your gauge will move at any depth.",
    summary:
      "Measure your surface consumption rate from a real dive, then see how fast your gauge moves at depth.",
    answer:
      "Your SAC rate is the gas you’d breathe per minute at the surface. Enter a dive’s start and end pressure, time and average depth, and the calculator works out your rate in cubic feet per minute. Then plan with it: see how fast your gauge will move at any depth and how long your gas lasts.",
    resource: "gas-consumption-table",
    course: "essentials-of-tech",
    related: ["sac-rate-and-rmv", "improve-air-consumption", "instruments-confirm-what-you-know"],
    faqs: [
      {
        q: "What is a SAC rate?",
        a: "Your surface air consumption rate: the gas you’d breathe per minute at the surface. In cubic feet per minute, it works with any cylinder and lets you predict your gas use at any depth.",
      },
      {
        q: "What’s a good SAC rate?",
        a: "It varies with the diver, the dive and the conditions. For planning, UTD uses 0.5 cubic feet per minute at rest, 0.75 while swimming and 1.0 under stress. Your own measured rate tells you more than any target.",
      },
      {
        q: "Why use average depth instead of maximum depth?",
        a: "Because you breathe at every depth you visit. Your computer’s average depth gives a truer rate. Maximum depth makes your rate look better than it is.",
      },
      {
        q: "What’s the difference between SAC and RMV?",
        a: "Both describe gas used per minute at the surface. SAC is often given in psi per minute, which applies to one cylinder. RMV is in cubic feet or liters per minute and works with any cylinder. This calculator gives both.",
      },
    ],
  },
  {
    slug: "nitrox-trimix-calculator",
    name: "Nitrox and Trimix Calculator",
    title: "Nitrox and Trimix Calculator: MOD, Best Mix, END and PPO2",
    description:
      "Free nitrox and trimix calculator. Work out PPO2, MOD, best mix, END, EAD, the helium for a target END and your oxygen clock, with every step shown.",
    summary:
      "PPO2, MOD, best mix, END, EAD, helium for a target END and your oxygen clock, for any mix.",
    answer:
      "Enter your mix and depth. The calculator works out the oxygen partial pressure at that depth, the maximum operating depth at your PPO2 limit, the best nitrox for the depth, the equivalent narcotic and air depths, the helium needed for a target END and your CNS oxygen clock, with the formula for each.",
    resource: "gas-math-formulas",
    course: "nitrox-diver",
    related: ["standard-gases", "gas-switch-procedure", "recreational-vs-technical-diving"],
    faqs: [
      {
        q: "What’s the MOD of nitrox 32?",
        a: "111 feet at a PPO2 of 1.4: (1.4 ÷ 0.32 × 33) − 33 = 111.4, rounded down. UTD still keeps air and nitrox dives to 100 feet.",
      },
      {
        q: "Why does END count oxygen as narcotic?",
        a: "UTD treats oxygen as narcotic, like nitrogen, so only helium lowers your equivalent narcotic depth. It’s the conservative choice, and it’s why UTD keeps END to 100 feet or less with helium.",
      },
      {
        q: "What PPO2 limit should I use?",
        a: "UTD chooses bottom mixes for a working PPO2 of 1.2 and a maximum of 1.4, and uses decompression gases up to 1.6. Use the limits your training sets.",
      },
      {
        q: "How is the oxygen clock calculated?",
        a: "Divide your minutes at a PPO2 by NOAA’s single-exposure limit for that PPO2 and multiply by 100. The calculator uses the NOAA row at or above your PPO2, so it never undercounts.",
      },
      {
        q: "Do I need training to dive nitrox or trimix?",
        a: "Yes. These numbers help you plan and check your math, but each gas needs its own certification, and every mix must be analyzed before you breathe it.",
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}

export const toolPaths = ["/tools", ...tools.map((t) => `/tools/${t.slug}`)];
