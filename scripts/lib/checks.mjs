import { FULL_WEIGHT_CONFIDENCE } from "./score.mjs";

/** Approver values that mean "nobody yet" but are not the literal `pending` the cap keys on. */
export const PLACEHOLDER_APPROVERS = new Set(["tbd", "none", "todo", "na", "n-a"]);
/** Census fields that are duplicated in the project file and must agree. */
const MIRRORED_FIELDS = ["name", "category", "lifecycle", "coverage"];

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
  const censusSlugs = new Set(content.census.map((c) => c.slug));
  const changelogSlugs = new Set(content.changelog.map((e) => e.slug));

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

    const { researcher, approver } = project.review ?? {};
    if (approver !== undefined && approver === researcher) errors.push(`projects/${slug}: approver must be a different person from researcher`);
    if (PLACEHOLDER_APPROVERS.has(approver)) warnings.push(`projects/${slug}: approver "${approver}" looks like a placeholder — use the literal pending until a second person approves`);

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
    for (const a of project.addresses ?? []) if (!a.verified) errors.push(`projects/${slug}: address "${a.label}" is not verified on a full profile`);
    const d = derivedBySlug?.get(slug);
    if (project.review?.approver === "pending" && d && d.uncappedConfidence >= FULL_WEIGHT_CONFIDENCE)
      errors.push(`projects/${slug}: approver pending but uncapped confidence ${d.uncappedConfidence} ≥ ${FULL_WEIGHT_CONFIDENCE} — needs second-person approval`);
  }
  return errors;
}
