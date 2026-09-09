// Derived from canonical projects/dependencies. Never infer common ownership or a common team.
export function addressKey(chain, address) {
  if (typeof chain !== "string" || typeof address !== "string" || address === "not-verified") return null;
  if (/^0x[0-9a-fA-F]{40}$/.test(address)) return `${chain}:${address.toLowerCase()}`;
  if (chain === "solana" && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) return `${chain}:${address}`;
  return null;
}

// Market observations can identify a pool by its contract address OR a 32-byte pool ID
// (e.g. Uniswap v4). This namespace is not deployment identity: a pool ID is not a token,
// contract, wallet or evidence of common ownership. Solana identifiers remain case-sensitive.
export function poolKey(chain, id) {
  const address = addressKey(chain, id);
  if (address) return `pool:${address}`;
  if (typeof chain === 'string' && chain.length > 0 && chain !== 'solana' &&
      typeof id === 'string' && /^0x[0-9a-fA-F]{64}$/.test(id)) return `pool:${chain}:${id.toLowerCase()}`;
  return null;
}

export function buildRelationships(projects = [], dependencies = []) {
  const nodes = new Map();
  const links = new Map();
  const projectNames = Object.fromEntries(projects.map(p => [p.slug, p.name]));
  for (const project of projects) {
    for (const deployment of project.deployments ?? []) {
      const id = addressKey(deployment.chain, deployment.address);
      if (!id) continue;
      if (!nodes.has(id)) nodes.set(id, { id, chain: deployment.chain,
        address: id.slice(deployment.chain.length + 1), projects: [], dependencies: [] });
      const node = nodes.get(id);
      let edge = node.projects.find(p => p.slug === project.slug);
      if (!edge) { edge = { slug: project.slug, roles: [], verified: false, sources: [] }; node.projects.push(edge); }
      edge.roles = [...new Set([...edge.roles, deployment.role ?? "other"])].sort();
      edge.verified ||= deployment.verified === true;
      edge.sources = [...new Set([...edge.sources, ...(deployment.sources ?? [])])].sort();
    }
    for (const dependency of new Set(project.dependencies ?? [])) {
      if (!links.has(dependency)) links.set(dependency, []);
      links.get(dependency).push(project.slug);
    }
  }
  for (const dependency of dependencies) for (const deployment of dependency.deployments ?? []) {
    const id = addressKey(deployment.chain, deployment.address);
    if (!id) continue;
    if (!nodes.has(id)) nodes.set(id, { id, chain: deployment.chain,
      address: id.slice(deployment.chain.length + 1), projects: [], dependencies: [] });
    nodes.get(id).dependencies.push(dependency.id);
  }
  const addresses = [...nodes.values()].sort((a, b) => a.id.localeCompare(b.id)).map(node => ({
    ...node, projects: node.projects.sort((a,b) => a.slug.localeCompare(b.slug)),
    dependencies: [...new Set(node.dependencies)].sort(),
    // A shared token is an identity question. Shared factories/implementations are infrastructure.
    identityConflict: node.projects.filter(p => p.roles.includes("token")).length > 1,
  }));
  return { version: 1, projectNames, addresses,
    dependencies: [...links].sort(([a], [b]) => a.localeCompare(b)).map(([id, slugs]) => ({
      id, name: dependencies.find(d => d.id === id)?.name ?? id, projects: [...new Set(slugs)].sort(),
    })) };
}

export function relationshipIndex(graph) {
  return new Map(graph.addresses.map(node => [node.id, node]));
}

// The human Connections page only displays shared edges. Keep the complete graph in the
// machine-readable registry, without shipping hundreds of unused private-to-one-project nodes.
export function sharedRelationships(graph) {
  const addresses = graph.addresses.filter(node => node.projects.length > 1);
  const dependencies = graph.dependencies.filter(node => node.projects.length > 1);
  const slugs = new Set([...addresses.flatMap(node => node.projects.map(p => p.slug)),
    ...dependencies.flatMap(node => node.projects)]);
  return { ...graph, totalAddresses: graph.addresses.length, addresses, dependencies,
    projectNames: Object.fromEntries(Object.entries(graph.projectNames).filter(([slug]) => slugs.has(slug))) };
}

