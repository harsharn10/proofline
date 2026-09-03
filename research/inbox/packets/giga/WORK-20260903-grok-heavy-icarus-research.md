---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: giga
name: GIGA
packet_tier: seed
as_of: 2026-09-03T05:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [giga]
allowed_paths:
  - research/inbox/packets/giga/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GIGA
  aliases: ["GIGA DEX", "GIGA V3", "GIGA V2"]
  symbols: [GIGA, veGIGA]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.gigadex.fi
  official_handle: "@giga_dex"
  repository: "NULL — GitHub org GIGA-DEX has 0 public repos; users/gigadex is a 2015 account with 0 repos and no Robinhood link; Llama github null; gigadex.fi and docs.gigadex.fi HTML have no repository URL this pass"
  possible_matches:
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census up is a native AMM at up33.xyz / @uponrh"
        - "GIGA DEX is at gigadex.fi / @giga_dex with CL factory 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B"
        - "No shared domain, handle, or reproduced address"
    - slug: fables
      signals: [other]
      contrary_signals:
        - "Census Fables is a native AMM at @fablesfi"
        - "GIGA DEX is a concentrated-plus-classic AMM at gigadex.fi / @giga_dex"
        - "No shared domain, handle, or reproduced address"
    - slug: swaphood
      signals: [other]
      contrary_signals:
        - "Census SwapHood is a native AMM at @SwapHoodFi with ticker HOOD"
        - "GIGA DEX ticker is GIGA; factory 0xEce6eCd6…e20B is not the SwapHood factory"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "GIGA DEX is an AMM (Classic Uniswap v2 fork plus PancakeSwap/Uniswap v3 concentrated pools), not a pad"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: trading/amm-native
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name CL factory 0xEce6eCd6…e20B and Classic factory 0x6Fdf38f9…0916 on chain 4663. RPC returned non-empty code on both; Blockscout names CLFactory and ClassicFactory with is_verified true. Llama protocol/giga-v3 currentChainTvls Robinhood Chain 1504019.85 (Dexs, CLMM). Distinct from census AMMs and from packed pads. Not a census row. [R-3] [R-13] [R-14] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-17], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-13, CLM-15], note: "" }

links:
  - { kind: site, url: "https://www.gigadex.fi/", authenticity: confirmed }
  - { kind: app, url: "https://www.gigadex.fi/", authenticity: confirmed }
  - { kind: docs, url: "https://docs.gigadex.fi", authenticity: confirmed }
  - { kind: x, url: "https://x.com/giga_dex", authenticity: confirmed }
  - { kind: other, url: "https://docs.gigadex.fi/security/contracts", authenticity: confirmed }

deployments:
  - label: Concentrated-liquidity factory
    role: factory
    address:
      value: "0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-14]
  - label: Classic factory
    role: factory
    address:
      value: "0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-15, R-16]
  - label: GIGA ERC-20
    role: token
    address:
      value: "0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-17]
  - label: Controller proxy
    role: proxy
    address:
      value: "0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-13, R-18]
  - label: Controller implementation
    role: implementation
    address:
      value: "0x0D47f2f6DC4D5Bc56b0446Ea678EAc6433944A48"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-18]
  - label: veGIGA ERC-721 proxy
    role: token
    address:
      value: "0x307Cb092543dA544f5381f66ac13aA84ca4C26E8"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-13, R-27]
  - label: Emission center
    role: other
    address:
      value: "0xbfc240b3eb8C700508447b62fD793Bf4dB364783"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-18]
  - label: Controller ProxyAdmin
    role: admin
    address:
      value: "0x237e0396f96142e88d9966d25273af041ec181af"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-28]
  - label: Upgrade Safe (ProxyAdmin owner)
    role: multisig
    address:
      value: "0x72f4DF3580935c179E2eC61c04122731E7fcd4A6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-29]
  - label: Factory deployer EOA
    role: other
    address:
      value: "0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-16, R-29]

