import assert from "node:assert/strict";
import { test } from "node:test";
import { createCreditBudget, blockscoutCreditCost, normalizeBudgetState } from "./lib/pull/budget.mjs";
import { requestJson } from "./lib/pull/http.mjs";
import { buildRelationships, sharedRelationships, relationshipIndex, ownActivityAt, knownTotal, uniqueLaunches, uniqueVolume } from "./lib/relationships.mjs";
import { refreshDecision, selectRefreshTargets, selectInfrastructureReaders, hasIdentityConflict, DAY } from "./lib/refresh-policy.mjs";

const now = Date.parse("2026-09-09T12:00:00Z");
const address = n => `0x${String(n).padStart(40, "0")}`;
const deployment = (n, role) => ({ chain: "robinhood-chain", address: address(n), role, verified: true, sources: ["S1"] });
const project = (slug, token) => ({ slug, name: slug, deployments: [deployment(token,"token"), deployment(9,"factory")], dependencies: ["stock-tokens"] });
const a = project("a",1), b = project("b",2);
const graph = buildRelationships([a,b]);
const index = relationshipIndex(graph);
const census = { identity: { status: "verified" }, role: "subject" };

test("known totals preserve zero and do not disguise missing observations", () => {
  assert.equal(knownTotal([0,0]),0);
  assert.equal(knownTotal([1,2]),3);
  for (const values of [[],[null],[1,null],[undefined],[NaN],[-1],[Number.MAX_VALUE,Number.MAX_VALUE]]) assert.equal(knownTotal(values),null);
});

test("own activity rejects conflicted tokens, other-chain market attribution and future times", () => {
  const conflicted=relationshipIndex(buildRelationships([a,{...b,deployments:[deployment(1,'token')]}]));
  const data={chain:'robinhood-chain',market:{trades_h24:3,pulled_at:new Date(now).toISOString()},activity:{addresses:[{address:address(1),last_tx_at:new Date(now+DAY).toISOString()}]}};
  assert.equal(ownActivityAt(a,data,conflicted,now),null);
  assert.equal(ownActivityAt(a,{...data,chain:'ethereum'},index,now),null);
  assert.equal(ownActivityAt(a,data,index,now),new Date(now).toISOString());
  assert.equal(ownActivityAt(a,{...data,market:null},index,now),null);
  const crossZone={...a,deployments:[deployment(1,'token'),deployment(2,'router')]};
  const times={chain:'robinhood-chain',activity:{addresses:[
    {address:address(1),last_tx_at:'2026-09-09T10:00:00Z'},
    {address:address(2),last_tx_at:'2026-09-09T11:00:00+02:00'}]}};
  assert.equal(ownActivityAt(crossZone,times,relationshipIndex(buildRelationships([crossZone])),now),'2026-09-09T10:00:00Z');
});

test("explicit fresh factory row survives a stale aggregate; legacy rows inherit staleness", () => {
  const row = {address:address(9), role:'factory', window_as_of:new Date(now).toISOString(), stale_since:null, launches_24h:0};
  const file = {chain:'robinhood-chain',activity:{stale_since:'2026-09-01',addresses:[row]}};
  assert.equal(uniqueLaunches([file],now).value,0);
  delete row.stale_since;
  assert.equal(uniqueLaunches([file],now).value,null);
});

test("equally current conflicting observations never depend on file order", () => {
  const file = n => ({chain:'robinhood-chain',activity:{window_as_of:new Date(now).toISOString(),addresses:[
    {address:address(9),role:'factory',launches_24h:n,stale_since:null,errors:[]}
  ]},market:{pulled_at:new Date(now).toISOString(),pairs:[{pair_address:address(8),volume_h24:n}]}});
  for (const inputs of [[file(3),file(9)],[file(9),file(3)],[file(3),file(9),file(3)]]) {
    assert.equal(uniqueLaunches(inputs,now).value,null);
    assert.equal(uniqueLaunches(inputs,now).partial,true);
    assert.equal(uniqueVolume(inputs,now),null);
  }
  const fresh=file(12);fresh.activity.window_as_of=new Date(now+1000).toISOString();fresh.market.pulled_at=fresh.activity.window_as_of;
  assert.equal(uniqueLaunches([file(3),file(9),fresh],now+1000).value,12);
  assert.equal(uniqueVolume([file(3),file(9),fresh],now+1000),12);
  const capped=file(3);capped.activity.addresses[0].errors=[{step:'capped'}];
  assert.equal(uniqueLaunches([file(3),capped],now).partial,true);
  assert.equal(uniqueLaunches([capped,file(3)],now).partial,true);
  const stale=file(3);stale.activity.addresses[0].stale_since='2026-09-01';
  for(const inputs of [[stale,file(3)],[file(3),stale]]) {
    assert.equal(uniqueLaunches(inputs,now).value,null);
    assert.equal(uniqueLaunches(inputs,now).partial,true);
  }
});

