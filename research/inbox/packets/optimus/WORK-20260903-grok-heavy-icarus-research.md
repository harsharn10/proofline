---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: optimus
name: OPTIMUS
packet_tier: seed
as_of: 2026-09-03T03:48:00Z
prior_packet: null
supersedes: null
owned_slugs: [optimus]
allowed_paths:
  - research/inbox/packets/optimus/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: OPTIMUS
  aliases: ["Optimus Hood"]
  symbols: [OPTIMUS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG token page app.long.xyz/tokens/0xb5d553… not a project domain; Gecko token info websites []; census LONG already owns app.long.xyz"
  official_handle: "NULL — Gecko token info twitter_handle null; DexScreener info.socials lists x.com/OptimusHoodTSLA and t.me/optimushoodportal; @OptimusHoodTSLA bio contains CA 0xb5d553…1e18; flag unconfirmed-official. Distinct from @Optimus_RH / optimustracker.ai"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "OPTIMUS is the ERC-20 at 0xB5D553…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; DexScreener websites is the LONG token page, which census LONG already owns"
    - slug: doggie
      signals: [other]
      contrary_signals:
        - "Packed doggie is Doggie Mode / DOGGIE at 0xa9eF…1e18, Uniswap v4 DOGGIE/TSLA pair 0x141b…f3f8, site doggiemode.com / @DoggieMode"
        - "This OPTIMUS is Optimus Hood at 0xB5D553…1E18, Uniswap v4 OPTIMUS/TSLA pair 0xef34…d4c3"
        - "Same TSLA rail 0x322F…3b2d and same LongLauncher; different CA, name, pair id, and surfaces"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "OPTIMUS is 0xB5D553…1E18 paired to TSLA 0x322F…3b2d; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "OPTIMUS is a LongLauncher DopplerERC20V1 clone, not a vault factory"
        - "No shared domain, handle, or reproduced address"
    - slug: earn-protocol
      signals: [other]
      contrary_signals:
        - "Census EARN is earnonhood.com / @EARNONHOOD; Omnipool 0x00e7…38A6 lists OPTIMUS among AI, BONER, MOO, SPACEHOOD"
        - "That post does not publish CA 0xB5D553…1E18; EARN is the pool venue, not this token"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xB5D553…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Optimus Hood / OPTIMUS into Uniswap v4 pool 0xef34…d4c3 quoted against Tesla • Robinhood Token TSLA 0x322F…3b2d. Distinct from packed doggie, from DOGECOIN/TSLA 0x51d3…1E18, from LONGDOG/TSLA 0xfe7E…1e18, and from tracker OPTIMUS 0x0fF9…e2B2. TSLA is the rail. No bidirectional project domain or handle this pass. [R-1] [R-2] [R-3] [R-4] [R-7] [R-8] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0xb5d553cc06f9b3569731b7a74fc269b939841e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/OptimusHoodTSLA", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/optimushoodportal", authenticity: unconfirmed }

deployments:
  - label: OPTIMUS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xB5D553Cc06F9b3569731b7a74fc269B939841E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:42:00Z
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
      seen: 2026-09-03T03:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-12]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13]
  - label: TSLA quote (create numeraire / pair quote / Robinhood Stock Token rail)
    role: token
    address:
      value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-15, R-18]

