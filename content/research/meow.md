---
slug: meow
coverage: stub
methodology_version: proofline-v1.0
---

# MEOW — research record

## Identity

MEOW is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against AMD. LongLauncher deploys a DopplerERC20V1 token whose on-chain name is AMD and symbol is MEOW, then seeds the MEOW/AMD book. Traders buy and sell MEOW on Uniswap v4. AMD is the quote rail. No official site was located this pass; DexScreener lists an X account that reprints the CA.

Themes: memecoin, stock-paired:AMD, rwa

## Deployment

MEOW token (EIP-1167 DopplerERC20V1 clone): 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 on robinhood-chain. [verified S1 S5 S12]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S5 S12]

AMD • Robinhood Token (pair quote rail): 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC on robinhood-chain. [verified S6 S7 S10 S11]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S19]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7a66. Create-tx from 0x9faA…f9e1 has 23 bytes of EIP-7702 code delegating to EIP7702StatelessDeleGator 0x63c0…e32B. [verified S5 S6 S20]

## Security

DopplerERC20V1, DopplerERC20V1Factory, LongLauncher, and Airlock are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/LongLauncher.sol, src/Airlock.sol, compiler v0.8.26). The token page is a proxy shell. No audit report URL was located this pass. [verified S2 S3 S18 S19] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is empty. DexScreener info.socials lists x.com/meow_robinhood; that account bio reprints CA 0x7235Cf5e…1e18 and @longdotxyz. Flag unconfirmed-official. A third-party claim portal at crypto-pek.netlify.app embedded this CA; flag copypasta-pattern and third-party-link. [claim S7 S13 S15]

On-chain name() is AMD. X display name is Artificial Meow Domination. Those are aliases, not a second token. [claim S1 S13]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from EIP-7702 0x9faA…f9e1 at 2026-09-02T09:19:32Z minted name AMD / symbol MEOW supply 1e9*1e18 into Uniswap v4 poolId 0xc057…9132. factory() on the token reverts. owner() is Airlock. genesis path is LongLauncher.create with tokenFactory DopplerERC20V1Factory 0x1B37…b69a and numeraire AMD 0x8692…3fdC. [verified S4 S5 S12]

Airlock getAssetData names that AMD as numeraire and records LP slots at 0xdead. PoolManager is 0x8366…0951. Hook initializer is DopplerHookInitializer 0x4e34…a544. Secondary MEOW/ETH and MEOW/USDG books exist on DexScreener with far less liquidity than the AMD book. [verified S6 S7]

MEOW/AMD Uniswap v4 24h volume is 587708.52 USD and liquidity.usd is 53771.13 at 2026-09-03T04:10:59Z from DexScreener. fdv/marketCap is 64516. Pair created 2026-09-02T09:19:32Z. Blockscout holders_count 260. [claim S1 S7]

Gecko pool volume_usd.h24 is 554392.11 and fdv_usd is 63473.61 at 2026-09-03T04:11:00Z. Gecko reserve_in_usd is -10478.77 this pass and is not a TVL figure. Gecko token volume_usd.h24 is 555248.34; token fdv_usd 344376.22 uses a different price than the AMD book. [claim S8 S9]

## Communications

@meow_robinhood posted the CA and cat-on-chip copy [claim S13 S14]

Third-party claim portal posted against this CA [claim S15]

## Findings

USD liquidity figures on the MEOW/AMD book count both sides, and the quote side is AMD, not USDG. Gecko reserve_in_usd on this pool was negative this pass, so a card that uses that field would invert the book. Same-ticker MEOW clones exist. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S10]

- Quote token AMD 0x8692…3fdC is the Robinhood Stock Token rail; MEOW is not in GET /rhj/assets. [verified S10 S11]
- Pool USD reserve on DexScreener is MEOW plus AMD, not a USDG or WETH backstop. [claim S7]
- Gecko reserve_in_usd is negative this pass; do not card it. [claim S8]
- On-chain name() AMD collides with the rail ticker; CHIP and MD are separate AMD-quoted tokens. [verified S1 S16 S17]
- No official handle or domain this pass; X is unconfirmed-official. [claim S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/launcher/Airlock/AMD and create tx 0x33aa…8612, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, CHIP and MD DexScreener searches, and the @meow_robinhood profile were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S10]
- Numbers: 587708.52 is the DexScreener MEOW/AMD pool 24h volume, not the Gecko 554392.11 pool figure or the 555248.34 token figure. Liquidity 53771.13 is DexScreener. Gecko reserve -10478.77 is not used as TVL. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that MEOW is the AMD Stock Token, or that CHIP/MD are the same name. /rhj/assets AMD is 0x8692…3fdC; this token is 0x7235…1e18 with symbol MEOW; CHIP is 0xE38B…6E59; MD is 0x3abb…1e18. [inference S10 S16 S17]

## Sources

- S1 — Token 0x7235…1e18 AMD / MEOW.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x33aac706…8612.
- S5 — eth_getCode, name, symbol, owner() on MEOW.
- S6 — Airlock getAssetData and AMD name().
- S7 — latest/dex/tokens MEOW 0x7235…1e18.
- S8 — MEOW/AMD Uniswap v4 pool.
- S9 — AMD / MEOW token.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Token 0x8692…3fdC AMD • Robinhood Token.
- S12 — LaunchCreated and Initialize logs for MEOW.
- S13 — X profile Artificial Meow Domination - AMD.
- S14 — only one token paired to amd with cats.
- S15 — holder claim portal against this CA.
- S16 — search CHIP robinhood CHIP/AMD.
- S17 — search MD robinhood MD/AMD.
- S18 — Address 0x22e9…eeED LongLauncher.
- S19 — Address 0xeb7C…0862 Airlock.
- S20 — create-from 0x9faA…f9e1 eth_getCode.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
