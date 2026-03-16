import type { NextConfig } from 'next';
import type { ShikiTransformer } from 'shiki';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { OPTIONS_MULTIPLE_THEMES, SUPPORTED_LANGUAGES } from './src/markdown/shiki';

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

const attrsRegex = /([a-z_][\w-]*)(=(["'])(.*?)\3)?/gi;
const attrsMatchRegex = /\{([^}]*)\}/;
export const transformerProps: ShikiTransformer = {
  pre(node) {
    const rawMeta = this.options.meta?.__raw;
    if (!rawMeta) return node;

    const attrsMatch = rawMeta.match(attrsMatchRegex);
    if (!attrsMatch) {
      node.properties ??= {};
      node.properties.language = this.options.lang;
      return node;
    }

    const [attrs] = attrsMatch;
    node.properties ??= {};

    for (const match of attrs.matchAll(attrsRegex)) {
      const key = match[1];
      const value = match[4];
      if (!key) continue;

      node.properties[key] = value ?? true;
    }

    node.properties.language = this.options.lang;

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
            transformerProps
            // https://shiki.style/packages/transformers#transformers
            // Transformers only applies classes and does not come with styles; you can provide your own CSS rules to style them properly.
            // transformerNotationDiff(),
            // transformerNotationHighlight(),
            // transformerNotationWordHighlight()
          ]
        }
      ]
    ],
    remarkPlugins: [remarkGfm, remarkDirective, remarkCodeGroup]
  }
});

export default withMDX(nextConfig);
