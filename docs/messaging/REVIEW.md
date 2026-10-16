# Messaging update review

Source: [the owner-supplied brief](CODEX_BRIEF.md). Branch: `messaging-update`.

## Sections implemented

1. Hero: exact eyebrow, headline, subhead and “Find your next level” label; image, instructor link and footer retained.
2. The why: new “Sound familiar?” section after credentials using `section-paper` and `split-content`.
3. Paths: exact heading, introduction and three card labels/titles/descriptions; course links, link labels and price/details preserved.
4. Instructor: mentor heading, eyebrow and nameplate; pull quote, body, link and Thomas K testimonial preserved.
5. The team: exact new section and three team cards using existing `section-heading` / `approach-grid` classes.
6. Articles: exact “The thinking / behind the skills” heading; article content untouched.
7. Consultation: exact shared eyebrow, headline and paragraph; existing button and no-commitment note preserved.
8. Footer and description: exact supplied footer paragraph and `site.description`; no route metadata edits.
9. Interior pages: exact Courses, Training and Contact headings; About retains its H1, gets “next level,” correct former UTD role, one-paragraph credentials and Jay’s requested sidemount photo.
10. Contact form: only the supplied message placeholder changed.
11. Sweeps and verification: ownership references and remaining language reviewed; preservation and responsive checks completed.

## CSS exception

The 375px check found that existing responsive rules hid the hero and footer `<br>` elements, joining words as “isn’tthe” and “trainingfor.” Two minimal display overrides appended to `app/globals.css` preserve the requested line breaks. Existing styles and tokens are otherwise unchanged; the new sections add no classes or visual redesign.

## Ownership references

- `app/about/page.tsx:72`: now explicitly **former** co-owner and Director of Development at UTD.
- `content/learn/gue-vs-utd-vs-hogarthian.mdx:35`: existing disclosure says Jay **was an owner of UTD until 2026**; left unchanged.
- `docs/seo/articles.json:203`: editorial angle already says **was a UTD owner until 2026**; left unchanged.
- `docs/seo/content-plan.md:55`: research guidance already says **were an owner until 2026**; left unchanged.
- `docs/seo/content-plan.md:205`: research note already states he **divested his ownership stake in 2026**; left unchanged.
- `docs/messaging/CODEX_BRIEF.md:333,340,355,381`: the verbatim brief quotes the old claim, supplies the replacement, and requests this audit. These are internal instructions, not additional public claims.

Other “owner” matches concern content review, archive provenance, tests or placeholder tooling rather than UTD ownership. No article was edited.

## Remaining language

The requested case-insensitive sweep of `app`, `components` and `lib` found:

- `lib/merch.ts:6`: “a new plateau in your diving journey” occurs in merchandise **body copy**, which the brief explicitly permits and leaves out of scope.
- No remaining “plateau,” “feel better,” or “feel more at home” in a headline, eyebrow, button or card title.

## Owner input in application code

- `app/about/page.tsx:106`: `TODO(jeremiah): Swap in a tighter in-cave shot of Jay if you have one.` This is a JSX comment, not visible copy.
- `lib/site.ts:18`: existing `TODO(jeremiah): Supply a public business street address if desired; do not infer one.`

The pull request also includes the current full inventory of unchanged draft-article, generator and owner-input placeholders, with file and line locations.

## Validation

- Lint passed.
- All 25 existing tests passed.
- Production build and TypeScript passed; 14 published articles remain published and 34 drafts remain excluded.
- Chromium checks at **375px and 1440px** compare rendered copy with the exact brief: hero, why paragraphs, path cards, team cards, shared CTA/footer, interior headings, About bio and contact placeholder pass.
- Homepage section order is hero → credentials → why → paths → instructor → team → articles → CTA.
- No page overflow on the checked home, Courses, Training, Contact and About routes.
- Homepage axe checks: zero violations at both widths. About photo loads with the requested alt text; its TODO is absent from rendered copy.
- Source checks confirm every route's metadata and both business/Person schema exports are unchanged. Only the expressly allowed `site.description` string changed.
- Course path destinations/detail labels, instructor body/testimonial, About H1/portrait credit, articles, course data, pricing, rental data, merchandise and Learn sources are unchanged.

Review the **homepage first** in the Vercel preview linked in the PR. Local screenshots and detailed check output are in `/workspace/scratch/messaging-review/`; these are review artifacts, not deployed files. Production has not been pushed directly.
