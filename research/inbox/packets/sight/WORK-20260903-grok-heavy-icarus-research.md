---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: sight
name: Sight
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [sight]
allowed_paths:
  - research/inbox/packets/sight/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Sight
  aliases: [Sight Genesis, sighthood]
  symbols: [SIGHT]
  entity_kind: application
  chain_scope: robinhood-native
  official_domain: https://sighthood.com
  official_handle: "@sight_hood"
  repository: "NULL — no GitHub org or repository URL on sighthood.com, docs.sighthood.com, the @sight_hood bio, or GitHub search for sighthood / sight_hood this pass"
  possible_matches:
    - slug: meridian
      signals: [other]
      contrary_signals:
        - "Census Sight is @sight_hood / sighthood.com, a memecoin UP/DOWN app with Sight Genesis ERC-721 0x6F28…a84D"
        - "Census Meridian is @meridiandotxyz / meridian.xyz with Predict vault 0x79cB…552D"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: markets/prediction
  secondary_leaves: []
  mechanism_tags: [nft, oracle, fee-routing]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Docs describe ETH parimutuel UP/DOWN rounds on Uniswap Token/WETH prices. Sight Genesis ERC-721 0x6F28…a84D is a verified EIP-1167 SeaDrop clone on 4663, supply 1776, owner EOA 0x4de0…. PredictionRound / UniswapPrice were not located. @sight_hood posted the platform launches 14 Sep, NFT-holder only. Llama has no Sight row. [R-2] [R-3] [R-7] [R-8] [R-9] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-14], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-12, CLM-19], note: "" }

links:
  - { kind: site, url: "https://sighthood.com", authenticity: confirmed }
  - { kind: app, url: "https://app.sighthood.com", authenticity: confirmed }
  - { kind: docs, url: "https://docs.sighthood.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/sight_hood", authenticity: confirmed }
  - { kind: other, url: "https://quest.sighthood.com", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/sight_hood", authenticity: unconfirmed }

deployments:
  - label: Sight Genesis ERC-721
    role: token
    address:
      value: "0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-6, R-7, R-8, R-9]
  - label: ERC721SeaDropCloneable
    role: implementation
    address:
      value: "0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-9, R-19]
  - label: ERC721SeaDropCloneFactory
    role: factory
    address:
      value: "0x008EbCCaE39d001200c3003c3225ce0A00690066"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-20]
  - label: Sight Genesis owner
    role: admin
    address:
      value: "0x4de0D3A415E1109Fb55702Da2989Dd9D5d912584"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-8, R-9]

