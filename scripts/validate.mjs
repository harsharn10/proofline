import { validateContent } from "./lib/validate-content.mjs";

const args = process.argv.slice(2);
const release = args.includes("--release");
const root = args.find((a) => !a.startsWith("--")) ?? "content";

const { errors, warnings, content } = await validateContent(root, { release });

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(`${content?.projects.size ?? 0} projects, ${errors.length} error(s), ${warnings.length} warning(s)${release ? " [release]" : ""}`);
process.exit(errors.length ? 1 : 0);
