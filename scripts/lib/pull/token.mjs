// Token concentration, verified-ABI ownership checks and Uniswap-v2 LP holder reads. All parsers
// are pure and all network functions return nullable fields plus explicit errors rather than guess.
//
// Concentration measures who could sell. Two kinds of holder are therefore not concentration:
//
//   Burned supply. Tokens sent to 0x0 or 0x…dEaD are gone. Counting them as a top holder makes a
//   token that burned a third of its supply look like its largest wallet controls a third of it.
//   Burn holders leave both sides of the ratio — the numerator and the supply it divides — and what
//   was burned is reported on its own as `burned_share`.
//
//   Pool liquidity. Tokens sitting in an AMM belong to the liquidity providers, not to the pool.
//   Uniswap v2 and v3 hold them in the pair contract, which DexScreener names, so market.pairs
//   covers them. Uniswap v4 does not: every v4 pool on this chain lives inside one singleton
//   PoolManager keyed by a 32-byte pool id, so the balance shows up under the PoolManager's own
//   address and no pair address will ever match it. That holder is recognised by the contract name
//   Blockscout returns on the holder row, plus the small documented address list below.

import { ZERO_ADDRESS, isZeroAddress } from "./rpc.mjs";

const normalAddress = (value) =>
  typeof value === "string" && /^0x[0-9a-f]{40}$/i.test(value) ? value.toLowerCase() : null;

const integerString = (value) => {
  const text = value === null || value === undefined ? "" : String(value);
  return /^\d+$/.test(text) ? text : null;
};

/** The two conventional sinks. Every other burn holder has to be named one by the explorer. */
export const BURN_ADDRESSES = new Set([ZERO_ADDRESS, "0x000000000000000000000000000000000000dead"]);

// Blockscout tags the conventional sinks "Null: 0x00...dEaD". A holder counts as burned supply only
// on that receipt or on a name carrying the standalone word burn — never on a guess about what some
// contract does with the tokens it holds, and deliberately not on names like TokenBurner or
// BurnMinter that describe a caller rather than a sink.
const BURN_NAME = /\b(?:burn|burned|null)\b/i;

/**
 * Contract names that mean "this balance is pooled liquidity, not a holder". `PoolManager` is the
 * Uniswap v4 singleton; the v3 pool and v2 pair names are here because a pool can hold a token that
 * DexScreener has not indexed as one of its pairs.
 */
export const POOL_CONTRACT_NAMES = new Set([
  "poolmanager",
  "uniswapv4poolmanager",
  "uniswapv3pool",
  "uniswapv2pair",
  "pancakev3pool",
  "pancakev2pair",
]);

/**
 * Pool contracts on chain 4663 by address, for the case where the explorer returns no contract name.
 * Each entry needs an explorer receipt before it is added.
 *   0x8366a39c… — Uniswap v4 PoolManager singleton, named "PoolManager" on
 *   https://robinhoodchain.blockscout.com/address/0x8366a39CC670B4001A1121B8F6A443A643e40951 and
 *   holder #2 of Artificial Inu ($AI).
 */
export const KNOWN_POOL_CONTRACTS = [
  { address: "0x8366a39cc670b4001a1121b8f6a443a643e40951", label: "Uniswap v4 PoolManager (singleton)" },
];

export const KNOWN_POOL_ADDRESSES = new Set(KNOWN_POOL_CONTRACTS.map((row) => row.address));

export function parseTokenDetails(body) {
  if (!body || typeof body !== "object") return { total_supply: null, type: null };
  return {
    total_supply: integerString(body.total_supply),
    type: typeof body.type === "string" ? body.type : null,
  };
}

/**
 * One row per holder. The address record Blockscout returns alongside the balance carries the
 * contract name, the contract flag and the public tags, and all three decide whether the balance is
 * a holder, a burn or a pool — so they are kept rather than thrown away and re-fetched.
 */
export function parseHolderPage(body) {
  if (!Array.isArray(body?.items)) return [];
  return body.items
    .map((item) => {
      const record = item?.address && typeof item.address === "object" ? item.address : {};
      const tags = Array.isArray(record.metadata?.tags) ? record.metadata.tags : [];
      return {
        address: normalAddress(record.hash ?? item?.address_hash),
        value: integerString(item?.value),
        name: typeof record.name === "string" && record.name.length > 0 ? record.name : null,
        is_contract: typeof record.is_contract === "boolean" ? record.is_contract : null,
        tags: tags.map((tag) => tag?.name).filter((name) => typeof name === "string"),
      };
    })
    .filter((item) => item.address && item.value !== null);
}

