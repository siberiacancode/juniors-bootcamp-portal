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
import { COOKIES } from '@/constants';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { getCookieValue } from '@/utils/server';

import type { TaskSettingsCookieValue } from './_types';

import { LevelSection } from './_components';
import { FAQ_ITEMS, TASKS } from './_constants';

interface TaskPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params }: TaskPageProps) => {
  const { id } = await params;

  const task = TASKS[id as keyof typeof TASKS];

  return {
    title: intl.formatMessage({ id: task.title }),
    description: intl.formatMessage({ id: task.description })
  };
};

const TaskPage = async ({ params }: TaskPageProps) => {
  const { id } = await params;

  if (!(id in TASKS)) notFound();

  const task = TASKS[id as keyof typeof TASKS];

  const initialTaskSettings = await getCookieValue<TaskSettingsCookieValue>(COOKIES.TASK_SETTINGS, {
    level: 'junior',
    api: 'rest'
  });

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

      <section className='flex flex-col gap-8 sm:gap-10'>
        <div className='content-container flex flex-col gap-6'>
          <Typography as='h2' variant='heading-md'>
            <IntlText path='page.task.section.level.title' />
          </Typography>
          <Typography as='p' variant='body-lg'>
            <IntlText path='page.task.section.level.description' />
          </Typography>
        </div>

        <LevelSection initialValue={initialTaskSettings} task={task} />
      </section>

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
