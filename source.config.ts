import type { Root } from 'mdast';
import type { Plugin } from 'unified';

import { pageSchema } from 'fumadocs-core/source/schema';
import { defineCollections, defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { z } from 'zod';

import { REHYPE_SHIKI_OPTIONS } from './src/markdown/shiki';

const remarkCodeGroup: Plugin<void[], Root> = () => (tree) => {
  visit(tree, 'containerDirective', (node) => {
    if (node.name === 'code-group') {
      node.data = {
        hName: 'CodeGroup',
        hProperties: {}
      };
    }
  });
};

const labelsSchema = {
  labels: z.array(z.string()).default([])
};

export const docs = defineDocs({
  dir: 'public/contents/docs',
  docs: {
    schema: pageSchema.extend(labelsSchema)
  }
});

export const guides = defineCollections({
  type: 'doc',
  dir: 'public/contents/guides',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    labels: z.array(z.string()).default([])
  })
});

export default defineConfig({
  mdxOptions: {
    providerImportSource: '@/components/mdx',
    remarkPlugins: [remarkDirective, remarkCodeGroup],
    rehypeCodeOptions: REHYPE_SHIKI_OPTIONS
  }
});
