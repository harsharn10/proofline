import { readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { parse } from 'yaml';
import { parsePacket } from './lib/packet.mjs';
import { buildRegistryReport } from './registry-plan.mjs';
import { researchIntake, candidatesFor } from './compile-inbox.mjs';
import { buildBackfillPlan } from './lib/research-backfill.mjs';
import { taskSnapshotState } from './lib/planning-inputs.mjs';

const args = process.argv.slice(2);
const options = {};
for (let i = 0; i < args.length; i += 2) {
  if (!['--open-prs', '--task-state', '--limit'].includes(args[i]) || !args[i + 1]) throw new Error('Use --open-prs snapshot.json [--task-state state.json] [--limit 10]');
  options[args[i]] = args[i + 1];
}
if (!options['--open-prs']) throw new Error('An explicit current open-PR snapshot is required; do not assume the inbox is empty.');
const base = execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim();
// Report only against a main-equivalent canonical corpus; code may be on an implementation branch.
execFileSync('git', ['diff', '--exit-code', base, '--', 'content', 'research/inbox/packets'], { stdio: 'pipe' });
const pending = [];
const intake = researchIntake(JSON.parse(await readFile(options['--open-prs'], 'utf8')));
for (const pr of intake.filter(r => ['active', 'held'].includes(r.state))) {
  const ref = `origin/${pr.branch}`;
  if (execFileSync('git', ['rev-parse', ref], { encoding: 'utf8' }).trim() !== pr.sha) throw new Error(`PR #${pr.pr} changed; fetch and snapshot again`);
  for (const row of await candidatesFor(ref, 'origin/main')) {
    if (row.skipped) continue;
    const match = /^research\/inbox\/packets\/([a-z0-9-]+)\//.exec(row.path);
    if (match) pending.push({ slug: match[1], pr: pr.pr, state: pr.state, head: pr.sha });
  }
}
const packets = [];
for (const dir of await readdir('research/inbox/packets', { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  for (const name of await readdir(`research/inbox/packets/${dir.name}`)) {
    if (!name.endsWith('.md')) continue;
    const path = `research/inbox/packets/${dir.name}/${name}`;
    packets.push({ path, packet: parsePacket(await readFile(path, 'utf8')) });
  }
}
const registry = await buildRegistryReport(); // local ignored build projection; no provider calls
const census = parse(await readFile('content/census.yaml', 'utf8'));
const snapshot = options['--task-state'] ? JSON.parse(await readFile(options['--task-state'], 'utf8')) : null;
const plan = buildBackfillPlan({ slugs: census.map(r => r.slug), packets, refresh: registry.refresh,
  identities: Object.fromEntries(census.map(r => [r.slug, r.identity?.entity_kind])),
  identityHolds: [...registry.claude.identity_holds.map(r => r.slug), ...registry.claude.conflicts.flatMap(r => r.slugs)], pending,
  taskState: snapshot?.version === 1 ? taskSnapshotState(snapshot) : snapshot,
  limit: options['--limit'] ? Number(options['--limit']) : 10 });
console.log(JSON.stringify({ base_sha: base, generated_at: registry.generated_at, intake, ...plan }, null, 2));
