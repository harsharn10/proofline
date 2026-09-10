import assert from "node:assert/strict";
import { test } from "node:test";
import { createCreditBudget, blockscoutCreditCost, normalizeBudgetState } from "./lib/pull/budget.mjs";
import { requestJson } from "./lib/pull/http.mjs";
import { buildRelationships, sharedRelationships, relationshipIndex, ownActivityAt, knownTotal, uniqueLaunches, uniqueVolume, uniqueVolumeSummary } from "./lib/relationships.mjs";
import { refreshDecision, selectRefreshTargets, selectInfrastructureReaders, hasIdentityConflict, DAY } from "./lib/refresh-policy.mjs";
import { referenceReason, subjectObservations, subjectHistory } from './lib/relationships.mjs';
import { referenceTokenErrors } from './compile-packet.mjs';
import { aboveShareBar, addressesFor } from './pull.mjs';
import { deploymentIdentityWarnings } from './lib/checks.mjs';

const now = Date.parse("2026-09-09T12:00:00Z");
const address = n => `0x${String(n).padStart(40, "0")}`;
const deployment = (n, role) => ({ chain: "robinhood-chain", address: address(n), role, verified: true, sources: ["S1"] });
const project = (slug, token) => ({ slug, name: slug, deployments: [deployment(token,"token"), deployment(9,"factory")], dependencies: ["stock-tokens"] });
const a = project("a",1), b = project("b",2);
const graph = buildRelationships([a,b]);
const index = relationshipIndex(graph);
const census = { identity: { status: "verified" }, role: "subject" };

test('validation warnings use own-token conflicts, not shared factories or independent token references',()=>{
  assert.deepEqual(deploymentIdentityWarnings([a,b]),[]);
  assert.deepEqual(deploymentIdentityWarnings([a,{...b,deployments:[deployment(1,'reference-token')]}]),[]);
  const conflict={...b,deployments:[deployment(1,'token')]};
  assert.equal(deploymentIdentityWarnings([a,conflict]).length,1);
  assert.deepEqual(deploymentIdentityWarnings([a,{...conflict,deployments:[{...deployment(1,'token'),chain:'ethereum'}]}]),[]);
  const sol=n=>({slug:n,deployments:[{chain:'solana',address:n.repeat(32),role:'token'}]});
  assert.deepEqual(deploymentIdentityWarnings([sol('A'),sol('a')]),[]);
});

test('independent launched tokens remain mapped without transferring their activity or old market to the platform',()=>{
  const owner={...a,deployments:[deployment(1,'token')]};
  const platform={...b,deployments:[deployment(1,'reference-token'),deployment(2,'reference-token'),deployment(9,'factory')]};
  const idx=relationshipIndex(buildRelationships([owner,platform]));
  assert.equal(idx.get(`robinhood-chain:${address(1)}`).identityConflict,false);
  assert.equal(idx.get(`robinhood-chain:${address(1)}`).projects.length,2);
  const prior={chain:'robinhood-chain',addresses:[{...deployment(1,'token'),holders:99}],
    market:{token_address:address(1),trades_h24:12,pulled_at:new Date(now).toISOString()},
    structure:{mint:'yes'}, metrics:[{kind:'tvl',value:88}],
    activity:{addresses:[{address:address(1),last_tx_at:new Date(now).toISOString()}]}};
  assert.equal(ownActivityAt(platform,prior,idx,now),null);
  assert.equal(ownActivityAt(owner,prior,idx,now),new Date(now).toISOString());
  const interpreted=subjectObservations(platform,prior,idx);
  assert.equal(interpreted.market,null);
  assert.equal(interpreted.structure,null);
  assert.deepEqual(interpreted.addresses,[]);
  assert.deepEqual(interpreted.metrics,prior.metrics);
  assert.equal(prior.market.trades_h24,12,'retained machine evidence is untouched');
  assert.equal(subjectObservations(owner,prior,idx).market,prior.market);
  const history=[{at:'2026-09-01',holders:99,volume_h24:42,revenue_24h:3,tvl:88}];
  assert.equal(subjectHistory(platform,history,idx)[0].holders,null);
  assert.equal(subjectHistory(platform,history,idx)[0].tvl,88);
  assert.equal(history[0].holders,99);
  assert.deepEqual(addressesFor(platform,idx).map(d=>d.role),['factory']);
  const packet={deployments:[{label:'renamed',role:'token',address:{chain:'robinhood-chain',value:address(1)}}]};
  assert.equal(referenceTokenErrors(packet,[],platform).length,1,'renaming a known reference cannot restore own-token role');
});

