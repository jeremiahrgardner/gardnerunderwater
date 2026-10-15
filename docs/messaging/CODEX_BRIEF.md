# Codex brief: Gardner Underwater messaging update

**Repo:** `jeremiahrgardner/gardnerunderwater` (Next.js 16, App Router, Vercel)
**Owner:** Jeremiah (Jay) Gardner
**Goal:** Rewrite the site's headlines and key copy so they speak directly to the ideal customer, add two missing homepage sections, and fix one factual error. Copy only, plus two new sections built from existing components and classes. No visual redesign.

Suggested location in repo: `docs/messaging/CODEX_BRIEF.md`.

---

## Ground rules

1. **Follow `AGENTS.md`.** Check `node_modules/next/dist/docs/` before touching any Next.js API. This brief mostly changes strings inside JSX, so that should be rare.
2. **Work on one branch** (`messaging-update`), commit per section below, open one PR. Never push to production directly. Jeremiah reviews the Vercel preview and merges.
3. **Use the exact copy in this brief.** Don't rephrase, shorten or "improve" it. Keep the existing `<br />` line-break pattern and `serif-accent` spans where shown.
4. **Never invent facts.** Where this brief marks `TODO(jeremiah):`, leave the marker in a JSX comment, ship the surrounding copy, and list every TODO in the PR description.
5. **Don't change SEO metadata** (`pageMetadata(...)` titles and descriptions on any route). That work shipped in the SEO brief. The one exception is `site.description` in §8.
6. **Don't touch** `content/learn/*.mdx`, `lib/courses.ts` course descriptions, pricing numbers, rentals, merch, or structured data other than §8.
7. **New sections use existing classes only** (`section`, `section-paper`, `container`, `split-content`, `section-heading`, `approach-grid`, `approach-card`, `prose`, `eyebrow`, `large-copy`, `text-link`). No new CSS unless a layout genuinely breaks; if it does, add the minimum to `app/globals.css` using existing tokens.
8. **Verify before the PR:** `npm run lint`, `npm test`, `npm run build` all pass. Check the homepage at 375px and 1440px in the preview.

---

## Who we're writing for

Internal context only. Never put the persona, the agency comparison, or any competitor name on the site.

The ideal Gardner Underwater diver is already certified and treats diving as a lifestyle, not a hobby. They listen to dive podcasts, spend on training and the right gear, and have specific goals. They want to be genuinely great and to dive like the divers they admire.

What's in their way:
- **Inconsistent education.** Every instructor taught it differently, and some interactions were bad.
- **Too many options, no way to tell which to trust.**
- **A home community that doesn't dive the way they want to.**

How they feel: frustrated, alone or untethered, and motivated to find what's next.

What they want: to **earn their next level**, and a **team, a tribe, a local crew** to do it with.

Brand role: **the Mentor.** High standard, small teams, medium-high price. Confident and direct, never salesy, never snobby.

### Voice rules for any copy Codex has to touch
- Short, direct sentences.
- Name the gap before offering the answer.
- Use "next level," not "plateau," in headlines. ("Plateau" reads as *stuck* to this diver.)
- Prestige comes from the standard and the small team, never from exclusion. Do not use "elite," "exclusive," "the best," or "world-class." The site already has an article on whether DIR is elitist; the copy shouldn't prove that it is.
- No therapy or comfort language ("feel better," "feel at home"). This diver wants to *be* better.

---

## 1. Homepage hero — `app/page.tsx`

Replace the eyebrow, `<h1>`, subhead paragraph, and primary button label. Keep the image, the "Meet your instructor" link, and the hero footer.

**Eyebrow**
```
DIR scuba training & coaching · San Diego & beyond
```

**H1** (replaces "Become the diver / you want to be.")
```jsx
<h1 id="home-title">
  Certified isn’t
  <br />
  the same as capable.
</h1>
```

**Subhead paragraph**
```jsx
<p>
  You’ve done the courses. You know there’s another level.
  <br className="desktop-break" /> Train with a mentor and a small team
  that hold one consistent standard.
</p>
```

**Primary button:** `Find your path` → `Find your next level`

Leave the hero footer line `Eyes open. Brain on. Unified team.` as is.

---

## 2. NEW homepage section: "The why"

Insert directly **after** `<AgencyCredentials />` and **before** the `#training-paths` section. Model the markup on the "Paying for value" section in `app/pricing/page.tsx` (`section section-paper` → `container split-content` → heading column + `prose` column).

