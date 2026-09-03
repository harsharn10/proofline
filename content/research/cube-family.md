---
slug: cube-family
coverage: stub
methodology_version: proofline-v1.0
---

# cube.family — research record

## Identity

Cube Family is classified as Programmable-hook launchpad.

Cube Family is a token launchpad on Robinhood Chain. A launch is one `deployCoin` transaction: TokenDeployer CREATE2-deploys an ERC-20 and Factory opens a Uniswap v4 pool with CubeHook. There is no bonding curve and no graduation. Swap fees split 80/20 on-chain (CREATOR_SHARE_BPS 8000) to holders or the creator, with the 20% platform share pushed to CubeFeeVault. The handle is @CubeFamilyX; the named site is cube.family.

Themes: launchpad

## Deployment

Factory: 0x47b495aae1f4E7f233CD50c6f49E83098be8d210 on robinhood-chain. [verified S8 S9 S10 S17]

TokenDeployer: 0x3b1FC108635465bcDdeAD7f19Ba65808f2768B3b on robinhood-chain. [claim S8 S11]

CubeHook: 0x6EB98e97D0efaEb784CA4E8Ee55F7bFb5E5800cC on robinhood-chain. [verified S8 S12 S14]

CubeFeeVault: 0x72362D60d6148A07EF3C27be298394219efd542a on robinhood-chain. [claim S5 S8 S13]

ClaimRouter: 0xE9C3DC2dfa5AcB1B1e81fB09942A9985Dab6089D on robinhood-chain. [claim S8 S21]

Cube genesis token: 0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000 on robinhood-chain. [verified S4 S8 S15 S16]

Factory / CubeHook / CubeFeeVault owner(): 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb on robinhood-chain. [verified S8 S13 S20]

## Control

`owner()` on Factory, CubeHook, and CubeFeeVault returns 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb. That address has no code and created the Factory. `pendingOwner()` reverts. None of the application contracts are ERC1967 proxies. CubeHook is verified but `is_fully_verified` false. No timelock address was located. [verified S8 S9 S12 S20]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@CubeFamilyX names cube.family in the website field. Verified contract headers name cube.family plus x.com/CubeFamilyTG and t.me/CubeFamilyTG. cube.family timed out, so HTML did not confirm twitter:site. No GitHub org or user. Flag unconfirmed-official. [claim S1 S10 S19 S22]

## Product and economics

Verified Factory: `deployCoin` checks `publicDeployEnabled` or `msg.sender == owner()`, require an allowlisted quote, CREATE2-deploys via TokenDeployer, calls `ICubeHook.setTokenFee`, emits `TokenLaunchConfig`, then `provideLiquidityV4` against Uniswap v4 PoolManager 0x8366a39c…0951 with CubeHook in the PoolKey. Holder mode versus creator mode is a boolean at launch. Native ETH quote cannot be toggled off. [verified S10] [claim S2]

RPC `tokenCount()` 62 at block 53160839. Latest inbound `deployCoin` this pass is 2026-08-21T11:41:13Z. Genesis CUBE 0xBE2fBD69…Ce1000 is a factory output (holder mode, ETH quote) with Blockscout `holders_count` 85 and supply 1_000_000e18. 15 Aug handle posts claimed 75k volume / 500 platform revenue; those figures were not reproduced as a chain-slice metric this pass. Llama cube-family 400. [verified S8 S15 S18] [claim S7 S23]

## Communications

@CubeFamilyX posts that cube.family is live [claim S2]

@CubeFamilyX posts $CUBE not live, then $CUBE IS LIVE with CA [claim S3 S4 S16]

@CubeFamilyX posts protocol-revenue vault address [claim S5]

## Findings

`owner()` on Factory, CubeHook, and CubeFeeVault is one externally owned account with no code. Verified source lets that address replace the hook, replace the vault, pause public deploy, and withdraw vault balances. There is no timelock. cube.family timed out this pass, so the live UI was not re-read. [verified S8 S10 S20]

- Factory, CubeHook, and CubeFeeVault share one EOA owner with hook-replace, vault-replace, and vault-withdraw. [verified S8 S10]
- CubeHook source is only partially verified. [verified S12]
- cube.family did not respond this pass; official UI and analytics were not re-read. [claim S1]
- X Latest from:CubeFamilyX returned no posts this pass. [claim S1]
- No audit report URL. [unknown]
- Llama `protocol/cube` is a different Solana DEX. [claim S23]

- Receipts: X profile and recovered 15 Aug posts, Telegram og tags, Blockscout api/v2 address/token/tx/source, RPC, GitHub 404, and Llama GETs were opened on 2026-09-03; cube.family timed out. Excerpts copied from those responses. [verified S8 S9 S10]
- Numbers: tokenCount, CREATOR_SHARE_BPS, bytecode lengths, nonces, and owner() are chain 4663 RPC. holders_count 85 is the Blockscout token endpoint, not a Gecko figure. [verified S8 S15]
- Adversarial: strongest contrary reading is that 0x47b495aa…d210 is a leftover factory and new launches use a different pad, or that Cube Family is Hook.family / Pons.family. Verified source header names cube.family; RPC cubeHook and feeVault match Blockscout names CubeHook and CubeFeeVault; Factory address is not Coinbarrel 0x4234…e70 or Klik 0x16cF…0dd7. [inference S9 S10]

## Sources

- S1 — Cube profile.
- S2 — cube.family is live.
- S3 — $CUBE is not live yet.
- S4 — $CUBE IS LIVE.
- S5 — protocol revenue vault.
- S7 — 12 hours since launch.
- S8 — eth_getCode / owner / cubeHook / tokenCount / CREATOR_SHARE_BPS.
- S9 — Address 0x47b495aae1f4E7f233CD50c6f49E83098be8d210.
- S10 — Smart contract contracts/factory.sol.
- S11 — Address TokenDeployer 0x3b1FC108…8B3b.
- S12 — Address CubeHook 0x6EB98e97…00cC.
- S13 — Address CubeFeeVault 0x72362D60…542a.
- S14 — eth_getCode / owner / factory CubeHook.
- S15 — Token Cube / CUBE 0xBE2fBD69…Ce1000.
- S16 — CUBE deployCoin transaction.
- S17 — Factory creation transaction.
- S18 — Factory inbound transactions.
- S19 — t.me/CubeFamilyTG.
- S20 — Address 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb.
- S21 — Address ClaimRouter 0xE9C3DC2d…089D.
- S22 — orgs/cubefamily.
- S23 — protocol/cube-family and protocol/cube.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