metrics:
  - { kind: tvl, value: 1504019.8492, currency: USD, as_of: 2026-09-03T04:36:59Z, window: point, method: "api.llama.fi/protocol/giga-v3 currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-19] }
  - { kind: tvl, value: 315041.13158, currency: USD, as_of: 2026-09-03T04:26:35Z, window: point, method: "api.llama.fi/protocol/giga-v2 currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-21] }
  - { kind: volume_24h, value: 37216490, currency: USD, as_of: 2026-09-03T05:40:00Z, window: 24h, method: "api.llama.fi/summary/dexs/giga-v3 total24h (Robinhood Chain)", class: claim, receipt_ids: [R-20] }
  - { kind: fees_24h, value: 20980, currency: USD, as_of: 2026-09-03T05:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/giga-v3 total24h (Robinhood Chain)", class: claim, receipt_ids: [R-22] }
  - { kind: revenue_24h, value: 4194, currency: USD, as_of: 2026-09-03T05:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/giga-v3?dataType=dailyRevenue total24h (Robinhood Chain)", class: claim, receipt_ids: [R-23] }
  - { kind: holders, value: 329, currency: null, as_of: 2026-09-03T05:42:00Z, window: point, method: "Blockscout api/v2 token holders_count on 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5", class: claim, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:42:00Z, receipt_ids: [R-13, R-14], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663). eth_blockNumber 0x32b6fd2 then 0x32b78b5 (53178322–53180501). CL factory 0xEce6eCd6…e20B eth_getCode 4518 bytes prefix 0x6080604052348015; nonce 1; owner() 0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D (Controller). Blockscout api/v2 name CLFactory is_contract true is_verified true proxy_type null. creator 0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40 tx 0xabd5e242…90ef." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:42:00Z, receipt_ids: [R-15, R-16], result: "Classic factory 0x6Fdf38f9…0916 eth_getCode 18195 bytes; nonce 29; allPairsLength() 28. feeTo() and feeToSetter() reverted. Blockscout api/v2 name ClassicFactory is_verified true. creator 0x5F378c7C…AD40 tx 0xb48437c8…4b0c." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:42:00Z, receipt_ids: [R-17], result: "Token 0x5BaaeC1B…F7D5 eth_getCode 1752 bytes; name GIGA; symbol GIGA; decimals 18; totalSupply 1000000000000000000000000000 (1e27). owner() reverted. Blockscout api/v2 name ApexToken is_verified true; token name GIGA symbol GIGA type ERC-20 holders_count 329 total_supply 1e27. creator 0x5F378c7C…AD40 tx 0xdbc575e5…1831." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-13, R-18, R-27, R-28, R-29], result: "Controller 0x4a9cEF84…163D eth_getCode 1074 bytes; ERC1967 impl 0x0d47f2f6dc4d5bc56b0446ea678eac6433944a48 (23286-byte code); admin slot 0x237e0396f96142e88d9966d25273af041ec181af. Vault/fee/veGIGA are also 1074-byte ERC1967 proxies. EmissionCenter owner() 0x4a9cEF84…163D. Controller ProxyAdmin owner() 0x72f4DF3580935c179E2eC61c04122731E7fcd4A6. That address eth_getCode 171 bytes; Blockscout name SafeProxy is_verified true. Safe getThreshold 2; getOwners 3: 0x14970344…b70b, 0xa2d88507…6d22, 0x5f378c7c…ad40. Controller impl Blockscout is_verified false name null. veGIGA impl name VeApexToken is_verified true." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-9], result: "www.gigadex.fi title GIGA DEX; meta description GIGA DEX — concentrated and classic liquidity on Robinhood Chain; og:url https://www.gigadex.fi/; twitter:site @giga_dex. docs.gigadex.fi twitter:site @giga_dex. @giga_dex bio The liquidity engine for Robinhood Chain; website gigadex.fi." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-19, R-20, R-21, R-22, R-23, R-24], result: "api.llama.fi/protocol/giga-v3 currentChainTvls Robinhood Chain 1504019.8492 at 1788410219 (2026-09-03T04:36:59Z); category Dexs; twitter giga_dex; url https://gigadex.fi; audits 0; github null; gecko_id null; parentProtocol parent#giga; description includes TIA bonding-curve copypasta. giga-v2 TVL 315041.13158. parent GIGA currentChainTvls 1819060. summary/dexs/giga-v3 total24h 37216490. summary/fees/giga-v3 total24h 20980 total7d 73233. dailyRevenue total24h 4194." }
  - { id: REP-7, method: api, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-25], result: "First GET https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5 HTTP 200. attributes name GIGA symbol GIGA decimals 18 total_supply 1e27 price_usd 0.02294437469 fdv_usd 22944374.6888784 market_cap_usd null volume_usd.h24 91358.1347008798 coingecko_coin_id giga-2. Follow-up pool/info/dexes GETs returned HTTP 429 and were not used." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "GIGA DEX unifies Classic Uniswap v2-fork pools and concentrated PancakeSwap v3 / Uniswap v3-fork pools on Robinhood Chain. Emissions rebalance hourly toward gauged pools by rolling revenue; veGIGA is a six-month lock. Docs: no bonding curve and no gauge-vote epochs.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.gigadex.fi", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@giga_dex", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-9, R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "GIGA", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-2, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-3, R-15, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: trading/amm-native, class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "ProxyAdmin owner() on the controller, vault, fee-center, and veGIGA admins is Safe 0x72f4DF3580935c179E2eC61c04122731E7fcd4A6 (2-of-3). CL factory owner() is the Controller proxy. Deployer EOA 0x5F378c7C…AD40 is one Safe owner.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-13, R-28, R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Controller 0x4a9cEF84…163D, Vault 0xc1718B17…8d1d, Fee center 0x35A31D2D…7024, and veGIGA 0x307Cb092…26E8 are ERC1967 TransparentUpgradeableProxy shells (1074-byte code). Controller implementation slot 0x0d47f2f6…4a48.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-13, R-18, R-27], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock address is named in docs or on the reproduced ProxyAdmin/Safe path. Upgrade authority is the 2-of-3 Safe behind four ProxyAdmins.", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-6, R-13, R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: control.threshold, value: "Safe 0x72f4DF35…d4A6 getThreshold 2 of 3 owners 0x14970344…b70b, 0xa2d88507…6d22, 0x5f378c7c…ad40", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain TVL 1504019.8492 USD from api.llama.fi/protocol/giga-v3 currentChainTvls at 2026-09-03T04:36:59Z; parent GIGA slice 1819060; giga-v2 slice 315041.13158", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-19, R-21, R-24], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Robinhood Chain 24h volume 37216490 USD and 24h fees 20980 USD from api.llama.fi summary/dexs and summary/fees giga-v3; dailyRevenue total24h 4194", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-20, R-22, R-23], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Docs: the custom Genesis emissions/veGIGA/gauge code is undergoing an independent audit and the report will be published on the security overview when complete. Llama audits 0 and audit_links null. No report URL this pass.", class: unknown, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-4, R-10, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-19, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census AMMs up (up33.xyz / @uponrh), Fables (@fablesfi), and SwapHood (@SwapHoodFi). Distinct from packed pads including census Pons and in-flight Coinbarrel / Klik / Sentry / Varo / LetsCash. GIGA is an AMM with its own CL and Classic factories, not a launchpad. No shared domain, handle, or reproduced factory.", class: claim, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-1, R-3, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Llama protocol/giga-v3 description field: GIGA V3 is a decentralized exchange on Robinhood Chain that allows users to trade tokens against bonding curves priced in native TIA. Humans spectate; trading is bot-only via API/onchain txs. That text does not match docs, the site, or the reproduced factories.", class: disputed, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.symbol, value: GIGA, class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-4, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: "account.@giga_dex.official", value: "gigadex.fi and docs.gigadex.fi HTML set twitter:site to @giga_dex. Handle bio names Robinhood Chain liquidity engine and website gigadex.fi. Flag none for official.", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: "account.@giga_dex.slug", value: giga, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@giga_dex.role", value: project, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@giga_dex posted GIGA IS LIVE on 2026-08-31T20:21:08Z with ca:0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5, then Trading is live / emissions have begun / 1B GIGA fixed.", class: claim, observed_at: 2026-09-03T05:39:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — api.github.com/orgs/gigadex 404; /users/gigadex is a 2015 account with 0 repos; org GIGA-DEX exists with 0 public repos and no twitter/blog; Llama github null; no repo URL on the site or docs this pass", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-19, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "GIGA DEX", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "GeckoTerminal search for giga also returns Solana GIGA/SOL pools around 0.002 USD, distinct from Robinhood GIGA at 0x5BaaeC1B…F7D5 (~0.023 USD this pass). Flag ticker-only and wrong-chain for those Solana rows.", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-25], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "Docs: protocol contracts (controller, fee center, emission center, vault) are controlled by the GIGA team and can steer emissions, route fees, and set incentive parameters; pool swap logic is not upgradeable. RPC: those four are proxies whose ProxyAdmin owner is the 2-of-3 Safe.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-6, R-13, R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-29, field: activity.status, value: "Classic factory allPairsLength 28 on 2026-09-03. Giga Positions NFT total_supply 1949 holders_count 111. veGIGA holders_count 49.", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-15, R-16, R-27], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-30, field: other, value: "Docs contracts and governance pages: every deployed contract is verified on the Robinhood Chain explorer.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: other, value: "Blockscout api/v2 on controller implementation 0x0D47f2f6DC4D5Bc56b0446Ea678EAc6433944A48: is_verified false, name null, 23286-byte code. Fee-center implementation 0x375C90d3…4959 also is_verified false.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-32, field: identity.alias, value: "Blockscout verified source name ApexToken on the GIGA ERC-20; veGIGA implementation VeApexToken; vault ApexVault. Site JS reads localStorage key apex-theme. Apex is a verified-source name, not the public brand.", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-1, R-17, R-27], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "@giga_dex posted 2M in TVL on 2026-09-01T12:37:30Z as step 1. Llama V3 slice at collection was 1.504M; parent 1.819M. Different window and scope.", class: claim, observed_at: 2026-09-03T05:39:00Z, receipt_ids: [R-12, R-19, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: "account.@giga_dex.follow", value: true, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-35, field: "account.@giga_dex.listen", value: high, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-36, field: "account.@giga_dex.conflict", value: team, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }

