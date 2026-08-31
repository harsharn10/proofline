import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Dossier } from "@/components/dossier";
import { getDossier } from "@/data/content-server";

export const Route = createFileRoute("/n/$slug")({
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
        Send the ticker and we will research it — overview, links, and a feed of project posts plus
        commentary.
      </p>
      <Link to="/" className="backlink mt-6">
        ← back to the file
      </Link>
    </main>
  ),
});

function NamePage() {
  // The loader also carries `accounts` (handle/tier/role for the handles this feed cites — never a
  // note); the dossier reads its trending handles from derived.trendingAccounts and does not need it.
  const { dossier, site, dependencies } = Route.useLoaderData();
  return (
    <>
      <div className="wrap narrow pt-3">
        <Link to="/" className="backlink">
          ← all names
        </Link>
      </div>
      <Dossier dossier={dossier} site={site} dependencies={dependencies} />
    </>
  );
}
