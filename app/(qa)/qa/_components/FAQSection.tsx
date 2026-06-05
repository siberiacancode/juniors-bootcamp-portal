import * as motion from 'motion/react-client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';

const FAQ_ITEMS = [0, 1, 2, 3, 4].map((index) => ({
  question: `page.testers.faq.${index}.question` as MessagePath,
  answer: `page.testers.faq.${index}.answer` as MessagePath
}));

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
      className='text-[42px]/[42px] sm:text-[56px]/none lg:text-[88px]/24'
      variant='display'
    >
      <IntlText path='page.testers.faq.title' />
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
  </motion.section>
);
