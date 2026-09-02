// Shaping, validation and serialisation of content/pulled/<slug>.yaml.
// The schema is compiled here with its own Ajv instance, not through scripts/lib/schemas.mjs:
// pulled files are machine output and must not become a content-validation dependency.

import { readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { Document } from "yaml";

const DOC_KEYS = ["slug", "pulled_at", "chain", "addresses", "metrics", "errors"];
const ADDRESS_KEYS = [
  "address", "label", "role", "is_contract", "source_verified", "contract_name",
  "proxy", "owner", "owner_type", "safe", "created_block", "created_at", "holders", "errors",
];
const PROXY_KEYS = ["type", "implementation", "admin"];
const SAFE_KEYS = ["threshold", "signers"];
const METRIC_KEYS = ["kind", "value", "as_of", "source_url"];
const ERROR_KEYS = ["step", "message"];

const pick = (obj, keys) => {
  const out = {};
  for (const k of keys) out[k] = obj[k] ?? null;
  return out;
};

const orderErrors = (errors = []) => errors.map((e) => pick(e, ERROR_KEYS));

/** Reorders one document's keys to schema order so diffs between runs stay readable. */
export function orderDocument(doc) {
  const ordered = pick(doc, DOC_KEYS);
  ordered.addresses = (doc.addresses ?? []).map((a) => {
    const entry = pick(a, ADDRESS_KEYS);
    entry.proxy = pick(a.proxy ?? {}, PROXY_KEYS);
    entry.safe = a.safe ? pick(a.safe, SAFE_KEYS) : null;
    entry.errors = orderErrors(a.errors);
    return entry;
  });
  ordered.metrics = (doc.metrics ?? []).map((m) => pick(m, METRIC_KEYS));
  ordered.errors = orderErrors(doc.errors);
  return ordered;
}

/** Compiles schema/pulled.schema.json with schema/shared.schema.json registered as its $ref target. */
export function createValidator(schemaDir = new URL("../../../schema/", import.meta.url)) {
  const read = (name) => JSON.parse(readFileSync(new URL(`${name}.schema.json`, schemaDir), "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: true, strictTypes: false });
  addFormats(ajv);
  ajv.addSchema(read("shared"));
  const validate = ajv.compile(read("pulled"));
  /** Returns [] when valid, else human-readable messages. */
  return (data) => {
    if (validate(data)) return [];
    return validate.errors.map((e) => {
      let detail = "";
      if (e.params?.allowedValues) detail = ` (${e.params.allowedValues.join(", ")})`;
      else if (e.keyword === "additionalProperties") detail = ` (${e.params.additionalProperty})`;
      else if (e.keyword === "required") detail = ` (${e.params.missingProperty})`;
      return `${e.instancePath || "/"} ${e.message}${detail}`;
    });
  };
}

/**
 * Serialises to YAML, annotating pulled_at with the chain head the run read at so a reader can tell
 * which block the RPC facts describe without a separate field.
 */
export function toYaml(doc, { blockNumber = null } = {}) {
  const document = new Document(doc);
  if (blockNumber !== null && blockNumber !== undefined) {
    const pair = document.contents.items.find((p) => p.key?.value === "pulled_at");
    if (pair) pair.value.comment = ` chain head ${blockNumber} at read time`;
  }
  return document.toString({ lineWidth: 0 });
}

/**
 * Validates then writes content/pulled/<slug>.yaml. Throws on a schema failure so an invalid
 * document can never reach disk. `dry: true` returns the text without touching the filesystem.
 */
export async function writePulled(doc, { dir = "content/pulled", blockNumber = null, dry = false, validate } = {}) {
  const ordered = orderDocument(doc);
  const check = validate ?? createValidator();
  const errors = check(ordered);
  if (errors.length) throw new Error(`content/pulled/${doc.slug}.yaml failed schema:\n  ${errors.join("\n  ")}`);
  const text = toYaml(ordered, { blockNumber });
  const path = join(dir, `${doc.slug}.yaml`);
  if (dry) return { path, text, written: false };
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text, "utf8");
  return { path, text, written: true };
}
