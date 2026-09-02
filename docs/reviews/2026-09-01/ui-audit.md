# Proofline UI audit, with eregion as the reference design

Read-only audit. Every file in `~/proofline/site/src`, the content and derived data under
`~/proofline/content` and `~/proofline/build`, plus both eregion systems: the Next.js site at
`~/eregion-web` and the research repo and print reports at `~/eregion`.

Paths are absolute where they leave a repo, and repo-relative inside a section that names its repo.

---

## The governing fact

Everything in Part C follows from the coverage shape. Proofline is a site for 49 names of which
one is researched.

| Measure | Value |
|---|---|
| Names on file | 49 |
| Full research records | 1 (Pons) |
| Stubs | 48 |
| Research files with real prose | 3 (pons 16KB, statics-protocol 5.5KB, mancer 4KB) |
| Research files that are the empty template | 46 (~515 bytes each) |
| Names with any reported metric | 12 |
| Names with no metric | 37 |
| Deployment rows whose address is the `not-verified` sentinel | 45 |
| Projects whose first positive finding is auto-generated boilerplate | 44 |
| Total boilerplate "publishes an official …" findings | 81 |
| Sources per project | min 2, median 5, max 33 |
| Findings per project | median 10, max 25 |
| Changelog entries | 85 |
| Dependency cards | 21 |
| Feed files | 45 |

The design currently treats all 49 names identically. That is the central problem.

---

# PART A — proofline site

## 1. Route map

Seven routes. All data is server-loaded from a build-time content snapshot that
`site/vite.config.ts:15-53` bakes into a virtual module, so no route touches the filesystem at
runtime. `site/src/routes/__root.tsx:38-50` wraps every page in `SiteHeader` and `SiteFooter` and
loads `getSiteMeta()` once at the root.

| Route | File | Loader | Distinct blocks |
|---|---|---|---|
| `/` | `routes/index.tsx:8-95` | `getContent()` | hero, 5-cell statrow, receipt row + honesty line, Latest feed (5 items), 9 section mini-tables (~49 rows) |
| `/n/$slug` | `routes/n.$slug.tsx:5-52` | `getDossier()` | backlink, masthead, snapshot strip, 4-tab nav, one tab panel, corrections line |
| `/d/$id` | `routes/d.$id.tsx:9-130` | `getDependency()` | backlink, eyebrow, title, lead, Controls table, Failure modes, Deployments, Sources |
| `/feed` | `routes/feed.tsx:7-56` | `getFeed()` | hero, up-to-5 filter chips, one list |
| `/changelog` | `routes/changelog.tsx:9-91` | `getChangelog()` | hero, date groups, 85 rows |
| `/methodology` | `routes/methodology.tsx:4-19` | `getMethodology()` | eyebrow + one prose blob |
| `/review` | `routes/review.tsx:11-466` | `getReviewQueue()` | internal Telegram moderation console |

`/review` is GitHub basic-auth gated at `site/src/data/review-auth.ts:40-58`, marked
`noindex, nofollow, noarchive` at `routes/review.tsx:13-15`, and is not linked from the nav. It is
an operator surface, not visitor-facing, and is excluded from the slop inventory below except
where it shares tokens.

Per-page element counts, roughly:

- Home: 5 stat cells, 2 receipt links, 1 honesty sentence, 5 feed rows, 9 section headers with 9
  descriptions, and 49 project rows each carrying up to 4 sub-elements. Around 120 distinct
  elements before the fold count is even considered.
- Dossier overview for a stub: masthead with up to 5 chrome elements, a snapshot strip that is
  usually one sentence, 4 tabs, a lead, 3 to 6 receipts, up to 6 peer cards, up to 3 finding
  atoms, up to 3 feed rows, a corrections line.
- Dependency card: 4 sections, a 4-column table, an atom list, a kv grid, a source ledger.

## 2. Information architecture

**Grouping.** The home page groups all 49 names into nine visitor-facing sections defined at
`site/src/data/types.ts:374-429`. Each section maps to one or more `tree.primary` domains from
`content/census.yaml`. `sectionForDomain()` at `types.ts:431-434` resolves a name to its section,
and `routes/index.tsx:19-26` buckets the entries.

All 49 names carry a tree, so nothing is orphaned. The domain distribution:

| Home section | Census domains | Names |
|---|---|---|
| Launchpads | launch | 11 |
| RWA products | rwa-products | 9 |
| Trading venues | trading | 7 |
| Yield & LP | yield | 6 |
| Tooling & infra | tooling, privacy | 5 |
| Agents | agents | 4 |
| Credit | credit | 3 |
| NFT treasuries | nft-treasury | 2 |
| Markets | markets | 2 |

**Sorting.** Inside a section, `components/home-section.tsx:18-23` sorts by rank position ascending
and falls back to name. Only 12 of 49 names have any metric and fewer have a rank, so nearly every
section is alphabetical in practice.

**Filtering and browse.** There is none. No category page, no filter control, no sort control, no
global list. `routes/index.tsx:13-15` documents this as deliberate: "No global flat list — the
topbar search jumps straight to dossiers." The only paths into a name are a home row, the topbar
jump box at `components/topbar-search.tsx:8-73`, a peer card at `components/peer-cards.tsx:21`, a
feed row at `components/feed-list.tsx:42`, or a changelog row at `routes/changelog.tsx:68`.

**Categories appear three ways, in three vocabularies, none of which is browsable:**

1. `SECTIONS[].label` — the nine visitor words, only on home and as a dossier eyebrow link.
2. `tree.leaf` via `leafLabel()` at `types.ts:483-522` — 33 fine-grained leaf words, shown as a
   `.leafchip` on a dossier and again on every peer card.
3. `project.category` — the PRD enum, 16 values in `CATEGORY_PLURAL` at `types.ts:457-474`, used
   for rank cohorts and shown only as the dossier eyebrow fallback when there is no tree.

**What a project row shows.** It is a row, not a card. `.secrow` at `site/src/styles.css:358-373`,
rendered by `components/home-section.tsx:42-58`, is a three-column grid:

- Column 1, 96px: mono accent-green ticker, truncated to one line.
- Column 2, flexible: bold name, an em dash, the summary, all clamped to one line with ellipsis.
- Column 3, auto: headline metric with unit as `<small>` plus an amber `reported` badge when a
  metric exists, then a lifecycle badge.

It shows no score, no coverage state, no risk level, no review date, no feed count. Nothing
distinguishes the one researched name from the 48 stubs.

**Project detail page, section by section.** `components/dossier.tsx:321-410` renders the shell.

Masthead, in order:

1. Backlink "← all names" (`routes/n.$slug.tsx:44-48`).
2. Eyebrow: section label as a link to the home anchor, or `dossier.category` as fallback, plus a
   `.leafchip` with the leaf label (`dossier.tsx:344-353`).
3. H1: symbol if present, otherwise name, in 30px mono (`dossier.tsx:354`, `styles.css:187`).
4. Subtitle: the full name, when a symbol occupied the H1 (`dossier.tsx:355`).
5. Badge row: lifecycle badge, a `trending` badge when trending, and the raw joined list of
   trending X handles in faint mono (`dossier.tsx:356-362`).
6. Score slot: either `no score yet · research pending` for 48 of 49 names
   (`dossier.tsx:366-367`), or the score block with `/100`, a `provisional` badge, a confidence
   percentage, a risk badge, and a `capped by <level> override` note (`dossier.tsx:368-379`).
7. Export dropdown, right-aligned (`dossier.tsx:381`).

