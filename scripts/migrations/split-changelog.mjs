// Split the aggregate changelog into one YAML array per slug.
//   node scripts/migrations/split-changelog.mjs [content-root]
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { parse, stringify } from "yaml";

export async function splitChangelog(root = "content") {
  const source = join(root, "changelog.yaml");
  const target = join(root, "changelog");
  let text;
  try { text = await readFile(source, "utf8"); }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    const existing = await readdir(target).catch((readError) => {
      if (readError.code === "ENOENT") return [];
      throw readError;
    });
    return { entries: 0, files: existing.filter((name) => name.endsWith(".yaml")).length, changed: false };
  }
  const entries = parse(text);
  if (!Array.isArray(entries)) throw new Error(`${source}: expected a YAML array`);
  const bySlug = new Map();
  for (const entry of entries) {
    if (!entry?.slug) throw new Error(`${source}: changelog entry has no slug`);
    if (!bySlug.has(entry.slug)) bySlug.set(entry.slug, []);
    bySlug.get(entry.slug).push(entry);
  }
  await mkdir(target, { recursive: true });
  for (const [slug, rows] of [...bySlug].sort(([a], [b]) => a.localeCompare(b))) {
    const sorted = [...rows].sort((a, b) => a.date.localeCompare(b.date));
    const out = `# One entry per published change for ${slug}. Newest last.\n${stringify(sorted, { lineWidth: 0 })}`;
    const roundTrip = parse(out);
    if (JSON.stringify(roundTrip) !== JSON.stringify(sorted)) throw new Error(`${slug}: changelog round-trip changed data`);
    await writeFile(join(target, `${slug}.yaml`), out);
  }
  await rm(source);
  return { entries: entries.length, files: bySlug.size, changed: true };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  const result = await splitChangelog(process.argv[2] ?? "content");
  console.log(`changelog: ${result.entries} entries in ${result.files} per-slug files${result.changed ? "" : " (already split)"}`);
}
