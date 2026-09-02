// Launchpad attribution is a join over facts the puller has already reproduced. The index includes
// factories, per-launch curves and explicitly named launch deployers from every pulled document.
// A tiny known-deployer list covers shared infrastructure whose project profile has not yet located
// the address; additions need a direct explorer receipt and a canonical project slug.

export const KNOWN_LAUNCHER_DEPLOYERS = [
  {
    slug: "long",
    address: "0x1b37d3a72082029c44b35b604ea473617580b69a",
    label: "DopplerERC20V1Factory",
  },
];

const normalAddress = (value) =>
  typeof value === "string" && /^0x[0-9a-f]{40}$/i.test(value) ? value.toLowerCase() : null;

const looksLikeCurve = (row) => /\bcurve\b/i.test(`${row?.label ?? ""} ${row?.contract_name ?? ""}`);
const looksLikeLauncherDeployer = (row) =>
  /\b(?:launch(?:er)?\s*(?:factory|deployer)|(?:factory|deployer)\s*(?:launch(?:er)?))\b/i.test(
    `${row?.label ?? ""} ${row?.contract_name ?? ""}`,
  );

/** Address -> launchpad metadata. Deterministic first match: factory/curve before named deployer. */
export function buildLaunchpadIndex(pulledDocuments = [], known = KNOWN_LAUNCHER_DEPLOYERS) {
  const candidates = [];
  for (const doc of pulledDocuments) {
    for (const row of doc?.addresses ?? []) {
      const address = normalAddress(row?.address);
      if (!address) continue;
      if (row?.role === "factory" || row?.role === "curve" || looksLikeCurve(row)) {
        candidates.push({ address, slug: doc.slug, via: "factory", priority: 0 });
      } else if (looksLikeLauncherDeployer(row)) {
        candidates.push({ address, slug: doc.slug, via: "creator", priority: 1 });
      }
    }
  }
  for (const row of known) {
    const address = normalAddress(row?.address);
    if (address) candidates.push({ address, slug: row.slug, via: "creator", priority: 2 });
  }

  candidates.sort((a, b) => a.priority - b.priority || a.slug.localeCompare(b.slug));
  const index = new Map();
  for (const row of candidates) {
    if (!index.has(row.address)) index.set(row.address, { slug: row.slug, via: row.via, address: row.address });
  }
  return index;
}

/** Vault/locker addresses are excluded from token concentration and count as locked LP holders. */
export function excludedHolderAddresses(pulledDocuments = []) {
  const out = new Set();
  for (const doc of pulledDocuments) {
    for (const row of doc?.addresses ?? []) {
      if (row?.role !== "vault" && row?.role !== "locker" && !/\blocker\b/i.test(row?.label ?? "")) continue;
      const address = normalAddress(row?.address);
      if (address) out.add(address);
    }
  }
  return out;
}

export function attributeCreator(creatorAddress, launchpads) {
  const creator = normalAddress(creatorAddress);
  return creator ? launchpads.get(creator) ?? null : null;
}
