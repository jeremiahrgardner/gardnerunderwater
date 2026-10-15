# Gardner Underwater

Training designed to advance your skills, your control, and your brain.

## Live Site

**Current live site:** https://gardnerunderwater.com

An independent Next.js site with a refreshed, responsive interface built around small-team training and consultation requests.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **CSS** shared design tokens and responsive layouts in `app/globals.css`
- Self-hosted Syne, DM Sans, and EB Garamond fonts, with licenses in `public/fonts/`

## Getting Started

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

| Route       | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `/`         | Home — training pathways, approach, instructor, student feedback           |
| `/training` | Training philosophy, UTD/DAN agency alignment, 5 principles                |
| `/courses`  | Searchable and filterable catalog with expandable course details           |
| `/pricing`  | Transparent pricing — $300/day training, $129/mo coaching, $300/course DAN |
| `/shop`     | Equipment rentals and "Save A Course" retail                               |
| `/merch`    | Apparel (tees, hats) with links to Square store                            |
| `/about`    | Jay Gardner bio, UTD #225, Why I Teach, The Dive Table podcast             |
| `/contact`  | Consultation email request, direct contact, next steps, testimonials       |

## Content and consultation requests

Course descriptions are in `lib/courses.ts`, rental prices in `lib/rentals.ts`, and merchandise listings in `lib/merch.ts`. Shared page introductions, arrows, and consultation calls to action are in `components/SiteUI.tsx`.

No scheduling provider is connected yet. The consultation form prepares a URL-encoded email draft to Jay. Visitors review and send it in their own email app, then arrange a time with Jay. The form does not send email itself, store submissions, or confirm appointments. Course links carry the selected course into the request. Direct phone and email links provide alternatives.

Markdown publishing through GitHub remains planned; there is no blog engine or journal route in this UI refresh.

## Repository Notes

- This repo is **isolated** from other Gardner/Jeremiah projects (UTD, GEC, DeadReckon, Noema, etc.)
- A Vercel project exists; verify its production deployment and domain assignment in Vercel before publishing changes.
- Logo and instructor/diving photography are included. `hero-dive.jpg` is a graffiti image despite its filename and is not used in the refreshed layouts.

## Assets Needed

- [ ] Optional merchandise photography; the current listings link to product details and photos on Square.

## Deploy

Use the existing Vercel project and its configured GitHub branch. For another compatible Node.js host, run `npm run build` then `npm start`. The contact route reads query parameters on the server, so the current application requires a Next.js runtime rather than a plain static export.

Jeremiah must approve before any DNS or hosting changes.
