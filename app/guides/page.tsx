import Link from 'next/link';
import fs from 'node:fs';
import { join } from 'node:path';

import { IntlText } from '@/components/intl';
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  PixelifyIntlText
} from '@/components/ui';

import { SearchInput } from './(components)';
import { getShadowColor } from './helpers';

export const metadata = {
  title: 'Guides - 1001 способ помочь новичкам',
  description:
    'Полезные советы и рекомендации для начинающих разработчиков. Примеры кода, объяснения концепций и лучших практик frontend разработки.'
};

type GuideLabel = 'ai' | 'css' | 'git' | 'javascript' | 'json' | 'needful' | 'react' | 'typescript';

interface GuideMetadata {
  description: string;
  labels: GuideLabel[];
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

const _GuidesPage = async () => {
  const guides = await getGuides();

  return (
    <main className='flex flex-1 flex-col'>
      <div className='px-4 py-8'>
        <div className='mb-12 text-start'>
          <h1 className='mb-4 font-pixelify-sans text-8xl font-bold'>
            <IntlText path='page.guides.title' />
          </h1>
          <p className='text-xl'>
            <IntlText path='page.guides.description' />
          </p>
        </div>

        <div
          className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
          style={{ alignItems: 'stretch' }}
        >
          {guides.map((guide, index) => {
            const number = index + 1;
            const shadowColor = getShadowColor(number);

            return (
              <Link key={number} className='h-full' href={`/guides/${guide.slug}`}>
                <div className='flex h-full flex-col rounded-md border bg-card p-6 transition-all duration-200 hover:scale-101 hover:drop-shadow-[3px_3px_0px_#000]/90 dark:hover:drop-shadow-[3px_3px_0px_#fff]/80'>
                  <div className='relative mb-4 flex items-center gap-4'>
                    <div className='font-pixelify-sans text-4xl font-bold' style={shadowColor}>
                      {number.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className='mb-3 text-xl font-semibold'>{guide.title}</h3>
                  <p className='mb-2 flex-1 text-sm/relaxed text-muted-foreground'>
                    {guide.description}
                  </p>
                  {!!guide.labels.length && (
                    <div className='mt-auto flex flex-wrap gap-2'>
                      {guide.labels.map((label) => (
                        <Badge key={label} className='rounded-sm' variant='outline'>
                          {label}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

const GuidesPage = async () => {
  const guides = await getGuides();

  return (
    <main className='content-contaier mt-10 sm:mt-12'>
      <div className='mb-20 space-y-10'>
        <h1 className='font-nunito text-[56px] font-bold sm:text-[170px]'>
          <PixelifyIntlText path='page.guides.title' />
        </h1>
        <p className='text-2xl'>
          <IntlText path='page.guides.description' />
        </p>
      </div>

      <div className='mb-10'>
        <SearchInput />
      </div>

      <div className='mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {guides.map((guide) => (
          <Card asChild key={guide.slug} className='gap-2 box-layer-md'>
            <Link href={`/guides/${guide.slug}`}>
              <CardHeader>
                <span className='font-pixelify-sans text-4xl text-shadow-[2px_0.5px_0_#000]'>
                  {guide.number}
                </span>
                <CardTitle className='text-2xl wrap-anywhere'>{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className='h-full'>
                <p>{guide.description}</p>
              </CardContent>
              <CardFooter className='gap-2'>
                {guide.labels.map((label) => (
                  <Badge key={label}>{label}</Badge>
                ))}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default GuidesPage;
