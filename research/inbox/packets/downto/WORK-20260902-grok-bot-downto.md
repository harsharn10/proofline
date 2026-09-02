---
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-bot-downto
producer: grok-bot
role: collector
base_sha: dc8897ec4b173366d3414775142d8d9eb1143a26
slug: downto
name: Down to Finance
packet_tier: seed
as_of: 2026-09-02T13:32:00Z
prior_packet: null
owned_slugs: [downto]
allowed_paths:
  - research/inbox/packets/downto/WORK-20260902-grok-bot-downto.md
identity:
  canonical_name: Down to Finance
  aliases: ["Down To Finance", "DETF"]
  symbols: ["DTF"]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://downto.finance
  official_handle: "@downto_finance"
  repository: "NULL — app footer links https://github.com with no project path; no org was located this round"
  possible_matches:
    - slug: pons
      signals: [shared-address, other]
      contrary_signals:
        - "DTF token launchFactory equals the canonical Pons v2 factory; the claimed DETF product is not the Pons pad"
        - "Census Pons is the bonding-curve launchpad; Down to Finance is a launched token plus a claimed basket machine"
classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [rwa, vault, bonding-curve]
  ecosystem_role: observe
  lifecycle: announced
  coverage_recommendation: candidate
  evidence_state: conflicted
  rationale: "Official site and learn pages describe permissionless DETF baskets; $DTF is a verified PonsV2LauncherToken on chain 4663; app JS ships a chainId-4663 package map whose factories exist and have explorer-verified source. A site Live badge is not lifecycle mainnet. DefiLlama has no Down to Finance protocol row this pass. [R-1] [R-3] [R-4] [R-7] [R-16]"
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-3, CLM-4], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-3], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-5, CLM-14], note: "" }
links:
  - { kind: site, url: "https://downto.finance", authenticity: confirmed }
  - { kind: app, url: "https://app.downto.finance/explore", authenticity: confirmed }
  - { kind: docs, url: "https://app.downto.finance/learn", authenticity: confirmed }
  - { kind: x, url: "https://x.com/downto_finance", authenticity: unconfirmed }
deployments:
  - label: DTF token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3]
  - label: Pons v2 bonding curve for the DTF token
    role: other
    address:
      value: "0x912467fc912f0f88df3b0d221946de78f38d4559"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6]
  - label: DiamondPackageCallBackFactory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0x976949aB55830fA4794bF40C88ea7D7567931003"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8]
  - label: UniswapV4SingleStandardExchangeDETDFPkg (app JS chainId 4663 map)
    role: other
    address:
      value: "0x961b4E050492E2744B8D20404Cd43A11D371577c"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-8]
  - label: Create3Factory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-8]
  - label: UniswapV4HookDiamondPackageCallBackFactory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0x8BB5FCC67e8CCa44DC41dd08A5e2b2B392C22945"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-8]
  - label: indexedexManager / vaultRegistry / vaultFeeOracle proxy (app JS chainId 4663 map)
    role: proxy
    address:
      value: "0x09682b00D873D913ada0bB69B4D4c9631810d0bc"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-11, R-8]
  - label: feeCollector proxy (app JS chainId 4663 map)
    role: other
    address:
      value: "0x20af9A1e21a59a411cd3b0C40E70AF9084770b2E"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-12, R-8]
  - label: App JS owner / deployer (EOA)
    role: admin
    address:
      value: "0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: false
      explorer_source_verified: false
    receipt_ids: [R-13, R-8]
