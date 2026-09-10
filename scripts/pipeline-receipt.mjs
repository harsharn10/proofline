// No dependencies or network. This describes execution, never measurement freshness or deployment.
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function executionReceipt(env, head, at = new Date().toISOString()) {
  const runId = Number(env.GITHUB_RUN_ID), attempt = Number(env.GITHUB_RUN_ATTEMPT);
  if (!['pull','compile'].includes(env.PIPELINE_KIND) ||
      !['success','failure','cancelled'].includes(env.PIPELINE_RESULT) ||
      !Number.isSafeInteger(runId) || runId <= 0 || !Number.isSafeInteger(attempt) || attempt <= 0 ||
      !/^[a-f0-9]{40}$/.test(head ?? '') || !/^[a-f0-9]{40}$/.test(env.GITHUB_SHA ?? '') ||
      !['schedule','workflow_dispatch'].includes(env.GITHUB_EVENT_NAME) || !Number.isFinite(Date.parse(at)))
    throw new Error('Invalid lane execution context');
  return { version:1, kind:env.PIPELINE_KIND, run_id:runId, run_attempt:attempt,
    event:env.GITHUB_EVENT_NAME, trigger_sha:env.GITHUB_SHA, workspace_sha:head,
    result:env.PIPELINE_RESULT, at };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const receipt = executionReceipt(process.env, execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim());
  await mkdir('build',{recursive:true});
  await writeFile(`build/${receipt.kind}-run.json`, `${JSON.stringify(receipt,null,2)}\n`);
}
