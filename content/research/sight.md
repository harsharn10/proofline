---
slug: sight
coverage: stub
methodology_version: proofline-v1.0
---

# Sight — research record

## Identity

Sight is classified as Prediction market.

Robinhood Chain memecoin UP/DOWN prediction app: users stake ETH on whether a token's Uniswap price rises or falls over a roughly 15-minute round, then claim from the round contract. Access is invite-gated in docs and, from 14 September 2026, NFT-holder only per @sight_hood. Sight Genesis is a 1,776-supply ERC-721 on chain 4663. sighthood.com and @sight_hood run the product.

Themes: prediction, nft, memecoin

## Deployment

Sight Genesis ERC-721: 0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D on robinhood-chain. [verified S9 S10 S11 S12]

ERC721SeaDropCloneable: 0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A on robinhood-chain. [verified S10 S12 S22]

ERC721SeaDropCloneFactory: 0x008EbCCaE39d001200c3003c3225ce0A00690066 on robinhood-chain. [verified S11 S23]

Sight Genesis owner: 0x4de0D3A415E1109Fb55702Da2989Dd9D5d912584 on robinhood-chain. [claim S10 S11 S12]

## Control

Sight Genesis 0x6F28…a84D is an EIP-1167 clone of ERC721SeaDropCloneable 0x09a2…Dd6A, created 2026-08-30T21:13:38Z via ERC721SeaDropCloneFactory `createClone` name Sight Genesis symbol SIGHT. `owner()` returns EOA 0x4de0…2584, which has no code. Allowed SeaDrop is 0x00005EA0…. [verified S10 S11 S12]

## Security

No audit report was located for PredictionRound. Docs state rounds run in deployed contracts and that Uniswap spot or TWAP can differ from a CEX chart. [unknown] [claim S30]

## Engineering

_Research pending._

## Team

@sight_hood lists sighthood.com. OpenSea collection sight-genesis-826300567 lists the same domain, twitter_username sight_hood, and contract 0x6f28…a84d on chain robinhood. docs.sighthood.com is Sight Docs. [verified S4 S8 S9]

@booj1e bio is founder @sight_hood. t.me/sight_hood lists sighthood.com and about 4 subscribers; the X bio does not list Telegram. No repository URL was located. [claim S26 S27]

Census Meridian is a separate prediction-market name. Keep both slugs. [claim S5 S8]

## Product and economics

Docs: a market is a listed memecoin; a round is an on-chain UP/DOWN contest, typically about 15 minutes, with betting locked in the last ~30 seconds. Settlement is native ETH on Robinhood Chain. Price to beat vs close comes from Uniswap Token/WETH. Winners split a parimutuel pot after a 2% protocol fee. Ties or empty winning side enter refund mode. [claim S5 S6 S7]

Invite codes: one single-use code to join; two codes to share. Wallet login is Privy. Claims are a separate transaction within 14 days of resolve, then `sweepUnclaimed()` may send remaining ETH to the fee recipient. [claim S28 S29]

@sight_hood 2 Sep: Genesis holders receive a share of platform fees; the platform launches 14 Sep; access is NFT holders only. First markets are token prices; later NFT floor and volume; then stocks and RWA. The homepage is still a waitlist. The app page showed Connecting…. [claim S4 S13 S24]

Sight Genesis `totalSupply()` is 1776 at block 53080668. Blockscout holders_count is 1175. OpenSea stats one_day volume is 19.34 ETH and 3063 sales; num_owners 1178. The 19.34 ETH figure is OpenSea's interval, not a DexScreener pair. [claim S10 S21] [verified S12]

@sight_hood posted sold out at supply 1776 on 2 Sep. DefiLlama has no Sight protocol row. DexScreener token-pairs for 0x6F28…a84D returned []. [claim S14]

## Communications

Holders get fee share; platform 14 Sep, NFT-only [claim S13]

Sight Genesis mint sold out at 1,776 [claim S14]

Sight Genesis mint is live on OpenSea [claim S15]

Sight posts September 14 launch date [claim S19]

OpenSea Sight Genesis collection page is live [claim S16]

Account posts it does not have a token [claim S17]

Sight Genesis mint details: 2 Sep, 1776 [claim S18]

## Findings

PredictionRound and UniswapPrice addresses were not located, so round custody is unread. Unclaimed ETH may be swept after 14 days. One EOA owns the Genesis clone. Blockscout lists other SIGHT-ticker contracts besides 0x6F28…a84D. [claim S4]

- PredictionRound / UniswapPrice addresses were not reproduced; round ETH custody is unread. [claim S6]
- Unclaimed winnings may be swept after 14 days. [claim S28]
- One EOA owns the Genesis SeaDrop clone. [verified S12]
- Flag: ca-collision — Blockscout lists ERC-20s named Sight / SIGHT besides the Genesis ERC-721. [claim S20]
- Uniswap pool data is the resolution source. [claim S30]

- Receipts: sighthood.com, docs (intro, rounds, fees, claiming, FAQ, risks), app, quest, @sight_hood profile and posts, @booj1e, OpenSea collection and stats, Blockscout NFT/impl/factory/createClone/ERC-20, RPC, and t.me/sight_hood were opened on 2026-09-03 and excerpts copied from the responses. [verified S4 S5 S10 S12]
- Numbers: holders 1175 is the Blockscout token count, not OpenSea num_owners 1178. Volume 19.34 ETH is OpenSea one_day volume, not an all-chains TVL. totalSupply 1776 is the RPC return. [claim S10 S21] [verified S12]
- Adversarial: the strongest contrary reading is that Sight has no Robinhood product and the OpenSea collection is unrelated. createClone from 0x4de0… with name Sight Genesis, OpenSea project_url sighthood.com, and the @sight_hood mint posts argue they are the same name; PredictionRound still missing keeps lifecycle announced. [inference S9 S11 S13]

## Sources

- S4 — Sight homepage.
- S5 — Introduction - Sight Docs.
- S6 — How rounds work.
- S7 — Fees & refunds.
- S8 — Sight profile.
- S9 — Collection sight-genesis-826300567.
- S10 — Address 0x6F28…a84D Sight Genesis.
- S11 — createClone tx 0xaf8ce62d….
- S12 — eth_getCode, name, symbol, totalSupply, owner.
- S13 — Genesis NFTs are not just a collection.
- S14 — Sold out.
- S15 — Mint is live.
- S16 — Our OpenSea page is live.
- S17 — We DO NOT have a token.
- S18 — Sight Genesis NFT mint details.
- S19 — September 14.
- S20 — Token 0x1865…7DC0 Sight ERC-20.
- S21 — Sight Genesis collection stats.
- S22 — Address 0x09a2…Dd6A ERC721SeaDropCloneable.
- S23 — Address 0x008E…0066 ERC721SeaDropCloneFactory.
- S24 — Sight app.
- S26 — t.me/sight_hood.
- S27 — Boo profile.
- S28 — Claiming & 14-day window.
- S29 — FAQ - Sight Docs.
- S30 — Risks - Sight Docs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
