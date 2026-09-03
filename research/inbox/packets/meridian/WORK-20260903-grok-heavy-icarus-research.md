---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: meridian
name: Meridian
packet_tier: seed
as_of: 2026-09-03T02:15:35Z
prior_packet: null
supersedes: null
owned_slugs: [meridian]
allowed_paths:
  - research/inbox/packets/meridian/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Meridian
  aliases: [Meridian Perps, Meridian Predict, Meridian.xyz, Ethereal]
  symbols: [MLP]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://meridian.xyz
  official_handle: "@meridiandotxyz"
  repository: "NULL — no public repository URL on meridian.xyz, app.meridian.xyz, docs.meridian.xyz, or the @meridiandotxyz bio this pass"
  possible_matches:
    - slug: sight
      signals: [other]
      contrary_signals:
        - "Census Sight is a prediction market at @sight_hood; Meridian Predict is USDe RFQ markets at app.meridian.xyz / @meridiandotxyz"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: trading/perps-native
  secondary_leaves: [markets/prediction]
  mechanism_tags: [derivatives, vault, rwa, oracle, orderbook]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Predict Vault, PredictionMarketEscrow and SecondaryMarketEscrow have non-empty code and verified source on chain 4663; MLP vault 0x24b84023… is live USDe. Official docs still say perpetual-futures mainnet is not live. DefiLlama lists meridian-perps TVL on Robinhood Chain. [R-2] [R-14] [R-17] [R-18] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-20], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-11, CLM-13], note: "" }

links:
  - { kind: site, url: "https://meridian.xyz", authenticity: confirmed }
  - { kind: app, url: "https://app.meridian.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://docs.meridian.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/meridiandotxyz", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/meridianxyz", authenticity: confirmed }

deployments:
  - label: Predict vault (PredictionMarketVault / SRHV)
    role: vault
    address:
      value: "0x79cB914f3F336426E89FaB55A9488AB25770552D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-14, R-18]
  - label: Prediction Market Escrow
    role: other
    address:
      value: "0xE4cea507b19796362A5a28Fa7cb705A3F1866213"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-15, R-18]
  - label: Secondary Market Escrow
    role: other
    address:
      value: "0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16, R-18]
  - label: Meridian Liquidity Provider (AccountableAsyncRedeemVault / MLP)
    role: vault
    address:
      value: "0x24b84023c8e4Da635be228C380C09bfE5271BF9d"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03T02:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-18, R-21]
  - label: Earlier Accountable MLP proxy (USDe balance zero this pass)
    role: vault
    address:
      value: "0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-03T02:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-18, R-25, R-28]

