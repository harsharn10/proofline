import { mkdir, writeFile } from "node:fs/promises";
import { validateContent } from "./lib/validate-content.mjs";
import { derive } from "./lib/score.mjs";
import { computeTrending } from "./lib/trending.mjs";

const args = process.argv.slice(2);
const force = args.includes("--force");
const todayIdx = args.indexOf("--today");
const today = todayIdx !== -1 ? args[todayIdx + 1] : new Date().toISOString().slice(0, 10);
// Positional root path: the first bare arg that isn't the value following --today.
const root = args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--today") ?? "content";

// derived.json is only ever built from content that passes validation (--force is for local experiments).
const { errors, content } = await validateContent(root);
if (errors.length) {
  for (const e of errors) console.error(`error ${e}`);
  if (!force || !content) { console.error(`refusing to write build/derived.json: ${errors.length} validation error(s)`); process.exit(1); }
  console.warn(`--force: writing despite ${errors.length} validation error(s)`);
}

// content.feed is Map<slug, { slug, items }>; computeTrending wants Map<slug, items[]>.
const feedItemsBySlug = new Map([...content.feed].map(([slug, f]) => [slug, f.items ?? []]));
const trendingBySlug = computeTrending(feedItemsBySlug, content.accounts, {
  minAccounts: content.site.trending.min_accounts,
  windowDays: content.site.trending.window_days,
  today,
});

const projects = {};
const rows = [];
for (const [slug, p] of [...content.projects].sort(([a], [b]) => a.localeCompare(b))) {
  const d = derive(p);
  d.trending = trendingBySlug.get(slug)?.trending ?? false;
  projects[slug] = d;
  rows.push([slug.padEnd(24), p.coverage.padEnd(5), String(d.score ?? "—").padStart(3), d.provisional ? "*" : " ",
    String(d.confidence ?? "—").padStart(3) + "%", (d.risk ?? "—").padEnd(9), d.override ? `override ${d.override.level}` : "", d.trending ? "trending" : "", d.label ?? ""].join("  "));
}
const trending = Object.keys(projects).filter((slug) => projects[slug].trending).sort();

console.log(["slug".padEnd(24), "cov  ", "scr", " ", "conf", "risk     ", "", "", ""].join("  "));
for (const r of rows) console.log(r);
console.log("\n* = provisional (confidence 50–69)");

await mkdir("build", { recursive: true });
const out = { generated_at: new Date().toISOString(), methodology_version: content.site.methodology_version, projects, trending };
await writeFile("build/derived.json", JSON.stringify(out, null, 2) + "\n");
console.log(`wrote build/derived.json (${Object.keys(projects).length} projects, ${trending.length} trending)`);
