'use client';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs';
import { useIntl } from 'react-intl';

import { IntlText } from '@/components/intl';
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Chip,
  ChipGroup,
  ChipGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  ScrollArea,
  ScrollBar
} from '@/components/ui';
import { cn } from '@/lib/utils';

interface Guide {
  description: string;
  labels: string[];
  number: string;
  slug: string;
  title: string;
}
interface GuidesPageContentProps {
  guides: Guide[];
  labels: string[];
}

export const GuidesPageContent = ({ guides, labels }: GuidesPageContentProps) => {
  const intl = useIntl();

  const [tags, setTags] = useQueryState('tags', parseAsArrayOf(parseAsString).withDefault([]));
  const [search, setSearch] = useQueryState('search', parseAsString.withDefault(''));

  const debouncedSetSearch = useDebounceCallback(setSearch, 400);

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(search.trim().toLowerCase()) &&
      tags.every((tag) => guide.labels.includes(tag))
  );

  return (
    <>
      <div className='content-container mb-10 space-y-10'>
        <InputGroup className='w-full sm:w-1/2'>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            defaultValue={search}
            placeholder={intl.formatMessage({ id: 'page.guides.searchPlaceholder' })}
            onChange={(e) => debouncedSetSearch(e.target.value)}
          />
        </InputGroup>

        <ScrollArea>
          <ChipGroup className='sm:flex-wrap' type='multiple' value={tags} onValueChange={setTags}>
            {tags.length > 0 && (
              <Chip pressed onClick={() => setTags([])}>
                <IntlText path='page.guides.chip.clearAll' />
              </Chip>
            )}

            {labels.map((filter) => {
              const isNeedful = filter === 'needful';
              return (
                <ChipGroupItem
                  key={filter}
                  value={filter}
                  variant={isNeedful ? 'accent' : 'primary'}
                >
                  {isNeedful ? <IntlText path='page.guides.cardLabel.needful' /> : filter}
                </ChipGroupItem>
              );
            })}
          </ChipGroup>

          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {filteredGuides.length === 0 && (
          <p className='text-center text-lg'>
            <IntlText path='page.guides.badFilters' />
          </p>
        )}
      </div>

      <div className='content-container mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
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
