---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: nanami
name: NANAMI
packet_tier: seed
as_of: 2026-09-03T04:54:00Z
prior_packet: null
supersedes: null
owned_slugs: [nanami]
allowed_paths:
  - research/inbox/packets/nanami/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: NANAMI
  aliases: ["Windows chan", "Madobe Nanami"]
  symbols: [NANAMI]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info null (no info.websites); Gecko token attributes have no website; Blockscout token page lists no homepage; constructor IPFS social_links Website entries are x.com/WindowschanRH and a YouTube URL, not a project domain"
  official_handle: "NULL — constructor IPFS social_links Website is https://x.com/WindowschanRH; DexScreener info.socials absent (info null); @WindowschanRH bio is Windows chan with no CA; the account posted 0x2895ee0AbF…1E18; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, constructor IPFS, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "NANAMI is a graduation token at 0x2895ee0AbF…1E18 created through that LongLauncher.create into a NANAMI/MSFT Uniswap v4 pool; entity_kind token, not protocol"
        - "Packed CLIPPY is a separate LongLauncher DopplerERC20V1 clone at 0x85856F…1E18 (clippyrh.com / @ClippyMSFT), not this CA"
        - "Official surfaces differ: no NANAMI domain this pass versus app.long.xyz / @longdotxyz"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "NANAMI create tx 0xb11d…445a calls LongLauncher, not a Bankr surface; Gecko labels the NANAMI/MSFT pool dex bankr-robinhood because Doppler/Airlock is shared launch infrastructure"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "NANAMI is $NANAMI at 0x2895ee0AbF…1E18 paired to MSFT 0xe932…2e74"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "NANAMI creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a via LongLauncher.create, not PonsV2LaunchFactory"
        - "Packed DIH 0x8A3b…2B63 and VERITY 0x16A49c…7BC6 are Pons v2 MSFT graduations; this CA is LongLauncher / Doppler"
        - "No shared domain, handle, or reproduced address with the PONS token"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "NANAMI is a DopplerERC20V1 clone in a Uniswap v4 NANAMI/MSFT pool with no vault of its own"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in content/census.yaml this pass. Token 0x2895ee0AbF…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-09-02T16:34:59Z minted Windows chan / NANAMI into Uniswap v4 pool 0x8185…4394 quoted against MSFT 0xe932…2e74 (GET /rhj/assets row, Microsoft • Robinhood Token). MSFT is the pair rail, not the subject. Distinct from packed CLIPPY/MSFT 0x85856F…1E18, DIH 0x8A3b…2B63, and VERITY 0x16A49c…7BC6. No official site; @WindowschanRH is unconfirmed-official. [R-1] [R-4] [R-5] [R-7] [R-12] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/WindowschanRH", authenticity: unconfirmed }
  - { kind: other, url: "https://www.youtube.com/watch?v=XBq-FFM5VhM", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", authenticity: unconfirmed }

deployments:
  - label: NANAMI token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-14]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-15]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-17]
  - label: MSFT Microsoft • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 292280, currency: USD, as_of: 2026-09-03T04:50:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18 top pair NANAMI/MSFT volume.h24 (Uniswap v4 pool 0x8185…4394, not all-pools)", class: claim, receipt_ids: [R-7, R-18] }
  - { kind: tvl, value: 34560.79, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2895ee0AbF…1E18 NANAMI/MSFT liquidity.usd (same pool; Gecko reserve_in_usd was negative this pass and is not used)", class: claim, receipt_ids: [R-7, R-18] }
  - { kind: market_cap, value: 36141, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2895ee0AbF…1E18 NANAMI/MSFT fdv and marketCap (Gecko pool fdv_usd 35813.68754; Gecko token fdv_usd 345850 is the USDG dust book, not this pair)", class: claim, receipt_ids: [R-7, R-8] }
  - { kind: holders, value: 131, currency: null, as_of: 2026-09-03T04:48:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32afc36 (53148726). Token 0x2895ee0AbF…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. name Windows chan, symbol NANAMI, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 (Airlock). Factory code 1912 B, impl 13927 B, LongLauncher 5826 B, Airlock 5695 B, MSFT 283 B. Launch EOA 0xb057…127e eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-14, R-15, R-16, R-17], result: "Blockscout api/v2 token 0x2895ee0AbF…1E18 name Windows chan symbol NANAMI holders_count 131 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0xb11d842a…445a. Create tx 2026-09-02T16:34:59Z block 52721354 from 0xb057…127e to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker NANAMI numeraire 0xe932…2e74 poolId 0x8185…4394 deployedAt 1788366899 reservedUntil 1788453299. MSFT name Microsoft • Robinhood Token holders_count 44270." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-18], result: "DexScreener latest/dex/tokens and token-pairs/v1/robinhood: 4 robinhood uniswap pairs. Top NANAMI/MSFT v4 0x8185…4394 quote 0xe932…2e74 Microsoft • Robinhood Token / MSFT liquidity.usd 34560.79 volume.h24 292280 fdv/marketCap 36141 pairCreatedAt 1788366899000 (2026-09-02T16:34:59Z) txns.h24 buys 3161 sells 3463 info null. Secondary NANAMI/ETH and NANAMI/USDG books have liquidity.usd 6.08 / 20.06 / 8.14." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9, R-24], result: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x2895ee0AbF…1E18 HTTP 200. Token price_usd 0.0003458504907 fdv_usd 345850.4907 volume_usd.h24 270920.6312 total_reserve_in_usd 0.0; top_pools lists USDG/WETH dust pools before NANAMI/MSFT. Gecko pool 0x8185…4394 HTTP 200 name NANAMI / MSFT volume_usd.h24 270990.2956 fdv_usd 35813.68754 reserve_in_usd -785.059488704712 dex bankr-robinhood pool_created_at 2026-09-02T16:34:59Z. Negative reserve is not used as TVL." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSFT row tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T04:52:40Z, receipt_ids: [R-13, R-21], result: "GET bafkreigwz6drbu5vuko4pjkabs3qfmtdu3y34mq6xeeid4azkgl55bgt2u.ipfs.dweb.link HTTP 200 JSON name Windows chan description Madobe Nanami also known as Windows chan. social_links Website https://x.com/WindowschanRH and https://www.youtube.com/watch?v=XBq-FFM5VhM fee_receiver 0xb057…127e. YouTube oembed title [ENG SUBBED] Windows 7 Madobe Nanami Commercial." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against MSFT. Create tx 0xb11d…445a from 0xb057…127e minted Windows chan / NANAMI; Airlock took ownership; DopplerHookInitializer locked LP with 5% / 95% beneficiaries; PoolManager initialized poolId 0x8185…4394.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-5, R-14, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Windows chan", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-4, R-5, R-13], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "NANAMI", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; constructor IPFS lists x.com/WindowschanRH; DexScreener info null; bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:52:40Z, receipt_ids: [R-7, R-10, R-11, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSFT 0xe932…2e74 is Microsoft • Robinhood Token; GET rhj/assets (194 assets) has one MSFT row at that address. MSFT is the rail, not the subject. Distinct from packed CLIPPY 0x85856F…1E18 (same LongLauncher / Doppler stack, clippyrh.com / @ClippyMSFT), from packed DIH 0x8A3b…2B63 (Pons v2), and from packed VERITY 0x16A49c…7BC6 (Pons v2).", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-12, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "NANAMI/MSFT Uniswap v4 24h volume 292280 USD and liquidity.usd 34560.79 at 2026-09-03T04:50:00Z (DexScreener pair slice). Gecko same pool volume_usd.h24 270990.2956; Gecko reserve_in_usd negative and unused.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-8, R-18], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener NANAMI/MSFT fdv/marketCap 36141; Gecko pool fdv_usd 35813.68754. Gecko token fdv_usd 345850.49 is the NANAMI/USDG dust book, not the MSFT pair.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-8, R-9, R-24], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 131, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 named Airlock on Blockscout; OwnershipTransferred to Airlock in the create tx. Launch EOA 0xb057…127e has no code.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-6, R-14, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5e16 (5%) and launch EOA 0xb057…127e 9.5e17 (95%). IPFS fee_receiver 0xb057…127e.", class: verified, observed_at: 2026-09-03T04:52:40Z, receipt_ids: [R-4, R-13, R-14], reproduction_ids: [REP-2, REP-6], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x8185…4394", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-7, R-14, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; the create path is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-3, R-4, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, constructor IPFS, or X search this pass", class: unknown, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: @WindowschanRH posted the CA; constructor IPFS lists that handle as Website; DexScreener info null; bio has no CA", class: claim, observed_at: 2026-09-03T04:52:40Z, receipt_ids: [R-7, R-10, R-11, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko NANAMI/MSFT fdv_usd 35813.68754; DexScreener fdv/marketCap 36141. Gecko market_cap_usd null on the pool.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info null; Gecko token has no website field; IPFS Website entries are an X URL and a YouTube URL", class: claim, observed_at: 2026-09-03T04:52:40Z, receipt_ids: [R-7, R-9, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "nanami | NANAMI | @WindowschanRH | NULL — discovery token not in census this pass", class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-6, R-17], reproduction_ids: [REP-1], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@WindowschanRH posted hit or miss by Nanami"
    summary: "Account @WindowschanRH posted a video with the caption hit or miss by Nanami."
    occurred_at: 2026-09-03T04:38:00Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: onchain
    title: "DexScreener NANAMI/MSFT 24h volume $292,280, liquidity $34,560"
    summary: "NANAMI/MSFT Uniswap v4 pool 0x8185…4394 volume.h24 292280 liquidity.usd 34560.79 fdv 36141."
    occurred_at: 2026-09-03T04:50:00Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-18]
  - id: EVT-3
    type: company
    title: "@WindowschanRH posted Calling the board before the print"
    summary: "Account @WindowschanRH posted Calling the board before the print and a beat for $MSFT."
    occurred_at: 2026-09-03T02:32:00Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-4
    type: ct
    title: "@Timsic posted NANAMI Windows chan paired with MSFT"
    summary: "@Timsic posted NANAMI Windows chan paired with $MSFT and CA 0x2895ee0abf…1e18."
    occurred_at: 2026-09-03T00:02:20Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [identity.symbol, deployment.address]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: company
    title: "@WindowschanRH posted launch on longdotxyz vs MSFT"
    summary: "Post: launched on @longdotxyz, $NANAMI paired with $MSFT, CA 0x2895ee0abf…1e18."
    occurred_at: 2026-09-02T23:08:06Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [product.mechanism, identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-6
    type: company
    title: "@WindowschanRH posted the NANAMI contract address"
    summary: "@WindowschanRH posted 0x2895ee0abf6b3ddbbc8d1c6fa52e42d226421e18 two minutes after create."
    occurred_at: 2026-09-02T16:37:10Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [deployment.address, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-7
    type: onchain
    title: "LongLauncher.create minted Windows chan / NANAMI vs MSFT"
    summary: "Tx 0xb11d…445a from 0xb057…127e at 2026-09-02T16:34:59Z; LaunchCreated ticker NANAMI."
    occurred_at: 2026-09-02T16:34:59Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-14]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x2895ee0AbF…1E18 Windows chan / NANAMI", url: "https://robinhoodchain.blockscout.com/address/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-25], excerpt: "hash 0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18 name Windows chan is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol NANAMI decimals 18 total_supply 1000000000000000000000000000 holders_count 131 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb11d842a2e2c50934c0019bada01e4edb3ec285ef16b10694d071d39a282445a." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-25], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0xb11d842a…445a", url: "https://robinhoodchain.blockscout.com/tx/0xb11d842a2e2c50934c0019bada01e4edb3ec285ef16b10694d071d39a282445a", published_at: 2026-09-02T16:34:59Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-14, CLM-15, CLM-16, EVT-7], excerpt: "timestamp 2026-09-02T16:34:59.000000Z status ok result success block_number 52721354 from 0xb057E1249452DD32e9AD9E34Da9CbfB1b532127e (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes supply 1e27, numeraire 0xe93237C50D904957Cf27E7B1133b510C669c2e74, token factory 0x1B37…b69a, name Windows chan, symbol NANAMI." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on NANAMI", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-26], excerpt: "eth_blockNumber 0x32afc36 (53148726). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Windows chan symbol NANAMI decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode factory, impl, LongLauncher, Airlock, MSFT, launcher EOA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-13, CLM-21, CLM-22, CLM-25, CLM-26], excerpt: "block 53148726. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. DopplerERC20V1 0x3Be8…C599 code 13927 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock 0xeb7C…0862 code 5695 B. MSFT 0xe932…2e74 code 283 B. Launch EOA 0xb057…127e code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens NANAMI", url: "https://api.dexscreener.com/latest/dex/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-9, CLM-10, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-2], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x818583e7056932a717e6ae5545943ed88ac8ff9c3ba86f2edd77e8d7bbca4394 labels v4 base Windows chan / NANAMI quote Microsoft • Robinhood Token / MSFT 0xe93237C50D…2e74 liquidity.usd 34560.79 volume.h24 292280 fdv 36141 marketCap 36141 pairCreatedAt 1788366899000 txns.h24 buys 3161 sells 3463. info null." }
  - { id: R-8, publisher: GeckoTerminal, title: "NANAMI/MSFT Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x818583e7056932a717e6ae5545943ed88ac8ff9c3ba86f2edd77e8d7bbca4394", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-11, CLM-20], excerpt: "GET HTTP 200. name NANAMI / MSFT pool_created_at 2026-09-02T16:34:59Z fdv_usd 35813.68754 market_cap_usd null volume_usd.h24 270990.295597426 reserve_in_usd -785.059488704712. dex bankr-robinhood quote robinhood_0xe93237c50d904957cf27e7b1133b510c669c2e74. Negative reserve is not used as TVL." }
  - { id: R-9, publisher: GeckoTerminal, title: "Windows chan token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-23], excerpt: "GET HTTP 200. name Windows chan symbol NANAMI decimals 18 total_supply 1e27 price_usd 0.0003458504907 fdv_usd 345850.490743872 market_cap_usd null volume_usd.h24 270920.631203398 total_reserve_in_usd 0.0. coingecko_coin_id null. top_pools first id robinhood_0x6f6c…0673 (NANAMI/USDG)." }
  - { id: R-10, publisher: "@WindowschanRH", title: "Nanami Madobe aka Windows chan launched on longdotxyz", url: "https://x.com/WindowschanRH/status/2095287682742018254", published_at: 2026-09-02T23:08:06Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-5], excerpt: "Nanami Madobe aka Windows chan, the Windows 7 mascot from Japan is now a memestock! Launched on @longdotxyz , the token $NANAMI is paired with $MSFT , Microsoft Corp's tokenized stock on @RobinhoodApp . Trading happens against the stock, so the liquidity follows Microsoft. 0x2895ee0abf6b3ddbbc8d1c6fa52e42d226421e18" }
  - { id: R-11, publisher: "@WindowschanRH", title: "NANAMI contract address post", url: "https://x.com/WindowschanRH/status/2095189299792679381", published_at: 2026-09-02T16:37:10Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-6], excerpt: "0x2895ee0abf6b3ddbbc8d1c6fa52e42d226421e18" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One MSFT row: tokenSymbol MSFT tokenName Microsoft • Robinhood Token deployments contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: R-13, publisher: IPFS, title: "Constructor metadata bafkreigwz6drbu5…gt2u", url: "https://bafkreigwz6drbu5vuko4pjkabs3qfmtdu3y34mq6xeeid4azkgl55bgt2u.ipfs.dweb.link/", published_at: null, accessed_at: 2026-09-03T04:52:40Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-8, CLM-14, CLM-19, CLM-23], excerpt: "name Windows chan description Madobe Nanami also known as Windows chan. social_links [{label Website url https://x.com/WindowschanRH},{label Website url https://www.youtube.com/watch?v=XBq-FFM5VhM}] fee_receiver 0xb057E1249452DD32e9AD9E34Da9CbfB1b532127e vesting_recipients zero address amount 0." }
  - { id: R-14, publisher: Blockscout, title: "LaunchCreated and Initialize logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0xb11d842a2e2c50934c0019bada01e4edb3ec285ef16b10694d071d39a282445a", published_at: 2026-09-02T16:34:59Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-13, CLM-14, CLM-15, EVT-7], excerpt: "LaunchCreated asset 0x2895ee0AbF…1E18 numeraire 0xe932…2e74 launcher 0xb057…127e normalizedTicker NANAMI deployedAt 1788366899 reservedUntil 1788453299. PoolManager Initialize id 0x818583e7…4394 currency0 NANAMI currency1 MSFT. OwnershipTransferred newOwner Airlock 0xeb7C…0862. Lock beneficiaries 0x21E2…7A66 5e16 and 0xb057…127e 9.5e17." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol. Source header TOKENIZED STOCKS / ON CHAIN and AIRLOCK ROUTER / 24H TICKER LOCK." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT", url: "https://robinhoodchain.blockscout.com/address/0xe93237C50D904957Cf27E7B1133b510C669c2e74", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "hash 0xe93237C50D904957Cf27E7B1133b510C669c2e74 name BeaconProxy is_contract true is_verified true. token name Microsoft • Robinhood Token symbol MSFT decimals 18 total_supply 3748038000000000000000 holders_count 44270." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-26], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9." }
  - { id: R-18, publisher: DexScreener, title: "token-pairs/v1/robinhood NANAMI", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, EVT-2], excerpt: "HTTP 200. First object pairAddress 0x818583e7…4394 NANAMI/MSFT liquidity.usd 34560.79 volume.h24 292280 fdv 36141 marketCap 36141 pairCreatedAt 1788366899000 info null. Pooled base 758840810 NANAMI quote 14.2495 MSFT." }
  - { id: R-19, publisher: "@Timsic", title: "NANAMI Windows chan paired with $MSFT", url: "https://x.com/Timsic/status/2095301328180236407", published_at: 2026-09-03T00:02:20Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "NANAMI Windows chan paired with $MSFT 0x2895ee0abf6b3ddbbc8d1c6fa52e42d226421e18" }
  - { id: R-20, publisher: "@hfzaqil", title: "$NANAMI is back pair with $MSFT", url: "https://x.com/hfzaqil/status/2095190420368306513", published_at: 2026-09-02T16:41:37Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: confirmed, supports: [], excerpt: "$NANAMI is back pair with $MSFT 0x2895ee0abf6b3ddbbc8d1c6fa52e42d226421e18 quoting @WindowschanRH Windows 7 anime commercial post." }
  - { id: R-21, publisher: YouTube, title: "[ENG SUBBED] Windows 7 Madobe Nanami Commercial", url: "https://www.youtube.com/watch?v=XBq-FFM5VhM", published_at: null, accessed_at: 2026-09-03T04:52:40Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [], excerpt: "oembed title [ENG SUBBED] Windows 7 Madobe Nanami Commercial author_name Neural Net Otaku. Linked from constructor IPFS social_links as Website." }
  - { id: R-22, publisher: "@WindowschanRH", title: "hit or miss by Nanami", url: "https://x.com/WindowschanRH/status/2095370702304301340", published_at: 2026-09-03T04:38:00Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-1], excerpt: "hit or miss by Nanami" }
  - { id: R-23, publisher: "@WindowschanRH", title: "Calling the board before the print", url: "https://x.com/WindowschanRH/status/2095338993424707690", published_at: 2026-09-03T02:32:00Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Calling the board before the print. Going to keep it reasonable. Just need a verbal on the $50 and a beat for $MSFT ." }
  - { id: R-24, publisher: GeckoTerminal, title: "NANAMI token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18/pools", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11], excerpt: "Four pools. NANAMI/USDG reserve_in_usd 95.9816 fdv_usd 345850.4907. NANAMI/MSFT reserve_in_usd -785.059488704712 volume_usd.h24 270990.295597426 fdv_usd 35813.68754. Dust WETH books 11.9977 and 8.1584." }
  - { id: R-25, publisher: Blockscout, title: "api/v2/search q=NANAMI", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=NANAMI", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24], excerpt: "First item address_hash 0x2895ee0AbF6B3DdbBC8D1C6fA52e42d226421E18 name Windows chan symbol NANAMI. Additional Windows chan / NANAMI tickers at 0xeAE59bfC…7FC2 holders 7, 0xC9fF27D4…9b01 holders 5, and others. Kento Nanami 0x8804c757…6b03 is a different name. This packet owns only 0x2895ee0AbF…1E18." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x2895ee0AbF…1E18 (bio or domain embedding the CA)?", checked: "DexScreener info null; Gecko token has no website; constructor IPFS lists x.com/WindowschanRH; @WindowschanRH bio is Windows chan with no CA; the account posted the CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; re-read @WindowschanRH bio if a CA is added" }
  - { priority: P1, question: "Do the other Blockscout NANAMI tickers (0xeAE59…, 0xC9fF27…, 0xB218FC…) share a deployer with 0x2895ee0AbF…1E18?", checked: "api/v2/search q=NANAMI returned multiple Windows chan / NANAMI ERC-20s; assigned CA has holders_count 131 versus 7/5/4 on the copies, 2026-09-03", next: "open creator_address_hash on each extra ticker and record as ticker-only if a later packet is assigned" }
  - { priority: P1, question: "Does verified DopplerERC20V1 / Airlock leave a privileged path after owner() is Airlock?", checked: "owner() Airlock; Lock beneficiaries 5%/95%; launch EOA code 0x; DopplerERC20V1 is_partially_verified, 2026-09-03", next: "read owner-gated setters in src/tokens/DopplerERC20V1.sol on the explorer" }
  - { priority: P2, question: "Does app.long.xyz/tokens/0x2895ee0AbF…1E18 render NANAMI without Cloudflare challenge?", checked: "GET app.long.xyz/tokens/0x2895ee0AbF…1E18 returned Cloudflare 403 HTML this pass; @WindowschanRH posted launched on @longdotxyz, 2026-09-03", next: "open the token page from a browser session and copy any CA cross-link" }
  - { priority: P2, question: "Why does Gecko report NANAMI/MSFT reserve_in_usd negative while DexScreener liquidity.usd is 34560.79?", checked: "Gecko pool HTTP 200 reserve_in_usd -785.059; DexScreener liquidity.usd 34560.79 pooled 758840810 NANAMI + 14.2495 MSFT, 2026-09-03", next: "re-fetch Gecko pool; keep DexScreener as the TVL receipt until reserve is non-negative" }
