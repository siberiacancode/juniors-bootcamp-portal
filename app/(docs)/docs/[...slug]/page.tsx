import { findPath } from 'fumadocs-core/page-tree';
import { notFound } from 'next/navigation';

import { Typography } from '@/components/ui';
import { source } from '@/lib/source';
import { cn } from '@/lib/utils';

import { SidebarNode as DocSidebar, DocToc, SidebarSettings } from './_components';

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export const generateStaticParams = () => source.generateParams();

export const generateMetadata = async ({ params }: DocPageProps) => {
  const { slug } = await params;

  const page = source.getPage(slug);

  return {
    title: page?.data.title,
    description: page?.data.description
  };
};

const DocPage = async ({ params }: DocPageProps) => {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const tree = source.getPageTree();
  const pagePath = findPath(
    tree.children,
    (node) => node.type === 'page' && node.url === page.url,
    { includeSeparator: false }
  );

  const activeRoot = pagePath?.find((node) => node.type === 'folder' && node.root);
  const sidebarNodes = activeRoot ? [activeRoot] : tree.children;

  return (
    <div className='mx-auto mb-18 flex max-w-350 gap-12 pt-40 lg:pt-10'>
      {/*Sidebar*/}
      <aside className='hidden lg:block'>
        <nav
          className={cn(
            'sticky top-8 flex max-h-[calc(100vh-10rem)] min-w-64 flex-col gap-1 overflow-y-auto pr-8 pb-10',
            'scrollbar-thin [scrollbar-color:var(--color-muted)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border-soft [&::-webkit-scrollbar-track]:bg-transparent'
          )}
        >
          <SidebarSettings />

          {sidebarNodes.map((node) => (
            <DocSidebar key={node.$id} activeUrl={page.url} node={node} />
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className='min-w-0'>
        <header className='space-y-2'>
          <Typography as='h1' variant='heading-md'>
            {page.data.title}
          </Typography>
          <Typography as='p' variant='body-md'>
            {page.data.description}
          </Typography>
        </header>

        <article className='prose max-w-none min-w-160 prose-neutral dark:prose-invert'>
          <MDX />
        </article>
      </main>

      {/* TOC */}
      <aside className='hidden xl:block'>
        <DocToc toc={page.data.toc} />
      </aside>
    </div>
  );
};

export default DocPage;
