import type { Root } from 'mdast';
import type { NextConfig } from 'next';
import type { Plugin } from 'unified';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

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

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['jsx', 'mdx', 'tsx']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypeShiki, REHYPE_SHIKI_OPTIONS]],
    remarkPlugins: [remarkGfm, remarkDirective, remarkCodeGroup]
  }
});

export default withMDX(nextConfig);
