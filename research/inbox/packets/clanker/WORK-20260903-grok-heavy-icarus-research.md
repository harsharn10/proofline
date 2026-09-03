---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: clanker
name: Clanker
packet_tier: seed
as_of: 2026-09-03T03:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [clanker]
allowed_paths:
  - research/inbox/packets/clanker/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Clanker
  aliases: [tokenbot, clanker.world]
  symbols: [CLANKER]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://clanker.world
  official_handle: "@clanker_world"
  repository: https://github.com/clanker-devco
  possible_matches:
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot on DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
        - "Clanker is clanker.world / @clanker_world with verified Clanker.sol factory 0xd3f2…9A94"
        - "RH $CLANKER 0xd246…1E18 is a Doppler clone, not a Clanker.sol deployToken"
    - slug: long
      signals: [ticker-only, shared-address]
      contrary_signals:
        - "Census LONG is app.long.xyz / @longdotxyz; DexScreener lists RH $CLANKER 0xd246…1E18 under app.long.xyz and @OkayClanker"
        - "0xd246…1E18 was created by LongLauncher.create() through DopplerERC20V1Factory, not Clanker.sol"
        - "Clanker protocol factory is 0xd3f2…9A94"
    - slug: wire
      signals: [other]
      contrary_signals:
        - "Census Wire is wirebot.trade / @wirebotRH and routes launches through Pons"
        - "Clanker mints on its own Uniswap v4 factory 0xd3f2…9A94"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily; Clanker is clanker.world / @clanker_world"
        - "No shared domain, handle, or reproduced factory"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [agents/agent-execution, launch/stock-paired-factory]
  mechanism_tags: [launchpad, agent, amm, fee-routing, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Verified Clanker.sol v4 factory 0xd3f2…9A94 on chain 4663 with live deployToken (CATARM 2026-09-02T23:07:13Z). Site stats page links that factory. Gitbook deployed-contracts table omits Robinhood. RH $CLANKER 0xd246…1E18 is a LONG/Doppler clone. Recent @clanker_world posts are Base-heavy; the RH factory still takes calls. [R-2] [R-6] [R-15] [R-17] [R-18] [R-20]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-16, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-21], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-16, CLM-21], note: "" }

links:
  - { kind: site, url: "https://clanker.world", authenticity: confirmed }
  - { kind: app, url: "https://www.clanker.world/deploy", authenticity: confirmed }
  - { kind: docs, url: "https://clanker.gitbook.io/documentation", authenticity: confirmed }
  - { kind: x, url: "https://x.com/clanker_world", authenticity: confirmed }
  - { kind: github, url: "https://github.com/clanker-devco", authenticity: confirmed }
  - { kind: other, url: "https://farcaster.xyz/clanker", authenticity: confirmed }

deployments:
  - label: Clanker v4 factory (Robinhood Chain)
    role: factory
    address:
      value: "0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-15, R-16, R-20]
  - label: ClankerDeployer library
    role: other
    address:
      value: "0xFB2BAE281d9f9d11AE3Aed87bB717B058C9797e6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-15, R-20]
  - label: Factory Treasury (teamFeeRecipient)
    role: other
    address:
      value: "0xFC535Ead4104177B70bf235D67Ab436d99788e04"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-20]
  - label: CATARM (Clanker deployToken, paired WETH)
    role: token
    address:
      value: "0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-17, R-20, R-21]

