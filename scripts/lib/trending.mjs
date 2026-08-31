/**
 * A project is "trending" when at least `minAccounts` distinct top-tier CT accounts have posted a
 * `kind: ct` feed item about it within the last `windowDays` days (inclusive of `today`).
 *
 * @param {Map<string, Array>} feedBySlug - slug -> feed items array
 * @param {Array<{handle: string, tier: string}>} accounts
 * @param {{minAccounts: number, windowDays: number, today: string}} opts - `today` is YYYY-MM-DD
 * @returns {Map<string, {trending: boolean, accounts: string[], latest: string|null}>}
 */
export function computeTrending(feedBySlug, accounts, { minAccounts, windowDays, today }) {
  const topHandles = new Set((accounts ?? []).filter((a) => a.tier === "top").map((a) => a.handle));
  const todayDate = new Date(`${today}T00:00:00Z`);
  const startDate = new Date(todayDate);
  startDate.setUTCDate(startDate.getUTCDate() - windowDays);

  const result = new Map();
  for (const [slug, items] of feedBySlug ?? new Map()) {
    const seen = new Set();
    let latest = null;
    for (const item of items ?? []) {
      if (item.kind !== "ct") continue;
      if (!item.account || !topHandles.has(item.account)) continue;
      const itemDate = new Date(`${item.date}T00:00:00Z`);
      if (itemDate < startDate || itemDate > todayDate) continue;
      seen.add(item.account);
      if (latest === null || item.date > latest) latest = item.date;
    }
    result.set(slug, { trending: seen.size >= minAccounts, accounts: [...seen].sort(), latest });
  }
  return result;
}
