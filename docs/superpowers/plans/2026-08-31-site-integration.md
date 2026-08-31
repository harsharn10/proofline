# Site Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the adopted Chain File app into the Proofline site — reading the content system, with feed as a first-class surface, a computed trending signal, a multi-deployment token model, the Grok research folded in with the PRD's voice, and CI that lets Grok Bot contribute through PRs.

**Architecture:** `content/` (YAML + Markdown, validated by `scripts/validate.mjs`) stays the source of truth; `scripts/score.mjs` derives every number and the trending flag into `build/derived.json`. The site (`site/`, TanStack Start + React 19 + Tailwind v4) reads `../content` and `../build/derived.json` at SSR/build time and never recomputes. Telegram digests and deploys are triggered by merges to `main`.

**Tech Stack:** Root: Node ≥ 20 ESM, `yaml`, `ajv`. Site: Vite 8, TanStack Start/Router, React 19, Tailwind v4, `yaml`, `marked` (Markdown → HTML), `lucide-react`. CI: GitHub Actions.

**Spec:** `docs/superpowers/plans/2026-08-30-site-on-chain-file.md` (decisions + sequence), `docs/superpowers/specs/2026-08-30-content-system-design.md` (content rules), `PRD.md` §5–§9.

## Global Constraints

- Repo root `/Users/harsharnsingh/proofline`, branch `site`. Commit at the end of each task with a message ending in the two trailer lines the controller supplies; **never push**.
- Root scripts: ESM `.mjs`, no TypeScript, deps only `yaml`, `ajv`, `ajv-formats`. `npm test` at root must stay green after every task (validate + fixtures).
- Site: `npm run typecheck` and `npm run build` must pass after every task that touches `site/`; dev server on port **8080**.
- The site renders numbers **only** from `build/derived.json` (`score`, `provisional`, `label`, `confidence`, `risk`, `override.level`, `factorPercents`, `trending`). Never `uncappedScore`/`uncappedConfidence`. Never compute a score in the site.
- Voice (PRD §7.3): no "ape", "casino", "rug", "moon", "shill", "bag(s)", "print(s)" as a noun for market cap, "degen", "giga", "send it", "vapor". Say "an independent audit was not found" not "unaudited"; "the admin address can …" not "the team can rug". Numbers from social posts are `claim`s with the account cited.
- Evidence classes `verified | claim | inference | disputed | unknown`; every material statement carries one. Anything from Chain File or the workbook is `claim` until reproduced on Blockscout / docs.robinhood.com/chain/contracts.
- Methodology version `proofline-v1.0`; researcher id `harsharn10`; dates ISO; slugs `^[a-z0-9-]+$`.
- Categories (project schema): `Launchpad, Aggregator, Stock-paired token, Fee-routing protocol, NFT / treasury, RWA distributor, RWA baskets, CDP, Agent / execution, Prediction market, Index vault` **plus, added in Task 2:** `Lending, Options, Yield, Perpetuals, Oracle / infra, Stablecoin, Scanner / tooling`.
- Keep Chain File's visual system (dark palette in `site/src/styles.css`, IBM Plex, mono eyebrows, dossier layout). Keep its search + category chips on the directory (owner adopted the build; PRD §5.1's "no search" is superseded).
- Trending: `min_accounts` (default 3) distinct tracked accounts with `ct` feed items on a name within `window_days` (default 7) of `today` — computed in `scripts/lib/trending.mjs`, surfaced in `derived.json`, never typed in.

## File Structure

