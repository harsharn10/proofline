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
| `market.top10_share`, `top10_share_ex_pools`, `top10_as_of` | `https://robinhoodchain.blockscout.com/api/v2/tokens/<token>` and `/tokens/<token>/holders` page 1 | Every pull (6 h) |
| `market.launchpad` | `https://robinhoodchain.blockscout.com/api/v2/addresses/<token>` creator, joined to factory/curve/launcher-deployer addresses in `content/pulled/*.yaml` | Every pull (6 h) |
| `structure.mint`, `structure.renounced` | `https://robinhoodchain.blockscout.com/api/v2/smart-contracts/<token>` verified ABI plus RPC `owner()` | Every pull (6 h) |
| `structure.lp[]` | DexScreener pair address plus Blockscout `/tokens/<pair>` and `/tokens/<pair>/holders` page 1 | Every pull (6 h) |
| `activity.*` | Blockscout `/addresses/<address>/counters` and `/addresses/<address>/transactions?filter=to` (40-page cap) | Every pull (6 h) |
| `metrics[]` TVL | `https://api.llama.fi/protocol/<protocol>` Robinhood Chain slice | Every pull (6 h) |
| `metrics[]` fees, revenue and volume | `https://api.llama.fi/summary/fees/<protocol>?dataType=dailyFees`, `dailyRevenue`, and `/summary/dexs/<protocol>?dataType=dailyVolume`, Robinhood Chain slice | Every pull (6 h) |
| `series/<slug>.json.revenue_daily` | DefiLlama daily-revenue response above, Robinhood Chain slice, latest 90 daily points | Every pull (6 h), full backfill rewritten |
| `history/<slug>.jsonl` | Snapshot of that pull: holders, market figures, transactions, launches, TVL, `revenue_24h`, `top10_share` | One append per successful pull (6 h) |

For Uniswap v2-style ERC-20 LP tokens, `structure.lp[].locked_share` is the share held by the zero or
dead burn address and by pulled vault/locker addresses visible on the first holder page. The
`holder_kind` states which kind was found. Uniswap v3/v4 liquidity is position-based, so it is
recorded with a null share and `reason: v3/v4 position; not checked`.

## Running it

```sh
npm run pull -- --only pons,artificial-inu
npm run pull -- --only pons,artificial-inu --dry
npm run pull -- --rpc-only
```

`--only` accepts comma-separated census slugs; the older single-value `--slug` remains compatible.
Dry runs validate and print each slug's elapsed time without writing YAML, history or series files.
The closing coverage line reports how many selected names received each requested field.

Blockscout calls send a browser User-Agent, use the shared request pacer and retry 429/5xx replies.
Explorer activity walks are capped at 40 pages and run at two addresses concurrently, keeping the
scheduled full run inside its 60-minute workflow budget while making a capped count explicit.
