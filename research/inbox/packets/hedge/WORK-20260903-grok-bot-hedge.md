---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-bot-hedge
producer: grok-bot
role: collector
base_sha: 5bd91e3c9f0101e6400a0c675479d3747bc4faf9
slug: hedge
name: Hedgehogs
packet_tier: seed
as_of: 2026-09-03T13:30:00Z
prior_packet: null
owned_slugs: [hedge]
allowed_paths:
  - research/inbox/packets/hedge/WORK-20260903-grok-bot-hedge.md
identity:
  canonical_name: Hedgehogs
  aliases: ["HEDGEHOGS", "Token-Bound Fund", "TBF"]
  symbols: ["HEDGE", "HOG"]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://hedgehogs.tech
  official_handle: "@HedgeOnHood"
  repository: "NULL — hedgehogs.tech and the app page list no GitHub org or repository path this round"
  possible_matches:
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Census StonkBrokers is @ClutchMarkets / stonkbrokers.cash with token 0xe934e36A439C94017B64a3FecE66AF12099aBF50 and collection 0x539CdD042c2f3d93EbC5BE7DfFf0c79F3B4fAbF0"
        - "Hedgehogs is @HedgeOnHood / hedgehogs.tech with token 0x8226DDA5F73619DEdC671e09Be738fA308da1944 and collection 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534"
        - "No shared official handle, domain, or reproduced address"
    - slug: quotrons
      signals: [other]
      contrary_signals:
        - "Census Quotrons is @Quotrons404 / quotrons.cash, an ERC-404 collection at 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F"
        - "Hedgehogs is an ERC-721 named Hedgehogs (symbol HOG) plus a separate ERC-20 named Hedge"
        - "No shared official handle, domain, or reproduced address"
classification:
  primary_leaf: nft-treasury/token-bound-nft
  secondary_leaves: [yield/savings-vault]
  mechanism_tags: [nft, vault, rwa, oracle, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Official site and app describe a 3,333-seat ERC-721 manager bound to an ERC-6551 account that is also an ERC-4626 vault, with $HEDGE as the reserve token. RPC and Blockscout this round reproduced the ERC-20 and ERC-721 on chain 4663; explorer source is not verified on either. DefiLlama has a Robinhood Chain TVL figure and a StonkBrokers protocol row, and no Hedgehogs protocol row. Distinct from StonkBrokers and Quotrons. [R-1] [R-3] [R-4] [R-10] [R-11]"
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-3, CLM-4], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-2], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-14, CLM-15], note: "" }
links:
  - { kind: site, url: "https://hedgehogs.tech", authenticity: confirmed }
  - { kind: app, url: "https://hedgehogs.tech/app", authenticity: confirmed }
  - { kind: x, url: "https://x.com/HedgeOnHood", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x8226DDA5F73619DEdC671e09Be738fA308da1944", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x7ec4a638b2c948c041712dc51e77b2d54429450abb24227b4259376872a6bd88", authenticity: unconfirmed }
  - { kind: other, url: "https://opensea.io/collection/hedgehogsonrh", authenticity: unconfirmed }
deployments:
  - label: $HEDGE token (explorer name Hedge, ERC-20)
    role: token
    address:
      value: "0x8226DDA5F73619DEdC671e09Be738fA308da1944"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-12]
  - label: Hedgehogs NFT collection (explorer name Hedgehogs, symbol HOG, ERC-721)
    role: token
    address:
      value: "0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-4, R-13]
  - label: Site-labeled NAV oracle
    role: other
    address:
      value: "0xe77667d58f30bEAEF072B4ac386eE4eDE0519348"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-5]
  - label: Site-labeled UpgradePool
    role: other
    address:
      value: "0xb5430F00154d21719c3CAa53508C96678167555D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-6]
  - label: Site-labeled TSLA price feed (EACAggregatorProxy)
    role: proxy
    address:
      value: "0x4A1166a659A55625345e9515b32adECea5547C38"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-7]
  - label: Site-labeled NVDA price feed (EACAggregatorProxy)
    role: proxy
    address:
      value: "0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-7]
  - label: Site-labeled AAPL price feed (EACAggregatorProxy)
    role: proxy
    address:
      value: "0x6B22A786bAa607d76728168703a39Ea9C99f2cD0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-7]
  - label: Site-labeled SPY price feed (EACAggregatorProxy)
    role: proxy
    address:
      value: "0x319724394D3A0e3669269846abE664Cd621f9f6A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-7]
