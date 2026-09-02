// `npm run seed` — open the stub files for a census row that has none: content/projects/<slug>.yaml,
// content/sources/<slug>.yaml, content/research/<slug>.md, plus the row's opening changelog entry.
// The facts come from the newest packet at research/inbox/packets/<slug>/*.md (research-system §5); a
// slug with no packet gets an honest `NULL — …` placeholder stub and a warning, never a guess.
// Existing files are never overwritten, so a re-run on a seeded census writes nothing.
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { readLatestPacket, validatePacket, sectionParagraph } from "./lib/packet.mjs";
import { REQUIRED_HEADINGS, PENDING_LINE } from "./lib/research-md.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { reviewKeyFor } from "./lib/telegram.mjs";

const RESEARCHER = "harsharn10"; // the compiler of record until a packet names its own producer
const LINK_KIND_TO_SOURCE_KIND = { site: "official-site", app: "official-site", docs: "docs", whitepaper: "whitepaper", x: "social", github: "repository", telegram: "social", discord: "social", other: "other" };
const PENDING_SUMMARY = "NULL — research pending";

// Stub date: today unless SEED_DATE=YYYY-MM-DD is set (the first 14 stubs were seeded 2026-08-30).
const DATE = process.env.SEED_DATE ?? new Date().toISOString().slice(0, 10), AT = `${DATE}T00:00:00Z`;
const CHANGELOG = "content/changelog.yaml";
const exists = (p) => access(p).then(() => true, () => false);
const census = parse(await readFile("content/census.yaml", "utf8"));
for (const d of ["content/projects", "content/sources", "content/research"]) await mkdir(d, { recursive: true });

/** Append one entry to changelog.yaml as text, so the file's comments and existing formatting survive. */
async function appendChangelog(entry) {
  const errs = validateAgainst("changelog", [entry]);
  if (errs.length) { console.error(`${CHANGELOG}: ${errs.join("; ")}`); process.exit(1); }
  let text = await readFile(CHANGELOG, "utf8").catch((e) => { if (e.code !== "ENOENT") throw e; return "# One entry per published change. Newest last.\n"; });
  if (text.length && !text.endsWith("\n")) text += "\n";
  await writeFile(CHANGELOG, text + stringify([entry]));
}

/** Turn a validated packet into the stub's facts: identity, summary, links, deployments, gaps, ledger. */
function fromPacket(row, packet) {
  const record = packet.frontmatter;
  const sources = (record.receipts ?? []).map((receipt, index) => ({
    id: `S${index + 1}`, url: receipt.url, publisher: receipt.publisher, kind: receipt.kind,
    accessed_at: receipt.accessed_at, claim: receipt.title, excerpt: receipt.excerpt,
    hash: null, archive_url: null, researcher: record.producer, available: true,
  }));
  const links = (record.links ?? [])
    .filter((link) => link.authenticity === "confirmed" || link.authenticity === "unconfirmed")
    .map((link) => ({ kind: link.kind, url: link.url }));
  const receiptIndex = new Map((record.receipts ?? []).map((receipt, index) => [receipt.id, `S${index + 1}`]));
  const receiptKind = new Map((record.receipts ?? []).map((receipt) => [receipt.id, receipt.kind]));
  const deployments = (record.deployments ?? []).map((deployment) => {
    const cited = (deployment.receipt_ids ?? []).filter((id) => receiptIndex.has(id));
    const reproduced = deployment.address.exists_on_4663 === true && cited.some((id) => receiptKind.get(id) === "explorer");
    return {
      label: deployment.label,
      chain: deployment.address.chain,
      // Only the producer's own explorer or RPC check earns the address a place in the canonical record;
      // `verified` (PRD §7.1: reproduced on chain) needs that check plus an explorer receipt behind it.
      address: deployment.address.exists_on_4663 === true ? deployment.address.value : "not-verified",
      role: deployment.role,
      verified: reproduced,
      sources: cited.map((id) => receiptIndex.get(id)),
    };
  });
  return {
    symbol: record.identity.symbols?.[0] ?? null,
    summary: sectionParagraph(packet.sections, "What it is") || PENDING_SUMMARY,
    official_links: links.length ? links : row.official_links,
    dependencies: [],
    deployments,
    missing: (record.gaps ?? []).map((gap) => gap.question),
    sources,
    researcher: record.producer,
    workId: record.work_id,
  };
}

