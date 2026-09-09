#!/usr/bin/env bash
# Step zero of any work on this repository (docs/process.md). Refuses a branch that is already merged
# or whose PR is closed, reports how far main has moved on the branch's own files, and warns about
# pulled data on the branch. Usage: ops/controller/start.sh <branch> [--new]
set -euo pipefail
b="${1:?usage: ops/controller/start.sh <branch> [--new]}"; new="${2:-}"
git fetch --prune --quiet origin
if git show-ref --verify --quiet "refs/remotes/origin/$b"; then
  head=$(git rev-parse "origin/$b")
  if git merge-base --is-ancestor "$head" origin/main; then
    echo "STALE: origin/$b is already merged into main. Start a new branch from origin/main."; exit 2
  fi
  prnum=$(gh pr list --head "$b" --state all --limit 1 --json number --jq '.[0].number' 2>/dev/null || true)
  prstate=$(gh pr list --head "$b" --state all --limit 1 --json state --jq '.[0].state' 2>/dev/null || true)
  if [ "$prstate" = "MERGED" ] || [ "$prstate" = "CLOSED" ]; then
    echo "STALE: PR #$prnum on $b is $prstate. Do not push here; open a new branch."; exit 2
  fi
  base=$(git merge-base "origin/$b" origin/main)
  behind=$(git rev-list --count "origin/$b..origin/main"); ahead=$(git rev-list --count "origin/main..origin/$b")
  touched=$(git diff --name-only "$base" "origin/$b" | sort -u)
  moved=$(git diff --name-only "$base" origin/main | sort -u)
  overlap=$(comm -12 <(printf '%s\n' "$touched") <(printf '%s\n' "$moved") | grep -c . || true)
  echo "origin/$b: $ahead ahead, $behind behind main; $overlap of its files also changed on main since the base"
  if [ "$overlap" -gt 0 ]; then echo "MERGE MAIN FIRST: git merge origin/main (resolve toward main for paths you do not own)"; fi
  if [ -n "$prnum" ]; then echo "open PR: #$prnum"; fi
  if printf '%s\n' "$touched" | grep -qE '^content/pulled/|^ops/pull-budget\.json$'; then
    echo "WARNING: the branch carries pulled data. The bot rewrites it on main every six hours; drop it unless this is a labelled migration."
  fi
  git checkout -q "$b" 2>/dev/null || git checkout -q -b "$b" "origin/$b"
else
  if [ "$new" != "--new" ]; then echo "no origin/$b. Pass --new to create it from origin/main."; exit 2; fi
  git checkout -q -b "$b" origin/main; echo "created $b from origin/main $(git rev-parse --short origin/main)"
fi
echo "open PRs now:"
gh pr list --state open --json number,title,headRefName --template '{{range .}}  #{{.number}} {{.title}} ({{.headRefName}}){{"\n"}}{{end}}'
