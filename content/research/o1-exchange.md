---
slug: o1-exchange
coverage: stub
methodology_version: proofline-v1.0
---

# o1.exchange — research record

## Identity

o1.exchange is classified as Uniswap-pool launchpad.

Uniswap v4 launchpad covering Robinhood stock tokens, also live on Base. Creators pick ETH, USDG, or a registered Robinhood Stock Token, sign one factory transaction, and receive a 1 billion fixed-supply ERC-20 in a permanently locked Uniswap v4 pool. o1.exchange runs it at launch.o1.exchange as @o1_exchange.

Themes: launchpad, rwa, memecoin

## Deployment

Robinhood launch factory (current): 0xcE9C48cFa068947f77738c81Be406B53338E5B0d on robinhood-chain. [verified S2 S6 S7 S8]

Robinhood launch hook: 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc on robinhood-chain. [claim S2 S7 S27]

Robinhood fee escrow: 0xc5444b417a04a7E1b9C1E327c7D499803c14E5EF on robinhood-chain. [claim S2 S7]

Robinhood launch token deployer: 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb on robinhood-chain. [claim S2 S7]

Robinhood historical RWA factory (v4): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [claim S2 S16]

Base launch factory (different address; not the RH factory): 0x1176122eb77AD6a2339322Cda7C4D7ea9BfA63dC on base. [claim S2 S7]

Quantum White Fiber Rabbit: 0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901 on robinhood-chain. [verified S16 S18]

Send Nudes: 0xbe98b75361935b18d688409424a869a4C3dC7401 on robinhood-chain. [claim S13 S17 S25]

Cassowary: 0xe5F99b9eEA7B3e3aacc961013582704A76F52052 on robinhood-chain. [claim S14 S19 S26]

## Control

`owner()` on 0xcE9C…5B0d returns 0x5519a8…044D, which has no code. Docs list that address as future-launch governance owner and creator admin. `pendingOwner()` is zero. The same docs list platform fee receiver 0x1cAa…1C90 and restricted price updater 0x8BF6…5F29. [verified S2 S7]

## Security

docs.o1.exchange/launchpad/security lists XORS Launchpad v4 (28 Aug 2026, commit `1d22cfa`) with no critical findings. The page states source review does not independently verify a specific deployment. The PDFs were not opened. [claim S20]

## Engineering

_Research pending._

## Team

@o1_exchange is linked from docs community/socials. o1.exchange sets twitter:site to @o1_exchange. The handle bio is "Onchain Everything Exchange" and names $O. Founder handle @stambouli_o1 is listed on the same docs page. No first-party launchpad contract repository was located. Discord is listed and was not opened. [verified S3 S4 S5]

## Product and economics

A creator signs `createLaunch` (or `createLaunchAndBuy`). The contracts mint a 1 billion fixed-supply token, open a Uniswap v4 pool at the configured start tick, and place the full supply in a hook-owned position that docs say cannot be removed. No paired-asset deposit is required. [claim S1]

Base and Robinhood each use one active factory for both crypto-paired and stock-paired creation. Robinhood's current factory is 0xcE9C…5B0d; Base's is 0x1176…63dC. The Base address has empty code on chain 4663. Docs warn the same-looking address on another chain is not interchangeable. [verified S2 S7]

Documented RH settings: 0.001 ETH creation fee, 20-second anti-snipe, 1% base swap fee split 50/30/20 creator/platform/referrer, configVersion 14. RPC on 0xcE9C…5B0d returned those values. [verified S2 S7]

Rabbit (Quantum White Fiber Rabbit, 0xCD1c…0901) was minted by `createLaunch` on historical factory 0xe64A…F297 against WYFI, the WhiteFiber Robinhood Stock Token. Send Nudes (0xbe98…7401) trades against SNAP on DexScreener; Cassowary (0xe5F9…2052) trades against ETH. Factory creators for NUDES and Cassowary were not on the Blockscout address pages this pass. [verified S16] [claim S13 S17 S14]

