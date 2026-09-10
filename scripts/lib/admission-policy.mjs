import { addressKey } from './relationships.mjs';

const DAY = 86_400_000;
export const ADMISSION_POLICY = Object.freeze({ version: 1, evidenceDays: 30, activityDays: 7,
  sustainedDays: 7, discoveryLimit: 10, reassessmentDays: 30 });
const url = value => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };

export function reassessmentSlice(rows, now = Date.now(), limit = ADMISSION_POLICY.discoveryLimit) {
  if (!Number.isInteger(limit) || limit < 1) throw new Error('Positive reassessment limit required');
  const sorted = [...rows].sort((a,b) => a.slug.localeCompare(b.slug));
  const days = Math.max(ADMISSION_POLICY.reassessmentDays, Math.ceil(sorted.length / limit));
  const start = (Math.floor(now / DAY) % days) * limit;
  return sorted.slice(start, start + limit);
}

// An evidence recommendation, never an identity approval, canonical write or publish instruction.
// Provider names are provenance, not votes: duplicated/derived sources confer no extra weight.
export function admissionDecision({ subject, observations = [], duplicate = false, conflict = false, now = Date.now() }) {
  if (conflict) return { decision: 'hold', reason: 'identity conflict; controller review', research: 'none' };
  if (duplicate) return { decision: 'existing', reason: 'match existing or pending identity; update it', research: 'none' };
  const key = addressKey(subject.chain, subject.address);
  const evidence = observations.filter(o => {
    if (!o || typeof o !== 'object') return false;
    const age = now - Date.parse(o.observed_at);
    return o.subject === subject.id && o.chain === subject.chain && url(o.source_url) &&
      Number.isFinite(age) && age >= 0 && age <= ADMISSION_POLICY.evidenceDays * DAY &&
      o.status === 'observed' && (!o.address || key && addressKey(o.chain, o.address) === key);
  });
  const has = kind => evidence.some(o => o.kind === kind);
  const relevant = has('robinhood-relevance');
  const identity = has('identity-crosslink');
  const active = evidence.filter(o => o.kind === 'activity' && Number.isFinite(o.value) && o.value > 0 &&
    (subject.entity_kind !== 'token' || key && addressKey(o.chain, o.address) === key) &&
    now - Date.parse(o.window_end) >= 0 && now - Date.parse(o.window_end) <= ADMISSION_POLICY.activityDays * DAY &&
    Date.parse(o.window_start) < Date.parse(o.window_end) && o.scope === 'own' && o.complete === true);
  const sustained = active.some(o => Date.parse(o.window_end) - Date.parse(o.window_start) >= ADMISSION_POLICY.sustainedDays * DAY);
  const recognized = evidence.some(o => ['fomo-verified', 'coingecko-active'].includes(o.kind) &&
    key && addressKey(o.chain, o.address) === key);
  const mechanism = has('product-mechanism');
  const deployed = has('deployment');
  const dependency = has('dependency-use');
  const token = subject.entity_kind === 'token';
  if (has('out-of-scope') && !relevant) return { decision: 'ignore', reason: 'sourced out-of-scope finding', research: 'none' };
  if (!identity || !relevant) return { decision: 'watch', reason: 'identity or Robinhood relevance not established', research: 'targeted' };
  if (subject.lifecycle === 'inactive') return { decision: 'watch', reason: active.length ?
    'inactive status conflicts with activity; reconcile product versus residual token usage' : 'inactive; retain history and reassess cheaply', research: 'targeted' };
  if (subject.lifecycle !== 'mainnet' || !deployed) return { decision: 'watch', reason: 'product deployment not established; token trading is not launch evidence', research: 'targeted' };
  if (dependency || !token && mechanism) return { decision: 'seed', reason: dependency ? 'documented ecosystem dependency' : 'documented product mechanism',
    research: dependency || sustained ? 'full' : 'targeted' };
  if (token && (recognized || sustained)) return { decision: 'seed', reason: recognized ? 'exact-contract recognition; not a safety endorsement' : 'sustained own activity', research: sustained ? 'full' : 'targeted' };
  return { decision: 'watch', reason: 'insufficient significance evidence; no recurring full research', research: 'targeted' };
}

// Reuse the existing address-matched Rialto pull. Whole-chain/top-symbol tables cannot
// be attributed to a project; partial pool-leg estimates cannot stand in for token totals.
export function rialtoObservations(pulled, subject) {
  const r = pulled?.market?.rialto;
  const key = addressKey(subject.chain, subject.address);
  const end = Date.parse(r?.as_of);
  if (!key || pulled?.chain !== subject.chain ||
      addressKey(pulled.chain, pulled.market?.token_address) !== key ||
      !Number.isFinite(end) || !Number.isFinite(r?.volume_24h_usd) || r.volume_24h_usd < 0 ||
      r.stale_since || pulled.market.stale_since || r.volume_note || !url(r.source_url)) return [];
  return [{ subject: subject.id, chain: subject.chain, address: subject.address, provider: 'rialto',
    source_url: r.source_url, kind: 'activity', metric: 'volume_usd', value: r.volume_24h_usd,
    observed_at: r.as_of, window_start: new Date(end - DAY).toISOString(), window_end: r.as_of,
    scope: 'own', complete: true, status: 'observed' }];
}

// Imported analytics stay source-separated; never sum provider copies of the same activity.
// Dune rows must be a reviewed query's explicit chain/address/window projection, not ticker joins.
export function duneObservations(body, { queryId, subjectByAddress, now = Date.now() }) {
  if (!Number.isSafeInteger(queryId) || queryId <= 0 || body.query_id !== queryId ||
      body.state !== 'QUERY_STATE_COMPLETED' || !body.execution_id || body.next_uri || body.next_offset != null ||
      !Array.isArray(body.result?.rows) || body.result.rows.length > 1000 ||
      !Number.isFinite(Date.parse(body.execution_ended_at)) || Date.parse(body.execution_ended_at) > now ||
      now - Date.parse(body.execution_ended_at) > 30 * DAY ||
      body.expires_at && (!Number.isFinite(Date.parse(body.expires_at)) || Date.parse(body.expires_at) <= now))
    throw new Error('Dune result must be complete, current, unexpired and from the pinned query');
  const seen = new Map();
  const observations = body.result.rows.map(row => {
    const key = addressKey('robinhood-chain', row.address);
    const start = Date.parse(row.window_start), end = Date.parse(row.window_end);
    if (row.chain_id !== 4663 || !key || !Number.isFinite(row.tx_count) || row.tx_count < 0 ||
        !Number.isInteger(row.tx_count) || !(start < end) || end > Date.parse(body.execution_ended_at) ||
        row.scope !== 'own' || row.complete !== true)
      throw new Error('Dune row needs chain 4663, exact address, complete own-activity window and integer tx_count');
    const window = `${key}:${start}:${end}`;
    if (seen.has(window) && seen.get(window) !== row.tx_count) throw new Error('Conflicting Dune rows for the same activity window');
    seen.set(window, row.tx_count);
    return { subject: subjectByAddress.get(key) ?? key, chain: 'robinhood-chain', address: row.address,
      kind: 'activity', provider: 'dune', source_url: `https://dune.com/queries/${queryId}`,
      execution_id: body.execution_id, observed_at: body.execution_ended_at,
      window_start: row.window_start, window_end: row.window_end, scope: 'own', complete: true,
      value: row.tx_count, metric: 'tx_count', status: 'observed' };
  });
  return [...new Map(observations.map(o => [`${addressKey(o.chain,o.address)}:${Date.parse(o.window_start)}:${Date.parse(o.window_end)}`,o])).values()];
}
