import assert from 'node:assert/strict';
import { test } from 'node:test';
import { TASK_STATE_MARKER, taskStateFromComments, taskSnapshotState, discoveryInput } from './lib/planning-inputs.mjs';
import { admissionPlan } from './admission-plan.mjs';
const now = Date.now(), checkedAt = new Date(now).toISOString();
const id = 'a'.repeat(20), address = `0x${'1'.repeat(40)}`;
const tasks = {[id]:{slug:'fixture',owner:'grok-heavy',status:'claimed'}};
const comment=(states=tasks,n=1)=>({id:n,user:{login:'owner'},updated_at:checkedAt,html_url:'https://github.com/owner/repo/issues/1#issuecomment-1',
  body:`${TASK_STATE_MARKER}\n\`\`\`json\n${JSON.stringify({version:1,tasks:states})}\n\`\`\``});
const options={controller:'owner',checkedAt,now};
test('task export uses explicit controller manifests, not arbitrary comments or empty assumptions',()=>{
  const snapshot=taskStateFromComments([comment(),{...comment({},2),user:{login:'producer'}}],options);
  assert.deepEqual(taskSnapshotState(snapshot,now),tasks);
  assert.throws(()=>taskStateFromComments([],options),/No controller/);
  assert.throws(()=>taskStateFromComments([{...comment(),body:comment().body.replace('```json','```yaml')}],options),/Malformed/);
  assert.throws(()=>taskStateFromComments([comment(),comment({},2)],options),/disappeared/);
  assert.throws(()=>taskStateFromComments([comment()],{...options,checkedAt:new Date(now+1).toISOString()}),/fresh/);
  assert.throws(()=>taskSnapshotState(snapshot,now+86400_001),/older/);
  const released={[id]:{...tasks[id],status:'released'}};
  assert.deepEqual(taskStateFromComments([comment(released,2),comment()],options).tasks,released);
  assert.throws(()=>taskStateFromComments([comment({[id]:{...tasks[id],status:'verified'}})],options),/Invalid/);
});
test('discovery builds address-qualified dedupe inputs but never manufactures admission evidence',async()=>{
  const discovery={pulled_at:checkedAt,candidates:[{name:'Hoodrat-like',symbol:'HOODRAT',address,rialto_volume_24h_usd:175000,dexscreener_liquidity_usd:280000}]};
  const input=discoveryInput({discovery,projects:[],pending:[],checkedAt});
  assert.equal(input.subjects[0].lead.measurement_time_unknown,true);
  assert.deepEqual(input.observations,[]);
  assert.equal((await admissionPlan(input)).results[0].decision,'watch');
  const duplicate=discoveryInput({discovery,projects:[],pending:[{deployments:[{address:{chain:'robinhood-chain',value:address}}]}],checkedAt});
  assert.equal((await admissionPlan(duplicate)).results[0].decision,'existing');
  const dependency=discoveryInput({discovery,projects:[],dependencies:[{deployments:[{chain:'robinhood-chain',address}]}],pending:[],checkedAt});
  assert.equal((await admissionPlan(dependency)).results[0].decision,'existing');
  assert.throws(()=>discoveryInput({discovery:{...discovery,candidates:[...discovery.candidates,...discovery.candidates]},projects:[],pending:[],checkedAt}),/duplicate/);
});
