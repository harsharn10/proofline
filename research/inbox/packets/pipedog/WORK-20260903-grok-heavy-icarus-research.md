---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pipedog
name: PIPEDOG
packet_tier: seed
as_of: 2026-09-03T04:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [pipedog]
allowed_paths:
  - research/inbox/packets/pipedog/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PIPEDOG
  aliases: [pipedog]
  symbols: [PIPEDOG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://pipedog.xyz
  official_handle: "@pipedog_"
  repository: "NULL — no GitHub org or repository URL on pipedog.xyz, DexScreener, Gecko token info, Blockscout, or the @pipedog_ profile this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a bonding-curve launchpad"
        - "PIPEDOG creator_address_hash is EOA 0xa359…e814 with empty code, not a Pons factory; creation tx has to: null (direct create)"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "PIPEDOG is 0x5Cb6…d8A6 paired to WETH 0x0Bd7…AD73 on Uniswap v3, site pipedog.xyz / @pipedog_"
        - "No shared domain, handle, or reproduced address"
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census UP is a protocol row, not this token"
        - "DexScreener lists a tiny UP-dex v3 PIPEDOG/WETH pair 0x8F02…8Ea0 with liquidity.usd 162.42 this pass, not an UP product"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a launchpad; Mobula names Uniswap V3 factory 0x1f7d…2EfA as chain infra"
        - "PIPEDOG token was not created by that factory; the factory only created the PIPEDOG/WETH pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5Cb6…d8A6 is a fully verified fixed-supply ERC-20 with non-empty code on 4663; EOA 0xa359…e814 created it at 2026-07-28T20:29:10Z and two minutes later opened Uniswap v3 PIPEDOG/WETH 1% pool 0xB7f1…42D6. pipedog.xyz Uniswap URL contains this CA and links @pipedog_. @pipedog_ latest posts this pass did not embed the CA. [R-1] [R-3] [R-4] [R-6] [R-9] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-21], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-13], note: "" }

links:
  - { kind: site, url: "https://pipedog.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/pipedog_", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/pipedogpipe", authenticity: unconfirmed }

deployments:
  - label: PIPEDOG token (fixed-supply ERC-20)
    role: token
    address:
      value: "0x5Cb6F181081301b44905F3ae15419112ecaBd8A6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:46:08Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-4]
  - label: Uniswap v3 PIPEDOG/WETH 1% pool
    role: other
    address:
      value: "0xB7f10f74B39291b9290b779978e19A7637C742D6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-14]
  - label: UniswapV3Factory (pool creator)
    role: factory
    address:
      value: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-13, R-15]
  - label: WETH (pair quote)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-13]

