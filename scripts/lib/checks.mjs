import { FULL_WEIGHT_CONFIDENCE, UNAPPROVED_APPROVERS } from "./score.mjs";
import { leafLabel } from "./taxonomy.mjs";

/** Approver values that mean "nobody yet" but are not the literal `pending` the cap keys on. */
export const PLACEHOLDER_APPROVERS = new Set([...UNAPPROVED_APPROVERS].filter((value) => value !== "pending"));
/** Census fields that are duplicated in the project file and must agree. */
const MIRRORED_FIELDS = ["name", "category", "lifecycle", "coverage"];

function normalizeIdentity(value) {
  return String(value ?? "").normalize("NFKC").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/**
 * Normalizes a URL for the "is this the official link" comparison (pipeline audit 2026-09-01 §7): lowercase
 * host, no `www.`, no trailing slash. An unparseable URL is returned trimmed so it still compares equal to
 * itself without throwing.
 */
export function normalizeUrl(raw) {
  try {
    const u = new URL(raw);
    const host = u.hostname.toLowerCase().replace(/^www\./, "");
    const path = u.pathname.replace(/\/+$/, "");
    return `${host}${path}${u.search}`;
  } catch { return String(raw ?? "").trim(); }
}

/** Collect every S-id referenced anywhere inside a project object. */
export function referencedSourceIds(project) {
  const ids = new Set();
  const walk = (node, key) => {
    if (Array.isArray(node)) { if (key === "sources" || key === "evidence") node.forEach((x) => typeof x === "string" && ids.add(x)); node.forEach((x) => walk(x, key)); }
    else if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) walk(v, k);
  };
  walk(project, null);
  return ids;
}

