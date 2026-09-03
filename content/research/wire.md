---
slug: wire
coverage: stub
methodology_version: proofline-v1.0
---

# Wire — research record

## Identity

Wire is classified as Agent execution platform.

A command layer that turns an X, Telegram or web mention into an on-chain trade on Robinhood Chain. Users tag @wirebotRH to buy, sell, send, launch on Pons or open a prediction market from a handle-tied wallet. $WIRE is the app token. @wirebotRH runs wirebot.trade.

Themes: agent, launchpad, prediction, rwa, index

## Deployment

WIRE token (PonsLauncherToken): 0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878 on robinhood-chain. [verified S8 S9 S10 S11]

WIRE/WETH Uniswap v3 pool (token liquidityPool()): 0xD55246642DD114bc21dB98C6f2261161a6158388 on robinhood-chain. [claim S11 S13 S14]

Pons v1 legacy factory (token launchFactory() / creator_address_hash): 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 on robinhood-chain. [claim S9 S12 S15]

Token deployer EOA: 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920 on robinhood-chain. [claim S11 S12 S22]

Prediction-market contract named in the 2026-07-20 post: 0x695d6Bd8E647060fbB069E602eB64ac058c206c5 on robinhood-chain. [claim S23 S24]

## Control

`owner()` on the token reverts. `deployer()` returns EOA `0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920` (no code). The v1 factory that created the token is not source-verified on the explorer. No timelock address appeared on the site, docs or explorer labels. The Uniswap v3 position NFT holder was not queried this pass. [verified S11 S15 S22] [unknown]

## Security

Site and docs describe an MPC-backed, exportable key and say the bot never holds keys; the public Twitter path is spending-limited and the web wallet is not. Those custody claims were not matched to a factory or SDK address. No audit report URL was located. [claim S6 S7] [unknown]

## Engineering

_Research pending._

## Team

Public identity is wirebot.trade and `@wirebotRH`. Token `socials()` returns `https://x.com/wirebotRH` and `https://wirebot.trade`; the X bio repeats the CA and the site URL. DexScreener info lists the same site, docs, X and `t.me/rh_wirebot`. The Telegram page is a bot-start titled WireBot; flag: unconfirmed-official. [verified S6 S8 S11] [claim S20]

No legal name or repository was linked from those surfaces; github.com/wirebotRH returned 404. A 2026-08-18 v2 post quotes `@gornx0x`. Bankr and Lemon are different census rows, not this handle or CA. [claim S17 S20] [unknown]

## Product and economics

Mention `@wirebotRH` in plain language (or use the web wallet at app.wirebot.trade). Docs say a language model turns the text into JSON and deterministic code inside a handle-tied wallet signs the transaction, with per-transaction and daily limits on the public Twitter bot. Stocks and ETFs settle in USDG on Uniswap v4; community tokens and ETH route through WETH pools; index baskets MAG7 and AI6 are minted through Vimen. [claim S6 S7]

`$WIRE` is a Pons v1 `PonsLauncherToken` named wire bot / WIRE, 18 decimals, totalSupply 1e27. `launchFactory()` and `creator_address_hash` are the Pons v1 legacy factory `0x0c37a24F5D23A486FA692d1500881d698B1F77a4`. The same creation transaction (2026-07-17T19:04:11Z, block 12356072) deployed Uniswap v3 pool `0xD55246642DD114bc21dB98C6f2261161a6158388` against WETH `0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73` with `poolFee()` 10000. [verified S9 S11 S12 S14]

Token launches from the command layer are not a separate factory. Site-feed `$BLUEVEST` tx `0xefd20ab8…` and `$TAIWAN` tx `0x883474b8…` on 2026-09-02 both called `launchToken` on PonsV2LaunchFactory `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e`. Docs: the pairing asset must be one Pons has approved. A 2026-07-20 post still named a flat $3 in ETH on top of Pons; that fee was not re-read from a current docs paragraph this pass. [verified S21] [claim S7 S23]

A 1% protocol fee (0.9% if referred) is taken on buy, sell, swap, send, burn, drop and fee claims and is documented as funding a buyback that sends `$WIRE` to a dead address. Prediction markets were posted live on 2026-07-20 as a USDG parimutuel beta at `0x695d6Bd8E647060fbB069E602eB64ac058c206c5` (unverified source). Perps remain an open conflict between the bio and the docs. [claim S6 S7 S8 S23]