metrics:
  - { kind: tvl, value: 2505942.43, currency: USD, as_of: 2026-09-03T02:15:35Z, window: point, method: "api.llama.fi/protocol/meridian-perps currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-19] }
  - { kind: tvl, value: 265553.60, currency: USD, as_of: 2026-09-03T02:15:35Z, window: point, method: "api.llama.fi/protocol/meridian-predict currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-20] }
  - { kind: tvl, value: 496348.17, currency: USDe, as_of: 2026-09-03T02:10:00Z, window: point, method: "eth_call totalAssets() and USDe.balanceOf on MLP 0x24b84023… at block 53012515", class: claim, receipt_ids: [R-18] }
  - { kind: tvl, value: 265680.81, currency: USDe, as_of: 2026-09-03T02:10:00Z, window: point, method: "USDe.balanceOf Predict vault + escrow at block 53012515", class: claim, receipt_ids: [R-18] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x328e823 (53012515). eth_getCode non-empty: Predict vault 16036 bytes, escrow 20951, secondary 4832, MLP 18511, old MLP proxy 130, USDe 11267. meridiantrade.xyz PerpEngine and EquityVault empty. Predict vault name Meridian Robinhood Vault / SRHV asset USDe owner Safe 0x99A8…212C. MLP name Meridian Liquidity Provider / MLP asset USDe totalAssets 496348.1666820296 USDe.balanceOf 496348.2666820296. Predict vault USDe 156880.1315690304 escrow USDe 108800.67836965102. Safe getThreshold 1 getOwners 0x5aa9…0A44 and 0xdb5a…9ba2." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-14, R-15, R-16, R-17, R-23, R-27, R-28], result: "Blockscout api/v2: all four live Meridian contracts is_contract true is_verified true. Names PredictionMarketVault, PredictionMarketEscrow, SecondaryMarketEscrow, AccountableAsyncRedeemVault. Predict trio created 2026-06-25T18:42:08Z–18:42:42Z from 0x6A225f09… by txs 0x1acafda8…, 0x61d50253…, 0x094d7396…. MLP token name Meridian Liquidity Provider symbol MLP holders 612. Owner 0x99A8…212C name SafeProxy." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:12:00Z, receipt_ids: [R-4, R-6, R-7], result: "@meridiandotxyz website go.meridian.xyz/app redirects to meridian.xyz. docs.meridian.xyz footer links https://x.com/meridiandotxyz and https://discord.gg/meridianxyz. meridian.xyz og:url https://meridian.xyz title mPerps & Prediction Markets | Meridian." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:15:35Z, receipt_ids: [R-19, R-20, R-21, R-26], result: "api.llama.fi/protocol/meridian-perps currentChainTvls Robinhood Chain 2505942.43 tokens USDE 2507240.75695 methodology Count all assets deposited in the Meridian perps LP vault. meridian-predict currentChainTvls 265553.60 tokens USDE 265680.80994. Parent meridian.xyz 2771495. Curators.js robinhood accountableVaults 0x24b84023c8e4Da635be228C380C09bfE5271BF9d labeled Meridian LP vault." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-20], result: "USDe.balanceOf(vault)+balanceOf(escrow) 265680.810000000000000000 matches Llama meridian-predict tokens.USDE 265680.80994. MLP on-chain USDe 496348.27 does not match Llama meridian-perps tokens.USDE 2507240.76." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Meridian Predict is an RFQ prediction market on Robinhood Chain settled in USDe: users broadcast size and pick, makers take the other side, vault and escrow hold collateral, no trading fee.", class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://meridian.xyz", class: verified, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@meridiandotxyz", class: verified, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x79cB914f3F336426E89FaB55A9488AB25770552D", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-14, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xE4cea507b19796362A5a28Fa7cb705A3F1866213", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-15, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-16, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x24b84023c8e4Da635be228C380C09bfE5271BF9d", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-17, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-14, R-17, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: trading/perps-native, class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-1, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Official contracts page: Perpetual Futures mainnet is not yet live. Perps docs describe an offchain-matched CLOB with onchain settlement and mPerps that freeze the mark when the reference market is closed.", class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DefiLlama meridian-perps currentChainTvls Robinhood Chain 2505942.43 USD / tokens USDE 2507240.75695 at 2026-09-03T02:15:35Z", class: verified, observed_at: 2026-09-03T02:15:35Z, receipt_ids: [R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DefiLlama meridian-predict currentChainTvls Robinhood Chain 265553.60 USD / tokens USDE 265680.80994 at 2026-09-03T02:15:35Z", class: verified, observed_at: 2026-09-03T02:15:35Z, receipt_ids: [R-20], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "MLP 0x24b84023… totalAssets() 496348.1666820296 and USDe.balanceOf 496348.2666820296 at block 53012515", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "USDe.balanceOf Predict vault 156880.1315690304 plus escrow 108800.67836965102 equals 265680.81, matching Llama meridian-predict tokens.USDE", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-20], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "Predict vault and PredictionMarketEscrow owner() 0x99A8E932B40eD10DD03ce11e424030efa997212C SafeProxy, 1-of-2", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-23], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: control.threshold, value: "Safe 0x99A8…212C getThreshold 1, getOwners 0x5aa9815d01b6ebb8647baf7354e8cf0cd9040a44 and 0xdb5af497a73620d881561edb508012a5f84e9ba2", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-23], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "docs.meridian.xyz/protocol-reference/audits lists Guardian and ChainSecurity exchange reports; the contracts page still says perpetual-futures mainnet is not live, so those reports are not matched to a 4663 perps engine this pass", class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-2, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@meridiandotxyz.role", value: project, class: claim, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@meridiandotxyz.slug", value: meridian, class: claim, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.alias, value: Ethereal, class: claim, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "third-party-link: meridiantrade.xyz publishes USDG PerpEngine 0xBa7e695B1689C5715259BD15e147C9fc5aEd4141 and EquityVault 0xF8AaFab9A64A8E4AE3D4eF11592fD57cF0112148; eth_getCode on both is empty on 4663. Not the meridian.xyz stack.", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-22], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-23, field: relationship, value: "Distinct from census Sight (@sight_hood), a separate prediction-market name", class: claim, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.secondary-leaf, value: markets/prediction, class: claim, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-18, R-25, R-28], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "MLP is an AccountableAsyncRedeemVault named Meridian Liquidity Provider, asset USDe. Official posts described Phase 1 pre-deposits ahead of mPerps, curated with Neutral Trade, Accountable and Kappa Lab.", class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-9, R-17, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.domain, value: "https://docs.meridian.xyz", class: verified, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: "account.@meridiandotxyz.note", value: "Bio: RWA-focused perps and prediction markets with a full derivatives stack. Powered by Robinhood Chain. Website go.meridian.xyz/app.", class: claim, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-13]
    material_effect: "meridian-perps TVL is 2505942.43 USD on DefiLlama and 496348.17 USDe on MLP totalAssets()/balanceOf at block 53012515; a card that collapses them would misstate the vault"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account posted MLP vault filled 2.5M USDe cap"
    summary: "Official account: The MLP Vault has filled its $2.5M cap. mPerps launches next week."
    occurred_at: 2026-08-28T16:01:15Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: company
    title: "Official account raised MLP cap to 2.5M USDe"
    summary: "Official account: MLP cap raised to $2.5M USDe. Deposit ahead of the Meridian Perps launch."
    occurred_at: 2026-08-27T16:11:59Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-3
    type: company
    title: "Official account posted second Predict competition ended"
    summary: "Official account: The second Meridian Predict Competition has ended. A new one starts immediately."
    occurred_at: 2026-08-12T16:28:23Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: company
    title: "Official account posted Predict's biggest week yet"
    summary: "Official account: Meridian Predict just posted its biggest week yet. Powered by @RobinhoodCrypto."
    occurred_at: 2026-08-11T19:30:18Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "MLP Accountable vault created on Robinhood Chain"
    summary: "Tx 0x74034e80… at 2026-07-29T01:15:03Z; Blockscout names 0x24b84023… AccountableAsyncRedeemVault / MLP."
    occurred_at: 2026-07-29T01:15:03Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17, R-28]
  - id: EVT-6
    type: ct
    title: "Ethena Ecosystem posted USDe prediction markets live"
    summary: "@Ethena_Eco: USDe-native prediction markets are now live on Robinhood Chain, via @meridiandotxyz (formerly Ethereal)."
    occurred_at: 2026-07-01T20:25:06Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [lifecycle, identity.alias, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-7
    type: company
    title: "Official account posted Meridian live as day-one partner"
    summary: "Official account: Meridian is live on Robinhood Chain as a day-one launch partner. Predictions first."
    occurred_at: 2026-07-01T19:50:59Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [lifecycle, identity.handle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-8
    type: onchain
    title: "Predict vault and escrow contracts created on chain 4663"
    summary: "PredictionMarketEscrow, Vault and SecondaryMarketEscrow created 2026-06-25T18:42Z from 0x6A225f09…."
    occurred_at: 2026-06-25T18:42:08Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-15, R-16, R-27]

receipts:
  - { id: R-1, publisher: Meridian, title: "What is Meridian?", url: "https://docs.meridian.xyz/index", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-10, CLM-20, CLM-24], excerpt: "Meridian is an onchain trading venue on Robinhood Chain. It has two main products: Perpetual futures for crypto perps and mutualized perps (mPerps). Prediction markets for single-outcome and combined predictions. Meridian Predict is a prediction markets venue built on Robinhood Chain and settled in USDe." }
  - { id: R-2, publisher: Meridian, title: "Contracts", url: "https://docs.meridian.xyz/protocol-reference/contracts", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-8, CLM-10, CLM-17, CLM-20, CLM-27], excerpt: "Mainnet chain id 4663. Predict Vault 0x79cB914f3F336426E89FaB55A9488AB25770552D. Prediction Market Escrow 0xE4cea507b19796362A5a28Fa7cb705A3F1866213. Secondary Market Escrow 0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df. Perpetual Futures mainnet is not yet live." }
  - { id: R-3, publisher: Meridian, title: "Predict — Fees & Collateral", url: "https://docs.meridian.xyz/trading/predictions/fees-and-collateral", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-24], excerpt: "Meridian Predict does not charge trading fees. You stake your collateral, the counterparty stakes theirs, and the winning side redeems the entire pool; the protocol does not take a cut. Meridian Predict positions are collateralized in USDe, Ethena's synthetic dollar." }
  - { id: R-4, publisher: Meridian, title: "mPerps & Prediction Markets | Meridian", url: "https://www.meridian.xyz/", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-20, CLM-23], excerpt: "canonical https://meridian.xyz. og:title mPerps & Prediction Markets | Meridian. og:description Trade global markets onchain with Mutualized Perpetuals (mPerps) designed for capital-efficient, 24/7 price discovery—and prediction markets. go.meridian.xyz/app 302s here with utm_source=twitter." }
  - { id: R-5, publisher: Meridian, title: "Meridian app", url: "https://app.meridian.xyz/", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "title mPerps & Prediction Markets | Meridian. canonical https://app.meridian.xyz. DefiLlama meridian-perps url field is https://app.meridian.xyz/." }
  - { id: R-6, publisher: Meridian, title: "Support (docs socials)", url: "https://docs.meridian.xyz/protocol-reference/support", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-18, CLM-19, CLM-27], excerpt: "Footer links https://x.com/meridiandotxyz (aria-label X (Twitter)) and https://discord.gg/meridianxyz (aria-label Discord). Canonical host docs.meridian.xyz." }
  - { id: R-7, publisher: "@meridiandotxyz", title: "Meridian profile", url: "https://x.com/meridiandotxyz", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-18, CLM-19, CLM-23, CLM-28], excerpt: "Display name Meridian, handle @meridiandotxyz, bio 'RWA-focused perps and prediction markets with a full derivatives stack. Powered by Robinhood Chain', website https://go.meridian.xyz/app." }
  - { id: R-8, publisher: "@meridiandotxyz", title: "The MLP Vault has filled its $2.5M cap", url: "https://x.com/meridiandotxyz/status/2093368321270059488", published_at: 2026-08-28T16:01:15Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "The MLP Vault has filled its $2.5M cap. mPerps launches next week. Quotes the 2026-08-27 cap-raise post." }
  - { id: R-9, publisher: "@meridiandotxyz", title: "MLP cap raised to $2.5M USDe", url: "https://x.com/meridiandotxyz/status/2093008635043754154", published_at: 2026-08-27T16:11:59Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26, EVT-2], excerpt: "MLP cap raised to $2.5M USDe. Deposit ahead of the Meridian Perps launch to earn USDe rewards, Ethena Rewards, and 20% of all Meridian Points emitted to perps traders. Thread also posted https://app.meridian.xyz/vault." }
  - { id: R-10, publisher: "@meridiandotxyz", title: "The second Meridian Predict Competition has ended", url: "https://x.com/meridiandotxyz/status/2087576944514847088", published_at: 2026-08-12T16:28:23Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "The second Meridian Predict Competition has ended. A new one starts immediately. Prize pool: $5,000 in USDe bonus predictions. 25,000 $CASHCAT." }
  - { id: R-11, publisher: "@meridiandotxyz", title: "Meridian Predict just posted its biggest week yet", url: "https://x.com/meridiandotxyz/status/2087260335447409075", published_at: 2026-08-11T19:30:18Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Meridian Predict just posted its biggest week yet. Record volume in one of the quietest stretches of the sports calendar. Predict anything, combo everything. Powered by @RobinhoodCrypto." }
  - { id: R-12, publisher: "@meridiandotxyz", title: "Meridian is live on Robinhood Chain", url: "https://x.com/meridiandotxyz/status/2072407641545134458", published_at: 2026-07-01T19:50:59Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "Excited to announce that Meridian is live on Robinhood Chain as a day-one launch partner. We've spent months in private alpha refining the product with users for this moment. Predictions first. Perps, RWAs, and more coming soon." }
  - { id: R-13, publisher: "@Ethena_Eco", title: "USDe-native prediction markets are now live", url: "https://x.com/Ethena_Eco/status/2072416223661556093", published_at: 2026-07-01T20:25:06Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: independent, authenticity: confirmed, supports: [CLM-21, EVT-6], excerpt: "USDe-native prediction markets are now live on Robinhood Chain, via @Meridiandotxyz (formerly Ethereal). Meridian Predict opens to everyone from day one, no limits or whitelist, settled entirely in USDe." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x79cB914f3F336426E89FaB55A9488AB25770552D", url: "https://robinhoodchain.blockscout.com/address/0x79cB914f3F336426E89FaB55A9488AB25770552D", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, EVT-8], excerpt: "API v2: hash 0x79cB914f3F336426E89FaB55A9488AB25770552D, name PredictionMarketVault, is_contract true, is_verified true, creator 0x6A225f09E0EbE597F79e86875B3704325d40c84d, creation_transaction_hash 0x61d50253bfaa36af8fe65dcdbb920a34a8bdd9767c8465d19bb0e55e31c4b694. Token name Meridian Robinhood Vault symbol SRHV decimals 18." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xE4cea507b19796362A5a28Fa7cb705A3F1866213", url: "https://robinhoodchain.blockscout.com/address/0xE4cea507b19796362A5a28Fa7cb705A3F1866213", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-8], excerpt: "API v2: hash 0xE4cea507b19796362A5a28Fa7cb705A3F1866213, name PredictionMarketEscrow, is_contract true, is_verified true, creator 0x6A225f09E0EbE597F79e86875B3704325d40c84d, creation_transaction_hash 0x1acafda85399d5703b49baff6df8b68ba5dc6fc2d82f529dc48a4e6fe92bb766." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df", url: "https://robinhoodchain.blockscout.com/address/0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, EVT-8], excerpt: "API v2: hash 0x7E318ef37c3bC3d0cBA205Af2D1Fc9F9CeFEB5df, name SecondaryMarketEscrow, is_contract true, is_verified true, creator 0x6A225f09E0EbE597F79e86875B3704325d40c84d, creation_transaction_hash 0x094d7396de98c5ee9a123adb292ee0ffb3b56626bfaca34965c55de338115b2e." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x24b84023c8e4Da635be228C380C09bfE5271BF9d", url: "https://robinhoodchain.blockscout.com/address/0x24b84023c8e4Da635be228C380C09bfE5271BF9d", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-26, EVT-5], excerpt: "API v2: hash 0x24b84023c8e4Da635be228C380C09bfE5271BF9d, name AccountableAsyncRedeemVault, is_contract true, is_verified true, creator 0x581028426657b0A055f51cD17DCe05B989de4e52, creation_transaction_hash 0x74034e80801ffdaf3d783f190eb86f70842b1d9caf467958e86e8e0de4a4bfb9. Token name Meridian Liquidity Provider symbol MLP holders_count 612 total_supply 2489619058646616952464425." }
  - { id: R-18, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call Meridian stack", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-13, CLM-14, CLM-15, CLM-16, CLM-22, CLM-25], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x328e823 (53012515). Non-empty code on Predict vault/escrow/secondary, MLP 0x24b84023…, old MLP 0xF62c201e…, USDe 0x5d3a1Ff2…. Empty code on meridiantrade.xyz PerpEngine 0xBa7e695B… and EquityVault 0xF8AaFab9…. MLP totalAssets 496348.1666820296 USDe. Predict vault+escrow USDe 265680.81. Safe 0x99A8…212C threshold 1." }
  - { id: R-19, publisher: DefiLlama, title: "Meridian Perps protocol", url: "https://api.llama.fi/protocol/meridian-perps", published_at: null, accessed_at: 2026-09-03T02:15:35Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9, CLM-11], excerpt: "name Meridian Perps, module meridian-perps/index.js, category Derivatives, chains [Robinhood Chain], currentChainTvls['Robinhood Chain'] 2505942.42996, tokens USDE 2507240.75695, methodology Count all assets deposited in the Meridian perps LP vault, url https://app.meridian.xyz/, twitter meridiandotxyz, parentProtocol parent#meridiandotxyz, listedAt 1785942441." }
  - { id: R-20, publisher: DefiLlama, title: "Meridian Predict protocol", url: "https://api.llama.fi/protocol/meridian-predict", published_at: null, accessed_at: 2026-09-03T02:15:35Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, CLM-14], excerpt: "name Meridian Predict, module meridian-predict/index.js, category Prediction Market, chains [Robinhood Chain], currentChainTvls['Robinhood Chain'] 265553.59994, tokens USDE 265680.80994, url https://app.meridian.xyz/predict, twitter meridiandotxyz, parentProtocol parent#meridiandotxyz, listedAt 1783447314." }
  - { id: R-21, publisher: DefiLlama, title: "Curators registry — meridian-perps", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/registries/curators.js", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-7], excerpt: "meridian-perps config methodology 'Count all assets deposited in the Meridian perps LP vault.' blockchains.robinhood.accountableVaults ['0x24b84023c8e4Da635be228C380C09bfE5271BF9d'] // Meridian LP vault." }
  - { id: R-22, publisher: meridiantrade.xyz, title: "Contracts — Meridian Documentation", url: "https://www.meridiantrade.xyz/docs/contracts", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: docs, authority: unknown, authenticity: unconfirmed, supports: [CLM-22], excerpt: "Flag third-party-link. Table lists PerpEngine 0xBa7e695B1689C5715259BD15e147C9fc5aEd4141 and EquityVault 0xF8AaFab9A64A8E4AE3D4eF11592fD57cF0112148 on Robinhood Chain, USDG collateral. Those two addresses returned empty eth_getCode on 4663 this pass. Not linked from meridian.xyz or @meridiandotxyz." }
  - { id: R-23, publisher: Blockscout, title: "Address 0x99A8E932B40eD10DD03ce11e424030efa997212C", url: "https://robinhoodchain.blockscout.com/address/0x99A8E932B40eD10DD03ce11e424030efa997212C", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-16], excerpt: "API v2: hash 0x99A8E932B40eD10DD03ce11e424030efa997212C, name SafeProxy, is_contract true, is_verified true. RPC getThreshold 1; getOwners 0x5aa9815d01b6ebb8647baf7354e8cf0cd9040a44 and 0xdb5af497a73620d881561edb508012a5f84e9ba2." }
  - { id: R-24, publisher: Meridian, title: "Audits", url: "https://docs.meridian.xyz/protocol-reference/audits", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: audit, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "Independent reviewers assessed the perpetual futures exchange contracts. Guardian: Exchange audit. ChainSecurity: Exchange audit. An audit applies to the code and scope stated in its report. Also verify the deployed implementation and proxy address on Contracts." }
  - { id: R-25, publisher: "@meridiandotxyz", title: "Meridian Perps are coming to Robinhood Chain", url: "https://x.com/meridiandotxyz/status/2082874084933636559", published_at: 2026-07-30T17:00:54Z, accessed_at: 2026-09-03T02:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, CLM-26], excerpt: "MLP is a professionally curated multi-venue vault launching in partnership with Neutral Trade, Accountable, and Kappa Lab. Depositors providing USDe to MLP. Linked https://yield.accountable.capital/vaults/4663/0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC." }
  - { id: R-26, publisher: DefiLlama, title: "Meridian.xyz parent protocol", url: "https://api.llama.fi/protocol/meridian.xyz", published_at: null, accessed_at: 2026-09-03T02:15:35Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-11, CLM-12], excerpt: "name Meridian.xyz, url https://meridian.xyz, twitter meridiandotxyz, currentChainTvls['Robinhood Chain'] 2771495, otherProtocols ['Meridian.xyz', 'Meridian Perps', 'Meridian Predict'], description RWA-focused perps and prediction markets with a full derivatives stack. Powered by Robinhood Chain." }
  - { id: R-27, publisher: Blockscout, title: "Predict escrow creation tx 0x1acafda8…", url: "https://robinhoodchain.blockscout.com/tx/0x1acafda85399d5703b49baff6df8b68ba5dc6fc2d82f529dc48a4e6fe92bb766", published_at: 2026-06-25T18:42:08Z, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-8], excerpt: "timestamp 2026-06-25T18:42:08.000000Z, status ok, result success, block_number 203489, from 0x6A225f09E0EbE597F79e86875B3704325d40c84d, created_contract 0xE4cea507b19796362A5a28Fa7cb705A3F1866213." }
  - { id: R-28, publisher: Blockscout, title: "YieldStrategyFactory tx 0x74034e80…", url: "https://robinhoodchain.blockscout.com/tx/0x74034e80801ffdaf3d783f190eb86f70842b1d9caf467958e86e8e0de4a4bfb9", published_at: 2026-07-29T01:15:03Z, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "timestamp 2026-07-29T01:15:03.000000Z, status ok, result success, block_number 22051004, from 0x94f7339dC083c4995C3A9b870a3f66506AFb222A, to YieldStrategyFactory 0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f. Blockscout also lists this hash on MLP 0x24b84023… and on ERC1967Proxy 0xF62c201e…." }

