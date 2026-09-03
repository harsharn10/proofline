---
slug: jobs
coverage: stub
methodology_version: proofline-v1.0
---

# JOBS — research record

## Identity

Jobscoin is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). PonsV2LaunchFactory.launchToken on 2026-08-31 minted Jobscoin (JOBS) onto a bonding curve, then CurveCompleted seeded the JOBS/AAPL book. Traders buy and sell JOBS against AAPL. jobscoinpons.com and @Jobscoinpons pin this contract.

Themes: memecoin, stock-paired:AAPL, rwa

## Deployment

JOBS token (PonsV2LauncherToken): 0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 on robinhood-chain. [verified S1 S5 S6]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S4 S6]

PonsV2LaunchDeployer (token creator_address_hash): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S16]

PonsV2BondingCurve (JOBS launch curve): 0x4E943DDd1fc47f69d56bc8Ed84948398c1cfbcF1 on robinhood-chain. [verified S4 S6 S17]

V2LaunchLocker (site-linked liquidity locker): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S12 S19]

## Control

token owner() reverts. Verified PonsV2LauncherToken source has no Ownable or pause and says deployer is reference data only. Factory owner() returns Pons Safe 0x263ed295…019Dd. Launch EOA 0xDFDFCaB3…8A69 has no code. V2LaunchLocker 0x267444D0…4952 is verified. [verified S5 S6 S10 S19]

## Security

jobscoinpons.com states Pons V2 is unaudited. No audit report URL was located this pass. [claim S12]

## Engineering

_Research pending._

## Team

jobscoinpons.com pins CA 0x88952E52…6453 and twitter:site @Jobscoinpons. @Jobscoinpons bio points at that domain; profile HTML contains the CA. DexScreener websites and socials match. launchToken metadata included https://x.com/jobscoinpons. No GitHub URL this pass. Flag third-party-link on the netlify vote URL. X user search also returned @jobcoinpons, a different handle. [verified S7 S12 S13] [claim S15]

## Product and economics

PonsV2LaunchFactory.launchToken from EOA 0xDFDFCaB3…8A69 at 2026-08-31T09:55:11Z deployed PonsV2LauncherToken Jobscoin / JOBS, supply 1e9*1e18, onto PonsV2BondingCurve 0x4E943DDd…bcF1 with pairToken AAPL 0xaF3D…93f9. TokenLaunched names that curve and a 24.2 AAPL graduation threshold. creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4…1A42. [verified S1 S4 S5 S16]

CurveCompleted / LaunchSwept in tx 0xe314cae8…1b51 at 2026-08-31T10:54:34Z sent 24.2 AAPL and ~285.7M JOBS to the factory and hit Uniswap v4 PoolManager 0x8366…0951. DexScreener labels the primary book Uniswap v4 JOBS/AAPL 0xb1e49036…da99. Gecko names the same pool JOBS / AAPL with dex pons-v2-dex and launchpad_details completed true at that timestamp. Secondary JOBS/AAPL 0xa36ef2a6…5d04 and JOBS/ETH books exist with far less liquidity. [verified S6 S7 S9]

jobscoinpons.com states 1.7% of trading fees routes to holders in AAPL Stock Tokens, automatic and able to be zero. That split was not reproduced on a hook call this pass. [claim S12]

JOBS/AAPL Uniswap v4 24h volume is 261709.83 USD and liquidity.usd is 23501.15 at 2026-09-03T05:06:00Z from DexScreener tokens. fdv/marketCap is 83730. [claim S7]

Gecko pool volume_usd.h24 is 268265.19 and reserve_in_usd is 22811.53 at 2026-09-03T05:08:00Z. fdv_usd is 83589.80. Gecko token volume_usd.h24 290731.53 is all pools, not the AAPL book. Blockscout holders_count 570. Pair created 2026-08-31T10:54:34Z. [claim S2 S8 S9]

Assignment lead of ~$30,316 liq / ~$271,330 vol was not reproduced at this as_of; live DexScreener liquidity is $23.5k. [claim S7 S9]

## Communications

@Jobscoinpons posted that DexScreener lists the new website [claim S14]

X Latest posts named $JOBS/AAPL on Robinhood [claim S21 S22]

Netlify vote page used the JOBS CA [claim S15]

## Findings

USD liquidity on the JOBS/AAPL book counts both JOBS and AAPL. Same-ticker JOBS tokens exist at other addresses. A netlify vote URL used this CA. The 1.7% holder distribution is a site claim until a payday transfer is matched. [claim S12]

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail; JOBS is not in GET /rhj/assets. [verified S11 S18]
- Pool USD reserve is JOBS plus AAPL, not a USDG or WETH backstop. [claim S7 S9]
- Same-ticker JOBS tokens trade on Robinhood at 0x404D3091…1E18 and 0x6f055C4c…1E18. [claim S20]
- Holder fee share is a site claim; Pons V2 is described as unaudited. [claim S12]
- Netlify vote page is a third-party-link. [claim S15]

- Receipts: Blockscout token/factory/deployer/curve/AAPL/locker and both launch and graduation txs, RPC name/symbol/owner/curve.token, DexScreener tokens and search, Gecko token (GET 200) and pool (GET 200), /rhj/assets, jobscoinpons.com, @Jobscoinpons profile and website post, and Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S11 S12]
- Numbers: 261709.83 is the DexScreener JOBS/AAPL top-pair 24h volume, not the 290731.53 Gecko token all-pools figure. Reserve 22811.53 is the Gecko pool; DexScreener liquidity 23501.15 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, AP/AAPL, packed AAPLCAT, packed AAPLDOG, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AP is 0x69c68e4C…1e18; AAPLCAT is 0x73A9999f…1e18 / @AAPLCAT_; AAPLDOG is 0x06e52E5f…1e18 / @AppleDogRH; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; JOBS is a Pons v2 token at 0x88952E52…6453. [inference S4 S11 S20]

## Sources

- S1 — Token 0x88952E52…6453 Jobscoin / JOBS.
- S2 — JOBS token counters.
- S3 — PonsV2LaunchFactory 0x7eD598Bc…EC7e.
- S4 — launchToken tx 0x7ac38f9f…673b.
- S5 — eth_getCode, name, symbol, owner on JOBS.
- S6 — CurveCompleted / LaunchSwept tx 0xe314cae8…1b51.
- S7 — latest/dex/tokens JOBS.
- S8 — Jobscoin token.
- S9 — JOBS/AAPL pool.
- S10 — PonsV2LauncherToken verified source.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — jobscoinpons.com.
- S13 — Jobscoin profile.
- S14 — Dexscreener is now updated with our new website.
- S15 — JOBS vote netlify page.
- S16 — PonsV2LaunchDeployer 0x3711ceA4…1A42.
- S17 — PonsV2BondingCurve 0x4E943DDd…bcF1.
- S18 — AAPL 0xaF3D76f1…93f9.
- S19 — V2LaunchLocker 0x267444D0…4952.
- S20 — Search JOBS AAPL clones.
- S21 — $JOBS/AAPL on robinhood.
- S22 — $JOBS to FLIP $ICOIN.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:12:00Z; methodology_version: proofline-v1.0.
