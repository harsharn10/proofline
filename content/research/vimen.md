---
slug: vimen
coverage: stub
methodology_version: proofline-v1.0
---

# Vimen — research record

## Identity

Vimen is classified as Redeemable RWA basket.

In-kind index baskets of Robinhood Stock Tokens. A user deposits listed Stock Tokens or chain-native tokens, or pays USDG or ETH through VimenZap4, and receives one ERC-20 share; redeem burns the share and returns the same units. Frozen baskets lock the recipe at deploy; agentic baskets let an agent rebalance inside contract ceilings. First-party frozen guardian is Safe 0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02.

Themes: rwa, index, vault, stock-paired:NVDA, agent

## Deployment

MAG7 basket (BasketToken): 0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF on robinhood-chain. [verified S11 S13 S25]

AI6 basket (BasketToken): 0x8fF1d77a09A3292b34457175710Bb0C0A1C22601 on robinhood-chain. [claim S11 S14]

HOOD6 basket (BasketToken): 0x0CE04932513Fa1768B5b9444c6A21Ae0DdA005C5 on robinhood-chain. [claim S11 S15]

HOOD6V2 basket: 0x42AF29661e5499e526A1e8e0179fc5272c07F4aE on robinhood-chain. [claim S11]

VIRTS basket: 0xFF71762cB8bc2a6890eC34Ce3a311d9e410c0Aa7 on robinhood-chain. [claim S11]

VVIRT agentic basket: 0xca485830173695650b6bcD773fA0443E87656f5b on robinhood-chain. [claim S11 S21 S27]

VMAG agentic basket: 0x39b3B771D6fAbF4eFD775Ae090AfDdf14f82520F on robinhood-chain. [claim S11]

VCT agentic basket: 0x43ec05E56CE74bbaFeaE3049e669b14C04347629 on robinhood-chain. [claim S11]

VIM token (AgentTokenV4 EIP-1167 clone): 0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF on robinhood-chain. [verified S12 S16 S24 S26 S31]

AgentTokenV4 implementation: 0x581f7B996E6D3E436c537989157c9CB36421419b on robinhood-chain. [claim S16]

BasketFactory (frozen shelf): 0x6D8C85C8Ac7620aBb3010EE29b20Da1c76093BEf on robinhood-chain. [verified S11 S18 S23]

BasketFactory2 (agentic shelf): 0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489 on robinhood-chain. [verified S11 S19 S23 S27]

BasketFactory legacy (Llama): 0x51dB1A456CA238843A159589Cf28710616b2F988 on robinhood-chain. [claim S23]

VimenZap4: 0x4e1D58DDceFf8f340690D0f7F7FDb37FB13Ff388 on robinhood-chain. [claim S11 S20]

Protocol Safe (frozen guardian / fee recipient): 0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02 on robinhood-chain. [claim S11 S17]

CuratorGuardian (agentic / factory guardian): 0xc93B74B490D1bDD71045766C90F1F743D0c356Be on robinhood-chain. [claim S11 S33 S34]

## Control

_Research pending._

## Security

Frozen first-party guardian and fee recipient is Safe 0xc7aB…Ec02: one owner 0x5efc…e27f, threshold 1. SECURITY.md says that guardian can pause mint, move the cap under an immutable ceiling, and change the fee recipient, and that redeem has no pause. Factory baskets use CuratorGuardian, which the same file says exposes only raiseCap. [verified S17] [claim S33]

SECURITY.md states BasketToken has not had a professional audit. Llama audits 0. V2 had two internal reviews before deploy. [unknown]

## Engineering

_Research pending._

## Team

@vimenprotocol bio lists the $VIM CA and app.vimen.org. www.vimen.org names the handle. GitHub org vimenprotocol/vimen names the app and handle. DexScreener token info repeats www.vimen.org, docs.vimen.org and the same handle. Deployer of MAG7/factories/zap is EOA 0xB15e…b189. [verified S9 S11 S12 S24]

PonsVault $VAULT 0xFdae…8312 is a PonsLauncherToken from launchWithVault on 2026-07-27. It is not this slug. [verified S32]

## Product and economics

Frozen MAG7, AI6 and HOOD6 are BasketToken vaults with empty owner() and seven / six constituents on RPC. Mint is in-kind; README states a 0.30% mint fee hard-capped at 0.50% and free ungated redeem. [verified S13 S15] [claim S11]

