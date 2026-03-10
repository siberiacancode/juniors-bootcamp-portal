'use client';

import { useDebounceCallback } from '@siberiacancode/reactuse';
import { SearchIcon } from 'lucide-react';
import { useIntl } from 'react-intl';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui';

import { useSearchQueryState } from '../../(hooks)';

export const SearchInput = () => {
  const intl = useIntl();

  const [search, setSearch] = useSearchQueryState();
  const debouncedSetSearch = useDebounceCallback(setSearch, 400);

  return (
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
  );
};
