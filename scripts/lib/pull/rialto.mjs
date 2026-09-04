// Rialto Analytics reads for Robinhood Chain. The API is keyless, but rejects bare clients, so
// every request carries the same browser headers as the public dashboard. A client caches each URL
// for the life of one pull and uses its own one-request-per-second pacer from the pull runner.

import { BROWSER_UA, requestJson } from "./http.mjs";

export const RIALTO_BASE = "https://analytics.rialto.xyz";
export const RIALTO_PAGES = {
  markets: `${RIALTO_BASE}/markets`,
  tvl: `${RIALTO_BASE}/tvl`,
  economics: `${RIALTO_BASE}/onchain-economics`,
  tokenization: `${RIALTO_BASE}/tokenization`,
  transfers: `${RIALTO_BASE}/transfers`,
  liquidity: `${RIALTO_BASE}/liquidity`,
};

const ENDPOINTS = {
  tickers: ["/api/router/tickers", "markets"],
  tokens: ["/api/router/tokens", "markets"],
  symbols: ["/api/market/robinhood-symbols", "tokenization"],
  tvlKpis: ["/api/stats/tvl/kpis", "tvl"],
  tvlByCategory: ["/api/stats/tvl/tvl-by-category", "tvl"],
  protocolTvl: ["/api/stats/tvl/protocol-tvl", "tvl"],
  protocolTvlDaily: ["/api/stats/tvl/protocol-tvl-over-time?period=3M", "tvl"],
  categoryTvlDaily: ["/api/stats/tvl/tvl-by-category-over-time?period=3M", "tvl"],
  economicsKpis: ["/api/stats/onchain-economics/kpis", "onchain-economics"],
  economicsDaily: ["/api/stats/onchain-economics/daily-metrics?period=3M", "onchain-economics"],
  activityDaily: ["/api/stats/metrics/overview?period=3M", "markets"],
  topAssets: ["/api/stats/metrics/top-assets?period=3M", "markets"],
  volumeByAsset: ["/api/stats/metrics/volume-by-asset?period=3M", "markets"],
  tokenization: ["/api/stats/tokenization/stats", "tokenization"],
  tokenizationDaily: ["/api/stats/tokenization/total-value-tokenized-over-time?period=3M", "tokenization"],
  transfers: ["/api/stats/transfers/headline-stats", "transfers"],
  mintburn: ["/api/stats/mintburn/stats", "tokenization"],
  liquidity: ["/api/liquidity/spreads", "liquidity"],
};

const finite = (value) => {
  if (value === null || value === undefined || value === "") return null;
  const number = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isFinite(number) ? number : null;
};

const text = (value) => typeof value === "string" && value.trim() ? value.trim() : null;
const address = (value) => {
  const normalized = text(value)?.toLowerCase() ?? null;
  return normalized && /^0x[0-9a-f]{40}$/.test(normalized) ? normalized : null;
};
const date = (value) => {
  const candidate = text(value)?.slice(0, 10) ?? null;
  return candidate && /^\d{4}-\d{2}-\d{2}$/.test(candidate) ? candidate : null;
};
const rows = (body) => Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : [];

function browserHeaders(referer) {
  return {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    Referer: referer,
    "User-Agent": BROWSER_UA,
  };
}

