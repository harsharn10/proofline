// Token concentration, verified-ABI ownership checks and Uniswap-v2 LP holder reads. All parsers
// are pure and all network functions return nullable fields plus explicit errors rather than guess.

import { ZERO_ADDRESS, isZeroAddress } from "./rpc.mjs";

const normalAddress = (value) =>
  typeof value === "string" && /^0x[0-9a-f]{40}$/i.test(value) ? value.toLowerCase() : null;

const integerString = (value) => {
  const text = value === null || value === undefined ? "" : String(value);
  return /^\d+$/.test(text) ? text : null;
};

export function parseTokenDetails(body) {
  if (!body || typeof body !== "object") return { total_supply: null, type: null };
  return {
    total_supply: integerString(body.total_supply),
    type: typeof body.type === "string" ? body.type : null,
  };
}

export function parseHolderPage(body) {
  if (!Array.isArray(body?.items)) return [];
  return body.items
    .map((item) => ({
      address: normalAddress(item?.address?.hash ?? item?.address_hash),
      value: integerString(item?.value),
    }))
    .filter((item) => item.address && item.value !== null);
}

export function shareOfSupply(holders, totalSupply) {
  const totalText = integerString(totalSupply);
  if (!totalText || BigInt(totalText) === 0n) return null;
  const held = holders.reduce((sum, row) => sum + BigInt(row.value), 0n);
  // Sixteen decimal digits is plenty for a UI percentage while avoiding Number overflow.
  return Number((held * 10n ** 16n) / BigInt(totalText)) / 1e16;
}

export async function readTop10(client, tokenAddress, { pulledAt, excluded = new Set(), pairAddresses = [] } = {}) {
  const errors = [];
  let token = null;
  let holders = null;
  try {
    token = parseTokenDetails(await client.token(tokenAddress));
  } catch (e) {
    errors.push({ step: "top10_share", message: `tokens/${tokenAddress}: ${e.message}` });
  }
  try {
    holders = parseHolderPage(await client.tokenHolders(tokenAddress));
  } catch (e) {
    errors.push({ step: "top10_share", message: `tokens/${tokenAddress}/holders: ${e.message}` });
  }

  if (!token?.total_supply) errors.push({ step: "top10_share", message: `token total_supply was not returned for ${tokenAddress}` });
  if (!holders) errors.push({ step: "top10_share_ex_pools", message: `holder page was not available for ${tokenAddress}` });

  const top10 = holders?.slice(0, 10) ?? null;
  const excludedAddresses = new Set([...excluded, ...pairAddresses.map(normalAddress).filter(Boolean)]);
  const exPools = top10?.filter((row) => !excludedAddresses.has(row.address)) ?? null;
  return {
    top10_share: top10 && token?.total_supply ? shareOfSupply(top10, token.total_supply) : null,
    top10_share_ex_pools: exPools && token?.total_supply ? shareOfSupply(exPools, token.total_supply) : null,
    top10_as_of: top10 && token?.total_supply ? pulledAt : null,
    errors,
  };
}

export function parseVerifiedAbi(body) {
  const abi = Array.isArray(body?.abi) ? body.abi : null;
  const verified = body?.is_verified === true && abi !== null;
  return { verified, abi };
}

export function classifyMint(abiResult, owner) {
  if (!abiResult?.verified) return { mint: "unknown", error: "verified ABI unavailable" };
  const hasMint = abiResult.abi.some(
    (entry) => entry?.type === "function" && typeof entry.name === "string" && /^mint/i.test(entry.name),
  );
  if (!hasMint) return { mint: "no-mint-function", error: null };
  if (normalAddress(owner) && !isZeroAddress(owner)) return { mint: "owner-can-mint", error: null };
  return { mint: "unknown", error: "mint function exists but a non-zero owner was not determined" };
}

export function renouncedFromOwner(owner) {
  const address = normalAddress(owner);
  return address ? isZeroAddress(address) : null;
}

export async function readMintAndRenounce(client, tokenAddress, owner) {
  const errors = [];
  let abiResult = { verified: false, abi: null };
  try {
    abiResult = parseVerifiedAbi(await client.smartContract(tokenAddress));
  } catch (e) {
    errors.push({ step: "mint", message: `smart-contracts/${tokenAddress}: ${e.message}` });
  }
  const mint = classifyMint(abiResult, owner);
  if (mint.error) errors.push({ step: "mint", message: mint.error });
  const renounced = renouncedFromOwner(owner);
  if (renounced === null) errors.push({ step: "renounced", message: "owner() was not present or could not be read" });
  return { mint: mint.mint, renounced, errors };
}

const DEAD = new Set([ZERO_ADDRESS, "0x000000000000000000000000000000000000dead"]);

export function lockedHolderSummary(holders, totalSupply, lockers = new Set()) {
  const locked = [];
  let burn = false;
  let locker = false;
  for (const row of holders) {
    if (DEAD.has(row.address)) {
      burn = true;
      locked.push(row);
    } else if (lockers.has(row.address)) {
      locker = true;
      locked.push(row);
    }
  }
  const holderKind = burn && locker ? "burn-and-locker" : burn ? "burn" : locker ? "locker" : "none";
  return { locked_share: shareOfSupply(locked, totalSupply), holder_kind: holderKind };
}

export async function readLpLocks(client, pairs = [], { lockers = new Set() } = {}) {
  const lp = [];
  const errors = [];
  for (const pair of pairs) {
    const address = normalAddress(pair?.pair_address);
    if (!address) {
      lp.push({ pair: pair?.pair_address ?? null, locked_share: null, holder_kind: null, reason: "v3/v4 position; not checked" });
      continue;
    }

    let token;
    try {
      token = parseTokenDetails(await client.token(address));
    } catch (e) {
      if (/HTTP 404/.test(e.message)) {
        lp.push({ pair: pair.pair_address, locked_share: null, holder_kind: null, reason: "v3/v4 position; not checked" });
        continue;
      }
      errors.push({ step: "lp", message: `tokens/${address}: ${e.message}` });
      lp.push({ pair: pair.pair_address, locked_share: null, holder_kind: null, reason: "LP token details unavailable" });
      continue;
    }
    if (!/ERC-20/i.test(token.type ?? "") || !token.total_supply) {
      lp.push({ pair: pair.pair_address, locked_share: null, holder_kind: null, reason: "v3/v4 position; not checked" });
      continue;
    }

    try {
      const holders = parseHolderPage(await client.tokenHolders(address));
      const summary = lockedHolderSummary(holders, token.total_supply, lockers);
      lp.push({ pair: pair.pair_address, ...summary, reason: null });
    } catch (e) {
      errors.push({ step: "lp", message: `tokens/${address}/holders: ${e.message}` });
      lp.push({ pair: pair.pair_address, locked_share: null, holder_kind: null, reason: "LP holder page unavailable" });
    }
  }
  return { lp, errors };
}