test('reference assets cannot supply own activity, compiler token roles, or liquidity eligibility', () => {
  const p = { ...a, deployments: [deployment(1, 'token'), {...deployment(2, 'other'), label:'WETH (pair quote)'}] };
  const deps = [{id:'stock-tokens', deployments:[deployment(1, 'token')]}];
  const idx = relationshipIndex(buildRelationships([p], deps));
  const pulled = {chain:'robinhood-chain',market:{token_address:address(1),liquidity_usd:100000,trades_h24:4,pulled_at:new Date(now).toISOString()},
    activity:{addresses:[{address:address(1),last_tx_at:new Date(now).toISOString()},{address:address(2),last_tx_at:new Date(now).toISOString()}]}};
  assert.equal(ownActivityAt(p,pulled,idx,now),null);
  const packet = label => ({deployments:[{label, role:'token',address:{chain:'robinhood-chain',value:address(1)}}]});
  assert.equal(referenceTokenErrors(packet('RDDT'),deps).length,1);
  assert.equal(referenceTokenErrors(packet('WETH (pair quote)')).length,1);
  assert.equal(referenceTokenErrors(packet('PAIR token (own token)')).length,0);
  assert.equal(referenceReason({...deployment(2,'token'),label:'TAYSOM (graduation, quote TSM)'}),null);
  assert.equal(referenceTokenErrors({deployments:[{role:'token',address:{chain:'ethereum',value:address(1)}}]},deps).length,0);
  assert.equal(aboveShareBar({...census,identity:{entity_kind:'token'},official_links:[{kind:'site'}]},pulled,{project:p,index:idx,now}),false);
});

test('provisional daily eligibility preserves evidence, observe, conflict and lifecycle gates', () => {
  const p={...a,lifecycle:'mainnet'};
  const row={role:'subject',identity:{status:'provisional'},official_links:[{kind:'site',url:'https://example.org'}],qualifying:{deployed_on_chain:{value:true}}};
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-DAY).toISOString(),market:{token_address:address(1),trades_h24:3,pulled_at:new Date(now-DAY).toISOString()}};
  const decide=(changes={})=>refreshDecision({project:p,census:row,previous,index,now,aboveShareBar:true,...changes});
  assert.equal(decide().tier,'hot');
  assert.equal(row.identity.status,'provisional');
  for(const changes of [{census:{...row,role:'observe'}},{census:{...row,official_links:[]}},
    {census:{...row,qualifying:{}}},{project:{...p,deployments:p.deployments.map(d=>({...d,verified:false}))}},
    {project:{...p,lifecycle:'announced'}},{aboveShareBar:false}]) assert.notEqual(decide(changes).tier,'hot');
  assert.equal(decide({census:{...row,identity:{status:'conflicted'}}}).ignored,true);
});

