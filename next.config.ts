import type { NextConfig } from 'next';

import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          themes: {
            light: 'github-light',
            dark: 'github-dark'
          },
          // ✅ important:
          // load only required languages https://shiki.style/languages
          // to prevent shiki initialization performance starving
          langs: [
            'apache',
            '1c',
            'c',
            'cmake',
            'cpp',
            'c#',
            'css',
            'csv',
            'docker',
            'dotenv',
            'go',
            'graphql',
            'groovy',
            'html',
            'java',
            'javascript',
            'json',
            'jsx',
            'latex',
            'nginx',
            'php',
            'python',
            'regexp',
            'shellscript',
            'sql',
            'swift',
            'tsx',
            'typescript',
            'xml',
            'yaml'
          ],
          defaultColor: false
        }
      ],
      rehypeMdxCodeProps
    ],
    remarkPlugins: [remarkGfm]
  }
});

export default withMDX(nextConfig);
