export const FAQ_ITEMS = [
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

export const API_CARDS = [
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
