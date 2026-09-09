import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, readFile, stat, rm, appendFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assessRun, assessReport, selectReportArtifact } from './lib/pipeline-health.mjs';

const exec = promisify(execFile);
async function gh(args) {
  return (await exec('gh',args,{timeout:30_000,maxBuffer:5_000_000})).stdout;
}
async function jsonFile(path) {
  if ((await stat(path)).size > 5_000_000) throw new Error('Report exceeds size bound');
  return JSON.parse(await readFile(path,'utf8'));
}

export async function checkPipeline(kind, { repo, now=Date.now(), command=gh, readJson=jsonFile } = {}) {
  let directory;
  try {
    if (!['pull','compile'].includes(kind) || !/^[\w.-]+\/[\w.-]+$/.test(repo ?? '')) throw new Error('Expected pipeline and owner/repository');
    const runs = JSON.parse(await command(['run','list','--repo',repo,'--workflow',`${kind}.yml`,'--branch','main','--event','schedule','--limit','1','--json','databaseId,status,conclusion,createdAt,event']));
    const run = Array.isArray(runs) ? runs[0] : null;
    const runErrors = assessRun(run,now);
    if (runErrors.length) return {healthy:false,state:'unhealthy',errors:runErrors,notes:[]};
    const name = `daily-${kind}-${run.databaseId}`;
    const artifacts = JSON.parse(await command(['api',`repos/${repo}/actions/runs/${run.databaseId}/artifacts?per_page=100`]));
    selectReportArtifact(artifacts,name);
    directory = await mkdtemp(join(tmpdir(),'proofline-health-'));
    await command(['run','download',String(run.databaseId),'--repo',repo,'--name',name,'--dir',directory]);
    const report = await readJson(join(directory,`${kind}-report.json`));
    const plan = kind === 'pull' ? await readJson(join(directory,'pull-plan.json')) : null;
    return assessReport(kind,run,report,plan,now);
  } catch(error) {
    return {healthy:false,state:'unhealthy',errors:[`Report inspection failed: ${error.message}`],notes:[]};
  } finally {
    if (directory) await rm(directory,{recursive:true,force:true});
  }
}

async function main() {
  const repo = process.env.GH_REPO;
  const results = await Promise.all(['pull','compile'].map(async kind => ({kind,...await checkPipeline(kind,{repo})})));
  const lines = ['## Daily pipeline report health', ...results.map(result =>
    `- ${result.kind}: ${result.state}${result.errors.length ? ` — ${result.errors.join('; ')}` : ''}${result.notes.length ? ` — ${result.notes.join('; ')}` : ''}`)];
  console.log(lines.join('\n'));
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY,`${lines.join('\n')}\n`);
  if (results.some(result => !result.healthy)) process.exitCode=1;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