metrics:
  - { kind: holders, value: 1175, currency: null, as_of: 2026-09-03T02:54:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D holders_count", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 19.34, currency: ETH, as_of: 2026-09-03T02:53:00Z, window: 24h, method: "api.opensea.io/api/v2/collections/sight-genesis-826300567/stats intervals one_day volume", class: claim, receipt_ids: [R-18] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-9], result: "eth_blockNumber 0x329f2dc (53080668). eth_getCode NFT 45 bytes, impl 21257 bytes, owner 0x. name() Sight Genesis; symbol() SIGHT; totalSupply() 1776 (0x6f0); owner() 0x4de0d3a415e1109fb55702da2989dd9d5d912584." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-8, R-19, R-20], result: "Blockscout API v2: NFT is_contract true is_verified true proxy_type eip1167 implementation ERC721SeaDropCloneable 0x09a26fC8…Dd6A token ERC-721 Sight Genesis / SIGHT total_supply 1776 holders_count 1175. createClone tx 0xaf8ce62d… 2026-08-30T21:13:38Z from 0x4de0… to ERC721SeaDropCloneFactory; decoded name Sight Genesis symbol SIGHT; logs on 0x6F28… OwnershipTransferred to 0x4de0…, SeaDropTokenDeployed, AllowedSeaDropUpdated 0x00005EA0…, Initialized v1." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-2, R-5, R-6], result: "@sight_hood bio website is sighthood.com. OpenSea collection sight-genesis-826300567 project_url https://sighthood.com twitter_username sight_hood contracts 0x6f2893a2…a84d chain robinhood. docs.sighthood.com title Sight Docs." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-6, R-18], result: "GET api.opensea.io/api/v2/collections/sight-genesis-826300567: name Sight Genesis total_supply 1776 contracts [{address 0x6f2893a2bf65cc52a23fc5c1bb4626742965a84d, chain robinhood}] owner 0x4de0d3a415e1109fb55702da2989dd9d5d912584. stats total volume 19.34 ETH sales 3063 num_owners 1178; one_day volume 19.34 ETH sales 3063." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Social app for short-term memecoin UP/DOWN markets on Robinhood Chain. Users stake ETH on whether a listed token's Uniswap Token/WETH price rises or falls over a round (typically ~15 minutes, lock last ~30 seconds). Parimutuel pots; 2% protocol fee on decisive wins; 14-day claim window then sweepUnclaimed() to the fee recipient. Invite-gated. Wallet via Privy.", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-3, R-4, R-25, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://sighthood.com", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@sight_hood", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-7, R-8, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-9, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x008EbCCaE39d001200c3003c3225ce0A00690066", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-8, R-20], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-10, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: markets/prediction, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "Sight Genesis owner() = 0x4de0D3A415E1109Fb55702Da2989Dd9D5d912584 (no code). Same address sent createClone and later calls to the NFT.", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: identity.symbol, value: "SIGHT is the ERC-721 symbol on Sight Genesis 0x6F28…a84D, not a reproduced ERC-20", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-8, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "Genesis NFT holders receive a share of prediction-market platform fees. Platform launches 14 Sep 2026; access NFT holders only. First: token price predictions; later NFT floor/volume; then stocks and RWA.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Sight Genesis holders_count 1175 at 2026-09-03T02:54Z (Blockscout token page, not OpenSea num_owners 1178)", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: activity.status, value: "totalSupply() 1776 at block 53080668; OpenSea and @sight_hood posted sold out at that supply", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-7, R-9, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: "account.@sight_hood.role", value: project, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@sight_hood.slug", value: sight, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@sight_hood.note", value: "Handle lists sighthood.com. Posted 30 Aug that the project does not have a token. ERC-721 symbol is SIGHT. Flag: ca-collision — Blockscout also lists ERC-20s named Sight / SIGHT.", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-5, R-14, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report was located on sighthood.com, docs.sighthood.com, the @sight_hood profile, or the verified SeaDrop clone source this pass", class: unknown, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: other, value: "Flag: ca-collision. Blockscout search SIGHT returns ERC-20 Sight at 0x18657A0789245716E71eECD678E72cBFfe9b7DC0 (holders 91, supply 1e27) and further ERC-20/ERC-721 rows with names Sight / Sight Genesis / sighthood. OpenSea official collection lists only 0x6F28…a84D.", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-14, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: relationship, value: "Distinct from census Meridian (@meridiandotxyz), a separate prediction-market name", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: team.identity, value: "@booj1e bio: founder @sight_hood", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.alias, value: "Sight Genesis", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "@sight_hood 30 Aug: We DO NOT have a token. Only follow our official channel.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.proxy, value: "Sight Genesis is an EIP-1167 clone of ERC721SeaDropCloneable 0x09a26fC8…Dd6A created via ERC721SeaDropCloneFactory 0x008EbCCa…0066", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-8, R-9, R-19, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: "account.@booj1e.role", value: team, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Holders get fee share; platform 14 Sep, NFT-only"
    summary: "Genesis holders receive a share of platform fees. App launches 14 Sep; access is NFT holders only."
    occurred_at: 2026-09-02T18:43:00Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-2
    type: company
    title: "Sight Genesis mint sold out at 1,776"
    summary: "Sold out. Supply: 1776. Collection: opensea.io/collection/sight-genesis-826300567."
    occurred_at: 2026-09-02T16:00:29Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: company
    title: "Sight Genesis mint is live on OpenSea"
    summary: "Mint is live. Starts at 14:30 UTC. Mint here: OpenSea Sight Genesis collection."
    occurred_at: 2026-09-02T14:30:01Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: company
    title: "Sight posts September 14 launch date"
    summary: "@sight_hood posted “September 14.” as the next dated product mark after the mint."
    occurred_at: 2026-09-01T13:59:15Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: company
    title: "OpenSea Sight Genesis collection page is live"
    summary: "Our OpenSea page is live. Minting schedule posted; list members can check eligibility."
    occurred_at: 2026-08-31T13:22:16Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-6
    type: onchain
    title: "Sight Genesis clone created on chain 4663"
    summary: "createClone name Sight Genesis symbol SIGHT; logs on 0x6F28…; owner 0x4de0…; SeaDropTokenDeployed."
    occurred_at: 2026-08-30T21:13:38Z
    observed_at: 2026-09-03T02:54:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-7
    type: company
    title: "Account posts it does not have a token"
    summary: "We DO NOT have a token. Only follow our official channel. Don’t trust unofficial links or announcements."
    occurred_at: 2026-08-30T13:34:23Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [identity.symbol, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-8
    type: company
    title: "Sight Genesis mint details: 2 Sep, 1776"
    summary: "Date: September 2. Supply: 1776. GTD: Free. WL GTD: 0.002 ETH. On OpenSea."
    occurred_at: 2026-08-30T03:04:47Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Sight, title: "Sight homepage", url: "https://sighthood.com", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-7], excerpt: "title Sight. meta description: Prediction markets on Robinhood Chain. Join the waitlist. og:url https://sighthood.com og:site_name Sight. Waitlist form: Email address / Join waitlist. Footer: © 2026 Sight. All rights reserved." }
  - { id: R-2, publisher: Sight, title: "Introduction - Sight Docs", url: "https://docs.sighthood.com/", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-20], excerpt: "Sight is a social app for short-term memecoin UP/DOWN prediction markets on Robinhood Chain. Sight lets you predict whether a memecoin will go up or down over a short round (usually about 15 minutes) and settle in ETH on Robinhood Chain. Markets resolve from on-chain Uniswap price data. You sign bets and claims with your own wallet (via Privy). Sight does not custody your keys." }
  - { id: R-3, publisher: Sight, title: "How rounds work", url: "https://docs.sighthood.com/concepts/rounds", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8], excerpt: "A market is a memecoin listed in Sight. A round is one on-chain UP/DOWN contest for that market, typically about 15 minutes. Sight compares Uniswap Token/WETH price at the start of the round (price to beat) with the price at the end. Exact tick/price logic lives in the PredictionRound / UniswapPrice contracts. Parimutuel pots. After a decisive outcome, winners split the pot pro-rata by stake, after the protocol fee." }
  - { id: R-4, publisher: Sight, title: "Fees & refunds", url: "https://docs.sighthood.com/concepts/fees", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "On a decisive outcome, a protocol fee is taken from the pot before winners are paid. Typical default Fee 2% (protocolFeeBps). Paid to Configured protocol fee recipient. Refund mode when open and close prices are a tie or there are no bets on the winning side. Bet limits often 0.001 ETH min and 1 ETH max." }
  - { id: R-5, publisher: "@sight_hood", title: "Sight profile", url: "https://x.com/sight_hood", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-16, CLM-17, CLM-20], excerpt: "Display name Sight, handle @sight_hood. Bio: Prediction markets on @RobinhoodCrypto. Website https://sighthood.com. Joined 2026-07-24. Followers about 14268. Verified Organization." }
  - { id: R-6, publisher: OpenSea, title: "Collection sight-genesis-826300567", url: "https://api.opensea.io/api/v2/collections/sight-genesis-826300567", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-11, CLM-14, CLM-19, CLM-22], excerpt: "name Sight Genesis. project_url https://sighthood.com twitter_username sight_hood. contracts [{address 0x6f2893a2bf65cc52a23fc5c1bb4626742965a84d, chain robinhood}]. owner 0x4de0d3a415e1109fb55702da2989dd9d5d912584. total_supply 1776. created_date 2026-08-30. About: Sight is a pixel collection of 1776 visors." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x6F28…a84D Sight Genesis", url: "https://robinhoodchain.blockscout.com/address/0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-10, CLM-11, CLM-13, CLM-14, CLM-22, CLM-24], excerpt: "hash 0x6F2893a2BF65CC52a23FC5c1bb4626742965a84D name Sight Genesis is_contract true is_verified true proxy_type eip1167 implementation ERC721SeaDropCloneable 0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A. token ERC-721 symbol SIGHT total_supply 1776 holders_count 1175." }
  - { id: R-8, publisher: Blockscout, title: "createClone tx 0xaf8ce62d…", url: "https://robinhoodchain.blockscout.com/tx/0xaf8ce62d040bfd9a125c1664fbd727a63b780bc43c3bf81a2ad883573a9019f2", published_at: 2026-08-30T21:13:38Z, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-10, CLM-11, CLM-22, CLM-24, EVT-6], excerpt: "timestamp 2026-08-30T21:13:38.000000Z status ok from 0x4de0D3A415E1109Fb55702Da2989Dd9D5d912584 to ERC721SeaDropCloneFactory 0x008EbCCaE39d001200c3003c3225ce0A00690066 method createClone(string name, string symbol, bytes32 salt) name Sight Genesis symbol SIGHT. Logs on 0x6F28…: OwnershipTransferred to 0x4de0…, SeaDropTokenDeployed, AllowedSeaDropUpdated [0x00005EA0…], Initialized v1." }
  - { id: R-9, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, totalSupply, owner", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-10, CLM-11, CLM-14, CLM-24], excerpt: "eth_blockNumber 0x329f2dc (53080668). eth_getCode NFT 45 bytes, impl 21257 bytes, owner 0x. name() Sight Genesis; symbol() SIGHT; totalSupply() 1776 (0x6f0); owner() 0x4de0d3a415e1109fb55702da2989dd9d5d912584." }
  - { id: R-10, publisher: "@sight_hood", title: "Genesis NFTs are not just a collection", url: "https://x.com/sight_hood/status/2095220967882559554", published_at: 2026-09-02T18:43:00Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-12, EVT-1], excerpt: "Genesis NFTs are not just a collection. Holders will receive a share of prediction market platform fees. The platform launches September 14. Access will be open to NFT holders ONLY. First: token price predictions on @RobinhoodCrypto. Later: NFT floor, volume, and more. Then: stocks and RWA predictions." }
  - { id: R-11, publisher: "@sight_hood", title: "Sold out", url: "https://x.com/sight_hood/status/2095180069031358574", published_at: 2026-09-02T16:00:29Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-14, EVT-2], excerpt: "Sold out. Supply: 1776. Collection: https://opensea.io/collection/sight-genesis-826300567 Thank you to everyone who minted." }
  - { id: R-12, publisher: "@sight_hood", title: "Mint is live", url: "https://x.com/sight_hood/status/2095157301237956943", published_at: 2026-09-02T14:30:01Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Mint is live. Starts at 14:30 UTC. Mint here: https://opensea.io/collection/sight-genesis-826300567" }
  - { id: R-13, publisher: "@sight_hood", title: "Our OpenSea page is live", url: "https://x.com/sight_hood/status/2094415477996929234", published_at: 2026-08-31T13:22:16Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Our @OpenSea page is live. Minting schedule is posted here: https://opensea.io/collection/sight-genesis-826300567 If you’re on any of the lists, you can check your eligibility." }
  - { id: R-14, publisher: "@sight_hood", title: "We DO NOT have a token", url: "https://x.com/sight_hood/status/2094056137419116691", published_at: 2026-08-30T13:34:23Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-17, CLM-19, CLM-23, EVT-7], excerpt: "We DO NOT have a token. Please be careful. Only follow our official channel for credible info. Don’t risk your funds trying to be early and don’t trust unofficial links or announcements." }
  - { id: R-15, publisher: "@sight_hood", title: "Sight Genesis NFT mint details", url: "https://x.com/sight_hood/status/2093897691407200358", published_at: 2026-08-30T03:04:47Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "Sight Genesis NFT mint details: Date: September 2. Supply: 1776. GTD: Free. WL GTD: 0.002 ETH. On @OpenSea." }
  - { id: R-16, publisher: "@sight_hood", title: "September 14", url: "https://x.com/sight_hood/status/2094787173127983571", published_at: 2026-09-01T13:59:15Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "September 14." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x1865…7DC0 Sight ERC-20", url: "https://robinhoodchain.blockscout.com/token/0x18657A0789245716E71eECD678E72cBFfe9b7DC0", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17, CLM-19], excerpt: "address 0x18657A0789245716E71eECD678E72cBFfe9b7DC0 name Sight symbol SIGHT type ERC-20 total_supply 1000000000000000000000000000 holders_count 91. Search q=SIGHT also lists further ERC-20 and ERC-721 rows named Sight / Sight Genesis / sighthood besides 0x6F28…a84D." }
  - { id: R-18, publisher: OpenSea, title: "Sight Genesis collection stats", url: "https://api.opensea.io/api/v2/collections/sight-genesis-826300567/stats", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "total volume 19.339886142564573 ETH sales 3063 num_owners 1178 floor_price 0.01669999999999 ETH. intervals one_day volume 19.339886142564662 ETH sales 3063. seven_day and thirty_day volume equal the one_day figure this pass." }
  - { id: R-19, publisher: Blockscout, title: "Address 0x09a2…Dd6A ERC721SeaDropCloneable", url: "https://robinhoodchain.blockscout.com/address/0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24], excerpt: "hash 0x09a26fC8FCEF18192E267D7A6da9dFb4be81Dd6A name ERC721SeaDropCloneable is_contract true is_verified true is_partially_verified true file_path src/clones/ERC721SeaDropCloneable.sol compiler v0.8.17 creator 0x008EbCCaE39d001200c3003c3225ce0A00690066." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x008E…0066 ERC721SeaDropCloneFactory", url: "https://robinhoodchain.blockscout.com/address/0x008EbCCaE39d001200c3003c3225ce0A00690066", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-24], excerpt: "hash 0x008EbCCaE39d001200c3003c3225ce0A00690066 name ERC721SeaDropCloneFactory is_contract true is_verified true creator 0x0000000000FFe8B47B3e2130213B802212439497 creation_transaction_hash 0xddc2b9dc87343656691b304404606216de8a668b3bca580c09096f945c547e36." }
  - { id: R-21, publisher: Sight, title: "Sight app", url: "https://app.sighthood.com", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7], excerpt: "title Sight. meta description: Memecoin markets, in sight. Visible copy: Connecting… © 2026 Sight. All rights reserved." }
  - { id: R-22, publisher: Sight, title: "Sight Quest", url: "https://quest.sighthood.com", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [], excerpt: "Sight Quest. Sign in with X, finish the quests in order, and earn NFT waitlist. Continue with X. Check GTD / WL / FCFS. © 2026 Sight. All rights reserved." }
  - { id: R-23, publisher: Telegram, title: "t.me/sight_hood", url: "https://t.me/sight_hood", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "og:title Sight. og:description Prediction Markets on Robinhood https://sighthood.com/. About 4 subscribers. Preview channel. Not linked from the @sight_hood bio this pass." }
  - { id: R-24, publisher: "@booj1e", title: "Boo profile", url: "https://x.com/booj1e", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-21, CLM-25], excerpt: "Display name Boo. Handle @booj1e. Bio: founder @sight_hood. In Crypto We Trust. ex-Meta, Amazon, Microsoft." }
  - { id: R-25, publisher: Sight, title: "Claiming & 14-day window", url: "https://docs.sighthood.com/concepts/claiming", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "You must successfully claim within fourteen (14) days of the round’s on-chain resolution time (resolvedAt). After that, remaining ETH in the round may be sent to the protocol fee recipient via sweepUnclaimed(). This matches the deployed PredictionRound rules and the in-app Terms of Service." }
  - { id: R-26, publisher: Sight, title: "FAQ - Sight Docs", url: "https://docs.sighthood.com/faq", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "Sight is invite-gated. Ask an existing user for a single-use code. Which chain do I use? Robinhood Chain. Bets, claims, and the navbar balance use native ETH there. How is UP / DOWN decided? From Uniswap Token/WETH price movement between the round’s open and close snapshots. What is the fee? 2% on decisive winning pots by default." }
  - { id: R-27, publisher: Sight, title: "Risks - Sight Docs", url: "https://docs.sighthood.com/risks", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [], excerpt: "Rounds run in deployed contracts. Resolution depends on Uniswap pool data (spot and/or TWAP depending on version). Thin liquidity, manipulation, or unusual pool configuration can produce results that differ from a CEX chart. Missing a claim because the UI was down does not extend the 14-day window. Sight never holds your private keys." }