/** One cached request per URL. Every named method returns a normalized, nullable shape. */
export function createRialtoClient({ base = RIALTO_BASE, deps = {} } = {}) {
  const cache = new Map();
  const urlFor = (path) => `${base.replace(/\/$/, "")}${path}`;
  const get = (path, page) => {
    const url = urlFor(path);
    if (!cache.has(url)) {
      cache.set(url, requestJson(url, { headers: browserHeaders(`${base.replace(/\/$/, "")}/${page}`) }, deps));
    }
    return cache.get(url);
  };
  const named = (name) => {
    const [path, page] = ENDPOINTS[name];
    return get(path, page);
  };
  return {
    endpointUrl: (name) => urlFor(ENDPOINTS[name][0]),
    tickers: async () => parseTickers(await named("tickers")),
    tokens: async () => parseTokens(await named("tokens")),
    symbols: async () => parseSymbols(await named("symbols")),
    assetsPage: async (page = 1) => parseAssetsPage(await get(`/api/stats/assets/explorer?page=${page}&limit=200&search=&min_value=0&sort_by=value&sort_order=desc`, "tokenization")),
    tvlKpis: async () => parseTvlKpis(await named("tvlKpis")),
    tvlByCategory: async () => parseTvlByCategory(await named("tvlByCategory")),
    protocolTvl: async () => parseProtocolTvl(await named("protocolTvl")),
    protocolTvlDaily: async () => parseProtocolTvlDaily(await named("protocolTvlDaily")),
    categoryTvlDaily: async () => parseCategoryTvlDaily(await named("categoryTvlDaily")),
    economicsKpis: async () => parseEconomicsKpis(await named("economicsKpis")),
    economicsDaily: async () => parseEconomicsDaily(await named("economicsDaily")),
    activityDaily: async () => parseActivityDaily(await named("activityDaily")),
    topAssets: async () => parseTopAssets(await named("topAssets")),
    volumeByAsset: async () => parseVolumeByAsset(await named("volumeByAsset")),
    tokenization: async () => parseTokenization(await named("tokenization")),
    tokenizationDaily: async () => parseTokenizationDaily(await named("tokenizationDaily")),
    transfers: async () => parseTransfers(await named("transfers")),
    mintburn: async () => parseMintburn(await named("mintburn")),
    liquidity: async () => parseLiquidity(await named("liquidity")),
  };
}

export function parseTickers(body) {
  return rows(body).flatMap((row) => {
    const base = address(row?.base_currency);
    const target = address(row?.target_currency);
    if (!base || !target) return [];
    return [{
      ticker_id: text(row?.ticker_id),
      base_currency: base,
      target_currency: target,
      pool_id: text(row?.pool_id),
      last_price: finite(row?.last_price),
      base_volume: finite(row?.base_volume),
      target_volume: finite(row?.target_volume),
      high: finite(row?.high),
      low: finite(row?.low),
    }];
  });
}

export function parseTokens(body) {
  return rows(body?.tokens ?? body).flatMap((row) => {
    const tokenAddress = address(row?.address);
    if (!tokenAddress) return [];
    return [{
      name: text(row?.name), symbol: text(row?.symbol), address: tokenAddress,
      decimals: finite(row?.decimals), source: text(row?.source), type: text(row?.type),
      category: text(row?.category), liquid: row?.liquid === true,
      can_buy: row?.can_buy === true, can_sell: row?.can_sell === true,
    }];
  });
}

export function parseAssetsPage(body) {
  const data = rows(body).flatMap((row) => {
    const tokenAddress = address(row?.address);
    if (!tokenAddress) return [];
    return [{
      symbol: text(row?.symbol), name: text(row?.name), category: text(row?.category),
      address: tokenAddress, price: finite(row?.price), shares: finite(row?.shares),
      value: finite(row?.value), pct_total: finite(row?.pct_total),
      change_1d: finite(row?.change_1d), change_7d: finite(row?.change_7d), change_30d: finite(row?.change_30d),
    }];
  });
  return {
    data,
    categories: Array.isArray(body?.categories) ? body.categories.filter((item) => typeof item === "string") : [],
    nextPage: Number.isInteger(body?.nextPage) ? body.nextPage : null,
    totalAssets: finite(body?.totalAssets),
  };
}

export function parseSymbols(body) {
  return rows(body?.symbols ?? body).flatMap((row) => {
    const ticker = text(row?.ticker);
    if (!ticker) return [];
    return [{
      ticker, name: text(row?.name), address: address(row?.address), category: text(row?.category),
      logo_url: text(row?.logo_url), website: text(row?.website), twitter: text(row?.twitter),
      linkedin: text(row?.linkedin),
      listed_at_fe: typeof row?.listed_at_fe === "boolean" ? row.listed_at_fe : text(row?.listed_at_fe),
    }];
  });
}

export function parseTvlKpis(body) {
  const data = body?.data ?? {};
  return {
    total_tracked_usd: finite(data.total_tracked_tvl),
    stablecoin_usd: finite(data.total_stablecoin_usd),
    asset_supply_usd: finite(data.total_asset_supply_usd),
  };
}

export function parseTvlByCategory(body) {
  return rows(body).flatMap((row) => {
    const category = text(row?.category);
    const tvl = finite(row?.tvl_usd);
    return category && tvl !== null ? [{ category, tvl_usd: tvl }] : [];
  });
}

