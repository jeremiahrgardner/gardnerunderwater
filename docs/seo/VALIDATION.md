# SEO content program acceptance

Validated locally on 2026-10-15, Node.js 24 / Next.js 16.2.6. The branch is for review; production has not been pushed or deployed by this task.

| Check | Observed result |
| --- | --- |
| Production build and TypeScript | Passed; 39 public HTML routes, no draft article static paths |
| Preview build | Passed; all 48 draft article paths generated |
| Lint | Passed, no warnings |
| Automated tests | 22 passed, 0 failed: publication rules, Markdown/MDX links, related selection, tables, stub idempotence, minimum gas and invalid inputs |
| Original course copy | All 22 records match the baseline exactly after removing the newly added slug field |
| Public route browser audit | All 39 sitemap routes return 200 with unique title, description and canonical; title matches Open Graph and Twitter; one H1 each |
| Draft isolation | Calculator returns 404 in production; all 48 drafts excluded from sitemap, public listings, related links, course reading and RSS |
| Preview review | All 48 drafts return 200, display the Draft banner and noindex metadata |
| Conversion clicks | All 44 course-page Book buttons and all 48 draft article CTAs fired correct source_path/course properties in Chromium with the Vercel event hook captured |
| Contact | Course slug prefills the title; required discovery select works; source path and discovery answer appear in mailto draft; submission event contains no name/email/message |
| Calculator | All four brief examples pass numerical tolerances and exact rounded reserves; browser checked 60 ft AL80, 130 ft HP100, custom cylinder and invalid inputs |
| Accessibility | Axe: zero violations on home, About, course, Learn, contact, draft article and calculator; mobile Learn/calculator have no horizontal page overflow |
| Lighthouse home | SEO 100 / accessibility 100 |
| Lighthouse course (`/courses/tech-1`) | SEO 100 / accessibility 100 |
| Lighthouse draft calculator article | SEO 69 / accessibility 100; the only failing audit is is-crawlable, caused by the required noindex |
| JSON-LD locally | Parsed real rendered blocks; home LocalBusiness, About Person, Course, article Article/BreadcrumbList; stable author reference; no FAQPage; VideoObject omitted without video data |
| Typos named in brief | None of the four named misspellings found; no quote text changed and no additional spelling fixes claimed |
| Generator rerun | Created 0 files, preserving all existing stubs; isolated test verifies identical output on two runs and preservation of an owner-edited file |

## External checks still blocked

`https://validator.schema.org/` and `https://search.google.com/test/rich-results` both returned **CONNECT tunnel failed, response 403** from the environment proxy. These services have not validated the markup, and no Rich Results or Schema.org success is claimed. A local JSON parse is not a substitute for external validation or rich-result eligibility. The brief deliberately requests basic schema rather than adding fields solely for rich-result eligibility.

`https://api.github.com` also returned **Forbidden** through `gh api`, including after network permission was granted for the turn. Native Git access is separate. The requested PR must be created through that API when its network route becomes available; a prepared description includes the complete owner inventory. Domain additions for the API and validators have been saved in the cloud environment configuration draft, preserving existing domains. Saving the draft does not change the running proxy policy.

There is no approved, public article yet. An article Lighthouse SEO score of 100 and external validation of its final dates, video and copy remain pending publication approval. No indexing protection was removed to improve a draft's score. Video IDs/upload dates, author bio and calculator-default confirmation are owner inputs, not fabricated test claims.

Vercel Web Analytics must be enabled in the project to receive deployed events. Local browser checks capture calls to the actual SDK event hook; they do not prove delivery to the Vercel dashboard. The form prepares email for the visitor to send and does not confirm appointments or delivered mail.

## Reproduce

```sh
npm ci
npm test
npm run lint
npm run build
npx --no-install tsc --noEmit
npm start -- --hostname 127.0.0.1 --port 3100
# To inspect draft rendering, stop production then:
VERCEL_ENV=preview npm run build
VERCEL_ENV=preview npm start -- --hostname 127.0.0.1 --port 3101
```

Browser audits used Chromium, Playwright, axe-core and Lighthouse 13. These optional audit tools were installed outside the checkout. Detailed local reports and screenshots are in `/workspace/scratch/seo-program/`; they are ephemeral and not deployment assets. See [the owner inventory](TODO_INVENTORY.md) for every actionable placeholder.

## Artwork follow-up

Original GU, UTD and DAN marks and three diving photographs were installed from the owner-supplied Artwork.zip. Build/lint passed after the asset changes. The separate GU Photos.zip exceeds the tool's 32 MiB transfer limit and has not been inspected. The original horizontal wordmark was not found in Artwork.zip; navigation pairs its supplied Shaka emblem with the existing readable site name. Source filenames are documented in docs/brand-assets.md.

Post-artwork Chromium checks passed at 1440 px and 390 px on home and About: both agency logos and all photos load, no page overflow, zero axe violations, and mobile menu open/Escape behavior works. Screenshots are in `/workspace/scratch/brand-review/`.
