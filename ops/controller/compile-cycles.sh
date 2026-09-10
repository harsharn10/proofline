#!/bin/sh
# Compatibility stop for historical handoffs. Never dispatch or guess the newest run ID.
echo 'Retired: repeated compile dispatch is not a recovery policy.' >&2
echo 'Inspect the exact failed run and packet dispositions; use one authorized current-main recovery. See docs/operating-flow.md.' >&2
exit 1
