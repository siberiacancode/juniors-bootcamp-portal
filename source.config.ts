import rehypeShiki from '@shikijs/rehype';
import { defineConfig } from 'fumadocs-mdx/config';
import remarkDirective from 'remark-directive';

import { remarkCodeGroup } from './src/markdown/plugins';
import { REHYPE_SHIKI_OPTIONS } from './src/markdown/shiki';

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: false,
    remarkPlugins: [remarkDirective, remarkCodeGroup],
    rehypePlugins: [[rehypeShiki, REHYPE_SHIKI_OPTIONS]]
  }
});