| Path | Responsibility |
|---|---|
| `site/vite.config.ts`, `site/package.json`, `site/tsconfig.json` | minimal TanStack Start config; deps trimmed |
| `site/src/routes/__root.tsx` | document shell: Proofline title, fonts, styles; no Grok/auth |
| `site/src/components/site-header.tsx`, `site-footer.tsx` | wordmark, nav, disclaimer + corrections link |
| `site/src/data/content.server.ts` | reads `../content/**` + `../build/derived.json`; single loader |
| `site/src/data/types.ts` | `Dossier`, `FeedItem`, `Deployment`, `Finding`, `Derived` types |
| `site/src/data/markdown.ts` | research Markdown → HTML with evidence-tag badges |
| `site/src/routes/index.tsx` | directory + latest feed |
| `site/src/routes/n.$slug.tsx`, `site/src/components/dossier.tsx` | dossier |
| `site/src/routes/methodology.tsx`, `changelog.tsx`, `d.$id.tsx` | methodology, changelog, dependency card |
| `schema/project.schema.json`, `dependency.schema.json`, `feed.schema.json`, `accounts.schema.json`, `site.schema.json` | schema changes |
| `scripts/lib/trending.mjs`, `scripts/lib/voice.mjs` | trending computation; banned-phrase lint |
| `scripts/score.mjs`, `scripts/lib/validate-content.mjs`, `scripts/lib/checks.mjs` | derived.json gains `trending`; feed/accounts validation; voice warnings |
| `scripts/import-chain-file.mjs` | one-shot importer: Chain File json + workbook → census/seed/feed/source drafts |
| `content/feed/<slug>.yaml`, `content/accounts.yaml` | feed items; tracked accounts |
| `content/dependencies/stock-tokens.yaml` | deployments per ticker (workbook + app addresses, all `verified: false`) |
| `.github/workflows/validate.yml`, `publish.yml`, `automerge-feed.yml` | CI |
| `docs/integrations/grok-bot.md` | contract + prompt for Grok Bot's scheduled task |
| `ops/telegram-state.json` | tracked digest state (moved out of `build/`) |

---

### Task 1: Un-Grok and rebrand the site

**Files:**
- Delete: `site/scripts/*` except nothing (delete the whole directory), `site/server/`, `site/public/__grok/`, `site/migrations/`, `site/.grok/`, `site/src/lib/auth/`, `site/src/lib/db.ts`, `site/src/lib/app-data/`, `site/src/lib/multiplayer/`, `site/src/lib/preview-host-bridge.ts`, `site/src/lib/preview-embedder-origin.ts`, `site/src/components/preview-host-bridge.tsx`, `site/src/lib/og/`
- Modify: `site/vite.config.ts`, `site/package.json`, `site/tsconfig.json`, `site/eslint.config.mjs`, `site/src/routes/__root.tsx`, `site/src/components/site-header.tsx`, `site/src/routes/index.tsx` (copy only), `site/src/routes/n.$slug.tsx` (copy only)
- Create: `site/src/components/site-footer.tsx`, `site/public/favicon.svg` (keep existing), `site/README.md`

**Interfaces:**
- Produces: a plain TanStack Start app that `npm run dev` (port 8080), `npm run typecheck`, `npm run build` all pass, with zero references to Grok.

