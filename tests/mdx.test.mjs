import { test } from "node:test";
import assert from "node:assert/strict";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { renderToStaticMarkup } from "react-dom/server";
test("MDX supports GFM comparison tables rendered as HTML", async () => {
  const { content } = await compileMDX({
    source: "| Fixture | Value |\n| --- | --- |\n| Test | 1 |",
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  const html = renderToStaticMarkup(content);
  assert.match(html, /<table>/);
  assert.match(html, /<th>Fixture<\/th>/);
  assert.match(html, /<td>1<\/td>/);
});
