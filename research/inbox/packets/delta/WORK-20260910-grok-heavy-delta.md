---
# Packet v2 full backfill. Task 5b892e12a71969049fdb (#132).
contract_version: proofline-research-v2
work_id: WORK-20260910-grok-heavy-delta
producer: grok-heavy
role: collector
base_sha: 422d4a5d33b5144bcfa725d264272be0b691e3f9
slug: delta
name: Delta
packet_tier: full
as_of: 2026-09-10T18:30:00Z
prior_packet: research/inbox/packets/delta/WORK-20260903-grok-heavy-icarus-research.md@422d4a5d33b5144bcfa725d264272be0b691e3f9
supersedes: null
owned_slugs: [delta]
allowed_paths:
  - research/inbox/packets/delta/WORK-20260910-grok-heavy-delta.md

identity:
  crosslink_claim_ids: [CLM-3]
  canonical_name: Delta
  aliases: ["Delta Liquidity", "deltaliquidity"]
  symbols: [DELTA]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://deltaliquidity.app
  official_handle: "@deltaliquidity"
  repository: "NULL — site, docs, X bio and DexScreener token info still do not name a repository"
  possible_matches:
    - slug: maxfi
      signals: [other]
      contrary_signals:
        - "Census MaxFi is maxfi.tech / @MAXFILABS"
        - "Delta is deltaliquidity.app / @deltaliquidity with token 0xe8ff…a791"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: yield/lp-manager
  secondary_leaves: []
  mechanism_tags: [vault, amm, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Docs-listed vault, zap, oracle, position-builder and ladder contracts still have code on 4663. Docs now list DeltaLadderManager v8 0xbCb9…d5FB ahead of v3. Claim fee in current docs is 7.5% of claimed fees. Llama Robinhood Chain TVL $9,541 vs DexScreener DELTA/WETH v3 liquidity $829,484. [CLM-4] [CLM-20] [CLM-21]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-20], note: "" }

links:
  - { kind: site, url: "https://deltaliquidity.app", authenticity: confirmed }
  - { kind: docs, url: "https://deltaliquidity.app/docs", authenticity: confirmed }
  - { kind: app, url: "https://deltaliquidity.app/pools", authenticity: confirmed }
  - { kind: x, url: "https://x.com/deltaliquidity", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/deltaliquidity", authenticity: unconfirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0xd64fbda67e1015df43fa5e49f02ca844729e5f94", authenticity: confirmed }

