#!/usr/bin/env node
// Promote Announced rows only when the puller has both a contract on chain 4663 and a market pair.
import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parse } from "yaml";
import { mainnetReceiptFromPulled } from "../lib/checks.mjs";

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function updateCensusText(text, slug) {
  const rowStart = text.match(new RegExp(`^- slug: ${escapeRegExp(slug)}\\r?$`, "m"));
  if (!rowStart) throw new Error(`census.yaml: no row for ${slug}`);
  const start = rowStart.index;
  const following = text.slice(start + rowStart[0].length).search(/\n- slug: /);
  const end = following < 0 ? text.length : start + rowStart[0].length + following;
  const block = text.slice(start, end);
  const changed = block.replace(/^(  lifecycle:)\s+[^\s#]+/m, "$1 mainnet");
  if (changed === block) throw new Error(`census.yaml: ${slug} has no lifecycle field to update`);
  return text.slice(0, start) + changed + text.slice(end);
}

function updateProjectText(text, slug, receipt) {
  let changed = text.replace(/^lifecycle:\s+[^\s#]+.*$/m, "lifecycle: mainnet");
  if (changed === text) throw new Error(`projects/${slug}.yaml: no lifecycle field to update`);
  const sourceLine = `lifecycle_source: ${receipt}`;
  if (/^lifecycle_source:/m.test(changed)) changed = changed.replace(/^lifecycle_source:.*$/m, sourceLine);
  else changed = changed.replace(/^lifecycle: mainnet$/m, `lifecycle: mainnet\n${sourceLine}`);
  return changed;
}

export async function migrateLifecycle(contentDir = "content", { dryRun = false } = {}) {
  const root = resolve(contentDir);
  const censusPath = join(root, "census.yaml");
  const census = parse(await readFile(censusPath, "utf8"));
  let censusText = await readFile(censusPath, "utf8");
  const flipped = [];

  for (const row of census) {
    if (row.lifecycle !== "announced") continue;
    let pulled;
    try { pulled = parse(await readFile(join(root, "pulled", `${row.slug}.yaml`), "utf8")); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    const evidence = mainnetReceiptFromPulled(pulled);
    if (!evidence) continue;

    const projectPath = join(root, "projects", `${row.slug}.yaml`);
    const projectText = await readFile(projectPath, "utf8");
    const receipt = `pulled ${evidence.address} ${evidence.createdAt}`;
    const nextProjectText = updateProjectText(projectText, row.slug, receipt);
    // Parse before writing so a malformed edit can never partially update the tree.
    parse(nextProjectText);
    censusText = updateCensusText(censusText, row.slug);
    flipped.push({ slug: row.slug, address: evidence.address, createdAt: evidence.createdAt, projectPath, text: nextProjectText });
  }

  parse(censusText);
  if (!dryRun && flipped.length) {
    await writeFile(censusPath, censusText);
    for (const row of flipped) await writeFile(row.projectPath, row.text);
  }
  return flipped.map(({ slug, address, createdAt }) => ({ slug, address, createdAt }));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const contentDir = args.find((arg) => !arg.startsWith("--")) ?? "content";
  const rows = await migrateLifecycle(contentDir, { dryRun });
  for (const row of rows) console.log(`${dryRun ? "would flip" : "flipped"} ${row.slug}: pulled ${row.address} ${row.createdAt}`);
  console.log(`lifecycle-from-pulled: ${rows.length} slug(s) ${dryRun ? "eligible" : "flipped"}`);
}
