'use client';

import type { Route } from 'next';

import {
  useDisclosure,
  useHotkeys,
  useKeyPress,
  useOperatingSystem
} from '@siberiacancode/reactuse';
import { liteClient } from 'algoliasearch/lite';
import { useAlgoliaSearch } from 'fumadocs-core/search/client/algolia';
import { ArrowRightIcon, Loader2Icon, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useIntl } from 'react-intl';

import type { tasksSource } from '@/lib/source';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui';
import { IntlText } from '@/intl';

interface SearchProps {
  tree: typeof tasksSource.pageTree.children;
  variant: 'desktop' | 'mobile';
}

const client = liteClient(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
);

export const Search = ({ tree, variant }: SearchProps) => {
  const dialog = useDisclosure();
  const router = useRouter();
  const intl = useIntl();
  const operatingSystem = useOperatingSystem();
  const { onSearchChange, isLoading, data } = useAlgoliaSearch({
    client,
    indexName: 'document',
    locale: 'ru',
    delayMs: 150
  });
  const onSelect = (url: string) => {
    dialog.close();
    router.push(url as Route);
  };

  useHotkeys(operatingSystem === 'macos' ? 'meta+k' : 'ctrl+k', () => dialog.open(), {
    enabled: variant === 'desktop'
  });
  useKeyPress('Escape', () => dialog.close());

  return (
    <Dialog open={dialog.opened} onOpenChange={dialog.toggle}>
      {variant === 'desktop' && (
        <DialogTrigger
          aria-haspopup='dialog'
          aria-label={intl.formatMessage({ id: 'button.search' })}
          className='flex h-10 w-67 shrink-0 items-center gap-2 rounded-full bg-muted px-3.5 text-left text-[14px] text-[#767676] hover:bg-secondary max-[1100px]:w-10 max-[1100px]:justify-center max-[1100px]:px-0'
          type='button'
        >
          <SearchIcon aria-hidden='true' className='size-4 shrink-0' />
          <span className='min-w-0 flex-1 truncate max-[1100px]:hidden'>
            <IntlText path='field.headerSearch.placeholder' />
          </span>
          <kbd className='shrink-0 rounded-full bg-background px-2 py-1 font-overpass-mono text-[12px] text-muted-fg max-[1100px]:hidden'>
            {operatingSystem === 'macos' && '⌘K'}
            {operatingSystem !== 'macos' && 'Ctrl+K'}
          </kbd>
        </DialogTrigger>
      )}
      {variant === 'mobile' && (
        <DialogTrigger
          aria-haspopup='dialog'
          aria-label={intl.formatMessage({ id: 'button.search' })}
          className='flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-secondary'
          type='button'
        >
          <SearchIcon aria-hidden='true' className='size-4.5' />
        </DialogTrigger>
      )}
      <DialogContent
        className='top-[min(20vh,180px)] w-[460px] max-w-[calc(100%-24px)] translate-x-[-50%] translate-y-0 gap-0 rounded-[28px] p-3 shadow-xl sm:max-w-[460px]'
        showCloseButton={false}
      >
        <DialogHeader className='sr-only'>
          <DialogTitle>
            <IntlText path='search.title' />
          </DialogTitle>
          <DialogDescription>
            <IntlText path='search.description' />
          </DialogDescription>
        </DialogHeader>
        <Command>
          <div className='relative'>
            <CommandInput
              autoFocus
              aria-label={intl.formatMessage({ id: 'field.search.label' })}
              className='pr-12'
              placeholder={intl.formatMessage({ id: 'field.search.placeholder' })}
              onValueChange={onSearchChange}
            />
            {isLoading && (
              <Loader2Icon
                aria-hidden='true'
                className='pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 animate-spin text-muted-fg'
              />
            )}
          </div>
          <CommandList aria-label={intl.formatMessage({ id: 'search.results' })} aria-live='polite'>
            <CommandEmpty>
              {isLoading && <IntlText path='search.loading' />}
              {!isLoading && <IntlText path='search.noResultsShort' />}
            </CommandEmpty>
            {tree.map((group) => {
              if (group.type === 'page')
                return (
                  <CommandItem
                    key={group.url}
                    value={group.name?.toString()}
                    onSelect={() => onSelect(group.url)}
                  >
                    <ArrowRightIcon aria-hidden='true' size={16} />
                    <span className='min-w-0 flex-1 truncate'>{group.name}</span>
                  </CommandItem>
                );

              if (group.type !== 'folder') return null;

              return (
                <CommandGroup key={group.$id} heading={group.name}>
                  {group.children
                    .filter((item) => item.type === 'page')
                    .map((item) => (
                      <CommandItem
                        key={item.url}
                        value={item.name?.toString()}
                        onSelect={() => onSelect(item.url)}
                      >
                        <ArrowRightIcon aria-hidden='true' size={16} />
                        <span className='min-w-0 flex-1 truncate'>{item.name}</span>
                      </CommandItem>
                    ))}
                </CommandGroup>
              );
            })}
            {data && (
              <CommandGroup heading={intl.formatMessage({ id: 'search.results' })}>
                {data.items
                  .flatMap((item) => {
                    if (item.type === 'table') return item.rows;
                    return [item];
                  })
                  .map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.url} ${item.content}`}
                      onSelect={() => onSelect(item.url)}
                    >
                      <ArrowRightIcon aria-hidden='true' size={16} />
                      <span className='min-w-0 flex-1 truncate'>{item.content}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
        <a
          aria-label={intl.formatMessage({ id: 'link.searchByAlgolia' })}
          className='mt-1 flex items-center justify-end gap-1.5 border-t border-border-soft px-3 pt-3 text-[12px] text-muted-fg hover:text-foreground'
          href='https://www.algolia.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IntlText path='search.by' />{' '}
          <strong className='font-extrabold tracking-tight text-foreground'>algolia</strong>
        </a>
      </DialogContent>
    </Dialog>
  );
};
