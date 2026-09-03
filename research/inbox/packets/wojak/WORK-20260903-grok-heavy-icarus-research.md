---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: wojak
name: WOJAK
packet_tier: seed
as_of: 2026-09-03T05:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [wojak]
allowed_paths:
  - research/inbox/packets/wojak/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: WOJAK
  aliases: [wojak]
  symbols: [WOJAK]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; Gecko token info websites []; app.long.xyz/tokens/0x86d916… returned Cloudflare 403 this pass"
  official_handle: "@WojakLong"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "WOJAK is the ERC-20 at 0x86d916…1e18 created through that launcher; entity_kind token, not protocol"
        - "Official surface claimed this pass is @WojakLong, not @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "WOJAK is wojak / WOJAK at 0x86d916…1e18 paired to RDDT 0x05b37F…F4C"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "WOJAK create tx is LongLauncher.create, not Pons launchAndBuy; in-flight KARMA 0xb1B800…baC3 is the Pons RDDT book, not this row"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "WOJAK is a LongLauncher DopplerERC20V1 clone in a Uniswap v4 WOJAK/RDDT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x86d916…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-02T15:03:30Z minted wojak / WOJAK into Uniswap v4 pool 0x85bbed65…ba70 quoted against RDDT 0x05b37F…F4C. DexScreener WOJAK/RDDT liq 69943.17 vol.h24 313168.01. @WojakLong bio says Paired with RDDT on LONG without the CA. Distinct from in-flight KARMA (Pons 0xb1B800…baC3) and from Wojak 0xaCE55…3c6f (WETH book, wojakrobinhood.com). RDDT is a rail. [R-1] [R-3] [R-4] [R-6] [R-9] [R-16] [R-24]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/WojakLong", authenticity: unconfirmed }
  - { kind: other, url: "https://dexscreener.com/robinhood/0x85bbed65b8e20c2ccf52cec4dcd6aa42d904bc74868e85fd0700e34670b8ba70", authenticity: unconfirmed }

deployments:
  - label: WOJAK token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x86d916F551b8E05240c1Eb14E65F733B6d181e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-2, R-3]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-12]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13]
  - label: RDDT Stock Token (pair quote / create numeraire; rail, not this subject)
    role: token
    address:
      value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-9, R-14]
  - label: "WOJAK ticker collision (Wojak / WETH LaunchToken, not this row)"
    role: token
    address:
      value: "0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-17]

