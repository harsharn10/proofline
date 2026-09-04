import {
  evaluatePulse,
  markFired,
  pruneFiredAt,
  PULSE_KINDS,
  PULSE_RULES,
  selectPulseDeliveries,
} from "../../scripts/lib/signals.mjs";

const GECKO_BASE = "https://api.geckoterminal.com/api/v2/networks/robinhood";
const DEX_BASE = "https://api.dexscreener.com/token-pairs/v1/robinhood";
const RIALTO_TICKERS = "https://analytics.rialto.xyz/api/router/tickers";
const RIALTO_STOCKS = "https://analytics.rialto.xyz/api/market/robinhood-symbols";
const EXPLORER = "https://robinhoodchain.blockscout.com";
const STOCK_CACHE_MS = 24 * 60 * 60 * 1000;
const STATE_KEY = "state";
const OUTPUT_KEY = "pulse.json";

const RIALTO_HEADERS = {
  Accept: "application/json, text/plain, */*",
  Referer: "https://analytics.rialto.xyz/markets",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
};

const lower = (value) => String(value ?? "").toLowerCase();
const number = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};
const tokenId = (relationship) => String(relationship?.data?.id ?? "").replace(/^robinhood_/i, "");

async function json(url, init = {}, fetchImpl = fetch) {
  const response = await fetchImpl(url, init);
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
  const contentType = response.headers?.get?.("content-type") ?? "";
  if (!/json/i.test(contentType)) throw new Error(`${url} did not return JSON`);
  return response.json();
}

// Rialto is a scraped endpoint behind browser headers and DexScreener indexes on its own schedule:
// any of the four source reads can fail on any tick. One failure must cost that source's numbers for
// the tick, never the whole tick — a 403 from Rialto used to throw before a single rule was evaluated.
async function safeJson(label, url, init, fetchImpl, fallback) {
  try {
    return await json(url, init, fetchImpl);
  } catch (error) {
    console.warn(`[pulse] ${label} unavailable: ${error instanceof Error ? error.message : String(error)}`);
    return fallback;
  }
}

function geckoPools(body) {
  return Array.isArray(body?.data) ? body.data : [];
}

function launchpadName(dexId) {
  const id = lower(dexId);
  if (id.includes("pons")) return "Pons";
  if (id.includes("hookr")) return "Hookr";
  if (id.includes("bankr")) return "Bankr";
  if (id.includes("long") || id.includes("doppler")) return "LONG";
  return null;
}

function normalizeGecko(row) {
  const attributes = row?.attributes ?? {};
  const pair = String(attributes.address ?? row?.id ?? "").replace(/^robinhood_/i, "");
  const [baseName = "Unknown", quoteName = ""] = String(attributes.name ?? "Unknown").split(/\s+\/\s+/);
  const dexId = row?.relationships?.dex?.data?.id ?? null;
  return {
    symbol: baseName.trim(),
    quoteSymbol: quoteName.trim().split(/\s+/)[0] ?? "",
    token: tokenId(row?.relationships?.base_token),
    quoteToken: tokenId(row?.relationships?.quote_token),
    pair,
    launchpad: launchpadName(dexId),
    createdAt: attributes.pool_created_at ?? null,
    liquidityUsd: number(attributes.reserve_in_usd),
    volumeH1Usd: number(attributes.volume_usd?.h1),
    volumeH6Usd: number(attributes.volume_usd?.h6),
    volumeH24Usd: number(attributes.volume_usd?.h24),
    marketCapUsd: number(attributes.market_cap_usd),
    fdvUsd: number(attributes.fdv_usd),
    basePriceUsd: number(attributes.base_token_price_usd),
    quotePriceUsd: number(attributes.quote_token_price_usd),
    dexId,
    links: {
      geckoterminal: `https://www.geckoterminal.com/robinhood/pools/${pair}`,
      dexscreener: `https://dexscreener.com/robinhood/${pair}`,
      explorer: `${EXPLORER}/token/${tokenId(row?.relationships?.base_token)}`,
      rialto: "https://analytics.rialto.xyz/markets",
    },
  };
}

// Only the row for this exact pair. DexScreener returns every pool for the token, and falling back
// to another one attached an established pool's liquidity and volume to a fresh pair's address and
// links — a number the reader could not check against the page it points at. With no match we keep
// GeckoTerminal's numbers, which are the pair's own.
function chooseDexPair(rows, pool) {
  if (!Array.isArray(rows)) return null;
  return rows.find((row) => lower(row.pairAddress) === lower(pool.pair)) ?? null;
}

