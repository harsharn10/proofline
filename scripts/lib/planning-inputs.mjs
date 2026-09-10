import { addressKey } from './relationships.mjs';

export const TASK_STATE_MARKER = '<!-- proofline:task-state:v1 -->';
const statuses = new Set(['claimed', 'blocked', 'no-change', 'complete', 'released']);
export function validateTaskStates(tasks) {
  if (!tasks || typeof tasks !== 'object' || Array.isArray(tasks)) throw new Error('Task manifest needs a tasks map');
  for (const [id, row] of Object.entries(tasks)) {
    if (!/^[a-f0-9]{20}$/.test(id) || !row || !statuses.has(row.status) ||
        typeof row.owner !== 'string' || !row.owner || !/^[a-z0-9-]+$/.test(row.slug ?? ''))
      throw new Error(`Invalid task state: ${id}`);
  }
  return tasks;
}

export function taskStateFromComments(comments, { controller, checkedAt, now = Date.now() }) {
  const age = now - Date.parse(checkedAt);
  if (!controller || !Array.isArray(comments) || !Number.isFinite(age) || age < 0 || age > 86400_000)
    throw new Error('Need a controller and fresh complete issue-comment snapshot');
  const manifests = comments.filter(c => c.user?.login === controller && c.body?.includes(TASK_STATE_MARKER))
    .sort((a,b) => a.id - b.id);
  if (!manifests.length) throw new Error('No controller task-state manifest; do not assume no claims');
  let previous = {};
  for (const comment of manifests) {
    if (!Number.isSafeInteger(comment.id) || !Number.isFinite(Date.parse(comment.updated_at)) || Date.parse(comment.updated_at) > Date.parse(checkedAt))
      throw new Error('Invalid or concurrently changed task-state comment');
    const chunks = comment.body.split(TASK_STATE_MARKER);
    const match = chunks[1]?.match(/^\s*```json\s*\n([\s\S]*?)\n```/);
    if (chunks.length !== 2 || !match) throw new Error('Malformed controller task-state manifest');
    const parsed = JSON.parse(match[1]);
    if (parsed.version !== 1) throw new Error('Unknown task-state version');
    const tasks = validateTaskStates(parsed.tasks);
    if (Object.keys(previous).some(id => !Object.hasOwn(tasks, id)))
      throw new Error('Task disappeared from manifest; retain it with an explicit disposition');
    previous = tasks;
  }
  const latest = manifests.at(-1);
  return { version: 1, checked_at: checkedAt, controller, comment_id: latest.id,
    source_url: latest.html_url, tasks: previous };
}

export function taskSnapshotState(snapshot, now = Date.now()) {
  const age = now - Date.parse(snapshot?.checked_at);
  if (snapshot?.version !== 1 || !Number.isFinite(age) || age < 0 || age > 86400_000 || !snapshot.comment_id)
    throw new Error('Task-state snapshot is missing provenance or older than 24 hours; export it again');
  return validateTaskStates(snapshot.tasks);
}

// Discovery is a lead, not a verified identity. Legacy aggregate timestamps cannot date
// individual metrics, so preserve the raw hints without inventing qualifying observations.
export function discoveryInput({ discovery, projects, dependencies = [], pending, checkedAt }) {
  if (!Array.isArray(discovery?.candidates) || !Array.isArray(projects) || !Array.isArray(pending))
    throw new Error('Need discovery, canonical projects and checked pending packets');
  const addresses = rows => [...new Map(rows.flatMap(p => (p.deployments ?? []).flatMap(d => {
    const chain = d.address?.chain ?? d.chain;
    const address = d.address?.value ?? d.address;
    const key = addressKey(chain, address);
    return key ? [[key, {chain, address}]] : [];
  }))).values()];
  const seen = new Set();
  const subjects = discovery.candidates.map(candidate => {
    const key = addressKey('robinhood-chain', candidate.address);
    if (!key || seen.has(key)) throw new Error('Invalid or duplicate discovery address; reconcile before admission');
    seen.add(key);
    return { id: `discovery-${key.split(':')[1]}`, chain: 'robinhood-chain', address: candidate.address,
      entity_kind: 'unknown', lifecycle: 'unknown', identity_status: 'provisional',
      lead: { name: candidate.name, symbol: candidate.symbol, first_seen: candidate.first_seen,
        source_urls: candidate.source_urls, discovery_file_checked_at: discovery.pulled_at,
        measurement_time_unknown: true, reported_volume_usd: candidate.rialto_volume_24h_usd,
        reported_liquidity_usd: candidate.dexscreener_liquidity_usd } };
  });
  return { pending_checked_at: checkedAt, existing_addresses: addresses([...projects, ...dependencies]),
    pending_addresses: addresses(pending), subjects, observations: [] };
}
