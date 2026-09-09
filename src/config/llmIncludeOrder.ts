import fs from 'node:fs';
import path from 'node:path';

const preferredDocOrder = [
  'get-to-know-syskit-point',
  'requirements',
  'set-up-point-cloud',
  'set-up-point-enterprise',
  'configuration',
  'governance-and-automation',
  'access-management',
  'microsoft365-inventory',
  'reporting',
  'ai-in-syskit-point',
  'storage-management',
  'point-collaborators',
  'power-platform',
  'integrations',
  'licensing-activation',
  'faq',
  'troubleshooting',
] as const;

const llmExcludedFolders = ['releases'] as const;

export function getLlmIncludeOrder(): string[] {
  const docsRoot = path.resolve(__dirname, '../../docs');

  const discoveredDocFolders = fs
    .readdirSync(docsRoot, {withFileTypes: true})
    .filter((entry) => entry.isDirectory() && !llmExcludedFolders.includes(entry.name as (typeof llmExcludedFolders)[number]))
    .map((entry) => entry.name);

  return [
    'home.mdx',
    ...preferredDocOrder.map((folder) => `${folder}/**`),
    ...[...new Set(discoveredDocFolders)]
      .filter((folder) => !preferredDocOrder.includes(folder as (typeof preferredDocOrder)[number]))
      .sort()
      .map((folder) => `${folder}/**`),
  ];
}
