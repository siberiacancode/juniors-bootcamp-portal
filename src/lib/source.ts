import { loader } from 'fumadocs-core/source';

import { guides, tasks } from '@/.source/server';

export const guidesSource = loader({
  baseUrl: '/guides',
  source: guides.toFumadocsSource()
});

export const tasksSource = loader({
  source: tasks.toFumadocsSource(),
  baseUrl: '/tasks',
  url: (slugs) => `/tasks/${slugs[0]}`
});
