const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

export const PULSE_RULES = Object.freeze({
  newLaunch: { maxAgeMs: DAY_MS, minLiquidityUsd: 50_000, minVolumeH1Usd: 500_000 },
  breakout: { multiple: 3, minLiquidityUsd: 100_000 },
  stockPair: { maxAgeMs: DAY_MS, minVolumeH1Usd: 250_000 },
  cooldownMs: 6 * HOUR_MS,
  hourlyCap: 3,
  dailyCap: 12,
});

const finite = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const lower = (value) => String(value ?? "").toLowerCase();

export function previousHourlyAverage(pair, history = []) {
  const h1 = finite(pair.volumeH1Usd);
  const h6 = finite(pair.volumeH6Usd);
  if (h1 !== null && h6 !== null && h6 >= h1) return (h6 - h1) / 5;
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
  const createdAt = Date.parse(pair.createdAt ?? "");
  const ageMs = Number.isFinite(createdAt) ? now - createdAt : null;
  const liquidity = finite(pair.liquidityUsd);
  const h1 = finite(pair.volumeH1Usd);
  const average = previousHourlyAverage(pair, history);
  const ticker = stockTickerFor(pair, stockTokens, stockTickers);
  const numbers = {
    liquidity_usd: liquidity,
    volume_h1_usd: h1,
    previous_hourly_average_usd: average,
    volume_h24_usd: finite(pair.volumeH24Usd),
    rialto_volume_h24_usd: finite(pair.rialtoVolumeH24Usd),
    market_cap_usd: finite(pair.marketCapUsd),
    fdv_usd: finite(pair.fdvUsd),
  };
  const out = [];

  if (
    ageMs !== null && ageMs >= 0 && ageMs < PULSE_RULES.newLaunch.maxAgeMs &&
    liquidity !== null && liquidity >= PULSE_RULES.newLaunch.minLiquidityUsd &&
    h1 !== null && h1 >= PULSE_RULES.newLaunch.minVolumeH1Usd
  ) {
    out.push(signal(
      "new-launch",
      pair,
      numbers,
      `New: ${pair.symbol}${pair.launchpad ? ` on ${pair.launchpad}` : ""} · ${formatUsd(liquidity)} liquidity · ${formatUsd(h1)} first hour`,
    ));
  }

  if (
    liquidity !== null && liquidity >= PULSE_RULES.breakout.minLiquidityUsd &&
    h1 !== null && average !== null && average > 0 && h1 >= PULSE_RULES.breakout.multiple * average
  ) {
    out.push(signal(
      "breakout",
      pair,
      numbers,
      `Moving: ${pair.symbol} · ${formatUsd(h1)} this hour vs ${formatUsd(average)}/h${pair.marketCapUsd ? ` · ${formatUsd(pair.marketCapUsd)} market cap` : ""}`,
    ));
  }

  if (
    ticker && ageMs !== null && ageMs >= 0 && ageMs < PULSE_RULES.stockPair.maxAgeMs &&
    h1 !== null && h1 >= PULSE_RULES.stockPair.minVolumeH1Usd
  ) {
    out.push(signal(
      "stock-pair-spike",
      pair,
      { ...numbers, stock_ticker: ticker },
      `${pair.symbol} paired to ${ticker} stock · ${formatUsd(h1)} first hour`,
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

export function selectPulseDeliveries(signals, state = {}, now = Date.now(), rules = PULSE_RULES) {
  const firedAt = { ...(state.firedAt ?? {}) };
  const sentAt = (state.sentAt ?? [])
    .map((value) => Date.parse(value))
    .filter((value) => Number.isFinite(value) && now - value < DAY_MS);
  const fresh = [];
  for (const item of signals) {
    const key = `${item.kind}:${lower(item.pair)}`;
    const prior = Date.parse(firedAt[key] ?? "");
    if (Number.isFinite(prior) && now - prior < rules.cooldownMs) continue;
    firedAt[key] = new Date(now).toISOString();
    fresh.push(item);
  }

  const sentThisHour = sentAt.filter((value) => now - value < HOUR_MS).length;
  const hourlyRoom = Math.max(0, rules.hourlyCap - sentThisHour);
  const dailyRoom = Math.max(0, rules.dailyCap - sentAt.length);
  const deliver = fresh.slice(0, Math.min(hourlyRoom, dailyRoom));
  const nextSentAt = [...sentAt, ...deliver.map(() => now)].map((value) => new Date(value).toISOString());
  return { fresh, deliver, firedAt, sentAt: nextSentAt };
}

export function formatUsd(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "not checked";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: number >= 10_000 ? "compact" : "standard",
    maximumFractionDigits: number >= 1_000 ? 1 : 0,
  }).format(number);
}

