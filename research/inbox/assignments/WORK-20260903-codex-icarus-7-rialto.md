# WORK-20260903-codex-icarus-7-rialto: Rialto Analytics as a data source: chain stats, tickers, tokenized stocks, discovery

Paste prompt for Codex (also the PR body of the kickoff PR).

```text
You are the Proofline engineer (producer codex) extending the on-chain puller of github.com/harsharn10/proofline (Robinhood Chain, chain id 4663; site branded Icarus). Read docs/design/icarus/README.md (§3 rules, §5 data additions), docs/integrations/pull.md, scripts/pull.mjs, scripts/lib/pull/{llama,dexscreener,token,series,write}.mjs, schema/pulled.schema.json, scripts/test-pull.mjs, and site/src/data/{types,content-server}.ts before touching code.

work_id: WORK-20260903-codex-icarus-7-rialto
producer: codex
branch: codex/20260903/WORK-20260903-codex-icarus-7-rialto (exists with this assignment file; commit to it)
depends_on: none (main already has #56 puller fixes and the Icarus site)
allowed_paths:
  - scripts/pull.mjs
  - scripts/lib/pull/rialto.mjs (new) and scripts/lib/pull/write.mjs
  - schema/pulled.schema.json, schema/pulled-chain.schema.json (new)
  - scripts/test-pull.mjs + fixtures
  - site/src/data/types.ts (Pulled* and chain types), site/src/data/content-server.ts (chain stats loader only), site/src/components/home/stat-box.tsx, site/src/routes/s.$id.tsx (stat box only), site/src/components/card/name-card.tsx (facts line only)
  - docs/integrations/pull.md
  - content/pulled/** via one real run of npm run pull, committed separately

The source: Rialto Analytics, https://analytics.rialto.xyz (a Robinhood Chain stats site by the Rialto exchange). Its JSON API is keyless but answers 403 to bare clients: send Accept "application/json, text/plain, */*", a Referer of the matching page (https://analytics.rialto.xyz/markets etc.), Accept-Language, and a desktop Chrome User-Agent. One request per endpoint per pull, at most one request per second, cache within a run, and every field is nullable with an errors[] reason when the read fails. Attribution on the site is "Rialto Analytics" linking to the tab the number came from. Verified 2026-09-03 03:55 UTC; shapes below are from live reads.

Endpoints (GET https://analytics.rialto.xyz/api/…):
- router/tickers → array of 580 markets in CoinGecko ticker shape: ticker_id, base_currency, target_currency (addresses), pool_id, last_price, base_volume, target_volume, high, low (24h, token units, strings).
- router/tokens → {chain_id, tokens: [{name, symbol, address, decimals, source, type (stable|non_stable), category (crypto|stock|…), liquid, can_buy, can_sell}]} (133 tokens).
- stats/assets/explorer?page=N&limit=200&search=&min_value=0&sort_by=value&sort_order=desc → {data: [{symbol, name, category (ETFs|Stocks|…), address, price, shares, value, pct_total, change_1d, change_7d, change_30d}], categories, nextPage, totalAssets} — the tokenized assets on chain by value (202 total).
- market/robinhood-symbols → {cached_at, count, symbols: [{ticker, name, address|null, category, logo_url, website, twitter, linkedin, listed_at_fe}]} (153 tokenized stocks).
- stats/tvl/kpis → {data: {total_tracked_tvl, total_stablecoin_usd, total_asset_supply_usd}, last_updated}; stats/tvl/tvl-by-category → {data: [{category, tvl_usd}]}; stats/tvl/protocol-tvl → {data: [{protocol, category, tvl_usd, total_tracked_tvl, share}]}; stats/tvl/protocol-tvl-over-time?period=3M and tvl-by-category-over-time?period=3M (daily series).
- stats/onchain-economics/kpis → {data: {cum_fee_revenue, cum_gross_profit, gross_margin_pct, latest_day}}; stats/onchain-economics/daily-metrics?period=3M (daily series).
- stats/metrics/overview?period=3M → {data: [{date, daily_volume_usd, cumulative_volume_usd, active_wallets, tx_count, avg_volume_per_tx_usd}]}; stats/metrics/top-assets?period=3M → {data: [{rank, token_symbol, token_name, category, volume_usd, share_pct}]} (224); stats/metrics/volume-by-asset?period=3M.
- stats/tokenization/stats → {total_assets_tokenized, assets_change_7d, total_value_tokenized_usd, value_change_pct_7d, daily_net_change_usd, net_minting, mint_volume_24h_usd, mint_volume_change_pct_24h}; stats/tokenization/total-value-tokenized-over-time?period=3M.
- stats/transfers/headline-stats → {data: {all_time_volume_usd, d1_volume_usd, d7_volume_usd, d30_volume_usd, d1_change_pct, all_time_transfers, all_time_transactions, all_time_stock_transfers}}; stats/mintburn/stats → {cumulative_mint_usd, cumulative_burn_usd, cumulative_net_usd, mint_24h_usd, mint_24h_change_pct}.
- liquidity/spreads → {spreads: [{pair: {base_currency, target_currency}, slippage: {"98": x, "980": x, "9800": x}}], prices}.
Do NOT use stats/transfers/large-transfer-firehose or any wallet-level feed (README §3 rule 4: no wallet labeling).

Task, in this order:
1. scripts/lib/pull/rialto.mjs: a client with the headers above, a stub-able fetch, and typed readers for the endpoints listed. Tests use fixtures, never the network.
2. Chain-level file content/pulled/chain.yaml (new schema schema/pulled-chain.schema.json): pulled_at; tvl {total_tracked_usd, stablecoin_usd, asset_supply_usd, by_category: [{category, tvl_usd}], by_protocol: [{protocol, category, tvl_usd, share}]}; economics {cum_fee_revenue_usd, cum_gross_profit_usd, gross_margin_pct, latest_day}; activity {daily_volume_usd, active_wallets, tx_count} for the latest day plus 7d and 30d sums; tokenization {assets, value_usd, mint_24h_usd, net_minting}; transfers {d1_volume_usd, d7_volume_usd, all_time_transfers}; mintburn {mint_24h_usd, cumulative_net_usd}; each block with source_url and errors[]. Daily series into content/pulled/series/chain.json {tvl_by_category_daily, volume_daily, active_wallets_daily, fee_revenue_daily} (90 days, dates as YYYY-MM-DD), guarded like the DefiLlama series (never overwrite a longer committed series with an empty or shorter read).
3. Per-name cross-check: match router/tickers to each located token by base_currency or target_currency (case-insensitive) → market.rialto {pairs: [{pool_id, base, target, last_price, base_volume_24h, target_volume_24h}], as_of, source_url}; convert to USD only when the counter-asset is a stable from router/tokens (type stable) or ETH/WETH priced from liquidity/spreads prices; otherwise leave USD null. When both DexScreener and Rialto give a 24h USD volume and they differ by more than 2x, record market.volume_disagreement {dexscreener_usd, rialto_usd} so the card can say "sources disagree" instead of picking one.
4. Tokenized stocks: for names whose leaf is a stock-paired token or an RWA product, resolve the pair asset (from the project file or the pulled pair's quote symbol) to market/robinhood-symbols and stats/assets/explorer → market.pair_asset {ticker, name, address, category, tokenized_value_usd, holders_proxy: shares, change_7d} with source_url. Also refresh content/dependencies/stock-tokens.yaml's summary numbers from stats/tokenization/stats if that card has a metrics block; if not, skip and say so.
5. Discovery feed for the researcher: content/pulled/discovery.yaml listing every token from router/tokens, router/tickers and stats/assets/explorer that is not a census name and not a tokenized stock/ETF/stable: {address, symbol, name, first_seen, rialto_volume_24h_usd|null, dexscreener_liquidity_usd|null (one DexScreener read per candidate, capped at 40 per run, newest first), source_urls}. The standing research order reads this file.
6. Site: home stat box gains two figures from chain.yaml (chain TVL, fee revenue latest day) with "Rialto Analytics" as the source line; the category page stat box shows the category's TVL when tvl.by_category has a matching category (map taxonomy sections to Rialto categories in one small table with a comment); the card facts line adds a "Rialto" link when market.rialto exists and the "sources disagree" note when volume_disagreement is set. No other UI changes.
7. Schema, types, docs/integrations/pull.md (endpoints, headers, cadence, what is deliberately not pulled), tests for every reader and for the disagreement and discovery rules. Then one real npm run pull (check it stays within the 60-minute workflow budget; Rialto adds under a minute) and commit the regenerated pulled files as a separate commit "data: first Rialto read".

Rules that always apply (README §3): every number links to its source, honest placeholders, no wallet labeling, build stays green. Before you push: npm test, npm run validate:release (0 errors), npm --prefix site run build:render then npm --prefix site run test. Commit in small steps with messages ending in the trailer "Producer: codex". Push to the branch and mark the PR ready with the body:
## Done
## Data (per-field coverage from the real run: how many of the located names got market.rialto, pair_asset, and how many discovery candidates)
## Screens (home stat box, one category page, one card facts line; light and dark)
## Not done / questions
Never merge, never enable auto-merge.
```
