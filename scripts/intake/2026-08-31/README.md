# Intake tooling — 2026-08-30/31 Grok harvest (one-shot)

These four scripts turned the Grok field desk's 2026-08-30/31 intake (`research/inbox/grok-2026-08-30/`,
`research/inbox/account-desk.yaml`, `research/inbox/2026-08-31-*`) into the initial `content/` tree —
49 census stubs, their sources ledgers and feeds, `content/accounts.yaml`, and
`content/dependencies/stock-tokens.yaml`'s deployment list. That merge is done (Task 5). `content/` is
now canonical.

**Do not re-run these** against the live `content/` tree. They do not merge or diff — `apply-harvest.mjs`
and `build-accounts.mjs` **regenerate their target files wholesale** from the harvest data captured here,
discarding any hand edit, review, scoring, or bot-merged feed PR made to those files since the last run.
That is why both refuse to run without an explicit `--overwrite` flag — it is a confirmation, not a
convenience.

| Script | Reads | Overwrites |
|---|---|---|
| `import-chain-file.mjs` | the raw Grok intake artifacts | `research/inbox/grok-2026-08-30/drafts/**` only — never `content/` |
| `harvest-data.mjs` | (a data file, not a script) — the harvest itself, hand-transcribed from the drafts above | — |
| `apply-harvest.mjs` | `harvest-data.mjs` + `../../seed-data.mjs` + `content/census.yaml` | `content/projects/*.yaml` findings/deployments, `content/feed/*.yaml`, `content/dependencies/stock-tokens.yaml` deployments |
| `build-accounts.mjs` | `research/inbox/account-desk.yaml` + `research/inbox/2026-08-31-accounts.yaml` | `content/accounts.yaml` |
| `harvest-metrics.mjs` | `research/inbox/2026-08-31-ecosystem-map.yaml` `subjects[].llama{}` blocks + `content/census.yaml` | `content/projects/*.yaml` `metrics[]` (append) for the 12 slugs the map's llama data maps to a known kind; one new `content/sources/*.yaml` ledger entry per harvested slug |

If a future intake needs this same pipeline, copy this directory to `scripts/intake/<date>/`, point it at
the new raw artifacts, and run it against a fresh or reset `content/` tree — don't point a copy at
already-reviewed content.

`harvest-metrics.mjs` (added 2026-08-31, site-integration Task A) is separate from the other four: it does not
depend on `harvest-data.mjs`/`apply-harvest.mjs`'s SEED/HARVEST data, and it is **append-only, not idempotent** —
every run adds a new ledger source and new `metrics[]` entries rather than regenerating a section wholesale, so
re-running it against already-harvested content produces duplicates. `--overwrite` there is the same confirmation
convention as the other scripts, not a "safe to re-run" claim. See `research/inbox/grok-2026-08-30/HARVEST.md` §12
for what it harvested, what it skipped and why.

**2026-09-02: `../../seed-data.mjs` was deleted.** `npm run seed` now reads a packet
(`research/inbox/packets/<slug>/`, research-system §5) instead of a frozen literal, and
`../../build-dependency-cards.mjs` carries its own `GH`/`ACCESSED` constants. `apply-harvest.mjs`,
`harvest-metrics.mjs` and the `seed-data.mjs` mentions above still import from that deleted file, so
those three no longer run. They are one-shot importers that were already marked do-not-re-run; the
files stay as the record of what the 2026-08-31 pass did, not as working tools.
