import { intl } from '@/intl/server';

import {
  BentoSection,
  FAQSection,
  HeroSection,
  ReviewsSection,
  SubfooterSection
} from './_components/landing';

export const generateMetadata = () => ({
  title: intl.formatMessage({ id: 'page.home.metadata.title' }),
  description: intl.formatMessage({ id: 'page.home.metadata.description' })
});

const HomePage = () => (
  <>
    <main className='content-container'>
      <HeroSection />

      <div className='flex flex-col gap-22 sm:gap-26'>
        <BentoSection />

        <ReviewsSection />

        <FAQSection />
      </div>
    </main>

    <SubfooterSection />
  </>
);

export default HomePage;
