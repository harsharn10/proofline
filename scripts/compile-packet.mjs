#!/usr/bin/env node
// Compile one packet-v2 Markdown file into canonical Proofline content.
//   node scripts/compile-packet.mjs <packet.md> [--content-dir <dir>] [--dry-run]
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { parseDocument, parse, stringify } from "yaml";
import { parsePacket, checkPacket, compile } from "./lib/packet.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { checkResearch } from "./lib/research-md.mjs";
import { measurementUpdateErrors } from './lib/measurement-update.mjs';
import { buildRelationships, relationshipIndex, referenceReason } from './lib/relationships.mjs';

export function referenceTokenErrors(packet, dependencies = []) {
  const index = relationshipIndex(buildRelationships([], dependencies));
  return (packet.deployments ?? []).flatMap(d => {
    const reason = referenceReason({ ...d, chain: d.address?.chain, address: d.address?.value }, index);
    return d.role === 'token' && reason ? [`${d.label}: ${reason}; use role other for reference assets, not the subject's own token`] : [];
  });
}

function argumentsFor(argv) {
  let packetPath = null, contentDir = "content", dryRun = false;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--content-dir") {
      contentDir = argv[++i];
      if (!contentDir) throw new Error("--content-dir requires a path");
    } else if (!packetPath) packetPath = arg;
    else throw new Error(`unexpected argument ${arg}`);
  }
  if (!packetPath) throw new Error("usage: compile-packet.mjs <packet.md> [--content-dir <dir>] [--dry-run]");
  return { packetPath, contentDir, dryRun };
}

async function yamlOr(path, fallback) {
  try { return parse(await readFile(path, "utf8")); }
  catch (error) { if (error.code === "ENOENT") return fallback; throw error; }
}

async function textOr(path, fallback) {
  try { return await readFile(path, "utf8"); }
  catch (error) { if (error.code === "ENOENT") return fallback; throw error; }
}

function validationErrors(result, census) {
  const checks = [
    ["census.yaml", validateAgainst("census", census)],
    [`projects/${result.project.slug}.yaml`, validateAgainst("project", result.project)],
    [`sources/${result.sources.slug}.yaml`, validateAgainst("sources", result.sources)],
    [`feed/${result.feed.slug}.yaml`, validateAgainst("feed", result.feed)],
    ["changelog.yaml", validateAgainst("changelog", [result.changelog])],
  ];
  const researchErrors = checkResearch(result.research, {
    slug: result.project.slug,
    coverage: result.project.coverage,
    ledgerIds: new Set(result.sources.sources.map((source) => source.id)),
  });
  checks.push([`research/${result.project.slug}.md`, researchErrors]);
  return checks.flatMap(([path, errors]) => errors.map((error) => `${path}: ${error}`));
}

/**
 * Write one census row without flattening the file. census.yaml carries controller comments — which
 * receipt a lifecycle rests on, why a row is where it is — and re-emitting the whole array from parsed
 * data would delete every one of them. Only the compiled row's node is replaced, and the comments its
 * top-level keys carried move onto the new node.
 */
export function censusTextWithRow(text, row) {
  const doc = text === null ? parseDocument("[]\n") : parseDocument(text);
  const rows = doc.contents?.items ?? [];
  const next = doc.createNode(row);
  const index = rows.findIndex((node) => node?.get?.("slug") === row.slug);
  if (index >= 0) {
    for (const pair of rows[index].items ?? []) {
      const key = pair.key?.value;
      const carried = next.items.find((item) => item.key?.value === key);
      if (!carried) continue;
      for (const field of ["comment", "commentBefore"]) {
        if (pair.value?.[field] != null && carried.value != null) carried.value[field] = pair.value[field];
        if (pair.key?.[field] != null && carried.key != null) carried.key[field] = pair.key[field];
      }
    }
    if (rows[index].commentBefore != null) next.commentBefore = rows[index].commentBefore;
    if (rows[index].comment != null) next.comment = rows[index].comment;
    doc.contents.items[index] = next;
  } else doc.contents.items.push(next);
  return doc.toString({ lineWidth: 0 });
}

async function appendChangelog(path, entry) {
  let text;
  try { text = await readFile(path, "utf8"); }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    text = `# One entry per published change for ${entry.slug}. Newest last.\n`;
  }
  const existing = parse(text) ?? [];
  if (existing.some((row) => row.review_key === entry.review_key)) return false;
  if (text && !text.endsWith("\n")) text += "\n";
  await writeFile(path, text + stringify([entry], { lineWidth: 0 }));
  return true;
}

