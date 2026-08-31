import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { SEED, RESEARCHER, LINK_KIND_TO_SOURCE_KIND } from "./seed-data.mjs";
import { REQUIRED_HEADINGS, PENDING_LINE } from "./lib/research-md.mjs";
import { validateAgainst } from "./lib/schemas.mjs";

const AT = "2026-08-30T00:00:00Z", DATE = "2026-08-30";
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

let written = 0, skipped = 0, logged = 0;
for (const c of census) {
  const seed = SEED[c.slug];
  if (!seed) { console.error(`no seed data for ${c.slug} — add it to scripts/seed-data.mjs`); process.exit(1); }

  const sources = c.official_links.map((l, i) => ({
    id: `S${i + 1}`, url: l.url, publisher: c.name, kind: LINK_KIND_TO_SOURCE_KIND[l.kind],
    accessed_at: AT, claim: `Official ${l.kind} link for ${c.name}`,
    excerpt: "Link recorded from the seed census; page not yet reviewed line by line.",
    hash: null, archive_url: null, researcher: RESEARCHER, available: true,
  }));

  const project = {
    slug: c.slug, name: c.name, symbol: seed.symbol, category: c.category, lifecycle: c.lifecycle,
    coverage: "stub", summary: seed.summary, official_links: c.official_links,
    dependencies: seed.dependencies,
    addresses: seed.addresses.map((a) => ({ ...a, verified: false, sources: [] })),
    review: { researcher: RESEARCHER, approver: "pending", methodology_version: "proofline-v1.0", reviewed_at: DATE, published_at: null },
    findings: {
      positive: sources.map((s) => ({ text: `${c.name} publishes an official ${s.kind === "official-site" ? "site" : s.kind} at ${s.url}.`, class: "claim", sources: [s.id] })),
      risk: [],
      missing: seed.missing.map((text) => ({ text })),
      unresolved: [],
    },
  };

  const research = `---\nslug: ${c.slug}\ncoverage: stub\nmethodology_version: proofline-v1.0\n---\n\n# ${c.name} — research record\n\n` +
    REQUIRED_HEADINGS.map((h) => `## ${h}\n\n${PENDING_LINE}\n`).join("\n");

  for (const [path, data, schema] of [
    [`content/projects/${c.slug}.yaml`, project, "project"],
    [`content/sources/${c.slug}.yaml`, { slug: c.slug, sources }, "sources"],
    [`content/research/${c.slug}.md`, research, null],
  ]) {
    if (await exists(path)) { skipped++; continue; }
    if (schema) { const errs = validateAgainst(schema, data); if (errs.length) { console.error(`${path}: ${errs.join("; ")}`); process.exit(1); } }
    await writeFile(path, typeof data === "string" ? data : stringify(data, { lineWidth: 0 }));
    written++;
    if (schema === "project") {
      // A new project file gets its opening history entry (spec §5.8); validate requires one per census slug.
      await appendChangelog({
        date: DATE, slug: c.slug, type: "coverage", severity: "Info", title: "Initial stub opened",
        detail: "Identity, official links and lifecycle recorded from the seed census. No evidence score until research lands.",
        prior: null, new: { coverage: "stub", lifecycle: c.lifecycle }, reviewer: RESEARCHER, methodology_version: "proofline-v1.0",
      });
      logged++;
    }
  }
}
console.log(`seed: ${written} file(s) written, ${skipped} existing file(s) left alone, ${logged} changelog entry(ies) appended`);
