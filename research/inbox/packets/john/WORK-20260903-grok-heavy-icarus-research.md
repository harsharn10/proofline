---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: john
name: JOHN
packet_tier: seed
as_of: 2026-09-03T04:56:00Z
prior_packet: null
supersedes: null
owned_slugs: [john]
allowed_paths:
  - research/inbox/packets/john/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: JOHN
  aliases: ["Little John"]
  symbols: [JOHN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.littlejohnhood.fun
  official_handle: "@little_john_x"
  repository: "NULL — no GitHub org or repository URL on the site, CoinGecko links.repos.github [], Blockscout, DexScreener, or X search this pass"
  possible_matches:
    - slug: sherwood
      signals: [other]
      contrary_signals:
        - "Census Sherwood is a private-transfer tool / @sherw00d_cash, not a memecoin"
        - "JOHN is Little John / JOHN at 0xE170…365a5 in a Uniswap v2 JOHN/WETH pool"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a bonding-curve pad"
        - "JOHN was a direct CREATE from EIP-7702 account 0x0B10…d5Fe; factory() reverts"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "JOHN is WETH-quoted, not stock-paired; not a LongLauncher clone"
        - "Pending johndog is JOHNDOG at 0x64bc…1e18 quoted against SGOV, a different CA and symbol"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve launchpad"
        - "JOHN enableTrading() spun Uniswap v2 via factory 0x8bcE…937f, not a hood.fun curve"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "JOHN is Little John at 0xE170…365a5 paired to WETH 0x0Bd7…AD73"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xE170…365a5 is a 6843-byte unverified ERC-20 on 4663 named Little John / JOHN, decimals 9, totalSupply 1e18 raw (1e9 tokens). Direct CREATE from EIP-7702 0x0B10…d5Fe at 2026-07-12T03:56:18Z; enableTrading() one block later created Uniswap v2 JOHN/WETH 0xD5b8…bD1C. Live Gecko pool volume_usd.h24 0 reserve_in_usd 114.56. CoinGecko little-john last_updated 2026-07-13 still prints mc 17195155 vol 167501374. Distinct from packed johndog 0x64bc…1e18 and from other Little John CAs. Site littlejohnhood.fun embeds this CA. [R-1] [R-5] [R-8] [R-9] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.littlejohnhood.fun", authenticity: confirmed }
  - { kind: x, url: "https://x.com/little_john_x", authenticity: confirmed }

deployments:
  - label: JOHN token (unverified ERC-20)
    role: token
    address:
      value: "0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5]
  - label: Uniswap v2 JOHN/WETH pair
    role: other
    address:
      value: "0xD5b89CceE18C1eD101B793f4DBac34028963bD1C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-8]
  - label: UniswapV2Factory (pair factory())
    role: factory
    address:
      value: "0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-16]
  - label: Deployer / owner() / taxWallet() (EIP-7702)
    role: admin
    address:
      value: "0x0B10d67A8360bce3815B453e8895366b2FbED5Fe"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-4, R-5]
  - label: EIP-7702 implementation on owner
    role: implementation
    address:
      value: "0x37A593d139ece78064032c19c943FF4f794dd2BA"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5]
  - label: WETH (pair quote; rail)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:52:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-7, R-17]