- [ ] **Step 1: Delete the platform layer** (paths above). Then `grep -rniE "grok|app-builder|better-auth|pglite|preview-host" site/src site/vite.config.ts site/package.json` must return nothing.
- [ ] **Step 2: `site/vite.config.ts`** — `defineConfig(({ command, isPreview }) => ({ server: { port: 8080, strictPort: true }, preview: { port: 8081 }, resolve: { tsconfigPaths: true }, plugins: [tailwindcss(), tanstackStart(), ...(command === "build" || isPreview ? [nitro({ preset: "vercel" })] : []), viteReact()] }))`. No `serverDir`.
- [ ] **Step 3: `site/package.json`** — scripts: `dev: vite dev --port 8080`, `build: vite build`, `preview: vite preview`, `typecheck: tsc --noEmit`, `lint: eslint .`, `format: prettier --write .`, `test: npm run typecheck`. Remove deps: `@electric-sql/pglite`, `@hookform/resolvers`, `better-auth`, `jose`, `kysely`, `pg`, `@types/pg`, `react-hook-form`, `playwright`, `recharts`, `react-day-picker`, `react-resizable-panels`, `cmdk`, `vaul`, `sonner`, `zustand`, `date-fns`, and every `@radix-ui/*` except `@radix-ui/react-slot`. Add `yaml` and `marked` (dependencies) now so Task 3 needs no install. Keep `nitro` (Vercel build). Run `npm install` (use `--cache /tmp/npm-cache` if `~/.npm` errors) and commit the lockfile.
- [ ] **Step 4: `tsconfig.json`** — `include: ["src"]`; drop `allowJs`/`checkJs` and the db comment. `eslint.config.mjs` — drop the `.vercel`/`.nitro` mentions only if unused; fine to leave.
- [ ] **Step 5: `__root.tsx`** — title `Proofline`, description `Evidence-backed research on native Robinhood Chain plays.`, keep fonts/styles/favicon, remove manifest + apple-touch links, remove `AuthProvider` and `PreviewHostBridge`. Body: `<SiteHeader /> <Outlet /> <SiteFooter />` — move the header out of individual routes into the root so every page has it (delete the per-route `<SiteHeader />` usages).
- [ ] **Step 6: Header + footer** — header: eyebrow `Robinhood Chain 4663`, wordmark `Proofline`, nav links `Coverage` (/), `Methodology` (/methodology), `Changelog` (/changelog); keep the "Names on file / Updated" stats using `NAMES.length` for now (Task 3 replaces the source). Footer: tagline `Research the launch. Ignore the hype.`, the disclaimer sentence `Proofline publishes research, not advice. Profiles are not audits, safety ratings, or recommendations.`, and a `Submit a correction` link to `mailto:` placeholder `corrections@example.com` (Task 3 wires `site.yaml`). Routes `/methodology` and `/changelog` may 404 until Task 4 — acceptable.
- [ ] **Step 7: Verify** — `npm run typecheck` → clean; `npm run build` → succeeds; start `npm run dev` on 8080, `curl -s localhost:8080/ | grep -o '<title>[^<]*'` → `Proofline`; `curl -s -o /dev/null -w '%{http_code}' localhost:8080/n/denar` → 200. Stop the dev server you started. Commit.

---

### Task 2: Schema — deployments, feed, accounts, trending, voice lint

**Files:**
- Modify: `schema/project.schema.json`, `schema/dependency.schema.json`, `schema/site.schema.json`, `scripts/lib/schemas.mjs`, `scripts/lib/checks.mjs`, `scripts/lib/validate-content.mjs`, `scripts/lib/load.mjs`, `scripts/score.mjs`, `scripts/seed-data.mjs`, `scripts/seed-stubs.mjs`, `scripts/test.mjs`, `content/site.yaml`, `content/projects/*.yaml` (14), `fixtures/*/project.yaml` (3), `README.md`, `docs/superpowers/specs/2026-08-30-content-system-design.md`
- Create: `schema/feed.schema.json`, `schema/accounts.schema.json`, `scripts/lib/trending.mjs`, `scripts/lib/voice.mjs`, `content/accounts.yaml`, `content/feed/pons.yaml` (one example)