gaps:
  - { priority: P0, question: "Where are the PredictionRound, UniswapPrice, and protocol fee-recipient contracts on 4663, and do any have non-empty code?", checked: "docs.sighthood.com names PredictionRound / UniswapPrice with no addresses; Blockscout search PredictionRound and UniswapPrice returned empty; app.sighthood.com showed Connecting…, 2026-09-03", next: "read app network calls after wallet connect; search Blockscout for sweepUnclaimed and protocolFeeBps" }
  - { priority: P0, question: "Can owner 0x4de0… change SeaDrop allowlists, metadata, or mint after the 1,776 sell-out, and is there a timelock?", checked: "owner() via RPC at block 53080668; owner is an EOA with no code; SeaDrop clone source not read line by line, 2026-09-03", next: "eth_call remaining SeaDrop admin getters; read ERC721SeaDropCloneable owner functions" }
  - { priority: P1, question: "Does NFT-holder access from 14 Sep replace the invite-code gate in docs, or do both apply?", checked: "@sight_hood 2 Sep NFT-only post; docs.sighthood.com/faq still invite-gated, 2026-09-03", next: "re-read docs on 14 Sep and compare the app onboarding flow" }
  - { priority: P1, question: "Is there an audit of PredictionRound / UniswapPrice, or only the shared SeaDrop clone source?", checked: "sighthood.com, docs, @sight_hood, Llama (no Sight row), 2026-09-03", next: "ask in public and match any report to bytecode once addresses exist" }
  - { priority: P2, question: "Does t.me/sight_hood get a reverse link from sighthood.com or @sight_hood?", checked: "Telegram page lists sighthood.com and 4 subscribers; X bio lists only sighthood.com, 2026-09-03", next: "re-check the bio and site footer" }
  - { priority: P2, question: "Where is the source repository for PredictionRound named in docs?", checked: "GitHub search sighthood OR sight_hood returned unrelated user repos; docs have no repo URL, 2026-09-03", next: "search GitHub for sweepUnclaimed PredictionRound Sight" }