export function parseProtocolTvl(body) {
  return rows(body).flatMap((row) => {
    const protocol = text(row?.protocol);
    const category = text(row?.category);
    const tvl = finite(row?.tvl_usd);
    return protocol && category && tvl !== null
      ? [{ protocol, category, tvl_usd: tvl, total_tracked_tvl: finite(row?.total_tracked_tvl), share: finite(row?.share) }]
      : [];
  });
}

const parseDated = (body, dayKey, mapper) => rows(body).flatMap((row) => {
  const at = date(row?.[dayKey]);
  return at ? [{ date: at, ...mapper(row) }] : [];
}).sort((a, b) => a.date.localeCompare(b.date));

export function parseProtocolTvlDaily(body) {
  return parseDated(body, "day", (row) => ({ protocol: text(row?.protocol), category: text(row?.category), tvl_usd: finite(row?.tvl_usd) }));
}

export function parseCategoryTvlDaily(body) {
  return parseDated(body, "day", (row) => ({ category: text(row?.category), tvl_usd: finite(row?.tvl_usd) }));
}

export function parseEconomicsKpis(body) {
  const data = body?.data ?? {};
  return {
    cum_fee_revenue_usd: finite(data.cum_fee_revenue),
    cum_gross_profit_usd: finite(data.cum_gross_profit),
    gross_margin_pct: finite(data.gross_margin_pct),
    latest_day: date(data.latest_day),
  };
}

export function parseEconomicsDaily(body) {
  return parseDated(body, "day", (row) => ({
    fee_revenue_usd: finite(row?.fee_revenue), gross_profit_usd: finite(row?.gross_profit), tx_count: finite(row?.txs),
  }));
}

export function parseActivityDaily(body) {
  return parseDated(body, "date", (row) => ({
    daily_volume_usd: finite(row?.daily_volume_usd), active_wallets: finite(row?.active_wallets), tx_count: finite(row?.tx_count),
  }));
}

export function parseTopAssets(body) {
  return rows(body).map((row) => ({
    rank: finite(row?.rank), token_symbol: text(row?.token_symbol), token_name: text(row?.token_name),
    category: text(row?.category), volume_usd: finite(row?.volume_usd), share_pct: finite(row?.share_pct),
  }));
}

export function parseVolumeByAsset(body) {
  return parseDated(body, "date", (row) => ({
    total_volume_usd: finite(row?.total_volume_usd),
    assets: Object.entries(row?.assets ?? {}).map(([symbol, asset]) => ({
      token_symbol: symbol,
      token_name: text(asset?.token_name),
      category: text(asset?.category),
      volume_usd: finite(asset?.volume_usd),
      share_pct: finite(asset?.share_pct),
    })),
  }));
}

export function parseTokenization(body) {
  const data = body?.data ?? body ?? {};
  return {
    assets: finite(data.total_assets_tokenized), value_usd: finite(data.total_value_tokenized_usd),
    mint_24h_usd: finite(data.mint_volume_24h_usd), net_minting: typeof data.net_minting === "boolean" ? data.net_minting : null,
  };
}

export function parseTokenizationDaily(body) {
  return parseDated(body, "date", (row) => ({ value_usd: finite(row?.value) }));
}

export function parseTransfers(body) {
  const data = body?.data ?? body ?? {};
  return {
    d1_volume_usd: finite(data.d1_volume_usd), d7_volume_usd: finite(data.d7_volume_usd),
    all_time_transfers: finite(data.all_time_transfers),
  };
}

export function parseMintburn(body) {
  const data = body?.data ?? body ?? {};
  return { mint_24h_usd: finite(data.mint_24h_usd), cumulative_net_usd: finite(data.cumulative_net_usd) };
}

export function parseLiquidity(body) {
  return {
    spreads: Array.isArray(body?.spreads) ? body.spreads : [],
    // prices[] is the only place Rialto publishes a per-token 24h USD volume. Keeping it is what
    // makes the DexScreener cross-check like-for-like: both sides are then one token's whole day.
    prices: Array.isArray(body?.prices) ? body.prices.flatMap((row) => {
      const tokenAddress = address(row?.address);
      if (!tokenAddress) return [];
      return [{
        address: tokenAddress,
        symbol: text(row?.symbol),
        price_usd: finite(row?.price),
        volume_24h_usd: finite(row?.volume_24h_usd),
      }];
    }) : [],
  };
}

/**
 * Pages the asset explorer. A page that fails keeps the pages already read and records which page
 * was lost: an explorer of 202 assets always runs two pages, and losing the second one must not
 * empty every pair_asset row and the explorer leg of discovery.
 */
