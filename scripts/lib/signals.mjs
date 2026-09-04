import { countsForTrending } from "./trending.mjs";

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

// Number(null) is 0 and Number("") is 0, so an unread metric would otherwise arrive as a real zero —
// which is how a name whose previous volume was never read looked like a doubling from nothing.
const finite = (value) => {
  if (value === null || value === undefined || value === "") return null;
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

const percent = (current, previous) => {
  const a = finite(current), b = finite(previous);
  return a !== null && b !== null && b > 0 ? ((a - b) / b) * 100 : null;
};

export const BREAKOUT_RULES = Object.freeze({
  minLiquidityUsd: 50_000,
  volumeMultiple: 2,
  holderGrowthPct: 20,
  minDistinctAccounts: 3,
  // The scale leg. Holder growth and qualifying Talk are the two corroborating signals the assignment
  // names, but both are absent from the two moves the owner said he wanted: HOOKR doubled to $7M with
  // holders +13.6%, O1.EXCHANGE doubled to $15.9M with holders +3.1%, and neither had three top-tier
  // accounts posting. Size is the third independent measurement — a doubling of a seven-figure book on
  // a name a reader already follows is not a micro-cap going from $200 to $400 — and it only counts
  // while the holder count is not falling, so a doubling on the way out never qualifies.
  minMaterialVolumeUsd: 1_000_000,
});

/** An account's post counts as Talk only when the desk records it as top tier (scripts/lib/trending.mjs
 * ruling 4) or the receipt records at least 100,000 followers. Everything else is a small account
 * posting about a name nobody is trading, which is exactly what the channel was paused for. */
export const TALK_MIN_FOLLOWERS = 100_000;

export function accountCountsAsTalk(account) {
  return Boolean(account) && (countsForTrending(account) || Number(account.followers) >= TALK_MIN_FOLLOWERS);
}

/**
 * Distinct qualifying accounts that posted about a name on one day. Untiered handles, watch- and
 * downweight-tier handles and the project's own account never count.
 * @param {Array} items feed items for one slug
 * @param {Array} accounts content/accounts.yaml rows
 * @param {string} date YYYY-MM-DD
 */
export function distinctTalkAccounts(items = [], accounts = [], date = null) {
  const byHandle = new Map((accounts ?? []).map((row) => [lower(row?.handle), row]));
  const seen = new Set();
  for (const item of items ?? []) {
    if (item?.kind !== "ct" || !item.account) continue;
    if (date && String(item.date).slice(0, 10) !== date) continue;
    const handle = lower(item.account);
    if (!accountCountsAsTalk(byHandle.get(handle))) continue;
    seen.add(handle);
  }
  return seen.size;
}

/**
 * Six-hour pull signal. Two independent legs, both required: the market leg (24h volume at least
 * doubled against the previous snapshot, on a pair holding at least $50K of liquidity) AND a
 * corroborating leg (holders up 20%, three qualifying accounts posting that day, or the scale leg —
 * see BREAKOUT_RULES.minMaterialVolumeUsd). A name below the liquidity floor never fires, and the
 * headline number — the 24h volume — must be up, so a "MOVING" alert can never carry a falling number.
 */
export function breakoutSignal({ slug, current = {}, previous = {}, distinctAccounts = 0 } = {}) {
  const liquidity = finite(current.liquidityUsd);
  if (liquidity === null || liquidity < BREAKOUT_RULES.minLiquidityUsd) return null;
  const volumeNow = finite(current.volume24hUsd);
  const volumeBefore = finite(previous.volume24hUsd);
  if (volumeNow === null || volumeBefore === null || volumeNow <= 0) return null;
  // A prior snapshot of exactly zero is a start from nothing, not a divide-by-zero to be discarded.
  const doubled = volumeBefore > 0
    ? volumeNow >= BREAKOUT_RULES.volumeMultiple * volumeBefore
    : volumeNow > 0;
  const volumeChangePct = percent(volumeNow, volumeBefore);
  if (!doubled || (volumeChangePct !== null && volumeChangePct <= 0)) return null;

  const holderChangePct = percent(current.holders, previous.holders);
  const holderLeg = holderChangePct !== null && holderChangePct >= BREAKOUT_RULES.holderGrowthPct;
  const talkLeg = Number(distinctAccounts) >= BREAKOUT_RULES.minDistinctAccounts;
  const scaleLeg = volumeNow >= BREAKOUT_RULES.minMaterialVolumeUsd &&
    (holderChangePct === null || holderChangePct >= 0);
  if (!holderLeg && !talkLeg && !scaleLeg) return null;

  return {
    kind: "breakout",
    slug,
    reasons: [
      volumeBefore > 0 ? "24h volume at least doubled" : "24h volume started from nothing",
      holderLeg ? "holders rose at least 20%" : null,
      talkLeg ? `${distinctAccounts} qualifying accounts posted today` : null,
      !holderLeg && !talkLeg && scaleLeg ? "on a seven-figure book with holders not falling" : null,
    ].filter(Boolean),
    numbers: {
      volume_24h_usd: volumeNow,
      previous_volume_24h_usd: volumeBefore,
      volume_change_pct: volumeChangePct,
      liquidity_usd: liquidity,
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

export const CONTROL_RULES = Object.freeze({
  // A locked share is a percentage of supply. Anything smaller than ten points, or that stays on the
  // same side of half the supply, changes nothing a reader would do.
  lpMinDeltaPoints: 0.10,
  lpCrossing: 0.5,
});

/** The four fields that describe who can move user funds. These, and only these, are RISK ALERT. */
const RISK_FIELDS = new Set(["owner", "owner type", "Safe threshold", "proxy implementation"]);

/** A mint read is trustworthy only when the puller had the verified ABI on both sides. */
const MINT_UNVERIFIED = new Set(["unknown", "", "null"]);

const mintReadFailed = (pulled) =>
  (pulled?.structure?.errors ?? []).some((error) => error.step === "mint") ||
  MINT_UNVERIFIED.has(lower(pulled?.structure?.mint));

/** Read one control field back out of a pulled file, so a pending change can be re-checked. */
export function controlFieldValue(pulled, address, field) {
  if (field === "mint control") return pulled?.structure?.mint ?? null;
  if (field === "LP locked share") {
    const row = (pulled?.structure?.lp ?? []).find((entry) => lower(entry.pair) === lower(address));
    return row ? row.locked_share ?? null : undefined;
  }
  const row = (pulled?.addresses ?? []).find((entry) => lower(entry.address) === lower(address));
  if (!row) return undefined;
  if ((row.errors ?? []).length) return undefined;
  if (field === "owner") return row.owner ?? null;
  if (field === "owner type") return row.owner_type ?? null;
  if (field === "Safe threshold") return row.safe?.threshold ?? null;
  if (field === "proxy implementation") return row.proxy?.implementation ?? null;
  return undefined;
}

/**
 * Compare only reader-relevant control fields; signer addresses are deliberately never surfaced.
 *
 * Read quality comes first. A field is compared only when both reads were clean (`errors: []` on the
 * address row on both sides) and the value is non-null on both sides. A transition to or from null is
 * a documented transition, not a value change: the puller has written nulls with an empty error array
 * for whole files at a time, so those are surfaced only through the two-pull confirmation in
 * `confirmControlChanges` and are marked here so the caller can hold them.
 *
 * Materiality comes second: an LP locked share moves the reader only when it shifts at least ten
 * points or crosses half the supply, and mint control is reported only from a verified ABI read.
 */
export function controlChangeSignal(slug, previous, current) {
  if (!previous || !current) return null;
  const changes = [];
  const beforeByAddress = new Map((previous.addresses ?? []).map((row) => [lower(row.address), row]));
  for (const row of current.addresses ?? []) {
    const before = beforeByAddress.get(lower(row.address));
    // A failed read is missing data, never a control transition — on either side of the comparison.
    if (!before || (row.errors ?? []).length || (before.errors ?? []).length) continue;
    for (const [field, oldValue, newValue] of [
      ["owner", before.owner, row.owner],
      ["owner type", before.owner_type, row.owner_type],
      ["Safe threshold", before.safe?.threshold, row.safe?.threshold],
      ["proxy implementation", before.proxy?.implementation, row.proxy?.implementation],
    ]) {
      if (same(oldValue, newValue)) continue;
      const nullTransition = oldValue == null || newValue == null;
      changes.push({
        address: row.address,
        field,
        before: oldValue ?? null,
        after: newValue ?? null,
        severity: "risk",
        nullTransition,
      });
    }
  }
  if (!mintReadFailed(previous) && !mintReadFailed(current) && !same(previous.structure?.mint, current.structure?.mint)) {
    changes.push({
      address: null,
      field: "mint control",
      before: previous.structure?.mint ?? null,
      after: current.structure?.mint ?? null,
      severity: "control",
      nullTransition: previous.structure?.mint == null || current.structure?.mint == null,
    });
  }
  const beforeLp = new Map((previous.structure?.lp ?? []).map((row) => [lower(row.pair), row]));
  for (const row of current.structure?.lp ?? []) {
    const before = beforeLp.get(lower(row.pair));
    if (!before || same(before.locked_share, row.locked_share)) continue;
    const from = finite(before.locked_share);
    const to = finite(row.locked_share);
    // A share that appears or disappears is a read change, not a lock change; hold it for confirmation.
    if (from === null || to === null) continue;
    const material = Math.abs(to - from) >= CONTROL_RULES.lpMinDeltaPoints ||
      (from < CONTROL_RULES.lpCrossing) !== (to < CONTROL_RULES.lpCrossing);
    if (!material) continue;
    changes.push({
      address: row.pair,
      field: "LP locked share",
      before: before.locked_share,
      after: row.locked_share,
      severity: "control",
      nullTransition: false,
    });
  }
  if (!changes.length) return null;
  return {
    kind: "control-change",
    slug,
    severity: changes.some((change) => change.severity === "risk") ? "risk" : "control",
    changes,
  };
}

/**
 * When one pull nulls the same control field on many names at once, that is a degraded read, not a
 * chain-wide renunciation. On 2026-09-04 a single pull moved 35 owner rows to null with an empty
 * error array; this drops every such transition before it can even become pending.
 */
export const MASS_NULL_LIMIT = 5;

export function dropMassNullTransitions(signals, limit = MASS_NULL_LIMIT) {
  const counts = new Map();
  for (const signal of signals) {
    for (const change of signal.changes ?? []) {
      if (!change.nullTransition || change.after != null) continue;
      counts.set(change.field, (counts.get(change.field) ?? 0) + 1);
    }
  }
  const suspect = new Set([...counts].filter(([, count]) => count > limit).map(([field]) => field));
  if (!suspect.size) return signals;
  return signals.flatMap((signal) => {
    const changes = (signal.changes ?? []).filter(
      (change) => !(change.nullTransition && change.after == null && suspect.has(change.field)),
    );
    if (!changes.length) return [];
    return [{ ...signal, changes, severity: changes.some((change) => change.severity === "risk") ? "risk" : "control" }];
  });
}

/**
 * Every control change waits one pull before it is sent. A change observed between pulls N-1 and N is
 * held as pending; on pull N+1 it is sent only if the new value is still there and still read cleanly.
 * A value that reverted — the signature of the degraded read that briefly nulled 35 owner rows on
 * 2026-09-04 — is dropped, and nothing is ever published about it.
 *
 * @param {Array} pending rows written by a prior run: {slug, address, field, before, after, seenAt}
 * @param {Array} fresh control-change signals observed in this pull
 * @param {Map<string, object>} pulledBySlug the current pulled files, for re-reading the new value
 * @returns {{confirmed: Array, next: Array, dropped: Array}}
 */
export function confirmControlChanges(pending = [], fresh = [], pulledBySlug = new Map(), now = Date.now()) {
  const confirmed = [];
  const dropped = [];
  const bySlug = new Map();
  for (const row of pending) {
    const still = controlFieldValue(pulledBySlug.get?.(row.slug) ?? pulledBySlug[row.slug], row.address, row.field);
    // `undefined` means the address vanished or the read failed again — neither confirms anything.
    if (still === undefined || !same(still, row.after)) { dropped.push(row); continue; }
    const group = bySlug.get(row.slug) ?? { kind: "control-change", slug: row.slug, severity: "control", changes: [] };
    group.changes.push({ address: row.address, field: row.field, before: row.before, after: row.after, severity: row.severity });
    if (row.severity === "risk") group.severity = "risk";
    bySlug.set(row.slug, group);
  }
  confirmed.push(...bySlug.values());
  const next = fresh.flatMap((signal) => signal.changes.map((change) => ({
    slug: signal.slug,
    address: change.address,
    field: change.field,
    before: change.before,
    after: change.after,
    severity: change.severity,
    seenAt: new Date(now).toISOString(),
  })));
  return { confirmed, next, dropped };
}

export const DISTRIBUTION_TAGS = new Set(["listing", "integration", "partnership", "audit"]);
export const COMING_UP_TAGS = new Set(["launch-date", "whitelist", "mint"]);
/** The full set a project post must carry before it may reach the channel at all (quality bar). */
export const CHANNEL_TAGS = new Set([...DISTRIBUTION_TAGS, ...COMING_UP_TAGS]);

function xHandle(raw) {
  try {
    const url = new URL(raw);
    if (!["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(url.hostname.toLowerCase())) return null;
    return lower(url.pathname.split("/").filter(Boolean)[0]);
  } catch { return null; }
}

const hostOf = (raw) => { try { return lower(new URL(raw).hostname).replace(/^www\./, ""); } catch { return null; } };

/**
 * A receipt is external only when it is neither the project's own X account nor any host the project
 * publishes from. A project's own blog, docs page or Medium post is the project talking about itself.
 */
export function isExternalReceipt(sourceUrl, project) {
  if (!/^https?:\/\//i.test(sourceUrl ?? "")) return false;
  const links = (project?.official_links ?? project?.officialLinks ?? []).map((link) => link?.url).filter(Boolean);
  const handle = xHandle(sourceUrl);
  if (handle && links.map(xHandle).filter(Boolean).includes(handle)) return false;
  const host = hostOf(sourceUrl);
  return Boolean(host) && !links.map(hostOf).filter(Boolean).includes(host);
}

export function distributionSignal({ slug, item, project } = {}) {
  if (!DISTRIBUTION_TAGS.has(item?.tag)) return null;
  if (!isExternalReceipt(item?.sourceUrl, project)) return null;
  return { kind: "distribution", slug, tag: item.tag, title: item.title, sourceUrl: item.sourceUrl, date: item.date };
}

/**
 * A dated event in the next seven days, on a name a reader can already read about. The receipt must
 * be external — a project post announcing its own launch date is the project talking about itself —
 * and the name must have a TL;DR, so the alert never arrives without saying what the thing is.
 */
export function comingUpSignal({ slug, item, project, now = Date.now() } = {}) {
  if (project?.lifecycle !== "announced" || !COMING_UP_TAGS.has(item?.tag)) return null;
  if (!project?.tldr) return null;
  if (!isExternalReceipt(item?.sourceUrl, project)) return null;
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
    daysAway: Math.round((at - start) / DAY_MS),
    sourceUrl: item.sourceUrl ?? null,
    tldr: project.tldr,
  };
}

export const ALERT_RULES = Object.freeze({
  dailyCap: 3,
  // Per-rule caps so one rule can never starve another: on 2026-09-04 three control-change messages
  // consumed the whole budget and buried both genuine market moves.
  perRule: Object.freeze({
    "control-change": 1,
    breakout: 2,
    distribution: 1,
    "coming-up": 1,
    "leader-change": 1,
  }),
});

/**
 * Materiality, not kind order. A confirmed change to who controls a contract comes first, then the
 * largest breakout by 24h volume, then everything else. Within a tier the bigger number wins.
 */
export function materialityRank(item) {
  if (item.kind === "control-change") return item.severity === "risk" ? 0 : 3;
  if (item.kind === "breakout") return 1;
  if (item.kind === "leader-change") return 2;
  if (item.kind === "distribution") return 4;
  if (item.kind === "coming-up") return 5;
  return 9;
}

const CONTROL_FIELD_ORDER = ["owner", "proxy implementation", "Safe threshold", "owner type", "mint control", "LP locked share"];

function withinTier(a, b) {
  if (a.kind === "breakout" && b.kind === "breakout") {
    return (Number(b.numbers?.volume_24h_usd) || 0) - (Number(a.numbers?.volume_24h_usd) || 0);
  }
  if (a.kind === "control-change" && b.kind === "control-change") {
    const at = Math.min(...(a.changes ?? []).map((change) => CONTROL_FIELD_ORDER.indexOf(change.field)).filter((i) => i >= 0), 9);
    const bt = Math.min(...(b.changes ?? []).map((change) => CONTROL_FIELD_ORDER.indexOf(change.field)).filter((i) => i >= 0), 9);
    if (at !== bt) return at - bt;
  }
  return 0;
}

export function rankSignals(signals) {
  return [...signals].sort((a, b) =>
    materialityRank(a) - materialityRank(b) || withinTier(a, b) || String(a.slug).localeCompare(String(b.slug)));
}

/**
 * Channel alert budget: three successful sends per UTC day, never two for one name, and never more
 * than a rule's own daily share. Signals are ranked by materiality before the budget is applied, so
 * what survives the cap is the most material thing that happened, not whichever rule sorts first.
 */
export function selectDailyAlerts(signals, state = {}, date = new Date().toISOString().slice(0, 10), rules = ALERT_RULES) {
  const daily = state.date === date ? state : { date, count: 0, names: [], kinds: {} };
  const names = new Set(daily.names ?? []);
  const kinds = { ...(daily.kinds ?? {}) };
  const room = Math.max(0, rules.dailyCap - Number(daily.count ?? 0));
  const selected = [];
  for (const item of rankSignals(signals)) {
    if (selected.length >= room || names.has(item.slug)) continue;
    const cap = rules.perRule[item.kind] ?? rules.dailyCap;
    if ((kinds[item.kind] ?? 0) >= cap) continue;
    selected.push(item);
    names.add(item.slug);
    kinds[item.kind] = (kinds[item.kind] ?? 0) + 1;
  }
  return {
    selected,
    next: { date, count: Number(daily.count ?? 0) + selected.length, names: [...names], kinds },
  };
}
