import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Tabs } from 'radix-ui';

import { FigmaIcon, UnicStarIcon } from '@/components/icons';
import { IntlText } from '@/components/intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  IconButton,
  ScrollArea,
  ScrollBar,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { FAQ_ITEMS, LINKS, ROADMAP, TAB_COLORS_MAP, TASKS, TITLE_COLORS_MAP } from './_constants';

const TasksPage = () => (
  <main className='content-container mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-24 sm:gap-22'>
    <div className='flex flex-col gap-8 sm:gap-10'>
      <section className='flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h1' variant='display'>
          <IntlText path='page.tasks.title' />
        </Typography>
        <Typography as='p' variant='body-lg'>
          <IntlText path='page.tasks.description' />
        </Typography>
      </section>

      <section className='flex flex-col gap-6'>
        <Tabs.Root className='flex flex-col gap-6' defaultValue={TASKS[0].emoji}>
          <Tabs.List className='flex gap-6'>
            {TASKS.map((task) => (
              <Tabs.Trigger
                key={task.emoji}
                className={cn(
                  'size-16 rounded-full bg-muted text-[32px] leading-none sm:size-22 sm:text-[40px]',
                  TAB_COLORS_MAP[task.emoji]
                )}
                value={task.emoji}
              >
                {task.emoji}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {TASKS.map((task) => (
            <Tabs.Content
              key={task.emoji}
              className='flex flex-col gap-6 rounded-24 border-3 border-border-hard bg-background p-6 transition hover:shadow-[0_6px_0_0_var(--color-border-hard)] sm:h-127.5 sm:justify-center sm:gap-12 sm:px-12'
              value={task.emoji}
            >
              <div className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center'>
                <Typography
                  pixelify
                  className={cn(
                    'order-last font-nunito text-[48px] leading-none font-bold sm:order-first sm:text-[96px]',
                    TITLE_COLORS_MAP[task.emoji]
                  )}
                  as='h2'
                  variant='heading-xl'
                >
                  <IntlText path={task.title} />
                </Typography>
                <IconButton className='size-16 rounded-16' size='lg' variant='outline'>
                  <FigmaIcon className='size-8' />
                </IconButton>
              </div>

              <div className='flex flex-col items-stretch gap-6 sm:items-start'>
                <Typography as='p' className='max-w-225' variant='body-lg'>
                  <IntlText path={task.description} />
                </Typography>

                <Button asChild>
                  <Link href={task.href}>
                    <IntlText path='link.goTo' />
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <ScrollArea type='auto'>
          <div className='flex gap-6 pb-3 sm:pb-0'>
            {LINKS.map((link) => (
              <Button asChild key={link.title} size='sm' variant='secondary'>
                <a href={link.href} rel='noopener noreferrer' target='_blank'>
                  <IntlText path={link.title} />
                </a>
              </Button>
            ))}

            <Button
              asChild
              key='reactuse'
              className='order-first bg-brand-reactuse font-pixelify-sans text-[18px] text-brand-reactuse-fg hover:bg-brand-reactuse-hover sm:order-last'
              size='sm'
            >
              <a href='' rel='noopener noreferrer' target='_blank'>
                REACTUSE
              </a>
            </Button>
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </section>
    </div>

    <section className='flex flex-col gap-8 sm:gap-6'>
      <Typography as='h3' variant='heading-md'>
        <IntlText path='page.tasks.section.roadmap.title' />
      </Typography>

      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-50 md:gap-y-6'>
        {ROADMAP.map((step, index) => (
          <div key={step} className='flex flex-col gap-0 sm:gap-4'>
            <div className='flex items-center gap-4'>
              <UnicStarIcon className='size-6 shrink-0 text-action-primary' />
              <div className='h-0.5 w-full shrink bg-border-hard' />
              <span className='rounded-full bg-action-primary px-4 py-1 text-[20px]/5 font-bold text-action-primary-fg sm:px-6 sm:py-2 sm:text-[24px]/7'>
                {index + 1}
              </span>
            </div>

            <Typography as='p' variant='body-lg'>
              <IntlText path={step} />
            </Typography>
          </div>
        ))}
      </div>
    </section>

    <section className='flex flex-col gap-8 sm:gap-6'>
      <Typography as='h3' variant='heading-md'>
        <IntlText path='page.tasks.section.philosophy.title' />
      </Typography>
      <Typography as='p' variant='body-lg'>
        <IntlText path='page.tasks.section.philosophy.description' />
      </Typography>
    </section>

    <section className='flex flex-col gap-8 sm:gap-6'>
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

export default TasksPage;
