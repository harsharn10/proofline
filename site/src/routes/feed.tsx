import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Wire } from "@/components/wire/wire";
import { getContent } from "@/data/content-server";
import { isWireKind, type WireKind } from "@/data/types";

type FeedSearch = { kind?: WireKind; name?: string };

export const Route = createFileRoute("/feed")({
  // The wire's filters are route state, not component state: `/feed?name=pons` has to arrive at the
  // reader already narrowed, for a crawler and for a no-JS reader as much as for the deep link.
  validateSearch: (search: Record<string, unknown>): FeedSearch => {
    const name = search.name;
    return {
      ...(isWireKind(search.kind) ? { kind: search.kind } : {}),
      ...(typeof name === "string" && /^[a-z0-9][a-z0-9-]*$/.test(name) ? { name } : {}),
    };
  },
  loader: () => getContent(),
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
    </main>
  );
}
