---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: vimen
name: Vimen
packet_tier: seed
as_of: 2026-09-03T00:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [vimen]
allowed_paths:
  - research/inbox/packets/vimen/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Vimen
  aliases: ["Vimen baskets"]
  symbols: [MAG7, AI6, HOOD6, HOOD6V2, VIRTS, VVIRT, VMAG, VCT, VIM]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.vimen.org
  official_handle: "@vimenprotocol"
  repository: https://github.com/vimenprotocol/vimen
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "PonsVault $VAULT 0xFdae23CE76018Da62507bB5ef20e6ef5450e8312 is PonsLauncherToken created 2026-07-27T20:43:47Z via PonsVaultLauncher.launchWithVault; creator 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
        - "Vimen MAG7 0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF is BasketToken created 2026-07-11T23:36:21Z by EOA 0xB15e116FCa1b5795afa8410acBF31bF46132b189; $VIM 0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF is a Virtuals AgentTokenV4 clone"
        - "Official surfaces differ: ponsvault.com / ponsfamily.com / @ponsdotfamily versus www.vimen.org / @vimenprotocol"
    - slug: robinhood-index-vaults
      signals: [other]
      contrary_signals:
        - "Census Robinhood Index Vaults is a testnet-only ERC-4626 rIDX vault at github.com/nsvoud-dev/robinhood-index-vaults"
        - "Vimen baskets are live ERC-20 in-kind vaults on 4663 with mint/redeem, not rIDX"
        - "No shared domain, handle, repository, or reproduced address"
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is a 3% fee-funded Stock Token distributor at theindex.finance / @TheIndexFi, token 0x56910D4409F3a0C78C64DD8D0545FF0705389870"
        - "Vimen is an in-kind redeemable basket at www.vimen.org / @vimenprotocol"
        - "No shared domain, handle, or reproduced address"
    - slug: robindex
      signals: [other]
      contrary_signals:
        - "Census Robindex is a market scanner at robindex.pro / @robindexpro"
        - "Vimen is a basket protocol, not a scanner"
        - "No shared domain, handle, or reproduced address"
    - slug: statics-protocol
      signals: [other]
      contrary_signals:
        - "Census Statics is a Doppler Genesis / Operators stack at staticsprotocol.com / @StaticsProtocol, STATICS 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd"
        - "Vimen MAG7/AI6/HOOD6 are BasketToken vaults; $VIM is a Virtuals AgentTokenV4 clone"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: []
  mechanism_tags: [index, vault, rwa, agent, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "MAG7, AI6, HOOD6, factories, VimenZap4 and $VIM have non-empty code on chain 4663; MAG7/AI6/HOOD6/factories/zap source is verified BasketToken. Frozen owner() is empty; guardian() is Safe 0xc7aB…Ec02 (1-of-1). $VIM is a Virtuals AgentTokenV4 clone, not PonsVault $VAULT. Llama Robinhood Chain TVL is basket backing. [R-3] [R-5] [R-8] [R-14] [R-24]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-9, CLM-10], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-12, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-13, CLM-17], note: "" }

links:
  - { kind: site, url: "https://www.vimen.org", authenticity: confirmed }
  - { kind: app, url: "https://app.vimen.org", authenticity: confirmed }
  - { kind: docs, url: "https://docs.vimen.org/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/vimenprotocol", authenticity: confirmed }
  - { kind: github, url: "https://github.com/vimenprotocol/vimen", authenticity: confirmed }

deployments:
  - label: MAG7 basket (BasketToken)
    role: vault
    address:
      value: "0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-17]
  - label: AI6 basket (BasketToken)
    role: vault
    address:
      value: "0x8fF1d77a09A3292b34457175710Bb0C0A1C22601"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6]
  - label: HOOD6 basket (BasketToken)
    role: vault
    address:
      value: "0x0CE04932513Fa1768B5b9444c6A21Ae0DdA005C5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-7]
  - label: HOOD6V2 basket
    role: vault
    address:
      value: "0x42AF29661e5499e526A1e8e0179fc5272c07F4aE"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3]
  - label: VIRTS basket
    role: vault
    address:
      value: "0xFF71762cB8bc2a6890eC34Ce3a311d9e410c0Aa7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3]
  - label: VVIRT agentic basket
    role: vault
    address:
      value: "0xca485830173695650b6bcD773fA0443E87656f5b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-13, R-19]
  - label: VMAG agentic basket
    role: vault
    address:
      value: "0x39b3B771D6fAbF4eFD775Ae090AfDdf14f82520F"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3]
  - label: VCT agentic basket
    role: vault
    address:
      value: "0x43ec05E56CE74bbaFeaE3049e669b14C04347629"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3]
  - label: VIM token (AgentTokenV4 EIP-1167 clone)
    role: token
    address:
      value: "0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-8, R-16, R-18, R-23]
  - label: AgentTokenV4 implementation
    role: implementation
    address:
      value: "0x581f7B996E6D3E436c537989157c9CB36421419b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8]
  - label: BasketFactory (frozen shelf)
    role: factory
    address:
      value: "0x6D8C85C8Ac7620aBb3010EE29b20Da1c76093BEf"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10, R-15]
  - label: BasketFactory2 (agentic shelf)
    role: factory
    address:
      value: "0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-11, R-15, R-19]
  - label: BasketFactory legacy (Llama)
    role: factory
    address:
      value: "0x51dB1A456CA238843A159589Cf28710616b2F988"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-15]
  - label: VimenZap4
    role: router
    address:
      value: "0x4e1D58DDceFf8f340690D0f7F7FDb37FB13Ff388"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-12]
  - label: Protocol Safe (frozen guardian / fee recipient)
    role: multisig
    address:
      value: "0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-9]
  - label: CuratorGuardian (agentic / factory guardian)
    role: admin
    address:
      value: "0xc93B74B490D1bDD71045766C90F1F743D0c356Be"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-25, R-26]

