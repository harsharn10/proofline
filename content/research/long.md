---
slug: long
coverage: stub
methodology_version: proofline-v1.0
---

# LONG — research record

## Identity

LONG is classified as Stock-paired token factory.

The chain's stock-paired token factory. A user deploys a new ERC-20 through LongLauncher, which forwards an Airlock create after a 24-hour ticker lock and quotes the token against a Robinhood stock token in a Uniswap v4 pool. The same app lists $AI/NVDA, $BONER/HIMS and $SPACEHOOD/SPCX. @longdotxyz runs it at app.long.xyz.

Themes: launchpad, rwa, stock-paired

## Deployment

LongLauncher (PRD 0x22e9…eeED): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S11 S12 S13]

TickerAirlockFactory (PRD 0x9c88…0845): 0x9c88f06B72FCD3ceDBEF3BE7521eE5Abd72d0845 on robinhood-chain. [verified S14 S15]

DopplerERC20V1Factory (trusted token factory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S12 S17]

Airlock (create primitive): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S12 S16]

## Control

LongLauncher owner() returns 0x9B7f…ED47, an address with no code. Verified source: onlyOwner pause/unpause, sweepNative, sweepERC20, transferOwnership; Ownable2Step; renounceOwnership reverts; no timelock. AIRLOCK and TRUSTED_TOKEN_FACTORY are immutables. [verified S11 S12]

TickerAirlockFactory 0x9c88…0845 is a prior router with the same Airlock and token factory, created 2026-07-12, still unpaused. Its owner() is a different EOA, 0x8aa7…3F99. [verified S14 S15]

## Security

No audit report URL was located on the app, litepaper, X account, or verified contract pages this pass. [unknown]

## Engineering

_Research pending._

## Team

@longdotxyz display name is LONG(); the bio website is app.long.xyz. Verified LongLauncher.sol names author @natan_benish and copyright 2026 long.xyz. The Dune dashboard owner natan_benish2001 labels the board official analytics for app.long.xyz. [verified S10] [claim S11 S20]

Census Longshot (uselongshot.xyz / @uselongshot) and Longbow (longbow.cash / @longbowlend) share a name fragment only. Bankr is a separate stock-paired factory. $AI is a token launched here, already packed under artificial-inu. [claim S8 S10]

## Product and economics

LongLauncher.create forwards an unchanged Airlock create after checking a 24-hour normalized ticker reservation and that `data.tokenFactory` equals the immutable TRUSTED_TOKEN_FACTORY (DopplerERC20V1Factory 0x1B37…b69a). It is an Airlock router, not a bonding-curve pad. [verified S11 S12]

app.long.xyz lists launched tokens as anchored to stock tokens. $AI is anchored to NVDA, $BONER to HIMS, $SPACEHOOD to SPCX. DexScreener labels the BONER/HIMS and SPACEHOOD/SPCX books Uniswap v4 on chain robinhood. [claim S8 S9] [verified S26 S27]

The official account posted LongX Expansion live on 2026-09-01: NVDA3x wraps a 3x NVDA Lighter position into an ERC-20 that trades as a LONG pair. That path was not reproduced on the explorer this pass. [claim S23]

Dune counters opened 2026-09-02T23:40Z: 24h volume $118,054,304.12; stock TVL in LONG pools $12,312,266.59; 13,092 tokens launched. Methodology counts LaunchCreated from both 0x9c88…0845 and 0x22e9…eeED. [verified S20]

@longdotxyz at 2026-09-02T01:08Z posted $425M 24h tokenized-stock volume and stock TVL closing in on $12M (~20% of onchain stock TVL). The $12M TVL is near the Dune stock-TVL figure; the $425M 24h volume is not. [claim S21]

DexScreener BONER/HIMS Uniswap v4 liquidity $2,207,238.25, 24h volume $3,940,125.12. SPACEHOOD/SPCX Uniswap v4 liquidity $964,796.07, 24h volume $2,902,781.29. [verified S26 S27]

## Communications

Official account posted $110M AI/NVDA tokenized NVDA volume [claim S22]

Official account posted $425M 24h tokenized-stock volume [claim S21]

Official account posted LongX NVDA3x live with Lighter [claim S23]

Official account posted SPACEHOOD/SPCX among Diamond buybacks [claim S24]

Official account posted LONG live on Robinhood Chain [claim S25]

## Findings

LongLauncher `owner()` is a single EOA that can pause creates and sweep native or ERC-20 balances with no timelock in the verified source. TickerAirlockFactory is a second live router with a different owner. Official 24h volume ($425M) and the Dune 24h counter ($118.1M) do not match. [claim S8]

- LongLauncher owner is one EOA with pause and sweep, no timelock in verified source. [verified S11 S12]
- A second live factory (TickerAirlockFactory) is owned by a different EOA. [verified S14 S15]
- Official 24h volume and the Dune 24h counter disagree by hundreds of millions of dollars. [disputed S20 S21]
- No audit report was located this pass. [unknown]
- LongX NVDA3x is posted as experimental; mint/redeem and pairing were not reproduced here. [claim S23]

- Receipts: app.long.xyz and /tokens, @longdotxyz profile and five posts, Blockscout API v2 plus RPC for LongLauncher, TickerAirlockFactory, Airlock and DopplerERC20V1Factory, BONER and SPACEHOOD create txs, Dune counters, DexScreener token APIs, and the $AI/$BONER/$SPACEHOOD app pages were opened on 2026-09-02; excerpts are copied from those pages. [verified S8 S10 S11 S12 S18 S19 S20]
- Numbers: Dune 24h volume and stock TVL are the dashboard's LONG slice, not an all-chains total. DexScreener figures are the named Uniswap v4 pair on chain robinhood. The $425M figure is the project's post, not Dune. [claim S20 S21] [verified S26 S27]
- Adversarial: the strongest contrary reading is that LONG is Longshot, Longbow, or a bonding-curve pad, or that census announced is still correct. Handles, domains and the verified LongLauncher.create path on $AI/$BONER/$SPACEHOOD argue against those. [verified S11 S18 S19] [claim S10]

## Sources

- S8 — app.long.xyz.
- S9 — Tokens on LONG.
- S10 — LONG() profile.
- S11 — LongLauncher 0x22e99278…eeED.
- S12 — eth_getCode / owner / AIRLOCK / TRUSTED_TOKEN_FACTORY.
- S13 — LongLauncher creation tx 0x717af93c….
- S14 — TickerAirlockFactory 0x9c88f06B…0845.
- S15 — TickerAirlockFactory getters.
- S16 — Airlock 0xeb7C0347…0862.
- S17 — DopplerERC20V1Factory 0x1B37D3a7…b69a.
- S18 — BONER creation tx 0x0de235b4….
- S19 — SPACEHOOD creation tx 0x44d4d3df….
- S20 — LONG on Robinhood Chain.
- S21 — $425M 24h tokenized stock volume.
- S22 — AI/NVDA $110M tokenized NVDA volume.
- S23 — LongX Expansion NVDA3x live.
- S24 — Diamond Release Part Two.
- S25 — LONG is now live on Robinhood Chain.
- S26 — BONER token pairs API.
- S27 — SPACEHOOD token pairs API.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:45:00Z; methodology_version: proofline-v1.0.
