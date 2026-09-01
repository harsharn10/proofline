# Proofline taxonomy and display labels

Status: normative vocabulary design, version 1, 2026-09-01. Current JSON schemas remain the machine
gate until the taxonomy v2 migration lands.

The original SuperGrok export used broad categories (`official-rwa`, `protocol`, `hybrid`, `infra`,
`launchpad`, `culture`, `pair`, `watch`) and statuses (`official`, `live`, `launching`, `upcoming`,
`tokenless`). These are useful intake observations but not a reader-facing taxonomy. In particular,
`protocol`, `hybrid`, and `culture` mix entity form, product function, and editorial judgment.

Proofline classifies each name across separate axes. Never invent a combined label such as
`CDP + launchpad`, and never force an unsupported product into `Other` merely to satisfy a flat enum.

## 1. Required axes

| Axis | Controlled values | Answers |
| --- | --- | --- |
| Entity kind | protocol, application, token, infrastructure, tool, collection, unknown | What is the object? |
| Primary domain | launch, trading, credit, rwa-products, agents, yield, markets, nft-treasury, privacy, tooling, chain-infra | What product family is it in? |
| Product leaf | one primary plus zero or more secondary leaves from §3 | What does it actually do? |
| Mechanisms | controlled multi-select tags | How does it work? |
| Ecosystem role | subject, dependency, observe, graduation | Why is it in the research universe? |
| Lifecycle | mainnet, beta, testnet-only, announced, inactive, unknown | Can a user use it now? |
| Coverage | candidate, seed, full | How much research has been completed? |
| Evidence state | verified, partly-verified, claimed, conflicted, unverified | How strongly is the displayed conclusion supported? |

`ecosystem role`, `coverage`, and `evidence state` are editorial metadata, not product categories.
`lifecycle` describes a product, not whether its token trades. `mainnet` requires evidence beyond the
project's own announcement.

## 2. Reader-facing card contract

Cards translate controlled values into plain English. Raw slugs and internal workflow labels do not
appear as the primary description.

```text
NAME · SYMBOL
<Plain-English primary product label>
<Lifecycle> · <Coverage label> · <Evidence label>

<One sentence: what it does and why it matters>

Secondary: <capability> · <capability>
Updated <date> · <most material recent change>
```

Display mappings:

| Stored value | Display label |
| --- | --- |
| candidate | Candidate |
| seed | Initial research |
| full | Full research |
| verified | Evidence verified |
| partly-verified | Partly verified |
| claimed | Project claim |
| conflicted | Evidence conflicted |
| unverified | Verification pending |
| subject | Covered project |
| dependency | Ecosystem dependency |
| observe | Watchlist |
| graduation | Launched asset |

Do not display a numeric score on a candidate or insufficient-evidence record. Evidence state applies
to the conclusion shown on the card; one verified deployment does not make the entire project verified.

## 3. Product-leaf registry

The leaf registry is the controlled replacement for free-form `tree` paths. A name may have one primary
leaf and multiple secondary leaves, each with a one-line rationale in its research packet.

### Launch

| Leaf | Display label |
| --- | --- |
| `launch/bonding-curve` | Bonding-curve launchpad |
| `launch/hook-programmable` | Programmable-hook launchpad |
| `launch/stock-paired-factory` | Stock-paired token factory |
| `launch/uni-pool-launch` | Uniswap-pool launchpad |
| `launch/nft-gated-launch` | NFT-gated launchpad |
| `launch/other-pad` | Token launchpad |
| `launch/graduation-token` | Launchpad-graduated asset |

### Trading

| Leaf | Display label |
| --- | --- |
| `trading/amm-native` | Native AMM |
| `trading/amm-imported` | Imported AMM dependency |
| `trading/aggregator` | Trading aggregator |
| `trading/hook-mev` | MEV-redistribution hook |
| `trading/perps-native` | Native perpetuals exchange |
| `trading/perps-imported` | Imported perpetuals venue |
| `trading/prop-amm` | Proprietary-liquidity AMM |
| `trading/telegram-exec` | Telegram trading interface |

### Credit

| Leaf | Display label |
| --- | --- |
| `credit/lending-primitive` | Lending primitive |
| `credit/morpho-curator` | Morpho vault curator |
| `credit/isolated-money-market` | Isolated lending market |
| `credit/cdp` | Collateralized debt protocol |
| `credit/credit-overlay` | Credit aggregation layer |
| `credit/rwa-lending` | RWA lending market |
| `credit/uncollateralized` | Uncollateralized credit protocol |

### RWA products

