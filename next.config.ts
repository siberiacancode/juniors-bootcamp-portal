import type { NextConfig } from 'next';

import { createMDX } from 'fumadocs-mdx/next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['jsx', 'mdx', 'tsx'] //TODO(MAX): Под вопросом
};

const withMDX = createMDX({
  configPath: 'source.config.ts' //TODO(MAX): Возможно это поле не нужно
});

export default withMDX(nextConfig);
