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
  Separator,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

const TASKS = [
  {
    emoji: '📦',
    title: 'page.tasks.cards.delivery.title',
    description: 'page.tasks.cards.delivery.description',
    href: ''
  },
  {
    emoji: '🏎️',
    title: 'page.tasks.cards.car.title',
    description: 'page.tasks.cards.car.description',
    href: ''
  },
  {
    emoji: '🍿',
    title: 'page.tasks.cards.cinema.title',
    description: 'page.tasks.cards.cinema.description',
    href: ''
  },
  {
    emoji: '🍕',
    title: 'page.tasks.cards.pizza.title',
    description: 'page.tasks.cards.pizza.description',
    href: ''
  }
] as const;

const TITLE_COLORS_MAP = {
  '📦': 'drop-shadow-[3px_0_0_rgb(80_201_114)]',
  '🏎️': 'drop-shadow-[3px_0_0_rgb(29_114_241)]',
  '🍿': 'drop-shadow-[3px_0_0_rgb(232_91_254)]',
  '🍕': 'drop-shadow-[3px_0_0_rgb(241_78_29)]'
};

const TAB_COLORS_MAP = {
  '📦': 'data-[state=active]:bg-[rgb(222_247_229)]',
  '🏎️': 'data-[state=active]:bg-[rgb(212_227_255)]',
  '🍿': 'data-[state=active]:bg-[rgb(251_226_255)]',
  '🍕': 'data-[state=active]:bg-[rgb(255_220_212)]'
};

const ROADMAP = [
  'page.tasks.section.roadmap.step.1',
  'page.tasks.section.roadmap.step.2',
  'page.tasks.section.roadmap.step.3',
  'page.tasks.section.roadmap.step.4'
] as const;

const FAQ_ITEMS = [
  {
    question: 'page.tasks.section.faq.0.question',
    answer: 'page.tasks.section.faq.0.answer'
  },
  {
    question: 'page.tasks.section.faq.1.question',
    answer: 'page.tasks.section.faq.1.answer'
  },
  {
    question: 'page.tasks.section.faq.2.question',
    answer: 'page.tasks.section.faq.2.answer'
  }
] as const;

const TAGS = [
  'page.tasks.tag.disigne',
  'page.tasks.tag.api',
  'page.tasks.tag.github',
  'page.tasks.tag.actualStack',
  'page.tasks.tag.workWithGit'
] as const;

const TasksPage = () => {
  return (
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
                className='flex flex-col gap-6 rounded-24 border-3 border-border-hard p-6 transition hover:shadow-[0_6px_0_0_var(--color-border-hard)] sm:h-127.5 sm:justify-center sm:gap-12 sm:px-12'
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
                  <IconButton className='size-16 rounded-16' size='lg' variant='ghost'>
                    <FigmaIcon className='size-8' />
                  </IconButton>
                </div>

                <div className='flex flex-col items-stretch gap-6 sm:flex-row sm:items-end sm:justify-between'>
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

          <ScrollArea>
            <div className='flex gap-6'>
              {TAGS.map((tag) => (
                <Typography
                  key={tag}
                  className='inline-flex h-12 items-center rounded-16 bg-muted px-4 font-nunito font-bold text-nowrap text-foreground'
                  variant='title-md'
                >
                  <IntlText path={tag} />
                </Typography>
              ))}
              <div className='order-first inline-flex h-12 items-center rounded-16 bg-[rgb(240_251_255)] px-4 font-pixelify-sans text-[30px]/8 font-bold text-[rgb(82_189_233)] sm:order-last'>
                REACTUSE
              </div>
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
                <Separator className='shrink' />
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
};

export default TasksPage;
