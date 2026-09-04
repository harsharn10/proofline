const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

export const PULSE_RULES = Object.freeze({
  newLaunch: { maxAgeMs: DAY_MS, minLiquidityUsd: 50_000, minVolumeH1Usd: 500_000 },
  // `minPriorHours` is the number of complete hours of trading history a breakout needs before the
  // comparison means anything. A pool younger than that is a launch, not a breakout: new-launch and
  // stock-pair-spike cover it. `minVolumeH1UsdFromZero` is the floor for the one honest zero-baseline
  // case — a pool with real history that traded nothing for hours and then moved.
  breakout: { multiple: 3, minLiquidityUsd: 100_000, minPriorHours: 2, minVolumeH1UsdFromZero: 500_000 },
  stockPair: { maxAgeMs: DAY_MS, minVolumeH1Usd: 250_000 },
  cooldownMs: 6 * HOUR_MS,
  // new-launch and stock-pair-spike describe a pool's arrival, so they fire once per pair rather than
  // once per cooldown: both rules only look at pools under 24 hours old, so remembering a fire for
  // 25 hours is once per pair for the whole life of the rule.
  onceKinds: Object.freeze(["new-launch", "stock-pair-spike"]),
  onceMemoryMs: 25 * HOUR_MS,
  hourlyCap: 3,
  dailyCap: 12,
});

// The only kinds the pulse Worker is allowed to deliver. The daily digest owns every other kind;
// see docs/integrations/pulse.md.
export const PULSE_KINDS = Object.freeze(["new-launch", "breakout", "stock-pair-spike"]);

const finite = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const lower = (value) => String(value ?? "").toLowerCase();

export function pairAgeMs(pair, now = Date.now()) {
  const createdAt = Date.parse(pair.createdAt ?? "");
  if (!Number.isFinite(createdAt)) return null;
  const age = now - createdAt;
  return age >= 0 ? age : null;
}

// How many complete hours sit inside the h6 window behind the current hour. GeckoTerminal and
// DexScreener both report h6 === h1 for a pool younger than six hours, because the windows simply
// cover the pool's whole life; dividing that by a fixed five invents five hours of quiet history and
// yields a prior average of exactly 0. Divide by the hours that actually exist instead.
export function priorWindowHours(pair, now = Date.now()) {
  const age = pairAgeMs(pair, now);
  if (age === null) return 5;
  return Math.min(5, Math.max(0, Math.floor(age / HOUR_MS) - 1));
}

export function previousHourlyAverage(pair, history = [], now = Date.now()) {
  const h1 = finite(pair.volumeH1Usd);
  const h6 = finite(pair.volumeH6Usd);
  const hours = priorWindowHours(pair, now);
  if (h1 !== null && h6 !== null && h6 >= h1 && hours >= 1) return (h6 - h1) / hours;
  const earlier = history
    .map((tick) => finite(tick.volumeH1Usd))
    .filter((value) => value !== null);
  if (!earlier.length) return null;
  return earlier.reduce((sum, value) => sum + value, 0) / earlier.length;
}

export function stockTickerFor(pair, stockTokens = {}, stockTickers = []) {
  const byAddress = stockTokens[lower(pair.quoteToken)];
  if (byAddress) return String(byAddress).toUpperCase();
  const quote = String(pair.quoteSymbol ?? "").toUpperCase();
  return new Set(stockTickers.map((ticker) => String(ticker).toUpperCase())).has(quote) ? quote : null;
}

// A pool first seen hours after it launched must not be announced as if it just opened. Under an
// hour old the h1 window is the pool's whole life; past that, say how old it is.
export function ageLabel(ageMs) {
  if (ageMs === null || !Number.isFinite(ageMs) || ageMs < HOUR_MS) return null;
  return `${Math.floor(ageMs / HOUR_MS)}h old`;
}

function signal(kind, pair, numbers, headline) {
  return {
    kind,
    symbol: pair.symbol,
    token: pair.token,
    pair: pair.pair,
    launchpad: pair.launchpad ?? null,
    headline,
    numbers,
    links: pair.links,
  };
}

