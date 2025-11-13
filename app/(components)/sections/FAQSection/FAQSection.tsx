'use client';

import { motion } from 'framer-motion';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import { IntlText } from '@/components/intl';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

const FAQ_ITEMS = [
  {
    question: 'section.faq.0.question',
    answer: 'section.faq.0.answer'
  },
  {
    question: 'section.faq.1.question',
    answer: 'section.faq.1.answer'
  },
  {
    question: 'section.faq.2.question',
    answer: 'section.faq.2.answer'
  },
  {
    question: 'section.faq.3.question',
    answer: 'section.faq.3.answer'
  }
];

export const FAQSection = () => {
  const intl = useIntl();

  return (
    <>
      <motion.section
        animate={{ opacity: 1 }}
        className='container mx-auto mt-20 flex flex-col items-center justify-center px-8 md:mt-40 lg:px-4'
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex w-full max-w-4xl items-start'>
          <h2 className='font-pixelify-sans mb-12 text-8xl font-bold'>
            <IntlText path='section.faq.title' />
          </h2>
        </div>

        <div className='flex w-full max-w-4xl flex-col items-center justify-center'>
          <Accordion className='flex w-full flex-col gap-4' type='single' collapsible>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                className='rounded-lg border px-6'
                value={index.toString()}
              >
                <AccordionTrigger className='text-left font-medium hover:no-underline'>
                  <IntlText path={item.question as MessagePath} />
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground pb-4'>
                  <div className='prose prose-sm dark:prose-invert max-w-none'>
                    <ReactMarkdown>
                      {intl.formatMessage({ id: item.answer as MessagePath })}
                    </ReactMarkdown>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>
    </>
  );
};
