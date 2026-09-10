// Read-only GitHub inputs; generated reports only under ignored build/. Never dispatches.
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { loadContent } from './lib/load.mjs';
import { parsePacket } from './lib/packet.mjs';
import { researchIntake, candidatesFor } from './compile-inbox.mjs';
import { TASK_STATE_MARKER, taskStateFromComments, discoveryInput } from './lib/planning-inputs.mjs';
import { admissionPlan } from './admission-plan.mjs';

const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--issue' || !/^[1-9][0-9]*$/.test(args[1]))
  throw new Error('Usage: node scripts/planning-inputs.mjs --issue 132');
const run = (command, args) => execFileSync(command, args, {encoding:'utf8', maxBuffer:20*1024*1024});
const repo = JSON.parse(run('gh', ['repo','view','--json','nameWithOwner'])).nameWithOwner;
const controller = repo.split('/')[0];
const api = path => JSON.parse(run('gh', ['api', `repos/${repo}/${path}`, '--paginate', '--slurp'])).flat();
const base = run('git',['rev-parse','origin/main']).trim();
// Same guard as backfill: recommendations must not masquerade as accepted branch content.
run('git',['diff','--exit-code',base,'--','content','research/inbox/packets']);
const prs = api('pulls?state=open&base=main&per_page=100');
researchIntake(prs); // common snapshot shape validation
const comments = api(`issues/${args[1]}/comments?per_page=100`);
const checkedAt = new Date().toISOString();
const taskState = taskStateFromComments(comments,{controller,checkedAt});
const pending = [];
// Inspect ALL same-repository open PRs, including drafts and build branches. A fork with
// packet changes fails closed; it cannot safely be represented by an origin branch.
for (const pr of prs) {
  if (pr.head.repo?.full_name !== repo) {
    const files = api(`pulls/${pr.number}/files?per_page=100`);
    if (files.some(f => f.filename.startsWith('research/inbox/packets/'))) throw new Error(`Fork PR #${pr.number} needs pending-identity review`);
    continue;
  }
  const ref = `origin/${pr.head.ref}`;
  if (run('git',['rev-parse',ref]).trim() !== pr.head.sha) throw new Error(`PR #${pr.number} head changed; git fetch origin and rerun`);
  for (const row of await candidatesFor(ref,'origin/main')) {
    if (!row.skipped) pending.push(parsePacket(run('git',['show',`${pr.head.sha}:${row.path}`])).frontmatter);
  }
}
const content = await loadContent();
const input = discoveryInput({discovery:parse(await readFile('content/pulled/discovery.yaml','utf8')),
  projects:[...content.projects.values()], dependencies:[...content.dependencies.values()], pending, checkedAt});
const admission = await admissionPlan(input);
await mkdir('build',{recursive:true});
for (const [name, value] of Object.entries({'open-prs':prs,'task-state':taskState,'admission-input':input,'admission-plan':admission}))
  await writeFile(`build/${name}.json`,`${JSON.stringify(value,null,2)}\n`);
console.log(JSON.stringify({base_sha:base,checked_at:checkedAt,open_prs:prs.length,pending_packets:pending.length,
  task_states:Object.keys(taskState.tasks).length, candidates:input.subjects.length, admission:admission.results,
  next:'node scripts/research-backfill.mjs --open-prs build/open-prs.json --task-state build/task-state.json',
  dispatch:false, task_marker:TASK_STATE_MARKER},null,2));
