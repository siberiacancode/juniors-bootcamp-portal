import { loader } from 'fumadocs-core/source';

import { tasks } from '@/.source/server';

/**
 * Один loader на одну коллекцию из `source.config.ts`.
 * Новый раздел документации: `defineDocs` в source.config.ts + loader здесь.
 */
export const tasksSource = loader({
  baseUrl: '/tasks',
  source: tasks.toFumadocsSource()
});

export type DocsSource = typeof tasksSource;
export type DocsPage = ReturnType<DocsSource['getPages']>[number];
