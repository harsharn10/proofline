---
slug: pair
coverage: stub
methodology_version: proofline-v1.0
---

# PAIR — research record

## Identity

PAIR is classified as Stock-paired token factory.

A multipool stock-paired launchpad on Robinhood Chain. A creator deploys a fixed-supply ERC-20 through PairLaunchpadV5 in one transaction; the factory seeds permanently locked Uniswap v4 pools against one to five Robinhood stock tokens. The protocol token PAIR trades versus SPY. PAIR Labs runs it at pair.fund / @pairdotfund.

Themes: launchpad, rwa, stock-paired:SPY

## Deployment

PAIR token (created by V5 launchpad): 0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be on robinhood-chain. [verified S4 S9 S10 S13]

PairLaunchpadV5 EIP-1967 proxy (press V5 launchpad): 0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62 on robinhood-chain. [verified S1 S11 S12 S15]

PairLaunchpadV5Upgradeable implementation: 0x56CF3AEE42Bc5a1DdAe79e275deaBC97B09484db on robinhood-chain. [claim S11 S12]

Launchpad owner() contract: 0x3Da42DBECBEFf476c027f8298bfAd0d6C3Ba5656 on robinhood-chain. [verified S16]

## Control

Proxy owner() returns 0x3Da42D…5656, a contract with 1980 bytes of unverified code created by EOA 0x18Fe…00eA, the same key that deployed the proxy. Implementation ABI includes `upgradeToAndCall`, `transferOwnership`, `setLaunchFee`, `rotateLaunchV2Dependencies` and `withdrawLaunchFees`. EIP-1967 admin slot is zero. [verified S11 S12 S16]

Token 0x6b1d…66be is_verified false. Implementation 0x56CF…84db became fully verified on Blockscout at 2026-09-03T01:42:47Z. Press dated 2026-08-31 says every contract is verified. [verified S9 S12] [claim S15]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

@pairdotfund display name is PAIR; the bio describes a multipool Uniswap v4 hook pad. pair.fund JS links that handle and github.com/pairdotfund. The GitHub user exists with 0 public repositories. Press names PAIR Labs by Luxington and founder Tugg (@0xTugg), and also @pairecosystem, whose bio features @pairdotfund. [verified S1 S3 S18] [claim S15 S20]

@paird0tfund uses the same display name and bio; pair.fund does not link it. [claim S19]

Census LONG and Pons share the launchpad/stock-paired neighborhood only. [claim S1 S3]

## Product and economics

A launch is one call to `launchTokenMulti` on PairERC1967Proxy 0x8660…Ae62. The PAIR token was created that way on 2026-08-29T19:07:54Z with a single quote, SPY 0x117c…4C0C at 10000 bps. [verified S13 S17]

pair.fund/docs describes the same proxy as a UUPS entry that deploys a fixed 1,000,000,000 ERC-20, seeds locked Uniswap v4 pools, and records an informational graduation flag. Named components: PairV4Hook, PairV4Locker, PairV5MultiPoolAggregator, PairPriceOracle. Those satellite addresses were not eth_called this pass. [claim S2]

The GlobeNewswire note says there is no bonding curve and no liquidity migration, a 0.0005 ETH launch fee, and a 1 percent swap fee split 70/30 creator/protocol. That fee path was not reproduced on chain this pass. [claim S15]

DexScreener PAIR/SPY Uniswap v4 (pool id 0xf224a070…c001): liquidity $261,374.52, 24h volume $1,291,403.98, fdv $4,832,696 at 2026-09-03T02:52Z. A PAIR/USDG book shows liquidity $233,115.97 and 24h volume $735,688.55. Blockscout holders_count 4300. [verified S10 S14]

Official account on 2026-09-02 posted almost $40M all-time volume, over $250,000 creator rewards and over $400,000 PAIR burnt. Press on 2026-08-31 posted $26M all-time volume after five days of V5. DefiLlama has a PAIR / pairdotfund launchpad row with dummy.js and empty currentChainTvls. [claim S7 S15]

## Communications

Official account posted stock-token pools stay open over the weekend [claim S8]

Official account posted a verification pass before open-sourcing [claim S6]

Official account posted nearly $40M volume and $400k PAIR burns [claim S7]

PAIR Labs posted a public launch and AWS partnership [claim S15]

Official account posted the PAIR protocol token live [claim S4]

Official account posted the multipool launchpad back live [claim S5]

## Findings

The V5 launchpad is an EIP-1967 UUPS proxy. owner() is an unverified contract that can take upgrade and fee-withdraw paths named in the implementation ABI, with no timelock in that ABI. The PAIR token source is not verified on the explorer. Official all-time volume figures are posts, not a reproduced chain slice. [claim S1]

- V5 is a UUPS proxy whose owner() is an unverified contract; the ABI names upgrade and fee-withdraw functions with no timelock. [verified S12 S16]
- PAIR token source is not verified on Blockscout. [verified S9]
- Press says every contract is verified and that GitHub holds the source; the token is unverified and the GitHub user has 0 public repos. [disputed S9 S15 S18]
- All-time volume is an official post, not a reproduced explorer or Llama chain slice. [claim S7]
- No audit report was located this pass. [unknown]

- Receipts: pair.fund and /docs, @pairdotfund profile and six posts, Blockscout API v2 plus RPC for the token, proxy, implementation and owner, the launchTokenMulti transaction, DexScreener token API, GitHub user API, GlobeNewswire reprint, @paird0tfund and @pairecosystem were opened on 2026-09-03; excerpts are copied from those pages. [verified S1 S3 S9 S11 S13 S14]
- Numbers: DexScreener figures are the named PAIR/SPY Uniswap v4 pair on chain robinhood, not an all-chains total. Holders is Blockscout holders_count. The $40M and $26M figures are project posts. [verified S10 S14] [claim S7 S15]
- Adversarial: the strongest contrary reading is that PAIR is LONG, Pons, or an unverified copy at @paird0tfund. Handles, domains and the launchTokenMulti creator on 0x8660…Ae62 argue against LONG and Pons; the site JS links only @pairdotfund. [verified S1 S13] [claim S3 S19]

## Sources

- S1 — pair.fund.
- S2 — pair.fund/docs architecture copy.
- S3 — @pairdotfund profile.
- S4 — PAIR protocol token is now live.
- S5 — We are now back LIVE.
- S6 — Verification process before open source.
- S7 — Daily recap almost $40M volume.
- S8 — Stock token pools never closed.
- S9 — Address 0x6b1d…66be PAIR token.
- S10 — Token 0x6b1d…66be.
- S11 — Address 0x8660…Ae62 PairERC1967Proxy.
- S12 — Address 0x56CF…84db PairLaunchpadV5Upgradeable.
- S13 — Tx 0x00e0b810… launchTokenMulti PAIR.
- S14 — PAIR token pairs on robinhood.
- S15 — PAIR launches the first multipool RWA launchpad on Robinhood Chain.
- S16 — Address 0x3Da4…5656 launchpad owner().
- S17 — Token 0x117c…4C0C SPY.
- S18 — github.com/pairdotfund.
- S19 — @paird0tfund profile.
- S20 — @pairecosystem profile.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:55:00Z; methodology_version: proofline-v1.0.
