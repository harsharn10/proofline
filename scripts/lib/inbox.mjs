// Strict YAML parse of every file under research/inbox. The inbox sits on the packet-PR allowlist and
// nothing else reads these ledgers at validate time, so a broken file otherwise ships silently
// (pipeline audit 2026-09-01 §6, missing validation #1). Parse failures are errors, never warnings.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseAllDocuments } from "yaml";

async function walk(dir, out = []) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); }
  catch (e) { if (e.code === "ENOENT") return out; throw e; }
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path, out);
    else if (/\.ya?ml$/i.test(entry.name)) out.push(path);
  }
  return out;
}

/**
 * Every parse error in `text` as `path:line:col: message` — all of them, not just the first, so a file
 * with several defects is fixed in one round. Duplicate map keys count as errors (the yaml default).
 */
export function yamlParseErrors(text, path) {
  const out = [];
  for (const doc of parseAllDocuments(text, { prettyErrors: true }))
    for (const e of doc.errors) {
      const pos = e.linePos?.[0];
      const where = pos ? `${path}:${pos.line}:${pos.col}` : path;
      out.push(`${where}: ${e.message.split("\n")[0].replace(/ at line \d+, column \d+:?$/, "")}`);
    }
  return out;
}

/** Walks `directory` recursively and parses every *.yaml / *.yml. Returns { errors, files }. */
export async function validateInboxYaml(directory = "research/inbox") {
  const files = await walk(directory);
  const errors = [];
  for (const file of files) errors.push(...yamlParseErrors(await readFile(file, "utf8"), file));
  return { errors, files: files.length };
}
