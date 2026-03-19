'use client';

import { useIntl } from 'react-intl';

import { FAQSection as _FAQSection } from '@/app/(components)/sections';

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
  },
  {
    question: 'page.tasks.section.faq.3.question',
    answer: 'page.tasks.section.faq.3.answer'
  }
];

export const FAQSection = () => {
  const intl = useIntl();

  return (
    <_FAQSection
      items={FAQ_ITEMS.map((item) => ({
        question: intl.formatMessage({ id: item.question as MessagePath }),
        answer: intl.formatMessage({ id: item.answer as MessagePath })
      }))}
    />
  );
};
