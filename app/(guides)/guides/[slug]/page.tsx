import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { getGuideModule, getGuides } from '@/app/(guides)/_helpers';
import { GithubIcon } from '@/components/icons';
import { Button, Typography } from '@/components/ui';
import { intl, IntlText } from '@/intl';

import { ShareButtton } from './_components';

export interface GuidePageParams {
  slug: string;
}

export interface GuidePageProps {
  params: Promise<GuidePageParams>;
}

export const generateStaticParams = async () => {
  const guides = await getGuides();

  return guides.map((guide) => ({
    slug: guide.slug
  }));
};

export const generateMetadata = async ({ params }: GuidePageProps) => {
  const { slug } = await params;
  const { metadata } = await getGuideModule(slug);

  return {
    title: `${metadata.title} | ${intl.formatMessage({ id: 'page.guide.metadata.title' })}`,
    description: metadata.description,
    keywords: metadata.labels
  };
};

const GuidePage = async ({ params }: GuidePageProps) => {
  const { slug } = await params;
  const GuideModule = await getGuideModule(slug);
  const metadata = GuideModule.metadata;

  const guides = await getGuides();
  const currentIndex = guides.findIndex((guide) => guide.slug === slug);
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
          {metadata.title}
        </Typography>
      </section>

      <section>
        <GuideModule.default />
      </section>

      <section className='flex flex-col items-start gap-6'>
        <nav className='flex w-full flex-col items-stretch gap-4 sm:flex-row'>
          {prevGuide && (
            <Button asChild size='lg' variant='outline'>
              <Link href={`/guides/${prevGuide.slug}`}>
                <ChevronLeftIcon />
                {prevGuide.title}
              </Link>
            </Button>
          )}
          {nextGuide && (
            <Button asChild size='lg' variant='outline'>
              <Link href={`/guides/${nextGuide.slug}`}>
                {nextGuide.title}
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
