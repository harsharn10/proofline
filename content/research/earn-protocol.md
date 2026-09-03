---
slug: earn-protocol
coverage: stub
methodology_version: proofline-v1.0
---

# EARN — research record

## Identity

EARN is classified as Savings vault.

A yield layer for tokenized stocks on Robinhood Chain: deposits go into Uniswap v4 strategy vaults or into permissionless Omnipools of up to eight tokens, and swap fees accrue to the position. Users deposit a stock token, USDG or ETH on earnonhood.com, receive vault or pool shares, and withdraw by burning those shares. @EARNONHOOD runs the app. $EARN is a Doppler-cloned ERC-20; the lead book is EARN/SPY.

Themes: vault, rwa, stock-paired:NVDA, lending, memecoin

## Deployment

EARN token (DopplerERC20V1 EIP-1167 clone): 0xa3b6aee90017b72c0812dc1e013de70eb2917ba3 on robinhood-chain. [verified S11 S12 S13 S15 S27]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S15]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S13 S14]

Airlock (token owner): 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 on robinhood-chain. [claim S16 S27]

Airlock owner Safe (SafeL2 proxy): 0x21E2ce70511e4FE542a97708e89520471DAa7A66 on robinhood-chain. [claim S17 S27]

NVDA/USDG Uniswap v4 vault (NvdaUsdgV4VaultV6): 0x0059F82A76B1Cb261ad71fA117a36CC0BB3Dfd6e on robinhood-chain. [verified S8 S18 S27]

NVDA/USDG single-token zap (NvdaUsdgV4ZapV6): 0xD47D1187044B40DB1375ce60682AAC00a5356EFb on robinhood-chain. [claim S8 S19]

GME/USDG vault (GME-USDG Vault V6): 0x2D26567eE8A4A24eaE17E8385380543E810Dd25a on robinhood-chain. [verified S8 S20 S27]

GME/USDG single-token zap: 0xb255934707e0796A8da4af7342002F8ef24d9f33 on robinhood-chain. [claim S8 S21]

EARN staking contract: 0xeE7abf316E2824FbFB73aa3EA61217Dd600bD051 on robinhood-chain. [claim S22 S37]

EARN Morpho VaultV2 (EARNVAULT / USDG): 0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d on robinhood-chain. [verified S23 S24 S27]

Steer SPCX/USDG Uniswap v4 vault (BeaconProxy): 0x57b9b90610a4b9205c57fab92080e9cfbe7229f6 on robinhood-chain. [claim S25 S39]

STOCK MEMES Omnipool (MEMESTOCKS): 0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6 on robinhood-chain. [verified S26 S30 S27]

Protocol EOA (vault, stake and Morpho owner): 0x75741D131AbdD3973d6bA00f09948C15D138059d on robinhood-chain. [claim S18 S27]

## Control

Token `owner()` is Airlock 0xeb7c…0862. Airlock `owner()` is SafeProxy 0x21E2…7A66, implementation SafeL2, `getThreshold()` 3 of 6 owners. That Safe is shared launch infrastructure (the same Airlock owns the Statics and Artificial Inu tokens) and is not the vault operator. [verified S16 S17 S27]

NVDA vault, GME vault, stake and Morpho vault `owner()` return EOA 0x75741D131AbdD3973d6bA00f09948C15D138059d (empty code). The same EOA created the NVDA vault, both zaps, the GME vault and the stake contract. Morpho curator UI names it owner, curator, allocator and 20% performance-fee recipient. No timelock address was opened on that path. NvdaUsdgV4VaultV6 constructor args set 0x75741d… three times. [verified S18 S24 S27]

The stake page labels 0xeE7a…D051 as a verified contract; Blockscout `is_verified` is false. GME vault and the posted Omnipool are also unverified. Steer is a verified BeaconProxy shell; the implementation was not opened. [verified S22 S20 S26] [claim S37]

## Security

No audit report URL was located on the site, docs, X profile or DexScreener token info. [unknown]

## Engineering

_Research pending._

## Team

@EARNONHOOD bio carries CA 0xa3b6…7ba3 and links earnonhood.com. DexScreener token metadata lists the same site, docs and handle. Docs live on that host and link the NVDA and GME vaults on Blockscout. [verified S8 S9 S10]