export async function readAllAssets(client, { errors = [] } = {}) {
  const all = [];
  let page = 1;
  const seen = new Set();
  while (page && !seen.has(page) && seen.size < 10) {
    seen.add(page);
    let result;
    try {
      result = await client.assetsPage(page);
    } catch (error) {
      errors.push({
        step: "stats/assets/explorer",
        message: `page ${page}: ${error instanceof Error ? error.message : String(error)}`,
      });
      break;
    }
    all.push(...result.data);
    page = result.nextPage;
  }
  return all;
}

const emptyRollup = () => ({ latest: null, sum_7d: null, sum_30d: null });

export function activityRollup(series, key) {
  const values = series.filter((row) => typeof row?.[key] === "number");
  if (values.length === 0) return emptyRollup();
  const sum = (count) => values.slice(-count).reduce((total, row) => total + row[key], 0);
  return { latest: values.at(-1)[key], sum_7d: sum(7), sum_30d: sum(30) };
}

function categorySeries(rowsIn) {
  const days = new Map();
  for (const row of rowsIn) {
    if (!row.date || !row.category || typeof row.tvl_usd !== "number") continue;
    if (!days.has(row.date)) days.set(row.date, {});
    days.get(row.date)[row.category] = row.tvl_usd;
  }
  return [...days].sort((a, b) => a[0].localeCompare(b[0])).slice(-90);
}

const pointSeries = (rowsIn, key) => rowsIn
  .flatMap((row) => row.date && typeof row[key] === "number" ? [[row.date, row[key]]] : [])
  .slice(-90);

async function safe(read, step, errors, fallback) {
  try {
    return await read();
  } catch (error) {
    errors.push({ step, message: error instanceof Error ? error.message : String(error) });
    return fallback;
  }
}

/** Reads every chain and reference endpoint once; failures stay local to their output block. */
export async function readRialto(client, { pulledAt } = {}) {
  const tvlErrors = [], economicsErrors = [], activityErrors = [], tokenizationErrors = [];
  const transfersErrors = [], mintburnErrors = [], referenceErrors = [];
  const [tickers, tokens, symbols, assets, liquidity, tvlKpis, byCategory, byProtocol,
    categoryDaily, protocolDaily, economicsKpis, economicsDaily, activityDaily, topAssets,
    volumeByAsset, tokenization, tokenizationDaily, transfers, mintburn] = await Promise.all([
    safe(() => client.tickers(), "router/tickers", referenceErrors, []),
    safe(() => client.tokens(), "router/tokens", referenceErrors, []),
    safe(() => client.symbols(), "market/robinhood-symbols", referenceErrors, []),
    safe(() => readAllAssets(client, { errors: referenceErrors }), "stats/assets/explorer", referenceErrors, []),
    safe(() => client.liquidity(), "liquidity/spreads", referenceErrors, { spreads: [], prices: [] }),
    safe(() => client.tvlKpis(), "stats/tvl/kpis", tvlErrors, parseTvlKpis(null)),
    safe(() => client.tvlByCategory(), "stats/tvl/tvl-by-category", tvlErrors, []),
    safe(() => client.protocolTvl(), "stats/tvl/protocol-tvl", tvlErrors, []),
    safe(() => client.categoryTvlDaily(), "stats/tvl/tvl-by-category-over-time", tvlErrors, []),
    safe(() => client.protocolTvlDaily(), "stats/tvl/protocol-tvl-over-time", tvlErrors, []),
    safe(() => client.economicsKpis(), "stats/onchain-economics/kpis", economicsErrors, parseEconomicsKpis(null)),
    safe(() => client.economicsDaily(), "stats/onchain-economics/daily-metrics", economicsErrors, []),
    safe(() => client.activityDaily(), "stats/metrics/overview", activityErrors, []),
    safe(() => client.topAssets(), "stats/metrics/top-assets", activityErrors, []),
    safe(() => client.volumeByAsset(), "stats/metrics/volume-by-asset", activityErrors, []),
    safe(() => client.tokenization(), "stats/tokenization/stats", tokenizationErrors, parseTokenization(null)),
    safe(() => client.tokenizationDaily(), "stats/tokenization/total-value-tokenized-over-time", tokenizationErrors, []),
    safe(() => client.transfers(), "stats/transfers/headline-stats", transfersErrors, parseTransfers(null)),
    safe(() => client.mintburn(), "stats/mintburn/stats", mintburnErrors, parseMintburn(null)),
  ]);

  const latestActivity = activityDaily.at(-1)?.date ?? null;
  const chain = {
    pulled_at: pulledAt,
    tvl: { ...tvlKpis, by_category: byCategory, by_protocol: byProtocol, source_url: RIALTO_PAGES.tvl, errors: tvlErrors },
    economics: { ...economicsKpis, source_url: RIALTO_PAGES.economics, errors: economicsErrors },
    activity: {
      latest_day: latestActivity,
      daily_volume_usd: activityRollup(activityDaily, "daily_volume_usd"),
      active_wallets: activityRollup(activityDaily, "active_wallets"),
      tx_count: activityRollup(activityDaily, "tx_count"),
      source_url: RIALTO_PAGES.markets,
      errors: activityErrors,
    },
    tokenization: { ...tokenization, source_url: RIALTO_PAGES.tokenization, errors: tokenizationErrors },
    transfers: { ...transfers, source_url: RIALTO_PAGES.transfers, errors: transfersErrors },
    mintburn: { ...mintburn, source_url: RIALTO_PAGES.tokenization, errors: mintburnErrors },
  };
  const series = {
    tvl_by_category_daily: categorySeries(categoryDaily),
    volume_daily: pointSeries(activityDaily, "daily_volume_usd"),
    active_wallets_daily: pointSeries(activityDaily, "active_wallets"),
    fee_revenue_daily: pointSeries(economicsDaily, "fee_revenue_usd"),
  };
  return {
    chain,
    series,
    reference: { tickers, tokens, symbols, assets, liquidity, topAssets, volumeByAsset, tokenizationDaily, protocolDaily },
    errors: referenceErrors,
  };
}