test('hot selection recovers component expiry without extending timestamps or bypassing retry cooldown', () => {
  const previous={chain:'robinhood-chain',pulled_at:new Date(now).toISOString(),
    market:{token_address:address(1),trades_h24:1,pulled_at:new Date(now-12*3600_000).toISOString()}};
  const decide=(changes={})=>refreshDecision({project:a,census,previous,index,now,aboveShareBar:true,...changes});
  assert.equal(decide().due,true,'next daily run would fall at component expiry');
  assert.equal(decide({previous:{...previous,market:{...previous.market,pulled_at:new Date(now).toISOString()}}}).due,false);
  assert.equal(decide({previous:{...previous,refresh:{status:'partial',last_success_at:previous.pulled_at,attempted_at:previous.pulled_at}}}).due,false);
  assert.equal(previous.market.pulled_at,new Date(now-12*3600_000).toISOString());
});

test('canonical app links qualify for daily consideration without replacing other evidence gates', () => {
  const p={...a,lifecycle:'mainnet'};
  const row={role:'subject',identity:{status:'provisional',entity_kind:'protocol'},tree:{primary:'launch/bonding-curve'},
    official_links:[{kind:'app',url:'https://example.org'}],qualifying:{deployed_on_chain:{value:true}}};
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-DAY).toISOString(),
    addresses:[{address:address(1),is_contract:true}],
    market:{token_address:address(1),liquidity_usd:100000,trades_h24:3,pulled_at:new Date(now-DAY).toISOString()}};
  const original=structuredClone({p,row,previous});
  const decide=(c=row,project=p,prior=previous)=>refreshDecision({project,census:c,previous:prior,index,now,
    aboveShareBar:aboveShareBar(c,prior,{project,index,now})});
  assert.equal(decide().tier,'hot');
  assert.notEqual(decide({...row,identity:{...row.identity,entity_kind:'token'}}).tier,'hot',
    'a token third-party app listing is not its own product surface');
  assert.notEqual(decide({...row,role:'observe'}).tier,'hot');
  assert.equal(decide({...row,identity:{...row.identity,status:'conflicted'}}).ignored,true);
  assert.notEqual(decide({...row,qualifying:{}}).tier,'hot');
  assert.notEqual(decide(row,{...p,lifecycle:'inactive'}).tier,'hot');
  assert.notEqual(decide(row,{...p,deployments:p.deployments.map(d=>({...d,verified:false}))}).tier,'hot');
  for(const market of [{...previous.market,liquidity_usd:24999},
    {...previous.market,pulled_at:new Date(now-8*DAY).toISOString()},
    {...previous.market,token_address:address(2)}])
    assert.notEqual(decide(row,p,{...previous,market}).tier,'hot');
  assert.deepEqual({p,row,previous},original,'surface recognition does not rewrite identity or measurements');
});

test("volume coverage preserves fresh zero and reports missing, stale and conflicting pools", () => {
  const file = (id,value,at=now) => ({chain:'robinhood-chain',market:{pulled_at:new Date(at).toISOString(),pairs:[{pair_address:address(id),volume_h24:value}]}});
  assert.deepEqual(uniqueVolumeSummary([file(1,0),file(1,0)],now),{value:0,partial:false,pools:1,freshPools:1});
  assert.deepEqual(uniqueVolumeSummary([file(1,0),file(2,50,now-2*DAY)],now),{value:0,partial:true,pools:2,freshPools:1});
  assert.equal(uniqueVolumeSummary([file(1,10),null],now).partial,true);
  assert.equal(uniqueVolumeSummary([file(1,10),file(1,null)],now).value,null);
  assert.equal(uniqueVolumeSummary([file(1,null),file(1,10)],now).value,null);
  assert.equal(uniqueVolumeSummary([file(1,10),file(1,null,now+1000)],now+1000).value,null);
  assert.equal(uniqueVolumeSummary([file(1,10,now-2*DAY)],now).value,null);
});

