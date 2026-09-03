import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { DOSSIER_TABS, Dossier, type DossierTab } from "@/components/dossier";
import { getDossier } from "@/data/content-server";
import { readerCopy } from "@/lib/dejargon";

export const Route = createFileRoute("/n/$slug")({
  // URL-synced card tabs. Commentary is the clean default URL; legacy or unknown values fall back.
  validateSearch: (search: Record<string, unknown>): { tab?: DossierTab } => {
    const tab = search.tab;
    if (typeof tab === "string" && tab !== "commentary" && (DOSSIER_TABS as readonly string[]).includes(tab)) {
      return { tab: tab as DossierTab };
    }
    return {};
  },
  loader: async ({ params }) => {
    const result = await getDossier({ data: params.slug });
    const { dossier, ...rest } = result;
    if (!dossier) throw notFound();
    return { dossier, ...rest };
  },
  // One title mechanism site-wide: route head(), rendered by <HeadContent /> in __root.tsx.
  head: ({ loaderData }) => ({
    meta: loaderData?.dossier
      ? [
          { title: `${loaderData.dossier.name} · Icarus` },
          { name: "description", content: readerCopy(loaderData.dossier.summary) },
        ]
      : [],
  }),
  component: NamePage,
  notFoundComponent: () => (
    <main className="wrap narrow pb-10">
      <p className="eyebrow">Not on file</p>
      <h1 className="text-2xl font-bold tracking-tight">That name is not in the file yet.</h1>
      <p className="honest mt-3 max-w-prose">
        Send the ticker and we will research it: overview, links, and a feed of project posts plus
        commentary.
      </p>
      <Link to="/" className="backlink mt-6">
        ← back to the file
      </Link>
    </main>
  ),
});

function NamePage() {
  const { dossier, site, dependencies, tree, section, now, related } = Route.useLoaderData();
  const { tab } = Route.useSearch();
  return (
    <>
      <Dossier
        dossier={dossier}
        site={site}
        dependencies={dependencies}
        tree={tree}
        section={section}
        now={now}
        tab={tab ?? "commentary"}
        related={related}
      />
    </>
  );
}
