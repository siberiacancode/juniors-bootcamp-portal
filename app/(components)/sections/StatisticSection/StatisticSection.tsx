'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, GraduationCapIcon, UsersIcon } from 'lucide-react';
import React from 'react';

import { IntlText } from '@/components/intl';
import { Badge } from '@/components/ui';

export const StatisticSection = () => (
  <motion.section
    className='container mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center px-4 lg:mt-40'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <motion.div
      className='text-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className='hidden text-xl lg:block lg:text-2xl'>
        <IntlText
          values={{
            year: 2016,
            badge: (year) => (
              <Badge className='bg-pink-500 px-2 text-xl text-white lg:text-2xl'>{year}</Badge>
            )
          }}
          path='section.statistic.since'
        />
      </div>
    </motion.div>

    <motion.div
      className='md:bg-card mt-6 flex w-full flex-wrap items-center justify-center gap-12 p-8 md:flex-row md:justify-between md:rounded-4xl md:border lg:gap-20'
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='flex flex-col items-center justify-center gap-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className='flex justify-center gap-4'>
          <div className='rounded-lg bg-fuchsia-100 p-3'>
            <GraduationCapIcon className='size-6 text-fuchsia-600' />
          </div>
          <div className='text-4xl font-bold'>5000+</div>
        </div>
        <p className='text-sm'>
          <IntlText path='section.statistic.students' />
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center justify-center gap-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className='flex justify-center gap-4'>
          <div className='rounded-lg bg-violet-100 p-3'>
            <BriefcaseIcon className='size-6 text-violet-600' />
          </div>
          <div className='text-4xl font-bold'>700+</div>
        </div>
        <p className='text-sm'>
          <IntlText path='section.statistic.employed' />
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center justify-center gap-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className='flex justify-center gap-4'>
          <div className='rounded-lg bg-amber-100 p-3'>
            <UsersIcon className='size-6 text-amber-600' />
          </div>
          <div className='text-4xl font-bold'>300+</div>
        </div>
        <p className='text-sm'>
          <IntlText path='section.statistic.mentors' />
        </p>
      </motion.div>
    </motion.div>
  </motion.section>
);
