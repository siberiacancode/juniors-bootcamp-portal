'use client';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { SearchIcon, SquareArrowOutUpRightIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { VercelIcon } from '@/components/icons/VercelIcon';
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
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupIconButton,
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

const guidesQueryParams = {
  search: parseAsString.withDefault(''),
  tags: parseAsArrayOf(parseAsString).withDefault([])
};

export const GuidesPageContent = ({ guides, labels }: GuidesPageContentProps) => {
  const intl = useIntl();

  const [queryParams, setQueryParams] = useQueryStates(guidesQueryParams);

  const [searchValue, setSearchValue] = useState(queryParams.search);

  const debouncedSetSearchParam = useDebounceCallback(
    (search: string) => setQueryParams({ search }),
    300
  );

  const onSearchChange = (search: string) => {
    debouncedSetSearchParam(search);
    setSearchValue(search);
  };

  const filteredGuides = guides.filter((guide) => {
    const trimmedSearch = queryParams.search.trim().toLowerCase();
    return (
      (guide.title.toLowerCase().includes(trimmedSearch) ||
        guide.description.toLowerCase().includes(trimmedSearch)) &&
      queryParams.tags.every((tag) => guide.labels.includes(tag))
    );
  });

  const skillsCardOrder = filteredGuides.length >= 2 ? 1 : filteredGuides.length;

  return (
    <section>
      <div className='content-container mb-10 space-y-10'>
        <InputGroup className='w-full sm:w-1/2'>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder={intl.formatMessage({ id: 'page.guides.searchPlaceholder' })}
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          {!!searchValue && (
            <InputGroupAddon align='inline-end'>
              <InputGroupIconButton onClick={() => onSearchChange('')}>
                <XIcon />
              </InputGroupIconButton>
            </InputGroupAddon>
          )}
        </InputGroup>

        <ScrollArea>
          <ChipGroup
            className='sm:flex-wrap'
            type='multiple'
            value={queryParams.tags}
            onValueChange={(tags) => setQueryParams({ tags })}
          >
            {labels.map((filter) => {
              const isNeedful = filter === 'needful';
              return (
                <ChipGroupItem
                  key={filter}
                  value={filter}
                  variant={isNeedful ? 'accent' : 'primary'}
                >
                  {isNeedful ? <IntlText path='page.guides.tag.needful' /> : filter}
                </ChipGroupItem>
              );
            })}

            {!!queryParams.tags.length && (
              <Chip pressed onClick={() => setQueryParams({ tags: [] })}>
                <IntlText path='page.guides.chip.clearAll' />
              </Chip>
            )}
          </ChipGroup>

          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {!filteredGuides.length && (
          <Empty>
            <EmptyHeader>
              <EmptyTitle>
                <IntlText path='page.guides.epmty.title' />
              </EmptyTitle>
              <EmptyDescription>
                <IntlText path='page.guides.epmty.description' />
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>

      <div className='content-container mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {filteredGuides.map((guide, index) => {
          const isNeedfulGuide = guide.labels.includes('needful');
          return (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} style={{ order: index }}>
              <Card
                className={cn(
                  'h-70 gap-2 transition-[color,box-shadow] hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)]',
                  isNeedfulGuide ? 'hover:border-accent' : 'hover:border-secondary'
                )}
              >
                <CardHeader>
                  <span
                    className={cn(
                      'font-pixelify-sans text-4xl',
                      isNeedfulGuide
                        ? 'text-shadow-[2px_1px_0_var(--color-accent)]'
                        : 'text-shadow-[2px_1px_0_var(--color-secondary)]'
                    )}
                  >
                    {guide.number}
                  </span>
                  <CardTitle className='text-2xl'>{guide.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className='line-clamp-3'>{guide.description}</p>
                </CardContent>
                <CardFooter className='mt-auto gap-2'>
                  {guide.labels.map((label) => {
                    const isNeedfulLabel = label === 'needful';
                    return (
                      <Badge key={label} variant={isNeedfulLabel ? 'accent' : 'outline'}>
                        {isNeedfulLabel ? <IntlText path='page.guides.tag.needful' /> : label}
                      </Badge>
                    );
                  })}
                </CardFooter>
              </Card>
            </Link>
          );
        })}
        {!!filteredGuides.length && (
          <Link
            key='skills'
            href='https://skills.sh/siberiacancode/agent-skills'
            rel='noopener noreferrer'
            style={{ order: skillsCardOrder }}
            target='_blank'
          >
            <Card className='h-70 gap-2 transition-[color,box-shadow] hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)]'>
              <CardHeader>
                <span className={cn('inline-flex h-10 items-center gap-2 text-lg text-foreground')}>
                  <VercelIcon className='size-3.5' /> Skills.sh
                  <SquareArrowOutUpRightIcon className='ml-auto size-5' />
                </span>
                <CardTitle className='text-2xl'>
                  <IntlText path='page.guides.skillsCard.title' />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='line-clamp-3'>
                  <IntlText path='page.guides.skillsCard.description' />
                </p>
              </CardContent>
              <CardFooter className='mt-auto'>
                <Badge variant='primary'>ai</Badge>
              </CardFooter>
            </Card>
          </Link>
        )}
      </div>
    </section>
  );
};