metrics:
  - { kind: holders, value: 8914, currency: null, as_of: 2026-09-02T13:16:32Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xee5576Fa1Bcaa380e591D01245f406f3f384eb01 holders_count", class: claim, receipt_ids: [R-14] }
  - { kind: tvl, value: 758972633.72, currency: USD, as_of: 2026-09-02T13:31:31Z, window: point, method: "api.llama.fi/v2/chains name Robinhood Chain chainId 4663 live tvl field; chain slice not a Down to Finance protocol row", class: claim, receipt_ids: [R-7] }
reproductions:
  - { id: REP-1, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T13:12:00Z, receipt_ids: [R-3], result: "Token page and getsourcecode: is_contract true; ContractName PonsV2LauncherToken; SourceCode non-empty; launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve 0x912467fc912f0f88df3b0d221946de78f38d4559; socials.twitter https://x.com/downto_finance" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T13:16:00Z, receipt_ids: [R-4, R-5], result: "api/v2/addresses: DiamondPackageCallBackFactory and UniswapV4SingleStandardExchangeDETDFPkg are contracts with is_verified true and non-empty SourceCode on robinhoodchain.blockscout.com" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T13:16:00Z, receipt_ids: [R-6], result: "getsourcecode for 0x912467fc912f0f88df3b0d221946de78f38d4559: ContractName PonsV2BondingCurve; SourceCode length 43741; IsProxy false" }
  - { id: REP-4, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T13:16:20Z, receipt_ids: [R-13], result: "api/v2/addresses/0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B is_contract false" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T13:31:31Z, receipt_ids: [R-7, R-15, R-16], result: "api.llama.fi/v2/chains Robinhood Chain chainId 4663 live tvl 758972633.7248058; historicalChainTvl 2026-09-02 00:00 UTC 759579011; no protocols row named Down to Finance, DTF, or Arrow Finance CDP on Robinhood Chain" }
claims:
  - { id: CLM-1, field: product.mechanism, value: "Permissionless DETF (Decentralized ETF): one token for a chosen basket; mint, hold, or bond; first bond turns a new DETF on; baskets may hold Morpho vault shares and Uniswap v4 liquidity", class: claim, observed_at: 2026-09-02T13:10:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://downto.finance", class: claim, observed_at: 2026-09-02T13:10:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", class: verified, observed_at: 2026-09-02T13:12:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x961b4E050492E2744B8D20404Cd43A11D371577c", class: verified, observed_at: 2026-09-02T13:16:00Z, receipt_ids: [R-4, R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: relationship, value: "DTF token is a Pons v2 launch token (PonsV2LauncherToken) whose launchFactory is the canonical Pons v2 factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-02T13:12:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: identity.handle, value: "@downto_finance", class: verified, observed_at: 2026-09-02T13:12:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: candidate, value: "downto | Down to Finance | @downto_finance | downto.finance", class: claim, observed_at: 2026-09-02T13:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: "DTF", class: verified, observed_at: 2026-09-02T13:12:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-02T13:32:00Z, receipt_ids: [R-1, R-7, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: lifecycle, value: mainnet, class: inference, observed_at: 2026-09-02T13:16:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: account.@downto_finance.role, value: project, class: claim, observed_at: 2026-09-02T13:32:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: account.@downto_finance.listen, value: medium, class: claim, observed_at: 2026-09-02T13:32:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: account.@downto_finance.slug, value: downto, class: claim, observed_at: 2026-09-02T13:32:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "App footer on 2026-09-02 displayed Audits: pending; no report URL was located", class: claim, observed_at: 2026-09-02T13:11:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: other, value: "No DefiLlama protocol row named Down to Finance, DTF, or Arrow Finance CDP on chain Robinhood Chain this pass; RH Arrow rows are ArrowPad and ArrowPad.fun only", class: verified, observed_at: 2026-09-02T13:31:31Z, receipt_ids: [R-16], reproduction_ids: [REP-5], supersedes: null }
conflicts:
  - id: CON-1
    field: lifecycle
    claim_ids: [CLM-9, CLM-10]
    material_effect: "Whether the DETF machine is live or still pre-open changes coverage from announced pad-output to a native basket protocol"
    status: open
    resolution: null
events:
  - id: EVT-1
    type: onchain
    title: "DTF token on 4663 is a PonsV2LauncherToken"
    summary: "Explorer-verified source names the DTF contract PonsV2LauncherToken and stores the canonical Pons v2 factory as launchFactory."
    occurred_at: 2026-09-02T13:12:00Z
    observed_at: 2026-09-02T13:12:00Z
    affected_fields: [deployment.address, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-3]
receipts:
  - { id: R-1, publisher: Down To Finance, title: "Landing page", url: "https://downto.finance/", published_at: null, accessed_at: 2026-09-02T13:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-7, CLM-8, CLM-9, CLM-11], excerpt: "A DETF is a Decentralized ETF. One token for any basket of assets you pick. Anyone can create a DETF. The official fee-accruing token is $DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01. $DTF-DETF The protocol's own basket Live." }
  - { id: R-2, publisher: Down To Finance, title: "Learn — How DETFs work", url: "https://app.downto.finance/learn", published_at: null, accessed_at: 2026-09-02T13:11:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "DETF means Decentralized ETF. Make it, bond to turn it on, then mint or burn. App Network selector lists Robinhood. Footer: Audits: pending." }
  - { id: R-3, publisher: Blockscout, title: "DTF token 0xeE5576Fa…", url: "https://robinhoodchain.blockscout.com/token/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-02T13:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-6, CLM-7, CLM-8, CLM-11, CLM-12, CLM-13, EVT-1], excerpt: "getsourcecode ContractName PonsV2LauncherToken; SourceCode non-empty; launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve 0x912467fc912f0f88df3b0d221946de78f38d4559; socials twitter https://x.com/downto_finance" }
  - { id: R-4, publisher: Blockscout, title: "UniswapV4SingleStandardExchangeDETDFPkg", url: "https://robinhoodchain.blockscout.com/address/0x961b4E050492E2744B8D20404Cd43A11D371577c", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-10], excerpt: "api/v2/addresses: is_contract true; name UniswapV4SingleStandardExchangeDETDFPkg; is_verified true; getsourcecode SourceCode non-empty." }
  - { id: R-5, publisher: Blockscout, title: "DiamondPackageCallBackFactory", url: "https://robinhoodchain.blockscout.com/address/0x976949aB55830fA4794bF40C88ea7D7567931003", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "api/v2/addresses: is_contract true; name DiamondPackageCallBackFactory; is_verified true; getsourcecode SourceCode non-empty." }
  - { id: R-6, publisher: Blockscout, title: "PonsV2BondingCurve for DTF", url: "https://robinhoodchain.blockscout.com/address/0x912467fc912f0f88df3b0d221946de78f38d4559", published_at: null, accessed_at: 2026-09-02T13:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "getsourcecode ContractName PonsV2BondingCurve; SourceCode length 43741; IsProxy false." }
  - { id: R-7, publisher: DefiLlama, title: "Robinhood Chain live slice", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-02T13:31:31Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9, CLM-15], excerpt: "name Robinhood Chain; chainId 4663; tvl 758972633.7248058 at 2026-09-02T13:31:31Z. Same endpoint at ~13:10 UTC this round: tvl 757115125.62. Chain slice is not an Arrow CDP or Down to Finance protocol row." }
  - { id: R-8, publisher: Down To Finance, title: "App JS chainId 4663 address map", url: "https://app.downto.finance/_next/static/chunks/7914-a8d287cbb69235e5.js", published_at: null, accessed_at: 2026-09-02T13:14:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-10], excerpt: "JSON.parse blob with chainId 4663, networkProfile anvil_robinhood_main, rpcUrl https://rpc.mainnet.chain.robinhood.com, diamondPackageFactory 0x976949aB55830fA4794bF40C88ea7D7567931003, cpDetfPkg 0x961b4E050492E2744B8D20404Cd43A11D371577c." }
  - { id: R-9, publisher: Blockscout, title: "Create3Factory 0xD7786b10…", url: "https://robinhoodchain.blockscout.com/address/0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "api/v2/addresses: is_contract true; name Create3Factory; is_verified true; getsourcecode SourceCode non-empty." }
  - { id: R-10, publisher: Blockscout, title: "UniswapV4HookDiamondPackageCallBackFactory", url: "https://robinhoodchain.blockscout.com/address/0x8BB5FCC67e8CCa44DC41dd08A5e2b2B392C22945", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "api/v2/addresses: is_contract true; name UniswapV4HookDiamondPackageCallBackFactory; is_verified true." }
  - { id: R-11, publisher: Blockscout, title: "indexedexManager proxy 0x09682b00…", url: "https://robinhoodchain.blockscout.com/address/0x09682b00D873D913ada0bB69B4D4c9631810d0bc", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "api/v2/addresses: is_contract true; name MinimalDiamondCallBackProxy; is_verified true. Proxy shell only this round." }
  - { id: R-12, publisher: Blockscout, title: "feeCollector proxy 0x20af9A1e…", url: "https://robinhoodchain.blockscout.com/address/0x20af9A1e21a59a411cd3b0C40E70AF9084770b2E", published_at: null, accessed_at: 2026-09-02T13:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "api/v2/addresses: is_contract true; name MinimalDiamondCallBackProxy; is_verified true. Proxy shell only this round." }
  - { id: R-13, publisher: Blockscout, title: "Deployer EOA 0x72BeA6Fa…", url: "https://robinhoodchain.blockscout.com/address/0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B", published_at: null, accessed_at: 2026-09-02T13:16:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "api/v2/addresses: is_contract false." }
  - { id: R-14, publisher: Blockscout, title: "DTF token holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xee5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-02T13:16:32Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "name Down to Finance; symbol DTF; holders_count 8914; total_supply 1000000000000000000000000000." }
  - { id: R-15, publisher: DefiLlama, title: "Robinhood Chain historicalChainTvl", url: "https://api.llama.fi/v2/historicalChainTvl/Robinhood%20Chain", published_at: null, accessed_at: 2026-09-02T13:31:31Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9], excerpt: "Daily snapshots UTC: 2026-08-31 711357020; 2026-09-01 723221843; 2026-09-02 00:00 759579011. Chain slice; not a protocol TVL." }
  - { id: R-16, publisher: DefiLlama, title: "protocols API Robinhood Chain filter", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-02T13:31:31Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9, CLM-15], excerpt: "Robinhood Chain rows named Arrow are ArrowPad.fun (tvl 527.48, twitter Arrowpadfun) and ArrowPad (tvl 1.00, twitter RobinArrowPad). No Down to Finance, DTF, or Arrow Finance CDP row. Tokens existing is not a CDP live row." }
