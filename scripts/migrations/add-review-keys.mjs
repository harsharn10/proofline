// Add stable review keys to every per-slug changelog without reserializing YAML.
//   node scripts/migrations/add-review-keys.mjs [content/changelog]
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { parseDocument, parse } from "yaml";
import { reviewKeyFor } from "../lib/telegram.mjs";

async function targetFiles(target) {
  const info = await stat(target);
  if (info.isFile()) return [target];
  if (!info.isDirectory()) throw new Error(`${target}: expected a file or directory`);
  return (await readdir(target)).filter((name) => name.endsWith(".yaml")).sort().map((name) => join(target, name));
}

export async function addReviewKeys(target = "content/changelog") {
  const files = await targetFiles(target);
  let total = 0, added = 0;
  for (const path of files) {
    const text = await readFile(path, "utf8");
    const doc = parseDocument(text);
    if (doc.errors.length) throw new Error(`${path}: ${doc.errors[0].message.split("\n")[0]}`);
    const entries = doc.contents?.items ?? [];
    let out = text;
    for (let i = entries.length - 1; i >= 0; i--) {
      const map = entries[i];
      total++;
      const entry = map.toJSON();
      const expected = reviewKeyFor(entry);
      if (map.has("review_key")) {
        if (entry.review_key !== expected) throw new Error(`${path}: entry ${i} has the wrong review_key`);
        continue;
      }
      const lastValue = map.items[map.items.length - 1].value;
      const lineEnd = out.indexOf("\n", lastValue.range[1] - 1);
      const insertAt = lineEnd === -1 ? out.length : lineEnd;
      const indent = map.range[0] - (out.lastIndexOf("\n", map.range[0] - 1) + 1);
      out = `${out.slice(0, insertAt)}\n${" ".repeat(indent)}review_key: ${expected}${out.slice(insertAt)}`;
      added++;
    }
    const before = parse(text), after = parse(out);
    if (before.length !== after.length) throw new Error(`${path}: entry count changed`);
    for (let i = 0; i < before.length; i++) {
      const { review_key: beforeKey, ...beforeRest } = before[i];
      const { review_key: afterKey, ...afterRest } = after[i];
      if (JSON.stringify(afterRest) !== JSON.stringify(beforeRest)) throw new Error(`${path}: entry ${i} changed beyond review_key`);
      if (afterKey !== (beforeKey ?? reviewKeyFor(before[i]))) throw new Error(`${path}: entry ${i} has the wrong review_key`);
    }
    if (out !== text) await writeFile(path, out);
  }
  return { files: files.length, total, added };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  const result = await addReviewKeys(process.argv[2] ?? "content/changelog");
  console.log(`review keys: ${result.added} added across ${result.files} files (${result.total} entries)`);
}