```jsx
<section className="section section-paper" aria-labelledby="why-title">
  <div className="container split-content">
    <div>
      <div className="eyebrow">Sound familiar?</div>
      <h2 id="why-title">
        Good training
        <br />
        shouldn’t be this hard to find.
      </h2>
    </div>
    <div className="prose">
      <p>
        Every instructor taught it a little differently. You collected the
        cards, but not the confidence. You can’t tell which training to trust.
        And the people you dive with at home don’t dive the way you want to.
      </p>
      <p>
        <strong>Gardner Underwater is built differently.</strong>
      </p>
      <p>
        One system, taught the same way every time. Small teams, never more
        than three students to one instructor. Training you pay for.
        Certification you earn.
      </p>
      <p>
        If you’re tired of the next card not making you a better diver,
        you’ve found your team.
      </p>
    </div>
  </div>
</section>
```

---

## 3. Homepage training paths — `app/page.tsx`

**Section heading** (replaces "Good divers never stop learning" / "Where would you like to feel better?")
```jsx
<span className="eyebrow">Pick your starting point</span>
<h2>
  What’s your
  <br />
  next level?
</h2>
```

**Section intro paragraph**
```
You’re already a diver. Your next step should be earned, not sold. Start where your skills are and build toward the diving you want to do.
```

**`paths` array** — replace `label`, `title`, and `text` only. Keep `href`, `link`, and `detail` exactly as they are.

| # | label | title | text |
|---|---|---|---|
| 1 | `Sharpen the foundation` | `Make the fundamentals automatic.` | `Buoyancy, trim, and propulsion taught to one standard, so the basics stop taking up your attention. For certified divers at any stage.` |
| 2 | `Keep progressing` | `A mentor between your dives.` | `Monthly coaching with a plan, video review, and honest feedback, so your progress doesn’t stall between courses.` |
| 3 | `Take the next step` | `Earn your way into technical diving.` | `Precise personal skills, clear thinking, and a team approach. The foundation for deeper, longer, more demanding dives.` |

Leave the "Looking for a specific course…" catalog link as is.

---

## 4. Homepage instructor section — `app/page.tsx`

- Nameplate span: `Your instructor. Your teammate.` → `Your mentor. Your teammate.`
- Eyebrow: `Personal training. A real relationship.` → `Your mentor`
- H2 (replaces "Someone who sees / the diver in you."):
```jsx
<h2>
  A mentor who’s been
  <br />
  where you’re going.
</h2>
```
- Keep the pull quote, both body paragraphs, the link, and the Thomas K testimonial unchanged.

---

## 5. NEW homepage section: "The team"

Insert directly **after** the instructor section (`landing-instructor`) and **before** the articles section. Use the `section-heading` + `approach-grid` / `approach-card` pattern from `app/training/page.tsx`.

```jsx
<section className="section" aria-labelledby="team-title">
  <div className="container">
    <div className="section-heading">
      <div>
        <div className="eyebrow">The team</div>
        <h2 id="team-title">
          Find your
          <br />
          crew.
        </h2>
      </div>
      <p>
        Diving the right way gets lonely when your local crew dives a
        different way. Here, you join a community of thinking divers who
        share one standard, in training and long after it.
      </p>
    </div>
    <div className="approach-grid">
      {team.map(([title, body], i) => (
        <article key={title} className="approach-card">
          <span className="eyebrow">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

Add this array near the top of `app/page.tsx`:

```ts
const team = [
  [
    "Same gear. Same procedures.",
    "One consistent system means anyone trained this way can dive with you. No renegotiating the basics before every dive.",
  ],
  [
    "Small teams, real bonds",
    "Three students or fewer. You learn alongside divers who want what you want, and you solve problems together in the water.",
  ],
  [
    "A team that keeps diving",
    "Training days, local dives, and trips with a community of like-minded thinking divers. The course ends. The team doesn’t.",
  ],
];
```

---

## 6. Homepage articles section — `app/page.tsx`

Keep eyebrow `Field notes`. Replace the H2 ("A little perspective. / For your next dive."):
```jsx
<h2>
  The thinking
  <br />
  behind the skills.
</h2>
```

**Final homepage order:** hero → credentials rail → The why (new) → training paths → instructor → The team (new) → articles → consultation CTA.

---

## 7. Site-wide consultation CTA — `components/SiteUI.tsx` (`ConsultationCTA`)

This appears on most pages, so it matters.

- Eyebrow: `Your next step` → `Your next level`
- H2 (replaces "Better diving starts / with a conversation."):
```jsx
<h2>
  Tell me where
  <br />
  you’re stuck.
