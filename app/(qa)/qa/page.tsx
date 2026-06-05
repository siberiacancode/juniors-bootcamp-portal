import type { Metadata } from 'next';

import { intl } from '@/intl/server';

import {
  FAQSection,
  FinalCardsSection,
  HeroSection,
  PracticeSection,
  ReviewsSection,
  SkillsSection
} from './_components';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.testers.metadata.title' }),
  description: intl.formatMessage({ id: 'page.testers.metadata.description' })
};

const TestersPage = () => (
  <main className='content-container mt-10 mb-22 flex flex-col gap-18 sm:mt-12 sm:mb-26 sm:gap-22'>
    <HeroSection />
    <SkillsSection />
    <PracticeSection />
    <FAQSection />
    <ReviewsSection />
    <FinalCardsSection />
  </main>
);

export default TestersPage;