metrics:
  - { kind: tvl, value: 194884.92, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB5D553…1E18 pair 0xef34…d4c3 OPTIMUS/TSLA Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 252520.77, currency: USD, as_of: 2026-09-03T03:41:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xef34…d4c3 reserve_in_usd (OPTIMUS/TSLA pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1027046.48, currency: USD, as_of: 2026-09-03T03:40:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xB5D553…1E18 pair 0xef34…d4c3 OPTIMUS/TSLA volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1007956.18, currency: USD, as_of: 2026-09-03T03:41:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xef34…d4c3 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1014802.25, currency: USD, as_of: 2026-09-03T03:41:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb5d553…1e18 volume_usd.h24 (all pools, not the TSLA book)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 596447, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB5D553…1E18 pair 0xef34…d4c3 OPTIMUS/TSLA fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 984, currency: null, as_of: 2026-09-03T03:42:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xB5D553…1E18 holders_count", class: claim, receipt_ids: [R-2] }
  - { kind: holders, value: 898, currency: null, as_of: 2026-09-03T02:48:58Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb5d553…1e18/info holders.count", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:43:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a68a1 (53110945). Token 0xB5D553…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name Optimus Hood; symbol OPTIMUS; decimals 18; totalSupply 999480621790040220302218111; owner() 0xeb7c0347…0862 (Airlock, 5695 bytes code). EIP-1967 implementation slot zero. TSLA 0x322F…3b2d name Tesla • Robinhood Token symbol TSLA decimals 18 totalSupply 8476202e18 code 283 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2, R-4, R-10, R-11, R-12, R-19], result: "Blockscout api/v2: token is_contract true is_verified true name Optimus Hood proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0x1d097040…8d71 implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol OPTIMUS holders_count 984 total_supply 999480621790040220302218111. Tx timestamp 2026-07-19T09:30:05Z block 13734214 from EOA 0x33Eb5e5d…bbF4 to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire 0x322F0929…3b2d token factory 0x1B37…b69a name Optimus Hood symbol OPTIMUS supply 1e27. LaunchCreated normalizedTicker OPTIMUS pool id 0xef34…d4c3." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-8, R-9, R-14, R-16, R-17], result: "DexScreener latest/dex/tokens/0xB5D553…1E18: 3 robinhood uniswap pairs. Top OPTIMUS/TSLA v4 0xef34…d4c3 quote TSLA 0x322F…3b2d liquidity.usd 194884.92 volume.h24 1027046.48 fdv/marketCap 596447 pairCreatedAt 1784453405000 info.websites app.long.xyz/tokens/0xb5d553… info.socials x.com/OptimusHoodTSLA t.me/optimushoodportal. Gecko pool 0xef34…d4c3 name OPTIMUS / TSLA pool_created_at 2026-07-19T09:30:05Z reserve_in_usd 252520.77 volume_usd.h24 1007956.18 fdv_usd 649644.87 dex bankr-robinhood. Gecko token fdv_usd 649555.56 volume_usd.h24 1014802.25. Gecko info websites [] twitter_handle null holders.count 898. Distinct DexScreener search hits: DOGECOIN/TSLA 0x51d3…1E18, LONGDOG/TSLA 0xfe7E…1e18, tracker OPTIMUS 0x0fF9…e2B2." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-18], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one TSLA hit tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014. TSLA is the rail, not this token." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-7, R-14, R-20, R-21, R-22], result: "DexScreener websites the LONG token page and socials @OptimusHoodTSLA / t.me/optimushoodportal. Gecko info twitter_handle null websites []. @OptimusHoodTSLA bio contains CA 0xb5d553…1e18 and posted Only Official CA 0xB5D553…1E18. t.me/optimushoodportal og:title Optimus Hood Portal, 25 subscribers, no contract in the public preview. app.long.xyz/tokens/0xb5d553… Cloudflare-blocked on curl; web_fetch returned SPA Loading token details / Token on LONG. No bidirectional project domain." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d (Tesla • Robinhood Token)", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Optimus Hood", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "OPTIMUS", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xB5D553Cc06F9b3569731b7a74fc269B939841E18", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — Gecko twitter_handle null; DexScreener socials x.com/OptimusHoodTSLA; bio contains the CA; flag unconfirmed-official. Distinct from @Optimus_RH", class: claim, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-7, R-14, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-7, R-8, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Created via LongLauncher.create 2026-07-19T09:30:05Z at 0x22e99278308B393ea1260859B181AD7E78f5eeED; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; create from EOA 0x33Eb5e5dD655F70d61834508060eA899AF53bbF4, which is also the 95% Lock beneficiary", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed doggie DOGGIE 0xa9eF…1e18 pair 0x141b…f3f8; from DOGECOIN 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 / TSLA pair 0x4c02…; from LONGDOG 0xfe7E4b4850979BA7920ce786493B7371761F1e18 / TSLA pair 0x9b66…; and from tracker Optimus 0x0fF9072a1EAD154d92C2d2Fef16AFba6028Ce2B2 (optimustracker.ai / @Optimus_RH, ETH-quoted). Same TSLA rail, different CAs.", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-16, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary book OPTIMUS/TSLA Uniswap v4 pair 0xef3422f03f45e33527e9837a30328c36368f0d5b10455d4098760ba75c18d4c3 quote 0x322F…3b2d; DexScreener also lists two OPTIMUS/USDG v4 books with far less liquidity", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener OPTIMUS/TSLA Uniswap v4 liquidity.usd 194884.92 volume.h24 1027046.48 fdv/marketCap 596447", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko pool 0xef34…d4c3 reserve_in_usd 252520.77 volume_usd.h24 1007956.18 fdv_usd 649644.87 dex bankr-robinhood", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 984, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 898, class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d, a Robinhood Stock Token rail in GET /rhj/assets (194 assets, one TSLA row, chainId 4663). Venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xef34…d4c3", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-3, R-4, R-15, R-18, R-19], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-3, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified file src/tokens/DopplerERC20V1.sol; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x33Eb5e5d…bbF4 95% and 0xEDeAa06E…eDa8 5%; create from is the 95% address", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Gecko attributes pool 0xef34…d4c3 to dex id bankr-robinhood; DexScreener labels the same id Uniswap v4 dexId uniswap", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko token info, the LONG token page fetch, @OptimusHoodTSLA, Telegram preview, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener websites is the LONG pad token page; Gecko info websites []", class: claim, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@OptimusHoodTSLA.role", value: project, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@OptimusHoodTSLA.slug", value: optimus, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@OptimusHoodTSLA.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-7, R-14, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "third-party-link: t.me/optimushoodportal og:title Optimus Hood Portal, 25 subscribers, no contract in the preview; @OptimusHoodTSLA posted the invite. Flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-21, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: candidate, value: "optimus | OPTIMUS | @OptimusHoodTSLA | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-3, R-15, R-18], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-31, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-32, field: identity.alias, value: "Optimus Hood", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "OPTIMUS/TSLA liquidity is $194,884.92 on DexScreener and $252,520.77 on Gecko reserve_in_usd; DexScreener fdv 596447 vs Gecko pool fdv_usd 649644.87"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-10, CLM-21]
    material_effect: "DexScreener labels pool 0xef34…d4c3 Uniswap v4; Gecko attributes the same id to bankr-robinhood"
    status: open
    resolution: null
  - id: CON-3
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "OPTIMUS holders are 984 on Blockscout and 898 on Gecko token info"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher create minted Optimus Hood / OPTIMUS against TSLA"
    summary: "Tx 0x1d09…8d71 from 0x33Eb…bbF4 at 2026-07-19T09:30:05Z; LaunchCreated pool id 0xef34…d4c3 numeraire TSLA 0x322F…3b2d."
    occurred_at: 2026-07-19T09:30:05Z
    observed_at: 2026-09-03T03:42:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-19]
  - id: EVT-2
    type: onchain
    title: "Gecko OPTIMUS/TSLA 24h volume ~$1.01M, reserve $252.5k"
    summary: "Gecko pool 0xef34…d4c3 volume_usd.h24 1007956 reserve_in_usd 252521 fdv_usd 649645. DexScreener same pair liq 194885 vol 1027046."
    occurred_at: 2026-09-03T03:41:00Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-3
    type: ct
    title: "@OptimusHoodTSLA posted Only Official CA"
    summary: "@OptimusHoodTSLA posted Only Official CA 0xB5D553Cc06F9b3569731b7a74fc269B939841E18. Bio already contains the same CA."
    occurred_at: 2026-08-31T20:24:01Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@OptimusHoodTSLA posted t.me/optimushoodportal"
    summary: "@OptimusHoodTSLA posted come join our Telegram with https://t.me/optimushoodportal. Group title Optimus Hood Portal, 25 subscribers."
    occurred_at: 2026-09-01T07:51:25Z
    observed_at: 2026-09-03T03:46:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21, R-22]
  - id: EVT-5
    type: ct
    title: "@EARNONHOOD posted STOCK MEMES Omnipool including OPTIMUS"
    summary: "@EARNONHOOD posted Omnipool 0x00e7…38A6 for AI, BONER, MOO, SPACEHOOD and OPTIMUS. Post does not embed CA 0xB5D553…1E18."
    occurred_at: 2026-09-02T14:03:03Z
    observed_at: 2026-09-03T03:46:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-6
    type: ct
    title: "@orionmaximalist posted the OPTIMUS CA"
    summary: "@orionmaximalist posted If you like MOO then you will like OPTIMUS also and CA 0xB5D553…1E18."
    occurred_at: 2026-09-02T21:37:47Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-24]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xB5D553…1E18 Optimus Hood", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xB5D553Cc06F9b3569731b7a74fc269B939841E18", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-17, CLM-20, CLM-28, CLM-32], excerpt: "hash 0xB5D553Cc06F9b3569731b7a74fc269B939841E18 is_contract true is_verified true name Optimus Hood proxy_type eip1167 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x1d09704018521c5d80592c2309ceefafe89488b32c9da710238b717784508d71 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xB5D553…1E18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xB5D553Cc06F9b3569731b7a74fc269B939841E18", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-20, CLM-32], excerpt: "name Optimus Hood symbol OPTIMUS decimals 18 type ERC-20 holders_count 984 total_supply 999480621790040220302218111 circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner at block 53110945", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-16, CLM-17, CLM-19, CLM-29, CLM-30, CLM-32], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a68a1. Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name Optimus Hood symbol OPTIMUS decimals 18 totalSupply 999480621790040220302218111 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 owner code 5695 B. EIP-1967 slot zero. TSLA name Tesla • Robinhood Token symbol TSLA." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0x1d097040…8d71", url: "https://robinhoodchain.blockscout.com/tx/0x1d09704018521c5d80592c2309ceefafe89488b32c9da710238b717784508d71", published_at: 2026-07-19T09:30:05Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-6, CLM-8, CLM-18, CLM-31, EVT-1], excerpt: "timestamp 2026-07-19T09:30:05.000000Z block_number 13734214 from 0x33Eb5e5dD655F70d61834508060eA899AF53bbF4 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create status ok. decoded numeraire 0x322F0929c4625eD5bAd873c95208D54E1c003b2d token factory 0x1B37…b69a name Optimus Hood symbol OPTIMUS supply 1e27." }
  - { id: R-5, publisher: LONG, title: "$OPTIMUS token page (SPA / Cloudflare)", url: "https://app.long.xyz/tokens/0xb5d553cc06f9b3569731b7a74fc269b939841e18", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-23], excerpt: "curl returned Cloudflare Attention Required Ray ID a351c4eaec57a245. web_fetch body: Loading token details... Token on LONG. DexScreener info.websites repeats this URL as Website and Token on LONG." }
  - { id: R-6, publisher: GeckoTerminal, title: "OPTIMUS/TSLA pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xef3422f03f45e33527e9837a30328c36368f0d5b10455d4098760ba75c18d4c3", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-21], excerpt: "title OPTIMUS/TSLA - Optimus Hood Price on Bankr (Robinhood) | GeckoTerminal." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens OPTIMUS Hood", url: "https://api.dexscreener.com/latest/dex/tokens/0xB5D553Cc06F9b3569731b7a74fc269B939841E18", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-9, CLM-10, CLM-11, CLM-19, CLM-21, CLM-23, CLM-24, CLM-25, CLM-26, CLM-28, EVT-2], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0xef3422f03f45e33527e9837a30328c36368f0d5b10455d4098760ba75c18d4c3 labels v4 base Optimus Hood / OPTIMUS quote Tesla • Robinhood Token / TSLA 0x322F…3b2d liquidity.usd 194884.92 volume.h24 1027046.48 fdv 596447 marketCap 596447 pairCreatedAt 1784453405000. info.websites app.long.xyz/tokens/0xb5d553… socials x.com/OptimusHoodTSLA t.me/optimushoodportal." }
  - { id: R-8, publisher: GeckoTerminal, title: "OPTIMUS/TSLA Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xef3422f03f45e33527e9837a30328c36368f0d5b10455d4098760ba75c18d4c3", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-12, CLM-21, EVT-2], excerpt: "name OPTIMUS / TSLA pool_created_at 2026-07-19T09:30:05Z fdv_usd 649644.8668 market_cap_usd null volume_usd.h24 1007956.17958358 reserve_in_usd 252520.7731. dex bankr-robinhood quote robinhood_0x322f0929c4625ed5bad873c95208d54e1c003b2d." }
  - { id: R-9, publisher: GeckoTerminal, title: "Optimus Hood token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb5d553cc06f9b3569731b7a74fc269b939841e18", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "name Optimus Hood symbol OPTIMUS decimals 18 total_supply 1e27 price_usd 0.0006495555645 fdv_usd 649555.564471308 market_cap_usd null volume_usd.h24 1014802.25234326 total_reserve_in_usd 159082.47. coingecko_coin_id null. Top pool 0xef34…d4c3." }
  - { id: R-10, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17, CLM-30], excerpt: "api/v2/smart-contracts: name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-11, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-31, EVT-1], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED is_contract true is_verified true name LongLauncher creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. smart-contracts file_path src/LongLauncher.sol compiler v0.8.26 verified_at 2026-07-14T11:23:57Z." }
  - { id: R-12, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is_contract true is_verified true name DopplerERC20V1Factory creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. This address is creator_address_hash on OPTIMUS." }
  - { id: R-13, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 is_contract true is_verified true name Airlock. smart-contracts file_path src/Airlock.sol is_partially_verified true compiler v0.8.26. This address is owner() on OPTIMUS." }
  - { id: R-14, publisher: GeckoTerminal, title: "Optimus Hood token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb5d553cc06f9b3569731b7a74fc269b939841e18/info", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-14, CLM-23, CLM-26], excerpt: "websites [] twitter_handle null telegram_handle null description null holders.count 898 last_updated 2026-09-03T02:48:58Z gt_verified false categories []." }
  - { id: R-15, publisher: Blockscout, title: "TSLA token 0x322F…3b2d", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x322F0929c4625eD5bAd873c95208D54E1c003b2d", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-29], excerpt: "address_hash 0x322F0929c4625eD5bAd873c95208D54E1c003b2d name Tesla • Robinhood Token symbol TSLA decimals 18 holders_count 51118 total_supply 8476202000000000000000 type ERC-20. Address is_verified true name BeaconProxy proxy_type eip1967_beacon implementation Stock 0xb35490d6…C5aE2." }
  - { id: R-16, publisher: DexScreener, title: "DOGECOIN and LONGDOG TSLA books", url: "https://api.dexscreener.com/latest/dex/search?q=DOGECOIN%20TSLA", published_at: null, accessed_at: 2026-09-03T03:44:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "DOGECOIN 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 / TSLA pair 0x4c023aad373f280d… liq 79486.5 vol 1473006.94. LONGDOG 0xfe7E4b4850979BA7920ce786493B7371761F1e18 / TSLA pair 0x9b6604eeffbad3b2… liq 156098.54 vol 346548.42. Distinct bases from 0xB5D553…1E18." }
  - { id: R-17, publisher: DexScreener, title: "tracker Optimus 0x0fF9…e2B2", url: "https://api.dexscreener.com/latest/dex/tokens/0x0fF9072a1EAD154d92C2d2Fef16AFba6028Ce2B2", published_at: null, accessed_at: 2026-09-03T03:44:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-9], excerpt: "base 0x0fF9072a1EAD154d92C2d2Fef16AFba6028Ce2B2 name Optimus symbol OPTIMUS. Top pair OPTIMUS/ETH v4 liq 205973.37 vol 2946212.76 fdv 7360940. info.websites https://optimustracker.ai/ socials x.com/Optimus_RH t.me/OptimusRobinhood. Different CA from 0xB5D553…1E18." }
  - { id: R-18, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-15, CLM-29], excerpt: "HTTP 200. assets length 194. One TSLA row: tokenSymbol TSLA tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014." }
  - { id: R-19, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x1d09704018521c5d80592c2309ceefafe89488b32c9da710238b717784508d71", published_at: 2026-07-19T09:30:05Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-15, CLM-18, EVT-1], excerpt: "PoolManager Initialize id 0xef3422f03f45e33527e9837a30328c36368f0d5b10455d4098760ba75c18d4c3 currency0 TSLA currency1 OPTIMUS. Lock beneficiaries 0x33Eb5e5d…bbF4 95% and 0xEDeAa06E…eDa8 5%. LaunchCreated asset 0xB5D553…1E18 numeraire 0x322F…3b2d launcher 0x33Eb…bbF4 normalizedTicker OPTIMUS." }
  - { id: R-20, publisher: "@OptimusHoodTSLA", title: "Only Official CA", url: "https://x.com/OptimusHoodTSLA/status/2094521614352175539", published_at: 2026-08-31T20:24:01Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-24, CLM-25, CLM-26, EVT-3], excerpt: "Profile: Optimus Hood @OptimusHoodTSLA. Bio: The $OPTIMUS Hood on LONG | Paired with Tesla | CTO 0xb5d553cc06f9b3569731b7a74fc269b939841e18. Post: Only Official CA 0xB5D553Cc06F9b3569731b7a74fc269B939841E18 Dont fall for scams." }
  - { id: R-21, publisher: "@OptimusHoodTSLA", title: "Telegram invite", url: "https://x.com/OptimusHoodTSLA/status/2094694600875126829", published_at: 2026-09-01T07:51:25Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-4], excerpt: "Hand jobs available, come join... our Telegram. https://t.me/optimushoodportal" }
  - { id: R-22, publisher: Telegram, title: "t.me/optimushoodportal", url: "https://t.me/optimushoodportal", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-4], excerpt: "HTTP 200. og:title Optimus Hood Portal. og:description You can view and join @optimushoodportal right away. tgme_page_title Optimus Hood Portal. tgme_page_extra 25 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-23, publisher: "@EARNONHOOD", title: "STOCK MEMES Omnipool live", url: "https://x.com/EARNONHOOD/status/2095150513520005297", published_at: 2026-09-02T14:03:03Z, accessed_at: 2026-09-03T03:46:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "A new Omnipool is live for the 5 largest memes paired with stocks on Robinhood. $AI, $BONER, $MOO, $SPACEHOOD, $OPTIMUS. Provide liquidity to all of them in a single pool. https://earnonhood.com/omni/pools/0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6" }
  - { id: R-24, publisher: "@orionmaximalist", title: "If you like MOO then you will like OPTIMUS", url: "https://x.com/orionmaximalist/status/2095264951203971133", published_at: 2026-09-02T21:37:47Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "If you like MOO then you will like OPTIMUS also 0xB5D553Cc06F9b3569731b7a74fc269B939841E18" }

