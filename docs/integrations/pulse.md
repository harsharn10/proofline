# Icarus pulse

The pulse is a small Cloudflare Worker that checks Robinhood Chain markets every ten minutes. It
stores its state in Workers KV, serves the latest result at `GET /pulse.json`, and does not write to
the repository or run research. The six-hour pull remains the durable record; the pulse is the fast
reader-facing path between pulls.

## Sources and request budget

Each scheduled tick reads page 1 of GeckoTerminal trending pools and new pools, then makes one
DexScreener token-pairs request for each distinct base token those pages surfaced, capped at 30.
One Rialto `router/tickers` request cross-checks 24-hour pool volume. The Worker values each Rialto
leg with the corresponding Gecko token price and averages the usable legs; it leaves the cross-check
null when neither leg can be valued.

The official Rialto `market/robinhood-symbols` list supplies stock and ETF addresses and tickers. It
is refreshed at most once a day and cached in KV, so it is not an extra request on ordinary ticks.
Rialto requests use `Accept: application/json, text/plain, */*`, the `/markets` Referer, and the same
desktop Chrome user agent as the puller. Every figure in an alert or hot row is accompanied by the
GeckoTerminal, DexScreener, Blockscout and Rialto links that identify its sources.

## Fixed rules

- **New launch:** pool age under 24 hours, at least $50,000 liquidity and at least $500,000 h1
  volume.
- **Breakout:** at least $100,000 liquidity and h1 volume at least three times the average of the
  preceding five hours (`(h6 - h1) / 5`). If an h6 window is unavailable, the Worker uses the prior
  KV ticks it has rather than making up a baseline.
- **Stock-pair spike:** pool age under 24 hours, at least $250,000 h1 volume, and a quote-token
  address or symbol in Rialto's stock/ETF list.

KV keeps the last six ten-minute observations for each pair. A given rule can fire once per pair in
six hours. At most three messages are delivered in a rolling hour and 12 in a rolling day; signals
that clear a rule but are held by a delivery cap still appear in that tick's `alerts` array.

## Output

`/pulse.json` has this stable top-level shape:

```json
{
  "at": "2026-09-04T16:30:00.000Z",
  "ticks": 42,
  "alerts": [],
  "hot": [],
  "launches_10m": null
}
```

`alerts` rows include the rule kind, token and pair addresses, optional launchpad attribution,
plain-language headline, numbers and source links. `hot` contains the ten pools with the most h1
volume and includes h1/h24 volume, Rialto's h24 cross-check, liquidity, market cap, FDV and links.
The site reads the URL in its `PULSE_URL` runtime variable with a two-second timeout and a ten-minute
memory cache. With no URL or no usable response, the page remains exactly as it was.

## Deploy and secrets

The deploy workflow uses Wrangler from `site/package-lock.json`, matching the existing site Worker.
Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions secrets before merging.
Wrangler auto-provisions the `PULSE_STATE` KV binding on the first deploy. In Cloudflare, add
`TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as encrypted Worker secrets; do not put their values in
GitHub content or Wrangler configuration. Set the Render service's `PULSE_URL` to the deployed Worker
URL (with or without `/pulse.json`).

`PULSE_DRY_RUN` defaults to `true`: eligible messages are logged, while `/pulse.json` remains live.
After checking one production tick and adding the Telegram secrets, change the Worker variable to
`false` in a reviewed deployment to enable delivery.

Local checks:

```sh
npm run test:signals
site/node_modules/.bin/wrangler deploy --dry-run --config pulse/wrangler.jsonc
site/node_modules/.bin/wrangler dev --test-scheduled --config pulse/wrangler.jsonc
curl 'http://localhost:8787/__scheduled?cron=*/10+*+*+*+*'
curl http://localhost:8787/pulse.json
```

## Sequencer counter: second phase

`launches_10m` is deliberately null in this phase. The follow-up design is a Durable Object with one
connection to `wss://feed.mainnet.chain.robinhood.com`. It will decode sequenced L2 transactions,
count calls to the Pons and Hookr factory addresses for ten-minute windows, persist the window across
Worker isolates, and copy the latest count into `/pulse.json`. The public feed is rate-limited and
not recommended as production infrastructure, so reconnection, cursor continuity and missed-window
behavior need fixtures before that counter can be reader-facing.

