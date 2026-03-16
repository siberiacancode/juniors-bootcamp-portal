import fs from 'node:fs';
import { join } from 'node:path';

export interface GuideMetadata {
  description: string;
  labels: string[];
  title: string;
}

export const getGuides = async () => {
  const contentDir = join(process.cwd(), 'app', 'guides', '(contents)');
  const files = await fs.promises.readdir(contentDir);
  const guides = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .sort()
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const m = await import(`../(contents)/${slug}.mdx`);
        const metadata = m.metadata as GuideMetadata;

        return {
          number: slug.slice(0, 2),
          slug,
          title: metadata.title,
          description: metadata.description,
          labels: metadata.labels
        };
      })
  );

  return guides;
};
