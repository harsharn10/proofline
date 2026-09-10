import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { admissionDecision, duneObservations, rialtoObservations, ADMISSION_POLICY } from './lib/admission-policy.mjs';
import { addressKey } from './lib/relationships.mjs';

// Offline, explicit input. No API calls, query execution, credentials or canonical mutations.
export async function admissionPlan(input, dune = null) {
  if (!Array.isArray(input.subjects) || !Array.isArray(input.observations) ||
      !Array.isArray(input.existing_addresses) || !Array.isArray(input.pending_addresses) ||
      input.rialto_pulled !== undefined && !Array.isArray(input.rialto_pulled))
    throw new Error('Need subjects, observations, existing_addresses and fresh pending_addresses snapshot');
  const now = Date.now();
  const checked = Date.parse(input.pending_checked_at);
  if (!Number.isFinite(checked) || checked > now || now - checked > 86400_000)
    throw new Error('Pending identity snapshot must be checked within 24 hours');
  const ids = new Set();
  const byAddress = new Map();
  for (const s of input.subjects) {
    if (!s || typeof s.id !== 'string' || !s.id || ids.has(s.id) || s.chain !== 'robinhood-chain' ||
        !['mainnet','announced','inactive','testnet','unknown'].includes(s.lifecycle) ||
        !['token','protocol','application','infrastructure','tool','collection','unknown'].includes(s.entity_kind))
      throw new Error('Subjects need unique IDs and explicit robinhood-chain scope');
    ids.add(s.id);
    const key = addressKey(s.chain, s.address);
    if (key) byAddress.set(key, byAddress.has(key) ? null : s.id);
  }
  const observations = [...input.observations, ...input.subjects.flatMap(subject =>
    (input.rialto_pulled ?? []).flatMap(pulled => rialtoObservations(pulled, subject))), ...(dune ? duneObservations(dune, {
    queryId: input.dune_query_id, subjectByAddress: byAddress, now }) : [])];
  const known = new Set([...input.existing_addresses, ...input.pending_addresses].map(row => {
    const key = addressKey(row.chain, row.address);
    if (!key) throw new Error('Existing/pending address snapshot contains invalid identity');
    return key;
  }));
  const results = input.subjects.map(subject => {
    const key = addressKey(subject.chain, subject.address);
    return { id: subject.id, ...admissionDecision({ subject, observations,
      duplicate: Boolean(key && known.has(key) || subject.existing_match === true),
      conflict: subject.identity_status === 'conflicted' || Boolean(key && byAddress.get(key) === null), now }) };
  });
  return { version: 1, generated_at: new Date(now).toISOString(), policy: ADMISSION_POLICY,
    recommendations_only: true, results, selected_seeds: results.filter(r => r.decision === 'seed').slice(0, ADMISSION_POLICY.discoveryLimit).map(r => r.id),
    instructions: 'Controller verifies receipts, domain/handle matches and pending submissions. No auto-admission, refresh promotion or publication.' };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [inputPath, dunePath, ...extra] = process.argv.slice(2);
  if (!inputPath || extra.length) throw new Error('Usage: node scripts/admission-plan.mjs input.yaml [dune-results.json]');
  console.log(JSON.stringify(await admissionPlan(parse(await readFile(inputPath, 'utf8')),
    dunePath ? JSON.parse(await readFile(dunePath, 'utf8')) : null), null, 2));
}
