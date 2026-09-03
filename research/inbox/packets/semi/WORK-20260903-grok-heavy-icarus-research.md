---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: semi
name: SEMI
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [semi]
allowed_paths:
  - research/inbox/packets/semi/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SEMI
  aliases: [SemiVault, semivault.xyz]
  symbols: [SEMI]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.semivault.xyz
  official_handle: "@Semivaultxyz"
  repository: "NULL — GitHub search q=semivault returned 0 repositories; www.semivault.xyz HTML has no GitHub URL this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher / DopplerERC20V1Factory, site artificialinu.com / @ArtificiallyInu"
        - "SEMI is SemiToken 0x5F03…BaC8 paired to MU 0xfF08…4afD via SemiLauncher 0xBae7…6DEB, site semivault.xyz / @Semivaultxyz"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED and DopplerERC20V1Factory 0x1B37…b69a"
        - "SEMI token creator_address_hash is EIP-7702 account 0x0D45…10aC; creation tx is a contract-create, not LongLauncher.create"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory at l4va.org / @L4VAprotocol"
        - "SEMI is a SemiToken ERC-20 in a Uniswap v4 SEMI/MU pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [yield/gamified-mining]
  mechanism_tags: [stock-paired, rwa, amm, vault, fee-routing]
  ecosystem_role: observe
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5F03…BaC8 is verified SemiToken with non-empty code on 4663; minter() is verified SemiMinter 0x033d…7BeC; Uniswap v4 SEMI/MU pool 0xe356…e121 quotes Micron Technology • Robinhood Token 0xfF08…4afD. Site, token constants, and @Semivaultxyz cross-link. Distinct from MOO/MU (DopplerERC20V1Factory 0x1B37…b69a / @memorycowmoo). DexScreener and Gecko disagree on SEMI/MU liquidity. [R-1] [R-2] [R-5] [R-7] [R-8] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11], note: "" }

links:
  - { kind: site, url: "https://www.semivault.xyz", authenticity: confirmed }
  - { kind: app, url: "https://www.semivault.xyz/v2", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Semivaultxyz", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/semivault", authenticity: confirmed }

deployments:
  - label: SEMI token (SemiToken)
    role: token
    address:
      value: "0x5F038759F6DE38fD3A85C0440daff1240238BaC8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:25:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-5]
  - label: SemiMinter (token minter())
    role: other
    address:
      value: "0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: "SemiLauncher (site: owns the locked LP)"
    role: factory
    address:
      value: "0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T03:33:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-15]
  - label: "SemiHook (site: harvest lives here)"
    role: other
    address:
      value: "0x7b89c56Da91425F35D07290eCFEcF4E58dc13088"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T03:33:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-16]
  - label: MU (Micron Technology • Robinhood Token)
    role: token
    address:
      value: "0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:25:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8, R-17]

