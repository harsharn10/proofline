import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assessMeasurements } from './lib/measurement-health.mjs';

const MAX_BYTES=2_000_000;
export async function readPublicManifest(url,{request=fetch}={}) {
  const parsed=new URL(url);
  if (parsed.protocol!=='https:'||parsed.username||parsed.password||parsed.search||parsed.hash) throw new Error('Expected a public HTTPS manifest URL');
  const response=await request(parsed.href,{redirect:'error',signal:AbortSignal.timeout(15_000),headers:{accept:'application/json'},cache:'no-store'});
  if (!response.ok||!response.headers.get('content-type')?.includes('application/json')||!response.body) throw new Error('Manifest response is not successful JSON');
  const reader=response.body.getReader(),chunks=[];let bytes=0;
  try {
    while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;
      if(bytes>MAX_BYTES)throw new Error('Manifest exceeds byte bound');chunks.push(value);}
  } finally { await reader.cancel(); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export function assessServedManifest(manifest,expectedSha,now=Date.now()) {
  if (!/^[a-f0-9]{40}$/.test(expectedSha??'')) throw new Error('Expected current-main revision');
  const measurements=assessMeasurements(manifest,now),errors=[],notes=[];
  if(manifest.base_sha!==expectedSha)errors.push(`served revision ${manifest.base_sha} differs from main ${expectedSha}`);
  const age=now-Date.parse(manifest.generated_at);
  if(age<0)errors.push('build manifest is future-dated');
  if(age>36*3600_000)notes.push('Build is older than 36 hours; measurement ages were recomputed, not borrowed from build time');
  return {...measurements,errors,notes,healthy:!errors.length&&measurements.healthy,
    servedSha:manifest.base_sha,expectedSha};
}

async function main() {
  const repo=process.env.GH_REPO;
  const lines=['## Served revision and measurement health'];
  try {
    if(!/^[\w.-]+\/[\w.-]+$/.test(repo??''))throw new Error('Expected owner/repository');
    const expected=(await promisify(execFile)('gh',['api',`repos/${repo}/commits/main`,'--jq','.sha'],{timeout:30_000,maxBuffer:100_000})).stdout.trim();
    const origin=process.env.SITE_URL||'https://proofline-892b.onrender.com';
    const manifest=await readPublicManifest(`${origin.replace(/\/$/,'')}/data/health.json`);
    const result=assessServedManifest(manifest,expected);
    lines.push(`- Served SHA: ${result.servedSha}; main: ${result.expectedSha}`);
    lines.push(`- Measurements: ${JSON.stringify(result.summary)}`);
    for(const error of result.errors)lines.push(`- ${error}`);
    for(const note of result.notes)lines.push(`- ${note}`);
    for(const row of result.attention.slice(0,30))lines.push(`- ${row.slug}: ${row.issues.join('; ')}`);
    if(result.attention.length>30)lines.push(`- ${result.attention.length-30} additional names require attention; inspect the manifest.`);
    if(!result.healthy)process.exitCode=1;
  } catch(error){lines.push(`- Unverified: ${error.message}`);process.exitCode=1;}
  console.log(lines.join('\n'));
  if(process.env.GITHUB_STEP_SUMMARY)await appendFile(process.env.GITHUB_STEP_SUMMARY,`${lines.join('\n')}\n`);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)await main();