conflicts:
  - { id: CON-1, field: product.mechanism, claim_ids: [CLM-1, CLM-19], material_effect: "Llama's giga-v3 description is TIA bonding-curve copypasta and would mis-file the product as a pad or bot-only venue", status: open, resolution: null }
  - { id: CON-2, field: other, claim_ids: [CLM-30, CLM-31], material_effect: "Docs say every deployed contract is explorer-verified; the controller implementation that holds custom logic is not verified this pass", status: open, resolution: null }

events:
  - id: EVT-1
    type: onchain
    title: "RPC: CL factory and Classic factory have code on chain 4663"
    summary: "CL factory 0xEce6eCd6…e20B is verified CLFactory with owner() the Controller. Classic factory 0x6Fdf38f9…0916 is verified ClassicFactory with allPairsLength 28."
    occurred_at: 2026-09-03T05:42:00Z
    observed_at: 2026-09-03T05:42:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14, R-16]
  - id: EVT-2
    type: company
    title: "@giga_dex posts GIGA IS LIVE with token address"
    summary: "On 2026-08-31T20:21:08Z the handle posted GIGA IS LIVE and ca:0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5, then that trading, claims, and emissions were live with 1B GIGA fixed."
    occurred_at: 2026-08-31T20:21:08Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [lifecycle, communications.status, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10, R-11]
  - id: EVT-3
    type: company
    title: "@giga_dex posts 2M in TVL"
    summary: "On 2026-09-01T12:37:30Z the handle posted 2M in TVL as step 1 for GIGA DEX. Llama V3 chain slice at this collection was 1.504M USD; parent 1.819M."
    occurred_at: 2026-09-01T12:37:30Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: company
    title: "@giga_dex posts GIGA is live on CoinGecko"
    summary: "On 2026-09-02T17:36:00Z the handle posted that GIGA is live on CoinGecko. First GeckoTerminal GET for the Robinhood token returned HTTP 200 with coingecko_coin_id giga-2."
    occurred_at: 2026-09-02T17:36:00Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7, R-25]
  - id: EVT-5
    type: company
    title: "@giga_dex posts LP management live on vfat.io"
    summary: "On 2026-09-02T18:18:14Z the handle posted that GIGA LP management is now live on @vfat_io."
    occurred_at: 2026-09-02T18:18:14Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-6
    type: company
    title: "Docs: GIGA Genesis 31 August 2026"
    summary: "Security overview: Phase 2 GIGA Genesis (31 August 2026) activated custom emissions, veGIGA, gauges, and the GIGA Machine on top of the immutable Classic and CL pools."
    occurred_at: 2026-08-31T00:00:00Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [lifecycle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: GIGA DEX, title: "gigadex.fi home", url: "https://www.gigadex.fi/", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-18, CLM-21, CLM-25, CLM-26, CLM-32], excerpt: "title GIGA DEX. meta description: GIGA DEX — concentrated and classic liquidity on Robinhood Chain. og:url https://www.gigadex.fi/. og:site_name GIGA DEX. twitter:card summary_large_image. twitter:site @giga_dex. Favicon /giga-icon.png. JS localStorage key apex-theme." }
  - { id: R-2, publisher: GIGA DEX, title: "What is GIGA?", url: "https://docs.gigadex.fi/what-is-giga", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-8, CLM-17, CLM-26], excerpt: "GIGA DEX is the liquidity engine for Robinhood Chain: a decentralized exchange designed to build deep, sustainable markets through automated liquidity incentives. Emissions follow revenue, rebalanced hourly. veGIGA holders lock, stake, and earn. No voting cycle. 1B supply fully minted at genesis." }
  - { id: R-3, publisher: GIGA DEX, title: "Contracts", url: "https://docs.gigadex.fi/security/contracts", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-8, CLM-16, CLM-18, CLM-30, EVT-1], excerpt: "Every contract below is deployed on Robinhood Chain and verified on the explorer. GIGA ERC-20 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5. veGIGA 0x307Cb092543dA544f5381f66ac13aA84ca4C26E8. Controller 0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D. CL factory 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B. Classic factory 0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916." }
  - { id: R-4, publisher: GIGA DEX, title: "Tokenomics", url: "https://docs.gigadex.fi/tokenomics", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-20], excerpt: "GIGA has a fixed supply of 1B tokens, fully minted at genesis. The token is an ERC-20 on Robinhood Chain: 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5. LP Emissions Reserve 40% 400M. At launch at most 5.5% of total supply (55M GIGA) is liquid." }
  - { id: R-5, publisher: GIGA DEX, title: "Security overview", url: "https://docs.gigadex.fi/security/overview", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-6], excerpt: "Classic pools are a fork of Uniswap v2. Concentrated liquidity pools are built on PancakeSwap v3, a fork of Uniswap v3. Phase 1 contracts are immutable. Phase 2: GIGA Genesis (31 August 2026). The new code introduced at GIGA Genesis is undergoing a full independent security audit. The report will be published here when it is complete." }
  - { id: R-6, publisher: GIGA DEX, title: "Governance and access control", url: "https://docs.gigadex.fi/security/governance", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-28, CLM-30], excerpt: "Classic and concentrated-liquidity pools that hold user liquidity are not upgradeable. Custom protocol contracts (controller, fee center, emission center, vault) coordinate the incentive system and are controlled by the GIGA team. Every deployed contract is verified on the Robinhood Chain explorer." }
  - { id: R-7, publisher: "@giga_dex", title: "GIGA is live on CoinGecko", url: "https://x.com/giga_dex/status/2095204104209375270", published_at: 2026-09-02T17:36:00Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "GIGA is live on @coingecko." }
  - { id: R-8, publisher: "@giga_dex", title: "GIGA LP management live on vfat.io", url: "https://x.com/giga_dex/status/2095214733800452509", published_at: 2026-09-02T18:18:14Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "GIGA LP management is now live on @vfat_io!" }
  - { id: R-9, publisher: "@giga_dex", title: "GIGA profile", url: "https://x.com/giga_dex", published_at: null, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-23, CLM-34, CLM-35, CLM-36], excerpt: "Display name GIGA. Handle @giga_dex. Bio: The liquidity engine for Robinhood Chain. Deep markets. Better execution. Followers 1261. Blue Verified. Website gigadex.fi." }
  - { id: R-10, publisher: "@giga_dex", title: "GIGA IS LIVE", url: "https://x.com/giga_dex/status/2094520887215276237", published_at: 2026-08-31T20:21:08Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16, CLM-24, EVT-2], excerpt: "GIGA IS LIVE. The wait is over. ca:0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5" }
  - { id: R-11, publisher: "@giga_dex", title: "Trading is live", url: "https://x.com/giga_dex/status/2094520889262104720", published_at: 2026-08-31T20:21:08Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "Trading is live. Claims asap. Emissions have begun. veGIGA is earning protocol revenue. 1B GIGA. Fixed forever. Zero inflation." }
  - { id: R-12, publisher: "@giga_dex", title: "2M in TVL", url: "https://x.com/giga_dex/status/2094766596200054890", published_at: 2026-09-01T12:37:30Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-33, EVT-3], excerpt: "2M in TVL. step 1 for GIGA DEX" }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() GIGA factories and controller", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-11, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. block 53178322–53180501. CL factory 4518 B owner() Controller 0x4a9cEF84…163D. Classic factory 18195 B allPairsLength 28. Token name GIGA supply 1e27. Controller ERC1967 impl 0x0d47f2f6…4a48 admin 0x237e0396…81af. ProxyAdmin owner Safe 0x72f4DF35…d4A6 2-of-3." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, EVT-1], excerpt: "name CLFactory is_contract true is_verified true proxy_type null. creator_address_hash 0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40. creation_transaction_hash 0xabd5e242121a3cff617cb434e93eec0a16ae8a40ddc85fc47f2de13983c990ef." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "allPairsLength Classic factory", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-29], excerpt: "0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916 eth_getCode 18195 bytes prefix 0x6080604052348015. nonce 29. allPairsLength() 28. feeTo() and feeToSetter() reverted." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-29, EVT-1], excerpt: "name ClassicFactory is_verified true. creator_address_hash 0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40. creation_transaction_hash 0xb48437c810acd6d429567173729af25f5b83cc86d07f647f98c56821e7054b0c." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-20, CLM-32], excerpt: "name ApexToken is_verified true. token name GIGA symbol GIGA type ERC-20 holders_count 329 total_supply 1000000000000000000000000000. creator 0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40 tx 0xdbc575e517c3f87cb6d52f756515ce3300368c6c678411cbd1e0e283e3871831." }
  - { id: R-18, publisher: Blockscout, title: "Controller proxy and implementation", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-31], excerpt: "name TransparentUpgradeableProxy is_verified true proxy_type eip1967. implementations 0x0D47f2f6DC4D5Bc56b0446Ea678EAc6433944A48 name null. creator 0x5F378c7C…AD40. Implementation address is_verified false name null. EmissionCenter 0xbfc240b3…4783 is_verified true." }
  - { id: R-19, publisher: DefiLlama, title: "protocol/giga-v3", url: "https://api.llama.fi/protocol/giga-v3", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-8, CLM-13, CLM-17, CLM-19, CLM-25, CLM-33], excerpt: "name GIGA V3. category Dexs. chains [Robinhood Chain]. twitter giga_dex. url https://gigadex.fi. audits 0. github null. gecko_id null. currentChainTvls['Robinhood Chain'] 1504019.8492. latest tvl date 1788410219 (2026-09-03T04:36:59Z). parentProtocol parent#giga. description includes TIA bonding-curve copypasta." }
  - { id: R-20, publisher: DefiLlama, title: "summary/dexs/giga-v3", url: "https://api.llama.fi/summary/dexs/giga-v3", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "name GIGA V3. total24h 37216490. total7d 178158821. total30d 240301737. chains [Robinhood Chain]. module giga-dex-cl." }
  - { id: R-21, publisher: DefiLlama, title: "protocol/giga-v2", url: "https://api.llama.fi/protocol/giga-v2", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13], excerpt: "name GIGA V2. category Dexs. chains [Robinhood Chain]. twitter giga_dex. url https://gigadex.fi. currentChainTvls['Robinhood Chain'] 315041.13158. latest tvl date 1788409595 (2026-09-03T04:26:35Z). parentProtocol parent#giga." }
  - { id: R-22, publisher: DefiLlama, title: "summary/fees/giga-v3", url: "https://api.llama.fi/summary/fees/giga-v3", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "total24h 20980. total7d 73233. total30d 133476. totalAllTime 194281.05. chainBreakdown Robinhood Chain total24h 20980 total7d 73233. module giga-dex-cl." }
  - { id: R-23, publisher: DefiLlama, title: "summary/fees/giga-v3 dailyRevenue", url: "https://api.llama.fi/summary/fees/giga-v3?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "total24h 4194. total7d 14646. total30d 26701. totalAllTime 38862.5. Protocol revenue for GIGA V3 on Robinhood Chain." }
  - { id: R-24, publisher: DefiLlama, title: "protocol/giga parent", url: "https://api.llama.fi/protocol/giga", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-17, CLM-33], excerpt: "id parent#giga. name GIGA. twitter giga_dex. url https://gigadex.fi. description: GIGA is the liquidity coordination layer that powers Robinhood Chain. GIGA is fully native to Robinhood Chain. currentChainTvls Robinhood Chain 1819060. otherProtocols GIGA, GIGA V3, GIGA V2." }
  - { id: R-25, publisher: GeckoTerminal, title: "Robinhood token 0x5BaaeC1B…F7D5", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-27, EVT-4], excerpt: "HTTP 200. attributes name GIGA symbol GIGA decimals 18 total_supply 1e27 price_usd 0.02294437469 fdv_usd 22944374.6888784 market_cap_usd null volume_usd.h24 91358.13 coingecko_coin_id giga-2. Search also listed unrelated Solana GIGA/SOL pools near 0.002 USD." }
  - { id: R-26, publisher: GitHub, title: "orgs/GIGA-DEX and users/gigadex", url: "https://api.github.com/orgs/GIGA-DEX", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "GET /orgs/gigadex HTTP 404. GET /users/gigadex HTTP 200 login GigaDex created 2015-02-19 public_repos 0 twitter_username null. GET /orgs/GIGA-DEX HTTP 200 login GIGA-DEX created 2026-07-02 public_repos 0 twitter_username null blog null is_verified false." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x307Cb092543dA544f5381f66ac13aA84ca4C26E8", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x307Cb092543dA544f5381f66ac13aA84ca4C26E8", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-29, CLM-32], excerpt: "name TransparentUpgradeableProxy is_verified true proxy_type eip1967. implementations 0x289E15ab90E24e637e024d901dCb00b0Ed9d2fa1 name VeApexToken is_verified true. token name Vote Escrowed GIGA symbol veGIGA type ERC-721 holders_count 49. Giga Positions 0xA79F5775…f641 NonfungiblePositionManager holders_count 111 total_supply 1949." }
  - { id: R-28, publisher: Blockscout, title: "Controller ProxyAdmin 0x237e0396…81af", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x237e0396f96142e88d9966d25273af041ec181af", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "name ProxyAdmin is_contract true is_verified true. creator_address_hash 0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D. RPC eth_getCode 1003 bytes. owner() 0x72f4DF3580935c179E2eC61c04122731E7fcd4A6." }
  - { id: R-29, publisher: Robinhood Chain RPC, title: "Safe getOwners / getThreshold 0x72f4DF35…d4A6", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-12, CLM-28], excerpt: "0x72f4DF3580935c179E2eC61c04122731E7fcd4A6 eth_getCode 171 bytes. Blockscout name SafeProxy is_verified true. getThreshold 2. getOwners n=3: 0x1497034486605428d2ccdf29e5802cd96bf2b70b, 0xa2d88507e759f9a56c5111532a4454d1cdcc6d22, 0x5f378c7c4d33e43ed3ea573a2b0a6ba8a688ad40. Same owner() on four ProxyAdmins." }

