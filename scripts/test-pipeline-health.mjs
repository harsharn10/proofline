import assert from 'node:assert/strict';
import { test } from 'node:test';
import { basename } from 'node:path';
import { access } from 'node:fs/promises';
import { assessRun, assessReport, compileDisposition, selectReportArtifact } from './lib/pipeline-health.mjs';
import { checkPipeline } from './pipeline-health.mjs';

const now=Date.parse('2026-09-09T15:37:00Z');
const at='2026-09-09T09:20:00Z';
const run={databaseId:123,status:'completed',conclusion:'success',createdAt:'2026-09-09T09:17:00Z',event:'schedule'};
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
    if(args[0]==='api') return JSON.stringify({artifacts:[{name:'daily-pull-123',expired:false,size_in_bytes:50}]});
    downloaded=args.at(-1);return '';
  };
  const readJson=async path=>basename(path)==='pull-report.json'?pull():plan();
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command,readJson})).healthy,true);
  assert(calls[0].includes('schedule'));assert(calls[0].includes('main'));
  await assert.rejects(access(downloaded));
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command:async()=>{throw Error('API unavailable')}})).healthy,false);
  assert.equal((await checkPipeline('pull',{repo:'owner/repo',now,command,readJson:async()=>{throw Error('bad JSON')}})).healthy,false);
  assert.equal((await checkPipeline('pull',{repo:'invalid',now,command})).healthy,false);
});
