# Pulled chain data

`npm run pull` is the sole writer for `content/pulled/**`. It reads free, keyless endpoints and
refreshes the current YAML documents plus append-only snapshots. The scheduled workflow runs every
six hours. A null value means the read did not determine the fact; the adjacent `errors[]` explains
why. It never guesses and never turns an unavailable read into zero.

## Sources and cadence

| Output | Source URL pattern | Refresh |
| --- | --- | --- |
| `addresses[].is_contract`, `proxy`, `owner`, `owner_type`, `safe` | `https://rpc.mainnet.chain.robinhood.com` (`eth_getCode`, `eth_getStorageAt`, `eth_call`) | Every pull (6 h) |
| `addresses[].source_verified`, `contract_name`, `created_block`, `created_at`, `holders` | `https://robinhoodchain.blockscout.com/api/v2/addresses/<address>`, `/transactions/<creation-tx>`, `/tokens/<address>` | Every pull (6 h) |
| `market.pairs`, `liquidity_usd`, `volume_h24`, `trades_h24`, `price_usd`, `price_change_h24`, `fdv`, `first_pair_at` | `https://api.dexscreener.com/token-pairs/v1/robinhood/<token>` (all-chain token endpoint is a filtered fallback) | Every pull (6 h) |
| `market.top10_share`, `top10_share_ex_pools`, `burned_share`, `top10_as_of` | `https://robinhoodchain.blockscout.com/api/v2/tokens/<token>` and `/tokens/<token>/holders` page 1 | Every pull (6 h) |
| `market.launchpad` | `https://robinhoodchain.blockscout.com/api/v2/addresses/<token>` creator, joined to the factory and curve addresses of launchpad projects in `content/projects/*.yaml` | Every pull (6 h) |
| `structure.mint`, `structure.renounced` | `https://robinhoodchain.blockscout.com/api/v2/smart-contracts/<token>` verified ABI plus RPC `owner()` | Every pull (6 h) |
| `structure.lp[]` | DexScreener pair address plus Blockscout `/tokens/<pair>` and `/tokens/<pair>/holders` page 1 | Every pull (6 h) |
| `activity.*` | Blockscout `/addresses/<address>/counters` and `/addresses/<address>/transactions?filter=to` (40-page cap) | Every pull (6 h) |
| `metrics[]` TVL | `https://api.llama.fi/protocol/<protocol>` Robinhood Chain slice | Every pull (6 h) |
| `metrics[]` fees, revenue and volume | `https://api.llama.fi/summary/fees/<protocol>?dataType=dailyFees`, `dailyRevenue`, and `/summary/dexs/<protocol>?dataType=dailyVolume`, Robinhood Chain slice | Every pull (6 h) |
| `series/<slug>.json.revenue_daily` | DefiLlama daily-revenue response above, Robinhood Chain slice, latest 90 daily points | Every pull (6 h), rewritten only when the read is at least as long |
| `history/<slug>.jsonl` | Snapshot of that pull: holders, market figures, transactions, launches, TVL, `revenue_24h`, `top10_share` | One append per successful pull (6 h) |

## Concentration: what counts as a holder

`market.top10_share` is the share of **circulating** supply held by the ten largest live holders on
holder page 1, where circulating is total supply less everything sitting in a burn address. Burned
tokens are neither held nor sellable, so they leave both the numerator and the supply it divides, and
what was burned is reported on its own as `market.burned_share`. Counting them made PONS — which
burned 29% of supply to `0x…dEaD` — read as a top-10 of 37%, when its ten largest live holders are a
small fraction of that. A burn is the zero address, `0x…dEaD`, or a holder the explorer names or tags
as one; nothing else is assumed to be a burn.

`market.top10_share_ex_pools` is the same measure over the ten largest holders that are also not:

- a DexScreener pair address from `market.pairs`;
- a vault or locker address (see below);
- a pool contract. Uniswap v2 and v3 hold a pool's tokens in the pair contract, which DexScreener
  names. Uniswap v4 does not: every v4 pool on this chain lives inside one singleton **PoolManager**
  keyed by a 32-byte pool id, so its balance appears under the PoolManager's own address and no pair
  address can ever match it. Pool contracts are recognised by the contract name Blockscout returns on
  the holder row (`PoolManager`, `UniswapV3Pool`, `UniswapV2Pair`, …) and by the short documented
  address list `KNOWN_POOL_CONTRACTS` in `scripts/lib/pull/token.mjs`, which needs an explorer
  receipt per entry.

Both shares are clamped to `[0, 1]`: they divide two figures read seconds apart, so a supply that
lags a burn can put the ratio just outside the range, and one bad ratio used to fail the schema and
sink the whole document plus its history line. A clamp is recorded in `market.errors[]`.

