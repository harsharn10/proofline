// Narrow, repeatable canonical repair. Historical packets, measurements and approvals stay intact.
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseDocument } from 'yaml';
import { loadContent } from './lib/load.mjs';
import { buildRelationships, relationshipIndex, referenceReason } from './lib/relationships.mjs';

export async function repairReferenceRoles({ root = 'content', write = false } = {}) {
  const content = await loadContent(root);
  const index = relationshipIndex(buildRelationships([], [...content.dependencies.values()]));
  const changes = [];
  const writes = [];
  for (const project of content.projects.values()) {
    const path = `${root}/projects/${project.slug}.yaml`;
    const text = await readFile(path, 'utf8');
    const doc = parseDocument(text);
    for (const [i, d] of (project.deployments ?? []).entries()) {
      const reason = referenceReason(d, index);
      if (d.role !== 'token' || !reason) continue;
      const sources = new Set((content.sources.get(project.slug)?.sources ?? []).map(s => s.id));
      if (!d.sources?.length || !d.sources.every(id => sources.has(id)))
        throw new Error(`${project.slug}: reference repair needs existing source receipts`);
      changes.push({ slug: project.slug, address: d.address, label: d.label, sources: d.sources, reason });
      doc.setIn(['deployments', i, 'role'], 'other');
    }
    if (JSON.stringify(doc.toJS()) !== JSON.stringify(project)) writes.push([path, doc.toString({ lineWidth: 0 })]);
  }
  if (write) for (const [path, text] of writes) await writeFile(path, text);
  return { write, files: writes.length, changes };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  if (process.argv.slice(2).some(arg => !['--check', '--write'].includes(arg))) throw new Error('Use --check or --write');
  console.log(JSON.stringify(await repairReferenceRoles({ write: process.argv.includes('--write') }), null, 2));
}