Then `SnapshotStrip` (`components/snapshot-strip.tsx:20-67`): a kv grid with one cell per reported
figure carrying label, as-of, value, a `reported` badge and a receipt to the source host, plus the
rank line beneath. For 37 of 49 names this collapses to a single italic line, "No reported figures
yet."

Then the tab bar (`dossier.tsx:386-391`), four tabs, URL-synced via `?tab=` validated at
`routes/n.$slug.tsx:8-14`.

**Overview tab** (`dossier.tsx:67-172`), in order:

1. Lead paragraph: the de-jargoned summary.
2. Receipt row: every official link by kind, then a DexScreener search link, then one explorer link
   per Robinhood-Chain deployment with a located address.
3. "Competes with": up to 6 peer cards, same-leaf peers first, computed at
   `data/content-server.ts:316-341`. Section hint reads "same niche first, then same section".
4. "Depends on": dependency chips linking to `/d/$id`.
5. "Findings": top 3, positives before risks, each an atom with a tiny uppercase mono label reading
   the evidence class and the source ids, and the sentence below. Hint links to the Evidence tab
   when more exist.
6. "Latest": the newest 3 feed items, hint links to the Feed tab.

**Evidence tab** (`dossier.tsx:174-257`), in order:

1. "Deployments" with hint "N recorded": a kv grid, folding past 12 behind a disclosure
   (`components/deployment-grid.tsx:39-66`).
2. "Findings" with hint "N recorded": all positives then all risks, then a "still unverified"
   bullet list that concatenates `findings.missing` and `findings.unresolved`.
3. "Research record": only rendered when a section survives the filter at `dossier.tsx:181-184`,
   which drops sections whose body is "Research pending." and drops the boilerplate `Sources` and
   `Review metadata` headings. Empty for 46 of 49 names, so the section does not render at all.
4. "Sources" with hint "N in the ledger": a numbered ledger, each row a bare source id, publisher,
   accessed date, a receipt to the host, and the claim.

**Feed tab** (`dossier.tsx:259-267`): one section titled "Feed" with hint "N items · newest first",
holding the whole feed.

**Changelog tab** (`dossier.tsx:269-319`): the name's changelog entries, then a "Review record" kv
grid holding researcher, approver, methodology version, last reviewed date, and published date.

Finally a corrections line at `dossier.tsx:398-407`.

## 3. Visual system

The system is coherent and hand-rolled, not ad hoc. One stylesheet, 580 lines, structured in five
zones.

| Zone | Lines | Contents |
|---|---|---|
| `:root` tokens | `styles.css:11-26` | colors, two font stacks, row hover, shadow |
| `@theme` mirror | `styles.css:30-43` | the same literals re-declared for Tailwind utilities |
| base layer | `styles.css:45-70` | html/body, links, buttons, text-wrap, focus ring, selection |
| components layer | `styles.css:80-457` | every semantic class, plus the mobile block at `:438-456` |
| light theme | `styles.css:465-494` | unlayered `html[data-theme="light"]` overrides |
| review console | `styles.css:496-580` | the operator surface, a second components layer |

**Dark palette**, `styles.css:11-26`:

```css
--bg: #0e1113;
--panel: #16191d;
--panel2: #1b1f24;
--line: rgba(255, 255, 255, 0.09);
--text: #e8eaed;
--muted: rgba(232, 234, 237, 0.55);
--faint: rgba(232, 234, 237, 0.28);
--accent: #00c805;      /* Robinhood green */
--amber: #d9a13c;
--neg: #e05d4b;
--sans: -apple-system, "Segoe UI", Inter, Roboto, sans-serif;
--mono: "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
--rowhover: rgba(255, 255, 255, 0.02);
--shadow: rgba(0, 0, 0, 0.45);
```

**Light palette**, `styles.css:465-489`:

```css
--bg: #f6f7f9;
--panel: #ffffff;
--panel2: #eef0f3;
--line: rgba(16, 20, 24, 0.12);
--text: #16191d;
--muted: rgba(22, 26, 31, 0.64);
--faint: rgba(22, 26, 31, 0.4);
--accent: #008003;
--amber: #8a5f0e;
--neg: #c73a28;
```

The comment at `styles.css:459-464` records the measured contrast work: `#00C805` and `#00A804`
both fail 4.5:1 on `#f6f7f9`, `#008003` measures 4.8:1 and 5.1:1 on white panels, amber 5.3:1, red
4.8:1. That is real, documented color engineering.

**Typography.** System sans for prose, SF Mono for every datum, timestamp and label chip. No
webfont, no `@font-face`, no loading strategy needed. Body 15px at 1.5 (`styles.css:53-61`).
Display: home H1 `clamp(26px, 4.5vw, 34px)` weight 750 tracking -0.02em (`styles.css:171`), dossier
H1 30px mono weight 700 (`styles.css:187`), section title 15px weight 650 (`styles.css:198`), rows
13.5px, secondary 12.5px, metadata 11px mono, badges 10px mono.

**Radius.** 3px for badges and evidence tags, 4-5px for small controls, 6-8px for panels and cards,
999px for pills. No radius token; the values are literal at each site.

**Spacing.** Ad hoc pixels throughout. No scale, no spacing token. Section rhythm comes from
`.sechead { margin: 30px 0 6px }` at `styles.css:197`.

**Layout grid.** `.wrap` is `max-width: 1180px` with 26px horizontal padding, narrowing to 16px
under 640px (`styles.css:82`, `:439`). `.narrow` clamps to 880px and is used on every page except
home.

**Component library.** One file: `components/ui/badge.tsx`, 25 lines, five tones mapping to
`.badge`, `.badge-live`, `.badge-warn`, `.badge-risk`, `.badge-na`. Everything else is a semantic
class in `styles.css` applied by hand. Tailwind v4 is installed and its plugin runs, but it is used
for roughly fifteen utility escapes: `mt-*`, `pb-*`, `min-w-0`, `list-none`, `max-w-prose`,
`text-fg`, `text-muted`, `space-y-6`. That mixture is inconsistent but small enough not to matter.

**Dark mode handling.** Dark is default. `color-scheme: dark` at `styles.css:47`, flipped to light
at `:466`. The toggle at `components/theme-toggle.tsx:9-29` writes `data-theme` and persists to
`localStorage`. The inline script at `routes/__root.tsx:31-36` applies the saved value before first
paint inside a try/catch, so a private-mode failure falls through to dark rather than throwing.
Correct, and better than most implementations.

**Verdict.** This is a coherent system with a single voice. Its problems are not visual; they are
editorial and architectural.

## 4. Slop inventory

Ordered by how much damage each does to a reader.

### 4.1 Boilerplate findings lead 44 of 49 names

`content/projects/virtuals.yaml` opens its positive findings with:

```yaml
findings:
  positive:
    - text: Virtuals Protocol publishes an official site at https://virtuals.io.
      class: claim
      sources: [S1]
    - text: Virtuals Protocol publishes an official X account at https://x.com/virtuals_io.
      class: claim
      sources: [S2]
```

Those render as the first two Overview findings at `components/dossier.tsx:139-156`, directly
beneath the receipt row at `dossier.tsx:93-118` that already links both URLs. There are 81 such
lines across the corpus, and 44 of 49 projects lead with one. The Overview's headline research
block is, for most names, a prose restatement of the link row above it, wearing an evidence label
and a source id to look like research.

This is the single worst thing on the site. It is a content problem, but the page makes it worse by
giving it the "Findings" heading and the top-3 slot.

