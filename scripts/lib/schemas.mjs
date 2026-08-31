import { readFileSync } from "node:fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const NAMES = ["site", "census", "project", "sources", "dependency", "changelog", "feed", "accounts"];
const ajv = new Ajv({ allErrors: true, strict: true, strictTypes: false, strictTuples: false });
addFormats(ajv);

const load = (name) => JSON.parse(readFileSync(new URL(`../../schema/${name}.schema.json`, import.meta.url), "utf8"));
ajv.addSchema(load("source-entry")); // shared $ref target for sources.yaml and dependency ledgers; registered under its $id

const validators = {};
for (const name of NAMES) validators[name] = ajv.compile(load(name));

/** Returns [] when valid, else human-readable messages. */
export function validateAgainst(name, data) {
  const v = validators[name];
  if (!v) throw new Error(`unknown schema ${name}`);
  if (v(data)) return [];
  return v.errors.map((e) => {
    let detail = "";
    if (e.params?.allowedValues) detail = ` (${e.params.allowedValues.join(", ")})`;
    else if (e.keyword === "additionalProperties") detail = ` (${e.params.additionalProperty})`;
    else if (e.keyword === "required") detail = ` (${e.params.missingProperty})`;
    return `${e.instancePath || "/"} ${e.message}${detail}`;
  });
}
