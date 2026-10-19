# Gardner Underwater

Training designed to advance your skills, your control, and your brain.

## Live Site

**Current live site:** https://gardnerunderwater.com

An independent Next.js site with a refreshed, responsive interface built around small-team training and consultation requests.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **CSS** shared design tokens and responsive layouts in `app/globals.css`
- Self-hosted Roboto headings, DM Sans body text, and EB Garamond fonts, with licenses in `public/fonts/`

## Getting Started

Use Node.js 24 (pinned in `package.json` for Vercel and local development).

```bash
# Install dependencies
npm ci

# Run locally (development)
npm run dev

# Run locally (production preview)
npm run build
npm start

# Lint
npm run lint

# Type-check (after building to generate route types)
npx tsc --noEmit
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route                | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `/`                  | Certified-diver training paths, instructor, student feedback, and field notes |
| `/training`          | Training approach and philosophy                                              |
| `/courses`           | Searchable and filterable training catalog                                    |
| `/courses/[slug]`    | Individual training pages with pricing and consultation links                 |
| `/pricing`           | Training, coaching, and DAN pricing                                           |
| `/learn`          | Field notes and practical training articles                                   |
| `/learn/[slug]`   | Server-rendered MDX articles, answers, FAQs and course links                   |
| `/learn/feed.xml` | RSS feed of published articles                                                |
| `/learn/topic/[cluster]` | Eight topic hubs with published pillar and supporting articles |
| `/sitemap.xml`       | Public pages, training, and published articles                                |
| `/shop`              | Equipment rentals and student essentials                                      |
| `/merch`             | Apparel with links to Square                                                  |
| `/about`             | Jay's story and The Dive Table                                                |
| `/contact`           | Direct consultation requests, contact details, and student feedback             |

## Content and consultation requests

Course descriptions are in `lib/courses.ts`, rental prices in `lib/rentals.ts`, and merchandise listings in `lib/merch.ts`. Shared page introductions, arrows, and consultation calls to action are in `components/SiteUI.tsx`.

The consultation form submits to `/api/contact`, which emails Jay at `jay@gardnerunderwater.com` and sets the visitor's validated address as Reply-To. Success appears only after the email provider accepts the message. The form preserves details on failure and offers a direct email link. It does not confirm appointments or add inquiries to the newsletter.

Configure server-only production credentials as described in `docs/contact-delivery.md`. Without them, submission returns an explicit error; it never claims to send a message or silently opens an email draft.

MDX publishing is implemented in `content/learn/`, with an article index, individual reading pages, related training, RSS, and a sitemap. See [the publishing guide](content/README.md) for draft handling and deployment steps. Run `npm test` for the article and content validation checks (Node.js 24 in the prepared environment).

## Repository Notes

- This repo is **isolated** from other Gardner/Jeremiah projects (UTD, GEC, DeadReckon, Noema, etc.)
- A Vercel project exists; verify its production deployment and domain assignment in Vercel before publishing changes.
- Logo and instructor/diving photography are included. `hero-dive.jpg` is a graffiti image despite its filename and is not used in the refreshed layouts.

## Assets Needed

- [ ] Optional merchandise photography; the current listings link to product details and photos on Square.

## Deploy

Use the existing Vercel project and its configured GitHub branch. For another compatible Node.js host, run `npm run build` then `npm start`. The contact route reads query parameters on the server, so the current application requires a Next.js runtime rather than a plain static export.

Jeremiah must approve before any DNS or hosting changes.

## Agency branding

The original landscape GU wordmark is the primary navigation/footer logo. Original UTD and DAN artwork and the secondary black/gold Shaka emblem are installed from the owner’s Artwork.zip. Diving photographs now appear in the homepage instructor feature, About page and article author box. See `docs/brand-assets.md` for source filenames, placements and the separate GU Photos.zip transfer limitation.
