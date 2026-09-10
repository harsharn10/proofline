import {test} from 'node:test';
import assert from 'node:assert/strict';
import {stockPairIndex} from './lib/stock-pairs.mjs';
const now=Date.parse('2026-09-10T12:00:00Z'),a='0x'+'a'.repeat(40),b='0x'+'b'.repeat(40),pool='0x'+'c'.repeat(64);
const fixture=()=>({now,projects:[{slug:'meme',name:'Meme',deployments:[{chain:'robinhood-chain',address:a,role:'token'}]}],
  census:[{slug:'meme',identity:{status:'provisional'},role:'subject'}],
  dependencies:[{id:'stock-tokens',sources:[{id:'S1',available:true,url:'https://example.org/registry',accessed_at:new Date(now).toISOString()}],
    deployments:[{chain:'robinhood-chain',address:b,ticker:'STOCK',verified:true,sources:['S1']}]}],
  files:[{slug:'meme',chain:'robinhood-chain',market:{token_address:a,rialto:{as_of:new Date(now).toISOString(),source_url:'https://example.org/pairs',
    pairs:[{pool_id:pool,base:a,target:b,volume_24h_usd:0}]}}}]});
test('exact legs and issuer references, bytes32 pools and measured zero survive without mutation',()=>{
  const f=fixture(),before=structuredClone(f),r=stockPairIndex(f);assert.equal(r.total,1);assert.equal(r.rows[0].legVolumeUsd,0);
  assert.equal(r.rows[0].state,'fresh');assert.deepEqual(f,before);
});
test('no ticker, missing leg, unsupported issuer or conflicted subject shortcut',()=>{
  for(const edit of [f=>f.dependencies[0].deployments[0].verified=false,f=>f.dependencies[0].sources[0].available=false,
    f=>f.files[0].market.rialto.pairs[0].target='STOCK',f=>f.files[0].chain='base',
    f=>f.files[0].market.token_address=b,f=>f.census[0].identity.status='conflicted',f=>f.census[0].role='observe']){
    const f=fixture();edit(f);assert.equal(stockPairIndex(f).total,0);}
});
test('reverse legs and replay dedupe without summing; equal-time conflicts withhold estimates',()=>{
  const f=fixture(),r=f.files[0].market.rialto;
  r.pairs.push({...r.pairs[0],base:b,target:a});assert.equal(stockPairIndex(f).total,1);
  r.pairs[1].volume_24h_usd=10;const out=stockPairIndex(f);assert.equal(out.rows[0].legVolumeUsd,null);assert.equal(out.rows[0].state,'conflicting');
  const reversed=structuredClone(f);reversed.files[0].market.rialto.pairs.reverse();assert.deepEqual(stockPairIndex(reversed),out);
});
test('stale, future and retained observations do not borrow file dates',()=>{
  for(const [edit,state]of [[f=>f.files[0].market.rialto.as_of='2026-09-01','stale'],
    [f=>f.files[0].market.rialto.as_of='2027-01-01','unknown'],[f=>f.files[0].market.stale_since='2026-09-01','retained']]){
    const f=fixture();edit(f);assert.equal(stockPairIndex(f).rows[0].state,state);}
});
test('ambiguous issuer tickers stay withheld and response size is bounded',()=>{
  const f=fixture();f.dependencies[0].deployments.push({...f.dependencies[0].deployments[0],address:'0x'+'d'.repeat(40)});
  assert.equal(stockPairIndex(f).total,0);assert.throws(()=>stockPairIndex({...fixture(),limit:101}));
});
test('an unreviewed contradictory pool leg cannot disappear behind the issuer filter',()=>{
  const f=fixture(),r=f.files[0].market.rialto;
  r.pairs.push({...r.pairs[0],target:'0x'+'d'.repeat(40)});
  assert.equal(stockPairIndex(f).total,0);assert.equal(stockPairIndex(f).conflicts,1);
});
test('multiple aliases on one approved stock address remain held rather than throwing or picking the last',()=>{
  const f=fixture(),d=f.dependencies[0];d.deployments.push({...d.deployments[0],ticker:'OTHER'},{...d.deployments[0],ticker:'THIRD'});
  assert.equal(stockPairIndex(f).total,0);
});
