import rehypeShiki from '@shikijs/rehype';
import { pageSchema } from 'fumadocs-core/source/schema';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';
import { z } from 'zod';

import { TASK_LEVELS, TASK_STACKS } from './src/docs/tasks/constants';
import { remarkCodeGroup } from './src/markdown/plugins';
import { REHYPE_SHIKI_OPTIONS } from './src/markdown/shiki';

export default defineConfig({
  mdxOptions: {
    // подсветку делает наш shiki с трансформерами, встроенную отключаем
    rehypeCodeOptions: false,
    remarkPlugins: [remarkDirective, remarkCodeGroup],
    rehypePlugins: [[rehypeShiki, REHYPE_SHIKI_OPTIONS]]
  }
});

/**
 * Документация заданий: content/tasks/<id>/*.mdx → /tasks/<id>/<slug>
 *
 * frontmatter:
 * - level — с какого уровня страница открыта (по умолчанию junior)
 * - stacks — страница только для этих стеков (по умолчанию для всех)
 */
export const tasks = defineDocs({
  dir: 'content/tasks',
  docs: {
    schema: pageSchema.extend({
      level: z.enum(TASK_LEVELS).default('junior'),
      stacks: z.array(z.enum(TASK_STACKS)).optional()
    })
  }
});
