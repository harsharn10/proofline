---
slug: steve
coverage: stub
methodology_version: proofline-v1.0
---

# STEVE — research record

## Identity

STEVE is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve quoted against MSFT, then graduated into a locked Uniswap v4 STEVE/MSFT pool. Traders buy and sell STEVE on that book. Constructor socials name @SteveOnHood and stevecoin.us; the site JS embeds token 0x9a70…2375.

Themes: memecoin, stock-paired:MSFT, rwa, launchpad

## Deployment

STEVE token (PonsV2LauncherToken): 0x9a70d368DA240ACF67d5859aB750644DD5d12375 on robinhood-chain. [verified S1 S2 S5]

Pons v2 bonding curve: 0xa10d4fcc393dDA87d7Ad11F7138ca0eF6E93e91b on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy: 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S19]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S3]

MSFT Microsoft • Robinhood Token (pair rail): 0xe93237C50D904957Cf27E7B1133b510C669c2e74 on robinhood-chain. [verified S6 S11 S12]

V2LaunchLocker: 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S14 S20]

## Control

token owner() reverts. Deployer 0x164f…c944 has no code and is named as creatorFeeRecipient / V2MemeHook creator. Factory owner() 0x263e…19Dd is a Safe. [verified S5 S6 S14]

## Security

PonsV2LauncherToken and PonsV2LaunchFactory are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, PonsV2LaunchFactory.sol, compiler v0.8.35). V2LaunchLocker is partially verified. No audit report URL was located this pass. [verified S2 S3 S20] [unknown]

## Engineering

_Research pending._

## Team

Constructor socials and DexScreener list x.com/steveonhood and https://www.stevecoin.us/. Site title $STEVE — Built block by block; SPA JS embeds CA 0x9a70…2375. @SteveOnHood profile url is stevecoin.us, description empty, and the account posted the CA at 2026-09-02T21:32:49Z. [claim S7 S9 S10 S18]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x164f…c944 at 2026-09-02T21:30:17Z minted Steve / STEVE supply 1e9*1e18 onto bonding curve 0xa10d…e91b quoted against MSFT. factory() on the token returns PonsV2LaunchFactory 0x7eD5…EC7e. TokenLaunched pairToken is MSFT. [verified S4 S5 S6]

CurveCompleted at 2026-09-02T21:34:04Z; createGraduatedPool at 2026-09-02T21:34:57Z initialized Uniswap v4 poolId 0x00d0…0b34 with V2MemeHook 0xE5e7…e044 fee 0. V2LaunchLocker locked ~8.163e25 STEVE and positionId 1564204. Secondary STEVE/USDG and STEVE/ETH books exist on DexScreener with far less liquidity than the MSFT book. [verified S7 S13 S14]

STEVE/MSFT Uniswap v4 24h volume is 269393.29 USD and liquidity.usd is 15296.58 at 2026-09-03T05:23:30Z from DexScreener latest/dex/tokens. fdv/marketCap is 35539. priceUsd 0.00003553. Pair created 2026-09-02T21:34:57Z. Blockscout holders_count 165. [claim S1 S7]

Gecko was skipped: first GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x9a70…2375 returned HTTP 429. [unknown]

## Communications

@SteveOnHood posted $STEVE Prevails [claim S15 S18]

X post circulated a vote URL embedding CA 0x9a70…2375 [claim S17]

X post circulated CA 0x9a70…2375 as $STEVE [claim S16]

@SteveOnHood posted CA 0x9a70…2375 as live STEVE/MSFT [claim S10]

## Findings

USD liquidity on the STEVE/MSFT book counts both sides, and the quote side is MSFT, not USDG. Other 4663 tokens reuse the STEVE ticker, including Minecraft Steve 0x4Adb…ACF6. Factory owner() is a Safe; token owner() reverts. [claim S8]

- Quote token MSFT 0xe932…2e74 is the GET /rhj/assets rail, not the subject. [verified S11 S12]
- Pool USD liquidity is STEVE plus MSFT, not a USDG backstop. [claim S7]
- Ticker-only collision with other 4663 STEVE tokens (e.g. 0x4Adb…ACF6). [claim S1]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/factory/MSFT, launchAndBuy 0x1e66…476e, CurveCompleted 0x4cec…6ec1, createGraduatedPool 0x08e0…d515, RPC name/symbol/factory/curve/socials, DexScreener, /rhj/assets, stevecoin.us HTML+JS, and @SteveOnHood profile/CA tweet were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S11]
- Numbers: 269393.29 is the DexScreener STEVE/MSFT pool 24h volume, not an all-pools figure. Liquidity 15296.58 is that pool. Holders 165 is the Blockscout token page. [claim S1 S7]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT, a packed Pons v2 MSFT graduation (DIH / VERITY), NANAMI, or an official Microsoft product. CLIPPY is 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. DIH/VERITY/NANAMI are other CAs. This CA is Pons v2 0x9a70…2375. GET /rhj/assets lists MSFT at 0xe932…2e74 as the rail, not STEVE. [inference S1 S5 S11]

## Sources

- S1 — Token 0x9a70…2375 Steve / STEVE.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0x1e668939…476e.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), socials() on STEVE.
- S6 — factory owner(), getLaunchedToken, curve.graduated().
- S7 — latest/dex/tokens STEVE.
- S8 — $STEVE — Built block by block.
- S9 — SPA bundle embeds CA 0x9a70…2375.
- S10 — Steve has entered the chat.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT.
- S13 — CurveCompleted tx 0x4cecd4b1…6ec1.
- S14 — createGraduatedPool tx 0x08e009ce…d515.
- S15 — $STEVE Prevails.
- S16 — this ticker seems good.
- S17 — Attention $STEVE Family vote URL.
- S18 — X profile STEVE (@SteveOnHood).
- S19 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S20 — Address 0x2674…4952 V2LaunchLocker.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:30:00Z; methodology_version: proofline-v1.0.
