import fs from 'node:fs';
import { join } from 'node:path';

import { getGuideModule } from './getGuideModule';

export const getGuides = async () => {
  const contentDir = join(process.cwd(), 'public', 'contents', 'guides');
  const files = await fs.promises.readdir(contentDir);
  const guides = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .sort()
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const {
          metadata: { description, labels, title }
        } = await getGuideModule(slug);

        return {
          number: slug.slice(0, 2),
          slug,
          title,
          description,
          labels
        };
      })
  );

  return guides;
};
