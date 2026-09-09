// Blockscout activity reads: is this contract still being used, and by how many people today.
//
// Two questions per address. The lifetime one is /counters: the total transaction and token-transfer
// counts in one call. On this deployment those counters are a cached aggregate — the same value can
// come back for hours while the address is being called every minute — so they are a lifetime fact
// that goes stale, never a change signal. The live one is not cheap: Blockscout has no "transactions
// in the last day" endpoint, so the only honest answer is to page the inbound transaction list, which
// comes back newest-first, and stop at the first item older than the window. Page one of that walk is
// also the change signal, so the credit that buys the signal is the credit that starts the count and
// very often finishes it. That is why the paging
// here is bounded at 40 pages (2,000 transactions): a launchpad factory on a busy day would
// otherwise page forever. Deep infrastructure gets 40 pages; other roles get 5, and a partial count
// with a recorded cap is more useful than a run that
// never finishes. A capped address keeps the count it reached and carries the cap in its errors, so
// a reader can tell "quiet" from "too busy to finish counting".
//
// `filter=to` is deliberate. Counting transactions *to* a contract counts the times someone called
// it. Counting everything the address touched would fold in its own outbound calls and flatter an
// address that talks to itself.
//
// Launch counting reuses the same page walk rather than a second pass. A factory's method names are
// the only signal Blockscout exposes for "a new thing was created here" without decoding logs, so
// the four verb prefixes below are matched against the decoded method name. It is a heuristic on a
// name, not a receipt, and it is computed only for addresses the census already calls a factory.

import { requestJson, BROWSER_UA } from "./http.mjs";
import { BLOCKSCOUT_BASE, toInt, toIsoOrNull } from "./blockscout.mjs";

export { BLOCKSCOUT_BASE };

const HEADERS = { "User-Agent": BROWSER_UA, Accept: "application/json" };

/** 50 items per page × 40 pages = 2,000 inbound transactions before a count is declared capped. */
export const MAX_PAGES = 40;
export const STANDARD_MAX_PAGES = 5;
export const DEEP_WALK_ROLES = new Set(["factory", "curve", "router"]);

export function pageCapForRole(role) {
  return DEEP_WALK_ROLES.has(role) ? MAX_PAGES : STANDARD_MAX_PAGES;
}

export const WINDOW_MS = 24 * 60 * 60 * 1000;

/** A launch is anything whose method name begins with one of these verbs, case-insensitively. */
export const LAUNCH_PREFIXES = ["launch", "create", "deploy", "mint"];

/** True for launchToken and createPair; false for transferCreatorFeeRecipient and swap. */
export function isLaunchMethod(method) {
  if (typeof method !== "string") return false;
  const name = method.trim().toLowerCase();
  return LAUNCH_PREFIXES.some((prefix) => name.startsWith(prefix));
}

/** Blockscout returns every counter as a decimal string; an absent or unparseable one is null. */
export function parseCounters(body) {
  if (!body || typeof body !== "object") {
    return { transactions_count: null, token_transfers_count: null, gas_usage_count: null };
  }
  return {
    transactions_count: toInt(body.transactions_count),
    token_transfers_count: toInt(body.token_transfers_count),
    gas_usage_count: toInt(body.gas_usage_count),
  };
}

/** Reduces one /transactions page to the four fields the count needs, plus the paging cursor. */
export function parseTransactionsPage(body) {
  const items = Array.isArray(body?.items) ? body.items : [];
  const next = body?.next_page_params;
  return {
    items: items.map((it) => ({
      timestamp: toIsoOrNull(it?.timestamp),
      method: typeof it?.method === "string" ? it.method : null,
      hash: typeof it?.hash === "string" ? it.hash : null,
      block_number: Number.isSafeInteger(it?.block_number) && it.block_number >= 0 ? it.block_number : null,
      from: typeof it?.from?.hash === "string" ? it.from.hash : null,
    })),
    next: next && typeof next === "object" && Object.keys(next).length > 0 ? next : null,
    ...(!Array.isArray(body?.items) || next != null && (typeof next !== "object" || Array.isArray(next)) ? { malformed: true } : {}),
  };
}

/** Serialises Blockscout's opaque next_page_params back onto the query string it expects. */
export function toQuery(params = {}) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue;
    search.set(key, String(value));
  }
  return search.toString();
}

/**
 * The change signal for a contract: the newest transaction *to* it, plus when it landed and what it
 * was called. Page one of the walk is the signal, so the credit that buys it is never wasted.
 */
export function newestInbound(page) {
  const item = page?.items?.[0] ?? null;
  if (!item) return { hash: null, at: null, method: null };
  return { hash: item.hash ?? null, at: item.timestamp ?? null, method: item.method ?? null };
}

/**
 * Walks the inbound transaction list newest-first and counts what falls inside the window.
 *
 * `fetchPage(params)` is the only I/O, so the walk is unit-testable against an array of stub pages.
 * `firstPage` hands in a page already fetched — the change signal — so the walk starts from it
 * without paying for it twice. Returns the count reached, the newest inbound transaction seen at all
 * (window or not), whether the count is `complete` (the walk saw a transaction older than the window
 * or ran out of pages, so nothing inside it was missed), whether the page cap stopped it, and any
 * transport failure. A failure mid-walk keeps the partial count: half a day's activity is still
 * evidence, and the error says the number is a floor.
 */