const identity = (value) => text(value)?.toLowerCase() ?? null;

// Three Rialto endpoints name tokenized real-world assets, each in its own vocabulary, and none of
// the three uses the words the others use. Enumerate them rather than pattern-matching: a regex over
// "stock|etf" silently admits `US Treasuries` and `Commodities`, and silently excludes nothing at
// all from `market/robinhood-symbols`, whose largest category is plain `token`.
//   router/tokens            category: crypto | stock | etf        type: stable | non_stable
//   market/robinhood-symbols category: stock | etf | token         (older reads capitalised these)
//   stats/assets/explorer    category: Commodities | ETFs | Stocks | US Treasuries
const STOCK_CATEGORIES = new Set(["stock", "stocks", "etf", "etfs"]);
const TOKENIZED_CATEGORIES = new Set([
  ...STOCK_CATEGORIES, "commodities", "commodity", "us treasuries", "treasuries", "stable", "stables",
]);
/** A tokenized stock or ETF: the only thing a name can have as a pair asset. */
const isStockCategory = (category) => STOCK_CATEGORIES.has(identity(category) ?? "");
/** Any Robinhood-listed real-world asset or stablecoin: never a discovery candidate. */
const isTokenizedCategory = (category) => TOKENIZED_CATEGORIES.has(identity(category) ?? "");
// The ERC-20 stand-in for native ETH. It is a sentinel, not a deployed token, so it is never a name.
const NATIVE_SENTINEL = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

function tokenIndexes(reference) {
  const tokens = new Map(reference.tokens.map((row) => [row.address, row]));
  const prices = new Map(reference.liquidity.prices.map((row) => [row.address, row]));
  return { tokens, prices };
}

/**
 * Rialto's own published 24h USD volume for one token, from liquidity/spreads. This is the whole
 * token's day across everything Rialto indexes — the only Rialto figure comparable with a
 * DexScreener per-token total. Null when Rialto does not price the token.
 */
export function publishedVolume24hUsd(tokenAddress, reference) {
  const normalized = address(tokenAddress);
  if (!normalized) return null;
  const row = (reference?.liquidity?.prices ?? []).find((price) => price.address === normalized);
  return typeof row?.volume_24h_usd === "number" ? row.volume_24h_usd : null;
}

/**
 * One pool leg's 24h volume in USD, priced off the counter-asset. This is per-leg detail only: the
 * router indexes some of a token's pools and can price only some of those legs, so summing it
 * produces a partial figure that must never be set beside a whole-token total from another source.
 */
