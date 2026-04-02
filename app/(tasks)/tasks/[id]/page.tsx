import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Tabs as RadixTabs } from 'radix-ui';

import { LOCALE } from '@/app/(constants)';
import { getDictionary } from '@/app/(contexts)/intl/helpers/getDictionary';
import { ApiBadge } from '@/components/common';
import { IntlText } from '@/components/intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { FAQ_ITEMS, LEVELS, TASKS } from './_constants';
import { isValidTaskId } from './_helpers';

export const generateStaticParams = () => Object.keys(TASKS).map((task) => ({ task }));

export const generateMetadata = async ({ params }: PageProps<'/tasks/[id]'>) => {
  const { id } = await params;
  if (!isValidTaskId(id)) return;

  const task = TASKS[id];

  const messages = await getDictionary(LOCALE);

  return {
    title: messages[task.title],
    description: messages[task.description]
  };
};

const TaskPage = async ({ params }: PageProps<'/tasks/[id]'>) => {
  const { id } = await params;
  if (!isValidTaskId(id)) notFound();

  const task = TASKS[id];

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

        <RadixTabs.Root defaultValue={task.levels[0].name}>
          <div className='no-scrollbar overflow-x-auto'>
            <RadixTabs.List
              className={cn(
                'mb-8 flex gap-4 sm:mb-10',
                'mx-auto w-max px-6 sm:w-7xl',
                '*:w-80 sm:*:flex-1'
              )}
            >
              {task.levels.map((level) => {
                const levelData = LEVELS[level.name];
                const LevelIcon = levelData.icon;
                return (
                  <RadixTabs.Trigger
                    asChild
                    key={level.name}
                    className={cn(
                      'group/trigger cursor-pointer transition hover:shadow-[3px_3px_0_0_var(--color-border-hard)] [&>svg]:size-10',
                      levelData.tab
                    )}
                    value={level.name}
                  >
                    <Card className='gap-4 px-6 sm:px-10'>
                      <LevelIcon className='size-10 text-(--color-special)' />

                      <Typography
                        pixelify
                        className='group-data-[state=active]/trigger:drop-shadow-[3px_0_0_var(--color-special)]'
                        variant='heading-2xl'
                      >
                        {levelData.title}
                      </Typography>

                      <Typography as='p' variant='body-md'>
                        <IntlText path={levelData.description} />
                      </Typography>
                    </Card>
                  </RadixTabs.Trigger>
                );
              })}
            </RadixTabs.List>
          </div>

          {task.levels.map((level) => (
            <RadixTabs.Content
              key={level.name}
              className='content-container flex flex-col gap-8 sm:gap-10'
              value={level.name}
            >
              <div className='flex flex-col gap-6 sm:hidden'>
                <Button asChild size='lg' variant='outline'>
                  <a href={task.links.figma} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.figma' />
                  </a>
                </Button>

                <Button asChild size='lg' variant='outline'>
                  <a href={task.links.requirements} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.requirements' />
                  </a>
                </Button>

                <Button asChild size='lg' variant='outline'>
                  <a href={task.links.backend} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.backend' />
                  </a>
                </Button>
              </div>

              <div className='hidden gap-6 sm:flex'>
                <Button asChild size='sm' variant='outline'>
                  <a href={task.links.figma} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.figma' />
                  </a>
                </Button>

                <Button asChild size='sm' variant='outline'>
                  <a href={task.links.requirements} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.requirements' />
                  </a>
                </Button>

                <Button asChild size='sm' variant='outline'>
                  <a href={task.links.backend} rel='noopener noreferrer' target='_blank'>
                    <IntlText path='page.task.section.level.link.backend' />
                  </a>
                </Button>
              </div>

              <div className='flex flex-col gap-6'>
                <Typography as='h4' variant='title-lg'>
                  <IntlText path='page.task.section.level.expectedResult' />
                </Typography>
                <Typography as='p' variant='body-lg'>
                  <IntlText path={level.expectedResult} />
                </Typography>
              </div>

              <div className='flex flex-col gap-6'>
                <Typography as='h4' variant='title-lg'>
                  <IntlText path='page.task.section.level.flow' />
                </Typography>
                <ol>
                  {level.flow.map((step, index) => (
                    <li key={step}>
                      <Typography as='span' className='inline-flex gap-2' variant='body-lg'>
                        {index + 1}. <IntlText path={step} />
                      </Typography>
                    </li>
                  ))}
                </ol>
              </div>

              <div className='flex flex-col gap-6'>
                <Typography as='h4' variant='title-lg'>
                  API
                </Typography>
                <Typography as='p' variant='body-lg'>
                  <IntlText path='page.task.section.level.api.description' />
                </Typography>

                <Tabs defaultValue='rest'>
                  <TabsList className='w-full sm:w-fit'>
                    <TabsTrigger value='rest'>Rest</TabsTrigger>
                    <TabsTrigger value='graphQL'>GraphQL</TabsTrigger>
                  </TabsList>

                  <TabsContent value='rest'>
                    <ul className='flex flex-col gap-4'>
                      {level.rest.map((item) => (
                        <li
                          key={`${item.operation}-${item.field}`}
                          className='flex items-center gap-2'
                        >
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
                      {level.graphQL.map((item) => (
                        <li
                          key={`${item.operation}-${item.field}`}
                          className='flex items-center gap-2'
                        >
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
            </RadixTabs.Content>
          ))}
        </RadixTabs.Root>
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
