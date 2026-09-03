---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: likes-fun
name: likes.fun
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [likes-fun]
allowed_paths:
  - research/inbox/packets/likes-fun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: likes.fun
  aliases: [likes, Likes, likesdotfun, TraderPack]
  symbols: [LIKES]
  entity_kind: application
  chain_scope: cross-chain
  official_domain: https://likes.fun
  official_handle: "@likesdotfun"
  repository: "NULL — api.github.com/orgs/likesdotfun, /users/likesdotfun, and /users/likesfun returned 404; CoinGecko repos_url.github []; likes.fun footer and /rip have no GitHub URL; docs.likes.fun did not resolve"
  possible_matches:
    - slug: sight
      signals: [other]
      contrary_signals:
        - "Census Sight is a memecoin UP/DOWN app at sighthood.com / @sight_hood with Sight Genesis ERC-721 0x6F28…a84D on 4663"
        - "likes.fun packs FOMO and Pump.fun traders; it does not price Token/WETH UP/DOWN rounds"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily; likes.fun is @likesdotfun / likes.fun"
        - "hood.fun is a token launchpad; likes.fun is a trader-pack / prediction product"
        - "Normalized names hoodfun and likesfun differ; no shared domain, handle, or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun; likes.fun is @likesdotfun / likes.fun"
        - "Stonks.fun is a token launchpad; likes.fun is a trader-pack product, not a factory"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "likes.fun is a fantasy pack on FOMO and Pump.fun traders, not a bonding-curve token factory"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: markets/prediction
  secondary_leaves: []
  mechanism_tags: [derivatives, other]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "likes.fun and /rip are live: rip a pack, pick three FOMO and Pump.fun traders, tweet for a whitelist spot. Season 0 and Deposit ETH on Base or Robinhood Chain are marked soon. $LIKES 0xbEDe…eb07 is a verified ClankerToken on Base with 12791-byte code; the same address has no code on chain 4663. No likes.fun factory was located on Blockscout. Distinct from Peer and from *.fun token pads. Not a census row. [R-1] [R-2] [R-10] [R-11] [R-12] [R-13]"

qualifying:
  deployed_on_chain: { status: fail, claim_ids: [CLM-10], note: "No likes.fun factory, market, or vault was located on chain 4663. Footer $LIKES 0xbEDe…eb07 is a Base ClankerToken; RPC eth_getCode on 4663 returned 0x and Blockscout is_contract false." }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9, CLM-12], note: "" }

links:
  - { kind: site, url: "https://likes.fun", authenticity: confirmed }
  - { kind: app, url: "https://likes.fun/rip", authenticity: confirmed }
  - { kind: x, url: "https://x.com/likesdotfun", authenticity: confirmed }
  - { kind: other, url: "https://clanker.world/clanker/0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07", authenticity: unconfirmed }
  - { kind: other, url: "https://www.coingecko.com/en/coins/likes", authenticity: unconfirmed }

deployments:
  - label: $LIKES token (ClankerToken on Base; no code on 4663)
    role: token
    address:
      value: "0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07"
      chain: base
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: false
      explorer_source_verified: true
    receipt_ids: [R-1, R-10, R-11, R-12, R-13, R-14]

metrics:
  - { kind: market_cap, value: 182260, currency: USD, as_of: 2026-09-03T05:04:50Z, window: point, method: "api.coingecko.com/api/v3/coins/likes market_data.market_cap.usd (asset_platform_id base)", class: claim, receipt_ids: [R-14] }
  - { kind: market_cap, value: 196077, currency: USD, as_of: 2026-09-03T05:05:06Z, window: point, method: "likes.fun/api/prize-pool fdv (site ticker $LIKES MC)", class: claim, receipt_ids: [R-15] }
  - { kind: volume_24h, value: 7.97, currency: USD, as_of: 2026-09-03T05:04:50Z, window: 24h, method: "api.coingecko.com/api/v3/coins/likes market_data.total_volume.usd", class: claim, receipt_ids: [R-14] }
  - { kind: holders, value: 6083, currency: null, as_of: 2026-09-03T05:10:00Z, window: point, method: "base.blockscout.com/api/v2/addresses/0xbEDe…eb07 token.holders_count", class: claim, receipt_ids: [R-12] }