export async function runCompile({ packetPath, contentDir = "content", dryRun = false, enforceMinimums = true }) {
  const packet = parsePacket(await readFile(packetPath, "utf8"));
  const packetErrors = checkPacket(packet.frontmatter, packet.body);
  if (enforceMinimums) {
    packetErrors.push(...validateAgainst('packet', packet.frontmatter));
    const { enforceResearchMinimums } = await import('./lib/research-minimums.mjs');
    packetErrors.push(...enforceResearchMinimums(packet));
  }
  if (packetErrors.length) throw new Error(packetErrors.join("\n"));
  const slug = packet.frontmatter.slug;
  const root = resolve(contentDir);
  const dependencyFiles = await readdir(join(root, 'dependencies')).catch(error => {
    if (error.code === 'ENOENT') return [];
    throw error;
  });
  const dependencies = await Promise.all(dependencyFiles.filter(f => f.endsWith('.yaml'))
    .map(f => yamlOr(join(root, 'dependencies', f), null)));
  const roleErrors = referenceTokenErrors(packet.frontmatter, dependencies);
  if (roleErrors.length) throw new Error(roleErrors.join('\n'));
  const censusPath = join(root, "census.yaml");
  const projectPath = join(root, "projects", `${slug}.yaml`);
  const sourcesPath = join(root, "sources", `${slug}.yaml`);
  const feedPath = join(root, "feed", `${slug}.yaml`);
  const researchPath = join(root, "research", `${slug}.md`);
  const changelogPath = join(root, "changelog", `${slug}.yaml`);
  const pulledPath = join(root, "pulled", `${slug}.yaml`);
  const censusText = await textOr(censusPath, null);
  const census = censusText === null ? [] : parse(censusText) ?? [];
  const priorProject = await yamlOr(projectPath, null);
  if (enforceMinimums && packet.frontmatter.packet_tier === 'update' && !priorProject)
    throw new Error('An update packet cannot seed a new project; submit a seed/full packet with the research minimums.');
  const priorCensusRow = census.find((row) => row.slug === slug) ?? null;
  const priorSources = await yamlOr(sourcesPath, null);
  const priorFeed = await yamlOr(feedPath, null);
  const priorResearch = await textOr(researchPath, null);
  // content/pulled is machine output; a half-written file must not stop a compile.
  let pulled = null;
  try { pulled = await yamlOr(pulledPath, null); } catch { pulled = null; }
  // The census goes in so the compiler can drop an alias that is only another canonical name (§7).
  const result = compile(packet, priorProject, priorCensusRow, priorSources, priorFeed, { pulled, priorResearch, census });
  if (enforceMinimums && packet.frontmatter.metrics?.length && packet.frontmatter.update_reason !== 'correction') {
    const kinds = new Set(packet.frontmatter.metrics.map(row => row.kind));
    const errors = measurementUpdateErrors((result.project.metrics ?? []).filter(row => kinds.has(row.kind)), priorProject?.metrics,
      { requireChange: packet.frontmatter.update_reason === 'measurement' });
    if (errors.length) throw new Error(errors.join('\n'));
  }
  if (enforceMinimums && packet.frontmatter.update_reason === 'event' &&
      !result.feed.items.some(row => !(priorFeed?.items ?? []).some(old => old.id === row.id)))
    throw new Error('No new website event: this update replays evidence already compiled. Record no-change on the task; do not resubmit it.');
  const nextCensus = priorCensusRow
    ? census.map((row) => row.slug === slug ? result.censusRow : row)
    : [...census, result.censusRow];
  const errors = validationErrors(result, nextCensus);
  if (errors.length) throw new Error(errors.join("\n"));
  // A feed file with no items is not a feed; only write one once there is something to read.
  const writesFeed = result.feed.items.length > 0 || priorFeed !== null;
  const files = [censusPath, projectPath, sourcesPath, researchPath, ...(writesFeed ? [feedPath] : []), changelogPath];
  if (dryRun) {
    for (const path of files) console.log(path);
    return { ...result, files, dryRun: true };
  }
  for (const path of files) await mkdir(dirname(path), { recursive: true });
  await writeFile(censusPath, censusTextWithRow(censusText, result.censusRow));
  await writeFile(projectPath, stringify(result.project, { lineWidth: 0 }));
  await writeFile(sourcesPath, stringify(result.sources, { lineWidth: 0 }));
  await writeFile(researchPath, result.research);
  if (writesFeed) await writeFile(feedPath, stringify(result.feed, { lineWidth: 0 }));
  await appendChangelog(changelogPath, result.changelog);
  return { ...result, files, dryRun: false };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  try {
    const result = await runCompile(argumentsFor(process.argv.slice(2)));
    for (const message of result.notices) console.log(`note  ${result.project.slug}: ${message}`);
    const { autoTaggedParagraphs, skippedMetrics, skippedDeployments } = result.degraded;
    console.log(
      `${result.dryRun ? "would compile" : "compiled"} ${result.project.slug}: ${result.files.length} canonical paths` +
      ` · ${autoTaggedParagraphs} auto-tagged paragraph(s) · ${skippedMetrics} skipped metric(s) · ${skippedDeployments} skipped deployment(s)`,
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
