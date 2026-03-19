import type { NextConfig } from 'next';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { REHYPE_SHIKI_OPTIONS } from './src/markdown/shiki';

const remarkCodeGroup = () => (tree: any) => {
  visit(tree, (node) => {
    if (node.type === 'containerDirective' && node.name === 'code-group') {
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