---

# Sight — research packet

## What it is

Robinhood Chain memecoin UP/DOWN prediction app: users stake ETH on whether a token's Uniswap price rises or falls over a roughly 15-minute round, then claim from the round contract. Access is invite-gated in docs and, from 14 September 2026, NFT-holder only per @sight_hood. Sight Genesis is a 1,776-supply ERC-721 on chain 4663. sighthood.com and @sight_hood run the product.

Themes: prediction, nft, memecoin

## Why it matters

Sight is a Robinhood-native prediction name next to census Meridian, with a live Genesis ERC-721 and docs for ETH parimutuel rounds. Holders are posted to receive platform-fee share and, from 14 Sep, exclusive access. Resolution is Uniswap Token/WETH, so listed memecoin pools become the oracle.

## What could go wrong

PredictionRound and UniswapPrice addresses were not located, so round custody is unread. Unclaimed ETH may be swept after 14 days. One EOA owns the Genesis clone. Blockscout lists other SIGHT-ticker contracts besides 0x6F28…a84D.

## Product and mechanics

Docs: a market is a listed memecoin; a round is an on-chain UP/DOWN contest, typically about 15 minutes, with betting locked in the last ~30 seconds. Settlement is native ETH on Robinhood Chain. Price to beat vs close comes from Uniswap Token/WETH. Winners split a parimutuel pot after a 2% protocol fee. Ties or empty winning side enter refund mode. [claim R-2 R-3 R-4]

