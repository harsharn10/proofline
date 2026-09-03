---
slug: appleseed
coverage: stub
methodology_version: proofline-v1.0
---

# Appleseed — research record

## Identity

John Appleseed is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AAPL. PonsV2LaunchAndBuy deploys John Appleseed (Appleseed) in one launchAndBuy call, seeds a bonding curve, then sweeps into the Appleseed/AAPL book. Traders buy and sell Appleseed on Uniswap v4. AAPL is the quote rail, not this token. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AAPL, rwa

## Deployment

Appleseed token (PonsV2LauncherToken): 0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer (token creator): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S5 S6 S15]

Pons v2 bonding curve (create-tx clone): 0x261ae32F5787983a5fEd1828485cA24f58FB391f on robinhood-chain. [verified S5 S6 S16]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S14]

V2LaunchLocker (top holder after PoolManager): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S1]

## Control

token owner() reverts. Deployer 0xDe1ed485…1daB has EIP-7702 code (23 bytes, prefix 0xef0100) delegating to EIP7702StatelessDeleGator. factory owner() returns Safe 0x263ed295…019Dd. Curve 0x261ae32F…391f is_verified false this pass. [verified S5 S15] [claim S16]

## Security

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, and PonsV2LaunchAndBuy are verified on Blockscout (compiler v0.8.35 for the token, is_fully_verified true). AAPL is a verified BeaconProxy. No audit report URL was located this pass. [verified S2 S3 S14 S17] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. Launch socials twitter is @Esotericgul status 2095338962977968219, posted two seconds before launchAndBuy, with no CA in the post. DexScreener info.socials is @1Nzz_ status 2095349612311609518, which does embed this CA. DexScreener website is an Apple Discussions thread. Flag unconfirmed-official and third-party-link. [claim S7 S13 S18]

@JohnnyAppleEra posted a different CA 0x99C25BFD…2F60 as Johnny Appleseed on Pons. That is not this token. [claim S20]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EIP-7702 0xDe1ed485…1daB at 2026-09-03T02:31:54Z minted John Appleseed / Appleseed supply 1e9*1e18 onto bonding curve 0x261ae32F…391f quoted against pairToken AAPL 0xaF3D…93f9. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 24.2e18. [verified S4 S5 S6]

Verified token source says launches mint the whole supply to the curve, LP is not a Uniswap position at birth, and deployer is reference data only. CurveCompleted / LaunchSwept at 2026-09-03T02:33:06Z quoteOut 24.2e18 AAPL tokenOut 2.857e8 into Uniswap v4 poolId 0x67bc6687…fc46. Gecko dex id pons-v2-dex. Secondary Appleseed/USDG and Appleseed/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified S2 S7 S8 S16]

Appleseed/AAPL Uniswap v4 24h volume is 599435.79 USD and liquidity.usd is 12038.09 at 2026-09-03T05:08:32Z from DexScreener. fdv/marketCap is 21969. Blockscout holders_count 330. Pair created 2026-09-03T02:33:13Z. [claim S1 S7]

Gecko same pool: volume_usd.h24 205246.47 reserve_in_usd 12051.11 at 2026-09-03T05:09:38Z. Gecko token volume_usd.h24 is 207168.53 across all pools, not the AAPL book. Gecko token fdv_usd 21222.54. Gecko pool fdv_usd 4751352.24 is the inverted AAPL-as-base book. [claim S8 S9]

Assignment lead of liq ~$27,665 / vol ~$524,075 was not reproduced at this as_of; live DexScreener liq is $12,038.09 with vol $599,435.79. [claim S7]

## Communications

@Esotericgul posted the John Appleseed meme name two seconds before launch [claim S13]

@1Nzz_ posted the Appleseed CA [claim S18]

@dexpaidpanther flagged Dex paid on Appleseed/AAPL [claim S21]

## Findings

USD liquidity figures on the Appleseed/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko names the pool AAPL/Appleseed and reports an inverted fdv that is the AAPL book, not this token. No official handle was located, so comms surfaces stay unconfirmed-official. Other John Appleseed CAs exist on the same explorer. [claim S12]

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Token rail in GET /rhj/assets; this token is not. [verified S12 S17]
- Pool USD reserve is Appleseed plus AAPL, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv follows the AAPL base and is not this token's market cap. [claim S8 S9]
- No official handle or domain this pass; DexScreener website and launch socials are third-party-links. [claim S7 S13]
- Other John Appleseed / APPLESEED CAs exist on 4663. [claim S19 S20]
- Bonding-curve clone is_verified false this pass. [verified S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/deployer/factory/launchAndBuy/AAPL and both launch and sweep txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token, /rhj/assets, @Esotericgul, @1Nzz_, @JohnnyAppleEra, and @dexpaidpanther were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 599435.79 is the DexScreener Appleseed/AAPL pool 24h volume, not the 207168.53 Gecko token all-pools figure. Reserve 12051.11 is the Gecko pool. DexScreener 12038.09 is the same pair, different aggregator. Gecko pool fdv 4751352.24 is AAPL-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, AAPLCAT, AAPLDOG, or the @JohnnyAppleEra CA. Those are different addresses and pads; this packet is 0xF8b22322…B0e3 / pair 0x67bc6687…fc46 via Pons v2. [inference S4 S7 S20]

## Sources

- S1 — Token 0xF8b22322…B0e3 John Appleseed / Appleseed.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S4 — launchAndBuy tx 0xb944e4cd…5265.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on Appleseed.
- S6 — TokenLaunched log for Appleseed.
- S7 — latest/dex/tokens Appleseed.
- S8 — AAPL/Appleseed Uniswap v4 pool.
- S9 — John Appleseed token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — apple changed their web today to call John John Appleseed.
- S14 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S15 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S16 — CurveCompleted / LaunchSwept tx 0xa0c4e3bf…d2ac.
- S17 — Token 0xaF3D…93f9 Apple • Robinhood Token.
- S18 — John Appleseed is INSANE Apple lore + CA.
- S19 — search Appleseed AAPL neighboring AAPL books.
- S20 — Johnny Appleseed plants $AAPL (different CA).
- S21 — Dex paid John Appleseed / AAPL.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
