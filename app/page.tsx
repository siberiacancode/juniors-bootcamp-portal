import * as motion from 'motion/react-client';
import Link from 'next/link';

import { Logo } from '@/components/shared';
import { Button } from '@/components/ui';

const HomePage = () => (
  <>
    <section className='relative flex w-full flex-1 items-center justify-center overflow-hidden bg-background px-6 py-16 text-center'>
      <div className='relative z-10 flex flex-col items-center justify-center gap-12'>
        <Logo className='w-200' />

        <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }}>
          <Button asChild className='font-pixelify-sans'>
            <Link href='/tasks'>Start</Link>
          </Button>
        </motion.div>
      </div>
    </section>
    {/* 
    <StatisticSection />
    <FAQSection />
    <SubFooterSection /> */}
  </>
);

export default HomePage;