Invite codes: one single-use code to join; two codes to share. Wallet login is Privy. Claims are a separate transaction within 14 days of resolve, then `sweepUnclaimed()` may send remaining ETH to the fee recipient. [claim R-25 R-26]

@sight_hood 2 Sep: Genesis holders receive a share of platform fees; the platform launches 14 Sep; access is NFT holders only. First markets are token prices; later NFT floor and volume; then stocks and RWA. The homepage is still a waitlist. The app page showed Connecting…. [claim R-1 R-10 R-21]

## Control and security

Sight Genesis 0x6F28…a84D is an EIP-1167 clone of ERC721SeaDropCloneable 0x09a2…Dd6A, created 2026-08-30T21:13:38Z via ERC721SeaDropCloneFactory `createClone` name Sight Genesis symbol SIGHT. `owner()` returns EOA 0x4de0…2584, which has no code. Allowed SeaDrop is 0x00005EA0…. [verified R-7 R-8 R-9]

No audit report was located for PredictionRound. Docs state rounds run in deployed contracts and that Uniswap spot or TWAP can differ from a CEX chart. [unknown] [claim R-27]

## Team and provenance

@sight_hood lists sighthood.com. OpenSea collection sight-genesis-826300567 lists the same domain, twitter_username sight_hood, and contract 0x6f28…a84d on chain robinhood. docs.sighthood.com is Sight Docs. [verified R-1 R-5 R-6]

