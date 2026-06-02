import { docs, guides } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

// TODO(MAX): Подумать как помеять alias и нужен ли этот лоадер
export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource()
});

export const guidesSource = loader({
  baseUrl: '/guides',
  source: toFumadocsSource(guides, [])
});