function counterUsdVolume(pair, tokenAddress, indexes) {
  const isBase = pair.base_currency === tokenAddress;
  const counter = isBase ? pair.target_currency : pair.base_currency;
  const counterVolume = isBase ? pair.target_volume : pair.base_volume;
  if (typeof counterVolume !== "number") return null;
  const counterToken = indexes.tokens.get(counter);
  if (counterToken?.type?.toLowerCase() === "stable") return counterVolume;
  const symbol = counterToken?.symbol?.toUpperCase() ?? indexes.prices.get(counter)?.symbol?.toUpperCase();
  if (symbol !== "ETH" && symbol !== "WETH") return null;
  const price = indexes.prices.get(counter)?.price_usd;
  return typeof price === "number" ? counterVolume * price : null;
}

export function rialtoMarketFor(tokenAddress, reference, { asOf } = {}) {
  const normalized = address(tokenAddress);
  if (!normalized) return null;
  const indexes = tokenIndexes(reference);
  const pairs = reference.tickers
    .filter((row) => row.base_currency === normalized || row.target_currency === normalized)
    .map((row) => ({
      pool_id: row.pool_id,
      base: row.base_currency,
      target: row.target_currency,
      last_price: row.last_price,
      base_volume_24h: row.base_volume,
      target_volume_24h: row.target_volume,
      volume_24h_usd: counterUsdVolume(row, normalized, indexes),
    }));
  if (pairs.length === 0) return null;
  const published = publishedVolume24hUsd(normalized, reference);
  const priced = pairs.filter((row) => typeof row.volume_24h_usd === "number").length;
  return {
    pairs,
    volume_24h_usd: published,
    volume_note: published === null
      ? `Rialto publishes no 24h USD volume for this token: liquidity/spreads has no price row for it. ` +
        `The ${priced} of ${pairs.length} pool legs below that could be priced sum to a partial figure, ` +
        `which is not comparable with another source's whole-token total.`
      : null,
    as_of: asOf,
    source_url: RIALTO_PAGES.markets,
  };
}

/**
 * Both sides must be the same measure: one token's whole 24h volume. Anything else — a missing
 * figure on either side, or a partial sum — is not a disagreement, it is an absence, and returns
 * null. When Rialto's side is missing, market.rialto.volume_note says why.
 */
export function volumeDisagreement(dexscreenerUsd, rialtoUsd) {
  if (typeof dexscreenerUsd !== "number" || typeof rialtoUsd !== "number") return null;
  if (dexscreenerUsd === 0 && rialtoUsd === 0) return null;
  const small = Math.min(dexscreenerUsd, rialtoUsd);
  const large = Math.max(dexscreenerUsd, rialtoUsd);
  return small === 0 || large / small > 2
    ? { dexscreener_usd: dexscreenerUsd, rialto_usd: rialtoUsd }
    : null;
}

function candidatePairTicker(project, market, rialto, reference) {
  const themed = (project?.themes ?? []).find((value) => /^stock-paired:/i.test(value));
  if (themed) return themed.split(":").slice(1).join(":").trim().toUpperCase();
  // Only tokenized stocks and ETFs are candidates. robinhood-symbols also lists 56 plain tokens
  // (ETH, WETH, USDG among them), and quoting a pool in WETH does not make WETH a tokenized stock.
  const stocks = reference.symbols.filter((row) => isStockCategory(row.category));
  const tickers = new Set(stocks.map((row) => row.ticker.toUpperCase()));
  for (const deployment of project?.deployments ?? []) {
    const ticker = text(deployment?.ticker)?.toUpperCase();
    if (ticker && tickers.has(ticker)) return ticker;
  }
  for (const pair of market?.pairs ?? []) {
    const symbol = text(pair?.quote_symbol)?.toUpperCase();
    if (symbol && tickers.has(symbol)) return symbol;
  }
  const own = address(market?.token_address);
  for (const pair of rialto?.pairs ?? []) {
    const counter = pair.base === own ? pair.target : pair.base;
    const found = stocks.find((row) => row.address === counter);
    if (found) return found.ticker.toUpperCase();
  }
  return null;
}

