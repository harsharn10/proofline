import { test } from 'node:test';
import assert from 'node:assert/strict';
import { admissionDecision, duneObservations, rialtoObservations, reassessmentSlice } from './lib/admission-policy.mjs';
import { admissionPlan } from './admission-plan.mjs';
import { buildRelationships, relationshipIndex, ownActivityAt } from './lib/relationships.mjs';
import { refreshDecision } from './lib/refresh-policy.mjs';
import { officialSurfaceConfirmed } from './lib/share-bar.mjs';
const now = Date.parse('2026-09-10T12:00:00Z');
const at = new Date(now).toISOString();
const address = '0x' + '1'.repeat(40);
const subject = {id:'example',chain:'robinhood-chain',address,entity_kind:'token',lifecycle:'mainnet'};
const obs = kind => ({subject:'example',chain:subject.chain,address,kind,source_url:'https://example.org/evidence',observed_at:at,status:'observed'});
const base = ['identity-crosslink','robinhood-relevance','deployment'].map(obs);
const activity = {...obs('activity'),value:10,scope:'own',complete:true,window_start:'2026-09-01',window_end:at};
const decide = (observations, changes={}) => admissionDecision({subject,observations,now,...changes});

test('bounded reassessment eventually reaches every name even beyond 300 dormant records',()=>{
  const rows=Array.from({length:1001},(_,i)=>({slug:String(i)}));
  const seen=new Set();
  for(let day=0;day<101;day++) {
    const batch=reassessmentSlice(rows,day*86400_000);assert.ok(batch.length<=10);
    batch.forEach(row=>seen.add(row.slug));
  }
  assert.equal(seen.size,1001);
});