// Only activity belonging to this project's token or unshared deployment can keep it alive.
// Activity at a factory used by fifty projects says nothing about the other forty-nine tokens.
export function ownActivityAt(project, pulled, index, now = Date.now()) {
  const own = new Set((project.deployments ?? []).filter(d => {
    const node = index.get(addressKey(d.chain, d.address));
    return node && (d.role === "token" && !node.identityConflict || node.projects.length === 1);
  }).map(d => addressKey(d.chain, d.address)));
  const times = (pulled?.activity?.addresses ?? [])
    .filter(a => own.has(addressKey(pulled.chain, a.address)))
    .map(a => a.last_tx_at).filter(at => Number.isFinite(Date.parse(at)) && Date.parse(at) <= now);
  if ((pulled?.market?.trades_h24 ?? 0) > 0 &&
      (project.deployments ?? []).some(d => d.chain === pulled.chain && d.role === "token" && own.has(addressKey(d.chain, d.address)))) {
    const at = pulled.market.pulled_at ?? pulled.pulled_at;
    if (Number.isFinite(Date.parse(at)) && Date.parse(at) <= now) times.push(at);
  }
  return times.sort((a,b) => Date.parse(a) - Date.parse(b)).at(-1) ?? null;
}

// A total is known only when all contributing observations are known. Preserve measured zero.
export function knownTotal(values) {
  if (!values.length || !values.every(value => Number.isFinite(value) && value >= 0)) return null;
  const total = values.reduce((sum, value) => sum + value, 0);
  return Number.isFinite(total) ? total : null;
}

// Fresh unique factory observations only. Missing/capped windows remain explicitly partial.
export function uniqueLaunches(pulledFiles, now = Date.now()) {
  const latest = new Map();
  for (const file of pulledFiles) for (const row of file?.activity?.addresses ?? []) {
    if (row.role !== "factory") continue;
    const key = addressKey(file.chain, row.address);
    if (!key) continue;
    const at = row.window_as_of ?? file.activity.window_as_of ?? file.activity.pulled_at;
    // Null is an explicit fresh marker; only an absent legacy field inherits aggregate state.
    const candidate = { row, at, stale: Object.hasOwn(row, 'stale_since') ? row.stale_since : file.activity.stale_since, conflict: false };
    const old = latest.get(key);
    if (!old || Number.isFinite(Date.parse(at)) && (!Number.isFinite(Date.parse(old.at)) || Date.parse(at) > Date.parse(old.at))) latest.set(key, candidate);
    else if (Date.parse(at) === Date.parse(old.at)) {
      // A run-wide timestamp cannot choose between conflicting independently sampled copies.
      old.conflict ||= row.launches_24h !== old.row.launches_24h || Boolean(candidate.stale) !== Boolean(old.stale);
      if ((row.errors ?? []).length) old.partial = true;
    }
  }
  let total = 0, fresh = 0, partial = false;
  for (const {row, at, stale, conflict, partial: duplicatePartial} of latest.values()) {
    const age = now - Date.parse(at);
    if (conflict || stale || !Number.isFinite(age) || age < 0 || age > 36 * 3600_000 || !Number.isFinite(row.launches_24h) || row.launches_24h < 0) {
      partial = true; continue;
    }
    fresh++; total += row.launches_24h;
    if (duplicatePartial || (row.errors ?? []).length) partial = true;
  }
  return { value: fresh ? total : null, partial, factories: latest.size, freshFactories: fresh };
}

export function uniqueVolume(pulledFiles, now = Date.now()) {
  return uniqueVolumeSummary(pulledFiles, now).value;
}

export function uniqueVolumeSummary(pulledFiles, now = Date.now()) {
  const pairs = new Map();
  let partial = false;
  for (const file of pulledFiles) {
    const at = Date.parse(file?.market?.pulled_at ?? "");
    if (!file?.market) { partial = true; continue; }
    for (const pair of file.market.pairs ?? []) {
      const key = poolKey(file.chain, pair.pair_address);
      if (!key) { partial = true; continue; }
      if (!pairs.has(key) || Number.isFinite(at) && (!Number.isFinite(pairs.get(key).at) || pairs.get(key).at < at)) pairs.set(key, { at, value: pair.volume_h24, conflict: false });
      else if (pairs.get(key).at === at && pairs.get(key).value !== pair.volume_h24) pairs.get(key).conflict = true;
    }
  }
  const fresh = [...pairs].sort(([a],[b]) => a.localeCompare(b)).map(([,pair]) => pair).filter(pair => {
    const valid = Number.isFinite(pair.at) && now >= pair.at && now - pair.at <= 36 * 3600_000 &&
      Number.isFinite(pair.value) && pair.value >= 0 && !pair.conflict;
    if (!valid) partial = true;
    return valid;
  });
  // Preserve scalar compatibility: an unresolved current conflict withholds the total.
  const conflict = [...pairs.values()].some(pair => pair.conflict && now >= pair.at && now - pair.at <= 36 * 3600_000);
  return { value: conflict ? null : knownTotal(fresh.map(pair => pair.value)), partial,
    pools: pairs.size, freshPools: fresh.length };
}
