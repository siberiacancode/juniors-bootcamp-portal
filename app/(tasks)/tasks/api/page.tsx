import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { IntlText } from '@/components/intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardHeader
} from '@/components/ui';

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
      <h1 className='font-nunito text-[56px] leading-none font-bold sm:text-[170px]'>
        A<span className='font-pixelify-sans text-[1.141em] font-medium'>P</span>I
      </h1>
      <p className='text-2xl'>
        <IntlText path='page.tasksApi.description' />
      </p>
      <div className='flex flex-col gap-6 sm:flex-row'>
        {API_CARDS.map(({ description, href, title }) => (
          <Link key={href} className='w-full' href={href} rel='noopener noreferrer' target='_blank'>
            <Card className='h-full gap-6 transition hover:-translate-0.5 hover:border-action-primary hover:shadow-[3px_3px_0_0_var(--color-border-hard)] sm:py-16'>
              <CardHeader className='px-4 sm:px-12'>
                <h2 className='font-nunito text-5xl font-extrabold drop-shadow-[3px_0_0_var(--color-action-primary)] xl:text-8xl'>
                  {title}
                </h2>
              </CardHeader>
              <CardContent className='px-4 sm:px-12'>
                <IntlText path={description} />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>

    <section className='flex flex-col gap-8 sm:gap-10'>
      <h3 className='font-nunito text-5xl font-bold'>
        <IntlText path='page.tasksApi.section.auth.title' />
      </h3>

      <p className='text-2xl'>
        <IntlText path='page.tasksApi.section.auth.description' />
      </p>

      <Button asChild className='sm:w-fit' variant='outline'>
        <Link href='https://juniorsbootcamp.ru/api/otps' rel='noopener noreferrer' target='_blank'>
          <IntlText path='page.tasksApi.section.auth.otpCodeLink' />
          <ChevronRightIcon />
        </Link>
      </Button>
    </section>

    <section className='flex flex-col gap-8 sm:gap-10'>
      <h3 className='font-nunito text-5xl font-bold'>
        <IntlText path='page.tasksApi.section.goals.title' />
      </h3>

      <p className='text-2xl'>
        <IntlText path='page.tasksApi.section.goals.description' />
      </p>

      <Button asChild className='sm:w-fit' variant='outline'>
        <Link
          href='https://github.com/siberiacancode/juniors-bootcamp-backend'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IntlText path='page.tasksApi.section.goals.serverCodeLink' />
          <ChevronRightIcon />
        </Link>
      </Button>
    </section>

    <section className='flex flex-col gap-8 sm:gap-6'>
      <h3 className='font-nunito text-5xl font-bold'>
        <IntlText path='faq.title' />
      </h3>

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

export default TasksApiPage;
