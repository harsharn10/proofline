// Launchpad attribution is a join over facts the puller already holds: the factory and curve
// addresses the census records for each project, matched against the creator of a token contract.
//
// Two guards keep the join honest.
//
//   Only launchpads may be attributed. `role: factory` says "this contract deploys things", not
//   "this is a launchpad": Downto registers a Create3Factory and a DiamondPackageCallBackFactory,
//   L4VA registers a vault factory. A project therefore only enters the index when the taxonomy
//   files its census leaf under the launchpads section (schema/taxonomy.json), and generic
//   deployment helpers are dropped by name even inside a launchpad.
//
//   Shared infrastructure is labelled as shared. One Doppler factory deploys tokens for every
//   project using that stack, so its creations cannot be asserted as launches of the project that
//   is best known for it. Those entries keep the slug but carry via: "shared-factory" and
//   shared: true, so the card can say "via Doppler (LONG)" instead of asserting LONG.

import { sectionForLeaf } from "../taxonomy.mjs";

/**
 * Shared launch infrastructure whose creations belong to no single project. Additions need a direct
 * explorer receipt, a canonical project slug and `shared: true` unless the factory really is that
 * one project's own.
 *   0x1b37d3a7… — DopplerERC20V1Factory, the Doppler stack's token factory. LONG is the project on
 *   this chain that runs it, but other launches go through the same contract.
 */
export const KNOWN_LAUNCHER_DEPLOYERS = [
  {
    slug: "long",
    address: "0x1b37d3a72082029c44b35b604ea473617580b69a",
    label: "DopplerERC20V1Factory",
    shared: true,
  },
];

/**
 * LP lockers whose address the census has not located. Empty today: HoodLock's locker is recorded as
 * `not-verified` in content/projects/hoodlock.yaml, so there is nothing to add without inventing it.
 * An entry needs an explorer receipt showing the contract holds LP on someone else's behalf.
 */
export const KNOWN_LOCKERS = [];

const normalAddress = (value) =>
  typeof value === "string" && /^0x[0-9a-f]{40}$/i.test(value) ? value.toLowerCase() : null;

const looksLikeCurve = (row) => /\bcurve\b/i.test(`${row?.label ?? ""} ${row?.contract_name ?? ""}`);
const looksLikeLauncherDeployer = (row) =>
  /\b(?:launch(?:er)?\s*(?:factory|deployer)|(?:factory|deployer)\s*(?:launch(?:er)?))\b/i.test(
    `${row?.label ?? ""} ${row?.contract_name ?? ""}`,
  );

/** CREATE2/CREATE3 helpers and bare deployers deploy anything for anyone; they launch nothing. */
const isGenericDeployer = (row) =>
  [row?.label, row?.contract_name]
    .filter((text) => typeof text === "string")
    .some((text) => /create\s*[23]/i.test(text) || /^deployer\b/i.test(text.trim()));

/** Census slugs the taxonomy files under the launchpads section — the only projects a token can be
 * attributed to. `launch/graduation-token` is deliberately not one: the taxonomy files it under
 * Tokens, and a graduated token launches nothing. */
export function launchpadSlugsFrom(census = []) {
  const out = new Set();
  for (const row of census) {
    if (typeof row?.slug !== "string") continue;
    if (sectionForLeaf(row?.tree?.primary)?.id === "launchpads") out.add(row.slug);
  }
  return out;
}

/**
 * Address -> launchpad metadata. Deterministic first match: factory/curve before named deployer
 * before the known-deployer list. `launchpadSlugs` is the set of projects allowed to be a launchpad;
 * it is fail-closed, so a caller that passes nothing gets an index of the known deployers only.
 */
export function buildLaunchpadIndex(documents = [], { known = KNOWN_LAUNCHER_DEPLOYERS, launchpadSlugs = null } = {}) {
  const allowed = launchpadSlugs instanceof Set ? launchpadSlugs : new Set();
  const candidates = [];
  for (const doc of documents) {
    if (!allowed.has(doc?.slug)) continue;
    for (const row of doc?.addresses ?? []) {
      const address = normalAddress(row?.address);
      if (!address || isGenericDeployer(row)) continue;
      if (row?.role === "factory" || row?.role === "curve" || looksLikeCurve(row)) {
        candidates.push({ address, slug: doc.slug, via: "factory", shared: false, priority: 0 });
      } else if (looksLikeLauncherDeployer(row)) {
        candidates.push({ address, slug: doc.slug, via: "creator", shared: false, priority: 1 });
      }
    }
  }
  for (const row of known) {
    const address = normalAddress(row?.address);
    if (!address) continue;
    const shared = row.shared === true;
    candidates.push({ address, slug: row.slug, via: shared ? "shared-factory" : "creator", shared, priority: 2 });
  }

  candidates.sort((a, b) => a.priority - b.priority || a.slug.localeCompare(b.slug));
  const index = new Map();
  for (const row of candidates) {
    if (!index.has(row.address)) {
      index.set(row.address, { slug: row.slug, via: row.via, address: row.address, shared: row.shared });
    }
  }
  return index;
}

/**
 * Addresses that hold a token or an LP position on someone else's behalf: anything the census gives
 * the vault role, anything whose label or contract name says lock, and the known-locker list. The
 * same set does two jobs — it leaves top-10 concentration, and it counts as locked LP — because a
 * vault holding the float and a locker holding the LP are the same fact seen from two sides. That
 * makes it deliberately vault-inclusive: `role: locker` does not exist in schema/shared.schema.json,
 * so a project's locker is recorded as a vault or named one in its label.
 */
export function excludedHolderAddresses(documents = [], known = KNOWN_LOCKERS) {
  const out = new Set();
  for (const doc of documents) {
    for (const row of doc?.addresses ?? []) {
      const named = `${row?.label ?? ""} ${row?.contract_name ?? ""}`;
      if (row?.role !== "vault" && row?.role !== "locker" && !/lock/i.test(named)) continue;
      const address = normalAddress(row?.address);
      if (address) out.add(address);
    }
  }
  for (const row of known) {
    const address = normalAddress(row?.address);
    if (address) out.add(address);
  }
  return out;
}

export function attributeCreator(creatorAddress, launchpads) {
  const creator = normalAddress(creatorAddress);
  return creator ? launchpads.get(creator) ?? null : null;
}
