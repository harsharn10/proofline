---
slug: nudes
coverage: stub
methodology_version: proofline-v1.0
---

# NUDES / Send Nudes — research record

## Identity

Send Nudes is classified as Stock-paired token.

Send Nudes is a SNAP-quoted memecoin on Robinhood Chain. A user swaps NUDES for Snap Inc. Robinhood Token in a Uniswap v4 pool created in one o1.exchange factory transaction. @SendNudesRH publishes the contract. The token is not SENDNUDES at 0xaa23…1e18.

Themes: memecoin, stock-paired:SNAP

## Deployment

NUDES token (Send Nudes): 0xbe98b75361935b18d688409424a869a4C3dC7401 on robinhood-chain. [verified S1 S2 S4]

o1 historical RWAERC20LaunchpadFactory (createLaunch): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [claim S4 S5]

Historical LaunchHook (launch mint recipient): 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC on robinhood-chain. [claim S4 S16]

Snap Inc. Robinhood Token (quote): 0xF6589F11Bc40b669e584073F428B05562F568733 on robinhood-chain. [claim S4 S9]

## Control

`owner()` on the token returned empty. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. [verified S1 S2 S5 S16]

The createLaunch sender is `0x0736…1021`, tagged eip7702 with 23 bytes of code. CreatorRegistered points at that address. Who can move creator-fee rights was not read on the historical factory this pass. [claim S4]

## Security

No audit report URL was located on the X profile or the token explorer page this pass. [unknown]

## Engineering

_Research pending._

## Team

@SendNudesRH display name is Send Nudes. The bio publishes CA `0xbe98…7401`. DexScreener socials list that handle and no website. The handle posted Send nudes @o1_exchange on 2026-09-02. No official domain or GitHub was located. Named operators were not established beyond the eip7702 caller. [claim S10 S11] [verified S6]

Census has no nudes / send-nudes row. possible_matches is empty because o1-exchange is not a census slug. [claim S2]

## Product and economics

$NUDES is an ERC-20 at `0xbe98b75361935b18d688409424a869a4C3dC7401`. The launch book is Uniswap v4 NUDES/SNAP (`0x3839…d552`) with quote `0xF6589F11Bc40b669e584073F428B05562F568733`. [verified S1 S4 S6]

The token was created on 2026-09-01T19:37:25Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Send Nudes / NUDES and quoted SNAP. `Launched` records pool id `0x3839…d552`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token. [verified S4 S5]

DexScreener also lists NUDES/USDG Uniswap v4 books and a NUDES/WETH Uniswap v3 book. SNAP remains the launch quote. [verified S6]

SENDNUDES `0xaa23…1e18` is an EIP-1167 token with holders_count 3 and a SNAP book of about $21k. A second Send Nudes at `0xDda2…1E18` is an EIP-1167 with holders_count 6. They are not this CA. [verified S14 S15] [claim S17]

Gecko NUDES/snap at 2026-09-03T03:31Z: reserve $464,998.79, 24h volume $6,336,142.84, pool created 2026-09-01T19:37:25Z. [verified S7]

DexScreener NUDES/SNAP Uniswap v4 at 2026-09-03T03:30Z: liquidity $427,508.50, 24h volume $6,473,717.36, market cap $10,805,902. Those two liquidity figures are not combined. [verified S6]

Gecko token 24h volume $15,127,315.96 is the all-pools figure, not the SNAP book. Blockscout holders_count 5,750. RPC totalSupply 1e27 (1 billion, 18 decimals). [verified S2 S8 S1]

## Communications

@SendNudesRH posted Send nudes @o1_exchange [claim S11]

@xueqiu88 posted Send Nudes CA as an o1 launch [claim S13]

@SendNudesRH posted Send $NUDES to squeeze $SNAP [claim S12]

## Findings

Token source is unverified and the Blockscout address page still has a null creator, so a reader who only opens that page cannot see the factory. Gecko NUDES/snap reserve and DexScreener NUDES/SNAP liquidity are different prints for the same pool id. Secondary USDG and WETH books exist; a card that uses all-pools volume would overstate the SNAP book. [claim S10]

- Token source is not verified; the address page still shows a null creator. [verified S2]
- NUDES/SNAP liquidity is $427.5k on DexScreener and $465.0k on Gecko for the same pool id. [verified S6 S7]
- All-pools Gecko volume is $15.1M; the SNAP book is about $6.3M. [verified S7 S8]
- SENDNUDES and a six-holder NUDES EIP-1167 share the SNAP quote and can be opened by ticker search. [verified S14] [claim S17]
- No audit report was located this pass. [unknown]

- Receipts: RPC, Blockscout address/token/tx/factory/hook/SNAP/SENDNUDES/other NUDES, DexScreener token and SENDNUDES search, Gecko pool and token, @SendNudesRH profile and two posts, and @xueqiu88 were opened on 2026-09-03; excerpts are copied from those responses. [verified S1 S2 S4 S6 S7]
- Numbers: Gecko reserve and DexScreener liquidity are separate SNAP-book figures, not averaged. $15.1M is Gecko all-pools volume. Holders is Blockscout holders_count. [verified S2 S6 S7 S8]
- Adversarial: the strongest contrary reading is that SENDNUDES 0xaa23…1e18 or NUDES 0xDda2…1E18 is this name, or that the token came from the current o1 factory 0xcE9C…5B0d. Different CAs, symbols, and holder counts argue against the first; the Launched log is on 0xe64A…F297 and current-factory topic1 search returned 0 logs. [verified S4 S14 S15]

## Sources

- S1 — eth_getCode / name / symbol / supply at block 53101486.
- S2 — Address 0xbe98…7401 Send Nudes.
- S4 — Tx 0x77bb0366… createLaunch Send Nudes.
- S5 — Address 0xe64A…F297 RWAERC20LaunchpadFactory.
- S6 — NUDES token pairs on robinhood.
- S7 — NUDES/snap pool API.
- S8 — Send Nudes token API.
- S9 — SNAP 0xF658…8733 Snap Inc. Robinhood Token.
- S10 — Send Nudes profile.
- S11 — Send nudes @o1_exchange.
- S12 — Send $NUDES to squeeze $SNAP.
- S13 — Rabbit and Send Nudes CAs on o1.
- S14 — SENDNUDES token search.
- S15 — Address 0xaa23…1e18 SENDNUDES.
- S16 — Address 0x778b…EaCC LaunchHook.
- S17 — Address 0xDda2…1E18 same-name NUDES.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
