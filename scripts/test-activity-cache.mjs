import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { openActivityCache, CACHE_LIMITS, boundedCache, validCacheRecord, parseCheckpoint } from "./lib/pull/activity-cache.mjs";
import { countRecentInbound, parseTransactionsPage, readAddressActivity, WINDOW_MS } from "./lib/pull/activity.mjs";

const now = Date.parse("2026-09-09T12:00:00Z"), since = now - WINDOW_MS;
const hash = n => `0x${n.toString(16).padStart(64,"0")}`;
const address = n => `0x${n.toString(16).padStart(40,"0")}`;
const tx = (n, minutes = n + 1) => ({ hash: hash(n), timestamp: new Date(now - minutes * 60_000).toISOString(),
  method: n % 2 ? "createPair" : "swap", block_number: 500 - n, from: { hash: address(99) } });
const rawBlock = { number: "0x1f4", timestamp: `0x${((now-60_000)/1000).toString(16)}`, hash: hash(500) };
const stable = Array.from({length:6},(_,i)=>tx(i+1));
const page = (items,next=null) => ({items,next_page_params:next});
const seed = { complete:true, items:stable, errors:[], reused:0 };
const rpc = {call:async()=>rawBlock};
async function fixture(fn) {
  const directory = await mkdtemp(join(tmpdir(),"proofline-activity-cache-"));
  try { return await fn(join(directory,"cache.json")); }
  finally { await rm(directory,{recursive:true,force:true}); }
}

test("finalized overlap produces the full-scan count with one page instead of two",()=>fixture(async path=>{
  const cache=await openActivityCache({rpc,path,now}); cache.record(address(1),seed,since);
  const cached=await cache.get(address(1).toUpperCase().replace('0X','0x'),since);
  assert.ok(cached);
  const fresh={...tx(20,0.5),block_number:501};
  const pages=[page([fresh,...stable.slice(0,2)],{index:2}),page(stable.slice(2))];
  let fullCalls=0,incrementalCalls=0;
  const full=await countRecentInbound(async()=>pages[fullCalls++],{since,until:now,countLaunches:true});
  const incremental=await countRecentInbound(async()=>pages[incrementalCalls++],{since,until:now,countLaunches:true,cached});
  assert.equal(fullCalls,2); assert.equal(incrementalCalls,1);
  assert.equal(incremental.txns_24h,full.txns_24h);
  assert.equal(incremental.launches_24h,full.launches_24h);
  assert.equal(incremental.complete,true); assert.equal(incremental.reused,4);
  cache.record(address(1),incremental,since);
  assert.equal(cache.snapshot().reused,1);
  await cache.flush();
  const stored=JSON.parse(await readFile(path,"utf8"));
  assert.equal(stored.entries.length,1);
  assert.equal(stored.entries[0].items.length,6); // the unfinalized transaction was not persisted
  assert.equal(stored.entries[0].items.some(i=>Object.hasOwn(i,"from")),false);
}));

test("restart rechecks checkpoint hashes, coalesces checks and refuses changed history",()=>fixture(async path=>{
  const initial=await openActivityCache({rpc,path,now});initial.record(address(1),seed,since);initial.record(address(2),seed,since);await initial.flush();
  const calls=[];
  const restarted=await openActivityCache({rpc:{call:async(_,params)=>{calls.push(params[0]);return rawBlock;}},path,now:now+1000});
  assert.ok(await restarted.get(address(1),since+1000));assert.ok(await restarted.get(address(2),since+1000));
  assert.deepEqual(calls,["finalized","0x1f4"]);
  const changed=await openActivityCache({rpc:{call:async(_,params)=>params[0]==="finalized"?rawBlock:{...rawBlock,hash:hash(999)}},path,now:now+1000});
  assert.equal(await changed.get(address(1),since+1000),null);
  assert.equal(changed.snapshot().rejected,1);
}));

test("stale, nonoverlapping and wider windows fall back; full bypass makes no cache RPC",()=>fixture(async path=>{
  const initial=await openActivityCache({rpc,path,now});initial.record(address(1),seed,since);await initial.flush();
  assert.equal(await initial.get(address(1),since-1),null);
  assert.equal(await initial.get(address(1),now),null);
  const later=await openActivityCache({rpc,path,now:now+CACHE_LIMITS.age+1});
  assert.equal(await later.get(address(1),now),null);
  const bypass=await openActivityCache({rpc:{call:()=>{throw Error("must not call")}},path,now,disabled:true});
  assert.equal(await bypass.get(address(1),since),null);
  assert.equal(bypass.snapshot().reason,"explicit bypass");
}));

