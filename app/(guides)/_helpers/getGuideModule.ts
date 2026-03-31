import type { MDXContent } from 'mdx/types';

export interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

export interface GuideModule {
  default: MDXContent;
  metadata: GuideMetadata;
}

export const getGuideModule = async (slug: string) =>
  import(`../../../public/contents/guides/${slug}.mdx`) as Promise<GuideModule>;