metrics:
  - { kind: revenue_24h, value: 0.294, currency: WETH, as_of: 2026-09-03T03:00:00Z, window: 24h, method: "clanker.world/clankers/chain/robinhood/stats Protocol Revenue (v4) Last 24h", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 73471.64, currency: USD, as_of: 2026-09-03T03:05:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0 CATARM/WETH v4 h24", class: claim, receipt_ids: [R-21] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:59:08Z, receipt_ids: [R-20], result: "eth_blockNumber 0x329fdff (53083647). Factory 0xd3f2…9A94 eth_getCode 12070 bytes. owner() 0xeea96d959963eab488a3d4b7d5d347785cf1eab8 (171 bytes code). deprecated() false. TOKEN_SUPPLY() 100_000_000_000e18. teamFeeRecipient() 0xFC535Ead4104177B70bf235D67Ab436d99788e04 (code empty). CATARM 0xcd74…2ca0 name()/symbol() CATARM/CATARM, code 12024 bytes. $CLANKER 0xd246…1E18 44-byte EIP-1167 of DopplerERC20V1 0x3Be8…C599; name()/symbol() Clanker/CLANKER; owner() Airlock 0xeb7c…0862; totalSupply 1e9 * 1e18. Hook 0x48B8…e8cc 16405 bytes; locker 0xE491…4A09 24150 bytes; ClankerDeployer 0xFB2B…97e6 17375 bytes; WETH 0x0Bd7…AD73 2202 bytes." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:02:00Z, receipt_ids: [R-15, R-16, R-17, R-18, R-19], result: "Blockscout API v2: factory name Clanker is_verified true file_path src/Clanker.sol compiler v0.8.28 verified_at 2026-07-08T18:27:51Z; library ClankerDeployer 0xFB2B…97e6. Created 2026-07-08T18:26:35Z tx 0x28b5e185… via CREATE2 0x4e59b448… from 0x2f2F61d1…. Latest to-factory tx 0x1664f046… 2026-09-02T23:07:13Z method deployToken name CATARM originatingChainId 4663 pairedToken 0x0Bd7…AD73 hook 0x48B8…e8cc locker 0xE491…4A09. Token 0xd246…1E18 name Clanker proxy_type eip1167 implementation DopplerERC20V1 creator 0x1B37…b69a; creation tx 0x12701d75… 2026-08-14T00:26:01Z to LongLauncher.create()." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-5, R-8, R-9, R-14], result: "@clanker_world bio website is clanker.world. clanker.world/clankers/chain/robinhood/stats Factory link is 0xD3f2cC1731b7Fd17f28798835C2E02f0a1839A94 and Treasury 0xFC535Ead…. Gitbook intro names clanker.world API and clanker-sdk. GitHub org clanker-devco hosts v4-contracts and DOCS. farcaster.xyz/clanker pinned 'clanker is live on Robinhood Chain'." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-21, R-22], result: "GET dexscreener tokens/0xcd74…2ca0: robinhood uniswap v4 CATARM/WETH pool 0xd7befcb0…, pairCreatedAt 1788390433000 (= 2026-09-02T23:07:13Z), volume.h24 73471.64, liquidity.usd 17312.23. GET tokens/0xd246…1E18: robinhood uniswap v4 CLANKER/AI, websites app.long.xyz/tokens/0xd246…, socials x.com/OkayClanker, volume.h24 784214.11, marketCap 2908165." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Tag @clanker (Farcaster) or @clanker_world (X), or use clanker.world/deploy, to mint a 100 billion-supply ERC-20 into a Uniswap v4 pool with locked LP, 1% static fees and a decaying sniper tax. No bonding-curve graduation.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-3, R-5, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://clanker.world", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@clanker_world", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94", class: verified, observed_at: 2026-09-03T03:02:00Z, receipt_ids: [R-2, R-15, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:02:00Z, receipt_ids: [R-15, R-17, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.repository, value: "https://github.com/clanker-devco", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-15, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.secondary-leaf, value: agents/agent-execution, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.secondary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: control.owner, value: "owner() 0xeea96d959963eab488a3d4b7d5d347785cf1eab8 (171 bytes of code at block 53083647); OwnerAdmins can setDeprecated, setHook, setLocker, setExtension, setMevModule, setTeamFeeRecipient", class: verified, observed_at: 2026-09-03T02:59:08Z, receipt_ids: [R-15, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: control.privileged-role, value: "teamFeeRecipient() 0xFC535Ead4104177B70bf235D67Ab436d99788e04 (empty code); site stats label Factory Treasury", class: verified, observed_at: 2026-09-03T02:59:08Z, receipt_ids: [R-2, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: relationship, value: "RH token 0xd24688a1d530f648aed86a835aca8ad6a7e61e18 name/symbol Clanker/CLANKER is an EIP-1167 DopplerERC20V1 clone created 2026-08-14 via LongLauncher.create(); DexScreener website is app.long.xyz and twitter @OkayClanker. Not a Clanker.sol deployToken. Flag ca-collision.", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-18, R-19, R-20, R-22], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-14, field: identity.symbol, value: "CLANKER", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Gitbook Audits page lists Macro and Cantina reviews of Clanker v4 / v4.1 (June-August 2025) and earlier v3.1/v2 reports; this pass did not open those PDFs against the Robinhood bytecode", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: activity.status, value: "Factory deployToken still succeeding on 4663: CATARM 2026-09-02T23:07:13Z tx 0x1664f046…; site stats Last deploy Sep 2, 2026, 11:07 PM, 3 last 24h, 14 last 7d, 335 last 30d, 14.3k tokens deployed", class: verified, observed_at: 2026-09-03T03:02:00Z, receipt_ids: [R-2, R-17], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: "account.@clanker_world.role", value: project, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@clanker_world.slug", value: clanker, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@clanker_world.note", value: "Bio website clanker.world. Recent posts are Base-heavy; RH X deploys state a 200-follower and 1-per-day limit. RH factory 0xd3f2…9A94 still takes deployToken. RH $CLANKER 0xd246…1E18 is a LONG/Doppler clone. Flag ca-collision.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-9, R-11, R-12, R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "clanker.world Robinhood stats: Protocol Revenue (v4) WETH 0.294 last 24h, WETH 2.65 last 7d, WETH 4.45 last 30d, claimable WETH 10.54", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "@clanker_world replies that Robinhood Chain X deploys need 200+ followers and a 1-per-day limit, and offers Base when the count is below that", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-2, R-17, R-20, R-21], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-23, field: identity.alias, value: tokenbot, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: relationship, value: "Gitbook Deployed Contracts lists Base, Arbitrum, Unichain, Ethereum, BSC, Monad and Solana; it does not list Robinhood. The RH factory is still live and verified as Clanker.sol v4.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-15], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@clanker_world posts sushicat live on Base"
    summary: "@clanker_world posted sushicat ($sushicat) live on Base at 0x4D96…Db07, with a 10% vault note."
    occurred_at: 2026-09-03T02:57:27Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [activity.status, taxonomy.chain-scope]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-2
    type: company
    title: "@clanker_world posts 200-follower Robinhood gate"
    summary: "@clanker_world posted that Robinhood Chain X deploys need 200+ followers and told the user to try Base."
    occurred_at: 2026-09-03T02:14:33Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: onchain
    title: "Clanker factory deployToken creates CATARM on 4663"
    summary: "deployToken at 2026-09-02T23:07:13Z named CATARM; DexScreener CATARM/WETH v4 pairCreatedAt matches."
    occurred_at: 2026-09-02T23:07:13Z
    observed_at: 2026-09-03T03:05:00Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-2, R-17, R-21]
  - id: EVT-4
    type: company
    title: "@clanker_world posts MEOW live on Robinhood Chain"
    summary: "@clanker_world posted Meow (MEOW) live on Robinhood Chain, 100B supply, 1-per-day and 200+ follower limits."
    occurred_at: 2026-09-02T15:57:24Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "RH $CLANKER 0xd246 is a LONG/Doppler clone"
    summary: "0xd246…1E18 is an EIP-1167 DopplerERC20V1 created 2026-08-14 via LongLauncher.create(), not Clanker.sol."
    occurred_at: 2026-08-14T00:26:01Z
    observed_at: 2026-09-03T03:05:00Z
    affected_fields: [identity.symbol, relationship, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18, R-19, R-22]
  - id: EVT-6
    type: company
    title: "@clanker_world posts Clanker live on Robinhood Chain"
    summary: "@clanker_world posted Clanker live on Robinhood Chain with a decaying sniper tax from 66.7% to 4.2% over 15s."
    occurred_at: 2026-07-09T19:55:49Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [lifecycle, product.mechanism, taxonomy.chain-scope]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10, R-14]
  - id: EVT-7
    type: onchain
    title: "Clanker v4 factory CREATE2-deployed on chain 4663"
    summary: "Factory 0xd3f2…9A94 created 2026-07-08T18:26:35Z via CREATE2 0x4e59b448…; Blockscout verified src/Clanker.sol."
    occurred_at: 2026-07-08T18:26:35Z
    observed_at: 2026-09-03T03:02:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15, R-16]

