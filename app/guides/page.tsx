import fs from 'node:fs';
import { join } from 'node:path';

import { IntlText } from '@/components/intl';
import { PixelifyIntlText } from '@/components/ui';

import { getDictionary } from '../(contexts)/intl/helpers/getDictionary';
import { GuidesPageContent } from './(components)';

const locale = 'ru';

export const generateMetadata = async () => {
  const messages = await getDictionary(locale);

  return {
    title: messages['page.guides.metadata.title'],
    description: messages['page.guides.metadata.description']
  };
};

interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

export const dynamic = 'force-dynamic';

const getGuides = async () => {
  const contentDir = join(process.cwd(), 'app', 'guides', '(contents)');
  const files = await fs.promises.readdir(contentDir);
  const guides = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .sort()
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const m = await import(`./(contents)/${slug}.mdx`);
        const metadata = m.metadata as GuideMetadata;

        return {
          number: slug.slice(0, 2),
          slug,
          title: metadata.title,
          description: metadata.description,
          labels: metadata.labels
        };
      })
  );

  return guides;
};

const GuidesPage = async () => {
  const guides = await getGuides();
  const labels = Array.from(new Set(guides.flatMap((guide) => guide.labels)));

  return (
    <main className='mt-10 sm:mt-12'>
      <div className='content-container mb-20 space-y-10'>
        <h1 className='font-nunito text-[56px] font-bold md:text-[170px]'>
          <PixelifyIntlText path='page.guides.title' />
        </h1>
        <p className='text-2xl'>
          <IntlText path='page.guides.description' />
        </p>
      </div>

      <GuidesPageContent guides={guides} labels={labels} />
    </main>
  );
};

export default GuidesPage;
