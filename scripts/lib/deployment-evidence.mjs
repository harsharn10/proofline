// Shared structural address binding. A successful match establishes which deployment was read,
// not that its source code, access controls or identity have been independently approved.
const rows = value => Array.isArray(value) ? value : [];
const ADDRESS = /^0x[0-9a-f]{40}$/i;
const sourceUrl = value => {
  try { return ['http:', 'https:'].includes(new URL(value).protocol); }
  catch { return false; }
};
const addressesIn = value => [...new Set([...String(value ?? '').matchAll(/(?<![a-z0-9_])0x[0-9a-f]{40}(?![a-z0-9_])/gi)]
  .map(match => match[0].toLowerCase()))];

export function claimAddress(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) value = value.address ?? value.value;
  if (typeof value !== 'string') return null;
  const addresses = addressesIn(value);
  // Multiple distinct addresses in free text do not identify which subject was reproduced.
  return addresses.length === 1 ? addresses[0] : null;
}

export function reproducedAddressClaim(frontmatter, address, { classes = ['verified'] } = {}) {
  if (typeof address !== 'string' || !ADDRESS.test(address)) return undefined;
  const key = address.toLowerCase();
  const receipts = rows(frontmatter.receipts);
  return rows(frontmatter.claims).find(claim => {
    if (claim.field !== 'deployment.address' || !classes.includes(claim.class) || claimAddress(claim.value) !== key) return false;
    return rows(frontmatter.reproductions).some(rep => {
      if (!rows(claim.reproduction_ids).includes(rep.id) || rep.chain_id !== 4663 ||
          !['explorer-rpc', 'explorer-ui'].includes(rep.method)) return false;
      const linked = receipts.filter(receipt => rows(rep.receipt_ids).includes(receipt.id) &&
        rows(claim.receipt_ids).includes(receipt.id) &&
        receipt.authenticity === 'confirmed' && sourceUrl(receipt.url));
      // A batch RPC read may refer to a separately linked official contract table. Require both
      // receipts on this same claim/reproduction; an unrelated docs page cannot supply the address.
      return linked.some(receipt => receipt.authority === 'onchain') &&
        (addressesIn(rep.result).includes(key) || linked.some(receipt =>
          (receipt.authority === 'onchain' || (receipt.authority === 'primary' && receipt.kind === 'docs')) &&
          addressesIn(`${receipt.url} ${receipt.title ?? ''} ${receipt.excerpt ?? ''}`).includes(key)));
    });
  });
}