metrics:
  - { kind: tvl, value: 1111103.62, currency: USD, as_of: 2026-09-03T03:20:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5F03…BaC8 pair 0xe356…e121 SEMI/MU Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 5617276.28, currency: USD, as_of: 2026-09-03T03:32:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe356…e121 reserve_in_usd (SEMI/MU pool, not all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 2404077.99, currency: USD, as_of: 2026-09-03T03:20:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5F03…BaC8 pair 0xe356…e121 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2820873.18, currency: USD, as_of: 2026-09-03T03:32:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe356…e121 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 3621189, currency: USD, as_of: 2026-09-03T03:20:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5F03…BaC8 pair 0xe356…e121 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1232, currency: null, as_of: 2026-09-03T03:25:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5F03…BaC8 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a44f7 (53101815). Token 0x5F03…BaC8 eth_getCode 2731 bytes; MU 0xfF08…4afD 283 bytes. name() semivault.xyz; symbol() SEMI; decimals 18; totalSupply 540605498886635702 ~5.406e7*1e18. minter() 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC; deployer() 0x0D459F23F801C1833B393877D3835f4992D310aC. WEBSITE https://semivault.xyz TELEGRAM https://t.me/semivault X_ACCOUNT https://x.com/semivaultxyz. EIP-1967 implementation and admin slots zero. owner() reverts. minter eth_getCode 1224 bytes." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:25:00Z, receipt_ids: [R-2, R-3, R-4, R-6, R-15, R-16, R-17], result: "Blockscout api/v2: token 0x5F03…BaC8 is_contract true is_verified true name Semivault.xyz / SemiToken file semi/SemiToken.sol Solidity 0.8.26 is_fully_verified true verified_at 2026-08-14T00:33:07Z creator 0x0D45…10aC (EIP-7702) creation tx 0xb79fba5b…353a timestamp 2026-08-13T23:07:15Z block 35772946 to null (contract create). token symbol SEMI holders_count 1232. SemiMinter 0x033d…7BeC is_verified true file semi/SemiMinter.sol. SemiLauncher 0xBae7…6DEB is_verified true. SemiHook 0x7b89…3088 is_verified true. MU 0xfF08…4afD BeaconProxy name Micron Technology • Robinhood Token symbol MU holders_count 30950 implementation Stock." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x5F03…BaC8 top pair SEMI/MU Uniswap v4 0xe356…e121 quote MU 0xfF08…4afD liquidity.usd 1111103.62 volume.h24 2404077.99 fdv/marketCap 3621189 pairCreatedAt 1786662467 (2026-08-13T23:07:47Z) info.websites https://www.semivault.xyz/v2 and https://www.semivault.xyz/ socials x.com/Semivaultxyz t.me/semivault. Gecko pool same id name SEMI / MU dex uniswap-v4-robinhood reserve_in_usd 5617276.2788 volume_usd.h24 2820873.179 fdv_usd 3680581.66 market_cap_usd 3670208.79 pool_created_at 2026-08-13T23:07:47Z. Gecko token volume_usd.h24 2840325.89 market_cap_usd 3669048.83 fdv_usd 34271598.25 price_usd 0.6394." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-5, R-10, R-18], result: "https://semivault.xyz HTTP 200 to https://www.semivault.xyz/. HTML links https://x.com/semivaultxyz, https://t.me/semivault, Blockscout token 0x5f03…bac8, MU 0xfF08…4afD. JS object: semi 0x5f03…bac8 hook 0x7b89…3088 ratchet 0xf088…90f7 staker 0x1a79…927f bond 0xaba2…7736 minter 0x033d…7bec launcher 0xbae7…6deb lens 0xa583…cb97. Token WEBSITE/TELEGRAM/X_ACCOUNT match. @Semivaultxyz 2026-08-14 posted CA 0x5f038759f6de38fd3a85c0440daff1240238bac8 and chainId 4663. Bio t.co/Rh3WajZXrj; Telegram og:title SemiVault." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-19, R-20], result: "MOO 0xD9dB…1e18 name Memory cow Moo symbol MOO is_verified true creator_address_hash DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a. DexScreener MOO/MU pair 0xc3cc…4aa1 quote same MU 0xfF08…4afD socials x.com/memorycowmoo. Other SEMI tickers on 4663: 0xc1a0…1e69 semivault.xyz holders 5; 0xC770…97b5 semivault.xyz holders 4; 0x1EF7…55B7 Semi holders 5." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "SemiToken ERC-20 in one Uniswap v4 SEMI/MU pool 0xe356…e121; quote is Micron Technology • Robinhood Token 0xfF08…4afD. Site: 5% hook fee converts to MU; SemiRatchet mints only when MU backing per token sets a new high; SemiBond takes MU for discounted vesting SEMI; SemiLauncher holds LP with no withdraw.", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.semivault.xyz", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@Semivaultxyz", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-5, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5F038759F6DE38fD3A85C0440daff1240238BaC8", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2, R-5, R-10], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: SEMI, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: identity.name, value: semivault.xyz, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from MOO/MU. MOO 0xD9dB…1e18 Memory cow Moo was created by DopplerERC20V1Factory 0x1B37…b69a (LONG/Airlock) and DexScreener twitter is @memorycowmoo. SEMI is SemiToken 0x5F03…BaC8 created by 0x0D45…10aC / SemiLauncher 0xBae7…6DEB. Same quote MU 0xfF08…4afD; different token, factory, handle, and site.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-7, R-19, R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Pair asset MU (Robinhood Stock Token 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD); liquidity venue Uniswap v4 (DexScreener labels [v4]; Gecko dex uniswap-v4-robinhood) pool 0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-8, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: relationship, value: "Launch path is custom SemiLauncher, not LONG, Pons, PAIR, or NOXA. Token creation tx 0xb79fba5b…353a is a contract-create from EIP-7702 account 0x0D45…10aC at 2026-08-13T23:07:15Z; creator_address_hash is that account, not a pad factory.", class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-2, R-4, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "owner() reverts. deployer() 0x0D459F23F801C1833B393877D3835f4992D310aC. minter() SemiMinter 0x033d…7BeC. Verified SemiToken: setMinter is one-shot then frozen; mint only from minter.", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener SEMI/MU Uniswap v4 liquidity.usd 1111103.62 volume.h24 2404077.99 fdv/marketCap 3621189", class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Gecko SEMI/MU pool reserve_in_usd 5617276.28 volume_usd.h24 2820873.18 fdv_usd 3680581.66 market_cap_usd 3670208.79", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko token fdv_usd 34271598.25 price_usd 0.6394 vs pool fdv_usd 3680581.66 price_usd 0.06867", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: 1232, class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Verified SemiToken constructor mints 10_000_000e18 to deployer. RPC totalSupply ~5.406e7*1e18 this pass (elastic via minter).", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No third-party audit report URL was located on www.semivault.xyz, the X account, Telegram preview, or verified SemiToken/SemiMinter pages this pass. Official FAB post named 54/54 live checks and 60/60 unit tests.", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: taxonomy.secondary-leaf, value: yield/gamified-mining, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@Semivaultxyz.role", value: project, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@Semivaultxyz.slug", value: semi, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: other, value: "ca-collision: other SEMI tickers on 4663 include 0xc1a0…1e69 semivault.xyz (5 holders), 0xC770…97b5 semivault.xyz (4 holders), 0x1EF7…55B7 Semi (5 holders). Official CA is 0x5F03…BaC8.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: identity.repository, value: "NULL — GitHub search q=semivault returned 0 repositories; site HTML has no GitHub URL this pass", class: unknown, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: candidate, value: "semi | SEMI | @Semivaultxyz | https://www.semivault.xyz — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "SEMI/MU liquidity is $1.11M on DexScreener and $5.62M on Gecko pool reserve_in_usd; a card that collapses them would misstate the book"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-14, CLM-15]
    material_effect: "Gecko token fdv_usd 34.27M and price_usd 0.639 disagree with the SEMI/MU pool fdv_usd 3.68M and price_usd 0.06867"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@Semivaultxyz posted three-week stats"
    summary: "Official account: Latest stats just dropped and we can be proud. Accomplished in 3 weeks."
    occurred_at: 2026-09-03T00:06:37Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-2
    type: company
    title: "@Semivaultxyz posted an NFT mint for The Arrival"
    summary: "Official account: NFT mint to commemorate The Arrival; ETH collected auto fired into more SEMI LP."
    occurred_at: 2026-09-02T23:22:35Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: onchain
    title: "Gecko SEMI/MU reserve $5.62M vs DexScreener liq $1.11M"
    summary: "Gecko pool 0xe356…e121 reserve_in_usd 5617276; DexScreener same pair liquidity.usd 1111103."
    occurred_at: 2026-09-03T03:32:00Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-4
    type: company
    title: "@Semivaultxyz posted $MU $1600 and liquidity reprice"
    summary: "Official account quoted a $MU chart post and wrote $MU $1600 coded, our liquidity is going to reprice."
    occurred_at: 2026-09-02T22:35:08Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [communications.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: company
    title: "@Semivaultxyz posted FAB losses market-buy SEMI"
    summary: "Official account: FAB losses route USDG to MU to SEMI through FabSwapV2 and SemiSwap at claim."
    occurred_at: 2026-09-02T21:04:46Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: company
    title: "@Semivaultxyz posted THE FAB is live"
    summary: "Official account: THE FAB live; worst chip liquidated on-chain; 20% of each bust to the locked SEMI floor."
    occurred_at: 2026-08-19T23:18:49Z
    observed_at: 2026-09-03T03:22:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-7
    type: company
    title: "@Semivaultxyz posted the SEMI contract address"
    summary: "Official account posted CA 0x5f038759f6de38fd3a85c0440daff1240238bac8 on Robinhood Chain 4663."
    occurred_at: 2026-08-14T12:08:08Z
    observed_at: 2026-09-03T03:22:00Z
    affected_fields: [deployment.address, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-8
    type: onchain
    title: "SemiToken 0x5F03…BaC8 created on chain 4663"
    summary: "Tx 0xb79fba5b…353a from 0x0D45…10aC created SemiToken at 2026-08-13T23:07:15Z; SEMI/MU pool 32s later."
    occurred_at: 2026-08-13T23:07:15Z
    observed_at: 2026-09-03T03:25:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-4]

receipts:
  - { id: R-1, publisher: SemiVault, title: "www.semivault.xyz home / v2", url: "https://www.semivault.xyz/", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-8, CLM-20, CLM-21, CLM-22, CLM-26], excerpt: "https://semivault.xyz HTTP 200 to https://www.semivault.xyz/. A tech token with a real floor. Tokenized Micron, locked in the pool. Links https://x.com/semivaultxyz and https://t.me/semivault and Blockscout 0x5f038759f6de38fd3a85c0440daff1240238bac8. JS: semi 0x5f03…bac8 mu 0xfF08…4afD hook 0x7b89…3088 ratchet 0xf088…90f7 staker 0x1a79…927f bond 0xaba2…7736 minter 0x033d…7bec launcher 0xbae7…6deb. All 9 contracts verified on Blockscout." }
  - { id: R-2, publisher: Blockscout, title: "SEMI 0x5F038759F6DE38fD3A85C0440daff1240238BaC8", url: "https://robinhoodchain.blockscout.com/address/0x5F038759F6DE38fD3A85C0440daff1240238BaC8", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-11, CLM-16, CLM-19, CLM-26, EVT-8], excerpt: "hash 0x5F038759F6DE38fD3A85C0440daff1240238BaC8 name Semivault.xyz is_contract true is_verified true creator_address_hash 0x0D459F23F801C1833B393877D3835f4992D310aC creation_transaction_hash 0xb79fba5b778bacdd31a50c0b96e5fc8b5d87024ca41cdf62924952f89fed353a. token name Semivault.xyz symbol SEMI decimals 18 holders_count 1232 total_supply 53874000393663813475617646 volume_24h 1903361.12 circulating_market_cap 2715258.48." }
  - { id: R-3, publisher: Blockscout, title: "SemiToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x5F038759F6DE38fD3A85C0440daff1240238BaC8?tab=contract", published_at: 2026-08-14T00:33:07Z, accessed_at: 2026-09-03T03:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-12, CLM-17], excerpt: "name SemiToken compiler v0.8.26+commit.8a97fa7a is_verified true is_fully_verified true file_path semi/SemiToken.sol verified_at 2026-08-14T00:33:07.875671Z. Constants name semivault.xyz symbol SEMI WEBSITE https://semivault.xyz TELEGRAM https://t.me/semivault X_ACCOUNT https://x.com/semivaultxyz. constructor mints 10_000_000e18 to deployer. setMinter one-shot then frozen. mint only minter." }
  - { id: R-4, publisher: Blockscout, title: "SEMI creation tx 0xb79fba5b…353a", url: "https://robinhoodchain.blockscout.com/tx/0xb79fba5b778bacdd31a50c0b96e5fc8b5d87024ca41cdf62924952f89fed353a", published_at: 2026-08-13T23:07:15Z, accessed_at: 2026-09-03T03:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-11, EVT-8], excerpt: "timestamp 2026-08-13T23:07:15.000000Z status ok result success block_number 35772946 from 0x0D459F23F801C1833B393877D3835f4992D310aC (proxy_type eip7702) to null created_contract Semivault.xyz 0x5F038759F6DE38fD3A85C0440daff1240238BaC8 is_verified true. method null value 0." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode and SemiToken calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-12, CLM-17, CLM-19, CLM-25], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a44f7 (53101815). Token code 2731 B MU code 283 B. name() semivault.xyz symbol() SEMI decimals 18 totalSupply ~5.406e7*1e18 minter() 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC deployer() 0x0D459F23F801C1833B393877D3835f4992D310aC WEBSITE https://semivault.xyz TELEGRAM https://t.me/semivault X_ACCOUNT https://x.com/semivaultxyz. EIP-1967 slots zero. owner() reverts. minter code 1224 B." }
  - { id: R-6, publisher: Blockscout, title: "SemiMinter 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC", url: "https://robinhoodchain.blockscout.com/address/0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-25], excerpt: "hash 0x033dA8E5dfeDA56bfC3C8AC6A68C36c77D697BeC name SemiMinter is_contract true is_verified true is_fully_verified true file_path semi/SemiMinter.sol verified_at 2026-08-14T00:33:11Z creator_address_hash 0x0D459F23F801C1833B393877D3835f4992D310aC. Additional sources include semi/SemiBond.sol SemiHook.sol SemiLauncher.sol SemiLens.sol SemiRatchet.sol SemiStaker.sol." }
  - { id: R-7, publisher: DexScreener, title: "SEMI token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x5F038759F6DE38fD3A85C0440daff1240238BaC8", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-8, CLM-9, CLM-10, CLM-13, CLM-19, CLM-26, EVT-3], excerpt: "pair 0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121 chainId robinhood dexId uniswap labels [v4] base semivault.xyz / SEMI quote Micron Technology • Robinhood Token / MU 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD liquidity.usd 1111103.62 volume.h24 2404077.99 fdv 3621189 marketCap 3621189 pairCreatedAt 1786662467000. info.websites https://www.semivault.xyz/v2 https://www.semivault.xyz/ socials x.com/Semivaultxyz t.me/semivault." }
  - { id: R-8, publisher: GeckoTerminal, title: "SEMI / MU Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-10, CLM-14, CLM-15, EVT-3], excerpt: "name SEMI / MU address 0xe35635d9…e121 pool_created_at 2026-08-13T23:07:47Z base_token_price_usd 0.068669 quote_token_price_usd 961.107 reserve_in_usd 5617276.2788 fdv_usd 3680581.66 market_cap_usd 3670208.79 volume_usd.h24 2820873.179. dex uniswap-v4-robinhood quote robinhood_0xff080c8ce2e5feadaca0da81314ae59d232d4afd." }
  - { id: R-9, publisher: GeckoTerminal, title: "semivault.xyz token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5f038759f6de38fd3a85c0440daff1240238bac8", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-15], excerpt: "name semivault.xyz symbol SEMI decimals 18 coingecko_coin_id semivault-xyz normalized_total_supply 53598870.0554901 price_usd 0.6394089692 fdv_usd 34271598.2506542 market_cap_usd 3669048.82599636 volume_usd.h24 2840325.88729512. top pool robinhood_0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121." }
  - { id: R-10, publisher: "@Semivaultxyz", title: "WHERE TO BUY $SEMI — AND WHERE YOU CAN'T", url: "https://x.com/Semivaultxyz/status/2088236227107373098", published_at: 2026-08-14T12:08:08Z, accessed_at: 2026-09-03T03:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-21, CLM-22, EVT-7], excerpt: "WHERE TO BUY $SEMI — AND WHERE YOU CAN'T. CA (copy the whole thing): 0x5f038759f6de38fd3a85c0440daff1240238bac8. Chain: Robinhood Chain (chainId 4663). Only official pool is SEMI/MU — ignore any SEMI/ETH pair, it's third-party and mispriced. Verify everything yourself (all 9 contracts, verified source)." }
  - { id: R-11, publisher: "@Semivaultxyz", title: "Latest stats just dropped", url: "https://x.com/Semivaultxyz/status/2095302406984597657", published_at: 2026-09-03T00:06:37Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Latest stats just dropped and we can be proud. Accomplished in 3 weeks. Unlimited power. Btw this will get ridiculous in coming weeks. $semi" }
  - { id: R-12, publisher: "@Semivaultxyz", title: "NFT mint to commemorate The Arrival", url: "https://x.com/Semivaultxyz/status/2095291327084679542", published_at: 2026-09-02T23:22:35Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "There will be an NFT mint to commemorate this day. The day the Machine was revealed. The Arrival. Early holders, stakers and bonders will be assigned first copies to their addresses, the rest will mint. Collected ETH will be auto fired into more $SEMI LP." }
  - { id: R-13, publisher: "@Semivaultxyz", title: "$MU $1600 coded", url: "https://x.com/Semivaultxyz/status/2095279387180515471", published_at: 2026-09-02T22:35:08Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "$MU $1600 coded our liquidity is going to reprice. Quoted @Jake__Wujastyk: $MU #MU Is this thing about to launch?" }
  - { id: R-14, publisher: "@Semivaultxyz", title: "THE FAB is live", url: "https://x.com/Semivaultxyz/status/2090216948323754215", published_at: 2026-08-19T23:18:49Z, accessed_at: 2026-09-03T03:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-20, EVT-6], excerpt: "THE FAB is live. 10 real tokenized chip stocks. Every hour, the worst performer explodes. Its entire pod is seized, swapped to $MU on-chain, and split: 20% permanently into $SEMI's locked floor, 80% to the survivors. Built, audited (54/54 live checks, 60/60 unit tests) and deployed today." }
  - { id: R-15, publisher: Blockscout, title: "SemiLauncher 0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB", url: "https://robinhoodchain.blockscout.com/address/0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0xBae7Af495b74D2ee0f1824Dfd544933d83106DEB name SemiLauncher is_contract true is_verified true creator_address_hash 0x0D459F23F801C1833B393877D3835f4992D310aC. Site JS comment: SemiLauncher (owns the locked LP, no withdraw)." }
  - { id: R-16, publisher: Blockscout, title: "SemiHook 0x7b89c56Da91425F35D07290eCFEcF4E58dc13088", url: "https://robinhoodchain.blockscout.com/address/0x7b89c56Da91425F35D07290eCFEcF4E58dc13088", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x7b89c56Da91425F35D07290eCFEcF4E58dc13088 name SemiHook is_contract true is_verified true. Site JS comment: SemiHook (harvest lives here)." }
  - { id: R-17, publisher: Blockscout, title: "MU 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD", url: "https://robinhoodchain.blockscout.com/address/0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "hash 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementation Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Micron Technology • Robinhood Token symbol MU decimals 18 holders_count 30950 icon_url cdn.robinhood.com." }
  - { id: R-18, publisher: Telegram, title: "t.me/semivault", url: "https://t.me/semivault", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "HTTP 200. og:title SemiVault. og:description Remember coreVault? This is a tribute to it but this time the backing is a semiconductor RWA - MU (Micron) tokenized stock. The MU floor only goes up. tgme_page_extra 361 members, 59 online." }
  - { id: R-19, publisher: Blockscout, title: "MOO 0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", url: "https://robinhoodchain.blockscout.com/address/0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xD9dB30BB0D2b8d2eae3826A1372117E058791e18 name Memory cow Moo is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xdcf46e142ceb38b4c00fa7110ebaf7cacd01a2a18ba25b6809dd28a85ac08c09. token name Memory cow Moo symbol MOO." }
  - { id: R-20, publisher: Blockscout, title: "Search Semi ticker collisions on 4663", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Semi", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-23], excerpt: "Token Semivault.xyz 0x5F038759F6DE38fD3A85C0440daff1240238BaC8. Other SEMI tickers: semivault.xyz 0xc1a0e1852DadA558aE3e3d046BD62B98E18E1e69 holders 5; semivault.xyz 0xC770935f7eF9DC92a7f826E503aF6CBEa19b97b5 holders 4; Semi 0x1EF7378C2f04097037bF13aDbAb215048d1855B7 holders 5. DexScreener MOO/MU 0xD9dB…1e18 socials x.com/memorycowmoo." }
  - { id: R-21, publisher: "@Semivaultxyz", title: "FAB losses market-buy SEMI", url: "https://x.com/Semivaultxyz/status/2095256642610684188", published_at: 2026-09-02T21:04:46Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "If you lose, it market-buys SEMI — yes, exactly. The 40–60% you get back is your own USDG, held in the contract until you claim, then pushed through FabSwapV2: USDG → MU on the v4 pool → SEMI through SemiSwap, delivered to your wallet." }

gaps:
  - { priority: P0, question: "Which of the nine site-listed contracts currently holds the Uniswap v4 LP NFT, and does verified SemiLauncher source omit withdraw?", checked: "Site JS names SemiLauncher 0xBae7…6DEB as owns the locked LP, no withdraw; Blockscout name SemiLauncher is_verified true; LP token id not read this pass", next: "read SemiLauncher.sol on Blockscout and query PoolManager positions for the launcher address" }
  - { priority: P1, question: "Can deployer 0x0D45…10aC still call setMinter, or is minter already frozen at SemiMinter 0x033d…7BeC?", checked: "minter() returned 0x033d…7BeC; verified source says setMinter reverts once minter is non-zero; setMinter logs not pulled this pass", next: "read MinterFrozen logs on the token and confirm setMinter reverts on a call" }
  - { priority: P1, question: "Is there a third-party audit artifact, or only the FAB post's 54/54 live checks / 60/60 unit tests?", checked: "www.semivault.xyz, X, Telegram preview, SemiToken/SemiMinter verified pages, 2026-09-03", next: "search the X media tab and any docs path for a PDF or auditor name" }
  - { priority: P2, question: "Do the low-holder SEMI tickers 0xc1a0…1e69, 0xC770…97b5, 0x1EF7…55B7 share this deployer or only the ticker?", checked: "Blockscout search listed them with 4–5 holders; creator hashes not opened this pass", next: "open each token page creator_address_hash and DexScreener pair" }
---

# SEMI — research packet

## What it is

SEMI is an ERC-20 that trades in one Uniswap v4 pool against Robinhood's tokenized Micron (MU). Swaps pay a 5% hook fee converted to MU; staking earns ratchet mints only when MU backing per token makes a new high; bonding sends MU into the locked book for discounted SEMI. SemiVault at semivault.xyz / @Semivaultxyz publishes the token 0x5F03…BaC8 and the verified contract set.

Themes: memecoin, stock-paired:MU

## Why it matters

The SEMI/MU Uniswap v4 book is a live MU-quoted market on chain 4663, separate from MOO/MU. Gecko pool 24h volume was about $2.82M this pass, with DexScreener the same pair at about $2.40M. The quote token is Micron Technology • Robinhood Token, not a pad-issued stand-in.

## What could go wrong

DexScreener liquidity.usd $1.11M and Gecko reserve_in_usd $5.62M describe the same pool id; a single liquidity figure would misstate the book. Supply is elastic through SemiMinter. MU is a Robinhood-issued tokenized stock, not a share in custody, and the pool marks through weekends. Other SEMI tickers exist on 4663 with a handful of holders.

## Product and mechanics

SemiToken 0x5F03…BaC8 was created 2026-08-13T23:07:15Z in tx 0xb79fba5b…353a from EIP-7702 account 0x0D45…10aC. The SEMI/MU Uniswap v4 pool 0xe356…e121 quotes MU 0xfF08…4afD and was created 32 seconds later. [verified R-2 R-4 R-7 R-8]

Site JS and readme name a 5% hook fee that converts to MU, SemiRatchet emissions gated on a backing high-water mark, SemiBond MU-in for discounted vesting SEMI, and SemiLauncher as the LP holder with no withdraw. Verified SemiToken mints 10_000_000e18 at construction and then only through minter(). [claim R-1 R-3]

THE FAB is a later chip-stock elimination game the official account posted live on 2026-08-19; busts are described as feeding MU into the locked SEMI floor. [claim R-14]

## Control and security

owner() reverts. deployer() is 0x0D45…10aC. minter() is verified SemiMinter 0x033d…7BeC. Verified SemiToken source: setMinter is deployer-only, one-shot, then frozen; mint requires msg.sender == minter. EIP-1967 slots on the token are zero. [verified R-3 R-5 R-6]

No third-party audit report URL was located this pass. The FAB post named 54/54 live checks and 60/60 unit tests. [unknown]

## Team and provenance

www.semivault.xyz, token constants, and @Semivaultxyz name the same CA, Telegram, and site. @Semivaultxyz posted the CA on 2026-08-14. t.me/semivault og:title SemiVault, 361 members. GitHub search q=semivault returned 0 repositories. [verified R-1 R-5 R-10] [unknown]

## Economics and activity

DexScreener SEMI/MU Uniswap v4: liquidity.usd 1111103.62, volume.h24 2404077.99, fdv/marketCap 3621189 at 2026-09-03T03:20Z. [claim R-7]

Gecko same pool: reserve_in_usd 5617276.28, volume_usd.h24 2820873.18, fdv_usd 3680581.66, market_cap_usd 3670208.79 at 2026-09-03T03:32Z. Gecko token volume_usd.h24 2840325.89 matches the ~$2.8M window; token fdv_usd 34271598.25 and price_usd 0.6394 do not match the pool. [claim R-8 R-9]

Blockscout holders_count 1232. RPC totalSupply ~54.06M SEMI this pass versus 10M genesis. [claim R-2 R-5]

## Material risks

- DexScreener and Gecko disagree on SEMI/MU liquidity for the same pool id. [verified R-7 R-8]
- Gecko token fdv/price disagree with the SEMI/MU pool fdv/price. [verified R-8 R-9]
- Supply is elastic through SemiMinter; live supply is not the 10M genesis figure. [verified R-3 R-5]
- Other SEMI tickers on 4663 are not this contract. [verified R-20]
- No third-party audit report URL this pass. [unknown]

## Verification passes

- Receipts: site HTML and JS, Blockscout token/source/create tx/minter/launcher/hook/MU/MOO/search, RPC eth_getCode and SemiToken calls, DexScreener token, Gecko pool and token, X posts, Telegram preview, GitHub search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-5 R-7 R-8]
- Numbers: 2820873.18 is the Gecko SEMI/MU pool 24h volume, not the Gecko token all-pools 2840325.89. Reserve 5617276.28 is that pool. DexScreener 2404077.99 / 1111103.62 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that SEMI is the same MU-paired book as MOO, or a LONG Doppler clone. MOO is 0xD9dB…1e18 created by DopplerERC20V1Factory 0x1B37…b69a with handle @memorycowmoo; SEMI is SemiToken 0x5F03…BaC8 created by 0x0D45…10aC with site semivault.xyz / @Semivaultxyz. [inference R-2 R-19 R-20]

## Operations log

- Base: git rev-parse origin/main → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no semi / SEMI / SemiVault / 0x5F03…BaC8. Discovery inventory listed SEMI/MU with no handle.
- Explorer: Blockscout api/v2 token, source, create tx, SemiMinter, SemiLauncher, SemiHook, MU, MOO, search q=Semi. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call (Chrome UA; 4-byte selectors without from reverted, succeeded with from=deployer).
- Aggregators: DexScreener latest/dex/tokens and search SEMI MU; Gecko pool and token (one 429, then retry).
- Social: X user Semivaultxyz; from:Semivaultxyz Latest; from:memorycowmoo; Telegram t.me/semivault preview.
- Site: https://semivault.xyz → https://www.semivault.xyz/; /v2 same bundle; JS address object copied.
- GitHub: api.github.com/search/repositories?q=semivault total 0.
- Time: collection 2026-09-03T03:15Z–2026-09-03T03:35Z.
