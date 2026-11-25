import type { NextConfig } from 'next';

import { createMDX } from 'fumadocs-mdx/next';
import { PHASE_PRODUCTION_SERVER } from 'next/constants';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  pageExtensions: ['jsx', 'mdx', 'tsx']
};

const withMDX = createMDX();

// `next start` берёт уже собранный контент: source.config.ts и content/ в рантайме не нужны
const config = (phase: string) =>
  phase === PHASE_PRODUCTION_SERVER ? nextConfig : withMDX(nextConfig);

export default config;
