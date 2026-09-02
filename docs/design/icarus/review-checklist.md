# Icarus review checklist

Run this on every Codex or Grok PR before merging, and once more on `main` after the last merge. Anyone can run it: a Claude session, Codex, or the owner.

## A. Every PR

```sh
git fetch origin && git checkout <branch>
npm ci --prefix . && npm ci --prefix site      # or copy node_modules from a sibling checkout
npm test                                       # validate + unit + pipeline + packet + pull tests
npm run validate:release                       # 0 errors; warnings listed in the PR
npm --prefix site run test                     # typecheck + markdown security
npm --prefix site run build                    # Vite build
```

- Diff stays inside the assignment's `allowed_paths`.
- Commit messages end with the producer trailer (`Producer: codex` or `Producer: grok-heavy`).
- No new visible jargon: `node scripts/test.mjs` includes the vocabulary test after PR 6; before that, grep `site/src` for `packet|census|stub|cohort|qualifying|dossier|provisional`.
- No wallet labeling anywhere (grep `wallet` in `site/src`; only aggregate uses allowed).

## B. Research PRs (Grok, Codex research)

- CI comment on the PR reports 0 packet errors.
- Each packet: `## What it is` ≤ 80 words, mechanism first; a `Themes:` line; `links` with `seen` dates; ≥ 3 `events` with URL and date; lifecycle matches the mainnet bar (a `REP-` on 4663 for mainnet).
- Compile: `node scripts/compile-packet.mjs research/inbox/packets/<slug>/<work-id>.md` for each packet, then `npm run validate` and `npm run score`. Compiled changes land in a separate controller PR (`claude/<date>/compile-<batch>`), never on the producer's branch.
- Spot-check three claims per batch against their receipts (open the URL; the number or statement must be there).
- Duplicate check: `possible_matches` against `content/census.yaml` and every pending packet; a match means one census row, not two.

## C. Database and flow checks (after merging to main)

1. **DB shape.** `npm run validate:release` = 0 errors. Every census row has a project file, a feed file, a changelog file, and (for located names) a pulled file. `content/pulled/history/*.jsonl` is append-only (line count never drops between two commits: compare `git show origin/main~1:content/pulled/history/pons.jsonl | wc -l`).
2. **Ids are stable.** Rerun `npm run seed` and `node scripts/compile-packet.mjs` on the same packet twice; `git status` is clean the second time.
3. **Puller.** `npm run pull:dry` lists every located name; `npm run pull -- --only pons` writes market, activity and the new structure block; `npm run test:pull` passes.
4. **Derived.** `npm run score` writes `build/derived.json`; `meetsShareBar` output includes Pons and Artificial Inu and excludes NOXA Fun and every announced name.
5. **Flows in the browser** (local `npm --prefix site run dev`, then the Render URL after deploy):
   - `/` → Right now has three cards; every row is a link; Trending ordered by volume; the New-launches closing line has a number.
   - Click Launchpads pill → `/s/launchpads` ranked table, Pons first, NOXA Fun dormant and dimmed, announced rows dashed.
   - Click Pons → `/n/pons`: Official badge, Live pill, Control badge, six tags, summary with links, chart renders with real snapshot points and the "N snapshots since" note, What people are saying has links, Related table, Commentary / Contracts / Sources tabs. No History tab, no wallet column.
   - `/n/artificial-inu`: token variant, Structure block, Holders / Volume / Trades series, no Control badge.
   - `/feed` filters work, `?name=pons` narrows, `/changelog` redirects.
   - Toggle dark theme on each page: no unreadable text, chart axes recolor.
   - Mobile width (375px): no horizontal scroll; tables scroll inside their container.
6. **Telegram.** `npm run telegram:dry` renders the digest with Icarus wording and only share-bar names.
7. **Render.** After the merge, watch the Render deploy, then curl `/`, `/s/launchpads`, `/n/pons`, `/feed` for 200 and the string "Robinhood Registry".

## D. Sign-off line for the PR

`Reviewed with docs/design/icarus/review-checklist.md: A ✓ B n/a C1–C4 ✓ C5 ✓ (light + dark, mobile) — merged <sha>`
