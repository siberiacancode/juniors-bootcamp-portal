import type { MDXContent } from 'mdx/types';

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

export const getGuideModule = (slug: string) =>
  import(`../../../public/contents/guides/${slug}.mdx`) as Promise<GuideModule>;
