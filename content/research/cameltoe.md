---
slug: cameltoe
coverage: stub
methodology_version: proofline-v1.0
---

# CAMELTOE — research record

## Identity

CAMELTOE is classified as Stock-paired token.

A one-billion-supply ERC-20 launched into a Uniswap v4 pool quoted against LULU. Historical RWAERC20LaunchpadFactory deploys Cameltoe (CAMELTOE) in one createLaunch call and seeds the CAMELTOE/LULU book. Traders buy and sell CAMELTOE on Uniswap v4. cameltoerh.fun embeds the contract; no bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:LULU, rwa

## Deployment

CAMELTOE token: 0xc32B91Fe216aF1B834dB02f33326E983Ad8Cf201 on robinhood-chain. [verified S1 S4 S17]

Historical RWAERC20LaunchpadFactory (token factory()): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [verified S2 S3 S5]

LaunchTokenDeployer (token creator_address_hash): 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b on robinhood-chain. [claim S1 S5 S14]

LaunchHook (Uniswap v4 hook on CAMELTOE/LULU): 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC on robinhood-chain. [claim S5 S13 S17]

LULU Stock Token (pair quote / rhj rail): 0x4e62068525Ab11FE768e29dfD00ef909B9803016 on robinhood-chain. [verified S9 S12 S17]

## Control

token owner() reverts. Historical factory owner() returns 0x5519a8…044D. launchCreationEnabled() is false this pass, so this factory is not currently minting new launches. priceUpdater, hook, and tokenDeployer are set. [verified S4 S5]

## Security

LaunchHook, LaunchTokenDeployer, and RWAERC20LaunchpadFactory are verified on Blockscout (src/RWAERC20LaunchpadFactory.sol, compiler v0.8.26). The CAMELTOE token itself is not verified. No audit report URL was located this pass. [verified S1 S2 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

cameltoerh.fun titles $CAMELTOE, embeds CA 0xc32B…F201, and links https://x.com/cameltoerh. DexScreener info.websites and info.socials match. from:cameltoerh resolved to @CamelToeRH with no contract in the bio. Flag unconfirmed-official. [claim S6 S10 S11]

createLaunch caller 0x3Ed7…f13e is an EOA. No GitHub repository URL was located. [verified S3] [claim S10]

## Product and economics

Historical RWAERC20LaunchpadFactory 0xe64A…F297 deploys via LaunchTokenDeployer 0x6544…615b. createLaunch from 0x3Ed7…f13e at 2026-09-02T03:19:05Z minted Cameltoe / CAMELTOE supply 1e9*1e18 into Uniswap v4 poolId 0x1e75…2d35 quoted against LULU. factory() on the token returns that factory. Native launch fee was 1e15 wei. [verified S3 S4 S5 S17]

Verified factory source is an ERC-20 launch factory for RWA quotes. stock/quote is LULU 0x4e62…3016 from GET /rhj/assets. PoolManager is 0x8366…0951. LaunchHook 0x778b…EaCC registered the pool with baseFeeBps 100. Secondary CAMELTOE/USDG and CAMELTOE/ETH books exist on DexScreener with far less liquidity than the LULU book. [verified S5 S6 S9 S19]

CAMELTOE/LULU Uniswap v4 24h volume is 4804580.44 USD and reserve_in_usd is 148504.51 at 2026-09-03T03:36:00Z from the Gecko pool endpoint. fdv_usd is 1477018.70. Gecko token volume_usd.h24 is 5419911.37 across all pools, not the LULU book. [claim S7 S8]

DexScreener same pair: liquidity.usd 160580.74, volume.h24 5057794.83, fdv/marketCap 1662171. Blockscout holders_count 2118. Pair created 2026-09-02T03:19:05Z. [claim S1 S6]

Assignment lead of liq ~$159,577 / vol ~$5,182,212 was not reproduced at this as_of; live Gecko reserve is $0.15M and DexScreener liquidity is $0.16M. [claim S6 S7]

## Communications

@nottellingyou73 posted the CAMELTOE CA against LULU [claim S18]

@CamelToeRH posted $CamelToe without a contract in the bio [claim S11]

## Findings

USD liquidity figures on the CAMELTOE/LULU book count both sides, and the quote side is LULU, not USDG. DexScreener and Gecko disagree on reserve and FDV for the same pool. The X URL on the site did not show a contract in the profile bio this pass. Other robinhood pairs reuse the CAMELTOE ticker at different addresses. [claim S10]

- Quote token LULU 0x4e62…3016 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is CAMELTOE plus LULU, not a USDG backstop. [verified S7 S9]
- Historical factory launchCreationEnabled is false; ASS/LULU is a different token on 0xcE9C…5B0d. [verified S5 S16]
- X handle is unconfirmed-official; site embeds the CA. [claim S10 S11]
- CAMELTOE ticker collisions at other 4663 addresses. [claim S6]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/LULU/hook/deployer/ASS and the createLaunch tx, RPC name/symbol/factory/owner/launchCreationEnabled, DexScreener token and ASS search, Gecko pool/token, /rhj/assets, cameltoerh.fun, and X from:cameltoerh were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S7 S9 S10]
- Numbers: 4804580.44 is the Gecko CAMELTOE/LULU pool 24h volume, not the 5419911.37 token all-pools figure. Reserve 148504.51 is that pool. DexScreener 5057794.83 / 160580.74 is the same pair, different aggregator. [claim S6 S7 S8]
- Adversarial: the strongest contrary reading is that CAMELTOE is the same name as ASS/LULU or an official Lululemon product. ASS factory() is 0xcE9C…5B0d with token 0x47cB…7901. LULU is the rhj rail, not the meme. No official Lululemon handle was located for this token. [inference S9 S15 S16]

## Sources

- S1 — Token 0xc32B…F201 Cameltoe / CAMELTOE.
- S2 — Address 0xe64A…F297 RWAERC20LaunchpadFactory.
- S3 — createLaunch tx 0xb7b93ea4…2d0a.
- S4 — eth_getCode, name, symbol, factory() on CAMELTOE.
- S5 — factory owner(), launchCreationEnabled(), hook(), tokenDeployer().
- S6 — latest/dex/tokens CAMELTOE.
- S7 — CAMELTOE/LULU Uniswap v4 pool.
- S8 — Cameltoe token.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — $CAMELTOE site.
- S11 — $CamelToe, It's tight..
- S12 — Token 0x4e62…3016 Lululemon • Robinhood Token / LULU.
- S13 — Address 0x778b…EaCC LaunchHook.
- S14 — Address 0x6544…615b LaunchTokenDeployer.
- S15 — Token 0x47cB…7901 ASS.
- S16 — ASS/LULU Uniswap v4 pair.
- S17 — Launched and Initialize logs for CAMELTOE/LULU.
- S18 — $CAMELTOE paired with $LULU stock.
- S19 — RWAERC20LaunchpadFactory verified source.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:50:00Z; methodology_version: proofline-v1.0.
