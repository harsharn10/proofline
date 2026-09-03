---
slug: palantard
coverage: stub
methodology_version: proofline-v1.0
---

# PALANTARD — research record

## Identity

PALANTARD is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Palantard (PALANTARD) on 2026-09-02 and seeded the PALANTARD/PLTR book. Traders buy and sell PALANTARD on Uniswap v4. PLTR is the pair rail, not this token. No official site was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Deployment

PALANTARD token (EIP-1167 DopplerERC20V1 clone): 0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S5]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S5 S15 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S21]

PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire): 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A on robinhood-chain. [verified S6 S7 S12 S16]

## Control

_Research pending._

## Security

token owner() is Airlock. Create-from 0xC6Bc…58ce has no code and is the LaunchCreated launcher. DopplerERC20V1, DopplerERC20V1Factory, and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/LongLauncher.sol, compiler v0.8.26). Token source is the EIP-1167 shell only. No audit report URL was located this pass. [verified S2 S3 S5 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener website is the LONG app token page. DexScreener socials list x.com/Palantards; that account posted CA 0x0a23…1e18 with @longdotxyz. Gecko token attributes have no website or twitter field. Flag unconfirmed-official. [claim S7 S9 S10]

@palantardmeme uses the Palantard display name and a different CA 0x09a2…1e18 (PALZ). r/palantards is a listed-stock meme community, not a token site. [claim S19 S20]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xC6Bc…58ce at 2026-09-02T21:15:57Z minted Palantard / PALANTARD supply 1e9*1e18 into Uniswap v4 poolId 0x23c7…0a5d quoted against PLTR. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6 S18]

PoolManager Initialize uses fee 8388608 and hooks 0x4e34…a544. Lock beneficiaries are 0xC6Bc…58ce 0.95 and 0x21E2…7A66 0.05. Secondary PALANTARD/USDG, PALANTARD/ETH, and Ramses PALANTARD/WETH books exist on DexScreener with far less liquidity than the PLTR book. [verified S6 S7]

PALANTARD/PLTR Uniswap v4 24h volume is 680493.53 USD and reserve_in_usd is 71104.55 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 163597.50. Gecko token volume_usd.h24 is 682821.69 across all pools, not the PLTR book. [claim S8 S9]

DexScreener same pair: liquidity.usd 109720.68, volume.h24 714906.77, fdv/marketCap 195446. Blockscout holders_count 390. Pair created 2026-09-02T21:15:57Z. Assignment lead of ~$74,165 / ~$679,236 sits nearer the Gecko pool slice than DexScreener. [claim S1 S7 S8]

## Communications

@Palantards posted PALANTARD live with CA [claim S10]

@Palantards posted $PALANTARD meme video [claim S13]

@palantardmeme posted a different Palantard CA [claim S19]

## Findings

USD liquidity figures on the PALANTARD/PLTR book count both sides, and the quote side is PLTR, not USDG. DexScreener liquidity and Gecko reserve disagree. @palantardmeme publishes a different Palantard CA (PALZ). No official handle was confirmed bidirectional, so comms surfaces stay unconfirmed-official. [claim S12]

- Quote token PLTR 0x894E…4F2A is the Robinhood Stock Token rail in GET /rhj/assets; this token is not PLTR. [verified S12 S16]
- Pool USD reserve is PALANTARD plus PLTR, not a USDG or WETH backstop. [claim S7 S8]
- Gecko reserve $71k versus DexScreener liquidity $110k; do not average. [claim S7 S8]
- No bidirectional official handle or domain this pass; @Palantards is unconfirmed-official. [claim S7 S10]
- Name collision with PALZ 0x09a2…1e18 / @palantardmeme and a Solana PALANTARD mint. [claim S19 S20]
- Distinct from packed GOYBEAM and from PLTITS/BOMBA/MONITOR. [verified S20]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/launcher/Airlock/PLTR and the create tx plus logs, RPC name/symbol/owner/code, DexScreener token and search, Gecko pool/token, /rhj/assets, and the @Palantards / @palantardmeme posts were opened on 2026-09-03 and excerpts copied from the responses. Gecko token/info returned 429 and was not retried. [verified S1 S5 S8 S12]
- Numbers: 680493.53 is the Gecko PALANTARD/PLTR pool 24h volume, not the 682821.69 token all-pools figure. Reserve 71104.55 is that pool. DexScreener 714906.77 / 109720.68 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that PALANTARD is the LONG protocol, packed GOYBEAM, Palantir Inc., or the PALZ / Solana namesake. Creation is LongLauncher.create of 0x0a23…1e18 against PLTR 0x894E…4F2A; the other names are different CAs; GET /rhj/assets lists PLTR as the quote rail only. [inference S4 S12 S19 S20]

## Sources

- S1 — Token 0x0a23…1e18 Palantard / PALANTARD.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x87615bc0…ab12.
- S5 — eth_getCode, name, symbol, owner() on PALANTARD.
- S6 — create tx logs Initialize / LaunchCreated.
- S7 — latest/dex/tokens PALANTARD.
- S8 — PALANTARD/PLTR Uniswap v4 pool.
- S9 — Palantard token.
- S10 — $PALANTARD is now live with CA.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — cash is just $PALANTARD we haven’t bought yet.
- S15 — LongLauncher 0x22e9…eeED.
- S16 — Token 0x894E…4F2A Palantir Technologies • Robinhood Token.
- S18 — LaunchCreated log for PALANTARD.
- S19 — just a palantard paired with $PLTR stocks.
- S20 — search PALANTARD and PLTR books.
- S21 — Airlock 0xeb7C…0862.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:10:00Z; methodology_version: proofline-v1.0.