reproductions:
  - { id: REP-1, method: official-crosslink, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-3], result: "likes.fun title likes.fun; footer links https://x.com/likesdotfun, https://clanker.world/clanker/0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07, https://www.coingecko.com/en/coins/likes, https://www.tiktok.com/@likesdotfun. Home meta description still Share Tiktoks, Earn Real $$$ — powered by $likes, Farcaster & Base; base:app_id 69c551c2245a5248cc30a23e. /rip title Draft your cabal — likes.fun; og:url https://likes.fun/rip?v=10; og:description Rip a pack. Pick three traders. They trade, you win. @likesdotfun display name likes.fun; bio rip packs with @fomo & @pumpfun traders, win on their profits." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-10, R-11], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663). eth_blockNumber 0x32b2ad2 (53160658). eth_getCode 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 result 0x (0 bytes). Blockscout api/v2 is_contract false, is_verified false, name null, token null, creation_transaction_hash null." }
  - { id: REP-3, method: explorer-rpc, chain_id: 8453, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-12, R-13], result: "mainnet.base.org eth_getCode 0xbEDe…eb07 12791 bytes prefix 0x608060405260043610. base.blockscout.com/api/v2 is_contract true is_verified true name ClankerToken. token name likes symbol LIKES decimals 18 holders_count 6083 total_supply 1e29 type ERC-20." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-14, R-15, R-16, R-17, R-18], result: "GET api.coingecko.com/api/v3/coins/likes HTTP 200; asset_platform_id base; platforms.base 0xbede17c8b0535791d131f0d6b6094b99cf27eb07; links.homepage https://likes.fun/; twitter_screen_name likesdotfun; market_cap.usd 182260 total_volume.usd 7.97 last_updated 2026-09-03T05:04:50Z. likes.fun/api/prize-pool total 58823 communityAirdrop 58823 fdv 196077 priceUsd 0.000001962. api.llama.fi/protocol/likes-fun and /likes HTTP 400. api.github.com/orgs/likesdotfun and /users/likesdotfun and /users/likesfun HTTP 404. /api/crash/release-state phase live realPlayAllowed true. /api/pack/current 404 not_found. /api/cabal POST 401 Unauthorized." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Fantasy trader packs: rip a pack, pick a cabal of three FOMO and Pump.fun traders, they trade you win. /rip copy: Season 0 starts soon; Sign in with X to lock these three in and tweet them for a whitelist spot; claim your spot in the beta.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://likes.fun", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@likesdotfun", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "likes.fun", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-12, R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: markets/prediction, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Distinct from *.fun token launchpads (lunch.fun / @lunchdotfun, pew.fun / @pewdotfun). likes.fun is a trader-pack product, not a token factory.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from Peer (peer.family): Peer is on-chain USDG options on FOMO trader PnL; likes.fun is a fantasy pack across FOMO and Pump.fun with Season 0 marked soon.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: other, value: "$LIKES 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 is a Base ClankerToken. The same address has no code on chain 4663. Flag wrong-chain for any 4663 reading of this CA.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-10, R-11, R-12, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "/rip quest list includes Deposit ETH, Base or Robinhood Chain, button soon (disabled). Follow @likesdotfun is a separate quest.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: communications.status, value: "/rip copy Season 0 starts soon. @likesdotfun posted https://likes.fun/rip?v=10 on 2026-08-27. @yar0xslav posted upcoming @likesdotfun launch (chill coded) on 2026-08-26 and called the product draftkings for traders on 2026-08-27.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-4, R-6, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: team.identity, value: "@yar0xslav bio: just a chill dev gambling on creator economy @likesdotfun. @0xSammy 28 Aug 2026: yar0xslav (CHILL founder) also launches @likesdotfun as a fantasy league for Pump + Fomo users.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: other, value: "Home meta and PWA manifest still describe Share Tiktoks, Earn Real $$$ / Farcaster & Base. /api/crash/release-state phase live, realPlayAllowed true, transitionAt 2026-07-17T17:00:00Z. That crash surface is the prior Base product, not a chain 4663 factory.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "likes.fun/api/prize-pool 2026-09-03T05:05:06Z: total 58823, communityAirdrop 58823, rewardsPool 0, fdv 196077, priceUsd 0.000001962, priceChange24h -1.1. Site ticker reads $LIKES MC from fdv.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "CoinGecko coins/likes 2026-09-03T05:04:50Z: market_cap.usd 182260, fully_diluted_valuation.usd 191852, total_volume.usd 7.97, asset_platform_id base. Figures are Base, not a Robinhood Chain slice.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: identity.repository, value: "NULL — GitHub org/user likesdotfun and likesfun 404; CoinGecko repos_url.github []; no repository URL on likes.fun or /rip; docs.likes.fun did not resolve", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-14, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: cross-chain, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-19, field: "account.@likesdotfun.official", value: "likes.fun footer href https://x.com/likesdotfun. Display name likes.fun. CoinGecko twitter_screen_name likesdotfun and homepage https://likes.fun/. Bio names FOMO and Pump.fun packs.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: "account.@likesdotfun.slug", value: likes-fun, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@likesdotfun.role", value: project, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on likes.fun, /rip, the @likesdotfun profile, CoinGecko links, or GitHub this pass", class: unknown, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.symbol, value: "LIKES", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-12, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@yar0xslav 7 Aug 2026 asked a user to get an invite code and help test likes beta before full public mode. /rip still gates claim behind X login for a whitelist spot.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: activity.status, value: "Home trader cards list FOMO and Pump.fun handles with 24h/7d/30d PnL; bundled snapshotAt 2026-08-27T16:24:43Z. /api/pack/current returned not_found. /api/cabal POST returned 401 Unauthorized.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "TraderPack", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: candidate, value: "likes-fun | likes.fun | @likesdotfun | likes.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@likesdotfun posts likes.fun/rip"
    summary: "On 2026-08-27 the handle posted https://likes.fun/rip?v=10 (162 views this pass). The /rip page is the cabal draft / whitelist flow."
    occurred_at: 2026-08-27T18:30:08Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: company
    title: "@0xSammy names likesdotfun as a Pump + FOMO fantasy league"
    summary: "On 2026-08-28 Sammy wrote that @yar0xslav (CHILL founder) also launches @likesdotfun as a fantasy league for Pump + Fomo users."
    occurred_at: 2026-08-28T10:55:08Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [product.mechanism, team.identity, taxonomy.primary-leaf]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-3
    type: company
    title: "@yar0xslav posts a likes.fun trader cabal"
    summary: "On 2026-08-27 @yar0xslav posted a cabal of @real_y22, @frankdegods and @rasmr_eth for @likesdotfun and wrote draftkings for traders is real."
    occurred_at: 2026-08-27T18:33:41Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: onchain
    title: "RPC: footer $LIKES CA has no code on 4663 and is a Base ClankerToken"
    summary: "0xbEDe…eb07 returns 0x on chain 4663 at block 53160658. On Base the same address has 12791-byte code; Blockscout names it ClankerToken / likes / LIKES."
    occurred_at: 2026-09-03T05:10:00Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [deployment.address, lifecycle, taxonomy.chain-scope]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-11, R-12, R-13]