### 4.2 Evidence-class jargon and bare source ids shown raw

`dossier.tsx:39-51` prints `finding.class` verbatim and joins source ids with a space:

```tsx
const ids = finding.sources?.length ? ` · ${finding.sources.join(" ")}` : "";
<span className={risk ? "kd kd-risk" : "kd"}>{risk ? "risk · " : ""}{finding.class}{ids}</span>
```

So a reader sees `CLAIM · S1 S2`. `components/evidence-tag.tsx:6-12` does the same on the
dependency page. The source ledger prints a bare `S1` in a 36px column at `dossier.tsx:236-237` and
`styles.css:267-269`. `data/markdown.ts:20-32` bakes the same convention into research prose as
`.ev` spans.

Nothing anywhere on the site defines what `S1` is, what `claim` means as against `verified` or
`inference`, or why a reader should care. The methodology page is the only candidate and it is not
linked from any of these labels.

### 4.3 Internal workflow vocabulary on a reader-facing tab

The "Review record" grid at `dossier.tsx:293-315` shows five cells:

| Label rendered | Value for 48 of 49 names |
|---|---|
| researched by | `harsharn10` |
| approver | `pending` |
| methodology | `proofline-v1.0` |
| last reviewed | a date |
| published | `not yet published` |

`types.ts:71` types `approver` as "an id, or the literal string 'pending'". A reader is being shown
a maintainer's queue state. Add the `provisional` badge at `dossier.tsx:374` and the
`capped by <level> override` note at `dossier.tsx:377`, both scoring-engine vocabulary, and the
masthead itself carries internal process language.

### 4.4 The homepage advertises an unfinished QA step

`content/site.yaml` sets `checked: null`. `routes/index.tsx:73-77`:

```tsx
{site.chain.checked
  ? `Chain facts reproduced against docs.robinhood.com on ${formatDate(site.chain.checked)}.`
  : "Chain facts not yet reproduced against docs.robinhood.com — treat as reported."}
```

Every visitor's first screen carries a sentence telling them the site has not verified its own
chain facts. The honesty instinct is right; the placement is wrong. This belongs on
`/methodology`, not above the fold on the front door.

### 4.5 Dead corrections UI on every page and every dossier

`content/site.yaml` has `corrections.destination: TODO`. `types.ts:658-663`:

```ts
if (destination === "TODO") return { label: "Corrections contact: pending", href: null };
```

That renders in the footer on every page (`components/site-footer.tsx:20`) and again at the bottom
of every dossier as "Spotted an error? Corrections contact: pending" (`dossier.tsx:398-407`). A
call to action with nothing to click, shown twice per page.

### 4.6 Ledger accounting above the fold

The statrow at `routes/index.tsx:43-64` shows five cells: names on file, dependency cards, sourced
claims, live feeds, updated. Three of five count the research system's own internal artifacts
rather than anything about the subject. "sourced claims" is computed at
`data/content-server.ts:382-384` as the sum of source-ledger rows across projects and dependency
cards. No reader has ever wanted to know how many rows are in a source ledger.

The cells are also inert text. Nothing links.

### 4.7 Duplicate export control

`ExportMenu` renders in the topbar on every page (`components/site-header.tsx:38`) and again in the
dossier masthead (`dossier.tsx:381`). On a dossier both are visible simultaneously, roughly 200px
apart, with identical `export ↓` summaries and identical `markdown / csv / json` panels. One
exports the whole file, the other exports this dossier. Nothing labels the difference.

### 4.8 The home H1 and the footer tagline are the same sentence

`routes/index.tsx:35` renders `{site.tagline}` as the page H1. `components/site-footer.tsx:13`
hardcodes the identical string "Research the launch. Ignore the hype." A reader sees the site's
one slogan twice on the same scroll.

### 4.9 Two disclaimers, one unreachable

`content/site.yaml` carries a five-line `disclaimer` field. No component reads it.
`components/site-footer.tsx:14-17` hardcodes a shorter, differently-worded disclaimer. The content
system maintains a field the site ignores.

### 4.10 Badge case is fought by the stylesheet

`.badge` forces `text-transform: lowercase` at `styles.css:151`. So:

| Source value | Renders as |
|---|---|
| `LIFECYCLE_LABEL.mainnet` = "Mainnet" (`types.ts:560`) | `mainnet` |
| `ChangelogSeverity` "Material" (`routes/changelog.tsx:77`) | `material` |
| `` `${derived.risk} risk` `` = "Elevated risk" (`dossier.tsx:376`) | `elevated risk` |
| `entry.type` "correction" | `correction` |

The label tables carefully title-case; the stylesheet undoes it. Pick one and delete the other.

### 4.11 The "reported" badge fires on a regular expression

`components/feed-list.tsx:15-17`:

```tsx
function isReported(item: FeedItem): boolean {
  return (item.kind === "company" || item.kind === "ct") && /\d/.test(item.title);
}
```

Any digit anywhere in the title earns the badge. A title like "Pons v2 ships" gets flagged as a
reported figure because of the "2". A caveat that fires on noise stops meaning anything.

### 4.12 Raw trending handles in the masthead

`dossier.tsx:359-361`:

```tsx
{derived.trending && derived.trendingAccounts.length > 0 ? (
  <span className="asof">{derived.trendingAccounts.join(" · ")}</span>
) : null}
```

A row of X handles in 11px faint mono, unlabeled, unlinked, with no explanation of what counting as
a trending account means or why these three.

### 4.13 The same classification stated three times in three vocabularies

On one dossier screen a reader gets:

1. The section label, "Agents", as an eyebrow link (`dossier.tsx:346`).
2. The leaf chip, "agent launch layer", immediately beside it (`dossier.tsx:352`).
3. On every peer card, "same niche · agent launch layer" or "adjacent · agent execution"
   (`components/peer-cards.tsx:34`).

And `dossier.category`, "Agent / execution", is a fourth vocabulary that appears only when there is
no tree. Four names for one idea.

### 4.14 Section hints are almost all counts

`components/section.tsx:4-13` takes a `hint`. Its actual uses:

| Location | Hint |
|---|---|
| `dossier.tsx:188` | `${n} recorded` |
| `dossier.tsx:192` | `${n} recorded` |
| `dossier.tsx:232` | `${n} in the ledger` |
| `dossier.tsx:262` | `${n} items · newest first` |
| `dossier.tsx:121` | "same niche first, then same section" |

The Feed tab label already carries its count at `dossier.tsx:389`, so opening the Feed tab shows the
same number twice within 40px. A hint slot is prime real estate for telling a reader what they will
learn; four of five uses spend it on a number the list beneath already implies.

### 4.15 Six terse empty states, all italic, none actionable

| File and line | Text |
|---|---|
| `snapshot-strip.tsx:32` | No reported figures yet. |
| `dossier.tsx:203` | None recorded yet. |
| `dossier.tsx:252` | No sources recorded yet. |
| `dossier.tsx:289` | No changelog entries yet. |
| `feed-list.tsx:26-28` | No feed items yet. When the project posts or an account posts about a name, it lands here. |
| `deployment-grid.tsx:22` | address not located yet |
| `d.$id.tsx:75, 93, 124` | No controls recorded yet. / None recorded. / No sources recorded yet. |

All render as `.honest`, one italic muted line (`styles.css:158`). None says what the page does
have. Because 37 of 49 names have no metric, "No reported figures yet." is the third element on
most dossiers, immediately under the name. The reader's first impression of most pages is an
absence.

### 4.16 Deployments are mostly a sentinel

