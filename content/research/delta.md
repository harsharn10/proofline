---
slug: delta
coverage: stub
methodology_version: proofline-v1.0
---

# Delta — research record

## Identity

Delta is classified as Liquidity manager.

A liquidity manager: users deposit a token or LP into a stake or a shaped Uniswap position and collect a share of that pool's swap fees in ETH. Open or join a pool on deltaliquidity.app, claim streamed fees after a protocol cut, and withdraw with no lockup. @deltaliquidity runs the app. DELTA is a Pons v1 launch token, not the vault.

Themes: vault, rwa, memecoin

TL;DR: LP manager on 4663. Docs list ladder v8 and a 7.5% claim fee; deployed fee controls and the app's active manager remain unconfirmed.

## Deployment

DELTA token (PonsLauncherToken): 0xe8ffd7e24187F72afB08d75B1bb13088A989a791 on robinhood-chain. [claim S41]

DELTA/WETH Uniswap v3 pair: 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94 on robinhood-chain. [claim S42 S55]

PonsLaunchFactory (token creator): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [claim S43]

VaultFactory (docs; creates stakes): 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c on robinhood-chain. [claim S39 S44]

VaultFarmFactory (docs): 0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1 on robinhood-chain. [claim S39 S45]

DeltaZap (docs): 0xC0b8eC7589ee49c53305517bFd53BEd708392294 on robinhood-chain. [claim S39 S46]

TwapOracle (docs): 0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C on robinhood-chain. [claim S39 S47]

DeltaPositionBuilder (docs): 0x6235cF6bd8419b34942F4EDDB39C880BD96dD700 on robinhood-chain. [claim S39 S48]

DeltaLadderManager v3 (docs): 0x5cA6214227D1195c4b7b4B96847b8966c688295D on robinhood-chain. [claim S39 S49]

DeltaLadderManager v8 (docs current listing): 0xbCb96b15dC2246D242c879316c86e25e846ad5FB on robinhood-chain. [claim S39 S50]

Llama adapter LADDER_MANAGER: 0x64680254BF644BBdDe394b95129895c13317FeD4 on robinhood-chain. [claim S51]

Llama adapter LADDER_MANAGER_V2: 0xC5941433114BB47a9733CB31a0A3A3dBfF45B418 on robinhood-chain. [claim S52]

Llama adapter ROUTER_V3: 0x46dFEa430d1F069C129E26445319562e29f39C47 on robinhood-chain. [claim S53]

## Control

VaultFactory, VaultFarmFactory and the Llama router return owner 0xf98c…2a1d. Ladder v3, v8 and both Llama ladder managers return owner 0xb1c2…9e69. These reads do not establish every privileged path. [verified S44 S45 S49 S50 S51 S52 S53]

FAQ says that owner can pause and lower fees but cannot raise fees or move staked positions; these bounds remain project claims, not reproduced deployed controls. [claim S39]

## Security

Llama reports audits=0; that field does not establish the absence of an audit. [claim S54]

## Engineering

_Research pending._

## Team

deltaliquidity.app, docs and @deltaliquidity print the same CA. A 2026-09-10 post names @cataction_sol as a frontend hire. No legal entity. [claim S40]

## Product and economics

Stakes attach to one WETH pool and stream rewards over seven days. Pools mint a shaped Uniswap position into a Delta-held NFT. Current docs take 7.5% of claimed fees, never principal; the 2026-09-02 packet recorded 1%. That 7.5% is docs copy, not a reproduced on-chain fee. [claim S39]

Docs list DeltaLadderManager v8 0xbCb9…d5FB above v3. [claim S39]

Both listed ladder addresses have code. [verified S50 S49]

Which manager the app uses for new positions was not established from its JS. [unknown]

Llama reports Robinhood Chain TVL of $9,540.89. DexScreener reports DELTA/WETH v3 liquidity of $829,483.95 and 24h volume of $1,560,235.74. @deltaliquidity posted 2m+ TVL on 9 Sep. [claim S40 S42 S54]

These values are not interchangeable: token-pool liquidity is not protocol TVL, and the project's TVL scope has not been reconciled with Llama's. [inference S40 S42 S54]

## Communications

_Research pending._

## Findings

- VaultFactory and ladder v8 return different owner addresses. [verified S44 S50]
- FAQ says the owner cannot raise fees or move staked positions; deployed limits are unconfirmed. [claim S39]
- Llama TVL, DELTA pool liquidity and the project's TVL claim are different measures, not interchangeable totals. [inference S40 S42 S54]

- Pause, fee and upgrade controls were not established from deployed source this pass. [unknown]
- Treating token-pool liquidity as protocol TVL would conflate different measurements. [inference S42 S54]

- Receipts: collector reports opening docs, X, DexScreener and Llama on 2026-09-10 and recording contract-code and owner reads; a page fetch is not deployment verification. [claim S39 S40 S42 S44 S54]
- Numbers: Llama figure is currentChainTvls Robinhood Chain; DexScreener volume is the v3 pair, not protocol fees. [claim S42 S54]
- Adversarial: v8 could be unused docs while v3 or a Llama adapter still takes new positions; app JS is required. [inference S39 S50]

## Sources

- S39 — Docs.
- S40 — @deltaliquidity profile.
- S41 — eth_getCode DELTA token.
- S42 — DELTA token pairs.
- S43 — eth_getCode PonsLaunchFactory.
- S44 — eth_getCode VaultFactory.
- S45 — eth_getCode VaultFarmFactory.
- S46 — eth_getCode DeltaZap.
- S47 — eth_getCode TwapOracle.
- S48 — eth_getCode DeltaPositionBuilder.
- S49 — eth_getCode ladder v3.
- S50 — eth_getCode ladder v8.
- S51 — eth_getCode Llama LADDER_MANAGER.
- S52 — eth_getCode Llama LADDER_MANAGER_V2.
- S53 — eth_getCode Llama ROUTER_V3.
- S54 — Delta protocol chain slice.
- S55 — eth_getCode DELTA/WETH v3 pair.

## Review metadata

Compiled from WORK-20260910-grok-heavy-delta by grok-heavy as of 2026-09-10T18:30:00Z; methodology_version: proofline-v1.0.
