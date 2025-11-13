'use client';

import { motion } from 'framer-motion';

import { IntlText } from '@/components/intl';
import { VelocityScroll } from '@/components/ui';

export const SubFooterSection = () => (
  <motion.section
    className='relative mt-40 overflow-x-clip'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <VelocityScroll className='text-muted-foreground text-8xl' defaultVelocity={1}>
      <IntlText path='section.subfooter.title' />
    </VelocityScroll>

    <motion.img
      alt='pixel decoration'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 -left-[50px] z-20 w-[120px] -translate-y-[130px] md:-left-[100px] md:w-[160px] md:-translate-y-[200px] lg:left-[20px] lg:w-[200px] lg:-translate-y-[200px]'
      initial={{ x: -50, y: -20, opacity: 0 }}
      src='/images/second-pixel.png'
      transition={{ duration: 0.4, delay: 0.2 }}
    />

    <motion.img
      alt='pixel decoration'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 -right-[300px] z-20 w-[500px] -translate-y-[150px] md:-right-[400px] md:w-[600px] md:-translate-y-[120px] lg:-right-[550px] lg:w-[700px] lg:-translate-y-[200px] xl:-right-[600px]'
      initial={{ x: 60, y: 30, opacity: 0 }}
      src='/images/third-pixel.png'
      transition={{ duration: 0.4, delay: 0.2 }}
    />
  </motion.section>
);