export async function countRecentInbound(fetchPage, {
  since,
  maxPages = MAX_PAGES,
  countLaunches = false,
  firstPage = null,
  until = Infinity,
  cached = null,
} = {}) {
  const errors = [];
  let params = null;
  let pages = 0;
  let txns = 0;
  let launches = 0;
  let capped = false;
  let reachedOlder = false;
  let exhausted = false;
  let failed = false;
  let lastTxAt = null;
  let lastMethod = null;
  let pending = firstPage;
  const items = [], seen = new Map(), cursors = new Set();
  let invalid = false, reused = 0, cacheHit = false, previousTime = Infinity;
  const add = item => {
    const key = typeof item.hash === "string" && item.hash ? item.hash.toLowerCase() : null;
    if (key && seen.has(key)) {
      const old = seen.get(key);
      if (old.timestamp !== item.timestamp || old.method !== item.method || old.block_number !== item.block_number) invalid = true;
      return false;
    }
    const at = item.timestamp ? Date.parse(item.timestamp) : NaN;
    if (!Number.isFinite(at)) { invalid = true; return false; }
    // A long pull can observe transactions newer than its fixed as-of time. They belong to
    // the next window, not to this count, and are not malformed just because the job is slow.
    if (at > until) return false;
    if (at > previousTime) invalid = true;
    previousTime = at;
    if (at < since) { reachedOlder = true; return false; }
    const clean = { ...item, hash: key };
    if (key) seen.set(key, clean);
    items.push(clean); txns++;
    if (countLaunches && isLaunchMethod(item.method)) launches++;
    return true;
  };

  for (;;) {
    if (pages >= maxPages) {
      capped = true;
      break;
    }
    let page;
    if (pending) {
      page = pending;
      pending = null;
    } else {
      try {
        page = parseTransactionsPage(await fetchPage(params));
      } catch (e) {
        failed = true;
        errors.push({ step: "blockscout", message: `transactions?filter=to page ${pages + 1}: ${e.message}` });
        break;
      }
    }
    pages++;
    if (page.malformed || !Array.isArray(page.items) || page.items.length === 0 && page.next !== null) {
      invalid = true; break;
    }

    // The very first row of the very first page is the most recent time anyone called this address.
    if (pages === 1 && page.items.length > 0) {
      const newest = page.items.find(item => Number.isFinite(Date.parse(item.timestamp)) && Date.parse(item.timestamp) <= until);
      lastTxAt = newest?.timestamp ?? null;
      lastMethod = newest?.method ?? null;
    }

    for (const item of page.items) {
      add(item);
      if (reachedOlder) break;
    }

    if (page.next === null) exhausted = true;
    if (reachedOlder || exhausted) break;
    // The cached head is finalized and its checkpoint has been checked by the cache store.
    // Verify every overlapping row supplied by this page before joining its unseen stable tail.
    const anchor = !invalid && cached?.items?.[0]?.hash;
    const atAnchor = anchor ? page.items.findIndex(item => item.hash?.toLowerCase() === anchor) : -1;
    if (atAnchor >= 0) {
      const overlap = page.items.slice(atAnchor);
      const consistent = overlap.every((item, i) => {
        const old = cached.items[i];
        return old && item.hash?.toLowerCase() === old.hash && item.timestamp === old.timestamp &&
          item.method === old.method && item.block_number === old.block_number;
      });
      if (consistent && items.every(item => item.hash)) {
        cacheHit = true;
        for (const item of cached.items.slice(overlap.length)) {
          if (add(item)) reused++;
          if (reachedOlder) break;
        }
        exhausted = true;
        break;
      }
      // An indexer disagreement invalidates cache reuse, but a fresh bounded walk can still finish.
      cached = null;
    }
    const cursor = toQuery(Object.fromEntries(Object.entries(page.next).sort(([a],[b]) => a.localeCompare(b))));
    if (cursors.has(cursor)) { invalid = true; break; }
    cursors.add(cursor);
    params = page.next;
  }

  if (capped) errors.push({ step: "txns_24h capped", message: `stopped after ${maxPages} pages; count is a floor` });
  if (invalid) errors.push({ step: "activity response invalid", message: "invalid activity response: malformed or unordered rows, inconsistent duplicates, or repeating cursor; window is incomplete" });

  return {
    txns_24h: txns,
    launches_24h: countLaunches ? launches : null,
    last_tx_at: lastTxAt,
    last_method: lastMethod,
    pages,
    capped,
    // Complete means the walk reached past the window or off the end of the list: every transaction
    // inside the 24 hours was seen, so the count is exact rather than a floor.
    complete: (reachedOlder || exhausted) && !failed && !invalid,
    items,
    reused,
    cache_hit: cacheHit,
    errors,
  };
}

