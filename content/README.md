# Write and publish Learn articles

One system: `content/learn/*.mdx` feeds `/learn`, eight topic hubs, course related reading, the homepage, RSS and sitemap. The 48 stubs come from `docs/seo/articles.json`. Only Jeremiah writes and approves article copy. The old, unpublished Markdown examples have been retired; `/articles` routes redirect to `/learn`.

## Authoring

1. Edit an existing stub. `npm run generate:articles` fills missing files only and never overwrites edits.
2. Replace every owner placeholder: description (aim for 140–160 characters; maximum 160), standalone answer (40–60 words), FAQ questions/answers and body. Keep body headings at `##` or lower. Follow the editorial angle comment without treating research estimates as verified facts.
3. Preserve the slug, cluster, pillar and course mapping. Course slugs come from `lib/courses.ts`. Use `ctaPage` only when `ctaCourse` is null. Internal links must resolve; published articles cannot link to drafts. Publish a cluster's pillar before linking to it from public articles.
4. Markdown tables work. Use `<YouTube id="actual-video-id" title="Descriptive title" />` for a lazy video. Set `video.youtubeId`, `video.title` and `video.uploadDate` (quoted `YYYY-MM-DD`) for matching VideoObject metadata. Do not invent video data. MDX executes trusted repository content: accept edits only from trusted authors.
5. Keep `draft: true`. Preview locally with `npm run dev`, or use the branch's Vercel preview. Draft pages have a visible banner and `noindex`; `/learn` has a preview-only draft review list. Production and ordinary local production builds exclude drafts from routes, lists, RSS, related links and sitemap. Unknown deployment environments default to hiding drafts. Preview access controls are managed in Vercel; repository files remain public.
6. Before publishing, obtain Jeremiah's approval, set actual quoted `publishedAt` and `lastReviewed` dates, and set `draft: false`. Run `npm test`, `npm run lint` and `npm run build`. Published metadata failures, unresolved owner placeholders, invalid MDX and broken internal links fail validation. Draft editorial incompleteness produces warnings; `npm run validate:content -- --verbose` prints them.
7. Open a PR and review its preview before merging. Merging to the Vercel production branch publishes the site. A future publication date hides the article but does not schedule a rebuild. Update `lastReviewed` when actually reviewed; this date supplies the sitemap's article modification date.

## Minimum-gas calculator

`rock-bottom-calculator.mdx` embeds `<MinimumGasCalculator />`. All training defaults live in `minimumGasDefaults` in `lib/minimum-gas.ts`. Leave this article as a draft until Jeremiah confirms them. After confirmation, update defaults if needed and set `calculatorDefaultsConfirmed: true` in its frontmatter. The publication validator enforces this separate check.

## Analytics and consultation

Enable Web Analytics for the Vercel project so the installed SDK can deliver events. The browser sends `booking_click`, `article_cta_click` and `contact_form_submit`, with `source_path` and a course slug when known. Form events identify `delivery_mode: mailto_draft`; they do not indicate delivered email or a confirmed appointment. Personal form content is excluded from analytics. The email draft includes the required discovery-source answer and referring path.

See `docs/seo/OWNER_INPUTS.md` for owner facts and `docs/seo/VALIDATION.md` for acceptance results and external-service limitations.
