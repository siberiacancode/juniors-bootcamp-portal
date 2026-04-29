'use server';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type OGImagePath = keyof typeof import('@/assets/og-images');

export const getOGImage = async (path: OGImagePath) => {
  const data = await readFile(join(process.cwd(), 'src/assets/og-images', `${path}.png`), 'base64');
  return `data:image/png;base64,${data}`;
};
