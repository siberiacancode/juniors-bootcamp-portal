import type { ImageResponseOptions } from 'next/server';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type OGImageFontOptions = NonNullable<ImageResponseOptions['fonts']>[number];

export const getNunitoBold = async (): Promise<OGImageFontOptions> => {
  const data = await readFile(join(process.cwd(), 'src/og/fonts', 'Nunito-Bold.ttf'));
  return {
    data,
    style: 'normal',
    weight: 700,
    name: 'Nunito'
  };
};
