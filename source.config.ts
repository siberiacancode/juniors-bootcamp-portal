import rehypeShiki from '@shikijs/rehype';
import { pageSchema } from 'fumadocs-core/source/schema';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';
import { z } from 'zod';

import { remarkCodeGroup } from './src/markdown/plugins';
import { REHYPE_SHIKI_OPTIONS } from './src/markdown/shiki';

export const tasks = defineDocs({ dir: 'public/content/tasks' });

export const guides = defineDocs({
  dir: 'public/contents/guides',
  docs: {
    schema: pageSchema.extend({
      description: z.string(),
      labels: z.array(z.string())
    })
  }
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: false,
    remarkPlugins: [remarkDirective, remarkCodeGroup],
    rehypePlugins: [[rehypeShiki, REHYPE_SHIKI_OPTIONS]]
  }
});
