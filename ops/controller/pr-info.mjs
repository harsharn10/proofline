// Print each PR's Done / Not done sections and file list. Usage: node ops/controller/pr-info.mjs 84 85
import { execFileSync } from "node:child_process";
const nums = process.argv.slice(2).map(Number);
for (const n of nums) {
  const j = JSON.parse(execFileSync("gh", ["pr", "view", String(n), "--repo", "harsharn10/proofline", "--json", "body,baseRefName,files,headRefName,isDraft,commits"], { encoding: "utf8" }));
  console.log(`\n=========== PR ${n}  base=${j.baseRefName} draft=${j.isDraft} commits=${j.commits.length} head=${j.headRefName}`);
  const body = j.body.replace(/```text[\s\S]*?```/g, "[paste prompt]");
  const idx = body.indexOf("## Done");
  console.log((idx >= 0 ? body.slice(idx) : body).replace(/\n{2,}/g, "\n").slice(0, 3500));
  console.log("--- files (" + j.files.length + "): " + j.files.map((f) => `${f.path} +${f.additions}-${f.deletions}`).join("  "));
}