test("shared volume retains 32-byte pool IDs without treating them as contracts", () => {
  const id = `0x${'ab'.repeat(32)}`;
  const file = (value, at = now, chain = 'robinhood-chain', pool = id) => ({chain,
    market:{pulled_at:new Date(at).toISOString(),pairs:[{pair_address:pool,volume_h24:value}]}});
  assert.deepEqual(uniqueVolumeSummary([file(12),file(12,now,'robinhood-chain',`0x${'AB'.repeat(32)}`)],now),
    {value:12,partial:false,pools:1,freshPools:1});
  assert.equal(uniqueVolume([file(0)],now),0);
  assert.equal(uniqueVolume([file(12),file(15,now-1000)],now),12);
  assert.equal(uniqueVolume([file(12,now-2*DAY)],now),null);
  assert.equal(uniqueVolume([file(12,now+1000)],now),null);
  for (const rows of [[file(12),file(15)],[file(15),file(12)],[file(null),file(12)]])
    assert.deepEqual(uniqueVolumeSummary(rows,now),{value:null,partial:true,pools:1,freshPools:0});
  assert.equal(uniqueVolume([file(12),file(15,now,'base')],now),27);
  assert.equal(uniqueVolume([file(12),file(15,now,'robinhood-chain',address(1))],now),27);
  for (const invalid of [id.slice(0,-1),`${id}0`,'0x'+'z'.repeat(64),null,'not-verified'])
    assert.deepEqual(uniqueVolumeSummary([file(12,now,'robinhood-chain',invalid)],now),
      {value:null,partial:true,pools:0,freshPools:0});
  assert.equal(uniqueVolumeSummary([file(12,now,'solana')],now).pools,0);
  assert.equal(buildRelationships([{slug:'pool-is-not-a-contract',deployments:[{chain:'robinhood-chain',address:id,role:'token'}]}]).addresses.length,0);
});

test("known totals preserve zero and do not disguise missing observations", () => {
  assert.equal(knownTotal([0,0]),0);
  assert.equal(knownTotal([1,2]),3);
  for (const values of [[],[null],[1,null],[undefined],[NaN],[-1],[Number.MAX_VALUE,Number.MAX_VALUE]]) assert.equal(knownTotal(values),null);
});

