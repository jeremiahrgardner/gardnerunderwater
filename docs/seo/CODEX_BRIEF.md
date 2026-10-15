# Codex brief: Gardner Underwater SEO and content build

**Site:** https://gardnerunderwater.com (Next.js, deployed on Vercel)
**Owner:** Jeremiah Gardner, UTD scuba instructor, San Diego
**Goal:** Fix the site's SEO basics and build the structure for a 48-article content program on DIR ("Doing It Right") diving, so that every article can rank, be cited by AI search engines, and send readers to a bookable course.

Files in this folder:

| File | What it is |
| --- | --- |
| `CODEX_BRIEF.md` | This brief. The source of truth for what to build. |
| `articles.json` | All 48 articles, 8 clusters and 12 course slugs as data. Generate stubs and links from this. |
| `content-plan.md` | The full research and strategy behind the plan. Context only; nothing in it overrides this brief. Its course names (ESM, Back Kick MINI, etc.) come from the old site; use `lib/courses.ts` and `articles.json` instead. |

---

## Ground rules

1. **Inspect the repo first, and follow `AGENTS.md`.** This Next.js version has breaking changes: before using any Next.js API this brief names (Metadata, `sitemap.ts`, `robots.ts`, `generateStaticParams`, etc.), check the matching guide in `node_modules/next/dist/docs/`. Identify the router (App Router vs Pages Router), how pages and metadata are defined, the styling system, any existing MDX or content setup, the contact form, and any analytics. Follow existing conventions; don't introduce a second way of doing something the repo already does.
2. **Run all six phases in order without stopping for review or questions.** Work on one branch, commit each phase separately, and open a single pull request at the end. Jeremiah reviews the Vercel preview and merges; never push to the production branch directly.
3. **Never invent facts, and never block on missing ones.** No course prices, durations, prerequisites, credentials, addresses or quotes that aren't already in the repo. Where something is missing, leave a clearly marked `TODO(jeremiah):` placeholder, keep going, and list it in the PR description.
4. **Do not write article body copy.** Articles are written and approved by Jeremiah. You build templates, data, stubs and tooling only.
5. **Keep structured data basic.** Google's May 2026 guidance warns against structured-data over-optimization and dismisses `llms.txt` and AI-specific rewrites. Do not add `llms.txt`, FAQPage schema, keyword stuffing or hidden text.
6. **Don't change the visual design** beyond what new pages need. New components should use the existing design tokens and typography.

---

## Phase 1: SEO fixes on existing pages

These issues were observed on the live site on 14 Oct 2026. Verify each in the repo before fixing; some may already be resolved by the Next.js migration.

### 1.1 Unique titles and meta descriptions

`app/layout.tsx` already sets a title template (`%s | Gardner Underwater`) and one site-wide description. Give every route its own title and description, plus `metadataBase`, a canonical URL per page and matching Open Graph and Twitter tags. With the template in place, each page only needs the part before the `|`.

| Route | `<title>` | Meta description |
| --- | --- | --- |
| `/` | DIR Scuba Training in San Diego \| Gardner Underwater | DIR-based scuba training and coaching in San Diego. Build real buoyancy, trim and team skills with UTD instructor Jeremiah Gardner in classes of 3 or fewer. |
| `/training` | How We Train Thinking Divers \| Gardner Underwater | Training first, certification second. Small 3:1 classes, skills taught in real-dive context, team-based procedures and video feedback in San Diego. |
| `/courses` | UTD Scuba Courses in San Diego \| Gardner Underwater | UTD recreational, technical and specialty courses in San Diego: Essentials of Rec and Tec, Techreational, Tech 1, Doubles, Rescue, Drysuit and more. |
| `/about` | Jeremiah Gardner, UTD Scuba Instructor \| Gardner Underwater | Jeremiah Gardner is a UTD scuba instructor, cave diver and coach in San Diego. His background, teaching philosophy and how to train with him. |
| `/contact` | Book a Course \| Gardner Underwater, San Diego | Book a scuba course or coaching with Gardner Underwater in San Diego. Call +1 (619) 880-0684 or send a message. |
| `/pricing`, `/shop`, `/merch` | Write from each page's actual content, same pattern: `<Page topic> \| Gardner Underwater` | Write from each page's actual content, 140 to 160 characters, no claims the page doesn't make. |

### 1.2 Typos

The old site had "dissapointed", "hightest", "Tranistion" and "netural"; these appear fixed in the repo. Proofread all user-facing copy for other misspellings and list any you fix in the PR.

### 1.3 Sitemap and robots

- `sitemap.xml` (e.g. `app/sitemap.ts`) covering every public route, including course pages and published articles once they exist. Exclude drafts. Use `lastReviewed` as `lastModified` for articles.
- `robots.txt` (e.g. `app/robots.ts`) that allows all crawlers and links the sitemap. Make sure nothing blocks `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot` or `Perplexity-User`.

