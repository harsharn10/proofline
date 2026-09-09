# Pulled chain data

Current policy: [Selective daily registry](../daily-registry.md). Daily selected refresh, weighted provider credits, two-page default walks and explicit hold/archive rules supersede the six-hour/request-count descriptions and historical projections below. The old tables are incident history, not current capacity guarantees.

`npm run pull` is the sole writer for `content/pulled/**`. It reads free, keyless endpoints and
refreshes the current YAML documents plus append-only snapshots. The scheduled workflow runs every
six hours. A null value means the read did not determine the fact; the adjacent `errors[]` explains
why. It never guesses and never turns an unavailable read into zero.

## Sources and cadence

| Output | Source URL pattern | Refresh |
| --- | --- | --- |
| `addresses[].is_contract`, `proxy`, `owner`, `owner_type`, `safe` | `https://rpc.mainnet.chain.robinhood.com` (`eth_getCode`, `eth_getStorageAt`, `eth_call`) | Every pull (6 h) |
| `addresses[].holders` | Blockscout PRO `/4663/api/v2/tokens/<address>`; public fallback | When the address change signal moves |
| `addresses[].source_verified`, `contract_name`, `created_block`, `created_at` | Blockscout `/addresses/<address>` and `/transactions/<creation-tx>` | First read, then only when the free RPC code hash changes |
| `market.pairs`, `liquidity_usd`, `volume_h24`, `trades_h24`, `price_usd`, `price_change_h24`, `fdv`, `first_pair_at` | `https://api.dexscreener.com/token-pairs/v1/robinhood/<token>` (all-chain token endpoint is a filtered fallback) | Every pull (6 h) |
| `market.top10_share`, `top10_share_ex_pools`, `burned_share`, `top10_as_of` | Blockscout `/tokens/<token>` and `/tokens/<token>/holders` page 1 | When DexScreener's token trade count moves |
| `market.launchpad` | Blockscout `/addresses/<token>` creator, joined to launchpad factory and curve addresses | When the token change signal moves |
| `structure.mint`, `structure.renounced` | Blockscout `/smart-contracts/<token>` verified ABI plus RPC `owner()` | When the token change signal moves |
| `structure.lp[]` | DexScreener pair address plus Blockscout `/tokens/<pair>` and `/tokens/<pair>/holders` page 1 | When the token change signal moves |
| `activity.txns_24h`, `launches_24h`, `last_tx_at`, `last_method` | Blockscout `/addresses/<address>/transactions?filter=to` | Page one every due pull — it is the change signal; further pages only on change (40 for factory/curve/router, 5 otherwise) |
| `activity.transactions_count`, `token_transfers_count` | Blockscout `/addresses/<address>/counters` | Only when the signal moved; a lifetime figure that otherwise carries |
| `metrics[]` TVL | `https://api.llama.fi/protocol/<protocol>` Robinhood Chain slice | Every pull (6 h) |
| `metrics[]` fees, revenue and volume | `https://api.llama.fi/summary/fees/<protocol>?dataType=dailyFees`, `dailyRevenue`, and `/summary/dexs/<protocol>?dataType=dailyVolume`, Robinhood Chain slice | Every pull (6 h) |
| `series/<slug>.json.revenue_daily` | DefiLlama daily-revenue response above, Robinhood Chain slice, latest 90 daily points | At most one replacement per UTC day; never shortened |
| `chain.yaml`, `series/chain.json` | `https://analytics.rialto.xyz/api/stats/{tvl,onchain-economics,metrics,tokenization,transfers,mintburn}/…` | Every pull (6 h) or `--source rialto`; series never shorten |
| `market.rialto`, `market.pair_asset`, `market.volume_disagreement` | `https://analytics.rialto.xyz/api/router/{tickers,tokens}`, `/api/market/robinhood-symbols`, `/api/stats/assets/explorer`, `/api/liquidity/spreads` | Every pull (6 h) or `--source rialto` |
| `discovery.yaml` | Rialto router tokens and tickers plus the asset explorer; optional DexScreener liquidity for at most 40 newest candidates | Every pull (6 h) or `--source rialto` |
| `history/<slug>.jsonl` | Snapshot of that pull: holders, market figures, transactions, launches, TVL, `revenue_24h`, `top10_share` | One append per successful due-name pull; never from `--source rialto` |

