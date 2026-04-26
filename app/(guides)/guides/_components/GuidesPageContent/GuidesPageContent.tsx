'use client';

import type { JSX } from 'react';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { SearchIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { parseAsArrayOf, parseAsString, useQueryStates } from 'nuqs';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ReactuseWordmarkIcon, SkillsshWordmarkIcon } from '@/components/icons';
import {
  Badge,
  Chip,
  ChipGroup,
  ChipGroupItem,
  Empty,
  EmptyDescription,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupIconButton,
  InputGroupInput
} from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';
import { yandexMetrika } from '@/lib/yandex-metrika';

import {
  GuideCard,
  GuideCardDescription,
  GuideCardFooter,
  GuideCardHeader,
  GuideCardHeaderMeta,
  GuideCardTitle
} from './components';

interface Guide {
  description: string;
  labels: string[];
  number: string;
  slug: string;
  title: string;
}

interface AdGuide {
  badge: JSX.Element;
  border: string;
  description: MessagePath;
  href: string;
  icon: JSX.Element;
  title: MessagePath;
  type: 'ad';
}

interface GuidesPageContentProps {
  guides: Guide[];
  labels: string[];
}

const guidesQueryParams = {
  search: parseAsString.withDefault(''),
  tags: parseAsArrayOf(parseAsString).withDefault([])
};

const adGuides: AdGuide[] = [
  {
    type: 'ad',
    icon: <ReactuseWordmarkIcon />,
    badge: (
      <Badge className='bg-brand-reactuse text-brand-reactuse-fg' variant='accent'>
        react
      </Badge>
    ),
    border: 'hover:border-brand-reactuse focus:border-brand-reactuse',
    description: 'page.guides.reactuseCard.description',
    title: 'page.guides.reactuseCard.title',
    href: 'https://reactuse.org'
  },
  {
    type: 'ad',
    icon: <SkillsshWordmarkIcon />,
    badge: (
      <Badge className='bg-brand-vercel text-brand-vercel-fg' variant='accent'>
        ai
      </Badge>
    ),
    border: 'hover:border-brand-vercel focus:border-brand-vercel',
    description: 'page.guides.skillsCard.description',
    title: 'page.guides.skillsCard.title',
    href: 'https://skills.sh/siberiacancode/agent-skills'
  }
];

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
    debouncedSetSearchParam(search.trim());
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

  const isFiltered = !!queryParams.search.trim() || !!queryParams.tags.length;

  const filteredGuides = isFiltered
    ? guides.filter((guide) => {
        const trimmedSearch = queryParams.search.trim().toLowerCase();
        return (
          (guide.title.toLowerCase().includes(trimmedSearch) ||
            guide.description.toLowerCase().includes(trimmedSearch)) &&
          queryParams.tags.every((tag) => guide.labels.includes(tag))
        );
      })
    : [...guides.slice(0, 1), ...adGuides, ...guides.slice(1)];

  return (
    <section className='flex flex-col gap-8 sm:gap-10'>
      <div className='flex flex-col gap-6 sm:gap-10'>
        <div className='content-container'>
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
        </div>

        <div className='no-scrollbar overflow-x-auto'>
          <ChipGroup
            className='mx-auto w-max px-6 sm:w-full sm:max-w-7xl sm:flex-wrap'
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
        </div>

        {!filteredGuides.length && (
          <Empty className='content-container'>
            <EmptyTitle>
              <IntlText path='page.guides.epmty.title' />
            </EmptyTitle>
            <EmptyDescription>
              <IntlText path='page.guides.epmty.description' />
            </EmptyDescription>
          </Empty>
        )}
      </div>

      <div className='content-container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3'>
        {filteredGuides.map((guide) => {
          if ('type' in guide) {
            return (
              <GuideCard asChild key={guide.href} className={guide.border}>
                <a href={guide.href} rel='noopener noreferrer' target='_blank'>
                  <GuideCardHeader>
                    <GuideCardHeaderMeta external>{guide.icon}</GuideCardHeaderMeta>

                    <GuideCardTitle>
                      <IntlText path={guide.title} />
                    </GuideCardTitle>
                  </GuideCardHeader>

                  <GuideCardDescription>
                    <IntlText path={guide.description} />
                  </GuideCardDescription>

                  <GuideCardFooter>{guide.badge}</GuideCardFooter>
                </a>
              </GuideCard>
            );
          }

          const isNeedfulGuide = guide.labels.includes('needful');
          return (
            <GuideCard
              asChild
              key={guide.slug}
              className={cn(
                isNeedfulGuide
                  ? 'hover:border-accent-primary focus:border-accent-primary'
                  : 'hover:border-action-primary focus:border-action-primary'
              )}
            >
              <Link href={`/guides/${guide.slug}`} prefetch={false}>
                <GuideCardHeader>
                  <GuideCardHeaderMeta>
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
                  </GuideCardHeaderMeta>
                  <GuideCardTitle>{guide.title}</GuideCardTitle>
                </GuideCardHeader>

                <GuideCardDescription>{guide.description}</GuideCardDescription>

                <GuideCardFooter>
                  {guide.labels.map((label) => {
                    const isNeedfulLabel = label === 'needful';
                    return (
                      <Badge key={label} variant={isNeedfulLabel ? 'accent' : 'outline'}>
                        {isNeedfulLabel ? <IntlText path='page.guides.tag.needful' /> : label}
                      </Badge>
                    );
                  })}
                </GuideCardFooter>
              </Link>
            </GuideCard>
          );
        })}
      </div>
    </section>
  );
};