metrics:
  - { kind: holders, value: 3656, currency: null, as_of: 2026-09-03T04:47:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 holders_count", class: claim, receipt_ids: [R-1, R-2] }
  - { kind: tvl, value: 114.5584500754, currency: USD, as_of: 2026-09-03T04:48:20Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xd5b89ccee18c1ed101b793f4dbac34028963bd1c reserve_in_usd (JOHN/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 0.0, currency: USD, as_of: 2026-09-03T04:48:20Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xd5b89ccee18c1ed101b793f4dbac34028963bd1c volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 550660.9143, currency: USD, as_of: 2026-09-03T04:48:20Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xd5b89ccee18c1ed101b793f4dbac34028963bd1c market_cap_usd (fdv_usd 521150.94). CoinGecko little-john last_updated 2026-07-13 is not this figure", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32af80d (53146637) then 0x32afc66 (53148774). Token 0xE170…365a5 eth_getCode 6843 bytes prefix 6080604052 (not EIP-1167). name Little John, symbol JOHN, decimals 9, totalSupply 1e18. owner() and taxWallet() 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. factory() reverts. maxTxAmount() 1e18. Owner code 23 B EIP-7702 prefix ef0100 implementation 0x37A593d1…d2BA." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-18], result: "Blockscout api/v2 token 0xE170…365a5 name Little John symbol JOHN holders_count 3656 total_supply 1e18 decimals 9 is_verified false. Address creator 0x0B10…d5Fe tx 0x7119a0f9…f422 2026-07-12T03:56:18Z block 7498622. Counters token_holders_count 3656 transfers_count 35151. Create logs OwnershipTransferred to 0x0B10…d5Fe and mint 1e18 to the token itself." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7], result: "At block 53148774 pool 0xD5b8…bD1C code 11293 B. name Uniswap V2 symbol UNI-V2 decimals 18. token0 WETH 0x0Bd7…AD73 token1 JOHN 0xE170…365a5 factory 0x8bcE…937f. getReserves reserve0 23629422144078077 wei WETH (~0.023629) reserve1 89647900000046 JOHN raw (~89647.9 with 9 decimals). totalSupply 1000085478857322169. Factory code 13859 B. WETH code 2202 B." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:48:20Z, receipt_ids: [R-8, R-9, R-10, R-11], result: "Gecko token GET 200: name Little John symbol JOHN decimals 9 coingecko_coin_id little-john volume_usd.h24 0 fdv_usd 521150.94 market_cap_usd 638284.64 total_reserve_in_usd 398.20 top_pools robinhood_0xd5b89ccee18c1ed101b793f4dbac34028963bd1c. Gecko pool GET 200: JOHN / WETH dex uniswap-v2-robinhood pool_created_at 2026-07-12T03:56:19Z volume_usd.h24 0 reserve_in_usd 114.5584500754 fdv_usd 521150.94 market_cap_usd 550660.9143 transactions.h24 all zero. DexScreener latest/dex/tokens and token-pairs/v1/robinhood both empty for this CA. CoinGecko coins/little-john last_updated 2026-07-13T02:32:40Z price 0.01719516 mc/fdv 17195155 vol 167501374." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:52:00Z, receipt_ids: [R-12, R-13, R-14], result: "littlejohnhood.fun HTML contains 0xe170dc96ca10103e0d4c5d9293c5a3a72ee365a5 in Uniswap swap URLs and links https://x.com/little_john_x. CoinGecko homepage and twitter_screen_name little_john_x map to this CA. @little_john_x posted the Uniswap v2 pool DexScreener URL 0xd5b89c…bd1c. Handle bio has no CA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Unverified ERC-20 Little John / JOHN. Direct CREATE then enableTrading() (0x8a8c523c) from the same EIP-7702 account created Uniswap v2 JOHN/WETH via UniswapV2Factory 0x8bcE…937f. Not a Pons, LONG, or hood.fun clone; factory() on the token reverts.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-3, R-5, R-6, R-7, R-19], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Little John", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "JOHN", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xD5b89CceE18C1eD101B793f4DBac34028963bD1C", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-6, R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@little_john_x", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-12, R-13, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "ca-collision: other 4663 Little John / JOHN tickers exist, including LaunchToken 0x1E96…4fC4 (58 holders), DexScreener 0x324f…4b63 and 0x8b49…846F, plus John Dog CAs with ticker JOHN. Packed johndog is JOHNDOG 0x64bc…1e18 / SGOV, a different name and pair. This packet is only 0xE170…365a5.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-10, R-15, R-20], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "JOHN/WETH Uniswap v2 24h volume 0 USD and reserve_in_usd 114.5584500754 at 2026-09-03T04:48:20Z (Gecko pool slice). fdv_usd 521150.94 market_cap_usd 550660.9143. RPC reserves ~0.023629 WETH + ~89647.9 JOHN.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener latest/dex/tokens and token-pairs/v1/robinhood returned no pairs for 0xE170…365a5 this pass. Search listed other JOHN tickers, not this CA.", class: verified, observed_at: 2026-09-03T04:47:30Z, receipt_ids: [R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 3656, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() and taxWallet() return 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. That account is EIP-7702 (code ef0100…, implementation 0x37A5…d2BA). OwnershipTransferred on create set this owner. Not renounced this pass.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "UNI-V2 LP: 999999999999999000 of 1000085478857322169 to 0x0000…dEaD; two dust holders. Site copy says 0% tax / LP burned; buyTax()/sellTax()/taxFee() revert so the 0% figure is not reproduced from those getters. Token source unverified.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-5, R-12, R-21], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v2 pair 0xD5b8…bD1C factory 0x8bcE…937f.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-6, R-7, R-8, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash 0x0B10…d5Fe is an EIP-7702 account, not a known pad factory. Token factory() reverts. enableTrading() on the token created the Uniswap v2 pair.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on the site, CoinGecko, Blockscout (source unverified), DexScreener, or X search this pass", class: unknown, observed_at: 2026-09-03T04:56:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://www.littlejohnhood.fun", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "CoinGecko little-john last_updated 2026-07-13T02:32:40Z current_price 0.01719516 market_cap/fdv 17195155 total_volume 167501374. Blockscout token circulating_market_cap and volume_24h echo those figures. Not the live Gecko pool slice.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: candidate, value: "john | JOHN | @little_john_x | https://www.littlejohnhood.fun — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:56:00Z, receipt_ids: [R-1, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.repository, value: "NULL — CoinGecko links.repos.github []; site and Blockscout have no repository URL this pass", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-20]
    material_effect: "Live Gecko pool prints $0 24h volume and $114.56 reserve; CoinGecko/Blockscout still print $17.2M cap and $167.5M 24h volume with last_updated 2026-07-13."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko JOHN/WETH 24h volume $0, reserve $114.56"
    summary: "Pool 0xd5b89…bd1c volume_usd.h24 0 reserve_in_usd 114.56 fdv_usd 521151. CoinGecko last_updated 2026-07-13."
    occurred_at: 2026-09-03T04:48:20Z
    observed_at: 2026-09-03T04:48:20Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "DexScreener tokens API returned no pairs for this CA"
    summary: "latest/dex/tokens and token-pairs/v1/robinhood were empty. Search listed other JOHN tickers, not 0xE170…365a5."
    occurred_at: 2026-09-03T04:47:30Z
    observed_at: 2026-09-03T04:47:30Z
    affected_fields: [economics.metric, relationship]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: company
    title: "@little_john_x posted the JOHN/WETH DexScreener URL"
    summary: "2026-07-13T09:36:56Z: Dexscreener Updated and pool 0xd5b89ccee18c1ed101b793f4dbac34028963bd1c."
    occurred_at: 2026-07-13T09:36:56Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: ct
    title: "X account named a different Little John CA as OG"
    summary: "2026-07-12T21:06:20Z post 2076412869390774342 named 0x1E96…4fC4 as OG Little John, not 0xE170…365a5."
    occurred_at: 2026-07-12T21:06:20Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [relationship, identity.name]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: company
    title: "@little_john_x posted a CoinGecko listing for $JOHN"
    summary: "2026-07-12T06:07:46Z: $JOHN is now listed on @coingecko with coingecko.com/en/coins/little-john."
    occurred_at: 2026-07-12T06:07:46Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [communications.status, identity.domain]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: onchain
    title: "enableTrading() created the Uniswap v2 JOHN/WETH pair"
    summary: "Tx 0x7639…aeb4 at 2026-07-12T03:56:19Z from 0x0B10…d5Fe to the token; pair 0xD5b8…bD1C."
    occurred_at: 2026-07-12T03:56:19Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-19]
  - id: EVT-7
    type: onchain
    title: "Little John / JOHN created on 4663"
    summary: "Tx 0x7119…f422 at 2026-07-12T03:56:18Z created 0xE170…365a5; OwnershipTransferred to 0x0B10…d5Fe."
    occurred_at: 2026-07-12T03:56:18Z
    observed_at: 2026-09-03T04:47:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xE170…365a5 Little John / JOHN", url: "https://robinhoodchain.blockscout.com/address/0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-20, CLM-22], excerpt: "hash 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 name Little John is_contract true is_verified false proxy_type null. token symbol JOHN decimals 9 total_supply 1000000000000000000 holders_count 3656 type ERC-20 circulating_market_cap 17195155.152427457 volume_24h 167501373.93510252. creator_address_hash 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe creation_transaction_hash 0x7119a0f9384e3234aba92b2c5020cf69af28d8ee6b7b716f16130fd62503f422." }
  - { id: R-2, publisher: Blockscout, title: "Token counters 0xE170…365a5", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5/counters", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "token_holders_count 3656 transfers_count 35151" }
  - { id: R-3, publisher: Blockscout, title: "Create tx 0x7119a0f9…f422", url: "https://robinhoodchain.blockscout.com/tx/0x7119a0f9384e3234aba92b2c5020cf69af28d8ee6b7b716f16130fd62503f422", published_at: 2026-07-12T03:56:18Z, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, EVT-7], excerpt: "timestamp 2026-07-12T03:56:18.000000Z status ok result success block_number 7498622 from 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe (proxy_type eip7702 implementations 0x37A593d139ece78064032c19c943FF4f794dd2BA) to null created_contract 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 name Little John is_verified false." }
  - { id: R-4, publisher: Blockscout, title: "Creator 0x0B10…d5Fe EIP-7702", url: "https://robinhoodchain.blockscout.com/address/0x0B10d67A8360bce3815B453e8895366b2FbED5Fe", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-16], excerpt: "hash 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe name null is_contract true is_verified false proxy_type eip7702 implementations 0x37A593d139ece78064032c19c943FF4f794dd2BA creator_address_hash null creation_transaction_hash null." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on JOHN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-14, CLM-16, CLM-17], excerpt: "eth_blockNumber 0x32af80d (53146637). Token code 6843 B prefix 6080604052. name Little John symbol JOHN decimals 9 totalSupply 1e18. owner() and taxWallet() 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. factory() reverts. maxTxAmount() 1e18. Owner code 23 B EIP-7702 ef010037a593d139ece78064032c19c943ff4f794dd2ba." }
  - { id: R-6, publisher: Blockscout, title: "enableTrading tx 0x7639a21a…aeb4", url: "https://robinhoodchain.blockscout.com/tx/0x7639a21a9807134a8b27fd939cae698637ecc6ba8f1302df1d46a2395444aeb4", published_at: 2026-07-12T03:56:19Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-15, EVT-6], excerpt: "timestamp 2026-07-12T03:56:19.000000Z status ok block_number 7498624 method 0x8a8c523c from 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe to Little John 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5. Pair address created 0xD5b89CceE18C1eD101B793f4DBac34028963bD1C name UniswapV2Pair is_verified true creator UniswapV2Factory 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "pair token0/token1/getReserves/factory", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-10, CLM-15, CLM-21], excerpt: "block 53148774. Pool code 11293 B. token0 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 token1 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 factory 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f. getReserves reserve0 23629422144078077 wei WETH reserve1 89647900000046 JOHN raw. name Uniswap V2 symbol UNI-V2 totalSupply 1000085478857322169. Factory code 13859 B." }
  - { id: R-8, publisher: GeckoTerminal, title: "JOHN/WETH Uniswap v2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xd5b89ccee18c1ed101b793f4dbac34028963bd1c", published_at: null, accessed_at: 2026-09-03T04:48:20Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-10, CLM-15, EVT-1], excerpt: "HTTP 200. name JOHN / WETH pool_created_at 2026-07-12T03:56:19Z fdv_usd 521150.939885065 market_cap_usd 550660.9143 volume_usd.h24 0.0 reserve_in_usd 114.5584500754 transactions.h24 buys 0 sells 0. dex uniswap-v2-robinhood quote robinhood_0x0bd7d308f8e1639fab988df18a8011f41eacad73. quote_token_price_usd 2504.42." }
  - { id: R-9, publisher: GeckoTerminal, title: "Little John token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5", published_at: null, accessed_at: 2026-09-03T04:47:40Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "HTTP 200. name Little John symbol JOHN decimals 9 image_url coin-images.coingecko.com/coins/images/102174507 coingecko_coin_id little-john total_supply 1000000000000000000.0 normalized_total_supply 1000000000.0 price_usd 0.0005506609143 fdv_usd 521150.939885065 market_cap_usd 638284.63906538 volume_usd.h24 0.0 total_reserve_in_usd 398.198684. top_pools robinhood_0xd5b89ccee18c1ed101b793f4dbac34028963bd1c." }
  - { id: R-10, publisher: DexScreener, title: "latest/dex/tokens JOHN and search", url: "https://api.dexscreener.com/latest/dex/tokens/0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5", published_at: null, accessed_at: 2026-09-03T04:47:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-11, EVT-2], excerpt: "latest/dex/tokens pairs null. token-pairs/v1/robinhood HTTP 200 []. Search q=JOHN robinhood hits include John Chad Apple 0x5494…1e18/AAPL, John Dog CAs 0xb248…7E5e and 0x6Bd7…C329, Little John 0x324f…4b63 and 0x8b49…846F. This CA 0xE170…365a5 was not in the first page." }
  - { id: R-11, publisher: CoinGecko, title: "coins/little-john", url: "https://api.coingecko.com/api/v3/coins/little-john", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-19, CLM-20, CLM-23], excerpt: "id little-john symbol john name Little John asset_platform_id robinhood platforms.robinhood 0xe170dc96ca10103e0d4c5d9293c5a3a72ee365a5. links.homepage https://www.littlejohnhood.fun twitter_screen_name little_john_x repos.github []. last_updated 2026-07-13T02:32:40.000Z current_price.usd 0.01719516 market_cap.usd 17195155 fully_diluted_valuation.usd 17195155 total_volume.usd 167501374." }
  - { id: R-12, publisher: Little John, title: "littlejohnhood.fun", url: "https://www.littlejohnhood.fun", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-8, CLM-14, CLM-19, CLM-22, CLM-23], excerpt: "HTML lists ticker $JOHN, chain Robinhood, Uniswap swap outputCurrency=0xe170dc96ca10103e0d4c5d9293c5a3a72ee365a5, X https://x.com/little_john_x, DexScreener /robinhood/0xe170dc96…. Copy: Total Supply 1,000,000,000 $JOHN; Buy / Sell Tax 0% / 0%; Liquidity Burned. No telegram or github URL this pass." }
  - { id: R-13, publisher: "@little_john_x", title: "X profile Little John", url: "https://x.com/little_john_x", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8], excerpt: "ID 2076152448671211520 Name Little John handle @little_john_x Followers 40. Bio: $JOHN is Little John—the fearless right-hand man of Robin Hood, carrying the legacy of the Merry Men into the Robinhood Chain. Bio has no contract address." }
  - { id: R-14, publisher: "@little_john_x", title: "Dexscreener Updated", url: "https://x.com/little_john_x/status/2076601765542412754", published_at: 2026-07-13T09:36:56Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, EVT-3], excerpt: "Dexscreener Updated! https://dexscreener.com/robinhood/0xd5b89ccee18c1ed101b793f4dbac34028963bd1c" }
  - { id: R-15, publisher: "@MakeEthAliving", title: "Named a different Little John CA as OG", url: "https://x.com/MakeEthAliving/status/2076412869390774342", published_at: 2026-07-12T21:06:20Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-9, EVT-4], excerpt: "Post said 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 is not OG Little John and named 0x1E963A1539681d0B877570F8bdC000cbE8404fC4 as OG. Do not buy this one / Buy the OG Little John." }
  - { id: R-16, publisher: Blockscout, title: "UniswapV2Factory 0x8bcE…937f", url: "https://robinhoodchain.blockscout.com/address/0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f name UniswapV2Factory is_contract true is_verified true creator_address_hash 0x9701fb0aDe1E269c8f64Ec0C7b3cfADB31A13A52 creation_transaction_hash 0x2fc08b6c72d5f2120cec9f3be8ed0b45c210d51adbc87f33b2135886681edaf7." }
  - { id: R-17, publisher: Blockscout, title: "WETH 0x0Bd7…AD73", url: "https://robinhoodchain.blockscout.com/address/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "token address_hash 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 name WETH symbol WETH decimals 18 holders_count 526272." }
  - { id: R-18, publisher: Blockscout, title: "Create tx logs OwnershipTransferred and mint", url: "https://robinhoodchain.blockscout.com/tx/0x7119a0f9384e3234aba92b2c5020cf69af28d8ee6b7b716f16130fd62503f422", published_at: 2026-07-12T03:56:18Z, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, EVT-7], excerpt: "OwnershipTransferred previousOwner 0x0000…0000 newOwner 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. Transfer from 0x0000…0000 to 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 value 1000000000000000000." }
  - { id: R-19, publisher: 4byte, title: "0x8a8c523c enableTrading()", url: "https://www.4byte.directory/api/v1/signatures/?hex_signature=0x8a8c523c", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-1, CLM-7, EVT-6], excerpt: "count 1 text_signature enableTrading() hex_signature 0x8a8c523c. Matches keccak of enableTrading() on RPC. Blockscout method on tx 0x7639…aeb4 is 0x8a8c523c." }
  - { id: R-20, publisher: Blockscout, title: "Other Little John 0x1E96…4fC4", url: "https://robinhoodchain.blockscout.com/address/0x1E963A1539681d0B877570F8bdC000cbE8404fC4", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x1E963A1539681d0B877570F8bdC000cbE8404fC4 name LaunchToken is_verified true creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. token name Little John symbol JOHN decimals 18 total_supply 1e27 holders_count 58. Distinct CA from 0xE170…365a5." }
  - { id: R-21, publisher: Blockscout, title: "UNI-V2 LP holders 0xD5b8…bD1C", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xD5b89CceE18C1eD101B793f4DBac34028963bD1C/holders", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "3 holders. 0x000000000000000000000000000000000000dEaD value 999999999999999000. 0xb8aD1b950a24C6A26FdFaD56FF2323847713c6AF 78719681916225. 0xc797EABdb6F2c3aa0b3349fAAb46F724B2E5692d 6759175405944. Pool token total_supply 1000085478857322169." }
  - { id: R-22, publisher: "@little_john_x", title: "$JOHN listed on CoinGecko", url: "https://x.com/little_john_x/status/2076186738167558472", published_at: 2026-07-12T06:07:46Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "$JOHN is now listed on @coingecko! https://www.coingecko.com/en/coins/little-john" }

gaps:
  - { priority: P0, question: "Does unverified source still let owner() change tax, maxTx, or the pair after enableTrading?", checked: "owner() still 0x0B10…d5Fe; buyTax/sellTax/taxFee revert; token is_verified false; no verified source this pass, 2026-09-03", next: "read bytecode or a later verified source for setters; re-call owner() after any new tx from 0x0B10" }
  - { priority: P0, question: "Will CoinGecko / Blockscout tape refresh off the July 13 last_updated, or stay at $17.2M / $167.5M vs live $0 volume?", checked: "CoinGecko last_updated 2026-07-13T02:32:40Z; Gecko pool volume 0 reserve 114.56; DexScreener tokens API empty, 2026-09-03", next: "re-GET coins/little-john and the Gecko pool; if last_updated moves, restated metrics" }
  - { priority: P1, question: "Does @little_john_x bio later embed 0xE170…365a5, or only the pool URL?", checked: "Bio has no CA; post 2076601765542412754 is the pool DexScreener URL; site Uniswap URL has the CA, 2026-09-03", next: "re-read the profile if a CA is added" }
  - { priority: P1, question: "Which of the other Little John CAs (0x1E96…, 0x324f…, 0x8b49…) still has a live book?", checked: "0x1E96…4fC4 Blockscout holders_count 58 LaunchToken; DexScreener search showed 0x324f… and 0x8b49… with WETH books; not reproduced on RPC this pass", next: "RPC each CA if a later assignment asks to merge or split names" }
  - { priority: P2, question: "Is there an audit or verified source for 0xE170…365a5?", checked: "Blockscout is_verified false; site/CoinGecko/X have no audit URL, 2026-09-03", next: "re-read the explorer contract tab if a verify job lands" }
---

# JOHN — research packet

## What it is

A one-billion-supply ERC-20 named Little John (JOHN) on Robinhood Chain. The deployer called enableTrading one block after create, which spun a Uniswap v2 JOHN/WETH pair. Traders buy and sell JOHN against WETH on that book. littlejohnhood.fun publishes the CA and links @little_john_x.

Themes: memecoin

## Why it matters

CoinGecko listed this CA as little-john with a July 13 tape that still prints a $17.2M cap. The live Uniswap v2 book Gecko sees today has $0 of 24h volume and $114.56 of reserve. Several other 4663 tokens share the Little John / JOHN ticker, including packed johndog (JOHNDOG / SGOV), so the CA is the identity.

## What could go wrong

Token source is unverified and owner() is still the EIP-7702 deployer. CoinGecko/Blockscout market figures are last_updated 2026-07-13 and do not match the live pool. Other JOHN tickers on DexScreener are easy to confuse with this CA.

## Product and mechanics

Direct CREATE at 2026-07-12T03:56:18Z minted 1e18 raw units (9 decimals, 1e9 JOHN) to the token. One block later enableTrading() from the same 0x0B10…d5Fe account created Uniswap v2 pair 0xD5b8…bD1C quoted against WETH. factory() on the token reverts; the pair's factory() is UniswapV2Factory 0x8bcE…937f. [verified R-3 R-5 R-6 R-7 R-19]

Site copy says 0% tax and LP burned. UNI-V2 LP 999999999999999000 of 1000085478857322169 sits at 0xdead. buyTax()/sellTax()/taxFee() revert, so those getters do not reproduce the 0% figure. [verified R-12 R-21] [claim R-12]

## Control and security

owner() and taxWallet() return 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. That account has 23-byte EIP-7702 code pointing at 0x37A5…d2BA. OwnershipTransferred on create set this owner. Token is_verified false. No audit URL this pass. [verified R-4 R-5 R-18] [unknown]

## Team and provenance

littlejohnhood.fun embeds 0xe170…365a5 in Uniswap URLs and links @little_john_x. CoinGecko maps homepage and twitter_screen_name to this CA. Handle bio has no CA; the back-link is the 13 Jul DexScreener pool post. [verified R-12 R-13 R-14]

@MakeEthAliving on 12 Jul named LaunchToken 0x1E96…4fC4 as OG Little John and told readers not to buy 0xE170…365a5. That other CA has 58 holders. [claim R-15 R-20]

## Economics and activity

Live Gecko JOHN/WETH pool: volume_usd.h24 0, reserve_in_usd 114.5584500754, fdv_usd 521150.94, market_cap_usd 550660.9143 at 2026-09-03T04:48:20Z. RPC reserves ~0.023629 WETH + ~89647.9 JOHN. [verified R-7 R-8]

CoinGecko little-john last_updated 2026-07-13T02:32:40Z: price 0.01719516, mc/fdv 17195155, volume 167501374. Blockscout circulating_market_cap and volume_24h echo CoinGecko. DexScreener tokens API returned no pairs. Holders 3656, transfers 35151. [claim R-1 R-10 R-11]

## Material risks

- Token source unverified; owner() still the EIP-7702 deployer. [verified R-1 R-5]
- CoinGecko/Blockscout tape is last_updated 2026-07-13 versus live Gecko pool volume 0 / reserve $114.56. [verified R-8 R-11]
- ca-collision with other Little John / JOHN CAs and with packed johndog (JOHNDOG / SGOV). [verified R-10 R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/creator/create tx/pair/factory/WETH/LP holders, RPC name/symbol/owner/reserves, Gecko token+pool (first GET 200), DexScreener tokens+search, CoinGecko, littlejohnhood.fun, @little_john_x posts, 4byte enableTrading, and the other Little John CA were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 114.5584500754 is the Gecko JOHN/WETH pool reserve, not CoinGecko 17195155. Volume 0 is that pool's h24, not CoinGecko 167501374. Holders 3656 is Blockscout holders_count. [verified R-1 R-8]
- Adversarial: the strongest contrary reading is that 0x1E96…4fC4 is the same project or that CoinGecko's $17.2M tape is current. Blockscout shows a different LaunchToken CA with 58 holders; CoinGecko last_updated is 2026-07-13; live pool volume is 0. [inference R-8 R-11 R-20]

## Operations log

- Base: assignment work_id WORK-20260903-grok-heavy-icarus-research, base_sha 334ca0619aa62e922da83f46de021f06d12348cf, owned_slugs [john]. Census 49 slugs have no john / JOHN / Little John / 0xE170…365a5. GET packet path 404 before write.
- Explorer: Blockscout api/v2 token, address, counters, holders, create tx 0x7119…f422, logs, enableTrading 0x7639…aeb4, pair, factory, WETH, other Little John 0x1E96…4fC4. Chrome UA.
- RPC: eth_getCode / eth_call name, symbol, decimals, totalSupply, owner, taxWallet, factory, maxTxAmount, pair token0/token1/getReserves/factory at blocks 53146637–53148774.
- Aggregators: DexScreener latest/dex/tokens (pairs null), token-pairs/v1/robinhood ([]), search JOHN / Little John. Gecko token GET 200 then pool GET 200; token/pools later 429. CoinGecko coins/little-john 200, last_updated 2026-07-13.
- Official: GET littlejohnhood.fun HTML CA + @little_john_x. 4byte 0x8a8c523c = enableTrading().
- Social: X Latest for the CA, from:little_john_x, user search little_john_x. Distinct from packed johndog.
- Failed: DexScreener tokens API empty for this CA; Gecko token/pools 429 after the first 200s; buyTax/sellTax/taxFee/uniswapV2Pair revert; token source unverified.
- Time: collection 2026-09-03T04:47Z–2026-09-03T04:56Z.
