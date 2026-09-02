// DexScreener reads: the live market for a project's own token on Robinhood Chain.
//
// One call per token returns every pair DexScreener indexes for it, across all seven DEXes on the
// chain. The aggregate figures (liquidity, 24h volume, 24h trades) are sums over those pairs, so a
// token that trades on Uniswap and 0swap at once reports one honest total rather than whichever
// venue happened to be listed first. The single-venue figures (price, 24h change, FDV) come from
// the deepest pair only: averaging a price across pools of wildly different depth produces a number
// no trader could have got, whereas the deepest pool's price is the one the market is quoting.
//
// Two endpoints, one shape. The token-pairs route is already scoped to a chain and returns a bare
// array; the older /latest/dex/tokens route returns { pairs: [...] } across every chain DexScreener
// knows, so both go through the same parser and the same chainId filter. Both are keyless. Every
// failure is recorded rather than thrown: a project with no market is a fact worth writing down,
// not a reason to lose its chain facts.

import { requestJson } from "./http.mjs";

export const DEXSCREENER_BASE = "https://api.dexscreener.com";

/** DexScreener's own id for chain 4663. Not the census chain slug ("robinhood-chain"). */
export const DEX_CHAIN_ID = "robinhood";

const HEADERS = { Accept: "application/json" };

/** DexScreener sends prices as strings and omits absent figures entirely. NaN never reaches a file. */
export function toNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isFinite(n) ? n : null;
}

/** Trade counts are whole numbers; a missing or malformed count reads as zero trades, not as null. */
export function toCount(value) {
  const n = toNumber(value);
  return n === null ? 0 : Math.max(0, Math.trunc(n));
}

/** pairCreatedAt is milliseconds since the epoch; some pairs omit it. */
export function msToIso(value) {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

/**
 * Maps one raw DexScreener pair onto the fields the schema keeps.
 *
 * `pair_address` stays an unconstrained string on purpose: Uniswap v4 pools on this chain are
 * identified by a 32-byte pool id rather than a 20-byte address, so the shared address pattern
 * would reject a real pair and take the whole file down with it.
 */
export function parsePair(raw) {
  return {
    dex: typeof raw?.dexId === "string" && raw.dexId.length > 0 ? raw.dexId : null,
    pair_address: typeof raw?.pairAddress === "string" && raw.pairAddress.length > 0 ? raw.pairAddress : null,
    quote_symbol: typeof raw?.quoteToken?.symbol === "string" ? raw.quoteToken.symbol : null,
    price_usd: toNumber(raw?.priceUsd),
    liquidity_usd: toNumber(raw?.liquidity?.usd),
    volume_h24: toNumber(raw?.volume?.h24),
    volume_h6: toNumber(raw?.volume?.h6),
    txns_h24: { buys: toCount(raw?.txns?.h24?.buys), sells: toCount(raw?.txns?.h24?.sells) },
    price_change_h24: toNumber(raw?.priceChange?.h24),
    fdv: toNumber(raw?.fdv),
    created_at: msToIso(raw?.pairCreatedAt),
  };
}

/**
 * Normalises either endpoint's body to a parsed pair list for one chain.
 * The array form is already chain-scoped; the { pairs } form is not, which is what the filter is for.
 */
export function parsePairs(body, chainId = DEX_CHAIN_ID) {
  const raw = Array.isArray(body) ? body : Array.isArray(body?.pairs) ? body.pairs : [];
  return raw.filter((p) => p?.chainId === chainId).map(parsePair);
}

/** The deepest pool, ties broken by 24h volume. Null when no pair reports liquidity at all. */
export function topLiquidityPair(pairs = []) {
  let best = null;
  for (const p of pairs) {
    if (typeof p?.liquidity_usd !== "number") continue;
    if (
      best === null ||
      p.liquidity_usd > best.liquidity_usd ||
      (p.liquidity_usd === best.liquidity_usd && (p.volume_h24 ?? 0) > (best.volume_h24 ?? 0))
    ) {
      best = p;
    }
  }
  return best;
}

/**
 * Sums the numbers present. All-null in means null out — a missing figure is not a zero.
 * The result is rounded to cents: adding a dozen two-decimal dollar figures in binary floating point
 * produces trailing noise that would otherwise churn the diff of a file rewritten every six hours.
 */
export function sumOrNull(values) {
  let total = null;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) continue;
    total = (total ?? 0) + v;
  }
  return total === null ? null : Math.round(total * 100) / 100;
}

/**
 * Chain-wide totals plus the deepest pool's quote. `first_pair_at` is the earliest pair creation
 * DexScreener knows about, the closest thing available to "when did this token start trading".
 */
export function aggregatePairs(pairs = []) {
  const top = topLiquidityPair(pairs);
  const created = pairs
    .map((p) => p?.created_at)
    .filter((t) => typeof t === "string" && !Number.isNaN(Date.parse(t)));
  const trades = pairs.length
    ? pairs.reduce((n, p) => n + (p?.txns_h24?.buys ?? 0) + (p?.txns_h24?.sells ?? 0), 0)
    : null;
  return {
    liquidity_usd: sumOrNull(pairs.map((p) => p?.liquidity_usd)),
    volume_h24: sumOrNull(pairs.map((p) => p?.volume_h24)),
    trades_h24: trades,
    price_usd: top?.price_usd ?? null,
    price_change_h24: top?.price_change_h24 ?? null,
    fdv: top?.fdv ?? null,
    first_pair_at: created.length ? created.reduce((a, b) => (Date.parse(a) <= Date.parse(b) ? a : b)) : null,
  };
}

export function createDexscreenerClient({ base = DEXSCREENER_BASE, deps = {} } = {}) {
  const get = (path) => requestJson(`${base}${path}`, { headers: HEADERS }, deps);
  return {
    tokenPairs: (chainId, address) => get(`/token-pairs/v1/${chainId}/${address}`),
    tokensFallback: (address) => get(`/latest/dex/tokens/${address}`),
  };
}

/** An all-null market block. Used when a slug has no token address to look up. */
export function emptyMarket(pulledAt, errors = []) {
  return {
    token_address: null,
    pulled_at: pulledAt,
    pairs: [],
    liquidity_usd: null,
    volume_h24: null,
    trades_h24: null,
    price_usd: null,
    price_change_h24: null,
    fdv: null,
    first_pair_at: null,
    errors,
  };
}

/**
 * Reads the market for one token. Never throws. The primary route failing is not on its own fatal:
 * the older all-chain route is tried next, and only a second failure is recorded, because one
 * endpoint being down must not read as "this token does not trade".
 */
export async function readMarket(client, address, { pulledAt, chainId = DEX_CHAIN_ID } = {}) {
  const errors = [];
  let pairs = null;

  try {
    pairs = parsePairs(await client.tokenPairs(chainId, address), chainId);
  } catch (e) {
    try {
      pairs = parsePairs(await client.tokensFallback(address), chainId);
    } catch (fallbackError) {
      errors.push({ step: "dexscreener", message: `token-pairs ${address}: ${e.message}` });
      errors.push({ step: "dexscreener", message: `latest/dex/tokens ${address}: ${fallbackError.message}` });
    }
  }

  const market = emptyMarket(pulledAt, errors);
  market.token_address = address;
  if (pairs === null) return market;
  return { ...market, ...aggregatePairs(pairs), pairs };
}
