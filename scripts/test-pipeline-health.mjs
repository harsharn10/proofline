import assert from 'node:assert/strict';
import { test } from 'node:test';
import { basename } from 'node:path';
import { access } from 'node:fs/promises';
import { assessRun, assessReport, assessReceipt, compileDisposition, selectReportArtifact } from './lib/pipeline-health.mjs';
import { checkPipeline, checkDaily } from './pipeline-health.mjs';
import { executionReceipt } from './pipeline-receipt.mjs';

const now=Date.parse('2026-09-09T15:37:00Z');
const at='2026-09-09T09:20:00Z';
const run={databaseId:123,attempt:1,headSha:'a'.repeat(40),status:'completed',conclusion:'success',createdAt:'2026-09-09T09:17:00Z',event:'schedule'};
const receipt=(kind='pull',result='success')=>executionReceipt({GITHUB_RUN_ID:'123',GITHUB_RUN_ATTEMPT:'1',GITHUB_SHA:run.headSha,GITHUB_EVENT_NAME:'schedule',PIPELINE_KIND:kind,PIPELINE_RESULT:result},'b'.repeat(40),at);
const pull=()=>({at,status:'complete',selected:1,completed:['a'],deferred_names:[],deferred_reads:[],failures:[],run_errors:[],budget:{provider_exhausted:false}});
const plan=()=>({at,selected:[{slug:'a'}],deferred:[]});
const compile=()=>({generated_at:at,dry:false,ok:true,branches:[{skipped:[]}],compiled:[],inventory:[],preexistingErrors:[],gates:{validate:{ok:true,skipped:true},score:{ok:true,skipped:true}}});

test('latest scheduled run must be recent and successful; manual success cannot mask failure',()=>{
  assert.deepEqual(assessRun(run,now),[]);
  for(const changed of [null,{...run,event:'workflow_dispatch'},{...run,status:'in_progress'},
    {...run,conclusion:'failure'},{...run,createdAt:'2026-09-01'},{...run,createdAt:'2027-01-01'}]) assert(assessRun(changed,now).length);
});
test('pull health checks exact completion, failures and report freshness rather than its status string',()=>{
  assert.equal(assessReport('pull',run,pull(),plan(),now).healthy,true);
  for(const changed of [{...pull(),completed:[]},{...pull(),completed:['b']},{...pull(),completed:['a','a']},
    {...pull(),run_errors:[{message:'cache flush failed'}]},{...pull(),deferred_reads:['a:lp']},
    {...pull(),failures:[{slug:'a'}]},{...pull(),budget:{provider_exhausted:true}},
    {...pull(),at:'2026-09-01'},{...pull(),status:'degraded'},{...pull(),failures:null},{}]) {
    assert.equal(assessReport('pull',run,changed,plan(),now).healthy,false);
  }
});
test('intentional bounded deferrals are visible backlog, not failed selected work; excess overdue still alerts',()=>{
  const report={...pull(),status:'degraded',deferred_names:['b']};
  const queued={...plan(),deferred:[{slug:'b',lastSuccessAt:'2026-09-08T00:00:00Z',intervalDays:1}]};
  const result=assessReport('pull',run,report,queued,now);
  assert.equal(result.healthy,true);assert.equal(result.state,'complete-with-backlog');assert.equal(result.notes.length,1);
  assert.equal(assessReport('pull',run,{...report,deferred_names:['a']},queued,now).healthy,false);
  queued.deferred[0].lastSuccessAt='2026-08-01T00:00:00Z';
  assert.equal(assessReport('pull',run,report,queued,now).healthy,false);
  assert.equal(assessReport('pull',run,{...pull(),selected:0,completed:[]},{...plan(),selected:[]},now).healthy,true);
});
test('compiler no-change is healthy but held, partial, failed, dry or contradictory reports are not',()=>{
  assert.equal(compileDisposition(compile()),'no-change');
  assert.equal(assessReport('compile',run,compile(),null,now).healthy,true);
  const blocked={...compile(),branches:[{skipped:[{errors:['identity conflict']}]}]};
  assert.equal(compileDisposition(blocked),'blocked');
  assert.equal(compileDisposition({...blocked,compiled:['a']}),'partial');
  assert.equal(compileDisposition({...compile(),compiled:['a']}),'complete');
  for(const report of [blocked,{...blocked,compiled:['a']},{...compile(),ok:false},
    {...compile(),dry:true},{...compile(),status:'complete'},{...compile(),gates:{}},{}]) {
    assert.equal(assessReport('compile',run,report,null,now).healthy,false);
  }
});
test('missing, expired, oversized and ambiguous artifacts fail closed',()=>{
  const artifact={name:'daily-pull-123',expired:false,size_in_bytes:50};
  assert.equal(selectReportArtifact({artifacts:[artifact]},artifact.name),artifact);
  for(const artifacts of [[],[artifact,artifact],[{...artifact,expired:true}],[{...artifact,size_in_bytes:6_000_000}]]) {
    assert.throws(()=>selectReportArtifact({artifacts},artifact.name));
  }
});
test('read-only command runner inspects only scheduled reports and cleans its temporary download',async()=>{
  const calls=[];let downloaded;
  const command=async args=>{
    calls.push(args);
    if(args[0]==='run'&&args[1]==='list') return JSON.stringify([run]);
    if(args[0]==='api') return JSON.stringify({artifacts:[{name:'daily-pull-123-1',expired:false,size_in_bytes:50}]});
    downloaded=args.at(-1);return '';
  };
  const readJson=async path=>({'pull-report.json':pull(),'pull-plan.json':plan(),'pull-run.json':receipt()})[basename(path)];
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command,readJson})).healthy,true);
  assert(calls[0].includes('schedule'));assert(calls[0].includes('main'));assert(calls[0].includes('daily-registry.yml'));
  await assert.rejects(access(downloaded));
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command:async()=>{throw Error('API unavailable')}})).healthy,false);
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command,readJson:async()=>{throw Error('bad JSON')}})).healthy,false);
  assert.equal((await checkPipeline('pull',{repo:'invalid',now,command})).healthy,false);
});

