# Implement SEO and the 48-article Learn publishing program

Implements all six phases of docs/seo/CODEX_BRIEF.md on one branch with separate phase commits. Production is unchanged; review the branch preview before merging.

- Unique metadata, canonical/social tags, basic business/Person schema and consultation analytics.
- Stable slugs and course pages for all 22 courses; original course records preserved verbatim.
- One MDX Learn system, eight topic hubs, draft preview/noindex, related course links and build-time validation.
- All 48 article stubs remain drafts. No article body copy was generated. Generator preserves owner edits.
- Draft-only minimum-gas calculator, all requested examples and invalid-input checks. Publication requires explicit default confirmation.

Validation: production and preview builds, TypeScript, lint and 22 tests pass. Browser audit covers 39 public routes, all 44 course booking buttons and all 48 article CTAs. Homepage/course Lighthouse SEO and accessibility 100. Draft article accessibility 100; SEO 69 solely for the required noindex. See docs/seo/VALIDATION.md for evidence and reproduction.

External Google Rich Results and Schema.org validators returned proxy CONNECT 403; no external validation success is claimed. Article SEO 100 remains pending approved public content. Vercel analytics event delivery requires Web Analytics enabled in the project. GitHub API also returns Forbidden in this environment; this description is ready for the requested single PR.

No named legacy typos were found, so no spelling corrections are claimed. Owner-supplied Artwork.zip now provides original GU Shaka, UTD and DAN marks and diving photography. Navigation/footer use the supplied emblem plus readable brand name. About, homepage instructor and author images now use diving photographs. The horizontal wordmark is absent from this archive; GU Photos.zip exceeds the transfer tool’s 32 MiB limit, so the chosen photos come from Artwork.zip.

The following is the complete actionable TODO(jeremiah) inventory, including every article stub and generator placeholder. Brief examples and test fixture strings are excluded.

# Owner TODO inventory

Every actionable owner marker in application code, article stubs and their generator is listed below. Brief examples, test fixture strings and this generated report are excluded. Multiple locations may request the same owner input.

## app/learn/[slug]/page.tsx

```text
L191: <p>TODO(jeremiah): Supply an approved two-line author bio.</p>
```

