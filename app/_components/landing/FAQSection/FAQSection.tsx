import { MotionMatrixGrid } from '@/components/common/motion';
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
  <section className='relative flex flex-col gap-8 sm:gap-10'>
    <Typography pixelify as='h2' variant='display'>
      <IntlText path='page.home.section.faq.title' />
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

    <div aria-hidden className='absolute inset-0 -z-1'>
      <MotionMatrixGrid
        matrix={[
          [1, 1, 1],
          [0, 1, 0]
        ]}
        whileInView={{
          opacity: 1,
          right: '12%',
          top: '15%'
        }}
        className='absolute w-8 rotate-45 sm:w-12'
        fill='var(--color-orange-400)'
        initial={{ opacity: 0, right: '-1%', top: '30%' }}
        viewport={{ once: true }}
      />
    </div>
  </section>
);
