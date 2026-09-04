---
slug: verity
coverage: stub
methodology_version: proofline-v1.0
---

# VERITY — research record

## Identity

VERITY is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 against MSFT. PonsV2LaunchFactory deploys Verity (VERITY), mints the supply to a bonding curve, then createGraduatedPool seeds the VERITY/MSFT Uniswap v4 book. Traders buy and sell VERITY on that book. MSFT is the pair rail, not the subject. No official site was located this pass; constructor twitter https://x.com/VerityonRH is unconfirmed-official.

Themes: memecoin, stock-paired:MSFT, rwa, pons-v2

## Deployment

VERITY token (PonsV2LauncherToken): 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 on robinhood-chain. [verified S1 S5 S18]

PonsV2LaunchFactory (token launchFactory()): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchDeployer (token creator_address_hash): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S2]

Pons v2 bonding curve (token curve()): 0x1D86D5b3c28e4837F365b54300d437ceD6Bf0be6 on robinhood-chain. [verified S5 S6 S18]

MSFT Microsoft • Robinhood Token (pair quote / rail): 0xe93237C50D904957Cf27E7B1133b510C669c2e74 on robinhood-chain. [verified S6 S12 S16]

V2LaunchLocker (post-graduation locked tokens): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S6 S17]

## Control

token owner() reverts. Verified token source says deployer_ is attribution-only. factory owner() is Pons Safe 0x263ed2…19Dd. Launch EOA 0xe013…7960 has no code. Unverified forwarder 0xb2a748…7a14 has code and is not named on Blockscout this pass. [verified S5 S6 S14]

## Security

PonsV2LauncherToken and PonsV2LaunchFactory are fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, contracts/src/v2/PonsV2LaunchFactory.sol, compiler v0.8.35). The per-launch curve is not verified. No audit report URL was located this pass. [verified S1 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain this pass. Constructor socials.twitter is https://x.com/VerityonRH; telegram, discord, website, and farcaster are empty. @VerityonRH posted the CA 42 seconds after TokenLaunched. Bio is Hi, i'm Verity! with no contract. DexScreener info is null. Flag unconfirmed-official. [claim S5 S7 S13 S19]

## Product and economics

PonsV2LaunchDeployer 0x3711ceA4…1A42 is the Blockscout creator. Launch tx 0x0730db9d…19b1 from EOA 0xe013ffB2…7960 at 2026-09-02T23:15:11Z went through unverified 0xb2a748F6…7a14 and emitted TokenLaunched for Verity / VERITY into curve 0x1D86…0be6 quoted against MSFT. Entire 1e9*1e18 supply minted to the curve. [verified S4 S5 S14 S18]

createGraduatedPool(token 0x16A49c…7BC6) at 2026-09-02T23:34:22Z from 0x3534aDCa…DA53 seeded Uniswap v4 poolId 0x4711…b49b. LaunchSwept six seconds earlier moved ~16.079 MSFT and ~285.71e6 VERITY to the factory. GraduationTokensPermanentlyLocked ~81.63e6 VERITY into V2LaunchLocker 0x267444…4952. curve.graduated() returns 1; curve token balance is 0. PoolManager holds ~101.98e6 VERITY. Secondary VERITY/USDG and VERITY/ETH books exist on DexScreener with far less liquidity than the MSFT book. [verified S6 S7 S17 S20]

VERITY/MSFT Uniswap v4 24h volume is 782630.00 USD and reserve_in_usd is 33194.54 at 2026-09-03T04:35:00Z from the Gecko pool endpoint. fdv_usd is 172026.27. Gecko token volume_usd.h24 is 782118.21 across all pools, not the MSFT book. [claim S8 S9]

DexScreener same pair: liquidity.usd 32264.29, volume.h24 802467.44, fdv/marketCap 158271. Blockscout holders_count 502. Pair created 2026-09-02T23:34:22Z. [claim S1 S7]

Gecko launchpad_details reports graduation_percentage 100 completed at 2026-09-02T23:34:22Z to pool 0x4711…b49b, matching createGraduatedPool. [claim S9 S17]

## Communications

@VerityonRH posted the CA with an MSFT pair claim [claim S13 S19]

@6Foot4Honda posted Verity/Microsoft as a Robinhood meme-stock test [claim S10]

## Findings

USD liquidity figures on the VERITY/MSFT book count both sides, and the quote side is MSFT, not USDG. Same-ticker VERITY contracts exist on robinhood and Solana; this packet is 0x16A49c…7BC6 only. Constructor twitter is unconfirmed-official because the bio has no CA and DexScreener info is null. [claim S12]

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail; VERITY is not that asset. [verified S12 S16]
- Pool USD reserve is VERITY plus MSFT, not a USDG or WETH backstop. [claim S7 S8]
- Same-ticker VERITY contracts exist on robinhood and Solana; flag wrong-chain on 3nTmaNv…pump. [claim S22]
- Constructor twitter is unconfirmed-official; DexScreener info null. [claim S5 S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/MSFT/locker and launch, sweep, and graduate txs, RPC name/symbol/socials/launchFactory/owner/graduated/balances, DexScreener tokens and search, Gecko pool/token, /rhj/assets, @VerityonRH profile and CA tweet, and @6Foot4Honda were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 782630.00 is the Gecko VERITY/MSFT pool 24h volume, not the 782118.21 token all-pools figure. Reserve 33194.54 is that pool. DexScreener 802467.44 / 32264.29 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that VERITY is CLIPPY, official Microsoft, or in-flight dih. CLIPPY is 0x85856…1E18 via LongLauncher; MSFT is the /rhj/assets rail; dih has no reproduced address on this token. [inference S5 S12 S16]

## Sources

- S1 — Token 0x16A49c…7BC6 Verity / VERITY.
- S2 — Address 0x3711ceA4…1A42 PonsV2LaunchDeployer.
- S3 — Address 0x7eD598…EC7e PonsV2LaunchFactory.
- S4 — launch tx 0x0730db9d…19b1.
- S5 — eth_getCode, name, symbol, socials(), launchFactory() on VERITY.
- S6 — factory owner(), curve token()/pairToken()/graduated(), balances.
- S7 — latest/dex/tokens VERITY.
- S8 — VERITY/MSFT pool.
- S9 — Verity token.
- S10 — Verity / Microsoft paves the way or fails.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — @VerityonRH profile.
- S14 — PonsV2LauncherToken verified source.
- S16 — Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT.
- S17 — createGraduatedPool tx 0x295de92f…ecc9.
- S18 — TokenLaunched log for VERITY.
- S19 — Hi, i'm Verity now on Robinhood paired with Microsoft!.
- S20 — eth_getLogs PoolGraduated / GraduationTokensPermanentlyLocked.
- S22 — latest/dex/search VERITY.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