@booj1e bio is founder @sight_hood. t.me/sight_hood lists sighthood.com and about 4 subscribers; the X bio does not list Telegram. No repository URL was located. [claim R-23 R-24]

Census Meridian is a separate prediction-market name. Keep both slugs. [claim R-2 R-5]

## Economics and activity

Sight Genesis `totalSupply()` is 1776 at block 53080668. Blockscout holders_count is 1175. OpenSea stats one_day volume is 19.34 ETH and 3063 sales; num_owners 1178. The 19.34 ETH figure is OpenSea's interval, not a DexScreener pair. [claim R-7 R-18] [verified R-9]

@sight_hood posted sold out at supply 1776 on 2 Sep. DefiLlama has no Sight protocol row. DexScreener token-pairs for 0x6F28…a84D returned []. [claim R-11]

## Material risks

- PredictionRound / UniswapPrice addresses were not reproduced; round ETH custody is unread. [claim R-3]
- Unclaimed winnings may be swept after 14 days. [claim R-25]
- One EOA owns the Genesis SeaDrop clone. [verified R-9]
- Flag: ca-collision — Blockscout lists ERC-20s named Sight / SIGHT besides the Genesis ERC-721. [claim R-17]
- Uniswap pool data is the resolution source. [claim R-27]

## Verification passes

