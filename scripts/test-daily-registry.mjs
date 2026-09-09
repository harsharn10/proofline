import assert from "node:assert/strict";
import { test } from "node:test";
import { createCreditBudget, blockscoutCreditCost, normalizeBudgetState } from "./lib/pull/budget.mjs";
import { requestJson } from "./lib/pull/http.mjs";
import { buildRelationships, relationshipIndex, ownActivityAt, uniqueLaunches, uniqueVolume } from "./lib/relationships.mjs";
import { refreshDecision, selectRefreshTargets, DAY } from "./lib/refresh-policy.mjs";

const now = Date.parse("2026-09-09T12:00:00Z");
const address = n => `0x${String(n).padStart(40, "0")}`;
const deployment = (n, role) => ({ chain: "robinhood-chain", address: address(n), role, verified: true, sources: ["S1"] });
const project = (slug, token) => ({ slug, name: slug, deployments: [deployment(token,"token"), deployment(9,"factory")], dependencies: ["stock-tokens"] });
const a = project("a",1), b = project("b",2);
const graph = buildRelationships([a,b]);
const index = relationshipIndex(graph);
const census = { identity: { status: "verified" }, role: "subject" };

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
