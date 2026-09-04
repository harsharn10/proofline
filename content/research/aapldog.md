---
slug: aapldog
coverage: stub
methodology_version: proofline-v1.0
---

# AAPLDOG — research record

## Identity

Apple Dog is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-09-01 minted Apple Dog (AAPLDOG) and seeded the AAPLDOG/AAPL book. Traders buy and sell AAPLDOG against AAPL. AAPL is the quote rail, not the subject. @AppleDogRH posted this CA; no project domain was located this pass.

Themes: memecoin, stock-paired:AAPL, rwa

## Deployment

AAPLDOG token (EIP-1167 DopplerERC20V1 clone): 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token factory in create calldata): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S5 S6 S13]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S4 S6 S13]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6 S14]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0xdF86…B57A has no code. Create-tx Lock beneficiaries were 95% 0xdF86…B57A and 5% 0x21E2…7A66. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified S4 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

@AppleDogRH display name Apple Dog. Bio is Just a dog with an apple.... paired with $aapl; it does not pin the CA. Post 2095043535301230872 prints CA 0x06e52e5f…1e18. DexScreener socials twitter that handle. Gecko twitter_handle is null and websites are empty. Do not invent a second official handle. [verified S8 S9] [claim S1 S10]

X user search also returned @Apple_Dog_RH. Flag handle-collision. DexScreener lists tiktok.com/@nexinoff; no CA was confirmed on that URL this pass. Flag unconfirmed-official and third-party-link. Netlify vote and claim URLs that embed this CA are copypasta-pattern / third-party-link. [claim S8 S16 S17 S18]

## Product and economics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from 0xdF86…B57A at 2026-09-01T22:37:18Z minted Apple Dog / AAPLDOG supply 1e9*1e18 into Uniswap v4 poolId 0xe11d3a20…47ab quoted against AAPL 0xaF3D…93f9. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. Blockscout left creator_address_hash empty this pass; the create tx is the pad. [verified S4 S5 S6]

Airlock getAssetData numeraire is that AAPL; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker AAPLDOG. Secondary AAPLDOG/USDG and AAPLDOG/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified S1 S2 S6]

AAPLDOG/AAPL Uniswap v4 24h volume is 657305.78 USD and reserve_in_usd is 106008.03 at 2026-09-03T04:20:00Z from the Gecko pool endpoint. fdv_usd is 222368.69. Gecko token volume_usd.h24 is 659162.69 across all pools, not the AAPL book. [claim S2 S3]

DexScreener same pair: liquidity.usd 122498.56, volume.h24 639979.73, fdv/marketCap 228834 at 2026-09-03T04:20:09Z. Blockscout holders_count 622. Pair created 2026-09-01T22:37:18Z. [claim S1 S4]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim S1 S2 S5]

## Communications

@AppleDogRH posted CA 0x06e52e5f…1e18 [verified S9]

@AppleDogRH quoted the LONG barbell [claim S15]

Third-party netlify vote and claim URLs used this CA [claim S17 S18]

## Findings

USD liquidity figures on the AAPLDOG/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko reserve and DexScreener liquidity disagree on the same pool. Same-ticker Apple Dog clones exist on robinhood and other chains. @Apple_Dog_RH is a colliding handle. TikTok and netlify vote/claim URLs are third-party-links. No project domain was located. [claim S8]

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail in GET /rhj/assets; AAPLDOG is not. [verified S11 S12]
- Pool USD reserve is AAPLDOG plus AAPL, not a USDG or WETH backstop. [claim S1 S2]
- Gecko reserve 106008.03 vs DexScreener liquidity 122498.56 on the same pool. [claim S1 S2]
- Same-ticker clones and colliding handle @Apple_Dog_RH. [claim S8 S16]
- TikTok and netlify vote/claim URLs are third-party-links; no project domain this pass. [claim S1 S17 S18]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AAPL and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + search, Gecko pool/token/info, /rhj/assets, @AppleDogRH profile and CA post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S8 S11]
- Numbers: 657305.78 is the Gecko AAPLDOG/AAPL pool 24h volume, not the 659162.69 token all-pools figure. Reserve 106008.03 is that pool. DexScreener 639979.73 / 122498.56 is the same pair, different aggregator. Assignment lead of ~$99,549 liq / ~$646,907 vol was not reproduced at this as_of; live DexScreener liq is $122,498.56. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, packed AAPLCAT, AP/AAPL, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AAPLCAT is 0x73A9999f…1e18 / @AAPLCAT_; AP is 0x69c68e4C…1e18; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; AAPLDOG is a LongLauncher memecoin at 0x06e52E5f…1e18. [inference S4 S11 S16]

## Sources

- S1 — AAPLDOG token pairs on Robinhood.
- S2 — AAPLDOG/AAPL pool on Bankr (Robinhood).
- S3 — Apple Dog token on Robinhood.
- S4 — AAPLDOG 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18.
- S5 — AAPLDOG creation tx 0x95ed1e86….
- S6 — eth_getCode and ERC-20 / Airlock calls.
- S8 — Apple Dog profile.
- S9 — Welcome To The Orchard CA post.
- S10 — Apple Dog token info.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9.
- S13 — DopplerERC20V1 0x3Be8…C599.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — The $AAPLDOG X @longdotxyz barbell.
- S16 — Search AAPLDOG and AP AAPL.
- S17 — AAPLDOG vote netlify link.
- S18 — AAPLDOG claim portal netlify link.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:25:00Z; methodology_version: proofline-v1.0.
