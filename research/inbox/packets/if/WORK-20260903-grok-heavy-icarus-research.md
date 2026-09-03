---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: if
name: IF
packet_tier: seed
as_of: 2026-09-03T05:46:00Z
prior_packet: null
supersedes: null
owned_slugs: [if]
allowed_paths:
  - research/inbox/packets/if/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: IF
  aliases: ["What IF", "What If", "What $IF"]
  symbols: [IF]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://whatifonhood.com
  official_handle: "@WhatIFonHOOD"
  repository: "NULL — no GitHub org or repository URL on whatifonhood.com JS, DexScreener, Blockscout, Telegram preview, or X search this pass"
  possible_matches:
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at whatthehook.io / @whatthehookv4 with token 0xb8Fa8010833463Aac5595b55B9045479239EfF79 and hook 0xc52fc52698479E42F0dA9a8a75296EC3871454c0"
        - "IF is LaunchToken What If / IF at 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 via NOXA factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB, site whatifonhood.com / @WhatIFonHOOD"
        - "Tickers IF vs WTH; no shared domain, handle, or reproduced address"
    - slug: noxa
      signals: [shared-deployer]
      contrary_signals:
        - "Census NOXA Fun is the launchpad at noxa.fun / @Noxa_Fi with factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
        - "IF is the ERC-20 at 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener and site socials are @WhatIFonHOOD, not @Noxa_Fi"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun with token 0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c"
        - "IF is a Uniswap v3 WETH-book LaunchToken, not a hook marketplace"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily"
        - "IF creator_address_hash is NOXA factory 0xD9eC…FccB, not a Pons factory; DexScreener lists a dust Uniswap v2 XPONS/IF book where IF is the quote"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily; Bitquery current factory 0x5fcc1df0…452c"
        - "IF is a NOXA LaunchToken from factory 0xD9eC…FccB minted straight into Uniswap v3, not 0x5fcc…452c"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x232C…30d1 is a verified LaunchToken with 4830 bytes of code on 4663; creator_address_hash and launchFactory() are NOXA factory 0xD9eC…FccB; create tx 2026-07-11T04:32:42Z minted What If / IF into Uniswap v3 IF/WETH 1% pool 0x39A2…1953. DexScreener lead book is that WETH pair (liq 380142.8 volume.h24 369110.82). Site JS publishes the CA and @WhatIFonHOOD. Distinct from packed What The Hook. [R-1] [R-4] [R-5] [R-7] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://whatifonhood.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/WhatIFonHOOD", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/WhatIFonHoodChain", authenticity: confirmed }

deployments:
  - label: IF token (LaunchToken)
    role: token
    address:
      value: "0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:39:58Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: NOXA Launch Factory
    role: factory
    address:
      value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:20Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-5]
  - label: WETH pair token
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:20Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-16]
  - label: IF/WETH Uniswap v3 pool
    role: other
    address:
      value: "0x39A200271525E9641e799127bdAB299DAeF21953"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:20Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-7]
  - label: LaunchLocker (LP NFT 70641)
    role: other
    address:
      value: "0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:20Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-17, R-18]