export function evaluatePulsePair(pair, {
  now = Date.now(),
  history = [],
  stockTokens = {},
  stockTickers = [],
} = {}) {
  const ageMs = pairAgeMs(pair, now);
  const age = ageLabel(ageMs);
  const agePart = age ? ` · ${age}` : "";
  const liquidity = finite(pair.liquidityUsd);
  const h1 = finite(pair.volumeH1Usd);
  const priorHours = priorWindowHours(pair, now);
  const average = previousHourlyAverage(pair, history, now);
  const ticker = stockTickerFor(pair, stockTokens, stockTickers);
  const numbers = {
    liquidity_usd: liquidity,
    volume_h1_usd: h1,
    previous_hourly_average_usd: average,
    prior_window_hours: priorHours,
    volume_h24_usd: finite(pair.volumeH24Usd),
    rialto_volume_h24_usd: finite(pair.rialtoVolumeH24Usd),
    market_cap_usd: finite(pair.marketCapUsd),
    fdv_usd: finite(pair.fdvUsd),
  };
  const out = [];

  if (
    ageMs !== null && ageMs < PULSE_RULES.newLaunch.maxAgeMs &&
    liquidity !== null && liquidity >= PULSE_RULES.newLaunch.minLiquidityUsd &&
    h1 !== null && h1 >= PULSE_RULES.newLaunch.minVolumeH1Usd
  ) {
    out.push(signal(
      "new-launch",
      pair,
      numbers,
      `New: ${pair.symbol}${pair.launchpad ? ` on ${pair.launchpad}` : ""}${agePart} · ${formatUsd(liquidity)} liquidity · ${formatUsd(h1)} in the last hour`,
    ));
  }

  // A breakout needs a baseline. With fewer than `minPriorHours` complete hours behind the current
  // one there is nothing to compare against, and a prior average of 0 on a pool that does have that
  // history is a real standing start rather than a missing number — but only above the launch floor,
  // so a $200 pool waking up is not called a breakout.
  const baselineReady = priorHours >= PULSE_RULES.breakout.minPriorHours && average !== null;
  const clearsBaseline = average === null ? false
    : average > 0
      ? h1 !== null && h1 >= PULSE_RULES.breakout.multiple * average
      : h1 !== null && h1 >= PULSE_RULES.breakout.minVolumeH1UsdFromZero;
  if (
    liquidity !== null && liquidity >= PULSE_RULES.breakout.minLiquidityUsd &&
    baselineReady && clearsBaseline
  ) {
    out.push(signal(
      "breakout",
      pair,
      numbers,
      `Moving: ${pair.symbol} · ${formatUsd(h1)} this hour vs ${formatUsd(average)}/h over ${priorHours}h${pair.marketCapUsd ? ` · ${formatUsd(pair.marketCapUsd)} market cap` : ""}`,
    ));
  }

  if (
    ticker && ageMs !== null && ageMs < PULSE_RULES.stockPair.maxAgeMs &&
    h1 !== null && h1 >= PULSE_RULES.stockPair.minVolumeH1Usd
  ) {
    out.push(signal(
      "stock-pair-spike",
      pair,
      { ...numbers, stock_ticker: ticker },
      `${pair.symbol} paired to ${ticker} stock${agePart} · ${formatUsd(h1)} in the last hour`,
    ));
  }

  return out;
}

export function evaluatePulse(pairs, options = {}) {
  return pairs.flatMap((pair) => evaluatePulsePair(pair, {
    ...options,
    history: options.historyByPair?.[lower(pair.pair)] ?? [],
  }));
}

export const firedKey = (item) => `${item.kind}:${lower(item.pair)}`;

const memoryMs = (kind, rules) =>
  rules.onceKinds.includes(kind) ? rules.onceMemoryMs : rules.cooldownMs;

// Each key is kept for its own window: a cooldown for breakout, a pool lifetime for the two arrival
// rules. Trimming everything to the shortest window would let a launch be announced twice.
export function pruneFiredAt(firedAt = {}, now = Date.now(), rules = PULSE_RULES) {
  return Object.fromEntries(Object.entries(firedAt).filter(([key, value]) => {
    const fired = Date.parse(value ?? "");
    return Number.isFinite(fired) && now - fired < memoryMs(key.split(":")[0], rules);
  }));
}

// Called only once a message has actually left (or was logged in place of leaving). A signal the
// caps held back, or one whose send failed, is never marked, so the next tick can still deliver it.
export function markFired(firedAt = {}, item, now = Date.now()) {
  return { ...firedAt, [firedKey(item)]: new Date(now).toISOString() };
}

export function selectPulseDeliveries(signals, state = {}, now = Date.now(), rules = PULSE_RULES) {
  const firedAt = pruneFiredAt(state.firedAt ?? {}, now, rules);
  const sentAt = (state.sentAt ?? [])
    .map((value) => Date.parse(value))
    .filter((value) => Number.isFinite(value) && now - value < DAY_MS);
  const fresh = [];
  for (const item of signals) {
    if (!PULSE_KINDS.includes(item.kind)) continue;
    const prior = Date.parse(firedAt[firedKey(item)] ?? "");
    if (Number.isFinite(prior) && now - prior < memoryMs(item.kind, rules)) continue;
    fresh.push(item);
  }

  const sentThisHour = sentAt.filter((value) => now - value < HOUR_MS).length;
  const hourlyRoom = Math.max(0, rules.hourlyCap - sentThisHour);
  const dailyRoom = Math.max(0, rules.dailyCap - sentAt.length);
  // Rank by the number in the message before the caps bite, so a cap drops the smallest signal of
  // the tick rather than whichever one the source happened to list last.
  const ranked = [...fresh].sort((a, b) => (b.numbers?.volume_h1_usd ?? 0) - (a.numbers?.volume_h1_usd ?? 0));
  const deliver = ranked.slice(0, Math.min(hourlyRoom, dailyRoom));
  return { fresh, deliver, firedAt };
}

export function formatUsd(value) {
  // Hand-rolled rather than Intl compact notation: ICU versions differ between Node 20 (CI) and Node 24
  // ("$3.0M" vs "$3M"), and the tests and Telegram copy must not depend on the runtime.
  const number = Number(value);
  if (!Number.isFinite(number)) return "not checked";
  const sign = number < 0 ? "-" : "";
  const abs = Math.abs(number);
  const compact = (v, suffix) => `${sign}$${v.toFixed(1).replace(/\.0$/, "")}${suffix}`;
  if (abs >= 1e9) return compact(abs / 1e9, "B");
  if (abs >= 1e6) return compact(abs / 1e6, "M");
  if (abs >= 1e4) return compact(abs / 1e3, "K");
  const fixed = abs >= 1000 ? abs.toFixed(1).replace(/\.0$/, "") : String(Math.round(abs));
  const [int, dec] = fixed.split(".");
  return `${sign}$${int.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${dec ? "." + dec : ""}`;
}