- Receipts: sighthood.com, docs (intro, rounds, fees, claiming, FAQ, risks), app, quest, @sight_hood profile and posts, @booj1e, OpenSea collection and stats, Blockscout NFT/impl/factory/createClone/ERC-20, RPC, and t.me/sight_hood were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-7 R-9]
- Numbers: holders 1175 is the Blockscout token count, not OpenSea num_owners 1178. Volume 19.34 ETH is OpenSea one_day volume, not an all-chains TVL. totalSupply 1776 is the RPC return. [claim R-7 R-18] [verified R-9]
- Adversarial: the strongest contrary reading is that Sight has no Robinhood product and the OpenSea collection is unrelated. createClone from 0x4de0… with name Sight Genesis, OpenSea project_url sighthood.com, and the @sight_hood mint posts argue they are the same name; PredictionRound still missing keeps lifecycle announced. [inference R-6 R-8 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census sight, content/projects/sight.yaml, content/feed/sight.yaml, content/sources/sight.yaml, content/research/sight.md, content/changelog/sight.yaml. No content/pulled/sight.yaml. Template and packet.schema.json read before collection.
- Official: sighthood.com (waitlist), docs.sighthood.com (intro, quickstart, FAQ, terms, risks, concepts/rounds, fees, claiming), app.sighthood.com (Connecting…), quest.sighthood.com.
- Explorer: Blockscout API v2 with a Chrome User-Agent. NFT, impl, factory, createClone tx and logs, owner tx list, token counters, search q=Sight and q=SIGHT, q=PredictionRound (empty), q=UniswapPrice (empty). RPC eth_getCode/eth_call at block 53080668.
- Third party: OpenSea collection and stats APIs; api.llama.fi/protocols (no Sight row; InsightX unrelated); DexScreener token-pairs for the NFT ([]); GitHub search sighthood OR sight_hood (unrelated user repos).
- X: @sight_hood profile, 30 Aug no-token and mint details, 31 Aug OpenSea live, 1 Sep “September 14.”, 2 Sep mint live / sold out / fee-share. @booj1e bio.
- Failed: docs path /how-rounds-work and /fees 404 (canonical paths are /concepts/rounds and /concepts/fees). OpenSea chain NFT endpoint required an API key. Telegram t.me/sighthood is a different title (Sight Hood, 2 subscribers) and was not treated as official.
- Time: collection 2026-09-03T02:48Z–2026-09-03T03:05Z.
