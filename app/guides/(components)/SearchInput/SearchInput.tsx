'use client';

import { SearchIcon } from 'lucide-react';
import { useIntl } from 'react-intl';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui';

export const SearchInput = () => {
  const intl = useIntl();

  return (
    <InputGroup className='w-full sm:w-1/2'>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder={intl.formatMessage({ id: 'page.guides.search' })} />
    </InputGroup>
  );
};