metrics:
  - { kind: holders, value: 4493, currency: null, as_of: 2026-09-03T13:19:00Z, window: point, method: "Blockscout API v2 tokens/0x8226DDA5F73619DEdC671e09Be738fA308da1944 holders_count", class: claim, receipt_ids: [R-3] }
  - { kind: holders, value: 332, currency: null, as_of: 2026-09-03T13:19:00Z, window: point, method: "Blockscout API v2 tokens/0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 holders_count", class: claim, receipt_ids: [R-4] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T13:18:00Z, receipt_ids: [R-3, R-12], result: "eth_getCode at 0x8226DDA5F73619DEdC671e09Be738fA308da1944 non-empty (8692 hex chars). Blockscout v2 name Hedge, is_contract true, is_verified false, token type ERC-20 symbol HEDGE decimals 18 holders_count 4493 total_supply 879005348025483300742781160. eth_call name() returns Hedge. Created in tx 0x95ffac3462d358c7dafc98bdc34a66f4d8d8044e336aa3229c925f8bb4978c7f at 2026-08-20T06:52:07Z by 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T13:19:00Z, receipt_ids: [R-4, R-13], result: "eth_getCode at 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 non-empty (49136 hex chars). Blockscout v2 name Hedgehogs, is_verified false, token type ERC-721 symbol HOG holders_count 332. eth_call name() returns Hedgehogs. Selector 0x61b8ce8c (site nextId) returns 0xd06 (3334). totalSupply() reverted. Created in tx 0x46dc2deab20a87277d89743fedf7c482e043e1f409eb0bbc8512e5cede0c663b at 2026-08-20T06:52:25Z by 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T13:19:00Z, receipt_ids: [R-3, R-4, R-5], result: "owner() (0x8da5cb5b) on the HEDGE token, the Hedgehogs collection, and 0xe77667d58f30bEAEF072B4ac386eE4eDE0519348 each returned 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3. eth_getCode on that owner address was not required; Blockscout shows it as the creation from-address of those contracts." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T13:19:00Z, receipt_ids: [R-5, R-6], result: "eth_getCode non-empty at 0xe77667d58f30bEAEF072B4ac386eE4eDE0519348 (9008 hex chars, Blockscout name null, is_verified false) and at 0xb5430F00154d21719c3CAa53508C96678167555D (8348 hex chars, name null, is_verified false). Both creator_address_hash 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T13:18:00Z, receipt_ids: [R-7], result: "Blockscout v2 for 0x4A1166a659A55625345e9515b32adECea5547C38, 0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15, 0x6B22A786bAa607d76728168703a39Ea9C99f2cD0, and 0x319724394D3A0e3669269846abE664Cd621f9f6A: each is_contract true, is_verified true, name EACAggregatorProxy, creator 0xfE3c266C0F994f9552b70D9107214Fe0ED0d74d8. eth_getCode non-empty on each. eth_call latestAnswer() on the TSLA-labeled feed returned a non-zero int." }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T13:19:00Z, receipt_ids: [R-10, R-11], result: "api.llama.fi/v2/chains listed name Robinhood Chain chainId 4663 tvl 803813362.2440326. api.llama.fi/protocols listed 138 rows whose chains include Robinhood Chain, including StonkBrokers / stonkbrokers, and no row whose name or slug is Hedgehogs, Hedge On Hood, or hedge-on-hood." }
  - { id: REP-7, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T13:20:00Z, receipt_ids: [R-14, R-15], result: "Blockscout v2: 0x8F468471ee1b11a0C060bd76A8e7300d4bc91360 name HOODIES, ERC-721 symbol HOODIE, is_verified false. 0x971c43907c9f5ccf52Dc8a560d7240E27153fdEf name LaunchToken, is_verified true, ERC-20 token name The Robin Hoodies symbol HOODIES. Neither equals 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 or 0x8226DDA5F73619DEdC671e09Be738fA308da1944." }
claims:
  - { id: CLM-1, field: product.mechanism, value: "Official site describes each ERC-721 as a manager seat bound to an ERC-6551 account that is also an ERC-4626 vault (Token-Bound Fund); mint cost is described as seeding vault AUM; quills are described as vault shares redeemable in kind", class: claim, observed_at: 2026-09-03T13:16:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://hedgehogs.tech", class: claim, observed_at: 2026-09-03T13:16:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0x8226DDA5F73619DEdC671e09Be738fA308da1944", class: verified, observed_at: 2026-09-03T13:18:00Z, receipt_ids: [R-1, R-3, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534", class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-2, R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.handle, value: "@HedgeOnHood", class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1, R-2, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: HEDGE, class: verified, observed_at: 2026-09-03T13:18:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: HOG, class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3", class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Site copy states 1B $HEDGE fixed supply and zero emissions", class: claim, observed_at: 2026-09-03T13:16:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Explorer total_supply on the HEDGE ERC-20 is 879005348025483300742781160 (18 decimals, about 879,005,348 HEDGE)", class: verified, observed_at: 2026-09-03T13:18:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Site footer states mint sold out (3,333/3,333). Collection nextId selector 0x61b8ce8c returned 3334. ERC-721 holders_count on Blockscout is 332. totalSupply() reverted.", class: claim, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DefiLlama has no Hedgehogs protocol row on Robinhood Chain as of 2026-09-03; tokens existing is not a protocol TVL row", class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Hedgehogs is not census stonkbroker: different handle, domain, token, and collection addresses", class: verified, observed_at: 2026-09-03T13:20:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Hedgehogs is not census quotrons: different handle, domain, and collection address; Quotrons is ERC-404, Hedgehogs collection is ERC-721", class: verified, observed_at: 2026-09-03T13:20:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: other, value: "A separate HOODIES ERC-721 0x8F468471ee1b11a0C060bd76A8e7300d4bc91360 (explorer name HOODIES) and ERC-20 0x971c43907c9f5ccf52Dc8a560d7240E27153fdEf (verified LaunchToken, token name The Robin Hoodies) exist on chain 4663. Those addresses are not the Hedgehogs collection or $HEDGE token. No census slug for that name this round.", class: verified, observed_at: 2026-09-03T13:20:00Z, receipt_ids: [R-14, R-15], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0xe77667d58f30bEAEF072B4ac386eE4eDE0519348", class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xb5430F00154d21719c3CAa53508C96678167555D", class: verified, observed_at: 2026-09-03T13:19:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report, bounty page, or repository was located on hedgehogs.tech or the app this round", class: unknown, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@HedgeOnHood.role", value: project, class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1, R-2, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@HedgeOnHood.follow", value: true, class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@HedgeOnHood.listen", value: high, class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@HedgeOnHood.slug", value: hedge, class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@HedgeOnHood.conflict", value: team, class: claim, observed_at: 2026-09-03T13:17:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "X Latest for @HedgeOnHood was not readable this round (profile HTTP 200 with no post bodies; jina 403; syndication 429). No tweet ids or dates were filed. Handle is taken from the official site, app twitter:site tag, and content/accounts.yaml.", class: unknown, observed_at: 2026-09-03T13:18:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Site copy states a 1B fixed $HEDGE supply; explorer total_supply on the reproduced ERC-20 is about 879.0 million tokens. Burns, unminted supply, or a different canonical token would change circulating supply and any fee-sink reading."
    status: open
    resolution: null
events:
  - id: EVT-1
    type: onchain
    title: "HEDGE ERC-20 exists on chain 4663"
    summary: "Blockscout lists 0x8226DDA5F73619DEdC671e09Be738fA308da1944 as token Hedge (HEDGE), ERC-20, unverified source, created 2026-08-20T06:52:07Z. RPC eth_getCode was non-empty and name() returned Hedge. Official site publishes this address as $HEDGE on Robinhood Chain 4663."
    account: null
    occurred_at: 2026-08-20T06:52:07Z
    observed_at: 2026-09-03T13:18:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-3, R-12]
  - id: EVT-2
    type: onchain
    title: "Hedgehogs ERC-721 exists on chain 4663"
    summary: "Blockscout lists 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 as Hedgehogs (HOG), ERC-721, unverified source, created 2026-08-20T06:52:25Z. RPC name() returned Hedgehogs. Site app CFG labels this address hogs. nextId returned 3334; holders_count is 332."
    account: null
    occurred_at: 2026-08-20T06:52:25Z
    observed_at: 2026-09-03T13:19:00Z
    affected_fields: [deployment.address, identity.symbol, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2, R-4, R-13]
  - id: EVT-3
    type: company
    title: "Site states mint sold out and TBF mechanism"
    summary: "hedgehogs.tech states every NFT is a hedge fund, lists ERC-721 plus ERC-6551 plus ERC-4626 as the Token-Bound Fund, publishes the $HEDGE address on chain 4663, and in the footer states mint sold out (3,333/3,333)."
    account: "@HedgeOnHood"
    occurred_at: 2026-09-03T13:16:00Z
    observed_at: 2026-09-03T13:16:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-1]
  - id: EVT-4
    type: onchain
    title: "Token and collection owner() is one EOA"
    summary: "owner() on the HEDGE token, the Hedgehogs collection, and the site-labeled oracle all returned 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, which is also the creation from-address of those contracts. No timelock or multisig was located on those owner() results this round."
    account: null
    occurred_at: 2026-08-20T06:52:07Z
    observed_at: 2026-09-03T13:19:00Z
    affected_fields: [control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4, R-5]
