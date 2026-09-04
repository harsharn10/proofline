---
slug: kipseli
coverage: stub
methodology_version: proofline-v1.0
---

# Kipseli — research record

## Identity

Kipseli is classified as Proprietary-liquidity AMM.

Kipseli is a proprietary AMM. On Robinhood Chain a swap approves the PropAmm router, takes a signed quote, and settles against inventory in a reserve wallet quoted in USDG. There is no public bonding curve and no LP token. Docs also list Base and BNB Chain. The site is kipseli.capital. No official X handle was located.

Themes: amm, orderbook, prop-amm

## Deployment

Robinhood PropAmm router: 0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402 on robinhood-chain. [verified S2 S4 S5]

Robinhood QuoteLens helper: 0xABa7C80918d8127C23BE2bef649832050a0Cf08a on robinhood-chain. [verified S2 S6 S7]

Robinhood reserve wallet: 0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6 on robinhood-chain. [verified S3 S9]

Router owner() Safe: 0x5053872f31edFB9b2aD4ddF701f72440cCfE1115 on robinhood-chain. [verified S4 S8 S20]

Docs EIP-712 verifier (no code on 4663): 0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E on robinhood-chain. [claim S2 S18]

## Control

owner() on the router returns Safe 0x5053872f31edFB9b2aD4ddF701f72440cCfE1115. getThreshold() on that Safe is 1 of three owners. The reserve Safe 0xcA9bf993…4EF6 uses the same three owners with threshold 2. Deployer 0xAEE25670…55b8D created the router on 2026-07-14 and transferred ownership to the 1-of-3 Safe minutes later. No timelock address was located. Router source is not verified. [verified S4 S8 S9 S20]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

kipseli.capital titles itself Kipseli Capital and states in HTML that no twitter:site was provided. Llama twitter is null. GitHub organization KipseliCapital exists with one public repository, a landing page last pushed 2026-04-17. docs.kipseli.capital publishes the Robinhood addresses that RPC reproduced. No protocol source repository was located. [claim S1 S12 S19]

## Product and economics

A taker approves the PropAmm router and calls swap(tokenIn, amountIn, tokenOut, minOutAmount, quoteTimestamp, verificationData). quote() is a view that takes an EIP-712 signature over tokenIn, tokenOut, and a millisecond timestamp. The HTTP path is POST /v2/swap/sign plus GET /v2/price for an orderbook cache. Both quoting paths are described as whitelist-gated; HTTP calls need X-API-KEY. [claim S2]

On Robinhood Chain the QuoteLens helper returns USDG as the quote token and, this pass, a single listed token WETH. Liquidity is not a Uniswap pool; Llama values listed assets plus the quote token in a reserve Safe. [verified S6 S17] [claim S3]

Llama currentChainTvls Robinhood Chain 244673.15 USD at 2026-09-03T04:22:35Z (Base 583602.66, Binance 228493.65; all-chains sum 1056769.46). summary/dexs total24h 1067596 is Ethereum-only via adapter router 0x054F0377…E63a; it is not a Robinhood Chain slice. The RH router still emitted WETH/USDG logs on 2026-09-01. Fees endpoint is not listed. [claim S10 S11 S22] [verified S21]

## Communications

Exypnos lists kipseli as a Robinhood Chain liquidity source [claim S13]

## Findings

The router is unverified. owner() is a Safe whose threshold is 1. Docs name an EIP-712 verifier at one address on every chain; that address has no code on 4663. Public posts describe two Base quoting-path incidents in 2026; those wrappers are not this router, but they are the same product family. [verified S4 S8 S18] [claim S14 S15]

- Router source is unverified; owner Safe threshold is 1. [verified S5 S8]
- Docs EIP-712 verifier has no code on chain 4663. [verified S18]
- Llama DEX volume is Ethereum-only and must not be read as Robinhood Chain volume. [claim S11 S22]
- No audit report URL. [unknown]
- Base quoting-path incidents in April and August 2026 are the same product family, different chain. [claim S14 S15]

- Receipts: kipseli.capital, docs index.md, GitHub org and landing-page, Llama protocol/volume/adapter/dimension adapter, X posts, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S4 S10]
- Numbers: TVL is the Robinhood Chain slice from api.llama.fi, not the all-chains total. Volume is labeled Ethereum-only. Bytecode lengths, owner(), Safe threshold, quote token, and listed tokens are chain 4663 RPC. [verified S4 S6 S10]
- Adversarial: strongest contrary reading is that 0x4f1ce663…7402 is an unused docs leftover and live flow uses another factory, or that Llama RH TVL is mis-attributed. Docs and the Llama adapter set this router and this QuoteLens/reserve pair; RPC owner, quote token, and 2026-09-01 logs argue it is live. The Ethereum volume adapter is a different router. [inference S2 S3 S4 S21]

## Sources

- S1 — kipseli.capital home.
- S2 — Kipseli PropAMM docs.
- S3 — kipseli adapter.
- S4 — eth_getCode / owner() router 0x4f1ce663…7402.
- S5 — Address 0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402.
- S6 — QuoteLens getQuoteToken / getListedTokens.
- S7 — Address 0xABa7C80918d8127C23BE2bef649832050a0Cf08a.
- S8 — owner Safe getOwners / getThreshold.
- S9 — Address 0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6.
- S10 — protocol/kipseli.
- S11 — summary/dexs/kipseli.
- S12 — orgs/KipseliCapital.
- S13 — new arrivals on Exypnos.
- S14 — kipseli.capital Base quoting-path alert.
- S15 — Base PropAMMWrapper incident.
- S17 — Quote token USDG 0x5fc5360d…d168.
- S18 — eth_getCode verifier 0xCa369e97…A91E.
- S19 — KipseliCapital/landing-page.
- S20 — transferOwnership tx 0x909e22a2…14b1b.
- S21 — Router logs and latest swap-like tx.
- S22 — dimension-adapters dexs/kipseli.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:52:00Z; methodology_version: proofline-v1.0.
