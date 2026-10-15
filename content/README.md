# Publishing field notes

Articles live in `content/articles/*.md`. No CMS or account is required to write them.
Article bodies must be written and approved by Jeremiah, as specified in `docs/seo/CODEX_BRIEF.md`. The two example files are unpublished templates with headings only. The 48-article content program in that brief is a separate implementation phase; it is not claimed complete by this design pass.

## Write and preview

1. Copy `article-template.md` to a new filename.
2. Choose a unique, lowercase, hyphenated `slug` and update every frontmatter field.
3. Write the article in ordinary Markdown. Start body headings at `##`; the title is already the page's H1.
4. Put images in `public/` and reference them with `/filename.jpg`. Give each image useful alt text. Keep `course` pointed to a real `/courses` page or category anchor.
5. Keep `draft: true` while writing. Run `npm run dev` to review the draft at `/articles/your-slug`, or use a Vercel preview deployment. Drafts show an unpublished banner and noindex metadata. Production deployments exclude them. Protect preview access through your Vercel project settings if drafts must remain private.
6. Only publish article copy Jeremiah has written and approved. Run `npm run test:articles`, `npm run lint`, and `npm run build` before publishing.

Required fields are `title`, `slug`, `description`, `date`, `author`, `category`, `image`, `imageAlt`, `course`, and the boolean `draft`. Dates must be quoted `YYYY-MM-DD` strings. Set optional `updated` only after a substantive revision. It must not precede `date`. Credit the actual writer or the organization; do not imply Jay authored or reviewed a piece unless he did.

## Publish

Set `draft: false`, use the real publication date, commit the article and images, and push or merge to the branch configured for production in Vercel. A configured Git integration rebuilds the site. Verify the resulting deployment and article URL.

The same published collection powers the homepage, `/articles`, article pages, related reading, `/articles/feed.xml`, and `/sitemap.xml`. Drafts and future-dated posts are excluded from all of these. A future date alone does not schedule a deployment: rebuild on the publication date. A draft flag hides the page from the site, but does not make the Markdown private in a public GitHub repository.

To unpublish, set `draft: true` and deploy again. If a published URL must move or disappear permanently, plan a suitable redirect rather than silently changing its slug.

## Writing for useful discovery

Answer a real diver's question directly. Explain who the advice applies to, distinguish training prerequisites from suggestions, and use the instructor's actual experience and verified sources. Link relevant courses and primary agency sources. Avoid unsupported safety, certification, or outcome claims.

Article pages render their content on the server and include canonical URLs, author/date information, descriptive metadata, social images, BlogPosting and breadcrumb structured data, and related training. These support discovery; they do not guarantee rankings or AI citations.
