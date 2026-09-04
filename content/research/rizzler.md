---
slug: rizzler
coverage: stub
methodology_version: proofline-v1.0
---

# RIZZLER — research record

## Identity

RIZZLER is classified as Stock-paired token.

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against COST. Current RWAERC20LaunchpadFactory (o1 Launch Factory) deploys RIZZLER in one createLaunchAndBuy call and seeds the RIZZLER/COST book. Traders buy and sell RIZZLER on Uniswap v4. COST is the Robinhood stock-token rail, not the project. No official site or handle was located this pass.

Themes: memecoin, stock-paired:COST, rwa

## Deployment

RIZZLER token: 0x59ccd2519c57c7d06331Caa984326BD33E36Db01 on robinhood-chain. [verified S1 S4 S18]

RWAERC20LaunchpadFactory (token factory(); o1 current): 0xcE9C48cFa068947f77738c81Be406B53338E5B0d on robinhood-chain. [verified S2 S3 S5 S21]

LaunchTokenDeployer (factory.tokenDeployer): 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb on robinhood-chain. [verified S5 S14]

LaunchHook (Uniswap v4 hook on RIZZLER/COST): 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc on robinhood-chain. [claim S5 S13 S18]

COST Costco • Robinhood Token (pair rail): 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 on robinhood-chain. [verified S5 S10 S11 S18]

## Control

token owner() reverts. Factory owner() returns EOA 0x5519a8…044D with no code. launchCreationEnabled() is true this pass. priceUpdater, hook, and tokenDeployer are set. [verified S4 S5]

## Security

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The RIZZLER token itself is not verified. No audit report URL was located this pass. [verified S1 S2 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.socials is empty; info.websites lists https://link.me/itztherealrizzler, a celebrity merch page with no CA in the preview. createLaunchAndBuy websites and socials arrays are empty. @Da_Rizzler419 bio has no CA 0x59ccd251. Flag unconfirmed-official and third-party-link. [claim S3 S7 S12 S19]

createLaunchAndBuy caller 0xd892…f939 is an EOA. No GitHub repository URL was located. [verified S3] [claim S7]

## Product and economics

Current RWAERC20LaunchpadFactory 0xcE9C…5B0d deploys via LaunchTokenDeployer 0xf86d…a5Eb. createLaunchAndBuy from 0xd892…f939 at 2026-09-02T18:21:12Z minted RIZZLER / RIZZLER supply 1e9*1e18 into Uniswap v4 poolId 0xc542…3dbd quoted against COST. factory() on the token returns that factory. Native launch fee was 1e15 wei; the same tx bought with 0.05 ETH and received 28985043296139654791023477 RIZZLER. [verified S3 S4 S5 S18]

Verified factory source is a managed ERC-20 launch factory for RWA quotes. Quote is COST 0x4EA0…44C2 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x0310…2aCc registered the pool with baseFeeBps 100. Secondary RIZZLER/USDG and RIZZLER/ETH books exist on DexScreener with far less liquidity than the COST book. [verified S5 S7 S11 S21]

RIZZLER/COST Uniswap v4 24h volume is 1216052.39 USD and reserve_in_usd is 27310.31 at 2026-09-03T04:12:00Z from the Gecko pool endpoint. fdv_usd is 68049.79. Gecko token volume_usd.h24 is 1258104.54 across all pools, not the COST book. [claim S8 S9]

DexScreener same pair: liquidity.usd 29180.52, volume.h24 1223200.25, fdv/marketCap 68252. Blockscout holders_count 554. Pair created 2026-09-02T18:21:12Z. [claim S1 S7]

Assignment lead of liq ~$30,494 / vol ~$1,220,876 was near this as_of; live Gecko reserve is $27.3k and DexScreener liquidity is $29.2k. Gecko token/pools returned 429; trending was not fetched this pass. [claim S7 S8 S20]

## Communications

X accounts circulated CA 0x59ccd251 as $RIZZLER [claim S22 S23]

Netlify vote pages asked for $RIZZLER leaderboard votes [claim S15]

## Findings

USD liquidity figures on the RIZZLER/COST book count both sides, and the quote side is COST, not USDG. DexScreener and Gecko disagree on reserve for the same pool. DexScreener lists a celebrity Linkme with no CA. Ticker RIZZLER is reused by a thinner Doppler clone. Netlify vote URLs reuse the CA in copypasta posts. [claim S11]

- Quote token COST 0x4EA0…44C2 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is RIZZLER plus COST, not a USDG backstop. [verified S8 S11]
- Current factory launchCreationEnabled is true; KIRKLAND/COST and packed HOTDOG/COST are different tokens. [verified S5 S16 S17]
- DexScreener website is a third-party-link; no official handle or domain this pass. [claim S7 S12]
- Ticker RIZZLER is reused by Doppler clone 0x28eC…1e18 on a thinner COST book. [verified S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/COST/hook/deployer/other RIZZLER and the createLaunchAndBuy tx, RPC name/symbol/factory/owner/launchCreationEnabled/quoteConfig, DexScreener token plus search, Gecko pool/token, /rhj/assets, link.me preview, and X CA / vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S8 S11]
- Numbers: 1216052.39 is the Gecko RIZZLER/COST pool 24h volume, not the 1258104.54 token all-pools figure. Reserve 27310.31 is that pool. DexScreener 1223200.25 / 29180.52 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is KIRKLAND, packed HOTDOG, the Doppler RIZZLER clone, or an official Costco / celebrity product. KIRKLAND factory() path is Pons v2 0x7eD5…EC7e. Packed HOTDOG is 0x1C1D…566f. Clone is 0x28eC…1e18 with Airlock owner. COST is the rhj rail. Celebrity Linkme and @Da_Rizzler419 do not publish this CA. [inference S11 S12 S16 S17 S19]

## Sources

- S1 — Token 0x59ccd251…Db01 RIZZLER / RIZZLER.
- S2 — Address 0xcE9C…5B0d RWAERC20LaunchpadFactory.
- S3 — createLaunchAndBuy tx 0x62c5a2c7…2393.
- S4 — eth_getCode, name, symbol, factory() on RIZZLER.
- S5 — factory owner(), launchCreationEnabled(), hook(), tokenDeployer(), quoteConfig(COST).
- S7 — latest/dex/tokens RIZZLER.
- S8 — RIZZLER/COST Uniswap v4 pool.
- S9 — RIZZLER token.
- S10 — Token 0x4EA0…44C2 Costco • Robinhood Token / COST.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — link.me/itztherealrizzler.
- S13 — Address 0x0310…2aCc LaunchHook.
- S14 — Address 0xf86d…a5Eb LaunchTokenDeployer.
- S15 — $RIZZLER netlify vote copy.
- S16 — Token 0x28eC…1e18 RIZZLER Doppler clone.
- S17 — KIRKLAND launchFactory and packed HOTDOG name.
- S18 — Launched and Initialize logs for RIZZLER/COST.
- S19 — The Rizzler celebrity profile.
- S20 — RIZZLER token/pools 429.
- S21 — o1 Launch Factory + verified source.
- S22 — Post with the $rizzler CA.
- S23 — Tagged @ItzDaRizzler with CA and fomo.family.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:20:00Z; methodology_version: proofline-v1.0.