/** True when the balance is out of circulation: a burn address, or one the explorer names as one. */
export function isBurnHolder(row) {
  if (!row?.address) return false;
  if (BURN_ADDRESSES.has(row.address)) return true;
  if (row.name && BURN_NAME.test(row.name)) return true;
  return (row.tags ?? []).some((tag) => BURN_NAME.test(tag));
}

/** True when the balance is pooled liquidity rather than one holder's position. */
export function isPoolHolder(row, known = KNOWN_POOL_ADDRESSES) {
  if (!row?.address) return false;
  if (known.has(row.address)) return true;
  // An address the explorer knows is not a contract cannot be a pool, whatever it is called.
  if (row.is_contract === false) return false;
  const name = typeof row.name === "string" ? row.name.toLowerCase() : "";
  return name.length > 0 && POOL_CONTRACT_NAMES.has(name);
}

/**
 * A share is the ratio of two figures read seconds apart, so a total supply that lags a burn or a
 * fresh mint can put it just outside [0, 1]. The schema refuses such a value and one bad ratio would
 * sink the whole document and its history line, so it is clamped and the clamp is reported.
 */
export function clampShare(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return { value: null, clamped: false };
  if (value < 0) return { value: 0, clamped: true };
  if (value > 1) return { value: 1, clamped: true };
  return { value, clamped: false };
}

export function shareOfSupply(holders, totalSupply) {
  const totalText = integerString(totalSupply);
  if (!totalText || BigInt(totalText) === 0n) return null;
  const held = holders.reduce((sum, row) => sum + BigInt(row.value), 0n);
  // Sixteen decimal digits is plenty for a UI percentage while avoiding Number overflow.
  return Number((held * 10n ** 16n) / BigInt(totalText)) / 1e16;
}

/**
 * Top-10 concentration for one token. Both shares are measured against circulating supply — total
 * supply less everything sitting in a burn address — because burned tokens are neither held nor
 * sellable. `top10_share` is the ten largest live holders; `top10_share_ex_pools` is the ten largest
 * that are also not a DexScreener pair, a project vault or locker, or a pool contract.
 */
export async function readTop10(client, tokenAddress, {
  pulledAt,
  excluded = new Set(),
  pairAddresses = [],
  knownPools = KNOWN_POOL_ADDRESSES,
} = {}) {
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

  const blank = { top10_share: null, top10_share_ex_pools: null, burned_share: null, top10_as_of: null, errors };
  if (!holders || !token?.total_supply) return blank;

  const burnt = holders.filter(isBurnHolder);
  const burnedShare = clampShare(shareOfSupply(burnt, token.total_supply));
  if (burnedShare.clamped) {
    errors.push({ step: "burned_share", message: `burned balances exceeded the total supply read for ${tokenAddress}; the share was clamped` });
  }

  const supply = BigInt(token.total_supply);
  const burned = burnt.reduce((sum, row) => sum + BigInt(row.value), 0n);
  const circulating = supply > burned ? supply - burned : 0n;
  if (circulating === 0n) {
    errors.push({ step: "top10_share", message: `the whole supply of ${tokenAddress} is burned; there is no circulating supply to concentrate` });
    return { ...blank, burned_share: burnedShare.value };
  }
  const circulatingText = circulating.toString();

  const excludedAddresses = new Set([...excluded, ...pairAddresses.map(normalAddress).filter(Boolean)]);
  const live = holders.filter((row) => !isBurnHolder(row));
  const top10 = live.slice(0, 10);
  const exPools = live
    .filter((row) => !excludedAddresses.has(row.address) && !isPoolHolder(row, knownPools))
    .slice(0, 10);

  const share = clampShare(shareOfSupply(top10, circulatingText));
  const shareExPools = clampShare(shareOfSupply(exPools, circulatingText));
  if (share.clamped || shareExPools.clamped) {
    errors.push({ step: "top10_share", message: `holder balances exceeded the circulating supply read for ${tokenAddress}; the share was clamped` });
  }

  return {
    top10_share: share.value,
    top10_share_ex_pools: shareExPools.value,
    burned_share: burnedShare.value,
    top10_as_of: pulledAt,
    errors,
  };
}

export function parseVerifiedAbi(body) {
  const abi = Array.isArray(body?.abi) ? body.abi : null;
  const verified = body?.is_verified === true && abi !== null;
  return { verified, abi };
}

/**
 * Only these three names create supply. `minters`, `minted` and `mintingFinished` are views that
 * happen to start with the same five letters, and reading them as a mint made every token exposing
 * a minter registry look like it can print.
 */