No legal entity is named on the site or docs. No public repository was linked. GitHub search earnonhood / NvdaUsdgV4VaultV6 did not return a project repo. [unknown]

handle-collision: Earn HooD @earnhood (24 followers) is a different handle. Site and DexScreener name @EARNONHOOD only. [claim S36]

Census LONG, Statics and Artificial Inu share the Doppler/Airlock factory that created the token. They do not share earnonhood.com, the vaults, or this CA. Vynex is another savings-vault row; Bankr is a relationship the account posted, not a shared identity. [inference S13 S14]

## Product and economics

$EARN is a fixed-supply ERC-20 (100,000,000,000e18) named EARN / EARN. Verified source is an EIP-1167 clone of DopplerERC20V1. Launchpad is DopplerERC20V1Factory / Airlock, not Pons. Creation tx 0xd923b6… is EntryPoint.handleOps at 2026-07-23T16:16:15Z. Pair asset on the lead book is SPY 0x117cc213…4C0C. Venue is Uniswap; DexScreener pairAddress 0x1fb9a450…3395b is a 32-byte v4 pool id, not a 20-byte contract. Extra Uniswap EARN/ETH and EARN/USDG books exist. [verified S11 S13 S14 S10]

Docs describe strategy vaults: deposit a stock token, USDG or both, receive proportional shares, the strategy places liquidity in an active market, swap fees stay in the share. Fee split 85% vault / 15% strategy on newly collected fees. Single-token zaps swap the missing leg. Withdrawal burns shares for a proportional slice of both assets and does not promise the original mix. NVDA/USDG vault 0x0059F8…fd6e is verified NvdaUsdgV4VaultV6; its ERC-20 name is NVDA-USDG Vault Test V6. GME/USDG vault 0x2D2656…d25a exists with code and is unverified. [verified S18 S20] [claim S8]

Omnipools are a separate AMM: 2–8 tokens in one pool, fixed 0.3% swap fee, 90% of fees to LPs and 10% to EARN, no pause or fee-manager role on the create page. STOCK MEMES / MEMESTOCKS at 0x00e7…38A6 is the one pool CA posted this pass (AI, BONER, MOO, SPACEHOOD, OPTIMUS). Zaps that split ETH or USDG across the basket are posted as Rialto-routed. [verified S26] [claim S31 S40]

A Morpho VaultV2 at 0x8046…771d takes USDG and issues EARNVAULT shares. A Steer BeaconProxy at 0x57b9b9…229f6 is the selected SPCX/USDG automated range. The stake page says protocol fees buy EARN for stakers; it printed 0 EARN staked and no active epoch this pass. [verified S23 S25] [claim S37 S39]

DexScreener Uniswap EARN/SPY 0x1fb9a450… at 2026-09-02T23:40:00Z: liquidity.usd 324223.38; volume.h24 461012.52; marketCap 2889181; fdv 2889181. That is the token pair, not protocol TVL. [claim S10]

Blockscout holders_count 2030. Total supply 100,000,000,000e18. [verified S12]

@EARNONHOOD posted TVL $200k on 2026-09-02 and $112k on 2026-08-31 ($52k Omnipools, $60k automated Uniswap v4 vaults). The site header prints an em dash. Morpho vault totalAssets is 144.040224 USDG. No DefiLlama protocol row for earnonhood was listed. [claim S28 S32 S35] [verified S24]

Stake page printed TOTAL STAKED 0 EARN and no active epoch. NVDA vault holders_count 8; GME vault 2; Omnipool 2; Steer vault 14; Morpho EARNVAULT 3. [claim S37] [verified S18 S20 S23 S25 S26]

## Communications

Official account posts TVL crossed $200k [claim S28]

Three new Omnipools posted live [claim S29]

@0xDeployer names EARN stock-paired vaults [claim S34]

STOCK MEMES Omnipool posted live [claim S30]

TSLA, QQQ and RDDT vaults posted live [claim S41]

Account posts vault TVL crossed $112k [claim S32]

Omnipool zaps posted live via Rialto [claim S31]

## Findings

