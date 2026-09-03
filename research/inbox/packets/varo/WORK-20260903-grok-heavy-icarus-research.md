---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: varo
name: Varo
packet_tier: seed
as_of: 2026-09-03T03:33:00Z
prior_packet: null
supersedes: null
owned_slugs: [varo]
allowed_paths:
  - research/inbox/packets/varo/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Varo
  aliases: [VARO Launchpad, Rialto Launchpad]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://varo.rialto.xyz
  official_handle: "@launchonvaro"
  repository: "NULL — no repository URL on varo.rialto.xyz HTML or JS, @launchonvaro, docs.rialto.xyz/llms.txt, or GitHub search varo+rialto this pass"
  possible_matches: []

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad, amm, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Factory 0x851153fe…d0b8 is hardcoded in the official JS as launchpad, is an ERC1967 proxy with 141 bytes of code on chain 4663, and implementation 0x95C4AB0B…15b7 has 17333 bytes. @launchonvaro bio is A launchpad by @rialto_xyz and points at varo.rialto.xyz. OKX Dune row varo lifetime DEX volume $109.92M. Site HTML does not embed the handle. owner() reverted. [R-1] [R-2] [R-3] [R-10] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-4], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-11, CLM-12], note: "" }

links:
  - { kind: site, url: "https://varo.rialto.xyz", authenticity: confirmed }
  - { kind: app, url: "https://varo.rialto.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/launchonvaro", authenticity: confirmed }
  - { kind: x, url: "https://x.com/rialto_xyz", authenticity: unconfirmed }
  - { kind: docs, url: "https://docs.rialto.xyz", authenticity: unconfirmed }
  - { kind: other, url: "https://app.rialto.xyz/varo", authenticity: unconfirmed }

