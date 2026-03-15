import type { NextConfig } from 'next';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';

import { OPTIONS_MULTIPLE_THEMES, SUPPORTED_LANGUAGES } from '@/lib/shiki';

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
          ...OPTIONS_MULTIPLE_THEMES
        }
      ]
    ]
    // remarkPlugins: [remarkGfm]
  }
});

export default withMDX(nextConfig);
