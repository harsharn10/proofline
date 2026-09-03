---
slug: sender
coverage: stub
methodology_version: proofline-v1.0
---

# SENDER — research record

## Identity

SENDER is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-01 minted SENDER and seeded the SENDER/AMZN book. Traders buy and sell SENDER against AMZN. AMZN is the quote rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Deployment

SENDER token (EIP-1167 DopplerERC20V1 clone): 0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 on robinhood-chain. [verified S1 S4 S6]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S5 S6 S13]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S1 S6 S13]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S5 S6 S14]

Amazon • Robinhood Token (pair quote rail): 0x12f190a9F9d7D37a250758b26824B97CE941bF54 on robinhood-chain. [verified S4 S6 S11 S12]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x8130…5F41 has no code. LaunchCreated reservedUntil 2026-09-02T01:45:59Z has passed. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S13 S14] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search for SENDER returned unrelated handles. Flag unconfirmed-official. [claim S7 S19]

X posts advertised netlify claim portals and a vote page that embed CA 0x4d41…1e18. Flag third-party-link and copypasta-pattern. [claim S16 S17]

## Product and economics

LongLauncher 0x22e9…eeED create from EOA 0x8130…5F41 at 2026-09-01T01:45:59Z minted SENDER / SENDER supply 1e9*1e18 into Uniswap v4 poolId 0x2196d727…e960 quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x8130…5F41 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. Secondary SENDER/USDG and SENDER/VACCINU books exist on DexScreener with far less liquidity than the AMZN book. [verified S5 S6 S7]

SENDER/AMZN Uniswap v4 24h volume is 591540.85 USD and reserve_in_usd is 149128.77 at 2026-09-03T04:24:00Z from the Gecko pool endpoint. fdv_usd is 311941.83. Gecko token volume_usd.h24 is 595110.55 across all pools, not the AMZN book. [claim S8 S9]

DexScreener same pair: liquidity.usd 146162.75, volume.h24 601149.31, fdv/marketCap 317124. Blockscout holders_count 1065. Pair created 2026-09-01T01:45:59Z. [claim S1 S7]

## Communications

@0xBedouin listed AMZN — $Sender among LONG pairs [claim S15]

@nolimit_wealth called $sender the AMZN beta pair on @longdotxyz [claim S18]

X posts advertised netlify claim and vote URLs for CA 0x4d41…1e18 [claim S16 S17]

## Findings

USD liquidity figures on the SENDER/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko and DexScreener disagree on reserve and fdv for the same pool. No official handle was located, so comms surfaces stay unconfirmed-official. Netlify claim and vote URLs that embed this CA are third-party-link / copypasta-pattern. [claim S11]

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; SENDER is not in that registry. [verified S11 S12]
- Pool USD reserve is SENDER plus AMZN, not a USDG or WETH backstop. [claim S7 S8]
- Gecko and DexScreener disagree on reserve and fdv for the same pool. [claim S7 S8]
- No official handle or domain this pass; netlify claim/vote URLs are third-party-link / copypasta-pattern. [claim S7 S16 S17]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AMZN and create tx 0x0412c0bd…8183, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S6 S7 S8 S11]
- Numbers: 591540.85 is the Gecko SENDER/AMZN pool 24h volume, not the 595110.55 token all-pools figure. Reserve 149128.77 is that pool. DexScreener 601149.31 / 146162.75 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that SENDER is an official Amazon or Robinhood product, or that Gecko dex id bankr-robinhood means Bankr launched it. /rhj/assets has no SENDER row, creation is LongLauncher.create, and no official handle or domain was located. [inference S5 S11 S18]

## Sources

- S1 — Token 0x4d41…1e18 SENDER / SENDER.
- S4 — Zero-addr mint of SENDER 1e27.
- S5 — create tx 0x0412c0bd…8183.
- S6 — eth_getCode, name, symbol, owner(), Airlock getAssetData.
- S7 — latest/dex/tokens SENDER.
- S8 — SENDER/AMZN Uniswap v4 pool.
- S9 — SENDER token.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN.
- S13 — DopplerERC20V1 verified source.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — Buy LONG pairs AMZN — $Sender.
- S16 — $SENDER claim page working rn.
- S17 — Attention $SENDER Family vote.
- S18 — $sender beta pair to AMZN on @longdotxyz.
- S19 — User search SENDER.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:27:00Z; methodology_version: proofline-v1.0.
