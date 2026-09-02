// One-time (re-runnable, idempotent) migration: set the flat `category` on every census row and
// project file to the display label of the row's `tree.primary` leaf (schema/taxonomy.json).
// Line-based edits so the YAML keeps its comments and formatting.
//   node scripts/migrations/derive-category-from-leaf.mjs [--check]
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { parse } from "yaml";
import { leafLabel } from "../lib/taxonomy.mjs";

const check = process.argv.includes("--check");
const census = parse(readFileSync("content/census.yaml", "utf8"));
const wanted = new Map();
for (const row of census) {
  const label = leafLabel(row.tree?.primary);
  if (!label) { console.error(`${row.slug}: tree.primary ${row.tree?.primary} is not a known leaf`); process.exit(1); }
  wanted.set(row.slug, label);
}

let changed = 0;
function rewriteCategoryLines(path, matchSlug) {
  const lines = readFileSync(path, "utf8").split("\n");
  let slug = null, touched = false;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)(- )?slug: ([a-z0-9-]+)\s*$/);
    if (m) slug = m[3];
    const c = lines[i].match(/^(\s*)category: (.*)$/);
    if (c && slug && (!matchSlug || matchSlug === slug)) {
      const want = wanted.get(slug);
      if (!want) continue;
      const current = c[2].replace(/^["']|["']$/g, "").trim();
      if (current !== want) {
        const quoted = /[:#]/.test(want) ? `"${want}"` : want;
        lines[i] = `${c[1]}category: ${quoted}`;
        touched = true; changed++;
        if (check) console.log(`${path}: ${slug}: ${current} -> ${want}`);
      }
    }
  }
  if (touched && !check) writeFileSync(path, lines.join("\n"));
}

rewriteCategoryLines("content/census.yaml", null);
for (const f of readdirSync("content/projects").filter((f) => f.endsWith(".yaml"))) {
  rewriteCategoryLines(`content/projects/${f}`, f.replace(/\.yaml$/, ""));
}
console.log(`${check ? "would change" : "changed"} ${changed} category line(s)`);