metrics:
  - { kind: tvl, value: 9452.82436, currency: USD, as_of: 2026-09-03T00:17:35Z, window: point, method: "api.llama.fi/protocol/vimen currentChainTvls['Robinhood Chain']; basket backing plus USDG rebalance buffer; wallets and distributor pots excluded", class: claim, receipt_ids: [R-14, R-15] }
  - { kind: market_cap, value: 235686, currency: USD, as_of: 2026-09-03T00:40:00Z, window: point, method: "DexScreener latest/dex/tokens VIM Uniswap VIM/VIRTUAL pair 0x3b2C7B54e928e23478F75481FCdd600851A9355b marketCap; token book, not basket TVL", class: claim, receipt_ids: [R-16] }
  - { kind: volume_24h, value: 18160.41, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "DexScreener same VIM/VIRTUAL pair volume.h24", class: claim, receipt_ids: [R-16] }
  - { kind: holders, value: 669, currency: null, as_of: 2026-09-03T00:40:00Z, window: point, method: "Blockscout GET /api/v2/addresses/0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF token.holders_count", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 7, currency: null, as_of: 2026-09-03T00:40:00Z, window: point, method: "Blockscout GET /api/v2/addresses/0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF token.holders_count MAG7", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-6, R-7, R-17], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3299abd (53058237). MAG7/AI6/HOOD6 eth_getCode 6896 bytes each. name()/symbol() Vimen MAG7 Basket/MAG7, Vimen AI Six Basket/AI6, Vimen Hood Six Basket/HOOD6; decimals 18; owner() empty; guardian() and feeRecipient() 0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02. MAG7 constituents() length 7; HOOD6 length 6. MAG7 totalSupply 53.325670672318175e18; AI6 1e18; HOOD6 2e18. Blockscout MAG7/HOOD6 name BasketToken is_verified true; AI6 name Vimen AI Six Basket is_verified true; creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189; MAG7 create tx 0xd793ff89…794039 at 2026-07-11T23:36:21Z." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-16, R-18], result: "VIM 0x43E7…47aF eth_getCode 45 bytes (EIP-1167); name() Vimen by Virtuals; symbol() VIM; decimals 18; totalSupply 999755000e18; owner() 0xe220329659d41b2a9f26e83816b424bdacf62567. Blockscout is_verified true proxy_type eip1167 implementation AgentTokenV4 0x581f7B996E6D3E436c537989157c9CB36421419b; creator 0x43E4C17b15365596Caae8e7d00E42Bc8E988c2d4; create tx 0x7123912a…dedff8 method preLaunch to BondingV5 proxy 0xd4cCBFA3…c2d4 at 2026-07-14T17:28:27Z; holders_count 669. DexScreener lead pair Uniswap VIM/VIRTUAL 0x3b2C7B54e928e23478F75481FCdd600851A9355b quote 0xc6911796042b15d7Fa4F6CDe69e245DdCd3d9c31." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-9, R-10, R-11, R-12, R-13, R-19, R-26], result: "Safe 0xc7aB…Ec02 code 171 bytes; getOwners() [0x5efc4a327c8436c7e121871904704512f665e27f]; getThreshold() 1; Blockscout name SafeProxy master_copy SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 is_verified true. BasketFactory 11835 bytes is_verified true; BasketFactory2 12120 bytes is_verified true; VimenZap4 24210 bytes is_verified true name VimenZap4; CuratorGuardian is_verified true. VVIRT code 15712 bytes; name() Agentic Virtuals symbol() VVIRT guardian() 0xc93B74B490D1bDD71045766C90F1F743D0c356Be feeRecipient() 0x659d5A6aA4017f034FBee9778B3541A2dcc17653; Blockscout is_verified false; create tx 0x9ef9260a…365b41 method createBasket to BasketFactory2 at 2026-07-19T16:03:05Z. HOOD6V2/VIRTS/VMAG/VCT non-empty code." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-23], result: "@vimenprotocol bio names permissionless fully-backed indexes on Robinhood Chain, CA 0x43e7cb9984ad95aa808ac21998cc8d5f909e47af, and app.vimen.org; 2026-08-31 post lists web www.vimen.org, app, docs.vimen.org/docs/quickstart, $VIM CA. Site www.vimen.org names MAG7/AI6/HOOD6 and Follow @vimenprotocol; GitHub vimenprotocol/vimen README names app.vimen.org and @vimenprotocol. DexScreener token info websites www.vimen.org and docs.vimen.org, social x.com/vimenprotocol." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-14, R-15], result: "api.llama.fi/protocol/vimen name Vimen slug vimen address robinhood:0x43e7cb9984ad95aa808ac21998cc8d5f909e47af symbol VIM category Indexes chains [Robinhood Chain] twitter vimenprotocol github [vimenprotocol] audits 0 currentChainTvls['Robinhood Chain'] 9452.82436 at 2026-09-03T00:17:35Z. Adapter projects/vimen/index.js enumerates factories 0x6D8C…3BEf, 0x51dB…F988, 0x1A3e…d489 plus standalone MAG7/HOOD6/AI6/HOOD6V2/VIRTS." }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-24], result: "PonsVault $VAULT 0xFdae…8312 eth_getCode 5274 bytes; name() PonsVault symbol() VAULT decimals 18 totalSupply 1e27; owner()/guardian()/feeRecipient() empty. Blockscout is_verified true name PonsLauncherToken; creator PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB; create tx 0x5d99d7da…b8c97f method launchWithVault to PonsVaultLauncher 0x9dDE7350…8f64 at 2026-07-27T20:43:47Z; holders_count 2762. Distinct from every Vimen address in this packet." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Frozen BasketToken: in-kind mint deposits fixed raw constituent units, redeem burns and returns them, no oracle on mint/redeem. Agentic BasketToken2 adds rebalance() for an agent key inside immutable ceilings (cooldown ≥1 day, turnover ≤25% NAV, slippage ≤1% NAV) and pays surplus in USDG. README: mint fee 0.30% hard-capped 0.50%; redeem free and ungated.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-3, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.vimen.org", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-4, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@vimenprotocol", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-4, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-5, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-8, R-14], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: identity.repository, value: "https://github.com/vimenprotocol/vimen", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: VIM, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-16, R-23], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-4, R-8, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x6D8C85C8Ac7620aBb3010EE29b20Da1c76093BEf", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-11, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: control.owner, value: "Frozen MAG7/AI6/HOOD6 owner() empty; guardian() and feeRecipient() Safe 0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02. That Safe getOwners() [0x5efc4a327c8436c7e121871904704512f665e27f] getThreshold() 1. Agentic VVIRT/VMAG/VCT guardian() CuratorGuardian 0xc93B74B490D1bDD71045766C90F1F743D0c356Be.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-9, R-13, R-26], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "VimenZap4 0x4e1D58DDceFf8f340690D0f7F7FDb37FB13Ff388: README says pay USDG or native ETH and the router buys constituents over Uniswap v4/v3/v2 and Rialto RFQ in one call. Code 24210 bytes, Blockscout name VimenZap4 is_verified true.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: relationship, value: "PonsVault $VAULT 0xFdae23CE76018Da62507bB5ef20e6ef5450e8312 is a PonsLauncherToken from PonsVaultLauncher.launchWithVault on 2026-07-27, not a Vimen basket and not $VIM. Do not merge. Flag ca-collision is not applicable (different tickers and addresses).", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-24], reproduction_ids: [REP-2, REP-6], supersedes: null }
  - { id: CLM-14, field: taxonomy.primary-leaf, value: rwa-products/redeemable-basket, class: inference, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [R-2, R-3, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DefiLlama Vimen Robinhood Chain TVL 9452.82436 USD at 2026-09-03T00:17:35Z. Methodology: 1:1 backing on live basket contracts plus USDG rebalance buffer; user wallets and distributor pots excluded.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-14, R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "SECURITY.md: BasketToken has not undergone a professional audit; supply caps are the mitigation. V2 agentic layer had two adversarial internal reviews before immutable deploy. Llama audits 0. No third-party audit report URL was located on the site, docs, GitHub or X this pass.", class: unknown, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: control.privileged-role, value: "SECURITY.md: first-party guardian (the Safe) can pause minting, move supply cap under immutable maxSupplyCap, and change fee recipient; no withdraw, sweep, upgrade, delegatecall or selfdestruct. CuratorGuardian exposes only raiseCap; factory baskets cannot have fee recipient or mint pause changed even by the Safe.", class: claim, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [R-3, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "HOOD6 constituents() length 6 on 2026-09-03; README lists CASHCAT ARROW HOODRAT VIBECAT VEX VIRTUAL (chain-native tokens, not Stock Tokens). MAG7 constituents() length 7; README lists AAPL MSFT GOOGL AMZN META NVDA TSLA.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-5, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: relationship, value: "$VIM launched 2026-07-14T17:28:27Z via Virtuals BondingV5 preLaunch (EIP-1167 AgentTokenV4). Lead book Uniswap VIM/VIRTUAL 0x3b2C…355b, quote VIRTUAL 0xc691…9c31, pairCreatedAt 2026-07-14T17:28:27Z. Launchpad Virtuals, not Pons. Pair asset VIRTUAL. Venue Uniswap.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-16, R-18, R-23, R-25], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: "account.@vimenprotocol.role", value: project, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@vimenprotocol.slug", value: vimen, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: control.threshold, value: "Protocol Safe 0xc7aB…Ec02 threshold 1, one owner 0x5efc4a327c8436c7e121871904704512f665e27f", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "DexScreener Uniswap VIM/VIRTUAL liquidity.usd 60215.45 volume.h24 18160.41 marketCap 235686. Token book, not basket TVL.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: identity.name, value: Vimen, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-14], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-26, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "www.vimen.org/vim and README: curator license is a one-time VIM burn (README: 10,000 VIM frozen / 25,000 VIM agentic; /vim page still prints 25,000 $VIM). 60% of that basket's mint fee paid to the curator wallet via FeeSplitter. $VIM is the factory key, not a basket share.", class: claim, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [R-3, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.proxy, value: "MAG7/AI6/HOOD6 proxy_type null, not upgradeable. VIM proxy_type eip1167 implementation AgentTokenV4. Protocol Safe proxy_type master_copy implementation SafeL2.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-8, R-9], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DefiLlama Robinhood Chain TVL 9453 USD"
    summary: "api.llama.fi/protocol/vimen currentChainTvls Robinhood Chain 9452.82 USD; basket backing only."
    occurred_at: 2026-09-03T00:17:35Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-2
    type: company
    title: "First USDG payout cycles closed on agentic baskets"
    summary: "@vimenprotocol: first payout cycles closed and paid holders in USDG automatically; loop is mint, rotate, sweep, pay."
    occurred_at: 2026-08-31T14:17:58Z
    observed_at: 2026-09-03T00:35:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: company
    title: "Pay from Ethereum, Base, Arbitrum, Solana or Bitcoin"
    summary: "@vimenprotocol: pay from Ethereum, Base, Arbitrum, Solana or Bitcoin; basket arrives on Robinhood Chain."
    occurred_at: 2026-08-31T14:17:57Z
    observed_at: 2026-09-03T00:35:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: company
    title: "App rebuilt; numbers are chain reads"
    summary: "@vimenprotocol: rebuilt app with dark mode, position cards from chain reads, and curator profiles."
    occurred_at: 2026-08-31T14:17:57Z
    observed_at: 2026-09-03T00:35:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-5
    type: onchain
    title: "VVIRT created through BasketFactory2.createBasket"
    summary: "BasketFactory2.createBasket deployed Agentic Virtuals VVIRT 0xca48…6f5b at 2026-07-19T16:03:05Z."
    occurred_at: 2026-07-19T16:03:05Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-19]
  - id: EVT-6
    type: onchain
    title: "VIM AgentTokenV4 clone via Virtuals BondingV5 preLaunch"
    summary: "BondingV5 preLaunch created VIM 0x43E7…47aF at 2026-07-14T17:28:27Z; EIP-1167 AgentTokenV4 clone."
    occurred_at: 2026-07-14T17:28:27Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-18]
  - id: EVT-7
    type: onchain
    title: "MAG7 BasketToken deploys on chain 4663"
    summary: "EOA 0xB15e…b189 created MAG7 BasketToken 0xe1c1…A9DF at 2026-07-11T23:36:21Z; source verified."
    occurred_at: 2026-07-11T23:36:21Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-17]

