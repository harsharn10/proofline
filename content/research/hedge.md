---
slug: hedge
coverage: stub
methodology_version: proofline-v1.0
---

# Hedgehogs — research record

## Identity

Hedgehogs is classified as Token-bound treasury NFT.

Hedgehogs is a 3,333-seat NFT collection on Robinhood Chain. The official site describes each ERC-721 as a manager seat bound to an ERC-6551 account that also functions as an ERC-4626 vault holding tokenized stocks and listed tokens. The site publishes $HEDGE at 0x8226DDA5F73619DEdC671e09Be738fA308da1944 on chain 4663 and states the mint is sold out. The token and collection contracts exist on chain 4663; neither has verified source.

Themes: nft-treasury, token-bound-nft, vault, rwa, erc-20

## Deployment

$HEDGE token (explorer name Hedge, ERC-20): 0x8226DDA5F73619DEdC671e09Be738fA308da1944 on robinhood-chain. [verified S1 S3 S12]

Hedgehogs NFT collection (explorer name Hedgehogs, symbol HOG, ERC-721): 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 on robinhood-chain. [verified S2 S4 S13]

Site-labeled NAV oracle: 0xe77667d58f30bEAEF072B4ac386eE4eDE0519348 on robinhood-chain. [verified S2 S5]

Site-labeled UpgradePool: 0xb5430F00154d21719c3CAa53508C96678167555D on robinhood-chain. [verified S2 S6]

Site-labeled TSLA price feed (EACAggregatorProxy): 0x4A1166a659A55625345e9515b32adECea5547C38 on robinhood-chain. [claim S1 S7]

Site-labeled NVDA price feed (EACAggregatorProxy): 0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15 on robinhood-chain. [claim S1 S7]

Site-labeled AAPL price feed (EACAggregatorProxy): 0x6B22A786bAa607d76728168703a39Ea9C99f2cD0 on robinhood-chain. [claim S1 S7]

Site-labeled SPY price feed (EACAggregatorProxy): 0x319724394D3A0e3669269846abE664Cd621f9f6A on robinhood-chain. [claim S1 S7]

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

Site states mint sold out and TBF mechanism [claim S1]

## Findings

`owner()` on the token, collection, and site-labeled oracle is a single externally owned account, and explorer source is unverified, so fee, NAV, and upgrade paths were not read from verified code. Site copy of a 1B fixed $HEDGE supply does not match explorer `total_supply` of about 879 million tokens. [verified S3] [claim S1]

## Sources

- S1 — Official site hedgehogs.tech.
- S2 — HEDGEHOGS terminal app CFG.
- S3 — HEDGE token 0x8226DDA5….
- S4 — Hedgehogs collection 0xe044b7Ff….
- S5 — Site-labeled oracle 0xe77667d5….
- S6 — Site-labeled UpgradePool 0xb5430F00….
- S7 — EACAggregatorProxy feeds listed in site CFG.
- S12 — HEDGE creation transaction.
- S13 — Hedgehogs collection creation transaction.

## Review metadata

Compiled from WORK-20260903-grok-bot-hedge by grok-bot as of 2026-09-03T13:30:00Z; methodology_version: proofline-v1.0.