metrics:
  - { kind: volume_24h, value: 369110.82, currency: USD, as_of: 2026-09-03T05:42:38Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 IF/WETH Uniswap v3 pair 0x39A2…1953 volume.h24 (lead book, not an all-pairs figure)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 380142.8, currency: USD, as_of: 2026-09-03T05:42:38Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 IF/WETH Uniswap v3 pair 0x39A2…1953 liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 6952019, currency: USD, as_of: 2026-09-03T05:42:38Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 IF/WETH pair fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 6931, currency: null, as_of: 2026-09-03T05:39:58Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:42:40Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32b735f (53179231). Token 0x232C…30d1 eth_getCode 4830 bytes prefix 60806040. name What If, symbol IF, decimals 18, totalSupply 1e27. owner() reverts. launchFactory() 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. pairToken() 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. poolFee 10000. liquidityPool() 0x39A200271525E9641e799127bdAB299DAeF21953. deployer() 0x84F8E5a324466Deb7447048C014CF0245ce04afA. socials().twitter https://x.com/0xNaruza/status/2075800359537127925?s=20; telegram/discord/website/farcaster empty. maxWalletBps 200 maxTxBps 10000 restrictionBlocks 366 launchBlock 25507001 restrictionEndBlock 25507367. Factory code 22811 B owner() 0x7E035Fb048a31e0481b88074557415b1C187242B. WETH symbol WETH. Deployer EOA code 0x. Locker 0x7F03…Cd85 code 4823 B owner() 0x7E03…242B factory() 0xD9eC…FccB protocolFeeShare 100 protocolFeeRecipient 0x9efd…0417." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:40:20Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-17, R-18], result: "Blockscout api/v2 token 0x232C…30d1 name What IF symbol IF holders_count 6931 total_supply 1e27. Address is_contract true is_verified true name LaunchToken creator 0xD9eC…FccB tx 0x00889365…287c 2026-07-11T04:32:42Z block 6657668 method 0x686399cb from EOA 0x84F8…4afA to factory tagged Launch Factory is_verified false. Source contracts/LaunchToken.sol compiler v0.8.30 is_partially_verified true verified_at 2026-07-14T20:41:37Z. TokenDeployed token 0x232C…30d1 deployer 0x84F8…4afA dexFactory 0x1f7d…2EfA pairToken WETH. PoolCreated fee 10000 pool 0x39A2…1953 name UniswapV3Pool is_verified true. PositionLocked NFT 70641 to LaunchLocker 0x7F03…Cd85 is_verified true. TokenLaunched initialBuyAmount 0.17e18. Top holder 0x000…dEaD 9.3578% of supply." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:42:38Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x232C…30d1: 8 robinhood pairs. Lead IF/WETH Uniswap v3 0x39A2…1953 liquidity.usd 380142.8 volume.h24 369110.82 fdv/marketCap 6952019 pairCreatedAt 1783744362000 (2026-07-11T04:32:42Z) priceUsd 0.007669. Second IF/USDG v3 0xA332…4dD0 liq 57408.73 vol.h24 162429.09. info.websites https://whatifonhood.com/#token info.socials https://x.com/WhatIFonHOOD and https://t.me/WhatIFonHoodChain." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:43:40Z, receipt_ids: [R-12, R-13, R-14], result: "GET whatifonhood.com HTTP 200 title $IF — What $IF · Robinhood Chain twitter:site @WhatIFonHOOD. Bundle /assets/index-DZ61FrkK.js contractAddress 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 handle @WhatIFonHOOD telegram t.me/WhatIFonHoodChain DexScreener pool 0x39a2…1953. t.me/WhatIFonHoodChain og:title What $IF on Robinhood Chat; og:description embeds 0x232cdfc415d10b673845d83dc02ba2eabe7e30d1; 3888 members. @WhatIFonHOOD bio has no CA; from:WhatIFonHOOD Latest this pass did not embed 0x232C." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "NOXA LaunchToken ERC-20; constructor mints 1e9*1e18 to launchFactory; pairToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; poolFee 10000 (1%); liquidityPool Uniswap v3 0x39A200271525E9641e799127bdAB299DAeF21953. create tx 0x00889365…287c from 0x84F8…4afA called factory 0xD9eC…FccB method 0x686399cb at 2026-07-11T04:32:42Z. PositionLocked NFT 70641 to LaunchLocker 0x7F03…Cd85. TokenLaunched initialBuyAmount 0.17 ETH.", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-2, R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "What If", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "IF", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-2, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@WhatIFonHOOD — site JS and twitter:site name it with the CA; bio has no CA; from:WhatIFonHOOD Latest this pass did not embed 0x232C; constructor socials.twitter is a @0xNaruza status URL; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:43:40Z, receipt_ids: [R-7, R-8, R-12, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from census What The Hook (WTH 0xb8Fa…fF79 / hook 0xc52f…54c0 / whatthehook.io). IF is a NOXA LaunchToken quoting WETH, not an MEV hook. Shared-deployer with census NOXA Fun factory 0xD9eC…FccB only.", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-3, R-5, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "IF/WETH Uniswap v3 24h volume 369110.82 USD and liquidity.usd 380142.8 at 2026-09-03T05:42:38Z (DexScreener lead pair, not all-pairs). Secondary IF/USDG v3 volume.h24 162429.09 liq 57408.73.", class: verified, observed_at: 2026-09-03T05:42:38Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: 6931, class: verified, observed_at: 2026-09-03T05:39:58Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener IF/WETH fdv/marketCap 6952019 at 2026-09-03T05:42:38Z; priceUsd 0.007669", class: verified, observed_at: 2026-09-03T05:42:38Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; ABI has no owner. Factory owner() and LaunchLocker owner() both return EOA 0x7E035Fb048a31e0481b88074557415b1C187242B. protocolFeeShare 100 (percent of collected LP fees to protocolFeeRecipient 0x9efdc1a8e6e94f16a228e44f3025e1f346ee0417).", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-5, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchLocker collectFees callable by owner, launched.deployer 0x84F8…4afA, or feeCollectors; setFeeRedirect is deployer-only; setProtocolFeeShare/setProtocolFeeRecipient/setFeeCollector are onlyOwner. Launch-block buy block plus maxWalletBps 200 / maxTxBps 10000 for restrictionBlocks 366.", class: verified, observed_at: 2026-09-03T05:43:40Z, receipt_ids: [R-2, R-5, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA pool 0x39A2…1953. ETH-book, not a stock quote.", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-5, R-7, R-16], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is Launch Factory 0xD9eC…FccB, not Pons, LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:40:20Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, whatifonhood.com, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T05:43:40Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "handle-collision: X user search also returned @WhatlFonHOOD (lowercase L) with bio ONLY Contract Address 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30 d1, 333 followers, vs @WhatIFonHOOD 2704 followers named on the site", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "copypasta-pattern / third-party-link: @fomokidpump_gew posted crypto-keo.netlify.app/claim?contract=0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1", class: claim, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.domain, value: "https://whatifonhood.com — GET 200; JS contractAddress 0x232C…30d1", class: verified, observed_at: 2026-09-03T05:43:40Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-5, R-17, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: candidate, value: "if | IF | @WhatIFonHOOD | whatifonhood.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:46:00Z, receipt_ids: [R-1, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: identity.alias, value: "What If (RPC name() and constructor); Blockscout token name What IF; site title What $IF", class: verified, observed_at: 2026-09-03T05:42:40Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-25, field: other, value: "Onchain constructor socials.twitter is https://x.com/0xNaruza/status/2075800359537127925 posted 2026-07-11T04:32:26Z (What if you didn’t fade it?), 16 seconds before the create tx. @0xNaruza bio does not name the CA. Not treated as official_handle.", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-2, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "dead address 0x000…dEaD holds 93578227684460048650200861 IF (9.3578% of 1e27). @WhatIFonHOOD 2026-09-01 posted More than 9% of the original $IF supply has already been burned.", class: verified, observed_at: 2026-09-03T05:40:20Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener IF/WETH 24h volume $369k, liquidity $380k"
    summary: "Lead Uniswap v3 IF/WETH 0x39A2…1953 volume.h24 369110.82 liquidity.usd 380142.8 fdv 6952019. Secondary IF/USDG v3 volume.h24 162429.09."
    occurred_at: 2026-09-03T05:42:38Z
    observed_at: 2026-09-03T05:42:38Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@WhatIFonHOOD posted 6,909 holders at day 53"
    summary: "$IF is 53 days old. 6,909 wallets hold it today. That's 130 new holders for every single day this thing has existed. Live Blockscout holders_count 6931."
    occurred_at: 2026-09-02T12:30:00Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "@WhatIFonHOOD posted more than 9% of supply burned"
    summary: "More than 9% of the original $IF supply has already been burned. Dead address holds 9.3578% on Blockscout."
    occurred_at: 2026-09-01T22:30:00Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: onchain
    title: "Launch Factory minted What If / IF into Uniswap v3"
    summary: "Tx 0x00889365…287c from 0x84F8…4afA at 2026-07-11T04:32:42Z; TokenLaunched pool 0x39A2…1953 positionId 70641 initialBuyAmount 0.17 ETH."
    occurred_at: 2026-07-11T04:32:42Z
    observed_at: 2026-09-03T05:40:20Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-5
    type: ct
    title: "@0xNaruza posted the constructor twitter URL"
    summary: "Status 2075800359537127925 at 2026-07-11T04:32:26Z: What if you didn’t fade it? Stored as LaunchToken socials.twitter. Quotes @RobinhoodCrypto 2024 what if billion?"
    occurred_at: 2026-07-11T04:32:26Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-6
    type: risk
    title: "Third-party claim portal posted against the IF CA"
    summary: "@fomokidpump_gew posted crypto-keo.netlify.app/claim?contract=0x232C…30d1. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-03T03:52:34Z
    observed_at: 2026-09-03T05:42:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x232C…30d1 What IF / IF", url: "https://robinhoodchain.blockscout.com/address/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1", published_at: null, accessed_at: 2026-09-03T05:39:58Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-9, CLM-11, CLM-16, CLM-23, CLM-24, CLM-26], excerpt: "Chrome UA GET api/v2/tokens and /addresses. hash 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 name LaunchToken is_contract true is_verified true. token name What IF symbol IF decimals 18 total_supply 1e27 holders_count 6931. creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB creation_transaction_hash 0x00889365…287c. Holders #1 0x000…dEaD 9.3578% of supply." }
  - { id: R-2, publisher: Blockscout, title: "LaunchToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1?tab=contract", published_at: null, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-14, CLM-25], excerpt: "API v2 smart-contracts: name LaunchToken compiler v0.8.30 is_verified true is_partially_verified true file_path contracts/LaunchToken.sol verified_at 2026-07-14T20:41:37Z. Constructor name What If symbol IF supply 1e27 pairToken 0x0Bd7…AD73 poolFee 10000 maxWalletBps 200 restrictionBlocks 366. TokenInfo deployer 0x84F8…4afA twitter https://x.com/0xNaruza/status/2075800359537127925?s=20." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xD9eC…FccB Launch Factory", url: "https://robinhoodchain.blockscout.com/address/0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", published_at: null, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-16], excerpt: "hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB name null is_contract true is_verified false creator_address_hash 0x7E035Fb048a31e0481b88074557415b1C187242B creation_transaction_hash 0x5e512a7f9a931c4dc9b5b09d8dd5c80b66968cf393474b21e5613769df656b37. metadata tag Launch Factory. RPC eth_getCode 22811 bytes." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x00889365…287c", url: "https://robinhoodchain.blockscout.com/tx/0x008893650598c52ba959de3f82ad5b661c022a085ffcbf7db9b6234f6c3b287c", published_at: 2026-07-11T04:32:42Z, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, EVT-4], excerpt: "timestamp 2026-07-11T04:32:42.000000Z status ok result success block_number 6657668 from 0x84F8E5a324466Deb7447048C014CF0245ce04afA (is_contract false) to 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB method 0x686399cb. Logs: TokenDeployed token 0x232C…30d1; PoolCreated fee 10000 pool 0x39A2…1953; PositionLocked positionId 70641 locker 0x7F03…Cd85; TokenLaunched initialBuyAmount 170000000000000000." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory(), pairToken()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:42:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-9, CLM-13, CLM-14, CLM-15, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32b735f (53179231). Token code 4830 B. name What If symbol IF totalSupply 1e27. owner() reverts. launchFactory() 0xD9eC…FccB. pairToken() WETH 0x0Bd7…AD73. poolFee 10000. liquidityPool() 0x39A2…1953. deployer() 0x84F8…4afA. Factory and locker owner() 0x7E03…242B. protocolFeeShare 100. Deployer EOA code 0x." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x39A2…1953 UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0x39A200271525E9641e799127bdAB299DAeF21953", published_at: null, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15], excerpt: "hash 0x39A200271525E9641e799127bdAB299DAeF21953 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0x008893650598c52ba959de3f82ad5b661c022a085ffcbf7db9b6234f6c3b287c." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens IF", url: "https://api.dexscreener.com/latest/dex/tokens/0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1", published_at: null, accessed_at: 2026-09-03T05:42:38Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-12, CLM-15, CLM-17, CLM-23, EVT-1], excerpt: "8 robinhood pairs. Top pairAddress 0x39A200271525E9641e799127bdAB299DAeF21953 labels v3 base What If / IF quote WETH 0x0Bd7…AD73 liquidity.usd 380142.8 volume.h24 369110.82 fdv 6952019 marketCap 6952019 pairCreatedAt 1783744362000. info.websites https://whatifonhood.com/#token info.socials https://x.com/WhatIFonHOOD https://t.me/WhatIFonHoodChain. Second pair 0xA332Cd83bB137F2F9cA4b37114D7b979F63B4dD0 IF/USDG v3 liq 57408.73 vol.h24 162429.09." }
  - { id: R-8, publisher: "@0xNaruza", title: "What if you didn’t fade it?", url: "https://x.com/0xNaruza/status/2075800359537127925", published_at: 2026-07-11T04:32:26Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-25, EVT-5], excerpt: "What if you didn’t fade it? What if you held instead of selling for a small gain? What if this is the point people look back at and say it was obvious? Quotes @RobinhoodCrypto what if billion? 63 likes. Stored as LaunchToken socials.twitter. @0xNaruza bio: High-risk experimental tokens. No promises." }
  - { id: R-9, publisher: "@WhatIFonHOOD", title: "More than 9% of the original $IF supply has already been burned", url: "https://x.com/WhatIFonHOOD/status/2094915705304965512", published_at: 2026-09-01T22:30:00Z, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-3], excerpt: "More than 9% of the original $IF supply has already been burned. Gone permanently. That number only moves in one direction. Not a single token was airdropped. Every holder here chose to be here. 115 likes." }
  - { id: R-10, publisher: "@WhatIFonHOOD", title: "$IF is 53 days old", url: "https://x.com/WhatIFonHOOD/status/2095127097689977096", published_at: 2026-09-02T12:30:00Z, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "$IF is 53 days old. 6,909 wallets hold it today. That's 130 new holders for every single day this thing has existed. No airdrop. No presale. No team allocation. Every one of them went out and bought it." }
  - { id: R-11, publisher: Proofline census, title: "what-the-hook census row", url: "https://github.com/harsharn10/proofline/blob/334ca0619aa62e922da83f46de021f06d12348cf/content/census.yaml", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "slug what-the-hook name What The Hook symbols WTH handle @whatthehookv4 tree trading/hook-mev. 49 census rows; no slug if / What IF / 0x232C…30d1." }
  - { id: R-12, publisher: What $IF, title: "whatifonhood.com", url: "https://whatifonhood.com/", published_at: null, accessed_at: 2026-09-03T05:43:40Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-21, CLM-23, CLM-24], excerpt: "GET 200. title $IF — What $IF · Robinhood Chain. twitter:site @WhatIFonHOOD. canonical https://whatifonhood.com/. Bundle /assets/index-DZ61FrkK.js (344591 B) contractAddress 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 handle @WhatIFonHOOD telegram t.me/WhatIFonHoodChain DexScreener https://dexscreener.com/robinhood/0x39a200271525e9641e799127bdab299daef21953." }
  - { id: R-13, publisher: Telegram, title: "t.me/WhatIFonHoodChain", url: "https://t.me/WhatIFonHoodChain", published_at: null, accessed_at: 2026-09-03T05:43:22Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8], excerpt: "HTTP 200. og:title What $IF on Robinhood Chat. og:description $IF we can hold each other up and let faith and love fill our hearts, fear and greed will fade.0x232cdfc415d10b673845d83dc02ba2eabe7e30d1. tgme_page_extra 3888 members, 618 online." }
  - { id: R-14, publisher: "@WhatIFonHOOD", title: "X profile", url: "https://x.com/WhatIFonHOOD", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "Name What $IF on Robinhood Chain. Bio: What $IF? No spectators. Everybody is the dev. Born on Robinhood Chain. Followers 2704. Blue verified. Bio has no contract address this pass. Latest from:WhatIFonHOOD this pass did not embed 0x232C." }
  - { id: R-15, publisher: X user search, title: "WhatIFonHOOD lookalikes", url: "https://x.com/WhatlFonHOOD", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "User search WhatIFonHOOD returned @WhatIFonHOOD (2704 followers) and @WhatlFonHOOD (lowercase L, 333 followers) bio What $IF is a movement and everybody is the dev. Telegram: … ONLY Contract Address: 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30 d1. Also @What1FonHOOD unrelated football coach." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x0Bd7…AD73 WETH", url: "https://robinhoodchain.blockscout.com/address/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", published_at: null, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967 implementations aeWETH 0xC6B81b429797E0f555440b70cD99e032D7AE947e. token name WETH symbol WETH holders_count 526295." }
  - { id: R-17, publisher: Blockscout, title: "LaunchLocker verified source", url: "https://robinhoodchain.blockscout.com/address/0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85?tab=contract", published_at: null, accessed_at: 2026-09-03T05:43:22Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14, CLM-22], excerpt: "name LaunchLocker compiler v0.8.30 is_verified true is_partially_verified true file_path contracts/LaunchLocker.sol verified_at 2026-07-14T23:23:32Z. Ownable. collectFees: protocolAmount = amount * protocolFeeShare / 100. setProtocolFeeShare max 100. RPC protocolFeeShare 100 owner 0x7E03…242B protocolFeeRecipient 0x9efdc1a8e6e94f16a228e44f3025e1f346ee0417." }
  - { id: R-18, publisher: Blockscout, title: "PositionLocked / TokenLaunched logs", url: "https://robinhoodchain.blockscout.com/tx/0x008893650598c52ba959de3f82ad5b661c022a085ffcbf7db9b6234f6c3b287c", published_at: 2026-07-11T04:32:42Z, accessed_at: 2026-09-03T05:40:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22, EVT-4], excerpt: "PositionLocked token 0x232C…30d1 deployer 0x84F8…4afA positionId 70641 pairedToken 0x0Bd7…AD73 positionManager 0x7399…E0D3. TokenLaunched pool 0x39A2…1953 restrictionsEndBlock 25507367 initialBuyAmount 170000000000000000. UNI-V3-POS 70641 transferred factory -> LaunchLocker." }
  - { id: R-19, publisher: "@Henxhood", title: "What if $IF Times Square", url: "https://x.com/Henxhood/status/2094449460223037731", published_at: 2026-08-31T15:37:18Z, accessed_at: 2026-09-03T05:41:30Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "What if $IF is the exact meme that sends the entire market parabolic? @WhatIFonHOOD Ca:- 0x232cdfc415d10b673845d83dc02ba2eabe7e30d1" }
  - { id: R-20, publisher: "@fomokidpump_gew", title: "$IF holders Eligibility check", url: "https://x.com/fomokidpump_gew/status/2095359271105929706", published_at: 2026-09-03T03:52:34Z, accessed_at: 2026-09-03T05:42:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-6], excerpt: "$IF holders eating or what ?? Eligibility check looks live CA: 0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1 https://crypto-keo.netlify.app/claim?contract=0x232CDFc415D10b673845D83Dc02ba2eaBe7e30d1&cfg=evmdrop&pid=7Z7rw" }

