import type { Metadata } from 'next';

import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { guidesSource } from '@/lib/source';

import { GuidesPageContent } from './_components';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.guides.metadata.title' }),
  description: intl.formatMessage({ id: 'page.guides.metadata.description' })
};

export const dynamic = 'force-dynamic';

const getGuideList = () =>
  guidesSource
    .getPages()
    .filter((page) => page.slugs.length === 1)
    .sort((leftPage, rightPage) => leftPage.slugs[0].localeCompare(rightPage.slugs[0]))
    .map((page) => {
      const slug = page.slugs[0];

      return {
        number: slug.slice(0, 2),
        slug,
        title: page.data.title,
        description: page.data.description ?? '',
        labels: page.data.labels
      };
    });

const GuidesPage = () => {
  const guides = getGuideList();
  const labels = [
    ...new Set(guides.flatMap((guide) => guide.labels).sort((a) => (a === 'needful' ? -1 : 1)))
  ];

  return (
    <main className='mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
      <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h1' variant='display'>
          <IntlText path='page.guides.title' />
        </Typography>
        <Typography as='p' variant='body-lg'>
          <IntlText path='page.guides.description' />
        </Typography>
      </section>

      <GuidesPageContent guides={guides} labels={labels} />
    </main>
  );
};

export default GuidesPage;
