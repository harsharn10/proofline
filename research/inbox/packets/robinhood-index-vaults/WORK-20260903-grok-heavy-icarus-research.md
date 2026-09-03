---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: robinhood-index-vaults
name: Robinhood Index Vaults
packet_tier: seed
as_of: 2026-09-03T18:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [robinhood-index-vaults]
allowed_paths:
  - research/inbox/packets/robinhood-index-vaults/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Robinhood Index Vaults
  aliases: ["Robinhood Index Vault", "Index Vaults"]
  symbols: [rIDX]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: "NULL — GitHub homepage field is https://robinhood-index-vaults.vercel.app; GET returned Vercel DEPLOYMENT_NOT_FOUND. README names localhost:3000 only."
  official_handle: "@0xNSVOUD"
  repository: https://github.com/nsvoud-dev/robinhood-index-vaults
  possible_matches:
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is a fee-funded Stock Token distributor at theindex.finance / @TheIndexFi, token 0x56910D4409F3a0C78C64DD8D0545FF0705389870"
        - "Robinhood Index Vaults is an ERC-4626 rIDX vault in github.com/nsvoud-dev/robinhood-index-vaults; Hardhat and the frontend only declare robinhoodTestnet chain id 46630"
        - "No shared domain, handle, repository, or reproduced address"
    - slug: robindex
      signals: [other]
      contrary_signals:
        - "Census Robindex is a market scanner at robindex.pro / @robindexpro, token 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3"
        - "Robinhood Index Vaults is a testnet ERC-4626 basket vault (rIDX), not a scanner"
        - "No shared domain, handle, repository, or reproduced address"
    - slug: vimen
      signals: [other]
      contrary_signals:
        - "Census Vimen is a live in-kind redeemable basket at vimen.org / @vimenprotocol"
        - "Robinhood Index Vaults mints rIDX against WETH via a MockSwapRouter on chain id 46630; Vimen MAG7 is BasketToken on 4663"
        - "No shared domain, handle, repository, or reproduced address"

classification:
  primary_leaf: rwa-products/index-vault
  secondary_leaves: []
  mechanism_tags: [index, rwa, vault]
  ecosystem_role: observe
  lifecycle: testnet-only
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "IndexVault is an ERC-4626 that wraps ETH to WETH and swaps into PLTR/AMD/NFLX/AMZN/TSLA through MockSwapRouter at a fixed 1 WETH = 100 stock tokens. Hardhat and the frontend only declare robinhoodTestnet (chain id 46630). Testnet explorer shows rIDX 0x04653b… and MockSwapRouter 0x31ecd0…; those addresses are_contract false on Blockscout 4663 and q=rIDX returns 0 tokens. Phase 2 is a planned audit and mainnet DEX swap. [R-1] [R-2] [R-3] [R-4] [R-13] [R-14] [R-16]"

qualifying:
  deployed_on_chain: { status: fail, claim_ids: [CLM-4, CLM-7, CLM-8], note: "No contract on chain 4663. Hardhat/frontend only name robinhoodTestnet 46630. Testnet rIDX 0x04653b… and MockSwapRouter 0x31ecd0… are_contract false on Blockscout 4663; search q=rIDX returned 0 tokens." }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-12], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-14, CLM-15], note: "" }

links:
  - { kind: github, url: "https://github.com/nsvoud-dev/robinhood-index-vaults", authenticity: confirmed }
  - { kind: x, url: "https://x.com/0xNSVOUD", authenticity: unconfirmed }
  - { kind: other, url: "https://robinhood-index-vaults.vercel.app", authenticity: conflicted }

deployments:
  - label: IndexVault rIDX (Robinhood Chain testnet 46630; largest rIDX by supply this pass)
    role: vault
    address:
      value: "0x04653bF84918B05a68A7d568233ec1e259338D7E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: false
    receipt_ids: [R-13, R-16]
  - label: MockSwapRouter (hardcoded in scripts/fundRouter.js and deployVaultOnly.js; testnet 46630)
    role: router
    address:
      value: "0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: false
    receipt_ids: [R-6, R-14, R-16]
  - label: Testnet WETH constant in IndexVault.sol / hardhat scripts (not a project contract)
    role: other
    address:
      value: "0x7943e237c7F95DA44E0301572D358911207852Fa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: false
    receipt_ids: [R-3, R-15, R-16]

