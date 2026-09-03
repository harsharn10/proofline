---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: longdog
name: LONGDOG
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [longdog]
allowed_paths:
  - research/inbox/packets/longdog/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: LONGDOG
  aliases: ["Long Dog"]
  symbols: [LONGDOG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://longdog.dog
  official_handle: "NULL — DexScreener info.socials lists x.com/longdog_token; longdog.dog HTML publishes CA 0xfe7E…1e18 and a display string @LONGDOG, not @longdog_token; Gecko token/info HTTP 429 this pass; @longdog_token bio has no CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on longdog.dog, DexScreener, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "LONGDOG is the ERC-20 at 0xfe7E4b4850979BA7920ce786493B7371761F1e18 created through that launcher; entity_kind token, not protocol"
        - "Official surfaces are longdog.dog and DexScreener-listed @longdog_token, not app.long.xyz / @longdotxyz"
    - slug: longshot
      signals: [other]
      contrary_signals:
        - "Census Longshot is a launch/fee-router at uselongshot.xyz / @uselongshot"
        - "LONGDOG is a LongLauncher DopplerERC20V1 clone quoted against TSLA"
        - "No shared domain, handle, or reproduced address"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend"
        - "LONGDOG is a stock-paired memecoin, not a credit overlay"
        - "No shared domain, handle, or reproduced address"
    - slug: doggie
      signals: [other]
      contrary_signals:
        - "Packed doggie is Doggie Mode / DOGGIE at 0xa9eF…1e18, Uniswap v4 DOGGIE/TSLA pair 0x141b…f3f8, site doggiemode.com / @DoggieMode"
        - "This LONGDOG is 0xfe7E…1e18, Uniswap v4 LONGDOG/TSLA pair 0x9b66…28a2, site longdog.dog"
        - "Same TSLA rail 0x322F…3b2d and same LongLauncher; different CA, name, pair id, and surfaces"
    - slug: optimus
      signals: [other]
      contrary_signals:
        - "Packed optimus is Optimus Hood / OPTIMUS at 0xB5D553…1E18, Uniswap v4 OPTIMUS/TSLA pair 0xef34…d4c3"
        - "This LONGDOG is 0xfe7E…1e18 pair 0x9b66…28a2"
        - "Same TSLA rail and LongLauncher; different CA, name, pair id, and surfaces"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "LONGDOG is 0xfe7E…1e18 paired to TSLA 0x322F…3b2d; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "LONGDOG is a LongLauncher DopplerERC20V1 clone, not a vault factory"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot with a separate stock-paired factory"
        - "LONGDOG create tx 0xe5ce3387…3e22 called LongLauncher.create, not a Bankr factory"
        - "Gecko HTML titles the LONGDOG/TSLA pool Bankr (Robinhood); DexScreener labels Uniswap v4; the factory of record is LongLauncher"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xfe7E…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted LONGDOG into Uniswap v4 pool 0x9b66…28a2 quoted against Tesla • Robinhood Token TSLA 0x322F…3b2d. Distinct from packed doggie, packed optimus, in-flight DOGECOIN/TSLA 0x51d3…1E18, and census LONG. TSLA is the rail. longdog.dog lists the CA. No bidirectional official handle this pass. [R-1] [R-2] [R-3] [R-4] [R-7] [R-8] [R-16] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11], note: "" }

links:
  - { kind: site, url: "https://longdog.dog/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/longdog_token", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0xfe7e4b4850979ba7920ce786493b7371761f1e18", authenticity: unconfirmed }

deployments:
  - label: LONGDOG token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xfe7E4b4850979BA7920ce786493B7371761F1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
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
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-12]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13]
  - label: TSLA quote (create numeraire / pair quote / Robinhood Stock Token rail)
    role: token
    address:
      value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-15, R-18]

