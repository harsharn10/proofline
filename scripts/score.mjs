import { mkdir, writeFile } from "node:fs/promises";
import { validateContent } from "./lib/validate-content.mjs";
import { derive } from "./lib/score.mjs";

const args = process.argv.slice(2);
const force = args.includes("--force");
const root = args.find((a) => !a.startsWith("--")) ?? "content";

// derived.json is only ever built from content that passes validation (--force is for local experiments).
const { errors, content } = await validateContent(root);
if (errors.length) {
  for (const e of errors) console.error(`error ${e}`);
  if (!force || !content) { console.error(`refusing to write build/derived.json: ${errors.length} validation error(s)`); process.exit(1); }
  console.warn(`--force: writing despite ${errors.length} validation error(s)`);
}

const projects = {};
const rows = [];
for (const [slug, p] of [...content.projects].sort(([a], [b]) => a.localeCompare(b))) {
  const d = derive(p);
  projects[slug] = d;
  rows.push([slug.padEnd(24), p.coverage.padEnd(5), String(d.score ?? "—").padStart(3), d.provisional ? "*" : " ",
    String(d.confidence ?? "—").padStart(3) + "%", (d.risk ?? "—").padEnd(9), d.override ? `override ${d.override.level}` : "", d.label ?? ""].join("  "));
}

console.log(["slug".padEnd(24), "cov  ", "scr", " ", "conf", "risk     ", "", ""].join("  "));
for (const r of rows) console.log(r);
console.log("\n* = provisional (confidence 50–69)");

await mkdir("build", { recursive: true });
const out = { generated_at: new Date().toISOString(), methodology_version: content.site.methodology_version, projects };
await writeFile("build/derived.json", JSON.stringify(out, null, 2) + "\n");
console.log(`wrote build/derived.json (${Object.keys(projects).length} projects)`);
