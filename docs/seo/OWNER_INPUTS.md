# Owner inputs before publishing

- TODO(jeremiah): Confirm credentials, agencies and years teaching for the About page.
- TODO(jeremiah): Supply a business street address only if it should be public; none is emitted in structured data.
- TODO(jeremiah): Supply YouTube IDs, titles and upload dates for article embeds.

## Published Wave 1: optional improvements

The 14 Wave 1 articles are published. These additions would strengthen them:

- Short clips of each kick for scuba-finning-techniques and how-to-back-kick (side view, slow motion).
- A short buoyancy clip for scuba-buoyancy-control and a before-and-after trim clip for horizontal-trim-feet-sinking.
- A labeled photo of a fitted single-tank backplate and wing for backplate-and-wing-vs-jacket-bcd and dir-gear-configuration.
- Personal stories: your own path into technical diving (how-to-become-a-technical-diver), DIR taught well or badly (is-dir-diving-elitist), and the origin story in what-is-dir-diving.
- San Diego local knowledge for technical-diving-san-diego: which sites suit which courses, best months, and where tech divers get fills.
- Founder and founding-year details for UTD in gue-vs-utd-vs-hogarthian, if you want them stated.

## Published Waves 2 and 3: optional improvements

All 48 Learn articles are published. These additions would strengthen the newer ones:

- Short clips for how-to-frog-kick, helicopter-turn-and-modified-flutter, how-to-deploy-an-smb, out-of-air-drill-long-hose and valve-drill (side view; slow motion where useful).
- Your own sites, months and conditions notes for la-jolla-shores-skills-practice.
- A photo of a fitted necklace backup for bungeed-backup-regulator.
- Add the eight extra UTD source files Codex used (Ratio Deco 3.0, Emergency Ratio Deco, Situational Awareness, Team Positioning, Why We Dive, Buoyancy/Trim/Propulsion, the Gardner equipment list and the Min Deco table) to the UTD Drive folder so future checks can use the originals.

## Equipment configuration guides: optional improvements

The ten configuration how-tos are published without visuals. These additions would strengthen them:

- Your own photos, which can be added with the Figure component (components/Figure.tsx): doubles from behind and from the front, a single tank first stage, a rigged stage bottle with its regulator, marked deco bottles, a leash and an argon bottle mount.
- Your preferences where practice varies: drysuit hose side on a single tank, argon bottle valve orientation, leash hardware and length, and whether you use a pigtail.
- Confirm the wing inflator length you recommend for doubles (the guides say about 22 inches).

## Tools and downloads (/tools)

- /tools is the hub: four free online tools and the six downloads. /resources redirects there. Each tool has its own page: /tools/gas-planner, /tools/tank-factor-calculator, /tools/sac-rate-calculator and /tools/nitrox-trimix-calculator. The dive log and emergency action plan are downloads only.
- The tools are free with no email. The email ask is the matching printable PDF on each tool page, and on the gas planner, printing the plan with the team's numbers filled in. The same one email unlocks both.
- Every tool shows its work and has a Check my math mode that hides the answers until the diver enters their own. Analytics events: `tool_check` (match, close or off; never the numbers) and `tool_print`.
- The math lives in lib/gas-tools.ts with tests in tests/gas-tools.test.mjs, checked against the worked examples in the PDFs. Rock bottom uses the same method as the Learn article's calculator (lib/minimum-gas.ts).
- The SAC rate tool page now targets "sac rate calculator"; the Learn article targets "how to calculate sac rate".
- Standard Gases lists trimix 21/35's MOD as 190 ft and 18/45's as 220 ft. The formula at a PPO2 of 1.4 gives 187 ft and 223 ft, which is what the calculator shows. Confirm which figures you want on the article.

### Downloads

- One email unlocks every download. The unlock route adds the reader in Kit with the "Gardner Underwater" and "Gardner Underwater: Downloads" tags and sets a `gu_library` cookie (one year), so that browser can download any PDF or the full ZIP. No accounts or passwords; on a new device, the reader enters the same email again. The gate is deliberately soft: it captures emails from normal visitors, not determined copiers.
- Add `KIT_API_KEY` (a Kit v4 API key) in Vercel for Production and Preview, then redeploy. Until it's set, the library still unlocks but signups are not saved; the server logs "KIT_API_KEY is not set".
- Suggested Kit automation: when the "Gardner Underwater: Downloads" tag is added, send a welcome email with a link to https://gardnerunderwater.com/tools#downloads.
- Gated files live in resources/files. Regenerate the PDFs with scripts/resources/build_pdfs.py and print_pdfs.mjs, then the ZIP with scripts/resources/bundle.py. Edit the scripts, not the PDFs.
- Rock bottom uses 1.0 cu ft/min everywhere. The UTD 2020 worksheet (which printed 0.75) was replaced by a Gardner Gas Planning Worksheet at 1.0.
- The privacy policy is at /privacy. Review it, and update it if you add tools that collect data (for example, ads pixels or a booking system).