function mergeDex(pool, dex) {
  if (!dex) return pool;
  const pairCreatedAt = Number(dex.pairCreatedAt);
  return {
    ...pool,
    symbol: dex.baseToken?.symbol || pool.symbol,
    quoteSymbol: dex.quoteToken?.symbol || pool.quoteSymbol,
    quoteToken: dex.quoteToken?.address || pool.quoteToken,
    launchpad: launchpadName(dex.dexId) ?? pool.launchpad,
    createdAt: Number.isFinite(pairCreatedAt) ? new Date(pairCreatedAt).toISOString() : pool.createdAt,
    liquidityUsd: number(dex.liquidity?.usd) ?? pool.liquidityUsd,
    volumeH1Usd: number(dex.volume?.h1) ?? pool.volumeH1Usd,
    volumeH6Usd: number(dex.volume?.h6) ?? pool.volumeH6Usd,
    volumeH24Usd: number(dex.volume?.h24) ?? pool.volumeH24Usd,
    marketCapUsd: number(dex.marketCap) ?? pool.marketCapUsd,
    fdvUsd: number(dex.fdv) ?? pool.fdvUsd,
    links: {
      ...pool.links,
      dexscreener: dex.url || pool.links.dexscreener,
    },
  };
}

function rialtoCrossCheck(pool, tickers) {
  const ticker = tickers.find((row) => lower(row.pool_id) === lower(pool.pair));
  if (!ticker) return null;
  const legs = [];
  const baseVolume = number(ticker.base_volume);
  const targetVolume = number(ticker.target_volume);
  if (baseVolume !== null && lower(ticker.base_currency) === lower(pool.token) && pool.basePriceUsd !== null) {
    legs.push(baseVolume * pool.basePriceUsd);
  } else if (baseVolume !== null && lower(ticker.base_currency) === lower(pool.quoteToken) && pool.quotePriceUsd !== null) {
    legs.push(baseVolume * pool.quotePriceUsd);
  }
  if (targetVolume !== null && lower(ticker.target_currency) === lower(pool.token) && pool.basePriceUsd !== null) {
    legs.push(targetVolume * pool.basePriceUsd);
  } else if (targetVolume !== null && lower(ticker.target_currency) === lower(pool.quoteToken) && pool.quotePriceUsd !== null) {
    legs.push(targetVolume * pool.quotePriceUsd);
  }
  const valid = legs.filter((value) => Number.isFinite(value));
  return valid.length ? valid.reduce((sum, value) => sum + value, 0) / valid.length : null;
}

function stockMap(body) {
  const symbols = Array.isArray(body?.symbols) ? body.symbols : [];
  const stockTokens = {};
  const stockTickers = [];
  for (const row of symbols) {
    if (!row || !["stock", "etf"].includes(lower(row.category)) || !row.ticker) continue;
    stockTickers.push(String(row.ticker).toUpperCase());
    if (row.address) stockTokens[lower(row.address)] = String(row.ticker).toUpperCase();
  }
  return { stockTokens, stockTickers };
}

async function readState(kv) {
  return await kv.get(STATE_KEY, "json") ?? {
    ticks: 0,
    historyByPair: {},
    firedAt: {},
    sentAt: [],
    stockTokens: {},
    stockTickers: [],
    stockAt: null,
  };
}

const FAILED = Symbol("failed");

async function sourceRows(state, now, fetchImpl) {
  const stockAge = now - Date.parse(state.stockAt ?? "");
  const wantStocks = !Number.isFinite(stockAge) || stockAge >= STOCK_CACHE_MS;
  const [trending, newest, tickers, stocks] = await Promise.all([
    safeJson("GeckoTerminal trending_pools", `${GECKO_BASE}/trending_pools?page=1`, {}, fetchImpl, FAILED),
    safeJson("GeckoTerminal new_pools", `${GECKO_BASE}/new_pools?page=1`, {}, fetchImpl, FAILED),
    safeJson("Rialto router/tickers", RIALTO_TICKERS, { headers: RIALTO_HEADERS }, fetchImpl, []),
    wantStocks
      ? safeJson("Rialto robinhood-symbols", RIALTO_STOCKS, { headers: RIALTO_HEADERS }, fetchImpl, FAILED)
      : null,
  ]);
  return {
    trending: trending === FAILED ? { data: [] } : trending,
    newest: newest === FAILED ? { data: [] } : newest,
    tickers,
    stocks,
    // A failed symbols read keeps the cached list and leaves stockAt alone, so the next tick retries
    // instead of running the stock-pair rule against an empty table.
    refreshStocks: wantStocks && stocks !== FAILED && stocks !== null,
    // Both pool lists gone means there is nothing to evaluate. Say so rather than publishing an
    // empty market.
    geckoOk: trending !== FAILED || newest !== FAILED,
  };
}

