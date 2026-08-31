import { readFile, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

async function readYaml(path) {
  const text = await readFile(path, "utf8");
  try { return parse(text); }
  catch (e) { throw new Error(`${path}: ${e.message.split("\n")[0]}`); }
}

async function readDir(dir, ext) {
  let names;
  try { names = await readdir(dir); } catch (e) { if (e.code !== "ENOENT") throw e; return []; }
  return names.filter((n) => n.endsWith(ext)).sort().map((n) => join(dir, n));
}

/** Like readYaml, but a missing file returns `fallback` instead of throwing. */
async function readYamlOrDefault(path, fallback) {
  try { return await readYaml(path); }
  catch (e) { if (e.code === "ENOENT") return fallback; throw e; }
}

/** Loads every content file. Keys of the Maps are slugs (projects/sources/research/feed) or ids (dependencies). */
export async function loadContent(root = "content") {
  const site = await readYaml(join(root, "site.yaml"));
  const census = await readYaml(join(root, "census.yaml"));
  const changelog = await readYaml(join(root, "changelog.yaml"));
  const accounts = await readYamlOrDefault(join(root, "accounts.yaml"), []);

  const projects = new Map(), sources = new Map(), research = new Map(), dependencies = new Map(), feed = new Map();
  for (const p of await readDir(join(root, "projects"), ".yaml")) projects.set(basename(p, ".yaml"), await readYaml(p));
  for (const p of await readDir(join(root, "sources"), ".yaml")) sources.set(basename(p, ".yaml"), await readYaml(p));
  for (const p of await readDir(join(root, "research"), ".md")) research.set(basename(p, ".md"), await readFile(p, "utf8"));
  for (const p of await readDir(join(root, "dependencies"), ".yaml")) dependencies.set(basename(p, ".yaml"), await readYaml(p));
  for (const p of await readDir(join(root, "feed"), ".yaml")) feed.set(basename(p, ".yaml"), await readYaml(p));

  return { site, census, projects, sources, research, dependencies, changelog, feed, accounts };
}
