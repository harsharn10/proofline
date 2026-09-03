---
slug: artificial-inu
coverage: stub
methodology_version: proofline-v1.0
---

# Artificial Inu — research record

## Identity

Artificial Inu is classified as Stock-paired token.

Artificial Inu is a LONG-factory stock-paired memecoin: $AI trades against tokenized NVDA in a Uniswap v4 pool on Robinhood Chain. A user swaps AI for NVDA, or uses the secondary WETH book. The official site and @ArtificiallyInu account describe a community vault that takes NVDA buy fees and burns or locks AI sell fees; those fee paths were not reproduced this pass.

Themes: memecoin, ai, stock-paired:NVDA, dog, rwa

## Deployment

$AI token (EIP-1167 clone): 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18 on robinhood-chain. [verified S13 S15 S29]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S29]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S18]

LongLauncher (creation tx `to`; PRD 0x22e9…eeED): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S16 S17]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S15 S19]

## Control

`owner()` on the token returns Airlock `0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862`, a verified contract. The factory `create` path is `onlyAirlock`. Owner-only token functions therefore sit on shared LONG/Doppler launch infrastructure. [verified S15 S18 S19]

The token is an EIP-1167 clone of verified `DopplerERC20V1` `0x3Be8…C599`. The EIP-1967 implementation slot is empty, as expected for a minimal proxy. [verified S13 S15 S29]

## Security

No audit report URL was located on the official site, how-it-works page, or X account this pass. [unknown]

## Engineering

_Research pending._

## Team

Official identity is bidirectional: artificialinu.com links `https://x.com/artificiallyinu` and publishes CA `0x2E8c…1e18`; @ArtificiallyInu posted the site on 2026-08-29 and the same site plus CA on 2026-08-17. No GitHub org was located. Named operators were not established beyond the Airlock-owned token. [verified S10 S28]

## Product and economics

$AI is an ERC-20 at `0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18`. The primary book is Uniswap v4 AI/NVDA (`0xcbdfea…ce27`) with quote `0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC`. A secondary Uniswap v3 AI/WETH book (`0xc4a21f…da1d`) is also live. [verified S13 S20]

The token was created on 2026-07-14T17:48:31Z by `LongLauncher.create` at `0x22e99278308B393ea1260859B181AD7E78f5eeED` (PRD factory `0x22e9…eeED`). Blockscout `creator_address_hash` is `DopplerERC20V1Factory` `0x1B37…b69a`, which clones `DopplerERC20V1` via EIP-1167 and is `onlyAirlock`. [verified S16 S17 S18]

The official how-it-works page says buys pay NVDA fees 80% to the Community Vault and 20% to the original receiver, and sells pay AI fees 50% burned and 50% locked in the Vault. Those amounts are marked illustrative. No vault contract was published on that page. [claim S11]

Same-stock NVDA pairs that are not this token: microduck/NVDA, ORBIO/NVDA, GPU/NVDA, PonsiOS/NVDA. They are not identity matches. [claim S30]

DexScreener AI/NVDA Uniswap v4 at 2026-09-02T22:38:50Z: liquidity $6,082,812.92, 24h volume $5,949,096.18, market cap $267,172,264. [verified S20]

Gecko trending at 2026-09-02T22:41:00Z lists the same AI/NVDA pool at reserve $26,012,100.67 and 24h volume $5,919,947.20. Those two liquidity figures are not combined. [verified S22]

@HoodInsider_ on 2026-09-02T20:15:00Z claimed $26.7M core liquidity, $58.9M tracked volume, and 33.3K holders. [claim S25]

Gecko trending AI/WETH: reserve $3,715,804.10, 24h volume $22,890,375.60. DexScreener AI/WETH Uniswap v3: liquidity $3,751,110.01, 24h volume $23,030,093.93. [verified S20 S22]

Blockscout holders_count 35,487. RPC totalSupply 991,528,260.79 AI against a 1e9 18-decimal mint. [verified S14 S15]

Official site widget: Community Vault 932.50 NVDA ($209,878) and liquidity pools 10,478.00 NVDA ($2,358,283). Official account at 21:59 UTC posted pool plus vault over $2.6M NVDA. [claim S10 S26]

## Communications

Official account posted pool plus vault over $2.6M NVDA [claim S26]

@HoodInsider_ recap claimed $26.7M core liquidity for $AI [claim S25]

Official account posted the site as artificialinu.com [verified S28]

## Findings

The AI/NVDA liquidity print is not one number: DexScreener lists about $6.08M while Gecko trending lists about $26.01M for the same pool id, and a 2 Sep recap claimed $26.7M core liquidity. The Community Vault address is unpublished, so the NVDA-fee path cannot be checked as a balance. Token owner-only functions sit on the shared Airlock, not on a project-held key located this pass. [claim S10]

- AI/NVDA liquidity is $6.08M on DexScreener, $26.01M on Gecko trending, and $26.7M in a 2 Sep recap; the figures are not interchangeable. [verified S20 S22]

- Community Vault address is unpublished, so NVDA-fee custody cannot be checked as a balance. [claim S11]

- Token owner() is the shared Airlock; factory create is onlyAirlock. [verified S15 S18 S19]

- No audit report was located this pass. [unknown]

- Gecko attributes the AI/NVDA pool to bankr-robinhood while DexScreener labels it Uniswap v4. [verified S20 S23]

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or JSON body. [verified S10 S11 S13 S15 S20 S22]
- Numbers: DexScreener AI/NVDA liquidity and Gecko trending reserve are filed as separate claims and metrics, not averaged; AI/WETH is a second book; holders is the Blockscout token count, not an X recap. [verified S20 S22 S14]
- Adversarial: the strongest contrary reading is that Gecko's $26M is the usable figure and DexScreener undercounts Uniswap v4 concentrated liquidity, or the reverse, that Gecko overstates virtual reserves; a second contrary reading is that the pool is a Bankr book rather than Uniswap v4. Creation through LongLauncher and DexScreener's uniswap/v4 labels argue for a LONG/Uniswap v4 venue, but the Gecko dex id is unresolved. Vault and fee-split claims could be frontend copy only. [inference S16 S20 S23]

## Sources

- S10 — Official site.
- S11 — How it works.
- S13 — Address 0x2E8c…1e18.
- S14 — Token 0x2E8c…1e18.
- S15 — eth_getCode / owner / name / symbol at block 52932110.
- S16 — Creation tx 0x7632524c….
- S17 — LongLauncher 0x22e9…eeED.
- S18 — DopplerERC20V1Factory 0x1B37…b69a.
- S19 — Airlock 0xeb7C…0862.
- S20 — Token pairs API 0x2E8c…1e18.
- S22 — Robinhood trending pools API.
- S23 — AI/NVDA pool API.
- S25 — Daily recap 2 Sep 2026.
- S26 — $AI pool plus vault NVDA holdings.
- S28 — The Inu is artificialinu.com.
- S29 — DopplerERC20V1 implementation 0x3Be8…C599.
- S30 — microduck/NVDA pair (same-stock, not $AI).

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T22:44:06Z; methodology_version: proofline-v1.0.
