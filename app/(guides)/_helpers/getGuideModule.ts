import { notFound } from 'next/navigation';

import { guidesSource } from '@/lib/source';

import 'server-only';

export const getGuideModule = async (slug: string) => {
  const page = guidesSource.getPage([slug]);

  if (!page) notFound();

  return {
    default: page.data.body,
    metadata: {
      title: page.data.title,
      description: page.data.description,
      labels: page.data.labels
    }
  };
};
