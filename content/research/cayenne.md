---
slug: cayenne
coverage: stub
methodology_version: proofline-v1.0
---

# CAYENNE — research record

## Identity

CAYENNE is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 against the Invesco QQQ Robinhood Token. PonsV2LaunchAndBuy.launchAndBuy created CAYENNEcoin (CAYENNE) at 0xad66…56C9 on 2026-09-02, pairing it to QQQ 0xD5f3…de68; createGraduatedPool then seeded a Uniswap v4 CAYENNE/QQQ book. Traders buy and sell CAYENNE on that book. Stock QQQ is the pair rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:QQQ, rwa

## Deployment

CAYENNE token (CAYENNEcoin): 0xad6629157a774007E46945bb1B6013C79e7656C9 on robinhood-chain. [verified S1 S3 S5]

Pons v2 launch factory (launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S6 S16]

PonsV2LaunchAndBuy (launchAndBuy): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [verified S4 S5]

QQQ Invesco QQQ • Robinhood Token (pair quote): 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 on robinhood-chain. [verified S10 S12 S3]

Pons v2 bonding curve for CAYENNE: 0x2495573d25BDEf5D2609a0671c7868C95Ef058Fb on robinhood-chain. [verified S5 S6]

V2LaunchLocker (token holder): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S17 S6]

## Control

owner() on the token reverted. deployer() is EOA 0xB3Fc…Ef9E with no code. creatorFeeRecipient on the launch record is 0xe4de…1FD0. creatorTaxBps 0 and buybackEnabled false. factory owner() is Pons Safe 0x263e…19Dd. [verified S3 S6]

## Security

PonsV2LaunchFactory source is verified; the CAYENNE token is not. Pons v2 docs say treat v2 as unaudited until reports are published. No audit report URL was located this pass. [verified S16] [claim S19] [unknown]

## Engineering

_Research pending._

## Team

launchAndBuy socials name https://x.com/CAYENNEcoin_RH/status/2095260177977036880 and website https://hntsam.com. DexScreener info.websites and info.socials match. hntsam.com is Invesco QQQ’s NCAA education game and does not publish the CA; flag third-party-link. @CAYENNEcoin_RH bio posts a truncated CA and claims the Invesco game as origin; a reply posted the full CA. No Invesco or Robinhood reverse-link this pass; official_handle stays NULL; flag unconfirmed-official. [claim S4 S7 S13 S14]

A same-ticker copypasta-pattern is visible: Blockscout search lists other CAYENNEcoin contracts with the 56C9 suffix and ~128–135 holders, and an X post pointed a netlify claim portal at 0xad66…56C9. [claim S20 S21]

## Product and economics

PonsV2LaunchAndBuy.launchAndBuy at 0xe33E…2948 from EOA 0xB3Fc…Ef9E at 2026-09-02T21:19:08Z minted CAYENNEcoin / CAYENNE supply 1e9*1e18 onto curve 0x2495…58Fb quoted against QQQ, with quoteIn 67395181576645038 (~0.0674 QQQ) and launchConfigId 0. TokenLaunched on factory 0x7eD5…EC7e names pairToken 0xD5f3…de68. [verified S4 S5 S6]

createGraduatedPool(token 0xad66…56C9) from 0x49Bb…73d2 at 2026-09-02T21:19:46Z wrote PoolGraduated positionId 1563446. Uniswap v4 pool 0x2ebab943…e484 was created at that timestamp. launchFactory() on the token returns that Pons v2 factory. getLaunchedToken.phase is 2 PoolCreated. approvedPairTokens(QQQ) is true. Secondary CAYENNE/USDG and CAYENNE/ETH Uniswap v4 books exist on DexScreener with far less liquidity than the QQQ book. [verified S3 S6 S7 S18]

CAYENNE/QQQ Uniswap v4 24h volume is 6785081.72 USD and reserve_in_usd is 45306.86 at 2026-09-03T03:43:12Z from the Gecko pool endpoint. fdv_usd is 307129.88. Gecko token volume_usd.h24 is 8711317.77 across all pools, not the QQQ book. [claim S8 S9]

DexScreener same pair: liquidity.usd 44046.45, volume.h24 6872571.53, fdv/marketCap 287346. Blockscout holders_count 2361. Pair created 2026-09-02T21:19:46Z. [claim S2 S7]

Assignment lead of DexScreener liq ~$50,024 / vol ~$6,857,100 is close to this pass: live DexScreener liquidity $44.0k and 24h volume $6.87M; live Gecko reserve $45.3k and 24h volume $6.79M. [claim S7 S8]

## Communications

@CAYENNEcoin_RH posted the Invesco QQQ game clip and CA [claim S13]

Third-party claim portal posted against the CAYENNE CA [claim S20]

## Findings

USD reserve on the CAYENNE/QQQ book counts both sides, and the quote side is QQQ, not USDG. Token source is not verified on Blockscout. DexScreener lists Invesco’s hntsam.com as the website and @CAYENNEcoin_RH as socials; those surfaces stay third-party-link and unconfirmed-official. [claim S12]

- Token source is not verified on Blockscout; creator_address_hash was null on the address API. [verified S1]
- Pool USD reserve is CAYENNE plus QQQ, not a USDG backstop. [claim S7 S8]
- Named handle and website are one-way; hntsam.com is an Invesco property. Flags unconfirmed-official and third-party-link. [claim S13 S14]
- Same-ticker CAYENNEcoin contracts and a netlify claim portal are copypasta-pattern, not this CA. [claim S20 S21]
- Pons v2 docs say treat v2 as unaudited until reports are published. [claim S19]

- Receipts: Blockscout token/QQQ/factory/launchAndBuy/createGraduatedPool txs, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens, DexScreener, Gecko pool/token, /rhj/assets, hntsam.com, @CAYENNEcoin_RH, Llama protocols, and the claim-portal post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S4 S8 S12]
- Numbers: 6785081.72 is the Gecko CAYENNE/QQQ pool 24h volume, not the 8711317.77 token all-pools figure. Reserve 45306.86 is that pool. DexScreener 6872571.53 / 44046.45 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that CAYENNE is an official Invesco or Robinhood product, a WTH/QQQ token, or that it should merge with census Pons. /rhj/assets lists QQQ as a Stock Token, not CAYENNE; What The Hook’s WTH is 0xb8Fa…fF79; the token is a Pons v2 launch with a one-way handle; hntsam.com has no CA. [inference S4 S12 S13 S14]

## Sources

- S1 — Address 0xad66…56C9 CAYENNEcoin.
- S2 — Token 0xad66…56C9 holders_count.
- S3 — eth_getCode, name, symbol, launchFactory, deployer.
- S4 — launchAndBuy tx 0x4c21e336…7282.
- S5 — TokenLaunched log on launchAndBuy tx.
- S6 — getLaunchedToken and approvedPairTokens.
- S7 — latest/dex/tokens CAYENNE.
- S8 — CAYENNE/QQQ Pons v2 pool.
- S9 — CAYENNEcoin token.
- S10 — Address 0xD5f3…de68 QQQ.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — How Not to Suck at Money clip and CA.
- S14 — hntsam.com How Not to Suck at Money.
- S16 — PonsV2LaunchFactory verified source.
- S17 — CAYENNE holders page.
- S18 — createGraduatedPool tx 0x0bdc953a…d77c.
- S19 — v2 docs.
- S20 — CAYENNE holders claim portal.
- S21 — search q=CAYENNE.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:43:12Z; methodology_version: proofline-v1.0.
