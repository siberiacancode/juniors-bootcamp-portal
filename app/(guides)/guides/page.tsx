import { intl } from '@/app/(contexts)/intl/helpers/getDictionary';
import { getGuides } from '@/app/(guides)/_helpers/getGuides';
import { IntlText } from '@/components/intl';
import { Typography } from '@/components/ui';

import { GuidesPageContent } from './_components';

export const generateMetadata = async () => ({
  title: intl.formatMessage({ id: 'page.guides.metadata.title' }),
  description: intl.formatMessage({ id: 'page.guides.metadata.description' })
});

export const dynamic = 'force-dynamic';

const GuidesPage = async () => {
  const guides = await getGuides();
  const labels = [
    ...new Set(guides.flatMap((guide) => guide.labels).sort((a) => (a === 'needful' ? -1 : 1)))
  ];

  return (
    <main className='content-container mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
      <section className='flex flex-col gap-8 sm:gap-10'>
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