receipts:
  - { id: R-1, publisher: Hedgehogs, title: "Official site hedgehogs.tech", url: "https://hedgehogs.tech", published_at: null, accessed_at: 2026-09-03T13:16:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-7, CLM-10, CLM-12, CLM-14, CLM-15, CLM-18, CLM-19, CLM-20, CLM-21, CLM-22, EVT-1, EVT-3], excerpt: "EVERY NFT IS A HEDGE FUND. 3,333 pixel hedgehog fund managers. $HEDGE Robinhood Chain · 4663. Address 0x8226DDA5F73619DEdC671e09Be738fA308da1944. TBF: ERC-721 the manager, ERC-6551 the account, ERC-4626 the vault. Footer: Mint — sold out (3,333/3,333). 1B $HEDGE fixed supply · zero emissions." }
  - { id: R-2, publisher: Hedgehogs, title: "HEDGEHOGS terminal app CFG", url: "https://hedgehogs.tech/app", published_at: null, accessed_at: 2026-09-03T13:17:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-18, CLM-19, CLM-20, CLM-22, CLM-24, CLM-25, EVT-2], excerpt: "twitter:site @HedgeOnHood. CFG chainIdHex 0x1237 (4663). hogs 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534. hedge 0x8226DDA5F73619DEdC671e09Be738fA308da1944. oracle 0xe77667d58f30bEAEF072B4ac386eE4eDE0519348. upgrade 0xb5430F00154d21719c3CAa53508C96678167555D labeled UpgradePool. treasury 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3." }
  - { id: R-3, publisher: Blockscout, title: "HEDGE token 0x8226DDA5…", url: "https://robinhoodchain.blockscout.com/address/0x8226DDA5F73619DEdC671e09Be738fA308da1944", published_at: null, accessed_at: 2026-09-03T13:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-7, CLM-9, CLM-11, CLM-14, EVT-1, EVT-4], excerpt: "API v2: name Hedge, is_contract true, is_verified false, token ERC-20 symbol HEDGE decimals 18 holders_count 4493 total_supply 879005348025483300742781160, creator 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, creation tx 0x95ffac3462d358c7dafc98bdc34a66f4d8d8044e336aa3229c925f8bb4978c7f." }
  - { id: R-4, publisher: Blockscout, title: "Hedgehogs collection 0xe044b7Ff…", url: "https://robinhoodchain.blockscout.com/address/0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534", published_at: null, accessed_at: 2026-09-03T13:19:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-12, CLM-14, CLM-15, EVT-2, EVT-4], excerpt: "API v2: name Hedgehogs, is_verified false, token ERC-721 symbol HOG holders_count 332, creator 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, creation tx 0x46dc2deab20a87277d89743fedf7c482e043e1f409eb0bbc8512e5cede0c663b at 2026-08-20T06:52:25Z." }
  - { id: R-5, publisher: Blockscout, title: "Site-labeled oracle 0xe77667d5…", url: "https://robinhoodchain.blockscout.com/address/0xe77667d58f30bEAEF072B4ac386eE4eDE0519348", published_at: null, accessed_at: 2026-09-03T13:19:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-24, EVT-4], excerpt: "API v2: is_contract true, is_verified false, name null, creator 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, creation tx 0x4f74a4391258d24d75607be9753100acbb7e4810ac3bea5141f82b747f569116 at 2026-08-20T06:52:09Z. Site app CFG labels this address oracle." }
  - { id: R-6, publisher: Blockscout, title: "Site-labeled UpgradePool 0xb5430F00…", url: "https://robinhoodchain.blockscout.com/address/0xb5430F00154d21719c3CAa53508C96678167555D", published_at: null, accessed_at: 2026-09-03T13:19:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "API v2: is_contract true, is_verified false, name null, creator 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3. App CFG comment: UpgradePool — burn to level, earn the 0.5% slice." }
  - { id: R-7, publisher: Blockscout, title: "EACAggregatorProxy feeds listed in site CFG", url: "https://robinhoodchain.blockscout.com/address/0x4A1166a659A55625345e9515b32adECea5547C38", published_at: null, accessed_at: 2026-09-03T13:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "Site homepage CFG feeds TSLA 0x4A1166a659A55625345e9515b32adECea5547C38, NVDA 0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15, AAPL 0x6B22A786bAa607d76728168703a39Ea9C99f2cD0, SPY 0x319724394D3A0e3669269846abE664Cd621f9f6A. Each Blockscout name EACAggregatorProxy, is_verified true, creator 0xfE3c266C0F994f9552b70D9107214Fe0ED0d74d8." }
  - { id: R-8, publisher: "X", title: "@HedgeOnHood profile", url: "https://x.com/HedgeOnHood", published_at: null, accessed_at: 2026-09-03T13:17:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-6, CLM-18], excerpt: "Profile URL returned HTTP 200. Post bodies, status ids, and post dates were not recovered this round (jina.ai 403, syndication 429, nitter landing page)." }
  - { id: R-9, publisher: DexScreener, title: "HEDGE/ETH pair on Robinhood", url: "https://dexscreener.com/robinhood/0x7ec4a638b2c948c041712dc51e77b2d54429450abb24227b4259376872a6bd88", published_at: null, accessed_at: 2026-09-03T13:18:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-3], excerpt: "api.dexscreener.com/token-pairs/v1/robinhood/0x8226DDA5F73619DEdC671e09Be738fA308da1944 returned a uniswap pair with base Hedge/HEDGE and quote Ether, liquidity.usd 15360.43, volume.h24 266.97. A second pair quotes USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168." }
  - { id: R-10, publisher: DefiLlama, title: "Chains API Robinhood Chain TVL", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-03T13:19:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "Row name Robinhood Chain, chainId 4663, tvl 803813362.2440326 as of this request. Chain TVL is not a Hedgehogs protocol figure." }
  - { id: R-11, publisher: DefiLlama, title: "Protocols API, Robinhood Chain slice", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T13:19:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-14], excerpt: "138 protocol rows listed Robinhood Chain among chains, including StonkBrokers / stonkbrokers. No Hedgehogs, Hedge On Hood, or matching slug. Tokens on chain 4663 are not a Llama protocol row." }
  - { id: R-12, publisher: Blockscout, title: "HEDGE creation transaction", url: "https://robinhoodchain.blockscout.com/tx/0x95ffac3462d358c7dafc98bdc34a66f4d8d8044e336aa3229c925f8bb4978c7f", published_at: "2026-08-20T06:52:07.000000Z", accessed_at: 2026-09-03T13:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, EVT-1], excerpt: "status ok, timestamp 2026-08-20T06:52:07.000000Z, from 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, result success. Contract create for the Hedge ERC-20." }
  - { id: R-13, publisher: Blockscout, title: "Hedgehogs collection creation transaction", url: "https://robinhoodchain.blockscout.com/tx/0x46dc2deab20a87277d89743fedf7c482e043e1f409eb0bbc8512e5cede0c663b", published_at: "2026-08-20T06:52:25.000000Z", accessed_at: 2026-09-03T13:19:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-2], excerpt: "status ok, timestamp 2026-08-20T06:52:25.000000Z, from 0xf411CF7F8b12776aeD4a7780497Fa1a5757831D3, created_contract 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534 name Hedgehogs." }
  - { id: R-14, publisher: Blockscout, title: "HOODIES ERC-721 (collision check)", url: "https://robinhoodchain.blockscout.com/address/0x8F468471ee1b11a0C060bd76A8e7300d4bc91360", published_at: null, accessed_at: 2026-09-03T13:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "API v2: name HOODIES, is_contract true, is_verified false, token ERC-721 symbol HOODIE. Distinct from Hedgehogs collection 0xe044b7Ffad1aC2aa1c52Ee98d593c7981Bd09534." }
  - { id: R-15, publisher: Blockscout, title: "The Robin Hoodies ERC-20 (collision check)", url: "https://robinhoodchain.blockscout.com/address/0x971c43907c9f5ccf52Dc8a560d7240E27153fdEf", published_at: null, accessed_at: 2026-09-03T13:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "API v2: name LaunchToken, is_verified true, token ERC-20 name The Robin Hoodies symbol HOODIES. Distinct from Hedge ERC-20 0x8226DDA5F73619DEdC671e09Be738fA308da1944." }
