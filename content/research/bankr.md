---
slug: bankr
coverage: stub
methodology_version: proofline-v1.0
---

# Bankr — research record

## Identity

Bankr is classified as Agent execution platform.

X-native agent execution: a mention or console prompt mints a token through Doppler Airlock into a locked Uniswap v4 pool, and 95% of the 0.7% pool swap fee (0.665% of volume) accrues to the fee recipient. Users tag @bankrbot or open bankr.bot; chat and API deploys default to Robinhood Chain. Bankr runs the agent as @bankrbot.

Themes: agent, launchpad, ai, rwa, memecoin

## Deployment

DopplerERC20V1Factory (shared with LONG): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S11 S21]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S12 S21]

Airlock (token owner): 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 on robinhood-chain. [verified S13 S21]

TAYSOM (Bankr stock-paired graduation, quote TSM): 0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3 on robinhood-chain. [verified S14 S15 S21 S23]

ROBINHOOD GOON (Bankr graduation; not GOONER): 0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3 on robinhood-chain. [verified S16 S17 S21]

## Control

TAYSOM, SBC, CQ and GOON are EIP-1167 clones of DopplerERC20V1. `owner()` on those tokens returns Airlock 0xeb7c…0862. Airlock `owner()` returns 0x21E2…7A66. This pass did not read Safe threshold or Doppler owner-only setters. [verified S21 S14 S16]

## Security

No audit report matching this factory was located in docs, the GitHub org listing or the X profile this pass. [unknown]

## Engineering

_Research pending._

## Team

@bankrbot lists bankr.bot. GitHub org BankrBot sets blog to https://bankr.bot. docs.bankr.bot names the web terminal, X, Telegram and CLI as surfaces of one agent. Telegram @bankr_ai_bot was not opened. [verified S8 S9 S10]

Llama's Bankr row is an Interface on Base (BNKR 0x22af…6f3b) with empty TVL and no Robinhood chain slice. [claim S26]

## Product and economics

Chat, social and API deploys default to Robinhood Chain; the CLI and web form default to Base. A launch seeds a Uniswap v4 pool. Docs put 95% of a 0.7% pool swap fee (0.665% of volume) to the creator, with hook-added Bankr protocol, BNKR buyback and LP legs stated as 1.75% all-in. [claim S6]

Standard supply is 100 billion. Docs allocate 85% to the pool and 15% to the fee recipient over one year with a 30-day cliff, recipient fixed at launch. The 6 Jul live post cited a two-year vest and 90-day cliff. Docs say schedules are fixed per launch. [claim S6 S7]

Stock-paired mode quotes the pool in a Robinhood Stock Token. @bankrbot posted TSLA/AAPL/SPY and 90+ names on 20 Jul. TAYSOM's GeckoTerminal pool is TAYSOM/TSM on dex `bankr-robinhood`, quote 0x58ff…e7aa. [claim S20 S23]

Tokens Bankr launches are graduations, not this slug. GET /token-launches returned 24 robinhood Doppler rows in the latest 50, including RobinMint and GSPACE on 2 Sep. [verified S22 S13]

@RHDaily__ on 1 Sep 22:00 UTC ranked @bankrbot eighth on a 24h launchpad board at $2.0M, behind Pons $315.9M and LONG $47.5M, tied in print with @letscashfun at $2.0M. That figure is the account's board, not a DefiLlama chain slice. [claim S19]

TAYSOM and GOON each show two holders and 100 billion e18 supply on Blockscout. GOONER (different CA) had 2,097 holders and ~$381k 24h volume on GeckoTerminal. [verified S14 S16] [claim S25]

## Communications

@bankrbot posts a 20,000 TEST claim on chain 4663 [claim S27]

RH Daily lists Bankr at $2.0M 24h pad volume [claim S19]

@bankrbot posts stock-paired launches on Robinhood Chain [claim S20]

@bankrbot posts token launches live on Robinhood Chain [claim S7]

## Findings

Token `owner()` is Airlock, not the launching X account, so Doppler/Airlock admin rights sit outside the Bankr profile. Vesting recipient is locked at launch even if the fee recipient is later transferred. $GOON (Doppler clone) and $GOONER (LaunchFactory) share a ticker stem and are different contracts. [claim S9]

- Shared Doppler/Airlock stack: Bankr-launched tokens have the same `owner()` as other Doppler clones, including LONG-path tokens. [verified S21 S18]
- Vesting recipient cannot be moved after launch; fee-recipient transfer does not move the vested allocation. [claim S6]
- $GOON and $GOONER are different contracts and different factories. Flag ca-collision. [verified S16 S18]
- No audit report for the Robinhood factory was located this pass. [unknown]

- Receipts: docs.bankr.bot, bankr.bot, @bankrbot profile and posts, GitHub org, Blockscout factory/impl/tokens/txs, RPC, Bankr launches API, GeckoTerminal TAYSOM/TSM and GOONER, Llama protocol/bankr, and @RHDaily__ were opened on 2026-09-02 and excerpts copied from the responses. [verified S6 S11 S21 S19]
- Numbers: the $2.0M figure is @RHDaily__'s 24h pad board for 1 Sep, not an all-chains Bankr total and not Llama TVL (empty). Token supplies are 100 billion e18 on TAYSOM and GOON. [claim S19] [verified S21]
- Adversarial: the strongest contrary reading is that Bankr is only LONG with a chatbot, or that $GOONER is the Bankr GOON ticker. Clone bytecode, factory creator and Airlock `create()` match Doppler, while GOONER's creator is LaunchFactory 0x7186…FC63. Wire remains a Pons command layer. [inference S11 S18 S22]

## Sources

- S6 — Token Launching Overview.
- S7 — TOKEN LAUNCHES ON ROBINHOOD CHAIN ARE NOW LIVE ON BANKR.
- S8 — Bankr profile.
- S9 — Bankr — Your Friendly AI-Powered Crypto Banker.
- S10 — BankrBot organization.
- S11 — DopplerERC20V1Factory 0x1B37…b69a.
- S12 — DopplerERC20V1 0x3Be8…C599.
- S13 — RobinMint create tx 0x1fe8405d….
- S14 — Address 0x9965…Ba3 TAYSOM.
- S15 — TAYSOM creation tx 0x4d13665f….
- S16 — Address 0x4D4a…Ba3 ROBINHOOD GOON.
- S17 — GOON creation tx 0x5516be28….
- S18 — GOONER 0x51E7…11F2 and launch tx.
- S19 — Top Robinhood Chain Launchpads by 24H Volume.
- S20 — STOCK PAIRED TOKENS NOW LIVE ON BANKR.
- S21 — eth_getCode, owner, ERC-20 views.
- S22 — GET /token-launches.
- S23 — TAYSOM / TSM pool on Bankr (Robinhood).
- S25 — Purgy Pengoon (GOONER) token.
- S26 — Bankr protocol row.
- S27 — claimed 20,000 $TEST on robinhood chain.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:55:00Z; methodology_version: proofline-v1.0.