Robinhood Chain dailyFees for 2026-09-02 are 411118 USD from Llama's o1 Launchpad breakdown; the all-chains total24h is 448548. Robinhood dailyRevenue for that bar is 220405 USD. Llama's adapter ROBINHOOD suites stop at historical factory 0xe64A…F297 and do not list 0xcE9C…5B0d. [claim S9 S22] [verified S10]

@RHDaily__ posted @o1_exchange at $23.7M 24h launchpad volume on 1 Sep, rank 3. That figure is the ranking post, not the Llama chain slice. [claim S11]

## Communications

@stambouli_o1 posts Robinhood contract upgrade coming [claim S15]

@Robin_Cassowary posts $CASSOWARY tagged @o1_exchange [claim S14]

@xueqiu88 posts Rabbit and Send Nudes CAs on o1 [claim S13]

@RHDaily__ ranks @o1_exchange #3 at $23.7M 24h vol [claim S11]

@o1_exchange posts cbHYPE and cbZEC live on Base [claim S12]

@stambouli_o1 posts 196 Robinhood Stock Tokens on o1 [claim S21]

## Findings

Factory `owner()` is one externally owned account with no pending owner. Liquidity is permanently locked, so a failed launch cannot be unwound by pulling LP. DefiLlama's Robinhood adapter still lists only historical factories, so the published chain-slice fee figure may miss current-factory flow. [claim S4]

- One EOA owns the current RH factory; docs say that owner can change future-launch settings. [verified S7]
- Liquidity is permanently locked in the launch hook. [claim S1]
- Llama RH fees may omit current-factory launches. [verified S10]
- XORS reports were not matched to RH bytecode this pass. [claim S20]
- NUDES and Cassowary factory origin was not reproduced. [claim S25 S26]

- Receipts: docs introduction, production-contracts, socials, security, o1.exchange, @o1_exchange, founder posts, RH Daily, DexScreener, Llama fees/revenue/adapter, Blockscout factory/hook/create txs/tokens, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S2 S6 S7]
- Numbers: 411118 is the Robinhood bar for 2026-09-02, not the 448548 all-chains total24h. 23700000 is the RH Daily ranking figure for 2026-09-01, not Llama. [claim S9 S11]
- Adversarial: the strongest contrary reading is that o1 is Base-only and the RH factory is an unrelated copy. Docs name both chain IDs, Blockscout verifies RWAERC20LaunchpadFactory at the documented RH address, RPC owner matches the documented governance owner, and the Base factory address is empty on 4663. [inference S2 S6 S7]

## Sources

- S1 — Launchpad introduction.
- S2 — Production contracts.
- S3 — Community & Socials.
- S4 — o1.exchange homepage.
- S5 — o1.exchange profile.
- S6 — Address 0xcE9C…5B0d RWAERC20LaunchpadFactory.
- S7 — eth_getCode, owner, config, Base factory on 4663.
- S8 — Factory creation tx 0x332d8f48….
- S9 — o1 Launchpad dailyFees.
- S10 — o1-launchpad fees adapter ROBINHOOD suites.
- S11 — Top Robinhood Chain Launchpads by 24H Volume.
- S12 — cbHYPE and cbZEC live across product lines.
- S13 — Rabbit and Send Nudes CAs on o1.
- S14 — $CASSOWARY tagged @o1_exchange.
- S15 — Robinhood contract upgrade coming.
- S16 — Rabbit createLaunch tx 0x2773f014….
- S17 — Send Nudes pairs on Robinhood.
- S18 — Rabbit pairs on Robinhood.
- S19 — Cassowary pairs on Robinhood.
- S20 — Security and audit.
- S21 — All 196 Robinhood Stock Tokens supported.
- S22 — o1 Launchpad dailyRevenue.
- S25 — Token 0xbe98…7401 Send Nudes.
- S26 — Token 0xe5F9…2052 Cassowary.
- S27 — Address 0x0310…2aCc LaunchHook.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:10:00Z; methodology_version: proofline-v1.0.
