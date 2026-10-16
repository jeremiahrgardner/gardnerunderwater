# Owner TODO inventory

Every actionable owner marker in application code, article stubs and their generator is listed below. Brief examples, test fixture strings and this generated report are excluded. Multiple locations may request the same owner input.

## docs/seo/OWNER_INPUTS.md

```text
L3: - TODO(jeremiah): Confirm credentials, agencies and years teaching for the About page.
L4: - TODO(jeremiah): Supply a business street address only if it should be public; none is emitted in structured data.
L5: - TODO(jeremiah): Supply YouTube IDs, titles and upload dates for article embeds.
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

Total: 9 markers across 3 files.
