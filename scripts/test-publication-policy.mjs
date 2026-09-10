import { test } from 'node:test';
import assert from 'node:assert/strict';
import { publicationPreflight } from './lib/publication-policy.mjs';
const review={version:2,channel_enabled:true,wire_enabled:false,decisions:{}};
const plan=(mode,ledger=review,credentials=true)=>publicationPreflight({review:ledger,mode,credentials});
test('paused automatic modes skip preparation even when approvals exist',()=>{
  for(const mode of ['alerts','brief','weekly']){
    assert.equal(plan(mode).run,false);
    assert.equal(plan(mode,{...review,decisions:{a:{status:'approved'}}}).run,false);
  }
});
test('publications need a candidate; automatic pause cannot suppress an explicitly approved publication',()=>{
  assert.equal(plan('publications').run,false);
  for(const status of ['site-only','hold','rejected'])assert.equal(plan('publications',{...review,decisions:{a:{status}}}).run,false);
  const ledger={...review,decisions:{a:{status:'approved'}}};
  assert.equal(plan('publications',ledger).run,true);
  assert.equal(plan('publications',{...ledger,channel_enabled:false}).run,false);
  assert.equal(plan('publications',ledger,false).run,false);
});
test('enabled modes retain sender semantics; invalid mode/ledger fail closed',()=>{
  for(const mode of ['alerts','brief','weekly']){
    assert.equal(plan(mode,{...review,wire_enabled:true}).run,true);
    assert.equal(plan(mode,{...review,wire_enabled:undefined}).run,true,'legacy missing wire switch matches sender, not an enablement');
  }
  assert.throws(()=>plan('unexpected'),/Unknown/);
  for(const ledger of [null,{}, {...review,channel_enabled:'true'}, {...review,wire_enabled:'false'}, {...review,decisions:[]}])
    assert.throws(()=>plan('publications',ledger),/Invalid/);
  assert.deepEqual(review,{version:2,channel_enabled:true,wire_enabled:false,decisions:{}});
});
