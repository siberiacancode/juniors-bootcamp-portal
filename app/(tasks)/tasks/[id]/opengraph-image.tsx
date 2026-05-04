import { ImageResponse } from 'next/og';

import { intl } from '@/intl/server';
import { getNunitoBold } from '@/og/fonts';
import { getOGTemplateSrc } from '@/og/templates';

import { TASKS } from './_constants';

const Image = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const title = intl.formatMessage({ id: TASKS[id as keyof typeof TASKS].title });

  const src = await getOGTemplateSrc('task');
  const nunito = await getNunitoBold();

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'white',
        padding: '100px 80px',
        height: '100%',
        width: '100%'
      }}
    >
      <img
        style={{
          width: '388px',
          height: '153px'
        }}
        src={src}
      />
      <div style={{ fontSize: '60px', lineHeight: '68px' }}>{title}</div>
    </div>,
    {
      fonts: [nunito]
    }
  );
};

export default Image;