gaps:
  - { priority: P0, question: "What is the source name of controller implementation 0x0d47f2f6…4a48, and does it match the docs controller?", checked: "Blockscout api/v2 name null is_verified false; 23286-byte code; docs name Controller, 2026-09-03", next: "read verified source if it lands; until then treat the proxy as shell-only for custom logic" }
  - { priority: P0, question: "Is there a published audit whose scope matches the Genesis controller, emission center, vault, and veGIGA?", checked: "docs security overview says undergoing and will be published here; Llama audits 0; no report URL on docs, site, or X profile this pass", next: "record the report URL and exact scope when it appears" }
  - { priority: P1, question: "Does the 2-of-3 Safe sit behind a timelock on any chain, and which owner keys are hardware vs EOA?", checked: "getThreshold 2 of 3 including factory deployer 0x5F378c7C…AD40 (eth_getCode 0x); no timelock named in docs, 2026-09-03", next: "eth_getCode on the other two Safe owners; record any timelock if one is introduced" }
  - { priority: P1, question: "Which GitHub org, if any, holds the ApexToken / CLFactory source that Blockscout verified?", checked: "orgs/gigadex 404; GIGA-DEX 0 public repos; Llama github null; site and docs have no repo URL, 2026-09-03", next: "search Blockscout source files for a repository URL once more contracts verify" }
  - { priority: P2, question: "Are Llama giga-v3 adapter pool addresses exactly the docs CL factory, and can the TIA bonding-curve description be corrected?", checked: "api.llama.fi/protocol/giga-v3 module giga-dex-cl/index.js; raw GitHub adapter 404 this pass; description is TIA copypasta, 2026-09-03", next: "open the adapter file when the path resolves; do not use the TIA sentence as product evidence" }
  - { priority: P2, question: "What is circulating supply versus the 1B total, given Gecko market_cap_usd null and FDV ~22.9M?", checked: "token totalSupply 1e27; docs at most 5.5% liquid at launch; Gecko market_cap_usd null fdv_usd 22944374; handle 1 Sep said MC is under 1M, working with DexScreener, 2026-09-03", next: "do not file FDV as market cap; reproduce a circulating figure from a primary source" }
