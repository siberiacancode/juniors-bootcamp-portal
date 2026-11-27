import type { Metadata } from 'next';

import type { Project } from '@/types';

import { intl } from '@/intl/server';
import projects from '@/public/projects/projects.json' with { type: 'json' };

import { GallerySection, HeroSection, SubfooterSection } from './_sections';

export const metadata: Metadata = {
  title: intl.formatMessage({ id: 'page.projects.metadata.title' }),
  description: intl.formatMessage({ id: 'page.projects.metadata.description' })
};

export const dynamic = 'force-static';

const ProjectsPage = () => (
  <main className='content-container mt-10 mb-18 flex flex-col gap-16 sm:mt-12 sm:mb-24 sm:gap-20'>
    <HeroSection />
    <GallerySection projects={projects as Project[]} />
    <SubfooterSection />
  </main>
);

export default ProjectsPage;