deployments:
  - label: Launchpad factory (ERC1967 proxy)
    role: factory
    address:
      value: "0x851153fe84239C2dC55fa191aC2f099e20a6d0b8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-10, R-11, R-13]
  - label: Launchpad implementation (ERC1967 slot)
    role: implementation
    address:
      value: "0x95C4AB0Bb4557811d2642cb12ae5eFb7E82f15b7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-10]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-10], result: "eth_getCode non-empty on rpc.mainnet.chain.robinhood.com at block 0x32a4705 (53102341): factory 141 bytes starting 0x60806040525f8073…360894 (ERC1967 proxy). eth_getStorageAt impl slot 0x95C4AB0Bb4557811d2642cb12ae5eFb7E82f15b7 (17333 bytes). Admin slot empty. owner() and getOwner() reverted. Uniswap v3 factory 0x1f7d7550…2EfA 24535 bytes; NPM 0x73991a25…E0D3 24384 bytes. WETH 0x0Bd7D308…cAD73 symbol() WETH." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "varo.rialto.xyz title Varo, meta Discover and create tokens on Rialto Launchpad, localStorage rialto-theme. JS const Ih=0x851153fe…d0b8, v3_factory 0x1f7d7550…2EfA, position_manager 0x73991a25…E0D3, fee_tier 1e4, assets https://varo-assets.rialto.xyz. @launchonvaro bio A launchpad by @rialto_xyz, URL http://varo.rialto.xyz. Site HTML/JS has no launchonvaro string." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-12], result: "Dune dashboard okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis query 8080854 row launchpad=varo: tokens_launched 8712, tokens_traded 1820, tokens_rwa_paired 209, volume_usd 109924852.72, volume_rwa 7345146.32, traders 29065, trades 545885." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One transaction mints a fixed-supply ERC-20 into a locked Uniswap v3 1% pool. No bonding curve and no graduation. Quote asset is WETH, USDG, or a Robinhood stock token the pad lists as liquid. Entire supply goes into a single-sided LP at a starting FDV set by Varo. Pool fee 1%; protocol share of that fee was 30% at launch and 20% for new launches from 2026-07-29.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://varo.rialto.xyz", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@launchonvaro", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x851153fe84239C2dC55fa191aC2f099e20a6d0b8", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-10, R-11, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x95C4AB0Bb4557811d2642cb12ae5eFb7E82f15b7", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.role, value: "JS treats 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA as Uniswap v3 factory and 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3 as position manager; both have non-empty code on 4663. They are Uniswap infra, not Varo-owned.", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.alias, value: "Site meta description is Discover and create tokens on Rialto Launchpad; JS validates API config against this Rialto network", class: claim, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: "launch/uni-pool-launch — tokens mint into a Uniswap v3 pool at deploy; JS requires fee_tier 1e4; posts say no bonding and no graduation", class: inference, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Varo is the launchpad product of Rialto. @launchonvaro bio A launchpad by @rialto_xyz. Domain is a rialto.xyz subdomain. rialto is content/dependencies/rialto.yaml (trading/prop-amm), not a census slug, so it is not under possible_matches. Do not merge Varo into the Rialto dependency card.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-3, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: control.proxy, value: "Factory is an ERC1967 proxy (141-byte code, impl slot 0x95C4AB0B…15b7). ERC1967 admin slot is empty. owner() and getOwner() reverted on the proxy and the implementation.", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "OKX Dune query 8080854 row launchpad=varo: 8712 tokens launched, DEX volume_usd 109924852.72, volume_rwa 7345146.32, 29065 traders. Aggregator reconstruction, not a Llama chain slice.", class: claim, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "NULL — owner() reverted on factory 0x851153fe…d0b8 and implementation 0x95C4AB0B…15b7 at block 53102341", class: unknown, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on the site, JS bundle, @launchonvaro, or docs.rialto.xyz this pass", class: unknown, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: identity.repository, value: "NULL — no repository on the site or handle; GitHub search varo+rialto returned 0 repos; github.com/rialto is an unrelated org with repo sharif", class: unknown, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "JS requires API launchpad == 0x851153fe…d0b8, v3_factory == 0x1f7d7550…2EfA, position_manager == 0x73991a25…E0D3, fee_tier == 10000, initial_protocol_fee_bps in 0..3000", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: account.@launchonvaro.tier, value: watch, class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: account.@launchonvaro.role, value: official, class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: account.@launchonvaro.slug, value: varo, class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: account.@launchonvaro.note, value: "Official handle; bio A launchpad by @rialto_xyz; URL varo.rialto.xyz. Site HTML has no twitter:site. Not in content/accounts.yaml this pass. @rialto_xyz is already an infra watch row.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: other, value: "A $VARO token 0xC1A02352582CE5DCDDD40964163E2F893F07BBD3 appears in third-party Varo launch tables as a 2026-07-27 WETH pool with 30% protocol share. That is a launched token, not the pad.", class: claim, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@launchonvaro posted varo.rialto.xyz"
    summary: "@launchonvaro defined Varo as Italian varare, to launch, and linked https://varo.rialto.xyz/."
    occurred_at: 2026-07-27T20:48:56Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [identity.domain, lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: company
    title: "@launchonvaro: Uniswap v3 single-sided 100M LP"
    summary: "@launchonvaro said tokens launch with the entire 100M supply in a single-sided Uniswap v3 LP, no custom bonding curves, no graduation limits, tradable from the first block."
    occurred_at: 2026-07-28T17:06:02Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: company
    title: "Protocol fee cut from 30% to 20%"
    summary: "@launchonvaro said new launches from 2026-07-29 keep 80% of the 1% pool fee, up from 70%, with protocol share 20%."
    occurred_at: 2026-07-29T13:51:48Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: company
    title: "Varo listed on Uniswap Launches"
    summary: "@launchonvaro said every token launched through Varo shows up in Uniswap's launchpad feed, tradable in the Uniswap app."
    occurred_at: 2026-08-01T13:37:09Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: company
    title: "Protocol fees in launched tokens sent to 0xdEaD"
    summary: "@launchonvaro said protocol fees denominated in launched tokens were burned: 51M+ tokens across 1,538 coins, up to 2.7% of a coin's supply, at the 0xdEaD address."
    occurred_at: 2026-08-27T20:52:54Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-6
    type: company
    title: "Five new quote assets: LMT, GME, RIVN, PFE, DJT"
    summary: "@launchonvaro said launches can pair against Lockheed Martin, GameStop, Rivian, Pfizer and Trump Media stock tokens."
    occurred_at: 2026-09-02T18:19:02Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-7
    type: onchain
    title: "Factory proxy 0x851153fe…d0b8 live on chain 4663"
    summary: "RPC at block 53102341: factory 141-byte ERC1967 proxy, implementation 0x95C4AB0B…15b7 17333 bytes, admin slot empty. Blockscout HTML title lists the address on Robinhood Chain."
    occurred_at: 2026-09-03T03:31:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [deployment.address, lifecycle, control.proxy]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-11]

