# Finalized activity cursors

## What this saves

The daily collector already stops at the 24-hour cutoff and caps automatic walks at two pages. Ordinary non-overlapping daily windows still need their new transaction pages. This cache primarily saves repeated pages during overlapping refresh/recovery runs, or completes an unchanged-signal window without another explorer request. It does not make busy factories cheap to count exhaustively.

The regression fixture's overlapping window has identical transaction and launch-method counts with one page instead of two. That is one physical explorer request avoided in that fixture, not a measured production savings percentage. Inspect `activity_cache` in `build/pull-report.json`: eligible cache lookups, actual cache joins, reused transactions, checkpoint RPC checks, saved records and rejected records. These counters do not claim that every eligible lookup saves a page.

## One reusable history per address

`content/pulled/activity-cache/robinhood-chain.json` is disposable machine-owned state. Its version-1 envelope contains `chain` and `entries`; each entry has a normalized `address`, millisecond `observed_at` and `covered_since`, a numbered/hashed/timestamped `checkpoint`, and newest-first transaction `items` containing only hash, timestamp, block number and decoded method. It stores no project identity, role, sender wallet, source credentials or opaque provider cursor. Factory-specific launch counting is applied at read time, so aliases reuse the same activity suffix without duplicating role-specific cache records.

Only complete, error-free windows with valid hashes/block numbers can seed the cache, and only their finalized suffix is retained. Strict structural checks reject unexpected entry/item fields, duplicate hashes, unordered timestamps/blocks, invalid times and unfinalized rows. Limits: 1 MB on disk, 250 addresses, 200 transactions/address, 5,000 retained transactions overall, 26-hour retention. Entries above bounds are discarded, never truncated while claiming complete coverage. Writes use a temporary file and atomic rename. A dry run does not write the cache; `--full`, `--rpc-only`, Rialto-only runs and empty selections bypass it.

The normal pull workflow already commits all machine output under `content/pulled/`, so it picks up this subdirectory after the existing validation gate. The PR guard prohibits generated cache records in implementation PRs. Public Vite content imports do not include this nested JSON cache. The current project-level observation files remain compatible; this is the first normalized reusable activity state, not a completed migration of all shared observations.

## Trust and fallback

The node's `eth_getBlockByNumber("finalized", false)` response supplies the checkpoint. Before reusing prior history, the cache rereads that checkpoint's block number and requires the same hash and timestamp; the current finalized height must not have moved behind it. Checks are shared within a run and capped at eight distinct prior checkpoints (plus the current finalized read). Unsupported/failing RPC or checkpoint mismatch disables reuse and retains ordinary collection. This follows the node's finality claim; it is not an independent consensus verifier.

The first fresh explorer pages must reach the cached finalized head transaction, and every supplied overlapping row must match hash, time, block and method. The older finalized suffix is joined only if the new 24-hour cutoff lies within the cached coverage. Expired, corrupt, wrong-chain, mismatched or missing-anchor records fall back to the same bounded fresh scan. All unfinalized activity is re-read. Indexer receipts remain the measurement source, not a proof that the indexer has indexed every transaction.

The walker now deduplicates transaction hashes. Invalid timestamps, inconsistent duplicates, unordered rows, malformed/empty-with-cursor responses and repeating cursors produce an incomplete-window error rather than pretending the scan reached the end. A genuine cap remains a reported lower bound. No cache error enables delivery, alters identity approval, or expands the paid explorer budget.

## Probe and rollout

On September 9, the Robinhood RPC answered the finalized-block probe successfully. The public explorer transaction endpoint returned HTTP 403 HTML, so that environment could not verify a live incremental explorer join. Compatibility is based on Blockscout's documented transaction fields and executable transport fixtures; observe real cache hit/fallback counters after rollout before changing limits.

Primary contracts: [Ethereum block RPC](https://ethereum.github.io/execution-apis/api/methods/eth_getBlockByNumber/) and [Blockscout address transactions](https://docs.blockscout.com/api-reference/get-address-transactions).