test("malformed or wrong-chain cache cannot affect fresh collection; dry flush writes nothing",()=>fixture(async path=>{
  await writeFile(path,"{broken");
  const cache=await openActivityCache({rpc,path,now});
  assert.equal(cache.snapshot().rejected,1);
  cache.record(address(1),seed,since);await cache.flush({dry:true});
  assert.equal(await readFile(path,"utf8"),"{broken");
  await cache.flush();
  const wrong=await openActivityCache({rpc,path,now,chain:"another-chain"});
  assert.equal(await wrong.get(address(1),since),null);
  assert.equal(wrong.snapshot().rejected,1);
  const unavailable=await openActivityCache({rpc:{call:async()=>null},path,now});
  assert.equal(unavailable.snapshot().enabled,false);
  assert.equal(await unavailable.get(address(1),since),null);
}));

test("missing anchor and inconsistent overlap scan normally",()=>fixture(async path=>{
  const cache=await openActivityCache({rpc,path,now});cache.record(address(1),seed,since);
  const cached=await cache.get(address(1),since);
  for(const head of [[tx(40,0.5),tx(41,1)], [stable[0],{...stable[1],method:"changed"}]]) {
    let calls=0;
    const pages=[page(head,{index:1}),page(stable.slice(2))];
    const out=await countRecentInbound(async()=>pages[calls++],{since,until:now,cached});
    assert.equal(calls,2);assert.equal(out.cache_hit,false);assert.equal(out.complete,true);
  }
}));

test("unchanged-signal recount can expire old rows from a verified cache without another page",()=>fixture(async path=>{
  const old=stable.map((item,i)=>({...item,timestamp:new Date(now-(i+1)*4*3600_000).toISOString()}));
  const cache=await openActivityCache({rpc,path,now});cache.record(address(1),{...seed,items:old},since);
  const client={transactions:async()=>{throw Error("signal page already supplied")}};
  const out=await readAddressActivity(client,{address:address(1),role:"factory"},{now:now+3600_000,
    firstPage:parseTransactionsPage(page(old.slice(0,2),{index:2})),readCounters:false,allowPaging:false,activityCache:cache});
  assert.equal(out.pages,1);assert.equal(out.window_complete,true);assert.equal(out.txns_24h,5);
}));

test("duplicate hashes are counted once; malformed timestamps and repeating cursors are incomplete",async()=>{
  let calls=0;
  const pages=[page(stable.slice(0,2),{index:1}),page([stable[1],stable[2]])];
  const unique=await countRecentInbound(async()=>pages[calls++],{since,until:now});
  assert.equal(unique.txns_24h,3);assert.equal(unique.complete,true);
  const afterAsOf=await countRecentInbound(async()=>page([tx(50,-1),tx(1)]),{since,until:now});
  assert.equal(afterAsOf.txns_24h,1);assert.equal(afterAsOf.complete,true);
  assert.equal(afterAsOf.last_tx_at,tx(1).timestamp);
  const malformed=await countRecentInbound(async()=>page([{...tx(1),timestamp:null},tx(2)]),{since,until:now});
  assert.equal(malformed.txns_24h,1);assert.equal(malformed.complete,false);
  const missing=await countRecentInbound(async()=>({items:null}),{since,until:now});
  assert.equal(missing.complete,false);
  const unread=await readAddressActivity({transactions:async()=>({items:null})},{address:address(1),role:'factory'},
    {now,readCounters:false});
  assert.equal(unread.txns_24h,null);
  assert.equal(unread.launches_24h,null);
  calls=0;
  const looping=await countRecentInbound(async()=>{calls++;return page([tx(calls)],{index:1});},{since,until:now,maxPages:40});
  assert.equal(calls,2);assert.equal(looping.complete,false);
});

test("only complete, bounded and structurally valid finalized suffixes are retained",()=>fixture(async path=>{
  const cache=await openActivityCache({rpc,path,now});
  cache.record(address(1),{...seed,complete:false},since);
  cache.record(address(2),{...seed,items:[{...stable[0],block_number:null}]},since);
  assert.equal(cache.snapshot().saved,0);
  cache.record(address(3),seed,since);await cache.flush();
  const record=JSON.parse(await readFile(path,"utf8")).entries[0];
  assert.equal(validCacheRecord({...record,address:null},now),false);
  assert.equal(validCacheRecord({...record,items:[null]},now),false);
  assert.equal(validCacheRecord({...record,items:[record.items[0],record.items[0]]},now),false);
  const large=Array.from({length:30},(_,i)=>({...record,address:address(i+1),items:Array.from({length:200},(_,n)=>tx(n+1))}));
  const stored=boundedCache(large,"robinhood-chain",now);
  assert.ok(Buffer.byteLength(stored)<=CACHE_LIMITS.bytes);
  assert.ok(JSON.parse(stored).entries.reduce((n,r)=>n+r.items.length,0)<=CACHE_LIMITS.transactions);
  assert.equal(parseCheckpoint({...rawBlock,timestamp:"0xffffffffffffffff"},now),null);
}));
