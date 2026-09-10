import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
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
test('manual and scheduled compile both snapshot acceptance and recheck it before pushing', () => {
  const steps=workflow('compile').jobs.compile.steps;
  const intake=steps.find(s=>s.id==='compile').run;
  assert.match(intake,/node scripts\/compile-intake\.mjs/);
  assert.match(intake,/ARGS\+=\(--branch/);
  assert.doesNotMatch(intake,/ARGS=\(--branch/);
  const push=steps.find(s=>s.name==='Commit and push the compiled content').run;
  assert.match(push,/compile-intake\.mjs --verify-report build\/compile-report\.json \|\| exit 1/);
  assert.ok(push.indexOf('--verify-report') < push.indexOf('git push'));
});