deployments:
  - label: DELTA token (PonsLauncherToken)
    role: token
    address: { value: "0xe8ffd7e24187F72afB08d75B1bb13088A989a791", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: true }
    receipt_ids: [R-4]
  - label: DELTA/WETH Uniswap v3 pair
    role: other
    address: { value: "0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-5, R-18]
  - label: PonsLaunchFactory (token creator)
    role: factory
    address: { value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-6]
  - label: VaultFactory (docs; creates stakes)
    role: factory
    address: { value: "0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-2, R-7]
  - label: VaultFarmFactory (docs)
    role: factory
    address: { value: "0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-8]
  - label: DeltaZap (docs)
    role: other
    address: { value: "0xC0b8eC7589ee49c53305517bFd53BEd708392294", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-9]
  - label: TwapOracle (docs)
    role: other
    address: { value: "0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-10]
  - label: DeltaPositionBuilder (docs)
    role: other
    address: { value: "0x6235cF6bd8419b34942F4EDDB39C880BD96dD700", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-11]
  - label: DeltaLadderManager v3 (docs)
    role: vault
    address: { value: "0x5cA6214227D1195c4b7b4B96847b8966c688295D", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-12]
  - label: DeltaLadderManager v8 (docs current listing)
    role: vault
    address: { value: "0xbCb96b15dC2246D242c879316c86e25e846ad5FB", chain: robinhood-chain, source: docs, seen: 2026-09-10, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-2, R-13]
  - label: Llama adapter LADDER_MANAGER
    role: vault
    address: { value: "0x64680254BF644BBdDe394b95129895c13317FeD4", chain: robinhood-chain, source: third-party, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-14]
  - label: Llama adapter LADDER_MANAGER_V2
    role: vault
    address: { value: "0xC5941433114BB47a9733CB31a0A3A3dBfF45B418", chain: robinhood-chain, source: third-party, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-15]
  - label: Llama adapter ROUTER_V3
    role: router
    address: { value: "0x46dFEa430d1F069C129E26445319562e29f39C47", chain: robinhood-chain, source: third-party, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-16]

metrics:
  - { kind: tvl, value: 9540.89, currency: USD, as_of: 2026-09-10, window: point, method: "api.llama.fi/protocol/delta currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-17] }
  - { kind: volume_24h, value: 1560235.74, currency: USD, as_of: 2026-09-10, window: 24h, method: "DexScreener DELTA/WETH Uniswap v3 pair 0xD64F…5F94 volume.h24 (token book, not protocol TVL)", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], result: "eth_getCode 5274 bytes at 0xe8ff…a791; owner() reverted" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-18], result: "eth_getCode 22142 bytes at 0xD64F…5F94" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-6], result: "eth_getCode 24353 bytes at 0xA5aA…1feB; owner() 0x263e…19Dd" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-7], result: "eth_getCode 14769 bytes at VaultFactory 0x68ED…153c; owner() 0xf98c…2a1d" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-8], result: "eth_getCode 10359 bytes at VaultFarmFactory; owner() 0xf98c…2a1d" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-9], result: "eth_getCode 4473 bytes at DeltaZap; owner() reverted" }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-10], result: "eth_getCode 2589 bytes at TwapOracle; owner() reverted" }
  - { id: REP-8, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-11], result: "eth_getCode 5615 bytes at DeltaPositionBuilder; owner() reverted" }
  - { id: REP-9, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-12], result: "eth_getCode 18438 bytes at ladder v3; owner() 0xb1c2…9e69" }
  - { id: REP-10, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-13], result: "eth_getCode 22360 bytes at ladder v8; owner() 0xb1c2…9e69" }
  - { id: REP-11, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-14], result: "eth_getCode 18721 bytes at Llama LADDER_MANAGER; owner() 0xb1c2…9e69" }
  - { id: REP-12, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-15], result: "eth_getCode 19168 bytes at Llama LADDER_MANAGER_V2; owner() 0xb1c2…9e69" }
  - { id: REP-13, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-16], result: "eth_getCode 16391 bytes at Llama ROUTER_V3; owner() 0xf98c…2a1d" }
  - { id: REP-14, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], result: "Site/docs and @deltaliquidity bio name deltaliquidity.app and token 0xe8ff…a791" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Users deposit into a stake on a WETH pool or mint a shaped Uniswap position held in a Delta contract; rewards stream in WETH/ETH; current docs take 7.5% of claimed fees, not principal", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://deltaliquidity.app", class: claim, observed_at: 2026-09-02T23:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@deltaliquidity bio prints CA 0xe8ff…a791 and links deltaliquidity.app; DexScreener repeats both", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3, R-5], reproduction_ids: [REP-14], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "DELTA token 0xe8ffd7e24187F72afB08d75B1bb13088A989a791", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "DELTA/WETH Uniswap v3 pair 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-5, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "VaultFactory 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "VaultFarmFactory 0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "DeltaZap 0xC0b8eC7589ee49c53305517bFd53BEd708392294", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-9], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "TwapOracle 0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "DeltaPositionBuilder 0x6235cF6bd8419b34942F4EDDB39C880BD96dD700", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-12, field: deployment.address, value: "DeltaLadderManager v3 0x5cA6214227D1195c4b7b4B96847b8966c688295D", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [REP-9], supersedes: null }
  - { id: CLM-13, field: deployment.address, value: "DeltaLadderManager v8 0xbCb96b15dC2246D242c879316c86e25e846ad5FB", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-10], supersedes: null }
  - { id: CLM-14, field: deployment.address, value: "Llama LADDER_MANAGER 0x64680254BF644BBdDe394b95129895c13317FeD4", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-14], reproduction_ids: [REP-11], supersedes: null }
  - { id: CLM-15, field: deployment.address, value: "Llama LADDER_MANAGER_V2 0xC5941433114BB47a9733CB31a0A3A3dBfF45B418", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-15], reproduction_ids: [REP-12], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "Llama ROUTER_V3 0x46dFEa430d1F069C129E26445319562e29f39C47", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-16], reproduction_ids: [REP-13], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "VaultFactory, VaultFarmFactory and Llama ROUTER_V3 owner() 0xf98c…2a1d; ladder v3, v8 and both Llama ladder managers owner() 0xb1c2…9e69; both EOAs have empty code in this RPC; no timelock in that path", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-7, R-8, R-12, R-13, R-16], reproduction_ids: [REP-4, REP-5, REP-9, REP-10, REP-13], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL established this pass", class: unknown, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "Llama protocol record for delta reports audits=0; that is an aggregator field, not a located report", class: claim, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: team.identity, value: "@deltaliquidity posted 2026-09-10 that @cataction_sol joined frontend; no legal entity named", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Llama Robinhood Chain TVL $9,540.89 vs DexScreener DELTA/WETH v3 liquidity $829,483.95 vs @deltaliquidity 2026-09-09 post '2m+ total value locked'; slices are not the same custody", class: claim, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-3, R-5, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Current /docs fee table is 7.5% of claimed fees; prior packet recorded a 1% protocol cut on 2026-09-02. Docs copy is not a reproduction of the deployed fee setter", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "Sep 7 tokenomics article, Sep 8 buyback/burn post, Sep 9 '2m+ TVL / 2m+ fees' post, Sep 10 frontend hire", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: activity.status, value: "DexScreener DELTA/WETH v3 24h volume $1,560,235.74; token still trades", class: claim, observed_at: 2026-09-10T18:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-25, field: control.privileged-role, value: "FAQ still says the owner key can lower the fee and pause new deposits but cannot raise the fee or move a staked position; VaultFactory source was not verified this pass so that bound is unread on chain", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: Docs now list ladder v8 and a 7.5% claim fee
    summary: deltaliquidity.app/docs lists DeltaLadderManager v8 0xbCb9…d5FB above v3 and states a 7.5% cut of claimed fees. RPC shows 22360 bytes at v8, owner() 0xb1c2…9e69, same owner as v3. This is a docs/on-chain observation, not a compiled site announcement.
    account: null
    occurred_at: 2026-09-10T18:20:00Z
    observed_at: 2026-09-10T18:24:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-2, R-13]