gaps:
  - { priority: P0, question: "Why does DefiLlama meridian-perps report ~2.51M USDe while MLP totalAssets() and USDe.balanceOf are 496348 at block 53012515?", checked: "api.llama.fi/protocol/meridian-perps, curators.js accountableVaults 0x24b84023…, eth_call totalAssets/asset/balanceOf, 2026-09-03", next: "read AccountableAsyncRedeemVault accounting (idle vs deployed NAV) in verified source and any Neutral Trade custody addresses" }
  - { priority: P0, question: "Is a perpetual-futures engine deployed on 4663 since the 2026-08-28 'mPerps launches next week' post, despite docs still saying mainnet is not live?", checked: "docs.meridian.xyz/protocol-reference/contracts, @meridiandotxyz through 2026-08-28, eth_getCode on meridiantrade.xyz PerpEngine empty, 2026-09-03", next: "GET any production trading API config equivalent of api.meridiantest.net/v1/rpc/config and search Blockscout for a verifyingContract" }
  - { priority: P1, question: "Do the Guardian and ChainSecurity exchange reports match any bytecode on 4663?", checked: "docs.meridian.xyz/protocol-reference/audits linked Google Drive files named, not opened page-by-page this pass", next: "download both PDFs and match commit/scope to a mainnet address once perps contracts are published" }
  - { priority: P1, question: "Who can pause Predict markets, change oracles, or sweep the vault besides Safe 0x99A8…212C?", checked: "owner() on vault and escrow; secondary owner() reverted; no pause-role call this pass", next: "read verified PredictionMarketVault/Escrow modifiers and any oracle setter" }
  - { priority: P2, question: "Is meridiantrade.xyz an unrelated USDG equity-perp product, a clone, or a later Meridian surface?", checked: "meridiantrade.xyz docs, empty eth_getCode on its PerpEngine/EquityVault, no link from meridian.xyz or @meridiandotxyz, 2026-09-03", next: "record it as a discovery candidate only if an official surface cross-links a live 4663 address" }
