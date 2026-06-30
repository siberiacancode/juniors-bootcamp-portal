import type { Root } from 'mdast';
import type { Plugin } from 'unified';

import { defineConfig } from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { REHYPE_SHIKI_OPTIONS } from '@/markdown/shiki';

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

// export const docs = defineDocs({
//   dir: 'content/docs'
// });

export default defineConfig({
  mdxOptions: {
    providerImportSource: '@/markdown',
    remarkPlugins: (plugins) => [remarkGfm, remarkDirective, remarkCodeGroup, ...plugins],
    rehypeCodeOptions: REHYPE_SHIKI_OPTIONS
  }
});
