import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextResearchState, productActivityStatus } from './lib/research-state.mjs';

const packet = (tier, day) => ({packet_tier:tier,as_of:`2026-09-${day}T00:00:00Z`,work_id:`WORK-${tier}-${day}`});
test('accepted depth and evidence time advance without inventing approval', () => {
  const seed=nextResearchState(null,packet('seed','01'));
  assert.equal(seed.full_as_of,null);
  const full=nextResearchState(seed,packet('full','03'));
  const update=nextResearchState(full,packet('update','05'));
  assert.equal(update.as_of,packet('update','05').as_of);
  assert.equal(update.full_as_of,packet('full','03').as_of);
  assert.deepEqual(nextResearchState(update,packet('seed','01')),update);
  assert.deepEqual(nextResearchState(update,packet('update','05')),update);
  assert.equal('approver' in update,false);
  assert.equal('reviewed_at' in update,false);
  assert.throws(()=>nextResearchState(null,{packet_tier:'full',as_of:'bad'}));
});
test('backfilled full packet preserves newer update date', () => {
  const state=nextResearchState(nextResearchState(null,packet('update','05')),packet('full','03'));
  assert.equal(state.tier,'update');
  assert.equal(state.full_as_of,packet('full','03').as_of);
});
test('token activity never launches an announced or inactive product', () => {
  const now=Date.parse('2026-09-10T00:00:00Z');
  for(const located of [true,false]) {
    assert.equal(productActivityStatus('announced',located,new Date(now).toISOString(),now),'announced');
    assert.equal(productActivityStatus('inactive',located,new Date(now).toISOString(),now),'dormant');
    assert.equal(productActivityStatus('testnet-only',located,new Date(now).toISOString(),now),'testnet');
  }
  for(const [age,status] of [[0,'live'],[7,'live'],[8,'quiet'],[30,'quiet'],[31,'dormant'],[-1,'quiet']])
    assert.equal(productActivityStatus('mainnet',true,new Date(now-age*86400000).toISOString(),now),status);
  assert.equal(productActivityStatus('mainnet',true,null,now),'quiet');
});