gaps:
  - { priority: P0, question: "Can owner() on the token, collection, and oracle change fees, NAV, or the upgrade path without a timelock?", checked: "owner() returned a single EOA on those three contracts; explorer source is unverified so setters were not read from verified source, 2026-09-03", next: "Read verified source if it appears, or eth_call the fee/oracle setters and record the access modifier" }
  - { priority: P1, question: "Do the remaining app CFG addresses (drip, dex adapter, bulk/convert routers, ownerDrip, topDripV2, listed stock-token CAs) exist on 4663 with the labeled names?", checked: "CFG keys copied from hedgehogs.tech/app 2026-09-03; only hogs, hedge, oracle, upgrade, and the four homepage feeds were RPC/explorer checked this round", next: "Reproduce each remaining CFG address on Blockscout and record contract name plus explorer_source_verified" }
  - { priority: P1, question: "X Latest from @HedgeOnHood and follow-list handles this window?", checked: "x.com/HedgeOnHood HTTP 200 without post bodies; jina 403; syndication 429; nitter was a landing page. No tweet ids filed.", next: "Re-run Latest on @HedgeOnHood and the accounts.yaml follow list when X is readable" }
  - { priority: P2, question: "Is there a DefiLlama protocol row or GitHub org still missing?", checked: "api.llama.fi/protocols 2026-09-03 no Hedgehogs row; site and app listed no GitHub path", next: "Watch Llama listings and any repository link the official pages add" }
