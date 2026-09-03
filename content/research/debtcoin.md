---
slug: debtcoin
coverage: stub
methodology_version: proofline-v1.0
---

# DEBTCOIN — research record

## Identity

DEBTCOIN is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SGOV. LongLauncher deploys Debtcoin (DEBTCOIN) in one create call and seeds the DEBTCOIN/SGOV book. Traders buy and sell DEBTCOIN on Uniswap v4. SGOV is a Robinhood Stock Token rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SGOV, rwa, graduation

## Deployment

DEBTCOIN token (EIP-1167 DopplerERC20V1 clone): 0x55D9bC094C032cE0F4c57Cb09e6AB8F225531E18 on robinhood-chain. [verified S1 S5 S16]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (create tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S15 S16]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S14 S16]

Quote asset SGOV stock token (rail): 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 on robinhood-chain. [verified S6 S10 S13]

## Control

token owner() is Airlock. Deployer 0x4B10…8D76 has no code and is tokenURI fee_receiver plus the 95% Lock beneficiary. The 5% Lock beneficiary is 0x21E2…7A66. [verified S6 S11 S21]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/Airlock.sol, src/LongLauncher.sol, compiler v0.8.26). No audit report URL was located this pass. [verified S2 S3 S14 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. Gecko twitter_handle is null. tokenURI social_links Website is an X status by @IceManDrakee posted one minute before create, with a CA reply six minutes after. Flag unconfirmed-official and third-party-link. Do not file that handle as official. [claim S7 S11 S12 S17]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x4B10…8D76 at 2026-09-02T00:44:30Z minted Debtcoin / DEBTCOIN supply 1e9*1e18 into Uniswap v4 poolId 0x3458…3e6d quoted against SGOV 0x92FD…F9B5. owner() on the token returns Airlock 0xeb7C…0862. pool() returns 0xdead…dead and isPoolLocked is true. [verified S4 S5 S6 S16]

LaunchCreated normalizedTicker DEBTCOIN. PoolManager 0x8366…0951 Initialize uses hooks DopplerHookInitializer 0x4e34…a544. Secondary DEBTCOIN/USDG and DEBTCOIN/ETH books exist on DexScreener with far less liquidity than the SGOV book. Gecko labels the SGOV pool dex bankr-robinhood; DexScreener labels Uniswap v4. [verified S7 S8 S16]

DEBTCOIN/SGOV Uniswap v4 DexScreener liquidity.usd is 213908.99 and volume.h24 is 1593779.02 at 2026-09-03T03:54:00Z. fdv/marketCap 592638. Pair created 2026-09-02T00:44:30Z. Blockscout holders_count 1101. [claim S1 S7]

Gecko pool volume_usd.h24 is 1849712.19 and fdv_usd 575084.17. reserve_in_usd is -355304.71 this pass (CON-1). Gecko token volume_usd.h24 1864872.78 is all pools, not the SGOV book. Gecko token total_reserve_in_usd 0.0. [claim S8 S9]

JOHNDOG/SGOV on DexScreener is a different pair (0xa934…1e0a, token 0x64bc…1e18) with liquidity.usd 177734.33 and volume.h24 3503779.56. [claim S18 S19]

## Communications

@IceManDrakee posted SGOV-debt framing and the CA [claim S11 S12]

## Findings

USD liquidity figures on the DEBTCOIN/SGOV book count both sides, and the quote side is SGOV, not USDG. Gecko reserve_in_usd was negative this pass, so that aggregator slice is not a USD reserve. No official handle was located, so comms surfaces stay unconfirmed-official. JOHNDOG/SGOV is a different token on the same quote. [claim S10]

- Quote token SGOV is a stock-token rail; pool USD figures count DEBTCOIN plus SGOV, not a USDG backstop. [verified S7 S10]
- Gecko reserve_in_usd is negative this pass; do not treat it as TVL. [claim S8]
- No official handle or domain this pass; tokenURI Website is a third-party-link. [claim S7 S11]
- No audit report URL this pass. [unknown]
- Same-rail JOHNDOG/SGOV is a different token. [verified S18 S19]

- Receipts: Blockscout token/impl/factory/SGOV/Airlock/LongLauncher and create tx plus logs, RPC name/symbol/owner/pool/tokenURI, DexScreener pair/token, Gecko pool/token/info, /rhj/assets, Pinata tokenURI, and the IceManDrakee status were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S10]
- Numbers: 1593779.02 is the DexScreener DEBTCOIN/SGOV 24h volume, not the 1864872.78 Gecko token all-pools figure. Reserve on Gecko is negative; DexScreener liquidity 213908.99 is the SGOV book. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that DEBTCOIN is an official SGOV or Bankr product, or the same token as JOHNDOG. /rhj/assets lists SGOV as a Robinhood Token rail, Gecko's bankr-robinhood label is shared Doppler infrastructure, create is LongLauncher, and JOHNDOG is a different CA. No official handle or domain was located. [inference S4 S10 S18]

## Sources

- S1 — Token 0x55D9…1E18 Debtcoin / DEBTCOIN.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0x97181f5d…07bb.
- S5 — eth_getCode, name, symbol, owner() on DEBTCOIN.
- S6 — pool(), isPoolLocked, tokenURI, SGOV name/symbol.
- S7 — DEBTCOIN/SGOV Uniswap v4 pair.
- S8 — DEBTCOIN/SGOV pool.
- S9 — Debtcoin token.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — DEBTCOIN tokenURI JSON.
- S12 — SGOV treasury ETF is backed by the U.S. Debt.
- S13 — Token 0x92FD…F9B5 SGOV BeaconProxy.
- S14 — Address 0xeb7C…0862 Airlock.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — create tx logs LaunchCreated / Initialize / Airlock Create.
- S17 — Debtcoin token info.
- S18 — JOHNDOG token pairs (distinct SGOV book).
- S19 — Token 0x64bc…1e18 John Dog / JOHNDOG.
- S21 — DopplerHookInitializer Lock beneficiaries.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:55:00Z; methodology_version: proofline-v1.0.
