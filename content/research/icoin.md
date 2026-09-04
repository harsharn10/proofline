---
slug: icoin
coverage: stub
methodology_version: proofline-v1.0
---

# ICOIN — research record

## Identity

iCoin is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-22 minted iCoin (ICOIN) and seeded the ICOIN/AAPL book. Traders buy and sell ICOIN against AAPL. @iCoinRH is the project handle; the token page lives on app.long.xyz.

Themes: memecoin, stock-paired:AAPL

## Deployment

ICOIN token (EIP-1167 DopplerERC20V1 clone): 0x5d6EF090a1461B11c9427aC319260122D1C61e18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S4 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S4 S6 S17]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6]

Community vault (LongFeeVaultFactory deployVault): 0x24c2410941B4603CF5504810d5dF841dB4d303ad on robinhood-chain. [verified S11 S13 S14]

## Control

token owner() returns Airlock 0xeb7C…0862. Airlock owner() returns 0x21E2…7A66. The create-tx and deployVault from-address 0xd947…Ef4E has no code. DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, v0.8.26). LongLauncher is fully verified. The vault is not verified. [verified S5 S6 S13 S17]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

@iCoinRH bio states iCoin/AAPL on RH chain. Profile website is the LONG token page for 0x5d6EF…1e18. Pinned 23 Jul post publishes that CA and names @longdotxyz. DexScreener socials list the same handle. No iCoin-owned domain. Flag wrong-chain: later @iCoinRH posts include solana:9uT7…pump beside the RH pair. [verified S1 S8 S9] [claim S11]

## Product and economics

LongLauncher.create from EOA 0xd947…Ef4E at 2026-07-22T13:08:44Z cloned DopplerERC20V1 as iCoin / ICOIN, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 received nearly the full supply in the create transaction. [verified S4 S5 S6]

DexScreener labels the primary book Uniswap v4 ICOIN/AAPL 0xc391…4188. Gecko names the same pool ICOIN / AAPL with dex bankr-robinhood. Secondary ICOIN/USDG and ICOIN/WETH Uniswap v4 books exist with far less liquidity. [verified S1 S2 S7]

@iCoinRH posted Community Mode fee routing: AAPL fees 80% to community vault 0x24c2…03ad and 20% to the project. The vault was created 77 seconds after that Mode: ON post via LongFeeVaultFactory.deployVault from the same deployer EOA. Vault bytecode is unverified. [claim S10 S11] [verified S13 S14]

Gecko ICOIN/AAPL pool 24h volume is 6198765.33 USD and reserve_in_usd is 770912.07 at 2026-09-03T03:28:00Z. fdv_usd is 3560818.50. Gecko token volume_usd.h24 is 6737936.26 across all pools, not the AAPL book. [claim S2 S3]

DexScreener same pair: liquidity.usd 508312.19, volume.h24 6035283.22, fdv/marketCap 3457851. Blockscout holders_count 2982. Pair created 2026-07-22T13:08:44Z. [claim S1 S4]

Gecko trending_pools page 1 first eight did not include ICOIN this pass. Assignment lead of Gecko ICOIN/AAPL liq ~$789k vol ~$6.2M is close to the live pool slice ($771k / $6.20M), not the DexScreener $508k liquidity print. [claim S2]

## Communications

@iCoinRH posted Community Mode AAPL fee split [claim S11]

@iCoinRH posted Community Mode: ON [claim S10]

@0xSammy posted iCOIN launched an hour ago [claim S12]

@iCoinRH pinned CA 0x5d6ef…1e18 vs AAPL on LONG [claim S9]

## Findings

USD liquidity on the ICOIN/AAPL book counts both ICOIN and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ by about $260k this pass. Token owner() is Airlock; the community vault source is unverified. @iCoinRH posts also name a Solana mint that is not the 4663 contract. [claim S8]

- Quote token AAPL is a Robinhood Stock Token; pool USD reserve is ICOIN plus AAPL, not a USDG backstop. [verified S2 S15]
- Gecko reserve and DexScreener liquidity for pool 0xc391…4188 disagree this pass. [claim S1 S2]
- Community vault 0x24c2…03ad is unverified. [verified S13]
- @iCoinRH posts name a Solana mint in addition to the 4663 CA. [claim S11]
- No audit report URL this pass. [unknown]

- Receipts: DexScreener token API, Gecko pool/token/pools, Blockscout token/create tx/vault/deployVault/AAPL/impl, RPC eth_getCode and eth_call, @iCoinRH profile and three posts, @0xSammy, and the LONG token URL 403 were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S2 S4 S5 S6 S8]
- Numbers: 6198765.33 is the Gecko ICOIN/AAPL pool 24h volume, not the 6737936.26 token all-pools figure. Reserve 770912.07 is that pool. DexScreener 6035283.22 / 508312.19 is the same pair, different aggregator. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that ICOIN is a Bankr agent launch because Gecko labels the pool bankr-robinhood. The create transaction calls LongLauncher.create from 0xd947…Ef4E, and @iCoinRH names @longdotxyz. [inference S2 S5 S9]

## Sources

- S1 — ICOIN token pairs on Robinhood.
- S2 — ICOIN/AAPL pool on Bankr (Robinhood).
- S3 — iCoin token on Robinhood.
- S4 — ICOIN 0x5d6EF090a1461B11c9427aC319260122D1C61e18.
- S5 — ICOIN creation tx 0x47d9211c….
- S6 — eth_getCode and ERC-20 / Airlock calls.
- S7 — ICOIN token pools page 1.
- S8 — iCoin profile.
- S9 — Pinned CA vs AAPL on LONG.
- S10 — Community Mode: ON.
- S11 — How Community Mode works.
- S12 — iCOIN launched an hour ago.
- S13 — Community vault 0x24c24109…03ad.
- S14 — deployVault tx 0x5cffe226….
- S15 — AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9.
- S17 — DopplerERC20V1 0x3Be8…C599.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