export function crossCheck(content) {
  const errors = [], warnings = [];
  const censusSlugs = new Set();
  for (const row of content.census) {
    if (censusSlugs.has(row.slug)) errors.push(`census.yaml: duplicate slug ${row.slug}`);
    censusSlugs.add(row.slug);
    // The flat category is derived from the tree leaf (schema/taxonomy.json). A row whose category
    // disagrees with its leaf is the defect the 2026-09-01 review found on 10 rows; never let it back in.
    const want = leafLabel(row.tree?.primary);
    if (!want) errors.push(`census.yaml: ${row.slug}: tree.primary ${row.tree?.primary} is not a leaf in schema/taxonomy.json`);
    else if (row.category !== want) errors.push(`census.yaml: ${row.slug}: category "${row.category}" must equal the leaf label "${want}" (run scripts/migrations/derive-category-from-leaf.mjs)`);
  }
  const changelogSlugs = new Set(content.changelog.map((e) => e.slug));

  // Census is the canonical identity registry. Names and aliases may not normalize to two slugs;
  // a ticker is deliberately excluded because tickers are not unique identifiers.
  const identityNames = new Map();
  const censusHandles = new Map();
  for (const row of content.census) {
    for (const value of [row.name, ...(row.identity?.aliases ?? [])]) {
      const normalized = normalizeIdentity(value);
      const prior = identityNames.get(normalized);
      if (prior && prior !== row.slug)
        errors.push(`census identity "${value}" on ${row.slug} collides with canonical slug ${prior}`);
      else if (normalized) identityNames.set(normalized, row.slug);
    }
    if (row.handle) {
      const handle = row.handle.toLowerCase();
      const prior = censusHandles.get(handle);
      if (prior && prior !== row.slug)
        warnings.push(`census handle ${row.handle} is shared by ${prior} and ${row.slug} — confirm they are distinct names`);
      else censusHandles.set(handle, row.slug);
    }
  }

  // 1:1:1:1 — census ⇔ projects ⇔ sources ⇔ research; every census slug has history
  for (const slug of censusSlugs) {
    for (const [kind, map] of [["projects", content.projects], ["sources", content.sources], ["research", content.research]])
      if (!map.has(slug)) errors.push(`census slug "${slug}" has no ${kind}/${slug} file`);
    if (!changelogSlugs.has(slug)) errors.push(`census slug "${slug}" has no changelog.yaml entry`);
  }
  for (const [kind, map] of [["projects", content.projects], ["sources", content.sources], ["research", content.research]])
    for (const slug of map.keys()) if (!censusSlugs.has(slug)) errors.push(`${kind}/${slug} is not in census.yaml`);

  for (const [slug, project] of content.projects) {
    if (project.slug !== slug) errors.push(`projects/${slug}: slug field is "${project.slug}"`);
    const census = content.census.find((c) => c.slug === slug);
    if (census) for (const f of MIRRORED_FIELDS) if (census[f] !== project[f]) errors.push(`projects/${slug}: ${f} "${project[f]}" ≠ census "${census[f]}"`);
    if (census && project.symbol && !census.identity?.symbols?.includes(project.symbol))
      errors.push(`census ${slug}: identity.symbols does not include project symbol ${project.symbol}`);

    const { researcher, approver } = project.review ?? {};
    if (approver !== undefined && approver === researcher) errors.push(`projects/${slug}: approver must be a different person from researcher`);
    if (PLACEHOLDER_APPROVERS.has(approver)) errors.push(`projects/${slug}: approver "${approver}" is a placeholder — use the literal pending until a second person approves`);

    const metricKinds = new Set();
    for (const metric of project.metrics ?? []) {
      if (metricKinds.has(metric.kind)) errors.push(`projects/${slug}: duplicate metric kind ${metric.kind}`);
      metricKinds.add(metric.kind);
    }

    const ledger = content.sources.get(slug);
    const ledgerIds = new Set((ledger?.sources ?? []).map((s) => s.id));
    if (ledger && ledger.slug !== slug) errors.push(`sources/${slug}: slug field is "${ledger.slug}"`);
    const seen = new Set();
    for (const s of ledger?.sources ?? []) { if (seen.has(s.id)) errors.push(`sources/${slug}: duplicate id ${s.id}`); seen.add(s.id); }
    for (const id of referencedSourceIds(project)) if (!ledgerIds.has(id)) errors.push(`projects/${slug}: references ${id} which is not in sources/${slug}.yaml`);

    for (const dep of project.dependencies ?? []) if (!content.dependencies.has(dep)) errors.push(`projects/${slug}: dependency "${dep}" has no dependencies/${dep}.yaml`);
  }

  for (const [id, dep] of content.dependencies) {
    if (dep.id !== id) errors.push(`dependencies/${id}: id field is "${dep.id}"`);
    const cardIds = new Set((dep.sources ?? []).map((s) => s.id));
    for (const list of ["controls", "failure_modes"])
      (dep[list] ?? []).forEach((item, i) => {
        for (const sid of item.sources ?? []) if (!cardIds.has(sid)) errors.push(`dependencies/${id}: ${list}[${i}] references ${sid} which is not in its own sources`);
      });
  }
  for (const [i, e] of content.changelog.entries()) if (!censusSlugs.has(e.slug)) errors.push(`changelog[${i}]: slug "${e.slug}" is not in census.yaml`);
  for (const [slug, entries] of content.changelogBySlug ?? new Map())
    for (const [i, entry] of entries.entries())
      if (entry.slug !== slug) errors.push(`changelog/${slug}.yaml[${i}]: slug field is "${entry.slug}"`);

  // Account handles are unique, compared case-insensitively (X handles are). A duplicate row would otherwise
  // resolve silently — last wins in build-accounts, first wins in countsForTrending.
  const seenHandles = new Map();
  for (const a of content.accounts ?? []) {
    const key = String(a.handle ?? "").toLowerCase();
    if (seenHandles.has(key)) errors.push(`accounts.yaml: duplicate handle ${a.handle} (also listed as ${seenHandles.get(key)}; handles are case-insensitive)`);
    else seenHandles.set(key, a.handle);
  }

  // Feed files are optional per slug (§ Task 2): every slug that has one must be in the census, and every
  // source id a feed item cites must exist in that slug's own ledger.
  for (const [slug, feedFile] of content.feed ?? new Map()) {
    if (!censusSlugs.has(slug)) errors.push(`feed/${slug} is not in census.yaml`);
    if (feedFile.slug !== slug) errors.push(`feed/${slug}: slug field is "${feedFile.slug}"`);
    const ledgerIds = new Set((content.sources.get(slug)?.sources ?? []).map((s) => s.id));
    const itemIds = new Set();
    for (const item of feedFile.items ?? []) {
      if (itemIds.has(item.id)) errors.push(`feed/${slug}: duplicate item id ${item.id}`);
      itemIds.add(item.id);
      for (const id of item.sources ?? [])
        if (!ledgerIds.has(id)) errors.push(`feed/${slug}: item ${item.id} references ${id} which is not in sources/${slug}.yaml`);
    }
  }

  // Re-use of a product deployment across canonical names is never silently merged. Shared admins,
  // multisigs and infrastructure are expected, but token/factory/router/vault collisions need eyes.
  const deploymentOwners = new Map();
  for (const [slug, project] of content.projects) {
    for (const deployment of project.deployments ?? []) {
      if (deployment.address === "not-verified" || ["admin", "multisig", "timelock", "implementation"].includes(deployment.role)) continue;
      const key = `${deployment.chain}:${deployment.address.toLowerCase()}`;
      const prior = deploymentOwners.get(key);
      if (prior && prior.slug !== slug)
        warnings.push(`deployment ${deployment.address} (${deployment.chain}) appears on ${prior.slug} and ${slug}; resolve identity before merging either record`);
      else deploymentOwners.set(key, { slug, role: deployment.role });
    }
  }

  return { errors, warnings };
}

/** Extra gates before public launch (spec §7.5). derivedBySlug: Map<slug, Derived> from score.mjs. */
export function releaseCheck(content, derivedBySlug) {
  const errors = [];
  if (content.site.corrections.destination === "TODO") errors.push("site.yaml: corrections.destination is still TODO");
  if (content.site.maintainer.id === "TODO") errors.push("site.yaml: maintainer.id is still TODO");
  if (content.site.chain?.checked == null) errors.push("site.yaml: chain.checked is null — set it to the date the chain facts were reproduced against docs.robinhood.com");
  for (const [slug, project] of content.projects) {
    if (project.coverage !== "full") continue;
    for (const a of project.deployments ?? []) if (!a.verified) errors.push(`projects/${slug}: deployment "${a.label}" is not verified on a full profile`);
    const d = derivedBySlug?.get(slug);
    if (UNAPPROVED_APPROVERS.has(project.review?.approver) && d && d.uncappedConfidence >= FULL_WEIGHT_CONFIDENCE)
      errors.push(`projects/${slug}: approver ${project.review?.approver} but uncapped confidence ${d.uncappedConfidence} ≥ ${FULL_WEIGHT_CONFIDENCE} — needs second-person approval`);
  }
  return errors;
}
