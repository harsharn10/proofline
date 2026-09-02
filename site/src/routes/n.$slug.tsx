import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { DOSSIER_TABS, Dossier, type DossierTab } from "@/components/dossier";
import { getDossier } from "@/data/content-server";

export const Route = createFileRoute("/n/$slug")({
  // URL-synced tabs on a full record: /n/<slug>?tab=evidence. Overview is the clean default URL;
  // anything unrecognized falls back to it. An initial-research page has no tabs and ignores it.
  validateSearch: (search: Record<string, unknown>): { tab?: DossierTab } => {
    const tab = search.tab;
    if (typeof tab === "string" && tab !== "overview" && (DOSSIER_TABS as readonly string[]).includes(tab)) {
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
  const { dossier, site, dependencies, peers, tree, section, now } = Route.useLoaderData();
  const { tab } = Route.useSearch();
  return (
    <>
      <div className="wrap narrow pt-3">
        <Link to="/" className="backlink">
          ← all names
        </Link>
      </div>
      <Dossier
        dossier={dossier}
        site={site}
        dependencies={dependencies}
        peers={peers}
        tree={tree}
        section={section}
        now={now}
        tab={dossier.coverage === "full" ? (tab ?? "overview") : "overview"}
      />
    </>
  );
}
