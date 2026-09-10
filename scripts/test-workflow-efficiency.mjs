import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { parse } from 'yaml';

const workflow = (name) => parse(readFileSync(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8'));
test('only superseded PR validation is cancelled', () => {
  const w = workflow('validate');
  assert.equal(w.concurrency.group, 'validate-${{ github.event.pull_request.number || github.run_id }}');
  assert.equal(w.concurrency['cancel-in-progress'], "${{ github.event_name == 'pull_request' }}");
  assert.deepEqual(w.on.push.branches, ['main']);
});
test('publisher preparation and delivery require the same credentials', () => {
  const w = workflow('publish');
  const steps = w.jobs.publish.steps;
  const delivery = steps.find(s => s.id === 'digest');
  for (const name of ['Install', 'Derive scores']) {
    assert.equal(steps.find(s => s.name === name).if, delivery.if);
  }
  assert.equal(steps.find(s => s.uses?.startsWith('actions/setup-node')).if, delivery.if);
  assert.equal(w.concurrency['cancel-in-progress'], false);
  assert.equal(w.on.schedule.length, 2);
  assert.ok(w.on.workflow_dispatch);
  assert.ok(w.jobs.publish['timeout-minutes'] <= 15);
});
test('packet gate is bounded, PR-only and covers grok-bot', () => {
  const job = workflow('automerge-feed').jobs.classify;
  assert.match(job.if, /workflow_run.event == 'pull_request'/);
  assert.match(job.if, /grok-bot\//);
  assert.equal(job['timeout-minutes'], 5);
});
test('packet relevance skips ordinary implementation but retains canonical edits and renamed-away evidence',()=>{
  const job=workflow('automerge-feed').jobs.classify;
  const script=job.steps.find(s=>s.id==='paths').run;
  const predicate=script.match(/RELEVANT="\$\(jq '([^']+)'/)[1];
  const relevant=pages=>{
    const r=spawnSync('jq',[predicate],{input:JSON.stringify(pages),encoding:'utf8'});
    assert.equal(r.status,0,r.stderr);return r.stdout.trim()==='true';
  };
  assert.equal(relevant([[{filename:'scripts/pull.mjs'},{filename:'docs/process.md'}]]),false);
  for(const filename of ['research/inbox/packets/a/work.md','research/inbox/assignments/a.json','content/projects/a.yaml'])
    assert.equal(relevant([[{filename,status:'modified'}]]),true);
  assert.equal(relevant([[{filename:'README.md',previous_filename:'research/inbox/packets/a/work.md',status:'renamed'}]]),true);
  assert.equal(relevant([[{filename:'site/src/index.ts'}],[{filename:'content/projects/a.yaml',status:'removed'}]]),true,'all pages inspected');
  assert.match(script,/\[\[ "\$BRANCH" == codex\/\* && "\$RELEVANT" == false \]\]/,'only ordinary Codex work skips, never Grok');
  assert(script.indexOf('Implementation-only')<script.indexOf('allowlisted=true'));
  assert.equal(job.steps.some(s=>s.uses?.startsWith('actions/checkout')),false,'untrusted PR code is never executed');
  assert.match(job.steps.find(s=>s.id==='pr').run,/HEAD.*!=.*HEAD_SHA/);
});
test('publish pushes retain approval/content/policy triggers, excluding unrelated docs and frontend', () => {
  const paths = workflow('publish').on.push.paths;
  for (const path of ['content/**', 'ops/telegram-review.json', 'scripts/telegram-digest.mjs', 'scripts/score.mjs', 'scripts/lib/**', 'schema/**', 'package.json', 'package-lock.json', '.github/workflows/publish.yml']) {
    assert.ok(paths.includes(path), path);
  }
  assert.equal(paths.some(p => p === '**' || p.startsWith('docs/') || p.startsWith('site/')), false);
  assert.deepEqual(workflow('publish').on.workflow_run.workflows, ['Pull chain facts']);
});
test('daily collection and independent watchdog retain their schedules', () => {
  for (const name of ['pull', 'compile', 'daily-health']) {
    assert.equal(workflow(name).on.schedule.length, 1);
    assert.ok(Object.hasOwn(workflow(name).on, 'workflow_dispatch'));
  }
  for (const job of Object.values(workflow('pulse-deploy').jobs)) {
    assert.equal(job['timeout-minutes'], 10);
  }
});
