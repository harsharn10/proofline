---
slug: statics-protocol
coverage: stub
methodology_version: proofline-v1.0
---

# Statics Protocol — research record

## Identity

Statics Protocol is classified as Redeemable RWA basket.

Statics Protocol's live Genesis layer is a fixed-supply STATICS token created through Doppler Airlock into a Uniswap v4 STATICS/WETH multicurve, plus a 5,555 Operator NFT collection the docs back at 180,000 STATICS each. A user buys STATICS on that book or acquires an Operator from the vault. EqualFi Labs publishes the contracts; the basket, Dollar, hook DEX and credit suite remain a separate unreleased rollout.

Themes: rwa, vault, nft, hook, lending

## Deployment

STATICS token (DopplerERC20V1 EIP-1167 clone): 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd on robinhood-chain. [verified S15 S16 S19 S25]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S17 S19]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S18 S19]

Airlock (token owner(); launch tx to): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S19 S20 S25]

StaticsGenesisVault: 0x8AAAF9a22f439589987B8f1e69d79ca4f648C297 on robinhood-chain. [claim S21 S25 S19]

Statics Operators NFT (StaticsGenesis, STATOPS): 0xad5E9F96A91D1A6F550580b157af2068A0e8F0BE on robinhood-chain. [claim S22 S25 S19]

Doppler pool initializer hook (STATICS/WETH canonical pool hook): 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 on robinhood-chain. [claim S23 S25]

## Control

_Research pending._

## Security

`owner()` on the STATICS token returns Airlock `0xeb7C…0862`. Factory source is the Airlock-gated DopplerERC20V1Factory. Genesis JSON lists governance `0x603A8A2f…b9Ff` and `governanceOwnershipAccepted: false`. Docs put both future Diamonds under one StaticsTimelock with a seven-day mainnet default. SECURITY.md says repository tests are not an external audit and the broader diamonds need independent review before production use. No audit report URL was located this pass. [verified S19 S25] [claim S29 S30] [unknown]

## Engineering

_Research pending._

## Team

Contracts and docs are published under EqualFi Labs at github.com/EqualFiLabs/statics. The official handle is @StaticsProtocol; the bio carries the STATICS CA. @hooftly posts as a builder tagged to @staticsprotocol and @EqualFiLabs. Named legal entity, signer identities and whether the governance address is a completed Safe were not established beyond the genesis JSON roles. Telegram `t.me/EqualFi` appears on DexScreener and is not confirmed from the site this pass. [verified S14 S25 S27] [claim S23]

## Product and economics

STATICS is an ERC-20 at `0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd`, an EIP-1167 clone of DopplerERC20V1. The launch transaction called Airlock.create. The live book is Uniswap v4 STATICS/WETH pool `0xe79228…e8a` with WETH `0x0Bd7D308…AD73`. [verified S15 S20 S23]

Docs separate that Genesis layer from the later basket, Dollar, lending and general-pool Diamonds. The 30 Aug official quote says the DEX is not live and credit is not enabled. Testnet Diamond and testnet STATICS addresses are empty on chain 4663. [verified S19 S32] [claim S13 S31]

Operators are an ERC-721 named Statics Operators (`STATOPS`) at `0xad5E…F0BE`. The Genesis vault is `0x8AAA…C297`. Docs assign 180,000 STATICS of gross backing per circulating Operator and split IDs 1–5000 (vault) from 5001–5555 (treasury vesting). [verified S21 S22] [claim S28]

Blockscout holders_count is 1026 with total supply 1,000,000,000 × 1e18. DexScreener STATICS/WETH Uniswap v4 liquidity.usd is 14246101.38, volume.h24 3477557.3, fdv 22501108 as of 2026-09-02T22:55:00Z. Gecko prints the same pool created 2026-08-27T19:24:28Z with reserve_in_usd -3408657.19 and volume_usd.h24 3415619.05, dex id bankr-robinhood. Genesis epoch end in the manifest is 2026-09-11T11:59:00Z. [verified S16 S23 S24] [claim S25]

## Communications

Official account posted a MCG Live booking for @hooftly [claim S33]

Official account quoted the MemeFi basket-arbitrage thesis [claim S34]

@hooftly posted the MemeFi STATICS/stock-pair thesis [claim S35]

Official account quoted the STATICS credit explainer [claim S36]

Official account posted that Operators are available [claim S37]

Official account quoted the DEX-not-live Genesis explainer [claim S31]

## Findings

Token owner-only functions sit on the shared Doppler Airlock. The published genesis manifest still has governance ownership unaccepted. DexScreener prints about $14.25M of STATICS/WETH liquidity while Gecko prints a negative reserve for the same pool id. The hook DEX and credit paths the site describes were still marked not live in the 30 Aug official quote. [claim S12]

- Token owner-only functions sit on shared Doppler Airlock, which also owns other RH tokens including $AI. [verified S19]
- Genesis JSON still records governance ownership as unaccepted. [claim S25]
- STATICS/WETH liquidity is not one number across aggregators, and Gecko's reserve print is negative. [verified S23 S24]
- Hook DEX and credit were still described as not live on 30 Aug; presenting baskets, USDstx or 95% LTV credit as live would overstate the rollout. [claim S13 S31]
- No independent audit report was located. [unknown]

- Receipts: site, rollout, tokenomics, operators, timelock, testnet page, GitHub README, SECURITY.md, genesis JSON, Blockscout, RPC, DexScreener, Gecko and the cited X posts were opened on 2026-09-02 and excerpts copied from those pages. [verified S12 S13 S19 S23 S25]
- Numbers: DexScreener and Gecko figures are aggregator chain-slice prints for the STATICS/WETH pool, not an explorer reproduction of PoolManager inventory. [verified S23 S24]
- Adversarial: the strongest contrary reading is that Statics is another LONG/Doppler memecoin with docs for an unreleased basket protocol. Airlock.create, the verified Genesis vault/Operators, the mainnet genesis JSON, and empty testnet Diamond code on 4663 keep Genesis live and the Diamond suite separate. Shared Airlock with $AI is recorded as a possible match, not a merge. [inference S20 S25 S19]

## Sources

- S12 — Official site.
- S13 — Rollout and availability.
- S14 — X account @StaticsProtocol.
- S15 — Address 0x2d8d…EAdd.
- S16 — Token 0x2d8d…EAdd.
- S17 — DopplerERC20V1 implementation 0x3Be8…C599.
- S18 — DopplerERC20V1Factory 0x1B37…b69a.
- S19 — eth_getCode / owner / name / symbol at block 52942780.
- S20 — Launch tx 0x4ab656be….
- S21 — StaticsGenesisVault 0x8AAA…C297.
- S22 — StaticsGenesis Operators 0xad5E…F0BE.
- S23 — Token pairs API 0x2d8d…EAdd.
- S24 — STATICS/WETH pool API.
- S25 — Robinhood mainnet genesis manifest.
- S27 — statics README.
- S28 — Operators overview.
- S29 — Timelock and roles.
- S30 — SECURITY.md.
- S31 — Scratching the surface of Statics Protocol.
- S32 — Robinhood testnet deployment (not mainnet Genesis).
- S33 — MCG Live booking.
- S34 — MemeFi 🤝 $STATICS.
- S35 — MemeFi basket / stock-pair thesis.
- S36 — Credit via $STATICS.
- S37 — Operators are available.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T22:59:00Z; methodology_version: proofline-v1.0.
