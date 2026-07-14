import type { Metadata } from 'next';

import { getPageTreeRoots } from 'fumadocs-core/page-tree';

import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { source } from '@/lib/source';

import { DocsCollectionCard } from './_components';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.docs.metadata.title' }),
  description: intl.formatMessage({ id: 'page.docs.metadata.description' })
};

const DocsPage = async () => {
  const roots = getPageTreeRoots(source.getPageTree());

  return (
    <main className='mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
      <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h1' variant='heading-2xl'>
          <IntlText path='page.docs.title' />
        </Typography>
        <Typography as='p' variant='body-lg'>
          <IntlText path='page.docs.description' />
        </Typography>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {roots.map((root) => {
            if (root.type !== 'folder' || !root.root || !root.index) {
              return null;
            }

            return (
              <DocsCollectionCard
                key={root.$id}
                description={root.description}
                href={root.index.url}
                title={root.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default DocsPage;