receipts:
  - { id: R-1, publisher: Varo, title: "varo.rialto.xyz home HTML", url: "https://varo.rialto.xyz/", published_at: null, accessed_at: 2026-09-03T03:28:54Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-7, CLM-10, CLM-19, CLM-20], excerpt: "title Varo. meta name=description content=Discover and create tokens on Rialto Launchpad. script reads localStorage rialto-theme. module /assets/index-B3vSkBR-.js. HTTP last-modified Tue, 18 Aug 2026 21:47:50 GMT. No twitter:site and no @launchonvaro string in the HTML." }
  - { id: R-2, publisher: Varo, title: "varo.rialto.xyz JS bundle index-B3vSkBR-.js", url: "https://varo.rialto.xyz/assets/index-B3vSkBR-.js", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-6, CLM-7, CLM-9, CLM-16], excerpt: "Ih=\"0x851153fe84239C2dC55fa191aC2f099e20a6d0b8\", V3e=https://varo-assets.rialto.xyz, $3e=\"0x1f7d7550B1b028f7571E69A784071F0205FD2EfA\", q3e=\"0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3\". Checks ve(e.launchpad)===Ih, v3_factory===$3e, position_manager===q3e, fee_tier===1e4, initial_protocol_fee_bps in 0..3000. API https://varo.rialto.xyz/api." }
  - { id: R-3, publisher: "@launchonvaro", title: "X profile", url: "https://x.com/launchonvaro", published_at: 2026-07-22T10:06:33Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-10, CLM-17, CLM-18, CLM-19, CLM-20], excerpt: "Name varo. Handle @launchonvaro. Bio: A launchpad by @rialto_xyz. URLs: http://varo.rialto.xyz. Joined 2026-07-22. Followers about 5086 this pass." }
  - { id: R-4, publisher: "@launchonvaro", title: "varo | varare, to launch", url: "https://x.com/launchonvaro/status/2081844306097193133", published_at: 2026-07-27T20:48:56Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-18, EVT-1], excerpt: "varo | ˈva·ro | noun Italian, from varare, to launch. The act of putting a newly built vessel into the water for the first time. https://varo.rialto.xyz/" }
  - { id: R-5, publisher: "@launchonvaro", title: "Building on Uniswap V3", url: "https://x.com/launchonvaro/status/2082150602679755211", published_at: 2026-07-28T17:06:02Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9, EVT-2], excerpt: "Building on Uniswap V3 was a core architectural decision. Tokens launch with the entire 100M supply in a single-sided LP, no custom bonding curves, no graduation limits. Trading is live from the first block, across @rialto_xyz and others including @Uniswap, @gmgnai, @lifiprotocol, @BasedBot and @DefinitiveFi." }
  - { id: R-6, publisher: "@launchonvaro", title: "Protocol fee 30% to 20%", url: "https://x.com/launchonvaro/status/2082464110269055288", published_at: 2026-07-29T13:51:48Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-3], excerpt: "We’re cutting our protocol fee from 30% to 20%. New launches from today: creators keep 80% of the 1% pool fee, up from 70%." }
  - { id: R-7, publisher: "@launchonvaro", title: "Varo is now live on Uniswap Launches", url: "https://x.com/launchonvaro/status/2083547584258330960", published_at: 2026-08-01T13:37:09Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Varo is now live on @Uniswap Launches! Every token launched through Varo now shows up in Uniswap's new launchpad feed, tradable right in the app." }
  - { id: R-8, publisher: "@launchonvaro", title: "Protocol fees in launched tokens burned", url: "https://x.com/launchonvaro/status/2093079329894777315", published_at: 2026-08-27T20:52:54Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Varo has burned all protocol fees denominated in launched tokens. 51M+ tokens burned across 1,538 unique coins, cutting as much as 2.7% of a coin's total supply. Follow-up: All burns are verifiable onchain at the 0xdEaD address." }
  - { id: R-9, publisher: "@launchonvaro", title: "Five new quote assets", url: "https://x.com/launchonvaro/status/2095214936351772818", published_at: 2026-09-02T18:19:02Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Five new quote assets live: LMT, GME, RIVN, PFE, DJT. You can now launch tokens paired against Lockheed Martin, GameStop, Rivian, Pfizer and Trump Media." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_getStorageAt / eth_call factory", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-8, CLM-11, EVT-7], excerpt: "eth_blockNumber 0x32a4705 (53102341). Factory 0x851153fe…d0b8 code 141 bytes. ERC1967 impl slot 0x95C4AB0Bb4557811d2642cb12ae5eFb7E82f15b7 code 17333 bytes. Admin slot 0x0. owner() and getOwner() reverted. 0x1f7d7550…2EfA 24535 bytes. 0x73991a25…E0D3 24384 bytes. 0x0Bd7D308…cAD73 symbol() WETH." }
  - { id: R-11, publisher: Blockscout, title: "Address page 0x851153fe…d0b8", url: "https://robinhoodchain.blockscout.com/address/0x851153fe84239C2dC55fa191aC2f099e20a6d0b8", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, EVT-7], excerpt: "HTML title: Robinhood Chain address details for 0x851153fe84239C2dC55fa191aC2f099e20a6d0b8 | Blockscout. API v2 /api/v2/addresses/… returned Cloudflare 403 this pass, so is_verified, creator and creation tx were not copied." }
  - { id: R-12, publisher: Dune OKX, title: "Robinhood Chain launchpads lifetime row varo", url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Query 8080854 launchpad summary table row launchpad=varo: tokens_launched 8712, tokens_traded 1820, tokens_rwa_paired 209, volume_usd 109924852.71733542, volume_rwa 7345146.320248735, rwa_vol_share 0.0668, traders 29065, trades 545885. Dashboard text widget still says window 2026-07-01 to 07-23; the table is later than that text." }
  - { id: R-13, publisher: Dune ronaldo1234, title: "Varo (Rialto) Token Launches Decoded", url: "https://dune.com/queries/8148345", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-21], excerpt: "Comment: Varo launchpad 0x851153fe84239C2dC55fa191aC2f099e20a6d0b8 (Robinhood Chain). TokenCreated decoded from robinhood.logs. Sample 2026-07-29 launch_index 3362 token 0xc1a014f0…6eb3 supply 100000000 pool_fee_pct 1 protocol_fee_pct 20 quote 0x0bd7d308…ad73. Separate fee-share table lists token VARO 0xC1A02352…7BBD3 launched 2026-07-27 protocol share 30." }
  - { id: R-14, publisher: Rialto, title: "docs.rialto.xyz introduction / llms.txt", url: "https://docs.rialto.xyz/llms.txt", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-10], excerpt: "Index describes Rialto as an onchain spot exchange with propAMMs. The word varo does not appear in llms.txt this pass. No launchpad contract page in the index." }
  - { id: R-15, publisher: "@rialto_xyz", title: "launchonvaro volume since launch", url: "https://x.com/rialto_xyz/status/2082592965990461774", published_at: 2026-07-29T22:23:50Z, accessed_at: 2026-09-03T03:22:00Z, kind: social, authority: primary, authenticity: unconfirmed, supports: [CLM-10], excerpt: "Rialto did $2.7M in stock token volume (past 24h), while @launchonvaro has crossed $50M from 14.5k+ traders since launch." }