---

# GIGA — research packet

## What it is

GIGA DEX is a native AMM on Robinhood Chain. Classic pools are a Uniswap v2 fork. Concentrated pools are a PancakeSwap v3 / Uniswap v3 fork. Liquidity incentives rebalance hourly toward gauged pools by rolling revenue; veGIGA is a six-month lock. The token is GIGA (1B minted at genesis). The handle is @giga_dex; the site is gigadex.fi.

Themes: amm

## Why it matters

This is a chain-native liquidity venue with its own CL and Classic factories, not a packed pad and not a Uniswap deployment. Llama's Robinhood Chain slice for GIGA V3 is about 1.50M USD TVL against 24h volume about 37.2M USD. The pad-shaped Llama description (TIA bonding curves, bot-only) does not match the reproduced factories. [claim R-2 R-19 R-20]

## What could go wrong

Controller, vault, fee center, and veGIGA are upgradeable ERC1967 proxies. ProxyAdmin owner() is one 2-of-3 Safe that includes the factory deployer EOA. No timelock was located. The Controller implementation that holds custom Genesis logic is not source-verified this pass. Docs still say every deployed contract is verified. [verified R-13 R-18 R-29] [claim R-6]

## Product and mechanics

A swap can use Classic (full-range constant-product) or concentrated (in-range) pools. Docs: new incentive logic is revenue-driven emissions with no gauge-vote epochs. Liquidity in the pools is not upgradeable; emissions, fee routing, and incentive parameters sit on the protocol contracts. [claim R-2 R-5 R-6]

