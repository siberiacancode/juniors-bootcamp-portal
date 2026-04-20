'use client';
import { motion } from 'motion/react';

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
  <section className='relative flex flex-col gap-8 sm:gap-10'>
    <Typography asChild pixelify variant='display'>
      <motion.h2
        transition={{
          duration: 0.6
        }}
        initial={{ opacity: 0, x: '-10%' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <IntlText path='page.home.section.faq.title' />
      </motion.h2>
    </Typography>

    <Accordion collapsible defaultValue={FAQ_ITEMS[0].question} type='single'>
      {FAQ_ITEMS.map(({ answer, question }, index) => (
        <AccordionItem asChild key={question} value={question}>
          <motion.div
            transition={{
              delay: (index + 1) * 0.3,
              duration: 0.6
            }}
            initial={{ opacity: 0, x: index % 2 === 0 ? '10%' : '-10%' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <AccordionTrigger>
              <IntlText path={question} />
            </AccordionTrigger>
            <AccordionContent>
              <IntlText path={answer} />
            </AccordionContent>
          </motion.div>
        </AccordionItem>
      ))}
    </Accordion>

    <div
      aria-hidden
      suppressHydrationWarning
      className='pointer-events-none absolute inset-0 -z-1 select-none'
    >
      <AvoidCursor
        whileInView={{
          scale: 1,
          right: '12%',
          top: '15%'
        }}
        className='absolute rotate-45'
        initial={{ scale: 0, right: '8%', top: '11%' }}
        transition={{ delay: 0.5 }}
      >
        <MatrixGrid
          matrix={[
            [1, 1, 1],
            [0, 1, 0]
          ]}
          className='h-fit w-8 sm:w-12'
          fill='var(--color-orange-400)'
        />
      </AvoidCursor>
    </div>
  </section>
);
