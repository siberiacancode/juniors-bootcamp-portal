import * as motion from 'motion/react-client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';

import { FAQ_ITEMS } from './constants';

export const FAQSection = () => (
  <motion.section
    transition={{
      duration: 0.6
    }}
    className='flex flex-col gap-8 sm:gap-10'
    initial={{ opacity: 0, y: '20%' }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Typography
      pixelify
      as='h2'
      className='text-[34px]/[42px] sm:text-[56px]/none lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.qa.faq.title' />
    </Typography>

    <Accordion collapsible defaultValue={FAQ_ITEMS[0].question} type='single'>
      {FAQ_ITEMS.map(({ answer, question }) => (
        <AccordionItem
          key={question}
          className='rounded-24 border-0 bg-secondary p-6'
          value={question}
        >
          <AccordionTrigger>
            <Typography as='span' className='font-medium' variant='title-md'>
              <IntlText path={question} />
            </Typography>
          </AccordionTrigger>
          <AccordionContent className='pt-4'>
            <Typography as='span' variant='body-sm'>
              <IntlText path={answer} />
            </Typography>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </motion.section>
);
