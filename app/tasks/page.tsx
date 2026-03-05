import { IntlText } from '@/components/intl';

import { FAQSection, KitSection, TasksSection, WhySection } from './(components)/sections';

export const metadata = {
  title: 'Tasks - 1001 способ помочь новичкам',
  description:
    'Задания для начинающих разработчиков. Примеры кода, объяснения концепций и лучших практик frontend разработки.'
};

const TasksPage = async () => (
  <main className='flex flex-1 flex-col'>
    <div className='mx-auto max-w-(--max-width) px-4 py-8'>
      <div className='mb-6 text-start'>
        <h1 className='mb-4 font-pixelify-sans text-8xl font-bold'>
          <IntlText path='page.tasks.title' />
        </h1>
        <p className='text-xl'>
          <IntlText path='page.tasks.description' />
        </p>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          {/* <RoadmapSection /> */}
          <KitSection />
        </div>
        <TasksSection />
        <WhySection />
        <FAQSection />
      </div>
    </div>
  </main>
);

export default TasksPage;
