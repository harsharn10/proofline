// Read-only storage inventory, NOT a resolver, migration or provider-cost estimate.
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import YAML from 'yaml';
import { addressKey } from './lib/relationships.mjs';

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]));
  return value;
}
const serialize = value => JSON.stringify(canonical(value));
const digest = text => createHash('sha256').update(text).digest('hex');
const without = (row, keys) => Object.fromEntries(Object.entries(row).filter(([key]) => !keys.includes(key)));
const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) ? new Date(value).toISOString() : null;

// Accept stored pool-ID shapes for inventory only; never widen deployment identity.
function inventoryKey(kind, chain, id) {
  const address = addressKey(chain, id);
  if (address) return address;
  if (kind === 'market-pair' && typeof chain === 'string' && chain.length && chain !== 'solana' &&
      typeof id === 'string' && /^0x[0-9a-fA-F]{64}$/.test(id)) return `${chain}:${id.toLowerCase()}`;
  return null;
}

export function auditObservations(documents) {
  const groups = new Map(), identities = new Map();
  const counts = Object.fromEntries(['address', 'activity', 'market-pair'].map(kind => [kind, {
    rows: 0, invalid_identity_rows: 0, missing_measurement_time_rows: 0,
    identities: 0, shared_identities: 0, comparison_groups: 0,
    dated_disagreement_groups: 0, undated_variant_groups: 0,
    repeated_payload_rows: 0, repeated_payload_bytes: 0,
  }]));
  function add(file, kind, row, at, context, payload, reference) {
    const stats = counts[kind]; stats.rows++;
    if (!at) stats.missing_measurement_time_rows++;
    const key = inventoryKey(kind, file.chain, row.address ?? row.pair_address);
    if (!key) { stats.invalid_identity_rows++; return; }
    const identity = `${kind}:${key}`;
    if (!identities.has(identity)) identities.set(identity, { kind, slugs: new Set() });
    identities.get(identity).slugs.add(file.slug);
    const groupKey = serialize({ kind, key, at, context });
    if (!groups.has(groupKey)) groups.set(groupKey, { kind, key, at, context, variants: new Map() });
    const group = groups.get(groupKey);
    const text = serialize(payload);
    if (!group.variants.has(text)) group.variants.set(text, { hash: digest(text), bytes: Buffer.byteLength(text), references: [] });
    group.variants.get(text).references.push({ slug: file.slug, ...reference });
  }
  for (const file of documents) {
    if (!file || typeof file.slug !== 'string') throw new Error('Observation document requires a slug.');
    for (const row of file.addresses ?? []) add(file, 'address', row, null, {},
      without(row, ['address', 'label', 'role']), { label: row.label ?? null, role: row.role ?? null });
    for (const row of file.activity?.addresses ?? []) {
      const rawAt = row.window_as_of ?? file.activity.window_as_of ?? file.activity.pulled_at ?? null;
      const stale = Object.hasOwn(row, 'stale_since') ? row.stale_since : file.activity.stale_since ?? null;
      add(file, 'activity', row, validDate(rawAt), {}, {
        ...without(row, ['address', 'label', 'role', 'window_as_of', 'stale_since']),
        window_as_of: rawAt, stale_since: stale,
      }, { label: row.label ?? null, role: row.role ?? null });
    }
    for (const row of file.market?.pairs ?? []) add(file, 'market-pair', row, validDate(file.market.pulled_at),
      // Market cap, price and quote denomination may differ across token perspectives.
      { token: addressKey(file.chain, file.market.token_address) ?? file.market.token_address ?? null },
      { ...without(row, ['pair_address']), pulled_at: file.market.pulled_at ?? null }, {});
  }
  for (const { kind, slugs } of identities.values()) {
    counts[kind].identities++;
    if (slugs.size > 1) counts[kind].shared_identities++;
  }
  const comparisons = [...groups.values()].map(group => {
    const stats = counts[group.kind]; stats.comparison_groups++;
    if (group.variants.size > 1) stats[group.at ? 'dated_disagreement_groups' : 'undated_variant_groups']++;
    const variants = [...group.variants.values()].sort((a,b) => a.hash.localeCompare(b.hash)).map(variant => {
      stats.repeated_payload_rows += variant.references.length - 1;
      stats.repeated_payload_bytes += (variant.references.length - 1) * variant.bytes;
      return { ...variant, references: variant.references.sort((a,b) => serialize(a).localeCompare(serialize(b))) };
    });
    return { kind: group.kind, key: group.key, at: group.at, context: group.context, variants };
  }).filter(group => group.variants.length > 1 || group.variants.some(variant => variant.references.length > 1))
    .sort((a,b) => serialize([a.kind,a.key,a.at,a.context]).localeCompare(serialize([b.kind,b.key,b.at,b.context])));
  return { version: 1, counts, comparisons, limits: [
    'Repeated bytes count canonical JSON payloads, not compressed storage or API savings.',
    'Address facts have no uniform field-level measured-at; file pulled_at is not substituted.',
    'Provider identity is not uniformly stored per row; equal payloads are candidates, not authority.',
    'Different dates/token perspectives remain separate. Same-date variants are not resolved.',
    'This inventory does not rewrite source files, infer ownership or declare any value current.',
  ] };
}

export async function readObservationAudit(root = 'content/pulled') {
  const names = (await readdir(root)).filter(name => name.endsWith('.yaml')).sort();
  const documents = [];
  for (const name of names) {
    const file = YAML.parse(await readFile(join(root, name), 'utf8'));
    if (file?.slug) documents.push(file); // chain-wide series is outside per-project scope
  }
  return auditObservations(documents);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  if (process.argv.length > 2) throw new Error('Usage: node scripts/audit-observations.mjs (read-only, JSON to stdout)');
  console.log(JSON.stringify(await readObservationAudit(), null, 2));
}