const MINT_FUNCTIONS = new Set(["mint", "mintTo", "mintFor"]);

/** A function that changes state. Solidity ABIs before 0.5 say `constant: false` instead. */
const isMutating = (entry) =>
  entry?.stateMutability === "nonpayable" ||
  entry?.stateMutability === "payable" ||
  (entry?.stateMutability === undefined && entry?.constant === false);

export function classifyMint(abiResult, owner) {
  if (!abiResult?.verified) return { mint: "unknown", error: "verified ABI unavailable" };
  const hasMint = abiResult.abi.some(
    (entry) => entry?.type === "function" && MINT_FUNCTIONS.has(entry.name) && isMutating(entry),
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

/** Reasons an LP row carries no share. Each names the condition that actually stopped the read. */
export const LP_REASON = {
  poolId: "pair id is not a 20-byte address; Uniswap v4 pool id, not checked",
  notAToken: "no ERC-20 LP token at the pair address; v3/v4 position, not checked",
  detailsUnavailable: "LP token details could not be read from the explorer",
  notErc20: "pair contract is not an ERC-20 LP token; not checked",
  noSupply: "LP total supply was not returned",
  holdersUnavailable: "LP holder page unavailable",
  noneFound: "no known locker or burn among top holders",
  noHolders: "LP holder page returned no holders",
};

/**
 * How much of an LP token is out of anyone's reach. A zero is an assertion — "nothing is locked" —
 * so it is written only when every holder read is a plain account and so none of them could be a
 * locker this run has never located. An unnamed contract among the holders leaves the share null
 * with a reason instead.
 */
export function lockedHolderSummary(holders, totalSupply, lockers = new Set()) {
  const locked = [];
  let burn = false;
  let locker = false;
  for (const row of holders) {
    if (isBurnHolder(row)) {
      burn = true;
      locked.push(row);
    } else if (lockers.has(row.address)) {
      locker = true;
      locked.push(row);
    }
  }

  if (locked.length === 0) {
    if (holders.length === 0) {
      return { locked_share: null, holder_kind: null, reason: LP_REASON.noHolders, clamped: false };
    }
    const allAccounts = holders.every((row) => row.is_contract === false);
    return allAccounts
      ? { locked_share: 0, holder_kind: "none", reason: null, clamped: false }
      : { locked_share: null, holder_kind: null, reason: LP_REASON.noneFound, clamped: false };
  }

  const share = clampShare(shareOfSupply(locked, totalSupply));
  const holderKind = burn && locker ? "burn-and-locker" : burn ? "burn" : "locker";
  return { locked_share: share.value, holder_kind: holderKind, reason: null, clamped: share.clamped };
}

export async function readLpLocks(client, pairs = [], { lockers = new Set() } = {}) {
  const lp = [];
  const errors = [];
  const skip = (pair, reason) => lp.push({ pair, locked_share: null, holder_kind: null, reason });

  for (const pair of pairs) {
    const address = normalAddress(pair?.pair_address);
    if (!address) {
      skip(pair?.pair_address ?? null, LP_REASON.poolId);
      continue;
    }

    let token;
    try {
      token = parseTokenDetails(await client.token(address));
    } catch (e) {
      if (/HTTP 404/.test(e.message)) {
        skip(pair.pair_address, LP_REASON.notAToken);
        continue;
      }
      errors.push({ step: "lp", message: `tokens/${address}: ${e.message}` });
      skip(pair.pair_address, LP_REASON.detailsUnavailable);
      continue;
    }
    if (!/ERC-20/i.test(token.type ?? "")) {
      skip(pair.pair_address, LP_REASON.notErc20);
      continue;
    }
    if (!token.total_supply) {
      errors.push({ step: "lp", message: `tokens/${address} returned no total_supply` });
      skip(pair.pair_address, LP_REASON.noSupply);
      continue;
    }

    try {
      const holders = parseHolderPage(await client.tokenHolders(address));
      const summary = lockedHolderSummary(holders, token.total_supply, lockers);
      if (summary.clamped) {
        errors.push({ step: "lp", message: `locked balances exceeded the LP total supply for ${address}; the share was clamped` });
      }
      lp.push({
        pair: pair.pair_address,
        locked_share: summary.locked_share,
        holder_kind: summary.holder_kind,
        reason: summary.reason,
      });
    } catch (e) {
      errors.push({ step: "lp", message: `tokens/${address}/holders: ${e.message}` });
      skip(pair.pair_address, LP_REASON.holdersUnavailable);
    }
  }
  return { lp, errors };
}
