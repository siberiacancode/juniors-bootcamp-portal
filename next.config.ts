import type { NextConfig } from 'next';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

import { OPTIONS_MULTIPLE_THEMES, SUPPORTED_LANGUAGES } from '@/lib/shiki';

export function remarkCodeGroup() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (node.type === 'containerDirective' && node.name === 'code-group') {
        node.data = {
          hName: 'CodeGroup',
          hProperties: {}
        };
      }
    });
  };
}

const propsTransformer = {
  name: 'code-block-props',
  // Этот метод вызывается для корневого элемента <pre>
  pre(node) {
    const meta = this.options.meta?.__raw || '';
    // Регулярка выцепляет все пары ключ="значение" или ключ='значение'
    const matches = meta.matchAll(/(\w+)=['"](.*?)['"]/g);

    for (const match of matches) {
      const [_, key, value] = match;
      // Добавляем их как data-атрибуты, чтобы они дошли до React-компонента
      node.properties[`${key}`] = value;
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
          transformers: [propsTransformer]
        }
      ]
    ],
    remarkPlugins: [remarkDirective, remarkCodeGroup]
    // remarkPlugins: [remarkGfm]
  }
});

export default withMDX(nextConfig);