metrics:
  - { kind: holders, value: 4, currency: null, as_of: 2026-09-03T18:45:00Z, window: point, method: "explorer.testnet.chain.robinhood.com/api/v2/tokens/0x04653bF84918B05a68A7d568233ec1e259338D7E holders_count (testnet 46630, not 4663)", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: repository-crosslink, checked_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5, R-7, R-8, R-9], result: "github.com/nsvoud-dev/robinhood-index-vaults default branch main @ 41f10a2. README: ERC-4626 rIDX, MockSwapRouter, Phase 1 testnet / Phase 2 audit+mainnet. hardhat.config.js and frontend/src/config/chains.ts define only robinhoodTestnet id 46630. IndexVault.sol Ownable ERC-4626, WETH constant 0x7943…852Fa, constructor name Robinhood Index Vault symbol rIDX, setIndex onlyOwner. MockSwapRouter STOCK_PER_WETH 100. package.json deploy script --network robinhoodTestnet. GitHub API homepage vercel.app, twitter_username 0xNSVOUD on user nsvoud-dev." }
  - { id: REP-2, method: explorer-ui, chain_id: 46630, checked_at: 2026-09-03T18:45:00Z, receipt_ids: [R-13, R-14, R-17], result: "explorer.testnet.chain.robinhood.com API v2: 0x31ecd0… is_contract true, is_verified false, creator 0xf809911452fc0F280838001706aFF82591f96070, creation tx 0x5c7581… timestamp 2026-02-19T23:41:55Z block 2406186. Search q=rIDX returned eight ERC-20s named Robinhood Index Vault / rIDX; largest supply 0x04653b… is_contract true, is_verified false, creator same 0xf809…, creation tx 0x0a7853… 2026-03-04T18:31:22Z, holders_count 4, decimals 18. Testnet WETH 0x7943… is_contract true name WETH." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T18:35:00Z, receipt_ids: [R-16, R-18, R-19, R-20], result: "robinhoodchain.blockscout.com API v2: 0x31ecd0…, 0x7943…, and the five hardcoded stock-token CAs are_contract false. Search q=rIDX items []. Search q=IndexVault hits other 4663 contracts: INDEXVAULT token 0xC6d1… symbol INDEXVAULT (not rIDX), IndexVault.sol at contracts/index/IndexVault.sol 0xc6ff… (pragma 0.8.24, not this repo), Hood MAG7 Index hMAG7 0x43e4…. api.llama.fi/protocol/robinhood-index-vaults HTTP 400." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "ERC-4626 IndexVault asset is WETH. depositEth wraps ETH and swaps into PLTR/AMD/NFLX/AMZN/TSLA at 20% each via ISwapRouter.exactInputSingle; withdraw burns rIDX shares, sells the basket back to WETH, unwraps, and sends ETH. Owner can setIndex, rebalance, setKeeper, and forceTriggerSafeMode. Users may setUserIndex weights.", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: identity.repository, value: "https://github.com/nsvoud-dev/robinhood-index-vaults", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: rIDX, class: verified, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-1, R-3, R-5, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: lifecycle, value: testnet-only, class: verified, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-1, R-2, R-7, R-13, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "@0xNSVOUD (GitHub user nsvoud-dev twitter_username; README does not name a handle; X search from:0xNSVOUD returned no posts this pass). Flag: unconfirmed-official", class: claim, observed_at: 2026-09-03T18:25:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: identity.domain, value: "NULL — GitHub homepage https://robinhood-index-vaults.vercel.app returned Vercel DEPLOYMENT_NOT_FOUND; README frontend is localhost:3000", class: claim, observed_at: 2026-09-03T18:25:00Z, receipt_ids: [R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691", class: verified, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-6, R-14, R-16], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x04653bF84918B05a68A7d568233ec1e259338D7E", class: verified, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "IndexVault Ownable(msg.sender). Testnet rIDX 0x04653b… and MockSwapRouter 0x31ecd0… creator_address_hash 0xf809911452fc0F280838001706aFF82591f96070 (is_contract false on testnet explorer). getOwner() was not eth_called this pass.", class: claim, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: control.privileged-role, value: "onlyOwner: setIndex, rebalanceIndex, setEmergencyThreshold, setKeeper, setPriceOracle, forceTriggerSafeMode, exitSafeMode. Owner or keeper: rebalance, recordSnapshot. No timelock in IndexVault.sol. harvestAndReinvest is public.", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: rwa-products/index-vault, class: inference, observed_at: 2026-09-03T18:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: taxonomy.mechanism-tag, value: "index, rwa, vault", class: inference, observed_at: 2026-09-03T18:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report in the repository. README Phase 2: Mainnet launch and security audit. Grant target $5,000–$15,000. Replace MockSwapRouter with a production DEX.", class: claim, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "MockSwapRouter implements Uniswap V3-style exactInputSingle at a fixed rate 1 WETH = 100 stock tokens. README: swapping mainnet to a real DEX is a config change. amountOutMinimum is 0 on vault rebalance swaps.", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: relationship, value: "Distinct from The Index (tax distributor), Robindex (scanner), Vimen (in-kind baskets), 4663 INDEXVAULT token 0xC6d1… (symbol INDEXVAULT, INDEXVAULT.sol), 4663 IndexVault 0xc6ff… (contracts/index/IndexVault.sol pragma 0.8.24), and Hood MAG7 Index hMAG7 0x43e4…", class: claim, observed_at: 2026-09-03T18:40:00Z, receipt_ids: [R-18, R-19, R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: identity.name, value: "Robinhood Index Vaults", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-1, R-8, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: team.repository, value: "GitHub user nsvoud-dev (name nsvoud) owns the repo; LICENSE Copyright (c) 2026 nsvoud-dev; commits authored nsvoud / instansera@gmail.com, several Co-authored-by Cursor", class: claim, observed_at: 2026-09-03T18:25:00Z, receipt_ids: [R-8, R-9, R-10, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@0xNSVOUD.official", value: "GitHub API users/nsvoud-dev twitter_username 0xNSVOUD. README, Hardhat and frontend do not name the handle. X keyword from:0xNSVOUD returned no posts this pass. Flag: unconfirmed-official", class: claim, observed_at: 2026-09-03T18:25:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: activity.status, value: "Testnet search q=rIDX returned eight unverified ERC-20s named Robinhood Index Vault / rIDX (redeploys). Largest supply this pass 0x04653b… holders_count 4 total_supply 2200000000000063 (18 decimals).", class: claim, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: communications.status, value: "No X posts from @0xNSVOUD and no official Telegram/Discord URL in the repository this pass. Last git push 2026-03-05T18:36:37Z.", class: unknown, observed_at: 2026-09-03T18:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T18:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: control.timelock, value: "No timelock in IndexVault.sol; owner setters take effect in the same call", class: verified, observed_at: 2026-09-03T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-24, field: other, value: "GitHub homepage https://robinhood-index-vaults.vercel.app returned HTTP 404 Vercel DEPLOYMENT_NOT_FOUND", class: claim, observed_at: 2026-09-03T18:25:00Z, receipt_ids: [R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.alias, value: "Robinhood Index Vault (token name on testnet explorer and IndexVault constructor)", class: verified, observed_at: 2026-09-03T18:45:00Z, receipt_ids: [R-3, R-5, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "GitHub HEAD commit adds institutional UI and Safe Mode UX"
    summary: "Commit 41f10a2: Institutional UI with unified local logos and enhanced Safe Mode UX."
    occurred_at: 2026-03-05T18:36:33Z
    observed_at: 2026-09-03T18:20:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-2
    type: onchain
    title: "Testnet rIDX vault 0x04653b… created"
    summary: "Testnet explorer: rIDX 0x04653b… created by 0xf809… in tx 0x0a7853… at 2026-03-04T18:31:22Z."
    occurred_at: 2026-03-04T18:31:22Z
    observed_at: 2026-09-03T18:45:00Z
    affected_fields: [deployment.address, lifecycle, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: company
    title: "GitHub initial MVP commit"
    summary: "Commit 7fbe3ab: feat initial MVP for Robinhood Index Vaults, co-authored by Cursor."
    occurred_at: 2026-02-20T15:16:05Z
    observed_at: 2026-09-03T18:20:00Z
    affected_fields: [identity.repository, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: onchain
    title: "MockSwapRouter created on Robinhood testnet"
    summary: "Testnet explorer: 0x31ecd0… created by 0xf809… in tx 0x5c7581… at 2026-02-19T23:41:55Z, block 2406186."
    occurred_at: 2026-02-19T23:41:55Z
    observed_at: 2026-09-03T18:45:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-17]
  - id: EVT-5
    type: risk
    title: "GitHub homepage Vercel app returns 404"
    summary: "GET robinhood-index-vaults.vercel.app returned Vercel DEPLOYMENT_NOT_FOUND. GitHub homepage still names that URL."
    occurred_at: 2026-09-03T18:25:00Z
    observed_at: 2026-09-03T18:25:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-11]

receipts:
  - { id: R-1, publisher: nsvoud-dev, title: "README.md Robinhood Index Vaults", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/README.md", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-11, CLM-12, CLM-13, CLM-14, CLM-15, CLM-17, CLM-22], excerpt: "Tokenized index funds on Robinhood L2. Deposit ETH, receive a single vault share (rIDX) representing a diversified basket of stock tokens—PLTR, AMD, NFLX, AMZN, TSLA—with one click. Phase 1 Done: MVP on Robinhood Testnet. Phase 2 Planned: Mainnet launch and security audit. Replace MockSwapRouter with production DEX. Chain ID 46630." }
  - { id: R-2, publisher: nsvoud-dev, title: "hardhat.config.js robinhoodTestnet", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/hardhat.config.js", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-12], excerpt: "networks.robinhoodTestnet url https://rpc.testnet.chain.robinhood.com chainId 46630. etherscan customChains robinhoodTestnet chainId 46630 browserURL https://explorer.testnet.chain.robinhood.com. No mainnet / 4663 network key." }
  - { id: R-3, publisher: nsvoud-dev, title: "contracts/IndexVault.sol", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/contracts/IndexVault.sol", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-9, CLM-10, CLM-15, CLM-23, CLM-25], excerpt: "contract IndexVault is ERC4626, Ownable, ReentrancyGuard. WETH constant 0x7943e237c7F95DA44E0301572D358911207852Fa. STOCK_PER_WETH 100. Constructor deploys ERC20 name/symbol from args; deploy.js uses Robinhood Index Vault / rIDX. setIndex onlyOwner; rebalance owner or keeper; forceTriggerSafeMode onlyOwner. No timelock." }
  - { id: R-4, publisher: nsvoud-dev, title: "contracts/MockSwapRouter.sol", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/contracts/MockSwapRouter.sol", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-15], excerpt: "Mock DEX router for testing. Fixed rate: 1 WETH = 100 Stock Tokens. exactInputSingle WETH->stock multiplies amountIn by STOCK_PER_WETH; stock->WETH divides. Deployer must fund this contract with stock tokens." }
  - { id: R-5, publisher: nsvoud-dev, title: "scripts/deploy.js", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/scripts/deploy.js", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-25], excerpt: "// Robinhood Chain Testnet. WETH 0x7943e237c7F95DA44E0301572D358911207852Fa. STOCK_TOKENS PLTR 0x1FBE…98d0, AMD 0x7117…778d, NFLX 0x3b82…8C93, AMZN 0x5884…9E02, TSLA 0xC9f9…Bd4E. IndexVault.deploy(WETH, \"Robinhood Index Vault\", \"rIDX\", routerAddress)." }
  - { id: R-6, publisher: nsvoud-dev, title: "scripts/fundRouter.js MOCK_SWAP_ROUTER", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/scripts/fundRouter.js", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-7], excerpt: "const MOCK_SWAP_ROUTER = \"0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691\". Same address in scripts/deployVaultOnly.js as ROUTER_ADDRESS." }
  - { id: R-7, publisher: nsvoud-dev, title: "frontend/src/config/chains.ts", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/frontend/src/config/chains.ts", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-12], excerpt: "export const robinhoodTestnet = defineChain({ id: 46630, name: \"Robinhood Chain Testnet\", rpcUrls default http https://rpc.testnet.chain.robinhood.com, blockExplorers url https://explorer.testnet.chain.robinhood.com }). wagmi.ts chains: [robinhoodTestnet] only." }
  - { id: R-8, publisher: GitHub, title: "nsvoud-dev/robinhood-index-vaults repository", url: "https://github.com/nsvoud-dev/robinhood-index-vaults", published_at: 2026-02-20T15:17:25Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-6, CLM-17, CLM-18, CLM-24, EVT-5], excerpt: "API: full_name nsvoud-dev/robinhood-index-vaults, homepage https://robinhood-index-vaults.vercel.app, created_at 2026-02-20T15:17:25Z, pushed_at 2026-03-05T18:36:37Z, default_branch main, stargazers_count 0, license MIT, language TypeScript." }
  - { id: R-9, publisher: GitHub, title: "user nsvoud-dev", url: "https://github.com/nsvoud-dev", published_at: 2025-10-23T16:50:11Z, accessed_at: 2026-09-03T18:25:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-18, CLM-19], excerpt: "API users/nsvoud-dev: login nsvoud-dev, name nsvoud, twitter_username 0xNSVOUD, blog empty, created_at 2025-10-23T16:50:11Z." }
  - { id: R-10, publisher: nsvoud-dev, title: "commit 41f10a2 Institutional UI / Safe Mode UX", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/commit/41f10a23efb9639bf793d6b37ced009058be0270", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-18, EVT-1], excerpt: "SHA 41f10a23efb9639bf793d6b37ced009058be0270. Message: Major: Institutional UI with unified local logos and enhanced Safe Mode UX. Author nsvoud instansera@gmail.com 2026-03-05T18:36:33Z. HEAD of main." }
  - { id: R-11, publisher: Vercel, title: "robinhood-index-vaults.vercel.app 404", url: "https://robinhood-index-vaults.vercel.app", published_at: null, accessed_at: 2026-09-03T18:25:00Z, kind: other, authority: unknown, authenticity: conflicted, supports: [CLM-6, CLM-24, EVT-5], excerpt: "HTTP 404. 404: NOT_FOUND. Code: DEPLOYMENT_NOT_FOUND. This deployment cannot be found." }
  - { id: R-12, publisher: nsvoud-dev, title: "VIDEO_SCRIPT.md grant demo", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/blob/41f10a23efb9639bf793d6b37ced009058be0270/VIDEO_SCRIPT.md", published_at: 2026-03-05T18:36:33Z, accessed_at: 2026-09-03T18:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-14], excerpt: "Grant Demo Video Script — Robinhood Index Vaults. Conclusion: The MVP is live on Robinhood Testnet and the repo is open. We're ready for a Phase 2 security audit and mainnet launch — and we're applying to the Arbitrum and Robinhood Ecosystem Fund to get there." }
  - { id: R-13, publisher: Robinhood Chain testnet explorer, title: "rIDX 0x04653bF84918B05a68A7d568233ec1e259338D7E", url: "https://explorer.testnet.chain.robinhood.com/address/0x04653bF84918B05a68A7d568233ec1e259338D7E", published_at: 2026-03-04T18:31:22Z, accessed_at: 2026-09-03T18:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-8, CLM-9, CLM-17, CLM-20, CLM-25, EVT-2], excerpt: "API v2: hash 0x04653bF84918B05a68A7d568233ec1e259338D7E, is_contract true, is_verified false, name Robinhood Index Vault, creator 0xf809911452fc0F280838001706aFF82591f96070, creation_transaction_hash 0x0a7853578f1580fd0fdb8c8fd47d4f8e91af2829eb6b6b87ddc828897d6c9519. Token name Robinhood Index Vault symbol rIDX holders_count 4 decimals 18. Search q=rIDX returned eight rIDX ERC-20s." }
  - { id: R-14, publisher: Robinhood Chain testnet explorer, title: "MockSwapRouter 0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691", url: "https://explorer.testnet.chain.robinhood.com/address/0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691", published_at: 2026-02-19T23:41:55Z, accessed_at: 2026-09-03T18:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-9, EVT-4], excerpt: "API v2: hash 0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691, is_contract true, is_verified false, name null, creator 0xf809911452fc0F280838001706aFF82591f96070, creation_transaction_hash 0x5c7581187066e314a8e7d4be190fe01c4397b7cc5af58369e912f439e05a0b62, has_logs true, has_token_transfers true." }
  - { id: R-15, publisher: Robinhood Chain testnet explorer, title: "Testnet WETH 0x7943e237c7F95DA44E0301572D358911207852Fa", url: "https://explorer.testnet.chain.robinhood.com/address/0x7943e237c7F95DA44E0301572D358911207852Fa", published_at: null, accessed_at: 2026-09-03T18:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "API v2: hash 0x7943e237c7F95DA44E0301572D358911207852Fa, is_contract true, is_verified false, name WETH, proxy_type eip1967, token name WETH symbol WETH holders_count 44173. Creator 0xCe6C30911056a961c5C540367dc670f69240Ee92." }
  - { id: R-16, publisher: Blockscout, title: "4663 empty check for repo CAs and rIDX search", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=rIDX", published_at: null, accessed_at: 2026-09-03T18:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-8], excerpt: "GET /api/v2/search?q=rIDX items []. Address pages 0x31ecd0…691, 0x7943…852Fa, 0x1FBE…98d0, 0x7117…778d, 0x3b82…8C93, 0x5884…9E02, 0xC9f9…Bd4E: is_contract false, is_verified false, creation_tx_hash null." }
  - { id: R-17, publisher: Robinhood Chain testnet explorer, title: "MockSwapRouter creation tx 0x5c7581…", url: "https://explorer.testnet.chain.robinhood.com/tx/0x5c7581187066e314a8e7d4be190fe01c4397b7cc5af58369e912f439e05a0b62", published_at: 2026-02-19T23:41:55Z, accessed_at: 2026-09-03T18:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "timestamp 2026-02-19T23:41:55.000000Z, status ok, result success, block_number 2406186, from 0xf809911452fc0F280838001706aFF82591f96070 is_contract false, to null (contract creation)." }
  - { id: R-18, publisher: Blockscout, title: "INDEXVAULT token 0xC6d1cB3A0d1A049af5cC412D8C8c4c32149Fc0Cc", url: "https://robinhoodchain.blockscout.com/address/0xC6d1cB3A0d1A049af5cC412D8C8c4c32149Fc0Cc", published_at: null, accessed_at: 2026-09-03T18:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "is_contract true, is_verified true, name Index Vault, creator 0x0d6cED728ac12De9133393b128274821B6e7640B, token name Index Vault symbol INDEXVAULT type ERC-20 holders_count 71 total_supply 1e27. Verified file INDEXVAULT.sol pragma 0.8.26, Uniswap v4 PoolKey imports. Not rIDX." }
  - { id: R-19, publisher: Blockscout, title: "IndexVault 0xc6ff4bc6E90a624a20D5c06679965A951a5Ba2F4", url: "https://robinhoodchain.blockscout.com/address/0xc6ff4bc6E90a624a20D5c06679965A951a5Ba2F4", published_at: null, accessed_at: 2026-09-03T18:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "is_contract true, is_verified true, name IndexVault, creator 0xFa382a4009327B8BC868c9fdBCa49d35834E19dF. Verified file contracts/index/IndexVault.sol pragma solidity ^0.8.24. Not the nsvoud-dev 0.8.20 Ownable ERC-4626." }
  - { id: R-20, publisher: Blockscout, title: "Hood MAG7 Index hMAG7 0x43e4aa3204A2d3cee2E12532195E9a6b766a3639", url: "https://robinhoodchain.blockscout.com/address/0x43e4aa3204A2d3cee2E12532195E9a6b766a3639", published_at: null, accessed_at: 2026-09-03T18:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "is_contract true, is_verified true, name Hood MAG7 Index, creator 0x4667E480371A9BeD712f7d03dB1F0863262d9fb4, token symbol hMAG7 holders_count 5. DefiLlama lists Hood Index separately; not rIDX." }
  - { id: R-21, publisher: nsvoud-dev, title: "commit 7fbe3ab initial MVP", url: "https://github.com/nsvoud-dev/robinhood-index-vaults/commit/7fbe3abd3ccc2cf531d139eef5a77a128a9d4c09", published_at: 2026-02-20T15:16:05Z, accessed_at: 2026-09-03T18:20:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-18, EVT-3], excerpt: "SHA 7fbe3abd3ccc2cf531d139eef5a77a128a9d4c09. Message: feat: initial MVP for Robinhood Index Vaults. Co-authored-by: Cursor. Author nsvoud instansera@gmail.com 2026-02-20T15:16:05Z." }

gaps:
  - { priority: P0, question: "Which of the eight testnet rIDX ERC-20s is the intended demo vault, and does any still hold index tokens / WETH?", checked: "testnet search q=rIDX eight hits; 0x04653b… largest supply, holders_count 4, source unverified; frontend INDEX_VAULT_ADDRESS is env-only, 2026-09-03", next: "eth_call getIndexTokens/totalAssets/getOwner on 0x04653b… and the other seven rIDX CAs on rpc.testnet.chain.robinhood.com" }
  - { priority: P0, question: "Has any IndexVault from this repository been deployed on chain 4663 since this pass?", checked: "Blockscout 4663 q=rIDX empty; repo CAs is_contract false; Hardhat has no 4663 network, 2026-09-03", next: "re-run Blockscout q=rIDX and eth_getCode on 0x04653b… / 0x31ecd0… after any later git push" }
  - { priority: P1, question: "Does getOwner() on testnet rIDX 0x04653b… equal creator 0xf809…, and is that key the nsvoud-dev deployer?", checked: "creator_address_hash 0xf809… is_contract false; IndexVault Ownable(msg.sender); no eth_call this pass", next: "eth_call getOwner() on 46630 and any public link from nsvoud-dev to 0xf809…" }
  - { priority: P1, question: "Is there an audit of IndexVault.sol / MockSwapRouter.sol?", checked: "README Phase 2 planned; VIDEO_SCRIPT grant ask; GitHub repo, LICENSE, no audit PDF, 2026-09-03", next: "record any later report whose commit matches 41f10a2 or a tagged release (none exist)" }
  - { priority: P2, question: "Will robinhood-index-vaults.vercel.app return, and does @0xNSVOUD post about this repo?", checked: "Vercel 404; GitHub twitter_username 0xNSVOUD; X from:0xNSVOUD no posts this pass", next: "re-GET the Vercel host and the X profile after a new push" }

---

# Robinhood Index Vaults — research packet

## What it is

A testnet ERC-4626 vault that turns ETH into rIDX shares of a five-name stock-token basket. A user deposits ETH on Robinhood Chain testnet (chain id 46630); the vault wraps to WETH and swaps into PLTR, AMD, NFLX, AMZN and TSLA at 20% each through a mock router. nsvoud-dev publishes the contracts and a local Next.js app. Mainnet is listed as a later audit-and-launch phase.

Themes: index, rwa, vault

## Why it matters

This is the census rwa-products/index-vault row: a Stock Token basket that mints a vault share instead of distributing tokens from a pool tax. It is not The Index, not Robindex, and not Vimen. Qualifying deployed_on_chain fails until a 4663 address exists. [verified R-1 R-16]

## What could go wrong

Swaps go through MockSwapRouter at a fixed 1 WETH = 100 stock tokens, not a live DEX. The owner can setIndex, rebalance, and force Safe Mode with no timelock. Eight unverified rIDX ERC-20s sit on testnet; the frontend vault address is an env var, not a committed CA. [verified R-3 R-4] [claim R-13]

## Product and mechanics

IndexVault is OpenZeppelin ERC-4626 + Ownable. depositEth wraps ETH to the hardcoded testnet WETH and splits it across five constructor tokens at 2000 bps each. withdraw burns shares, sells the basket back to WETH, unwraps, and sends min(balance, wethOut) ETH. [verified R-1 R-3]

MockSwapRouter implements exactInputSingle at STOCK_PER_WETH = 100. README Phase 2 is to replace that mock with a production DEX after an audit. Vault rebalance calls pass amountOutMinimum 0. [verified R-1 R-4]

## Control and security

Owner is msg.sender at deploy. onlyOwner can setIndex (tokens, weights summing to 10000 bps, fee tiers), setKeeper, setPriceOracle, forceTriggerSafeMode and exitSafeMode. Owner or keeper can rebalance and recordSnapshot. harvestAndReinvest is public. No timelock in the source. Testnet creator of the router and the largest rIDX is EOA 0xf809…. [verified R-3] [claim R-13 R-14]

No audit report is in the repository. README Phase 2 names a security audit and a $5,000–$15,000 grant target. [claim R-1 R-12]

## Team and provenance

GitHub user nsvoud-dev (display name nsvoud) owns the MIT-licensed repo. API twitter_username is 0xNSVOUD; the README does not name that handle. Commits are authored nsvoud / instansera@gmail.com; the initial MVP is co-authored by Cursor. [claim R-8 R-9 R-21]

## Economics and activity

No DefiLlama protocol row. Testnet rIDX 0x04653b… holders_count 4, total_supply 2.200000000000063e15 (18 decimals). Eight rIDX tokens share the name on testnet. Last git push 2026-03-05. [claim R-8 R-13] [unknown]

## Material risks

- MockSwapRouter is a fixed-rate test harness, not a production DEX. [verified R-4]
- Owner can change the basket and force Safe Mode with no timelock. [verified R-3]
- Eight unverified rIDX CAs on testnet; frontend vault address is not committed. [claim R-7 R-13]
- GitHub homepage Vercel URL returns 404. [claim R-11]
- No audit report located. [claim R-1]

## Verification passes

- Receipts: GitHub README, Hardhat, IndexVault.sol, MockSwapRouter.sol, deploy/fund scripts, frontend chain config, repo and user APIs, two commits, Vercel 404, testnet explorer address/tx/search, and Blockscout 4663 address/search pages were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-13 R-16]
- Numbers: holders_count 4 is the testnet token 0x04653b… slice, not a 4663 figure and not TVL. [claim R-13]
- Adversarial: the strongest contrary reading is that a 4663 IndexVault search hit (INDEXVAULT 0xC6d1…, IndexVault 0xc6ff…, hMAG7 0x43e4…) is this product, or that census testnet-only is stale. Those 4663 contracts use different symbols, files and creators; repo CAs are empty on 4663; Hardhat has no 4663 network. [verified R-16] [claim R-18 R-19 R-20]

## Operations log

- Base: git rev-parse origin/main → 334ca0619aa62e922da83f46de021f06d12348cf. Read content/census.yaml row robinhood-index-vaults (lifecycle testnet-only, role observe, symbol rIDX, github.com/nsvoud-dev/robinhood-index-vaults), content/projects/robinhood-index-vaults.yaml, content/sources/robinhood-index-vaults.yaml, content/research/robinhood-index-vaults.md, content/changelog/robinhood-index-vaults.yaml. No content/pulled/robinhood-index-vaults.yaml. No content/feed/robinhood-index-vaults.yaml.
- GitHub: repo tree, README, hardhat.config.js, package.json, LICENSE, VIDEO_SCRIPT.md, contracts/IndexVault.sol, MockSwapRouter.sol, scripts/deploy.js, deployVaultOnly.js, fundRouter.js, frontend/src/config/chains.ts, contracts.ts, wagmi.ts, list_commits (5), GitHub API repo and user nsvoud-dev.
- Testnet explorer API v2: addresses 0x31ecd0…, 0x04653b…, 0x7943…, 0xf809…; search q=rIDX (eight hits) and q=IndexVault; creation tx 0x5c7581… and 0x0a7853….
- Mainnet Blockscout API v2: repo CAs is_contract false; search q=rIDX empty; search q=IndexVault returned INDEXVAULT 0xC6d1…, IndexVault 0xc6ff… / 0xb18d… / 0x381D…, hMAG7 0x43e4…. Verified source heads on 0xC6d1… and 0xc6ff….
- rpc.mainnet.chain.robinhood.com eth_getCode returned HTTP 403 this pass; 4663 emptiness taken from Blockscout API v2.
- DexScreener latest/dex/search?q=rIDX had no robinhood rIDX pair. api.llama.fi/protocol/robinhood-index-vaults HTTP 400. Vercel homepage 404.
- X keyword from:0xNSVOUD and "Robinhood Index Vaults" OR rIDX returned no posts for this name (other index-vault products: YieldETF, Hood Index, Robin Yield).
- Possible matches recorded: index, robindex, vimen. Allowed path this run: this packet only. No content/ writes. No merge. No push.
