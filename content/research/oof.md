---
slug: oof
coverage: stub
methodology_version: proofline-v1.0
---

# OOF — research record

## Identity

OOF is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against RBLX. LongLauncher deploys OOF in one create call and seeds the OOF/RBLX book. Traders buy and sell OOF on Uniswap v4. RBLX is the Roblox Robinhood Token rail, not this subject. No official site was located this pass. DexScreener lists x.com/OOFonRH; flag unconfirmed-official.

Themes: memecoin, stock-paired:RBLX, rwa

## Deployment

OOF token (EIP-1167 DopplerERC20V1 clone): 0xeA3b282273E9ab901790694aDD171C2606D71e18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S3 S5]

LongLauncher (create target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S18]

RBLX Roblox Robinhood Token (pair quote / rail): 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 on robinhood-chain. [verified S7 S12 S17]

## Control

token owner() is Airlock. factory() reverts. DopplerHookInitializer Lock splits 5% to 0x21E2…7A66 and 95% to the launcher EOA 0xCa22…e8C. [verified S5 S18]

## Security

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified S1 S2] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is empty. x.com/OOFonRH is listed on DexScreener; the bio says $OOF CTO on Robinhood, powered by @longdotxyz, and $OOF is paired to $RBLX, with no contract in the bio. Flag unconfirmed-official. [claim S7 S13]

RBLX 0xF0C4…1bE8 is the census stock-token rail (GET /rhj/assets). Discovery-inventory lists robloxians at 0xB528…c10D / @RobloxiansPage, also quoted against that rail. Do not merge those CAs. [verified S12 S16]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xCa22…e8C at 2026-07-30T00:31:09Z minted OOF supply 1e9*1e18 into Uniswap v4 poolId 0x694d…4592. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() on the token returns Airlock 0xeb7C…0862. [verified S4 S5 S18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. Secondary OOF/USDG and OOF/ETH books exist on DexScreener with far less liquidity than the RBLX book. Gecko dex id is bankr-robinhood because Doppler/Airlock is shared with Bankr launches; the create tx is LongLauncher. [verified S7 S8 S18]

OOF/RBLX Uniswap v4 24h volume is 1263410.12 USD and reserve_in_usd is 154681.29 at 2026-09-03T03:38:00Z from the Gecko pool endpoint. fdv_usd is 382482.27. Gecko token volume_usd.h24 is 1294777.86 across all pools, not the RBLX book. [claim S8 S9]

DexScreener same pair: liquidity.usd 163516.07, volume.h24 1326686.46, fdv/marketCap 396080. Blockscout holders_count 1663. Pair created 2026-07-30T00:31:09Z. [claim S1 S7]

## Communications

@OOFonRH posted RBLX providing OOF moments since 2006 [claim S13]

@0xBedouin listed RBLX — $oof, $robux as LONG pairs [claim S14]

## Findings

USD liquidity figures on the OOF/RBLX book count both sides, and the quote side is RBLX, not USDG. Gecko labels the pool Bankr; the create target is LongLauncher. Other contracts on this chain reuse the OOF ticker. No bidirectional official handle was located. [claim S12]

- Quote token RBLX is a Robinhood Stock Token rail shared with other pairs, including in-flight ROBLOXIANS. [verified S12 S16]
- Pool USD reserve is OOF plus RBLX, not a USDG or WETH backstop. [claim S7 S8]
- Gecko dex label Bankr does not match the LongLauncher create target. [verified S4 S8]
- No official handle or domain this pass; X is unconfirmed-official. [claim S7 S13]
- Other OOF tickers exist on robinhood. [claim S15]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/Airlock/RBLX and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token, /rhj/assets, @OOFonRH, @0xBedouin, and the discovery-inventory ROBLOXIANS row were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 1263410.12 is the Gecko OOF/RBLX pool 24h volume, not the 1294777.86 token all-pools figure. Reserve 154681.29 is that pool. DexScreener 1326686.46 / 163516.07 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that OOF is ROBLOXIANS, or that it is a Bankr product, or that @OOFonRH is official. ROBLOXIANS is 0xB528…c10D. The create target is LongLauncher. The X bio has no CA. [inference S4 S13 S16]

## Sources

- S1 — Token 0xeA3b…1e18 OOF / OOF.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x3c07188f…cbe9.
- S5 — eth_getCode, name, symbol, owner() on OOF.
- S6 — Airlock 0xeb7C…0862.
- S7 — latest/dex/tokens OOF.
- S8 — OOF/RBLX pool.
- S9 — OOF token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — RBLX providing OOF moments since 2006.
- S14 — Buy LONG pairs & board sit szn.
- S15 — search q=OOF.
- S16 — ROBLOXIANS candidate.
- S17 — Token 0xF0C4…1bE8 Roblox • Robinhood Token / RBLX.
- S18 — create tx logs LaunchCreated / Initialize / Lock.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