DexScreener Uniswap v3 WIRE/WETH (not an all-pairs total): liquidity 158574.12 USD, 24h volume 401332.48 USD, marketCap 1334343 USD, price 0.001337 USD at this pass. Nine robinhood pairs; next book is Uniswap v4 WIRE/USDG at 18924.72 USD liquidity. Blockscout token: 3928 holders, circulating_market_cap 1369743.80 USD. [verified S10 S13]

Site counters the same day: 893 trades, $137K volume, 148 launches, 2.5M WIRE burned (0.25% of supply), 51 buyback runs. Those are the app's own feed totals, not the DexScreener pair slice and not a DefiLlama row (no Wire protocol). [claim S6 S25]

`@wirebotRH` replies on 2026-09-02 filled a $20 COIN→WIRE swap and NetNet COINflips. A 30 Aug reply said post-graduation buys had been missing a router approval and were patched. [claim S16 S18 S19]

## Communications

Account posted a NetNet COINflip loss of $30 COIN [claim S19]

Account posted a $20 COIN to WIRE swap fill [claim S18]

Account posted a post-graduation buy router-approval patch [claim S16]

@andrewtalksdefi listed $WIRE as Robinhood Chain utility [claim S26]

Account posted Wire v2 airdrops, bounties and packs [claim S17]

## Findings

The bot parses tweets and signs from a handle-tied wallet; a parser miss or a missing router approval (posted 30 Aug as patched) can fill the wrong venue or fail a buy. The 1% protocol-fee treasury was not located on chain this pass. The bio lists perps as live while docs still say they unlock at launch. [claim S6]

- Fee-treasury and burn-sink addresses are undocumented; the 2.5M burned figure is a site counter. [claim S6] [unknown]

- Handle-tied wallet derivation (MPC vs bot-held key) is a site/docs claim, not a reproduced factory. [claim S6 S7]

- A 30 Aug reply said post-graduation buys missed a router approval for some period. [claim S16]

- Bio lists perps as live; docs still say they unlock at launch. [disputed S7 S8]

- Prediction contract `0x695d6Bd8…` is unverified. Pons v1 factory source is unverified. No audit report was located. [claim S15 S24] [unknown]

- Telegram `t.me/rh_wirebot` is a bot-start page, not a bidirectional official group. Flag: unconfirmed-official. [claim S20]

- Receipts: wirebot.trade, /docs, app.wirebot.trade, X profile and named status URLs, t.me/rh_wirebot, Blockscout address/token/tx APIs, DexScreener latest/dex/tokens, DefiLlama protocols, github.com/wirebotRH (404), and RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified S6 S9 S11 S13]

- Numbers: 401332.48 USD is DexScreener Uniswap v3 WIRE/WETH volume.h24, not all WIRE pairs and not the site's $137K bot-volume counter; 3928 is Blockscout holders_count; 158574.12 USD is that v3 pair's liquidity.usd, not protocol TVL. [claim S6 S10 S13]

- Adversarial: the strongest contrary reading is that Wire is Bankr or Lemon, or that census `announced` still holds because the command layer is off-chain. Distinct handle, CA and Pons factory path, plus a live Uniswap v3 book and same-day `launchToken` txs on Pons v2, argue against a merge and meet the mainnet bar. [inference S8 S13 S21]

## Sources

- S6 — wirebot.trade home.
- S7 — WIRE documentation.
- S8 — X profile @wirebotRH.
- S9 — Address 0x8ECE…6878.
- S10 — Token 0x8ECE…6878.
- S11 — eth_getCode and PonsLauncherToken views.
- S12 — WIRE creation tx.
- S13 — latest/dex/tokens WIRE.
- S14 — UniswapV3Pool 0xD552…8388.
- S15 — Pons v1 legacy factory 0x0c37…77a4.
- S16 — Post-graduation router approval patched.
- S17 — Wire v2 is live.
- S18 — Swapped $20 COIN to WIRE.
- S19 — NetNet COINflip result.
- S20 — t.me/rh_wirebot.
- S21 — BLUEVEST launchToken on Pons v2.
- S22 — Deployer EOA 0xFe4B46C8….
- S23 — Prediction markets are live.
- S24 — Prediction contract 0x695d6Bd8….
- S25 — protocols list (no Wire row).
- S26 — Robinhood Chain utility list.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:40:00Z; methodology_version: proofline-v1.0.