45 deployment rows across the corpus carry `address: not-verified`, which
`components/deployment-grid.tsx:21-23` renders as "address not located yet" inside a kv cell. For
many stubs the Evidence tab opens with a one-cell grid whose entire content is that nothing was
found. The section header still says "Deployments · 1 recorded".

### 4.17 Two schema fields collapsed into one list

`dossier.tsx:177`:

```tsx
const openItems = [...findings.missing, ...findings.unresolved];
```

The schema distinguishes `missing` (a fact not yet located) from `unresolved` (a question the
research could not settle). The page merges them under one "still unverified" label, so the
distinction the content model maintains is dead weight in every project file.

### 4.18 Data shipped to the browser and never rendered

| Field | Produced at | Rendered |
|---|---|---|
| `DossierBundle.accounts` | `content-server.ts:362-367`, returned at `:405` | never; `n.$slug.tsx:38-39` says so in a comment |
| `derived.factorPercents` | `content-server.ts:148-154`, typed at `types.ts:190-196` | never |
| `derived.label` | `content-server.ts:144` | only in `lib/export-file.ts:20` |
| `getSiteMeta().trendingCount` | `content-server.ts:471` | never |
| `DirectoryEntry.handle` | `content-server.ts:300` | never |
| `DirectoryEntry.coverage` | `content-server.ts:297` | never |
| `DirectoryEntry.reviewedAt` | `content-server.ts:302` | never (used only as a sort key server-side) |

`coverage` in particular is shipped to the home page and thrown away, which is exactly the field
the home page most needs.

### 4.19 Dead class

`.tabpanel` is applied at `dossier.tsx:90, 187, 261, 272`. There is no `.tabpanel` rule anywhere in
`styles.css`. It is a leftover from eregion's `styles/tokens.css:76`, where it carries
`display: none` and a fade-in animation. Harmless, but it signals the port was not finished.

### 4.20 No coverage signal anywhere a reader browses

The consequence of 4.18 and of `home-section.tsx:42-58`. Pons, the only researched name, sits in
the Launchpads table looking exactly like ten stubs. A reader learns the difference only after
clicking, from the words "no score yet · research pending". For 48 of 49 clicks, the site's promise
of "evidence-backed research" resolves to a page saying there is no research.

## 5. What is genuinely good and should be kept

**The research-section filter.** `dossier.tsx:181-184`:

```tsx
const BOILERPLATE_HEADINGS = new Set(["Sources", "Review metadata"]);
const researchSections = dossier.research.sections.filter(
  (s) => !s.html.includes(">Research pending.<") && !BOILERPLATE_HEADINGS.has(s.heading),
);
```

This drops empty template sections rather than rendering eleven "Research pending." headings on
every stub. It is the single best decision in the codebase and the rule that Part C generalizes.

**Render-layer de-jargoning.** `lib/dejargon.ts:1-45` rewrites internal words at display time and
leaves the research record untouched. The architecture is right even though the rule list is only
twelve entries and misses the words that actually matter.

**The site contract.** `pickDerived()` at `content-server.ts:118-162` is an explicit allowlist with
a comment naming what must never be added. `uncappedScore`, `uncappedConfidence` and `securityRaw`
all exist in `build/derived.json` and none can reach a browser.

**Server-side slicing.** `getContent()` ships a slim directory entry rather than the full bundle.
`getDossier()` ships only the dependency cards that dossier references. Account notes never leave
the server (`types.ts:299-301`). `getExportBundle()` is fetched lazily on click, not on page load.

**Pre-paint theme application** at `__root.tsx:29-36`, and the documented light-mode contrast math
at `styles.css:459-464`.

**Ranks always name their basis.** `rankLine()` at `types.ts:477-480` makes it impossible to render
"#1 of 2" without "launchpads by reported 24h fees". `CATEGORY_PLURAL` at `types.ts:457-474` exists
solely so the cohort reads as English.

**Every reported number carries an as-of.** `reportedTitle()` at `types.ts:553-555` plus the amber
`reported` chip beside every value. The instinct is correct even where the chip misfires.

**The deployment disclosure** at `deployment-grid.tsx:39-66`, with a threshold and a comment
explaining why: a stock-token card lists every ticker.

**URL-synced tabs with server-rendered defaults.** `routes/n.$slug.tsx:8-14` validates the search
param against the tab list and falls back to a clean URL.

**Middle-truncated address with copy** at `components/copy-address.tsx:1-34`, inline, no card.

**The topbar jump box** at `components/topbar-search.tsx:8-73`: type, Enter, land on the dossier.
No interstitial results page. Prefix matches rank above substring matches.

**The mobile reflow of `.secrow`** at `styles.css:444-447`, which re-grids to two columns and moves
the summary to a clamped second line.

**Graceful content failures.** `readYamlOrWarn()` at `content-server.ts:44-54` means one malformed
project file cannot take down the directory and every other dossier.

---

# PART B — eregion reference

There are two eregion design systems, and they are not the same.

- **`~/eregion-web`** — the Next.js site. This is what proofline was ported from; `styles.css:3-9`
  says so explicitly. Dark terminal, blue accent, dense.
- **`~/eregion/reports/*.html`** — the composed print reports. Serif, light paper, teal. A
  different product, discussed briefly at the end.

## 6a. The design language document

`eregion-web/docs/claude-design.md` is 65 lines and is the arbiter. Its philosophy line:

> **Density of information, hierarchy of attention, provenance as ornament.**
> The receipt chip and the confidence dots are the only decoration this product owns — everything
> else defers. Every number is one click from its source; every click expands before it navigates.

Its companion, `docs/apple-pass.md`, states the thought experiment behind the interaction model:
hand Apple the Bloomberg terminal. The answer it reaches is that Apple would keep the density and
fix **the cost of curiosity**. Five principles, quoted in compressed form:

1. **Progressive disclosure.** A row is a question; clicking it answers the question in place.
   Navigation is a deliberate second act, never the price of a peek.
2. **Hierarchy of attention.** One focal object per screen moment. Two sections open, the rest as
   labeled, summarized disclosures. "The section header tells you what you'd learn before you spend
   the click."
3. **Search is the command surface.** Cmd-K anywhere.
4. **Deference.** Fewer simultaneous borders, more air, type carries the hierarchy.
5. **Honesty is a design material.** N/A cells, quiet layers and "not yet resolved" states stay,
   but they explain themselves on tap, "like a battery-health screen, not like an error."

And what it deliberately does not do: no hover-only information, no modal dead ends, no hiding
provenance behind depth, no removal of density. Collapsed sections still show their headline
numbers.

## 6b. Tokens, quoted for reuse

`eregion-web/styles/tokens.css:2-9`, dark:

```css
--bg:#0e1113; --panel:#16191d; --panel2:#1b1f24; --line:rgba(255,255,255,.09);
--text:#e8eaed; --muted:rgba(232,234,237,.55); --faint:rgba(232,234,237,.28);
--link:#6ea8fe; --accent:#4b8bfd; --pos:#3fb27f; --neg:#e05d4b; --amber:#d9a13c;
--note:#d9a13c;
--sans:-apple-system,"Segoe UI",Inter,Roboto,sans-serif;
--mono:"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
```

`eregion-web/app/globals.css:191-203`, light. Note that this is a designed palette, not an
inversion, and `claude-design.md` says so:

```css
html[data-theme="light"] {
  --bg: #f6f7f9; --panel: #ffffff; --panel2: #eef0f3; --line: rgba(16,20,24,.12);
  --text: #16191d; --muted: rgba(22,26,31,.64); --faint: rgba(22,26,31,.40);
  --link: #2563d8; --accent: #2f6fe4;
  --pos: #1e8e5a; --neg: #c73a28; --amber: #9a6b13; --note: #9a6b13;
}
```

Chart color, `globals.css:184-189` dark and `:197-202` light. Proofline has no equivalent and will
need one the moment it draws anything:

```css
/* dark */
--cat-supplies:#4c8dfd; --cat-competes:#e05d4b; --cat-customer:#26a3b8;
--cat-invests:#bc7d1e; --cat-partner:#9c7ad0; --cat-parent:#30a06a;
--cat-neutral:#5a6270;
--heat-hot:#4c8dfd; --heat-warm:#3a6fbc; --heat-cool:#23486e;

/* light */
--cat-supplies:#2f6fe4; --cat-competes:#c73a28; --cat-customer:#0e84a8;
--cat-invests:#8a5f0e; --cat-partner:#7447b8; --cat-parent:#1e8e5a;
--cat-neutral:#7d8590;
--heat-hot:#2f6fe4; --heat-warm:#6b97dd; --heat-cool:#b9cff1;
```

The rules attached to those, from `claude-design.md`:

- Categorical is **fixed assignment, never cycled**. Curated relations get a hue; derived and
  machine relations all render neutral slate, because the curated/derived distinction is itself
  information.
- Sequential is **one hue**, the blue ramp. Never red or amber for magnitude; those are reserved for
  status.
- Status is always icon or label plus color, never color alone.
- Identity is never color-alone: the legend names every segment, and segments carry 2px surface
  gaps.

**Layout grid.** `.wrap` is `max-width:1180px; margin:0 auto; padding:0 26px` at `tokens.css:14`.
Identical to proofline's. Body 15px at 1.5.

**Type scale**, from `claude-design.md` and confirmed in the CSS:

| Role | Value | Source |
|---|---|---|
| Front-door display | `clamp(30px,4.6vw,46px)` weight 750 tracking -.02em | `journey.css:66` |
| Dossier H1 | 28px weight 750 tracking -.015em | `tokens.css:56` |
| Band / reads heading | 17px weight 650 | `journey.css:26, 42` |
| Section title | 15px weight 650, with an 11px faint mono hint right-aligned | `tokens.css:80-82` |
| Body prose | 14px at 1.62 | `globals.css:26` |
| Row | 13-13.5px | `tokens.css:141` |
| Metadata | 11px mono | `tokens.css:40` |
| Chip / badge | 10px mono, uppercase | `tokens.css:41` |

The rule is stated flatly: "mono for every datum, timestamp, and label chip — if it's a value, it's
mono."

**The card pattern.** One pattern, many contents:

```css
background: var(--panel);
border: 1px solid var(--line);
border-radius: 8px;
padding: 13-16px;
/* :hover */ border-color: var(--accent);
```

It is reused verbatim for `.read` (`journey.css:44`), `.cell` (`journey.css:29`), `.stackcell`
(`globals.css:83`), `.chip` (`tokens.css:163`), `.relcol` (`tokens.css:138`), `.tile`
(`tokens.css:132`), `.bcard` (`tokens.css:217`), `.fwdcard`, `.pp-card`, `.qcell`. Proofline's
`.peercard` at `styles.css:400-404` already matches it.

## 6c. How the front door lets a reader browse

`eregion-web/app/page.tsx:1-8` states the structure in its own header comment: five moments, one
focal object each.

**Moment 1, hero** (`page.tsx:46-75`). A two-column grid, `.hero2` at `globals.css:221`, 1.05fr
against 0.95fr, collapsing to one column under 1000px. Left column: a mono brand eyebrow, one
sentence H1 in `h1.big`, a one-line identity paragraph, the universe search box, then four category
pills. Right column: a live ecosystem graph that is itself a link to the full map, with a caption
pinned bottom-right.

The **category pills** at `page.tsx:55-60` and `globals.css:247-249` are the browse affordance:

```css
.catpills a { border:1px solid var(--line); border-radius:999px; padding:7px 14px;
              font-size:13px; color:var(--text); background:var(--panel); }
.catpills a:hover { border-color:var(--accent); color:var(--link); }
```

Four of them: Companies, Congress trades, Supply chains, Trends & news. Not nine. Not sixteen.

The **statline** at `page.tsx:61-69` and `globals.css:239-243` is the counterpart to proofline's
statrow, and the difference is instructive. It is one mono line, and every number is a link to the
page that holds the thing it counts:

```tsx
<p className="statline">
  <Link href="/entities"><b>{counts.entities}</b> companies</Link>
  <span className="sep">·</span>
  <Link href="/stack"><b>{recordTotal.toLocaleString()}</b> records</Link>
  ...
</p>
```

Proofline's statrow is five bordered boxes of inert text. Eregion's is one line where every number
is a door.

**Moment 2, "Worth knowing"** (`page.tsx:78-82`). A rotating deck of receipted picks, hinted "five
picks from the data · refreshed weekly". One claim at a time, in 17px at weight 550 with a 62ch
measure (`globals.css:235`), a left accent border, an entity link and confidence dots below. This is
the "one focal object" principle made literal: the front door leads with a single sentence of
actual research rather than a grid.

**Moment 3, "What's moving"** (`page.tsx:85-105`). Exactly three cards in a three-column grid,
`.reads` at `journey.css:43`. Each card is a mono kicker with a date, a headline clamped at 150
characters, and a footer with the entity name and confidence dots. Cards link to `/evidence/[id]`
when a receipt exists and render as plain divs when it does not, so an unsourced item is visibly
not clickable.

**Moment 4, the stack band** (`page.tsx:108-126`). Ten cells in a grid, `.band` at `journey.css:28`,
one per layer. Each cell carries a mono code, a heat dot, a count, a wrapped name, and a 3px
activity bar whose width is a share of the maximum. A layer with zero names gets `.cell.quiet`
(`journey.css:36-38`), which dashes the border and fades the count rather than hiding the cell. The
band header's hint reads "value flows up · bar = activity, last 60 days" — it explains the encoding
in place rather than requiring a legend.

**Density handling on the front door:** four pills, one stat line, one rotating claim, three cards,
ten small cells. That is the whole page. Compare proofline's home: five stat boxes, five feed rows,
nine section headers with nine descriptions, and 49 rows.

## 6d. How the entities index lets a reader browse

`eregion-web/app/entities/page.tsx` is the closest structural analogue to proofline's problem, and
its header comment names the design directly:

> Companies — structured, not a wall (workplan W1). Three strata:
> 1. Researched — a deep-research packet backs the name (tier badge, why-line, report link). The
>    product, up front.
> 2. The tracked universe grouped by value-chain layer — compact chips, the why-tracked line as the
>    tooltip, each group headed by its layer link.
> 3. Unplaced — tracked but no value-chain tag yet. Honest, at the end.

**Stratum 1, Researched** (`entities/page.tsx:68-92`). The signal is physical: a packet file on disk
means the name is researched (`:44-47`). Section hint: "N names · a deep-research packet backs each
dossier". Each name is a full `.edgerow` (`globals.css:46-52`), a two-column grid whose second row
spans full width for the why-line:

```tsx
<div className="edgerow">
  <span className="cp">
    <Link href={`/entity/${slug}`}>{e.name}</Link>
    <span className="kd">{ticker}</span>
    <span className="badge tracked">{tier === "B" ? "deep" : "baseline"}</span>
    <Link className="receipt" href={`/entity/${slug}/report`}>report</Link>
  </span>
  <span className="basis">{truncated description}</span>
</div>
```