Note that `history/<slug>.jsonl` carries `top10_share` from before this change as well; lines written
before 2026-09-03 measure the older, burn-inclusive share.

## Launchpad attribution

`market.launchpad` joins the token's creator to the factory and curve addresses of projects the
taxonomy files under the **launchpads** section (`schema/taxonomy.json`, via `census.tree.primary`).
`role: factory` alone is not enough: Downto registers a `Create3Factory` and a
`DiamondPackageCallBackFactory`, and L4VA a vault factory, none of which launch anything. Generic
deployment helpers — CREATE2/CREATE3 factories, bare `Deployer` contracts — are skipped by name even
inside a launchpad.

`via` says how the join was made:

| `via` | meaning |
| --- | --- |
| `factory` | the creator is that project's own factory or curve contract |
| `creator` | the creator is an address the project labels a launch deployer |
| `shared-factory` (with `shared: true`) | the creator is infrastructure many projects deploy through |

The only shared entry today is `0x1b37d3a7…`, the Doppler stack's `DopplerERC20V1Factory`, listed in
`KNOWN_LAUNCHER_DEPLOYERS` in `scripts/lib/pull/attribution.mjs`. LONG is the project on this chain
that runs it, but other launches go through the same contract, so a card must read it as "via Doppler
(LONG)" and never as "launched by LONG".

## LP locks

For Uniswap v2-style ERC-20 LP tokens, `structure.lp[].locked_share` is the share of the LP token
held by a burn address or by a locker on the first holder page, and `holder_kind` says which kind was
found. There is no `locker` role in `schema/shared.schema.json`, so the locker set is deliberately
vault-inclusive: it is every address a project gives `role: vault`, every address whose label or
contract name contains "lock" (Pons's `PonsLaunchLocker` and `V2LaunchLocker` are both), and the
documented `KNOWN_LOCKERS` list — empty today, because HoodLock's locker address is recorded as
`not-verified`. The same set leaves `top10_share_ex_pools`, since a vault holding the float and a
locker holding the LP are the same fact from two sides.

`locked_share: 0` is an assertion that nothing is locked, so it is written only when every holder read
is a plain account and none of them could be a locker this run has not located. A holder that is a
contract leaves the share null with `reason: no known locker or burn among top holders`. Each pair
that could not be read names its own condition rather than one catch-all reason:

| `reason` | condition |
| --- | --- |
| `pair id is not a 20-byte address; Uniswap v4 pool id, not checked` | the pair identifier is a 32-byte v4 pool id |
| `no ERC-20 LP token at the pair address; v3/v4 position, not checked` | `/tokens/<pair>` answered 404 |
| `LP token details could not be read from the explorer` | `/tokens/<pair>` failed for another reason |
| `pair contract is not an ERC-20 LP token; not checked` | the token type is not ERC-20 |
| `LP total supply was not returned` | the LP token has no `total_supply` |
| `LP holder page unavailable` | `/tokens/<pair>/holders` failed |
| `no known locker or burn among top holders` | read fine; nothing matched and a holder could be a locker |
| `LP holder page returned no holders` | the holder page was empty |

## DefiLlama figures are the chain slice, never the all-chain total

`metrics[]` and `series/<slug>.json` take `chainBreakdown["Robinhood Chain"]` and
`totalDataChartBreakdown[…]["Robinhood Chain"]`. A response with no per-chain breakdown carries the
protocol across every chain it runs on, so there is no fallback to `total24h` or `totalDataChart`:
the figure is null and `errors[]` says the response carries no breakdown. Publishing the aggregate
would credit this chain with Base's and Arbitrum's fees.

`content/pulled/series/<slug>.json` is a 90-day backfill rebuilt each run, so a failed read used to
replace a real series with `[]` — a deletion no later run could undo. A read that is shorter than the
committed series, or empty, now keeps the committed file and records why in the document's
`errors[]`. A protocol with no series at all gets no file rather than a file that says nothing.

## Running it

```sh
npm run pull -- --only pons,artificial-inu
npm run pull -- --only pons,artificial-inu --dry
npm run pull -- --rpc-only
```

`--only` accepts comma-separated census slugs; the older single-value `--slug` remains compatible.
Dry runs validate and print each slug's elapsed time without writing YAML, history or series files.
The closing coverage line reports how many selected names received each requested field, and how many
committed revenue series a short read left in place.

Launchpad attribution and the locker set are joins over `content/census.yaml` and
`content/projects/*.yaml` as read into memory for this run, never over the previous run's output in
`content/pulled/`. A `--only` run therefore attributes against the same table a full run does,
and a mistake in one run cannot be inherited by the next.

Blockscout calls send a browser User-Agent, use the shared request pacer and retry 429/5xx replies.
Explorer activity walks are capped at 40 pages and run at two addresses concurrently, keeping the
scheduled full run inside its 60-minute workflow budget while making a capped count explicit.
