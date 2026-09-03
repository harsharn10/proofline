import { createFileRoute } from "@tanstack/react-router";
import { Wire } from "@/components/wire/wire";
import { getContent, wireItems } from "@/data/content-server";

export const Route = createFileRoute("/feed")({
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
  const items = wireItems(bundle);
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
      <Wire items={items} now={bundle.now} allowNameFilter />
    </main>
  );
}
