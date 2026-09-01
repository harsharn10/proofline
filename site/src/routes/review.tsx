import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  getReviewQueue,
  moderateTelegram,
  type ReviewQueueItem,
  type ReviewStatus,
} from "@/data/review-server";
import type { ChannelDelivery, ChannelEvent, ChannelPublication } from "@/data/types";

export const Route = createFileRoute("/review")({
  loader: () => getReviewQueue(),
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow, noarchive" }],
  }),
  component: ReviewPage,
});

const FILTERS: Array<ReviewStatus | "all"> = [
  "pending",
  "approved",
  "roundup",
  "held",
  "site-only",
  "sent",
  "all",
];
const STATUSES: ReviewStatus[] = ["pending", "approved", "roundup", "held", "site-only", "sent"];
const EVENTS: Array<{ value: ChannelEvent; label: string }> = [
  { value: "new-coverage", label: "New coverage" },
  { value: "research-update", label: "Research update" },
  { value: "risk-alert", label: "Risk alert" },
  { value: "correction", label: "Correction" },
  { value: "breaking", label: "Developing / breaking" },
  { value: "trending", label: "Trending" },
  { value: "roundup", label: "Roundup" },
];
const DELIVERIES: Array<{ value: ChannelDelivery; label: string }> = [
  { value: "immediate", label: "Immediate" },
  { value: "same-day", label: "Same day" },
  { value: "roundup", label: "Roundup" },
];

function initialDrafts(items: ReviewQueueItem[]): Record<string, ChannelPublication> {
  return Object.fromEntries(items.map((item) => [item.key, item.channelCopy]));
}

function copyForRequest(copy: ChannelPublication): ChannelPublication {
  const why = copy.why_it_matters?.map((line) => line.trim()).filter(Boolean).slice(0, 2);
  return {
    event: copy.event,
    delivery: copy.delivery,
    headline: copy.headline.trim(),
    summary: copy.summary.trim(),
    ...(why?.length ? { why_it_matters: why } : {}),
    ...(copy.watch_next?.trim() ? { watch_next: copy.watch_next.trim() } : {}),
  };
}

