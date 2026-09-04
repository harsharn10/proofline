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
| `chain.yaml`, `series/chain.json` | `https://analytics.rialto.xyz/api/stats/{tvl,onchain-economics,metrics,tokenization,transfers,mintburn}/…` | Every pull (6 h) or `--source rialto`; series never shorten |
| `market.rialto`, `market.pair_asset`, `market.volume_disagreement` | `https://analytics.rialto.xyz/api/router/{tickers,tokens}`, `/api/market/robinhood-symbols`, `/api/stats/assets/explorer`, `/api/liquidity/spreads` | Every pull (6 h) or `--source rialto` |
| `discovery.yaml` | Rialto router tokens and tickers plus the asset explorer; optional DexScreener liquidity for at most 40 newest candidates | Every pull (6 h) or `--source rialto` |
| `history/<slug>.jsonl` | Snapshot of that pull: holders, market figures, transactions, launches, TVL, `revenue_24h`, `top10_share` | One append per successful full pull (6 h); never from `--source rialto` |

## Rialto Analytics

Rialto Analytics is the chain-wide cross-check. Its keyless API rejects bare clients, so every call
sends `Accept: application/json, text/plain, */*`, `Accept-Language`, a desktop Chrome user agent and
a `Referer` for the matching public tab (`/markets`, `/tvl`, `/onchain-economics`, `/tokenization`,
`/transfers` or `/liquidity`). `scripts/lib/pull/rialto.mjs` caches by full URL within a run and the
runner gives the host its own one-request-per-second pacer. Each endpoint is read once per run, which
is what the one-request-per-endpoint rule means — retries on 429 and 5xx keep the shared policy, since
a single transient 503 must not null a chain block until the next six-hourly run. A failed endpoint
leaves nullable fields and a named `errors[]` entry; it does not stop other Rialto blocks or per-name
pulls. The tokenized-asset explorer is paged, and a page that fails keeps the pages already read and
records which page was lost. If `chain.yaml` itself cannot be written, the run records that against
every name, reports the source as unavailable, and still writes `discovery.yaml` from what was read.

The readers cover:

- router tickers and tokens; the paged tokenized-asset explorer; Robinhood symbols;
- TVL KPIs, current category and protocol slices, and both 3-month daily series;
- on-chain economics KPIs and daily metrics;
- chain activity overview, top assets and daily volume by asset;
- tokenization totals and series, transfer headlines, mint/burn totals and liquidity spreads.

`content/pulled/chain.yaml` keeps the current chain TVL, economics, activity, tokenization, transfer
and mint/burn blocks. Activity stores the latest day plus the explicit 7-day and 30-day sums.
`content/pulled/series/chain.json` keeps up to 90 days of TVL by category, volume, active wallets and
fee revenue. Each series is protected separately: an empty or shorter response keeps the longer
committed series and records that decision on the related chain block.

For a located token, a Rialto ticker matches only by base or target contract address, ignoring case.
Each matched pool leg carries its own USD volume, and only when the other side is a router token
marked `stable`, or ETH/WETH with a price returned by Rialto's liquidity endpoint; other quote assets
stay null.

**Never compare a partial figure with a whole one.** Those per-leg figures are detail: the router
indexes some of a token's pools and can price only some of those legs, so they do not sum to the
token's day. `market.rialto.volume_24h_usd` is instead Rialto's own published per-token figure, read
from `liquidity/spreads` as `prices[].volume_24h_usd`, which is the like-for-like counterpart of
DexScreener's `market.volume_h24`. When both are present and the larger is more than twice the
smaller, `market.volume_disagreement` preserves both figures and the card shows each one on a link to
its own source rather than silently choosing one. When Rialto publishes no figure for the token,
`volume_24h_usd` is null, `volume_note` says why, and `volume_disagreement` stays null: an absence is
not a disagreement.

Stock-paired and RWA names may also receive `market.pair_asset` from the official symbol list plus
the asset explorer. Only a tokenized stock or ETF qualifies: `market/robinhood-symbols` also lists 56
plain tokens in category `token` (ETH, WETH, USDG among them), and a pool being quoted in WETH does
not make WETH a tokenized asset. `pair_asset.tokenized_shares` is the explorer's own share count
(value / price) — a size, not a count of holders.

`content/pulled/discovery.yaml` joins all router tokens, ticker legs and asset-explorer rows by
address, then removes census deployments and everything Robinhood lists as a real-world asset. That
exclusion is one address set, built before any source is walked and applied to all three, so an
address rejected by one leg cannot re-enter through another. The three endpoints name real-world
assets in three different vocabularies, and all three are enumerated rather than pattern-matched:

| endpoint | field | tokenized values |
| --- | --- | --- |
| `router/tokens` | `category`, `type` | `stock`, `etf`; any `type: stable` |
| `market/robinhood-symbols` | `category` | `stock`, `etf` (**not** `token`, its largest category) |
| `stats/assets/explorer` | `category` | `Commodities`, `ETFs`, `Stocks`, `US Treasuries` |

The native-ETH sentinel `0xEeee…EEeE` is excluded too: it is a stand-in, not a deployed token. Each
candidate's symbol and name are resolved from whichever endpoint carries them before the census-name
check runs, so a token that appears only as a bare ticker leg is still recognised and still named.
`first_seen` is preserved across runs and the newest candidates come first; only the newest 40 receive
a DexScreener liquidity read per run, which bounds the discovery pass.

The puller deliberately does **not** request Rialto's large-transfer firehose or publish wallet-level
feeds, wallet labels or named-wallet movements. Aggregate active-wallet and transfer counts are the
only wallet-related figures retained.

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
npm run pull -- --source rialto
```

`--only` accepts comma-separated census slugs; the older single-value `--slug` remains compatible.
Dry runs validate and print each slug's elapsed time without writing YAML, history or series files.
The closing coverage line reports how many selected names received each requested field, and how many
committed revenue series a short read left in place.

### `--source rialto`: the fast refresh

A full run walks Blockscout for every address and takes about an hour and three-quarters at 179 names.
Rialto's own reads take under a minute, so `--source rialto` (or `--rialto-only`) refreshes only what
Rialto produces, against the files already on disk:

- `content/pulled/chain.yaml`, `content/pulled/series/chain.json` and `content/pulled/discovery.yaml`
  exactly as a full run writes them, the series guard included;
- per name, `market.rialto`, `market.pair_asset` and `market.volume_disagreement`, plus one
  DexScreener read for each name Rialto matched so both sides of the volume comparison are read
  minutes apart at worst. Names Rialto does not carry get no DexScreener request.

Everything the Blockscout walk produced — `top10_share`, `top10_share_ex_pools`, `burned_share`,
`launchpad` — is carried through untouched and keeps its own `top10_as_of`, and the `pulled_at` chain
head annotation is preserved because the RPC facts it describes are not re-read. **No history line is
appended**: `content/pulled/history/*.jsonl` is append-only and a snapshot must come from a whole
read. A name with no committed file is skipped and named in the closing line — run a full pull first.
Because Rialto is the whole point of this mode, a Rialto failure exits non-zero rather than writing a
run that quietly changed nothing.

Launchpad attribution and the locker set are joins over `content/census.yaml` and
`content/projects/*.yaml` as read into memory for this run, never over the previous run's output in
`content/pulled/`. A `--only` run therefore attributes against the same table a full run does,
and a mistake in one run cannot be inherited by the next.

Blockscout calls send a browser User-Agent, use the shared request pacer and retry 429/5xx replies.
Explorer activity walks are capped at 40 pages and run at two addresses concurrently, keeping the
scheduled full run inside its 60-minute workflow budget while making a capped count explicit.
