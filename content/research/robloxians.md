---
slug: robloxians
coverage: stub
methodology_version: proofline-v1.0
---

# ROBLOXIANS — research record

## Identity

ROBLOXIANS is classified as Stock-paired token.

ROBLOXIANS is a one-billion-supply ERC-20 launched on Pons v2 against the Roblox Robinhood Token (RBLX). PonsV2LaunchAndBuy.launchAndBuy created The Robloxians at 0xB528…c10D on 2026-09-02, pairing it to RBLX 0xF0C4…1bE8; the same transaction bought through the bonding curve past the graduation threshold into a Uniswap v4 ROBLOXIANS/RBLX pool. Traders buy and sell ROBLOXIANS on that book. No project site was located this pass.

Themes: memecoin, stock-paired:RBLX

## Deployment

ROBLOXIANS token (The Robloxians): 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D on robinhood-chain. [verified S1 S3 S4]

Pons v2 launch factory (launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S6 S15]

PonsV2LaunchAndBuy (launchAndBuy): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [verified S4 S5]

RBLX Roblox • Robinhood Token (pair quote): 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 on robinhood-chain. [verified S10 S11 S4]

## Control

owner() on the token reverted. deployer() is EOA 0xD0d0…eFD3. creatorFeeRecipient on the launch record is 0x3beC…aB77. creatorTaxBps 0 and buybackEnabled false. [verified S3 S6]

## Security

PonsV2LaunchFactory source is verified; the ROBLOXIANS token is not. Pons v2 docs say treat v2 as unaudited until reports are published. No audit report URL was located this pass. [verified S15] [claim S16] [unknown]

## Engineering

_Research pending._

## Team

launchAndBuy socials name https://x.com/RobloxiansPage and https://t.me/robloxianscult with an empty website. DexScreener info.socials match. @RobloxiansPage display name is Robloxian Cult, joined September 2026, 598 followers; sampled posts do not include the CA. Telegram titles ROBLOXIANS CULT with 672 members. Flag unconfirmed-official. [claim S4 S7 S13 S14]

## Product and economics

PonsV2LaunchAndBuy.launchAndBuy at 0xe33E…2948 from EOA 0xD0d0…eFD3 at 2026-09-02T10:03:51Z minted The Robloxians / ROBLOXIANS supply 1e9*1e18 onto curve 0x9E59…cC7f quoted against RBLX, with quoteIn 300 RBLX and launchConfigId 0. TokenLaunched on factory 0x7eD5…EC7e names pairToken 0xF0C4…1bE8. Uniswap v4 pool 0x3280b21b…1e07 was created 2026-09-02T10:03:53Z. [verified S4 S5 S7]

launchFactory() on the token returns that Pons v2 factory. getLaunchedToken.phase is 2 PoolCreated. approvedPairTokens(RBLX) is true. Secondary ROBLOXIANS/USDG Uniswap v4 books exist on DexScreener with far less liquidity than the RBLX book. [verified S3 S6 S7]

ROBLOXIANS/RBLX Uniswap v4 24h volume is 2929575.47 USD and reserve_in_usd is 162471.64 at 2026-09-03T03:34:24Z from the Gecko pool endpoint. fdv_usd is 3106120.44. Gecko token volume_usd.h24 is 3263009.57 across all pools, not the RBLX book. [claim S8 S9]

DexScreener same pair: liquidity.usd 178744.82, volume.h24 3080396.49, fdv/marketCap 3681072. Blockscout holders_count 1964. Pair created 2026-09-02T10:03:53Z. [claim S1 S7]

Assignment lead of Gecko liq ~$147k / vol ~$2.9M is close to this pass: live Gecko reserve $162k and 24h volume $2.93M. [claim S8]

## Communications

Pons posted RBLX as a live pair asset [verified S6 S12]

@RobloxiansPage joined X in September 2026 [claim S13]

## Findings

USD reserve on the ROBLOXIANS/RBLX book counts both sides, and the quote side is RBLX, not USDG. Token source is not verified on Blockscout. The named X handle has not posted the contract this pass, so the official surface stays unconfirmed-official. [claim S11]

- Token source is not verified on Blockscout; creator_address_hash was null on the address API. [verified S1]
- Pool USD reserve is ROBLOXIANS plus RBLX, not a USDG backstop. [claim S7 S8]
- Named handle @RobloxiansPage has not posted the CA this pass; flag unconfirmed-official. [claim S13]
- Pons v2 docs say treat v2 as unaudited until reports are published. [claim S16]

- Receipts: Blockscout token/RBLX/factory/launchAndBuy tx, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens, DexScreener, Gecko pool/token, /rhj/assets, @ponsdotfamily, @RobloxiansPage, and Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S4 S8 S11]
- Numbers: 2929575.47 is the Gecko ROBLOXIANS/RBLX pool 24h volume, not the 3263009.57 token all-pools figure. Reserve 162471.64 is that pool. DexScreener 3080396.49 / 178744.82 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that ROBLOXIANS is an official Roblox or Robinhood product, or that it should merge with census Pons. /rhj/assets lists RBLX as a Stock Token, not ROBLOXIANS; the token is a Pons v2 launch with its own handle; no official Roblox or Robinhood CA post was located. [inference S4 S11 S13]

## Sources

- S1 — Address 0xB528…c10D The Robloxians.
- S3 — eth_getCode, name, symbol, launchFactory, deployer.
- S4 — launchAndBuy tx 0xf7b5fa06…0f39.
- S5 — TokenLaunched log on launchAndBuy tx.
- S6 — getLaunchedToken and approvedPairTokens.
- S7 — latest/dex/tokens ROBLOXIANS.
- S8 — ROBLOXIANS/RBLX Uniswap v4 pool.
- S9 — The Robloxians token.
- S10 — Address 0xF0C4…1bE8 RBLX.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — New Stock Tokens have landed on Pons.
- S13 — Robloxian Cult profile.
- S14 — t.me/robloxianscult.
- S15 — PonsV2LaunchFactory verified source.
- S16 — v2 docs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:36:00Z; methodology_version: proofline-v1.0.
