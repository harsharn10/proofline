---
slug: dino
coverage: stub
methodology_version: proofline-v1.0
---

# DINO — research record

## Identity

DINO is classified as Stock-paired token.

A one-billion-supply ERC-20 launched through Pons v2 against GOOGL. PonsV2LaunchFactory deploys Chrome Dino (DINO) onto a bonding curve quoted in Alphabet Class A • Robinhood Token, then seeds a Uniswap v4 DINO/GOOGL pool. Traders buy and sell DINO on that book. No official site or bidirectional handle was located this pass.

Themes: memecoin, stock-paired:GOOGL, rwa, launchpad

## Deployment

DINO token (PonsV2LauncherToken): 0x000b2164a76560323163343431Db8bE550F164B8 on robinhood-chain. [verified S1 S5 S18]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchDeployer (token creator_address_hash): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S15]

PonsV2BondingCurve: 0x3cE958ac39b9636539c410d060F28f44F5c0B98B on robinhood-chain. [verified S4 S5 S18]

GOOGL Alphabet Class A • Robinhood Token (pair quote / rail): 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 on robinhood-chain. [verified S6 S12 S16]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data and confers no privileges. Deployer EOA 0x619A…3E42 has no code. [verified S2 S5]

## Security

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchDeployer, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35 for the token). Graduation helper 0x4266…EDcb is unverified this pass. No audit report URL was located. [verified S1 S3 S15 S17] [unknown]

## Engineering

_Research pending._

## Team

No official domain or bidirectional X handle was located. DexScreener info.websites is empty; info.socials lists https://x.com/dinogooglerh. Constructor socials.twitter was empty. @Dinogooglerh posts sampled this pass do not embed 0x000b2164…. X user search also returned @Dinogoogle_, @Dinogoogle01, and @DinoGoogle5. Flag unconfirmed-official and handle-collision. [claim S7 S13 S19]

@ITSYABOIRAZOR posted the CA with crypto-keo.netlify.app/claim. Flag copypasta-pattern and third-party-link. [claim S21]

## Product and economics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from 0x619A…3E42 at 2026-09-02T07:31:03Z minted Chrome Dino / DINO supply 1e9*1e18 into bonding curve 0x3cE9…B98B quoted against GOOGL. creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42. launchFactory() on the token returns that factory. graduationThreshold 24.2 GOOGL. Constructor socials were empty. [verified S4 S5 S18]

Graduation tx 0x9100…fcee at 2026-09-02T07:37:36Z completed the curve: 24.2 GOOGL plus ~2.857e8 DINO to the factory, ~8.163e7 DINO permanently locked, Uniswap v4 poolId 0x5e2c…c93d initialized on PoolManager 0x8366…0951 with V2MemeHook 0xE5e7…6044, LP position 1487876 locked. Gecko launchpad_details completed true at that timestamp. Secondary DINO/USDG and DINO/ETH books exist on DexScreener with less liquidity than the GOOGL book. [verified S7 S8 S18]

DINO/GOOGL Uniswap v4 24h volume is 4860819.87 USD and reserve_in_usd is 82510.86 at 2026-09-03T03:40:00Z from the Gecko pool endpoint. fdv_usd is 1105681.51. Gecko token volume_usd.h24 is 6251135.76 across all pools, not the GOOGL book. [claim S8 S9]

DexScreener same pair: liquidity.usd 86611.62, volume.h24 4890454.38, fdv/marketCap 1109160 at 2026-09-03T03:35:00Z. Blockscout holders_count 3688. Pair created 2026-09-02T07:37:36Z. [claim S1 S7]

Assignment lead of liq ~$87,290 / vol ~$4,884,153 is the same DINO/GOOGL book; live Gecko reserve is $82.5K and DexScreener liquidity is $86.6K this as_of. [claim S7 S8]

## Communications

Claim-portal post attached the DINO CA [claim S21]

@Ragnar216554201 posted the DINO/GOOGL CA [claim S10]

@Dinogooglerh posted Who wants to become a Chrome Dino [claim S13]

## Findings

USD liquidity figures on the DINO/GOOGL book count both sides, and the quote side is GOOGL, not USDG. Same-name Chrome Dino / DINO at 0x1b0e…3E74 is a ca-collision. DexScreener lists @dinogooglerh with no bidirectional CA link this pass; flag unconfirmed-official. A netlify claim URL attached the CA; flag copypasta-pattern and third-party-link. [claim S12]

- Same-name Chrome Dino / DINO at 0x1b0e…3E74 (DINO/WETH) is a ca-collision. [verified S20]
- Pool USD reserve is DINO plus GOOGL, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; DexScreener twitter is unconfirmed-official. [claim S7 S13]
- Claim-portal URL is a third-party-link / copypasta-pattern. [claim S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/factory/deployer/curve/GOOGL and both launch and graduation txs, RPC name/symbol/launchFactory/curve/deployer/socials, DexScreener, Gecko pool/token, /rhj/assets, @Ragnar216554201, @Dinogooglerh, the claim-portal post, and the DINO search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 4860819.87 is the Gecko DINO/GOOGL pool 24h volume, not the 6251135.76 token all-pools figure. Reserve 82510.86 is that pool. DexScreener 4890454.38 / 86611.62 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that @Dinogooglerh is official and that 0x1b0e…3E74 is the same Chrome Dino. Constructor socials are empty, sampled posts omit the CA, and 0x1b0e…3E74 is a different creator and DINO/WETH book. [inference S13 S19 S20]

## Sources

- S1 — Token 0x000b…64B8 Chrome Dino / DINO.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchToken tx 0xda62582f…4865.
- S5 — eth_getCode, name, symbol, launchFactory() on DINO.
- S6 — GOOGL name/symbol and factory launchFactory().
- S7 — latest/dex/tokens DINO.
- S8 — DINO/GOOGL pool.
- S9 — Chrome Dino token.
- S10 — $DINO paired $GOOGL.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Who wants to become a Chrome Dino.
- S15 — PonsV2LaunchDeployer 0x3711…1A42.
- S16 — Token 0x2e08…4FE3 Alphabet Class A • Robinhood Token / GOOGL.
- S17 — PonsV2BondingCurve 0x3cE9…B98B.
- S18 — Graduation tx 0x9100e338…fcee.
- S19 — Dinogooglerh handle collision set.
- S20 — search?q=DINO same-ticker collisions.
- S21 — Still holding $DINO claim link.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:41:00Z; methodology_version: proofline-v1.0.