### 1.4 Site-wide structured data

- On `/`: one `LocalBusiness` (or `SportsActivityLocation`) JSON-LD block with name, url, logo, telephone `+1-619-880-0684`, `areaServed` San Diego, and `sameAs` for the Facebook, Instagram, YouTube (`@thedivetable`) and Apple Podcasts links already in the footer. Include a street address only if one exists in the repo.
- On `/about`: one `Person` block for Jeremiah Gardner with a stable `@id` (e.g. `https://gardnerunderwater.com/about#jeremiah-gardner`), `jobTitle`, `worksFor` the business, and `sameAs` https://jeremiahgardner.com and https://x.com/JeremiahGardner. Articles will reference this `@id` as author.

### 1.5 Conversion tracking

- Use the analytics already installed. If none is installed, add Vercel Web Analytics (`@vercel/analytics`) and send events with its `track()` helper.
- Track every Book Now / Book Your Course click and every contact-form submission as events with `source_path` (the page the click came from) and `course` (when known).
- Contact form: accept `?course=<slug>` and preselect or prefill that course. Add a required "How did you find us?" field with options: Google search, AI assistant (ChatGPT, Perplexity, etc.), YouTube / The Dive Table, Instagram or Facebook, Friend or referral, Other. Pass the referring path along with the submission.

---

## Phase 2: One page per course

Today all courses sit on `/courses` and every Book Now goes to `/contact`. Give each course its own page so articles have specific link targets and each page can rank for "[course] San Diego".

- Course data already lives in `lib/courses.ts`, with no slugs. Add a `slug` field to every entry. For the 12 courses in `articles.json → courses`, use the slug given there; the `name` there matches the entry's `title` exactly. Give every other course a kebab-case slug from its title.
- Route: `/courses/[slug]`, statically generated from `lib/courses.ts`. Build a page for every course (the 12 above are required; the rest use the same template).
- Content: each course's existing `desc`, `tagline` and `bullets` verbatim, and `duration` only when non-empty. No new claims.
- Each page: H1 with the course name; the existing description; a "Book this course" button linking to `/contact?course=<slug>`; a "Related reading" block listing published articles whose `ctaCourse` equals this slug (empty state hidden).
- Title pattern: `<Course name> in San Diego | Gardner Underwater`. Meta description written from the course copy.
- Structured data: one basic `Course` JSON-LD block (name, description, provider = the business).
- `/courses` keeps its overview layout, with each course linking to its page.

---

## Phase 3: The Learn section and article template

### 3.1 Routes

| Route | Purpose |
| --- | --- |
| `/learn` | Hub: short intro, a card per cluster (8), latest published articles. |
| `/learn/topic/[cluster]` | Cluster hub: the pillar article first, then that cluster's published articles. |
| `/learn/[slug]` | Article page. |

Add "Learn" to the main navigation. Cluster slugs and names come from `articles.json → clusters`.

### 3.2 Content storage