Agentic VVIRT, VMAG and VCT were created through BasketFactory2.createBasket. RPC guardian() is CuratorGuardian 0xc93B…56Be. Docs: the agent may call rebalance inside cooldown / turnover / slippage ceilings and surplus is paid in USDG. [verified S21 S27] [claim S10]

VimenZap4 0x4e1D…f388 is a verified router. $VIM 0x43E7…47aF is an EIP-1167 AgentTokenV4 clone from Virtuals BondingV5 preLaunch on 2026-07-14, paired to VIRTUAL on Uniswap 0x3b2C…355b. [verified S16 S20 S24 S26]

DefiLlama Robinhood Chain TVL 9452.82436 USD at 2026-09-03T00:17:35Z is basket backing plus USDG buffer, not the $VIM book. MAG7 holders_count 7; $VIM holders_count 669. DexScreener VIM/VIRTUAL liquidity 60215.45 USD, 24h volume 18160.41, marketCap 235686. [verified S22] [claim S13 S16 S24]

## Communications

First USDG payout cycles closed on agentic baskets [claim S28]

Pay from Ethereum, Base, Arbitrum, Solana or Bitcoin [claim S29]

App rebuilt; numbers are chain reads [claim S30]

## Findings

A freeze on any constituent makes whole-basket redeem revert until that transfer works again. First-party guardian is a 1-of-1 Safe. $VIM is a Virtuals AgentTokenV4 with an owner key; it is the curator-license token, not basket custody. PonsVault $VAULT is a different contract. [claim S9]

- Issuer freeze on any constituent reverts whole-basket redeem. [claim S33]
- First-party Safe is threshold 1. [verified S17]
- No professional audit report was located; Llama audits 0. [unknown]
- $VIM owner() 0xe220…2567 sits on the Virtuals AgentTokenV4 clone (tax/blacklist on that token per SECURITY.md), not on basket custody. [verified S16] [claim S33]
- PonsVault $VAULT is a separate Pons fee-layer token. [verified S32]

- Receipts: www.vimen.org, /vim, docs, GitHub README and SECURITY.md, @vimenprotocol posts, Blockscout addresses and txs, RPC, Llama protocol and adapter, and DexScreener VIM pairs were opened on 2026-09-03 and excerpts copied. [verified S9 S13 S22 S24]
- Numbers: 9452.82 is the Robinhood Chain slice from api.llama.fi/protocol/vimen, not an all-chains total and not DexScreener $VIM marketCap 235686. MAG7 supply is 53.325670672318175e18, not 1e18. [claim S22 S24] [verified S13]
- Adversarial: the strongest contrary reading is that Vimen is PonsVault $VAULT or an ERC-4626 index vault. $VAULT is PonsLauncherToken from PonsVaultLauncher; MAG7 is BasketToken from EOA 0xB15e…b189; rIDX remains a different repository with no shared address. [inference S13 S32]

## Sources

- S9 — Vimen site.
- S10 — What is Vimen?.
- S11 — vimenprotocol/vimen README.
- S12 — Official links and $VIM CA.
- S13 — MAG7 0xe1c1…A9DF.
- S14 — AI6 0x8fF1…2601.
- S15 — HOOD6 0x0CE0…05C5.
- S16 — VIM 0x43E7…47aF.
- S17 — Protocol Safe 0xc7aB…Ec02.
- S18 — BasketFactory 0x6D8C…3BEf.
- S19 — BasketFactory2 0x1A3e…d489.
- S20 — VimenZap4 0x4e1D…f388.
- S21 — VVIRT 0xca48…6f5b.
- S22 — protocol/vimen.
- S23 — vimen adapter index.js.
- S24 — VIM token pairs.
- S25 — MAG7 create tx 0xd793ff89….
- S26 — VIM preLaunch tx 0x7123912a….
- S27 — VVIRT createBasket tx 0x9ef9260a….
- S28 — First USDG payout cycles.
- S29 — Pay from other chains.
- S30 — App rebuilt.
- S31 — $VIM page.
- S32 — PonsVault $VAULT 0xFdae…8312.
- S33 — SECURITY.md.
- S34 — CuratorGuardian 0xc93B…56Be.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:50:00Z; methodology_version: proofline-v1.0.
