'use server';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type OGTemplatePath = 'guide' | 'task';

export const getOGTemplateSrc = async (path: OGTemplatePath) => {
  const data = await readFile(join(process.cwd(), 'src/og/templates', `${path}.png`), 'base64');
  return `data:image/png;base64,${data}`;
};
