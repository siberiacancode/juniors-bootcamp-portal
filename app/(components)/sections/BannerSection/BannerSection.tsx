'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { SECTIONS } from '@/app/(constants)';
import { IntlText } from '@/components/intl';
import { Logo } from '@/components/shared';
import { AnimatedShinyText, Pointer } from '@/components/ui';

export const BannerSection = () => {
  const intl = useIntl();

  return (
    <section className='relative mt-20 overflow-x-clip lg:mt-40'>
      <div className='container mx-auto flex flex-col items-center justify-center px-4'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='z-10 text-center'
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex items-center justify-center'>
            <div className='group bg-card rounded-full border border-black/5 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                <Link href='/platform/road-map'>
                  <IntlText path='section.banner.start' />
                </Link>
                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </AnimatedShinyText>
            </div>
          </div>

          <div className='mt-8 flex flex-col items-center justify-center px-4'>
            <Logo alt={intl.formatMessage({ id: 'header.logo.alt' })} className='w-[700px]' />

            <p className='text-md mt-6 mb-8 max-w-[580px] opacity-80 lg:mt-12 lg:text-xl'>
              <IntlText path='section.banner.description' />
            </p>
          </div>

          <div className='mt-4 flex max-w-4xl flex-wrap justify-center gap-2 lg:mt-12'>
            {SECTIONS.sort((a, b) => Number(a.disabled) - Number(b.disabled)).map(
              ({ title, Icon, href, disabled }) => (
                <div key={title}>
                  {disabled && (
                    <div className='opacity-50'>
                      <div className='bg-card flex flex-col gap-2 rounded-lg border border-black/9 px-8 py-3 lg:px-12'>
                        <div className='text-md lg:text-xl'>
                          <IntlText path={title as MessagePath} />
                        </div>
                      </div>
                    </div>
                  )}
                  {!disabled && (
                    <Link href={href}>
                      <motion.div whileHover={{ scale: 1.04 }}>
                        <div className='bg-card flex flex-col gap-2 rounded-lg border border-black/9 px-8 py-3 lg:px-12'>
                          <div className='text-md lg:text-xl'>
                            <IntlText path={title as MessagePath} />
                          </div>
                        </div>
                      </motion.div>
                      <Pointer className='z-10'>
                        <Icon className='size-8' />
                      </Pointer>
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>

      <motion.img
        alt='pixel'
        animate={{ x: 0, y: 0, opacity: 1 }}
        className='absolute top-1/2 -right-[70px] w-[120px] -translate-y-[400px] lg:right-14 lg:w-[200px] lg:-translate-y-[500px] dark:opacity-80'
        initial={{ x: 70, y: -30, opacity: 0 }}
        src='/images/second-pixel.png'
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.img
        alt='pixel'
        animate={{ x: 0, y: 0, opacity: 1 }}
        className='absolute top-1/2 -left-[320px] w-[500px] translate-y-[55px] lg:-left-[400px] lg:w-[800px] lg:-translate-y-[200px] 2xl:-left-[400px] 2xl:w-[900px] dark:opacity-80'
        initial={{ x: -70, y: 20, opacity: 0 }}
        src='/images/first-pixel.png'
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.img
        alt='pixel'
        animate={{ x: 0, y: 0, opacity: 1 }}
        className='absolute top-1/2 -right-[300px] w-[500px] translate-y-[180px] lg:-right-[400px] lg:w-[800px] lg:translate-y-[200px] 2xl:-right-[300px] 2xl:w-[900px] dark:opacity-80'
        initial={{ x: 70, y: 60, opacity: 0 }}
        src='/images/first-pixel.png'
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </section>
  );
};
