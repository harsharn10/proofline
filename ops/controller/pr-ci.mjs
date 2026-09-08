// Wait for the newest "Root + site" run on a branch to finish; print its conclusion. Usage: node pr-ci.mjs <branch>
import { execFileSync } from "node:child_process";
const branch = process.argv[2];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let run = null;
for (let i = 0; i < 20 && !run; i++) {
  const list = JSON.parse(execFileSync("gh", ["run", "list", "--repo", "harsharn10/proofline", "--branch", branch, "--workflow", "validate.yml", "--limit", "1", "--json", "databaseId,status,conclusion"], { encoding: "utf8" }));
  if (list.length) run = list[0]; else await sleep(15000);
}
if (!run) { console.log("no run found for", branch); process.exit(2); }
while (run.status !== "completed") {
  await sleep(30000);
  run = JSON.parse(execFileSync("gh", ["run", "view", String(run.databaseId), "--repo", "harsharn10/proofline", "--json", "databaseId,status,conclusion"], { encoding: "utf8" }));
}
console.log(`${branch}: run ${run.databaseId} ${run.conclusion}`);
process.exit(run.conclusion === "success" ? 0 : 1);