receipts:
  - { id: R-1, publisher: likes.fun, title: "likes.fun home", url: "https://likes.fun/", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-7, CLM-8, CLM-9, CLM-14, CLM-17, CLM-18, CLM-19, CLM-25], excerpt: "title likes.fun. Hero They trade. You win. Rip your pack. Trader cards labeled fomo.family and pump.fun with 24h/7d/30d PnL. Footer: clanker.world/clanker/0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07, coingecko.com/en/coins/likes, x.com/likesdotfun, tiktok.com/@likesdotfun. Meta description still Share Tiktoks, Earn Real $$$ — powered by $likes, Farcaster & Base." }
  - { id: R-2, publisher: likes.fun, title: "Draft your cabal /rip", url: "https://likes.fun/rip?v=10", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-6, CLM-8, CLM-9, CLM-11, CLM-12, CLM-24, CLM-26], excerpt: "title Draft your cabal — likes.fun. og:description Rip a pack. Pick three traders. They trade, you win. Copy: Tear it open; Pick your cabal; Season 0 starts soon; Deposit ETH / Base or Robinhood Chain / soon; Sign in with X to lock these three in and tweet them for a whitelist spot; claim your spot in the beta. Brand TraderPack." }
  - { id: R-3, publisher: "@likesdotfun", title: "likes.fun X profile", url: "https://x.com/likesdotfun", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-19, CLM-20, CLM-21], excerpt: "Display name likes.fun. Handle @likesdotfun. Bio: rip packs with @fomo & @pumpfun traders, win on their profits. Followers 2163. User ID 1960413078748606464. Blue verified." }
  - { id: R-4, publisher: "@likesdotfun", title: "likes.fun/rip post", url: "https://x.com/likesdotfun/status/2093043401495027875", published_at: 2026-08-27T18:30:08Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-12, EVT-1], excerpt: "https://likes.fun/rip?v=10" }
  - { id: R-5, publisher: "@likesdotfun", title: "rip & chill quote", url: "https://x.com/likesdotfun/status/2090213951522922863", published_at: 2026-08-19T23:06:54Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-13], excerpt: "rip & chill. Quotes @yar0xslav 2090213587402850692: next @likesdotfun launch is gonna be the most unhinged thing i’ve ever done in my life … give some love to $CHILL holders." }
  - { id: R-6, publisher: "@yar0xslav", title: "trader cabal post", url: "https://x.com/yar0xslav/status/2093044294336598332", published_at: 2026-08-27T18:33:41Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-12, CLM-13, EVT-3], excerpt: "just picked @real_y22, @frankdegods & @rasmr_eth for my @likesdotfun trader cabal. draftkings for traders is real. Bio: just a chill dev gambling on creator economy @likesdotfun." }
  - { id: R-7, publisher: "@yar0xslav", title: "next likesdotfun launch", url: "https://x.com/yar0xslav/status/2090213587402850692", published_at: 2026-08-19T23:05:28Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-13], excerpt: "next @likesdotfun launch is gonna be the most unhinged thing i’ve ever done in my life. love it and hate it all at the same time but we have to shoot this shot (& also give some love to $CHILL holders)." }
  - { id: R-8, publisher: "@yar0xslav", title: "likes beta invite", url: "https://x.com/yar0xslav/status/2085813048543973439", published_at: 2026-08-07T19:39:17Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "tbh havent seen you playing likes beta. mind getting an invite code and help us test things before we go full public mode?" }
  - { id: R-9, publisher: "@0xSammy", title: "RH update names likesdotfun", url: "https://x.com/0xSammy/status/2093291284811162051", published_at: 2026-08-28T10:55:08Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-9, CLM-13, EVT-2], excerpt: "@nflxnchill : Stock meme. … @yar0xslav (CHILL founder) also launches @likesdotfun as a fantasy league for Pump + Fomo users." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode $LIKES on 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10, EVT-4], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32b2ad2 (53160658). eth_getCode 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 result 0x (0 bytes)." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xbEDe…eb07 on Robinhood Chain", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, EVT-4], excerpt: "hash 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07. is_contract false. is_verified false. name null. token null. creation_transaction_hash null. coin_balance 0. Search q=TraderPack items []. Search q=likes returned unrelated tokens, not a likes.fun factory." }
  - { id: R-12, publisher: Base Blockscout, title: "Address 0xbEDe…eb07 on Base", url: "https://base.blockscout.com/api/v2/addresses/0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-10, CLM-18, CLM-23, EVT-4], excerpt: "is_contract true is_verified true name ClankerToken. token address_hash 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 name likes symbol LIKES decimals 18 holders_count 6083 total_supply 100000000000000000000000000000 type ERC-20." }
  - { id: R-13, publisher: Base RPC, title: "eth_getCode $LIKES on Base", url: "https://mainnet.base.org", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-10, EVT-4], excerpt: "eth_getCode 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 12791 bytes prefix 0x608060405260043610." }
  - { id: R-14, publisher: CoinGecko, title: "coins/likes", url: "https://api.coingecko.com/api/v3/coins/likes", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-16, CLM-17, CLM-19, CLM-23], excerpt: "id likes symbol likes name likes. asset_platform_id base. platforms.base 0xbede17c8b0535791d131f0d6b6094b99cf27eb07. categories SocialFi, Base Ecosystem, Farcaster Ecosystem. links.homepage https://likes.fun/. twitter_screen_name likesdotfun. repos_url.github []. market_cap.usd 182260 fdv.usd 191852 total_volume.usd 7.97 last_updated 2026-09-03T05:04:50Z." }
  - { id: R-15, publisher: likes.fun, title: "/api/prize-pool", url: "https://likes.fun/api/prize-pool", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-15], excerpt: "JSON total 58823 communityAirdrop 58823 rewardsPool 0 lastUpdated 2026-09-03T05:05:06.473+00:00 fdv 196077 priceUsd 0.000001962 priceChange24h -1.1. Home ticker uses fdv as $LIKES MC." }
  - { id: R-16, publisher: GitHub, title: "orgs/likesdotfun", url: "https://api.github.com/orgs/likesdotfun", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-17], excerpt: "HTTP 404 for https://api.github.com/orgs/likesdotfun, https://api.github.com/users/likesdotfun, and https://api.github.com/users/likesfun this pass." }
  - { id: R-17, publisher: DefiLlama, title: "protocol/likes-fun", url: "https://api.llama.fi/protocol/likes-fun", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "GET api.llama.fi/protocol/likes-fun HTTP 400. GET api.llama.fi/protocol/likes HTTP 400. No Llama protocol row used this pass." }
  - { id: R-18, publisher: likes.fun, title: "/api/crash/release-state", url: "https://likes.fun/api/crash/release-state", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-14], excerpt: "JSON phase live serverNow 2026-09-03T05:08:23.894004+00:00 transitionAt 2026-07-17T17:00:00+00:00 demoPlayAllowed false realPlayAllowed true." }
  - { id: R-19, publisher: discovery-inventory, title: "likes-fun candidate", url: "https://x.com/likesdotfun", published_at: 2026-09-02T23:35:00Z, accessed_at: 2026-09-03T05:06:00Z, kind: other, authority: independent, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Discovery inventory claim 20: likes-fun | likes.fun | @likesdotfun | none. Claim 70 leaf markets/prediction. Receipt 27 excerpt: bio rip packs with @fomo and @pumpfun traders, win on their profits. Fantasy league for Pump + FOMO users." }
  - { id: R-20, publisher: "@yar0xslav", title: "upcoming likesdotfun launch (chill coded)", url: "https://x.com/yar0xslav/status/2092696015790879182", published_at: 2026-08-26T19:29:45Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-12], excerpt: "had a great time talking to @lateniteonchain re: novel onchain stock primitives, $chill & upcoming @likesdotfun launch (chill coded)." }
  - { id: R-21, publisher: likes.fun, title: "pack/cabal APIs", url: "https://likes.fun/api/pack/current", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-25], excerpt: "GET /api/pack/current HTTP 404 JSON error not_found. POST /api/cabal HTTP 401 JSON error Unauthorized. GET /api/waitlist/me HTTP 401. Bundled trader snapshotAt 2026-08-27T16:24:43.247467Z in chunk 9289." }

