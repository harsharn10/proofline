---
slug: mesh
coverage: stub
methodology_version: proofline-v1.0
---

# Mesh — research record

## Identity

Mesh is classified as Machine-payment tooling.

An HTTP 402 machine-payments gateway on Robinhood Chain. An agent pays USDG per API call through a Permit2 witness transfer; Mesh's relayer broadcasts it and the stablecoin lands in the merchant wallet. Holders of MESH above 500,000 receive the day's protocol-fee pool as a tokenized stock. @MeshGateway runs meshgateway.co.

Themes: tooling, agent, rwa, memecoin

## Deployment

MESH token (PonsV2LauncherToken): 0x14641000A501bdc736116aBf84e6fCeA9B90A713 on robinhood-chain. [verified S8 S10 S11 S12]

PonsV2BondingCurve (MESH launch curve): 0x8Bb3EDE48fE9d946aa6B5f953280cd681db22499 on robinhood-chain. [verified S10 S12]

MeshSplitterFactory: 0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09 on robinhood-chain. [verified S14 S15 S26]

x402ExactPermit2Proxy (settlement path): 0x402085c248EeA27D92E8b30b2C58ed07f9E20001 on robinhood-chain. [verified S16 S17]

## Control

Token `owner()` is absent. `deployer()` is EOA 0x8DF12b…d3b0. MeshSplitterFactory `treasury()` is EOA 0x417909…237D, which created the factory. The sampled settle tx sender 0xc23124…1dc3 has no code. Whitepaper: the gateway is named in no transfer. [verified S12 S14 S16] [claim S7]

## Security

x402ExactPermit2Proxy is verified with `is_fully_verified` false, created 2026-08-11 by CREATE2 deployer 0x4e59…4956C, constructor Permit2 0x000000000022D473…78BA3. No audit PDF was located. [verified S17] [unknown]

## Engineering

_Research pending._

## Team

@MeshGateway bio lists the token. Token `socials()` and the launch constructor store https://x.com/MeshGateway and https://meshgateway.co. github.com/meshgateway blog is meshgateway.co and the bio repeats the CA. Telegram t.me/MeshCommunity is on DexScreener and CoinGecko only. [verified S8 S9 S12]

Pons is the launchpad and a listed merchant, not the same slug. [verified S11 S15]

## Product and economics

A merchant lists an HTTP endpoint. The client hits 402, signs a Permit2 witness transfer to the merchant, and retries; the relayer submits `settle` on x402ExactPermit2Proxy. Sampled tx 0x4eb7…a8eb moved 0.03 USDG and /status labels that merchant pons. [claim S5 S7] [verified S16 S18]

MESH is a Pons v2 token. Holders above 500,000 MESH are sampled every 3 minutes; the day's fee pool is posted as a tokenized-stock drop at 00:00 UTC with no claim. MeshEcosystem takes 10% of linked Pons v2 creator fees into that pool via MeshSplitterFactory. [claim S6 S21 S26 S27]

MESH/ETH Uniswap v4 24h volume 162179.74 USD, liquidity 64171.77 USD, DexScreener marketCap 423855 at 2026-09-03T02:55Z. CoinGecko market_cap.usd 381954. Holders 1063. Homepage: 11,323 settlements, 480.66 USDG, 102 merchants. /status unique payers 18. [claim S5 S10 S13 S18 S25]

## Communications

Epoch 11 paid 0.7968 RBLX to 183 MESH holders [claim S19]

Mesh posts agentic commerce starts with Mesh [claim S24]

Mesh posts ERC-8004 identity and reputation [claim S23]

Mesh posts 11,000 on-chain settlements [claim S20]

GME drop settled; MESH earn bar cut to 500K [claim S21]

MeshGateway x402 facilitator adds Base USDC [claim S22]

## Findings

Merchant transfers go through x402ExactPermit2Proxy and a relayer EOA; the sampled status page shows 11,323 settlements from 18 unique payers. Epoch USDG custody and the stock-swapper were not found in the splitter ABI. Treasury on MeshSplitterFactory is one EOA. [claim S5]

- Epoch fee pool and stock-swap path were not reproduced on a Mesh contract this pass. [unknown]
- Relayer and splitter treasury are externally owned accounts. [verified S12]
- /status unique payers 18 versus 11,323 settlements. [claim S18]
- DexScreener and CoinGecko market-cap figures disagree. [claim S13 S25]
- Permit2 proxy is shared x402 bytecode from 11 Aug, not shown as a Mesh deploy. [verified S17]

- Receipts: meshgateway.co, /mesh, /earn, /status, whitepaper, @MeshGateway profile and posts, GitHub user, Blockscout token/curve/splitter/proxy/create/settle txs, RPC, DexScreener, and CoinGecko were opened on 2026-09-03 and excerpts copied from the responses. [verified S5 S10 S12 S16]
- Numbers: 162179.74 is the MESH/ETH Uniswap v4 24h volume, not a sum of the USDG pairs and not CoinGecko total_volume. Holders 1063 is Blockscout `holders_count`. 480.66 USDG is the site all-time settlement figure, not TVL. [claim S10 S13 S18]
- Adversarial: the strongest contrary reading is that Mesh is only a Pons-launched memecoin wrapping a public x402 proxy, with settlement counts from few wallets. Token socials, site CA, GitHub CA, and a pons-labelled USDG settle tx still leave the gateway as a Robinhood-native rail; unique-payer concentration and missing epoch contracts stay open. [inference S12 S16 S18]

## Sources

- S5 — MeshGateway homepage.
- S6 — $MESH token page.
- S7 — Whitepaper.
- S8 — MeshGateway profile.
- S9 — meshgateway user.
- S10 — Address 0x1464…A713 PonsV2LauncherToken.
- S11 — MESH create tx 0x7496dee5….
- S12 — eth_getCode, name, socials, launchFactory, splitter views.
- S13 — MESH token pairs on robinhood.
- S14 — Address 0x0025…7c09 MeshSplitterFactory.
- S15 — MeshSplitterFactory create tx.
- S16 — Pons merchant settle tx 0x4eb7…a8eb.
- S17 — Address 0x4020…0001 x402ExactPermit2Proxy.
- S18 — x402 status.
- S19 — Epoch settled. Drop no. 11 is live..
- S20 — Mesh just crossed 11,000 on-chain settlements.
- S21 — $GME drop settled.
- S22 — One facilitator. Two networks..
- S23 — Identity and reputation, on-chain.
- S24 — this is not a phase.
- S25 — MESH Gateway coin.
- S26 — MeshEcosystem is live.
- S27 — Earn.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:20:00Z; methodology_version: proofline-v1.0.
