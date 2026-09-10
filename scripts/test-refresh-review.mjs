import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {refreshReviewBasis,refreshReviewStatus} from './lib/refresh-review.mjs';
import {refreshDecision} from './lib/refresh-policy.mjs';
import {buildRelationships,relationshipIndex} from './lib/relationships.mjs';
import {officialSurfaceConfirmed} from './lib/share-bar.mjs';
import {aboveShareBar} from './pull.mjs';
import {compile,parsePacket} from './lib/packet.mjs';
import {validateAgainst} from './lib/schemas.mjs';
const now=Date.parse('2026-09-10T12:00:00Z'), DAY=86400_000, address='0x'+'a'.repeat(40);
function fixture(decision='community') {
  const project={slug:'example',lifecycle:'mainnet',deployments:[{chain:'robinhood-chain',address,role:'token',verified:true,sources:['S2']}]};
  const census={slug:project.slug,role:'subject',identity:{entity_kind:'token',status:'provisional'},
    tree:{primary:'token/meme'},official_links:[{kind:'x',url:'https://x.com/example'}],qualifying:{deployed_on_chain:{value:true}}};
  const sources=['social','explorer'].map((kind,i)=>({id:`S${i+1}`,kind,available:true,
    url:`https://example.org/receipt/${i}`,claim:`robinhood-chain ${address}`,excerpt:'dated evidence',accessed_at:new Date(now-DAY).toISOString()}));
  project.refresh_review={decision,chain:'robinhood-chain',address,reviewer:'controller',reviewed_at:new Date(now).toISOString(),
    expires_at:new Date(now+30*DAY).toISOString(),reason:'Reviewed exact-contract identity and significance',sources:['S1','S2']};
  project.refresh_review.basis=refreshReviewBasis(project,census,sources);
  const index=relationshipIndex(buildRelationships([project]));
  const previous={chain:'robinhood-chain',pulled_at:new Date(now-DAY).toISOString(),addresses:[{address,is_contract:true}],
    market:{token_address:address,pulled_at:new Date(now-DAY).toISOString(),liquidity_usd:100000,trades_h24:10}};
  return {project,census,sources,index,now,previous};
}
const schedule=f=>refreshDecision({...f,aboveShareBar:aboveShareBar(f.census,f.previous,f)});
test('source-bound community review enables machine daily selection, not a public surface or approval',()=>{
  const f=fixture(), original=structuredClone(f);
  assert.equal(refreshReviewStatus(f).community,true);
  assert.equal(schedule(f).tier,'hot');
  assert.equal(schedule(f).due,true);
  assert.equal(officialSurfaceConfirmed(f.census),false);
  assert.deepEqual(f,original);
  delete f.project.refresh_review;
  assert.equal(schedule(f).tier,'live');
});
test('source/identity/decision changes, future dates and expiry cannot retain community approval',()=>{
  const edits=[f=>f.sources[0].excerpt='changed', f=>f.sources[0].available=false,
    f=>f.sources.pop(),f=>f.census.official_links.push({kind:'x',url:'https://x.com/other'}),
    f=>f.project.deployments[0].role='reference-token',f=>f.project.refresh_review.address='0x'+'b'.repeat(40),
    f=>f.project.refresh_review.reviewer='pending',f=>f.project.refresh_review.reason='changed',
    f=>f.now+=31*DAY,f=>f.project.refresh_review.reviewed_at=new Date(now+DAY).toISOString()];
  for(const edit of edits){const f=fixture();edit(f);assert.equal(refreshReviewStatus(f).community,false);assert.notEqual(schedule(f).tier,'hot');}
});
test('re-signing cannot bypass exact-contract receipts, lifetime, lifecycle or own-identity requirements',()=>{
  const edits=[f=>f.sources[0].claim='TICKER only',f=>f.sources[0].kind='other',
    f=>f.sources[1].kind='social',f=>f.sources[1].url=f.sources[0].url,
    f=>f.sources[0].accessed_at=new Date(now-31*DAY).toISOString(),
    f=>f.sources[0].accessed_at=new Date(now+DAY).toISOString(),
    f=>f.project.refresh_review.expires_at=new Date(now+31*DAY).toISOString(),
    f=>f.project.lifecycle='inactive',f=>f.census.role='observe',f=>f.census.identity.status='conflicted',
    f=>f.project.deployments[0].verified=false,f=>f.census.identity.entity_kind='protocol'];
  for(const edit of edits){const f=fixture();edit(f);f.project.refresh_review.basis=refreshReviewBasis(f.project,f.census,f.sources);
    assert.equal(refreshReviewStatus(f).community,false);assert.notEqual(schedule(f).tier,'hot');}
});
test('review does not bypass own-token, dated activity or existing liquidity limits',()=>{
  for(const edit of [f=>f.previous.market.liquidity_usd=24999,f=>f.previous.market.token_address='0x'+'b'.repeat(40),
    f=>f.previous.market.pulled_at=new Date(now-8*DAY).toISOString(),f=>f.previous.market.trades_h24=0]){
    const f=fixture();edit(f);assert.notEqual(schedule(f).tier,'hot');}
});
test('controller stop beats seed, queue, manual force and infrastructure; invalidation never restarts it',()=>{
  for(const edit of [()=>{},f=>f.previous=null,f=>f.force=true,f=>f.queuedAt=new Date(now).toISOString(),
    f=>f.now+=100*DAY,f=>f.sources=[],f=>f.project.refresh_review.basis='bad']){
    const f=fixture('stop');edit(f);const r=schedule(f);assert.equal(r.due,false);assert.equal(r.ignored,true);}
  const f=fixture('stop');f.infrastructureReaders=new Map([[`robinhood-chain:${address}`,'example']]);
  assert.equal(schedule(f).ignored,true);
  delete f.project.refresh_review;assert.equal(schedule({...f,force:true}).due,true,'reviewed removal restores normal policy');
});
test('compiler preserves controller review, and packet input cannot create or replace one',async()=>{
  const packet=parsePacket(await readFile('fixtures/compile-packet/new-seed.md','utf8'));
  const seed=compile(packet), review=fixture('stop').project.refresh_review;
  seed.project.refresh_review=review;
  const attempted=structuredClone(packet);attempted.frontmatter.refresh_review={decision:'community'};
  assert.ok(validateAgainst('packet',attempted.frontmatter).length>0);
  assert.equal(compile(attempted).project.refresh_review,undefined);
  assert.deepEqual(compile(attempted,seed.project,seed.censusRow,seed.sources,seed.feed).project.refresh_review,review);
});
