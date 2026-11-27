import { guidesSource } from '@/lib/source';

export const getGuides = async () =>
  guidesSource
    .getPages()
    .sort((a, b) => a.slugs[0].localeCompare(b.slugs[0]))
    .map((page) => ({
      number: page.slugs[0].slice(0, 2),
      slug: page.slugs[0],
      title: page.data.title,
      description: page.data.description,
      labels: page.data.labels
    }));
