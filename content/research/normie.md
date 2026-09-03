---
slug: normie
coverage: stub
methodology_version: proofline-v1.0
---

# NORMIE — research record

## Identity

NORMIE is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 launched through PonsV2LaunchAndBuy onto a bonding curve quoted against the Robinhood SPY Stock Token. CurveCompleted / LaunchSwept ten minutes later seeded a Uniswap v4 NORMIE/SPY book. Traders buy and sell NORMIE on that book. The quote leg is the live SPY rail.

Themes: memecoin, stock-paired:SPY, graduation

## Deployment

NORMIE token: 0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 on robinhood-chain. [verified S1 S5 S16]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S2 S5 S6 S20]

PonsV2BondingCurve: 0xB75ECc0B9D174738D680B416a5760d24162BbFa3 on robinhood-chain. [verified S5 S6 S16]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S16]

SPY Stock Token (pair quote / rhj rail): 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C on robinhood-chain. [verified S7 S12 S17]

## Control

token owner() reverts. curve owner() reverts. Deployer 0x24Db8D…6199 has no code. PonsV2LaunchFactory owner() returns 0x263ed295…19Dd; verified source is Ownable2Step and documents a timelocked creator-fee-recipient change. [verified S5 S6 S20]

## Security

Token is_verified false on Blockscout. Factory, LaunchAndBuy, LaunchDeployer, and V2LaunchLocker are verified. No audit report URL was located this pass. [verified S1 S2] [unknown]

## Engineering

_Research pending._

## Team

@RH_normie bio embeds 0x92ef7caa…1612. token.socials() twitter is that URL; website field empty. normie-rh.xyz JS bundle embeds the same CA and twitterUrl. DexScreener info.websites and info.socials match. HTML twitter:site is @Lovable (builder meta), not the project handle. [verified S5 S11 S14]

No GitHub org was located. Copypasta-pattern vote URLs on rotating robinhood-main-dex-*.netlify.app hosts are third-party-link. [claim S19]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EOA 0x24Db8D…6199 at 2026-09-02T02:15:30Z minted name normie / symbol NORMIE supply 1e9*1e18 onto curve 0xB75ECc…bFa3 against pairToken SPY 0x117c…4C0C. TokenLaunched graduationThreshold 10.9e18. factory() on the token reverts; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. [verified S4 S5 S16]

CurveCompleted / LaunchSwept at 2026-09-02T02:25:37Z moved 10.9 SPY and remaining curve inventory to the factory and seeded Uniswap v4 pool 0x8ece5548…b2e6 via PoolManager 0x8366…0951. Gecko dex id pons-v2-dex; DexScreener dexId uniswap labels v4 on the same pool id. Secondary NORMIE/USDG and NORMIE/ETH books exist with far less liquidity than the SPY book. [verified S7 S8 S18]

NORMIE/SPY Uniswap v4 24h volume is 1801288.6 USD and liquidity.usd is 29635.03 at 2026-09-03T04:52:00Z from DexScreener. fdv/marketCap is 128678. Blockscout holders_count 2408. Pair created 2026-09-02T02:25:38Z. [claim S1 S7]

Gecko same pool: volume_usd.h24 1803835.54 reserve_in_usd 29759.15. Gecko token fdv_usd 138423.18; token volume_usd.h24 1949123.00 is all pools, not the SPY book. Gecko pool fdv_usd 13633335.54 is the inverted SPY-as-base book. [claim S8 S9]

## Communications

@RH_normie bio embeds the CA; posts are SPY-saver bits [verified S11]

Netlify vote pages circulated with this CA [claim S19]

@_dbk_ posted first-hour NORMIE/SPY prints [claim S10]

## Findings

USD liquidity figures on the NORMIE/SPY book count both sides, and the quote side is SPY, not USDG. PonsV2LaunchFactory is Ownable2Step; token owner() reverts. Token source is not verified at this address. Ticker-only NORMIE ERC-20s exist on the same explorer. Netlify vote pages with this CA are a copypasta-pattern / third-party-link. [claim S13]

- Quote token SPY 0x117c…4C0C is the rhj rail; pool USD reserve is NORMIE plus SPY, not a USDG backstop. [verified S7 S12]
- PonsV2LaunchFactory is Ownable2Step; token source is not verified at this address. [verified S1 S6 S20]
- Ticker-only NORMIE ERC-20s exist on Blockscout; this packet is the 0x92ef7C…1612 / SPY book only. [claim S1]
- Copypasta-pattern netlify vote pages are third-party-link. [claim S19]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/launchAndBuy/SPY and both launch and graduation txs, RPC name/symbol/launchFactory/curve/socials/owner, DexScreener, Gecko pool/token (GET 200), /rhj/assets, normie-rh.xyz HTML/JS, @RH_normie, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12 S14]
- Numbers: 1801288.6 is the DexScreener NORMIE/SPY pool 24h volume, not the 1949123.00 Gecko token all-pools figure. Reserve 29635.03 DexScreener / 29759.15 Gecko is that pool. Gecko pool fdv 13.6M is SPY-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this CA is the PAIR/SPY or STRATTON/SPY book, or that SPY here is not the Robinhood Stock Token. PairLaunchpadV5 created PAIR 0x6b1d…66be, STRATTON is 0xb7eae…8360, STACKS is 0xD998…D94C, and GET /rhj/assets lists this SPY address as ASSET_STATUS_ACTIVE. [inference S7 S12 S16]

## Sources

- S1 — Token 0x92ef7C…1612 normie / NORMIE.
- S2 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0x7fe993ff…a775.
- S5 — eth_getCode, name, symbol, launchFactory(), socials() on NORMIE.
- S6 — factory owner(), curve code, related getCode.
- S7 — latest/dex/tokens NORMIE.
- S8 — SPY/NORMIE pool (pons-v2-dex).
- S9 — normie token.
- S10 — $NORMIE first-hour SPY pool prints.
- S11 — instant ramen saves me 2$ a dinner.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — normie-rh.xyz HTML.
- S14 — normie-rh.xyz JS bundle embeds CA.
- S16 — TokenLaunched log for NORMIE.
- S17 — Token 0x117c…4C0C SPY Robinhood Token.
- S18 — CurveCompleted / LaunchSwept tx 0x79570acb…7acd.
- S19 — NORMIE Robinhood Top 100 vote netlify.
- S20 — PonsV2LaunchFactory verified source.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:53:00Z; methodology_version: proofline-v1.0.
