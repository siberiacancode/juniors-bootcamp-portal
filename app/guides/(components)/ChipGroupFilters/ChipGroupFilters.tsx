'use client';

import { IntlText } from '@/components/intl';
import { Chip, ChipGroup } from '@/components/ui';

import { useTagsQueryState } from '../../(hooks)';

interface ChipGroupFiltersProps {
  children: React.ReactNode;
}

export const ChipGroupFilters = ({ children }: ChipGroupFiltersProps) => {
  const [tags, setTags] = useTagsQueryState();

  return (
    <ChipGroup className='sm:flex-wrap' defaultValue={tags} type='multiple' onValueChange={setTags}>
      {tags.length > 0 && (
        <Chip pressed onClick={() => setTags([])}>
          <IntlText path='page.guides.chip.clearAll' />
        </Chip>
      )}

      {children}
    </ChipGroup>
  );
};
