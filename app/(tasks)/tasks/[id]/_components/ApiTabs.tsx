'use client';

import { ApiBadge } from '@/components/common';
import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@/components/ui';

import type { ApiType, LevelData } from '../_types';

import { useTaskSettings } from '../_contexts/taskSettings/useTaskSettings';

interface ApiTabsProps {
  api: LevelData['api'];
}

export const ApiTabs = ({ api }: ApiTabsProps) => {
  const taskSettings = useTaskSettings();

  const setApi = (api: ApiType) =>
    taskSettings.set({
      ...taskSettings.value,
      api
    });

  return (
    <Tabs value={taskSettings.value.api} onValueChange={(value) => setApi(value as ApiType)}>
      <TabsList className='w-full sm:w-fit'>
        <TabsTrigger value='rest'>Rest</TabsTrigger>
        <TabsTrigger value='graphQL'>GraphQL</TabsTrigger>
      </TabsList>

      <TabsContent value='rest'>
        <ul className='flex flex-col gap-4'>
          {api.rest.map((item) => (
            <li key={`${item.operation}-${item.field}`} className='flex items-center gap-2'>
              <ApiBadge variant={item.operation}>{item.operation}</ApiBadge>
              <Typography as='span' className='font-overpass-mono' variant='body-sm'>
                {item.field}
              </Typography>
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value='graphQL'>
        <ul className='flex flex-col gap-4'>
          {api.graphQL.map((item) => (
            <li key={`${item.operation}-${item.field}`} className='flex items-center gap-2'>
              <ApiBadge variant={item.operation}>{item.operation}</ApiBadge>
              <Typography as='span' className='font-overpass-mono' variant='body-sm'>
                {item.field}
              </Typography>
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
};
