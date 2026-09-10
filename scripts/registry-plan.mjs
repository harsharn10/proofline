import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { parse } from "yaml";
import { buildRelationships } from "./lib/relationships.mjs";
import { REFRESH_POLICY } from "./lib/refresh-policy.mjs";
import { reassessmentSlice } from './lib/admission-policy.mjs';
import { buildMeasurementManifest } from './lib/measurement-health.mjs';

export async function buildRegistryReport() {
  const readDir = async dir => Promise.all((await readdir(dir)).filter(f => f.endsWith(".yaml"))
    .sort().map(async f => parse(await readFile(`${dir}/${f}`, "utf8"))));
  const [projects, dependencies, result, revision] = await Promise.all([
    readDir("content/projects"), readDir("content/dependencies"),
    promisify(execFile)(process.execPath, [fileURLToPath(new URL("./pull.mjs", import.meta.url)), "--plan"], { maxBuffer: 10 * 1024 * 1024 }),
    promisify(execFile)("git", ["rev-parse", "HEAD"]),
  ]);
  const plan = JSON.parse(result.stdout);
  const relationships = buildRelationships(projects, dependencies);
  const eligible = [...plan.selected, ...plan.deferred, ...plan.not_due].filter(row => row.tier === "hot" || row.seed || row.reason.includes("seed observation"))
    .sort((a,b) => a.slug.localeCompare(b.slug));
  // Rotate the finite eligible set even when yesterday found no new event and wrote no packet.
  const offset = eligible.length ? (Math.floor(Date.parse(plan.at) / 86_400_000) * REFRESH_POLICY.researchLimit) % eligible.length : 0;
  const research = [...eligible.slice(offset), ...eligible.slice(0, offset)].slice(0, REFRESH_POLICY.researchLimit).map(row => ({
    slug: row.slug, reason: row.reason, last_success_at: row.lastSuccessAt,
    instruction: "Check primary-source changes since the newest packet. Write nothing if unchanged; one material event is sufficient.",
  }));
  const conflicts = relationships.addresses.filter(n => n.identityConflict).map(n => ({
    address: n.id, slugs: n.projects.filter(p => p.roles.includes("token")).map(p => p.slug),
    action: "Claude resolves identity against receipts; never auto-merge slugs.",
  }));
  const report = { version: 1, base_sha: revision.stdout.trim(), generated_at: plan.at, policy: REFRESH_POLICY, relationships, refresh: plan,
    reassessment: { recommendations_only: true, maximum: REFRESH_POLICY.seedLimit,
      // Cheap discovery/primary-surface checks, not forced full RPC reads or research packets.
      dormant: reassessmentSlice(plan.ignored.filter(row => !row.reason.startsWith('identity conflict')), Date.parse(plan.at)),
      dependencies: relationships.dependencies.filter(row => row.projects.length === 0),
      instruction: 'Reconcile lifecycle and dependency relevance using existing bulk analytics first. Record no-change in task state; never auto-reactivate.' },
    grok: { maximum_updates: REFRESH_POLICY.researchLimit, maximum_new_seeds: REFRESH_POLICY.seedLimit,
      updates: research, discovery: "Only confirmed primary surfaces with a concrete product, deployment, or dated launch. Match address, official domain and handle against the registry and pending packets before seeding." },
    claude: { conflicts, identity_holds: plan.ignored.filter(row => row.reason.startsWith("identity conflict")),
      unassigned_infrastructure: plan.infrastructure.filter(row => row.reader === null),
      lifecycle_holds: [...plan.selected, ...plan.deferred, ...plan.not_due].filter(row => row.reason.startsWith('lifecycle/activity mismatch')),
      instruction: "Review source receipts, relationship meaning, new identity collisions and the latest degraded pull report; approve code separately from research and channel delivery." } };
  await mkdir("build", { recursive: true });
  await writeFile("build/registry.json", `${JSON.stringify(report, null, 2)}\n`);
  const observations=(await readDir('content/pulled')).filter(file=>file?.slug);
  const health=buildMeasurementManifest({files:observations,plan,baseSha:report.base_sha,projects,relationships});
  await writeFile('build/measurement-health.json',`${JSON.stringify(health)}\n`);
  return report;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const report = await buildRegistryReport();
  console.log(JSON.stringify({ projects: Object.keys(report.relationships.projectNames).length,
    unique_addresses: report.relationships.addresses.length, shared_addresses: report.relationships.addresses.filter(n => n.projects.length > 1).length,
    selected: report.refresh.selected.length, deferred: report.refresh.deferred.length,
    ignored: report.refresh.ignored.length, not_due: report.refresh.not_due.length,
    research: report.grok.updates.length, identity_conflicts: report.claude.conflicts.length }, null, 2));
}