test("weighted reservations include retries and 402 prevents subsequent calls and survives restart", async () => {
  const budget = createCreditBudget({now,perRun:200,perDay:1000});
  let calls = 0;
  const deps = { beforeRequest: url => budget.claim("test",blockscoutCreditCost(url)), onResponse: budget.observeResponse,
    sleepImpl: async()=>{}, fetchImpl: async()=>{ calls++;return new Response('{}',{status:calls===1?503:402,headers:{"content-type":"application/json"}}); } };
  await assert.rejects(requestJson('https://api.blockscout.com/4663/api/v2/addresses/x',{},deps),/402/);
  await assert.rejects(requestJson('https://api.blockscout.com/4663/api/v2/tokens/y',{},deps),/provider cap/);
  assert.equal(calls,2);assert.equal(budget.snapshot().run_credits,40);
  assert.throws(()=>createCreditBudget({state:budget.finish(),now}).claim("next",20),/provider cap/);
  assert.doesNotThrow(()=>createCreditBudget({state:budget.finish(),now:now+DAY}).claim("next day",20));
});
test("migration preserves spent quota and late headers cannot replenish reservations", () => {
  assert.equal(normalizeBudgetState({date:'2026-09-09',credits_used:4673},now).credits_used,93460);
  const budget=createCreditBudget({now,perRun:1000});budget.claim("one",20);
  budget.observeResponse(new Response('{}',{headers:{'x-credits-remaining':'100'}}));
  budget.claim("two",20);
  budget.observeResponse(new Response('{}',{headers:{'x-credits-remaining':'200'}}));
  assert.equal(budget.snapshot().provider_remaining,60);
  assert.equal(blockscoutCreditCost('https://api.blockscout.com/4663/api/v2/transactions/x/raw-trace'),50);
});
test("relationships deduplicate case and distinguish shared infrastructure from token collisions", () => {
  assert.equal(graph.addresses.length,3);
  assert.equal(graph.addresses.filter(n=>n.projects.length===2).length,1);
  assert.equal(graph.addresses.some(n=>n.identityConflict),false);
  const conflict=buildRelationships([a,{...b,deployments:[deployment(1,'token')]}]);
  assert.equal(conflict.addresses.find(n=>n.address===address(1)).identityConflict,true);
  const mixed=buildRelationships([a,{...b,deployments:[{...deployment(1,'token'),address:address(1).toUpperCase().replace('0X','0x')}]}]);
  assert.equal(mixed.addresses.filter(n=>n.address===address(1)).length,1);
});

test("public relationship payload keeps shared edges and leaves the full registry intact",()=>{
  const projection=sharedRelationships(graph);
  assert.equal(projection.totalAddresses,3);
  assert.equal(projection.addresses.length,1);
  assert.deepEqual(projection.dependencies[0].projects,['a','b']);
  assert.deepEqual(projection.projectNames,{a:'a',b:'b'});
  assert.equal(graph.addresses.length,3);
  const solo=sharedRelationships(buildRelationships([{...b,deployments:[deployment(2,'token')]}]));
  assert.equal(solo.totalAddresses,1);
  assert.deepEqual(solo.projectNames,{});
});
test("shared factory activity does not revive an inactive token; relevance needs own activity", () => {
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-DAY).toISOString(), activity:{addresses:[
    {address:address(9),last_tx_at:new Date(now).toISOString()}, {address:address(1),last_tx_at:'2026-05-01T00:00:00Z'},
  ]}};
  assert.equal(ownActivityAt(a,previous,index,now),'2026-05-01T00:00:00Z');
  const result=refreshDecision({project:b,census,previous:{...previous,activity:{addresses:[{address:address(9),last_tx_at:new Date(now).toISOString()}]}},
    seededAt:'2026-05-01',index,aboveShareBar:false,now});
  assert.equal(result.ignored,true);
  const revived=refreshDecision({project:b,census,previous,seededAt:'2026-05-01',index,aboveShareBar:false,queuedAt:new Date(now).toISOString(),now});
  assert.equal(revived.due,true);assert.equal(revived.tier,'hot');
});
test("daily relevance, weekly maintenance, seed caps and overdue fairness", () => {
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-2*DAY).toISOString(),market:{trades_h24:2},activity:{addresses:[]}};
  const hot=refreshDecision({project:a,census,previous,index,aboveShareBar:true,now});
  assert.equal(hot.tier,'hot');assert.equal(hot.due,true);
  const low=refreshDecision({project:b,census,previous,index,aboveShareBar:false,now});
  assert.equal(low.tier,'live');assert.equal(low.due,false);
  const queue=Array.from({length:30},(_,i)=>({slug:String(i),refresh:{due:true,seed:i<20,priority:i}}));
  const chosen=selectRefreshTargets(queue,{limit:15,seedLimit:2});
  assert.equal(chosen.selected.length,12);assert.equal(chosen.selected.filter(t=>t.refresh.seed).length,2);
  assert.equal(chosen.selected[0].slug,'29');
});
test("unique launch totals preserve partial and stale windows",()=>{
  const file=(at,n,errors=[])=>({chain:'robinhood-chain',activity:{pulled_at:at,addresses:[{address:address(9),role:'factory',launches_24h:n,errors}]}});
  const fresh=new Date(now).toISOString();
  assert.deepEqual(uniqueLaunches([file(fresh,12),file(fresh,12)],now),{value:12,partial:false,factories:1,freshFactories:1});
  assert.equal(uniqueLaunches([file(fresh,12,[{step:'capped'}])],now).partial,true);
  assert.equal(uniqueLaunches([file('2026-09-01',12)],now).value,null);
  assert.equal(uniqueLaunches([file('invalid',99),file(fresh,12)],now).value,12);
});

