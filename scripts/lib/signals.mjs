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

const percent = (current, previous) => {
  const a = finite(current), b = finite(previous);
  return a !== null && b !== null && b > 0 ? ((a - b) / b) * 100 : null;
};

/** Six-hour pull signal: market volume, holder growth, or broad same-day discussion changed sharply. */
export function breakoutSignal({ slug, current = {}, previous = {}, distinctAccounts = 0 } = {}) {
  const volumeChangePct = percent(current.volume24hUsd, previous.volume24hUsd);
  const holderChangePct = percent(current.holders, previous.holders);
  const volumeBreakout = finite(current.liquidityUsd) >= 50_000 && volumeChangePct !== null && volumeChangePct >= 100;
  const holderBreakout = holderChangePct !== null && holderChangePct >= 20;
  const discussionBreakout = Number(distinctAccounts) >= 3;
  if (!volumeBreakout && !holderBreakout && !discussionBreakout) return null;
  return {
    kind: "breakout",
    slug,
    reasons: [
      volumeBreakout ? "volume doubled" : null,
      holderBreakout ? "holders rose at least 20%" : null,
      discussionBreakout ? `${distinctAccounts} distinct accounts posted today` : null,
    ].filter(Boolean),
    numbers: {
      volume_24h_usd: finite(current.volume24hUsd),
      previous_volume_24h_usd: finite(previous.volume24hUsd),
      volume_change_pct: volumeChangePct,
      liquidity_usd: finite(current.liquidityUsd),
      holders: finite(current.holders),
      previous_holders: finite(previous.holders),
      holder_change_pct: holderChangePct,
      distinct_accounts: Number(distinctAccounts) || 0,
    },
  };
}

/** A rank transition is reported only after the new top slot survives a second observation. */
export function leaderChangeSignal(current, previous = {}) {
  const rank = Number(current?.rank);
  if (!Number.isInteger(rank) || rank < 1 || rank > 3) {
    return { signal: null, next: { rank: Number.isInteger(rank) ? rank : null, candidate: null } };
  }
  const priorRank = Number(previous?.rank);
  const candidate = previous?.candidate ?? null;
  if (candidate && candidate.slug === current.slug && candidate.section === current.section && rank <= candidate.targetRank) {
    return {
      signal: {
        kind: "leader-change",
        slug: current.slug,
        section: current.section,
        rank,
        transition: candidate.targetRank === 1 ? "became number one" : "entered the top three",
      },
      next: { rank, candidate: null },
    };
  }
  if (!Number.isInteger(priorRank)) return { signal: null, next: { rank, candidate: null } };
  const becameNumberOne = rank === 1 && priorRank !== 1;
  const enteredTopThree = rank <= 3 && priorRank > 3;
  return {
    signal: null,
    next: {
      rank,
      candidate: becameNumberOne || enteredTopThree
        ? { slug: current.slug, section: current.section, targetRank: becameNumberOne ? 1 : 3 }
        : null,
    },
  };
}

const same = (a, b) => {
  if (typeof a === "string" && typeof b === "string" && /^0x/i.test(a) && /^0x/i.test(b)) return lower(a) === lower(b);
  return JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
};

/** Compare only reader-relevant control fields; signer addresses are deliberately never surfaced. */
export function controlChangeSignal(slug, previous, current) {
  if (!previous || !current) return null;
  const changes = [];
  const beforeByAddress = new Map((previous.addresses ?? []).map((row) => [lower(row.address), row]));
  for (const row of current.addresses ?? []) {
    const before = beforeByAddress.get(lower(row.address));
    // A failed read is missing data, never a control transition. The puller keeps the error on the
    // affected address; wait for a clean snapshot before comparing it with the prior value.
    if (!before || (row.errors ?? []).length) continue;
    for (const [field, oldValue, newValue] of [
      ["owner", before.owner, row.owner],
      ["owner type", before.owner_type, row.owner_type],
      ["Safe threshold", before.safe?.threshold, row.safe?.threshold],
      ["proxy implementation", before.proxy?.implementation, row.proxy?.implementation],
    ]) {
      if (!same(oldValue, newValue)) changes.push({ address: row.address, field, before: oldValue ?? null, after: newValue ?? null });
    }
  }
  const mintFailed = (current.structure?.errors ?? []).some((error) => error.step === "mint");
  if (!mintFailed && !same(previous.structure?.mint, current.structure?.mint)) {
    changes.push({ address: null, field: "mint control", before: previous.structure?.mint ?? null, after: current.structure?.mint ?? null });
  }
  const beforeLp = new Map((previous.structure?.lp ?? []).map((row) => [lower(row.pair), row]));
  for (const row of current.structure?.lp ?? []) {
    const before = beforeLp.get(lower(row.pair));
    if (before && !same(before.locked_share, row.locked_share)) {
      changes.push({ address: row.pair, field: "LP locked share", before: before.locked_share ?? null, after: row.locked_share ?? null });
    }
  }
  return changes.length ? { kind: "control-change", slug, changes } : null;
}

const DISTRIBUTION_TAGS = new Set(["listing", "integration", "partnership", "audit"]);
const COMING_UP_TAGS = new Set(["launch-date", "whitelist", "mint"]);

function xHandle(raw) {
  try {
    const url = new URL(raw);
    if (!["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(url.hostname.toLowerCase())) return null;
    return lower(url.pathname.split("/").filter(Boolean)[0]);
  } catch { return null; }
}

export function distributionSignal({ slug, item, project } = {}) {
  if (!DISTRIBUTION_TAGS.has(item?.tag) || !/^https?:\/\//i.test(item?.sourceUrl ?? "")) return null;
  const sourceHandle = xHandle(item.sourceUrl);
  const ownHandles = (project?.official_links ?? project?.officialLinks ?? [])
    .map((link) => xHandle(link.url))
    .filter(Boolean);
  if (sourceHandle && ownHandles.includes(sourceHandle)) return null;
  return { kind: "distribution", slug, tag: item.tag, title: item.title, sourceUrl: item.sourceUrl, date: item.date };
}

export function comingUpSignal({ slug, item, project, now = Date.now() } = {}) {
  if (project?.lifecycle !== "announced" || !COMING_UP_TAGS.has(item?.tag)) return null;
  const today = new Date(now).toISOString().slice(0, 10);
  const date = String(item?.date ?? "").slice(0, 10);
  const at = Date.parse(`${date}T00:00:00Z`);
  const start = Date.parse(`${today}T00:00:00Z`);
  if (!Number.isFinite(at) || at < start || at - start > 7 * DAY_MS) return null;
  return {
    kind: "coming-up",
    slug,
    tag: item.tag,
    title: item.title,
    date: item.date,
    sourceUrl: item.sourceUrl ?? null,
    tldr: project.tldr ?? null,
  };
}

/** Channel alert budget: three successful sends per UTC day and never two for one name. */
export function selectDailyAlerts(signals, state = {}, date = new Date().toISOString().slice(0, 10)) {
  const daily = state.date === date ? state : { date, count: 0, names: [] };
  const names = new Set(daily.names ?? []);
  const room = Math.max(0, 3 - Number(daily.count ?? 0));
  const selected = [];
  for (const item of signals) {
    if (selected.length >= room || names.has(item.slug)) continue;
    selected.push(item);
    names.add(item.slug);
  }
  return {
    selected,
    next: { date, count: Number(daily.count ?? 0) + selected.length, names: [...names] },
  };
}
