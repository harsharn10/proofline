---
slug: klik
coverage: stub
methodology_version: proofline-v1.0
---

# Klik — research record

## Identity

Klik is classified as Programmable-hook launchpad.

Klik is a permissionless token launchpad. Docs: Ethereum, Base, Robinhood Chain, and Arc. A launch is one `deployCoin` transaction into a Uniswap V4 pool with a Klik hook; there is no presale. Robinhood Chain factory 0x16cF6788…0dd7 is verified as Factory_whook.sol. The handle is @klik_evm; the site is klik.finance.

Themes: launchpad

## Deployment

Robinhood Chain factory: 0x16cF6788B762EE8969744586eD16fc5705140dd7 on robinhood-chain. [verified S2 S10 S11 S12]

UniversalKlikHook: 0x745d717620052a97a22dEEE2e5Eba59583f3e0CC on robinhood-chain. [verified S10 S12 S13 S14]

platformController(): 0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a on robinhood-chain. [verified S10 S11 S14 S21]

## Control

`platformController()` returns 0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a. That address has no code and is also the Blockscout creator. `owner()` reverts. The factory is not an ERC1967 proxy (slot zero; Blockscout `proxy_type` null). `klikHook()` is UniversalKlikHook 0x745d7176…e0CC, verified. No timelock address was located. [verified S10 S11 S13]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@klik_evm names klik.finance in the website field. klik.finance HTML does not name the handle (no twitter:site). GitHub user klikfinance blog is klik.finance; the repo is a February README and is not the live RH source. Flag unconfirmed-official. [claim S1 S4 S17 S18]

## Product and economics

Docs: one transaction deploys an ERC-20 with bootstrapped Uniswap V4 liquidity, vanity prefix 69 on Ethereum and Robinhood Chain (CREATE2), liquidity locked in the pool. Normal launches use a market-cap fee ladder from 1.00% down to 0.10%. Hook Labs is a separate Ethereum factory with a five-way fee split that does not use that ladder. [claim S2 S3 S20]

The 3 Sep handle post lists Robinhood stock pairs as live. Docs HTML this pass does not name a stock quote path. [claim S5]

RPC `tokenCount()` 5923 at 2026-09-03T04:26Z. Latest factory mint this pass is CYBER 0x39496347…1F5C at 04:13:47Z. DexScreener has a robinhood Uniswap v4 pair for factory token 0x6989a821…3ca8 (KLIK/ETH) with 3496.16 USD liquidity and 1370.46 24h volume; that token's `tokenHook()` is UniversalKlikHook. Emerson's 30d 361-token print was not reproduced this pass. api.llama.fi/protocol/klik returned 400. [verified S10 S16 S19] [claim S15]

## Communications

@klik_evm posts that fees now feed $KLIK and Robinhood stock pairs are live [claim S5]

@klik_evm posts KLIK remains fully operational on Robinhood Chain [claim S6]

@klik_evm posts first Robinhood trenches stimmy live [claim S7]

## Findings

`platformController()` is one externally owned account with no code. Verified source lets that address swap the hook, pause `deployCoin`, and withdraw ETH/WETH fees. There is no timelock. Docs put Hook Labs on a second Ethereum factory; an integrator that posts `deployCoinWithHook` to 0x16cF…0dd7 is on the wrong chain. [verified S10 S12] [claim S20]

- platformController is one EOA with hook-swap, pause, and fee-withdraw. [verified S10 S12]
- Hook implementation is verified but `is_fully_verified` false. [verified S13]
- Ethereum platform token 0x5886e4d8…81f1 is not on chain 4663; several RH tokens are also named KLIK. [verified S16 S19] [claim S3]
- No audit report URL. [unknown]
- 3 Sep stock-pair claim is not in the docs factory table this pass. [claim S5]
- GitHub README mints do not match docs. [claim S18]

- Receipts: klik.finance, /docs, X profile and Latest posts, GitHub user/repo/README, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S10 S11]
- Numbers: `tokenCount` 5923, bytecode lengths, nonce, and `platformController()` are chain 4663 RPC. DexScreener liq/volume are one robinhood v4 pair, not pad TVL. Factory search of 0x16cF…0dd7 returned 0 pairs. [verified S10 S16]
- Adversarial: strongest contrary reading is that 0x16cF…0dd7 is a leftover factory and new launches use a Hook Labs address, or that the team left Robinhood Chain. Docs set the Robinhood row to this address; RPC `deployCoinEnabled()` is true and `deployCoin` landed on 2026-09-03. The 15 Jul post says the pad remains operational on this chain. Pons and LONG are different products. [inference S2 S6 S10 S15]

## Sources

- S1 — klik.finance home.
- S2 — Developer Docs — What is Klik / Factory Contracts.
- S3 — Developer Docs — The KLIK Token / Fee Schedule.
- S4 — KLIK profile.
- S5 — fees work differently now.
- S6 — KLIK remains fully operational on robinhood chain.
- S7 — THE FIRST ROBINHOOD TRENCHES STIMMY IS LIVE.
- S10 — eth_getCode / tokenCount / platformController / klikHook.
- S11 — Address 0x16cF6788B762EE8969744586eD16fc5705140dd7.
- S12 — Smart contract Factory_whook.sol.
- S13 — Address 0x745d717620052a97a22dEEE2e5Eba59583f3e0CC.
- S14 — eth_getCode hook and platformController.
- S15 — Factory inbound transactions.
- S16 — KLIK/ETH robinhood pair for 0x6989a821…3ca8.
- S17 — users/klikfinance.
- S18 — klikfinance/klik README.
- S19 — tokenInfoByAddress / tokenHook 0x6989a821…3ca8.
- S20 — Developer Docs — Hook Labs contracts (Ethereum).
- S21 — Factory creation transaction.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
