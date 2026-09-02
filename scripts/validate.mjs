import { readFile } from "node:fs/promises";
import { parse } from "yaml";
import { validateContent } from "./lib/validate-content.mjs";
import { validatePacketDirectory } from "./lib/packet.mjs";
import { validateInboxYaml } from "./lib/inbox.mjs";

const args = process.argv.slice(2);
const release = args.includes("--release");
const root = args.find((a) => !a.startsWith("--")) ?? "content";

const { errors, warnings, content } = await validateContent(root, { release });
if (root === "content") {
  // Packet frontmatter is the machine contract (research-system §5): schema, packet-local ids, paths, roles.
  const census = parse(await readFile("content/census.yaml", "utf8"));
  const packets = await validatePacketDirectory("research/inbox/packets", census);
  errors.push(...packets.errors);
  // Every research/inbox ledger must at least parse: the directory is on the packet-PR allowlist.
  const inbox = await validateInboxYaml();
  errors.push(...inbox.errors);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(`${content?.projects.size ?? 0} projects, ${errors.length} error(s), ${warnings.length} warning(s)${release ? " [release]" : ""}`);
process.exit(errors.length ? 1 : 0);