**Stratum 2, the tracked universe** (`entities/page.tsx:94-116`). Section hint: "by value-chain
layer · every layer opens its page". Each layer is one `.panelbox` containing a `.rootline` header
with a mono two-digit code that links to the layer page, the layer name as a link, and a right-
aligned "N tracked" count. Beneath it, a `.chiprow` of names as chips. A chip is name plus ticker as
a `<small>`, with the why-tracked line as its `title`.

**Stratum 3, unplaced** (`entities/page.tsx:118-134`). Same panel shape, with `—` as the code and
"not yet placed" as the heading, hinted "N tracked · no value-chain tag yet". A whole stratum of
"we don't know yet" rendered without apology.

**The chip overflow primitive.** `components/cellchips.tsx:25-47`:

```tsx
const CHIP_CAP = 10;
export function Chips({ comps }) {
  const head = comps.slice(0, CHIP_CAP);
  const rest = comps.slice(CHIP_CAP);
  return (
    <>
      <div className="chiprow">{head.map(chip)}</div>
      {rest.length > 0 && (
        <details className="morechips">
          <summary>+ {rest.length} more</summary>
          <div className="chiprow">{rest.map(chip)}</div>
        </details>
      )}
    </>
  );
}
```

Ten chips, then `+ N more` behind a native `<details>`. Styled at `globals.css:296-300` so the
summary is a mono link with the marker suppressed. `cellchips.tsx` also carries `shortName()`
(`:14-20`), which strips corporate suffixes so a chip reads "JL MAG Rare-Earth" not
"JL MAG Rare-Earth Co., Ltd." — "chips carry the name, the dossier carries the legalese."

**Density result:** roughly 130 companies fit on one scrollable page, with the researched handful
readable as rows and the rest scannable as chips. Proofline's 49 names currently take more vertical
space than that.

## 6e. Entity masthead and tabs

`eregion-web/app/entity/[slug]/page.tsx:152-259`.

**Masthead** (`:154-203`), three parts in a flex row:

1. `.tickbox` — a small bordered panel with the ticker in 18px mono and the exchange beneath.
   Rendered only when a ticker exists.
2. `.mast-main` — H1 name, a one-liner description clamped to two sentences and 280 characters with
   the full text on `title` (`:118-131`), then `.mast-badges`: entity type, sector tags, coverage
   status, research tier, output mode, and a receipt link to the full research report when one
   exists.
3. `.quotebox` — price, 52-week range, beta, vendor as-of. When the feed is not wired it renders
   "no live quote" with the honest reason beneath: "quote feed not wired in the local build". Never
   a fake number.

**The statrow is the door** (`:140-150`, `:205-231`). Eight cells, and each one is a `<Link>` into
the tab that explains it:

```tsx
const StatCell = ({ v, label, note, tab: cellTab = "financials" }) => {
  const val = typeof v === "object" ? v.v : v;
  const title = typeof v === "object" ? v.title
    : val ? `full detail on the ${cellTab === "estimates" ? "Estimates" : "Financials"} tab` : note;
  return (
    <Link className="s" href={`/entity/${slug}?tab=${cellTab}`} title={title}>
      {val ? <b className={val === "n/m" ? "na" : undefined}>{val}</b>
           : <b className="na" title={note}>N/A</b>}
      <span>{label}</span>
    </Link>
  );
};
```

Two things to steal here. First, an empty cell renders `N/A` with a `title` carrying the specific
reason: "vendor feed absent for this name", "EV needs the vendor multiple and revenue — not on
file", "no analyst coverage on feed". Second, `n/m` handling at `:43-53`: a ratio past a sanity
threshold renders as "n/m" with the raw number in the tooltip, because "a ratio past its sanity
threshold reads as noise, not information".

**The countline** (`:233-241`). Five clickable counts in a mono line, each with a `title` explaining
what it counts. This is the pattern proofline's statrow should have been, though it is still one
element too many for proofline's data density.

**Tabs** (`:26-34`, `:243-249`). Seven tabs as `<Link>`s with `?tab=`, styled at `globals.css:12-15`
with an accent bottom border on the active one. Tab data is fetched conditionally at `:95-108`, so
a tab that is not rendered costs nothing.

**Snapshot tab order** (`components/entity/snapshot.tsx`), the section sequence:

1. Where it sits — the value-chain flow strip, every node a link (`:247-288`)
2. Overview (`:289-303`)
3. History (`:305-312`)
4. Why it matters (`:314-321`)
5. What you're buying — the decomposition (`:323-399`)
6. Peers — ranked (`:401-433`)
7. Position & power (`:434-560`)
8. The bets inside the company — a `Disclosure` (`:562-580`)
9. All classification tags — a `Disclosure` (`:583-597`)
10. In the news (`:601-631`)

The ladder is deliberate. Orienting sections are open; reference sections are collapsed.

## 6f. The three primitives

### The Disclosure

`eregion-web/components/disclosure.tsx:10-44`. The header comment calls it "the universal
expand-in-place primitive". Its API is the interesting part:

```tsx
export function Disclosure({ title, hint, preview, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className={`disc${open ? " open" : ""}`}>
      <button className="disc-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="disc-chevron" aria-hidden>›</span>
        <span className="disc-title">{title}</span>
        {hint && <span className="disc-hint">{hint}</span>}
      </button>
      {!open && preview && <div className="disc-preview">{preview}</div>}
      <div className="disc-body" hidden={!open}>{children}</div>
    </section>
  );
}
```

The `preview` prop is documented as "One-line summary shown while collapsed — the scan stays
complete." A real call site, `snapshot.tsx:562-567`:

```tsx
<Disclosure
  title="The bets inside the company"
  hint={atoms.length ? `${atoms.length} tracked separately` : "none yet"}
  preview={atoms.length
    ? `Product lines and programs that carry their own thesis: ${atoms.map(a => a.name).join(" · ")}`
    : "No split bets yet — the whole company is the unit."}
  defaultOpen={atoms.length > 0 && atoms.length <= 4}
>
```

Note `defaultOpen` computed from data volume: open it when there are between one and four items,
collapse it when there are more. And note that the empty case is a full sentence that reframes the
absence as a fact: "the whole company is the unit."

Styling at `globals.css:98-114`. The chevron rotates 90 degrees at `:102`, and `claude-design.md`
specifies 180-220ms ease with animations dropped and states preserved under reduced motion, which
`globals.css:136-139` implements.

`DiscRow` at `disclosure.tsx:47-69` is the row-level variant: a list row whose detail unfolds
beneath it, with a right-aligned mono meta slot.

### The receipt chip

`tokens.css:35-37`:

```css
.receipt { display:inline-flex; align-items:center; gap:5px; font-family:var(--mono);
           font-size:11px; color:var(--link); border:1px solid rgba(110,168,254,.35);
           border-radius:999px; padding:3px 9px; white-space:nowrap; }
.receipt::before { content:"↗"; }
.receipt.demo { color:var(--muted); border-color:var(--line); }
```

`claude-design.md` calls it "the signature" and imposes two rules: external receipts open in a new
tab, internal receipts go to `/evidence/[id]`; and it is "never styled-over, never color-varied".
It appears in 15 of the site's files. Proofline's `.receipt` at `styles.css:138-146` is a faithful
port, and it is used correctly.

The `.demo` modifier is worth noting: a receipt pointing at placeholder data is visually demoted
rather than hidden.