gaps:
  - { priority: P0, question: "Does any surface bidirectionally confirm @OptimusHoodTSLA as the official handle for 0xB5D553…1E18?", checked: "DexScreener info.socials lists the handle; Gecko twitter_handle null; LONG token page Cloudflare/SPA this pass; bio and 31 Aug post contain the CA; @Optimus_RH is a different CA, 2026-09-03", next: "open the LONG Social Links field if the SPA renders; re-read DexScreener after a Claim Profile" }
  - { priority: P1, question: "Why do DexScreener and Gecko disagree on OPTIMUS/TSLA reserve (~$195k vs ~$253k) and venue (uniswap v4 vs bankr-robinhood)?", checked: "DexScreener liquidity.usd 194884.92 labels v4; Gecko reserve_in_usd 252520.77 dex bankr-robinhood, 2026-09-03", next: "compare PoolManager liquidity vs Gecko reserve formula used on other LONG TSLA books" }
  - { priority: P1, question: "Does t.me/optimushoodportal pin CA 0xB5D553…1E18 or a site that cross-links?", checked: "public preview og:title Optimus Hood Portal, 25 subscribers, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as deployed at 0x3Be8…C599?", checked: "DexScreener, Gecko, LONG SPA, @OptimusHoodTSLA, Telegram preview, Blockscout source header, 2026-09-03", next: "LONG litepaper / Doppler docs if they name an auditor" }