Classic factory allPairsLength is 28. Giga Positions NFTs total 1949. The token is a 1B ERC-20. Llama tracks GIGA V3 (CL) and GIGA V2 (classic) as child protocols under parent GIGA. [verified R-15 R-17] [claim R-19 R-21]

## Control and security

CL factory owner() is the Controller proxy. Four protocol proxies share ProxyAdmin owner Safe 0x72f4DF35…d4A6, threshold 2 of 3, owners 0x14970344…b70b, 0xa2d88507…6d22, and deployer 0x5F378c7C…AD40 (no code). Controller implementation 0x0d47f2f6…4a48 is not verified. Docs: custom Genesis code is still in audit and the report is not published. [verified R-13 R-14 R-29] [claim R-5]

## Team and provenance

@giga_dex is named in twitter:site on gigadex.fi and docs.gigadex.fi; the bio names the site. Llama twitter is giga_dex. Verified explorer names on the token and veGIGA implementation are ApexToken and VeApexToken. GitHub org GIGA-DEX has zero public repos. Gecko search also returns unrelated Solana GIGA/SOL books. [claim R-1 R-9 R-25 R-26]

## Economics and activity

Llama currentChainTvls Robinhood Chain: GIGA V3 1504019.85 USD at 2026-09-03T04:36:59Z; GIGA V2 315041.13; parent 1819060. summary/dexs/giga-v3 total24h 37216490; summary/fees total24h 20980 total7d 73233; dailyRevenue total24h 4194. GeckoTerminal first GET: FDV 22944374.69, market_cap_usd null, token 24h volume 91358. Token holders_count 329. Figures are the Robinhood Chain slice. [claim R-19 R-20 R-21 R-22 R-23 R-25]