---

# Meridian — research packet

## What it is

The chain's USDe prediction market, with a Meridian Liquidity Provider vault that DefiLlama lists as meridian-perps. A user deposits USDe, takes RFQ singles or combos, or deposits MLP. Official docs still list perpetual-futures mainnet as not live. meridian.xyz and @meridiandotxyz run it.

Themes: rwa, prediction, vault

## Why it matters

This is the census native-perps name with a live USDe prediction book and a filled MLP vault on chain 4663. DefiLlama splits it as meridian-perps and meridian-predict under parent meridian.xyz. Sight is a second prediction-market census row and does not share this handle or these addresses.

## What could go wrong

Official docs still say perpetual-futures mainnet is not live, so a card that treats Llama's meridian-perps TVL as open perps trading would overstate the product. Predict vault and escrow are owned by a 1-of-2 Safe. Llama's ~$2.51M meridian-perps figure does not match the 496k USDe sitting in the MLP vault this pass.

## Product and mechanics

Meridian Predict is an RFQ market: a user posts size and a pick, makers compete, and the vault plus escrow hold USDe until settlement. Docs state there is no protocol trading fee. [claim R-1 R-3]

Perps docs describe an offchain-matched CLOB with onchain settlement and mPerps that freeze the last accepted oracle mark when the reference market is closed. The contracts page still says perpetual-futures mainnet is not yet live. [claim R-1 R-2]