---

# OPTIMUS — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell Optimus Hood (OPTIMUS) on that book. TSLA is the rail. This token is not the Tesla stock token, not packed doggie, not DOGECOIN/TSLA, and not LONGDOG/TSLA.

Themes: memecoin, stock-paired:TSLA, LONG pad

## Why it matters

OPTIMUS is a LONG-launched token that prices a memecoin in tokenized Tesla instead of ETH or USDG. Several other OPTIMUS tickers and several other TSLA-quoted memecoins exist on the same chain, so ticker-only pairing is not identity. Census 49 has no optimus row. DexScreener printed about $1.03M of 24h volume on the OPTIMUS/TSLA book at collection.

## What could go wrong

USD liquidity on the OPTIMUS/TSLA book counts both sides, and aggregators disagree on the reserve. Gecko attributes the same pool id to bankr-robinhood. A different Optimus at 0x0fF9…e2B2 (optimustracker.ai / @Optimus_RH) quotes ETH, not TSLA. No bidirectional project domain was located.

## Product and mechanics

LongLauncher.create on 2026-07-19T09:30:05Z minted Optimus Hood as an EIP-1167 DopplerERC20V1 clone with supply 1e9×1e18 and numeraire TSLA 0x322F…3b2d. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() is not on this clone; owner() is Airlock. [verified R-3 R-4 R-19]