async function enrichPools(rows, fetchImpl) {
  const byPair = new Map();
  for (const row of [...geckoPools(rows.trending), ...geckoPools(rows.newest)]) {
    const pool = normalizeGecko(row);
    if (pool.pair && pool.token && !byPair.has(lower(pool.pair))) byPair.set(lower(pool.pair), pool);
  }
  const pools = [...byPair.values()];
  const tokens = [...new Set(pools.map((pool) => lower(pool.token)).filter(Boolean))].slice(0, 30);
  const dexResults = await Promise.all(tokens.map(async (token) =>
    [token, await safeJson(`DexScreener ${token}`, `${DEX_BASE}/${token}`, {}, fetchImpl, [])]));
  const dexByToken = new Map(dexResults);
  return pools.map((pool) => mergeDex(pool, chooseDexPair(dexByToken.get(lower(pool.token)), pool)));
}

function trimHistory(historyByPair, pairs, at) {
  const cutoff = Date.parse(at) - PULSE_RULES.cooldownMs;
  const next = Object.fromEntries(Object.entries(historyByPair).filter(([, rows]) => {
    const last = Array.isArray(rows) ? Date.parse(rows.at(-1)?.at ?? "") : NaN;
    return Number.isFinite(last) && last >= cutoff;
  }));
  for (const pair of pairs) {
    const key = lower(pair.pair);
    next[key] = [...(next[key] ?? []), { at, volumeH1Usd: pair.volumeH1Usd }].slice(-6);
  }
  return next;
}

function hotPair(pair) {
  return {
    symbol: pair.symbol,
    token: pair.token,
    pair: pair.pair,
    launchpad: pair.launchpad,
    volume_h1_usd: pair.volumeH1Usd,
    volume_h24_usd: pair.volumeH24Usd,
    rialto_volume_h24_usd: pair.rialtoVolumeH24Usd,
    liquidity_usd: pair.liquidityUsd,
    market_cap_usd: pair.marketCapUsd,
    fdv_usd: pair.fdvUsd,
    links: pair.links,
  };
}

const dryRun = (env) => !["0", "false", "off"].includes(lower(env.PULSE_DRY_RUN));

// The one switch the repository owns. The deploy workflow sets this variable from
// ops/telegram-review.json, so flipping the flag in the repo and pushing is what turns the Worker's
// delivery on or off — see docs/integrations/pulse.md. Anything other than the exact string "true"
// is paused, so a missing or misspelled value fails silent.
const telegramEnabled = (env) => lower(env.TELEGRAM_ENABLED) === "true";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// An href is an attribute value, not a text node: a quote inside a source URL closes the attribute
// and Telegram rejects the whole message with a 400. Anything that is not a plain http(s) URL is
// dropped rather than linked.
function anchor(url, label) {
  const href = String(url ?? "");
  if (!/^https?:\/\/[^\s]+$/i.test(href)) return null;
  return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

// "sent" — it left. "logged" — the switch or the dry run held it, which still counts as handled, so
// the same message is not reconsidered every ten minutes. "skipped" — not ours to send.
// A thrown error means delivery genuinely failed and the signal stays eligible for the next tick.
async function sendTelegram(item, env, fetchImpl) {
  if (!PULSE_KINDS.includes(item.kind)) {
    console.warn(`[pulse] not a pulse kind, leaving it to the digest: ${item.kind}`);
    return "skipped";
  }
  if (!telegramEnabled(env)) {
    console.log(`[pulse paused] ${item.headline}`);
    return "logged";
  }
  if (dryRun(env)) {
    console.log(`[pulse dry run] ${item.headline}`);
    return "logged";
  }
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) throw new Error("Telegram secrets are not configured");
  const kicker = {
    "new-launch": "New launch",
    breakout: "Breakout",
    "stock-pair-spike": "Stock pair",
  }[item.kind];
  const links = [
    anchor(item.links?.dexscreener, "DexScreener"),
    anchor(item.links?.explorer, "Explorer"),
  ].filter(Boolean).join(" · ");
  const text = `⚡ <b>Icarus pulse · ${escapeHtml(kicker)}</b>\n${escapeHtml(item.headline)}${links ? `\n\n${links}` : ""}`;
  const response = await fetchImpl(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: "HTML", disable_web_page_preview: true }),
  });
  if (!response.ok) throw new Error(`Telegram returned HTTP ${response.status}`);
  return "sent";
}

