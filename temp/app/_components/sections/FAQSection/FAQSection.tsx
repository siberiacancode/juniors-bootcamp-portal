import ReactMarkdown from 'react-markdown';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

interface FAQItem {
  answer: string;
  question: string;
}

export interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection = ({ items }: FAQSectionProps) => (
  <>
    <section className='flex-col items-center justify-center'>
      <div className='flex w-full items-start'>
        <h2 className='text-5xl mb-12 font-pixelify-sans font-bold'>FAQ</h2>
      </div>

      <div className='flex w-full flex-col items-center justify-center'>
        <Accordion collapsible className='flex w-full flex-col gap-4' type='single'>
          {items.map((item, index) => (
            <AccordionItem key={index} className='rounded-20 border px-6' value={index.toString()}>
              <AccordionTrigger className='text-lg text-left font-medium hover:no-underline'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='pb-4 text-muted-fg'>
                <div className='text-lg prose prose-sm max-w-none dark:prose-invert'>
                  <ReactMarkdown>{item.answer}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);
