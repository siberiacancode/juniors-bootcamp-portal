import { ChevronLeftIcon, ChevronRightIcon, LockIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button, Typography } from '@/components/ui';
import { DocBody, getTaskDoc } from '@/docs';
import { getTaskSettings } from '@/docs/server';

import { TaskDocSidebar, TaskDocToc, TaskSettingsSwitcher } from './_components';

interface TaskDocPageProps {
  params: Promise<{ id: string; slug: string[] }>;
}

// контент зависит от cookie с настройками задания
export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params }: TaskDocPageProps) => {
  const { id, slug } = await params;
  const taskDoc = getTaskDoc(id, slug, await getTaskSettings());
  if (!taskDoc) return {};

  return { title: taskDoc.title, description: taskDoc.description };
};

const TaskDocPage = async ({ params }: TaskDocPageProps) => {
  const { id, slug } = await params;
  const settings = await getTaskSettings();
  const taskDoc = getTaskDoc(id, slug, settings);

  if (!taskDoc) notFound();

  const { doc, lock, tree, neighbours, page } = taskDoc;

  return (
    <main className='content-container mt-10 mb-22 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)_200px]'>
      <aside className='flex flex-col gap-6'>
        <Link className='flex items-center gap-1 text-[14px]/5' href={`/tasks/${id}`}>
          <ChevronLeftIcon className='size-4' /> {tree.name}
        </Link>
        <TaskDocSidebar activeUrl={page.url} nodes={tree.children} />
      </aside>

      <article className='flex min-w-0 flex-col gap-8'>
        <TaskSettingsSwitcher initialValue={settings} />

        <Typography as='h1' variant='heading-xl'>
          {taskDoc.title}
        </Typography>

        {doc && <DocBody doc={doc} />}

        {lock && (
          <div className='flex items-center gap-3 rounded-12 border p-6'>
            <LockIcon className='size-5' />
            {lock.reason === 'level' ? (
              <span>Страница откроется на уровне {lock.level}</span>
            ) : (
              <span>Эта страница не относится к выбранному стеку</span>
            )}
          </div>
        )}

        <nav className='flex justify-between gap-4'>
          {neighbours.previous && (
            <Button asChild variant='outline'>
              <Link href={neighbours.previous.url}>
                <ChevronLeftIcon /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button asChild className='ml-auto' variant='outline'>
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <ChevronRightIcon />
              </Link>
            </Button>
          )}
        </nav>
      </article>

      <aside className='hidden lg:block'>
        {!!doc?.toc.length && <TaskDocToc items={doc.toc} />}
      </aside>
    </main>
  );
};

export default TaskDocPage;