export async function runTick(env, { now = Date.now(), fetchImpl = fetch } = {}) {
  const at = new Date(now).toISOString();
  const state = await readState(env.PULSE_STATE);
  const rows = await sourceRows(state, now, fetchImpl);
  if (!rows.geckoOk) {
    // Publishing an empty market would be a lie, and refreshing `at` would tell the site's live badge
    // the reading is current. Leave the last document exactly where it is and let it visibly age.
    console.error("[pulse] both GeckoTerminal reads failed; keeping the previous /pulse.json");
    await env.PULSE_STATE.put(STATE_KEY, JSON.stringify({ ...state, lastSourceFailureAt: at }));
    const stored = await env.PULSE_STATE.get(OUTPUT_KEY);
    return stored ? JSON.parse(stored) : emptyOutput();
  }
  const pairs = await enrichPools(rows, fetchImpl);
  const tickers = Array.isArray(rows.tickers) ? rows.tickers : [];
  for (const pair of pairs) pair.rialtoVolumeH24Usd = rialtoCrossCheck(pair, tickers);

  const stocks = rows.refreshStocks ? stockMap(rows.stocks) : {
    stockTokens: state.stockTokens ?? {},
    stockTickers: state.stockTickers ?? [],
  };
  const candidates = evaluatePulse(pairs, {
    now,
    historyByPair: state.historyByPair,
    stockTokens: stocks.stockTokens,
    stockTickers: stocks.stockTickers,
  });
  const selected = selectPulseDeliveries(candidates, state, now);
  let firedAt = selected.firedAt;
  const deliveredAt = [];
  for (const item of selected.deliver) {
    try {
      const result = await sendTelegram(item, env, fetchImpl);
      if (result === "skipped") continue;
      // Recorded per message, after that message was handled — a Telegram failure mid-batch leaves
      // the rest of the tick's signals eligible instead of burning their cooldown.
      firedAt = markFired(firedAt, item, now);
      if (result === "sent") deliveredAt.push(at);
    } catch (error) {
      console.error(`[pulse] Telegram: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  const priorSent = (state.sentAt ?? []).filter((value) => now - Date.parse(value) < 24 * 60 * 60 * 1000);
  const nextState = {
    ...state,
    ticks: (state.ticks ?? 0) + 1,
    historyByPair: trimHistory(state.historyByPair ?? {}, pairs, at),
    firedAt: pruneFiredAt(firedAt, now, PULSE_RULES),
    sentAt: [...priorSent, ...deliveredAt],
    stockTokens: stocks.stockTokens,
    stockTickers: stocks.stockTickers,
    stockAt: rows.refreshStocks ? at : state.stockAt,
  };
  const output = {
    at,
    ticks: nextState.ticks,
    alerts: selected.fresh,
    hot: [...pairs]
      .filter((pair) => Number.isFinite(pair.volumeH1Usd))
      .sort((a, b) => b.volumeH1Usd - a.volumeH1Usd)
      .slice(0, 10)
      .map(hotPair),
    launches_10m: null,
  };
  await Promise.all([
    env.PULSE_STATE.put(STATE_KEY, JSON.stringify(nextState)),
    env.PULSE_STATE.put(OUTPUT_KEY, JSON.stringify(output)),
  ]);
  return output;
}

function emptyOutput() {
  return { at: null, ticks: 0, alerts: [], hot: [], launches_10m: null };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== "GET" || url.pathname !== "/pulse.json") {
      return new Response("Not found", { status: 404 });
    }
    const output = await env.PULSE_STATE.get(OUTPUT_KEY) ?? JSON.stringify(emptyOutput());
    return new Response(output, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },

  async scheduled(_controller, env, ctx) {
    // waitUntil swallows a rejection, so a thrown tick would otherwise disappear entirely.
    ctx.waitUntil(runTick(env).catch((error) => {
      console.error(`[pulse] tick failed: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
    }));
  },
};