## content/learn/5-ft-vs-7-ft-long-hose.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for 5-ft-vs-7-ft-long-hose.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for 5-ft-vs-7-ft-long-hose.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for 5-ft-vs-7-ft-long-hose.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/backplate-and-wing-for-beginners.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L22: TODO(jeremiah): Supply reader questions for
L25: TODO(jeremiah): Write approved FAQ answers for
L38: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L41: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L44: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/backplate-and-wing-vs-jacket-bcd.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L20: TODO(jeremiah): Write the approved 40–60 word answer for
L24: TODO(jeremiah): Supply reader questions for
L27: TODO(jeremiah): Write approved FAQ answers for
L40: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L43: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L46: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/balanced-rig.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for balanced-rig.'
L14: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for balanced-rig.'
L16: - q: 'TODO(jeremiah): Supply reader questions for balanced-rig.'
L17: a: 'TODO(jeremiah): Write approved FAQ answers for balanced-rig.'
L29: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L32: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L35: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/breathing-for-buoyancy.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for breathing-for-buoyancy.'
L16: TODO(jeremiah): Write the approved 40–60 word answer for
L19: - q: 'TODO(jeremiah): Supply reader questions for breathing-for-buoyancy.'
L20: a: 'TODO(jeremiah): Write approved FAQ answers for breathing-for-buoyancy.'
L32: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L35: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L38: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/bungeed-backup-regulator.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for bungeed-backup-regulator.'
L16: TODO(jeremiah): Write the approved 40–60 word answer for
L19: - q: 'TODO(jeremiah): Supply reader questions for bungeed-backup-regulator.'
L20: a: 'TODO(jeremiah): Write approved FAQ answers for bungeed-backup-regulator.'
L32: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L35: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L38: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/choosing-a-backplate-and-wing.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for choosing-a-backplate-and-wing.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for choosing-a-backplate-and-wing.'
L22: TODO(jeremiah): Write approved FAQ answers for
L35: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L38: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L41: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/dir-for-recreational-divers.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for dir-for-recreational-divers.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for dir-for-recreational-divers.'
L22: TODO(jeremiah): Write approved FAQ answers for
L35: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L38: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L41: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/dir-gear-configuration.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for dir-gear-configuration.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for dir-gear-configuration.'
L22: a: 'TODO(jeremiah): Write approved FAQ answers for dir-gear-configuration.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L37: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L40: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/dir-glossary.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for dir-glossary.'
L18: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for dir-glossary.'
L20: - q: 'TODO(jeremiah): Supply reader questions for dir-glossary.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for dir-glossary.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/dive-light-signals.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for dive-light-signals.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for dive-light-signals.'
L17: - q: 'TODO(jeremiah): Supply reader questions for dive-light-signals.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for dive-light-signals.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/drysuit-buoyancy-and-trim.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for drysuit-buoyancy-and-trim.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for drysuit-buoyancy-and-trim.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for drysuit-buoyancy-and-trim.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/fins-for-frog-kicking.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for fins-for-frog-kicking.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for fins-for-frog-kicking.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for fins-for-frog-kicking.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/gradient-factors-explained.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for gradient-factors-explained.'
L16: TODO(jeremiah): Write the approved 40–60 word answer for
L19: - q: 'TODO(jeremiah): Supply reader questions for gradient-factors-explained.'
L20: a: 'TODO(jeremiah): Write approved FAQ answers for gradient-factors-explained.'
L32: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L35: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L38: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/gue-vs-utd-vs-hogarthian.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for gue-vs-utd-vs-hogarthian.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for gue-vs-utd-vs-hogarthian.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for gue-vs-utd-vs-hogarthian.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/helicopter-turn-and-modified-flutter.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L22: TODO(jeremiah): Supply reader questions for
L25: TODO(jeremiah): Write approved FAQ answers for
L38: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L41: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L44: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/hogarthian-configuration.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for hogarthian-configuration.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for hogarthian-configuration.'
L22: a: 'TODO(jeremiah): Write approved FAQ answers for hogarthian-configuration.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L37: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L40: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/horizontal-trim-feet-sinking.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for horizontal-trim-feet-sinking.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for horizontal-trim-feet-sinking.'
L23: TODO(jeremiah): Write approved FAQ answers for
L36: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L39: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L42: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/hover-without-hands.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for hover-without-hands.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for hover-without-hands.'
L17: - q: 'TODO(jeremiah): Supply reader questions for hover-without-hands.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for hover-without-hands.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/how-much-weight-do-i-need-scuba.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L19: TODO(jeremiah): Write the approved 40–60 word answer for
L23: TODO(jeremiah): Supply reader questions for
L26: TODO(jeremiah): Write approved FAQ answers for
L39: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L42: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L45: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/how-to-back-kick.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for how-to-back-kick.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for how-to-back-kick.'
L18: - q: 'TODO(jeremiah): Supply reader questions for how-to-back-kick.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for how-to-back-kick.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/how-to-become-a-technical-diver.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L21: TODO(jeremiah): Write the approved 40–60 word answer for
L25: TODO(jeremiah): Supply reader questions for
L28: TODO(jeremiah): Write approved FAQ answers for
L41: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L44: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L47: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/how-to-deploy-an-smb.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for how-to-deploy-an-smb.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for how-to-deploy-an-smb.'
L18: - q: 'TODO(jeremiah): Supply reader questions for how-to-deploy-an-smb.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for how-to-deploy-an-smb.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/how-to-frog-kick.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for how-to-frog-kick.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for how-to-frog-kick.'
L17: - q: 'TODO(jeremiah): Supply reader questions for how-to-frog-kick.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for how-to-frog-kick.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/improve-air-consumption.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for improve-air-consumption.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for improve-air-consumption.'
L22: a: 'TODO(jeremiah): Write approved FAQ answers for improve-air-consumption.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L37: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L40: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/is-dir-diving-elitist.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for is-dir-diving-elitist.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for is-dir-diving-elitist.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for is-dir-diving-elitist.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/la-jolla-shores-skills-practice.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L20: TODO(jeremiah): Write the approved 40–60 word answer for
L24: TODO(jeremiah): Supply reader questions for
L27: TODO(jeremiah): Write approved FAQ answers for
L40: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L43: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L46: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/long-hose-configuration.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for long-hose-configuration.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for long-hose-configuration.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for long-hose-configuration.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/out-of-air-drill-long-hose.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for out-of-air-drill-long-hose.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for out-of-air-drill-long-hose.'
L22: a: 'TODO(jeremiah): Write approved FAQ answers for out-of-air-drill-long-hose.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L37: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L40: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/pre-dive-checks.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for pre-dive-checks.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for pre-dive-checks.'
L17: - q: 'TODO(jeremiah): Supply reader questions for pre-dive-checks.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for pre-dive-checks.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/recreational-vs-technical-diving.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L22: TODO(jeremiah): Supply reader questions for
L25: TODO(jeremiah): Write approved FAQ answers for
L38: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L41: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L44: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/rock-bottom-calculator.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for rock-bottom-calculator.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for rock-bottom-calculator.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for rock-bottom-calculator.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L39: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L42: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/rule-of-thirds-diving.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for rule-of-thirds-diving.'
L15: TODO(jeremiah): Write the approved 40–60 word answer for
L18: - q: 'TODO(jeremiah): Supply reader questions for rule-of-thirds-diving.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for rule-of-thirds-diving.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/sac-rate-and-rmv.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for sac-rate-and-rmv.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for sac-rate-and-rmv.'
L18: - q: 'TODO(jeremiah): Supply reader questions for sac-rate-and-rmv.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for sac-rate-and-rmv.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/san-diego-water-temperature-diving.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L22: TODO(jeremiah): Supply reader questions for
L25: TODO(jeremiah): Write approved FAQ answers for
L38: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L41: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L44: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/scuba-buoyancy-control.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for scuba-buoyancy-control.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for scuba-buoyancy-control.'
L22: a: 'TODO(jeremiah): Write approved FAQ answers for scuba-buoyancy-control.'
L34: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L37: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L40: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/scuba-finning-techniques.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for scuba-finning-techniques.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for scuba-finning-techniques.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for scuba-finning-techniques.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/scuba-gas-management.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for scuba-gas-management.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for scuba-gas-management.'
L18: - q: 'TODO(jeremiah): Supply reader questions for scuba-gas-management.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for scuba-gas-management.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/sidemount-vs-backmount.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for sidemount-vs-backmount.'
L16: TODO(jeremiah): Write the approved 40–60 word answer for
L19: - q: 'TODO(jeremiah): Supply reader questions for sidemount-vs-backmount.'
L20: a: 'TODO(jeremiah): Write approved FAQ answers for sidemount-vs-backmount.'
L32: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L35: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L38: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/standard-gases.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for standard-gases.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for standard-gases.'
L17: - q: 'TODO(jeremiah): Supply reader questions for standard-gases.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for standard-gases.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/team-diving-vs-buddy-diving.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for team-diving-vs-buddy-diving.'
L18: TODO(jeremiah): Write the approved 40–60 word answer for
L21: - q: 'TODO(jeremiah): Supply reader questions for team-diving-vs-buddy-diving.'
L23: TODO(jeremiah): Write approved FAQ answers for
L36: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L39: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L42: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/technical-diving-san-diego.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for technical-diving-san-diego.'
L17: TODO(jeremiah): Write the approved 40–60 word answer for
L20: - q: 'TODO(jeremiah): Supply reader questions for technical-diving-san-diego.'
L21: a: 'TODO(jeremiah): Write approved FAQ answers for technical-diving-san-diego.'
L33: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L36: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L39: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/utd-essentials-of-recreational-diving.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L19: TODO(jeremiah): Write the approved 40–60 word answer for
L23: TODO(jeremiah): Supply reader questions for
L26: TODO(jeremiah): Write approved FAQ answers for
L39: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L42: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L45: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/utd-essentials-vs-gue-fundamentals.mdx