receipts:
  - { id: R-1, publisher: Clanker, title: "About Clanker", url: "https://www.clanker.world/about", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-7, CLM-8, CLM-10, CLM-14, CLM-23], excerpt: "Clanker is the AI-powered token launcher for Base, Arbitrum, and other EVM chains. Deploy in seconds. Launch instantly tradable tokens on Base and Arbitrum. Multi-Chain: Deploy on Base, Arbitrum, Monad, and other EVM chains. Auto Liquidity. Creator Rewards. Token Vaults. Airdrops. Farcaster: Tag @clanker with your token name and symbol to deploy via cast. Website: Use the deploy wizard. tokenbot CLANKER listed among Top Clankers. Full Documentation https://clanker.world/docs." }
  - { id: R-2, publisher: Clanker, title: "Robinhood Chain Stats", url: "https://www.clanker.world/clankers/chain/robinhood/stats", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-12, CLM-16, CLM-20, CLM-22, EVT-3], excerpt: "Robinhood Chain. 14.3k tokens deployed. Deployments 3 Last 24h, 14 Last 7d, 335 Last 30d. Last deploy: Sep 2, 2026, 11:07 PM. Protocol Revenue (v4) WETH 0.294 Last 24h, WETH 2.65 Last 7d, WETH 4.45 Last 30d. Claimable: WETH 10.54 Factory https://robinhoodchain.blockscout.com/address/0xD3f2cC1731b7Fd17f28798835C2E02f0a1839A94 Treasury https://robinhoodchain.blockscout.com/address/0xFC535Ead4104177B70bf235D67Ab436d99788e04. Top token CATARM 0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0." }
  - { id: R-3, publisher: Clanker, title: "Deploy a Token", url: "https://www.clanker.world/deploy", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9], excerpt: "Create a Clanker. Deploy a token and optionally add an engagement droid, or preclank to launch with a cast. Chain selector includes Base. Fees 1% static · 15 s sniper tax. Stock token pair — eligibility required. Robinhood Stock Tokens are tokenized debt securities issued by Robinhood Assets (Jersey) Limited (RHJ)." }
  - { id: R-4, publisher: Clanker, title: "Stock Token pair terms", url: "https://www.clanker.world/terms/stock-tokens", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "These terms apply when you use Clanker to configure or deploy a token whose liquidity pool is paired against a Robinhood Stock Token or ETF token issued by Robinhood Assets (Jersey) Limited (RHJ). Clanker is not the issuer of Stock Tokens, does not custody Stock Tokens, and does not offer, sell, or redeem Stock Tokens." }
  - { id: R-5, publisher: Clanker, title: "Gitbook Introduction", url: "https://clanker.gitbook.io/documentation/readme.md", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-8, CLM-10], excerpt: "Clanker is a token deployment protocol on Base, Arbitrum, and other EVM chains. The Clanker REST API is available at https://www.clanker.world/api. The clanker-sdk is a TypeScript library for deploying and managing Clanker tokens on-chain. API docs are generated from clanker.world/docs/api-registry.ts. SDK docs from clanker-sdk/src/." }
  - { id: R-6, publisher: Clanker, title: "Deployed Contracts", url: "https://clanker.gitbook.io/documentation/references/deployed-contracts", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-24], excerpt: "Mainnet Deployments tables for Base 8453 (Clanker 0xE85A59c628F7d27878ACeB4bf3b35733630083a9), Arbitrum One 42161, Unichain 130, Mainnet 1, Binance, Monad 143. Solana: Tag @clanker on Farcaster or @clanker_world on X. No Robinhood / chain 4663 row on this page." }
  - { id: R-7, publisher: Clanker, title: "Audits", url: "https://clanker.gitbook.io/documentation/references/audits.md", published_at: null, accessed_at: 2026-09-03T02:49:00Z, kind: audit, authority: primary, authenticity: unconfirmed, supports: [CLM-15], excerpt: "August 2025, Clanker v4.1 Macro. June-July 2025, Clanker v4 Cantina and Macro. March 2025, Clanker v3.1.0 Macro. January 2025, Clanker v2.0.0 Quantstamp. File attachments listed; PDFs not opened line by line this pass." }
  - { id: R-8, publisher: GitHub, title: "clanker-devco organization", url: "https://github.com/clanker-devco", published_at: null, accessed_at: 2026-09-03T03:06:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-6], excerpt: "Clanker Devco. Public repos include DOCS, clanker-sdk (TypeScript SDK for interacting with Clanker contracts), v4-contracts (Smart contracts for Clanker v4), v3.1-contracts, v4-pool-extensions, custom-token-deployment." }
  - { id: R-9, publisher: "@clanker_world", title: "clanker profile", url: "https://x.com/clanker_world", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-17, CLM-18, CLM-19], excerpt: "Display name clanker, handle @clanker_world. Bio: no bird soars too high if he soars with his own wings. Website https://clanker.world. User ID 1855363480859320320, created 2024-11-09." }
  - { id: R-10, publisher: "@clanker_world", title: "clanker is live on Robinhood Chain", url: "https://x.com/clanker_world/status/2075307958842609832", published_at: 2026-07-09T19:55:49Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-8, CLM-21, EVT-6], excerpt: "clanker is live on Robinhood Chain from @RobinhoodCrypto! tag @clanker_world with your token details and say \"on robinhood,\" or select the chain directly on clanker.world. sniper tax starts at 66.7% and decays to 4.2% over the first 15 seconds. clank clank (on robinhood)" }
  - { id: R-11, publisher: "@clanker_world", title: "Meow (MEOW) is live on Robinhood Chain", url: "https://x.com/clanker_world/status/2095179294221721785", published_at: 2026-09-02T15:57:24Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-19, CLM-21, EVT-4], excerpt: "https://www.clanker.world/clanker/0x1A59AdE007A023717371491Bb1d8CC7e6409Db07 Meow (MEOW) is live on Robinhood Chain. Liquidity locked, 100B supply. Robinhood limit 1 per day · 200+ followers" }
  - { id: R-12, publisher: "@clanker_world", title: "Robinhood Chain requires 200+ X followers", url: "https://x.com/clanker_world/status/2095334601971417445", published_at: 2026-09-03T02:14:33Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-21, EVT-2], excerpt: "Your account needs at least 200 X followers to deploy on Robinhood Chain — you currently have 2. Try Base instead, or deploy directly at https://clanker.world/deploy" }
  - { id: R-13, publisher: "@clanker_world", title: "sushicat live on Base", url: "https://x.com/clanker_world/status/2095345397392634034", published_at: 2026-09-03T02:57:27Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-19, EVT-1], excerpt: "https://www.clanker.world/clanker/0x4D965dA47Eb9DB16B5500879A30b37A6C57FDb07 sushicat ($sushicat) is live on Base — 10% vault for 31 days noted, but the lockup did not apply this round. You can update settings at https://clanker.world" }
  - { id: R-14, publisher: "tokenbot (@clanker)", title: "Farcaster profile", url: "https://farcaster.xyz/clanker", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, EVT-6], excerpt: "tokenbot @clanker. create autonomous memecoins for free, get rewarded for posting bangers. Pinned: clanker is live on Robinhood Chain! tag @clanker with your token details and say \"on robinhood,\" or select the chain directly on clanker.world. sniper tax starts at 66.7% and decays to 4.2% over the first 15 seconds." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xd3f2…9A94 Clanker", url: "https://robinhoodchain.blockscout.com/address/0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94", published_at: null, accessed_at: 2026-09-03T03:01:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-11, CLM-24, EVT-7], excerpt: "hash 0xD3f2cC1731b7Fd17f28798835C2E02f0a1839A94 name Clanker is_contract true is_verified true creator 0x4e59b44847b379578588920cA78FbF26c0B4956C tx 0x28b5e185…. file_path src/Clanker.sol compiler v0.8.28 verified_at 2026-07-08T18:27:51Z. Library ClankerDeployer 0xFB2BAE281d9f9d11AE3Aed87bB717B058C9797e6. Source: contract Clanker, version = \"4\", TOKEN_SUPPLY = 100_000_000_000e18, function deployToken." }
  - { id: R-16, publisher: Blockscout, title: "Factory CREATE2 tx 0x28b5e185…", url: "https://robinhoodchain.blockscout.com/tx/0x28b5e185a9731efc33d417440d21e843b597737956122dfaf198cf433ae9892f", published_at: 2026-07-08T18:26:35Z, accessed_at: 2026-09-03T03:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-7], excerpt: "timestamp 2026-07-08T18:26:35.000000Z status ok result success from 0x2f2F61d1d3EDF36d4f6F4F77767AD8E8b487A093 to 0x4e59b44847b379578588920cA78FbF26c0B4956C block_number 4570632. Constructor arg ends 0x2f2F61d1d3EDF36d4f6F4F77767AD8E8b487A093." }
  - { id: R-17, publisher: Blockscout, title: "deployToken CATARM tx 0x1664f046…", url: "https://robinhoodchain.blockscout.com/tx/0x1664f046b84dd7e9c2c3a59c600354da99f5799a42bd37370fbc5ba61e52f4da", published_at: 2026-09-02T23:07:13Z, accessed_at: 2026-09-03T03:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16, CLM-22, EVT-3], excerpt: "timestamp 2026-09-02T23:07:13.000000Z status ok method deployToken to 0xD3f2cC1731b7Fd17f28798835C2E02f0a1839A94 from 0x48F43B35e9726AD526Ab1b54fa12603aA31D7d9D block_number 52948163. Decoded tokenConfig name CATARM symbol CATARM originatingChainId 4663. poolConfig hook 0x48B8F6AD3A1b4aA477314c9a23035b8F84dDe8cc pairedToken 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. locker 0xE4910b09709423aFafD995dD76D8A81CF9134A09. context interface Lore Labs Launchpad." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xd246…1E18 Clanker token", url: "https://robinhoodchain.blockscout.com/address/0xd24688a1d530f648aed86a835aca8ad6a7e61e18", published_at: null, accessed_at: 2026-09-03T03:01:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, EVT-5], excerpt: "hash 0xd24688a1d530f648aeD86A835acA8AD6a7e61E18 name Clanker is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x12701d757215e2a9c63b98cef7ea9c2914a2c7532b485d9dd37661674d7e2c31. token name Clanker symbol CLANKER decimals 18 total_supply 1000000000000000000000000000 holders_count 1480." }
  - { id: R-19, publisher: Blockscout, title: "LongLauncher.create tx 0x12701d75…", url: "https://robinhoodchain.blockscout.com/tx/0x12701d757215e2a9c63b98cef7ea9c2914a2c7532b485d9dd37661674d7e2c31", published_at: 2026-08-14T00:26:01Z, accessed_at: 2026-09-03T03:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, EVT-5], excerpt: "timestamp 2026-08-14T00:26:01.000000Z status ok method create to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED block_number 35820130. Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a. Mint of 1000000000000000000000000000 Clanker/CLANKER 0xd246…1E18 to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Paired token 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18." }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "eth_getCode and factory getters", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:59:08Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-11, CLM-12, CLM-13, CLM-22], excerpt: "eth_blockNumber 0x329fdff. Factory code 12070 bytes. owner() 0xeea96d959963eab488a3d4b7d5d347785cf1eab8. deprecated() false. TOKEN_SUPPLY() 100000000000e18. teamFeeRecipient() 0xFC535Ead4104177B70bf235D67Ab436d99788e04 code empty. CATARM name/symbol CATARM. 0xd246…1E18 code 44-byte EIP-1167 of 0x3be8b97f…c599, name Clanker symbol CLANKER owner Airlock 0xeb7c…0862 totalSupply 1e27." }
  - { id: R-21, publisher: DexScreener, title: "CATARM token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-7, CLM-22, EVT-3], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0xd7befcb0152d2da7f0afa2ac6fe1cc2b5e0b553919d2f765eb49f5fe4e1a40df baseToken 0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0 CATARM quoteToken 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 WETH volume.h24 73471.64 liquidity.usd 17312.23 fdv 22356 pairCreatedAt 1788390433000 socials x.com/CatArmRH." }
  - { id: R-22, publisher: DexScreener, title: "CLANKER 0xd246 token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xd24688a1d530f648aed86a835aca8ad6a7e61e18", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, EVT-5], excerpt: "chainId robinhood dexId uniswap labels v4 baseToken 0xd24688a1d530f648aeD86A835acA8AD6a7e61E18 Clanker CLANKER quoteToken Artificial Inu AI. volume.h24 784214.11 marketCap 2908165. info.websites https://app.long.xyz/tokens/0xd24688a1d530f648aed86a835aca8ad6a7e61e18. socials https://x.com/OkayClanker." }
  - { id: R-23, publisher: Bitquery, title: "Robinhood Meme Coin Launches API", url: "https://docs.bitquery.io/docs/blockchain/robinhood/robinhood-meme-coin-launches/", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T02:40:00Z, kind: docs, authority: independent, authenticity: unconfirmed, supports: [CLM-4, CLM-16], excerpt: "Launchpad and bot contract map: Clanker 0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94 mint amount 100000000000 (100 billion). Track Clanker token launches on Robinhood where Transaction.To is that factory and Transfer.Sender is the zero address." }

