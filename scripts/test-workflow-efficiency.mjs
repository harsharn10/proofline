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
test('publish pushes retain approval/content/policy triggers, excluding unrelated docs and frontend', () => {
  const paths = workflow('publish').on.push.paths;
  for (const path of ['content/**', 'ops/telegram-review.json', 'scripts/telegram-digest.mjs', 'scripts/score.mjs', 'scripts/lib/**', 'schema/**', 'package.json', 'package-lock.json', '.github/workflows/publish.yml']) {
    assert.ok(paths.includes(path), path);
  }
  assert.equal(paths.some(p => p === '**' || p.startsWith('docs/') || p.startsWith('site/')), false);
  assert.deepEqual(workflow('publish').on.workflow_run.workflows, ['Daily registry', 'Pull chain facts']);
});
test('one daily coordinator orders separate lanes without starving pull after compile failure', () => {
  const daily=workflow('daily-registry');
  assert.equal(daily.concurrency.group,'daily-registry');
  assert.equal(daily.concurrency['cancel-in-progress'],false);
  assert.equal(daily.jobs.compile.uses,'./.github/workflows/compile.yml');
  assert.equal(daily.jobs.pull.uses,'./.github/workflows/pull.yml');
  assert.equal(daily.jobs.pull.needs,'compile');
  assert.equal(daily.jobs.pull.if,'${{ !cancelled() }}');
  assert.equal(daily.jobs.pull.permissions.contents,'write');
  for(const job of Object.values(daily.jobs)){
    assert.equal(job.concurrency,undefined,'no nested acquisition of main-bots');
    assert.deepEqual(Object.keys(job.secrets),['BLOCKSCOUT_API_KEY']);
  }
  for (const name of ['daily-registry', 'daily-health']) {
    assert.equal(workflow(name).on.schedule.length, 1);
    assert.ok(Object.hasOwn(workflow(name).on, 'workflow_dispatch'));
  }
  for(const name of ['pull','compile']){
    const w=workflow(name),job=w.jobs[name];
    assert.equal(w.on.schedule,undefined,'no duplicate lane cron');
    assert.ok(Object.hasOwn(w.on,'workflow_call'));
    assert.ok(Object.hasOwn(w.on,'workflow_dispatch'));
    assert.equal(job.concurrency.group,'main-bots');
    assert.equal(job.concurrency['cancel-in-progress'],false);
    assert(job['timeout-minutes']<=45);
    const upload=job.steps.find(s=>s.uses?.startsWith('actions/upload-artifact'));
    assert.equal(upload.with.name,`daily-${name}-\${{ github.run_id }}-\${{ github.run_attempt }}`);
    assert.match(upload.with.path,new RegExp(`${name}-run.json`));
    assert.equal(upload.with['retention-days'],7);
    const receipt=job.steps.find(s=>s.run==='node scripts/pipeline-receipt.mjs');
    assert.equal(receipt.if,'always()');
    assert.equal(receipt.env.PIPELINE_RESULT,'${{ job.status }}');
    assert.equal(receipt.env.PIPELINE_KIND,name);
    assert(job.steps.indexOf(receipt)<job.steps.indexOf(upload));
  }
  assert.equal(workflow('pull').jobs.pull.env.PULL_DEADLINE_MINUTES,'30');
  assert.deepEqual(workflow('pull').on.workflow_dispatch.inputs.tier.options,['all','hot','live','quiet','dormant']);
  for (const job of Object.values(workflow('pulse-deploy').jobs)) {
    assert.equal(job['timeout-minutes'], 10);
  }
});
test('retired repeated-dispatch helper fails locally without a GitHub command',()=>{
  const path=new URL('../ops/controller/compile-cycles.sh',import.meta.url);
  assert.doesNotMatch(readFileSync(path,'utf8'),/gh (workflow|api|run)/);
  const result=spawnSync('/bin/sh',[path.pathname],{encoding:'utf8'});
  assert.equal(result.status,1);assert.match(result.stderr,/Retired/);
});