gaps:
  - { priority: P0, question: "Does @WhatIFonHOOD bio or a post embed CA 0x232C…30d1 for a bidirectional official-handle link?", checked: "Bio has no CA; from:WhatIFonHOOD Latest this pass did not embed 0x232C; site JS and twitter:site name the handle with the CA; Telegram preview embeds the CA, 2026-09-03", next: "search older from:WhatIFonHOOD posts for the CA; re-read the bio after a pin" }
  - { priority: P0, question: "Why does launchBlock() return 25507001 while the creation tx is block 6657668?", checked: "Source is_partially_verified; launchBlock() 25507001 restrictionEndBlock 25507367 (= +366); Blockscout tx block_number 6657668; TokenLaunched restrictionsEndBlock 25507367, 2026-09-03", next: "compare deployed bytecode to LaunchToken.sol or decode whether the node reports a different numbering than Blockscout" }
  - { priority: P1, question: "Who controls locker owner 0x7E03…242B and protocolFeeRecipient 0x9efd…0417, and is protocolFeeShare 100 still live after a later setProtocolFeeShare?", checked: "RPC owner() 0x7E03…242B protocolFeeShare 100 protocolFeeRecipient 0x9efd…0417; factory owner() same EOA; EOA has no code, 2026-09-03", next: "watch setProtocolFeeShare logs; read remaining collectFees recipient split in LaunchLocker.sol" }
  - { priority: P1, question: "Is @WhatlFonHOOD (lowercase L) still presenting the IF CA, and does the site or @WhatIFonHOOD name it?", checked: "X user search 2026-09-03: lookalike bio has the CA with a space before d1; site JS names only @WhatIFonHOOD", next: "re-read both bios; do not treat the lookalike as official" }
  - { priority: P2, question: "Does GeckoTerminal still list this token after the 429 this pass?", checked: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x232C…30d1 HTTP 429; skipped per source order, 2026-09-03", next: "retry Gecko when the first GET is 200; do not mix Blockscout token volume_24h 595253 with the DexScreener pair slice" }
---

# IF — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v3 pool quoted against WETH. NOXA Launch Factory deploys What If (IF) in one method-0x686399cb call and seeds the IF/WETH 1% book. Traders buy and sell IF on Uniswap v3. whatifonhood.com publishes the contract address.

Themes: memecoin, launchpad:noxa, weth-paired

## Why it matters

IF is a first-wave NOXA LaunchToken that is still printing a live WETH book (~$369k 24h volume / ~$380k liquidity on DexScreener at collection) with 6931 holders. The name collides with packed What The Hook (WTH); the contracts do not.

## What could go wrong

LaunchLocker owner and factory owner are the same EOA, and protocolFeeShare is 100, so collected LP fees currently route to a protocol recipient. @WhatIFonHOOD bio does not embed the CA. A lookalike handle and a third-party claim portal reuse the address.

## Product and mechanics

Launch factory 0xD9eC…FccB clones LaunchToken. Method 0x686399cb from 0x84F8…4afA at 2026-07-11T04:32:42Z minted What If / IF supply 1e9*1e18 into Uniswap v3 pool 0x39A2…1953 against WETH 0x0Bd7…AD73 at fee 10000. launchFactory() on the token returns that factory. PositionLocked sent NFT 70641 to LaunchLocker 0x7F03…Cd85. TokenLaunched initialBuyAmount 0.17 ETH. Constructor socials.twitter is a @0xNaruza status URL; other socials fields are empty. [verified R-2 R-4 R-5 R-18]

Secondary IF/USDG Uniswap v3 and smaller v4 ETH/USDG books exist on DexScreener with far less liquidity than the WETH book. A dust Uniswap v2 XPONS/IF pair is not a Pons launch of IF. [claim R-7]

## Control and security

token owner() reverts. ABI has no owner. Factory owner() and LaunchLocker owner() both return EOA 0x7E03…242B, which also created the factory. collectFees splits protocolFeeShare/100 to protocolFeeRecipient 0x9efd…0417; live protocolFeeShare is 100. Deployer 0x84F8…4afA can setFeeRedirect. Launch-block buy block plus maxWalletBps 200 / maxTxBps 10000 for restrictionBlocks 366. [verified R-5 R-17]

LaunchToken and LaunchLocker are partially verified on Blockscout (contracts/LaunchToken.sol, contracts/LaunchLocker.sol, compiler v0.8.30). Factory 0xD9eC…FccB is unverified. No audit report URL was located this pass. [verified R-2 R-3 R-17] [unknown]

## Team and provenance

whatifonhood.com JS publishes CA 0x232C…30d1, @WhatIFonHOOD, and t.me/WhatIFonHoodChain. Telegram preview embeds the CA (3888 members). @WhatIFonHOOD bio has no CA; Latest from:WhatIFonHOOD this pass did not embed 0x232C. Flag unconfirmed-official for the handle. Constructor twitter is @0xNaruza status 2075800359537127925, 16 seconds before the create tx. [claim R-8 R-12 R-13 R-14]

X user search also returned @WhatlFonHOOD (lowercase L) with the CA in the bio. Flag handle-collision. [claim R-15]

## Economics and activity

IF/WETH Uniswap v3 24h volume is 369110.82 USD and liquidity.usd is 380142.8 at 2026-09-03T05:42:38Z from DexScreener latest/dex/tokens. fdv/marketCap is 6952019. Secondary IF/USDG v3 volume.h24 is 162429.09. [claim R-7]

Blockscout holders_count 6931. Dead address holds 9.3578% of supply. Pair created 2026-07-11T04:32:42Z. Assignment lead of holders 6933 was not reproduced; live holders_count is 6931. Gecko GET returned 429 and was skipped. [claim R-1]

## Material risks

- LaunchLocker protocolFeeShare is 100 and owner is an EOA that also owns the unverified factory. [verified R-5 R-17]
- @WhatIFonHOOD bio does not embed the CA; constructor twitter is a different handle. [claim R-8 R-14]
- handle-collision: @WhatlFonHOOD (lowercase L) presents the CA. [claim R-15]
- copypasta-pattern / third-party-link: crypto-keo.netlify.app claim URL posted against this CA. [claim R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/factory/pool/WETH/locker and create tx 0x00889365…287c, RPC name/symbol/factory/pairToken/liquidityPool/owner/protocolFeeShare, DexScreener tokens API, whatifonhood.com HTML+JS, Telegram preview, @WhatIFonHOOD / @0xNaruza / lookalike / claim-portal posts, and the 49-row census were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-12]
- Numbers: 369110.82 is the DexScreener IF/WETH v3 pair 24h volume, not Blockscout token volume_24h 595253. Liquidity 380142.8 is that pool. Holders 6931 is Blockscout holders_count. [claim R-1 R-7]
- Adversarial: the strongest contrary reading is that IF is packed What The Hook (WTH) or a stock-paired pad token. WTH is 0xb8Fa…fF79 / hook 0xc52f…54c0 at whatthehook.io; IF is 0x232C…30d1 quoting WETH via NOXA factory 0xD9eC…FccB. [inference R-1 R-11]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no if / What IF / 0x232C…30d1. GET packets/if/… on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research HTTP 404.
- Explorer: Blockscout api/v2 token, address, smart-contract, holders, factory, WETH, pool, locker, create tx 0x00889365…287c and logs. Chrome UA. RPC eth_getCode/eth_call at block 53179231.
- Aggregators: DexScreener latest/dex/tokens. Gecko token GET HTTP 429 — skipped.
- Site/social: whatifonhood.com HTML + /assets/index-DZ61FrkK.js; t.me/WhatIFonHoodChain preview; X Latest $IF / 0x232C / from:WhatIFonHOOD / from:0xNaruza; user search WhatIFonHOOD.
- Failed: Blockscout /tokens/…/holders?limit=3 and /transfers?limit=1 HTTP 422 (unparameterized holders 200); Gecko 429; from:WhatIFonHOOD Latest did not return a CA post.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:46Z.