### The confidence dots

`app/page.tsx:21`:

```tsx
const conf = (c) => (c ?? 0) >= 4 ? ["c3", "●●●"] : (c ?? 0) >= 3 ? ["c3", "●●○"] : ["c1", "●○○"];
```

`tokens.css:38-39`:

```css
.conf { font-size:10px; letter-spacing:2px; white-space:nowrap; }
.conf.c3 { color:var(--pos) } .conf.c2 { color:var(--amber) } .conf.c1 { color:var(--amber) }
```

The design rule from `claude-design.md`: "dot-count is the encoding; color reinforces, never
carries." Three glyphs, ten pixels, no legend needed, colorblind-safe by construction. It is the
answer to proofline's `claim · S1 S2` problem: an ordinal encoding a reader can absorb without a
glossary.

### The glossary that backs them

`app/guide/page.tsx:70-93` defines every primitive to readers in plain language, including the exact
analogue of proofline's source ids:

> **[R1], [R2] …** — Citation anchors inside research prose — they point to the numbered receipts
> section of the underlying research document.
>
> **N/A — with a reason** — An empty cell always says why it's empty ("not on the vendor feed",
> "no SEC filings — foreign issuer"). We never fill a gap with a guess.
>
> **as-of** — The date a fact was true or captured. Data ages; the date travels with it.

Eregion ships internal notation and then defines it. Proofline ships internal notation and does not.

### Global chrome

`app/layout.tsx:39-55`. Sticky topbar with a mono wordmark, a seven-link crumb nav, and a right
cluster of search button, theme toggle, and a combined as-of line that also teaches the shortcut:
"⌘K to jump · Information, not advice. · as-of {today}". The theme script at `:34-38` reads
`?theme=` first, then localStorage, then `prefers-color-scheme`, defaulting to dark inside a
try/catch. Proofline's version at `__root.tsx:31-36` omits the system-preference step.

The footer at `:58-61` is two mono lines: the disclaimer with a link to the guide, and the list of
data sources. No tagline repeat, no dead contact link.

## 6g. The print report system, briefly

`~/eregion/reports/coverage-sharonai.html`, 893 lines, is a separate design. Tokens at `:2-12`:

```css
--paper:#F6F7F8; --page:#FFFFFF; --ink:#15181B;
--teal:#114049; --signal:#1D6A7E; --teal-2:#3F8DA0; --teal-3:#7FB4C0; --teal-pale:#C6DCE2;
--muted:#565E67; --faint:#8B939C;
--line:rgba(21,24,27,.14); --line-soft:rgba(21,24,27,.07); --track:#E9EBED;
--pos:#2F7D5B; --neg:#B4442F; --amber:#8F6410; --amber-bg:rgba(143,100,16,.08);
--serif:Georgia,"Iowan Old Style",Cambria,"Times New Roman",serif;
```

Serif Georgia at 10.5pt body, 8.5in by 11in pages with a running head per page (`:21-23`), a mono
`.sectag` kicker over a 19pt serif h2, and 7pt receipt chips (`:44-46`). Section order: debate map,
sector in one page, what you're buying, position & power, money-flow map, financials, driver-based
build, positioning & runway, ranked risk register, what to watch, open questions, scenarios,
what would change our mind, people & provenance, what we couldn't verify, receipts appendix.

This is a document, not an interface. Proofline should not borrow from it.

## 7. What to borrow, and what to avoid

### Borrow

**The three-strata browse** (`entities/page.tsx:60-134`). This is the direct answer to 1 researched
name and 48 stubs. Researched names as full rows with a why-line up front; everything else as
compact chips grouped by section; the honest remainder at the end.

**The stat line where every number is a door** (`page.tsx:61-69`). One mono line, not five boxes,
and each number links to the page that holds what it counts.

**The N/A-with-a-reason cell** (`entity/[slug]/page.tsx:140-150`). An empty value renders `N/A` in
the muted color with a `title` giving the specific reason it is empty. Never a blank, never a dash
with no explanation.

**The empty state that names what IS present** (`snapshot.tsx:295-299`):

> "No research profile written for this company yet. Its identifiers, classification, and
> relationships below are verified; the narrative comes with full coverage."

That is one sentence doing three jobs: admitting the gap, pointing at what the page does have, and
saying when the gap closes. Proofline's six empty states do only the first job, in three words each.

**The section hint that states provenance or promise, not a count** (`snapshot.tsx:292`):
`{narrative ? "from the research profile" : "coming with full coverage"}`. And
`snapshot.tsx:603-609`, where the hint changes wording based on what the section actually found.

**The `Disclosure` with `hint`, `preview` and data-driven `defaultOpen`**
(`disclosure.tsx:10-44`, called at `snapshot.tsx:562-567`). A collapsed section that still says
something is the mechanism that lets a dense page read as short.

**`.quiet`** (`journey.css:36-38`, `globals.css:85`): a dashed border and reduced opacity for a cell
with no data. Present but visibly thin, rather than hidden or blank.

**Chip overflow via native `<details>`** (`cellchips.tsx:25-47`, `globals.css:296-300`). Ten, then
`+ N more`.

**`shortName()`** (`cellchips.tsx:14-20`): chips carry the name, the dossier carries the legalese.
Proofline's equivalent already exists as `cleanLabel()` at `lib/dejargon.ts:28-30` and should be
applied more widely.

**`.honest` as a real panel** (`tokens.css:228`):
`font-size:12px; color:var(--muted); background:var(--panel2); border:1px dashed var(--line); border-radius:7px; padding:10px 13px`.
Proofline's `.honest` at `styles.css:158` is one italic line. One padded dashed panel per page reads
as a deliberate statement; six italic fragments read as a broken page.

**The confidence-dot encoding** (`page.tsx:21`, `tokens.css:38-39`). An ordinal a reader absorbs
without a glossary, where color reinforces and never carries.

**The glossary page** (`app/guide/page.tsx:70-93`). If internal notation must ship, define it
somewhere and link to the definition.

**The categorical and sequential color tokens** (`globals.css:184-202`) with the fixed-assignment
and one-hue-for-magnitude rules from `claude-design.md`. Proofline has none and will need them.

**The theme script that consults `prefers-color-scheme`** (`layout.tsx:34-38`). Proofline's skips
that step and always defaults to dark.

### Avoid

**The seven-tab dossier** (`entity/[slug]/page.tsx:26-34`). Eregion has eight statrow cells, five
countline counts and seven tabs because it has a database behind every name. Proofline has one
metric on 12 names and none on 37.

**The eight-cell statrow and the five-count countline** (`:205-241`). Same reason. Proofline
already has a smaller version of this disease.

**The fill-source chip system** (`tokens.css:26-32`) and the spec toggle (`tokens.css:236-243`).
`.fs-m`, `.fs-c`, `.fs-j`, `.fs-d` label every field with who authored it, hidden behind
`body:not(.spec)`. This is internal provenance shown to readers behind a switch. Proofline's raw
evidence classes and S-ids are the same mistake without the switch. Do not add the switch; remove
the notation.

**`.dirnote`** (`tokens.css:146-147`): a red-bordered box rendered on the live page describing a
known render bug. Bugs go in the tracker.

**The output-mode badge** (`entity/[slug]/page.tsx:61-70, 175-182`), which surfaces "Mode A ·
synthesis" or "Mode B · debate map" with a derivation string in the tooltip. A reader does not need
to know which rendering mode the system chose.

**The print report's serif teal system.** Different product, different medium.

