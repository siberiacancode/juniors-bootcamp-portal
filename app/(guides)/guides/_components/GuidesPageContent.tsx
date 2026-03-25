'use client';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { ExternalLinkIcon, SearchIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { FullVercelIcon } from '@/components/icons/FullVercelIcon';
import { IntlText } from '@/components/intl';
import {
  Badge,
  Card,
  Chip,
  ChipGroup,
  ChipGroupItem,
  Empty,
  EmptyDescription,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupIconButton,
  InputGroupInput,
  ScrollArea,
  ScrollBar,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { yandexMetrika } from '@/lib/yandex-metrika';

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

  const debouncedSetSearchParam = useDebounceCallback((search: string) => {
    setQueryParams({ search });
    yandexMetrika({
      eventName: 'reachGoal',
      target: 'guide_search_input',
      params: { search }
    });
  }, 300);

  const onSearchChange = (search: string) => {
    debouncedSetSearchParam(search);
    setSearchValue(search);
  };

  const onChipClick = (tags: string[]) => {
    setQueryParams({ tags });

    const tag = tags.find((tag) => !queryParams.tags.includes(tag))!;
    if (!tag) return;
    yandexMetrika({
      eventName: 'reachGoal',
      target: 'guide_badge_click',
      params: { tag }
    });
  };

  const onClearAllChipClick = () => setQueryParams({ tags: [] });
  const onClearSearchClick = () => {
    setSearchValue('');
    setQueryParams({ search: '' });
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
    <section className='flex flex-col gap-8 sm:gap-10'>
      <div className='flex flex-col gap-6 sm:gap-10'>
        <InputGroup className='w-full sm:w-1/2'>
          <InputGroupAddon align='start'>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder={intl.formatMessage({ id: 'page.guides.searchPlaceholder' })}
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          {!!searchValue && (
            <InputGroupAddon align='end'>
              <InputGroupIconButton onClick={onClearSearchClick}>
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
            onValueChange={onChipClick}
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
              <Chip
                pressed
                key='clear-all-chip'
                className='order-first sm:order-last'
                onClick={onClearAllChipClick}
              >
                <IntlText path='page.guides.chip.clearAll' />
              </Chip>
            )}
          </ChipGroup>

          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {!filteredGuides.length && (
          <Empty>
            <EmptyTitle>
              <IntlText path='page.guides.epmty.title' />
            </EmptyTitle>
            <EmptyDescription>
              <IntlText path='page.guides.epmty.description' />
            </EmptyDescription>
          </Empty>
        )}
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3'>
        {filteredGuides.map((guide, index) => {
          const isNeedfulGuide = guide.labels.includes('needful');
          return (
            <Card
              asChild
              key={guide.slug}
              className={cn(
                'h-70 gap-2 px-10 transition hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-border-hard)] focus:-translate-0.5 focus:shadow-[6px_6px_0_0_var(--color-border-hard)] focus:outline-none',
                isNeedfulGuide
                  ? 'hover:border-accent-primary focus:border-accent-primary'
                  : 'hover:border-action-primary focus:border-action-primary'
              )}
            >
              <Link href={`/guides/${guide.slug}`} prefetch={false} style={{ order: index }}>
                <div className='flex flex-col'>
                  <span
                    className={cn(
                      'font-pixelify-sans text-[40px]/12',
                      isNeedfulGuide
                        ? 'drop-shadow-[2px_1px_0_var(--color-accent-primary)]'
                        : 'drop-shadow-[2px_1px_0_var(--color-action-primary)]'
                    )}
                  >
                    {guide.number}
                  </span>
                  <Typography variant='title-md'>{guide.title}</Typography>
                </div>

                <Typography as='p' className='line-clamp-3' variant='caption'>
                  {guide.description}
                </Typography>

                <div className='mt-auto flex items-center gap-2'>
                  {guide.labels.map((label) => {
                    const isNeedfulLabel = label === 'needful';
                    return (
                      <Badge key={label} variant={isNeedfulLabel ? 'accent' : 'outline'}>
                        {isNeedfulLabel ? <IntlText path='page.guides.tag.needful' /> : label}
                      </Badge>
                    );
                  })}
                </div>
              </Link>
            </Card>
          );
        })}

        {!!filteredGuides.length && (
          <Card
            asChild
            className='h-70 gap-2 px-10 transition hover:-translate-0.5 hover:shadow-[6px_6px_0_0_var(--color-foreground)] focus:-translate-0.5 focus:shadow-[6px_6px_0_0_var(--color-foreground)]'
          >
            <a
              key='00-siberiacancode-skills'
              href='https://skills.sh/siberiacancode/agent-skills'
              rel='noopener noreferrer'
              style={{ order: skillsCardOrder }}
              target='_blank'
            >
              <div className='flex flex-col'>
                <span className='inline-flex h-10 items-center justify-between'>
                  <FullVercelIcon className='h-6.5 w-21.5' />
                  <ExternalLinkIcon className='size-5' />
                </span>
                <Typography variant='title-md'>
                  <IntlText path='page.guides.skillsCard.title' />
                </Typography>
              </div>
              <Typography as='p' className='line-clamp-3' variant='caption'>
                <IntlText path='page.guides.skillsCard.description' />
              </Typography>

              <div className='mt-auto'>
                <Badge variant='primary'>ai</Badge>
              </div>
            </a>
          </Card>
        )}
      </div>
    </section>
  );
};
