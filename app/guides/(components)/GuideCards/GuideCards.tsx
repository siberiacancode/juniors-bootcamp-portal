'use client';

import Link from 'next/link';

import { IntlText } from '@/components/intl';
import { Badge, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';

import { useSearchQueryState, useTagsQueryState } from '../../(hooks)';

interface Guide {
  description: string;
  labels: string[];
  number: string;
  slug: string;
  title: string;
}

export const GuideCards = ({ guides }: { guides: Guide[] }) => {
  const [search] = useSearchQueryState();
  const [tags] = useTagsQueryState();

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(search.trim().toLowerCase()) &&
      tags.every((tag) => guide.labels.includes(tag))
  );

  return (
    <>
      {filteredGuides.length === 0 && (
        <p className='text-center text-lg'>
          <IntlText path='page.guides.badFilters' />
        </p>
      )}

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {filteredGuides.map((guide) => (
          <Card
            asChild
            key={guide.slug}
            className={cn(
              'gap-2 transition-[color,box-shadow] hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)]',
              guide.labels.includes('needful') ? 'hover:border-accent' : 'hover:border-secondary'
            )}
          >
            <Link href={`/guides/${guide.slug}`}>
              <CardHeader>
                <span
                  className={cn(
                    'font-pixelify-sans text-4xl text-shadow-[2px_1px_0_var(--color-foreground)]',
                    guide.labels.includes('needful')
                      ? 'text-shadow-accent'
                      : 'text-shadow-secondary'
                  )}
                >
                  {guide.number}
                </span>
                <CardTitle className='text-2xl'>{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className='h-full'>
                <p>{guide.description}</p>
              </CardContent>
              <CardFooter className='gap-2'>
                {guide.labels.map((label) => (
                  <Badge key={label} variant={label === 'needful' ? 'accent' : 'outline'}>
                    {label === 'needful' ? (
                      <IntlText path='page.guides.cardLabel.needful' />
                    ) : (
                      label
                    )}
                  </Badge>
                ))}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};