gaps:
  - { priority: P0, question: "Who holds upgrade and fee-collector rights on factory 0x851153fe…d0b8?", checked: "owner() and getOwner() reverted on proxy and implementation; ERC1967 admin slot empty; Blockscout API v2 403, 2026-09-03", next: "decode implementation ABI or wait for verified source; identify fee_collector from the pad API config" }
  - { priority: P1, question: "Is there a first-party docs page that publishes the factory, locker and fee collector?", checked: "docs.rialto.xyz/llms.txt has no varo; varo.rialto.xyz/docs is the same SPA; no GitHub repo, 2026-09-03", next: "open the authenticated /api config the JS fetches and copy launchpad, fee_collector, quotes" }
  - { priority: P1, question: "When was the factory created, and is source verified?", checked: "Blockscout HTML title only; API v2 Cloudflare 403, 2026-09-03", next: "retry Blockscout API or another explorer for creation tx, is_verified, implementation name" }
  - { priority: P1, question: "Is there an audit of the Varo factory and lockers?", checked: "site HTML/JS, @launchonvaro, docs.rialto.xyz, GitHub search varo+rialto, 2026-09-03", next: "ask in public and record the answer as a claim" }
  - { priority: P2, question: "Does DefiLlama have a Varo chain-slice adapter?", checked: "api.llama.fi/summary/dexs/varo and /protocol/varo both not found, 2026-09-03", next: "search Llama dimension-adapters for varo or rialto-launchpad" }
  - { priority: P2, question: "Is varo.fun / varodotfun.vercel.app the same product?", checked: "separate UI with 1B supply, USDT0, graduation at 8.40K USDT0; not linked from varo.rialto.xyz this pass", next: "treat as a name collision unless a shared CA appears" }
