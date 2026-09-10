// Execution errors belong to the current reader result, BEFORE facts/caveats are carried.
// Never infer their age by comparing message text: a new timeout can repeat an old one exactly.
export const retryablePullError = error => /deferred:|HTTP (?:402|429|5\d\d)|timeout|after \d+ attempts|bot challenge|invalid activity response/i.test(error?.message ?? '');

export function createPullAttempt() {
  const errors = new Map();
  return {
    record(scope, currentErrors = [], address = null) {
      for (const error of currentErrors) {
        const row = {scope, address, step: error.step, message: error.message};
        errors.set(JSON.stringify(row), row);
      }
    },
    result() {
      const current = [...errors.values()].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
      const retryable = current.filter(retryablePullError);
      return {retryable: retryable.length > 0, current_errors: structuredClone(current),
        retryable_errors: structuredClone(retryable)};
    },
  };
}

export function finishPullAttempt(attempt, {attemptedAt, lastSuccessAt, reason}) {
  const result = attempt.result();
  return {...result, refresh: {policy_version: 1, status: result.retryable ? 'partial' : 'complete',
    attempted_at: attemptedAt, last_success_at: result.retryable ? lastSuccessAt : attemptedAt, reason}};
}
