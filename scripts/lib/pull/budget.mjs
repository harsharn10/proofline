// Hard Blockscout credit accounting. The public REST responses do not expose a per-route weight,
// so each physical request (including a retry) reserves one credit before it leaves the process.
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

// 6,000 credits is what a scheduled job can actually spend: the explorer pacer serialises physical
// requests to five per second, so 6,000 requests take twenty minutes of pacing alone. A cap the job
// cannot reach before its timeout is not a cap — it just makes the deferral path unreachable.
export const DEFAULT_BUDGET_PER_RUN = 6_000;
export const DEFAULT_BUDGET_PER_DAY = 60_000;

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
    credits_used: Math.max(0, Number(state.credits_used) || 0),
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
  const deferred = new Set();

  const claim = (fallbackLabel = "explorer read", weight = 1) => {
    const scope = scopes.getStore();
    const label = scope?.label ?? fallbackLabel;
    const credits = positiveInt(weight, 1);
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
    withCredits,
    label: () => scopes.getStore()?.label ?? null,
    defer: (label) => deferred.add(label),
    snapshot: () => ({
      date: day.date,
      run_credits: runCredits,
      credits_used: day.credits_used,
      run_cap: runCap,
      day_cap: dayCap,
      remaining_run: Math.max(0, runCap - runCredits),
      remaining_day: Math.max(0, dayCap - day.credits_used),
      deferred: [...deferred],
    }),
    finish: () => ({ date: day.date, credits_used: day.credits_used, runs: day.runs + 1 }),
  };
}
