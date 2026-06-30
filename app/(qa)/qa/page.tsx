import type { Metadata } from 'next';

import { intl } from '@/intl/server';

import {
  FAQSection,
  HeroSection,
  PracticeSection,
  // ReviewsSection,
  SkillsSection,
  SocialsSection
} from './_components';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.qa.metadata.title' }),
  description: intl.formatMessage({ id: 'page.qa.metadata.description' })
};

const QAPage = () => (
  <main className='content-container mt-10 flex flex-col gap-18 px-6 sm:mt-12 sm:gap-22'>
    <HeroSection />
    <SkillsSection />
    <PracticeSection />
    <FAQSection />
    {/* <ReviewsSection /> */}
    <SocialsSection />
  </main>
);

export default QAPage;
