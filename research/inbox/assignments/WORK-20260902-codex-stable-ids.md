# Codex assignment: stable ids and a per-slug changelog

Status: kicked off 2026-09-02 on branch `codex/20260902/WORK-20260902-codex-stable-ids`. Commit packets to this branch; the draft PR is already open.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-stable-ids
producer: codex
role: compiler
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
owned_slugs: []
allowed_paths:
  - schema/source-entry.schema.json
  - scripts/migrations/add-source-keys.mjs
  - scripts/migrations/add-feed-hash-ids.mjs
  - scripts/migrations/split-changelog.mjs
  - scripts/lib/load.mjs
  - scripts/lib/checks.mjs
  - scripts/seed-stubs.mjs
  - scripts/migrations/add-review-keys.mjs
  - scripts/test.mjs
  - scripts/test-pipeline.mjs
  - site/vite.config.ts
  - site/src/data/content-server.ts
  - site/src/virtual-content.d.ts
  - content/changelog/**
  - content/sources/**
  - content/dependencies/**
  - content/feed/**
forbidden_paths:
  - content/census.yaml
  - content/projects/**
  - content/research/**
  - docs/**
  - schema/project.schema.json
  - schema/census.schema.json
  - ops/**
```

## Objective

Positional ids break the moment two producers touch the same slug on the same day, and one 85-entry
`content/changelog.yaml` is a guaranteed merge collision. Add a stable content-hash id to every source
entry, replace positional feed item ids with content-hash ids, and split the changelog into one file per
slug. Ship the migrations, run them, and commit the result — this assignment includes touching
`content/`, unlike the other three Codex assignments.

## Required reading

1. This file's Output section.
2. `docs/research-system.md` §8 (Updates, feed and publication): the exact hash formulas. Read it
   twice; every id below must match it byte for byte.
3. `scripts/migrations/add-review-keys.mjs`: the precedent for a safe, idempotent, format-preserving
   migration — it splices new lines into the existing YAML text rather than re-serializing the whole
   file, so comments and key order survive. Follow the same technique.
4. `scripts/lib/load.mjs`: `loadContent()` reads `content/changelog.yaml` as one file at line 27. This
   is the one Node-side loader every script (`checks.mjs`, `validate-content.mjs`, `telegram-digest.mjs`,
   `seed-stubs.mjs`'s `appendChangelog`) goes through — change it, and confirm by reading those files
   that none of them needs its own edit beyond what is listed below (they consume `content.changelog` as
   a flat array, which does not change shape).
5. `site/vite.config.ts`: the `prooflineContent()` plugin reads `content/changelog.yaml` as one string
   (`read("content/changelog.yaml")`) and already has a `directory()` helper it uses for
   `projects/sources/research/feed/dependencies` — use that same helper for the split changelog.
6. `site/src/data/content-server.ts`: `loadContent()` (around line 202) does
   `parseYaml<ChangelogEntry[]>(rawContent.changelog)` as one parse. `site/src/virtual-content.d.ts`
   declares the shape of `rawContent` and needs its `changelog` field's type updated to match.
7. `schema/source-entry.schema.json` and `schema/feed.schema.json`: the shapes you are extending.
   `schema/dependency.schema.json` also embeds `source-entry` for its own `sources[]` — the source-key
   migration must cover `content/dependencies/*.yaml` too, not only `content/sources/*.yaml`.

## Output

**Source keys.** Add `"key": { "type": "string", "pattern": "^[a-f0-9]{16}$" }` as an optional property
to `schema/source-entry.schema.json` (`additionalProperties` stays `false`, so this is required before
any entry can carry one). `scripts/migrations/add-source-keys.mjs [dir]` (default `content`): for every
source entry across `content/sources/*.yaml` and every card's `sources[]` in `content/dependencies/*.yaml`
that lacks a `key`, compute `sha1(normalize(url) + "|" + normalize(claim))`, keep the first 16 hex
characters, and splice it in next to `id` the way `add-review-keys.mjs` splices `review_key`. Normalize
per §8: lowercase scheme and host, drop the fragment, drop `utm_*`/`ref`/`s`/`t` query params, drop a
trailing slash; trim and collapse whitespace for text. Never touch `id` — it stays `S<n>`, and two
entries with the same `key` are a real duplicate worth a warning in the migration's console output, not
an auto-merge. Idempotent: an entry that already has a `key` is skipped. Run it and commit the result.

**Feed hash ids.** `scripts/migrations/add-feed-hash-ids.mjs [dir]` (default `content/feed`): for every
feed item whose `id` is not already a 16-hex-lowercase string, compute
`sha1(normalize(sourceUrl) + "|" + slug + "|" + date + "|" + normalize(title))` (first 16 hex); when
`sourceUrl` is absent, use the first entry in `sources[]` resolved against that slug's ledger URL
instead, and note this fallback in a code comment. Write the new id in place. Keep a redirect map,
`{ [slug]: { [oldId]: newId } }`, and print it to stdout; also write it to `build/feed-id-redirects.json`
for local convenience — `build/` is gitignored, so this file is not a PR deliverable, only a debugging
aid for whoever runs the migration. Idempotent: an id already hash-shaped is left alone. Run it and
commit the result.

**Per-slug changelog.** `scripts/migrations/split-changelog.mjs`: read `content/changelog.yaml`, group
its entries by `slug`, write `content/changelog/<slug>.yaml` per group sorted by `date` ascending (same
order the entries appear in today), each as a plain YAML array with the header comment
`# One entry per published change for <slug>. Newest last.`, then delete `content/changelog.yaml`. Entry
shape is unchanged — `schema/changelog.schema.json` still validates one array, now applied per file.
Update `scripts/lib/load.mjs`'s `loadContent()` to read every `content/changelog/*.yaml` file and
concatenate them into the same flat `changelog` array it returns today (order: by filename, i.e. by
slug, matching how `projects`/`sources`/`feed` are already loaded). Update `scripts/seed-stubs.mjs`'s
`appendChangelog` to append to `content/changelog/<slug>.yaml` (creating it if the slug has no prior
entries) instead of the single file. Update `scripts/migrations/add-review-keys.mjs` to accept a
directory and default to `content/changelog`. Add one check to `scripts/lib/checks.mjs`'s `crossCheck`:
every entry in `content/changelog/<slug>.yaml` must have `entry.slug === slug` (parallel to the existing
filename-matches-slug check on `projects`/`sources`/`feed`).

**Site.** In `site/vite.config.ts`, replace the single `changelog: read("content/changelog.yaml")`
snapshot key with `changelog: directory("content/changelog", ".yaml")`, matching the existing
`projects`/`sources`/`feed` pattern. In `site/src/data/content-server.ts`, change the changelog load to
iterate `Object.values(rawContent.changelog)`, `parseYaml<ChangelogEntry[]>` each, and flatten, in place
of the single `parseYaml<ChangelogEntry[]>(rawContent.changelog)` call — name this whatever the existing
per-slug loaders are named nearby, for consistency (`readYamlOrWarn` covers the per-file parse-or-warn
case; reuse it). Update `site/src/virtual-content.d.ts`'s type for `changelog` from `string` to
`Record<string, string>`, matching `projects`/`sources`/`feed`.

## Rules

- Every migration is re-runnable and a no-op on a file it already touched — never regenerate an id that
  already fits the new shape.
- Preserve YAML comments and formatting wherever the existing code already does (source ledgers,
  changelog). A full re-serialize that drops the header comment is a regression.
- Prove correctness with a round-trip: parse every file before and after each migration, and assert
  nothing but the new field/id changed (the same technique `add-review-keys.mjs` already uses at the
  bottom of that file).
- Do not touch `content/census.yaml` or any `content/projects/*.yaml` — this assignment is ids and file
  layout only, not content.

## Completion and PR rules

Branch: `codex/20260902/WORK-20260902-codex-stable-ids` from `base_sha`.

PR title: `WORK-20260902-codex-stable-ids: content-hash ids and per-slug changelog`.

PR body: the YAML header from the top of this file, then: counts (sources keyed, feed items
re-hashed, changelog files created), the round-trip proof for each migration, and the output of
`node scripts/test.mjs` and `node scripts/validate.mjs`. Confirm `git status` shows `content/changelog.yaml`
deleted and 49 new files under `content/changelog/`. End with "Every changed path is one of the sixteen
allowed paths."

Do not merge, enable auto-merge, mark ready, or touch any other path. Commit trailer: `Producer: codex`.
`automerge-feed.yml` will comment "needs controller review" on this PR since it touches `scripts/`,
`schema/` and `site/` — expected for every Codex tooling PR.
