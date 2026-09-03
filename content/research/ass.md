---
slug: ass
coverage: stub
methodology_version: proofline-v1.0
---

# ASS — research record

## Identity

ASS is classified as Stock-paired token.

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against LULU. Current RWAERC20LaunchpadFactory (o1 Launch Factory) deploys ASS in one createLaunch call and seeds the ASS/LULU book. Traders buy and sell ASS on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:LULU, rwa

## Deployment

ASS token: 0x47cB7f9F0b6f4B7BbDa69Cb95F871a73C1687901 on robinhood-chain. [verified S1 S4 S18]

RWAERC20LaunchpadFactory (token factory(); o1 current): 0xcE9C48cFa068947f77738c81Be406B53338E5B0d on robinhood-chain. [verified S2 S3 S5 S21]

LaunchTokenDeployer (token creator_address_hash): 0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb on robinhood-chain. [verified S1 S5 S14]

LaunchHook (Uniswap v4 hook on ASS/LULU): 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc on robinhood-chain. [claim S5 S13 S18]

LULU Stock Token (pair quote / rhj rail): 0x4e62068525Ab11FE768e29dfD00ef909B9803016 on robinhood-chain. [verified S9 S12 S18]

## Control

token owner() reverts. Factory owner() returns 0x5519a8…044D. launchCreationEnabled() is true this pass. priceUpdater, hook, and tokenDeployer are set. [verified S4 S5]

## Security

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The ASS token itself is not verified. No audit report URL was located this pass. [verified S1 S2 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is empty; info.socials lists x.com/dipwheeler?s=11. createLaunch websites and socials arrays are empty. from:DipWheeler did not embed 0x47cB…7901 this pass. Flag unconfirmed-official and third-party-link. [claim S3 S7 S19]

createLaunch caller 0xCdfB…D3dC is an EOA. No GitHub repository URL was located. [verified S3] [claim S7]

## Product and economics

Current RWAERC20LaunchpadFactory 0xcE9C…5B0d deploys via LaunchTokenDeployer 0xf86d…a5Eb. createLaunch from 0xCdfB…D3dC at 2026-09-02T18:36:50Z minted ASS / ASS supply 1e9*1e18 into Uniswap v4 poolId 0x2b74…f9a5 quoted against LULU. factory() on the token returns that factory. Native launch fee was 1e15 wei. [verified S3 S4 S5 S18]

Verified factory source is a managed ERC-20 launch factory for RWA quotes. Quote is LULU 0x4e62…3016 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x0310…2aCc registered the pool with baseFeeBps 100. Secondary ASS/USDG and ASS/ETH books exist on DexScreener with far less liquidity than the LULU book. [verified S5 S7 S12 S21]

ASS/LULU Uniswap v4 24h volume is 3791088.73 USD and reserve_in_usd is 113655.57 at 2026-09-03T03:52:00Z from the Gecko pool endpoint. fdv_usd is 867871.32. Gecko token volume_usd.h24 is 4073878.81 across all pools, not the LULU book. [claim S8 S9]

DexScreener same pair: liquidity.usd 120519.64, volume.h24 3879046.05, fdv/marketCap 934145. Blockscout holders_count 1340. Pair created 2026-09-02T18:36:50Z. [claim S1 S7]

Assignment lead of liq ~$128,695 / vol ~$3,847,429 was near this as_of; live Gecko reserve is $0.11M and DexScreener liquidity is $0.12M. trending_pools duration=24h first twelve did not include ASS this pass. [claim S7 S8 S20]

## Communications

@tradinbenjamins posted ASS paired to LULU [claim S10]

@wibeeys posted the ASS CA with $ASS/$LULU [claim S11]

## Findings

USD liquidity figures on the ASS/LULU book count both sides, and the quote side is LULU, not USDG. DexScreener and Gecko disagree on reserve and FDV for the same pool. DexScreener lists x.com/dipwheeler without a matching CA in that account's posts this pass. Ticker ASS is reused by Asscoin 0x0aB1…70A7. [claim S12]

- Quote token LULU 0x4e62…3016 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is ASS plus LULU, not a USDG backstop. [verified S8 S12]
- Current factory launchCreationEnabled is true; CAMELTOE/LULU is a different token on 0xe64A…F297. [verified S5 S15 S16]
- DexScreener social is a third-party-link; no official handle or domain this pass. [claim S7 S19]
- Ticker ASS is reused by Asscoin 0x0aB1…70A7 on an ASS/SPY book. [claim S17]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/LULU/hook/deployer/CAMELTOE and the createLaunch tx, RPC name/symbol/factory/owner/launchCreationEnabled, DexScreener token plus ASS LULU search plus Asscoin, Gecko pool/token/trending, /rhj/assets, o1 docs HTML, and X from:DipWheeler / CA posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S8 S12]
- Numbers: 3791088.73 is the Gecko ASS/LULU pool 24h volume, not the 4073878.81 token all-pools figure. Reserve 113655.57 is that pool. DexScreener 3879046.05 / 120519.64 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that ASS is the same name as CAMELTOE/LULU, Asscoin/SPY, or an official Lululemon product. CAMELTOE factory() is 0xe64A…F297 with token 0xc32B…F201. Asscoin is 0x0aB1…70A7 on SPY. LULU is the rhj rail, not the meme. No official Lululemon handle was located for this token. [inference S12 S15 S16 S17]

## Sources

- S1 — Token 0x47cB…7901 ASS / ASS.
- S2 — Address 0xcE9C…5B0d RWAERC20LaunchpadFactory.
- S3 — createLaunch tx 0x8faf4399…f6c1.
- S4 — eth_getCode, name, symbol, factory() on ASS.
- S5 — factory owner(), launchCreationEnabled(), hook(), tokenDeployer().
- S7 — latest/dex/tokens ASS.
- S8 — ASS/LULU Uniswap v4 pool.
- S9 — ASS token.
- S10 — ASS coin paired to LULU lemon stock.
- S11 — $ASS/$LULU CA post.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Address 0x0310…2aCc LaunchHook.
- S14 — Address 0xf86d…a5Eb LaunchTokenDeployer.
- S15 — Token 0xc32B…F201 Cameltoe / CAMELTOE.
- S16 — latest/dex/tokens CAMELTOE.
- S17 — latest/dex/tokens Asscoin ASS/SPY.
- S18 — Launched and Initialize logs for ASS/LULU.
- S19 — from:DipWheeler ASS/LULU search.
- S20 — Robinhood trending_pools 24h.
- S21 — o1 Launch Factory + verified source.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:55:00Z; methodology_version: proofline-v1.0.
