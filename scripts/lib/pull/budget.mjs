// Provider credits, not request counts. Costs and remaining headers are documented at
// https://docs.blockscout.com/devs/pro-api-responses-and-routes .
//
// Credits are attributed, not sampled. Address workers run concurrently, so a "credits used since I
// started" delta on a process-global counter would fold in whatever the sibling workers spent in the
// same window — the receipt on the document would then double-count and no cost model built on it
// could be trusted. Each read therefore runs inside its own AsyncLocalStorage scope and every claim
// increments that scope's counter as well as the run and day totals.
//
// The scope also names the read. A deferral label is a slug and address, never the request URL: the
// label is written into the committed document, and a URL is both unreadable there and a place a
// query-string API key could one day leak.

import { AsyncLocalStorage } from "node:async_hooks";

// One daily run, with 20K reserved for explicit retries and 40K of provider headroom.
export const DEFAULT_BUDGET_PER_RUN = 40_000;
export const DEFAULT_BUDGET_PER_DAY = 60_000;

export function blockscoutCreditCost(url) {
  const path = new URL(url).pathname.replace(/^\/\d+/, "");
  if (/\/search\/quick$/.test(path)) return 25;
  if (/\/(summary|raw-trace|coin-balance-history)$/.test(path)) return 50;
  if (/\/internal-transactions$|\/smart-contracts\/verification\/config$/.test(path)) return 40;
  if (/\/(logs|token-transfers|state-changes|transfers)$|\/api\/v2\/tokens$/.test(path)) return 30;
  return 20;
}

const positiveInt = (value, fallback) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number : fallback;
};

export const utcDate = (now = Date.now()) => new Date(now).toISOString().slice(0, 10);

export function normalizeBudgetState(state = {}, now = Date.now()) {
  const date = utcDate(now);
  if (state?.date !== date) return { date, credits_used: 0, runs: 0 };
  return {
    date,
    // Version 1 counted physical requests. Never reset spent quota during the migration.
    credits_used: Math.max(0, Number(state.credits_used) || 0) * (state.version === 2 ? 1 : 20),
    runs: Math.max(0, Number(state.runs) || 0),
  };
}

export class BudgetDeferredError extends Error {
  constructor(scope, label = "explorer read") {
    super(`deferred: budget (${scope} cap reached) — ${label}`);
    this.name = "BudgetDeferredError";
    this.scope = scope;
    this.label = label;
  }
}

export function createCreditBudget({
  state = {},
  now = Date.now(),
  perRun = process.env.BLOCKSCOUT_BUDGET_PER_RUN,
  perDay = process.env.BLOCKSCOUT_BUDGET_PER_DAY,
} = {}) {
  const runCap = positiveInt(perRun, DEFAULT_BUDGET_PER_RUN);
  const dayCap = positiveInt(perDay, DEFAULT_BUDGET_PER_DAY);
  const day = normalizeBudgetState(state, now);
  const scopes = new AsyncLocalStorage();
  let runCredits = 0;
  let requests = 0;
  let providerRemaining = state?.date === utcDate(now) && state.version === 2 &&
    Number.isFinite(state.provider_remaining) ? state.provider_remaining : null;
  let exhausted = state?.date === utcDate(now) && state.provider_exhausted === true;
  const deferred = new Set();

  const claim = (fallbackLabel = "explorer read", weight = 1) => {
    const scope = scopes.getStore();
    const label = scope?.label ?? fallbackLabel;
    const credits = positiveInt(weight, 1);
    if (exhausted || (providerRemaining !== null && providerRemaining < credits)) {
      deferred.add(label);
      throw new BudgetDeferredError("provider", label);
    }
    if (runCredits + credits > runCap) {
      deferred.add(label);
      throw new BudgetDeferredError("run", label);
    }
    if (day.credits_used + credits > dayCap) {
      deferred.add(label);
      throw new BudgetDeferredError("day", label);
    }
    runCredits += credits;
    day.credits_used += credits;
    requests++;
    if (providerRemaining !== null) providerRemaining -= credits;
    if (scope) scope.credits += credits;
    return true;
  };

  /**
   * Runs `fn` in its own accounting scope and reports exactly what that call spent, whatever else
   * was in flight. Scopes nest: an inner scope's credits also count towards the enclosing one, so a
   * per-address total is the sum of its own reads and never of its siblings'.
   */
  const withCredits = async (label, fn) => {
    const parent = scopes.getStore();
    const scope = { label, credits: 0 };
    const value = await scopes.run(scope, fn);
    if (parent) parent.credits += scope.credits;
    return { value, credits: scope.credits };
  };

  return {
    claim,
    observeResponse: (response) => {
      const raw = response.headers?.get?.("x-credits-remaining");
      const remaining = raw == null || raw === "" ? NaN : Number(raw);
      // Monotonic inside a run: late responses must not replenish concurrent reservations.
      // Subtract all run reservations on the first observation as conservative in-flight slack.
      if (Number.isFinite(remaining) && remaining >= 0) providerRemaining = Math.min(
        providerRemaining ?? Infinity, Math.max(0, remaining - runCredits),
      );
      if (response.status === 402) { exhausted = true; providerRemaining = 0; }
    },
    withCredits,
    label: () => scopes.getStore()?.label ?? null,
    defer: (label) => deferred.add(label),
    snapshot: () => ({
      date: day.date,
      run_credits: runCredits,
      requests,
      provider_remaining: providerRemaining,
      provider_exhausted: exhausted,
      credits_used: day.credits_used,
      run_cap: runCap,
      day_cap: dayCap,
      remaining_run: Math.max(0, runCap - runCredits),
      remaining_day: Math.max(0, dayCap - day.credits_used),
      deferred: [...deferred],
    }),
    finish: () => ({ version: 2, date: day.date, credits_used: day.credits_used, runs: day.runs + 1,
      provider_remaining: providerRemaining, provider_exhausted: exhausted }),
  };
}
