---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: nudes
name: NUDES / Send Nudes
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [nudes]
allowed_paths:
  - research/inbox/packets/nudes/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Send Nudes
  aliases: [NUDES]
  symbols: [NUDES]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener websites empty; @SendNudesRH bio has no URL; createLaunch metadata is an IPFS CID, not a domain"
  official_handle: "@SendNudesRH"
  repository: "NULL — no GitHub org or repository URL on the X profile, DexScreener websites, or Blockscout token page this pass"
  possible_matches: []

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: observe
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xbe98…7401 reproduced on chain 4663 as Send Nudes / NUDES; createLaunch on o1 historical RWAERC20LaunchpadFactory 0xe64A…F297 seeded Uniswap v4 NUDES/SNAP 0x3839…d552. Distinct from SENDNUDES 0xaa23…1e18. Token source is_verified false; handle is one-sided bio plus DexScreener socials. [R-1] [R-2] [R-4] [R-6] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-7, CLM-16, CLM-17], note: "" }

links:
  - { kind: x, url: "https://x.com/SendNudesRH", authenticity: confirmed }
  - { kind: other, url: "https://www.geckoterminal.com/robinhood/pools/0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552", authenticity: unconfirmed }
  - { kind: other, url: "https://dexscreener.com/robinhood/0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552", authenticity: unconfirmed }

deployments:
  - label: NUDES token (Send Nudes)
    role: token
    address:
      value: "0xbe98b75361935b18d688409424a869a4C3dC7401"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-2, R-4]
  - label: o1 historical RWAERC20LaunchpadFactory (createLaunch)
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: Historical LaunchHook (launch mint recipient)
    role: other
    address:
      value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-16]
  - label: Snap Inc. Robinhood Token (quote)
    role: token
    address:
      value: "0xF6589F11Bc40b669e584073F428B05562F568733"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-9]