## Material risks

- Protocol proxies are upgradeable; upgrade admin is a 2-of-3 Safe with no timelock located. [verified R-13 R-29]
- Controller implementation source is not verified on Blockscout this pass, against docs that say every contract is verified. [verified R-18] [claim R-3]
- No published audit report for the Genesis custom code. [unknown]
- Llama giga-v3 description is TIA bonding-curve copypasta and is not this product. [disputed R-19]
- Solana GIGA ticker collision in Gecko search. [claim R-25]
- Handle 1 Sep TVL (2M) and Llama V3 slice (1.50M) differ in window and scope. [claim R-12 R-19]

## Verification passes

- Receipts: gigadex.fi, docs pages, X profile and posts, Llama protocol/fees/dexs/parent, GeckoTerminal first GET, GitHub, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-13 R-19]
- Numbers: TVL, volume, and fees are the Robinhood Chain slice from api.llama.fi, not an all-chains total. Bytecode lengths, owner(), allPairsLength, Safe threshold, and token supply are chain 4663 RPC. Holders_count is Blockscout. [verified R-13 R-17 R-19]
- Adversarial: strongest contrary reading is that 0xEce6eCd6…e20B is an unrelated PancakeSwap clone and Llama TVL is Uniswap, or that this is a packed pad. Docs set CL factory and Classic factory to these addresses; RPC owner() on the CL factory is the documented Controller; Blockscout names CLFactory and ClassicFactory. Census AMMs and packed pads do not share the domain, handle, or factory. [inference R-3 R-13 R-14]

