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
    <main className='content-container mt-3 flex flex-col gap-18 sm:mt-6 sm:gap-22'>
      <HeroSection />

      <BentoSection />

      <ReviewsSection />

      {/* <section className='content-container flex flex-col gap-8 sm:gap-10'>
        <Typography pixelify as='h2' variant='display'>
          <IntlText path='page.home.section.studentsProjects.title' />
        </Typography>
      </section> */}

      <FAQSection />
    </main>

    <SubfooterSection />
  </>
);

export default HomePage;
