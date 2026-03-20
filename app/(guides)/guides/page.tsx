import { LOCALE } from '@/app/(constants)';
import { getDictionary } from '@/app/(contexts)/intl/helpers/getDictionary';
import { getGuides } from '@/app/(guides)/_helpers/getGuides';
import { IntlText } from '@/components/intl';
import { PixelifyIntlText } from '@/components/ui';

import { GuidesPageContent } from './_components';

export const generateMetadata = async () => {
  const messages = await getDictionary(LOCALE);

  return {
    title: messages['page.guides.metadata.title'],
    description: messages['page.guides.metadata.description']
  };
};

export const dynamic = 'force-dynamic';

const GuidesPage = async () => {
  const guides = await getGuides();
  const labels = [
    ...new Set(guides.flatMap((guide) => guide.labels).sort((a) => (a === 'needful' ? -1 : 1)))
  ];

  return (
    <main className='content-container mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
      <section className='flex flex-col gap-8 sm:gap-10'>
        <h1 className='font-nunito text-[56px] leading-none font-bold md:text-[170px]'>
          <PixelifyIntlText path='page.guides.title' />
        </h1>
        <p className='text-2xl'>
          <IntlText path='page.guides.description' />
        </p>
      </section>

      <GuidesPageContent guides={guides} labels={labels} />
    </main>
  );
};

export default GuidesPage;
