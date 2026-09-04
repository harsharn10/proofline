---
slug: floor
coverage: stub
methodology_version: proofline-v1.0
---

# Floor — research record

## Identity

Floor is classified as Fee-funded RWA distributor.

Floor is a Pons-graduated token on Robinhood Chain. The official site says a 2% creator tax on $FLR trades buys a basket of tokenized equities, with half claimable by holders and half held as a redeemable floor. The site publishes the token, vault, and distributor addresses on chain 4663. RPC this round reproduced the FLOOR/FLR ERC-20 and a vault whose token() returns that address. Distinct from The Index.

Themes: rwa, vault, fee-routing, tax-distributor, pons

TL;DR: Pons-graduated $FLR on chain 4663: a 2% trade tax is stated to buy tokenized equities; token, vault, and distributor contracts exist [CLM-1 CLM-3 CLM-4].

## Deployment

$FLR token (RPC name FLOOR, symbol FLR, ERC-20): 0x8aD25c65587979533fa1cA0d2194A76D5bAE305d on robinhood-chain. [verified S1 S3 S12]

Site-labeled FLOOR Vault: 0xEf9Cb10585F7641c89AFb5Ab97559749CB7B1b71 on robinhood-chain. [verified S1 S4 S12]

Site-labeled FLOOR Distributor: 0xc2f799fF3c16DBE4801A8bF9c9b47177BcFD2479 on robinhood-chain. [verified S1 S5 S12]

## Control

_Research pending._

## Security

_Research pending._

## Engineering

_Research pending._

## Team

_Research pending._

## Product and economics

_Research pending._

## Communications

Site publishes $FLR tax-to-equities mechanism and CAs [claim S1]

Floor_fi: fees to tokenized-stock rewards [claim S13]

## Findings

- `owner()` on the vault and distributor is one externally owned account; explorer source was not flagged because Blockscout API v2 returned 403. [verified S4 S5]
- Homepage copy says no lockup while a later vault section describes timed locks that multiply rewards. [claim S1]
- Two on-page basket tables disagree on assets and weights, so the live treasury split is unread. [claim S1]

## Sources

- S1 — Official site floorfi.app.
- S3 — FLR token 0x8aD25c65….
- S4 — FLOOR Vault 0xEf9Cb105….
- S5 — FLOOR Distributor 0xc2f799fF….
- S12 — eth_getCode / eth_call on chain 4663.
- S13 — status/2092127246320328809 fees to tokenized-stock rewards.

## Review metadata

Compiled from WORK-20260904-grok-bot-floor by grok-bot as of 2026-09-04T13:45:00Z; methodology_version: proofline-v1.0.
