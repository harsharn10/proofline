// Replace positional feed ids with stable content hashes while preserving every other byte of YAML.
//   node scripts/migrations/add-feed-hash-ids.mjs [content/feed]
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { parse, parseDocument } from "yaml";
import { normalizeStableText, normalizeStableUrl } from "./add-source-keys.mjs";

export const feedIdFor = ({ sourceUrl, slug, date, title }) =>
  createHash("sha1")
    .update(`${normalizeStableUrl(sourceUrl)}|${slug}|${date}|${normalizeStableText(title)}`, "utf8")
    .digest("hex")
    .slice(0, 16);

async function yamlFiles(dir) {
  let names;
  try { names = await readdir(dir); }
  catch (error) { if (error.code === "ENOENT") return []; throw error; }
  return names.filter((name) => name.endsWith(".yaml")).sort().map((name) => join(dir, name));
}

export async function addFeedHashIds(feedDir = "content/feed", { redirectPath = "build/feed-id-redirects.json" } = {}) {
  const files = await yamlFiles(feedDir);
  const contentRoot = dirname(feedDir);
  const redirects = {};
  let total = 0, changed = 0;
  for (const path of files) {
    const text = await readFile(path, "utf8");
    const doc = parseDocument(text);
    if (doc.errors.length) throw new Error(`${path}: ${doc.errors[0].message.split("\n")[0]}`);
    const slug = doc.get("slug");
    const ledgerPath = join(contentRoot, "sources", `${slug}.yaml`);
    const ledger = parse(await readFile(ledgerPath, "utf8"));
    const sourceUrls = new Map((ledger.sources ?? []).map((source) => [source.id, source.url]));
    const items = doc.get("items", true)?.items ?? [];
    let out = text;
    for (let i = items.length - 1; i >= 0; i--) {
      const map = items[i];
      const item = map.toJSON();
      total++;
      if (/^[a-f0-9]{16}$/.test(item.id)) continue;
      // Packets may omit sourceUrl. In that case the first cited ledger receipt is the canonical URL.
      const sourceUrl = item.sourceUrl ?? sourceUrls.get(item.sources?.[0]);
      if (!sourceUrl) throw new Error(`${path}: ${item.id} has neither sourceUrl nor a resolvable first source`);
      const id = feedIdFor({ ...item, slug, sourceUrl });
      redirects[slug] ??= {};
      redirects[slug][item.id] = id;
      const idNode = map.get("id", true);
      if (!idNode?.range) throw new Error(`${path}: item ${i} has no ranged id`);
      // Quote every hash so an all-numeric 16-character id remains a YAML string.
      out = `${out.slice(0, idNode.range[0])}${JSON.stringify(id)}${out.slice(idNode.range[1])}`;
      changed++;
    }
    const before = parse(text), after = parse(out);
    if (before.slug !== after.slug || before.items.length !== after.items.length) throw new Error(`${path}: item structure changed`);
    for (let i = 0; i < before.items.length; i++) {
      const { id: beforeId, ...beforeRest } = before.items[i];
      const { id: afterId, ...afterRest } = after.items[i];
      if (JSON.stringify(beforeRest) !== JSON.stringify(afterRest)) throw new Error(`${path}: item ${beforeId} changed beyond id`);
      const sourceUrl = beforeRest.sourceUrl ?? sourceUrls.get(beforeRest.sources?.[0]);
      const expected = /^[a-f0-9]{16}$/.test(beforeId) ? beforeId : feedIdFor({ ...beforeRest, slug, sourceUrl });
      if (afterId !== expected) throw new Error(`${path}: item ${beforeId} has wrong hash id ${afterId}`);
    }
    if (out !== text) await writeFile(path, out);
  }
  await mkdir(dirname(redirectPath), { recursive: true });
  await writeFile(redirectPath, `${JSON.stringify(redirects, null, 2)}\n`);
  return { files: files.length, total, changed, redirects };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  const result = await addFeedHashIds(process.argv[2] ?? "content/feed");
  console.log(JSON.stringify(result.redirects, null, 2));
  console.log(`feed ids: ${result.changed} changed across ${result.files} files (${result.total} items)`);
}
