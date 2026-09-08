#!/bin/sh
# Dispatch the compile workflow up to four times in a row, waiting for each; stop early when a run pushes nothing new.
i=1
prev=$(gh api repos/harsharn10/proofline/commits/main --jq .sha)
while [ $i -le 4 ]; do
  gh workflow run compile.yml --repo harsharn10/proofline --ref main >/dev/null 2>&1
  sleep 25
  run=$(gh run list --repo harsharn10/proofline --workflow compile.yml --limit 1 --json databaseId --jq '.[0].databaseId')
  gh run watch "$run" --repo harsharn10/proofline --interval 30 >/dev/null 2>&1
  concl=$(gh run view "$run" --repo harsharn10/proofline --json conclusion --jq .conclusion)
  head=$(gh api repos/harsharn10/proofline/commits/main --jq .sha)
  subj=$(gh api repos/harsharn10/proofline/commits/main --jq '.commit.message' | head -1)
  echo "cycle $i: run $run $concl; main $(printf '%s' "$head" | cut -c1-7): $subj"
  if [ "$head" = "$prev" ]; then echo "no new push; stopping"; exit 0; fi
  prev=$head
  i=$((i+1))
done