**Interfaces:**
- Produces: `deployments[]` shape `{ label, chain, address, issuer?, role, verified, sources }` with `chain ∈ robinhood-chain | arbitrum-one | ethereum | base | solana | hyperliquid | other`, `address` matching `^(0x[0-9a-fA-F]{40}|[1-9A-HJ-NP-Za-km-z]{32,44}|not-verified)$`, `role` as before; dependency cards gain optional `deployments[]` with an extra optional `ticker`.
- Feed file `content/feed/<slug>.yaml`: `{ slug, items: [{ id, date, kind: company|ct|onchain|risk, title, body, account?, sourceUrl?, sources?: [S..] }] }`; `account` matches `^@[A-Za-z0-9_]{1,15}$`. Feed files are optional per slug; slug must be in the census; `sources` ids must exist in that slug's ledger.
- `content/accounts.yaml`: `[{ handle: "@…", name?, tier: top|watch, note? }]`.
- `site.yaml` gains `trending: { min_accounts: 3, window_days: 7 }`.
- `computeTrending(feedBySlug: Map<slug, items[]>, accounts: [{handle,tier}], { minAccounts, windowDays, today }) → Map<slug, { trending: boolean, accounts: string[], latest: string|null }>` — counts distinct **top-tier** account handles with `kind: ct` items dated within `[today - windowDays, today]`.
- `voiceWarnings(text, where) → string[]` — case-insensitive whole-word matches of the banned list in Global Constraints; used by `validateContent` as **warnings** over `summary`, findings text, feed bodies/titles, and research Markdown; `--release` turns them into errors.
- `derive()` output gains `trending: boolean` (score.mjs sets it from `computeTrending`; `derive` itself stays pure — `scripts/score.mjs` merges it into each project's derived object before writing).
- `loadContent` gains `feed: Map<slug, obj>` and `accounts: array`.

- [ ] **Step 1: Tests first** (append to `scripts/test.mjs`): `computeTrending` — 3 top accounts within window → trending; 2 → not; 3 but one is `watch` tier → not; 3 with one dated outside window → not; same account thrice → counts once. Feed schema rejects `kind: news` and `account: "longbow"` (no @). Cross-check: feed for a slug not in census → error; feed citing `S9` absent from ledger → error. `voiceWarnings("Do not ape this", "x")` → one warning; `"Grape harvest"` → none (whole word). Project schema: old `addresses` key now rejected; `deployments` with `chain: robinhood-chain` accepted; `chain: bsc` rejected. Run `npm test` → expect the new tests to fail.
- [ ] **Step 2: Schemas** — implement per Interfaces. Categories enum extended per Global Constraints in both `project` and `census` schemas. `site.schema.json` gains `trending`. Register `feed` and `accounts` in `schemas.mjs`.
- [ ] **Step 3: Loader, checks, validate** — `load.mjs` reads `content/feed/*.yaml` and `content/accounts.yaml` (missing file → `[]`). `checks.mjs` adds the feed cross-checks; `releaseCheck` switches its unverified-address rule to `deployments[]`. `validate-content.mjs` validates feed/accounts, adds voice warnings (errors under `--release`).
- [ ] **Step 4: Trending + score** — `scripts/lib/trending.mjs`; `scripts/score.mjs` computes it with `today` = `new Date().toISOString().slice(0,10)` unless `--today YYYY-MM-DD` is passed, writes `trending` into each project's derived object and a top-level `trending: [slugs]` list.
- [ ] **Step 5: Migrate content** — every `content/projects/*.yaml` and fixture: `addresses` → `deployments` (add `chain: robinhood-chain`; keep label/address/role/verified/sources). `seed-data.mjs`/`seed-stubs.mjs` emit `deployments`. `content/site.yaml` gets the `trending` block. `content/accounts.yaml` seeded with the handles Chain File's feed cites, all `tier: watch` (owner promotes to `top`): `@RHDaily_`, `@UseSqueeze_RH`, `@GG1nvestments`, `@longbowlend`, `@DenarMarkets`, `@ponsdotfamily`, `@TheIndexFi`, `@MetalHead_rh`, `@L4VAprotocol`, `@bankrbot`, `@AdamEShelton`, `@notEezzy`, `@DeGenWealth2`, `@Cuba19_`, `@ibweb3eth`, `@monchhh0`, `@zackfromsubway`, `@DaoKingdom`, `@GeckoTerminal`, `@Odinekachukwu1`. `content/feed/pons.yaml` with the three Pons items from `research/inbox/grok-2026-08-30/chain-file.json` (neutral wording, `account` set, `kind` mapped: company→company, ct→ct, onchain→onchain, risk→risk).
- [ ] **Step 6: Docs** — README (deployments, feed, accounts, trending, voice lint) and spec §5.3/§5.9 (new sections). `npm test` green; `npm run validate` 0 errors (voice warnings allowed); `npm run score` shows `trending` in derived.json. Commit.

---

### Task 3: Data bridge — the site reads `content/`

**Files:**
- Create: `site/src/data/content.server.ts`, `site/src/data/types.ts` (replace), `site/src/data/markdown.ts`
- Modify: `site/src/routes/index.tsx`, `site/src/routes/n.$slug.tsx`, `site/src/components/dossier.tsx`, `name-row.tsx`, `feed-list.tsx`, `export-menu.tsx`, `copy-address.tsx`, `site-header.tsx`, `site/src/lib/export-file.ts`, `site/package.json` (scripts)
- Delete: `site/src/data/names.ts`, `site/src/data/chain.ts` (chain facts now from `site.yaml`), `site/src/lib/status-tone.ts` (replace with lifecycle/risk tones)

**Interfaces:**
- Consumes: Task 2's content shapes and `build/derived.json` (`projects[slug]` with `score, provisional, label, confidence, risk, override, factorPercents, trending`).
- Produces: `getContent()` server function returning `{ site, dossiers: Dossier[], dependencies, changelog, accounts }` where `Dossier = { slug, name, symbol, category, lifecycle, coverage, summary, links, dependencies, deployments, findings, review, research: { sections: { heading, html }[] }, feed: FeedItem[], sources: Source[], changelog: Entry[], derived: Derived }`. Sorting for the directory: trending first, then `coverage: full` by score desc, then stubs by `review.reviewed_at` desc.
- `site/package.json` scripts: `predev` and `prebuild` run `npm --prefix .. run score` so `derived.json` is fresh.

- [ ] **Step 1: `content.server.ts`** — `createServerFn` (from `@tanstack/react-start`) `getContent` and `getDossier(slug)`; read files with `node:fs` relative to `path.resolve(process.cwd(), "..")` when `cwd` ends with `/site`, else `process.cwd()` (so both `site/` dev and a root-level CI build work). Parse YAML with `yaml`. Cache in module scope in production, re-read in dev. Research Markdown: split on `## ` headings; convert each section with `marked`; replace evidence tags `\[(verified|claim|inference|disputed|unknown)((?:\s+S\d+)*)\]` with `<span class="ev ev-<class>" data-sources="S1 S2">class · S1 S2</span>` before `marked` runs (so it survives), and strip HTML comments; sections that are only `_Research pending._` render as the muted pending line.
- [ ] **Step 2: Types + tones** — `types.ts` per Interfaces; tone helpers: lifecycle → badge tone (`mainnet` live, `beta`/`announced` warn, `inactive`/`testnet-only` muted), risk → tone (Low/Moderate default, Elevated warn, High/Critical risk).
- [ ] **Step 3: Directory (`index.tsx`)** — hero from `site.yaml` (`name`, `tagline`, chain facts with their `checked` date or "unverified"), stats (names on file, full profiles, trending count, chain id, mainnet), latest feed (10 newest items across all feeds, with the name link), search + category chips (categories from the data), rows: ticker/symbol, name, one-line summary, lifecycle badge, coverage badge (`Research pending` for stubs; score chip for full), trending chip.
- [ ] **Step 4: Dossier** — header (symbol, name, category · lifecycle, coverage/score block per site contract: full → `score/100` + `provisional` marker + `confidence%` + risk badge; stub → "Research pending / insufficient evidence"); trending chip with the accounts; summary; links (+ Blockscout token link for each `robinhood-chain` deployment, DexScreener search link); deployments list with copy button, chain, issuer, `verified`/`not verified` badge; findings (four lists; evidence class badge + source ids per item); research sections (from `research.sections`); feed (first-class, newest first, kind badge, account handle linking to `https://x.com/<handle>`); sources ledger (numbered, `accessed_at`, `claim`); changelog entries for the slug; corrections link from `site.yaml` (`mailto:` if it looks like an email, else href; `TODO` → render "Corrections contact: pending"); disclaimer footer already global.
- [ ] **Step 5: Exports** — Markdown/CSV/JSON exports regenerated from `Dossier` (drop the Excel link). Keep the buttons.
- [ ] **Step 6: Verify** — `npm run typecheck`, `npm run build`; dev server: `/` lists 14 names, `/n/pons` shows the Pons feed items from Task 2 and "Research pending"; `/n/nope` → 404 page. Stop the server. Commit.

---

### Task 4: Methodology, changelog, dependency pages; trending + feed on the home page

**Files:**
- Create: `site/src/routes/methodology.tsx`, `site/src/routes/changelog.tsx`, `site/src/routes/d.$id.tsx`
- Modify: `site/src/routes/index.tsx` (trending strip), `site/src/components/site-header.tsx` (nav), `site/src/routeTree.gen.ts` (regenerated by the plugin)

- [ ] **Step 1: `/methodology`** — render `content/methodology.md` via `marked`; page eyebrow "Methodology · proofline-v1.0".
- [ ] **Step 2: `/changelog`** — all entries newest first, grouped by date; each row: name link, type/severity badge, title, detail, reviewer.
- [ ] **Step 3: `/d/$id`** — dependency card: name, kind, summary, controls table (power/holder/note/class), failure modes, deployments (with ticker column when present), sources. Dossiers link their `dependencies[]` here.
- [ ] **Step 4: Home trending strip** — when `derived.trending` is non-empty, a "Trending" row above the directory: chips with name + count of top accounts (from derived). When empty, render nothing (no placeholder).
- [ ] **Step 5: Verify** — typecheck, build, curl 200 on `/methodology`, `/changelog`, `/d/stock-tokens`. Commit.

---

### Task 5: Fold in the Grok research — census expansion, deployments, feed, voice

**Files:**
- Create: `scripts/import-chain-file.mjs`, `content/feed/*.yaml` (per name that has items), `content/projects/*.yaml` + `sources/*.yaml` + `research/*.md` for new names (via `npm run seed`), `research/inbox/grok-2026-08-30/HARVEST.md`
- Modify: `content/census.yaml`, `scripts/seed-data.mjs`, `content/dependencies/stock-tokens.yaml`, `content/dependencies/uniswap.yaml` (+ new cards `morpho.yaml`, `rialto.yaml`, `arcus.yaml`, `lighter.yaml`, `maple-syrupusdg.yaml`), existing 14 project files (deployments, findings, links), `content/changelog.yaml` (seed appends), `content/accounts.yaml` (any new handles)

**Interfaces:**
- Consumes: `research/inbox/grok-2026-08-30/chain-file.json` (42 dossiers) and `build_rh_tokens.py` (sheets 01–06 as Python lists — parse with a regex over the tuple literals, or transcribe).
- Produces: a census of **≥ 36** names; every new entry with the four qualifying tests filled honestly (`citable: false` when no official link); `deployments[]` populated where the intake has an address (`verified: false`, `sources` pointing at a ledger entry that names the artifact: "Grok workbook sheet 02, 2026-08-30" / "Chain File dossier"), known fake addresses as `findings.risk` items (`class: claim`); `content/dependencies/stock-tokens.yaml` with a `deployments[]` entry per ticker per artifact (both addresses where they disagree, each with its own source id; `issuer: Robinhood Assets (Jersey) Limited`, `chain: robinhood-chain`, `verified: false`); feed files for every name that had Chain File feed items; `summary` and findings rewritten to the voice rules.

Inclusion rules (PRD §2): include protocols, launchpads, vaults, aggregators, NFT-gated products, project tokens with a mechanism. **Exclude** pure culture memes with no mechanism (CASHCAT, HMM, WIFI, BRODIE, FOX-the-mascot — FoxPad the launchpad *is* in), official Stock Tokens as standalone profiles (they go on the stock-tokens card), and day-one infra as profiles (Morpho, Uniswap, Chainlink, Lighter, Rialto, Arcus, Maple → dependency cards). New names to add at minimum: `denar`, `longbow`, `the-index` (rename existing `index` → keep slug `index`, name "The Index"), `quotrons`, `earn-protocol`, `arrows`, `l4va`, `maxfi`, `squeeze`, `rstocks`, `atlas`, `robindex`, `fables`, `sherwood`, `tickeryard`, `oakmont`, `hood10`, `foxpad`, `noxa`, `bow-fun`, `pools-trade`, `flap`, `virtuals`, `roodfi`, `robinwifhat`, `monkeybiz`, `metalhead`.

- [ ] **Step 1: Importer** — `scripts/import-chain-file.mjs` reads the json, prints a draft `seed-data` entry + feed file per dossier (mapping fields; wrapping social-post numbers as claims; stripping editorial sentences), and a draft census block. Output goes to `research/inbox/grok-2026-08-30/drafts/` — never straight into `content/`. Commit the script.
- [ ] **Step 2: Census + seed** — hand-edit the drafts into `content/census.yaml` and `scripts/seed-data.mjs` (voice rules apply to every `summary` and `missing` line), run `npm run seed`, then fill `deployments`, `findings` (positive/risk with `class: claim` + source ids; known fakes as risk), `official_links`. Every ledger entry needs a real URL; artifact-provenance entries use the GitHub URL of the file in `research/inbox/…` on the `site` branch.
- [ ] **Step 3: Feed** — one `content/feed/<slug>.yaml` per name with items; `account` set from the Chain File `source` handle where one exists; bodies neutral (what was said, by whom, when — no verdicts). Update `content/accounts.yaml` with any new handles (`watch`).
- [ ] **Step 4: Stock tokens card** — generate the `deployments[]` list for `stock-tokens.yaml` from sheet 01 (196 rows) plus the app's five addresses; two source-ledger entries (workbook, app). Add the five infra dependency cards (skeleton controls/failure modes, `class: unknown`).
- [ ] **Step 5: Voice + validate** — `npm run validate` → 0 errors and **0 voice warnings**; `npm run validate:release` errors only for: corrections TODO, `chain.checked` null, and `citable: false` entries. `npm test` green. `HARVEST.md` records what was included, excluded (with the PRD rule), and every address that came from two disagreeing sources. Commit.
- [ ] **Step 6: Site check** — start the site, confirm `/` shows ≥ 36 names, `/n/denar` renders feed + deployments, `/d/stock-tokens` renders the deployments table. Stop the server.

---

### Task 6: CI, Grok Bot contract, Telegram state, merge to main

**Files:**
- Create: `.github/workflows/validate.yml`, `.github/workflows/publish.yml`, `.github/workflows/automerge-feed.yml`, `docs/integrations/grok-bot.md`, `ops/telegram-state.json`
- Modify: `scripts/telegram-digest.mjs` (state path → `ops/telegram-state.json`), `.gitignore` (keep `build/`), `README.md` (CI + Grok section), `site/README.md` (Vercel: root directory `site`, build `npm run build`, needs root `npm ci && npm run score` first — use a `vercel.json` in `site/` with `installCommand: "cd .. && npm ci && cd site && npm ci"` and `buildCommand: "cd .. && npm run score && cd site && npm run build"`)

- [ ] **Step 1: `validate.yml`** — on `pull_request` and `push` to any branch: Node 22; root `npm ci` + `npm test`; site `npm ci` + `npm run typecheck` + `npm run build`.
- [ ] **Step 2: `publish.yml`** — on `push` to `main`: root `npm ci`, `npm run score`, `npm run telegram` with secrets `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `SITE_URL`; then commit `ops/telegram-state.json` back with `[skip ci]` if it changed (use `git config user.name "proofline-bot"`).
- [ ] **Step 3: `automerge-feed.yml`** — on `pull_request` from branches matching `grok/**`: if the changed files are all under `content/feed/`, `content/sources/`, `content/accounts.yaml`, or `research/inbox/`, and `validate.yml` succeeded, approve and squash-merge with `gh pr merge --squash --auto`. Anything else: comment "needs human review (touches scoring/risk/census)" and stop.
- [ ] **Step 4: Move Telegram state** — `STATE = "ops/telegram-state.json"`; migrate the local `build/telegram-state.json` (14 keys) into it; commit it.
- [ ] **Step 5: `docs/integrations/grok-bot.md`** — the contract: what to collect (X posts by `content/accounts.yaml` handles and each project's own handle; official announcements; on-chain events), where to write (feed file format with an example, source ledger entry format, census candidate format), what never to write (`scoring`, `review.approver`, `changelog` score/risk types), how to open a PR with the GitHub REST API (`GET /repos/harsharn10/proofline/contents/...`, `PUT` to branch `grok/<YYYY-MM-DD>`, `POST /repos/.../pulls` titled `feed: <date>`), token scope (fine-grained: contents RW, pull requests RW, this repo only), cadence suggestion (every 6h; skip the PR when nothing new), and a ready-to-paste task prompt for Grok Bot.
- [ ] **Step 6: Merge** — `npm test` at root, `npm run build` in site; `git checkout main && git merge --no-ff site -m "Merge site: Proofline site on Chain File base, feed + trending, Grok research intake, CI"`, then `git checkout site`. Do not push (controller pushes).