MLP is an AccountableAsyncRedeemVault (symbol MLP, asset USDe). Official posts described Phase 1 USDe pre-deposits ahead of mPerps with Neutral Trade, Accountable and Kappa Lab. [claim R-9 R-17 R-25]

## Control and security

Predict vault and PredictionMarketEscrow owner() is SafeProxy 0x99A8E932B40eD10DD03ce11e424030efa997212C. getThreshold is 1 with two owners. SecondaryMarketEscrow owner() reverted. MLP owner() reverted. [verified R-18 R-23]

docs.meridian.xyz lists Guardian and ChainSecurity exchange audit PDFs. Those reports are not matched to a 4663 perps engine this pass because the contracts page still says perps mainnet is not live. [claim R-2 R-24]

## Team and provenance

@meridiandotxyz website go.meridian.xyz/app redirects to meridian.xyz. docs.meridian.xyz footer links that handle and discord.gg/meridianxyz. @Ethena_Eco called the project formerly Ethereal. No public repository URL was on the site, docs or bio this pass. [verified R-4 R-6 R-7]

meridiantrade.xyz publishes a USDG PerpEngine and EquityVault on chain 4663; both addresses have empty code. Flag third-party-link; do not merge. [verified R-18 R-22]

## Economics and activity

DefiLlama meridian-perps Robinhood Chain TVL 2505942.43 USD (tokens USDE 2507240.76) at 2026-09-03T02:15:35Z. MLP totalAssets() 496348.17 and USDe.balanceOf 496348.27 at block 53012515. Those two figures are open as CON-1. [claim R-19] [verified R-18]