test('badge is exact-contract recognition, not identity, deployment or safety approval',()=>{
  assert.equal(decide([obs('fomo-verified')]).decision,'watch');
  assert.equal(decide([...base,obs('fomo-verified')]).decision,'seed');
  for (const change of [{address:'0x'+'2'.repeat(40)},{chain:'base'},{kind:'coingecko-preview'},{status:'unknown'},{observed_at:'2020-01-01'}])
    assert.equal(decide([...base,{...obs('fomo-verified'),...change}]).decision,'watch');
  assert.equal(decide([...base,obs('coingecko-active')]).research,'targeted');
});
test('reviewed community-token receipts can recommend research without granting daily surface eligibility',()=>{
  const communityBase=base.map(o=>({...o,source_url:o.kind==='identity-crosslink'
    ? 'https://x.com/example/status/123' : 'https://example.org/deployment-receipt'}));
  const recognized={...obs('coingecko-active'),source_url:'https://www.coingecko.com/en/coins/example'};
  const input=structuredClone([...communityBase,recognized]);
  assert.equal(decide(input).decision,'seed','a website is not required by the admission evidence lane');
  assert.equal(decide(input).research,'targeted');
  for(const kind of ['identity-crosslink','robinhood-relevance','deployment','coingecko-active'])
    assert.equal(decide(input.filter(o=>o.kind!==kind)).decision,'watch',`${kind} cannot be replaced by a social link`);
  assert.equal(decide(input.map(o=>o.kind==='identity-crosslink'?{...o,address:'0x'+'2'.repeat(40)}:o)).decision,'watch');
  const row={identity:{status:'provisional',entity_kind:'token'},role:'subject',
    qualifying:{deployed_on_chain:{value:true}},official_links:[{kind:'x',url:'https://x.com/example'}]};
  assert.equal(officialSurfaceConfirmed(row),false,'a stored X link alone still does not grant surface eligibility');
  assert.equal(officialSurfaceConfirmed({...row,official_links:[...row.official_links,
    {kind:'app',url:`https://app.long.xyz/tokens/${address}`}]}),false,'a launchpad listing does not bypass token evidence review');
  assert.deepEqual(input,[...communityBase,recognized],'recommendations do not mutate or approve evidence');
});
test('every token admission receipt needs the exact subject contract, including prerequisite claims',()=>{
  const valid=[...base,obs('coingecko-active')];
  for(const kind of ['identity-crosslink','robinhood-relevance','deployment','coingecko-active']) {
    for(const invalid of [undefined,null,'','EXAMPLE','0x'+'2'.repeat(40),'0x'+'1'.repeat(64)]) {
      const input=valid.map(o=>o.kind===kind?{...o,address:invalid}:o);
      assert.equal(decide(input).decision,'watch',`${kind}: ${String(invalid)} must not qualify`);
    }
  }
  for(const invalid of [undefined,null,'','EXAMPLE']) {
    assert.equal(decide([...valid,obs('dependency-use')],{subject:{...subject,address:invalid}}).decision,'watch');
    assert.equal(decide([{...obs('out-of-scope'),address:invalid}]).decision,'watch',
      'an unbound finding cannot ignore a token');
  }
  const mixedAddress='0x'+'aB'.repeat(20);
  assert.equal(decide(valid.map(o=>({...o,address:mixedAddress.toLowerCase()})),
    {subject:{...subject,address:mixedAddress}}).decision,'seed');
  assert.equal(decide([...base,{...obs('dependency-use'),address:undefined}]).decision,'watch',
    'unbound dependency claims cannot bypass token significance');
  assert.equal(decide([...base,{...activity,address:undefined}]).decision,'watch');
});
test('tokenless product and dependency research keeps optional-address evidence',()=>{
  const product={...subject,entity_kind:'protocol',address:undefined};
  const evidence=[...base,obs('product-mechanism')].map(({address,...o})=>o);
  assert.equal(decide(evidence,{subject:product}).decision,'seed');
  assert.equal(decide([...evidence,{...obs('dependency-use'),address:undefined}],{subject:product}).research,'full');
  assert.equal(decide(evidence.map(o=>({...o,address:''})),{subject:product}).decision,'watch',
    'an explicit malformed address is not an absent address');
});
test('activity windows cannot claim measurements made after the receipt was observed',()=>{
  assert.equal(decide([...base,activity]).decision,'seed','window end may equal observation time');
  const earlierReceipt={...activity,observed_at:'2026-09-09T12:00:00Z'};
  assert.equal(decide([...base,earlierReceipt]).decision,'watch');
  assert.equal(decide([...base,{...earlierReceipt,window_end:earlierReceipt.observed_at}]).decision,'seed');
  for(const change of [{window_start:'invalid'},{window_end:'invalid'},{window_start:at},
    {observed_at:'2026-09-11T12:00:00Z'},{window_end:'2026-09-11T12:00:00Z'}])
    assert.equal(decide([...base,{...activity,...change}]).decision,'watch');
  assert.equal(decide([...base,{...obs('product-mechanism')},{...earlierReceipt,address:undefined}],
    {subject:{...subject,entity_kind:'protocol'}}).research,'targeted',
    'tokenless product remains researchable but impossible activity cannot justify full research');
});
test('protocols and dependencies need no token badge; token spikes do not buy full research',()=>{
  assert.equal(decide([...base,obs('product-mechanism')],{subject:{...subject,entity_kind:'protocol'}}).decision,'seed');
  assert.equal(decide([...base,obs('dependency-use')]).research,'full');
  assert.equal(decide([...base,activity]).research,'full');
  for (const change of [{window_start:'2026-09-10'},{scope:'chain'},{complete:false},{value:0},{value:-1},{window_end:'2026-10-01'}])
    assert.equal(decide([...base,{...activity,...change}]).decision,'watch');
});
test('conflicts, duplicates and inactive/prelaunch products cannot be promoted by volume',()=>{
  assert.equal(decide([...base,activity],{conflict:true}).decision,'hold');
  assert.equal(decide([...base,activity],{duplicate:true}).decision,'existing');
  for(const lifecycle of ['inactive','announced'])
    assert.equal(decide([...base,activity],{subject:{...subject,lifecycle}}).decision,'watch');
  assert.equal(decide([obs('out-of-scope')]).decision,'ignore');
  assert.equal(decide([null]).decision,'watch');
});
test('Dune duplicate rows are coalesced and same-window contradictions are held',()=>{
  const b=dune();b.result.rows.push({...b.result.rows[0]});
  assert.equal(parseDune(b).length,1);
  b.result.rows[1].tx_count=0;
  assert.throws(()=>parseDune(b),/Conflicting/);
});
const dune = () => ({query_id:1,execution_id:'exec-1',state:'QUERY_STATE_COMPLETED',execution_ended_at:at,
  result:{rows:[{chain_id:4663,address,tx_count:10,window_start:'2026-09-01',window_end:at,scope:'own',complete:true}]}});
