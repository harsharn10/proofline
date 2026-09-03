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

/**
 * Set a row's lifecycle to mainnet and make its trailing comment name the receipt the flip rests on.
 * The comment is rewritten, not preserved: a note explaining why the row used to be announced is a
 * contradiction once the chain read is the reason it is not. Writing the whole line makes the pass
 * idempotent — a row already carrying its receipt comes out byte-identical.
 */
function updateCensusText(text, slug, address, createdAt) {
  const rowStart = text.match(new RegExp(`^- slug: ${escapeRegExp(slug)}\\r?$`, "m"));
  if (!rowStart) throw new Error(`census.yaml: no row for ${slug}`);
  const start = rowStart.index;
  const following = text.slice(start + rowStart[0].length).search(/\n- slug: /);
  const end = following < 0 ? text.length : start + rowStart[0].length + following;
  const block = text.slice(start, end);
  const changed = block.replace(/^  lifecycle:[^\n]*$/m, `  lifecycle: mainnet   # pulled: ${address} ${createdAt}`);
  if (changed === block && !/^  lifecycle: mainnet   # pulled: /m.test(block))
    throw new Error(`census.yaml: ${slug} has no lifecycle field to update`);
  return text.slice(0, start) + changed + text.slice(end);
}

/** The receipt an earlier run already recorded on the project file, so the census comment can echo it. */
function recordedReceipt(projectText) {
  const match = /^lifecycle_source:\s*pulled\s+(\S+)\s+(\S+)\s*$/m.exec(projectText);
  return match ? { address: match[1], createdAt: match[2] } : null;
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

  const originalCensusText = censusText;

  for (const row of census) {
    const projectPath = join(root, "projects", `${row.slug}.yaml`);
    let projectText;
    try { projectText = await readFile(projectPath, "utf8"); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }

    if (row.lifecycle === "announced") {
      let pulled;
      try { pulled = parse(await readFile(join(root, "pulled", `${row.slug}.yaml`), "utf8")); }
      catch (error) { if (error.code === "ENOENT") continue; throw error; }
      const evidence = mainnetReceiptFromPulled(pulled);
      if (!evidence) continue;
      const receipt = `pulled ${evidence.address} ${evidence.createdAt}`;
      const nextProjectText = updateProjectText(projectText, row.slug, receipt);
      // Parse before writing so a malformed edit can never partially update the tree.
      parse(nextProjectText);
      censusText = updateCensusText(censusText, row.slug, evidence.address, evidence.createdAt);
      flipped.push({ slug: row.slug, address: evidence.address, createdAt: evidence.createdAt, projectPath, text: nextProjectText });
      continue;
    }
    // A row an earlier run flipped keeps its census comment in step with the receipt on the project file.
    if (row.lifecycle !== "mainnet") continue;
    const recorded = recordedReceipt(projectText);
    if (recorded) censusText = updateCensusText(censusText, row.slug, recorded.address, recorded.createdAt);
  }

  parse(censusText);
  if (!dryRun && (flipped.length || censusText !== originalCensusText)) {
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
