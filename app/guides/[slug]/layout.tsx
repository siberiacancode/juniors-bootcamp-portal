import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';

import { Header } from '@/app/platform/[...slug]/components/Header/Header';
import { IntlText } from '@/components/intl';

import { getShadowColor } from '../helpers';

interface GuidesLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

const getAllGuides = async () => {
  const contentsDir = path.resolve(process.cwd(), 'app/guides/(contents)');
  const files = await fs.promises.readdir(contentsDir);

  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));
  const guides = await Promise.all(
    mdxFiles.map(async (file, index) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`../(contents)/${slug}.mdx`);
      const meta = mod.metadata as GuideMetadata;
      return { slug, title: meta.title, number: index + 1 };
    })
  );
  return guides;
};

export const generateMetadata = async ({ params }: GuidesLayoutProps) => {
  const { slug } = await params;
  const module = await import(`../(contents)/${slug}.mdx`);
  const metadata = module.metadata as GuideMetadata;

  return {
    title: metadata.title,
    description: metadata.description
  };
};

const GuidesLayout = async ({ children, params }: GuidesLayoutProps) => {
  const { slug } = await params;
  const module = await import(`../(contents)/${slug}.mdx`);
  const metadata = module.metadata as GuideMetadata;

  const guides = await getAllGuides();
  const currentIndex = guides.findIndex((g) => g.slug === slug);

  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  const breadcrumbs = [
    {
      path: '/guides',
      title: 'Guides'
    },
    {
      path: `/guides/${slug}`,
      title: metadata.title
    }
  ];

  return (
    <main className='flex flex-1 flex-col'>
      <div className='mx-auto max-w-[var(--max-width)] px-4 py-8'>
        <Header breadcrumbs={breadcrumbs} />

        <div className='mb-8 flex items-center justify-between'>
          <h1 className='font-pixelify-sans text-6xl font-bold'>{metadata.title}</h1>
        </div>
        {children}

        <div className='mt-12 flex flex-col items-center gap-4 md:flex-row'>
          {prevGuide && (
            <Link href={`/guides/${prevGuide.slug}`} className='w-full md:w-auto'>
              <div className='bg-card flex items-center justify-start gap-3 rounded-xl border p-4 transition-all duration-200 hover:scale-101'>
                <ArrowLeftIcon className='size-4' />
                <div
                  className='font-pixelify-sans text-2xl font-bold'
                  style={getShadowColor(prevGuide.number)}
                >
                  {prevGuide.number.toString().padStart(2, '0')}
                </div>
                <h3 className='text-xl font-semibold'>{prevGuide.title}</h3>
              </div>
            </Link>
          )}

          {nextGuide && (
            <Link href={`/guides/${nextGuide.slug}`} className='w-full md:w-auto'>
              <div className='bg-card flex items-center justify-end gap-3 rounded-xl border p-4 transition-all duration-200 hover:scale-101'>
                <div
                  className='font-pixelify-sans text-2xl font-bold'
                  style={getShadowColor(nextGuide.number)}
                >
                  {nextGuide.number.toString().padStart(2, '0')}
                </div>
                <h3 className='text-xl font-semibold'>{nextGuide.title}</h3>
                <ArrowRightIcon className='size-4' />
              </div>
            </Link>
          )}
        </div>

        <Link
          href={`https://github.com/siberiacancode/juniors-bootcamp-portal/edit/main/app/guides/(contents)/${slug}.mdx`}
          className='hover:text-foreground text-muted-foreground mt-6 flex items-center gap-2 text-sm font-semibold transition-colors'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IntlText path='link.editOnGitHub' /> <ExternalLinkIcon className='size-4' />
        </Link>
      </div>
    </main>
  );
};

export default GuidesLayout;
