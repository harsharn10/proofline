import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, readFile, stat, rm, appendFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assessRun, assessReceipt, assessReport, selectReportArtifact } from './lib/pipeline-health.mjs';

const exec = promisify(execFile);
async function gh(args) {
  return (await exec('gh',args,{timeout:30_000,maxBuffer:5_000_000})).stdout;
}
async function jsonFile(path) {
  if ((await stat(path)).size > 5_000_000) throw new Error('Report exceeds size bound');
  return JSON.parse(await readFile(path,'utf8'));
}

async function scheduledRun(repo, command) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '')) throw new Error('Expected owner/repository');
  const runs = JSON.parse(await command(['run','list','--repo',repo,'--workflow','daily-registry.yml','--branch','main','--event','schedule','--limit','1','--json','databaseId,status,conclusion,createdAt,event,attempt,headSha']));
  return Array.isArray(runs) ? runs[0] : null;
}

export async function checkPipeline(kind, { repo, now=Date.now(), command=gh, readJson=jsonFile, run: suppliedRun } = {}) {
  let directory;
  try {
    if (!['pull','compile'].includes(kind) || !/^[\w.-]+\/[\w.-]+$/.test(repo ?? '')) throw new Error('Expected pipeline and owner/repository');
    const run = suppliedRun === undefined ? await scheduledRun(repo, command) : suppliedRun;
    // Parent failure is reported separately. Still inspect a successful lane after the other fails.
    const runErrors = assessRun(run,now,{requireSuccess:false});
    if (runErrors.length) return {healthy:false,state:'unhealthy',errors:runErrors,notes:[]};
    const name = `daily-${kind}-${run.databaseId}-${run.attempt}`;
    const artifacts = JSON.parse(await command(['api',`repos/${repo}/actions/runs/${run.databaseId}/artifacts?per_page=100`]));
    selectReportArtifact(artifacts,name);
    directory = await mkdtemp(join(tmpdir(),'proofline-health-'));
    await command(['run','download',String(run.databaseId),'--repo',repo,'--name',name,'--dir',directory]);
    const receipt = await readJson(join(directory,`${kind}-run.json`));
    const receiptErrors = assessReceipt(kind,run,receipt,now);
    if (receiptErrors.length) return {healthy:false,state:'unhealthy',errors:receiptErrors,notes:[]};
    const report = await readJson(join(directory,`${kind}-report.json`));
    const plan = kind === 'pull' ? await readJson(join(directory,'pull-plan.json')) : null;
    return { ...assessReport(kind,{...run,conclusion:receipt.result},report,plan,now),
      runId:run.databaseId, attempt:run.attempt, workspaceSha:receipt.workspace_sha };
  } catch(error) {
    return {healthy:false,state:'unhealthy',errors:[`Report inspection failed: ${error.message}`],notes:[]};
  } finally {
    if (directory) await rm(directory,{recursive:true,force:true});
  }
}

export async function checkDaily({ repo, now=Date.now(), command=gh, readJson=jsonFile } = {}) {
  try {
    const run = await scheduledRun(repo,command);
    const errors = assessRun(run,now);
    const lanes = await Promise.all(['compile','pull'].map(async kind =>
      ({kind,...await checkPipeline(kind,{repo,now,command,readJson,run})})));
    return [{kind:'coordinator',healthy:errors.length===0,state:errors.length?'unhealthy':'complete',errors,notes:[]},...lanes];
  } catch (error) {
    return [{kind:'coordinator',healthy:false,state:'unhealthy',errors:[`Scheduled run inspection failed: ${error.message}`],notes:[]}];
  }
}

async function main() {
  const repo = process.env.GH_REPO;
  const results = await checkDaily({repo});
  const lines = ['## Daily pipeline report health', ...results.map(result =>
    `- ${result.kind}: ${result.state}${result.errors.length ? ` — ${result.errors.join('; ')}` : ''}${result.notes.length ? ` — ${result.notes.join('; ')}` : ''}`)];
  console.log(lines.join('\n'));
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,`${lines.join('\n')}\n`);
  if (results.some(result => !result.healthy)) process.exitCode=1;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