One MDX file per article at `content/learn/<slug>.mdx` (or the repo's existing content location). Prefer a light setup that matches what the repo already uses; avoid heavy content frameworks. Frontmatter:

```yaml
title: "How to Back Kick: Step by Step, Plus Why You Drift Up"
description: "Meta description, 140-160 characters."
slug: how-to-back-kick
cluster: propulsion
isPillar: false
pillar: scuba-finning-techniques        # null for pillars
wave: 1
primaryKeyword: how to back kick scuba
secondaryKeywords: [back kick diving, reverse kick]
ctaCourse: propulsion-back-kick-extension   # or null when ctaPage is set
ctaPage: null                           # e.g. /training
extraLinks: []
answer: >-
  40-60 word answer block that fully answers the title question on its own.
faqs:
  - q: "Question as divers phrase it"
    a: "Short answer."
video:                                   # optional
  youtubeId: ""
  title: ""
  uploadDate: ""                         # ISO date, needed for VideoObject
publishedAt: null                        # ISO date when published
lastReviewed: null                       # ISO date, shown on the page
draft: true
```

### 3.3 Article page layout, in this order

1. Breadcrumb: Learn › Cluster › Article.
2. H1 from `title`.
3. **Answer block** from `answer`, visually distinct, directly under the H1. This is the passage search and AI engines lift, so it must be real text in the HTML, not an image or collapsed element.
4. Byline row: "By Jeremiah Gardner" (links to `/about`) and "Last reviewed <date>".
5. MDX body. Support markdown tables (articles use comparison tables) and a `<YouTube id="" />` component that lazy-loads.
6. FAQ section rendered from `faqs` as visible content (no FAQPage schema).
7. **Course CTA block**: course name, one line from the course data, button to `/courses/<ctaCourse>`. When `ctaCourse` is null, link to `ctaPage` instead.
8. Related: link to the pillar (when not a pillar) plus two published siblings from the same cluster. Pillars list every published article in their cluster.
9. Author box: photo, two-line bio, links to `/about` and https://jeremiahgardner.com. Bio and photo are `TODO(jeremiah):` until supplied.

### 3.4 Structured data per article

- `Article`: headline, description, `datePublished`, `dateModified` (= `lastReviewed`), `author` referencing the Person `@id` from Phase 1.4, publisher = the business, image.
- `BreadcrumbList`.
- `VideoObject` only when `video.youtubeId` and `video.uploadDate` are set.

### 3.5 Drafts

- `draft: true` articles are excluded from listings, related links, course "Related reading", the sitemap and production static params (they 404 in production).
- On Vercel preview deployments (`VERCEL_ENV !== "production"`), drafts render with a visible "Draft" banner and `noindex`, so Jeremiah can review them.

### 3.6 Build-time validation

Fail the build if any **published** article has: an `answer` outside 40 to 60 words; a `description` longer than 160 characters; a `ctaCourse` that isn't a course slug; a `pillar` that doesn't exist; an internal `/learn/` or `/courses/` link that doesn't resolve; no `lastReviewed`. Drafts only warn.

---

## Phase 4: Stubs for all 48 articles

- Add a script (e.g. `scripts/generate-article-stubs.mjs`) that reads `articles.json` and writes `content/learn/<slug>.mdx` for each article with all frontmatter filled from the data, `draft: true`, and `description`, `answer` and `faqs` left as `TODO(jeremiah):`.
- The stub body is the template headings only, each with a one-line HTML comment saying what goes there, plus the article's `angle` from `articles.json` as a comment at the top. No prose.
- The script must never overwrite an existing file. Running it twice changes nothing.
- Commit the 48 stubs.

---

## Phase 5: Rock bottom (minimum gas) calculator

Article E2 (`/learn/rock-bottom-calculator`) is an interactive calculator plus explanation. Build it as a client component embedded in that article's MDX. **It stays `draft: true` until Jeremiah confirms the default values below match how he teaches minimum gas.**

**Inputs:** maximum depth (ft); cylinder (AL80 = 77.4 cu ft at 3000 psi, HP100 = 100 cu ft at 3442 psi, or custom rated volume and pressure); number of divers sharing; stressed SAC per diver (cu ft/min); problem-solving time at depth (min); ascent rate (ft/min); stop depth (ft); stop time (min).

**Defaults, all in one exported config object marked `TODO(jeremiah): confirm`:** 2 divers, 1.0 cu ft/min stressed SAC each, 1 min at depth, 30 ft/min ascent, 15 ft stop, 3 min stop, 500 psi floor.

**Method (salt water):**

```
ATA(d)          = d / 33 + 1
surfaceMinutes  = tProblem × ATA(D)
                + ((D − S) / rate) × ATA((D + S) / 2)
                + tStop × ATA(S)
                + (S / rate) × ATA(S / 2)
gasCuFt         = surfaceMinutes × divers × sacPerDiver
psi             = gasCuFt ÷ (ratedVolume ÷ ratedPressure)
rockBottomPsi   = max(floorPsi, ceil(psi / 100) × 100)
```

Show the result in psi and bar (1 bar = 14.5038 psi), the step-by-step breakdown of each segment, and a note that this is a planning aid, not a substitute for training.

**Unit tests (defaults unless stated):**

| Depth | Cylinder | Surface-equivalent min | Gas (cu ft) | Raw psi | Rock bottom |
| --- | --- | --- | --- | --- | --- |
| 100 ft | AL80 | 16.778 | 33.56 | 1300.6 | 1400 psi |
| 60 ft | AL80 | 11.000 | 22.00 | 852.7 | 900 psi |
| 130 ft | HP100 | 22.172 | 44.34 | 1526.3 | 1600 psi |
| 30 ft | AL80 | 7.727 | 15.45 | 599.0 | 600 psi |

---

## Phase 6: Acceptance checks before opening the PR

- `build` and `lint` pass; no new type errors.
- Every public route has a unique `<title>`, meta description and canonical.
- `/sitemap.xml` lists only public, non-draft URLs; `/robots.txt` allows the crawlers in 1.3 and links the sitemap.
- JSON-LD on `/`, `/about`, one course page and one article validates in Google's Rich Results Test and the Schema.org validator. Paste results in the PR.
- Every Book button on a course page and every article CTA fires the tracking event with `source_path`.
- Lighthouse SEO score of 100 and no accessibility regressions on `/`, one course page and one article.
- PR description lists every `TODO(jeremiah):` left behind.

---

## Inputs only Jeremiah can supply

Leave placeholders for these, keep working, and list them in the PR description:

- About page: credentials, agencies, years teaching, headshot, short bio for the author box.
- Business address, if it should appear publicly.
- YouTube IDs and upload dates for Dive Table videos to embed in specific articles.
- Confirmation of the rock bottom calculator defaults.
- Article copy (`description`, `answer`, `faqs`, body) for each article before it's set to `draft: false`.
