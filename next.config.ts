import type { NextConfig } from 'next';
import type { ShikiTransformer } from 'shiki';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { OPTIONS_MULTIPLE_THEMES, SUPPORTED_LANGUAGES } from '@/markdown/shiki';

function remarkCodeGroup() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'code-group') {
        node.data = {
          hName: 'CodeGroup',
          hProperties: {}
        };
      }
    });
  };
}

const fileNameRegex = /\[([^\]]+)\]/;

const propsTransformer: ShikiTransformer = {
  pre(node) {
    if (this.options.meta?.__raw) {
      const fileNameMatch = this.options.meta.__raw.match(fileNameRegex);
      if (fileNameMatch) {
        node.properties.fileName = fileNameMatch[1];
        node.properties.language = this.options.lang;
      }
    }

    return node;
  }
};

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['jsx', 'mdx', 'tsx']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          langs: SUPPORTED_LANGUAGES,
          ...OPTIONS_MULTIPLE_THEMES,
          transformers: [
            propsTransformer,
            // https://shiki.style/packages/transformers#transformers
            // Transformers only applies classes and does not come with styles.
            transformerNotationDiff(),
            transformerNotationHighlight()
          ]
        }
      ]
    ],
    remarkPlugins: [remarkGfm, remarkDirective, remarkCodeGroup]
  }
});

export default withMDX(nextConfig);