gaps:
  - { priority: P0, question: "What contract is factory owner() 0xeea96d…eab8, and can it change hooks, lockers or teamFeeRecipient without a timelock?", checked: "owner() via RPC at block 53083647 returned 0xeea96d… with 171 bytes of code; Blockscout address page for that owner hit a non-JSON response this pass", next: "open Blockscout 0xeea96d959963eab488a3d4b7d5d347785cf1eab8 and read verified source / Safe threshold" }
  - { priority: P0, question: "Do the Gitbook v4 Macro/Cantina PDFs match the Robinhood Clanker.sol bytecode at 0xd3f2…9A94?", checked: "audits.md lists June-August 2025 v4/v4.1 files; PDFs not opened; deployed-contracts.md has no 4663 row, 2026-09-03", next: "open the attached PDFs and compare compiler settings and src/Clanker.sol to the verified explorer upload" }
  - { priority: P1, question: "What is the Base tokenbot $CLANKER CA, and does clanker.world treat it as the protocol token distinct from RH 0xd246…1E18?", checked: "about page lists tokenbot CLANKER among Top Clankers; RH 0xd246 is a Doppler clone on DexScreener under long.xyz, 2026-09-03", next: "open the tokenbot CLANKER row on clanker.world and record its Base address" }
  - { priority: P1, question: "Which Uniswap v4 hook/locker/mevModule bytecode is enabled on the RH factory (0x48B8…e8cc / 0xE491…4A09 / 0xEA1F…299e)?", checked: "CATARM deployToken decoded those addresses; RPC showed non-empty code; Blockscout smart-contract pages for hook/locker returned non-JSON this pass", next: "GET Blockscout /api/v2/smart-contracts for those three addresses" }
  - { priority: P2, question: "Does clanker.world footer or docs page hyperlink https://x.com/clanker_world, or is the handle confirmed only from the X bio?", checked: "X bio website is clanker.world; about page names Farcaster @clanker; Gitbook deployed-contracts names @clanker_world for Solana, 2026-09-03", next: "open clanker.world footer and /docs for an explicit X URL" }
