import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, ShareIcon } from 'lucide-react';
import Link from 'next/link';

import { getDictionary } from '@/app/(contexts)/intl/helpers/getDictionary';
import { IntlText } from '@/components/intl';
import { Button, IconButton } from '@/components/ui';

import type { GuideMetadata } from '../(helpers)/getGuides';

import { getGuides } from '../(helpers)/getGuides';

export const generateStaticParams = async () => {
  const guides = await getGuides();

  return guides.map((guide) => ({
    slug: guide.slug
  }));
};

const locale = 'ru';

export const generateMetadata = async ({ params }: PageProps<'/guides/[slug]'>) => {
  const { slug } = await params;
  const m = await import(`../(contents)/${slug}.mdx`);
  const metadata = m.metadata as GuideMetadata;

  const messages = await getDictionary(locale);

  return {
    title: `${metadata.title} | ${messages['page.guide.metadata.title']}`,
    description: metadata.description,
    keywords: metadata.labels
  };
};

const GuidesPage = async ({ params }: PageProps<'/guides/[slug]'>) => {
  const { slug } = await params;
  const Guide = await import(`../(contents)/${slug}.mdx`);
  const metadata = Guide.metadata as GuideMetadata;

  const guides = await getGuides();
  const currentIndex = guides.findIndex((g) => g.slug === slug);
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

        <h1 className='text-8xl font-extrabold'>{metadata.title}</h1>
      </section>

      <Guide.default />

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
          <IconButton variant='ghost'>
            <ShareIcon />
          </IconButton>
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