metrics:
  - { kind: volume_24h, value: 313168.01, currency: USD, as_of: 2026-09-03T05:05:00Z, window: 24h, method: "api.dexscreener.com/tokens/v1/robinhood/0x86d916F551b8E05240c1Eb14E65F733B6d181e18 pair 0x85bbed65…ba70 WOJAK/RDDT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 69943.17, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0x86d916F551b8E05240c1Eb14E65F733B6d181e18 pair 0x85bbed65…ba70 WOJAK/RDDT liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 299962.948475396, currency: USD, as_of: 2026-09-03T05:08:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x85bbed65b8e20c2ccf52cec4dcd6aa42d904bc74868e85fd0700e34670b8ba70 volume_usd.h24 (WOJAK/RDDT pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 70823.0795, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x85bbed65…ba70 reserve_in_usd (WOJAK/RDDT pool)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 99027, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0x86d916…1e18 pair 0x85bbed65…ba70 fdv/marketCap", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 158, currency: null, as_of: 2026-09-03T05:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x86d916F551b8E05240c1Eb14E65F733B6d181e18 holders_count", class: claim, receipt_ids: [R-2] }
  - { kind: holders, value: 149, currency: null, as_of: 2026-09-03T03:55:56Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x86d916…1e18/info holders.count", class: claim, receipt_ids: [R-19] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32b1bea (53156842) then 0x32b23fa (53158906). Token 0x86d916…1e18 eth_getCode 44 B prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name wojak, symbol WOJAK, decimals 18, totalSupply 1e27. owner() 0xeb7C0347…0862 Airlock (eth_getCode 5695 B). factory() reverts. Impl code 13927 B. DopplerERC20V1Factory 0x1B37…b69a 1912 B. LongLauncher 0x22e9…eeED 5826 B. Launcher EOA 0x0ec9…D9Da code 0x. RDDT name Reddit • Robinhood Token symbol RDDT. Collision 0xaCE55…3c6f code 4830 B prefix 608060405260043610 name Wojak symbol WOJAK. In-flight KARMA 0xb1B800…baC3 code 3248 B. LongLauncher Karma Points 0x55f9…1e18 code 44 B same EIP-1167 impl." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-4, R-5, R-10, R-11, R-12, R-13, R-14, R-16], result: "Blockscout api/v2 Chrome UA. Token 0x86d916…1e18 name wojak is_contract true is_verified true proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0x32ec5df7…474c implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol WOJAK holders_count 158 total_supply 1e27. Create tx 2026-09-02T15:03:30Z block 52667119 from EOA 0x0ec9…D9Da to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire RDDT 0x05b37F…F4C name wojak symbol WOJAK supply 1e27. PoolManager Initialize id 0x85bbed65…ba70 currency0 RDDT currency1 0x86d916…1e18. LaunchCreated normalizedTicker WOJAK launcher 0x0ec9…D9Da. OwnershipTransferred newOwner Airlock 0xeb7C…0862. Lock beneficiaries 0x0ec9…D9Da 0.95e18 and 0x21E2…7A66 0.05e18. Collision 0xaCE55…3c6f name LaunchToken / Wojak holders_count 1210 creator 0xD9eC…FCcB." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-6, R-7, R-8, R-17, R-18, R-19, R-20], result: "DexScreener tokens/v1/robinhood/0x86d916…1e18 HTTP 200: 1 pair, WOJAK/RDDT v4 0x85bbed65…ba70 quote RDDT 0x05b37F…F4C liquidity.usd 69943.17 volume.h24 313168.01 fdv/marketCap 99027 pairCreatedAt 1788361410000 (2026-09-02T15:03:30Z) info.websites [] info.socials x.com/WojakLong. latest/dex/tokens: 4 robinhood uniswap pairs; RDDT book is the volume/liq leader; secondary ETH books under $300 liq. Gecko first GET search/pools?query=WOJAK&network=robinhood HTTP 200, so Gecko is in this pass. Search row 1 is collision WOJAK/WETH 0xd43499…fd2; row 2 is WOJAK/RDDT 0x85bbed65…ba70. Gecko pool name WOJAK / RDDT pool_created_at 2026-09-02T15:03:30Z volume_usd.h24 299962.948475396 reserve_in_usd 70823.0795 fdv_usd 101003.8357 dex bankr-robinhood. Gecko token volume_usd.h24 300201.13130865 fdv_usd 101003.84 total_reserve_in_usd 45269.51. Gecko info twitter_handle null websites [] holders.count 149. Collision tokens/v1 0xaCE55…3c6f: WOJAK/WETH liq 128941.13 vol 55676.81 fdv 1208196 sites wojakrobinhood.com socials x.com/@wojakrobinhood t.me/wojak_rh." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-9], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token deployments[0] contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008. Zero WOJAK hits." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-15, R-19], result: "DexScreener info.socials pins https://x.com/WojakLong. @WojakLong bio: Paired with RDDT on LONG. WAGMI. Bio and the three Latest posts opened this pass do not embed CA 0x86d916…1e18. Gecko twitter_handle null websites []. Flag unconfirmed-official." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against RDDT 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C. Create tx 0x32ec5df7…474c at 2026-09-02T15:03:30Z. Token owner() is Airlock. factory() reverts. DopplerHookInitializer Lock set 95/5 beneficiaries.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: wojak, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: WOJAK, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x86d916F551b8E05240c1Eb14E65F733B6d181e18", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@WojakLong — DexScreener info.socials pins x.com/WojakLong; bio says Paired with RDDT on LONG without the CA; Gecko twitter_handle null; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote RDDT 0x05b37F…F4C is Reddit • Robinhood Token in GET /rhj/assets (194 assets, 1 RDDT hit, chainId 4663). RDDT is a rail, not this subject. Distinct from in-flight KARMA 0xb1B800…baC3 (Pons v2, 3248 B) and from LongLauncher Karma Points 0x55f9…1e18 (same pad, different ticker row).", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-9, R-14, R-24], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener WOJAK/RDDT Uniswap v4 24h volume 313168.01 USD and liquidity.usd 69943.17 at 2026-09-03T05:05:00Z (pair 0x85bbed65…ba70)", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko pool 0x85bbed65…ba70 volume_usd.h24 299962.948475396 reserve_in_usd 70823.0795 fdv_usd 101003.8357 at 2026-09-03T05:08:00Z", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 158, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-5, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.proxy, value: "EIP-1167 minimal proxy 44 B; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, partially verified file src/tokens/DopplerERC20V1.sol compiler v0.8.26", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is RDDT 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C (Reddit • Robinhood Token); venue is Uniswap v4 pair 0x85bbed65…ba70, Gecko dex id bankr-robinhood. RDDT is a rail, not this profile.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-6, R-7, R-9, R-14], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create tx to LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-11, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, @WojakLong, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener pins @WojakLong; bio does not embed CA 0x86d916…1e18; Gecko twitter_handle null", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 99027. Gecko pool fdv_usd 101003.84. Gecko token total_reserve_in_usd 45269.51 is below the RDDT-book reserve 70823.08.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-9, R-14], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko info websites []; app.long.xyz token page Cloudflare 403 this pass", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "wojak | WOJAK | @WojakLong | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: Wojak LaunchToken 0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f (4830 B, holders 1210, DexScreener WOJAK/WETH liq 128941.13 vol.h24 55676.81 fdv 1208196, sites wojakrobinhood.com, socials @wojakrobinhood). Canonical CA is 0x86d916…1e18 because assignment lead and DexScreener WOJAK/RDDT book pin it. Other same-ticker 4663 rows include Wojak in Hood 0xC1Ca…011c (WETH, wojackinhood.site) and Wojak 0x37383C…8f6B.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-16, R-17, R-18, R-23], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-26, field: other, value: "Distinct from in-flight karma: KARMA 0xb1B800…baC3 is PonsV2LauncherToken bytecode (3248 B) Reddit Founder Cat / Karma paired to the same RDDT rail. This row is LongLauncher DopplerERC20V1 0x86d916…1e18 name wojak / WOJAK.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-3, R-4, R-24], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x0ec9Bdc33Cf1355a15890A5cEbDD4DE58b03D9Da 0.95e18 (create from / LaunchCreated launcher) and 0x21E2ce70511e4FE542a97708e89520471DAa7A66 0.05e18 (171 B code)", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-28, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-29, field: "account.@WojakLong.role", value: project, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@WojakLong.slug", value: wojak, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: "account.@WojakLong.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-6, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: other, value: "copypasta-pattern / third-party-link: @soljackalNFT posted robinhood-main-dex-nqf.netlify.app/vote/0x86d916…1e18 as a Robinhood Top 100 Leaderboard vote. Domain is netlify, not robinhood.com.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: product.mechanism, value: "Gecko attributes pool 0x85bbed65…ba70 to dex id bankr-robinhood and names it WOJAK / RDDT", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-34, field: economics.metric, value: 149, class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-35, field: product.mechanism, value: "DexScreener labels pool 0x85bbed65…ba70 Uniswap v4 dexId uniswap", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11, CLM-20]
    material_effect: "WOJAK/RDDT 24h volume is 313168.01 on DexScreener and 299962.95 on Gecko; liquidity is 69943.17 vs reserve_in_usd 70823.08; fdv is 99027 vs 101003.84. Gecko token total_reserve_in_usd 45269.51 is not the RDDT-book figure."
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-33, CLM-35]
    material_effect: "DexScreener labels pool 0x85bbed65…ba70 Uniswap v4; Gecko attributes the same id to bankr-robinhood"
    status: open
    resolution: null
  - id: CON-3
    field: economics.metric
    claim_ids: [CLM-12, CLM-34]
    material_effect: "WOJAK holders are 158 on Blockscout api/v2/tokens and 149 on Gecko token info holders.count last_updated 2026-09-03T03:55:56Z"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher create minted wojak / WOJAK against RDDT"
    summary: "Tx 0x32ec5df7…474c from 0x0ec9…D9Da at 2026-09-02T15:03:30Z block 52667119; LaunchCreated normalizedTicker WOJAK; PoolManager Initialize id 0x85bbed65…ba70."
    occurred_at: 2026-09-02T15:03:30Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-2
    type: onchain
    title: "DexScreener WOJAK/RDDT 24h volume $313k, liquidity $69.9k"
    summary: "DexScreener tokens/v1 pair 0x85bbed65…ba70 volume.h24 313168.01 liquidity.usd 69943.17 fdv 99027. Gecko same pool volume_usd.h24 299962.95 reserve_in_usd 70823.08 dex bankr-robinhood."
    occurred_at: 2026-09-03T05:08:00Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-3
    type: ct
    title: "@WojakLong posted a WOJAK airdrop to thought leaders"
    summary: "@WojakLong bio Paired with RDDT on LONG. Post: airdrop $WOJAK to several individuals. DexScreener socials pin the handle; bio has no CA."
    occurred_at: 2026-09-03T03:24:04Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "Netlify vote page used CA 0x86d916…1e18"
    summary: "@soljackalNFT posted robinhood-main-dex-nqf.netlify.app/vote/0x86d916… as a Robinhood Top 100 Leaderboard vote. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-03T04:10:48Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-5
    type: onchain
    title: "Same-ticker Wojak 0xaCE55…3c6f is a WETH LaunchToken"
    summary: "Blockscout name LaunchToken / Wojak holders 1210. DexScreener WOJAK/WETH liq 128941 vol 55677 fdv 1.21M, wojakrobinhood.com / @wojakrobinhood. Flag ca-collision."
    occurred_at: 2026-06-30T19:36:49Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [identity.name, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16, R-17, R-18]
  - id: EVT-6
    type: ct
    title: "@WojakLong posted a BONER purchase on FOMO"
    summary: "Post: purchased some $BONER; tagged @bonercoinlong. Same handle DexScreener pins for the RDDT book."
    occurred_at: 2026-09-02T18:38:21Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0x86d916…1e18 wojak", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x86d916F551b8E05240c1Eb14E65F733B6d181e18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-14, CLM-16, CLM-22, CLM-24, CLM-28], excerpt: "hash 0x86d916F551b8E05240c1Eb14E65F733B6d181e18 is_contract true is_verified true name wojak proxy_type eip1167 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x32ec5df704cd5849a9db933b62d4d716b12eae381e24303e97f66332bd2a474c implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-2, publisher: Blockscout, title: "Token 0x86d916…1e18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x86d916F551b8E05240c1Eb14E65F733B6d181e18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12, CLM-28], excerpt: "address_hash 0x86d916F551b8E05240c1Eb14E65F733B6d181e18 name wojak symbol WOJAK decimals 18 type ERC-20 holders_count 158 total_supply 1000000000000000000000000000 circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner on WOJAK", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-9, CLM-13, CLM-14, CLM-17, CLM-21, CLM-22, CLM-26], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b1bea then 0x32b23fa. Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name wojak symbol WOJAK decimals 18 totalSupply 1e27 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 factory() reverts. Airlock 5695 B. RDDT name Reddit • Robinhood Token. Collision 0xaCE55 4830 B. KARMA 0xb1B800 3248 B." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x32ec5df7…474c", url: "https://robinhoodchain.blockscout.com/tx/0x32ec5df704cd5849a9db933b62d4d716b12eae381e24303e97f66332bd2a474c", published_at: 2026-09-02T15:03:30Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-5, CLM-6, CLM-16, EVT-1], excerpt: "timestamp 2026-09-02T15:03:30.000000Z block_number 52667119 from 0x0ec9Bdc33Cf1355a15890A5cEbDD4DE58b03D9Da (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create status ok. decoded numeraire 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C token factory 0x1B37…b69a name wojak symbol WOJAK supply 1e27." }
  - { id: R-5, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0x32ec5df704cd5849a9db933b62d4d716b12eae381e24303e97f66332bd2a474c", published_at: 2026-09-02T15:03:30Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-27, EVT-1], excerpt: "OwnershipTransferred newOwner Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. PoolManager Initialize id 0x85bbed65b8e20c2ccf52cec4dcd6aa42d904bc74868e85fd0700e34670b8ba70 currency0 RDDT currency1 0x86d916…1e18. LaunchCreated normalizedTicker WOJAK launcher 0x0ec9…D9Da. Lock beneficiaries 0x0ec9…D9Da 0.95e18 and 0x21E2…7A66 0.05e18." }
  - { id: R-6, publisher: DexScreener, title: "tokens/v1 WOJAK 0x86d916…1e18", url: "https://api.dexscreener.com/tokens/v1/robinhood/0x86d916F551b8E05240c1Eb14E65F733B6d181e18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, CLM-30, CLM-31, CLM-35, EVT-2], excerpt: "1 robinhood uniswap pair. pairAddress 0x85bbed65b8e20c2ccf52cec4dcd6aa42d904bc74868e85fd0700e34670b8ba70 labels v4 base wojak / WOJAK quote Reddit • Robinhood Token / RDDT 0x05b37Fb53A…F4C liquidity.usd 69943.17 volume.h24 313168.01 fdv 99027 marketCap 99027 pairCreatedAt 1788361410000. info.websites [] info.socials x.com/WojakLong." }
  - { id: R-7, publisher: GeckoTerminal, title: "WOJAK/RDDT pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x85bbed65b8e20c2ccf52cec4dcd6aa42d904bc74868e85fd0700e34670b8ba70", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-15, CLM-20, CLM-33, EVT-2], excerpt: "name WOJAK / RDDT pool_created_at 2026-09-02T15:03:30Z fdv_usd 101003.8357 market_cap_usd null volume_usd.h24 299962.948475396 reserve_in_usd 70823.0795. dex bankr-robinhood. First Gecko GET search/pools HTTP 200 this pass." }
  - { id: R-8, publisher: GeckoTerminal, title: "wojak token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x86d916F551b8E05240c1Eb14E65F733B6d181e18", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "name wojak symbol WOJAK decimals 18 total_supply 1e27 price_usd 0.0001010038357 fdv_usd 101003.835656874 market_cap_usd null volume_usd.h24 300201.13130865 total_reserve_in_usd 45269.5113. coingecko_coin_id null. Top pool 0x85bbed65…ba70." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. One RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token deployments contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008. Zero WOJAK hits." }
  - { id: R-10, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-22], excerpt: "api/v2/smart-contracts: name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true is_fully_verified false file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-11, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16, EVT-1], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED is_contract true is_verified true name LongLauncher. api/v2/smart-contracts file_path src/LongLauncher.sol is_fully_verified true compiler v0.8.26. This address is the create tx to." }
  - { id: R-12, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is_contract true is_verified true name DopplerERC20V1Factory. file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true. This address is creator_address_hash on WOJAK." }
  - { id: R-13, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 is_contract true is_verified true name Airlock. This address is owner() on WOJAK. RPC eth_getCode 5695 B." }
  - { id: R-14, publisher: Blockscout, title: "Token 0x05b37F…F4C RDDT", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "address_hash 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C name Reddit • Robinhood Token symbol RDDT decimals 18 total_supply 9401839000000000000000 holders_count 17082. RDDT is the pair rail, not this profile." }
  - { id: R-15, publisher: "@WojakLong", title: "WOJAK airdrop to thought leaders", url: "https://x.com/WojakLong/status/2095352097290211636", published_at: 2026-09-03T03:24:04Z, accessed_at: 2026-09-03T05:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-29, CLM-30, CLM-31, EVT-3], excerpt: "Profile Wojak @WojakLong. Bio: Paired with RDDT on LONG. WAGMI. Post: Fellow Robinhood ecosystem participants. I have elected to airdrop $WOJAK to several individuals who I believe possess significant bagworking potential. This is called incentive alignment." }
  - { id: R-16, publisher: Blockscout, title: "Collision token 0xaCE55…3c6f Wojak", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "hash 0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f is_contract true is_verified true name LaunchToken proxy_type null creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB. token name Wojak symbol WOJAK holders_count 1210 total_supply 1e27. Distinct CA from 0x86d916…1e18." }
  - { id: R-17, publisher: DexScreener, title: "tokens/v1 collision 0xaCE55…3c6f", url: "https://api.dexscreener.com/tokens/v1/robinhood/0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "WOJAK/WETH pair 0xD43499Bbe3150f7e888a0C5F08d6214C34E38fd2 liquidity.usd 128941.13 volume.h24 55676.81 fdv 1208196. info.websites wojakrobinhood.com info.socials x.com/@wojakrobinhood t.me/wojak_rh. Quote is WETH, not RDDT." }
  - { id: R-18, publisher: GeckoTerminal, title: "search/pools WOJAK robinhood", url: "https://api.geckoterminal.com/api/v2/search/pools?query=WOJAK&network=robinhood", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "HTTP 200 n 20. Row 1 robinhood_0xd43499bbe3150f7e888a0c5f08d6214c34e38fd2 WOJAK / WETH 1% 2026-06-30T19:36:49Z vol 54654.59 reserve 129237.55 fdv 1208534.97. Row 2 robinhood_0x85bbed65…ba70 WOJAK / RDDT 2026-09-02T15:03:30Z vol 299962.95 reserve 70823.08 fdv 101003.84." }
  - { id: R-19, publisher: GeckoTerminal, title: "wojak token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x86d916F551b8E05240c1Eb14E65F733B6d181e18/info", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-31, CLM-34], excerpt: "websites [] twitter_handle null telegram_handle null description null holders.count 149 last_updated 2026-09-03T03:55:56Z. gt_score 36.67." }
  - { id: R-20, publisher: DexScreener, title: "latest/dex/tokens 0x86d916…1e18", url: "https://api.dexscreener.com/latest/dex/tokens/0x86d916F551b8E05240c1Eb14E65F733B6d181e18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "4 robinhood uniswap pairs. Top WOJAK/RDDT 0x85bbed65…ba70 liq 69943.17 vol 313168.01. Secondary ETH books 0xc837b7bd…1717e liq 293.89, 0x2dcaf041…7598f liq 99.7, 0x6952e5f2…c3579 liq 9.92." }
  - { id: R-21, publisher: "@WojakLong", title: "Purchased some $BONER", url: "https://x.com/WojakLong/status/2095219797445517780", published_at: 2026-09-02T18:38:21Z, accessed_at: 2026-09-03T05:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "Fellow LONG ecosystem participants. I have purchased some $BONER on my FOMO cryptocurrency wallet. @bonercoinlong, I look forward to exploring potential synergies." }
  - { id: R-22, publisher: "@soljackalNFT", title: "Robinhood Top 100 vote page for 0x86d916…", url: "https://x.com/soljackalNFT/status/2095363860555354270", published_at: 2026-09-03T04:10:48Z, accessed_at: 2026-09-03T05:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-32, EVT-4], excerpt: "Attention $WOJAK Family! Listing ID: 4226. https://robinhood-main-dex-nqf.netlify.app/vote/0x86d916F551b8E05240c1Eb14E65F733B6d181e18 Flag copypasta-pattern third-party-link: netlify, not robinhood.com." }
  - { id: R-23, publisher: Blockscout, title: "Wojak in Hood 0xC1Ca…011c", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xC1Ca67e6389F0DF0175629C573F07f4AE306011c", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "address_hash 0xC1Ca67e6389F0DF0175629C573F07f4AE306011c name Wojak in Hood symbol WOJAK holders_count 1982 total_supply 1e27. DexScreener tokens/v1 WOJAK/WETH liq 5070.25 vol 84.66 sites wojackinhood.site socials x.com/wojakinhoodRH. Distinct CA from 0x86d916…1e18." }
  - { id: R-24, publisher: Robinhood Chain RPC, title: "eth_getCode on in-flight KARMA 0xb1B800…baC3", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "Token 0xb1B800835f93d40D43e3B3467494b9155364baC3 eth_getCode 3248 B prefix 608060405260043610, not EIP-1167. LongLauncher Karma Points 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 code 44 B same impl 0x3be8b97f…c599. Distinct from WOJAK 0x86d916…1e18." }

gaps:
  - { priority: P0, question: "Does @WojakLong or a LONG surface bidirectionally pin CA 0x86d916…1e18?", checked: "DexScreener info.socials x.com/WojakLong; bio Paired with RDDT on LONG without CA; Gecko twitter_handle null; app.long.xyz/tokens/0x86d916 Cloudflare 403; three Latest posts from @WojakLong have no CA, 2026-09-03", next: "re-read DexScreener after a Claim Profile and any @longdotxyz post that tags @WojakLong with the CA" }
  - { priority: P0, question: "Should aggregators keep 0xaCE55…3c6f (WETH, wojakrobinhood.com) as a separate Wojak row from this RDDT LongLauncher token?", checked: "Blockscout LaunchToken holders 1210; DexScreener WETH liq 128941 fdv 1.21M vs this RDDT book liq 69943 fdv 99027; Gecko search ranks the WETH pool first, 2026-09-03", next: "keep ca-collision on this packet; do not merge handles @WojakLong and @wojakrobinhood" }
  - { priority: P1, question: "Why does Gecko attribute Uniswap v4 pool 0x85bbed65…ba70 to dex id bankr-robinhood?", checked: "DexScreener labels [v4] dexId uniswap; Gecko dex bankr-robinhood; same pattern as SPACEHOOD/SPCX, 2026-09-03", next: "compare PoolManager hook 0x4e346895…a544 against Bankr launchType doppler rows" }
  - { priority: P1, question: "Who can claim the 95% Lock beneficiary 0x0ec9…D9Da versus Airlock owner()?", checked: "create from and LaunchCreated launcher are that EOA with eth_getCode 0x; token owner() is Airlock; 5% beneficiary 0x21E2…7A66 has 171 B code, 2026-09-03", next: "eth_call the fee-claim path on verified DopplerHookInitializer / LongLauncher source" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as used by LongLauncher on 4663?", checked: "Blockscout, DexScreener, Gecko info, @WojakLong, DopplerERC20V1 source header, 2026-09-03", next: "auditor report index for Doppler / long.xyz and a matching commit" }
---

# WOJAK — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against RDDT, the Reddit Robinhood Stock Token at 0x05b37F…F4C. Traders buy and sell WOJAK on that book. It is not the RDDT stock token, not in-flight KARMA (Pons Reddit Founder Cat at 0xb1B800…baC3), and not the older Wojak LaunchToken at 0xaCE55…3c6f.

Themes: memecoin, stock-paired:RDDT, LONG pad

## Why it matters

WOJAK is a LONG-launched token that prices a memecoin in RDDT instead of ETH or USDG. The same quote rail is used by in-flight KARMA at a different pad and CA, so ticker-plus-RDDT is not identity. Census 49 has no wojak row. DexScreener printed about $313k of 24h volume on the WOJAK/RDDT book at collection.

## What could go wrong

USD liquidity on the WOJAK/RDDT book counts both sides. Same-ticker Wojak rows on 4663 include a larger WETH book at 0xaCE55…3c6f with wojakrobinhood.com. @WojakLong is pinned on DexScreener but the bio does not embed this CA. Gecko names the pool bankr-robinhood while DexScreener labels it Uniswap v4.

## Product and mechanics

LongLauncher 0x22e9…eeED create from EOA 0x0ec9…D9Da at 2026-09-02T15:03:30Z minted wojak / WOJAK supply 1e9*1e18 as an EIP-1167 DopplerERC20V1 clone. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. PoolManager Initialize id 0x85bbed65…ba70 currency0 RDDT currency1 0x86d916…1e18. LaunchCreated normalizedTicker WOJAK. [verified R-1 R-4 R-5]

factory() on the token reverts. owner() returns Airlock 0xeb7C…0862. DopplerHookInitializer Lock set 95% to the launcher EOA and 5% to 0x21E2…7A66. Secondary ETH books on DexScreener have far less liquidity than the RDDT book. [verified R-3 R-5 R-6 R-20]

## Control and security

Token owner() is Airlock. The create-from EOA has no code. LongLauncher source is fully verified (src/LongLauncher.sol). DopplerERC20V1 and DopplerERC20V1Factory are partially verified. No audit report URL was located this pass. [verified R-3 R-10 R-11] [unknown]

## Team and provenance

DexScreener info.socials pins @WojakLong. Bio says Paired with RDDT on LONG and does not embed CA 0x86d916…1e18. Gecko twitter_handle is null. Flag unconfirmed-official. [claim R-6 R-15 R-19]

@soljackalNFT posted a netlify vote URL that embeds this CA. Flag copypasta-pattern and third-party-link. [claim R-22]

## Economics and activity

DexScreener WOJAK/RDDT Uniswap v4 24h volume is 313168.01 USD and liquidity.usd is 69943.17 at 2026-09-03T05:05:00Z. fdv/marketCap is 99027. Pair created 2026-09-02T15:03:30Z. [claim R-6]

Gecko same pool: volume_usd.h24 299962.95 reserve_in_usd 70823.08 fdv_usd 101003.84 dex bankr-robinhood. Gecko token volume_usd.h24 300201.13 and total_reserve_in_usd 45269.51 (all pools, not the RDDT book). [claim R-7 R-8]

Blockscout holders_count 158. Gecko info holders.count 149 at 2026-09-03T03:55:56Z. [claim R-2 R-19]

## Material risks

- Quote token RDDT 0x05b37F…F4C is a Robinhood Stock Token rail, not this subject. [verified R-9 R-14]
- Pool USD reserve is WOJAK plus RDDT, not a USDG or WETH backstop. [claim R-6 R-7]
- Same-ticker ca-collision with Wojak 0xaCE55…3c6f (WETH, wojakrobinhood.com) and Wojak in Hood 0xC1Ca…011c. [verified R-16 R-17 R-23]
- Distinct from in-flight KARMA 0xb1B800…baC3 on the same RDDT rail. [verified R-24]
- @WojakLong is unconfirmed-official; bio has no CA. [claim R-15 R-19]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/Airlock/LongLauncher/RDDT/collision, create tx and logs, RPC name/symbol/owner/getCode, DexScreener tokens/v1 and latest/dex/tokens, Gecko search/pool/token/info (first GET 200), /rhj/assets, @WojakLong, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-6 R-7 R-9]
- Numbers: 313168.01 is the DexScreener WOJAK/RDDT pool 24h volume, not Gecko 299962.95. Reserve 69943.17 is DexScreener; 70823.08 is Gecko that pool; 45269.51 is Gecko token all-pools. Holders 158 is Blockscout, not Gecko 149. [claim R-2 R-6 R-7 R-8 R-19]
- Adversarial: the strongest contrary reading is that 0xaCE55…3c6f / @wojakrobinhood is the canonical Robinhood Wojak and this RDDT book is a copy, or that this row is in-flight KARMA because both pair to RDDT. Different CAs, pads (LongLauncher vs Pons vs LaunchToken), and quote assets argue against collapse. [inference R-4 R-16 R-24]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no wojak / WOJAK / 0x86d916…1e18. GET packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before write.
- Explorer: Blockscout api/v2 Chrome UA token, address, impl, factory, Airlock, LongLauncher, RDDT, create 0x32ec5df7…474c logs, collision 0xaCE55 and 0xC1Ca. RPC eth_getCode/eth_call Chrome UA at blocks 53156842–53158906.
- Aggregators: DexScreener tokens/v1, latest/dex/tokens, search q=WOJAK. Gecko first GET search/pools HTTP 200 so Gecko is in this pass; pool, token, token/info.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RDDT, 0 WOJAK.
- Social: X keyword Latest WOJAK RDDT; from:WojakLong; user search WojakLong / WOJAK robinhood.
- Failed: app.long.xyz/tokens/0x86d916 Cloudflare 403; ipfs.io CID in create bytes returned challenge HTML; from:WojakLong CA query returned no posts; Blockscout search q=0x86d916F551b8 empty (full address required).
- Skipped: Gecko would have been skipped on non-200; first GET was 200.
- Time: collection 2026-09-03T05:00Z–2026-09-03T05:20Z.