receipts:
  - { id: R-1, publisher: Vimen, title: "Vimen site", url: "https://www.vimen.org/", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-19, CLM-21, CLM-22, CLM-25], excerpt: "Vimen turns baskets of real tokenized stocks into single tokens you can hold, send, or take apart. MAG7, AI6 and HOOD6 baskets are live on Robinhood Chain. Follow @vimenprotocol. Mint fee 0.30%, hard-capped at 0.50% in code. Redeem is free, forever. Deposit cap at launch $100K." }
  - { id: R-2, publisher: Vimen, title: "What is Vimen?", url: "https://docs.vimen.org/docs", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-26], excerpt: "Permissionless, fully-backed index baskets on Robinhood Chain — frozen or run by an agent. Chain id 4663. A basket token is an ERC-20 fully backed by fixed raw quantities of its constituent tokens, held by its own immutable contract. Mint deposits the constituents in-kind; redeem burns the basket token and returns the constituents in-kind." }
  - { id: R-3, publisher: Vimen, title: "vimenprotocol/vimen README", url: "https://github.com/vimenprotocol/vimen", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-9, CLM-10, CLM-12, CLM-18, CLM-19, CLM-27], excerpt: "On-chain index baskets on Robinhood Chain — app.vimen.org · @vimenprotocol. MAG7 0xe1c1…A9DF, HOOD6 0x0CE0…05C5, AI6 0x8fF1…2601, HOOD6V2 0x42AF…F4aE, VIRTS 0xFF71…0Aa7. Guardian and fee recipient of every first-party basket is Safe 0xc7aB…Ec02. VimenZap4 0x4e1D…f388. BasketFactory 0x6D8C…3BEf. BasketFactory2 0x1A3e…d489." }
  - { id: R-4, publisher: "@vimenprotocol", title: "Official links and $VIM CA", url: "https://x.com/vimenprotocol/status/2094429506505437528", published_at: 2026-08-31T14:18:01Z, accessed_at: 2026-09-03T00:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-21, CLM-22], excerpt: "web: https://www.vimen.org/ app: https://app.vimen.org docs: https://docs.vimen.org/docs/quickstart $VIM CA: 0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF. Bio: permissionless, fully-backed indexes of tokenized assets on Robinhood Chain. 0x43e7cb9984ad95aa808ac21998cc8d5f909e47af. URLs: http://app.vimen.org" }
  - { id: R-5, publisher: Blockscout, title: "MAG7 0xe1c1…A9DF", url: "https://robinhoodchain.blockscout.com/address/0xe1c1ADAD813736427B334e798fd2EbC7d2C7A9DF", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-11, CLM-19, CLM-28, EVT-7], excerpt: "is_contract true is_verified true name BasketToken proxy_type null creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0xd793ff8918a34fdad606152d59676e23d3809308cb5b2fc5bd3e7d3572794039. Token Vimen MAG7 Basket MAG7 holders_count 7 decimals 18 total_supply 53325670672318174399." }
  - { id: R-6, publisher: Blockscout, title: "AI6 0x8fF1…2601", url: "https://robinhoodchain.blockscout.com/address/0x8fF1d77a09A3292b34457175710Bb0C0A1C22601", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "is_contract true is_verified true name Vimen AI Six Basket creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0x54a0aa2ff3e8f6ef8aeddd4b42cfa1ecb16f14f1ae02b9795ce925997c920693. Token Vimen AI Six Basket AI6 holders_count 2 total_supply 1000000000000000000." }
  - { id: R-7, publisher: Blockscout, title: "HOOD6 0x0CE0…05C5", url: "https://robinhoodchain.blockscout.com/address/0x0CE04932513Fa1768B5b9444c6A21Ae0DdA005C5", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "is_contract true is_verified true name BasketToken creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0x29a1c147ec29babb54faadb5407bb410b87d0eb6e60adf0e4752e75d7a3e12ec. Token Vimen Hood Six Basket HOOD6 holders_count 3 total_supply 2000000000000000000." }
  - { id: R-8, publisher: Blockscout, title: "VIM 0x43E7…47aF", url: "https://robinhoodchain.blockscout.com/address/0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-13, CLM-28, EVT-6], excerpt: "is_contract true is_verified true name Vimen by Virtuals proxy_type eip1167 implementation AgentTokenV4 0x581f7B996E6D3E436c537989157c9CB36421419b creator 0x43E4C17b15365596Caae8e7d00E42Bc8E988c2d4 creation_transaction_hash 0x7123912a153c5deb45a089dddff1d2e9182de45dc8aadec9fa41811e29dedff8. Token VIM holders_count 669 total_supply 999755000000000000000000000." }
  - { id: R-9, publisher: Blockscout, title: "Protocol Safe 0xc7aB…Ec02", url: "https://robinhoodchain.blockscout.com/address/0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-23, CLM-28], excerpt: "is_contract true is_verified true name SafeProxy proxy_type master_copy implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 creator 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67. RPC getOwners [0x5efc4a327c8436c7e121871904704512f665e27f] getThreshold 1." }
  - { id: R-10, publisher: Blockscout, title: "BasketFactory 0x6D8C…3BEf", url: "https://robinhoodchain.blockscout.com/address/0x6D8C85C8Ac7620aBb3010EE29b20Da1c76093BEf", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "is_contract true is_verified true name BasketFactory proxy_type null creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0xd62118807dd76483b3ee5ab0690d8c0d29ef3b9d87b3b17c7f21a6ec8b90b27a." }
  - { id: R-11, publisher: Blockscout, title: "BasketFactory2 0x1A3e…d489", url: "https://robinhoodchain.blockscout.com/address/0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, EVT-5], excerpt: "is_contract true is_verified true name BasketFactory2 creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0x4da712c44c9eafc0009ec94989555c305add28022ae364e89375a3363082dfb1." }
  - { id: R-12, publisher: Blockscout, title: "VimenZap4 0x4e1D…f388", url: "https://robinhoodchain.blockscout.com/address/0x4e1D58DDceFf8f340690D0f7F7FDb37FB13Ff388", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "is_contract true is_verified true name VimenZap4 creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189 creation_transaction_hash 0x04c89947e0ac145a3bbbc3268a76ed71364bfc6e3e80999dcf4bf7cbbfceda06." }
  - { id: R-13, publisher: Blockscout, title: "VVIRT 0xca48…6f5b", url: "https://robinhoodchain.blockscout.com/address/0xca485830173695650b6bcD773fA0443E87656f5b", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, EVT-5], excerpt: "is_contract true is_verified false name Agentic Virtuals creator 0x42E65A72AF9FeB459C2ab5CDfd506EAD18014bd8 (BasketTokenDeployer) creation_transaction_hash 0x9ef9260ab87d7a805a6561bc8fc67d51a5fcd1b00c156a593774ceaff4365b41. Token VVIRT holders_count 5 total_supply 6140000000000000000." }
  - { id: R-14, publisher: DefiLlama, title: "protocol/vimen", url: "https://api.llama.fi/protocol/vimen", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-16, EVT-1], excerpt: "name Vimen slug vimen address robinhood:0x43e7cb9984ad95aa808ac21998cc8d5f909e47af symbol VIM category Indexes chains [Robinhood Chain] twitter vimenprotocol github [vimenprotocol] audits 0 currentChainTvls['Robinhood Chain'] 9452.82436. Methodology: TVL is the value of the tokenized stocks and chain-native tokens held as 1:1 backing by every live basket token, plus any USDG rebalance buffer." }
  - { id: R-15, publisher: DefiLlama, title: "vimen adapter index.js", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/vimen/index.js", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9, CLM-10, CLM-16], excerpt: "FACTORIES: 0x6D8C85C8Ac7620aBb3010EE29b20Da1c76093BEf BasketFactory, 0x51dB1A456CA238843A159589Cf28710616b2F988 legacy, 0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489 BasketFactory2. STANDALONE_BASKETS MAG7 0xe1c1…A9DF HOOD6 0x0CE0…05C5 AI6 0x8fF1…2601 HOOD6V2 0x42AF…F4aE VIRTS 0xFF71…0Aa7. start 1783812981 MAG7 deployment 2026-07-11." }
  - { id: R-16, publisher: DexScreener, title: "VIM token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x43e7cb9984ad95aa808ac21998cc8d5f909e47af", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-7, CLM-8, CLM-20, CLM-24], excerpt: "Uniswap pair 0x3b2C7B54e928e23478F75481FCdd600851A9355b base VIM 0x43E7Cb9984aD95aA808ac21998cc8D5f909e47aF quote VIRTUAL 0xc6911796042b15d7Fa4F6CDe69e245DdCd3d9c31 liquidity.usd 60215.45 volume.h24 18160.41 marketCap 235686 pairCreatedAt 1784050107000. info.websites www.vimen.org and docs.vimen.org; socials x.com/vimenprotocol." }
  - { id: R-17, publisher: Blockscout, title: "MAG7 create tx 0xd793ff89…", url: "https://robinhoodchain.blockscout.com/tx/0xd793ff8918a34fdad606152d59676e23d3809308cb5b2fc5bd3e7d3572794039", published_at: 2026-07-11T23:36:21Z, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-7], excerpt: "timestamp 2026-07-11T23:36:21.000000Z status ok from 0xB15e116FCa1b5795afa8410acBF31bF46132b189 (EOA). Contract creation of MAG7 BasketToken." }
  - { id: R-18, publisher: Blockscout, title: "VIM preLaunch tx 0x7123912a…", url: "https://robinhoodchain.blockscout.com/tx/0x7123912a153c5deb45a089dddff1d2e9182de45dc8aadec9fa41811e29dedff8", published_at: 2026-07-14T17:28:27Z, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-20, EVT-6], excerpt: "timestamp 2026-07-14T17:28:27.000000Z method preLaunch from 0x0a130D1b00aeCb498ad85dA19f60943cA62d0437 to BondingV5 TransparentUpgradeableProxy 0xd4cCBFA37e2f35611b3042e4096Ad7a3459Bd007 status ok." }
  - { id: R-19, publisher: Blockscout, title: "VVIRT createBasket tx 0x9ef9260a…", url: "https://robinhoodchain.blockscout.com/tx/0x9ef9260ab87d7a805a6561bc8fc67d51a5fcd1b00c156a593774ceaff4365b41", published_at: 2026-07-19T16:03:05Z, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, EVT-5], excerpt: "timestamp 2026-07-19T16:03:05.000000Z method createBasket from 0x0dde48393EeF2aDDf71Aa39a5D44602d4589a2F8 to BasketFactory2 0x1A3e4B71c58f77a995c1a4C7D76A4296CFDDd489 status ok." }
  - { id: R-20, publisher: "@vimenprotocol", title: "First USDG payout cycles", url: "https://x.com/vimenprotocol/status/2094429491452105009", published_at: 2026-08-31T14:17:58Z, accessed_at: 2026-09-03T00:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Already happened: the first payout cycles in protocol history closed and paid holders in USDG, automatically. Transactions on the explorer. The loop runs: mint, rotate, sweep, pay." }
  - { id: R-21, publisher: "@vimenprotocol", title: "Pay from other chains", url: "https://x.com/vimenprotocol/status/2094429487241052310", published_at: 2026-08-31T14:17:57Z, accessed_at: 2026-09-03T00:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Live now: pay from Ethereum, Base, Arbitrum, Solana or Bitcoin. Pick your chain, pay, and the basket arrives on Robinhood Chain in seconds. The stocks live here. Your funds can start anywhere." }
  - { id: R-22, publisher: "@vimenprotocol", title: "App rebuilt", url: "https://x.com/vimenprotocol/status/2094429489254343155", published_at: 2026-08-31T14:17:57Z, accessed_at: 2026-09-03T00:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Live now: the app got rebuilt. Dark mode, position cards where every number is a chain read (nothing typed in by us), and curator profiles you can follow. The interface shows you what the contracts say. Nothing else." }
  - { id: R-23, publisher: Vimen, title: "$VIM page", url: "https://www.vimen.org/vim", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-20, CLM-27], excerpt: "CA: 0x43e7cb9984ad95aa808ac21998cc8d5f909e47af. Symbol VIM. Standard AgentTokenV4 (Virtuals Protocol). Chain Robinhood Chain (4663). Total supply 1,000,000,000. $VIM launched on Virtuals and migrated from the bonding curve. Becoming a curator costs 25,000 $VIM, burned once. Trade link DexScreener pair 0x3b2C7B54e928e23478F75481FCdd600851A9355b." }
  - { id: R-24, publisher: Blockscout, title: "PonsVault $VAULT 0xFdae…8312", url: "https://robinhoodchain.blockscout.com/address/0xFdae23CE76018Da62507bB5ef20e6ef5450e8312", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_contract true is_verified true name PonsLauncherToken creator 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB creation_transaction_hash 0x5d99d7dae0a908e00eeb122d95379a647f7b7a9996c8118b3abb99b28db8c97f method launchWithVault to PonsVaultLauncher 0x9dDE735093d92EAAD379BE685E62c6d449628f64 at 2026-07-27T20:43:47Z. Token PonsVault VAULT holders_count 2762 total_supply 1000000000000000000000000000." }
  - { id: R-25, publisher: Vimen, title: "SECURITY.md", url: "https://github.com/vimenprotocol/vimen/blob/main/SECURITY.md", published_at: null, accessed_at: 2026-09-03T00:45:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-17, CLM-18, CLM-20], excerpt: "Unaudited code. The contract is small (~160 nSLOC) and heavily tested, but has not undergone a professional audit. VIM was launched on Virtuals Protocol — a Virtuals AgentTokenV4 at 0x43E7…47aF. Before the immutable V2 deploy the layer went through two adversarial internal reviews. No formal bug bounty yet." }
  - { id: R-26, publisher: Blockscout, title: "CuratorGuardian 0xc93B…56Be", url: "https://robinhoodchain.blockscout.com/address/0xc93B74B490D1bDD71045766C90F1F743D0c356Be", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name CuratorGuardian proxy_type null creator 0xB15e116FCa1b5795afa8410acBF31bF46132b189." }

gaps:
  - { priority: P0, question: "Which BasketToken setters does guardian() actually expose on the verified MAG7 source (pause, cap, fee recipient), and does redeem stay callable while mint is paused?", checked: "RPC guardian()/owner()/feeRecipient(); SECURITY.md and README; verified-source ABI not read line by line, 2026-09-03", next: "read verified BasketToken source on Blockscout for MAG7 and call mintPaused/supplyCap" }
  - { priority: P0, question: "What is the live recipe on VVIRT/VMAG/VCT (constituents()/units()) after agent rebalances, versus the frozen MAG7/AI6/HOOD6 sets?", checked: "README table and MAG7/HOOD6 constituents() length only, 2026-09-03", next: "eth_call constituents() and units() on each agentic basket and map addresses to tickers" }
  - { priority: P1, question: "Where is the professional-audit artifact, if any, matching BasketToken / BasketToken2 on 4663?", checked: "site, /vim, docs, GitHub SECURITY.md, Llama audits 0, X profile, 2026-09-03", next: "open GitHub security advisories page and any auditor named in later posts" }
  - { priority: P1, question: "What is the VBILL / SGOV-SPY basket address the app lists as opening, and does it have code on 4663?", checked: "app.vimen.org HTML names VBILL; no CA in README table this pass", next: "BasketFactory2.allBaskets() and app basket route" }
  - { priority: P2, question: "Is telegram or discord an official surface?", checked: "site footer, GitHub README, X bio, DexScreener socials, 2026-09-03; none named", next: "leave NULL unless a later official post names one" }
---

# Vimen — research packet

## What it is

In-kind index baskets of Robinhood Stock Tokens. A user deposits listed Stock Tokens or chain-native tokens, or pays USDG or ETH through VimenZap4, and receives one ERC-20 share; redeem burns the share and returns the same units. Frozen baskets lock the recipe at deploy; agentic baskets let an agent rebalance inside contract ceilings. First-party frozen guardian is Safe 0xc7aBc67fBB12B69240A4C213c39547C8a345Ec02.

Themes: rwa, index, vault, stock-paired:NVDA, agent

## Why it matters

Robinhood Chain lists many Stock Tokens and no native ETF. Vimen is the live in-kind basket that holds those tokens (and some chain-native names) in one ERC-20 a wallet can mint or redeem. Curators burn $VIM once to publish more baskets through the same factories.

## What could go wrong

A freeze on any constituent makes whole-basket redeem revert until that transfer works again. First-party guardian is a 1-of-1 Safe. $VIM is a Virtuals AgentTokenV4 with an owner key; it is the curator-license token, not basket custody. PonsVault $VAULT is a different contract.

## Product and mechanics

Frozen MAG7, AI6 and HOOD6 are BasketToken vaults with empty owner() and seven / six constituents on RPC. Mint is in-kind; README states a 0.30% mint fee hard-capped at 0.50% and free ungated redeem. [verified R-5 R-7] [claim R-3]

Agentic VVIRT, VMAG and VCT were created through BasketFactory2.createBasket. RPC guardian() is CuratorGuardian 0xc93B…56Be. Docs: the agent may call rebalance inside cooldown / turnover / slippage ceilings and surplus is paid in USDG. [verified R-13 R-19] [claim R-2]

VimenZap4 0x4e1D…f388 is a verified router. $VIM 0x43E7…47aF is an EIP-1167 AgentTokenV4 clone from Virtuals BondingV5 preLaunch on 2026-07-14, paired to VIRTUAL on Uniswap 0x3b2C…355b. [verified R-8 R-12 R-16 R-18]

## Control and security

Frozen first-party guardian and fee recipient is Safe 0xc7aB…Ec02: one owner 0x5efc…e27f, threshold 1. SECURITY.md says that guardian can pause mint, move the cap under an immutable ceiling, and change the fee recipient, and that redeem has no pause. Factory baskets use CuratorGuardian, which the same file says exposes only raiseCap. [verified R-9] [claim R-25]

SECURITY.md states BasketToken has not had a professional audit. Llama audits 0. V2 had two internal reviews before deploy. [unknown]

## Team and provenance

@vimenprotocol bio lists the $VIM CA and app.vimen.org. www.vimen.org names the handle. GitHub org vimenprotocol/vimen names the app and handle. DexScreener token info repeats www.vimen.org, docs.vimen.org and the same handle. Deployer of MAG7/factories/zap is EOA 0xB15e…b189. [verified R-1 R-3 R-4 R-16]

PonsVault $VAULT 0xFdae…8312 is a PonsLauncherToken from launchWithVault on 2026-07-27. It is not this slug. [verified R-24]

## Economics and activity

DefiLlama Robinhood Chain TVL 9452.82436 USD at 2026-09-03T00:17:35Z is basket backing plus USDG buffer, not the $VIM book. MAG7 holders_count 7; $VIM holders_count 669. DexScreener VIM/VIRTUAL liquidity 60215.45 USD, 24h volume 18160.41, marketCap 235686. [verified R-14] [claim R-5 R-8 R-16]

## Material risks

- Issuer freeze on any constituent reverts whole-basket redeem. [claim R-25]
- First-party Safe is threshold 1. [verified R-9]
- No professional audit report was located; Llama audits 0. [unknown]
- $VIM owner() 0xe220…2567 sits on the Virtuals AgentTokenV4 clone (tax/blacklist on that token per SECURITY.md), not on basket custody. [verified R-8] [claim R-25]
- PonsVault $VAULT is a separate Pons fee-layer token. [verified R-24]

## Verification passes

- Receipts: www.vimen.org, /vim, docs, GitHub README and SECURITY.md, @vimenprotocol posts, Blockscout addresses and txs, RPC, Llama protocol and adapter, and DexScreener VIM pairs were opened on 2026-09-03 and excerpts copied. [verified R-1 R-5 R-14 R-16]
- Numbers: 9452.82 is the Robinhood Chain slice from api.llama.fi/protocol/vimen, not an all-chains total and not DexScreener $VIM marketCap 235686. MAG7 supply is 53.325670672318175e18, not 1e18. [claim R-14 R-16] [verified R-5]
- Adversarial: the strongest contrary reading is that Vimen is PonsVault $VAULT or an ERC-4626 index vault. $VAULT is PonsLauncherToken from PonsVaultLauncher; MAG7 is BasketToken from EOA 0xB15e…b189; rIDX remains a different repository with no shared address. [inference R-5 R-24]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census vimen, content/projects/vimen.yaml, content/pulled/vimen.yaml, content/feed/vimen.yaml, content/sources/vimen.yaml, content/changelog/vimen.yaml, content/research/vimen.md, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Official: www.vimen.org, /vim, /press, app.vimen.org HTML, docs.vimen.org/docs and /docs/agentic, GitHub vimenprotocol/vimen README and SECURITY.md.
- Explorer/RPC: rpc.mainnet.chain.robinhood.com eth_chainId 4663 block 53058237; eth_getCode and name/symbol/owner/guardian/feeRecipient/constituents/getOwners/getThreshold on MAG7/AI6/HOOD6/HOOD6V2/VIRTS/VVIRT/VMAG/VCT/VIM/Safe/factories/zap/CuratorGuardian and PonsVault $VAULT. Blockscout api/v2 addresses and create txs.
- Third party: api.llama.fi/protocol/vimen, DefiLlama-Adapters projects/vimen/index.js, DexScreener tokens/0x43e7…47aF.
- X: @vimenprotocol bio and 2026-08-31 thread (CA, payouts, pay-from-chains, app rebuild).
- Failed: Blockscout GET for HOOD6V2 reset the connection this pass (RPC code 6896 bytes, name Vimen Hood Six v2 Basket). No telegram URL on site, GitHub or X bio.
- Time: collection 2026-09-03T00:25Z–00:50Z.