gaps:
  - { priority: P0, question: "Has any DETF been created and bonded on 4663, or are the verified packages unused until a documented product open?", checked: "site, learn, app JS 4663 map, Blockscout v2 on package factories 2026-09-02; desk browser could not load x.com so no official-handle Latest this round", next: "read a live DETF diamond on the explorer and match it to app.downto.finance/explore" }
  - { priority: P1, question: "Arrow CDP machine contracts still unlabeled?", checked: "staking.arrowfinance.io still loads Borrow; aUSD 0x4f11d760… SourceCode empty; ARROW token source verified; Llama protocols 2026-09-02T13:31:31Z has ArrowPad / ArrowPad.fun only, no Arrow Finance CDP row", next: "docs.arrowfinance.io contract list or explorer labels for vault/CDP" }
  - { priority: P1, question: "Is Mancer public-open, and is the audit published?", checked: "mancer.xyz UI loaded 2026-09-02 with Connect wallet and No data yet for MANCER; no audit URL in that HTML; x.com Latest not opened this round", next: "project docs PDF and explorer for a public router; X hunt stays open" }
  - { priority: P1, question: "Are the nine SCOPL V2 addresses from the SpyWolf writeup published on an official site or docs page?", checked: "scopl.live HTML 2026-09-02 has no 40-byte address besides the zero address; token 0xaA40e79E… already in census; @scopl_live Latest not opened this round", next: "a docs page that lists OrderPolicy and the eight sibling contracts" }
  - { priority: P1, question: "Is there a CETS contract on chain 4663?", checked: "Blockscout getToken 0x07f5b6823751c2e2cd4560f28af75ff887102241 returned Contract address not found 2026-09-02", next: "keep wrong-chain on BSC 0xB0c2aB5af4028461acE3f6e1C33a4eE1404E7777 until a 4663 CA appears" }
  - { priority: P2, question: "Did Longshot close the next-week window on chain 4663?", checked: "uselongshot.xyz HTML 2026-09-02 includes Official contract 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 and Protocol status Live; @uselongshot Latest not opened this round", next: "explorer reproduction of the factory, not the token page alone" }
  - { priority: P2, question: "Hedgehogs still missing from census vs StonkBrokers / Quotrons / HOODIES?", checked: "hedgehogs.tech 2026-09-02 still lists $HEDGE 0x8226DDA5F73619DEdC671e09Be738fA308da1944; no hedge slug in content/census.yaml", next: "compiler census row if the controller accepts the round-22 candidate" }
  - { priority: P2, question: "Does Wire still launch on Pons, and what is the fee path?", checked: "wirebot.xyz 2026-09-02 is a pinball-parts store, not the @wirebotRH product; no new Wire CA this round; official-handle Latest not opened", next: "official site if one is published, plus Pons launch receipts" }