metrics:
  - { kind: tvl, value: 464998.79, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3839…d552 NUDES/snap reserve_in_usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 427508.50, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xbe98…7401 pair 0x3839…d552 NUDES/SNAP Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 6336142.84, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3839…d552 NUDES/snap volume_usd.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 6473717.36, currency: USD, as_of: 2026-09-03T03:30:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xbe98…7401 pair 0x3839…d552 NUDES/SNAP volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 15127315.96, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbe98…7401 volume_usd.h24 (all listed pools, not the SNAP book alone)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 10805902, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xbe98…7401 pair 0x3839…d552 marketCap", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 5750, currency: null, as_of: 2026-09-03T03:30:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0xbe98…7401 token.holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a43ae (53101486). eth_getCode 0xbe98…7401 4657 bytes, prefix 0x60806040, not EIP-1167. name() Send Nudes; symbol() NUDES; decimals 18; totalSupply 1e27. owner() empty. EIP-1967 implementation and admin slots zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2], result: "Blockscout api/v2/addresses/0xbe98…7401: is_contract true, is_verified false, name Send Nudes, proxy_type null, creator_address_hash null, creation_transaction_hash null. token symbol NUDES decimals 18 total_supply 1e27 holders_count 5750 type ERC-20." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-4, R-5], result: "Tx 0x77bb0366… block 51974190 2026-09-01T19:37:25Z method createLaunch to 0xe64A…F297 named RWAERC20LaunchpadFactory is_verified true. decoded name/symbol Send Nudes / NUDES, quote 0xF658…8733. Launched token 0xbe98…7401 poolId 0x3839…d552 creator 0x0736…1021. Mint 1e27 to LaunchHook 0x778b…EaCC; Seeded 999999999999999999999999839 to PoolManager 0x8366…0951. eth_getLogs Launched topic1 on current factory 0xcE9C…5B0d returned 0 logs." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-6], result: "DexScreener latest/dex/tokens/0xbe98…7401: NUDES/SNAP Uniswap v4 pair 0x3839…d552 quote 0xF658…8733 liquidity.usd 427508.50 volume.h24 6473717.36 marketCap 10805902 pairCreatedAt 1788291445000 (2026-09-01T19:37:25Z); info.socials https://x.com/SendNudesRH; websites []. Search SENDNUDES: 0xaa23…1e18 / SNAP liq 20976.94." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-7, R-8], result: "Gecko pool 0x3839…d552 name NUDES / snap reserve_in_usd 464998.7904 volume_usd.h24 6336142.84440734 pool_created_at 2026-09-01T19:37:25Z dex id uniswap-v4-robinhood quote robinhood_0xf658…8733. Token name Send Nudes symbol NUDES volume_usd.h24 15127315.9619884 fdv_usd 10994844.26." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-6, R-10], result: "DexScreener token info.socials lists https://x.com/SendNudesRH and websites []. @SendNudesRH display name Send Nudes; bio $NUDES on RH | CA:0xbe98b75361935b18d688409424a869a4c3dc7401 matching the reproduced token. No official domain on that profile this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Primary book Uniswap v4 NUDES/SNAP pool 0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552; quote Snap Inc. • Robinhood Token 0xF6589F11Bc40b669e584073F428B05562F568733", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.handle, value: "@SendNudesRH", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.name, value: "Send Nudes", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xbe98b75361935b18d688409424a869a4C3dC7401", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "NUDES", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad o1.exchange historical RWAERC20LaunchpadFactory 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 createLaunch tx 0x77bb0366… at 2026-09-01T19:37:25Z. Current production factory 0xcE9C…5B0d had 0 Launched logs for this token.", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-4, R-5, R-11], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset SNAP (Snap Inc. • Robinhood Token 0xF6589F11Bc40b669e584073F428B05562F568733, BeaconProxy, verified)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4; DexScreener labels [v4] dexId uniswap; Gecko dex id uniswap-v4-robinhood", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-4, R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko NUDES/snap reserve_in_usd 464998.79 volume_usd.h24 6336142.84", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener NUDES/SNAP Uniswap v4 liquidity.usd 427508.50 volume.h24 6473717.36 marketCap 10805902", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Blockscout holders_count 5750", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Gecko token volume_usd.h24 15127315.96 fdv_usd 10994844.26 (all listed pools)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "Launch mint 1e27 NUDES to LaunchHook 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC; Seeded 999999999999999999999999839 into Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-4, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: other, value: "Distinct from SENDNUDES 0xaa231cB785999ecAf4EF94F4131116eA50C01e18 (EIP-1167, holders_count 3, SENDNUDES/SNAP Uniswap v4 liq 20976.94). Different symbol, CA, and holder count.", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-14, R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: other, value: "Same-name NUDES 0xDda227Aeddfd9613faa6C3A94f474D57BE511E18 is an EIP-1167 clone, holders_count 6, NUDES/SNAP liq 6575.67. Not this token.", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on the X profile, DexScreener token page, or Blockscout token page this pass", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: control.owner, value: "owner() on the token returned empty this pass; EIP-1967 slots zero; token is not a proxy", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-20, field: "account.@SendNudesRH.role", value: project, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@SendNudesRH.slug", value: nudes, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-23, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: identity.domain, value: "NULL — DexScreener websites empty; @SendNudesRH bio has no URL", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@SendNudesRH.note", value: "Bio publishes CA 0xbe98b75361935b18d688409424a869a4c3dc7401. DexScreener socials list the handle. No official domain this pass.", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Token source is_verified false on Blockscout; creator_address_hash null on the address page even though createLaunch logs identify the factory", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "Secondary books on DexScreener this pass include NUDES/USDG Uniswap v4 and NUDES/WETH Uniswap v3; SNAP remains the launch quote", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-6], reproduction_ids: [REP-4], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "o1 historical factory launched NUDES against SNAP"
    summary: "createLaunch on 0xe64A…F297 minted Send Nudes 0xbe98…7401 and seeded Uniswap v4 NUDES/SNAP 0x3839…d552."
    occurred_at: 2026-09-01T19:37:25Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, product.mechanism, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-2
    type: company
    title: "@SendNudesRH posted Send nudes @o1_exchange"
    summary: "Official handle posted Send nudes @o1_exchange, naming the pad on the account that publishes the CA."
    occurred_at: 2026-09-02T04:37:04Z
    observed_at: 2026-09-03T03:33:00Z
    affected_fields: [relationship, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: ct
    title: "@xueqiu88 posted Send Nudes CA as an o1 launch"
    summary: "@xueqiu88 posted Rabbit and Send Nudes 0xbe98…7401 as o1 launches in the prior 24 hours."
    occurred_at: 2026-09-02T04:45:58Z
    observed_at: 2026-09-03T03:33:00Z
    affected_fields: [deployment.address, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: company
    title: "@SendNudesRH posted Send $NUDES to squeeze $SNAP"
    summary: "Official handle posted Send $NUDES to squeeze $SNAP, restating the SNAP quote."
    occurred_at: 2026-09-02T14:21:28Z
    observed_at: 2026-09-03T03:33:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: onchain
    title: "SENDNUDES SNAP pair is a different token"
    summary: "SENDNUDES 0xaa23…1e18 / SNAP Uniswap v4 pair 0x4cb9…aa0f showed liq $20,976.94; holders_count 3. Not 0xbe98…7401."
    occurred_at: 2026-09-02T18:01:38Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [other]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-15]

receipts:
  - { id: R-1, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / supply at block 53101486", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-6, CLM-19, CLM-22], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a43ae (53101486). eth_getCode 0xbe98…7401 4657 bytes, prefix 0x60806040, not EIP-1167. name() Send Nudes. symbol() NUDES. decimals 18. totalSupply 1000000000000000000000000000. owner() empty. EIP-1967 implementation and admin slots zero." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xbe98…7401 Send Nudes", url: "https://robinhoodchain.blockscout.com/address/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-19, CLM-23, CLM-26], excerpt: "api/v2/addresses: hash 0xbe98b75361935b18d688409424a869a4C3dC7401 name Send Nudes is_contract true is_verified false proxy_type null creator_address_hash null creation_transaction_hash null. token name Send Nudes symbol NUDES decimals 18 total_supply 1000000000000000000000000000 holders_count 5750 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "Token 0xbe98…7401", url: "https://robinhoodchain.blockscout.com/token/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-13], excerpt: "api/v2/tokens: name Send Nudes symbol NUDES decimals 18 total_supply 1000000000000000000000000000 holders_count 5750 type ERC-20." }
  - { id: R-4, publisher: Blockscout, title: "Tx 0x77bb0366… createLaunch Send Nudes", url: "https://robinhoodchain.blockscout.com/tx/0x77bb03663ed223d587ca48a3513d7ade7dd0b3c68e16dc1145f6ba91fe22b1e4", published_at: 2026-09-01T19:37:25Z, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-6, CLM-7, CLM-8, CLM-15, CLM-26, EVT-1], excerpt: "timestamp 2026-09-01T19:37:25Z block 51974190 status ok method createLaunch from 0x073614a1512EA3e5266D504758D1674311eE1021 (eip7702) to 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 RWAERC20LaunchpadFactory. decoded name Send Nudes symbol NUDES quote 0xF6589F11Bc40b669e584073F428B05562F568733. Launched token 0xbe98…7401 poolId 0x3839…d552. Mint 1e27 to LaunchHook 0x778b…EaCC." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xe64A…F297 RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, EVT-1], excerpt: "hash 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_contract true is_verified true file_path src/RWAERC20LaunchpadFactory.sol. createLaunch tx 0x77bb0366… calls this factory. RPC eth_getLogs Launched topic1=0xbe98…7401 returned this address, not current factory 0xcE9C…5B0d." }
  - { id: R-6, publisher: DexScreener, title: "NUDES token pairs on robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-2, CLM-6, CLM-9, CLM-12, CLM-16, CLM-22, CLM-24, CLM-25, CLM-27], excerpt: "NUDES/SNAP pair 0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552 dexId uniswap labels [v4] quote SNAP 0xF6589F11Bc40b669e584073F428B05562F568733 liquidity.usd 427508.50 volume.h24 6473717.36 marketCap 10805902 pairCreatedAt 1788291445000. info.socials https://x.com/SendNudesRH websites []. Search SENDNUDES 0xaa23…1e18 / SNAP liq 20976.94." }
  - { id: R-7, publisher: GeckoTerminal, title: "NUDES/snap pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-9, CLM-11], excerpt: "name NUDES / snap address 0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552 reserve_in_usd 464998.7904 volume_usd.h24 6336142.84440734 pool_created_at 2026-09-01T19:37:25Z fdv_usd 10992695.31. relationships.dex.data.id uniswap-v4-robinhood. quote robinhood_0xf6589f11bc40b669e584073f428b05562f568733." }
  - { id: R-8, publisher: GeckoTerminal, title: "Send Nudes token API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbe98b75361935b18d688409424a869a4c3dc7401", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "name Send Nudes symbol NUDES address 0xbe98b75361935b18d688409424a869a4c3dc7401 decimals 18 total_supply 1000000000000000000000000000.0 price_usd 0.01099484426 fdv_usd 10994844.2596474 volume_usd.h24 15127315.9619884. top_pools include robinhood_0x3839…d552." }
  - { id: R-9, publisher: Blockscout, title: "SNAP 0xF658…8733 Snap Inc. Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xF6589F11Bc40b669e584073F428B05562F568733", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-10], excerpt: "name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name Snap Inc. • Robinhood Token symbol SNAP address 0xF6589F11Bc40b669e584073F428B05562F568733 decimals 18 holders_count 384. createLaunch quote and DexScreener NUDES/SNAP quote." }
  - { id: R-10, publisher: "@SendNudesRH", title: "Send Nudes profile", url: "https://x.com/SendNudesRH", published_at: "2026-09-01T15:29:41Z", accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-20, CLM-21, CLM-24, CLM-25], excerpt: "Display name Send Nudes. Handle @SendNudesRH. Bio: $NUDES on RH | CA:0xbe98b75361935b18d688409424a869a4c3dc7401. Joined 2026-09-01. No website field on the profile this pass." }
  - { id: R-11, publisher: "@SendNudesRH", title: "Send nudes @o1_exchange", url: "https://x.com/SendNudesRH/status/2095008079712510002", published_at: 2026-09-02T04:37:04Z, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-7, EVT-2], excerpt: "Send nudes @o1_exchange" }
  - { id: R-12, publisher: "@SendNudesRH", title: "Send $NUDES to squeeze $SNAP", url: "https://x.com/SendNudesRH/status/2095155151317209301", published_at: 2026-09-02T14:21:28Z, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Send $NUDES to squeeze $SNAP" }
  - { id: R-13, publisher: "@xueqiu88", title: "Rabbit and Send Nudes CAs on o1", url: "https://x.com/xueqiu88/status/2095010322637877503", published_at: 2026-09-02T04:45:58Z, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "@o1_exchange 是目前唯一覆盖 Robinhood 全部 196 只股票资产的发射平台。过去 24 小时，多个逼空概念也在 O1 集中涌现： Rabbit CA：0xcd1cca2b3d0a11b295c42fe765ea8f895c2d0901 Send Nudes CA：0xbe98b75361935b18d688409424a869a4c3dc7401" }
  - { id: R-14, publisher: DexScreener, title: "SENDNUDES token search", url: "https://api.dexscreener.com/latest/dex/search?q=SENDNUDES", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16, EVT-5], excerpt: "robinhood uniswap v4 pair 0x4cb9d9c30e07803a3af3bc33ddc777a01c15e26ef5b7d8c4d3e7ce9224c3aa0f base SENDNUDES 0xaa231cB785999ecAf4EF94F4131116eA50C01e18 quote SNAP 0xF6589F11Bc40b669e584073F428B05562F568733 liquidity.usd 20976.94 volume.h24 4407.48 marketCap 20977 pairCreatedAt 1788372098000 (2026-09-02T18:01:38Z)." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xaa23…1e18 SENDNUDES", url: "https://robinhoodchain.blockscout.com/address/0xaa231cB785999ecAf4EF94F4131116eA50C01e18", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, EVT-5], excerpt: "hash 0xaa231cB785999ecAf4EF94F4131116eA50C01e18 name SENDNUDES is_contract true is_verified true proxy_type eip1167. token name SENDNUDES symbol SENDNUDES decimals 18 total_supply 1000000000000000000000000000 holders_count 3. Distinct CA from 0xbe98…7401." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x778b…EaCC LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC name LaunchHook is_contract true is_verified true file_path src/LaunchHook.sol compiler v0.8.26+commit.8a97fa7a. createLaunch minted 1e27 NUDES to this hook then Seeded the pool." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xDda2…1E18 same-name NUDES", url: "https://robinhoodchain.blockscout.com/address/0xDda227Aeddfd9613faa6C3A94f474D57BE511E18", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "hash 0xDda227Aeddfd9613faa6C3A94f474D57BE511E18 name Send Nudes is_contract true is_verified true proxy_type eip1167. token symbol NUDES holders_count 6. DexScreener NUDES/SNAP liquidity.usd 6575.67 volume.h24 252.92. Distinct CA from 0xbe98…7401." }

gaps:
  - { priority: P0, question: "Will Blockscout backfill creator_address_hash / creation_transaction_hash for 0xbe98…7401 so the address page matches the Launched log?", checked: "address page creator fields null; tx 0x77bb0366… Launched the token, 2026-09-03", next: "re-read the address API after indexer catch-up" }
  - { priority: P1, question: "Is the NUDES bytecode verified anywhere, and does it match o1 LaunchToken source?", checked: "is_verified false; 4657 bytes; not EIP-1167; no GitHub this pass", next: "compare bytecode hash to launchTokenBytecodeHash() on 0xe64A…F297" }
  - { priority: P1, question: "Who controls EIP-7702 caller 0x0736…1021, and can that key still change creator-fee routing on the historical factory?", checked: "Blockscout proxy_type eip7702, 23-byte code, name null; CreatorRegistered token->0x0736…1021, 2026-09-03", next: "eth_call creator lookup on AnnouncementRegistry 0x6a95…E29F and read historical factory creator-admin views" }
  - { priority: P1, question: "Is there an official site beyond the IPFS metadata CID in createLaunch?", checked: "DexScreener websites []; X bio has CA only; metadata ipfs://bafkreifkwmjvrnq32kzdboqsg7klveogkbr3i76hruizcojqrxuun2v32i not fetched", next: "resolve the CID and search for a domain" }
  - { priority: P2, question: "Is there an audit whose scope includes this LaunchHook 0x778b…EaCC / historical factory bytecode?", checked: "X profile, DexScreener, Blockscout token page; o1 docs not re-opened this pass", next: "match XORS reports named in the o1-exchange packet to 0xe64A…F297" }
---

# NUDES / Send Nudes — research packet

## What it is

Send Nudes is a SNAP-quoted memecoin on Robinhood Chain. A user swaps NUDES for Snap Inc. Robinhood Token in a Uniswap v4 pool created in one o1.exchange factory transaction. @SendNudesRH publishes the contract. The token is not SENDNUDES at 0xaa23…1e18.

Themes: memecoin, stock-paired:SNAP

## Why it matters

The name is not in the 49-row census. It is a live SNAP-quoted Uniswap v4 book on chain 4663, launched through o1's historical RWA factory rather than the current production factory. SENDNUDES 0xaa23…1e18 and a six-holder NUDES EIP-1167 at 0xDda2…1E18 share the SNAP quote and are not this token.

## What could go wrong

Token source is unverified and the Blockscout address page still has a null creator, so a reader who only opens that page cannot see the factory. Gecko NUDES/snap reserve and DexScreener NUDES/SNAP liquidity are different prints for the same pool id. Secondary USDG and WETH books exist; a card that uses all-pools volume would overstate the SNAP book.

## Product and mechanics

$NUDES is an ERC-20 at `0xbe98b75361935b18d688409424a869a4C3dC7401`. The launch book is Uniswap v4 NUDES/SNAP (`0x3839…d552`) with quote `0xF6589F11Bc40b669e584073F428B05562F568733`. [verified R-1 R-4 R-6]

The token was created on 2026-09-01T19:37:25Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Send Nudes / NUDES and quoted SNAP. `Launched` records pool id `0x3839…d552`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token. [verified R-4 R-5]

DexScreener also lists NUDES/USDG Uniswap v4 books and a NUDES/WETH Uniswap v3 book. SNAP remains the launch quote. [verified R-6]

SENDNUDES `0xaa23…1e18` is an EIP-1167 token with holders_count 3 and a SNAP book of about $21k. A second Send Nudes at `0xDda2…1E18` is an EIP-1167 with holders_count 6. They are not this CA. [verified R-14 R-15] [claim R-17]

## Control and security

`owner()` on the token returned empty. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. [verified R-1 R-2 R-5 R-16]

The createLaunch sender is `0x0736…1021`, tagged eip7702 with 23 bytes of code. CreatorRegistered points at that address. Who can move creator-fee rights was not read on the historical factory this pass. [claim R-4]

No audit report URL was located on the X profile or the token explorer page this pass. [unknown]

## Team and provenance

@SendNudesRH display name is Send Nudes. The bio publishes CA `0xbe98…7401`. DexScreener socials list that handle and no website. The handle posted Send nudes @o1_exchange on 2026-09-02. No official domain or GitHub was located. Named operators were not established beyond the eip7702 caller. [claim R-10 R-11] [verified R-6]

Census has no nudes / send-nudes row. possible_matches is empty because o1-exchange is not a census slug. [claim R-2]

## Economics and activity

Gecko NUDES/snap at 2026-09-03T03:31Z: reserve $464,998.79, 24h volume $6,336,142.84, pool created 2026-09-01T19:37:25Z. [verified R-7]

DexScreener NUDES/SNAP Uniswap v4 at 2026-09-03T03:30Z: liquidity $427,508.50, 24h volume $6,473,717.36, market cap $10,805,902. Those two liquidity figures are not combined. [verified R-6]

Gecko token 24h volume $15,127,315.96 is the all-pools figure, not the SNAP book. Blockscout holders_count 5,750. RPC totalSupply 1e27 (1 billion, 18 decimals). [verified R-2 R-8 R-1]

## Material risks

- Token source is not verified; the address page still shows a null creator. [verified R-2]
- NUDES/SNAP liquidity is $427.5k on DexScreener and $465.0k on Gecko for the same pool id. [verified R-6 R-7]
- All-pools Gecko volume is $15.1M; the SNAP book is about $6.3M. [verified R-7 R-8]
- SENDNUDES and a six-holder NUDES EIP-1167 share the SNAP quote and can be opened by ticker search. [verified R-14] [claim R-17]
- No audit report was located this pass. [unknown]

## Verification passes

- Receipts: RPC, Blockscout address/token/tx/factory/hook/SNAP/SENDNUDES/other NUDES, DexScreener token and SENDNUDES search, Gecko pool and token, @SendNudesRH profile and two posts, and @xueqiu88 were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-4 R-6 R-7]
- Numbers: Gecko reserve and DexScreener liquidity are separate SNAP-book figures, not averaged. $15.1M is Gecko all-pools volume. Holders is Blockscout holders_count. [verified R-2 R-6 R-7 R-8]
- Adversarial: the strongest contrary reading is that SENDNUDES 0xaa23…1e18 or NUDES 0xDda2…1E18 is this name, or that the token came from the current o1 factory 0xcE9C…5B0d. Different CAs, symbols, and holder counts argue against the first; the Launched log is on 0xe64A…F297 and current-factory topic1 search returned 0 logs. [verified R-4 R-14 R-15]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census (49 slugs; nudes absent), pending packets (no nudes directory), discovery-inventory candidate nudes / send-nudes, and o1-exchange packet (prior harvest: Send Nudes 0xbe98…7401 / SNAP) read before collection.
- RPC `https://rpc.mainnet.chain.robinhood.com` at 2026-09-03T03:29Z, block `0x32a43ae` (53101486): getCode, name, symbol, decimals, totalSupply, owner, EIP-1967 slots. eth_getLogs Launched topic1 on 0xe64A…F297, 0xcE9C…5B0d, and deployer 0xf86d…a5Eb.
- Blockscout API v2 with Chrome UA: token, address, createLaunch tx 0x77bb0366…, historical factory, LaunchHook, SNAP, SENDNUDES, 0xDda2…1E18.
- DexScreener latest/dex/tokens for 0xbe98…7401, search SENDNUDES and NUDES SNAP. Gecko token, pool 0x3839…d552, and NUDES SNAP search.
- X: @SendNudesRH profile and posts 2095008079712510002, 2095155151317209301, plus @xueqiu88 2095010322637877503. IPFS metadata CID in createLaunch not fetched. launch.o1.exchange not retried this pass.
- Time: collection 2026-09-03T03:29Z–2026-09-03T03:35Z.
- Allowed path this run: this packet only.
