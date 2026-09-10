import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parse} from 'yaml';
import {createPullAttempt, finishPullAttempt} from './lib/pull/attempt.mjs';
import {carryStructureFacts, carryMarketFacts, activityWindow} from './pull.mjs';
import {readMintAndRenounce} from './lib/pull/token.mjs';
import {consumeQueue} from './lib/pull/tiers.mjs';
import {refreshDecision} from './lib/refresh-policy.mjs';
import {buildRelationships,relationshipIndex} from './lib/relationships.mjs';
const old='2026-09-04T12:00:00Z', now='2026-09-10T16:00:00Z';
const timeout={step:'mint',message:'smart-contracts/example: HTTP 402: Out of credits'};
const finish=attempt=>finishPullAttempt(attempt,{attemptedAt:now,lastSuccessAt:old,reason:'daily'});

test('historical mint error survives an unverified ABI response without retrying the whole name',async()=>{
  const previous={mint:'unknown',mint_as_of:null,renounced:null,renounced_as_of:null,lp:[],errors:[timeout]};
  const before=structuredClone(previous), attempt=createPullAttempt();
  const fresh=await readMintAndRenounce({smartContract:async()=>({is_verified:false})},'example',null);
  attempt.record('ownership',fresh.errors,'example');
  const structure=carryStructureFacts({...fresh,pulled_at:now,lp:[]},previous,{mintMeasured:true});
  const out=finish(attempt);
  assert.equal(out.refresh.status,'complete');assert.equal(out.refresh.last_success_at,now);
  assert.equal(structure.mint,'unknown');assert.equal(structure.mint_as_of,null);
  assert.ok(structure.errors.some(e=>e.message===timeout.message));
  assert.ok(structure.errors.some(e=>e.message==='verified ABI unavailable'));
  assert.deepEqual(previous,before);
});

test('a new identical failure is current, not subtracted because the old message matches',async()=>{
  const attempt=createPullAttempt();
  const fresh=await readMintAndRenounce({smartContract:async()=>{throw Error('HTTP 402: Out of credits');}},'example',null);
  assert.ok(fresh.errors.some(e=>e.message===timeout.message));
  attempt.record('ownership',fresh.errors,'example');
  const out=finish(attempt);
  assert.equal(out.refresh.status,'partial');assert.equal(out.refresh.last_success_at,old);
  assert.deepEqual(out.retryable_errors,[{scope:'ownership',address:'example',...timeout}]);
});

test('retained structure, concentration and activity never borrow the successful attempt date',()=>{
  const attempt=createPullAttempt();
  const previous={pulled_at:old,mint:'no-mint-function',mint_as_of:old,renounced:true,renounced_as_of:old,
    lp:[{pair:'pool',locked_share:0.5,as_of:old}],errors:[timeout]};
  assert.deepEqual(carryStructureFacts(null,previous),previous);
  const market=carryMarketFacts({pulled_at:now,errors:[]},{top10_share:0.4,top10_as_of:old,
    errors:[{step:'top10_share',message:'old timeout'}]});
  assert.equal(market.top10_as_of,old);assert.equal(market.errors.length,1);
  const activity=activityWindow({txns_24h:null,errors:[]},{txns_24h:0,window_as_of:old},
    {measured:false,pulledAt:now});
  assert.equal(activity.txns_24h,0);assert.equal(activity.window_as_of,old);
  assert.equal(finish(attempt).refresh.status,'complete');
});

test('current reader failures hold last success; permanent gaps and capped floors are not retries',()=>{
  for(const scope of ['rpc','signal','explorer','activity','market','concentration','ownership','liquidity-locks','rialto','metrics-and-run']) {
    for(const message of ['HTTP 402','HTTP 429','HTTP 503','timeout','failed after 3 attempts','bot challenge','invalid activity response','deferred: quota']) {
      const attempt=createPullAttempt();attempt.record(scope,[{step:'read',message}]);
      assert.equal(finish(attempt).refresh.last_success_at,old,`${scope}: ${message}`);
      assert.equal(finish(attempt).retryable_errors[0].scope,scope);
    }
  }
  const attempt=createPullAttempt();
  attempt.record('activity',[{step:'txns_24h capped',message:'stopped after 2 pages; count is a floor'}]);
  attempt.record('ownership',[{step:'mint',message:'verified ABI unavailable'}]);
  assert.equal(finish(attempt).retryable,false);
});

test('snapshots are isolated, deterministic and preserve address attribution',()=>{
  const a=createPullAttempt(),b=createPullAttempt();
  const rows=[['rpc',[{step:'rpc',message:'HTTP 429'}],'b'],['activity',[{step:'read',message:'timeout'}],'a']];
  for(const row of rows)a.record(...row);
  for(const row of [...rows].reverse())b.record(...row);
  a.record(...rows[0]);assert.deepEqual(a.result(),b.result());
  const snapshot=a.result();snapshot.retryable_errors[0].message='changed';
  assert.deepEqual(a.result(),b.result());
});

test('a genuinely partial seed keeps null success and queue work; completion consumes its queue',()=>{
  const attempt=createPullAttempt();attempt.record('rpc',[{step:'rpc',message:'HTTP 429'}]);
  const out=finishPullAttempt(attempt,{attemptedAt:now,lastSuccessAt:null,reason:'seed'});
  assert.equal(out.refresh.last_success_at,null);
  const queue=[{slug:'name',at:now}];
  assert.equal(consumeQueue(queue,[],{now:Date.parse(now)}).length,1);
  assert.equal(consumeQueue(queue,['name'],{now:Date.parse(now)}).length,0);
});

test('current failures retain the daily retry cooldown; a clean attempt leaves the retry lane',()=>{
  const address='0x'+'a'.repeat(40), project={slug:'name',lifecycle:'mainnet',deployments:[{chain:'robinhood-chain',address,role:'token'}]};
  const index=relationshipIndex(buildRelationships([project]));
  const attempt=createPullAttempt();attempt.record('rpc',[{step:'rpc',message:'timeout'}]);
  const previous={chain:'robinhood-chain',pulled_at:now,refresh:finish(attempt).refresh,
    market:{token_address:address,pulled_at:now,liquidity_usd:100000,trades_h24:10}};
  const decide=(time,doc=previous)=>refreshDecision({project,census:{identity:{status:'verified'}},previous:doc,index,
    aboveShareBar:true,now:Date.parse(now)+time*3600000});
  assert.equal(decide(1).due,false);assert.equal(decide(1).retry,true);
  assert.equal(decide(23).due,true);
  assert.equal(decide(1,{...previous,refresh:finish(createPullAttempt()).refresh}).retry,false);
});

test('recovered seven-name corpus keeps old mint gaps out of current ABI failure accounting',async()=>{
  for(const slug of ['clarus','gasolinu','koli','longdog','aaplcat','bomba','clippy']) {
    const previous=parse(readFileSync(`content/pulled/${slug}.yaml`,'utf8')).structure;
    const attempt=createPullAttempt();
    const fresh=await readMintAndRenounce({smartContract:async()=>({is_verified:false})},'example',null);
    attempt.record('ownership',fresh.errors);
    const carried=carryStructureFacts({...fresh,pulled_at:now,lp:[]},previous,{mintMeasured:true});
    assert.equal(finish(attempt).retryable,false,slug);
    assert.equal(carried.mint_as_of,previous.mint_as_of??null,slug);
    for(const e of previous.errors.filter(e=>e.step==='mint'))assert.ok(carried.errors.some(c=>c.message===e.message),slug);
  }
});
