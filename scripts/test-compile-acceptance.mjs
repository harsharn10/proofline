import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ACCEPTANCE_MARKER, packetAcceptance, INTAKE_MAX_AGE_MS } from './lib/compile-acceptance.mjs';
import { compileIntake } from './compile-intake.mjs';

const repository='owner/repo', at='2026-09-10T06:00:00Z', now=Date.parse(at), head='a'.repeat(40);
const path='research/inbox/packets/alpha/WORK-20260910-grok-alpha.md';
const decision=(overrides={})=>({version:1,head_sha:head,decision:'accept',packets:[path],...overrides});
const comment=(value=decision(),extras={})=>({id:1,user:{login:'owner'},created_at:at,
  body:`${ACCEPTANCE_MARKER}\n\`\`\`json\n${JSON.stringify(value)}\n\`\`\``,...extras});
const pr=(extras={})=>({number:9,state:'open',draft:false,head:{ref:'grok/alpha',sha:head,repo:{full_name:repository}},
  base:{ref:'main',repo:{full_name:repository}},proofline_checked_at:at,proofline_comments:[comment()],...extras});
const check=(row,p=path)=>packetAcceptance(row,p,{repository,now});

test('only exact owner-accepted revisions and packet paths are writable',()=>{
  assert.equal(check(pr()).ok,true);
  for(const row of [pr({draft:true}),pr({state:'closed'}),pr({proofline_comments:[]}),
    pr({head:{...pr().head,sha:'b'.repeat(40)}}),pr({head:{...pr().head,repo:{full_name:'fork/repo'}}}),
    pr({proofline_comments:[comment(decision(),{user:{login:'grok'}})]}),
    pr({proofline_comments:[comment(decision({packets:[]}))]}),
    pr({proofline_comments:[comment(decision({decision:'hold'}))]})]) assert.equal(check(row).ok,false);
  assert.equal(check(pr(),'research/inbox/packets/beta/other.md').ok,false);
});
test('latest full owner decision supersedes acceptance; forged or edited older comments cannot release a hold',()=>{
  const hold=comment(decision({decision:'hold',packets:[]}),{id:2});
  assert.equal(check(pr({proofline_comments:[comment(),hold]})).ok,false);
  assert.equal(check(pr({proofline_comments:[hold,comment(decision(),{id:3,user:{login:'producer'}})]})).ok,false);
  assert.equal(check(pr({proofline_comments:[hold,comment(decision(),{id:1,updated_at:at})]})).ok,false);
  assert.equal(check(pr({proofline_comments:[hold,comment(decision(),{id:3})]})).ok,true);
  assert.equal(check(pr({proofline_comments:[comment(),comment(decision(),{id:2,body:ACCEPTANCE_MARKER+' broken'})]})).ok,false);
});
test('snapshots, schema and ambiguous decisions fail closed',()=>{
  for(const extras of [{proofline_checked_at:undefined},{proofline_checked_at:new Date(now+1).toISOString()},
    {proofline_checked_at:new Date(now-INTAKE_MAX_AGE_MS-1).toISOString()},
    {proofline_comments:[comment(),comment()]},
    {proofline_comments:[comment(decision({packets:['content/projects/alpha.yaml']}))]},
    {proofline_comments:[comment(decision({packets:['research/inbox/packets/alpha/../evil.md']}))]},
    {proofline_comments:[comment(decision({packets:[path,path]}))]},
    {proofline_comments:[comment(decision(),{body:comment().body+'\n'+comment().body})]},
    {proofline_comments:[comment(decision(),{updated_at:new Date(now+1).toISOString()})]}]) assert.equal(check(pr(extras)).ok,false);
});
test('GitHub intake paginates comments, retains owner receipts and rechecks acceptance before push',async()=>{
  const calls=[];
  let row=pr();
  const command=args=>{calls.push(args);const endpoint=args[1];
    if(endpoint.includes('/comments?'))return [[...row.proofline_comments,comment(decision(),{id:99,user:{login:'producer'}})]];
    if(endpoint.includes('pulls?'))return [[row]];
    if(endpoint.endsWith('/pulls/9'))return {...row};
    throw Error('Unexpected API '+endpoint);
  };
  const snapshot=await compileIntake({repository,command,now:()=>at});
  assert.equal(snapshot[0].proofline_comments.length,1);
  assert.ok(calls.filter(c=>c[1].includes('?')).every(c=>c.includes('--paginate')&&c.includes('--slurp')));
  const report={ok:true,dry:false,acceptances:[check(pr())],packetPaths:[path]};
  await compileIntake({repository,command,now:()=>at,report});
  row=pr({proofline_comments:[comment(decision({decision:'hold'}),{id:2})]});
  await assert.rejects(compileIntake({repository,command,now:()=>at,report}),/acceptance changed/);
  row=pr({head:{...pr().head,sha:'b'.repeat(40)}});
  await assert.rejects(compileIntake({repository,command,now:()=>at,report}),/acceptance changed/);
  await assert.rejects(compileIntake({repository,command:()=>{throw Error('API unavailable');},now:()=>at}),/API unavailable/);
  await assert.rejects(compileIntake({repository,command,now:()=>at,report:{ok:true,dry:false,acceptances:[],packetPaths:[path]}}),/no acceptance receipt/);
});
