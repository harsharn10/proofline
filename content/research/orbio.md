---
slug: orbio
coverage: stub
methodology_version: proofline-v1.0
---

# ORBIO — research record

## Identity

Orbio.so is classified as Stock-paired token.

A Pons v2 launcher token on Robinhood Chain, quoted against NVIDIA • Robinhood Token (NVDA). PonsV2LaunchAndBuy created Orbio.so (ORBIO) at 0xAa07…28A3 on 2026-08-31; the live book is Uniswap v4 ORBIO/NVDA. orbio.so says each trade pays a 1.50% fee and half of collected fees becomes OpenRouter credits for wallets holding at least 1,000 ORBIO.

Themes: memecoin, stock-paired:NVDA

## Deployment

ORBIO token (PonsV2LauncherToken): 0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3 on robinhood-chain. [verified S3 S4 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [claim S5 S8]

PonsV2LaunchDeployer (token creator_address_hash): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S7]

PonsV2LaunchAndBuy (creation tx `to`): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S6]

PonsV2BondingCurve (token curve): 0x7DF21d1F9C75533E6F724dF5C93Cd6C567DaEC02 on robinhood-chain. [claim S5 S6 S9]

## Control

owner() reverts. deployer() is EOA 0xbFAb…04B8 with empty code, the from of launchAndBuy. Token source is fully verified PonsV2LauncherToken (OpenZeppelin ERC-20 + burn). Factory, deployer contract, launch-and-buy router, and curve are verified. [verified S5 S7 S8 S9 S10]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

@orbiodotso display name is orbio; the bio says holdings pay for llm costs; website field is https://orbio.so/. www.orbio.so HTML links that handle and publishes CA 0xAa07…28A3. Onchain socials() and launch params store the same handle and https://orbio.so. orbio.so HTTP 308 to https://www.orbio.so/. No GitHub URL this pass. [verified S1 S2 S5]

Census Pons is the pad, not this token. Census Artificial Inu and LONG share the NVDA-quoted neighborhood only. microduck is a pending discovery name, not a census slug. [claim S6 S17 S18]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy at 2026-08-31T22:33:11Z deployed PonsV2LauncherToken 0xAa07…28A3 named Orbio.so / ORBIO against NVDA 0xd060…9EEC. launchFactory() is PonsV2LaunchFactory 0x7eD5…EC7e. curve() is PonsV2BondingCurve 0x7DF2…EC02. [verified S6 S5 S8]

The live book is Uniswap v4 ORBIO/NVDA pool 0xa95b1fbd…ddc1, created 2026-09-01T00:45:52Z. DexScreener labels it uniswap v4; Gecko attributes the same pool id to pons-v2-dex. A smaller ORBIO/USDG Uniswap v4 book also trades. [verified S11 S12]

www.orbio.so says every trade pays 1.50% to escrow and 50% of collected fees becomes OpenRouter credits for wallets with a time-weighted 1,000 ORBIO floor, with payouts as an hourly dashboard ledger rather than an on-chain transfer. That split is not in the token ABI. [claim S1] [verified S10]

Gecko ORBIO/NVDA: reserve $173,802.26, 24h volume $2,177,014.68 at 2026-09-03T03:31Z. DexScreener same pool: liquidity $197,234.79, 24h volume $2,196,574.70, marketCap $4,836,157. Gecko token all-pools 24h volume $3,250,816.84. Blockscout holders_count 2364. RPC totalSupply 950M. [verified S11 S12 S13 S4]

Same-stock DexScreener this pass: AI/NVDA liquidity $6,334,184.93 volume $5,084,897.43 mcap $285,966,574; microduck/NVDA liquidity $520,946.96 volume $1,870,614.56 mcap $35,513,769. [verified S17 S18]

Official account on 2026-09-01 posted 50m burned and $13k LLM credits. On 2026-09-02 it posted a 1,000-token credit floor and Build Week (8M ORBIO, 10 winners). [claim S14 S15 S16]

## Communications

Official account posted 50m burned and $13k LLM credits [claim S14]

Official account cut the credit floor to 1,000 ORBIO [claim S15]

Official account announced Orbio Build Week [claim S16]

## Findings

The 1.50% fee and OpenRouter-credit split are site claims; the verified token ABI has no fee function. DexScreener and Gecko disagree on ORBIO/NVDA reserve. Gecko still prints total_supply 1B after RPC totalSupply 950M. [claim S1]

- Fee-to-credits path is a site ledger claim, not a function on the verified token. [claim S1] [verified S10]
- ORBIO/NVDA liquidity is $173.8k on Gecko and $197.2k on DexScreener. [verified S11 S12]
- Gecko total_supply 1B versus RPC/Blockscout 950M. [verified S13 S4 S5]
- No audit report URL this pass. [unknown]

- Receipts: www.orbio.so, @orbiodotso profile and three posts, Blockscout token/factory/deployer/curve/source and launchAndBuy tx, RPC views, DexScreener ORBIO/AI/microduck token APIs, and the Gecko pool/token endpoints were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S6 S11 S12]
- Numbers: $173,802.26 / $2,177,014.68 is the Gecko ORBIO/NVDA pool, not the $3,250,816.84 token all-pools figure. DexScreener $197,234.79 / $2,196,574.70 is the same pair. Holders 2364 is Blockscout, not an aggregator. [claim S11 S12 S13 S4]
- Adversarial: the strongest contrary reading is that ORBIO is Artificial Inu or a LONG flagship because it quotes NVDA. The CA, PonsV2LaunchAndBuy creation tx, site, and handle are distinct from 0x2E8c…1e18 / LongLauncher / artificialinu.com. [inference S6 S18]

## Sources

- S1 — Official site.
- S2 — X account @orbiodotso.
- S3 — Address 0xAa07…28A3.
- S4 — Token 0xAa07…28A3.
- S5 — eth_getCode / name / symbol / launchFactory / curve / socials.
- S6 — Creation tx 0xf2b15348….
- S7 — PonsV2LaunchDeployer 0x3711…1A42.
- S8 — PonsV2LaunchFactory 0x7eD5…EC7e.
- S9 — PonsV2BondingCurve 0x7DF2…EC02.
- S10 — PonsV2LauncherToken verified source.
- S11 — Token pairs API 0xAa07…28A3.
- S12 — ORBIO/NVDA pool API.
- S13 — ORBIO token API.
- S14 — few hours since launch.
- S15 — Hold floor cut to 1000 tokens.
- S16 — Orbio Build Week.
- S17 — microduck token pairs (same-stock NVDA, not ORBIO).
- S18 — AI token pairs (same-stock NVDA, not ORBIO).

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:34:00Z; methodology_version: proofline-v1.0.
