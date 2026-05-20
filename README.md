# Gardner Underwater

Training designed to advance your skills, your control, and your brain.

## Live Site

**Current live site:** https://gardnerunderwater.com

This is a faithful rebuild of the existing site. Strategic updates coming later.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** (installed via `create-next-app` but not actively used — all styles are inline/CSS variables for simplicity)

## Getting Started

```bash
# Install dependencies
npm install

# Run locally (development)
npm run dev

# Run locally (production preview)
npm run build
npm start

# Lint / type-check
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, The Why, The Who, course teasers |
| `/training` | Training philosophy, UTD/DAN agency alignment, 5 principles |
| `/courses` | Full course catalog — Technical, Foundational, DAN, Coaching |
| `/pricing` | Transparent pricing — $300/day training, $129/mo coaching, $300/course DAN |
| `/shop` | Equipment rentals and "Save A Course" retail |
| `/merch` | Apparel (tees, hats) with links to Square store |
| `/about` | Jay Gardner bio, UTD #225, Why I Teach, The Dive Table podcast |
| `/contact` | Booking form, call/social links, testimonials |

## Repository Notes

- This repo is **isolated** from other Gardner/Jeremiah projects (UTD, GEC, DeadReckon, Noema, etc.)
- No deployment has been configured yet
- Logo and branding assets are pending — current build uses text-only logo

## Assets Needed

- [ ] Logo SVG/PNG (top-left of every page)
- [ ] Merch product images (currently linked to Square.store)
- [ ] Any underwater/diver photography used on current live site

## Deploy

Not configured yet. To deploy:

1. **Vercel** (recommended): `vercel` CLI or connect GitHub repo
2. **GitHub Pages**: Static export (`next export`) required
3. **Other**: Run `npm run build` then serve the `.next/` output

Jeremiah must approve before any DNS or hosting changes.