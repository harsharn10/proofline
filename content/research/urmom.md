---
slug: urmom
coverage: stub
methodology_version: proofline-v1.0
---

# urmom — research record

## Identity

urmom is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 urmom/SPCX pool. Traders buy and sell urmom against the SpaceX • Robinhood Token on that book. SPCX is the quote rail, not this profile. Distinct from packed SPACEHOOD, BEAVER, and DOGE-1 on the same rail.

Themes: memecoin, stock-paired:SPCX, rwa, launchpad

## Deployment

urmom token (PonsV2LauncherToken bytecode): 0x4874845b0d4aCffd896DdE1E42828A543717AF7f on robinhood-chain. [verified S1 S3 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S18]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S19]

PonsV2BondingCurve: 0xCaF55a3E96e6afF542c2882339C713a68Fa79744 on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy: 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S3 S20]

launch helper (create tx to): 0xe47e41f449fB934dd09A2015c9D3658fcBd8B286 on robinhood-chain. [claim S3 S5]

V2LaunchLocker (graduated position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S6]

SPCX Stock Token (pair quote / launch pairToken): 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa on robinhood-chain. [verified S5 S9 S21]

URMOM ticker collision (Pons v2, not this row): 0x0423bEd328942Cb8bF79726b986893E1Eb863CBa on robinhood-chain. [claim S14 S15 S16]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer confers no privileges. deployer() 0xCAd4…0209 has code and was created in the launch tx. Launch EOA 0x3E6c…1EC9 has empty code. PoolRegistered creator 0x7011…cf8E. [verified S5 S6 S27]

## Security

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and this token CA are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). Helper 0xe47e…B286 is_verified false. No audit report URL was located this pass. [verified S1 S18 S19 S20] [unknown]

## Engineering

_Research pending._

## Team

No official domain this pass. Constructor socials twitter is https://x.com/cakaldevs/status/2094674513669566658; website/telegram empty. DexScreener lists x.com/urmomonrh. @UrMomOnRH bio has no contract. Flag unconfirmed-official. Collision token constructor twitter and DexScreener socials are @buyurmom, whose bio pins 0x0423…3CBa. [claim S5 S7 S11 S12 S13]

## Product and economics

Helper 0xe47e…B286 received tx 0xc6013e6c…3c1c from EOA 0x3E6c…1EC9 at 2026-09-01T06:31:36Z and forwarded into PonsV2LaunchAndBuy 0xe33E…2948. TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e, curve 0xCaF55a…9744, pairToken SPCX 0x4a0E…5eEa, and graduationThreshold 722e18. Supply 1e9*1e18 minted to the curve. [verified S3 S4 S5]

CurveCompleted / LaunchSwept tx 0xaefba476…b5b8 at 2026-09-01T06:38:12Z swept quoteOut 72200000000000000130 SPCX and tokenOut 285714285714285714285714285, then initialized Uniswap v4 poolId 0x826ae375…4eee (fee 0, hooks V2MemeHook 0xE5e7…e044). V2LaunchLocker PositionLocked 1384642 and TokenSupplyLocked 81632653061224489690929795. Secondary urmom/USDG and urmom/ETH books exist on DexScreener with far less liquidity than the SPCX book. [verified S6 S7]

urmom/SPCX Uniswap v4 24h volume is 793011.31 USD and liquidity.usd is 68970.73 at 2026-09-03T05:27:17Z from DexScreener pair 0x826ae375…4eee. fdv/marketCap is 574770. [claim S7]

Blockscout holders_count 1192. Pair created 2026-09-01T06:38:12Z. Assignment lead of ~$61,329 / ~$765,181 was not the live slice this pass. Gecko was skipped because the packet GET was 404. Collision 0x0423…3CBa / SPCX DexScreener liquidity.usd 13219.1 volume.h24 564439.39. [claim S1 S7 S16]

## Communications

@buyurmom posted $urmom with collision CA in bio [claim S13]

@UrMomOnRH posted ur mom is so big [claim S11]

Dex Paid Panther posted urmom/SPCX dex-paid alert [claim S24]

## Findings

USD liquidity figures on the urmom/SPCX book count both sides, and the quote side is SPCX, not USDG. Ticker-only pairing is not identity. DexScreener lists @UrMomOnRH while constructor socials twitter is a @cakaldevs status, so the handle stays unconfirmed-official. A second CA uses the same ticker. [claim S9]

- Quote token SPCX 0x4a0E…5eEa is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified S9 S21]
- Pool USD reserve is urmom plus SPCX, not a USDG or WETH backstop. [claim S7]
- Same-ticker robinhood book at 0x0423…3CBa. Flag ca-collision. [verified S14 S16 S17]
- Handle is unconfirmed-official; constructor twitter and DexScreener socials disagree. [claim S5 S7 S11]
- Collision posts advertised netlify claim URLs. Flag copypasta-pattern and third-party-link. [claim S25]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/curve/SPCX/launch/graduation/collision txs, RPC with Chrome UA, DexScreener token and search, /rhj/assets, and the X posts cited above were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S9]
- Numbers: 793011.31 is the DexScreener urmom/SPCX pair 24h volume. Liquidity 68970.73 is that pool, not an all-pools figure. [claim S7]
- Adversarial: the strongest contrary reading is that this row is SPACEHOOD, BEAVER, DOGE-1, SPCX itself, or collision 0x0423…3CBa. Different CAs, create paths (Pons v2 vs LongLauncher vs BeaconProxy Stock), and bytecode sizes argue against those. [verified S5 S9 S14]

## Sources

- S1 — Token 0x4874…AF7f ur mom / urmom.
- S3 — launch tx 0xc6013e6c…3c1c.
- S4 — TokenLaunched log for urmom.
- S5 — eth_getCode, name, symbol, launchFactory() on urmom.
- S6 — CurveCompleted / PoolGraduated tx 0xaefba476…b5b8.
- S7 — latest/dex/tokens urmom.
- S9 — GET /rhj/assets Stock Token registry.
- S11 — ur mom is so big she’s going to need all of them.
- S12 — constructor twitter status for canonical CA.
- S13 — How will we explain that $urmom made us rich.
- S14 — Token 0x0423…3CBa ur mom / URMOM.
- S15 — eth_getCode and Pons views on collision URMOM.
- S16 — latest/dex/tokens collision URMOM.
- S17 — collision LaunchSwept tx 0x94cb885f…e003.
- S18 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S19 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S20 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S21 — Token 0x4a0E…5eEa SPCX.
- S24 — Dex paid ur mom (urmom) / SPCX.
- S25 — netlify claim URL with collision CA.
- S27 — PonsV2LauncherToken source comment on deployer.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:30:00Z; methodology_version: proofline-v1.0.