metrics:
  - { kind: tvl, value: 151778.18, currency: USD, as_of: 2026-09-03T04:06:17Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xfe7E4b4850979BA7920ce786493B7371761F1e18 pair 0x9b66…28a2 LONGDOG/TSLA Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 345701.96, currency: USD, as_of: 2026-09-03T04:06:17Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xfe7E…1e18 pair 0x9b66…28a2 LONGDOG/TSLA volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 344761.90, currency: USD, as_of: 2026-09-03T04:06:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e…1e18 volume_usd.h24 (all pools, not the TSLA book)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 312718, currency: USD, as_of: 2026-09-03T04:06:17Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xfe7E…1e18 pair 0x9b66…28a2 LONGDOG/TSLA fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 315178.76, currency: USD, as_of: 2026-09-03T04:06:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e…1e18 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 1086, currency: null, as_of: 2026-09-03T04:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xfe7E…1e18 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a97e8 (53123048). Token 0xfe7E…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name LONGDOG; symbol LONGDOG; decimals 18; totalSupply 1e27; owner() 0xeb7c0347…0862 (Airlock, 5695 bytes code). factory() reverts. EIP-1967 implementation slot zero. TSLA 0x322F…3b2d name Tesla • Robinhood Token symbol TSLA code 283 B. Impl 13927 B; DopplerERC20V1Factory 1912 B; LongLauncher 5826 B; PoolManager 24009 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-2, R-4, R-10, R-11, R-12, R-19], result: "Blockscout api/v2: token is_contract true is_verified true name LONGDOG proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0xe5ce3387…3e22 implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol LONGDOG holders_count 1086 total_supply 1e27. Tx timestamp 2026-08-25T19:11:17Z block 45969421 from 0xdF3E…aD21 (proxy_type eip7702, is_contract true) to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire 0x322F0929…3b2d token factory 0x1B37…b69a name LONGDOG symbol LONGDOG supply 1e27. LaunchCreated normalizedTicker LONGDOG pool id 0x9b66…28a2." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:06:17Z, receipt_ids: [R-7, R-8, R-9, R-16, R-17], result: "DexScreener latest/dex/tokens/0xfe7E…1e18: 5 robinhood uniswap pairs. Top LONGDOG/TSLA v4 0x9b66…28a2 quote TSLA 0x322F…3b2d liquidity.usd 151778.18 volume.h24 345701.96 fdv/marketCap 312718 pairCreatedAt 1787685077000 info.websites https://longdog.dog/ info.socials x.com/longdog_token. Secondary LONGDOG/USDG and LONGDOG/ETH books have far less liquidity. Gecko token fdv_usd 315178.76 volume_usd.h24 344761.90 total_reserve_in_usd 136421.57 (all pools). Gecko pool API HTTP 429 this pass; Gecko HTML title LONGDOG/TSLA Price on Bankr (Robinhood). Distinct DexScreener search hits: other robinhood LONGDOG 0xa4fA…72F6 (up/WETH) and 0xB338…69cc (ETH); DOGECOIN/TSLA 0x51d3…1E18." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-18], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one TSLA hit tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014. Zero LONGDOG rows. TSLA is the rail, not this token." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-5, R-7, R-20], result: "longdog.dog title Long Dog — a memecoin of unusual length; HTML embeds CA 0xfe7E4b4850979BA7920ce786493B7371761F1e18, copy $LONGDOG · PAIRED TO TESLA, BUY $LONGDOG href app.long.xyz/tokens/0xfe7e…, display string @LONGDOG, and fomo.family/user?userHandle=longdog. No x.com/longdog_token or t.me URL in the HTML this pass. @longdog_token posted https://longdog.dog on 2026-09-01. DexScreener websites longdog.dog socials x.com/longdog_token." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d (Tesla • Robinhood Token)", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "LONGDOG", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "LONGDOG", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xfe7E4b4850979BA7920ce786493B7371761F1e18", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — DexScreener socials x.com/longdog_token; site display string @LONGDOG is not that handle; bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-5, R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Created via LongLauncher.create 2026-08-25T19:11:17Z at 0x22e99278308B393ea1260859B181AD7E78f5eeED; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; create from 0xdF3EaF2876d6f0755E2B97818b6F15A78009aD21 (Blockscout proxy_type eip7702). Lock beneficiaries 0x694b3e13…efC5 95% and 0x21E2ce70…7A66 5%.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from census LONG (the factory); packed doggie DOGGIE 0xa9eF…1e18 pair 0x141b…f3f8; packed OPTIMUS 0xB5D553…1E18 pair 0xef34…d4c3; in-flight DOGECOIN 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 / TSLA pair 0x4c02…; and same-ticker robinhood LONGDOG 0xa4fA…72F6 (up/WETH) and 0xB338…69cc (ETH). Same TSLA rail where applicable, different CAs.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-16, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary book LONGDOG/TSLA Uniswap v4 pair 0x9b6604eeffbad3b216199d63cad1b46d9665c1429207e1c442531fb7263d28a2 quote 0x322F…3b2d; DexScreener also lists three LONGDOG/USDG v4 books and one LONGDOG/ETH v4 book with far less liquidity", class: verified, observed_at: 2026-09-03T04:06:17Z, receipt_ids: [R-7, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener LONGDOG/TSLA Uniswap v4 liquidity.usd 151778.18 volume.h24 345701.96 fdv/marketCap 312718", class: verified, observed_at: 2026-09-03T04:06:17Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko token volume_usd.h24 344761.90 fdv_usd 315178.76 total_reserve_in_usd 136421.57 (all-pools slice, not a TSLA-book reserve). Gecko pool endpoint HTTP 429 this pass.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 1086, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d, a Robinhood Stock Token rail in GET /rhj/assets (194 assets, one TSLA row, chainId 4663). Venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x9b66…28a2", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-3, R-4, R-15, R-18, R-19], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified file src/tokens/DopplerERC20V1.sol; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x694b3e134eE608e14Ed7844C0F611404912cEfC5 95% and 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5%; hook 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-19, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Gecko HTML titles pool 0x9b66…28a2 Bankr (Robinhood); DexScreener labels the same id Uniswap v4 dexId uniswap", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: security.audit, value: "No audit report URL was located on longdog.dog, DexScreener, Gecko token, @longdog_token, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "https://longdog.dog", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-5, R-7, R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-23, field: "account.@longdog_token.role", value: project, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@longdog_token.slug", value: longdog, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@longdog_token.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-5, R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link: @fomokidpump_gew posted $LONGDOG claim live with CA 0xfe7E…1e18 and crypto-keo.netlify.app; flag copypasta-pattern", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: candidate, value: "longdog | LONGDOG | @longdog_token | https://longdog.dog — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-3, R-15, R-18], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-31, field: identity.alias, value: "Long Dog", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-5], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-32, field: identity.domain, value: "Site CTA is BUY $LONGDOG → app.long.xyz/tokens/0xfe7e…; the deep book this pass is LONGDOG/TSLA. Secondary DexScreener LONGDOG/USDG v4 0x3a4d…90c8 liquidity.usd 1476.71 volume.h24 341.89", class: verified, observed_at: 2026-09-03T04:06:17Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-3, REP-5], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "LONGDOG/TSLA liquidity is $151,778.18 on DexScreener; Gecko token total_reserve_in_usd is $136,421.57 across all pools, not a TSLA-book reserve. DexScreener fdv 312718 vs Gecko token fdv_usd 315178.76"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-10, CLM-20]
    material_effect: "DexScreener labels pool 0x9b66…28a2 Uniswap v4; Gecko HTML titles the same id Bankr (Robinhood)"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher create minted LONGDOG against TSLA"
    summary: "Tx 0xe5ce…3e22 from 0xdF3E…aD21 at 2026-08-25T19:11:17Z; LaunchCreated pool id 0x9b66…28a2 numeraire TSLA 0x322F…3b2d."
    occurred_at: 2026-08-25T19:11:17Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-19]
  - id: EVT-2
    type: onchain
    title: "DexScreener LONGDOG/TSLA 24h volume ~$346k, liquidity $152k"
    summary: "DexScreener pair 0x9b66…28a2 liquidity.usd 151778 volume.h24 345702 fdv 312718. Gecko token all-pools volume_usd.h24 344762."
    occurred_at: 2026-09-03T04:06:17Z
    observed_at: 2026-09-03T04:06:17Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-9]
  - id: EVT-3
    type: company
    title: "@longdog_token posted longdog.dog"
    summary: "@longdog_token posted bentley seats reclining https://longdog.dog. Site HTML embeds CA 0xfe7E…1e18."
    occurred_at: 2026-09-01T01:04:47Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-20]
  - id: EVT-4
    type: ct
    title: "@longdog_token posted $500 ASPCA donation"
    summary: "@longdog_token posted $500 donated to the ASPCA foundation; all $TSLA fees from our latest claim were used for the donation; all $LONGDOG fees were burned. Follow-up posted etherscan tx 0xe73f…1586."
    occurred_at: 2026-09-03T02:59:46Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22, R-23]
  - id: EVT-5
    type: ct
    title: "@fomokidpump_gew posted a LONGDOG claim URL"
    summary: "@fomokidpump_gew posted $LONGDOG claim live with CA 0xfe7E…1e18 and crypto-keo.netlify.app. Flag third-party-link and copypasta-pattern."
    occurred_at: 2026-09-03T03:03:36Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xfe7E…1e18 LONGDOG", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xfe7E4b4850979BA7920ce786493B7371761F1e18", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-16, CLM-19, CLM-27], excerpt: "hash 0xfe7E4b4850979BA7920ce786493B7371761F1e18 is_contract true is_verified true name LONGDOG proxy_type eip1167 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xe5ce3387be568e7c606d4ca370dbcfa6d6488ae888fdb2092c9cca81c0ad3e22 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xfe7E…1e18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xfe7E4b4850979BA7920ce786493B7371761F1e18", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-19], excerpt: "name LONGDOG symbol LONGDOG decimals 18 type ERC-20 holders_count 1086 total_supply 1000000000000000000000000000 circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner at block 53123048", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-15, CLM-16, CLM-18, CLM-28, CLM-29], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a97e8. Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name LONGDOG symbol LONGDOG decimals 18 totalSupply 1e27 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 owner code 5695 B. factory() revert. EIP-1967 slot zero. TSLA name Tesla • Robinhood Token symbol TSLA." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0xe5ce3387…3e22", url: "https://robinhoodchain.blockscout.com/tx/0xe5ce3387be568e7c606d4ca370dbcfa6d6488ae888fdb2092c9cca81c0ad3e22", published_at: 2026-08-25T19:11:17Z, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-6, CLM-8, CLM-17, CLM-30, EVT-1], excerpt: "timestamp 2026-08-25T19:11:17.000000Z block_number 45969421 from 0xdF3EaF2876d6f0755E2B97818b6F15A78009aD21 (proxy_type eip7702 is_contract true) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create status ok. decoded numeraire 0x322F0929c4625eD5bAd873c95208D54E1c003b2d token factory 0x1B37…b69a name LONGDOG symbol LONGDOG supply 1e27." }
  - { id: R-5, publisher: Long Dog, title: "longdog.dog home", url: "https://longdog.dog/", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-22, CLM-25, CLM-27, CLM-31, CLM-32, EVT-3], excerpt: "HTTP 200 title Long Dog — a memecoin of unusual length. HTML embeds CA 0xfe7E4b4850979BA7920ce786493B7371761F1e18; copy $LONGDOG · PAIRED TO TESLA · CA BELOW; BUY $LONGDOG href https://app.long.xyz/tokens/0xfe7e4b4850979ba7920ce786493b7371761f1e18; display @LONGDOG; 1 LONGDOG = 1 MM OF DOG. No x.com/longdog_token string this pass." }
  - { id: R-6, publisher: LONG, title: "$LONGDOG token page", url: "https://app.long.xyz/tokens/0xfe7e4b4850979ba7920ce786493b7371761f1e18", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-32], excerpt: "URL is the BUY $LONGDOG href on longdog.dog and the LONG pad token page. Page not line-read this pass (SPA)." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens LONGDOG", url: "https://api.dexscreener.com/latest/dex/tokens/0xfe7E4b4850979BA7920ce786493B7371761F1e18", published_at: null, accessed_at: 2026-09-03T04:06:17Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-9, CLM-10, CLM-11, CLM-18, CLM-20, CLM-22, CLM-23, CLM-24, CLM-25, CLM-27, CLM-32, EVT-2], excerpt: "5 robinhood uniswap pairs. Top pairAddress 0x9b6604eeffbad3b216199d63cad1b46d9665c1429207e1c442531fb7263d28a2 labels v4 base LONGDOG / LONGDOG quote Tesla • Robinhood Token / TSLA 0x322F…3b2d liquidity.usd 151778.18 volume.h24 345701.96 fdv 312718 marketCap 312718 pairCreatedAt 1787685077000. info.websites https://longdog.dog/ socials x.com/longdog_token. Second LONGDOG/USDG v4 0x3a4d…90c8 liquidity.usd 1476.71 volume.h24 341.89." }
  - { id: R-8, publisher: GeckoTerminal, title: "LONGDOG/TSLA pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x9b6604eeffbad3b216199d63cad1b46d9665c1429207e1c442531fb7263d28a2", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "title LONGDOG/TSLA - LONGDOG Price on Bankr (Robinhood) | GeckoTerminal. Pool API HTTP 429 this pass; numbers not copied from HTML." }
  - { id: R-9, publisher: GeckoTerminal, title: "LONGDOG token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e4b4850979ba7920ce786493b7371761f1e18", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, EVT-2], excerpt: "name LONGDOG symbol LONGDOG decimals 18 total_supply 1e27 price_usd 0.0003151787613 fdv_usd 315178.76132872 market_cap_usd null volume_usd.h24 344761.90467165 total_reserve_in_usd 136421.5769. coingecko_coin_id null. Top pool 0x9b66…28a2. Token 24h volume is all-pools, not the TSLA book." }
  - { id: R-10, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-29], excerpt: "api/v2/smart-contracts: name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-11, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-30, EVT-1], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED is_contract true is_verified true name LongLauncher creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. smart-contracts file_path src/LongLauncher.sol compiler v0.8.26 verified_at 2026-07-14T11:23:57Z." }
  - { id: R-12, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is_contract true is_verified true name DopplerERC20V1Factory creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. smart-contracts file_path src/tokens/DopplerERC20V1Factory.sol. This address is creator_address_hash on LONGDOG." }
  - { id: R-13, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 is_contract true is_verified true name Airlock. smart-contracts file_path src/Airlock.sol is_partially_verified true compiler v0.8.26. This address is owner() on LONGDOG." }
  - { id: R-14, publisher: DexScreener, title: "search LONGDOG", url: "https://api.dexscreener.com/latest/dex/search?q=LONGDOG", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "13 pairs. Robinhood top is 0xfe7E…1e18 / TSLA pair 0x9b66…28a2. Other robinhood LONGDOG: 0xa4fA7cB42950C306843c24802f66CE238e7B72F6 / WETH on dex up; 0xB33845b48543F9cE89f84983838E74f9538969cc / ETH Uniswap v4 liq 3248.48. Off-chain hits on bsc/solana are different CAs." }
  - { id: R-15, publisher: Blockscout, title: "TSLA token 0x322F…3b2d", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x322F0929c4625eD5bAd873c95208D54E1c003b2d", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-28], excerpt: "address_hash 0x322F0929c4625eD5bAd873c95208D54E1c003b2d name Tesla • Robinhood Token symbol TSLA decimals 18 holders_count 51115 total_supply 8476202000000000000000 type ERC-20. Address is_verified true name BeaconProxy proxy_type eip1967_beacon implementation Stock 0xb35490d6…C5aE2." }
  - { id: R-16, publisher: DexScreener, title: "DOGECOIN/TSLA book", url: "https://api.dexscreener.com/latest/dex/tokens/0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "DOGECOIN 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 / TSLA pair 0x4c023aad373f280d… liq 79647.75 vol 1308544.99. Distinct base from 0xfe7E…1e18." }
  - { id: R-17, publisher: DexScreener, title: "same-ticker LONGDOG 0xa4fA and 0xB338", url: "https://api.dexscreener.com/latest/dex/tokens/0xa4fA7cB42950C306843c24802f66CE238e7B72F6", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "0xa4fA7cB42950C306843c24802f66CE238e7B72F6 name LongDog symbol LONGDOG dex up quote WETH. 0xB33845b48543F9cE89f84983838E74f9538969cc name Long Dog symbol LONGDOG Uniswap v4 quote ETH liq 3248.48. Different CAs from 0xfe7E…1e18." }
  - { id: R-18, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-14, CLM-28], excerpt: "HTTP 200. assets length 194. One TSLA row: tokenSymbol TSLA tokenName Tesla • Robinhood Token deployments[0] contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014. Zero LONGDOG rows." }
  - { id: R-19, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0xe5ce3387be568e7c606d4ca370dbcfa6d6488ae888fdb2092c9cca81c0ad3e22", published_at: 2026-08-25T19:11:17Z, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-14, CLM-17, EVT-1], excerpt: "PoolManager Initialize id 0x9b6604eeffbad3b216199d63cad1b46d9665c1429207e1c442531fb7263d28a2 currency0 TSLA currency1 LONGDOG hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 0x21E2ce70…7A66 5% and 0x694b3e13…efC5 95%. LaunchCreated asset 0xfe7E…1e18 numeraire 0x322F…3b2d launcher 0xdF3E…aD21 normalizedTicker LONGDOG." }
  - { id: R-20, publisher: "@longdog_token", title: "bentley seats reclining / longdog.dog", url: "https://x.com/longdog_token/status/2094592270473523254", published_at: 2026-09-01T01:04:47Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-22, CLM-23, CLM-24, CLM-25, EVT-3], excerpt: "Profile: longdog @longdog_token. Bio: i am tesla’s biggest fan. $LONGDOG is paired to $TSLA. Followers 524. Post: bentley seats reclining https://longdog.dog" }
  - { id: R-21, publisher: "@fomokidpump_gew", title: "$LONGDOG claim live", url: "https://x.com/fomokidpump_gew/status/2095346945698992421", published_at: 2026-09-03T03:03:36Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-5], excerpt: "Don’t overthink it $LONGDOG claim live could be easy $70 CA: 0xfe7E4b4850979BA7920ce786493B7371761F1e18 https://crypto-keo.netlify.app/claim?contract=0xfe7E4b4850979BA7920ce786493B7371761F1e18" }
  - { id: R-22, publisher: "@longdog_token", title: "$500 donated to the ASPCA foundation", url: "https://x.com/longdog_token/status/2095345982594777505", published_at: 2026-09-03T02:59:46Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "long dog takes care of his own. $500 donated to the ASPCA foundation all $TSLA fees from our latest claim were used for the donation all $LONGDOG fees were burned for ALL my dawgs LONG." }
  - { id: R-23, publisher: "@longdog_token", title: "proof of donation", url: "https://x.com/longdog_token/status/2095346159799955624", published_at: 2026-09-03T03:00:28Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "thank you to the community for making this possible, we are just getting started. proof of donation below https://etherscan.io/tx/0xe73ff0e86580cc47516754071487eff57ae8d17a0f424d0ff10e9a0ae1571586" }

gaps:
  - { priority: P0, question: "Does any surface bidirectionally confirm @longdog_token as the official handle for 0xfe7E…1e18?", checked: "DexScreener info.socials lists the handle; longdog.dog publishes the CA and a display string @LONGDOG, not @longdog_token; Gecko token/info HTTP 429; bio has no CA; 1 Sep post links the site, 2026-09-03", next: "re-read Gecko token/info and the LONG Social Links field if the SPA renders; search new posts that embed the CA and the handle" }
  - { priority: P1, question: "Why do DexScreener and Gecko disagree on LONGDOG reserve (~$152k TSLA book vs ~$136k Gecko token all-pools) and venue (uniswap v4 vs Bankr)?", checked: "DexScreener liquidity.usd 151778.18 labels v4; Gecko token total_reserve_in_usd 136421.57; Gecko pool API 429; HTML title Bankr (Robinhood), 2026-09-03", next: "retry Gecko pool once after the rate-limit window; compare PoolManager liquidity vs Gecko reserve formula used on other LONG TSLA books" }
  - { priority: P1, question: "Does Airlock 0xeb7C…0862 hold remaining privileged paths on the DopplerERC20V1 clone (mint, pause, upgrade of the implementation)?", checked: "owner() returns Airlock; token is EIP-1167 of DopplerERC20V1 src/tokens/DopplerERC20V1.sol, partially verified; no token-level owner besides Airlock this pass", next: "read DopplerERC20V1 verified source for mint/burn/pause and Airlock exit liquidity on the TSLA pool" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as deployed at 0x3Be8…C599?", checked: "longdog.dog, DexScreener, Gecko token, @longdog_token, Blockscout source header, 2026-09-03", next: "LONG litepaper / Doppler docs if they name an auditor" }
---

# LONGDOG — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell LONGDOG on that book. TSLA is the rail. This token is not the Tesla stock token, not census LONG, not packed doggie, not packed OPTIMUS, and not in-flight DOGECOIN/TSLA.

Themes: memecoin, stock-paired:TSLA, dog

## Why it matters

LONGDOG is a LONG graduation quoted in Tesla • Robinhood Token, not WETH. GET /rhj/assets lists that TSLA address. The LONGDOG/TSLA book is the live pair: DexScreener 24h volume about $346k and liquidity about $152k this pass. longdog.dog publishes the CA.

## What could go wrong

USD liquidity on the LONGDOG/TSLA book counts both sides, and the quote side is TSLA. owner() is Airlock. Gecko titles the pool Bankr (Robinhood) while the create transaction is LongLauncher and DexScreener names Uniswap v4. Same-ticker LONGDOG CAs exist on Robinhood (WETH/ETH books) and on other chains. No bidirectional official handle this pass. A third-party claim URL reused the CA.

## Product and mechanics

LongLauncher 0x22e9…eeED create at 2026-08-25T19:11:17Z minted LONGDOG / LONGDOG supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x9b66…28a2. [verified R-2 R-3 R-4 R-19]

longdog.dog says $LONGDOG · PAIRED TO TESLA and BUY $LONGDOG via the LONG token page. DexScreener's deep book is LONGDOG/TSLA Uniswap v4; LONGDOG/USDG and LONGDOG/ETH v4 books are thin. [verified R-5 R-7]

## Control and security

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). Lock beneficiaries are 95% 0x694b…efC5 and 5% 0x21E2…7A66. [verified R-3 R-10 R-13 R-19]

No audit report URL was located this pass. [unknown]

## Team and provenance

longdog.dog lists CA 0xfe7E…1e18 and a BUY link to app.long.xyz/tokens/0xfe7e…. @longdog_token posted https://longdog.dog on 2026-09-01. DexScreener repeats that site and handle. The site display string is @LONGDOG, not @longdog_token. Bio has no CA. Flag unconfirmed-official. [claim R-5 R-7 R-20]

Census LONG is the factory. Packed doggie and packed OPTIMUS are other LongLauncher TSLA books at different CAs. In-flight DOGECOIN/TSLA is 0x51d3…1E18. [verified R-4 R-11 R-16]

## Economics and activity

LONGDOG/TSLA Uniswap v4 24h volume is 345701.96 USD and liquidity.usd is 151778.18 at 2026-09-03T04:06:17Z from DexScreener. fdv/marketCap is 312718. Gecko token volume_usd.h24 is 344761.90 across all pools, not the TSLA book. Gecko token fdv_usd is 315178.76. Gecko pool endpoint returned HTTP 429 this pass and was not retried. [claim R-7 R-9]

Blockscout holders_count 1086. Pair created 2026-08-25T19:11:17Z. [claim R-2 R-4]

## Material risks

- Quote token TSLA 0x322F…3b2d is a Robinhood Stock Token rail in GET /rhj/assets; LONGDOG is not. [verified R-15 R-18]
- Pool USD reserve is LONGDOG plus TSLA, not a USDG or WETH backstop. [claim R-7]
- Handle is unconfirmed-official; site display string @LONGDOG is not the DexScreener X URL. [claim R-5 R-7 R-20]
- Ticker LONGDOG collides with other robinhood CAs 0xa4fA…72F6 and 0xB338…69cc and with packed doggie / OPTIMUS / DOGECOIN TSLA books. [verified R-14 R-16 R-17]
- No audit report URL this pass. [unknown]
- A third-party claim URL reused the CA. [claim R-21]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/Airlock/TSLA and the create tx plus logs, RPC name/symbol/owner/code, DexScreener token and search, Gecko token, Gecko HTML title, /rhj/assets, longdog.dog, and @longdog_token posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-7 R-18]
- Numbers: 345701.96 is the DexScreener LONGDOG/TSLA pool 24h volume, not the 344761.90 Gecko token all-pools figure. Reserve 151778.18 is that DexScreener pair. Gecko token total_reserve_in_usd 136421.57 is all-pools. [claim R-7 R-9]
- Adversarial: the strongest contrary reading is that this LONGDOG is census LONG, is packed doggie, is packed OPTIMUS, is in-flight DOGECOIN/TSLA, is the TSLA stock token, or is the other robinhood LONGDOG CAs. Different CAs, names, pair ids and (for LONG) entity_kind argue against those. [verified R-3 R-7 R-14 R-16 R-17 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no longdog / LONGDOG / 0xfe7E…1e18. Branch GET of this packet path returned 404 before PUT.
- Explorer: Blockscout api/v2 token, impl, factory, launcher, Airlock, TSLA, createToken 0xe5ce…3e22, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53123048.
- Aggregators: DexScreener latest/dex/tokens and search LONGDOG; Gecko token (pool API HTTP 429, not retried); Gecko HTML pool title.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one TSLA, 0 LONGDOG.
- Social: X keyword LONGDOG; from:longdog_token; user search LONGDOG / longdog_token; longdog.dog HTML.
- Failed: Gecko pool and token/info HTTP 429; t.me/longdog_token is a contact page with no group extra; t.me/longdog titles Andy (unrelated); docs.robinhood.com not opened this pass.
- Time: collection 2026-09-03T04:06Z–2026-09-03T04:12Z.
