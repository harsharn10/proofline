---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: snoo
name: SNOO
packet_tier: seed
as_of: 2026-09-03T05:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [snoo]
allowed_paths:
  - research/inbox/packets/snoo/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SNOO
  aliases: [Snoo]
  symbols: [SNOO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; Gecko token has no website field; Reddit share r/Snoo preview has no CA this pass; flag third-party-link"
  official_handle: "NULL — DexScreener info.socials is a Reddit share; @snoo_robinhood bio pins 0x52B566…; @snoocoinRH pins 0x2ebe1C…; @SnoofiOnRH pins SNOOFI 0xa614C13…; flag unconfirmed-official, handle-collision, ca-collision"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "SNOO is the ERC-20 at 0x939C…1E18 created through that factory; entity_kind token, not protocol"
        - "No official domain or handle this pass; LONG's surface is app.long.xyz / @longdotxyz"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "Canonical SNOO is a 44-byte EIP-1167 DopplerERC20V1 clone via LongLauncher, Uniswap v4 pair 0x93ba…bb48"
        - "PonsV2LauncherToken Snoo / SNOO 0x52B566…4687 (4 holders, creator PonsV2LaunchDeployer) is a same-ticker CA recorded as ca-collision, not this row"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "SNOO is Snoo / SNOO at 0x939C…1E18 paired to RDDT 0x05b37F…F4C via LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "SNOO is a LongLauncher DopplerERC20V1 clone in a Uniswap v4 SNOO/RDDT pool"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot; Gecko labeled this pool dex bankr-robinhood"
        - "Create tx to is LongLauncher 0x22e9…eeED, not a Bankr-owned factory; venue on-chain is Uniswap v4 PoolManager 0x8366…0951"
        - "No shared domain, handle, or reproduced address as Bankr's own"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x939C…1E18 is a 44-byte EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; name Snoo / symbol SNOO; owner() Airlock 0xeb7C…0862. LongLauncher create at 2026-08-03T06:15:08Z minted against numeraire RDDT 0x05b37F…F4C into Uniswap v4 pool 0x93ba…bb48. DexScreener SNOO/RDDT liq 141052.03 vol.h24 142438.44. Distinct from SNOOFI 0xa614C13…, Pons SNOO 0x52B566…, mascot SNOO 0x2ebe1C…, and in-flight KARMA 0xb1B800…. RDDT is a rail. [R-1] [R-2] [R-4] [R-5] [R-8] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://www.reddit.com/r/Snoo/s/OhgwH7HcbL", authenticity: unconfirmed }

deployments:
  - label: SNOO token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-4, R-13]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-4, R-12]
  - label: LongLauncher (create tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-10]
  - label: Airlock (token owner)
    role: factory
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: DopplerHookInitializer
    role: other
    address:
      value: "0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14]
  - label: RDDT Stock Token (pair quote / launch numeraire; rail, not this subject)
    role: token
    address:
      value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-8, R-9]
  - label: "SNOOFI collision (Snoofi / Snoofi, not this row)"
    role: token
    address:
      value: "0xa614C13b18B5C754B34fF51E4775Ab19568e0536"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:12:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-27]
  - label: "SNOO ticker collision (PonsV2LauncherToken, not this row)"
    role: token
    address:
      value: "0x52B566dF34d709aea103f541cba1b341Ddc04687"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:12:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-24]
  - label: "SNOO ticker collision (Reddit's mascot / SNOO, not this row)"
    role: token
    address:
      value: "0x2ebe1C527691bf3497b6905bd351FD5161792215"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:12:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-25]

