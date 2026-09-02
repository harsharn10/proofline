import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";
import { validateAgainst } from "./schemas.mjs";

export function normalizeIdentity(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

// Machine producer ids (decisions.md D2). Any of them, or a human GitHub id, may file a dossier; none may
// resolve a conflict — resolution is a controller's call — so the resolver check rejects the whole list.
export const PRODUCER_IDS = ["grok-heavy", "grok-bot", "supergrok", "codex", "claude"];
const MACHINE_RESOLVERS = new Set(PRODUCER_IDS.map(normalizeIdentity));

function duplicates(values) {
  const seen = new Set(), duplicate = new Set();
  for (const value of values) seen.has(value) ? duplicate.add(value) : seen.add(value);
  return [...duplicate];
}

export function validateNameIntake(record, { census = [] } = {}) {
  const errors = validateAgainst("name-intake", record);
  if (errors.length) return errors;

  const sourceIds = new Set(record.sources.map((source) => source.id));
  const claimById = new Map(record.claims.map((claim) => [claim.id, claim]));
  const reproductionById = new Map(record.reproductions.map((item) => [item.id, item]));
  const conflictById = new Map(record.conflicts.map((conflict) => [conflict.id, conflict]));
  const err = (message) => errors.push(message);

  for (const id of duplicates(record.sources.map((source) => source.id))) err(`duplicate source id ${id}`);
  for (const id of duplicates(record.claims.map((claim) => claim.id))) err(`duplicate claim id ${id}`);
  for (const id of duplicates(record.reproductions.map((item) => item.id))) err(`duplicate reproduction id ${id}`);
  for (const id of duplicates(record.conflicts.map((conflict) => conflict.id))) err(`duplicate conflict id ${id}`);
  for (const url of duplicates(record.sources.map((source) => source.url))) err(`duplicate source URL ${url}`);
  for (const url of duplicates(record.official_links.map((link) => link.url))) err(`duplicate official link ${url}`);
  for (const slug of duplicates(record.possible_matches.map((match) => match.slug))) err(`duplicate possible match ${slug}`);

  const sourceRefs = (ids, where) => {
    for (const id of ids ?? []) if (!sourceIds.has(id)) err(`${where} references missing source ${id}`);
  };
  const claimRefs = (ids, where) => {
    for (const id of ids ?? []) if (!claimById.has(id)) err(`${where} references missing claim ${id}`);
  };
  const reproductionRefs = (ids, where) => {
    for (const id of ids ?? []) if (!reproductionById.has(id)) err(`${where} references missing reproduction ${id}`);
  };

  record.official_links.forEach((link, index) => sourceRefs(link.source_ids, `official_links[${index}]`));
  record.reproductions.forEach((item) => sourceRefs(item.source_ids, `reproduction ${item.id}`));
  for (const claim of record.claims) {
    sourceRefs(claim.source_ids, `claim ${claim.id}`);
    reproductionRefs(claim.reproduction_ids, `claim ${claim.id}`);
    if (claim.class === "verified") {
      const grounded = claim.reproduction_ids.some((id) =>
        reproductionById.get(id)?.source_ids.some((sourceId) => claim.source_ids.includes(sourceId)),
      );
      if (!grounded) err(`verified claim ${claim.id} must share a source with its reproduction`);
    }
  }
  for (const [name, requirement] of Object.entries(record.requirements)) {
    claimRefs(requirement.claim_ids, `requirements.${name}`);
    if (requirement.status === "substantiated" && requirement.claim_ids.some((id) => claimById.get(id)?.class !== "verified"))
      err(`requirements.${name} is substantiated but references a non-verified claim`);
  }
  for (const [name, test] of Object.entries(record.qualifying))
    claimRefs(test.claim_ids, `qualifying.${name}`);

  for (const conflict of record.conflicts) {
    claimRefs(conflict.claim_ids, `conflict ${conflict.id}`);
    const fields = new Set(conflict.claim_ids.map((id) => claimById.get(id)?.field).filter(Boolean));
    if (fields.size !== 1 || !fields.has(conflict.field))
      err(`conflict ${conflict.id} must compare claims for its own field ${conflict.field}`);
    if (conflict.resolution) {
      claimRefs(conflict.resolution.winning_claim_ids, `conflict ${conflict.id} resolution`);
      reproductionRefs(conflict.resolution.reproduction_ids, `conflict ${conflict.id} resolution`);
      for (const id of conflict.resolution.winning_claim_ids)
        if (!conflict.claim_ids.includes(id)) err(`conflict ${conflict.id} winner ${id} is not one of its claims`);
      if (MACHINE_RESOLVERS.has(normalizeIdentity(conflict.resolution.resolver)))
        err(`conflict ${conflict.id} must be resolved by a non-bot controller`);
    } else if (conflict.claim_ids.some((id) => claimById.get(id)?.class === "verified")) {
      err(`open conflict ${conflict.id} cannot contain a verified claim`);
    }
  }

  for (const id of record.identity.conflict_ids ?? []) {
    const conflict = conflictById.get(id);
    if (!conflict) err(`identity references missing conflict ${id}`);
    else if (!conflict.field.startsWith("identity.") && conflict.field !== "relationship")
      err(`identity conflict ${id} must concern an identity or relationship field`);
  }
  if (record.identity.status === "conflicted" && !(record.identity.conflict_ids ?? []).some((id) => conflictById.get(id)?.status === "open"))
    err("conflicted identity must reference at least one open conflict");
  for (const conflict of record.conflicts)
    if (conflict.status === "open" && (conflict.field.startsWith("identity.") || conflict.field === "relationship") && record.identity.status !== "conflicted")
      err(`open identity conflict ${conflict.id} requires identity.status conflicted`);

  const confirmedSources = record.sources.filter((source) => source.authenticity === "confirmed");
  for (const source of confirmedSources) {
    if (!record.reproductions.some((item) => item.source_ids.includes(source.id)))
      err(`confirmed source ${source.id} must be referenced by a reproduction`);
  }
  if (record.identity.status === "verified") {
    const distinctUrls = new Set(confirmedSources.map((source) => source.url));
    const anchored = confirmedSources.some((source) => ["onchain", "primary"].includes(source.authority));
    const identityVerified = record.claims.some((claim) =>
      claim.class === "verified" &&
      ["identity.name", "identity.handle", "identity.domain"].includes(claim.field) &&
      claim.reproduction_ids.some((id) => ["official-crosslink", "repository-crosslink"].includes(reproductionById.get(id)?.method)),
    );
    if (distinctUrls.size < 2 || !anchored || !identityVerified)
      err("verified identity requires two reproduced confirmed source URLs, a primary/onchain anchor, and a verified identity cross-link claim");
  }

  for (const [index, link] of record.official_links.entries()) {
    if (link.authenticity !== "confirmed") continue;
    if (!link.source_ids.some((id) => record.sources.find((source) => source.id === id)?.authenticity === "confirmed"))
      err(`official_links[${index}] is confirmed but has no confirmed source`);
  }

  if (record.lifecycle === "mainnet") {
    const validMethods = new Set(["explorer-rpc", "explorer-ui", "document-scope", "api"]);
    const reproducedMainnet = record.claims.some(
      (claim) =>
        claim.class === "verified" &&
        ["lifecycle", "deployment.address", "activity.status"].includes(claim.field) &&
        claim.reproduction_ids.some((id) => validMethods.has(reproductionById.get(id)?.method)),
    );
    if (!reproducedMainnet) err("lifecycle mainnet requires a reproduced verified lifecycle, deployment or activity claim");
  }

  if (!record.candidate_id.endsWith(`-${record.slug}`))
    err(`candidate_id must end with the slug ${record.slug}`);
  if (record.candidate_id.slice(5, 15) !== record.observed_at.slice(0, 10))
    err("candidate_id date must match observed_at");

  const matchingClaim = (field, value) => record.claims.some((claim) => claim.field === field && claim.value === value);
  const requiredValues = [
    ["identity.name", record.name, "name"],
    ["taxonomy.category", record.taxonomy.category, "category"],
    ["taxonomy.primary-domain", record.taxonomy.primary_domain, "primary domain"],
    ["lifecycle", record.lifecycle, "lifecycle"],
  ];
  if (record.identity.entity_kind !== "unknown") requiredValues.push(["taxonomy.entity-kind", record.identity.entity_kind, "entity kind"]);
  if (record.identity.chain_scope !== "unknown") requiredValues.push(["taxonomy.chain-scope", record.identity.chain_scope, "chain scope"]);
  for (const alias of record.identity.aliases) requiredValues.push(["identity.alias", alias, `alias ${alias}`]);
  for (const symbol of record.identity.symbols) requiredValues.push(["identity.symbol", symbol, `symbol ${symbol}`]);
  for (const tag of record.taxonomy.mechanism_tags) requiredValues.push(["taxonomy.mechanism-tag", tag, `mechanism tag ${tag}`]);
  for (const [field, value, label] of requiredValues)
    if (value !== "unknown" && !matchingClaim(field, value)) err(`proposed ${label} must have a matching ${field} claim`);

  const normalizedNames = [record.name, ...record.identity.aliases].map(normalizeIdentity).filter(Boolean);
  for (const value of duplicates(normalizedNames)) err(`candidate repeats normalized name or alias ${value}`);
  for (const value of duplicates(record.identity.symbols.map((symbol) => symbol.toLowerCase()))) err(`candidate repeats symbol ${value}`);

  const canonicalSlugs = new Set(census.map((row) => row.slug));
  if (canonicalSlugs.has(record.slug)) err(`slug ${record.slug} is already canonical; submit an existing-name update instead`);
  for (const match of record.possible_matches) {
    if (!canonicalSlugs.has(match.slug)) err(`possible match ${match.slug} is not in the canonical census`);
    if (match.slug === record.slug) err(`possible match ${match.slug} cannot point to itself`);
  }

  const candidateNames = new Set([record.name, ...record.identity.aliases].map(normalizeIdentity).filter(Boolean));
  for (const row of census) {
    const canonicalNames = [row.name, ...(row.identity?.aliases ?? [])].map(normalizeIdentity).filter(Boolean);
    if (!canonicalNames.some((name) => candidateNames.has(name))) continue;
    if (!record.possible_matches.some((match) => match.slug === row.slug))
      err(`normalized identity matches canonical slug ${row.slug}; list it in possible_matches`);
  }

  return errors;
}

export async function validateNameIntakeDirectory(
  directory = "research/inbox/names",
  censusPath = "content/census.yaml",
) {
  let files;
  try {
    files = (await readdir(directory)).filter((file) => file.endsWith(".yaml")).sort();
  } catch (error) {
    if (error.code === "ENOENT") return { errors: [], files: 0 };
    throw error;
  }
  const census = parse(await readFile(censusPath, "utf8"));
  const errors = [];
  const seenCandidateIds = new Map(), seenSlugs = new Map();
  for (const file of files) {
    const where = join(directory, file);
    let record;
    try {
      record = parse(await readFile(where, "utf8"));
    } catch (error) {
      errors.push(`${where}: ${error.message.split("\n")[0]}`);
      continue;
    }
    for (const message of validateNameIntake(record, { census })) errors.push(`${where}: ${message}`);
    if (record?.candidate_id) {
      if (seenCandidateIds.has(record.candidate_id)) errors.push(`${where}: candidate_id ${record.candidate_id} also appears in ${seenCandidateIds.get(record.candidate_id)}`);
      else seenCandidateIds.set(record.candidate_id, where);
    }
    if (record?.slug) {
      if (file !== `${record.slug}.yaml`) errors.push(`${where}: filename must be ${record.slug}.yaml`);
      if (seenSlugs.has(record.slug)) errors.push(`${where}: slug ${record.slug} also appears in ${seenSlugs.get(record.slug)}`);
      else seenSlugs.set(record.slug, where);
    }
  }
  return { errors, files: files.length };
}
