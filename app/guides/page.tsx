import dynamic from 'next/dynamic';
import fs from 'node:fs';
import { join } from 'node:path';
import { createIntl } from 'react-intl';

import { IntlText } from '@/components/intl';
import { ChipGroupItem, PixelifyIntlText, ScrollArea, ScrollBar } from '@/components/ui';
import ruMessages from '@/public/locale/ru.json';

export async function generateMetadata() {
  const locale = 'ru';

  const intl = createIntl({
    locale,
    messages: ruMessages
  });

  const title = intl.formatMessage({ id: 'page.guides.metadata.title' });
  const description = intl.formatMessage({ id: 'page.guides.metadata.description' });

  return {
    title,
    description
  };
}

interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

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

const SearchInput = dynamic(() => import('./(components)').then((m) => m.SearchInput), {
  loading: () => 'Loading ...'
});

const ChipGroupFilters = dynamic(() => import('./(components)').then((m) => m.ChipGroupFilters), {
  loading: () => 'Loading ...'
});

const GuideCards = dynamic(() => import('./(components)').then((m) => m.GuideCards), {
  loading: () => 'Loading ...'
});

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

      <div className='content-container mb-10 space-y-10'>
        <SearchInput />

        <ScrollArea>
          <ChipGroupFilters>
            {labels.map((filter) => {
              const isNeedful = filter === 'needful';
              return (
                <ChipGroupItem
                  key={filter}
                  value={filter}
                  variant={isNeedful ? 'accent' : 'primary'}
                >
                  {isNeedful ? <IntlText path='page.guides.cardLabel.needful' /> : filter}
                </ChipGroupItem>
              );
            })}
          </ChipGroupFilters>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>

      <div className='content-container mb-24'>
        <GuideCards guides={guides} />
      </div>
    </main>
  );
};

export default GuidesPage;
