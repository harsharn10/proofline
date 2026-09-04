---
slug: cashbird
coverage: stub
methodology_version: proofline-v1.0
---

# CASHBIRD — research record

## Identity

cashbird is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against the GLD rail. LongLauncher deploys cashbird (CASHBIRD) in one create call and seeds the CASHBIRD/GLD book. Traders buy and sell CASHBIRD against SPDR Gold Trust • Robinhood Token. No official site or handle was filed this pass.

Themes: memecoin, stock-paired:GLD, rwa

## Deployment

CASHBIRD token (EIP-1167 DopplerERC20V1 clone): 0x38C8f642A04FEaC9899990276b4207fE4F621e18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S4 S5 S17]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S4 S6 S15]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6]

SPDR Gold Trust • Robinhood Token (pair quote / rail): 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e on robinhood-chain. [verified S1 S6 S7 S8]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() returns Airlock. Airlock owner() returns 0x21E2…7A66. The create-tx from-address is EIP-7702 delegated (23-byte 0xef0100), not empty code. Lock beneficiaries on the create tx split 5% / 95% between that Airlock owner and the launcher. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified. No audit report URL was located this pass. [verified S15 S17] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was filed. DexScreener info.websites is tinyurl.com/yza4fc3t, which 302s to @vladtenev 1905370015995728101 (Cash delivery ... as it was written, 2025-03-27). DexScreener socials list @Cashbirdonlong; that bio embeds CA 0x38C8…1e18. Gecko token info twitter_handle is null. @cashbirdRH bios a different CA. Flag unconfirmed-official, third-party-link, and handle-collision. [claim S1 S11 S12 S14 S16]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xE5b9…4436 at 2026-09-01T21:50:40Z minted cashbird / CASHBIRD supply 1e9*1e18 into Uniswap v4 poolId 0xf25f…fdfb quoted against GLD 0xC9a9…FC4e. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. Airlock getAssetData numeraire is that GLD. [verified S4 S5 S6]

DexScreener labels the primary book Uniswap v4 CASHBIRD/GLD. Gecko names the same pool CASHBIRD / gld with dex bankr-robinhood. Secondary CASHBIRD/USDG and CASHBIRD/ETH books exist with far less liquidity than the GLD book. [verified S1 S2]

GET /rhj/assets (194 assets) has an active GLD row at this address. Blockscout token name for the quote is SPDR Gold Shares • Robinhood Token; RPC and the registry say SPDR Gold Trust • Robinhood Token. Same address. [verified S6 S7 S8]

CASHBIRD/GLD Uniswap v4 24h volume is 1354268.54 USD and reserve_in_usd is 101866.43 at 2026-09-03T03:50:00Z from the Gecko pool endpoint. fdv_usd is 151295.61. Gecko token volume_usd.h24 is 1368442.76 across all pools, not the GLD book. [claim S2 S3]

DexScreener same pair: liquidity.usd 101180.42, volume.h24 1441418.67, fdv/marketCap 156513. Blockscout holders_count 1667. Pair created 2026-09-01T21:50:40Z. Assignment lead of liq ~$100,757 / vol ~$1,450,733 is close to this DexScreener slice. [claim S1 S4]

UBIK/GLD printed liquidity.usd 266064.38 volume.h24 2493894.07. SCHIFFY/GLD printed 282378.39 / 916549.85. Distinct bases. [claim S9 S10]

## Communications

@Cashbirdonlong quoted @vladtenev Enjoy the gold [claim S11]

DexScreener website tinyurl resolves to 2025 Vlad Cash delivery post [claim S12]

Third-party netlify claim portal posted for the CA [claim S13]

## Findings

USD liquidity figures on the CASHBIRD/GLD book count both sides, and the quote side is GLD, not USDG. Several other robinhood tokens use the CASHBIRD ticker, including 0xF317…84B9/GLD and Cash Delivery Bird 0x9155…b2cc. DexScreener website is a TinyURL to a 2025 Vlad post, not a project domain. [claim S7]

- Quote token GLD is a Robinhood Stock Token rail; pool USD reserve is CASHBIRD plus GLD, not a USDG backstop. [verified S7 S8]
- Gecko reserve and DexScreener liquidity for pool 0xf25f…fdfb disagree on volume and fdv this pass. [claim S1 S2]
- CASHBIRD ticker is reused by other 4663 mints. [claim S14 S18]
- No official handle or domain this pass; TinyURL is a third-party-link; a netlify claim URL was posted. [claim S12 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/GLD and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token/search/UBIK/SCHIFFY, Gecko pool/token/info, /rhj/assets, TinyURL, @Cashbirdonlong, @cashbirdRH, and the claim-portal post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S7]
- Numbers: 1354268.54 is the Gecko CASHBIRD/gld pool 24h volume, not the 1368442.76 token all-pools figure. Reserve 101866.43 is that pool. DexScreener 1441418.67 / 101180.42 is the same pair, different aggregator. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that CASHBIRD is UBIK or SCHIFFY because all three quote GLD, or that it is Bankr because Gecko labels dex bankr-robinhood. Bases differ, and the create transaction calls LongLauncher.create. [inference S2 S5 S9 S10]

## Sources

- S1 — latest/dex/tokens CASHBIRD.
- S2 — CASHBIRD/gld Uniswap v4 pool.
- S3 — cashbird token.
- S4 — Token 0x38C8…1e18 cashbird / CASHBIRD.
- S5 — create tx 0x4e8a2bee…9839.
- S6 — eth_getCode, name, symbol, owner, Airlock getAssetData.
- S7 — GET /rhj/assets Stock Token registry.
- S8 — Token 0xC9a9…FC4e GLD.
- S9 — UBIK token pairs (same-stock GLD, not CASHBIRD).
- S10 — SCHIFFY search (same-stock GLD, not CASHBIRD).
- S11 — Cashbird profile.
- S12 — tinyurl.com/yza4fc3t -> Cash delivery post.
- S13 — $CASHBIRD claim portal is open.
- S14 — Cash Bird profile (different CA).
- S15 — DopplerERC20V1 0x3Be8…C599.
- S16 — cashbird token info (no handle).
- S17 — DopplerERC20V1Factory 0x1B37…b69a.
- S18 — search CASHBIRD other mints.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:55:00Z; methodology_version: proofline-v1.0.
