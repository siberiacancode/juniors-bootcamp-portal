import type { MDXContent } from 'mdx/types';

import { cache } from 'react';

import 'server-only';

export interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

export interface GuideModule {
  default: MDXContent;
  metadata: GuideMetadata;
}

export const getGuideModule = cache(
  (slug: string) => import(`../../../public/contents/guides/${slug}.mdx`) as Promise<GuideModule>
);