---

# Varo — research packet

## What it is

Varo is a Robinhood Chain token launchpad by Rialto. One transaction mints a fixed-supply ERC-20 into a locked Uniswap v3 1% pool quoted in WETH, USDG or a liquid Robinhood stock token, with no bonding curve and no graduation step. The pool fee is 1%; after 29 Jul 2026 new launches send 20% of that fee to the protocol and 80% to creators.

## Why it matters

It is a live Uniswap v3 instant pad on chain 4663 with a reproduced factory, a first-party JS constant for that factory, and an OKX Dune lifetime DEX volume of $109.92M. The name is not in the 49-row census. Rialto already sits as a prop-AMM dependency card; Varo is the issuance product on a rialto.xyz subdomain.

## What could go wrong

The factory is an ERC1967 proxy whose implementation is unverified and whose owner() call reverted, so the upgrade path is not named. Liquidity is locked in a Uniswap v3 position at launch, so a failed launch cannot be unwound by pulling LP. Quote-asset list and protocol fee bps are API-configured, not read from a verified getter this pass.

## Product and mechanics

One transaction deploys an ERC-20, opens a Uniswap v3 pool at fee tier 10000, and seeds a single-sided position with the full supply. @launchonvaro said that supply is 100 million and that there is no bonding curve and no graduation. Quote assets include WETH (0x0Bd7D308…cAD73 reproduced), USDG, and Robinhood stock tokens the pad marks liquid; on 2 Sep the account added LMT, GME, RIVN, PFE and DJT. [claim R-2 R-5 R-9] [verified R-10]

The 1% pool fee is split. At launch the protocol share was 30% of that fee; from 29 Jul 2026 new launches keep 80% for creators and 20% for the protocol. On 27 Aug the account said protocol fees denominated in launched tokens were sent to 0xdEaD. JS accepts initial_protocol_fee_bps only in 0..3000. [claim R-6 R-8] [verified R-2]

## Control and security

Factory 0x851153fe…d0b8 is an ERC1967 proxy (141 bytes). The implementation slot reads 0x95C4AB0B…15b7 (17333 bytes). The ERC1967 admin slot is empty. owner() and getOwner() reverted on both addresses at block 53102341. Blockscout API v2 was Cloudflare 403, so the explorer verified-source flag was not copied. [verified R-10 R-11]

