// One-shot migration: add the canonical identity block to every legacy census row while preserving
// the file's comments and compact YAML style. Do not re-run after the migration is committed.
import { readFile, writeFile } from "node:fs/promises";
import { parse } from "yaml";

const censusPath = "content/census.yaml";
const censusText = await readFile(censusPath, "utf8");
if (/^  identity:/m.test(censusText)) throw new Error("census already contains identity blocks");

const census = parse(censusText);
const projectBySlug = new Map();
for (const row of census) {
  const project = parse(await readFile(`content/projects/${row.slug}.yaml`, "utf8"));
  projectBySlug.set(row.slug, project);
}

const kindFor = (category) => {
  if (["Stock-paired token", "Stablecoin"].includes(category)) return "token";
  if (category === "Oracle / infra") return "infrastructure";
  if (category === "Scanner / tooling") return "tool";
  return "protocol";
};

let index = -1;
const lines = censusText.split("\n");
const output = [];
for (const line of lines) {
  if (/^- slug: /.test(line)) index++;
  output.push(line);
  if (!/^  coverage:/.test(line)) continue;
  const row = census[index];
  const symbol = projectBySlug.get(row.slug)?.symbol;
  output.push(
    "  identity:",
    "    aliases: []",
    `    symbols: ${symbol ? `[${JSON.stringify(symbol)}]` : "[]"}`,
    `    entity_kind: ${kindFor(row.category)}`,
    `    chain_scope: ${row.slug === "pons" ? "robinhood-native" : "unknown"}`,
    `    status: ${row.slug === "pons" ? "verified" : "provisional"}`,
  );
}

await writeFile(censusPath, output.join("\n"));
console.log(`added identity taxonomy to ${census.length} census rows`);