metrics:
  - { kind: volume_24h, value: 142438.44, currency: USD, as_of: 2026-09-03T05:08:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 pair 0x93ba…bb48 volume.h24 (SNOO/RDDT Uniswap v4, not all-pairs)", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 141052.03, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 pair 0x93ba…bb48 liquidity.usd (SNOO/RDDT, not an all-pools figure)", class: claim, receipt_ids: [R-5] }
  - { kind: market_cap, value: 270332, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 pair 0x93ba…bb48 fdv/marketCap (Gecko market_cap_usd null)", class: claim, receipt_ids: [R-5] }
  - { kind: holders, value: 617, currency: null, as_of: 2026-09-03T05:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32b1d8d (53157261). Token 0x939C…1E18 eth_getCode 44 bytes clone prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Snoo, symbol SNOO, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Factory 0x1B37…b69a code 1912 B. Impl code 13927 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock code 5695 B. Launcher EOA 0xdF65…C23e code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2, R-3, R-9, R-10, R-12, R-13], result: "Blockscout api/v2 token 0x939C…1E18 name Snoo symbol SNOO holders_count 617 total_supply 1e27 transfers_count 65471 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a tx 0x5ff0…9215 2026-08-03T06:15:08Z block 26538931 from 0xdF65…C23e to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker SNOO numeraire RDDT 0x05b37F…F4C poolId 0x93ba…bb48. Factory name DopplerERC20V1Factory is_verified true. Impl file_path src/tokens/DopplerERC20V1.sol is_partially_verified true. LongLauncher file_path src/LongLauncher.sol is_verified true is_partially_verified false." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-5, R-6, R-7, R-18], result: "DexScreener latest/dex/tokens/0x939C…1E18: 3 robinhood uniswap pairs; top SNOO/RDDT v4 0x93ba…bb48 quote 0x05b37F…F4C Reddit • Robinhood Token / RDDT liquidity.usd 141052.03 volume.h24 142438.44 fdv/marketCap 270332 pairCreatedAt 1785737708000 (2026-08-03T06:15:08Z) info.websites [] info.socials reddit r/Snoo share. Gecko pool: volume_usd.h24 133003.7918 reserve_in_usd 147791.1086 fdv_usd 277437.9926 pool_created_at 2026-08-03T06:15:08Z dex bankr-robinhood. Gecko token volume_usd.h24 136029.37 (all pools, not the RDDT book) market_cap_usd null. DexScreener search listed additional same-ticker SNOO CAs on robinhood." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663. RDDT is a rail." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-4, R-15, R-16, R-17], result: "Collision codes at block 53157261: SNOOFI 0xa614C13… 4830 B; Pons SNOO 0x52B566… 3248 B; mascot SNOO 0x2ebe1C… 3002 B. Canonical 0x939C… is 44 B clone. None share bytecode length with this row." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire RDDT. create from 0xdF65…C23e minted Snoo / SNOO; owner() is Airlock; DopplerHookInitializer locked beneficiaries 5% 0x21E2…7A66 / 95% launcher EOA.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-2, R-3, R-4, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Snoo", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "SNOO", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-2, R-4, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials is a Reddit share; @snoo_robinhood / @snoocoinRH / @SnoofiOnRH pin other CAs; flag unconfirmed-official, handle-collision, ca-collision", class: claim, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-5, R-19, R-24, R-25, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote RDDT 0x05b37F…F4C is Reddit • Robinhood Token in GET /rhj/assets (194 assets, 1 RDDT hit). RDDT is a rail. Distinct from SNOOFI 0xa614C13… (Snoofi/WETH), Pons SNOO 0x52B566…, mascot SNOO 0x2ebe1C…, and in-flight KARMA 0xb1B800… (Pons v2 / RDDT).", class: verified, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-8, R-9, R-15, R-16, R-17, R-18], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "SNOO/RDDT Uniswap v4 24h volume 142438.44 USD and liquidity.usd 141052.03 at 2026-09-03T05:08:00Z (DexScreener pair slice, not Gecko token all-pools 136029.37)", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 133003.7918 reserve_in_usd 147791.1086 fdv_usd 277437.9926 at 2026-09-03T05:10:00Z; dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 617, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; create tx OwnershipTransferred newOwner that address. Launcher 0xdF65…C23e has no code.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-4, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5e16 (5%) and launcher 0xdF651625A9C9FD3c5D8145737e1039D2A262C23e 95e16 (95%)", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-3], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is RDDT 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x93ba…bb48. Gecko labels the pool dex bankr-robinhood.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-3, R-5, R-6, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create tx to is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Reddit preview, or X search this pass", class: unknown, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link and copypasta-pattern: DexScreener social is reddit.com/r/Snoo/s/OhgwH7HcbL with no CA in the preview; X posts wrapped 0x939C… in netlify vote/claim URLs", class: claim, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-5, R-19, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 270332; Gecko fdv_usd 277437.9926. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field; Reddit share preview has no CA", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-5, R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "snoo | SNOO | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:20:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "ca-collision: same-ticker SNOO at 0x52B566… (PonsV2LauncherToken, 4 holders, @snoo_robinhood bio) and 0x2ebe1C… (Reddit's mascot / SNOO, @snoocoinRH). SNOOFI 0xa614C13… is a different symbol on WETH, not this row.", class: verified, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-15, R-16, R-17, R-18, R-24, R-25, R-26], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener SNOO/RDDT 24h volume $142,438, liquidity $141,052"
    summary: "Uniswap v4 0x93ba…bb48 liq 141052.03 vol.h24 142438.44 fdv 270332. Gecko reserve 147791 vol 133004."
    occurred_at: 2026-09-03T05:10:00Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5, R-6]
  - id: EVT-2
    type: risk
    title: "X posts wrapped the 0x939C… CA in netlify vote and claim URLs"
    summary: "@bamboorootsNFT posted robinhood-main-dex-pwb.netlify.app/vote wrapping 0x939C…. Flag copypasta-pattern."
    occurred_at: 2026-09-03T00:51:43Z
    observed_at: 2026-09-03T05:16:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-3
    type: ct
    title: "@Geistuberallem posted the 0x939C… CA as the Reddit mascot"
    summary: "Post: The SpaceX mascot $Asteroid just went parabolic; $Snoo the Reddit mascot is next, plus the CA."
    occurred_at: 2026-09-02T17:01:09Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [activity.status, identity.symbol]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: ct
    title: "@NiksGambles posted 0x939C… as the first $snoo tied to $RDDT"
    summary: "Post: Stock pairs are going. So here is the first $snoo on robinhood tied to $RDDT, with the contract."
    occurred_at: 2026-08-28T14:39:07Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: ct
    title: "@0xHaruyuki posted an ape of SNOO/RDDT with CA 0x939C…"
    summary: "Post: Aped some SNOO, RDDT pair on Robinhood. 50K 0x939ca34ce2dc5845f4bff8079fc6ccd6ab641e18"
    occurred_at: 2026-08-13T21:36:03Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-6
    type: onchain
    title: "LongLauncher create minted Snoo / SNOO against RDDT"
    summary: "Tx 0x5ff0…9215 from 0xdF65…C23e at 2026-08-03T06:15:08Z; LaunchCreated ticker SNOO; pool 0x93ba…bb48."
    occurred_at: 2026-08-03T06:15:08Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-3]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x939C…1E18 Snoo / SNOO", url: "https://robinhoodchain.blockscout.com/address/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-26], excerpt: "hash 0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 name Snoo is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol SNOO decimals 18 total_supply 1e27 holders_count 617 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x5ff03f3611012f8614cc64cfc8da9af7f945ef1b51a5498564cbb73fa3959215. counters holders 617 transfers_count 65471." }
  - { id: R-2, publisher: Blockscout, title: "LongLauncher create tx 0x5ff03f36…9215", url: "https://robinhoodchain.blockscout.com/tx/0x5ff03f3611012f8614cc64cfc8da9af7f945ef1b51a5498564cbb73fa3959215", published_at: 2026-08-03T06:15:08Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-5, CLM-6, CLM-7, CLM-16, EVT-6], excerpt: "timestamp 2026-08-03T06:15:08.000000Z status ok result success block_number 26538931 from 0xdF651625A9C9FD3c5D8145737e1039D2A262C23e (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data initial supply 1e27 numeraire 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C token factory 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-3, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs for SNOO", url: "https://robinhoodchain.blockscout.com/tx/0x5ff03f3611012f8614cc64cfc8da9af7f945ef1b51a5498564cbb73fa3959215", published_at: 2026-08-03T06:15:08Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-13, CLM-14, CLM-15, EVT-6], excerpt: "OwnershipTransferred newOwner Airlock 0xeb7C…0862. PoolManager Initialize id 0x93bac4d4ba985d13838eb157b8380468ca1a5f14e607531b2ede1a061addbb48 currency0 RDDT currency1 SNOO hooks DopplerHookInitializer 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 0x21E2…7A66 50000000000000000 and 0xdF65…C23e 950000000000000000. LaunchCreated normalizedTicker SNOO launcher 0xdF65…C23e deployedAt 1785737708." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on SNOO", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-26], excerpt: "eth_blockNumber 0x32b1d8d (53157261). Token code 44 B prefix 3d3d3d3d363d3d37363d73 impl 0x3be8b97f…c599. name Snoo symbol SNOO decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Factory 0x1B37…b69a code 1912 B. Impl 13927 B. LongLauncher 5826 B. Airlock 5695 B. Hook 25533 B. RDDT 283 B. Launcher EOA 0xdF65…C23e code 0x." }
  - { id: R-5, publisher: DexScreener, title: "latest/dex/tokens SNOO 0x939C…1E18", url: "https://api.dexscreener.com/latest/dex/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0x93bac4d4ba985d13838eb157b8380468ca1a5f14e607531b2ede1a061addbb48 labels v4 base Snoo / SNOO quote Reddit • Robinhood Token / RDDT 0x05b37Fb53A…F4C liquidity.usd 141052.03 volume.h24 142438.44 fdv 270332 marketCap 270332 pairCreatedAt 1785737708000. info.websites [] info.socials reddit https://www.reddit.com/r/Snoo/s/OhgwH7HcbL." }
  - { id: R-6, publisher: GeckoTerminal, title: "SNOO/RDDT pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x93bac4d4ba985d13838eb157b8380468ca1a5f14e607531b2ede1a061addbb48", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-15, CLM-20, EVT-1], excerpt: "name SNOO / RDDT pool_created_at 2026-08-03T06:15:08Z fdv_usd 277437.9926 market_cap_usd null volume_usd.h24 133003.791804647 reserve_in_usd 147791.1086. dex bankr-robinhood quote robinhood_0x05b37fb53a299a1b874a619e1c4c404d52c36f4c. First Gecko GET token endpoint HTTP 200 this pass." }
  - { id: R-7, publisher: GeckoTerminal, title: "Snoo token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name Snoo symbol SNOO decimals 18 total_supply 1e27 price_usd 0.0002774379926 fdv_usd 277437.992569924 market_cap_usd null volume_usd.h24 136029.372700916 total_reserve_in_usd 83562.93. coingecko_coin_id null. No website field. Top pool 0x93ba…bb48." }
  - { id: R-8, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. One RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663. RDDT is a rail, not this profile." }
  - { id: R-9, publisher: Blockscout, title: "Token 0x05b37F…F4C RDDT", url: "https://robinhoodchain.blockscout.com/address/0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Reddit • Robinhood Token symbol RDDT decimals 18 total_supply 9401839000000000000000 holders_count 17082. RDDT is the pair rail, not this profile." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true proxy_type null creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. Smart-contract compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true. Smart-contract compiler v0.8.26 file_path src/Airlock.sol is_partially_verified true verified_at 2026-07-01T19:41:17Z." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-26], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Smart-contract compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26 file_path src/tokens/DopplerERC20V1.sol is_partially_verified true verified_at 2026-07-01T19:42:07Z." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x4e34…a544 DopplerHookInitializer", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true. Smart-contract compiler v0.8.26 file_path src/initializers/DopplerHookInitializer.sol is_partially_verified true verified_at 2026-07-01T20:06:20Z." }
  - { id: R-15, publisher: Blockscout, title: "Token 0xa614C13… Snoofi / Snoofi", url: "https://robinhoodchain.blockscout.com/address/0xa614C13b18B5C754B34fF51E4775Ab19568e0536", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0xa614C13b18B5C754B34fF51E4775Ab19568e0536 name LaunchToken is_contract true is_verified true creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. token name Snoofi symbol Snoofi decimals 18 total_supply 1e27 holders_count 287. Distinct from this SNOO row." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x52B566… Snoo / SNOO Pons clone", url: "https://robinhoodchain.blockscout.com/address/0x52B566dF34d709aea103f541cba1b341Ddc04687", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x52B566dF34d709aea103f541cba1b341Ddc04687 name PonsV2LauncherToken is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. token name Snoo symbol SNOO holders_count 4. Flag ca-collision; not this row." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x2ebe1C… Reddit's mascot / SNOO", url: "https://robinhoodchain.blockscout.com/address/0x2ebe1C527691bf3497b6905bd351FD5161792215", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x2ebe1C527691bf3497b6905bd351FD5161792215 name LunchTokenDividend is_contract true is_verified true creator_address_hash 0x6Fda94ACEEDC5a97171469a8873d00fB9983Bb8c. token name Reddit's mascot symbol SNOO holders_count 348. Flag ca-collision; not this row." }
  - { id: R-18, publisher: DexScreener, title: "search q=SNOO", url: "https://api.dexscreener.com/latest/dex/search?q=SNOO", published_at: null, accessed_at: 2026-09-03T05:03:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "robinhood uniswap 0x939C…1E18 SNOO/RDDT liq 141052.03 vol 142438.44 socials reddit r/Snoo; 0x2ebe1C… SNOO/RDDT liq 6453.02 socials x.com/snoocoinrh; 0xa614C13… Snoofi/WETH liq 38471.04; plus additional same-ticker SNOO CAs with lower liquidity. Quote on the 0x939C book is RDDT 0x05b37F…F4C." }
  - { id: R-19, publisher: Reddit, title: "r/Snoo share linked on DexScreener", url: "https://www.reddit.com/r/Snoo/s/OhgwH7HcbL", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23], excerpt: "HTTP 200. Redirect to https://www.reddit.com/r/Snoo/?share_id=bhlOpNEqebep1lFLm6tGz. title Reddit. Preview HTML this pass had no 0x939C string and no SNOO ticker. Flag third-party-link." }
  - { id: R-20, publisher: "@NiksGambles", title: "first $snoo on robinhood tied to $RDDT", url: "https://x.com/NiksGambles/status/2093347653367320777", published_at: 2026-08-28T14:39:07Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Stock pairs are going So here is the first $snoo on robinhood tied to $RDDT 0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18" }
  - { id: R-21, publisher: "@Geistuberallem", title: "$Snoo the Reddit mascot is next", url: "https://x.com/Geistuberallem/status/2095195334745919802", published_at: 2026-09-02T17:01:09Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "The @SpaceX mascot $Asteroid just went parabolic $Snoo the @Reddit mascot is next to run 0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18" }
  - { id: R-22, publisher: "@bamboorootsNFT", title: "Netlify vote URL with SNOO CA", url: "https://x.com/bamboorootsNFT/status/2095313758834888779", published_at: 2026-09-03T00:51:43Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-2], excerpt: "Attention $SNOO Family! YOUR vote matters! Listing ID: 6326 https://robinhood-main-dex-pwb.netlify.app/vote/0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18. Flag copypasta-pattern and third-party-link." }
  - { id: R-23, publisher: "@0xHaruyuki", title: "Aped some SNOO, RDDT pair", url: "https://x.com/0xHaruyuki/status/2088016757826973999", published_at: 2026-08-13T21:36:03Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Aped some SNOO, RDDT pair on Robinhood. 50K 0x939ca34ce2dc5845f4bff8079fc6ccd6ab641e18" }
  - { id: R-24, publisher: "@snoo_robinhood", title: "we're paired with $RDDT", url: "https://x.com/snoo_robinhood/status/2094805089743782122", published_at: 2026-09-01T15:10:27Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-25], excerpt: "Profile Snoo @snoo_robinhood. Bio: The RDDT rockstar on Robinhood. CA : 0x52B566dF34d709aea103f541cba1b341Ddc04687. Post: we're paired with $RDDT. Flag handle-collision and ca-collision versus 0x939C…1E18." }
  - { id: R-25, publisher: "@snoocoinRH", title: "Profile pins mascot SNOO CA", url: "https://x.com/snoocoinRH", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-25], excerpt: "Profile Snoo @snoocoinRH. Bio: Mascot of Reddit, $Snoo on RH with Reddit stock dividends for holders. 0x2ebe1c527691bf3497b6905bd351fd5161792215. Flag handle-collision and ca-collision versus 0x939C…1E18." }
  - { id: R-26, publisher: "@SnoofiOnRH", title: "Profile pins SNOOFI CA", url: "https://x.com/SnoofiOnRH", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-25], excerpt: "Profile Snoofi @SnoofiOnRH. Bio: Official Mascot of Reddit on Robinhood $SNOOFI CA: 0xa614c13b18b5c754b34ff51e4775ab19568e0536. Distinct symbol SNOOFI, not this SNOO row." }
  - { id: R-27, publisher: DexScreener, title: "latest/dex/tokens SNOOFI 0xa614C13…", url: "https://api.dexscreener.com/latest/dex/tokens/0xa614C13b18B5C754B34fF51E4775Ab19568e0536", published_at: null, accessed_at: 2026-09-03T05:14:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "3 robinhood uniswap pairs. Top Snoofi / WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 labels v3 liquidity.usd 38471.04 volume.h24 3820.8. Not an RDDT book. Distinct from this SNOO row." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x939C…1E18?", checked: "DexScreener info.websites [] info.socials Reddit share without CA; Gecko token has no website; X user search SNOO robinhood returned @snoo_robinhood pinning 0x52B566…; @snoocoinRH pinning 0x2ebe1C…; @SnoofiOnRH pinning SNOOFI, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed 0x939C… and a handle that links back" }
  - { priority: P1, question: "What does constructor IPFS bafkreiafp27fdkesqeabrtsf4z4tvtorgljl7pktk5ztebsnssqtowbcuq publish as image or socials?", checked: "create calldata decoded an ipfs:// CID; GET ipfs.io/ipfs/… returned Cloudflare challenge HTML 403, 2026-09-03", next: "retry a public IPFS gateway or Blockscout token metadata if the URI is indexed" }
  - { priority: P1, question: "Does verified DopplerHookInitializer source leave a privileged path on the 5%/95% Lock beneficiaries after durationSeconds 10?", checked: "Lock log beneficiaries copied; FeeScheduleSet durationSeconds 10 startingTime 1785737708; owner() is Airlock, 2026-09-03", next: "read Lock and fee-split modifiers in src/initializers/DopplerHookInitializer.sol on the explorer" }
  - { priority: P2, question: "Should aggregators treat Gecko dex id bankr-robinhood as the venue versus Uniswap v4 PoolManager 0x8366…0951?", checked: "DexScreener labels v4 uniswap; create tx Initialize is on PoolManager; Gecko pool relationships.dex.id bankr-robinhood, 2026-09-03", next: "keep the on-chain PoolManager as venue; do not file Bankr as this token's pad" }
---

# SNOO — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 SNOO/RDDT pool. Traders buy and sell SNOO against Reddit • Robinhood Token. Token owner() is Airlock; no official site or handle bidirectionally linked 0x939C… this pass.

Themes: memecoin, stock-paired:RDDT, rwa

## Why it matters

The SNOO/RDDT Uniswap v4 book printed about $142k of 24h volume on DexScreener at collection, with the quote token the Robinhood RDDT Stock Token. Several same-ticker SNOO contracts and a WETH-paired SNOOFI sit on the same chain, so the 0x939C… CA is the identity.

## What could go wrong

USD liquidity figures on the SNOO/RDDT book count both sides, and the quote side is RDDT, not USDG. Same-ticker SNOO contracts and netlify vote/claim URLs wrapping this CA are in circulation. No official handle was located.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xdF65…C23e at 2026-08-03T06:15:08Z minted Snoo / SNOO supply 1e9*1e18 into Uniswap v4 poolId 0x93ba…bb48 quoted against RDDT. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() returns Airlock. [verified R-2 R-3 R-4]

DopplerHookInitializer 0x4e34…a544 initialized the pool on PoolManager 0x8366…0951 and locked beneficiaries 5% / 95%. FeeScheduleSet durationSeconds was 10. Secondary SNOO/ETH books on DexScreener have far less liquidity than the RDDT book. [verified R-3 R-5 R-14]

## Control and security

Token owner() is Airlock 0xeb7C…0862. Launcher EOA 0xdF65…C23e has no code. Lock beneficiaries are 0x21E2…7A66 at 5% and that EOA at 95%. [verified R-3 R-4 R-11]

DopplerERC20V1, factory, Airlock, and hook are partially verified on Blockscout; LongLauncher is fully verified (src/LongLauncher.sol, compiler v0.8.26). Token verification is proxy-shell-only. No audit report URL was located this pass. [verified R-10 R-13] [unknown]

## Team and provenance

No official domain or X handle bidirectionally linked 0x939C… this pass. DexScreener info.websites is empty; info.socials is a Reddit r/Snoo share with no CA in the public preview. @snoo_robinhood, @snoocoinRH, and @SnoofiOnRH pin other contracts. Flag unconfirmed-official, third-party-link, handle-collision, and ca-collision. [claim R-5 R-19 R-24 R-25 R-26]

## Economics and activity

SNOO/RDDT Uniswap v4 24h volume is 142438.44 USD and liquidity.usd is 141052.03 at 2026-09-03T05:08:00Z from the DexScreener token endpoint. fdv/marketCap is 270332. [claim R-5]

Gecko same pool: volume_usd.h24 133003.79, reserve_in_usd 147791.11, fdv_usd 277437.99. Gecko token volume_usd.h24 is 136029.37 across all pools, not the RDDT book. Gecko dex id is bankr-robinhood; on-chain venue is Uniswap v4 PoolManager. Blockscout holders_count 617. Pair created 2026-08-03T06:15:08Z. [claim R-1 R-6 R-7]

## Material risks

- Same-ticker SNOO contracts 0x52B566… (Pons, 4 holders) and 0x2ebe1C… (Reddit's mascot) plus SNOOFI 0xa614C13… (WETH book) are live on 4663. [verified R-15 R-16 R-17]
- Pool USD reserve is SNOO plus RDDT, not a USDG or WETH backstop. [claim R-5 R-6]
- No official handle or domain this pass; Reddit share and netlify vote/claim URLs are third-party-link / copypasta-pattern. [claim R-19 R-22]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/hook/RDDT and the create tx, RPC name/symbol/owner/getCode, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, Reddit preview, and the X posts and profiles above were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-8]
- Numbers: 142438.44 is the DexScreener SNOO/RDDT pair 24h volume, not the 136029.37 Gecko token all-pools figure. Liquidity 141052.03 is that pair. Gecko reserve 147791.11 is the same pool, different aggregator. [claim R-5 R-6 R-7]
- Adversarial: the strongest contrary reading is that @snoo_robinhood or @snoocoinRH is this token's official handle, or that SNOOFI is the same asset. Those bios pin 0x52B566…, 0x2ebe1C…, and 0xa614C13…; bytecode lengths differ; SNOOFI's top book is WETH. [inference R-16 R-17 R-24 R-25 R-26]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no snoo / SNOO / SNOOFI / 0x939C…1E18. GET packet path on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, hook, RDDT, SNOOFI, Pons SNOO, mascot SNOO, create 0x5ff0…9215, LaunchCreated / Initialize / Lock logs, holders, counters. RPC eth_getCode/eth_call with Chrome UA at block 53157261.
- Aggregators: DexScreener latest/dex/tokens and search q=SNOO; token-pairs/v1/robinhood; Gecko token first GET 200 then pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RDDT hit. RDDT is a rail.
- Social: X keyword SNOO RDDT / CA; user search SNOO robinhood, snoocoinrh; Reddit r/Snoo share.
- Failed: IPFS CID from create calldata returned 403 challenge HTML; Reddit preview had no CA; no official handle bidirectional to 0x939C….
- Time: collection 2026-09-03T05:02Z–2026-09-03T05:20Z.