---

# NANAMI — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MSFT. LongLauncher.create deploys Windows chan (NANAMI) through DopplerERC20V1Factory and seeds the NANAMI/MSFT book. Traders buy and sell NANAMI against Microsoft • Robinhood Token. No official site was located this pass; @WindowschanRH posted the contract.

Themes: memecoin, stock-paired:MSFT, rwa

## Why it matters

NANAMI is another LongLauncher graduation onto the MSFT rail, distinct from packed CLIPPY (same pad, different CA and official surfaces) and from packed DIH / VERITY (Pons v2 on the same rail). DexScreener printed about $292k of 24h volume on the NANAMI/MSFT Uniswap v4 book at collection, with MSFT confirmed in GET /rhj/assets.

## What could go wrong

USD liquidity on the NANAMI/MSFT book counts both sides, and the quote side is MSFT, not USDG. Gecko's token fdv follows a dust NANAMI/USDG pool, not the MSFT book. No official site was located; @WindowschanRH is unconfirmed-official. Several other Windows chan / NANAMI tickers exist on Blockscout.

## Product and mechanics

LongLauncher 0x22e9…eeED create from 0xb057…127e at 2026-09-02T16:34:59Z minted Windows chan / NANAMI supply 1e9*1e18 via DopplerERC20V1Factory 0x1B37…b69a (EIP-1167 impl 0x3Be8…C599). LaunchCreated normalizedTicker NANAMI, numeraire MSFT 0xe932…2e74, poolId 0x8185…4394, reservedUntil 2026-09-03T16:34:59Z. [verified R-4 R-5 R-14]