---

## What it is

Hedgehogs is a 3,333-seat NFT collection on Robinhood Chain. The official site describes each ERC-721 as a manager seat bound to an ERC-6551 account that also functions as an ERC-4626 vault holding tokenized stocks and listed tokens. The site publishes $HEDGE at 0x8226DDA5F73619DEdC671e09Be738fA308da1944 on chain 4663 and states the mint is sold out. This round's explorer and RPC checks found that ERC-20 and an ERC-721 named Hedgehogs; neither has verified source.

Themes: nft-treasury, token-bound-nft, vault, rwa, erc-20

## Why it matters

The name is still missing from the public census after the 2026-08-31 candidate. A native token-bound fund on chain 4663 is a different machine from StonkBrokers and from Quotrons, and the token and collection contracts are now reproduced on the explorer. [claim R-1] [verified R-3] [verified R-4]

## What could go wrong

`owner()` on the token, collection, and site-labeled oracle is a single externally owned account, and explorer source is unverified, so fee, NAV, and upgrade paths were not read from verified code. Site copy of a 1B fixed $HEDGE supply does not match explorer `total_supply` of about 879 million tokens. [verified R-3] [claim R-1]

## Operations log

- 2026-09-03: grok-bot field desk. Gap hunted: Hedgehogs / @HedgeOnHood (on accounts, off census). X Latest closed (no post bodies). Official site + app CFG + Blockscout API v2 + RPC `https://rpc.mainnet.chain.robinhood.com` + DefiLlama chains/protocols + DexScreener token-pairs. Candidate slug `hedge` proposed for compiler census intake. Did not write `content/census.yaml` or `content/accounts.yaml`.