## Operations log

- Census.yaml has no giga row; no content/projects/giga.yaml. Inventory names the slug @giga_dex / gigadex.fi / Llama giga-v3.
- www.gigadex.fi and docs.gigadex.fi (what-is-giga, tokenomics, security/overview, security/governance, security/contracts, protocol/liquidity, protocol/emissions) opened 2026-09-03.
- X Latest from:giga_dex: profile, 31 Aug live/CA/trading posts, 1 Sep 2M TVL, 2 Sep CoinGecko and vfat.io. Handle also posted to use only the bio link.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_blockNumber, eth_getCode, owner(), allPairsLength, name/symbol/totalSupply/decimals, ERC1967 impl and admin slots, ProxyAdmin owner(), Safe getThreshold/getOwners.
- Blockscout api/v2 (Accept application/json) for CL factory, Classic factory, token, controller, impl, emission center, veGIGA, ProxyAdmin, Safe, Giga Positions, deployer.
- api.llama.fi/protocol/giga-v3, giga-v2, giga; summary/dexs/giga-v3; summary/fees/giga-v3 and dailyRevenue; summary/fees/giga-v2. Adapter raw GitHub paths 404 this pass. defillama.com/protocol/giga-v3 HTML 403.
- GeckoTerminal first GET HTTP 200 on the Robinhood token; follow-up pool/info/dexes GETs HTTP 429 and skipped.
- api.github.com/orgs/gigadex 404; /users/gigadex 200 empty 2015 user; /orgs/GIGA-DEX 200 with 0 public repos.
- Docs list chain WETH 0x0Bd7D308…Ad73 (aeWETH, 526k holders); treated as chain infra, not a GIGA deployment.
- Distinct from packed pads (Pons and in-flight Coinbarrel/Klik/Sentry/Varo/LetsCash) and from census AMMs up, Fables, SwapHood.
