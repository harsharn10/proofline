// Task 5 — merge harvest-data.mjs into content/. Run after `npm run seed` (which creates the
// project / sources / research files for new census rows). Idempotent: every run regenerates the
// harvested parts from census.yaml + seed-data.mjs + harvest-data.mjs and leaves the review block alone.
// ONE-SHOT for the 2026-08-30/31 intake (final review I9) — see README.md in this directory.
//
//   node scripts/intake/2026-08-31/apply-harvest.mjs --overwrite
//
// Per census slug:
//   sources/<slug>.yaml   one ledger entry per official link (by URL) and one per intake artifact the
//                         harvest cites (S-ids assigned after the highest existing id; entries matched by URL)
//   projects/<slug>.yaml  name/category/lifecycle/official_links mirrored from census; symbol/summary/
//                         dependencies/missing from seed-data; deployments (verified:false) + positive/risk/
//                         unresolved findings (class claim) from harvest-data; reviewed_at bumped to today
//   feed/<slug>.yaml      written when the harvest has items; ids <slug>-N in date order
// Also: dependencies/stock-tokens.yaml gets its deployments[] from the importer draft (sheet 01 + app).
import { readFile, writeFile, access } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { HARVEST, ARTIFACTS, GENERIC_EXCERPT, ACCESSED } from "./harvest-data.mjs";
import { SEED, RESEARCHER, LINK_KIND_TO_SOURCE_KIND } from "../../seed-data.mjs";
import { validateAgainst } from "../../lib/schemas.mjs";
import { voiceWarnings } from "../../lib/voice.mjs";

// One-shot intake tooling (final review I9): every run REGENERATES projects/*.yaml findings/
// deployments and rewrites feed/*.yaml wholesale from harvest-data.mjs, discarding any hand edit or
// bot-merged feed change made since the last run. See scripts/intake/2026-08-31/README.md.
if (!process.argv.includes("--overwrite")) {
  console.error(
    "apply-harvest: refuses to run without --overwrite.\n" +
      "This is one-shot tooling for the 2026-08-30/31 Grok intake — it REWRITES projects/*.yaml findings\n" +
      "and deployments and feed/*.yaml wholesale from harvest-data.mjs, discarding any edit made to those\n" +
      "files since the last run. content/ is canonical after Task 5; re-run only if you mean to regenerate\n" +
      "it from the harvest. Pass --overwrite to confirm.",
  );
  process.exit(1);
}

const TODAY = process.env.HARVEST_DATE ?? new Date().toISOString().slice(0, 10);
const exists = (p) => access(p).then(() => true, () => false);
const readYaml = async (p) => parse(await readFile(p, "utf8"));
const writeYaml = async (p, data, header) => writeFile(p, (header ?? "") + stringify(data, { lineWidth: 0 }));
const fail = (file, errs) => { if (errs.length) { console.error(`${file}: ${errs.join("; ")}`); process.exit(1); } };

const census = await readYaml("content/census.yaml");
let voiceHits = 0, feedFiles = 0, deployments = 0, ledgerEntries = 0;