---

# Clanker — research packet

## What it is

A Farcaster and X deploy bot that mints a 100 billion-supply ERC-20 into a locked Uniswap v4 pool. Tag @clanker_world or use clanker.world to pick a chain, pair, vault and sniper-tax window; creators take a share of swap fees. Clanker Devco's verified v4 factory 0xd3f2…9A94 is live on Robinhood Chain. The RH $CLANKER token 0xd246…1E18 is a LONG/Doppler clone, not this factory.

Themes: launchpad, memecoin, agent, stock-paired, ai

## Why it matters

The factory is a native Uniswap v4 pad on chain 4663 with its own Clanker.sol, not a wrapper of Pons or Doppler. Site stats still show new RH deploys while @clanker_world's recent X replies send under-200-follower accounts to Base. RH $CLANKER 0xd246…1E18 is a different product.

## What could go wrong

`owner()` is a contract that can deprecate the factory and swap hooks, lockers and the team fee recipient. Gitbook's deployed-contracts table omits Robinhood, so a reader who stops at docs will miss the live 4663 factory. Ticker CLANKER on this chain is the LONG/Doppler clone, not a Clanker.sol token.

## Product and mechanics

Tag @clanker on Farcaster, @clanker_world on X, or use clanker.world/deploy. The v4 factory mints `TOKEN_SUPPLY` 100 billion units, places liquidity through an enabled locker, and initializes a Uniswap v4 pool via an enabled hook and MEV module. Launch posts cite a sniper tax that starts at 66.7% and decays to 4.2% over 15 seconds; the deploy form shows 1% static fees and a 15 second sniper tax. [claim R-1 R-3 R-10 R-15]