metrics:
  - { kind: holders, value: 8592, currency: null, as_of: 2026-09-03T04:46:08Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 holders_count", class: claim, receipt_ids: [R-1] }
  - { kind: volume_24h, value: 2924896.88, currency: USD, as_of: 2026-09-03T04:46:20Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 pair 0xB7f1…42D6 volume.h24 (PIPEDOG/WETH v3, not all pairs)", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 8421367.62, currency: USD, as_of: 2026-09-03T04:46:20Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 pair 0xB7f1…42D6 liquidity.usd (PIPEDOG/WETH v3, not an all-pools figure)", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 26740450, currency: USD, as_of: 2026-09-03T04:46:20Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 pair 0xB7f1…42D6 fdv/marketCap", class: claim, receipt_ids: [R-6] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:47:16Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32af4cd (53146829). Token 0x5Cb6…d8A6 eth_getCode 1825 bytes (not EIP-1167). name pipedog, symbol PIPEDOG, decimals 18, totalSupply 12345678912e18. owner() reverts. Deployer 0xa359…e814 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:46:08Z, receipt_ids: [R-1, R-2, R-3, R-13, R-14, R-15], result: "Blockscout api/v2 token 0x5Cb6…d8A6 name pipedog symbol PIPEDOG holders_count 8592 total_supply 12345678912e18 is_verified true is_partially_verified false file_path pipedog.sol compiler v0.8.20. creator_address_hash 0xa359E6190740930Bb65e611B553724b0CE73e814 is_contract false creation_transaction_hash 0xfe28aa54…49db 2026-07-28T20:29:10Z block 21879606. Pool 0xB7f1…42D6 name UniswapV3Pool is_verified true creator UniswapV3Factory 0x1f7d…2EfA tx 0x0abd4002…cab8 2026-07-28T20:31:52Z method createAndInitializePoolIfNecessary fee 10000." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:46:20Z, receipt_ids: [R-6, R-17], result: "DexScreener latest/dex/tokens and token-pairs/v1/robinhood: 4 robinhood pairs. Top Uniswap v3 PIPEDOG/WETH 0xB7f1…42D6 quote 0x0Bd7…AD73 liquidity.usd 8421367.62 volume.h24 2924896.88 fdv/marketCap 26740450 pairCreatedAt 1785270712 (2026-07-28T20:31:52Z) info.websites https://pipedog.xyz/ info.socials x.com/pipedog_ and t.me/pipedogpipe." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-8, R-16], result: "Gecko GET token 200: volume_usd.h24 2899701.85 fdv_usd 26971629.71 market_cap_usd 26489718.12 total_reserve_in_usd 4192383.77 (all-pools). Gecko pool 0xb7f1…42d6: name PIPEDOG / WETH 1% pool_created_at 2026-07-28T20:31:52Z volume_usd.h24 2907235.25 reserve_in_usd 8458551.02 fdv_usd 26447115.26 dex uniswap-v3-robinhood. Info websites https://pipedog.xyz twitter_handle pipedog_ telegram_handle pipedogpipe holders.count 8540." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:47:16Z, receipt_ids: [R-5], result: "Pool 0xB7f1…42D6 eth_getCode 22142 bytes. token0 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. token1 0x5Cb6F181081301b44905F3ae15419112ecaBd8A6. fee 0x2710 (10000). factory() 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:47:17Z, receipt_ids: [R-9, R-10, R-11], result: "pipedog.xyz title pipedog (PIPEDOG); get-link https://app.uniswap.org/explore/tokens/robinhood/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6; nav https://x.com/pipedog_ and https://t.me/pipedogpipe. t.me/pipedogpipe og:title pipedog, 1946 members, no CA in preview. @pipedog_ bio matches site copy; latest posts this pass did not embed the CA or pipedog.xyz." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "EOA 0xa359…e814 deployed a fixed-supply OpenZeppelin ERC-20 (pipedog / PIPEDOG, 12345678912 * 1e18 minted to msg.sender) then called NonfungiblePositionManager.createAndInitializePoolIfNecessary for Uniswap v3 PIPEDOG/WETH fee 10000. Verified source: no owner, no mint/burn, no transfer tax.", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-2, R-3, R-4, R-5, R-14], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "pipedog", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-4, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "PIPEDOG", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5Cb6F181081301b44905F3ae15419112ecaBd8A6", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-4, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.domain, value: "https://pipedog.xyz", class: verified, observed_at: 2026-09-03T04:47:17Z, receipt_ids: [R-6, R-9, R-16], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "@pipedog_ — pipedog.xyz and DexScreener/Gecko list this handle; latest posts and bio this pass did not embed CA 0x5Cb6…d8A6 or pipedog.xyz; flag unconfirmed-official for the reverse link", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-6, R-9, R-11, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: 8592, class: verified, observed_at: 2026-09-03T04:46:08Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener PIPEDOG/WETH v3 24h volume 2924896.88 USD and liquidity.usd 8421367.62 at 2026-09-03T04:46:20Z (top pair, not all four pairs)", class: verified, observed_at: 2026-09-03T04:46:20Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko pool PIPEDOG/WETH 1% volume_usd.h24 2907235.25 reserve_in_usd 8458551.02 fdv_usd 26447115.26 at 2026-09-03T04:48:00Z. Gecko token volume_usd.h24 2899701.85 and total_reserve_in_usd 4192383.77 are all-pools, not the v3 book.", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "owner() reverts; verified pipedog.sol mints once in the constructor and declares no owner, mint, burn, or transfer tax. Deployer 0xa359…e814 has no code.", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: deployment.role, value: "creator_address_hash 0xa359…e814 is an EOA; creation tx to: null. Not Pons, LONG, pools.trade, lunch.fun, or hood.fun. Source comment names a launchbot template; no factory() on the token.", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:46:20Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 factory 0x1f7d…2EfA pool 0xB7f1…42D6 fee 1%. Secondary Uniswap v4 ETH book liquidity.usd 251022.18 this pass.", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-5, R-6, R-8], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No project audit report URL was located on pipedog.xyz, Blockscout, DexScreener, Gecko, Telegram preview, or X search this pass. Verified source imports OpenZeppelin ERC20.", class: unknown, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: identity.repository, value: "NULL — no GitHub org or repository URL this pass", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-6, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: communications.status, value: "unconfirmed-official reverse: @pipedog_ is listed on pipedog.xyz and DexScreener; bio and latest posts this pass did not embed the CA. t.me/pipedogpipe is a third-party-link until a public preview shows the CA.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "pipedog | PIPEDOG | https://pipedog.xyz | @pipedog_ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 26740450; Gecko pool fdv_usd 26447115.26; Gecko token fdv_usd 26971629.71 market_cap_usd 26489718.12. Blockscout circulating_market_cap 26719434.38.", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-6, R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xB7f10f74B39291b9290b779978e19A7637C742D6", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-13, R-14], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-13, R-15], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.alias, value: "pipedog", class: verified, observed_at: 2026-09-03T04:47:16Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-1, REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko PIPEDOG/WETH 1% reserve $8.46M, 24h volume $2.91M"
    summary: "Gecko pool 0xB7f1…42D6 volume_usd.h24 2907235 reserve_in_usd 8458551 fdv_usd 26447115."
    occurred_at: 2026-09-03T04:48:00Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@olie100x posted PIPEDOG went to 65M"
    summary: "Post: I gave you $PIPEDOG, it went to 65M. Separate from @pipedog_."
    occurred_at: 2026-09-03T04:40:30Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: ct
    title: "@onenine_btc listed pipedog as a $26M native OG meme"
    summary: "Post: pipedog:native $26m - OG Meme Character, among non-equity paired memes on Robinhood."
    occurred_at: 2026-09-03T03:55:36Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: company
    title: "@pipedog_ posted this data seems suspiciously pipe coded"
    summary: "Post text only. Bio matches site copy; the post did not embed the CA or pipedog.xyz."
    occurred_at: 2026-09-02T19:10:13Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "EOA opened Uniswap v3 PIPEDOG/WETH 1% pool"
    summary: "Tx 0x0abd…cab8 from 0xa359…e814 to NPM at 2026-07-28T20:31:52Z; fee 10000."
    occurred_at: 2026-07-28T20:31:52Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-6
    type: onchain
    title: "EOA deployed pipedog ERC-20, 12.345B minted to deployer"
    summary: "Tx 0xfe28…49db from 0xa359…e814 at 2026-07-28T20:29:10Z created 0x5Cb6…d8A6."
    occurred_at: 2026-07-28T20:29:10Z
    observed_at: 2026-09-03T04:46:08Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x5Cb6…d8A6 pipedog / PIPEDOG", url: "https://robinhoodchain.blockscout.com/address/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6", published_at: null, accessed_at: 2026-09-03T04:46:08Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-9, CLM-13, CLM-19, CLM-20, CLM-23], excerpt: "hash 0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 name pipedog is_contract true is_verified true proxy_type null implementations []. creator_address_hash 0xa359E6190740930Bb65e611B553724b0CE73e814 creation_transaction_hash 0xfe28aa549e323eb3733b97213a61997e40888dd88c5a83bd6ea7d3554d2249db. token symbol PIPEDOG decimals 18 total_supply 12345678912000000000000000000 holders_count 8592 type ERC-20 circulating_market_cap 26719434.38 volume_24h 3847606.85." }
  - { id: R-2, publisher: Blockscout, title: "Verified source pipedog.sol", url: "https://robinhoodchain.blockscout.com/address/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6?tab=contract", published_at: null, accessed_at: 2026-09-03T04:46:08Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-12, CLM-13], excerpt: "ContractName pipedog compiler v0.8.20+commit.a1b79de6 is_verified true is_partially_verified false file_path pipedog.sol verified_at 2026-07-28T20:29:44Z. Source: import OpenZeppelin ERC20; constructor(uint256 initialSupply) ERC20(\"pipedog\", \"PIPEDOG\") { _mint(msg.sender, initialSupply); }. Comment: No owner, no mint/burn, no transfer tax - the same minimal, renounceable shape launchbot deployed." }
  - { id: R-3, publisher: Blockscout, title: "Token create tx 0xfe28aa54…49db", url: "https://robinhoodchain.blockscout.com/tx/0xfe28aa549e323eb3733b97213a61997e40888dd88c5a83bd6ea7d3554d2249db", published_at: 2026-07-28T20:29:10Z, accessed_at: 2026-09-03T04:46:08Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-13, EVT-6], excerpt: "timestamp 2026-07-28T20:29:10.000000Z status ok result success block_number 21879606 from 0xa359E6190740930Bb65e611B553724b0CE73e814 (is_contract false) to null created_contract pipedog 0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 is_verified true. Log Transfer from 0x0 to 0xa359…e814 value 12345678912000000000000000000." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, totalSupply, owner() on PIPEDOG", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:47:16Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-12, CLM-13, CLM-14, CLM-23], excerpt: "eth_blockNumber 0x32af4cd (53146829). Token code 1825 B. name pipedog symbol PIPEDOG decimals 18 totalSupply 0x27e41b32dc254928c9000000 (12345678912e18). owner() execution reverted. Deployer 0xa359…e814 code 0x." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "token0, token1, fee, factory() on PIPEDOG/WETH pool", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:47:16Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-21, CLM-22], excerpt: "Pool 0xB7f10f74B39291b9290b779978e19A7637C742D6 code 22142 B. token0 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. token1 0x5Cb6F181081301b44905F3ae15419112ecaBd8A6. fee 10000. factory() 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens PIPEDOG", url: "https://api.dexscreener.com/latest/dex/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6", published_at: null, accessed_at: 2026-09-03T04:46:20Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-6, CLM-7, CLM-8, CLM-10, CLM-14, CLM-15, CLM-17, CLM-19, CLM-20], excerpt: "4 robinhood pairs. Top pairAddress 0xB7f10f74B39291b9290b779978e19A7637C742D6 labels v3 dexId uniswap base pipedog / PIPEDOG quote WETH 0x0Bd7…AD73 liquidity.usd 8421367.62 volume.h24 2924896.88 fdv 26740450 marketCap 26740450 pairCreatedAt 1785270712000. info.websites https://pipedog.xyz/ info.socials x.com/pipedog_ t.me/pipedogpipe. Uniswap v4 ETH book liquidity.usd 251022.18." }
  - { id: R-7, publisher: GeckoTerminal, title: "pipedog token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6", published_at: null, accessed_at: 2026-09-03T04:47:16Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-20], excerpt: "GET 200. name pipedog symbol PIPEDOG decimals 18 total_supply 12345678912e18 price_usd 0.002184702027 fdv_usd 26971629.71 market_cap_usd 26489718.12 volume_usd.h24 2899701.85 total_reserve_in_usd 4192383.77 coingecko_coin_id pipedog. Top pool robinhood_0xb7f10f74b39291b9290b779978e19a7637c742d6." }
  - { id: R-8, publisher: GeckoTerminal, title: "PIPEDOG/WETH Uniswap v3 1% pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb7f10f74b39291b9290b779978e19a7637c742d6", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-11, CLM-15, CLM-20, EVT-1], excerpt: "name PIPEDOG / WETH 1% pool_created_at 2026-07-28T20:31:52Z fdv_usd 26447115.26 market_cap_usd 26447115.29 volume_usd.h24 2907235.25 reserve_in_usd 8458551.02 transactions.h24 buys 496 sells 484. dex uniswap-v3-robinhood." }
  - { id: R-9, publisher: pipedog.xyz, title: "pipedog (PIPEDOG) site", url: "https://pipedog.xyz/", published_at: null, accessed_at: 2026-09-03T04:47:17Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-6, CLM-7, CLM-17, CLM-18, CLM-19, CLM-23], excerpt: "title pipedog (PIPEDOG). get-link https://app.uniswap.org/explore/tokens/robinhood/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6. socials https://x.com/pipedog_ https://t.me/pipedogpipe https://www.coingecko.com/en/coins/pipedog https://coinmarketcap.com/currencies/pipedog/. Copy: pipedog robinhood dog / this is pipedog / is it pipe ?" }
  - { id: R-10, publisher: Telegram, title: "t.me/pipedogpipe", url: "https://t.me/pipedogpipe", published_at: null, accessed_at: 2026-09-03T04:47:17Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-18], excerpt: "HTTP 200. og:title pipedog. og:description You can view and join @pipedogpipe right away. tgme_page_extra 1 946 members, 142 online. No contract address in the preview HTML this pass." }
  - { id: R-11, publisher: "@pipedog_", title: "this data seems suspiciously pipe coded", url: "https://x.com/pipedog_/status/2095227814534414701", published_at: 2026-09-02T19:10:13Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-18, EVT-4], excerpt: "Display name pipedog handle @pipedog_. Bio: this pipedog he has pipe he has question this not pipe. Post: this data seems suspiciously pipe coded. No contract or pipedog.xyz in the post text this pass." }
  - { id: R-12, publisher: "@onenine_btc", title: "Best non-equity paired meme's on Robinhood", url: "https://x.com/onenine_btc/status/2095360032778969172", published_at: 2026-09-03T03:55:36Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Best non-equity paired meme's on @RobinhoodApp 1) cash-cat:native $266m 2) pipedog:native $26m - OG Meme Character 3) $FRONG $10m 4) $PONGO Currently at $3.5m." }
  - { id: R-13, publisher: Blockscout, title: "Address 0xB7f1…42D6 UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0xB7f10f74B39291b9290b779978e19A7637C742D6", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21, CLM-22], excerpt: "hash 0xB7f10f74B39291b9290b779978e19A7637C742D6 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0x0abd4002d4a56e982ca813b486ceb16a0b5b97b49c95c1e58a78e6b29d83cab8." }
  - { id: R-14, publisher: Blockscout, title: "Pool create tx 0x0abd4002…cab8", url: "https://robinhoodchain.blockscout.com/tx/0x0abd4002d4a56e982ca813b486ceb16a0b5b97b49c95c1e58a78e6b29d83cab8", published_at: 2026-07-28T20:31:52Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-21, EVT-5], excerpt: "timestamp 2026-07-28T20:31:52.000000Z status ok block_number 21881211 from 0xa359E6190740930Bb65e611B553724b0CE73e814 (is_contract false) to NonfungiblePositionManager 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3 method createAndInitializePoolIfNecessary token0 WETH 0x0Bd7…AD73 token1 PIPEDOG 0x5Cb6…d8A6 fee 10000." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x1f7d…2EfA UniswapV3Factory", url: "https://robinhoodchain.blockscout.com/address/0x1f7d7550B1b028f7571E69A784071F0205FD2EfA", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA name UniswapV3Factory is_contract true is_verified true creator_address_hash 0x9701fb0aDe1E269c8f64Ec0C7b3cfADB31A13A52." }
  - { id: R-16, publisher: GeckoTerminal, title: "pipedog token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6/info", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-17], excerpt: "GET 200. websites [https://pipedog.xyz] twitter_handle pipedog_ telegram_handle pipedogpipe holders.count 8540 last_updated 2026-09-03T04:27:02Z. categories Dog, Animal. gt_verified true." }
  - { id: R-17, publisher: DexScreener, title: "token-pairs/v1 robinhood PIPEDOG", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x5Cb6F181081301b44905F3ae15419112ecaBd8A6", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "HTTP 200 list length 4. First pairAddress 0xB7f10f74B39291b9290b779978e19A7637C742D6 liquidity.usd 8411140.21 (later snapshot than latest/dex/tokens 8421367.62)." }
  - { id: R-18, publisher: "@olie100x", title: "I gave you $PIPEDOG, it went to 65M", url: "https://x.com/olie100x/status/2095371334339461195", published_at: 2026-09-03T04:40:30Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "I gave you $CATE, it went to 45M I gave you $PIPEDOG, it went to 65M I gave you $ANSEM, it went to 450M I have another memecoin at 1.5k mcap with 1000x+ potential." }

gaps:
  - { priority: P0, question: "Does @pipedog_ embed CA 0x5Cb6…d8A6 or pipedog.xyz in bio, website field, or a pinned post?", checked: "X user search bio has no URL; from:pipedog_ latest 10 posts this pass had no CA or pipedog.xyz; site and DexScreener list the handle, 2026-09-03", next: "re-read the profile website field and any pinned post that names the CA" }
  - { priority: P1, question: "Does t.me/pipedogpipe pin the CA or a site that cross-links?", checked: "public preview og:title pipedog, 1946 members, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P1, question: "What share of the 12.345B supply still sits on deployer 0xa359…e814?", checked: "create log minted 12345678912e18 to the EOA; holders_count 8592; top-holder page not opened this pass, 2026-09-03", next: "Blockscout api/v2/tokens/0x5Cb6…/holders" }
  - { priority: P2, question: "Is there a project-specific audit beyond the OpenZeppelin ERC20 import?", checked: "pipedog.xyz, Blockscout source, DexScreener, Gecko info, Telegram preview, X search, 2026-09-03", next: "search new docs or a report URL if the site adds one" }
---

# PIPEDOG — research packet

## What it is

A fixed-supply ERC-20 that trades in a Uniswap v3 PIPEDOG/WETH 1% pool. An EOA minted 12,345,678,912 PIPEDOG to itself at construction and opened that pool on Robinhood Chain. Traders buy and sell PIPEDOG against WETH. pipedog.xyz publishes the contract on a Uniswap token URL and links @pipedog_.

Themes: memecoin, dog

## Why it matters

The PIPEDOG/WETH Uniswap v3 book printed about $2.91M of 24h volume and $8.46M reserve on Gecko at collection, with DexScreener fdv about $26.7M. @onenine_btc listed it as a $26M native OG meme next to cash-cat and FRONG. It is not a census row.

## What could go wrong

USD reserve on the v3 book counts PIPEDOG plus WETH. @pipedog_ is listed on the site but did not embed the CA in latest posts this pass, so the reverse official link stays unconfirmed-official. No project audit URL was located.

## Product and mechanics

EOA 0xa359…e814 created pipedog.sol as a verified OpenZeppelin ERC-20. constructor(uint256 initialSupply) mints the full 12345678912e18 to msg.sender. Creation tx 0xfe28…49db at 2026-07-28T20:29:10Z has to: null. [verified R-2 R-3 R-4]

The same EOA then called NonfungiblePositionManager 0x7399…0D3 createAndInitializePoolIfNecessary at 2026-07-28T20:31:52Z: token0 WETH, token1 PIPEDOG, fee 10000. Pool 0xB7f1…42D6 factory() returns UniswapV3Factory 0x1f7d…2EfA. DexScreener also lists a thinner Uniswap v4 ETH book. [verified R-5 R-6 R-14]

## Control and security

owner() reverts. Verified source has no owner, mint, burn, or transfer tax after construction. Deployer 0xa359…e814 has no code. [verified R-2 R-4]

pipedog.sol is fully verified (compiler v0.8.20, file_path pipedog.sol). No project audit report URL was located this pass. [verified R-2] [unknown]

## Team and provenance

pipedog.xyz title pipedog (PIPEDOG) includes the CA on a Uniswap explore URL and links https://x.com/pipedog_ and https://t.me/pipedogpipe. DexScreener and Gecko list the same surfaces. @pipedog_ bio matches site copy; latest posts this pass did not embed the CA. Flag unconfirmed-official for the reverse handle link and third-party-link for Telegram until a preview shows the CA. [claim R-9 R-10 R-11]

Creator is EOA 0xa359…e814, not a known launchpad factory. Source comment names a launchbot template. Distinct from census Pons, Artificial Inu, UP, and hood.fun. [verified R-1 R-3]

## Economics and activity

DexScreener PIPEDOG/WETH v3 at 2026-09-03T04:46:20Z: liquidity.usd 8421367.62, volume.h24 2924896.88, fdv/marketCap 26740450. [claim R-6]

Gecko same pool at 2026-09-03T04:48:00Z: volume_usd.h24 2907235.25, reserve_in_usd 8458551.02, fdv_usd 26447115.26. Gecko token volume_usd.h24 2899701.85 and total_reserve_in_usd 4192383.77 are all-pools, not the v3 book. [claim R-7 R-8]

Blockscout holders_count 8592; circulating_market_cap 26719434.38. Gecko info holders.count 8540 at 2026-09-03T04:27:02Z. Pair created 2026-07-28T20:31:52Z. [claim R-1 R-16]

## Material risks

- Reverse official handle is unconfirmed: @pipedog_ is listed on the site but latest posts did not embed the CA. [claim R-9 R-11]
- Telegram preview has no CA; flag third-party-link. [claim R-10]
- Pool USD reserve is PIPEDOG plus WETH. [claim R-6 R-8]
- No project audit report URL this pass. [unknown]
- Deployer received the full 12.345B at construction; remaining deployer balance was not read this pass. [verified R-3]

## Verification passes

- Receipts: Blockscout token/source/create tx/pool/factory, RPC name/symbol/totalSupply/owner/token0/token1/fee/factory, DexScreener tokens and token-pairs v1, Gecko token/pool/info (first GET 200), pipedog.xyz, Telegram preview, @pipedog_, @onenine_btc, and @olie100x were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-8 R-9]
- Numbers: 2924896.88 is the DexScreener PIPEDOG/WETH v3 24h volume, not Gecko token all-pools 2899701.85. Reserve 8458551.02 is the Gecko pool slice; DexScreener liquidity.usd 8421367.62 is the same pair, different aggregator. Holders 8592 is Blockscout, not Gecko 8540. [claim R-1 R-6 R-7 R-8]
- Adversarial: the strongest contrary reading is that PIPEDOG is a Pons or hood.fun graduation. creator_address_hash is an EOA, creation tx has to: null, and UniswapV3Factory only created the pool. [inference R-1 R-3 R-13]

## Operations log

- Base: origin/main 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no pipedog / PIPEDOG / 0x5Cb6…d8A6. GET packet path on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404.
- Explorer: Blockscout api/v2 token, address, smart-contracts, create tx 0xfe28…49db, pool, factory, pool create 0x0abd…cab8. Chrome UA.
- RPC 4663: eth_blockNumber, eth_getCode token/pair/deployer, eth_call name/symbol/decimals/totalSupply/owner/token0/token1/fee/factory at block 53146829.
- Aggregators: DexScreener latest/dex/tokens then token-pairs/v1/robinhood. Gecko token first GET 200, then pool and /info.
- Site: pipedog.xyz HTML; t.me/pipedogpipe preview.
- Social: X Latest pipedog/PIPEDOG/CA; user search pipedog → @pipedog_; from:pipedog_ latest.
- Failed: @pipedog_ latest posts and bio did not embed the CA; Telegram preview has no CA; token has no factory() (EOA create used instead).
- Time: collection 2026-09-03T04:45Z–2026-09-03T04:50Z.
