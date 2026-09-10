import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import YAML from 'yaml';
import { measurementState,measurementComponents,buildMeasurementManifest,assessMeasurements } from './lib/measurement-health.mjs';
import { readPublicManifest,assessServedManifest } from './measurement-health.mjs';
import { buildRelationships } from './lib/relationships.mjs';
const sha='a'.repeat(40),at='2026-09-10T06:00:00Z',now=Date.parse(at),old='2026-09-07T06:00:00Z';
const address=n=>`0x${String(n).padStart(40,'0')}`;
const deployment=(n,role)=>({address:address(n),chain:'robinhood-chain',role});
const project={slug:'example',deployments:[deployment(1,'token'),deployment(2,'factory'),deployment(3,'other')]};
const file=()=>({slug:'example',chain:'robinhood-chain',pulled_at:at,refresh:{status:'complete',last_success_at:at},
  market:{token_address:address(1),pulled_at:at,volume_h24:0,top10_share:0.4,top10_as_of:null},
  activity:{pulled_at:at,window_as_of:old,stale_since:old,txns_24h:4,
    addresses:[{address:address(1),role:'token',window_as_of:at,stale_since:null,txns_24h:0},{address:address(2),role:'factory',window_as_of:null,txns_24h:2}]},
  metrics:[{kind:'tvl',value:0,as_of:at}],
  structure:{pulled_at:at,mint:'unknown',renounced:false,lp:[{locked_share:0,as_of:old},{locked_share:null,as_of:at}]},
  addresses:[{is_contract:true}]});
const row=(tier='hot')=>({slug:'example',tier,intervalDays:{hot:1,live:7,quiet:30,dormant:30}[tier],reason:'fixture'});
const manifest=(f=file(),r=row(),selection='selected')=>buildMeasurementManifest({files:[f],plan:{at,[selection]:[r]},baseSha:sha,projects:[project]});
const freshFile=()=>{const f=file();for(const row of f.activity.addresses){row.window_as_of=at;row.stale_since=null;}return f;};

test('component dates and null/zero semantics never borrow a file, build or transaction clock',()=>{
  const f=file(),before=JSON.stringify(f),components=measurementComponents(f);
  const state=key=>measurementState(components.find(c=>c.key===key),now);
  assert.equal(state('market'),'fresh','zero volume is measured');
  assert.equal(state('activity'),'retained');
  assert.equal(state('activity-row:0'),'fresh','explicit fresh row clears aggregate retained marker');
  assert.equal(state('activity-row:1'),'undated','explicit null row date never borrows the aggregate');
  assert.equal(state('concentration'),'undated');
  assert.equal(state('mint'),'unmeasured');
  assert.equal(state('renounced'),'undated','false is a measured result, but still lacks its own date');
  assert.equal(state('lp:0'),'stale','zero locked share is measured, not unavailable');
  assert.equal(state('lp:1'),'unmeasured');
  assert.equal(state('address-read:0'),'undated');
  assert.equal(JSON.stringify(f),before);
  assert.equal(measurementState({measured:true,at:'2027-01-01'},now),'future');
});

test('hot retained components and partial collection alert; maintenance and explicit holds stay separate',()=>{
  assert.equal(assessMeasurements(manifest(),now).healthy,false);
  const f=freshFile();
  assert.equal(assessMeasurements(manifest(f),now).healthy,true,'noncritical undated structure remains disclosed, not forced daily');
  f.activity.addresses.push({address:address(3),role:'other',window_as_of:old,stale_since:old,last_tx_at:old,txns_24h:0});
  assert.equal(assessMeasurements(manifest(f),now).healthy,false,'recent activity is dynamic under the existing pull policy');
  f.activity.addresses.at(-1).last_tx_at='2026-08-01';
  assert.equal(assessMeasurements(manifest(f),now).healthy,true,'quiet static rows do not force daily reads');
  f.refresh={status:'partial',last_success_at:null};
  const partial=assessMeasurements(manifest(f),now);
  assert.equal(partial.healthy,false);assert.equal(partial.summary.partial,1);
  assert(partial.attention[0].issues.includes('no successful collection on file'));
  const held=assessMeasurements(manifest(f,row('dormant'),'ignored'),now);
  assert.equal(held.healthy,true);assert.equal(held.summary.ignored,1);assert.equal(held.summary.partial,1);
  assert.equal(assessMeasurements(manifest(file(),row('quiet'),'not_due'),now).healthy,true);
  const overdue=file();overdue.refresh.last_success_at='2026-06-01';
  assert.equal(assessMeasurements(manifest(overdue,row('quiet')),now).healthy,false);
  const missing=buildMeasurementManifest({files:[],plan:{at,selected:[row()]},baseSha:sha,projects:[project]});
  assert.equal(assessMeasurements(missing,now).healthy,false);
});

