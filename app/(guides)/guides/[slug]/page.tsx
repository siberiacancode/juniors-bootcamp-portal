import type { Metadata } from 'next';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { GithubIcon } from '@/components/icons';
import { getMDXComponents } from '@/components/mdx';
import { Button, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { guidesSource } from '@/lib/source';

import { ShareButtton } from './_components';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getGuidePages = () =>
  guidesSource
    .getPages()
    .filter((page) => page.slugs.length === 1)
    .sort((leftPage, rightPage) => leftPage.slugs[0].localeCompare(rightPage.slugs[0]));

export function generateStaticParams() {
  return getGuidePages().map((page) => ({
    slug: page.slugs[0]
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = guidesSource.getPage([slug]);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: page.data.labels
  };
}

const GuidePage = async ({ params }: GuidePageProps) => {
  const { slug } = await params;
  const page = guidesSource.getPage([slug]);

  if (!page) notFound();

  const MDX = page.data.body;
  const guides = getGuidePages();
  const currentIndex = guides.findIndex((guide) => guide.slugs[0] === slug);
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  return (
    <main className='content-container mt-10 mb-22 flex flex-col gap-10 sm:mt-12'>
      <section className='flex flex-col items-start gap-6'>
        <div className='flex w-full items-center justify-between'>
          <Button asChild size='sm' variant='ghost'>
            <Link href='/guides'>
              <ChevronLeftIcon />
              <IntlText path='link.goBack' />
            </Link>
          </Button>

          <ShareButtton />
        </div>

        <Typography as='h1' variant='heading-2xl'>
          {page.data.title}
        </Typography>
      </section>

      <section>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(guidesSource, page)
          })}
        />
      </section>

      <section className='flex flex-col items-start gap-6'>
        <nav className='flex w-full flex-col items-stretch gap-4 sm:flex-row'>
          {prevGuide && (
            <Button asChild size='lg' variant='outline'>
              <Link href={`/guides/${prevGuide.slugs[0]}`}>
                <ChevronLeftIcon />
                {prevGuide.data.title}
              </Link>
            </Button>
          )}
          {nextGuide && (
            <Button asChild size='lg' variant='outline'>
              <Link href={`/guides/${nextGuide.slugs[0]}`}>
                {nextGuide.data.title}
                <ChevronRightIcon />
              </Link>
            </Button>
          )}
        </nav>

        <Button asChild className='w-full sm:w-fit' variant='ghost'>
          <Link
            href='https://github.com/siberiacancode/juniors-bootcamp-portal/issues/new'
            rel='noopener noreferrer'
            target='_blank'
          >
            <IntlText path='link.editOnGitHub' /> <GithubIcon className='size-4' />
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default GuidePage;