gaps:
  - { priority: P0, question: "Is any likes.fun factory, market, vault, or deposit contract deployed on chain 4663?", checked: "RPC and Blockscout on footer $LIKES CA 0xbEDe…eb07: no code, is_contract false; Blockscout search TraderPack empty and likes.fun hits unrelated tokens; /rip Deposit ETH button soon; Llama protocol/likes-fun 400, 2026-09-03", next: "watch /rip and @likesdotfun for a published 4663 address; do not treat the Base ClankerToken as a Robinhood deployment" }
  - { priority: P0, question: "How does Season 0 settle — on-chain options like Peer, off-chain whitelist scoring, or a later RH deposit contract?", checked: "/rip copy Season 0 starts soon and Deposit ETH soon; /api/pack/current not_found; no docs.likes.fun, 2026-09-03", next: "record the first published settlement address or docs page as a claim with a reproduction" }
  - { priority: P1, question: "What is the relationship between Base $LIKES 0xbEDe…eb07 and the Robinhood pack season — prize-pool unit, deposit asset, or leftover SocialFi token?", checked: "Footer still links the Clanker Base token; /api/prize-pool fdv tracks that token; /rip deposit quest names ETH on Base or Robinhood Chain, 2026-09-03", next: "do not mix Base market-cap figures into a Robinhood Chain slice" }
  - { priority: P1, question: "Is there an audit whose scope matches the Base ClankerToken or any future 4663 contracts?", checked: "likes.fun, /rip, @likesdotfun, CoinGecko links, GitHub 404, 2026-09-03", next: "record any published report with the exact scope" }
  - { priority: P2, question: "Does the live crash / multiplier surface share custody or a prize pool with Season 0 packs?", checked: "/api/crash/release-state phase live; home meta still describes TikTok/Farcaster/Base; pack APIs are a separate prelaunch flow, 2026-09-03", next: "keep crash metrics off the Robinhood card until a 4663 receipt exists" }
