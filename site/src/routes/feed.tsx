import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Wire } from "@/components/wire/wire";
import { getWire } from "@/data/content-server";
import { normalizeFeedSearch } from "@/data/feed-page";

export const Route = createFileRoute("/feed")({
  // The wire's filters are route state, not component state: `/feed?name=pons` has to arrive at the
  // reader already narrowed, for a crawler and for a no-JS reader as much as for the deep link.
  validateSearch: normalizeFeedSearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getWire({ data: deps }),
  head: () => ({
    meta: [
      { title: "The wire · Icarus" },
      { name: "description", content: "Announcements, talk, on-chain activity and material Icarus notes, newest first." },
    ],
  }),
  component: FeedPage,
});

function FeedPage() {
  const bundle = Route.useLoaderData();
  const { kind, name } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  return (
    <main className="wrap narrow pb-10">
      <section className="hero">
        <p className="eyebrow">Feed</p>
        <h1>The wire</h1>
        <p className="desc">
          Announcements, talk, on-chain activity and material Icarus notes across every name,
          newest first. Filter by kind or name without losing your place.
        </p>
      </section>
      <Wire
        items={bundle.wire}
        now={bundle.now}
        allowNameFilter
        filterMeta={{ names: bundle.names, counts: bundle.counts }}
        kind={kind ?? "all"}
        name={name ?? ""}
        onFilter={(next) =>
          navigate({
            search: {
              ...(next.kind === "all" ? {} : { kind: next.kind }),
              ...(next.name ? { name: next.name } : {}),
            },
            replace: true,
            resetScroll: false,
          })
        }
      />
      <nav aria-label="Feed pages" className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        {bundle.page > 1 ? <Link to="/feed" search={{ kind, name, ...(bundle.page > 2 ? { page: bundle.page - 1 } : {}) }}>← Newer</Link> : <span />}
        <span aria-live="polite">{bundle.first}–{bundle.last} of {bundle.total} · Page {bundle.page} of {bundle.pages}</span>
        {bundle.page < bundle.pages ? <Link to="/feed" search={{ kind, name, page: bundle.page + 1 }}>Older →</Link> : <span />}
      </nav>
    </main>
  );
}
