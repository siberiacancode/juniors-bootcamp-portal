import * as motion from 'motion/react-client';

import { MatrixGrid } from '@/components/common';
import { AvoidCursor } from '@/components/common/motion';
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
    className='relative flex flex-col gap-8 sm:gap-10'
    initial={{ opacity: 0, y: '20%' }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
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

    <div aria-hidden className='pointer-events-none absolute inset-0 -z-1 select-none'>
      <AvoidCursor
        whileInView={{
          scale: 1,
          right: '12%',
          top: '15%'
        }}
        className='absolute rotate-45'
        initial={{ scale: 0, right: '8%', top: '11%' }}
        transition={{ delay: 0.7 }}
      >
        <MatrixGrid
          matrix={[
            [1, 1, 1],
            [0, 1, 0]
          ]}
          className='h-fit w-10 sm:w-16'
          fill='var(--color-orange-400)'
        />
      </AvoidCursor>
    </div>
  </motion.section>
);
