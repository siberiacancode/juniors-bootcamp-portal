import type { Metadata } from 'next';

import { getPageTreeRoots } from 'fumadocs-core/page-tree';

import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { source } from '@/lib/source';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.docs.metadata.title' }),
  description: intl.formatMessage({ id: 'page.docs.metadata.description' })
};

export const dynamic = 'force-dynamic';

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
        {roots.map((root) => (
          <a key={String(root.name)}>
            <h2>{root.name}</h2>
            <p>{root.description}</p>
          </a>
        ))}
      </section>
    </main>
  );
};

export default DocsPage;
