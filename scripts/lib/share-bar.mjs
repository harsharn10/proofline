export const SHARE_BAR_MIN_USD = 25_000;

/**
 * The one reader/channel eligibility gate. Callers adapt their content row to this
 * deliberately small shape so the browser bundle and the score emitter cannot drift.
 */
export function meetsShareBar(entry) {
  if (!entry?.officialConfirmed || !entry?.hasContractOn4663) return false;
  const value =
    entry.shareBarMetric === "tvl"
      ? entry?.kpis?.tvl
      : entry?.kpis?.liquidityUsd;
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= SHARE_BAR_MIN_USD
  );
}
