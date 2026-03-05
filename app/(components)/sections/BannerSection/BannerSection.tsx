'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Logo } from '@/components/shared';
import { Button } from '@/components/ui';

export const BannerSection = () => (
  <section
    className='
    relative flex w-full flex-1 items-center justify-center overflow-hidden
    bg-background px-6 py-16 text-center
  '
  >
    <div
      className='
      relative z-10 flex flex-col items-center justify-center gap-12
    '
    >
      <Logo className='w-[800px]' />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Button className='font-pixelify-sans'>
          <Link href='/tasks'>Start</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);