receipts:
  - { id: R-1, publisher: Delta, title: "App / site", url: "https://deltaliquidity.app", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "Live app at deltaliquidity.app; docs and pools linked from the same host." }
  - { id: R-2, publisher: Delta, title: "Docs", url: "https://deltaliquidity.app/docs", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-7, CLM-13, CLM-21, CLM-25, EVT-1], excerpt: "Delta takes 7.5% of the fees you claim. VaultFactory 0x68ED…153c. DeltaLadderManager v8 0xbCb9…d5FB listed above v3 0x5cA6…295D. FAQ: owner can lower the fee and pause new deposits, cannot raise the fee or move a staked position." }
  - { id: R-3, publisher: Delta, title: "@deltaliquidity profile", url: "https://x.com/deltaliquidity", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-19, CLM-20, CLM-22], excerpt: "Bio prints 0xe8ffd7e24187f72afb08d75b1bb13088a989a791 and deltaliquidity.app. Sep 9 post: 2m+ in fees generated, 2m+ total value locked. Sep 10: welcome @cataction_sol." }
  - { id: R-4, publisher: Robinhood RPC, title: "eth_getCode DELTA token", url: "https://robinhoodchain.blockscout.com/address/0xe8ffd7e24187F72afB08d75B1bb13088A989a791", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "eth_getCode 5274 bytes; owner() reverted" }
  - { id: R-5, publisher: DexScreener, title: "DELTA token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xe8ffd7e24187F72afB08d75B1bb13088A989a791", published_at: null, accessed_at: 2026-09-10T18:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-20, CLM-23], excerpt: "Uniswap v3 pair 0xD64F…5F94 DELTA/WETH liquidity.usd 829483.95 volume.h24 1560235.74 websites deltaliquidity.app socials x.com/deltaliquidity" }
  - { id: R-6, publisher: Robinhood RPC, title: "eth_getCode PonsLaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "eth_getCode 24353 bytes; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd" }
  - { id: R-7, publisher: Robinhood RPC, title: "eth_getCode VaultFactory", url: "https://robinhoodchain.blockscout.com/address/0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-17], excerpt: "eth_getCode 14769 bytes; owner() 0xf98c1097bc50692b8f290b8c20a3f3f7dd0e2a1d" }
  - { id: R-8, publisher: Robinhood RPC, title: "eth_getCode VaultFarmFactory", url: "https://robinhoodchain.blockscout.com/address/0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-17], excerpt: "eth_getCode 10359 bytes; owner() 0xf98c…2a1d" }
  - { id: R-9, publisher: Robinhood RPC, title: "eth_getCode DeltaZap", url: "https://robinhoodchain.blockscout.com/address/0xC0b8eC7589ee49c53305517bFd53BEd708392294", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "eth_getCode 4473 bytes; owner() reverted" }
  - { id: R-10, publisher: Robinhood RPC, title: "eth_getCode TwapOracle", url: "https://robinhoodchain.blockscout.com/address/0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "eth_getCode 2589 bytes; owner() reverted" }
  - { id: R-11, publisher: Robinhood RPC, title: "eth_getCode DeltaPositionBuilder", url: "https://robinhoodchain.blockscout.com/address/0x6235cF6bd8419b34942F4EDDB39C880BD96dD700", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "eth_getCode 5615 bytes; owner() reverted" }
  - { id: R-12, publisher: Robinhood RPC, title: "eth_getCode ladder v3", url: "https://robinhoodchain.blockscout.com/address/0x5cA6214227D1195c4b7b4B96847b8966c688295D", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-17], excerpt: "eth_getCode 18438 bytes; owner() 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69" }
  - { id: R-13, publisher: Robinhood RPC, title: "eth_getCode ladder v8", url: "https://robinhoodchain.blockscout.com/address/0xbCb96b15dC2246D242c879316c86e25e846ad5FB", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-17, EVT-1], excerpt: "eth_getCode 22360 bytes; owner() 0xb1c2…9e69" }
  - { id: R-14, publisher: Robinhood RPC, title: "eth_getCode Llama LADDER_MANAGER", url: "https://robinhoodchain.blockscout.com/address/0x64680254BF644BBdDe394b95129895c13317FeD4", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "eth_getCode 18721 bytes; owner() 0xb1c2…9e69" }
  - { id: R-15, publisher: Robinhood RPC, title: "eth_getCode Llama LADDER_MANAGER_V2", url: "https://robinhoodchain.blockscout.com/address/0xC5941433114BB47a9733CB31a0A3A3dBfF45B418", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "eth_getCode 19168 bytes; owner() 0xb1c2…9e69" }
  - { id: R-16, publisher: Robinhood RPC, title: "eth_getCode Llama ROUTER_V3", url: "https://robinhoodchain.blockscout.com/address/0x46dFEa430d1F069C129E26445319562e29f39C47", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-17], excerpt: "eth_getCode 16391 bytes; owner() 0xf98c…2a1d" }
  - { id: R-17, publisher: DefiLlama, title: "Delta protocol chain slice", url: "https://api.llama.fi/protocol/delta", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20, CLM-26], excerpt: "currentChainTvls['Robinhood Chain'] 9540.89378; audits 0; url https://deltaliquidity.app/; twitter deltaliquidity" }
  - { id: R-18, publisher: Robinhood RPC, title: "eth_getCode DELTA/WETH v3 pair", url: "https://robinhoodchain.blockscout.com/address/0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "eth_getCode 22142 bytes at 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94" }

gaps:
  - { area: security, priority: P1, question: "Is there an audit report whose scope matches VaultFactory, ladder managers and DeltaPositionBuilder?", checked: "docs, X, Llama audits=0, 2026-09-10", next: "record any report URL and match bytecode" }
  - { priority: P0, question: "Which ladder manager is live for new positions: docs v8 0xbCb9…d5FB, docs v3 0x5cA6…295D, or Llama 0x6468… / 0xC594…?", checked: "docs list v8 above v3; all four have code; app JS not decoded, 2026-09-10", next: "read the app's configured manager address" }
  - { priority: P0, question: "Do unverified VaultFactory / ladder sources match the FAQ (owner can pause and lower fee, cannot raise fee or move deposits), and is there a timelock?", checked: "FAQ text on /docs; owner() EOAs with empty code; Blockscout REST blocked, 2026-09-10", next: "verified source or eth_call pause/fee setters" }
  - { priority: P1, question: "Can site/X '2m+ TVL' be reconstructed as user-custodied Uniswap positions versus Llama's $9.5k custodied slice?", checked: "Llama $9,541; DexScreener token-book liq $829k; X 2m+, 2026-09-10", next: "sum position NFT amounts the app lists, or ask Llama for a user-custodied metric" }

---

# Delta — research packet

## What it is

A liquidity manager: users deposit a token or LP into a stake or a shaped Uniswap position and collect a share of that pool's swap fees in ETH. Open or join a pool on deltaliquidity.app, claim streamed fees after a protocol cut, and withdraw with no lockup. @deltaliquidity runs the app. DELTA is a Pons v1 launch token, not the vault.

Themes: vault, rwa, memecoin

TL;DR: LP manager on 4663. Docs list ladder v8 and a 7.5% claim fee; Llama TVL is far below the token book and the 2m+ TVL post.

## Why it matters

- Thesis: unmanaged Uniswap LP on Robinhood Chain can be deposited or shaped without handing keys to the team. [claim R-2]
- Traction: DELTA/WETH v3 still prints seven-figure 24h volume. [claim R-5]
- Catalyst: which ladder is live, and whether owner bounds in the FAQ match bytecode, remain unread. [claim R-2]

## What could go wrong

- Two EOAs own the vault/ladder stack with no timelock in owner(). [verified R-7]
- FAQ owner limits are unread on unverified source. [claim R-2]
- TVL figures from Llama, DexScreener and X are not the same custody. [claim R-17]

## Product and mechanics

Stakes attach to one WETH pool and stream rewards over seven days. Pools mint a shaped Uniswap position into a Delta-held NFT. Current docs take 7.5% of claimed fees, never principal; the 2026-09-02 packet recorded 1%. That 7.5% is docs copy, not a reproduced on-chain fee. [claim R-2]

Docs now list DeltaLadderManager v8 0xbCb9…d5FB above v3. Both have code. Which one the app uses for new positions was not read from JS. [verified R-13 R-12]

## Control and security

VaultFactory / VaultFarmFactory / Llama router owner() is 0xf98c…2a1d. Ladder v3, v8 and both Llama ladder managers owner() is 0xb1c2…9e69. Both are empty-code EOAs this pass. [verified R-7 R-12 R-13]

FAQ says that owner can pause and lower fees but cannot raise fees or seize deposits. Source was not verified, so that bound is a project claim. Llama audits=0. [claim R-2]

## Team and provenance

deltaliquidity.app, docs and @deltaliquidity print the same CA. A 2026-09-10 post names @cataction_sol as a frontend hire. No legal entity. [claim R-3]

## Economics and activity

Llama Robinhood Chain TVL $9,540.89 (custodied adapter slice). DexScreener DELTA/WETH v3 liquidity $829,483.95 and 24h volume $1,560,235.74 (token book). @deltaliquidity posted 2m+ TVL on 9 Sep. These are different measurements. [claim R-5 R-17]

## Material risks

- Unverified factories plus two EOAs mean pause/fee/upgrade behaviour is unread. [verified R-7]
- Mixing token-book liquidity with protocol TVL overstates custody. [claim R-17]

## Verification passes

- Receipts: docs, X, DexScreener and Llama opened 2026-09-10; RPC eth_getCode/owner() on every listed deployment. [verified R-2 R-5 R-7 R-17]
- Numbers: Llama figure is currentChainTvls Robinhood Chain; DexScreener volume is the v3 pair, not protocol fees. [claim R-5 R-17]
- Adversarial: v8 could be unused docs while v3 or a Llama adapter still takes new positions; app JS is required. [inference R-2 R-13]

## Operations log

- Task 5b892e12a71969049fdb. Identity and primary_leaf copied from the accepted full packet.
- RPC 2026-09-10T18:24Z. Blockscout REST Cloudflare this pass.
- Llama protocol delta, not delta-liquidity.
- No identity merge, no scores, no publication. Historical events placement none.
