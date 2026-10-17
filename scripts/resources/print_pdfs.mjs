import { chromium } from "/opt/npm-tools/node_modules/playwright/index.mjs";
import fs from "fs";
const dir = process.argv[2];
const b = await chromium.launch();
const p = await b.newPage();
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".html"))) {
  await p.goto("file://" + dir + "/" + f, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  const note = await p.evaluate(() => document.querySelector('meta[name="gu-footer"]')?.content || "");
  const s = "font-family:Helvetica,Arial,sans-serif;font-size:7px;color:#5f5d55;";
  await p.pdf({
    path: dir + "/" + f.replace(".html", ".pdf"),
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="${s}width:100%;margin:0 14mm;border-top:1px solid #dad8ce;padding-top:4px;display:flex;justify-content:space-between"><span>gardnerunderwater.com</span><span>${note} · Page <span class="pageNumber"></span> of <span class="totalPages"></span></span><span>© 2026 Gardner Underwater</span></div>`,
  });
  console.log(f);
}
await b.close();