test("own activity rejects conflicted tokens, other-chain market attribution and future times", () => {
  const conflicted=relationshipIndex(buildRelationships([a,{...b,deployments:[deployment(1,'token')]}]));
  const data={chain:'robinhood-chain',market:{token_address:address(1),trades_h24:3,pulled_at:new Date(now).toISOString()},activity:{addresses:[{address:address(1),last_tx_at:new Date(now+DAY).toISOString()}]}};
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

test('explicit unknown factory dates never borrow a newer aggregate or file date',()=>{
  const row={address:address(9),role:'factory',window_as_of:null,stale_since:null,launches_24h:0};
  const file={chain:'robinhood-chain',activity:{window_as_of:new Date(now).toISOString(),pulled_at:new Date(now).toISOString(),addresses:[row]}};
  assert.equal(uniqueLaunches([file],now).value,null);
  delete row.window_as_of;
  assert.equal(uniqueLaunches([file],now).value,0,'absent legacy date inherits documented aggregate window');
  file.activity.window_as_of=null;
  assert.equal(uniqueLaunches([file],now).value,null,'explicit unknown aggregate cannot borrow file rewrite time');
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
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-2*DAY).toISOString(),market:{token_address:address(1),trades_h24:2,pulled_at:new Date(now-2*DAY).toISOString()},activity:{addresses:[]}};
  const hot=refreshDecision({project:a,census,previous,index,aboveShareBar:true,now});
  assert.equal(hot.tier,'hot');assert.equal(hot.due,true);
  const low=refreshDecision({project:b,census,previous:{...previous,market:{...previous.market,token_address:address(2)}},index,aboveShareBar:false,now});
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

test("failed refreshes cool down daily; manual and newer dated evidence can reactivate", () => {
  const previous={chain:'robinhood-chain',refresh:{status:'partial',attempted_at:new Date(now).toISOString(),last_success_at:'2026-08-01T00:00:00Z'}};
  const decide=extra=>refreshDecision({project:b,census,previous,index,now,aboveShareBar:true,...extra});
  assert.equal(decide({}).due,false);
  assert.equal(decide({force:true}).due,true);
  assert.equal(decide({now:now+22*3600_000}).due,true);
  assert.equal(decide({now:now+1000,queuedAt:new Date(now-1000).toISOString()}).due,false);
  assert.equal(decide({now:now+1000,queuedAt:new Date(now+1000).toISOString()}).due,true);
  assert.equal(decide({}).lastSuccessAt,previous.refresh.last_success_at);
});

test("daily allocations preserve regular and seed progress while rotating persistent failures", () => {
  const projects=Array.from({length:82},(_,i)=>({...project(`p${String(i).padStart(3,'0')}`,i+100),deployments:[deployment(i+100,'token')]}));
  const localIndex=relationshipIndex(buildRelationships(projects));
  const state=new Map(projects.slice(0,81).map((p,i)=>[p.slug,{chain:'robinhood-chain',
    refresh:{status:i<80?'partial':'complete',last_success_at:new Date(now-40*DAY).toISOString(),attempted_at:new Date(now-DAY).toISOString()}}]));
  const attempted=new Set();
  for(let day=0;day<5;day++) {
    const clock=now+day*DAY;
    const targets=projects.map(p=>({slug:p.slug,refresh:refreshDecision({project:p,census,index:localIndex,now:clock,aboveShareBar:true,
      previous:state.has(p.slug)?{...state.get(p.slug),market:{token_address:p.deployments.find(d=>d.role==='token')?.address,trades_h24:1,pulled_at:new Date(clock).toISOString()}}:null})}));
    const result=selectRefreshTargets(targets);
    assert(result.selected.some(t=>t.slug===projects[80].slug),'ordinary due name progresses every day');
    assert(result.selected.filter(t=>t.refresh.retry).length<=20,'retry budget remains bounded');
    if(day===0) assert(result.selected.some(t=>t.slug===projects[81].slug),'new seed is not starved');
    const firstRetry=result.selected.findIndex(t=>t.refresh.retry);
    assert(result.selected.slice(firstRetry).every(t=>t.refresh.retry),'retries execute after non-retry work');
    for(const target of result.selected) {
      const failing=Number(target.slug.slice(1))<80;
      if(failing) attempted.add(target.slug);
      state.set(target.slug,{chain:'robinhood-chain',refresh:{status:failing?'partial':'complete',attempted_at:new Date(clock).toISOString(),
        last_success_at:failing?state.get(target.slug).refresh.last_success_at:new Date(clock).toISOString()}});
    }
  }
  assert.equal(attempted.size,80,'every persistent failure rotates through the retry slots');
});

test("retry cap counts failed seeds, manual selection overrides caps, ordinary work fills unused retry slots", () => {
  const targets=Array.from({length:100},(_,i)=>({slug:String(i),refresh:{due:true,retry:i<80,seed:i<30,priority:100-i}}));
  const normal=selectRefreshTargets(targets);
  assert.equal(normal.selected.filter(t=>t.refresh.retry).length,20);
  assert.equal(normal.selected.filter(t=>t.refresh.seed).length,10);
  assert.equal(selectRefreshTargets(targets,{force:true}).selected.length,100);
  assert.equal(selectRefreshTargets(targets.map(t=>({...t,refresh:{...t.refresh,seed:false,retry:false}}))).selected.length,80);
  const seeds=Array.from({length:30},(_,i)=>({slug:`seed-${i}`,refresh:{due:true,seed:true,retry:i<20,priority:i<20?1:100}}));
  const selection=selectRefreshTargets(seeds).selected;
  assert.equal(selection.filter(t=>t.refresh.retry).length,5,'new discovery cannot starve failed seeds');
  assert.equal(selection.filter(t=>!t.refresh.retry).length,5,'failed seeds cannot starve discovery');
});
import './test-stock-pairs.mjs';
import './test-refresh-review.mjs';
import './test-pull-attempt.mjs';