**The graph as a front-door centrepiece** (`page.tsx:71-74`). It works because eregion has a
relationship graph worth showing. Proofline's equivalent, the dependency map, has 21 cards across
49 names and would render as a sparse mess.

---

# PART C — recommended architecture

One principle governs all of it: **the design must make one researched name and 48 thin ones look
deliberate.** Right now it makes 49 names look identically empty.

## 8a. Home

Three blocks. Nothing else.

**Block 1, masthead.** Keep the eyebrow, the H1 and the two-sentence chain description at
`routes/index.tsx:32-40`. Replace the five-box statrow at `:43-64` with one mono line in the
eregion `.statline` idiom, where each number links:

```
49 names on file · 1 researched · 21 dependency cards · updated 2 Sep
```

Drop "sourced claims" and "live feeds" entirely; they count the research system's own furniture.
Move the "Chain facts not yet reproduced" sentence at `:73-77` to `/methodology`, where a reader who
wants to know how the sausage is made will find it. Keep the two chain receipt links.

**Block 2, "Researched", first.** A short list of names with `coverage: full`, one per row in the
`.edgerow` shape: ticker, name, one line of why it matters, score, risk badge, and a receipt-styled
link if a full record exists. Today that is one row. One row that looks deliberate reads better than
49 that look identical. Section hint should say what the stratum is, not how many are in it:
"a full research record backs each of these".

`DirectoryEntry.coverage` is already shipped to this page (`content-server.ts:297`) and currently
thrown away. This is what it is for.

**Block 3, "The rest of the chain", nine sections as chip blocks.** Each section becomes a heading
with its count, its existing one-line description from `types.ts:378` onward, and a `.chiprow` of
names. A chip is ticker plus name, with the summary as its `title`. A chip whose name has a reported
figure shows it as a `<small>`. A chip whose name has nothing takes the `.quiet` dashed-and-dimmed
treatment, so thin names are visibly thin without being hidden. Sections longer than ten chips fold
the tail behind `<details>` with `+ N more`.

This turns 48 one-line rows spanning several screens into nine compact blocks. It also solves the
sort problem: chips do not imply a ranking the way rows do, so alphabetical order stops looking like
a failed ranking.

**Drop the "Latest" feed strip from home** (`routes/index.tsx:80-88`). Five items push all nine
sections below the fold, and the nav already links `/feed`.

**Keep the topbar jump box.** Add no filters, no sort control, no global flat list. The
`routes/index.tsx:13-15` comment was right.

## 8b. Project page

Split by coverage. The current design writes one page for both cases and serves neither.

**Shared header, in order:**

1. Backlink.
2. Eyebrow: **one** classification word. Keep the section label as a link to the home anchor. Delete
   the `.leafchip` at `dossier.tsx:352`. The leaf survives on the peer cards where it does work.
3. H1 symbol, subtitle name.
4. **One** badge row: lifecycle, plus risk only when a score exists. Delete the trending-handle
   string at `:359-361`; if trending matters, the badge alone carries it and the handles belong in a
   tooltip.
5. Summary as a lead.
6. Official links as receipts.
7. The reported-figure line, when there is one. When there is not, render nothing at all rather than
   "No reported figures yet."

**For a full record**, keep the four tabs and the current Evidence, Feed and Changelog contents,
minus the cuts below.

**For a stub, no tabs.** One column, one page:

1. An honest panel, written as a sentence in the eregion idiom. Something like: "No research record
   yet. What's on file: the official links above, N deployments, N sources, and the open questions
   below. The full record comes with coverage."
2. Whatever deployments exist, but **only if at least one address was located**. 45 of the corpus's
   deployment rows are the `not-verified` sentinel; a section whose only content is "address not
   located yet" should not render.
3. The feed, if non-empty.
4. Sources.
5. The open-questions list as the close. Split `findings.missing` and `findings.unresolved` back
   apart, since the content model already distinguishes them: "not yet located" and "not yet
   settled" are different states and both are more interesting than "still unverified".

**Cuts, specific:**

| Cut | Location |
|---|---|
| The Review record grid | `dossier.tsx:293-315` |
| The `provisional` badge | `dossier.tsx:374` |
| The `capped by <level> override` note | `dossier.tsx:377` |
| The trending-handle string | `dossier.tsx:359-361` |
| The second export menu | `dossier.tsx:381` |
| The duplicated Feed count | `dossier.tsx:262` or `:389`, keep one |
| Every `N recorded` / `N in the ledger` hint | `dossier.tsx:188, 192, 232` |
| The raw evidence class and S-id label on every finding | `dossier.tsx:39-51` |
| The `.leafchip` | `dossier.tsx:352` |
| Dead `.tabpanel` class | `dossier.tsx:90, 187, 261, 272` |
| Dead `accounts` payload | `content-server.ts:362-367, 405` |
| Dead `factorPercents` payload | `content-server.ts:148-154` |

For the evidence label, pick one of two paths. Either link each source id to its row in the ledger,
so `S1` becomes a working anchor, or drop the ids from the finding entirely and let the source
ledger be the receipt. If the evidence class survives at all, encode it the way eregion encodes
confidence: an ordinal glyph a reader absorbs without a glossary, plus a definition on
`/methodology`.

**Content cuts, outside the site:** delete the 81 "publishes an official site at …" and "publishes
an official X account at …" findings from `content/projects/*.yaml`. They restate the link row and
they poison the top-3 slot on 44 of 49 pages.

## 8c. Feed

`routes/feed.tsx` is the cleanest page in the app and needs almost nothing.

1. Replace the digit regex at `components/feed-list.tsx:15-17` with an explicit field on the feed
   item. A caveat badge that fires on the "2" in "v2" trains readers to ignore it.
2. Render a zero-count chip as disabled rather than removing it (`routes/feed.tsx:38`), so the
   filter row stops reflowing as data arrives.

## 8d. Four rules that make thin data look deliberate

These are the generalisation of what `dossier.tsx:181-184` already does correctly.

**Rule 1 — never render a section whose only content is an empty state.** The research-section
filter already applies this to research prose. Extend it to Deployments, Sources, Changelog, the
snapshot strip, Controls and Failure modes. A page with four sections is better than a page with
eight, four of which say "none".

**Rule 2 — one honest panel per page, written as a sentence that names what is present.** Replace
the six terse italic fragments in section 4.15 with a single `.honest` panel in the eregion shape:
padded, dashed border, `--panel2` background. It states what the file holds, what it is missing, and
what closes the gap.

**Rule 3 — a section hint states provenance or promise, never a count.** "from the research record",
"coming with full coverage", "same niche first, then same section". The list beneath already implies
its length.

**Rule 4 — thin is visible, not hidden.** `.quiet` dashed-and-dimmed for an unresearched name
everywhere it appears: home chips, peer cards, search results. A reader should be able to see the
shape of the coverage at a glance and never be surprised by a click.

## 8e. Sequencing

If this is done in order, each step is independently shippable.

1. Delete the 81 boilerplate findings from content. Highest impact, no code.
2. Fix the two dead strings: set `corrections.destination`, and either set `chain.checked` or move
   the sentence to `/methodology`.
3. Apply Rule 1 to every section. Pure deletion.
4. Rewrite the empty states as one honest panel per page. Rule 2.
5. Rebuild home as three blocks with chips. The one structural change.
6. Split the project page by coverage and make the cuts table above.
7. Resolve the evidence-id question: link them, or drop them and add a glossary to `/methodology`.

Steps 1 through 4 remove elements only, and would improve the site measurably before any layout work
begins.
