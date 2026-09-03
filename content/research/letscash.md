---
slug: letscash
coverage: stub
methodology_version: proofline-v1.0
---

# LetsCash — research record

## Identity

LetsCash is classified as Uniswap-pool launchpad.

A Uniswap v4 launchpad on Robinhood Chain. One transaction mints a fixed-supply token into a locked v4 pool; a custom hook taxes the quote leg in ETH or USDG, pays the creator, and sends a 0.3% platform share into CASHCAT buys. No bonding curve and no migration. letscash.fun and @letscashfun run it. Distinct from the CASHCAT token.

Themes: launchpad, memecoin, hook

## Deployment

Factory (UUPS ERC1967 proxy): 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661 on robinhood-chain. [verified S4 S6 S8 S12]

Factory implementation (current ERC1967 slot): 0x40250b4C73FC30f8F6ad077744B0124B3f111C28 on robinhood-chain. [verified S10 S12]

Hook (CashCatHookV2): 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC on robinhood-chain. [verified S4 S7 S9 S12]

Factory and hook owner (SafeProxy): 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91 on robinhood-chain. [verified S11 S12]

## Control

Factory 0x5bd1…4661 is an ERC1967 proxy. The implementation slot reads 0x40250b4C…1C28 (unverified, 23567 bytes). The ERC1967 admin slot is empty. owner() returns SafeProxy 0xD2DeFb…9E91; pendingOwner() is zero. The same Safe is owner() on the hook. [verified S6 S10 S11 S12]

## Security

@letscashfun named @SBSecurity_ on 6 Aug and 26 Aug. Llama audits is 0. No report PDF was opened this pass. [claim S19 S21] [unknown]

## Engineering

_Research pending._

## Team

letscash.fun sets twitter:site to @letscashfun and JSON-LD sameAs to https://x.com/letscashfun. @letscashfun posts link letscash.fun/launch and letscash.fun/docs. GitHub org letscashfun publishes the SDK with the factory and hook addresses. Factory and hook deploys trace to EOA 0x0679…0881. [verified S1 S4 S5 S8]

legacy.letscash.fun says early tests ran when the product was branded CashCat. That is pad history, not the CASHCAT token. [claim S23]

## Product and economics

One transaction deploys an ERC-20, seeds a Uniswap v4 pool with the whole supply, locks the liquidity, and can run a first buy. Pools quote ETH or USDG. The pool itself has no LP fee; CashCatHookV2 takes a configurable tax on the quote leg. [claim S2 S4]

Default tax is 1%: 0.7% to the creator (claimable in the quote asset) and 0.3% to the platform. Self-burn mode routes the creator share into buying and destroying the launched token. Fees and the liquidity lock are set at launch. [claim S2 S3]

launchConfigCount() on the factory returned 64 at block 53080668. The SDK treats supply as any whole number from 1 billion to 1 quadrillion against a published config row. [verified S12] [claim S18]

DefiLlama module letscash, Robinhood Chain only, 2026-09-03: DEX volume 24h $2,996,602, all-time $112,045,029.89; fees 24h $91,049; dailyRevenue 24h $11,311. The adapter is marked doublecounted with generic Uniswap v4. [verified S13 S14 S15 S16]

@RHDaily__ on 1 Sep 22:00 UTC listed @letscashfun ninth on a 24h launchpad board at $2.0M. That is the account's board, not the Llama slice. [claim S17]

## Communications

@RHDaily__ lists @letscashfun ninth on 24h pad board [claim S17]

@letscashfun: supply is any whole number from 1B to 1Qa [claim S18]

@letscashfun shipped an airdropper and named an SBSecurity audit [claim S19]

@letscashfun: Indices live via fee-stream recipient [claim S20]

@letscashfun: 1-10% fees, USDG quotes, fee-stream splits [claim S21]

@leakmealpha: @letscashfun rebranded and moved to Robinhood Chain [claim S22]

## Findings

The factory is a UUPS proxy whose current implementation is unverified, so the upgrade path is held by the owner Safe. Liquidity removal is rejected by the hook, so a failed launch cannot be unwound by pulling LP. Platform fees buy CASHCAT; that is not the same object as the CASHCAT token. [claim S1]

- Factory implementation 0x40250b4C…1C28 is unverified; the owner Safe can upgrade the proxy. [verified S6 S10 S12]
- Liquidity is locked by the hook; a launch cannot pull LP. [claim S2 S3]
- No audit report PDF was located this pass, despite two named SBSecurity posts. [claim S19 S21] [unknown]
- Name collision with the CASHCAT token: the hook is named CashCatHookV2 and platform fees buy CASHCAT. [claim S7 S23]
- Llama volume is reconstructed from FeeAccrued and is doublecounted with Uniswap v4. [claim S16]

- Receipts: site HTML (twitter:site @letscashfun), docs, about, legacy, GitHub README and SECURITY.md, Blockscout API v2 for factory, hook, implementation, owner Safe and two creation txs, RPC eth_getCode/eth_call, Llama dexs/fees/revenue APIs and the dimension adapter, and the X posts cited above were opened on 2026-09-03. [verified S1 S4 S6 S7 S12 S13]
- Numbers: 24h and all-time volume, 24h fees and 24h revenue are Llama Robinhood Chain slices, not all-chains totals. Bytecode lengths and launchConfigCount() are eth_getCode/eth_call at block 53080668. [verified S12 S13 S14 S15]
- Adversarial: the strongest contrary reading is that LetsCash is the CASHCAT token, or that it is NOXA, Hookr or pools.trade. CASHCAT is not in the census; the reproduced factory is not the NOXA factory; Hookr is a hook marketplace; pools.trade InstantLaunchStrategy is hookless. [claim S3 S7 S23]

## Sources

- S1 — letscash.fun home.
- S2 — Documentation & Developer Guide.
- S3 — How letscashfun.com works.
- S4 — @letscashfun/sdk README.
- S5 — letscash.fun profile.
- S6 — Factory 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661.
- S7 — Hook 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC.
- S8 — Factory creation tx 0x2b90e5b7….
- S9 — Hook creation tx 0x8e562b48….
- S10 — Factory implementation 0x40250b4C73FC30f8F6ad077744B0124B3f111C28.
- S11 — Owner Safe 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91.
- S12 — eth_getCode / eth_call factory, hook, owner.
- S13 — LetsCash DEX volume summary.
- S14 — LetsCash fees summary.
- S15 — LetsCash dailyRevenue summary.
- S16 — dimension-adapters dexs/letscash.ts.
- S17 — Top Robinhood Chain Launchpads by 24H Volume.
- S18 — Supply is now a range, not a menu.
- S19 — Introducing the airdropper.
- S20 — Indices is now live.
- S21 — First round of updates.
- S22 — @letscashfun rebranded and moved to Robinhood Chain.
- S23 — LEGACY — OUR FIRST BETA TESTS.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
