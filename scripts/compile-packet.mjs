#!/usr/bin/env node
// Compile one packet-v2 Markdown file into canonical Proofline content.
//   node scripts/compile-packet.mjs <packet.md> [--content-dir <dir>] [--dry-run]
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { parse, stringify } from "yaml";
import { parsePacket, checkPacket, compile } from "./lib/packet.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { checkResearch } from "./lib/research-md.mjs";

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

async function appendChangelog(path, entry) {
  let text;
  try { text = await readFile(path, "utf8"); }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    text = "# One entry per published change. Newest last.\n";
  }
  const existing = parse(text) ?? [];
  if (existing.some((row) => row.review_key === entry.review_key)) return false;
  if (text && !text.endsWith("\n")) text += "\n";
  await writeFile(path, text + stringify([entry], { lineWidth: 0 }));
  return true;
}

export async function runCompile({ packetPath, contentDir = "content", dryRun = false }) {
  const packet = parsePacket(await readFile(packetPath, "utf8"));
  const packetErrors = checkPacket(packet.frontmatter, packet.body);
  if (packetErrors.length) throw new Error(packetErrors.join("\n"));
  const slug = packet.frontmatter.slug;
  const root = resolve(contentDir);
  const censusPath = join(root, "census.yaml");
  const projectPath = join(root, "projects", `${slug}.yaml`);
  const sourcesPath = join(root, "sources", `${slug}.yaml`);
  const feedPath = join(root, "feed", `${slug}.yaml`);
  const researchPath = join(root, "research", `${slug}.md`);
  const changelogPath = join(root, "changelog.yaml");
  const census = await yamlOr(censusPath, []);
  const priorProject = await yamlOr(projectPath, null);
  const priorCensusRow = census.find((row) => row.slug === slug) ?? null;
  const priorSources = await yamlOr(sourcesPath, null);
  const priorFeed = await yamlOr(feedPath, null);
  const result = compile(packet, priorProject, priorCensusRow, priorSources, priorFeed);
  const nextCensus = priorCensusRow
    ? census.map((row) => row.slug === slug ? result.censusRow : row)
    : [...census, result.censusRow];
  const errors = validationErrors(result, nextCensus);
  if (errors.length) throw new Error(errors.join("\n"));
  const files = [censusPath, projectPath, sourcesPath, researchPath, feedPath, changelogPath];
  if (dryRun) {
    for (const path of files) console.log(path);
    return { ...result, files, dryRun: true };
  }
  for (const path of [projectPath, sourcesPath, researchPath, feedPath]) await mkdir(dirname(path), { recursive: true });
  await writeFile(censusPath, stringify(nextCensus, { lineWidth: 0 }));
  await writeFile(projectPath, stringify(result.project, { lineWidth: 0 }));
  await writeFile(sourcesPath, stringify(result.sources, { lineWidth: 0 }));
  await writeFile(researchPath, result.research);
  await writeFile(feedPath, stringify(result.feed, { lineWidth: 0 }));
  await appendChangelog(changelogPath, result.changelog);
  return { ...result, files, dryRun: false };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  try {
    const result = await runCompile(argumentsFor(process.argv.slice(2)));
    console.log(`${result.dryRun ? "would compile" : "compiled"} ${result.project.slug}: ${result.files.length} canonical paths`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
