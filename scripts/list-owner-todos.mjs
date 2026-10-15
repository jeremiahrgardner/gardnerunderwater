import fs from "node:fs";
import path from "node:path";
const marker = "TODO" + "(jeremiah):";
const roots = [
  "app",
  "components",
  "lib",
  "content",
  "scripts",
  "docs/seo/OWNER_INPUTS.md",
  "docs/brand-assets.md",
];
function files(filename) {
  return fs.statSync(filename).isDirectory()
    ? fs.readdirSync(filename).flatMap((f) => files(path.join(filename, f)))
    : [filename];
}
const groups = roots
  .flatMap(files)
  .sort()
  .map((file) => ({
    file,
    lines: fs
      .readFileSync(file, "utf8")
      .split("\n")
      .flatMap((line, i) =>
        line.includes(marker) ? [`L${i + 1}: ${line.trim()}`] : [],
      ),
  }))
  .filter((group) => group.lines.length);
console.log(
  "# Owner TODO inventory\n\nEvery actionable owner marker in application code, article stubs and their generator is listed below. Brief examples, test fixture strings and this generated report are excluded. Multiple locations may request the same owner input.\n",
);
for (const group of groups)
  console.log(
    `## ${group.file}\n\n\`\`\`text\n${group.lines.join("\n")}\n\`\`\`\n`,
  );
console.log(
  `Total: ${groups.reduce((count, group) => count + group.lines.length, 0)} markers across ${groups.length} files.`,
);