```text
L4: TODO(jeremiah): Write the meta description for
L19: TODO(jeremiah): Write the approved 40–60 word answer for
L23: TODO(jeremiah): Supply reader questions for
L26: TODO(jeremiah): Write approved FAQ answers for
L39: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L42: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L45: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/valve-drill.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for valve-drill.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for valve-drill.'
L18: - q: 'TODO(jeremiah): Supply reader questions for valve-drill.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for valve-drill.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/what-is-a-thinking-diver.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for what-is-a-thinking-diver.'
L16: TODO(jeremiah): Write the approved 40–60 word answer for
L19: - q: 'TODO(jeremiah): Supply reader questions for what-is-a-thinking-diver.'
L20: a: 'TODO(jeremiah): Write approved FAQ answers for what-is-a-thinking-diver.'
L32: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L35: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L38: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/what-is-dir-diving.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for what-is-dir-diving.'
L16: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for what-is-dir-diving.'
L18: - q: 'TODO(jeremiah): Supply reader questions for what-is-dir-diving.'
L19: a: 'TODO(jeremiah): Write approved FAQ answers for what-is-dir-diving.'
L31: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L34: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L37: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## content/learn/why-divers-plateau.mdx

```text
L3: description: 'TODO(jeremiah): Write the meta description for why-divers-plateau.'
L15: answer: 'TODO(jeremiah): Write the approved 40–60 word answer for why-divers-plateau.'
L17: - q: 'TODO(jeremiah): Supply reader questions for why-divers-plateau.'
L18: a: 'TODO(jeremiah): Write approved FAQ answers for why-divers-plateau.'
L30: <!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->
L33: <!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->
L36: <!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->
```

## docs/seo/OWNER_INPUTS.md

```text
L3: - TODO(jeremiah): Confirm credentials, agencies and years teaching for the About page.
L4: - TODO(jeremiah): Supply an approved two-line author bio.
L5: - TODO(jeremiah): Supply a business street address only if it should be public; none is emitted in structured data.
L6: - TODO(jeremiah): Supply YouTube IDs, titles and upload dates for article embeds.
```

## lib/minimum-gas.ts

```text
L1: // TODO(jeremiah): Confirm all minimum-gas defaults against your teaching before publishing the calculator.
```

## lib/site.ts

```text
L18: // TODO(jeremiah): Supply a public business street address if desired; do not infer one.
```

## scripts/generate-article-stubs.mjs

```text
L33: description: `TODO(jeremiah): Write the meta description for ${slug}.`,
L44: answer: `TODO(jeremiah): Write the approved 40–60 word answer for ${slug}.`,
L47: q: `TODO(jeremiah): Supply reader questions for ${slug}.`,
L48: a: `TODO(jeremiah): Write approved FAQ answers for ${slug}.`,
L56: const body = `<!-- Editorial angle: ${angle.replace(/-->/g, "")} -->\n\n## Overview\n<!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->\n\n## Details\n<!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->\n\n## Put it into practice\n<!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->\n`;
```

Total: 348 markers across 53 files.
