---
slug: dih
coverage: stub
methodology_version: proofline-v1.0
---

# DIH — research record

## Identity

DIH is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 against MSFT, then graduated into a Uniswap v4 DIH/MSFT pool. PonsV2LaunchAndBuy deploys dih (DIH) in one launch call (here wrapped in Multicall3), fills a bonding curve, and createGraduatedPool seeds the DIH/MSFT book. Traders buy and sell DIH on that Uniswap v4 pool. MSFT is the pair rail, not the subject. Distinct from CLIPPY/MSFT. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSFT, rwa, pons-graduation

## Deployment

DIH token (PonsV2LauncherToken): 0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63 on robinhood-chain. [verified S1 S2 S5]

Pons v2 bonding curve: 0x54264738a12B273e2cF7FE46F36E7f72Ac2A7a17 on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy: 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S3]

MSFT Microsoft • Robinhood Token (pair rail): 0xe93237C50D904957Cf27E7B1133b510C669c2e74 on robinhood-chain. [verified S6 S10 S11]

V2LaunchLocker: 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S12]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Factory owner() is 0x263e…19Dd. V2MemeHook PoolRegistered names creator 0x479F…197C, matching getLaunchedToken creatorFeeRecipient. [verified S2 S5 S6 S12]

## Security

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. The per-launch curve 0x5426…7a17 is not verified. No audit report URL was located this pass. [verified S1 S2 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain or bidirectional X handle was located. DexScreener info.websites lists https://www.justdih.com/; info.socials lists x.com/dihpons. On-chain socials() match those two fields; telegram/discord/farcaster are empty. @dihpons bio is "just dih" with no CA in the posts opened this pass. justdih.com titles DIH / just dih and has no CA in the public HTML; its og:image host dihhh.fun returned DEPLOYMENT_NOT_FOUND. Flag unconfirmed-official and third-party-link. [claim S5 S7 S15 S16]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 was reached through Multicall3 from 0x07d2…1841 at 2026-09-03T03:07:28Z and minted dih / DIH supply 1e9*1e18 to bonding curve 0x5426…7a17 against MSFT. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e. launchFactory() on the token returns that factory. deployer() returns Multicall3 because of that wrapper; the EOA that sent the tx is 0x07d2…1841. [verified S4 S5 S6]

CurveCompleted at 2026-09-03T03:08:33Z swept 16.078639417693171516 MSFT and ~2.857e8 tokens (1e18 scaled) to the factory. createGraduatedPool at 2026-09-03T03:08:44Z initialized Uniswap v4 poolId 0xa4c5…bcc6 (currency0 DIH, currency1 MSFT, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1587983 with ~2.041e8 tokens and 16.078639417693171516 MSFT; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Gecko launchpad_details completed true at that timestamp. [verified S8 S9 S12 S13]

Secondary DIH/USDG and DIH/ETH books exist on DexScreener with far less liquidity than the MSFT book. [claim S7]

DIH/MSFT Uniswap v4 24h volume is 2090370.50735248 USD and reserve_in_usd is 64191.42 at 2026-09-03T04:30:29Z from the Gecko pool endpoint. Gecko token fdv_usd is 678524.33. Gecko token volume_usd.h24 is 2584123.59 across all pools, not the MSFT book. [claim S8 S9]

DexScreener same pair: liquidity.usd 69037.23, volume.h24 2102718.58, fdv/marketCap 724609. Blockscout holders_count 2530 (2484 about eight minutes earlier). Pair created 2026-09-03T03:08:44Z. Assignment lead of liq ~$67,536 / vol ~$2,056,213 is in range of the live DexScreener/Gecko MSFT book. [claim S1 S7]

CLIPPY/MSFT on DexScreener printed liquidity.usd 428227.37 and volume.h24 973008.26 at the same collection window, a larger MSFT book on a different CA. [claim S21]

## Communications

X posts circulated CA 0x8A3b…2B63 as DIH/MSFT; CLIPPY named as other book [claim S15 S19 S22]

## Findings

USD liquidity figures on the DIH/MSFT book count both sides, and the quote side is MSFT, not USDG. Gecko token volume_usd.h24 ($2.58M) sums all pools, not the MSFT book ($2.09M). DexScreener and on-chain socials list @dihpons / justdih.com while the site HTML and the X bio omit the CA. Other DIH tickers trade on the same chain. [claim S11]

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail (GET /rhj/assets hit); USD pool reserve is DIH plus MSFT, not a USDG or WETH backstop. [verified S11 S10]
- Pool USD reserve is DIH plus MSFT. [claim S7 S8]
- Ticker collision: Pons v1 Dih 0x0c1e…9C74 and Dog In Hood 0x17bb…E4a4 also use DIH. [claim S1]
- No official handle or domain this pass; X and justdih.com are unconfirmed-official / third-party-link. [claim S7 S15 S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/MSFT/CLIPPY and launch, CurveCompleted, and createGraduatedPool txs, RPC name/symbol/factory/stock/graduated, DexScreener DIH and CLIPPY, Gecko pool/token, /rhj/assets, justdih.com, @dihpons, @r_xley, and the dex-paid post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11]
- Numbers: 2090370.51 is the Gecko DIH/MSFT pool 24h volume, not the 2584123.59 token all-pools figure. Reserve 64191.42 is that pool. DexScreener 2102718.58 / 69037.23 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT or the older Pons v1 Dih. CLIPPY is DopplerERC20V1 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. Pons v1 Dih is 0x0c1e…9C74. This CA is Pons v2 0x8A3b…2B63. [inference S20 S21]

## Sources

- S1 — Token 0x8A3b…2B63 dih / DIH.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launch tx 0x04bd5ffe…2553.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), socials() on DIH.
- S6 — factory owner(), getLaunchedToken, curve.graduated().
- S7 — latest/dex/tokens DIH.
- S8 — DIH/MSFT Pons V2 Dex pool.
- S9 — dih token.
- S10 — Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — createGraduatedPool tx 0x0f31f9b3…1725.
- S13 — CurveCompleted tx 0x67640510…bcd2.
- S15 — the big one $dih.
- S16 — www.justdih.com.
- S19 — $dih CA post quoting @dihpons.
- S20 — CLIPPY 0x85856F…1E18 DopplerERC20V1.
- S21 — latest/dex/tokens CLIPPY.
- S22 — Dex paid dih (DIH) / MSFT.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:31:00Z; methodology_version: proofline-v1.0.