for (const c of census) {
  const seed = SEED[c.slug];
  const harvest = HARVEST[c.slug];
  if (!seed) { console.error(`no seed data for ${c.slug}`); process.exit(1); }
  if (!harvest) { console.error(`no harvest data for ${c.slug} — add an entry to scripts/intake/2026-08-31/harvest-data.mjs (empty lists are fine)`); process.exit(1); }
  for (const p of [`content/projects/${c.slug}.yaml`, `content/sources/${c.slug}.yaml`]) if (!(await exists(p))) { console.error(`${p} missing — run npm run seed first`); process.exit(1); }

  // --- ledger --------------------------------------------------------------------------------------
  const ledger = await readYaml(`content/sources/${c.slug}.yaml`);
  const entries = ledger.sources ?? [];
  const byUrl = new Map(entries.map((s) => [s.url, s]));
  let next = entries.reduce((m, s) => Math.max(m, Number(s.id.slice(1))), 0) + 1;
  const ensure = (url, make) => {
    if (byUrl.has(url)) { const s = byUrl.get(url); Object.assign(s, make(s.id), { id: s.id }); return s.id; }
    const s = make(`S${next++}`); entries.push(s); byUrl.set(url, s); ledgerEntries++; return s.id;
  };
  const linkIds = c.official_links.map((l) => ensure(l.url, (id) => ({
    id, url: l.url, publisher: c.name, kind: LINK_KIND_TO_SOURCE_KIND[l.kind], accessed_at: byUrl.get(l.url)?.accessed_at ?? ACCESSED,
    claim: `Official ${l.kind} link for ${c.name}`, excerpt: "Link recorded from the census; page not yet reviewed line by line.",
    hash: null, archive_url: null, researcher: RESEARCHER, available: true,
  })));
  const keyId = {};
  for (const [key, claim] of Object.entries(harvest.sources ?? {})) {
    const art = ARTIFACTS[key];
    if (!art) { console.error(`${c.slug}: unknown artifact key ${key}`); process.exit(1); }
    const text = typeof claim === "string" ? { claim } : claim;
    keyId[key] = ensure(art.url, (id) => ({
      id, url: art.url, publisher: art.publisher, kind: art.kind, accessed_at: ACCESSED, claim: text.claim,
      excerpt: text.excerpt ?? GENERIC_EXCERPT, hash: null, archive_url: null, researcher: RESEARCHER, available: true,
    }));
  }
  const ids = (keys, where) => keys.map((k) => { if (!keyId[k]) { console.error(`${c.slug}: ${where} cites artifact "${k}" that is not in sources{}`); process.exit(1); } return keyId[k]; });
  entries.sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1)));
  const sourcesFile = { slug: c.slug, sources: entries };
  fail(`sources/${c.slug}.yaml`, validateAgainst("sources", sourcesFile));

  // --- project -------------------------------------------------------------------------------------
  const project = await readYaml(`content/projects/${c.slug}.yaml`);
  const finding = (f, where) => ({ text: f.text, class: f.class ?? "claim", sources: ids(f.sources, where) });
  const linkFindings = c.official_links.map((l, i) => ({
    text: `${c.name} publishes an official ${l.kind === "site" || l.kind === "app" ? (l.kind === "app" ? "app" : "site") : l.kind === "x" ? "X account" : l.kind === "github" ? "repository" : l.kind} at ${l.url}.`,
    class: "claim", sources: [linkIds[i]],
  }));
  const updated = {
    slug: c.slug, name: c.name, symbol: seed.symbol, category: c.category, lifecycle: c.lifecycle, coverage: c.coverage,
    summary: seed.summary, official_links: c.official_links, dependencies: seed.dependencies,
    deployments: (harvest.deployments ?? []).map((d, i) => ({ label: d.label, chain: d.chain ?? "robinhood-chain", address: d.address, role: d.role, verified: false, sources: ids(d.sources ?? [], `deployments[${i}]`) })),
    review: { ...project.review, reviewed_at: TODAY },
    ...(project.scoring ? { scoring: project.scoring } : {}),
    findings: {
      positive: [...linkFindings, ...(harvest.positive ?? []).map((f, i) => finding(f, `positive[${i}]`))],
      risk: (harvest.risk ?? []).map((f, i) => finding(f, `risk[${i}]`)),
      missing: seed.missing.map((text) => ({ text })),
      unresolved: (harvest.unresolved ?? []).map((text) => ({ text })),
    },
  };
  deployments += updated.deployments.length;
  fail(`projects/${c.slug}.yaml`, validateAgainst("project", updated));
  for (const id of new Set([...updated.deployments.flatMap((d) => d.sources), ...Object.values(updated.findings).flat().flatMap((f) => f.sources ?? [])]))
    if (!entries.some((s) => s.id === id)) { console.error(`${c.slug}: ${id} not in ledger`); process.exit(1); }

  // --- feed ----------------------------------------------------------------------------------------
  let feed = null;
  if (harvest.feed?.length) {
    const items = [...harvest.feed].sort((a, b) => a.date.localeCompare(b.date)).map((it, i) => {
      const item = { id: `${c.slug}-${i + 1}`, date: it.date, kind: it.kind, title: it.title, body: it.body };
      if (it.account) item.account = it.account;
      if (it.sourceUrl) item.sourceUrl = it.sourceUrl;
      if (it.sources?.length) item.sources = ids(it.sources, `feed[${i}]`);
      return item;
    });
    feed = { slug: c.slug, items };
    fail(`feed/${c.slug}.yaml`, validateAgainst("feed", feed));
  }

  // --- voice ---------------------------------------------------------------------------------------
  const texts = [[updated.summary, "summary"], ...Object.entries(updated.findings).flatMap(([k, list]) => list.map((f, i) => [f.text, `findings.${k}[${i}]`])),
    ...(feed?.items ?? []).flatMap((it) => [[it.title, `${it.id} title`], [it.body, `${it.id} body`]])];
  for (const [text, where] of texts) for (const w of voiceWarnings(text, `${c.slug} ${where}`)) { console.error(`voice: ${w}`); voiceHits++; }

  await writeYaml(`content/sources/${c.slug}.yaml`, sourcesFile);
  await writeYaml(`content/projects/${c.slug}.yaml`, updated);
  if (feed) { await writeYaml(`content/feed/${c.slug}.yaml`, feed, `# Generated by scripts/intake/2026-08-31/apply-harvest.mjs from scripts/intake/2026-08-31/harvest-data.mjs — dated, attributed items; numbers are what an account posted.\n`); feedFiles++; }
}

// --- stock-tokens card: deployments from the importer draft ---------------------------------------
{
  const draftPath = "research/inbox/grok-2026-08-30/drafts/stock-tokens-deployments.yaml";
  const cardPath = "content/dependencies/stock-tokens.yaml";
  if (await exists(draftPath)) {
    const draft = await readYaml(draftPath);
    const card = await readYaml(cardPath);
    card.deployments = draft.deployments;
    fail("dependencies/stock-tokens.yaml", validateAgainst("dependency", card));
    const cardIds = new Set(card.sources.map((s) => s.id));
    for (const d of card.deployments) for (const id of d.sources) if (!cardIds.has(id)) { console.error(`stock-tokens: deployment cites ${id} missing from the card ledger`); process.exit(1); }
    await writeYaml(cardPath, card, `# Deployments generated by scripts/intake/2026-08-31/apply-harvest.mjs from research/inbox/grok-2026-08-30/drafts/stock-tokens-deployments.yaml\n# (sheet 01 of the Grok workbook + the Chain File app's addresses). Four tickers carry two addresses because the two\n# artifacts disagree; both are recorded, neither is canonical (owner decision 2026-08-30). Hand-edit controls/failure_modes/sources above.\n`);
    console.log(`stock-tokens: ${card.deployments.length} deployments written`);
  }
}

if (voiceHits) { console.error(`${voiceHits} voice hit(s) — fix the wording in harvest-data.mjs / seed-data.mjs`); process.exit(1); }
console.log(`apply-harvest: ${census.length} projects, ${deployments} deployments, ${ledgerEntries} ledger entries added, ${feedFiles} feed files`);
