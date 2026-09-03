export const SHARE_BAR_MIN_USD = 25_000;

/**
 * The first clause of the share bar (Icarus spec §3 rule 3): is the official surface confirmed?
 * One definition for the site bundle and the score emitter, reading the census row both already
 * hold — at least one official link of kind `site` or `docs`, a row that is not on the watchlist
 * (role `observe` marks the names whose official surface or mechanism is not confirmed, FoxPad
 * among them), and an identity that is not conflicted. The second-pass flag
 * `qualifying.citable.verified` is deliberately not part of this clause: it records controller
 * verification, which almost no row has yet, not whether the surface is official.
 */
export function officialSurfaceConfirmed(census) {
  if (!census) return false;
  const hasSurface = (census.official_links ?? []).some(
    (link) => link?.kind === "site" || link?.kind === "docs",
  );
  const onWatchlist = census.role === "observe";
  return hasSurface && !onWatchlist && census.identity?.status !== "conflicted";
}

/**
 * Located on chain 4663: a pulled address the explorer reads as a contract, or a live market
 * pair. One definition for the share bar and for the status a card shows — a name trading in a
 * pool is on chain whether or not its deployments have been verified one by one.
 */
export function locatedOnChain(pulled) {
  const addresses = pulled?.addresses ?? [];
  const pairs = pulled?.market?.pairs ?? [];
  return addresses.some((address) => address?.is_contract === true) || pairs.length > 0;
}

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
