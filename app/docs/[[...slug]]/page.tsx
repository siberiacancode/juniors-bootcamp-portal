import type { Metadata } from 'next';

import { findNeighbour } from 'fumadocs-core/page-tree';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  EditOnGitHub
} from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';

import { getMDXComponents } from '@/components/mdx';
import { docsSource } from '@/lib/source';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug = [] } = await params;
  const page = docsSource.getPage(slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const footerItems = findNeighbour(docsSource.getPageTree(), page.url);

  return (
    <DocsPage
      footer={{
        items: footerItems
      }}
      tableOfContent={{
        enabled: true,
        style: 'clerk'
      }}
      className='docs-page mt-10 mb-22 gap-10 py-0! sm:mt-12'
      toc={page.data.toc}
    >
      <section className='flex flex-col items-start gap-6'>
        <DocsTitle className='text-[36px]! leading-none! font-extrabold! md:text-[96px]!'>
          {page.data.title}
        </DocsTitle>

        {page.data.description ? (
          <DocsDescription className='mb-0! max-w-4xl text-[16px]/6! font-medium! tracking-wide! text-foreground!'>
            {page.data.description}
          </DocsDescription>
        ) : null}
      </section>

      <DocsBody className='docs-body max-w-none flex-none'>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(docsSource, page)
          })}
        />
      </DocsBody>

      <section className='flex flex-col items-start gap-6'>
        <EditOnGitHub href='https://github.com/siberiacancode/juniors-bootcamp-portal/issues/new' />
      </section>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return docsSource.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = docsSource.getPage(slug);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description
  };
}