---

# likes.fun — research packet

## What it is

likes.fun is a fantasy-league pack product: a user rips a pack, picks three FOMO and Pump.fun traders, and wins if those traders profit. Season 0 and ETH deposits on Base or Robinhood Chain are marked soon. A Base Clanker token $LIKES at 0xbEDe…eb07 is live; no likes.fun contract was located on chain 4663. The handle is @likesdotfun; the site is likes.fun.

Themes: prediction

## Why it matters

The product sits next to Peer (on-chain options on FOMO trader PnL) but spans Pump.fun as well as FOMO, and it is still a whitelist / Season 0 announcement rather than a 4663 market. Discovery inventory filed it as markets/prediction. It is not a *.fun token pad. [claim R-1 R-2 R-9]

## What could go wrong

The only published contract in the footer is a Base ClankerToken. The same address has no code on Robinhood Chain. Anyone who treats 0xbEDe…eb07 as a 4663 factory or as Season 0 collateral is on the wrong chain. Deposit ETH on Robinhood Chain is a disabled soon button; settlement is unpublished. [verified R-10 R-11 R-12] [claim R-2]

## Product and mechanics

Home and /rip: rip a TraderPack, pick a cabal of three traders from fomo.family and pump.fun, they trade you win. Claiming the cabal requires X login and a tweet for a whitelist spot. Copy says Season 0 starts soon and claim your spot in the beta. [claim R-1 R-2]

