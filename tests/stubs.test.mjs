import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { generateArticleStubs } from "../scripts/generate-article-stubs.mjs";
test("generates exactly 48 drafts and never overwrites authored files", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "gu-stubs-"));
  try {
    fs.mkdirSync(path.join(root, "docs/seo"), { recursive: true });
    fs.copyFileSync(
      "docs/seo/articles.json",
      path.join(root, "docs/seo/articles.json"),
    );
    assert.equal(generateArticleStubs(root), 48);
    const dir = path.join(root, "content/learn");
    const files = fs.readdirSync(dir);
    assert.equal(files.length, 48);
    const original = files.map((f) =>
      fs.readFileSync(path.join(dir, f), "utf8"),
    );
    assert.equal(generateArticleStubs(root), 0);
    assert.deepEqual(
      files.map((f) => fs.readFileSync(path.join(dir, f), "utf8")),
      original,
    );
    fs.writeFileSync(path.join(dir, files[0]), "owner-edited");
    assert.equal(generateArticleStubs(root), 0);
    assert.equal(
      fs.readFileSync(path.join(dir, files[0]), "utf8"),
      "owner-edited",
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
