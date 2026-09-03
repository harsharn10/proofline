---
slug: hmm
coverage: stub
methodology_version: proofline-v1.0
---

# HMM — research record

## Identity

HMM is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 minted through Pons v1 into a Uniswap v3 1% WETH pool. PonsLaunchFactory launchToken deploys Thinking Cat (HMM) and seeds the HMM/WETH book. Traders buy and sell HMM on that pool and later Ramses / Uniswap v4 books. hmmmm.fun and @thinkingcatRH publish the contract.

Themes: memecoin, cat

## Deployment

HMM token (PonsLauncherToken): 0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f on robinhood-chain. [verified S1 S2 S5]

PonsLaunchFactory (token launchFactory / creator): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [verified S3 S4 S6]

Uniswap v3 HMM/WETH 1% pool (liquidityPool): 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e on robinhood-chain. [verified S6 S7 S14 S15]

PonsLaunchLocker (LP NFT 223724 recipient): 0x736D76699C26D0d966744cAe304C000d471f7F35 on robinhood-chain. [verified S6 S14]

launchToken deployer (TokenLaunched deployer / fee wallet): 0x934e92E1C82020fc4e1Ee55712C6d9fb19C6782a on robinhood-chain. [claim S4 S6 S14]

## Control

_Research pending._

## Security

Token owner() reverts. Deployer 0x934e92…782a is also FeeRedirectUpdated newFeeWallet; latest code is 23-byte EIP-7702 0xef0100. Factory owner() was not read this pass. PonsLauncherToken and PonsLaunchFactory are fully verified on Blockscout (contracts/src/PonsLauncherToken.sol, contracts/src/PonsLaunchFactory.sol, compiler v0.8.30). No audit report URL was located this pass. [verified S2 S3 S5 S6] [unknown]

## Engineering

_Research pending._

## Team

Official domain is hmmmm.fun and official handle is @thinkingcatRH: the site lists the CA and the handle; the bio lists the CA; DexScreener info.websites / info.socials match. [verified S7 S10 S11]

On-chain socials() twitter field is @gornx0x status 2078750090878193715, which posted a @wirebotRH test launch of Thinking Cat about 26 seconds before the factory tx. hmmmm.fun still links wirebot.trade. That is provenance, not a Wire official handle for HMM. Lookalikes @thinkingcatRHH, @thinkingcatHH, and @ThinkingcatRHD copy the bio/CA. Flag handle-collision. [verified S6 S13] [claim S17]

## Product and economics

PonsLaunchFactory 0xA5aA…1feB create2-deployed PonsLauncherToken via launchToken from 0x934e92…782a at 2026-07-19T07:54:03Z. Supply 1e9*1e18. TokenLaunched poolId/pool 0x2b0D…0E9e against WETH 0x0Bd7…AD73 fee 10000. launchFactory() on the token returns that factory. liquidityPool() returns the same Uniswap v3 pool. [verified S4 S5 S6 S14]

Verified token source mints to the factory, sets launchFactory to msg.sender, and has no owner(). LP NFT 223724 was transferred to PonsLaunchLocker 0x736D…7F35. maxTxBps 550 and maxWalletBps 500 are immutable. Restriction window is two blocks (RPC launchBlock 25565387 / end 25565389). Secondary HMM/USDG, HMM/ETH, and HMM/PONS books exist on DexScreener with far less liquidity than the WETH book. [verified S2 S6 S7 S14]

HMM/WETH Uniswap v3 1% 24h volume is 2314392.69 USD and reserve_in_usd is 689642.48 at 2026-09-03T04:24:00Z from the Gecko pool endpoint. fdv_usd is 21381671.07. Gecko token volume_usd.h24 is 2814703.17 across all pools, not the WETH book. [claim S8 S9]

DexScreener same pair: liquidity.usd 833648.52, volume.h24 2463016.35, fdv/marketCap 21906374. Blockscout holders_count 14666. Pair created 2026-07-19T07:54:03Z. [claim S1 S7]

Gecko labels the book dex pons-dot-family while Blockscout names the pool UniswapV3Pool created by UniswapV3Factory 0x1f7d…2EfA. [claim S8 S15]

## Communications

@gornx0x posted a Wirebot test launch for Thinking Cat [verified S6 S13]

Netlify vote page posted as Robinhood Top 100 listing [claim S18]

@whalewatchRH printed HMM whale buys [claim S19]

@thinkingcatRH posted with CA in the bio [verified S11 S12]

## Findings

USD liquidity figures count HMM plus WETH, not a USDG backstop. DexScreener and Gecko disagree on the same pool's reserve ($833k vs $690k). Ticker HMM collides with unrelated search terms. Lookalike handles copy the CA. A Netlify "Top 100" vote URL is a third-party-link. [claim S10]

- Quote token is WETH, so pool USD reserve is HMM plus ETH, not USDG. [verified S7 S8]
- DexScreener liquidity and Gecko reserve on the same pool disagree by ~$144k. [claim S7 S8]
- Handle-collision on three lookalike X accounts that copy the CA. [claim S17]
- Netlify vote URL is a third-party-link / copypasta-pattern. [claim S18]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/pool and launchToken 0xb737bacd…94b3 plus TokenLaunched/PositionLocked logs, RPC name/symbol/launchFactory/liquidityPool/socials, DexScreener, Gecko pool/token/pools, hmmmm.fun, @thinkingcatRH, @gornx0x, lookalike search, and the vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S10]
- Numbers: 2314392.69 is the Gecko HMM/WETH 1% pool 24h volume, not the 2814703.17 token all-pools figure. Reserve 689642.48 is that pool. DexScreener 2463016.35 / 833648.52 is the same pair, different aggregator. Holders 14666 is live Blockscout (assignment hint was 14667). [claim S1 S7 S8 S9]
- Adversarial: the strongest contrary reading is that HMM is the Pons protocol, a Wire product, or the Squeeze factory. Factory name is PonsLaunchFactory and census Pons is the pad; Wire is the launch command path; Squeeze tape reused that factory address as a scanner input. hmmmm.fun / @thinkingcatRH bidirectionally name this CA. [inference S3 S10 S11 S13]

## Sources

- S1 — Token 0x7FE9…D87f Thinking Cat / HMM.
- S2 — PonsLauncherToken verified source.
- S3 — Address 0xA5aA…1feB PonsLaunchFactory.
- S4 — launchToken tx 0xb737bacd…94b3.
- S5 — eth_getCode, name, symbol on HMM.
- S6 — launchFactory(), liquidityPool(), socials().
- S7 — latest/dex/tokens HMM.
- S8 — HMM/WETH 1% Uniswap v3 pool.
- S9 — Thinking Cat token.
- S10 — $HMM site.
- S11 — Thinking Cat profile.
- S12 — Everyone wants to know what’s next.
- S13 — test launch Thinking Cat via @wirebotRH.
- S14 — TokenLaunched and PositionLocked logs.
- S15 — Address 0x2b0D…0E9e UniswapV3Pool.
- S17 — thinkingcatRH HMM Thinking Cat.
- S18 — HMM Robinhood Top 100 vote.
- S19 — FRONG whale bought HMM.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
