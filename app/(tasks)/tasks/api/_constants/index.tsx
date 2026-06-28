export const FAQ_ITEMS = Array.from({ length: 4 }, (_, index) => ({
  question: `page.tasksApi.section.faq.${index}.question` as MessagePath,
  answer: `page.tasksApi.section.faq.${index}.answer` as MessagePath
}));

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
