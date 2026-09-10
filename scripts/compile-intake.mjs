// Read GitHub with pagination. No dispatch, approval, canonical write or branch execution.
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { researchIntake } from './compile-inbox.mjs';
import { ACCEPTANCE_MARKER, packetAcceptance } from './lib/compile-acceptance.mjs';

const defaultCommand = args => JSON.parse(execFileSync('gh', args, { encoding: 'utf8', timeout: 30_000, maxBuffer: 20 * 1024 * 1024 }));
export async function compileIntake({ repository, command = defaultCommand, now = () => new Date().toISOString(), report = null } = {}) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository ?? '')) throw new Error('Expected owner/repository');
  const api = path => command(['api', `repos/${repository}/${path}`]);
  const pages = path => command(['api', `repos/${repository}/${path}`, '--paginate', '--slurp']).flat();
  const prs = report ? [] : pages('pulls?state=open&base=main&per_page=100');
  if (report && (!Array.isArray(report.acceptances) || !Array.isArray(report.packetPaths) || report.dry !== false || report.ok !== true))
    throw new Error('Expected a successful non-dry compile report with acceptance receipts');
  const references = report ? [...new Set(report.acceptances.map(a => a.pr))] :
    researchIntake(prs).filter(p => p.state === 'active').map(p => p.pr);
  for (const number of references) {
    if (!Number.isSafeInteger(number) || number < 1) throw new Error('Invalid PR number');
    const pr = report ? api(`pulls/${number}`) : prs.find(p => p.number === number);
    pr.proofline_comments = pages(`issues/${number}/comments?per_page=100`)
      .filter(c => c.user?.login?.toLowerCase() === repository.split('/')[0].toLowerCase() && c.body?.includes(ACCEPTANCE_MARKER));
    pr.proofline_checked_at = now();
    if (report) {
      for (const accepted of report.acceptances.filter(a => a.pr === number)) {
        const latest = packetAcceptance(pr, accepted.path, { repository, now: Date.parse(now()) });
        if (!latest.ok || latest.head_sha !== accepted.head_sha || latest.comment_id !== accepted.comment_id)
          throw new Error(`PR #${number} acceptance changed before push: ${latest.reason ?? 'new decision or head'}`);
      }
    }
  }
  if (report && report.packetPaths?.some(path => !report.acceptances.some(a => a.path === path)))
    throw new Error('Compiled packet has no acceptance receipt');
  return prs;
}

export async function main(argv) {
  if (argv.length && (argv.length !== 2 || argv[0] !== '--verify-report'))
    throw new Error('Usage: node scripts/compile-intake.mjs [--verify-report build/compile-report.json]');
  const repository = process.env.REPO ?? 'harsharn10/proofline';
  const report = argv.length ? JSON.parse(await readFile(argv[1], 'utf8')) : null;
  const prs = await compileIntake({ repository, report });
  if (report) console.log(`Revalidated ${report.acceptances.length} packet acceptance receipt(s) against GitHub.`);
  else {
    await mkdir('build', { recursive: true });
    await writeFile('build/open-prs.json', `${JSON.stringify(prs, null, 2)}\n`);
    console.log(`Snapshotted ${prs.length} open PR(s), with controller comments for active intake.`);
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