A /rip quest list includes Follow @likesdotfun and Deposit ETH on Base or Robinhood Chain. The deposit control is disabled and labelled soon. No 4663 deposit address is named. [claim R-2]

The prior surface is still on the same domain: home meta and the PWA manifest describe TikTok-to-Farcaster SocialFi on Base, and /api/crash/release-state reports a live crash game. That is not a Robinhood Chain factory. [claim R-1 R-18]

## Control and security

No likes.fun owner, proxy, timelock, or factory was located on chain 4663. Footer $LIKES 0xbEDe…eb07 is a verified ClankerToken on Base (12791-byte code, holders 6083). The same address returns empty code on 4663. No audit URL. [verified R-10 R-12 R-13] [unknown]

## Team and provenance

@likesdotfun is linked from the likes.fun footer; display name likes.fun; CoinGecko twitter_screen_name likesdotfun. @yar0xslav bio names @likesdotfun; Sammy wrote that the CHILL founder also launches likesdotfun as a fantasy league for Pump + FOMO users. No GitHub org. [claim R-1 R-3 R-9 R-16]

## Economics and activity

Base $LIKES, not a Robinhood Chain slice: CoinGecko market_cap.usd 182260, fdv 191852, volume 7.97 at 2026-09-03T05:04:50Z. likes.fun/api/prize-pool fdv 196077 (site $LIKES MC), communityAirdrop 58823, rewardsPool 0. Base Blockscout holders_count 6083. /api/pack/current not_found. Trader-card snapshotAt 2026-08-27T16:24:43Z. [claim R-12 R-14 R-15 R-21]

