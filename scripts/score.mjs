import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";
import { validateContent } from "./lib/validate-content.mjs";
import { derive, computeRanks } from "./lib/score.mjs";
import { computeTrending } from "./lib/trending.mjs";
import { cohortForLeaf } from "./lib/taxonomy.mjs";
import { meetsShareBar, officialSurfaceConfirmed } from "./lib/share-bar.mjs";

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

// Ranks: one basis per cohort (the tree leaf's reader-facing section), computed over every project's own `metrics[]`.
// Watchlist rows (census role: observe) are listed, never ranked or scored.
const leafBySlug = new Map(content.census.filter((row) => row.role !== "observe").map((row) => [row.slug, row.tree?.primary]));
const ranksBySlug = computeRanks([...content.projects.values()].map((p) => ({ slug: p.slug, cohort: cohortForLeaf(leafBySlug.get(p.slug)), metrics: p.metrics ?? [] })));

const projects = {};
const rows = [];
for (const [slug, p] of [...content.projects].sort(([a], [b]) => a.localeCompare(b))) {
  const d = derive(p);
  const t = trendingBySlug.get(slug);
  d.trending = t?.trending ?? false;
  // The counting accounts behind the flag (tier top, role alpha/kol, ct item inside the window) — the site
  // renders this list instead of recomputing it with its own rule (final review I4).
  d.trendingAccounts = t?.trending ? t.accounts : [];
  // metrics are content claims (class: claim, ledger-cited) — passthrough is allowed in the site contract
  // (see README "Site contract"); rank is derived from them, never typed into a file.
  d.metrics = p.metrics ?? [];
  d.rank = ranksBySlug.get(slug) ?? null;
  projects[slug] = d;
  rows.push([slug.padEnd(24), p.coverage.padEnd(5), String(d.score ?? "—").padStart(3), d.provisional ? "*" : " ",
    String(d.confidence ?? "—").padStart(3) + "%", (d.risk ?? "—").padEnd(9), d.override ? `override ${d.override.level}` : "", d.trending ? "trending" : "", d.label ?? ""].join("  "));
}
const trending = Object.keys(projects).filter((slug) => projects[slug].trending).sort();
const withMetrics = Object.keys(projects).filter((slug) => projects[slug].metrics.length > 0).length;
const ranked = Object.keys(projects).filter((slug) => projects[slug].rank !== null).length;

const pulledBySlug = new Map();
try {
  const pulledDir = join(root, "pulled");
  for (const file of (await readdir(pulledDir)).filter((name) => name.endsWith(".yaml")).sort()) {
    const pulled = parse(await readFile(join(pulledDir, file), "utf8"));
    if (pulled?.slug) pulledBySlug.set(pulled.slug, pulled);
  }
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const censusBySlug = new Map(content.census.map((row) => [row.slug, row]));
const shareBar = Object.fromEntries(
  [...content.projects]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug]) => {
      const census = censusBySlug.get(slug);
      const pulled = pulledBySlug.get(slug);
      const cohort = cohortForLeaf(census?.tree?.primary);
      const tvl = pulled?.metrics?.find((metric) => metric.kind === "tvl")?.value ?? null;
      return [
        slug,
        meetsShareBar({
          officialConfirmed: officialSurfaceConfirmed(census),
          hasContractOn4663:
            pulled?.addresses?.some((address) => address.is_contract === true) === true,
          shareBarMetric:
            census?.identity?.entity_kind === "token" || cohort?.id === "launchpads"
              ? "liquidity"
              : "tvl",
          kpis: { liquidityUsd: pulled?.market?.liquidity_usd ?? null, tvl },
        }),
      ];
    }),
);

console.log(["slug".padEnd(24), "cov  ", "scr", " ", "conf", "risk     ", "", "", ""].join("  "));
for (const r of rows) console.log(r);
console.log("\n* = provisional (confidence 50–69)");

await mkdir("build", { recursive: true });
const out = { generated_at: new Date().toISOString(), methodology_version: content.site.methodology_version, projects, trending, shareBar };
await writeFile("build/derived.json", JSON.stringify(out, null, 2) + "\n");
console.log(`wrote build/derived.json (${Object.keys(projects).length} projects, ${trending.length} trending, ${withMetrics} with metrics, ${ranked} ranked, ${Object.values(shareBar).filter(Boolean).length} above share bar)`);
