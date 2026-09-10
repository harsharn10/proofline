# Background work inventory

Updated with the daily coordinator design; live rollout evidence belongs in [#102](https://github.com/harsharn10/proofline/issues/102).
Use the [operating map](operating-flow.md) for authoritative timing. Repository configuration is not proof of an external scheduler's live state.

| Work | Trigger | Decision |
| --- | --- | --- |
| Daily registry | One daily coordinator | Compile then pull with failure isolation; each lane retains its limits and main-bot lock. |
| Chain facts | Coordinator; manual recovery | Keep bounded relevance/fairness selection and credit budget; no separate cron. |
| Packet compiler | Coordinator; manual recovery | Keep independently recoverable; unchanged packets skip compilation/scoring; no repeat-dispatch loop. |
| Pipeline health | Independent daily clock; manual | Keep independent: chaining to success would hide missed/failed collection; inspect exact-attempt lane receipts. |
| Publish | Relevant main pushes, successful coordinator/manual pulls, daily brief, Sunday wrap, manual | Preserve approval/pause gates. Failed coordinator does not launch alerts even if its pull lane completed; publication is independently recoverable. |
| Validate | PR updates and main pushes | Cancel superseded PR checks only; preserve every main run. |
| Packet PR gate | Successful PR Validate | API-only classification, bounded to five minutes; never merges. |
| Generated-file guard | PR | Keep ownership safety gate. |
| Pulse deploy | Relevant main paths; manual | Bound verify/deploy to ten minutes each. |
| Pulse Worker | Ten-minute cron in configuration | Do not start yet: latest deploy skipped for absent credentials and KV binding has no namespace ID. Local configuration is not proof of a live collector. It needs a separate bounded rollout; do not change to daily without redesigning hour-based signals. |

No user crontab was installed and no Proofline-named collector/compiler/Worker process was found in the local process inventory. No matching Proofline/Icarus launch-agent files were returned by the accessible standard LaunchAgents/LaunchDaemons scan. No processes were killed: nothing was positively identified as redundant and running. This does not establish that external Grok/Claude sessions or generic-named schedulers are absent.

Grok/Claude scheduler configuration and live Cloudflare/Render account scheduling remain outside this verified inventory. Do not disable unrelated local jobs or change account credentials to discover them. Render's canonical deployment and the Cloudflare build checks are not interchangeable with data collection.

These changes reduce orchestration duplication and superseded CI, not data coverage. They do not change publication flags, send modes, identity, storage, or provider plans. No dollar-savings claim is made without run-duration/usage measurements. Review Actions durations after the next daily cycle; retain the independent report-aware watchdog.

Observed baseline: Publish run `34418556040` on the documentation-only main commit `6223871` took ten seconds and ran install, score and delivery checks successfully. Credentials were present, so the credential guard alone would not save work for that run; the new relevant-path push filter would avoid it entirely. This is one measured example, not a monthly savings projection.
