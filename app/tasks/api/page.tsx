import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';

import { ApiTypesSection, AuthenticationSection, FAQSection, GoalsSection } from './(components)';

const TasksApiPage = () => (
  <main className='flex flex-1 flex-col'>
    <div className='mx-auto max-w-[var(--max-width)] px-4 py-8'>
      <Breadcrumb className='mb-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href='/tasks'>Tasks</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>API</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <ApiTypesSection />

      <div className='flex flex-col gap-10'>
        <AuthenticationSection />
        <GoalsSection />
        <FAQSection />
      </div>
    </div>
  </main>
);

export default TasksApiPage;