Stock-token pairing is a separate form path with RHJ terms. X deploys onto Robinhood Chain are gated at 200 followers and one launch per day; the bot replies with a Base alternative when the count is below that. [claim R-3 R-4 R-11 R-12]

## Control and security

`owner()` on 0xd3f2…9A94 returns 0xeea96d…eab8, which has 171 bytes of code. OwnerAdmins may setDeprecated, setHook, setLocker, setExtension, setMevModule and setTeamFeeRecipient. `teamFeeRecipient()` is 0xFC535Ead…, an address with empty code that the stats page labels Factory Treasury. No timelock was read on this pass. Gitbook lists Macro and Cantina v4 reviews; those PDFs were not matched to this bytecode. [verified R-15 R-20]

## Team and provenance

GitHub org clanker-devco publishes v4-contracts and the Gitbook DOCS repo. @clanker_world's bio website is clanker.world. farcaster.xyz/clanker is pinned to the Robinhood launch. The factory was CREATE2-deployed 2026-07-08 from 0x2f2F61d1… through 0x4e59b448…. Who holds 0xeea96d… was not established. [claim R-8 R-9 R-14]

## Economics and activity

clanker.world Robinhood stats, opened 2026-09-03: 14.3k tokens, 3 deploys in 24h, 14 in 7d, 335 in 30d, last deploy 2026-09-02 23:07 UTC, protocol revenue v4 0.294 WETH / 24h. DexScreener CATARM/WETH v4 24h volume $73,471.64 (one factory token, not pad-wide). RH $CLANKER 0xd246 24h volume is a LONG pool and is not a Clanker.sol figure. [claim R-2 R-21]

