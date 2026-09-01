import { useMemo, useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  getReviewQueue,
  moderateTelegram,
  type ReviewQueueItem,
  type ReviewStatus,
} from "@/data/review-server";

export const Route = createFileRoute("/review")({
  loader: () => getReviewQueue(),
  component: ReviewPage,
});

const FILTERS: Array<ReviewStatus | "all"> = ["pending", "approved", "rejected", "sent", "all"];

function ReviewPage() {
  const queue = Route.useLoaderData();
  const router = useRouter();
  const [filter, setFilter] = useState<ReviewStatus | "all">("pending");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [githubToken, setGithubToken] = useState("");
  const [drafts, setDrafts] = useState<Record<string, { title: string; detail: string }>>(() =>
    Object.fromEntries(
      queue.items.map((item) => [
        item.key,
        { title: item.channelTitle, detail: item.channelDetail },
      ]),
    ),
  );
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? queue.items : queue.items.filter((item) => item.status === filter)),
    [filter, queue.items],
  );
  const selectedItems = queue.items.filter((item) => selected.has(item.key));

  function toggle(key: string) {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function selectVisible() {
    setSelected(new Set(visible.filter((item) => item.status !== "sent").map((item) => item.key)));
  }

  async function apply(action: "approve" | "reject" | "reset") {
    if (!selectedItems.length) return;
    setBusy(true);
    setNotice(null);
    try {
      const result = await moderateTelegram({
        data: {
          githubToken,
          action,
          items: selectedItems.map((item) => ({
            key: item.key,
            ...(action === "approve" ? drafts[item.key] : {}),
          })),
        },
      });
      setNotice({
        kind: "ok",
        text: `${result.message} Commit ${result.commit.slice(0, 7)} queued for deployment.`,
      });
      setSelected(new Set());
      await router.invalidate();
    } catch (error) {
      setNotice({ kind: "error", text: error instanceof Error ? error.message : String(error) });
    } finally {
      setBusy(false);
    }
  }

  async function setChannel(enabled: boolean) {
    setBusy(true);
    setNotice(null);
    try {
      const result = await moderateTelegram({
        data: { githubToken, action: "set-channel", channelEnabled: enabled },
      });
      setNotice({
        kind: "ok",
        text: `${result.message} Commit ${result.commit.slice(0, 7)} queued for deployment.`,
      });
      await router.invalidate();
    } catch (error) {
      setNotice({ kind: "error", text: error instanceof Error ? error.message : String(error) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="wrap review-page pb-10">
      <section className="review-head">
        <div>
          <p className="eyebrow">Controller</p>
          <h1>Channel review</h1>
          <p className="desc">
            Research can land on the site without landing in Telegram. Edit the channel copy,
            approve only what belongs, or reject it. Nothing publishes without an explicit approval
            and an enabled channel.
          </p>
        </div>
        <div className={`channel-state ${queue.channelEnabled ? "live" : "paused"}`}>
          <span className="state-dot" aria-hidden="true" />
          <div>
            <b>{queue.channelEnabled ? "Channel enabled" : "Channel paused"}</b>
            <span>
              {queue.channelEnabled ? "Approved updates may publish" : "All delivery is blocked"}
            </span>
          </div>
        </div>
      </section>

      <section className="review-stats" aria-label="Review queue counts">
        {(["pending", "approved", "rejected", "sent"] as ReviewStatus[]).map((status) => (
          <button
            key={status}
            type="button"
            className={filter === status ? "on" : undefined}
            onClick={() => setFilter(status)}
          >
            <b>{queue.counts[status]}</b>
            <span>{status}</span>
          </button>
        ))}
      </section>

      <section className="controller-panel" aria-label="Channel controls">
        <label>
          <span>GitHub review token</span>
          <input
            type="password"
            value={githubToken}
            onChange={(event) => setGithubToken(event.target.value)}
            placeholder="Fine-grained token with Contents write"
            autoComplete="off"
            spellCheck={false}
          />
        </label>
        <div className="controller-actions">
          <button
            type="button"
            className="ctl primary"
            disabled={busy || !githubToken.trim() || !selectedItems.length}
            onClick={() => apply("approve")}
          >
            Approve selected
          </button>
          <button
            type="button"
            className="ctl reject"
            disabled={busy || !githubToken.trim() || !selectedItems.length}
            onClick={() => apply("reject")}
          >
            Reject
          </button>
          <button
            type="button"
            className="ctl"
            disabled={busy || !githubToken.trim() || !selectedItems.length}
            onClick={() => apply("reset")}
          >
            Reset
          </button>
          <span className="control-sep" />
          <button
            type="button"
            className="ctl"
            disabled={busy || !githubToken.trim()}
            onClick={() => setChannel(!queue.channelEnabled)}
          >
            {queue.channelEnabled ? "Pause channel" : "Enable channel"}
          </button>
          <button
            type="button"
            className="ctl"
            disabled={busy || !githubToken}
            onClick={() => setGithubToken("")}
          >
            Forget token
          </button>
        </div>
        <p className="config-note credential-note">
          Used only for this action and kept in this tab's memory. Nothing is stored on Render or in
          browser storage.
        </p>
        {notice ? <p className={`review-notice ${notice.kind}`}>{notice.text}</p> : null}
      </section>

      <div className="review-toolbar">
        <div className="chips">
          {FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              className={filter === status ? "on" : undefined}
              onClick={() => setFilter(status)}
            >
              {status}
              {status === "all" ? ` · ${queue.items.length}` : ` · ${queue.counts[status]}`}
            </button>
          ))}
        </div>
        <div className="selection-tools">
          <button type="button" onClick={selectVisible}>
            select visible
          </button>
          <button type="button" onClick={() => setSelected(new Set())}>
            clear
          </button>
          <span>{selected.size} selected</span>
        </div>
      </div>

      <section className="review-list" aria-live="polite">
        {visible.length === 0 ? (
          <div className="review-empty">
            <b>Queue clear.</b>
            <span>No {filter === "all" ? "updates" : filter} updates to show.</span>
          </div>
        ) : (
          visible.map((item) => (
            <ReviewCard
              key={item.key}
              item={item}
              selected={selected.has(item.key)}
              draft={drafts[item.key] ?? { title: item.channelTitle, detail: item.channelDetail }}
              onToggle={() => toggle(item.key)}
              onDraft={(draft) => {
                setDrafts((current) => ({ ...current, [item.key]: draft }));
                setSelected((current) => new Set(current).add(item.key));
              }}
            />
          ))
        )}
      </section>
    </main>
  );
}

function ReviewCard({
  item,
  selected,
  draft,
  onToggle,
  onDraft,
}: {
  item: ReviewQueueItem;
  selected: boolean;
  draft: { title: string; detail: string };
  onToggle: () => void;
  onDraft: (draft: { title: string; detail: string }) => void;
}) {
  const changed = draft.title !== item.entry.title || draft.detail !== item.entry.detail;
  return (
    <article className={`review-card ${selected ? "selected" : ""}`}>
      <div className="review-card-top">
        <label className="review-check">
          <input
            type="checkbox"
            checked={selected}
            disabled={item.status === "sent"}
            onChange={onToggle}
          />
          <span className="sr-only">Select {item.entry.title}</span>
        </label>
        <div className="review-meta">
          <span>{item.entry.date}</span>
          <b>{item.projectName}</b>
          <span>{item.entry.type}</span>
          <span className={`review-status ${item.status}`}>{item.status}</span>
          {changed ? <span className="review-status edited">edited copy</span> : null}
        </div>
      </div>
      <div className="review-fields">
        <label>
          <span>Channel title</span>
          <input
            value={draft.title}
            disabled={item.status === "sent"}
            maxLength={180}
            onChange={(event) => onDraft({ ...draft, title: event.target.value })}
          />
        </label>
        <label>
          <span>Channel detail</span>
          <textarea
            value={draft.detail}
            disabled={item.status === "sent"}
            rows={3}
            maxLength={2400}
            onChange={(event) => onDraft({ ...draft, detail: event.target.value })}
          />
        </label>
      </div>
      <div className="review-card-foot">
        <span>{item.entry.severity} severity · research record remains unchanged</span>
        {item.reviewer ? (
          <span>reviewed by {item.reviewer}</span>
        ) : (
          <span>awaiting controller</span>
        )}
      </div>
    </article>
  );
}
