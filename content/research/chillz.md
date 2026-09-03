---
slug: chillz
coverage: stub
methodology_version: proofline-v1.0
---

# CHILLZ — research record

## Identity

CHILLZ is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v2 pool quoted against NFLX. Flap Factory deploys Chilleez (CHILLZ) as a FlapTaxTokenV3 clone and the live book is CHILLZ/NFLX on Uniswap v2. Traders buy and sell CHILLZ there. The quote leg is the Netflix • Robinhood Token rail. Site and @ChilleezOnRh say a trade tax feeds a vault that sends NFLX to holders.

Themes: memecoin, stock-paired:NFLX, rwa

## Deployment

CHILLZ token (EIP-1167 FlapTaxTokenV3 clone): 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 on robinhood-chain. [verified S1 S5 S18]

FlapTaxTokenV3 implementation: 0x7777C8743C88B3aff3cf262135beF2c8b2e83333 on robinhood-chain. [verified S2 S5]

Flap Factory (token creator): 0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09 on robinhood-chain. [verified S3 S4 S5]

NFLX Stock Token (pair quote / rail): 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 on robinhood-chain. [verified S6 S12 S16]

Uniswap v2 CHILLZ/NFLX mainPool: 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9 on robinhood-chain. [claim S7 S8 S17]

## Control

token owner() returns 0x0 at block 53149016. Create-tx OwnershipTransferred set newOwner to the factory; the later zero owner was not located as a separate tx this pass. Launch EOA 0x51C9…E740 has no code. Factory implementation 0xa3b96…ff44 is unnamed on the explorer this pass. [verified S4 S5]

## Security

FlapTaxTokenV3 is fully verified (src/Tax/FlapTaxTokenV3.sol, compiler v0.8.26). Token shell is an EIP-1167 clone. No audit report URL was located this pass. [verified S1 S2] [unknown]

## Engineering

_Research pending._

## Team

Official domain https://www.chilleez.net/ and handle @ChilleezOnRh. Site CONFIG and the X bio both carry CA 0x5B6E…7777; DexScreener socials match. t.me/ChilleezCommunity titles Chilleez - Gateway with 26 subscribers and no CA in the public preview; the site lists it. Flag third-party-link on the Netflix about.netflix.com article DexScreener filed as a website, and on grabr.io plushie links the site marks unverified. [verified S13 S14] [claim S8 S20]

Site disclaimer: independent community-run meme project, not affiliated with Netflix, Inc. [claim S13]

## Product and economics

Flap Factory 0x2660…Eb09 cloned FlapTaxTokenV3 via EIP-1167. TokenCreated from 0x51C9…E740 at 2026-08-31T21:59:10Z minted Chilleez / CHILLZ supply 1e9*1e18 with quoteToken NFLX and tax 200 bps. mainPool() is Uniswap v2 0x31a03…7ba9 created 2026-08-31T22:00:05Z. The create tx also PairCreated 0x3075…F4Cd as the Flap curve pool. [verified S4 S5 S18]

Verified IFlapTaxTokenV3 source maps state() 2 to TaxEnforcedAntiFarmer until 2026-09-30T22:00:05Z, then TaxEnforced. buyTaxRate and sellTaxRate are 200 bps. taxProcessor is a TaxProcessorUniV2 clone; dividendContract is a Dividend clone. Site copy: a slice of each buy and sell flows into the Chilleez Vault and the vault sends NFLX to holders with nothing to claim. That vault path was not reproduced from logs this pass. [verified S2 S5] [claim S13]

CHILLZ/NFLX Uniswap v2 24h volume is 290713.69 USD and liquidity.usd is 73668.06 at 2026-09-03T04:47:00Z from DexScreener. fdv/marketCap 541425. Gecko token fdv_usd 555818.70; Gecko token volume_usd.h24 294165.03; Gecko token total_reserve_in_usd 36171.14 is the token-side reserve, not the pool both-sides figure. [claim S8 S9]

Blockscout holders_count 365. Pair created 2026-08-31T22:00:05Z. RPC reserves ~65.92M CHILLZ and ~442.999 NFLX in the v2 pair; 0xdead holds ~30.98M CHILLZ. [claim S1 S5]

@ChilleezOnRh posted 41 NFLX distributed (~$3,360 at $82) and 8.22 NFLX added to liquidity. Those amounts were not reproduced from Transfer logs this pass. [claim S11]

## Communications

@ChilleezOnRh posted 41 NFLX distributed to holders [claim S11]

X account posted a supportlisting.org vote for the CA [claim S22]

## Findings

USD liquidity on the CHILLZ/NFLX book counts both sides, and the quote side is NFLX, not USDG. Same-ticker CHILL/NFLX at 0x57ff…1e18 and same-name Chilleez clones are easy to mix in a search. DexScreener also lists a Netflix character article as a website; the token site says it is not affiliated with Netflix. Tax is 2% buy and sell while state is TaxEnforcedAntiFarmer. [claim S13]

- Same-ticker CHILL/NFLX 0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18 is a different token (Netflix n Chill). [verified S19]
- Same-name Chilleez/CHILLZ clones exist at other addresses with 1–3 holders. [verified S21]
- Pool USD reserve is CHILLZ plus NFLX, not a USDG or WETH backstop. [claim S8]
- 2% buy and sell tax while TaxEnforcedAntiFarmer; taxExpirationTime is 2126. [verified S5]
- Netflix character article on DexScreener websites is a third-party-link; site says no affiliation. [claim S13 S20]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/NFLX/pair and both create txs, RPC name/symbol/quoteToken/mainPool/taxes/state, DexScreener tokens API, Gecko token GET 200, /rhj/assets, chilleez.net CONFIG, @ChilleezOnRh bio and posts, Telegram preview, Netflix article, and the listing-vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12 S13]
- Numbers: 290713.69 is the DexScreener CHILLZ/NFLX v2 pool 24h volume, not the Gecko token 294165.03. Liquidity 73668.06 is that pool both sides. Gecko 36171.14 is token total_reserve_in_usd. Holders 365 is Blockscout. [claim S1 S8 S9]
- Adversarial: the strongest contrary reading is that this is the CHILL/NFLX 0x57ff…1e18 book, or an official Netflix product. RPC name/symbol/address, the Uniswap v2 pair, /rhj/assets (NFLX is the rail), and the site disclaimer argue against both. [inference S12 S13 S19]

## Sources

- S1 — Token 0x5B6E…7777 Chilleez / CHILLZ.
- S2 — Address 0x7777C874…3333 FlapTaxTokenV3.
- S3 — Address 0x2660…Eb09 Flap Factory.
- S4 — TokenCreated tx 0x5ab14b9c…4d4d.
- S5 — eth_getCode, name, symbol, quoteToken, taxes on CHILLZ.
- S6 — Token 0xE044…91E8 Netflix • Robinhood Token / NFLX.
- S7 — Address 0x31a03…7ba9 UniswapV2Pair.
- S8 — latest/dex/tokens CHILLZ.
- S9 — Chilleez token.
- S11 — 41 NFLX distributed to holders.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — chilleez.net.
- S14 — X profile bio.
- S16 — stock-tokens.yaml NFLX row.
- S17 — Pair creation tx 0xb193263a…e3c5.
- S18 — TokenCreated and tax logs for CHILLZ.
- S19 — Token 0x57ff…1e18 Netflix n Chill / CHILL.
- S20 — Meet Your New Favorite Streaming Buddies — the Chilleez!.
- S21 — Search q=CHILLZ.
- S22 — Fresh on the listing radar $CHILLZ.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:55:00Z; methodology_version: proofline-v1.0.