## Material risks

- Factory owner is a contract with no timelock reproduced on this pass; it can disable deploys and change modules. [verified R-15 R-20]
- Gitbook deployed-contracts omits chain 4663 while the factory is live. [verified R-6 R-15]
- Ticker CLANKER on Robinhood Chain is Doppler/LONG clone 0xd246…1E18. Flag ca-collision. [verified R-18 R-19 R-22]
- X surface is Base-heavy because of the 200-follower RH gate; that is not an off-chain of the factory. [claim R-12 R-17]

## Verification passes

- Receipts: each URL above was opened on 2026-09-03 and the excerpt copied from the page or API body. [verified R-1 R-2 R-15 R-17 R-18 R-20]
- Numbers: 0.294 WETH is the site's Robinhood v4 24h revenue, not an all-chains total. CATARM $73,471.64 is one token's DexScreener h24, not pad volume. $CLANKER 0xd246 volume was not used as a Clanker.sol metric. [claim R-2 R-21 R-22]
- Adversarial: the strongest contrary reading is that Clanker on Robinhood is only the LONG-launched $CLANKER token, or that the pad has left 4663 because Gitbook and recent X are Base-first. Verified Clanker.sol at 0xd3f2…9A94, a 2026-09-02 deployToken, and the stats page factory link argue against both. [inference R-2 R-6 R-15 R-17 R-18]

## Operations log

- Census: Clanker is not a row in content/census.yaml (49 names). No pending packet under research/inbox/packets/clanker/.
- Opened clanker.world/about, /deploy, /terms/stock-tokens, /clankers/chain/robinhood/stats.
- Opened clanker.gitbook.io introduction, deployed-contracts, audits.md; github.com/clanker-devco; farcaster.xyz/clanker.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_blockNumber, eth_getCode, owner, deprecated, TOKEN_SUPPLY, teamFeeRecipient, CATARM name/symbol, 0xd246 name/symbol/owner/totalSupply.
- Blockscout API v2: factory address, smart-contract source, creation tx 0x28b5e185…, to-factory txs including 0x1664f046…, token 0xd246…, LongLauncher tx 0x12701d75…. Hook/locker/owner address pages returned non-JSON later in the pass.
- DexScreener token APIs for 0xcd74… and 0xd246…. Bitquery Robinhood meme-launches map.
- X keyword search from:clanker_world Latest (Base-heavy replies plus RH MEOW/CATONIT posts).
- Time spent: ~30 minutes. No content/ writes. No merge. No push.
