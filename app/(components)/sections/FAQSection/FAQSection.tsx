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
        <h2 className='font-pixelify-sans mb-12 text-5xl font-bold'>FAQ</h2>
      </div>

      <div className='flex w-full flex-col items-center justify-center'>
        <Accordion collapsible className='flex w-full flex-col gap-4' type='single'>
          {items.map((item, index) => (
            <AccordionItem key={index} className='rounded-lg border px-6' value={index.toString()}>
              <AccordionTrigger className='text-left text-lg font-medium hover:no-underline'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground pb-4'>
                <div className='prose prose-sm dark:prose-invert max-w-none text-lg'>
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
