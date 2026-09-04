// Hard Blockscout credit accounting. The public REST responses do not expose a per-route weight,
// so each physical request (including a retry) reserves one credit before it leaves the process.

export const DEFAULT_BUDGET_PER_RUN = 12_000;
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
  let runCredits = 0;
  const deferred = new Set();

  const claim = (label = "explorer read", weight = 1) => {
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
    return true;
  };

  return {
    claim,
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

