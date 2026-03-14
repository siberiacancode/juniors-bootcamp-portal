import fs from 'node:fs';
import { join } from 'node:path';

interface BreadcrumbItemType {
  emoji: string;
  path: string;
  title: string;
}

export const dynamicParams = false;
export const generateStaticParams = async () => {
  const contentDir = join(process.cwd(), 'app', 'platform', '(contents)');
  const paths: string[][] = [];

  const scanDirectory = async (dir: string, currentPath: string[] = []) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        if (fs.existsSync(join(fullPath, 'index.mdx'))) {
          paths.push([...currentPath, entry.name]);
        }

        await scanDirectory(fullPath, [...currentPath, entry.name]);
      } else if (entry.name.endsWith('.mdx') && entry.name !== 'index.mdx') {
        paths.push([...currentPath, entry.name.replace('.mdx', '')]);
      }
    }
  };

  await scanDirectory(contentDir);
  return paths.map((path) => ({ slug: path }));
};

export async function generateMetadata({ params }: ContentsLayoutProps) {
  const { slug } = await params;
  const m = await import(`../(contents)/${slug.join('/')}/index.mdx`);

  return {
    title: `${m.metadata.emoji} ${m.metadata.title}`
  };
}

const getBreadcrumbs = async (slug: string[]) => {
  const breadcrumbs: BreadcrumbItemType[] = [];

  for (let i = 0; i < slug.length; i++) {
    const currentPath = slug.slice(0, i + 1).join('/');

    const m = await import(`../(contents)/${currentPath}/index.mdx`);

    breadcrumbs.push({
      ...m.metadata,
      path: `/platform/${currentPath}`
    });
  }

  return breadcrumbs;
};

interface ContentsLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}

const ContentsLayout = async ({ children, params }: ContentsLayoutProps) => {
  const { slug } = await params;
  const breadcrumbs = await getBreadcrumbs(slug);
  const lastBreadcrumb = breadcrumbs.at(-1);

  return (
    <main className='flex flex-1 flex-col'>
      <div className='content-container py-8'>
        {/* <Header breadcrumbs={breadcrumbs} /> */}

        <div className='mb-6 -ml-2.5 text-7xl'>{lastBreadcrumb!.emoji}</div>
        <h1 className='mb-8 text-5xl font-bold tracking-tight'>{lastBreadcrumb!.title}</h1>

        {children}
      </div>
    </main>
  );
};

export default ContentsLayout;