DefiLlama meridian-predict Robinhood Chain TVL 265553.60 USD (tokens USDE 265680.81). USDe.balanceOf on the Predict vault plus escrow is 265680.81 at the same block. [verified R-18 R-20]

Official 2026-08-28 post: MLP vault filled its $2.5M cap; mPerps launches next week. [claim R-8]

## Material risks

- Predict vault and escrow are owned by a 1-of-2 Safe; a single owner key can change that surface. [verified R-18 R-23]
- Official contracts page still says perpetual-futures mainnet is not live, while Llama lists a $2.51M meridian-perps row. [claim R-2 R-19]
- MLP on-chain USDe is 496k against Llama's 2.51M USDE token figure. [verified R-18 R-19]
- meridiantrade.xyz publishes different USDG perps addresses with empty code on 4663. [verified R-18 R-22]

## Verification passes

- Receipts: every URL above was opened on 2026-09-03 and its excerpt copied from the page or API. [verified R-1 R-2 R-14 R-17 R-19]
- Numbers: Predict USDe balances match Llama meridian-predict tokens.USDE; meridian-perps does not match MLP totalAssets. [verified R-18 R-20] [claim R-19]
- Adversarial: the strongest contrary reading is that meridian-perps TVL is live perps open interest, or that meridiantrade.xyz is this protocol. Docs still say perps mainnet is not live, and meridiantrade.xyz PerpEngine has empty code. [inference R-2 R-18 R-22]

