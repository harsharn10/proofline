// Remove the generator's boilerplate positive findings ("X publishes an official site at https://…")
// from content/projects/*.yaml. They restate the link row and crowd out real findings on 44 of 49
// pages (docs/reviews/2026-09-01/ui-audit.md §4.1). Line-based so the rest of each file is untouched.
//   node scripts/migrations/drop-boilerplate-findings.mjs [--check]
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const check = process.argv.includes("--check");
const BOILERPLATE = /^\s*- text: .+ publishes an official (site|X account|docs|documentation|whitepaper|GitHub|repository|Telegram|Discord|app)[^\n]* at https?:\/\/\S+\.?\s*$/;

let removed = 0, filesTouched = 0;
for (const f of readdirSync("content/projects").filter((f) => f.endsWith(".yaml"))) {
  const path = `content/projects/${f}`;
  const lines = readFileSync(path, "utf8").split("\n");
  const out = [];
  let i = 0, inPositive = false, positiveIndent = null, kept = 0, touched = false;
  while (i < lines.length) {
    const line = lines[i];
    const pos = line.match(/^(\s*)positive:\s*$/);
    if (pos) { inPositive = true; positiveIndent = pos[1].length; kept = 0; out.push(line); i++; continue; }
    if (inPositive) {
      const indent = line.match(/^(\s*)/)[1].length;
      const isItem = /^\s*- /.test(line);
      if (line.trim() !== "" && indent <= positiveIndent) {
        // leaving the positive list
        if (kept === 0) {
          for (let k = out.length - 1; k >= 0; k--) if (/^\s*positive:\s*$/.test(out[k])) { out[k] = `${" ".repeat(positiveIndent)}positive: []`; break; }
        }
        inPositive = false; positiveIndent = null;
        out.push(line); i++; continue;
      }
      if (isItem && BOILERPLATE.test(line)) {
        // skip this item: its first line and every continuation line indented deeper than the dash
        const itemIndent = indent;
        i++;
        while (i < lines.length) {
          const next = lines[i];
          const nextIndent = next.match(/^(\s*)/)[1].length;
          // Continuation lines of this item are anything indented deeper than its dash — including
          // nested block lists such as `sources:` followed by `- S1` rows.
          if (next.trim() === "" || nextIndent > itemIndent) { i++; continue; }
          break;
        }
        removed++; touched = true;
        continue;
      }
      if (isItem) kept++;
    }
    out.push(line); i++;
  }
  // a positive list that lost every item and ran to EOF
  if (inPositive && kept === 0) {
    for (let k = out.length - 1; k >= 0; k--) if (/^\s*positive:\s*$/.test(out[k])) { out[k] = `${" ".repeat(positiveIndent)}positive: []`; break; }
  }
  if (touched) {
    filesTouched++;
    if (!check) writeFileSync(path, out.join("\n"));
  }
}
console.log(`${check ? "would remove" : "removed"} ${removed} boilerplate finding(s) across ${filesTouched} file(s)`);
