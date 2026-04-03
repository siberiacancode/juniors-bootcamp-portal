import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { Markdown } from '@/markdown';

import type { LevelName } from './_types';

import { ApiTabs } from './_components/ApiTabs';
import { LevelCards } from './_components/LevelCards';
import { FAQ_ITEMS, TASKS } from './_constants';
import { TaskSettingsProvider } from './_contexts/taskSettings';
import { getTaskSettingsCookieValue, isValidTaskId } from './_helpers';

export const generateStaticParams = () => Object.keys(TASKS).map((id) => ({ id }));

export const generateMetadata = async ({ params }: PageProps<'/tasks/[id]'>) => {
  const { id } = await params;
  if (!isValidTaskId(id)) return;

  const task = TASKS[id];

  return {
    title: intl.formatMessage({ id: task.title }),
    description: intl.formatMessage({ id: task.description })
  };
};

export const dynamic = 'force-dynamic';

const TaskPage = async ({ params }: PageProps<'/tasks/[id]'>) => {
  const { id } = await params;
  if (!isValidTaskId(id)) notFound();
  const taskSettingsCookieValue = await getTaskSettingsCookieValue();

  const task = TASKS[id];

  const levelNames = Object.keys(task.levels) as LevelName[];

  const currentLevel = task.levels[taskSettingsCookieValue.level];

  const externalLinks = Object.entries(task.links) as [keyof typeof task.links, string][];

  return (
    <main className='mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
      <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <div className='flex w-full'>
          <Button asChild size='sm' variant='ghost'>
            <Link href='/tasks'>
              <ChevronLeftIcon />
              <IntlText path='link.goBack' />
            </Link>
          </Button>
        </div>

        <Typography as='h1' variant='heading-2xl'>
          {task.emoji}
          <IntlText path={task.title} />
        </Typography>

        <Typography as='p' variant='body-lg'>
          <IntlText path={task.description} />
        </Typography>
      </section>

      <TaskSettingsProvider initialValue={taskSettingsCookieValue}>
        <section className='flex flex-col gap-8 sm:gap-10'>
          <div className='content-container flex flex-col gap-6'>
            <Typography as='h2' variant='heading-md'>
              <IntlText path='page.task.section.level.title' />
            </Typography>
            <Typography as='p' variant='body-lg'>
              <IntlText path='page.task.section.level.description' />
            </Typography>
          </div>

          <LevelCards levelNames={levelNames} />

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

              <Markdown source={intl.formatMessage({ id: currentLevel.expectedResult })} />
            </div>

            <div className='flex flex-col gap-6'>
              <Typography as='h4' variant='title-lg'>
                <IntlText path='page.task.section.level.flow' />
              </Typography>

              <Markdown source={intl.formatMessage({ id: currentLevel.flow })} />
            </div>

            <div className='flex flex-col gap-6'>
              <Typography as='h4' variant='title-lg'>
                API
              </Typography>
              <Typography as='p' variant='body-lg'>
                <IntlText path='page.task.section.level.api.description' />
              </Typography>

              <ApiTabs api={currentLevel.api} />
            </div>
          </div>
        </section>
      </TaskSettingsProvider>

      <section className='content-container flex flex-col gap-8 sm:gap-6'>
        <Typography as='h3' variant='heading-md'>
          <IntlText path='faq.title' />
        </Typography>

        <Accordion collapsible defaultValue={FAQ_ITEMS[0].question} type='single'>
          {FAQ_ITEMS.map(({ answer, question }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>
                <IntlText path={question} />
              </AccordionTrigger>
              <AccordionContent>
                <IntlText path={answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default TaskPage;