DexScreener labels the primary book Uniswap v4 OPTIMUS/TSLA pair 0xef34…d4c3. Secondary OPTIMUS/USDG books exist with hundreds of dollars of liquidity versus ~$195k on the TSLA book. Gecko attributes the same pool id to bankr-robinhood. [verified R-7 R-8]

## Control and security

owner() returns Airlock 0xeb7C…0862. Create-time Lock beneficiaries are 0x33Eb…bbF4 at 95% (the create sender) and 0xEDeA…eDa8 at 5%. [verified R-3 R-13 R-19]

DopplerERC20V1 is verified at src/tokens/DopplerERC20V1.sol (compiler v0.8.26, partial). LongLauncher source is verified at src/LongLauncher.sol. No audit report URL was located this pass. [verified R-10 R-11] [unknown]

## Team and provenance

No project domain. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. @OptimusHoodTSLA bio contains CA 0xb5d553…1e18 and posted it as Only Official CA; the handle is unconfirmed-official. t.me/optimushoodportal titles Optimus Hood Portal with 25 subscribers and no contract in the public preview; flag third-party-link. Distinct from @Optimus_RH / optimustracker.ai. [claim R-7 R-14 R-20 R-22]

## Economics and activity

DexScreener OPTIMUS/TSLA Uniswap v4 liquidity $194,884.92, 24h volume $1,027,046.48, market cap $596,447 at 2026-09-03T03:40Z. Gecko same pool reserve $252,520.77, 24h volume $1,007,956.18; Gecko token all-pools 24h volume $1,014,802.25. [verified R-7 R-8 R-9]