test("volume counts distinct fresh pools and preserves Solana address case",()=>{
  const file=(chain,pair,volume,at=now)=>({chain,market:{pulled_at:new Date(at).toISOString(),pairs:[{pair_address:pair,volume_h24:volume}]}});
  assert.equal(uniqueVolume([file('robinhood-chain',address(9),12,now-1000),file('robinhood-chain',address(9),15)],now),15);
  assert.equal(uniqueVolume([file('robinhood-chain',address(9),12,now-2*DAY)],now),null);
  assert.equal(uniqueVolume([file('solana','A'.repeat(32),12),file('solana','a'.repeat(32),15)],now),27);
});

test("failed initial reads keep null success and remain inside the seed cap",()=>{
  const previous={chain:'robinhood-chain',pulled_at:new Date(now).toISOString(),
    refresh:{status:'partial',last_success_at:null}};
  const decision=refreshDecision({project:b,census,previous,index,now,aboveShareBar:false});
  assert.equal(decision.lastSuccessAt,null);
  assert.equal(decision.seed,true);
  assert.equal(decision.due,true);
  const selected=selectRefreshTargets(Array.from({length:20},(_,i)=>({slug:String(i),refresh:decision})));
  assert.equal(selected.selected.length,10);
  const completed=refreshDecision({project:b,census,previous:{...previous,refresh:{status:'partial',last_success_at:'2026-09-01T00:00:00Z'}},index,now});
  assert.equal(completed.lastSuccessAt,'2026-09-01T00:00:00Z');
  assert.equal(completed.seed,false);
  const retry=at=>refreshDecision({project:b,census,index,now,previous:{...previous,
    refresh:{...previous.refresh,attempted_at:new Date(at).toISOString()}}});
  const rotated=selectRefreshTargets([{slug:'a-retried-today',refresh:retry(now)},
    {slug:'z-waiting',refresh:retry(now-3*DAY)}],{seedLimit:1});
  assert.equal(rotated.selected[0].slug,'z-waiting');
});

test("shared infrastructure chooses an eligible factory reader and preserves identity holds",()=>{
  const held={...a,deployments:[deployment(1,'token'),deployment(9,'other')]};
  const router={...project('aa-router',3),deployments:[deployment(3,'token'),deployment(9,'router')]};
  const localIndex=relationshipIndex(buildRelationships([held,router,b]));
  const heldCensus={...census,identity:{status:'conflicted'}};
  assert.equal(hasIdentityConflict(held,heldCensus,localIndex),true);
  const readers=selectInfrastructureReaders(localIndex,new Set([router.slug,b.slug]),'robinhood-chain');
  assert.equal(readers.get(`robinhood-chain:${address(9)}`),'b');
  const previous={chain:'robinhood-chain',pulled_at:'2026-09-01',activity:{addresses:[]}};
  const chosen=refreshDecision({project:b,census,previous,index:localIndex,now,seededAt:'2026-01-01',aboveShareBar:false,infrastructureReaders:readers});
  assert.equal(chosen.ignored,false);
  assert.equal(chosen.reason,'shared infrastructure representative: weekly');
  const blocked=refreshDecision({project:held,census:heldCensus,previous,index:localIndex,now,infrastructureReaders:readers});
  assert.equal(blocked.ignored,true);
  assert.equal(selectInfrastructureReaders(localIndex,new Set(), 'robinhood-chain').size,0);
  assert.equal(selectInfrastructureReaders(localIndex,new Set(['b']), 'solana').size,0);
});
