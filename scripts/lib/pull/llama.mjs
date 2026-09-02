// DefiLlama reads. The Llama slug is never typed: it is discovered from the URLs already cited in
// content/sources/<slug>.yaml. Every figure is taken from the Robinhood Chain slice, never the
// all-chain total (assignment: "chain-slice TVL, never the all-chain total").

import { requestJson } from "./http.mjs";

export const LLAMA_BASE = "https://api.llama.fi";

/** DefiLlama's display name for chain 4663, as it appears in chainTvls and chainBreakdown keys. */
export const LLAMA_CHAIN = "Robinhood Chain";

const SLUG_PATTERN =
  /(?:defillama\.com|api\.llama\.fi)\/(?:protocol|summary\/fees|summary\/dexs|summary\/options)\/([a-z0-9][a-z0-9._-]*)/gi;

/**
 * Finds the Llama protocol slug cited by a source ledger. Takes the most frequently cited slug so a
 * single stray link cannot outvote the ledger. Returns null when the ledger cites none.
 */
export function findLlamaSlug(sourceEntries = []) {
  const counts = new Map();
  for (const entry of sourceEntries) {
    const url = typeof entry === "string" ? entry : entry?.url;
    if (typeof url !== "string") continue;
    for (const m of url.matchAll(SLUG_PATTERN)) {
      const slug = m[1].toLowerCase().replace(/\?.*$/, "");
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }
  if (counts.size === 0) return null;
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
}

/** Latest {value, as_of} from the Robinhood Chain TVL series, or null when the chain has no series. */
export function latestChainTvl(body, chain = LLAMA_CHAIN) {
  const series = body?.chainTvls?.[chain]?.tvl;
  if (!Array.isArray(series) || series.length === 0) return null;
  const point = series[series.length - 1];
  const value = point?.totalLiquidityUSD ?? point?.tvl;
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  const seconds = typeof point?.date === "number" ? point.date : null;
  return { value, as_of: seconds ? new Date(seconds * 1000).toISOString() : null };
}

/** 24h total for the Robinhood Chain slice of a /summary response; falls back to nothing. */
export function chainTotal24h(body, chain = LLAMA_CHAIN) {
  const slice = body?.chainBreakdown?.[chain];
  const value = slice?.total24h;
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  return value;
}

export function createLlamaClient({ base = LLAMA_BASE, deps = {} } = {}) {
  return {
    protocolUrl: (slug) => `${base}/protocol/${slug}`,
    feesUrl: (slug, dataType) => `${base}/summary/fees/${slug}?dataType=${dataType}`,
    dexsUrl: (slug) => `${base}/summary/dexs/${slug}?dataType=dailyVolume`,
    get: (url) => requestJson(url, { headers: { Accept: "application/json" } }, deps),
  };
}

/**
 * Pulls tvl, fees_24h, revenue_24h and volume_24h for one Llama slug. Never throws: each failed or
 * absent figure is skipped and the reason recorded under step "llama".
 */
export async function readProtocol(client, llamaSlug, { asOf, chain = LLAMA_CHAIN } = {}) {
  const metrics = [];
  const errors = [];
  const record = (message) => errors.push({ step: "llama", message });

  const tvlUrl = client.protocolUrl(llamaSlug);
  try {
    const point = latestChainTvl(await client.get(tvlUrl), chain);
    if (point) metrics.push({ kind: "tvl", value: point.value, as_of: point.as_of ?? asOf, source_url: tvlUrl });
  } catch (e) {
    record(`protocol/${llamaSlug}: ${e.message}`);
  }

  const summaries = [
    { kind: "fees_24h", url: client.feesUrl(llamaSlug, "dailyFees") },
    { kind: "revenue_24h", url: client.feesUrl(llamaSlug, "dailyRevenue") },
    { kind: "volume_24h", url: client.dexsUrl(llamaSlug) },
  ];
  for (const { kind, url } of summaries) {
    try {
      const value = chainTotal24h(await client.get(url), chain);
      if (value !== null) metrics.push({ kind, value, as_of: asOf, source_url: url });
    } catch (e) {
      // A protocol with no fees or no DEX adapter answers 404; that is an absence, not a failure.
      if (!/HTTP 404/.test(e.message)) record(`${kind} ${llamaSlug}: ${e.message}`);
    }
  }

  return { metrics, errors };
}
