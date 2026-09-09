// Verify one immutable open PR head, not whichever branch run GitHub lists first.
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function checksGreen(checks) {
  if (!Array.isArray(checks) || checks.length === 0) return false;
  let root = false;
  let ready = true;
  for (const check of checks) {
    const state = check.status === 'COMPLETED' ? check.conclusion : check.state;
    if (['FAILURE','ERROR','CANCELLED','TIMED_OUT','ACTION_REQUIRED','STARTUP_FAILURE','STALE'].includes(state))
      throw new Error(`PR check failed: ${check.name ?? check.context} (${state})`);
    if (check.name === 'Root + site' && state === 'SUCCESS') root = true;
    if (!['SUCCESS','NEUTRAL','SKIPPED'].includes(state)) ready = false;
  }
  return root && ready;
}

export async function waitForPrCi({ getPr, listRuns, sleep = ms => new Promise(r => setTimeout(r, ms)),
  now = Date.now, timeoutMs = 30 * 60_000, pollMs = 15_000 }) {
  const started = now();
  const initial = await getPr();
  const head = initial.headRefOid;
  if (!/^[a-f0-9]{40}$/.test(head ?? '')) throw new Error('Missing valid PR head.');
  function verify(pr) {
    if (pr.state !== 'OPEN' || pr.isDraft) throw new Error('CI gate requires an open, ready PR.');
    if (pr.headRefOid !== head) throw new Error('PR head changed; review the new commit and restart the gate.');
  }
  verify(initial);
  while (now() - started < timeoutMs) {
    const pr = await getPr(); verify(pr);
    const runs = await listRuns(head);
    if (!Array.isArray(runs)) throw new Error('Invalid CI run response.');
    // API returns newest first. Ignore unrelated heads even if the transport filter regresses.
    const run = runs.find(row => row.headSha === head);
    if (run?.status === 'completed') {
      if (run.conclusion !== 'success') throw new Error(`CI run ${run.databaseId}: ${run.conclusion}`);
      if (checksGreen(pr.statusCheckRollup)) {
        const final = await getPr(); verify(final);
        if (checksGreen(final.statusCheckRollup)) return { head, run: run.databaseId };
      }
    } else checksGreen(pr.statusCheckRollup);
    await sleep(pollMs);
  }
  throw new Error(`Timed out waiting for green CI on ${head}.`);
}

export async function main(branch) {
  if (!branch || branch.startsWith('-')) throw new Error('Usage: node ops/controller/pr-ci.mjs <branch>');
  const repo = 'harsharn10/proofline';
  const gh = args => JSON.parse(execFileSync('gh', args, { encoding: 'utf8', timeout: 30_000 }));
  const result = await waitForPrCi({
    getPr: () => gh(['pr','view',branch,'--repo',repo,'--json','state,isDraft,headRefOid,statusCheckRollup']),
    listRuns: head => gh(['run','list','--repo',repo,'--branch',branch,'--commit',head,
      '--workflow','validate.yml','--event','pull_request','--limit','20','--json','databaseId,headSha,status,conclusion']),
  });
  console.log(`${branch}: head ${result.head} run ${result.run} success; merge with --match-head-commit ${result.head}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.length === 3 ? process.argv[2] : null).catch(error => {
    console.error(error.message); process.exitCode = 1;
  });
}
