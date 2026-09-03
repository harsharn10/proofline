---
slug: bigly
coverage: stub
methodology_version: proofline-v1.0
---

# BIGLY — research record

## Identity

BIGLY is classified as Stock-paired token.

A Pons v2 memecoin that graduated into a locked Uniswap v4 pool quoted against the Robinhood DJT stock token. Traders buy and sell BIGLY on that DJT book and on later USDG books. PonsV2LaunchFactory created it. No official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT

## Deployment

BIGLY token (PonsV2LauncherToken): 0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04 on robinhood-chain. [verified S1 S2 S3]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S12]

V2LaunchLocker (top holder / locked position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [verified S4 S11 S19]

DJT Robinhood Stock Token (pair quote / rail): 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 on robinhood-chain. [verified S7 S10 S13]

## Control

Token owner() reverts. Verified PonsV2LauncherToken source says deployer() is attribution-only. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Verified locker ABI has no withdrawal function. Token source is_fully_verified true. [verified S1 S3 S11 S16]

launchAndBuy params and PoolRegistered creator are 0xdEC7…7e75; getLaunchedToken.creatorFeeRecipient is 0x315B…0a09. [verified S4 S5 S6]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. token.socials() is empty. DexScreener info.websites is the Pons launchpad path for this CA. info.socials is x.com/barrons_alt, whose bio embeds the CA. Flag unconfirmed-official and third-party-link. [claim S7 S14 S17]

Census Pons is the pad that created the token. Packed dollar-1 is a different Pons v2 DJT graduation at 0xdCe5…e6da. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified S5 S12]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 emitted TokenLaunched via PonsV2LaunchFactory 0x7eD5…C7e for 0x73114aBD…7c04 at 2026-08-15T12:08:51Z with pairToken DJT. createGraduatedPool about 1h 50m later locked Uniswap v4 pool 0x331a…047d. V2LaunchLocker isLocked true and holds positionId 709300. factory() on the token reverts; launchFactory() and locker.factory() return the Pons v2 factory. [verified S4 S5 S6 S11]

Gecko launchpad_details.completed is true at 2026-08-15T13:58:20Z with migrated_destination_pool_address 0x331a…047d. DexScreener also lists BIGLY/USDG Uniswap v4 books with far less liquidity than the DJT book. [verified S7 S9]

djt/BIGLY Uniswap v4 24h volume is 365205.74867673 USD and reserve_in_usd is 64208.9579 at 2026-09-03T05:11:00Z from the Gecko pool endpoint. fdv_usd is 1467999.40. Gecko token volume_usd.h24 is 365507.07 across all pools, not the DJT book. [claim S8 S9]

DexScreener same pair: liquidity.usd 54487.27, volume.h24 348957.05, fdv/marketCap 428729. Blockscout holders_count 1208. Pair created 2026-08-15T13:58:20Z. Assignment lead of liq ~$58,658 vol ~$345,133 is the same pair, live DexScreener at collection. [claim S2 S7]

## Communications

@AkahataMitai posted BIGLY/DJT as a DJT distribution book [claim S15]

X accounts posted rotating netlify claim URLs with the BIGLY CA [claim S18]

@barrons_alt bio embeds the BIGLY CA [claim S17]

## Findings

USD liquidity figures on the BIGLY/DJT book count both sides, and the quote side is DJT, not USDG. Aggregator FDV figures disagree by more than 3x this pass. No official handle was located, so comms surfaces stay unconfirmed-official. Factory owner() is a SafeProxy whose owners were not read this pass. [claim S10]

- Quote-side USD figures are DJT-denominated, not USDG. [verified S7 S8]
- DexScreener fdv 428729 and Gecko pool fdv 1467999 disagree this pass. [claim S7 S8]
- No official handle or domain this pass; Telegram/claim URLs on X are third-party-link / copypasta-pattern. [claim S7 S18]
- Factory owner is a SafeProxy whose signers were not read. [verified S4]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/locker/DJT and both launch/grad txs, RPC name/symbol/launchFactory/getLaunchedToken/isLocked, DexScreener, Gecko pool/token, /rhj/assets, Pons launchpad HTML, @AkahataMitai, @barrons_alt, and the netlify claim posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S10]
- Numbers: 365205.75 is the Gecko djt/BIGLY pool 24h volume, not the 365507.07 token all-pools figure. Reserve 64208.96 is that pool. DexScreener 348957.05 / 54487.27 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that BIGLY is packed dollar-1 or an official Trump Media product. dollar-1 is 0xdCe5…e6da launched 2026-09-02; this token is 0x73114aBD…7c04 launched 2026-08-15; GET /rhj/assets has DJT as the rail and no BIGLY row. [inference S5 S10]

## Sources

- S1 — Address 0x73114aBD…7c04 BIGLY.
- S2 — Token 0x73114aBD…7c04.
- S3 — eth_getCode, name, symbol, launchFactory, socials on 0x73114aBD…7c04.
- S4 — locker and PonsV2LaunchFactory views.
- S5 — launchAndBuy tx 0x34640fde…86fe.
- S6 — createGraduatedPool tx 0x396f6d2e…f98e.
- S7 — latest/dex/tokens BIGLY.
- S8 — djt / BIGLY Uniswap v4 pool.
- S9 — BIGLY token.
- S10 — GET /rhj/assets DJT row.
- S11 — V2LaunchLocker verified source.
- S12 — Address 0x7eD5…C7e PonsV2LaunchFactory.
- S13 — Address 0x1D11…4516 DJT Stock Token.
- S14 — Pons launchpad page for BIGLY.
- S15 — $DJT: $BIGLY distribution post.
- S16 — PonsV2LauncherToken verified source.
- S17 — how much $bigly do you hold?.
- S18 — $BIGLY claim portal opened.
- S19 — Token holders 0x73114aBD…7c04.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:12:00Z; methodology_version: proofline-v1.0.
