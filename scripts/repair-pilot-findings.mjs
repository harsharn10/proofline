// Issue #160: recover only findings introduced by the accepted three-name pilot, not a broad replay.
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { parse, parseDocument } from 'yaml';
import { compile, parsePacket } from './lib/packet.mjs';
import { validateAgainst } from './lib/schemas.mjs';

const ACCEPTED = 'a43709965b5c5ec15322ac86afd55e0b76e4f6e3';
const BEFORE = '6d03a8bcc2d80ade074e883e6a2244be2ae3ca80';
const SLUGS = ['agent-name-service', 'circus', 'delta'];
const git = args => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
const at = (sha, path) => git(['show', `${sha}:${path}`]);

export function planFindingsRepair(accepted, current, findings) {
  const withoutFindings = ({ findings: _findings, ...rest }) => rest;
  if (!isDeepStrictEqual(withoutFindings(accepted), withoutFindings(current)))
    throw new Error(`${current.slug}: project changed since the accepted pilot; review before recovery`);
  if (!isDeepStrictEqual(current.findings, accepted.findings) && !isDeepStrictEqual(current.findings, findings))
    throw new Error(`${current.slug}: findings drifted; do not overwrite later research or editorial corrections`);
  const next = { ...current, findings };
  const errors = validateAgainst('project', next);
  if (errors.length) throw new Error(errors.join('\n'));
  return next;
}

export async function repairPilotFindings({ root = '.', write = false } = {}) {
  git(['merge-base', '--is-ancestor', ACCEPTED, 'origin/main']);
  const census = parse(at(BEFORE, 'content/census.yaml'));
  const changes = [];
  // Complete every guard before writing any file. Dates, packets, source ledgers and approvals stay put.
  for (const slug of SLUGS) {
    const packetPath = `research/inbox/packets/${slug}/WORK-20260910-grok-heavy-${slug}.md`;
    const acceptedPacket = at(ACCEPTED, packetPath);
    if (await readFile(resolve(root, packetPath), 'utf8') !== acceptedPacket)
      throw new Error(`${slug}: accepted packet changed; recovery is not a new research run`);
    const packet = parsePacket(acceptedPacket);
    const projectPath = `content/projects/${slug}.yaml`;
    const prior = parse(at(BEFORE, projectPath));
    const sourcesPath = `content/sources/${slug}.yaml`;
    const sources = parse(await readFile(resolve(root, sourcesPath), 'utf8'));
    const result = compile(packet, prior, census.find(row => row.slug === slug),
      parse(at(BEFORE, sourcesPath)), parse(at(BEFORE, `content/feed/${slug}.yaml`)), {
        census,
        pulled: parse(at(BEFORE, `content/pulled/${slug}.yaml`)),
        priorResearch: at(BEFORE, `content/research/${slug}.md`),
      });
    const ids = new Set(['positive', 'risk'].flatMap(key => result.project.findings[key].flatMap(row => row.sources ?? [])));
    for (const id of ids) {
      const expected = result.sources.sources.find(row => row.id === id);
      const actual = sources.sources.find(row => row.id === id);
      if (!expected || !actual || !isDeepStrictEqual(expected, actual))
        throw new Error(`${slug}: source ${id} changed; review receipt mapping before recovery`);
    }
    const path = resolve(root, projectPath);
    const raw = await readFile(path, 'utf8');
    const current = parse(raw);
    const next = planFindingsRepair(parse(at(ACCEPTED, projectPath)), current, result.project.findings);
    if (isDeepStrictEqual(next, current)) continue;
    const doc = parseDocument(raw);
    doc.set('findings', next.findings);
    const text = doc.toString({ lineWidth: 0 });
    if (!isDeepStrictEqual(parse(text), next)) throw new Error(`${slug}: non-findings serialization change`);
    changes.push({ slug, path, text, before: current.findings, after: next.findings });
  }
  if (write) for (const { path, text } of changes) await writeFile(path, text);
  return { accepted: ACCEPTED, before: BEFORE, write, files: changes.length,
    changes: changes.map(({ slug, before, after }) => ({ slug, before, after })) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  if (args.length !== 1 || !['--check', '--write'].includes(args[0])) throw new Error('Use --check or authorized --write');
  console.log(JSON.stringify(await repairPilotFindings({ write: args[0] === '--write' }), null, 2));
}
