---
slug: chip
coverage: stub
methodology_version: proofline-v1.0
---

# CHIP — research record

## Identity

CHIP is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AMD. PonsV2LaunchAndBuy deploys Cyber Hardware-Integrated Pup (CHIP) in one launchAndBuy call, seeds a bonding curve, then sweeps into the CHIP/AMD book. Traders buy and sell CHIP on Uniswap v4. AMD is the quote rail, not this token. CHIPxAMD.com embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMD, rwa, pons-graduation

## Deployment

CHIP token (PonsV2LauncherToken): 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer (token creator): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S5 S6 S15]

PonsV2BondingCurve: 0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0 on robinhood-chain. [verified S5 S6 S16]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S15]

AMD • Robinhood Token (pair quote rail): 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC on robinhood-chain. [verified S7 S12 S17]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0xa26474…665A has no code. launchFactory and curve are set at construction. [verified S2 S5]

## Security

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35 for the token). AMD is a verified BeaconProxy. No audit report URL was located this pass. [verified S2 S3 S15 S17] [unknown]

## Engineering

_Research pending._

## Team

Launch socials stored on the token are https://x.com/chip_amd and https://ChipAMD.com. ChipAMD.com returned Vercel DEPLOYMENT_NOT_FOUND. CHIPxAMD.com embeds CA 0xE38B…C6E59 and links https://x.com/CHIPxAMD. @CHIPxAMD bio names $CHIP / AMD/CHIP without the CA. t.me/CHIPxAMD titles Chip Community | $CHIP x $AMD with 173 members and no contract in the public preview. Flag unconfirmed-official and handle-collision. [claim S5 S13 S14 S18]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xa26474…665A at 2026-09-01T02:40:50Z minted Cyber Hardware-Integrated Pup / CHIP supply 1e9*1e18 onto PonsV2BondingCurve 0x05690b…b0E0 quoted against pairToken AMD 0x86923f…3fdC. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 16.6655e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept in tx 0x84266156…39fd at 2026-09-01T02:42:47Z moved 16.6655e18 AMD and ~2.857e8 CHIP into Uniswap v4 pool 0x05153549…. Gecko labels the book dex pons-v2-dex. Secondary CHIP/USDG and CHIP/WETH books exist with far less reserve than the AMD book. [verified S8 S10 S16]

Verified token source says the entire supply mints to the curve, the deployer is immutable reference data, and there is no token owner. factory() on the token reverts; launchFactory() returns 0x7eD5…EC7e. [verified S2 S5]

CHIPxAMD.com claims a 2% swap fee converted into tokenized AMD streamed to holders via distributor 0x897B…904A. That path was not reproduced on the pool this pass. [claim S13]

CHIP/AMD Uniswap v4 DexScreener 24h volume is 775160.8 USD and liquidity.usd is 38174.55 at 2026-09-03T04:06:00Z. fdv/marketCap 228458. Pair created 2026-09-01T02:42:47Z. [claim S7]

Gecko same pool: volume_usd.h24 660058.85 and reserve_in_usd 42606.14 at 2026-09-03T04:07:00Z. Gecko pool fdv_usd 1746392.16 is the AMD-as-base book. Gecko token fdv_usd 242360.89 and volume_usd.h24 675571.38 across all pools, not the AMD book. [claim S8 S9]

Blockscout holders_count 776. [claim S1]

## Communications

@KadyBit posted the CHIP CA and AMD pair [claim S20]

@CHIPxAMD posted a 1B supply ladder [claim S18]

## Findings

USD liquidity figures on the CHIP/AMD book count both sides, and the quote side is AMD, not USDG. Gecko pool fdv treats AMD as the base and is not the CHIP token fdv. Launch metadata points at @chip_amd / ChipAMD.com; the live site and DexScreener point at @CHIPxAMD / CHIPxAMD.com. Handle stays unconfirmed-official. [claim S13]

- Quote token AMD 0x86923f…3fdC is an active Robinhood Token in GET /rhj/assets; CHIP is not that token. [verified S12 S17]
- Pool USD reserve is CHIP plus AMD, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv inverts the book (AMD base). [claim S8 S9]
- No bidirectional official handle this pass; @chip_amd vs @CHIPxAMD is a handle-collision. [claim S7 S13 S18]
- Site 2% AMD stream was not reproduced on-chain this pass. [claim S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/curve/AMD and both launch and graduation txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token/pools, /rhj/assets, CHIPxAMD.com, Telegram previews, and the @CHIPxAMD / @KadyBit posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 775160.8 is the DexScreener CHIP/AMD pair 24h volume, not the 675571.38 Gecko token all-pools figure. Reserve 42606.14 is the Gecko pool. DexScreener liquidity.usd 38174.55 is the same pair, different aggregator. Gecko pool fdv 1746392.16 is AMD-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that CHIP is the AMD Stock Token, or that it is MD / MEOW / GB / CHIPS on the same rail, or that @CHIPxAMD is already official. /rhj/assets AMD is 0x86923f…3fdC, those four AMD books have different CAs, and @CHIPxAMD bio does not embed 0xE38B…C6E59. [inference S12 S19 S18]

## Sources

- S1 — Token 0xE38B…C6E59 Cyber Hardware-Integrated Pup / CHIP.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S4 — launchAndBuy tx 0x97c64296…a678.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on CHIP.
- S6 — TokenLaunched log for CHIP.
- S7 — latest/dex/tokens CHIP.
- S8 — AMD/CHIP Uniswap v4 pool.
- S9 — Cyber Hardware-Integrated Pup token.
- S10 — CHIP token pools.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Cybernetic CHIP site.
- S14 — t.me/CHIPxAMD.
- S15 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S16 — CurveCompleted / LaunchSwept tx 0x84266156…39fd.
- S17 — Token 0x86923f…3fdC AMD • Robinhood Token.
- S18 — 1 MIL … 1B $CHIP.
- S19 — search CHIP AMD robinhood neighboring AMD books.
- S20 — $CHIP said fuck traditional marketing.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
