// Add stable source-entry keys without reserializing YAML.
//   node scripts/migrations/add-source-keys.mjs [content-root]
import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { parse, parseDocument } from "yaml";

export function normalizeStableUrl(raw) {
  try {
    const url = new URL(String(raw).trim());
    url.hash = "";
    for (const key of [...url.searchParams.keys()])
      if (/^utm_/i.test(key) || ["ref", "s", "t"].includes(key.toLowerCase())) url.searchParams.delete(key);
    const path = url.pathname.replace(/\/$/, "");
    const port = url.port ? `:${url.port}` : "";
    return `${url.protocol.toLowerCase()}//${url.hostname.toLowerCase()}${port}${path}${url.search}`;
  } catch {
    return String(raw ?? "").trim();
  }
}

export const normalizeStableText = (value) => String(value ?? "").trim().replace(/\s+/g, " ");
export const sourceKeyFor = (source) =>
  createHash("sha1")
    .update(`${normalizeStableUrl(source.url)}|${normalizeStableText(source.claim)}`, "utf8")
    .digest("hex")
    .slice(0, 16);

async function yamlFiles(dir) {
  let names;
  try { names = await readdir(dir); }
  catch (error) { if (error.code === "ENOENT") return []; throw error; }
  return names.filter((name) => name.endsWith(".yaml")).sort().map((name) => join(dir, name));
}

function withoutKeys(value) {
  if (Array.isArray(value)) return value.map(withoutKeys);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value).filter(([key]) => key !== "key").map(([key, child]) => [key, withoutKeys(child)]));
}

export async function addSourceKeys(root = "content") {
  const files = [
    ...(await yamlFiles(join(root, "sources"))),
    ...(await yamlFiles(join(root, "dependencies"))),
  ];
  let total = 0, added = 0, duplicateCount = 0;
  for (const path of files) {
    const text = await readFile(path, "utf8");
    const doc = parseDocument(text);
    if (doc.errors.length) throw new Error(`${path}: ${doc.errors[0].message.split("\n")[0]}`);
    const sources = doc.get("sources", true)?.items ?? [];
    let out = text;
    const seen = new Map();
    for (let i = sources.length - 1; i >= 0; i--) {
      const map = sources[i];
      const source = map.toJSON();
      total++;
      const expected = sourceKeyFor(source);
      const prior = seen.get(expected);
      if (prior) {
        console.warn(`${path}: duplicate source key ${expected} on ${source.id} and ${prior}`);
        duplicateCount++;
      } else seen.set(expected, source.id);
      if (map.has("key")) {
        if (source.key !== expected) throw new Error(`${path}: ${source.id} has key ${source.key}; expected ${expected}`);
        continue;
      }
      const idNode = map.get("id", true);
      if (!idNode?.range) throw new Error(`${path}: source entry ${i} has no ranged id`);
      const lineEnd = out.indexOf("\n", idNode.range[1] - 1);
      const insertAt = lineEnd === -1 ? out.length : lineEnd;
      const indent = map.range[0] - (out.lastIndexOf("\n", map.range[0] - 1) + 1);
      out = `${out.slice(0, insertAt)}\n${" ".repeat(indent)}key: ${expected}${out.slice(insertAt)}`;
      added++;
    }
    const before = parse(text), after = parse(out);
    if (JSON.stringify(withoutKeys(after)) !== JSON.stringify(withoutKeys(before)))
      throw new Error(`${path}: migration changed data beyond source keys`);
    for (const source of after.sources ?? [])
      if (source.key !== sourceKeyFor(source)) throw new Error(`${path}: ${source.id} failed key round-trip`);
    if (out !== text) await writeFile(path, out);
  }
  return { files: files.length, total, added, duplicates: duplicateCount };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  const result = await addSourceKeys(process.argv[2] ?? "content");
  console.log(`source keys: ${result.added} added across ${result.files} files (${result.total} entries; ${result.duplicates} duplicate warning(s))`);
}
