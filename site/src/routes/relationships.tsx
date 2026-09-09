import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getRelationships } from "@/data/content-server";

export const Route = createFileRoute("/relationships")({
  loader: () => getRelationships(),
  head: () => ({ meta: [{ title: "Shared infrastructure · Icarus" }] }),
  component: Relationships,
});

function Relationships() {
  const graph = Route.useLoaderData();
  const [query, setQuery] = useState("");
  const match = (slugs: string[], address = "") => !query || address.toLowerCase().includes(query.toLowerCase()) ||
    slugs.some(slug => `${slug} ${graph.projectNames[slug]}`.toLowerCase().includes(query.toLowerCase()));
  const shared = graph.addresses.filter(n => n.projects.length > 1 && match(n.projects.map(p => p.slug), n.address));
  const dependencies = graph.dependencies.filter(d => d.projects.length > 1 && match(d.projects, d.name));
  return <main className="wrap pb-10 pt-5">
    <h1 className="text-2xl font-semibold">Shared infrastructure</h1>
    <p>Connections from sourced deployments and declared dependencies. A shared contract does not establish common ownership or a common team.</p>
    <label className="block my-4">Find a project or address
      <input className="block w-full mt-2 rounded border p-2 bg-[var(--s1)]" value={query} onChange={e => setQuery(e.target.value)} />
    </label>
    <p>{graph.addresses.length} distinct addresses · {shared.length} matching shared contracts</p>
    {shared.map(node => <section key={node.id} className="border-b py-4">
      <h2 className="text-sm break-all">{node.chain} · {node.address}</h2>
      {node.identityConflict && <p className="text-[var(--warn)]">Identity overlap: multiple records list this as their token. Needs source review.</p>}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 pl-4">
        {node.projects.map(p => <li key={p.slug}>
          <Link to="/n/$slug" params={{ slug: p.slug }}>{graph.projectNames[p.slug] ?? p.slug}</Link>
          <span className="text-[var(--t3)]"> · {p.roles.join(", ")} · {p.verified ? "sourced" : "unconfirmed"}</span>
        </li>)}
      </ul>
    </section>)}
    <h2 className="text-xl mt-8">Common dependencies</h2>
    {dependencies.map(d => <section key={d.id} className="border-b py-3">
      <Link to="/d/$id" params={{ id: d.id }}>{d.name}</Link>
      <p>{d.projects.map((slug, i) => <span key={slug}>{i > 0 ? " · " : ""}<Link to="/n/$slug" params={{ slug }}>{graph.projectNames[slug] ?? slug}</Link></span>)}</p>
    </section>)}
  </main>;
}
