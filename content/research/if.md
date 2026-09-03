---
slug: if
coverage: stub
methodology_version: proofline-v1.0
---

# IF — research record

## Identity

IF is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned into a Uniswap v3 pool quoted against WETH. NOXA Launch Factory deploys What If (IF) in one method-0x686399cb call and seeds the IF/WETH 1% book. Traders buy and sell IF on Uniswap v3. whatifonhood.com publishes the contract address.

Themes: memecoin, launchpad:noxa, weth-paired

## Deployment

IF token (LaunchToken): 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 on robinhood-chain. [verified S1 S2 S5]

NOXA Launch Factory: 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB on robinhood-chain. [verified S3 S5]

WETH pair token: 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S5 S16]

IF/WETH Uniswap v3 pool: 0x39A200271525E9641e799127bdAB299DAeF21953 on robinhood-chain. [claim S4 S5 S7]

LaunchLocker (LP NFT 70641): 0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85 on robinhood-chain. [verified S5 S17 S18]

## Control

token owner() reverts. ABI has no owner. Factory owner() and LaunchLocker owner() both return EOA 0x7E03…242B, which also created the factory. collectFees splits protocolFeeShare/100 to protocolFeeRecipient 0x9efd…0417; live protocolFeeShare is 100. Deployer 0x84F8…4afA can setFeeRedirect. Launch-block buy block plus maxWalletBps 200 / maxTxBps 10000 for restrictionBlocks 366. [verified S5 S17]

## Security

LaunchToken and LaunchLocker are partially verified on Blockscout (contracts/LaunchToken.sol, contracts/LaunchLocker.sol, compiler v0.8.30). Factory 0xD9eC…FccB is unverified. No audit report URL was located this pass. [verified S2 S3 S17] [unknown]

## Engineering

_Research pending._

## Team

whatifonhood.com JS publishes CA 0x232C…30d1, @WhatIFonHOOD, and t.me/WhatIFonHoodChain. Telegram preview embeds the CA (3888 members). @WhatIFonHOOD bio has no CA; Latest from:WhatIFonHOOD this pass did not embed 0x232C. Flag unconfirmed-official for the handle. Constructor twitter is @0xNaruza status 2075800359537127925, 16 seconds before the create tx. [claim S8 S12 S13 S14]

X user search also returned @WhatlFonHOOD (lowercase L) with the CA in the bio. Flag handle-collision. [claim S15]

## Product and economics

Launch factory 0xD9eC…FccB clones LaunchToken. Method 0x686399cb from 0x84F8…4afA at 2026-07-11T04:32:42Z minted What If / IF supply 1e9*1e18 into Uniswap v3 pool 0x39A2…1953 against WETH 0x0Bd7…AD73 at fee 10000. launchFactory() on the token returns that factory. PositionLocked sent NFT 70641 to LaunchLocker 0x7F03…Cd85. TokenLaunched initialBuyAmount 0.17 ETH. Constructor socials.twitter is a @0xNaruza status URL; other socials fields are empty. [verified S2 S4 S5 S18]

Secondary IF/USDG Uniswap v3 and smaller v4 ETH/USDG books exist on DexScreener with far less liquidity than the WETH book. A dust Uniswap v2 XPONS/IF pair is not a Pons launch of IF. [claim S7]

IF/WETH Uniswap v3 24h volume is 369110.82 USD and liquidity.usd is 380142.8 at 2026-09-03T05:42:38Z from DexScreener latest/dex/tokens. fdv/marketCap is 6952019. Secondary IF/USDG v3 volume.h24 is 162429.09. [claim S7]

Blockscout holders_count 6931. Dead address holds 9.3578% of supply. Pair created 2026-07-11T04:32:42Z. Assignment lead of holders 6933 was not reproduced; live holders_count is 6931. Gecko GET returned 429 and was skipped. [claim S1]

## Communications

@WhatIFonHOOD posted 6,909 holders at day 53 [claim S10]

@WhatIFonHOOD posted more than 9% of supply burned [claim S9]

@0xNaruza posted the constructor twitter URL [claim S8]

## Findings

LaunchLocker owner and factory owner are the same EOA, and protocolFeeShare is 100, so collected LP fees currently route to a protocol recipient. @WhatIFonHOOD bio does not embed the CA. A lookalike handle and a third-party claim portal reuse the address. [claim S12]

- LaunchLocker protocolFeeShare is 100 and owner is an EOA that also owns the unverified factory. [verified S5 S17]
- @WhatIFonHOOD bio does not embed the CA; constructor twitter is a different handle. [claim S8 S14]
- handle-collision: @WhatlFonHOOD (lowercase L) presents the CA. [claim S15]
- copypasta-pattern / third-party-link: crypto-keo.netlify.app claim URL posted against this CA. [claim S20]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/factory/pool/WETH/locker and create tx 0x00889365…287c, RPC name/symbol/factory/pairToken/liquidityPool/owner/protocolFeeShare, DexScreener tokens API, whatifonhood.com HTML+JS, Telegram preview, @WhatIFonHOOD / @0xNaruza / lookalike / claim-portal posts, and the 49-row census were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S12]
- Numbers: 369110.82 is the DexScreener IF/WETH v3 pair 24h volume, not Blockscout token volume_24h 595253. Liquidity 380142.8 is that pool. Holders 6931 is Blockscout holders_count. [claim S1 S7]
- Adversarial: the strongest contrary reading is that IF is packed What The Hook (WTH) or a stock-paired pad token. WTH is 0xb8Fa…fF79 / hook 0xc52f…54c0 at whatthehook.io; IF is 0x232C…30d1 quoting WETH via NOXA factory 0xD9eC…FccB. [inference S1 S11]

## Sources

- S1 — Token 0x232C…30d1 What IF / IF.
- S2 — LaunchToken verified source.
- S3 — Address 0xD9eC…FccB Launch Factory.
- S4 — create tx 0x00889365…287c.
- S5 — eth_getCode, name, symbol, launchFactory(), pairToken().
- S7 — latest/dex/tokens IF.
- S8 — What if you didn’t fade it?.
- S9 — More than 9% of the original $IF supply has already been burned.
- S10 — $IF is 53 days old.
- S11 — what-the-hook census row.
- S12 — whatifonhood.com.
- S13 — t.me/WhatIFonHoodChain.
- S14 — X profile.
- S15 — WhatIFonHOOD lookalikes.
- S16 — Token 0x0Bd7…AD73 WETH.
- S17 — LaunchLocker verified source.
- S18 — PositionLocked / TokenLaunched logs.
- S20 — $IF holders Eligibility check.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:46:00Z; methodology_version: proofline-v1.0.