Strategy vault, stake and Morpho `owner()` values are one EOA with empty code. Docs give that path rebalance, pause and fee-collection rights; GME vault and stake source are unverified, so those limits are unread. [verified S18 S22] [claim S8]

Official TVL ($200k, then $112k) is an account post. Morpho holds 144.04 USDG. The EARN/SPY book is a different number. Mixing those slices overstates what any one contract holds. [claim S10 S28] [verified S24]

The word Earn also names Robinhood's in-app Morpho USDG product, which has no EARN token. Pairing that product with this CA mixes two systems. [claim S9 S29]

- Vault, stake and Morpho owner is one EOA; no timelock was opened. [verified S18 S27]
- GME vault, stake and Omnipool source are unverified; the stake page still says verified. [verified S20 S22] [claim S37]
- Posted TVL, Morpho 144 USDG and the EARN/SPY book are different slices. [claim S10 S28] [verified S24]
- Name collision with Robinhood Earn (in-app Morpho USDG, no token). [claim S9]
- No audit report was located. [unknown]
- Permissionless Omnipools can include unaudited ERC-20s; the create page says a listing is not an endorsement. [claim S40]

- Receipts: earnonhood.com, /docs, /stake, /lend, /steer, /omni/create, X profile and seven posts, @0xDeployer, DexScreener, Blockscout token/tx/factory/Airlock/Safe/vaults/zaps/stake/Morpho/Steer/Omnipool, Morpho curator, RPC, and Llama protocols list were opened on 2026-09-02 and excerpts copied from the responses. [verified S8 S10 S11 S18 S27]
- Numbers: DexScreener liquidity and 24h volume are the Uniswap EARN/SPY book 0x1fb9a450…, not all EARN pairs and not vault TVL. Holders 2030 is all token holders. Morpho 144.040224 USDG is totalAssets on 0x8046…771d. Official $200k remains class claim. [claim S10 S12 S24 S28]
- Adversarial: the strongest contrary reading is that this is Robinhood Earn, the in-app Morpho USDG product. That product has no EARN token and does not use earnonhood.com; this token, NVDA vault and Omnipool are separate 4663 contracts. A weaker contrary reading is that EARN is only a Doppler memecoin: the token is a Doppler/Airlock clone, but NvdaUsdgV4VaultV6 verified source and Morpho VaultV2 exist with code. [inference S9 S11 S18 S23]

## Sources

- S8 — Docs · EARN on Robinhood Chain.
- S9 — X profile @EARNONHOOD.
- S10 — EARN token pairs on Robinhood.
- S11 — Address 0xa3b6…7ba3.
- S12 — Token page EARN.
- S13 — Creation tx 0xd923b6….
- S14 — DopplerERC20V1Factory 0x1B37…b69a.
- S15 — DopplerERC20V1 0x3Be8…C599.
- S16 — Airlock 0xeb7c…0862.
- S17 — Airlock owner Safe 0x21E2…7A66.
- S18 — NVDA/USDG vault 0x0059F8…fd6e.
- S19 — NVDA zap 0xD47D11…6EFb.
- S20 — GME/USDG vault 0x2D2656…d25a.
- S21 — GME zap 0xb25593…9f33.
- S22 — Stake 0xeE7a…D051.
- S23 — Morpho VaultV2 0x8046…771d.
- S24 — EARN Morpho vault curator page.
- S25 — Steer SPCX vault 0x57b9b9…229f6.
- S26 — STOCK MEMES Omnipool 0x00e7…38A6.
- S27 — eth_getCode, owner, ERC-20 views.
- S28 — TVL just crossed $200k.
- S29 — 3 new EARN Omnipools are live.
- S30 — STOCK MEMES Omnipool live.
- S31 — Zaps are now live for EARN Omnipools.
- S32 — Vault TVL crossed $112k.
- S34 — EARN named as stock-paired vaults.
- S35 — Protocols list search for EARN on Robinhood.
- S36 — User search EARNONHOOD.
- S37 — Stake page.
- S39 — Steer automated vaults.
- S40 — Permissionless Omnipool creator.
- S41 — TSLA QQQ RDDT vaults live.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:50:00Z; methodology_version: proofline-v1.0.