test('served revision and time are checked independently; old builds do not force unnecessary updates',()=>{
  const f=freshFile();
  const m=manifest(f);
  assert.equal(assessServedManifest(m,sha,now).healthy,true);
  assert.equal(assessServedManifest(m,'b'.repeat(40),now).healthy,false);
  assert.equal(assessServedManifest(m,sha,now+40*3600_000).healthy,false,'recompute measurement age after serving, not build summary');
  const quiet=manifest(file(),row('quiet'));
  assert.equal(assessServedManifest(quiet,sha,now+40*3600_000).healthy,true,'unchanged quiet names do not need a new build daily');
  assert.equal(assessServedManifest(quiet,sha,now+40*3600_000).notes.length,1);
  assert.equal(assessServedManifest({...m,generated_at:'2027-01-01'},sha,now).healthy,false);
  assert.throws(()=>assessServedManifest(m,'main',now),/revision/);
});

test('manifest reader fails closed on malformed membership or shape',()=>{
  const m=manifest();
  for(const changed of [{}, {...m,version:2},{...m,projects:[]},{...m,projects:[...m.projects,...m.projects]},
    {...m,projects:[{...m.projects[0],interval_days:999}]},
    {...m,projects:[{...m.projects[0],components:[{key:'bad'}]}]}])
    assert.throws(()=>assessMeasurements(changed,now),/Invalid/);
  assert.throws(()=>buildMeasurementManifest({files:[file()],baseSha:sha,projects:[project],plan:{at,selected:[row()],ignored:[row()]}}),/Duplicate/);
  assert.throws(()=>buildMeasurementManifest({files:[file()],baseSha:sha,plan:{at,selected:[row()]}}),/Canonical/);
});

test('canonical references and assigned shared readers override historical machine role labels',()=>{
  const canonical={...project,deployments:[...project.deployments,deployment(4,'reference-token')]};
  const peer={slug:'peer',deployments:[deployment(2,'factory')]};
  const projects=[canonical,peer],relationships=buildRelationships(projects);
  const f=freshFile();f.market={token_address:address(4),pulled_at:old,volume_h24:100};
  f.activity.addresses.push({address:address(4),role:'token',window_as_of:old,stale_since:old,txns_24h:99});
  f.activity.addresses.find(r=>r.address===address(2)).window_as_of=old;
  const before=JSON.stringify(f);
  const build=reader=>buildMeasurementManifest({files:[f],baseSha:sha,projects,relationships,
    plan:{at,selected:[row()],infrastructure:[{address:`robinhood-chain:${address(2)}`,reader}]}});
  const nonreader=build('peer');
  assert.equal(nonreader.projects[0].components.some(c=>c.key==='market'),false,'quote token market is not a subject measurement');
  assert.equal(nonreader.projects[0].components.filter(c=>c.key.startsWith('activity-row:')).length,2,'historical quote-token row excluded');
  assert.equal(assessMeasurements(nonreader,now).healthy,true,'shared factory does not force every attached project daily');
  assert.equal(assessMeasurements(build('example'),now).healthy,false,'assigned infrastructure reader retains responsibility');
  assert.equal(JSON.stringify(f),before,'source observations are immutable');
});

test('public fetch is bounded, unauthenticated, nonredirecting and rejects non-JSON/errors',async()=>{
  let options;
  const request=async(url,opts)=>{assert.equal(url,'https://example.org/data/health.json');options=opts;
    return new Response(JSON.stringify(manifest()),{headers:{'content-type':'application/json'}});};
  const result=await readPublicManifest('https://example.org/data/health.json',{request});
  assert.equal(result.base_sha,sha);assert.equal(options.redirect,'error');assert.equal(options.cache,'no-store');
  assert.deepEqual(options.headers,{accept:'application/json'});assert(options.signal instanceof AbortSignal);
  for(const url of ['http://example.org/data/health.json','https://user:pass@example.org/','https://example.org/?token=secret'])
    await assert.rejects(readPublicManifest(url,{request}),/HTTPS/);
  for(const response of [new Response('no',{status:500}),new Response('<html>'),
    new Response('broken',{headers:{'content-type':'application/json'}}),
    new Response('x'.repeat(2_000_001),{headers:{'content-type':'application/json'}})])
    await assert.rejects(readPublicManifest('https://example.org/data/health.json',{request:async()=>response}));
  await assert.rejects(readPublicManifest('https://example.org/data/health.json',{request:async()=>{throw Error('timeout')}}),/timeout/);
});

test('independent measurement check still runs after report health fails, without installation',()=>{
  const w=YAML.parse(readFileSync(new URL('../.github/workflows/daily-health.yml',import.meta.url),'utf8'));
  const steps=w.jobs.health.steps;
  assert.equal(steps.find(s=>s.run==='node scripts/measurement-health.mjs').if,'always()');
  assert.equal(steps.some(s=>/npm (ci|install)/.test(s.run??'')),false);
});