export function pairAssetFor(project, censusRow, market, rialto, reference) {
  const primary = censusRow?.tree?.primary ?? "";
  if (primary !== "rwa-products/stock-paired-token" && !primary.startsWith("rwa-products/")) return null;
  const ticker = candidatePairTicker(project, market, rialto, reference);
  if (!ticker) return null;
  // The explorer only ever lists tokenized real-world assets, so a row there is proof on its own;
  // a robinhood-symbols row has to name a stock or an ETF. A project theme naming something else
  // (a quote token, say) resolves to neither and leaves pair_asset null rather than mislabelling it.
  const symbol = reference.symbols.find((row) => row.ticker.toUpperCase() === ticker && isStockCategory(row.category)) ?? null;
  const asset = reference.assets.find((row) => row.symbol?.toUpperCase() === ticker || (symbol?.address && row.address === symbol.address)) ?? null;
  if (!symbol && !asset) return null;
  return {
    ticker,
    name: symbol?.name ?? asset?.name ?? ticker,
    address: symbol?.address ?? asset?.address ?? null,
    category: symbol?.category ?? asset?.category ?? null,
    tokenized_value_usd: asset?.value ?? null,
    // shares, not holders: the explorer's own value / price. Named for what it is.
    tokenized_shares: asset?.shares ?? null,
    change_7d: asset?.change_7d ?? null,
    source_url: RIALTO_PAGES.tokenization,
  };
}

/**
 * Every address Rialto knows that is neither a census name nor a Robinhood-listed real-world asset.
 * One exclusion set is built first and applied to all three sources: an address rejected as an ETF
 * by the router-tokens leg must not walk back in through the tickers leg.
 */
export function discoveryCandidates({ reference, census = [], projects = new Map(), existing = [], pulledAt }) {
  const knownNames = new Set();
  const excluded = new Set([NATIVE_SENTINEL]);
  for (const row of census) {
    const project = projects.get(row.slug);
    for (const deployment of project?.deployments ?? []) {
      const found = address(deployment?.address);
      if (found) excluded.add(found);
    }
    for (const value of [row.slug, project?.name, project?.symbol]) {
      const found = identity(value);
      if (found) knownNames.add(found);
    }
  }
  for (const row of reference.tokens) {
    if (isTokenizedCategory(row.category) || identity(row.type) === "stable") excluded.add(row.address);
  }
  for (const row of reference.symbols) {
    if (row.address && isTokenizedCategory(row.category)) excluded.add(row.address);
  }
  for (const row of reference.assets) {
    if (isTokenizedCategory(row.category)) excluded.add(row.address);
  }
  const prior = new Map(existing.map((row) => [address(row?.address), row?.first_seen]).filter(([key]) => key));
  const candidates = new Map();
  const add = (tokenAddress, symbol, name, source) => {
    const normalized = address(tokenAddress);
    if (!normalized || excluded.has(normalized)) return;
    if ([symbol, name].map(identity).some((value) => value && knownNames.has(value))) return;
    const current = candidates.get(normalized) ?? {
      address: normalized, symbol: text(symbol), name: text(name), first_seen: prior.get(normalized) ?? pulledAt,
      rialto_volume_24h_usd: null, dexscreener_liquidity_usd: null, source_urls: [],
    };
    if (!current.symbol) current.symbol = text(symbol);
    if (!current.name) current.name = text(name);
    if (!current.source_urls.includes(source)) current.source_urls.push(source);
    candidates.set(normalized, current);
  };
  for (const token of reference.tokens) {
    add(token.address, token.symbol, token.name, RIALTO_PAGES.markets);
  }
  for (const asset of reference.assets) {
    add(asset.address, asset.symbol, asset.name, RIALTO_PAGES.tokenization);
  }
  const tokenByAddress = new Map(reference.tokens.map((row) => [row.address, row]));
  const priceByAddress = new Map(reference.liquidity.prices.map((row) => [row.address, row]));
  for (const ticker of reference.tickers) {
    for (const tokenAddress of [ticker.base_currency, ticker.target_currency]) {
      const token = tokenByAddress.get(tokenAddress) ?? priceByAddress.get(tokenAddress);
      add(tokenAddress, token?.symbol, token?.name, RIALTO_PAGES.markets);
    }
  }
  for (const row of candidates.values()) {
    // Rialto's own published figure, so a candidate that trades outside the router's own pools is
    // still sized. A token Rialto does not price stays null rather than being sized from one leg.
    row.rialto_volume_24h_usd = publishedVolume24hUsd(row.address, reference);
  }
  return [...candidates.values()].sort((a, b) =>
    String(b.first_seen).localeCompare(String(a.first_seen)) ||
    (b.rialto_volume_24h_usd ?? -1) - (a.rialto_volume_24h_usd ?? -1) ||
    (a.symbol ?? a.address).localeCompare(b.symbol ?? b.address));
}
