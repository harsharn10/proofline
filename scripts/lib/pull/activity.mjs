// Blockscout activity reads: is this contract still being used, and by how many people today.
//
// Two questions per address. The lifetime one is cheap — /counters returns the total transaction and
// token-transfer counts in a single call. The live one is not: Blockscout has no "transactions in
// the last day" endpoint, so the only honest answer is to page the inbound transaction list, which
// comes back newest-first, and stop at the first item older than the window. That is why the paging
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
      from: typeof it?.from?.hash === "string" ? it.from.hash : null,
    })),
    next: next && typeof next === "object" && Object.keys(next).length > 0 ? next : null,
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
 * Walks the inbound transaction list newest-first and counts what falls inside the window.
 *
 * `fetchPage(params)` is the only I/O, so the walk is unit-testable against an array of stub pages.
 * Returns the count reached, the newest inbound transaction seen at all (window or not), whether
 * the page cap stopped the walk, and any transport failure. A failure mid-walk keeps the partial
 * count: half a day's activity is still evidence, and the error says the number is a floor.
 */
export async function countRecentInbound(fetchPage, { since, maxPages = MAX_PAGES, countLaunches = false } = {}) {
  const errors = [];
  let params = null;
  let pages = 0;
  let txns = 0;
  let launches = 0;
  let capped = false;
  let reachedOlder = false;
  let lastTxAt = null;
  let lastMethod = null;

  for (;;) {
    if (pages >= maxPages) {
      capped = true;
      break;
    }
    let page;
    try {
      page = parseTransactionsPage(await fetchPage(params));
    } catch (e) {
      errors.push({ step: "blockscout", message: `transactions?filter=to page ${pages + 1}: ${e.message}` });
      break;
    }
    pages++;

    // The very first row of the very first page is the most recent time anyone called this address.
    if (pages === 1 && page.items.length > 0) {
      lastTxAt = page.items[0].timestamp;
      lastMethod = page.items[0].method;
    }

    for (const item of page.items) {
      const at = item.timestamp ? Date.parse(item.timestamp) : Number.NaN;
      if (!Number.isFinite(at) || at < since) {
        reachedOlder = true;
        break;
      }
      txns++;
      if (countLaunches && isLaunchMethod(item.method)) launches++;
    }

    if (reachedOlder || page.next === null) break;
    params = page.next;
  }

  if (capped) errors.push({ step: "txns_24h capped", message: `stopped after ${maxPages} pages; count is a floor` });

  return {
    txns_24h: txns,
    launches_24h: countLaunches ? launches : null,
    last_tx_at: lastTxAt,
    last_method: lastMethod,
    pages,
    capped,
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
 */
export async function readAddressActivity(client, entry, {
  now = Date.now(),
  maxPages = pageCapForRole(entry?.role),
  preloadedCounters = undefined,
} = {}) {
  const errors = [];
  const isFactory = entry?.role === "factory";

  let counters = { transactions_count: null, token_transfers_count: null, gas_usage_count: null };
  if (preloadedCounters !== undefined) {
    counters = preloadedCounters;
  } else {
    try {
      counters = parseCounters(await client.counters(entry.address));
    } catch (e) {
      errors.push({ step: "blockscout", message: `counters/${entry.address}: ${e.message}` });
    }
  }

  const recent = await countRecentInbound((params) => client.transactions(entry.address, params), {
    since: now - WINDOW_MS,
    maxPages,
    countLaunches: isFactory,
  });

  return {
    address: entry.address,
    label: entry.label ?? null,
    role: entry.role ?? null,
    transactions_count: counters.transactions_count,
    token_transfers_count: counters.token_transfers_count,
    last_tx_at: recent.last_tx_at,
    last_method: recent.last_method,
    // A walk that failed on its first page counted nothing and knows nothing; that is null, not 0.
    txns_24h: recent.pages === 0 ? null : recent.txns_24h,
    launches_24h: isFactory && recent.pages > 0 ? recent.launches_24h : null,
    errors: [...errors, ...recent.errors],
  };
}

/** Rolls the per-address rows into the slug-level figures. All-null in means null out. */
export function aggregateActivity(rows = []) {
  const times = rows
    .map((r) => r?.last_tx_at)
    .filter((t) => typeof t === "string" && !Number.isNaN(Date.parse(t)));
  const sum = (values) => {
    let total = null;
    for (const v of values) if (Number.isInteger(v)) total = (total ?? 0) + v;
    return total;
  };
  return {
    last_activity_at: times.length ? times.reduce((a, b) => (Date.parse(a) >= Date.parse(b) ? a : b)) : null,
    txns_24h: sum(rows.map((r) => r?.txns_24h)),
    launches_24h: sum(rows.filter((r) => r?.role === "factory").map((r) => r?.launches_24h)),
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
  };
}