Airlock 0xeb7C…0862 received OwnershipTransferred and the initial mint. DopplerHookInitializer locked LP with beneficiaries 5% 0x21E2…7A66 and 95% 0xb057…127e. PoolManager 0x8366…0951 is the venue. Secondary NANAMI/ETH and NANAMI/USDG Uniswap v4 books exist on DexScreener with far less liquidity than the MSFT book. [verified R-7 R-14 R-17]

## Control and security

token owner() is Airlock. Launch EOA 0xb057…127e has no code and is the IPFS fee_receiver plus the 95% Lock beneficiary. DopplerERC20V1 and DopplerERC20V1Factory are partially verified (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher source is verified. No audit report URL was located this pass. [verified R-2 R-3 R-5 R-15] [unknown]

## Team and provenance

No official domain was located. DexScreener info is null. Constructor IPFS lists https://x.com/WindowschanRH and a YouTube Windows 7 Madobe Nanami commercial as Website. @WindowschanRH bio is Windows chan with no CA; the account posted 0x2895ee0AbF…1E18 at 16:37:10Z, two minutes after create. Flag unconfirmed-official. [claim R-7 R-11 R-13]

Blockscout search q=NANAMI also lists other Windows chan / NANAMI ERC-20s with holders_count 2–7. This packet owns only 0x2895ee0AbF…1E18 (holders_count 131). [claim R-25]

## Economics and activity

NANAMI/MSFT Uniswap v4 24h volume is 292280 USD and liquidity.usd is 34560.79 at 2026-09-03T04:50:00Z from DexScreener. fdv/marketCap is 36141. Pair created 2026-09-02T16:34:59Z. Blockscout holders_count 131. PoolManager holds about 760M of 1e9 supply. [claim R-1 R-7 R-18]

Gecko pool volume_usd.h24 is 270990.2956 and fdv_usd is 35813.68754. Gecko reserve_in_usd is -785.059 and is not used as TVL. Gecko token fdv_usd 345850.49 / price_usd 0.0003458 is the NANAMI/USDG dust book, not the MSFT pair. [claim R-8 R-9 R-24]

## Material risks

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail; NANAMI is not MSFT. [verified R-12 R-16]
- Pool USD reserve is NANAMI plus MSFT, not a USDG backstop. [claim R-7 R-18]
- Gecko token fdv follows a dust USDG pool; DexScreener MSFT book fdv is 36141. [claim R-7 R-9 R-24]
- No official handle or domain this pass; @WindowschanRH is unconfirmed-official. [claim R-7 R-13]
- Multiple other NANAMI tickers exist on Blockscout. [claim R-25]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/MSFT and create tx logs, RPC name/symbol/owner/getCode, DexScreener tokens and token-pairs, Gecko token/pool/pools (HTTP 200), /rhj/assets, constructor IPFS, YouTube oembed, and the X posts cited were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12 R-13]
- Numbers: 292280 is the DexScreener NANAMI/MSFT pool 24h volume, not Gecko token 270920.63. Liquidity 34560.79 is that pool. Gecko pool volume 270990.30 is the same pair, different aggregator. Gecko token fdv 345850.49 is the USDG dust book. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT, or a Pons v2 MSFT graduation (DIH / VERITY), or an official Microsoft product. CLIPPY is 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. DIH/VERITY are Pons v2 CAs. This CA is LongLauncher Doppler 0x2895ee0AbF…1E18. GET /rhj/assets lists MSFT at 0xe932…2e74 as the rail, not NANAMI. [inference R-1 R-4 R-12]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. GET packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404. Census slug list has no nanami / Windows chan / 0x2895ee0AbF…1E18.
- Explorer: Blockscout Chrome UA api/v2 search q=NANAMI, token, address, impl, factory, LongLauncher, Airlock, MSFT, create tx 0xb11d…445a logs (LaunchCreated, Initialize, Lock, OwnershipTransferred), holders.
- RPC 4663: eth_blockNumber 0x32afc36, eth_getCode, name/symbol/decimals/totalSupply/owner at https://rpc.mainnet.chain.robinhood.com.
- Aggregators: DexScreener latest/dex/tokens and token-pairs/v1/robinhood (SOURCE 3). Gecko first GET HTTP 200 so token, pool, and token/pools were read; Gecko reserve_in_usd negative skipped as TVL.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one MSFT row at 0xe932…2e74.
- Social: X Latest NANAMI MSFT / Windows chan; from:WindowschanRH; CA query; user search WindowschanRH.
- Metadata: constructor IPFS bafkreigwz6…gt2u JSON; YouTube oembed XBq-FFM5VhM.
- Failed: app.long.xyz/tokens/0x2895ee0AbF…1E18 Cloudflare 403; ipfs.io challenge page; cloudflare-ipfs.com NXDOMAIN; DexScreener info null.
- Distinct from packed clippy/dih/verity CAs on the same work branch.
- Time: collection 2026-09-03T04:47Z–2026-09-03T04:54Z.
