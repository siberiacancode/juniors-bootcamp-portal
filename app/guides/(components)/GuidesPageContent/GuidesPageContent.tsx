'use client';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs';
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

const guidesSearchParams = {
  search: parseAsString.withDefault(''),
  tags: parseAsArrayOf(parseAsString).withDefault([])
};

export const GuidesPageContent = ({ guides, labels }: GuidesPageContentProps) => {
  const intl = useIntl();

  const [searchParams, setSearchParams] = useQueryStates(guidesSearchParams);

  const onSearchChange = useDebounceCallback((search: string) => setSearchParams({ search }), 400);

  const filteredGuides = guides.filter((guide) => {
    const trimmedSearch = searchParams.search.trim().toLowerCase();
    return (
      (guide.title.toLowerCase().includes(trimmedSearch) ||
        guide.description.toLowerCase().includes(trimmedSearch)) &&
      searchParams.tags.every((tag) => guide.labels.includes(tag))
    );
  });

  return (
    <section>
      <div className='content-container mb-10 space-y-10'>
        <InputGroup className='w-full sm:w-1/2'>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            defaultValue={searchParams.search}
            placeholder={intl.formatMessage({ id: 'page.guides.searchPlaceholder' })}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </InputGroup>

        <ScrollArea>
          <ChipGroup
            className='sm:flex-wrap'
            type='multiple'
            value={searchParams.tags}
            onValueChange={(tags: string[]) => setSearchParams({ tags })}
          >
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

            {!!searchParams.tags.length && (
              <Chip pressed onClick={() => setSearchParams({ tags: [] })}>
                <IntlText path='page.guides.chip.clearAll' />
              </Chip>
            )}
          </ChipGroup>

          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {!filteredGuides.length && (
          <p className='text-center text-lg'>
            <IntlText path='page.guides.badFilters' />
          </p>
        )}
      </div>

      <div className='content-container mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {filteredGuides.map((guide) => {
          const isNeedfulGuide = guide.labels.includes('needful');
          return (
            <Link key={guide.slug} className='flex' href={`/guides/${guide.slug}`}>
              <Card
                className={cn(
                  'gap-2 transition-[color,box-shadow] hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)]',
                  isNeedfulGuide ? 'hover:border-accent' : 'hover:border-secondary'
                )}
              >
                <CardHeader>
                  <span
                    className={cn(
                      'font-pixelify-sans text-4xl text-shadow-[2px_1px_0_var(--color-foreground)]',
                      isNeedfulGuide ? 'text-shadow-accent' : 'text-shadow-secondary'
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
                  {guide.labels.map((label) => {
                    const isNeedfulLabel = label === 'needful';
                    return (
                      <Badge key={label} variant={isNeedfulLabel ? 'accent' : 'outline'}>
                        {isNeedfulLabel ? <IntlText path='page.guides.cardLabel.needful' /> : label}
                      </Badge>
                    );
                  })}
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