## Material risks

- No likes.fun contract on chain 4663; Season 0 and RH ETH deposit are marked soon. [verified R-10] [claim R-2]
- Footer $LIKES is a Base ClankerToken; flag wrong-chain. [verified R-10 R-12]
- Home meta and crash API still describe the prior Base SocialFi surface. [claim R-1 R-18]
- No audit report URL. [unknown]
- CoinGecko and prize-pool market-cap figures differ (182260 vs 196077) and are Base, not 4663. [claim R-14 R-15]

## Verification passes

- Receipts: likes.fun, /rip, prize-pool, crash, pack/cabal APIs, X profile and posts, Sammy recap, CoinGecko, GitHub 404, Llama 400, Base and Robinhood RPC, Base and Robinhood Blockscout were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-10 R-12 R-14]
- Numbers: CoinGecko and prize-pool figures are Base $LIKES, not a Robinhood Chain slice. Bytecode lengths are chain-specific RPC. [verified R-10 R-13 R-14]
- Adversarial: strongest contrary reading is that likes.fun is a Clanker pad or a Peer clone, or that 0xbEDe…eb07 is already a 4663 factory. Site mechanics are packs not launches; PeerMarketV1 is a different address; RPC on 4663 for 0xbEDe…eb07 is empty. lunch.fun and pew.fun are token pads. [inference R-1 R-2 R-10]

## Operations log

- Census.yaml has no likes-fun row; no content/projects/likes-fun.yaml. Discovery inventory names the slug with leaf markets/prediction and domain none; the site now resolves.
- GET research/inbox/packets/likes-fun/WORK-20260903-grok-heavy-icarus-research.md on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before this seed.
- X Latest from:likesdotfun; from:yar0xslav likesdotfun; Sammy 2093291284811162051.
- likes.fun and /rip?v=10 opened 2026-09-03; JS chunks parsed for 4663/robinhood/api routes. 4663 hex inside a FOMO trader UUID is not a chain id.
- /api/prize-pool, /api/swap/likes-price, /api/crash/release-state, /api/pack/current, /api/cabal POST, /api/waitlist/me, manifest.webmanifest.
- RPC rpc.mainnet.chain.robinhood.com eth_chainId, eth_blockNumber, eth_getCode on 0xbEDe…eb07. mainnet.base.org eth_getCode on the same address.
- Blockscout api/v2 address on 4663 and Base; search q=likes, q=likes.fun, q=TraderPack.
- api.coingecko.com/api/v3/coins/likes HTTP 200 (used). api.llama.fi/protocol/likes-fun and /likes HTTP 400 (skipped as a protocol row).
- api.github.com/orgs/likesdotfun, /users/likesdotfun, /users/likesfun HTTP 404. docs.likes.fun did not resolve.
