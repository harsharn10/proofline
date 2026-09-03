import { NameCard } from "@/components/card/name-card";
import type {
  DependencyRef,
  Dossier as DossierData,
  DossierBundle,
  SectionDef,
  SiteConfig,
  TreeRef,
} from "@/data/types";

export const DOSSIER_TABS = ["contracts", "control", "sources"] as const;
// `commentary` remains a type-level legacy input for the old feed component; the route no longer
// accepts it and the visible card tabs are exactly the three Details views above.
export type DossierTab = (typeof DOSSIER_TABS)[number] | "commentary";

export function Dossier({
  dossier,
  site,
  dependencies,
  tree,
  section,
  tab,
  now,
  related,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  tree: TreeRef | null;
  section: SectionDef | null;
  tab: DossierTab;
  now: number;
  related: DossierBundle["related"];
}) {
  return (
    <NameCard
      dossier={dossier}
      site={site}
      dependencies={dependencies}
      tree={tree}
      section={section}
      tab={tab}
      now={now}
      related={related}
    />
  );
}