</h2>
```
- Paragraph:
```
A free 15-minute call. Where you are, where you want to go, and what’s getting in the way. We build your training plan from there.
```
- Keep the button label and the "No course commitment" note.

---

## 8. Footer and site description

**`components/Footer.tsx`** — brand paragraph (replaces "Training designed to advance your skills, / your control, and your brain."):
```jsx
<p>
  Mentorship and small-team training
  <br />
  for divers who want more than a card.
</p>
```

**`lib/site.ts`** — `site.description`:
```
Small-team UTD training and coaching for committed divers who want more than another certification card. Train with Jay Gardner in San Diego and beyond.
```

---

## 9. Interior page headlines

Change only what's listed. Everything else on these pages stays.

### `/courses` — `app/courses/page.tsx`
H1 (replaces "Your next / plateau."):
```jsx
<>
  Earn your
  <br />
  <span className="serif-accent">next level.</span>
</>
```

### `/training` — `app/training/page.tsx`
- H1 (replaces "Train with / intention."):
```jsx
<>
  One standard.
  <br />
  <span className="serif-accent">Every dive.</span>
</>
```
- "The how" H2 (replaces "Intentional training. / Built around you."):
```jsx
<h2>
  Consistent by design.
  <br />
  Built around you.
</h2>
```
- Keep the intro paragraph, both card lists, and the agencies section.

### `/contact` — `app/contact/page.tsx`
- H1 (replaces "Better diving. / Starts here."):
```jsx
<>
  Let’s find your
  <br />
  <span className="serif-accent">next level.</span>
</>
```
- Testimonials eyebrow: `From the dive team` → `In their words`
- Testimonials H2 (replaces "Training that / makes a difference."):
```jsx
<h2>
  Better divers.
  <br />
  Better teammates.
</h2>
```

### `/about` — `app/about/page.tsx`
- Keep the H1 ("Cave Diver. Teacher. Teammate.").
- Large copy line 2: `Let’s find your next plateau.` → `Let’s find your next level.`
- **Factual fix.** The first bio paragraph says Jay is "co-owner and Director of Development at Unified Team Diving." Jay has since divested, so this must be past tense. Replace the paragraph with:
```jsx
<p>
  Jay Gardner is the founder and operator of Gardner Underwater and a{" "}
  <a href="https://utdscubadiving.com/" target="_blank" rel="noopener noreferrer">
    Unified Team Diving
  </a>{" "}
  instructor (#225). He is a former co-owner and Director of Development at
  UTD, a training agency committed to building thinking divers.
</p>
```
- **Credentials stay as one line, not a list.** Replace the second bio paragraph ("His qualifications range from technical diving to cave diving…") with:
```jsx
<p>
  He holds recreational, technical, cave, and instructor ratings, and he
  dives the same system he teaches. As a coach, Jay helps divers build the
  skills, approach, and mindset that last.
</p>
```
  Don't add a credentials list, section, or schema anywhere on the site.
- **Show Jay in the cave.** In the "Why I teach" section, replace the image `/photos/cave-diving-artwork-2.webp` (an artwork, not Jay) with `/photos/jay-gardner-underwater.webp` (Jay diving sidemount, per `docs/brand-assets.md`). New alt text: `Jay Gardner diving sidemount among submerged limestone`. Keep the existing `fill` and `sizes` props. Update `docs/brand-assets.md` to reflect where each photo is now used.
  - `// TODO(jeremiah): Swap in a tighter in-cave shot of Jay if you have one.`
- Search the whole repo (including `content/learn/*.mdx` and `lib/`) for "co-owner", "Director of Development", and "owner" near "UTD" or "Unified Team Diving". **Don't edit articles.** List any hits in the PR description for Jeremiah.

### `/pricing`, `/shop`, `/merch`, `/learn`, course detail pages
No changes. "Great training. Clear pricing." and "Fly the black." already fit.

---

## 10. Contact form — `components/ContactForm.tsx`

Message field placeholder only:
```
What are you working on, and what’s getting in the way? When are you usually free for a quick call?
```

---

## 11. Final sweep

Run `grep -rn -i "plateau\|feel better\|feel more at home" app components lib`. Any remaining hit in a headline, eyebrow, button, or card title should be flagged in the PR description (not auto-rewritten). Body copy and articles can keep "plateau."

---

## PR description checklist

- Every section above, with a one-line summary of what changed.
- Every `TODO(jeremiah):` left in the code, with file and line.
- Any "co-owner" / "Director of Development" hits found in §9.
- Any remaining "plateau" / "feel better" hits from §11.
- Confirmation that lint, tests, and build passed.
- Preview URL, with the homepage noted as the page to review first.