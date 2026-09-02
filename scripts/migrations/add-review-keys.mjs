// Adds a stable `review_key` (sha1 of date|slug|type|title, first 16 hex — see reviewKeyFor in
// scripts/lib/telegram.mjs) to every changelog entry that lacks one. The yaml Document API is used only to
// locate each entry; the new line is spliced into the original text so comments, key order and scalar
// formatting elsewhere stay byte-for-byte. Safe to re-run: entries that already carry a key are skipped.
//   node scripts/migrations/add-review-keys.mjs [content/changelog.yaml]
import { readFile, writeFile } from "node:fs/promises";
import { parseDocument, parse } from "yaml";
import { reviewKeyFor } from "../lib/telegram.mjs";

const path = process.argv[2] ?? "content/changelog.yaml";
const text = await readFile(path, "utf8");
const doc = parseDocument(text);
if (doc.errors.length) throw new Error(`${path}: ${doc.errors[0].message.split("\n")[0]}`);
const entries = doc.contents?.items ?? [];

// Splice from the end so earlier offsets stay valid.
let out = text, added = 0;
for (let i = entries.length - 1; i >= 0; i--) {
  const map = entries[i];
  if (map.has("review_key")) continue;
  const entry = map.toJSON();
  const key = reviewKeyFor(entry);
  const lastValue = map.items[map.items.length - 1].value;
  const lineEnd = out.indexOf("\n", lastValue.range[1] - 1);
  const insertAt = lineEnd === -1 ? out.length : lineEnd;
  const indent = map.range[0] - (out.lastIndexOf("\n", map.range[0] - 1) + 1);
  out = `${out.slice(0, insertAt)}\n${" ".repeat(indent)}review_key: ${key}${out.slice(insertAt)}`;
  added++;
}

// Prove the splice changed nothing but the new field before writing. Strip review_key from both sides:
// on a re-run `before[i]` already carries one (the entry was skipped, not spliced), so comparing raw
// `before[i]` against `after[i]` minus review_key would false-fail on every already-migrated entry.
const before = parse(text), after = parse(out);
if (before.length !== after.length) throw new Error("entry count changed");
for (let i = 0; i < before.length; i++) {
  const { review_key: beforeKey, ...beforeRest } = before[i];
  const { review_key: afterKey, ...afterRest } = after[i];
  if (JSON.stringify(afterRest) !== JSON.stringify(beforeRest)) throw new Error(`entry ${i} changed beyond review_key`);
  if (afterKey !== (beforeKey ?? reviewKeyFor(before[i]))) throw new Error(`entry ${i} has the wrong review_key`);
}

await writeFile(path, out);
console.log(`added review_key to ${added} of ${entries.length} entries in ${path}`);