---

# Down to Finance — research packet

## What it is

Down to Finance is a claimed permissionless DETF (Decentralized ETF) product on Robinhood Chain: one token for a basket the creator picks, with mint, hold, and bond as the three user actions. The official fee-accruing token $DTF at `0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01` is a verified Pons v2 launch token, not a separately documented DETF diamond. App JavaScript for chain 4663 names package factories that do exist and have explorer-verified source. The landing page marks `$DTF-DETF` Live; that badge is a project-site claim, not the mainnet bar.

## Operations log

- Follow-list / Latest: desk browser could not load x.com this round (Auto-review). No tweet URLs, status ids, or quoted posts are filed. Handle `@downto_finance` is taken from the verified token constructor `socials.twitter` on Blockscout, not from an opened X profile.
- Gap hunt: `downto` / `@downto_finance` / downto.finance. Absent from `content/census.yaml` and from `research/inbox/grok-2026-09-01/name-inventory.yaml`. Handle is already on `content/accounts.yaml` as watch with note observe until a 4663 CA; Round 22 deferred census candidacy for that reason. This round records the CA from the official site and explorer. Evidence is site, app JS, and explorer. X Latest not opened.
- Collision: DTF token `launchFactory` is the census Pons v2 factory. Distinct from NetNet, Index, Statics, Robindex, and Hedgehogs. Explorer and site ticker is DTF.
- Explorer: robinhoodchain.blockscout.com with a browser User-Agent. `exists_on_4663` flipped true only from api/v2 or getsourcecode this round.
- DefiLlama chain-slice, URL + date: `https://api.llama.fi/v2/chains` Robinhood Chain chainId 4663 live tvl 757115125.62 at ~13:10 UTC and 758972633.72 at 13:31:31Z 2026-09-02. `https://api.llama.fi/v2/historicalChainTvl/Robinhood%20Chain` daily UTC 2026-08-31 711357020, 2026-09-01 723221843, 2026-09-02 00:00 759579011. No Down to Finance protocol row. No Arrow Finance CDP row; RH Arrow names are ArrowPad and ArrowPad.fun. Tokens existing is not CDP live.
- Standing hunts that needed an official X Latest remain open: Mancer public-open/audit, SCOPL V2 nine addresses, Longshot next-week, Wire fee path. Site/explorer checks this round did not close them. CETS 0x07f5b682… is still not a 4663 contract. Hedgehogs still off census. Arrow CDP core still unlabeled.
- Bankr graduations: none added.
- Account desk: proposals only, as packet claims on `account.@downto_finance.*`. Prior desk listen was low until a 4663 CA; this packet proposes listen medium now that the token and package factories are explorer-checked. `research/inbox/account-desk.yaml` was not edited.
- Allowed path this run: this packet only.
- Correction 2026-09-02T13:32Z: retracted social receipts that quoted X posts. Lifecycle announced now rests on site plus Llama, not on tweets.
