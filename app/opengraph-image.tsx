import { ImageResponse } from 'next/og';

import { getOGImage } from '@/utils/server';

const Image = async () => {
  const src = await getOGImage('landing');

  return new ImageResponse(<img src={src} />);
};

export default Image;
