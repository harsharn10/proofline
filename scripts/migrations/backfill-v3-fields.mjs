#!/usr/bin/env node
// Recompile only the v3 reader fields from the 2026-09-03 Icarus packet batch.
// Canonical identity, lifecycle, research, sources and every other project field remain byte-for-byte
// equivalent after YAML serialization; rerunning the migration is a no-op.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parse, stringify } from "yaml";
import { compile, parsePacket } from "../lib/packet.mjs";

export const BATCH_PACKET = "WORK-20260903-grok-heavy-icarus-research.md";
const V3_FIELDS = ["tldr", "tldr_source", "why_people_care", "risks"];

async function yaml(path, fallback = null) {
  try { return parse(await readFile(path, "utf8")); }
  catch (error) { if (error.code === "ENOENT") return fallback; throw error; }
}

export async function backfillV3Fields({
  packetRoot = "research/inbox/packets",
  contentRoot = "content",
  dryRun = false,
} = {}) {
  const census = await yaml(join(contentRoot, "census.yaml"), []);
  const censusBySlug = new Map((census ?? []).map((row) => [row.slug, row]));
  const slugs = (await readdir(packetRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  const stats = { packets: 0, projectsChanged: 0, feedsChanged: 0, tldr: 0, tldr_source: 0, why_people_care: 0, risks: 0, notices: [] };

  for (const slug of slugs) {
    const packetPath = join(packetRoot, slug, BATCH_PACKET);
    let packetText;
    try { packetText = await readFile(packetPath, "utf8"); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    const projectPath = join(contentRoot, "projects", `${slug}.yaml`);
    const sourcesPath = join(contentRoot, "sources", `${slug}.yaml`);
    const feedPath = join(contentRoot, "feed", `${slug}.yaml`);
    const project = await yaml(projectPath);
    const sources = await yaml(sourcesPath);
    const feed = await yaml(feedPath, { slug, items: [] });
    if (!project || !sources) continue;
    stats.packets++;

    const compileProject = structuredClone(project);
    // Recompute these fields from this batch rather than treating an earlier partial migration run as
    // canonical input. A controller-edited project is the exception: compile() preserves its copy.
    if (compileProject.controller_edited !== true)
      for (const field of V3_FIELDS) delete compileProject[field];
    const result = compile(parsePacket(packetText), compileProject, censusBySlug.get(slug), sources, feed, { census });
    stats.notices.push(...result.notices.map((notice) => `${slug}: ${notice}`));

    const nextProject = structuredClone(project);
    let projectChanged = false;
    for (const field of V3_FIELDS) {
      const value = result.project[field];
      if (value === undefined) {
        if (project.controller_edited !== true && field in nextProject) {
          delete nextProject[field];
          projectChanged = true;
        }
        continue;
      }
      if (JSON.stringify(value) === JSON.stringify(project[field])) continue;
      nextProject[field] = value;
      stats[field]++;
      projectChanged = true;
    }
    if (projectChanged) {
      stats.projectsChanged++;
      if (!dryRun) await writeFile(projectPath, stringify(nextProject, { lineWidth: 0 }));
    }

    const compiledItems = new Map(result.feed.items.map((item) => [item.id, item]));
    const nextFeed = structuredClone(feed);
    let feedChanged = false;
    for (const item of nextFeed.items ?? []) {
      const compiled = compiledItems.get(item.id);
      if (!compiled || compiled.body === item.body) continue;
      item.body = compiled.body;
      feedChanged = true;
    }
    if (feedChanged) {
      stats.feedsChanged++;
      if (!dryRun) await writeFile(feedPath, stringify(nextFeed, { lineWidth: 0 }));
    }
  }
  return stats;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const stats = await backfillV3Fields({ dryRun: process.argv.includes("--dry-run") });
  console.log(JSON.stringify(stats, null, 2));
}
