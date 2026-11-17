import type { DocsPage } from '../sources';
import type { LevelName, TaskSettings } from './constants';

import { getDocNeighbours, getDocPage, getDocTree, mapDocTree } from '../helpers';
import { tasksSource } from '../sources';
import { getTaskDocProps, isLevelReached } from './getTaskDocProps';

export type TaskDocLock = { level: LevelName; reason: 'level' } | { reason: 'stack' };

/** Почему страница закрыта для текущих настроек (frontmatter `level` и `stacks`) */
export const getTaskDocLock = (page: DocsPage, settings: TaskSettings): TaskDocLock | null => {
  const { level, stacks } = page.data;
  if (stacks?.length && !stacks.includes(settings.stack)) return { reason: 'stack' };
  if (!isLevelReached(settings.level, level)) return { reason: 'level', level };
  return null;
};

/**
 * Всё для страницы документации задания:
 * контент под настройки, блокировка, дерево сайдбара с пометками, соседи.
 *
 * Если страница закрыта, контент не отдаётся (`doc === null`), есть только `lock`.
 */
export const getTaskDoc = (taskId: string, slug: string[], settings: TaskSettings) => {
  const page = tasksSource.getPage([taskId, ...slug]);
  if (!page) return;

  const lock = getTaskDocLock(page, settings);
  const props = getTaskDocProps(settings);

  const rawTree = getDocTree(tasksSource, `/tasks/${taskId}`);
  const tree = mapDocTree(tasksSource, rawTree, (treePage) => {
    const treeLock = getTaskDocLock(treePage, settings);
    // страницы для другого стека не показываем в сайдбаре вовсе
    if (treeLock?.reason === 'stack') return null;
    return { lock: treeLock };
  });

  return {
    page,
    title: page.data.title,
    description: page.data.description,
    lock,
    doc: lock ? null : getDocPage(tasksSource, [taskId, ...slug], props),
    tree,
    neighbours: getDocNeighbours(rawTree, page.url),
    settings
  };
};

export type TaskDoc = NonNullable<ReturnType<typeof getTaskDoc>>;

/** Все страницы документации заданий для generateStaticParams / sitemap */
export const getTaskDocsParams = () =>
  tasksSource.getPages().map((page) => {
    const [id, ...slug] = page.slugs;
    return { id, slug };
  });
