'use client';

import { useCookie } from '@siberiacancode/reactuse';

import { ApiBadge } from '@/components/common';
import {
  Button,
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography
} from '@/components/ui';
import { COOKIES } from '@/constants';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { ApiType, LevelName, TaskContent, TaskSettingsCookieValue } from '../_types';

import { LEVELS } from './constants';

interface LevelProps {
  initialValue: TaskSettingsCookieValue;
  task: TaskContent;
}

const TASK_SETTINGS_OCOOKIE_OPTIONS = {
  path: '/'
} as const;

export const LevelSection = ({ task, initialValue }: LevelProps) => {
  const taskSettings = useCookie(COOKIES.TASK_SETTINGS, {
    ...TASK_SETTINGS_OCOOKIE_OPTIONS,
    initialValue
  });

  const setLevel = (level: LevelName) =>
    taskSettings.set(
      {
        ...taskSettings.value,
        level
      },
      TASK_SETTINGS_OCOOKIE_OPTIONS
    );

  const setApi = (api: ApiType) =>
    taskSettings.set(
      {
        ...taskSettings.value,
        api
      },
      TASK_SETTINGS_OCOOKIE_OPTIONS
    );

  const levelNames = Object.keys(task.levels) as LevelName[];
  const externalLinks = Object.entries(task.links) as [keyof typeof task.links, string][];

  const currentLevel = task.levels[taskSettings.value.level];

  return (
    <>
      <div className='no-scrollbar overflow-x-auto'>
        <div className='mx-auto flex w-max gap-4 px-6 pb-0.75 *:w-80 sm:w-7xl sm:*:flex-1'>
          {levelNames.map((levelName) => {
            const levelData = LEVELS[levelName];
            const LevelIcon = levelData.icon;
            return (
              <Card
                key={levelName}
                className={cn(
                  'gap-4 px-6 sm:px-10',
                  'group/trigger cursor-pointer transition hover:shadow-[3px_3px_0_0_var(--color-border-hard)]',
                  levelData.tab
                )}
                data-active={taskSettings.value.level === levelName}
                onClick={() => setLevel(levelName)}
              >
                <LevelIcon className='size-10 text-(--color-special)' />

                <Typography
                  pixelify
                  className='group-data-active/trigger:drop-shadow-[3px_0_0_var(--color-special)]'
                  variant='heading-2xl'
                >
                  {levelData.title}
                </Typography>

                <Typography as='p' variant='body-md'>
                  <IntlText path={levelData.description} />
                </Typography>
              </Card>
            );
          })}
        </div>
      </div>

      <div className='content-container flex flex-col gap-8 sm:gap-10'>
        <div className='flex flex-col gap-6 sm:hidden'>
          {externalLinks.map(([key, href]) => (
            <Button asChild key={key} size='lg' variant='outline'>
              <a href={href} rel='noopener noreferrer' target='_blank'>
                <IntlText path={`page.task.section.level.link.${key}`} />
              </a>
            </Button>
          ))}
        </div>

        <div className='hidden gap-6 sm:flex'>
          {externalLinks.map(([key, href]) => (
            <Button asChild key={key} size='sm' variant='outline'>
              <a href={href} rel='noopener noreferrer' target='_blank'>
                <IntlText path={`page.task.section.level.link.${key}`} />
              </a>
            </Button>
          ))}
        </div>

        <div className='flex flex-col gap-6'>
          <Typography as='h4' variant='title-lg'>
            <IntlText path='page.task.section.level.expectedResult' />
          </Typography>

          <Typography as='p' variant='body-lg'>
            <IntlText path={currentLevel.expectedResult} />
          </Typography>
        </div>

        <div className='flex flex-col gap-6'>
          <Typography as='h4' variant='title-lg'>
            <IntlText path='page.task.section.level.flow' />
          </Typography>

          <Typography as='p' variant='body-lg'>
            <IntlText path={currentLevel.flow} />
          </Typography>
        </div>

        <div className='flex flex-col gap-6'>
          <Typography as='h4' variant='title-lg'>
            API
          </Typography>
          <Typography as='p' variant='body-lg'>
            <IntlText path='page.task.section.level.api.description' />
          </Typography>

          <Tabs value={taskSettings.value.api} onValueChange={(value) => setApi(value as ApiType)}>
            <TabsList className='w-full sm:w-fit'>
              <TabsTrigger value='rest'>Rest</TabsTrigger>
              <TabsTrigger value='graphQL'>GraphQL</TabsTrigger>
            </TabsList>

            <TabsContent value='rest'>
              <ul className='flex flex-col gap-4'>
                {currentLevel.api.rest.map((item) => (
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
                {currentLevel.api.graphQL.map((item) => (
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
        </div>
      </div>
    </>
  );
};
