import { ChevronLeftIcon, ChevronRightIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';

import { LOCALE } from '@/app/(constants)';
import { getDictionary } from '@/app/(contexts)/intl/helpers/getDictionary';
import { IntlText } from '@/components/intl';
import { Button } from '@/components/ui';

import type { GuideMetadata } from '../(helpers)/getGuides';

import { getGuides } from '../(helpers)/getGuides';
import { ShareButtton } from './(components)/ShareButton';

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
  const Guide = await import(`../../../public/contents/guides/${slug}.mdx`);
  const metadata = Guide.metadata as GuideMetadata;

  const messages = await getDictionary(LOCALE);

  return {
    title: `${metadata.title} | ${messages['page.guide.metadata.title']}`,
    description: metadata.description,
    keywords: metadata.labels
  };
};

const GuidesPage = async ({ params }: GuidePageProps) => {
  const { slug } = await params;
  const Guide = await import(`../../../public/contents/guides/${slug}.mdx`);
  const metadata = Guide.metadata as GuideMetadata;

  const guides = await getGuides();
  const currentIndex = guides.findIndex((guide) => guide.slug === slug);
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  return (
    <main className='content-container mt-10 mb-22 flex flex-col gap-10 sm:mt-12'>
      <section className='flex flex-col items-start gap-6'>
        <Button asChild size='sm' variant='ghost'>
          <Link href='/guides'>
            <ChevronLeftIcon />
            Назад
          </Link>
        </Button>

        <h1 className='text-4xl font-extrabold sm:text-8xl'>{metadata.title}</h1>
      </section>

      <section>
        <Guide.default />
      </section>

      <section className='flex flex-col items-start gap-6'>
        <div className='flex w-full items-center justify-between'>
          <nav className='flex items-center gap-4'>
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
          <ShareButtton />
        </div>

        <Button asChild variant='ghost'>
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

export default GuidesPage;