const parseDune = b => duneObservations(b,{queryId:1,subjectByAddress:new Map([[`${subject.chain}:${address}`,'example']]),now});
test('Dune execution time is not measurement time, and replay is not a second provider vote',()=>{
  const b=dune();b.result.rows[0].window_end='2026-09-09';
  const rows=parseDune(b);assert.equal(rows[0].window_end,'2026-09-09');
  assert.equal(rows[0].execution_id,'exec-1');
  assert.deepEqual(decide([...base,...rows]),decide([...base,...rows,...rows]));
});
test('Dune refuses wrong query, partial, expired, malformed or cross-chain observations',()=>{
  for(const edit of [b=>b.query_id=2,b=>b.next_uri='https://example.org',b=>b.next_offset=100,
    b=>b.state='QUERY_STATE_FAILED',b=>b.expires_at='2020-01-01',b=>b.execution_ended_at='2027-01-01',
    b=>b.result.rows[0].chain_id=1,b=>b.result.rows[0].address='TICKER',b=>b.result.rows[0].complete=false,
    b=>b.result.rows[0].window_end='2027-01-01',b=>b.result.rows[0].tx_count='10']) {
    const b=dune();edit(b);assert.throws(()=>parseDune(b));
  }
});
test('Rialto keeps exact address, whole-token scope, dates and measured zero',()=>{
  const pulled={chain:subject.chain,market:{token_address:address,rialto:{as_of:at,source_url:'https://analytics.rialto.xyz/markets',volume_24h_usd:0}}};
  assert.equal(rialtoObservations(pulled,subject)[0].value,0);
  for(const edit of [p=>p.chain='base',p=>p.market.token_address='wrong',p=>p.market.rialto.volume_note='partial',p=>p.market.rialto.stale_since=at]){
    const p=structuredClone(pulled);edit(p);assert.deepEqual(rialtoObservations(p,subject),[]);
  }
});
test('planner requires a fresh pending snapshot and holds duplicate candidate addresses',async()=>{
  const input={subjects:[subject,{...subject,id:'other'}],observations:base,existing_addresses:[],pending_addresses:[],pending_checked_at:new Date().toISOString()};
  const report=await admissionPlan(input);assert.ok(report.results.every(r=>r.decision==='hold'));
  await assert.rejects(admissionPlan({...input,pending_checked_at:'2020-01-01'}));
});
test('planner applies contract and activity integrity before allocating seed slots, without mutating inputs',async()=>{
  const checked=new Date().toISOString();
  const input={subjects:[subject],observations:[...base,obs('coingecko-active')].map(o=>({...o,observed_at:checked})),
    existing_addresses:[],pending_addresses:[],pending_checked_at:checked};
  const original=structuredClone(input);
  const valid=await admissionPlan(input);
  assert.deepEqual(valid.selected_seeds,['example']);
  assert.equal(valid.policy.version,2);
  assert.equal(valid.recommendations_only,true);
  const missingContract=await admissionPlan({...input,observations:input.observations.map(o=>
    o.kind==='deployment'?{...o,address:null}:o)});
  assert.deepEqual(missingContract.selected_seeds,[]);
  assert.equal(missingContract.results[0].decision,'watch');
  const end=Date.now()-1000;
  const impossibleActivity={...activity,observed_at:new Date(end-86400_000).toISOString(),
    window_start:new Date(end-8*86400_000).toISOString(),window_end:new Date(end).toISOString()};
  const impossible=await admissionPlan({...input,observations:[...input.observations.slice(0,3),impossibleActivity]});
  assert.deepEqual(impossible.selected_seeds,[]);
  assert.equal(impossible.results[0].decision,'watch');
  assert.deepEqual(input,original);
});
test('unreferenced dependencies remain visible; imports are not separate capital totals',()=>{
  assert.deepEqual(buildRelationships([],[{id:'morpho',name:'Morpho'}]).dependencies,[{id:'morpho',name:'Morpho',projects:[]}]);
});
test('file rewrite cannot freshen market activity; inactive product stays monthly',()=>{
  const project={slug:'example',lifecycle:'inactive',deployments:[{chain:subject.chain,address,role:'token'}]};
  const index=relationshipIndex(buildRelationships([project]));
  const previous={chain:subject.chain,pulled_at:at,market:{token_address:address,trades_h24:10}};
  assert.equal(ownActivityAt(project,previous,index,now),null);
  previous.market.pulled_at=at;
  assert.equal(refreshDecision({project,previous,index,census:{identity:{status:'verified'}},aboveShareBar:true,now}).tier,'quiet');
  previous.market.token_address='0x'+'2'.repeat(40);
  assert.equal(ownActivityAt(project,previous,index,now),null);
});