No audit report URL was located on the site, the JS bundle, @launchonvaro or docs.rialto.xyz. [unknown]

## Team and provenance

@launchonvaro bio is "A launchpad by @rialto_xyz" and the profile URL is varo.rialto.xyz. The site title is Varo; the meta description is "Discover and create tokens on Rialto Launchpad"; the JS validates API config as this Rialto network. The HTML does not embed @launchonvaro. docs.rialto.xyz describes a prop-AMM spot exchange and does not mention Varo. No repository was located; github.com/rialto is an unrelated org. [claim R-1 R-3 R-14] [verified R-2]

## Economics and activity

OKX Dune query 8080854 row launchpad=varo, opened 2026-09-03: 8,712 tokens launched, 1,820 traded, 209 RWA-paired, DEX volume $109,924,852.72, RWA volume $7,345,146.32, 29,065 traders, 545,885 trades. That is an aggregator reconstruction, not a Llama chain slice. Llama slugs varo and protocol/varo were not found. [claim R-12]

@rialto_xyz on 29 Jul said @launchonvaro had crossed $50M from 14.5k+ traders since launch. That is a project post, not the Dune row. [claim R-15]

## Material risks

- Factory implementation 0x95C4AB0B…15b7 is unverified; owner() reverted, so the upgrade holder is unnamed. [verified R-10]
- Liquidity is a locked Uniswap v3 position; a launch cannot pull LP. [claim R-5]
- No audit report was located this pass. [unknown]
- Handle is one-sided: X points at the site; the site HTML does not cite @launchonvaro. [claim R-1 R-3]
- Name collision with a $VARO launched token and with unrelated varo.fun UI. [claim R-13]

## Verification passes

- Receipts: varo.rialto.xyz HTML and JS bundle, @launchonvaro profile and the six posts above, @rialto_xyz 2082592965990461774, docs.rialto.xyz/llms.txt, Blockscout HTML title, RPC eth_getCode/eth_getStorageAt/eth_call, and the two Dune pages were opened on 2026-09-03. [verified R-1 R-2 R-10]
- Numbers: $109.92M is the OKX Dune varo row, not an all-chains total and not a 24h figure. Bytecode lengths are eth_getCode at block 53102341. [claim R-12] [verified R-10]
- Adversarial: the strongest contrary reading is that Varo is the Rialto prop-AMM, or that the factory is Dune-only. The pad is a Uniswap v3 issuance product on varo.rialto.xyz; the factory constant is in the official JS. rialto is not a census slug, so possible_matches is empty and the objects stay distinct. [claim R-2 R-10 R-14]

## Operations log

- Census 49 rows: no varo. content/dependencies/rialto.yaml exists; content/accounts.yaml has @rialto_xyz, not @launchonvaro.
- Opened https://varo.rialto.xyz/ (title Varo), https://varo.rialto.xyz/assets/index-B3vSkBR-.js (Ih factory constant), https://docs.rialto.xyz/ and llms.txt (no varo), https://rialto.xyz → app.rialto.xyz SPA, https://app.rialto.xyz/varo.
- Opened https://x.com/launchonvaro and posts 2081844306097193133, 2082150602679755211, 2082464110269055288, 2083547584258330960, 2093079329894777315, 2095214936351772818; https://x.com/rialto_xyz/status/2082592965990461774. X article 2082130256727515136 returned a login wall.
- RPC eth_getCode, eth_getStorageAt (ERC1967 impl/admin), owner(), getOwner() on https://rpc.mainnet.chain.robinhood.com at block 0x32a4705. Blockscout API v2 Cloudflare 403; HTML title only.
- Dune https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis query 8080854; https://dune.com/queries/8148345.
- Llama api.llama.fi/summary/dexs/varo and /protocol/varo not found. GitHub search varo+rialto 0 repos; org rialto is unrelated (repo sharif).
- No content/ writes. No merge. No push.