## Blockscout PRO key

Create a free key at [dev.blockscout.com](https://dev.blockscout.com), then add it to the repository
as the Actions secret `BLOCKSCOUT_API_KEY`. The pull and compile workflows pass the secret only as an
environment variable. It is optional: when absent, the puller keeps using
`https://robinhoodchain.blockscout.com/api/v2` with the existing browser user agent. When present,
every native REST route uses `https://api.blockscout.com/4663/api/v2` and sends
`Authorization: Bearer <key>`. `BLOCKSCOUT_API_BASE` can override the REST root for local testing;
both a host root and a root ending in `/api/v2` are accepted. The bearer is scoped to the host that
issued it: it is attached only when the resolved root is on `api.blockscout.com`, so a base pointing
at the public explorer, a mirror or a local proxy sends no key at all and falls back to the browser
user agent, the 4/s pace and two concurrent reads — even when `BLOCKSCOUT_API_KEY` is set.

The free PRO tier allows 5 requests per second and 100,000 credits per day. A PRO run starts at most
four explorer reads concurrently and paces their physical requests to 5/s. Public fallback retains
two concurrent reads and 4/s pacing. Every physical request, retries included, claims one credit
before it leaves the process; Blockscout does not publish route weights, so one is the conservative
documented fallback. The closing summary is the budget receipt.

## Tiers, queue and hard budget

The six-hour scheduler does not pull every name. `hot` means above the share bar or present in
`ops/pull-queue.json` within 24 hours and runs every six hours; `live` means activity within seven
days and runs every 12 hours; `quiet` means activity 7–30 days ago and runs daily; `dormant` runs
weekly. Due-ness is compared with half a cron period of tolerance: without it a name read at
17:17:09 is eleven seconds short of twelve hours when the 05:17 run asks, slips a whole slot, and
"every second run" silently becomes every third — a live cadence of 18 hours, a quiet one of 30.
`--only` and `--full` override cadence, while `--tier` limits it. Pulse or an operator can append
`{ "slug": "name", "reason": "...", "at": "ISO timestamp" }` to the queue. A successful name is
removed; a deferred or failed name stays queued, and an entry older than a week expires so a name
that is never due cannot pin itself hot for ever.

### The change signal

Before any expensive explorer read, one cheap signal decides whether the answer can have moved.

- **A contract**: page one of `/addresses/<address>/transactions?filter=to`, one credit. The signal
  is the hash and timestamp of the newest transaction *to* the address.
- **An EOA or Safe signer**: the RPC nonce, free.
- **A token**: both. DexScreener's 24-hour trade count is a pre-filter that can force a read on its
  own — a swap routed through a router or a v4 PoolManager never appears as a transaction to the
  token contract, so the token's inbound list can sit still while its holder set churns — but an
  unmoved trade count is never on its own a reason to skip the explorer read.

It is deliberately **not** `/addresses/<address>/counters.transactions_count`. On this deployment
that counter is a cached aggregate. On 2026-09-04 the PONS locker
`0x736D76699C26D0d966744cAe304C000d471f7F35` returned `transactions_count: 903584` at 11:23, at
17:49 and again at 18:00 UTC, while `/transactions?filter=to` moved from 11:24:10 to 17:55:47 with
fifty fresh `collectFees` calls on page one alone. A signal that cannot move classifies every
contract unchanged on every run for ever: the walk, the holder page, the ABI and the LP read never
execute again, `pulled_at` keeps advancing, and the corpus freezes while presenting itself as
current. The counters endpoint is still read — it is where the lifetime `transactions_count` comes
from — but only when the signal has already said something moved, and it is never a signal itself.

Page one is not a separate purchase. It is the first page of the 24-hour walk, so the credit that
buys the signal is the credit that starts the count, and for most addresses finishes it: when page
one reaches a transaction older than the window the count is exact and the window is refreshed for
nothing, which is how a quiet address falls to zero instead of reporting yesterday's number for ever.
Only an address with fifty or more inbound transactions inside 24 hours needs a second page.

A signal is not bought for every address. `token`, `factory`, `curve`, `router`, `vault` and
`multisig` are read every due run — that is where the published facts actually move. An `admin`,
`proxy`, `implementation`, `timelock` or unclassified `other` row is a static contract whose holder
count, ABI and creation block have not changed since deployment, so it is signalled only on a first
read, under `--full`, or when it transacted in the last seven days.

When the signal is unchanged the expensive reads are skipped and the committed facts are carried
with their original `stale_since`. RPC ownership and proxy facts, DexScreener, Rialto and DefiLlama
stay fresh regardless; they cost nothing.

### What a skipped read may and may not carry

`is_contract`, `source_verified`, `contract_name`, `created_block`, `created_at`, `holders`,
`transactions_count`, `token_transfers_count`, `last_tx_at` and `last_method` are facts. They only
go stale, so a run that did not buy them carries the committed value and dates it.

`txns_24h` and `launches_24h` are not facts. They are measurements of the 24 hours before a read,
and restating one under a newer `pulled_at` redefines the window it claims to describe — a factory
that launched 24 tokens yesterday and nothing since would report 24 launches in the last 24 hours
indefinitely. A carried figure therefore keeps `window_as_of`, the timestamp of the run that
actually measured it, carries `stale_since`, and keeps the errors that qualified it — above all the
`txns_24h capped` caveat of a page-capped walk, which is the difference between a measured 2,000 and
a lower bound that could be 50,000. At the block level, `activity.window_as_of` and
`activity.stale_since` are the oldest of the contributing rows': a sum of windows is only as fresh
as its oldest term.

`history/<slug>.jsonl` is append-only and cannot be corrected by a later run, so `txns_total` is the
sum of the explorer's lifetime `transactions_count` per address and nothing else. A run that did not
buy the counters carries the committed figure rather than substituting a different measurement that
happens to be at hand — an RPC nonce, a DexScreener trade count. Two consecutive runs of an
unchanged address write the same number.

### An empty read is not a fact

A null where the committed snapshot held a value is a failed read until proven otherwise. On
2026-09-04 at 13:27 UTC one run nulled `owner`, `owner_type` and the whole `safe` block on 82
address rows, 35 of them with `errors: []`, because a failed `eth_call` was being read as "this
contract has no `owner()`"; the signals feed published that as PONS renouncing ownership. Three
rules now hold:

- a node-reported error (`execution reverted`) is the contract answering, and is a fact; a transport
  failure is not, and leaves `owner_type: unknown` rather than `none`, with the failure recorded;
- a null where a value existed keeps the previous value, dates it, and records
  `read returned empty where a value existed; kept previous` when nothing else explains it;
- a genuine transition to null must arrive as a successful read carrying the confirming detail —
  `owner()` returning the zero address is a value, not an absence — or as the same empty answer
  repeating on the very next pull.

### The budget

`BLOCKSCOUT_BUDGET_PER_RUN` defaults to 6,000 credits and `BLOCKSCOUT_BUDGET_PER_DAY` to 60,000,
leaving 40,000 credits of daily headroom on the free tier's 100,000. 6,000 is not arbitrary: the
explorer pacer serialises physical requests to five per second, so 6,000 requests are twenty minutes
of pacing before any latency, and a cap the job cannot reach inside its 60-minute timeout would make
the deferral path unreachable — the previous 12,000 needed forty minutes against a 45-minute timeout.

There is a second budget, in wall-clock time. A run is latency-bound long before it is pace-bound —
the explorer answers in a second or two and the RPC has its own pacer — so a job can reach its
timeout with credits to spare, be killed, and lose every name it had already written.
`PULL_DEADLINE_MINUTES` (45 in the workflow, against a 60-minute job timeout) stops the loop from
starting new names, lists the ones it did not reach as deferred, and leaves time to validate, commit
and push what was read.

`ops/pull-budget.json` stores the UTC date, credits used and run count, and is rewritten after every
name rather than only at the end, so a job killed by its timeout still records what it spent. A cap
is checked before each physical request. Reaching it is not a failed run: remaining keyless reads
finish, explorer reads are recorded as `deferred`, prior non-null values are retained, the deferred
names and addresses are printed, and the process exits zero unless an independent gate fails. A
deferral is labelled `<slug>:<address>`, never the request URL — the label is written into the
committed document, and a URL there is both unreadable and the wrong place for anything a
query-string API key could one day end up in.

Credits are attributed, not sampled. Address workers run concurrently, so the previous
"credits used since I started" delta on a process-global counter folded in whatever the siblings
spent in the same window and double-counted: a `/counters`-only read was recorded as 2 credits and a
three-request address read as 4. Each read now runs in its own accounting scope, so the `credits`
field on a `reads` record is that read's own cost and a cost model built on it can be trusted.

The committed `reads` block explains what was read, unchanged or deferred, with its signal, its
code hash, its credit count and its stale date.

Planning allowance by explorer read kind (a changed name can own several addresses):

| Read kind | Credits when attempted | When paid |
| --- | ---: | --- |
| Contract change signal | 1/address | Every due read |
| Address metadata | 1–3/address | Signal changed; creation and token detail add calls |
| Activity walk | 1–40 deep-role pages; 1–5 otherwise | Signal changed |
| Token concentration | 2/token | Token signal changed; holder page 1 only |
| Verified ABI | 1/token | Token signal changed |
| LP check | 0–2/pair | Token signal changed; v3/v4 pool ids cost zero |

The planning figure is the third scheduled run on 2026-09-08 (PRO host, receipts warm): **20.6
credits per hot name and 14.0 per live name** with unchanged walks skipped, 1,942 credits for 115
names. The registry mix that day was 59 hot, 109 live, 0 quiet and 3 dormant. Holding that mix
constant:

| Names | Credits/day | Headroom below the 60,000 cap |
| ---: | ---: | ---: |
| 181 (today) | 7,931 | 52,069 |
| 200 | 8,763 | 51,237 |
| 500 | 21,907 | 38,093 |
| 1,000 | 43,813 | 16,187 |

A first read after a gap costs more (47.2 per hot name on 2026-09-08 11:20, after four days without
a pull) and a large intake of new names will look like that for a run or two.

Measured runs, newest last (the closing report of each scheduled job):

| Run (UTC) | Due | Read | Deferred at deadline | Credits | Hot / live / quiet per name | Projection at 1,000 names |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| 2026-09-08 11:20, first read after a four-day gap | 169 | 36 | 133 | 1,320 | 47.2 / 32.8 / 15.0 | 101,752/day |
| 2026-09-08 16:38 | 145 | 57 | 88 | 1,411 | 27.7 / 22.1 / – | 63,515/day |
| 2026-09-08 21:10 | 136 | 115 | 21 | 1,942 | 20.6 / 14.0 / – | 43,813/day |

The first scheduled run was latency-bound, not credit-bound: it spent 1,320 of its 6,000 credits and
reached 36 names in 45 minutes, about 75 seconds per name, because every address was a first read
under the new signal and transaction walks page sequentially. The next two runs show the receipts
doing their job: unchanged walks skipped went 70, 113, 260; names reached went 36, 57, 115; the
deferral at the deadline fell 133, 88, 21; and the per-name price fell 47 to 21 credits for hot,
33 to 14 for live. By the third run the job reads about 115 names in 45 minutes against roughly
136 due, so the hot tier refreshes every six hours and about twenty live names slip a cycle. The
remaining lever is throughput (concurrent names, or a shorter explorer timeout than 10 s times three
attempts), not budget: the day closed at 4,673 credits of 60,000.

The steady-state figure is what matters for planning and only the scheduled runs can measure it:
every run's closing report prints the measured credits per due name for each tier and rebuilds this
projection from those figures. Replace the table with the steady-state numbers once two consecutive
scheduled hot-tier reads have printed them.

The scheduled workflow is one job, not a two-shard matrix. `cancel-in-progress: false` protects the
job that is running and not the one queued behind it, so a compile run starting mid-pull cancelled a
pending second shard outright — half the registry skipping a cycle, its queue entries never consumed
and its spend never recorded, while the workflow reported success. The per-run credit cap is what
bounds the job now. It starts from current `main`, has 60 minutes, keeps the `main-bots` group and
the fetch/rebase/push retry loop, and commits the pulled data plus both ops state files. `--shard`
remains available as a dispatch input for a manual half-registry run.

The credit counter is committed by its own step with `if: always()`. A run that trips the bot-wall
gate or fails validation has still spent every credit it claimed, and if the day counter goes home
with the runner the next job starts from the same stale number: four crons of failing jobs, each
free to spend a full run cap, would blow through a 60,000/day limit that nobody was recording. That
step commits `ops/pull-budget.json` and `ops/pull-queue.json` only, with the same bot identity and
push loop, and drops the uncommitted data rather than smuggling it past a failed gate.

Cloudflare managed-challenge HTML is never parsed as API data. A challenge is an HTML body carrying
one of Cloudflare's own markers — a `Just a moment` title, a `cf-chl` element, the
`/cdn-cgi/challenge-platform` loader, or the `_cf_chl_opt` script — and it is retried once after a
0.5–1.5 second jitter, then recorded as `explorer served a bot challenge` with nullable fields. HTML
alone is not a challenge: a 404, 502 or 504 error page carries no marker, so it stays an ordinary
transport error, retried by the 429/5xx policy and recorded as `HTTP <status> returned HTML, not
JSON`. Only real challenges count toward the gate: if they are more than half of all physical
explorer requests, the pull exits nonzero with a one-line bot-wall summary instead of silently
publishing a mostly empty explorer snapshot. A gateway blip can no longer be reported as a bot wall.

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
npm run pull -- --tier hot --shard 0/2
npm run pull -- --full --only pons
npm run pull -- --rpc-only
npm run pull -- --source rialto
```

`--only` accepts comma-separated census slugs; the older single-value `--slug` remains compatible.
`--full` forces explorer reads, `--tier` selects one cadence, and `--shard` accepts only `0/1`, `0/2`
or `1/2`. Dry runs validate and print each slug's elapsed time without writing YAML, history, series
or budget state. Every name's line ends with what it cost. The closing report prints credits this run
and this UTC day, skipped walks, the measured credits per due name for each tier, the projection at
200, 500 and 1,000 names built from those measurements, and the deferred reads by name and address.

### `--source rialto`: the fast refresh

A full run walks Blockscout for every address. Rialto's own reads take under a minute, so `--source rialto` (or `--rialto-only`) refreshes only what
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

Public Blockscout calls send a browser User-Agent; PRO calls send the bearer key. Both use a request
pacer and retry 429/5xx replies, with the separate managed-challenge behavior documented above.
Explorer activity walks are capped at 40 pages for factory, curve and router roles and five pages for
every other role, and a capped count carries its floor caveat wherever it goes. Four PRO reads can be
in flight, paced to 5/s; the per-run credit cap keeps the scheduled job inside its 60-minute limit.