export function createActivityClient({ base = BLOCKSCOUT_BASE, deps = {} } = {}) {
  const get = (path) => requestJson(`${base}${path}`, { headers: HEADERS }, deps);
  return {
    counters: (address) => get(`/api/v2/addresses/${address}/counters`),
    transactions: (address, params) =>
      get(`/api/v2/addresses/${address}/transactions?${toQuery({ ...(params ?? {}), filter: "to" })}`),
    stats: () => get("/api/v2/stats"),
  };
}

/**
 * Reads every activity fact for one address. Never throws: a blocked counters call still leaves the
 * 24h walk to run, and a blocked walk still leaves the lifetime counters.
 *
 * `firstPage` is the change-signal page, already fetched and already paid for. `readCounters` is
 * false when the caller has decided the lifetime counters are not worth a credit this run — they are
 * facts that only go stale, so the caller carries the committed ones forward instead.
 * `allowPaging` is false when the signal said nothing moved: page one is still counted, because a
 * count it completes is exact and free, but no further page is bought.
 */
export async function readAddressActivity(client, entry, {
  now = Date.now(),
  maxPages = pageCapForRole(entry?.role),
  preloadedCounters = undefined,
  firstPage = null,
  readCounters = true,
  allowPaging = true,
  activityCache = null,
} = {}) {
  const errors = [];
  const isFactory = entry?.role === "factory";

  let counters = { transactions_count: null, token_transfers_count: null, gas_usage_count: null };
  if (preloadedCounters !== undefined && preloadedCounters !== null) {
    counters = preloadedCounters;
  } else if (readCounters) {
    try {
      counters = parseCounters(await client.counters(entry.address));
    } catch (e) {
      errors.push({ step: "blockscout", message: `counters/${entry.address}: ${e.message}` });
    }
  }

  const cached = await activityCache?.get(entry.address, now - WINDOW_MS);
  const recent = await countRecentInbound((params) => client.transactions(entry.address, params), {
    since: now - WINDOW_MS,
    maxPages: allowPaging ? maxPages : 1,
    countLaunches: isFactory,
    firstPage,
    until: now,
    cached,
  });
  activityCache?.record(entry.address, recent, now - WINDOW_MS);
  // A deliberate stop at page one is not a capped walk: nothing was read that could be a floor, so
  // the caller carries the previous window rather than publishing a partial count as a measurement.
  const walkErrors = allowPaging ? recent.errors : recent.errors.filter((e) => e.step !== "txns_24h capped");
  const measured = recent.pages > 0 && (allowPaging || recent.complete) &&
    (recent.items.length > 0 || recent.complete);

  return {
    address: entry.address,
    label: entry.label ?? null,
    role: entry.role ?? null,
    transactions_count: counters.transactions_count,
    token_transfers_count: counters.token_transfers_count,
    last_tx_at: recent.last_tx_at,
    last_method: recent.last_method,
    // A walk that failed on its first page counted nothing and knows nothing; that is null, not 0.
    txns_24h: measured ? recent.txns_24h : null,
    launches_24h: isFactory && measured ? recent.launches_24h : null,
    window_complete: recent.complete,
    pages: recent.pages,
    errors: [...errors, ...walkErrors],
  };
}

/**
 * Rolls the per-address rows into the slug-level figures. All-null in means null out.
 *
 * A sum of windows is only as fresh as its oldest term, so `window_as_of` is the earliest window any
 * contributing row was measured over and `stale_since` the earliest date one of them stopped being
 * refreshed. Both are null when every term was measured by this run.
 */
export function aggregateActivity(rows = []) {
  const times = rows
    .map((r) => r?.last_tx_at)
    .filter((t) => typeof t === "string" && !Number.isNaN(Date.parse(t)));
  const sum = (values) => {
    let total = null;
    for (const v of values) if (Number.isInteger(v)) total = (total ?? 0) + v;
    return total;
  };
  const oldest = (values) => {
    const dates = values.filter((v) => typeof v === "string" && !Number.isNaN(Date.parse(v)));
    return dates.length ? dates.reduce((a, b) => (Date.parse(a) <= Date.parse(b) ? a : b)) : null;
  };
  const counted = rows.filter((r) => Number.isInteger(r?.txns_24h) || Number.isInteger(r?.launches_24h));
  return {
    last_activity_at: times.length ? times.reduce((a, b) => (Date.parse(a) >= Date.parse(b) ? a : b)) : null,
    txns_24h: sum(rows.map((r) => r?.txns_24h)),
    launches_24h: sum(rows.filter((r) => r?.role === "factory").map((r) => r?.launches_24h)),
    window_as_of: oldest(counted.map((r) => r?.window_as_of)),
    stale_since: oldest(counted.map((r) => r?.stale_since)),
  };
}

/** An empty activity block, used when the run skips Blockscout entirely (--rpc-only). */
export function emptyActivity(pulledAt, addresses = []) {
  return {
    pulled_at: pulledAt,
    addresses,
    last_activity_at: null,
    txns_24h: null,
    launches_24h: null,
    window_as_of: null,
    stale_since: null,
  };
}