test('execution receipts bind lane, event, attempt, revision and time without claiming deployment',()=>{
  assert.deepEqual(assessReceipt('pull',run,receipt(),now),[]);
  assert.equal(receipt().workspace_sha,'b'.repeat(40),'workspace can advance after a bot commit');
  assert.equal(receipt().deployed_sha,undefined);
  for(const changed of [null,{}, {...receipt(),version:2},{...receipt(),kind:'compile'},
    {...receipt(),run_id:124},{...receipt(),run_attempt:2},{...receipt(),event:'workflow_dispatch'},
    {...receipt(),trigger_sha:'c'.repeat(40)},{...receipt(),workspace_sha:'invalid'},
    {...receipt(),result:'skipped'},{...receipt(),at:'2026-09-08'},{...receipt(),at:'2027-01-01'}])
    assert(assessReceipt('pull',run,changed,now).length);
  assert.throws(()=>executionReceipt({},run.headSha),/Invalid/);
});

test('coordinator failure cannot hide a successful pull, and lane failure cannot borrow parent success',async()=>{
  const calls=[];
  let parent={...run,conclusion:'failure'}, compileResult='failure', pullResult='success', attempt=1;
  const command=async args=>{
    calls.push(args);
    if(args[0]==='run'&&args[1]==='list')return JSON.stringify([parent]);
    if(args[0]==='api')return JSON.stringify({artifacts:['pull','compile'].map(kind=>({name:`daily-${kind}-123-${attempt}`,expired:false,size_in_bytes:50}))});
    return '';
  };
  const readJson=async path=>({'pull-report.json':pull(),'pull-plan.json':plan(),'pull-run.json':receipt('pull',pullResult),
    'compile-report.json':compile(),'compile-run.json':receipt('compile',compileResult)})[basename(path)];
  const check=()=>checkDaily({repo:'owner/repo',now,command,readJson});
  let results=await check();
  assert.deepEqual(results.map(r=>[r.kind,r.healthy]),[['coordinator',false],['compile',false],['pull',true]]);
  assert.equal(calls.filter(args=>args[1]==='list').length,1,'one parent snapshot for both lanes');
  parent={...run}; compileResult='success';pullResult='failure';
  results=await check();assert.equal(results[0].healthy,true);assert.equal(results[2].healthy,false);
  pullResult='success';parent={...run,attempt:2};
  results=await check();assert.equal(results[1].healthy,false,'attempt-1 artifacts cannot satisfy attempt 2');
  attempt=2;
  results=await check();assert.equal(results[2].healthy,false,'renamed old receipt still cannot satisfy attempt 2');
  parent={...run,event:'workflow_dispatch'};
  results=await check();assert(results.every(result=>!result.healthy));
  parent=null;
  results=await check();assert(results.every(result=>!result.healthy));
  results=await checkDaily({repo:'owner/repo',now,command:async()=>{throw Error('API offline')}});
  assert.equal(results[0].healthy,false);
});
