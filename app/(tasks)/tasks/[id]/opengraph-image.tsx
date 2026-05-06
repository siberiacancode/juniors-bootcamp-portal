import { ImageResponse } from 'next/og';

import { intl } from '@/intl/server';
import { getNunitoBold, getOGTemplateBase } from '@/og';

import { TASKS } from './_constants';

interface TaskOpenGraphImageProps {
  params: Promise<{
    id: string;
  }>;
}

const Image = async ({ params }: TaskOpenGraphImageProps) => {
  const { id } = await params;

  const title = intl.formatMessage({ id: TASKS[id as keyof typeof TASKS].title });

  const src = await getOGTemplateBase('task');
  const nunito = await getNunitoBold();

  return new ImageResponse(
    <>
      <img src={src} />
      <div
        style={{
          fontSize: '60px',
          lineHeight: '68px',
          position: 'absolute',
          bottom: '100px',
          left: '80px'
        }}
      >
        {title}
      </div>
    </>,
    {
      fonts: [nunito]
    }
  );
};

export default Image;