/** No packet for this slug: the census row's own facts, and `NULL — …` for everything it does not carry. */
function fromCensusRow(row) {
  return {
    symbol: row.identity?.symbols?.[0] ?? null,
    summary: PENDING_SUMMARY,
    official_links: row.official_links,
    dependencies: [],
    deployments: [],
    missing: [
      "No research packet has been filed for this row; every field below the census identity is unresearched",
      "Deployment map not established",
      "Privileged roles over the deployment not established",
      "An independent audit was not found in this review",
    ],
    sources: row.official_links.map((link, index) => ({
      id: `S${index + 1}`, url: link.url, publisher: row.name, kind: LINK_KIND_TO_SOURCE_KIND[link.kind],
      accessed_at: AT, claim: `Official ${link.kind} link for ${row.name}`,
      excerpt: "Link recorded from the seed census; page not yet reviewed line by line.",
      hash: null, archive_url: null, researcher: RESEARCHER, available: true,
    })),
    researcher: RESEARCHER,
  };
}

let written = 0, skipped = 0, logged = 0, fromPackets = 0, placeholders = 0;
for (const c of census) {
  const paths = [`content/projects/${c.slug}.yaml`, `content/sources/${c.slug}.yaml`, `content/research/${c.slug}.md`];
  const present = await Promise.all(paths.map(exists));
  if (present.every(Boolean)) { skipped += paths.length; continue; }

  const packet = await readLatestPacket(c.slug);
  let seed;
  if (packet) {
    const errs = validatePacket(packet, { census, path: packet.path });
    if (errs.length) { console.error(`${packet.path}: ${errs.join("; ")}`); process.exit(1); }
    seed = fromPacket(c, packet);
    fromPackets++;
  } else {
    console.warn(`warn  no packet at research/inbox/packets/${c.slug}/ — seeding ${c.slug} with NULL placeholders`);
    seed = fromCensusRow(c);
    placeholders++;
  }

  const sources = seed.sources;
  const project = {
    slug: c.slug, name: c.name, symbol: seed.symbol, category: c.category, lifecycle: c.lifecycle,
    coverage: "stub", summary: seed.summary, official_links: seed.official_links,
    dependencies: seed.dependencies,
    deployments: seed.deployments,
    review: { researcher: seed.researcher, approver: "pending", methodology_version: "proofline-v1.0", reviewed_at: DATE, published_at: null },
    findings: {
      // No generated "publishes an official site at …" lines: the link row is that receipt, and the
      // 2026-09-01 review removed 81 of them. Findings are written by the compiler from the packet's claims.
      positive: [],
      risk: [],
      missing: seed.missing.map((text) => ({ text })),
      unresolved: [],
    },
  };

  const research = `---\nslug: ${c.slug}\ncoverage: stub\nmethodology_version: proofline-v1.0\n---\n\n# ${c.name} — research record\n\n` +
    REQUIRED_HEADINGS.map((h) => `## ${h}\n\n${PENDING_LINE}\n`).join("\n");

  for (const [path, data, schema] of [
    [paths[0], project, "project"],
    [paths[1], { slug: c.slug, sources }, "sources"],
    [paths[2], research, null],
  ]) {
    if (await exists(path)) { skipped++; continue; }
    if (schema) { const errs = validateAgainst(schema, data); if (errs.length) { console.error(`${path}: ${errs.join("; ")}`); process.exit(1); } }
    await writeFile(path, typeof data === "string" ? data : stringify(data, { lineWidth: 0 }));
    written++;
    if (schema === "project") {
      // A new project file gets its opening history entry (spec §5.8); validate requires one per census slug.
      const entry = {
        date: DATE, slug: c.slug, type: "coverage", severity: "Info", title: "Initial stub opened",
        detail: seed.workId
          ? `Identity, official links, deployments and open questions compiled from research packet ${seed.workId}. No evidence score until a full record lands.`
          : "Identity, official links and lifecycle recorded from the census row; no research packet has been filed yet. No evidence score until research lands.",
        prior: null, new: { coverage: "stub", lifecycle: c.lifecycle }, reviewer: RESEARCHER, methodology_version: "proofline-v1.0",
      };
      await appendChangelog({ ...entry, review_key: reviewKeyFor(entry) });
      logged++;
    }
  }
}
console.log(`seed: ${written} file(s) written (${fromPackets} from a packet, ${placeholders} placeholder), ${skipped} existing file(s) left alone, ${logged} changelog entry(ies) appended`);
