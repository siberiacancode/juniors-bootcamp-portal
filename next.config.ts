import type { NextConfig } from 'next';

import { createMDX } from 'fumadocs-mdx/next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['jsx', 'mdx', 'tsx']
};

const withMDX = createMDX();
export default withMDX(nextConfig);