Blockscout holders_count 984. Gecko token info holders.count 898. Pair created 2026-07-19T09:30:05Z. Assignment lead of liq ~$189,513 / vol ~$1,039,456 was not reproduced exactly at this as_of; live DexScreener is $194,884.92 / $1,027,046.48. [verified R-2 R-7 R-14]

## Material risks

- Quote token TSLA 0x322F…3b2d is a Robinhood Stock Token rail; OPTIMUS is a separate memecoin CA. [verified R-15 R-18]
- Pool USD reserve is OPTIMUS plus TSLA; DexScreener and Gecko disagree on the figure. [verified R-7 R-8]
- Ticker OPTIMUS collides with tracker 0x0fF9…e2B2 and with other TSLA-quoted memecoins (doggie, DOGECOIN, LONGDOG) at different CAs. [verified R-16 R-17]
- No bidirectional official handle or domain this pass; Telegram is a third-party-link. [claim R-7 R-14 R-22]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout address/token/create tx/LongLauncher/factory/Airlock/implementation/TSLA, RPC with Mozilla UA, DexScreener token/search, Gecko token/pool/info, /rhj/assets, Telegram preview, @OptimusHoodTSLA, @EARNONHOOD, and @orionmaximalist were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-4 R-7 R-8 R-18]
- Numbers: $1,027,046.48 / $194,884.92 is the DexScreener OPTIMUS/TSLA book, not Gecko token all-pools $1,014,802.25. Gecko pool reserve $252,520.77 is that pool. Holders 984 is Blockscout OPTIMUS, not TSLA 51118. [claim R-2 R-7 R-8 R-9 R-15]
- Adversarial: the strongest contrary reading is that this OPTIMUS is packed doggie, is DOGECOIN/TSLA, is LONGDOG/TSLA, is tracker Optimus, or is the TSLA stock token. Different CAs, names, pair ids and (for tracker) quote asset argue against those. [verified R-3 R-7 R-16 R-17 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` at assignment → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no optimus / OPTIMUS / Optimus Hood / 0xB5D553…1E18. content/dependencies/stock-tokens.yaml TSLA 0x322F…3b2d.
- Explorer: Blockscout api/v2 address, token, create tx 0x1d097040…8d71, logs LaunchCreated/Initialize/Lock, LongLauncher, DopplerERC20V1Factory, Airlock, DopplerERC20V1, TSLA 0x322F…3b2d.
- RPC: eth_chainId/eth_blockNumber/eth_getCode/eth_call name/symbol/decimals/totalSupply/owner and TSLA at block 53110945. Mozilla UA.
- Aggregators: DexScreener search OPTIMUS, latest/dex/tokens for 0xB5D553…1E18, 0x0fF9…e2B2, 0x51d3…1E18; search LONGDOG; Gecko token, token/info, pool 0xef34…d4c3, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 TSLA row at 0x322F…3b2d.
- Pad page: app.long.xyz/tokens/0xb5d553… Cloudflare-blocked on curl; web_fetch SPA Loading token details.
- Social: X user OptimusHoodTSLA / Optimus_RH; keyword CA and OPTIMUS TSLA; t.me/optimushoodportal preview.
- Failed: LONG HTML via curl; DexScreener pair HTML Cloudflare challenge; no GitHub repo URL this pass.
- Time: collection 2026-09-03T03:40Z–2026-09-03T03:48Z.
