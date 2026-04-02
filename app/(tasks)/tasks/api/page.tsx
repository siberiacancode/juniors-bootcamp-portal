import { ChevronRightIcon } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';
import { Markdown } from '@/markdown';

export const generateMetadata = async () => ({
  title: intl.formatMessage({ id: 'page.tasksApi.metadata.title' }),
  description: intl.formatMessage({ id: 'page.tasksApi.metadata.description' })
});

const FAQ_ITEMS = [
  {
    question: 'page.tasksApi.section.faq.0.question',
    answer: 'page.tasksApi.section.faq.0.answer'
  },
  {
    question: 'page.tasksApi.section.faq.1.question',
    answer: 'page.tasksApi.section.faq.1.answer'
  },
  {
    question: 'page.tasksApi.section.faq.2.question',
    answer: 'page.tasksApi.section.faq.2.answer'
  },
  {
    question: 'page.tasksApi.section.faq.3.question',
    answer: 'page.tasksApi.section.faq.3.answer'
  }
] as const;

const API_CARDS = [
  {
    title: (
      <>
        R<span className='font-pixelify-sans text-[1.141em] font-medium'>e</span>st
      </>
    ),
    description: 'page.tasksApi.banner.rest',
    href: 'https://juniorsbootcamp.ru/api/rest#tag/pages'
  },
  {
    title: (
      <>
        Gra<span className='font-pixelify-sans text-[1.141em] font-medium'>p</span>hQL
      </>
    ),
    description: 'page.tasksApi.banner.graphql',
    href: 'https://juniorsbootcamp.ru/api/graphql'
  }
] as const;

const TasksApiPage = () => (
  <main className='content-container mt-10 mb-18 flex flex-col gap-18 sm:mt-12 sm:mb-22 sm:gap-22'>
    <section className='flex flex-col gap-8 sm:gap-10'>
      <Typography pixelify as='h1' variant='display'>
        A<span>P</span>I
      </Typography>

      <Typography variant='body-lg'>
        <IntlText path='page.tasksApi.description' />
      </Typography>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {API_CARDS.map(({ description, href, title }) => (
          <Card
            asChild
            key={href}
            className='gap-6 px-6 transition outline-none hover:-translate-0.5 hover:border-action-primary hover:shadow-[3px_3px_0_0_var(--color-border-hard)] focus:-translate-0.5 focus:border-action-primary focus:shadow-[3px_3px_0_0_var(--color-border-hard)] sm:px-12 sm:py-16'
          >
            <a href={href} rel='noopener noreferrer' target='_blank'>
              <Typography
                as='h2'
                className='drop-shadow-[3px_0_0_var(--color-action-primary)]'
                variant='heading-2xl'
              >
                {title}
              </Typography>
              <Typography as='p' variant='body-lg'>
                <IntlText path={description} />
              </Typography>
            </a>
          </Card>
        ))}
      </div>
    </section>

    <section className='flex flex-col gap-8 sm:gap-10'>
      <Typography as='h3' variant='heading-md'>
        <IntlText path='page.tasksApi.section.auth.title' />
      </Typography>
      <Typography as='p' variant='body-lg'>
        <IntlText path='page.tasksApi.section.auth.description' />
      </Typography>

      <Button asChild className='sm:w-fit' variant='outline'>
        <a href='https://juniorsbootcamp.ru/api/otps' rel='noopener noreferrer' target='_blank'>
          <IntlText path='page.tasksApi.section.auth.otpCodeLink' />
          <ChevronRightIcon />
        </a>
      </Button>
    </section>

    <section className='flex flex-col gap-8 sm:gap-10'>
      <Typography as='h3' variant='heading-md'>
        <IntlText path='page.tasksApi.section.goals.title' />
      </Typography>
      <Typography as='p' variant='body-lg'>
        <IntlText path='page.tasksApi.section.goals.description' />
      </Typography>

      <Button asChild className='sm:w-fit' variant='outline'>
        <a
          href='https://github.com/siberiacancode/juniors-bootcamp-backend'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IntlText path='page.tasksApi.section.goals.serverCodeLink' />
          <ChevronRightIcon />
        </a>
      </Button>
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
              <Markdown source={intl.formatMessage({ id: answer })} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </main>
);

export default TasksApiPage;