function ReviewPage() {
  const queue = Route.useLoaderData();
  const router = useRouter();
  const [filter, setFilter] = useState<ReviewStatus | "all">("pending");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [drafts, setDrafts] = useState<Record<string, ChannelPublication>>(() =>
    initialDrafts(queue.items),
  );
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? queue.items : queue.items.filter((item) => item.status === filter)),
    [filter, queue.items],
  );
  const selectedItems = queue.items.filter((item) => selected.has(item.key));

  useEffect(() => {
    setDrafts(initialDrafts(queue.items));
  }, [queue.items]);

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

  async function apply(action: "publish" | "roundup" | "site-only" | "hold" | "reset") {
    if (!selectedItems.length) return;
    setBusy(true);
    setNotice(null);
    try {
      const result = await moderateTelegram({
        data: {
          action,
          items: selectedItems.map((item) => ({
            key: item.key,
            ...(action === "reset"
              ? {}
              : { copy: copyForRequest(drafts[item.key] ?? item.channelCopy) }),
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
        data: { action: "set-channel", channelEnabled: enabled },
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
            Research records everything; this queue decides what the retail channel sees. Edit the
            exact card, then publish it, save it for a roundup, hold it, or keep it site-only.
            Changing source content or approved copy automatically invalidates approval.
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
        {STATUSES.map((status) => (
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
        <div className="controller-session">
          <span>Private session</span>
          <b>Authorized as @{queue.viewer}</b>
        </div>
        <div className="controller-actions">
          <button
            type="button"
            className="ctl primary"
            disabled={busy || !selectedItems.length}
            onClick={() => apply("publish")}
          >
            Publish selected
          </button>
          <button
            type="button"
            className="ctl"
            disabled={busy || !selectedItems.length}
            onClick={() => apply("roundup")}
          >
            Add to roundup
          </button>
          <button
            type="button"
            className="ctl reject"
            disabled={busy || !selectedItems.length}
            onClick={() => apply("site-only")}
          >
            Site only
          </button>
          <button
            type="button"
            className="ctl"
            disabled={busy || !selectedItems.length}
            onClick={() => apply("hold")}
          >
            Hold
          </button>
          <button
            type="button"
            className="ctl"
            disabled={busy || !selectedItems.length}
            onClick={() => apply("reset")}
          >
            Reset
          </button>
          <span className="control-sep" />
          <button
            type="button"
            className="ctl"
            disabled={busy}
            onClick={() => setChannel(!queue.channelEnabled)}
          >
            {queue.channelEnabled ? "Pause channel" : "Enable channel"}
          </button>
        </div>
        <p className="config-note credential-note">
          Your GitHub credential is required on every request; successful verification is cached for
          at most 30 seconds. Close the browser session to clear its HTTP authentication cache.
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
              draft={drafts[item.key] ?? item.channelCopy}
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
  draft: ChannelPublication;
  onToggle: () => void;
  onDraft: (draft: ChannelPublication) => void;
}) {
  const changed = JSON.stringify(draft) !== JSON.stringify(item.entry.channel);
  const eventLabel = EVENTS.find((event) => event.value === draft.event)?.label ?? draft.event;
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
          <span>{eventLabel}</span>
          <span>{draft.delivery}</span>
          <span className={`review-status ${item.status}`}>{item.status}</span>
          {changed ? <span className="review-status edited">edited copy</span> : null}
          {item.approvalInvalidated ? (
            <span className="review-status invalidated">approval invalidated</span>
          ) : null}
        </div>
      </div>
      <div className="review-fields">
        <label>
          <span>Event</span>
          <select
            value={draft.event}
            disabled={item.status === "sent"}
            onChange={(event) => onDraft({ ...draft, event: event.target.value as ChannelEvent })}
          >
            {EVENTS.map((event) => (
              <option key={event.value} value={event.value}>
                {event.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Recommended delivery</span>
          <select
            value={draft.delivery}
            disabled={item.status === "sent"}
            onChange={(event) =>
              onDraft({ ...draft, delivery: event.target.value as ChannelDelivery })
            }
          >
            {DELIVERIES.map((delivery) => (
              <option key={delivery.value} value={delivery.value}>
                {delivery.label}
              </option>
            ))}
          </select>
        </label>
        <label className="review-field-wide">
          <span>Headline</span>
          <input
            value={draft.headline}
            disabled={item.status === "sent"}
            maxLength={180}
            onChange={(event) => onDraft({ ...draft, headline: event.target.value })}
          />
        </label>
        <label className="review-field-wide">
          <span>Summary</span>
          <textarea
            value={draft.summary}
            disabled={item.status === "sent"}
            rows={3}
            maxLength={1200}
            onChange={(event) => onDraft({ ...draft, summary: event.target.value })}
          />
        </label>
        <label>
          <span>Why it matters · one point per line, max two</span>
          <textarea
            value={(draft.why_it_matters ?? []).join("\n")}
            disabled={item.status === "sent"}
            rows={3}
            maxLength={801}
            onChange={(event) => {
              const { why_it_matters: _why, ...rest } = draft;
              const lines = event.target.value
                .split("\n")
                .slice(0, 2);
              onDraft(lines.some((line) => line.length > 0) ? { ...rest, why_it_matters: lines } : rest);
            }}
          />
        </label>
        <label>
          <span>What we’re watching</span>
          <textarea
            value={draft.watch_next ?? ""}
            disabled={item.status === "sent"}
            rows={3}
            maxLength={500}
            onChange={(event) => {
              const { watch_next: _watch, ...rest } = draft;
              onDraft(event.target.value ? { ...rest, watch_next: event.target.value } : rest);
            }}
          />
        </label>
      </div>
      <TelegramPreview item={item} draft={draft} />
      <div className="review-card-foot">
        <span>
          {item.entry.severity} severity · source record remains unchanged · exact copy locks on
          publish
        </span>
        {item.reviewer ? (
          <span>reviewed by {item.reviewer}</span>
        ) : (
          <span>awaiting controller</span>
        )}
      </div>
    </article>
  );
}

function TelegramPreview({ item, draft }: { item: ReviewQueueItem; draft: ChannelPublication }) {
  const label =
    draft.event === "breaking"
      ? "DEVELOPING"
      : (EVENTS.find((event) => event.value === draft.event)?.label ?? draft.event).toUpperCase();
  return (
    <section className="telegram-preview" aria-label="Telegram text preview">
      <span className="telegram-preview-label">Telegram preview</span>
      <b className="telegram-kicker">
        {label} · {item.projectName.toUpperCase()}
      </b>
      <strong>{draft.headline || "Headline required"}</strong>
      <p>{draft.summary || "Summary required"}</p>
      {draft.why_it_matters?.length ? (
        <div>
          <b>Why it matters</b>
          {draft.why_it_matters.map((line) => (
            <p key={line}>• {line}</p>
          ))}
        </div>
      ) : null}
      <div>
        <b>Proofline view</b>
        <p>{item.prooflineView}</p>
      </div>
      {draft.watch_next ? (
        <div>
          <b>What we’re watching</b>
          <p>{draft.watch_next}</p>
        </div>
      ) : null}
      {draft.event === "trending" ? (
        <em>Trending measures attention — not quality or endorsement.</em>
      ) : null}
      <a tabIndex={-1}>Read the full {item.projectName} research →</a>
      <em>Research opinion only — not an audit, guarantee or investment advice.</em>
    </section>
  );
}
