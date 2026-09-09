import assert from 'node:assert/strict';
import { test } from 'node:test';
import { waitForPrCi } from '../ops/controller/pr-ci.mjs';

const head = 'a'.repeat(40), old = 'b'.repeat(40);
const check = (name = 'Root + site', status = 'COMPLETED', conclusion = 'SUCCESS') => ({name,status,conclusion});
const pr = overrides => ({state:'OPEN',isDraft:false,headRefOid:head,statusCheckRollup:[check()],...overrides});
const run = overrides => ({databaseId:1,headSha:head,status:'completed',conclusion:'success',...overrides});
function fixture(overrides = {}) {
  let time = 0;
  return { getPr: async () => pr(), listRuns: async () => [run()], now: () => time,
    sleep: async ms => {time += ms;}, pollMs:1,timeoutMs:5,...overrides };
}
test('old green cannot satisfy a new head; wait for exact-head success', async () => {
  let calls = 0;
  const result = await waitForPrCi(fixture({listRuns: async requested => {
    assert.equal(requested,head); calls++;
    return calls < 3 ? [run({headSha:old})] : [run()];
  }}));
  assert.equal(calls,3); assert.equal(result.head,head);
});
test('head movement including final recheck rejects success', async () => {
  for (const changeAt of [2,3]) {
    let calls = 0;
    await assert.rejects(waitForPrCi(fixture({getPr:async () => pr({headRefOid:++calls >= changeAt ? old : head})})),/head changed/);
  }
});
test('wait for other reported checks and require Root + site', async () => {
  let calls = 0;
  await waitForPrCi(fixture({getPr:async () => pr({statusCheckRollup:[check(),
    check('Workers',++calls < 3 ? 'IN_PROGRESS' : 'COMPLETED')]})}));
  await assert.rejects(waitForPrCi(fixture({getPr:async () => pr({statusCheckRollup:[check('Guard')]})})),/Timed out/);
});
test('missing/pending runs time out; errors and non-success conclusions fail closed', async () => {
  for (const rows of [[],[run({status:'in_progress',conclusion:''})]])
    await assert.rejects(waitForPrCi(fixture({listRuns:async () => rows})),/Timed out/);
  for (const conclusion of ['failure','cancelled','skipped','neutral'])
    await assert.rejects(waitForPrCi(fixture({listRuns:async () => [run({conclusion})]})),/CI run/);
  await assert.rejects(waitForPrCi(fixture({listRuns:async () => {throw Error('API unavailable');}})),/API unavailable/);
});
test('closed/draft PRs and failed secondary checks are never accepted', async () => {
  for (const overrides of [{state:'MERGED'},{isDraft:true}])
    await assert.rejects(waitForPrCi(fixture({getPr:async () => pr(overrides)})),/open, ready/);
  await assert.rejects(waitForPrCi(fixture({getPr:async () => pr({statusCheckRollup:[check(),check('Guard','COMPLETED','FAILURE')]})})),/check failed/);
});
