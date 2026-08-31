/**
 * A project is "trending" when at least `minAccounts` distinct counting CT accounts have posted a
 * `kind: ct` feed item about it within the last `windowDays` days (inclusive of `today`).
 *
 * An account counts only when `tier === "top"` AND its `role` is absent or one of `alpha` / `kol`
 * (Task 5 addendum ruling 4): official project accounts, data feeds, infra and media never vote on
 * trending even when they sit at `top`, and `blacklist` rows are never counted at all.
 *
 * @param {Map<string, Array>} feedBySlug - slug -> feed items array
 * @param {Array<{handle: string, tier: string, role?: string}>} accounts
 * @param {{minAccounts: number, windowDays: number, today: string}} opts - `today` is YYYY-MM-DD
 * @returns {Map<string, {trending: boolean, accounts: string[], latest: string|null}>}
 */
export const TRENDING_ROLES = new Set(["alpha", "kol"]);

/** True when this account row is allowed to count toward the trending signal. */
export function countsForTrending(account) {
  if (!account || account.tier !== "top") return false;
  if (account.tier === "blacklist") return false;
  return account.role === undefined || account.role === null || TRENDING_ROLES.has(account.role);
}

export function computeTrending(feedBySlug, accounts, { minAccounts, windowDays, today }) {
  const countingHandles = new Set((accounts ?? []).filter(countsForTrending).map((a) => a.handle));
  const todayDate = new Date(`${today}T00:00:00Z`);
  const startDate = new Date(todayDate);
  startDate.setUTCDate(startDate.getUTCDate() - windowDays);

  const result = new Map();
  for (const [slug, items] of feedBySlug ?? new Map()) {
    const seen = new Set();
    let latest = null;
    for (const item of items ?? []) {
      if (item.kind !== "ct") continue;
      if (!item.account || !countingHandles.has(item.account)) continue;
      const itemDate = new Date(`${item.date}T00:00:00Z`);
      if (itemDate < startDate || itemDate > todayDate) continue;
      seen.add(item.account);
      if (latest === null || item.date > latest) latest = item.date;
    }
    result.set(slug, { trending: seen.size >= minAccounts, accounts: [...seen].sort(), latest });
  }
  return result;
}