## Operations log

- Read content/census.yaml, content/projects/meridian.yaml, content/pulled/meridian.yaml, content/sources/meridian.yaml, content/feed/meridian.yaml.
- Opened docs.meridian.xyz (index, contracts, predict fees, audits, support), meridian.xyz, app.meridian.xyz, go.meridian.xyz/app redirect, meridiantrade.xyz/docs/contracts.
- RPC https://rpc.mainnet.chain.robinhood.com eth_chainId, eth_blockNumber, eth_getCode, eth_call name/symbol/decimals/owner/asset/totalAssets/balanceOf/getThreshold/getOwners, eth_getStorageAt EIP-1967; User-Agent required (HTTP 403 without it).
- Blockscout API v2 addresses and transactions; User-Agent required.
- DefiLlama api.llama.fi/protocol/meridian-perps, meridian-predict, meridian.xyz; GitHub DefiLlama-Adapters registries/curators.js.
- X: @meridiandotxyz profile and posts 2093368321270059488, 2093008635043754154, 2087576944514847088, 2087260335447409075, 2072407641545134458, 2082874084933636559; @Ethena_Eco 2072416223661556093.
- Predict adapter path DefiLlama-Adapters/projects/meridian-predict/index.js 404 this pass; dimension-adapters dexs/meredian-predict.ts holds the same escrow addresses.
- Time: ~90 minutes.