| Leaf | Display label |
| --- | --- |
| `rwa-products/stock-token-issuer` | Stock-token issuer |
| `rwa-products/stock-paired-token` | Stock-paired token |
| `rwa-products/redeemable-basket` | Redeemable RWA basket |
| `rwa-products/tax-distributor` | Fee-funded RWA distributor |
| `rwa-products/index-vault` | RWA index vault |
| `rwa-products/synthetic-asset` | Synthetic asset protocol |
| `rwa-products/reserve-currency` | Reserve-backed currency |
| `rwa-products/ad-space` | Tokenized advertising market |

### Agents

| Leaf | Display label |
| --- | --- |
| `agents/agent-launch-layer` | Agent launch platform |
| `agents/agent-execution` | Agent execution platform |
| `agents/agent-identity` | Agent identity service |
| `agents/agent-product` | Autonomous-agent product |

### NFT and treasury

| Leaf | Display label |
| --- | --- |
| `nft-treasury/token-bound-nft` | Token-bound treasury NFT |
| `nft-treasury/nft-fee-claim` | NFT fee-claim product |
| `nft-treasury/nft-marketplace` | NFT marketplace dependency |

### Markets

| Leaf | Display label |
| --- | --- |
| `markets/prediction` | Prediction market |
| `markets/options` | Options market |

### Yield

| Leaf | Display label |
| --- | --- |
| `yield/savings-vault` | Savings vault |
| `yield/lp-manager` | Liquidity manager |
| `yield/allocator` | Yield allocator |
| `yield/fee-router` | Fee-routing protocol |
| `yield/gamified-mining` | Gamified yield product |

### Privacy

| Leaf | Display label |
| --- | --- |
| `privacy/private-transfer` | Private transfer protocol |

### Tooling

| Leaf | Display label |
| --- | --- |
| `tooling/locker` | Token and liquidity locker |
| `tooling/scanner` | Market scanner |
| `tooling/names` | Naming service |
| `tooling/machine-payments` | Machine-payment tooling |

### Chain infrastructure

| Leaf | Display label |
| --- | --- |
| `chain-infra/l2-sequencer` | Chain and sequencer |
| `chain-infra/bridge` | Bridge infrastructure |
| `chain-infra/oracle` | Oracle infrastructure |
| `chain-infra/stablecoin` | Stablecoin infrastructure |
| `chain-infra/rpc-aa` | RPC and account-abstraction infrastructure |
| `chain-infra/custody` | Custody infrastructure |
| `chain-infra/analytics` | Chain analytics |

Adding a leaf requires one taxonomy change that supplies its stored path, display label, definition,
allowed domain, and migration decision for existing records. Agents may propose new leaves in a packet;
they may not publish them inline.

## 4. Mechanism tags

Mechanism tags are capabilities, not card titles. The current controlled starting set is:

`bonding-curve`, `amm`, `orderbook`, `lending`, `collateralized-debt`, `vault`, `index`, `rwa`,
`stock-paired`, `agent`, `execution`, `nft`, `fee-routing`, `bridge`, `oracle`, `privacy`, `analytics`,
`launchpad`, `derivatives`, and `stablecoin`.

The `other` mechanism is temporary intake only. A full profile must replace it with a reviewed tag or
record an explicit taxonomy gap.

## 5. Classification rules

1. Classify by demonstrated product mechanism, not a project's self-selected marketing category.
2. Imported infrastructure and native products may share a mechanism but have different ecosystem roles.
3. A token paired with an RWA is not automatically an RWA product; require a vault, factory, redemption,
   distribution, or other documented mechanism.
4. A shared brand with two product leaves remains one slug until it has separate control planes or
   independently addressable products that require separate evidence records.
5. `lifecycle: mainnet` can coexist with incomplete research. Lifecycle and evidence state never imply
   one another.
6. The primary leaf is what best explains the durable mechanism. Secondary leaves describe material,
   evidenced capabilities—not keywords or roadmap aspirations.
7. Taxonomy disagreements are claims with receipts and rationale. The compiler resolves them; the last
   agent to write does not win.

## 6. Current-schema mapping

Until taxonomy v2 is implemented, `content/census.yaml.category` and
`content/projects/<slug>.yaml.category` retain the existing flat enum, while `census.tree.primary` and
`tree.secondary[]` carry the product leaves. The compiler must preserve the packet's proposed entity
kind, mechanisms, ecosystem role, evidence state, and rationale under deferred mappings when no
canonical field exists. `candidate` remains intake-only, `seed` maps to current `coverage: stub`, and
`full` maps to current `coverage: full`. Do not stretch a misleading flat category just to make a new
leaf publishable.
