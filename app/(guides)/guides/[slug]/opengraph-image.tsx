import { ImageResponse } from 'next/og';

import { getNunitoBold, getOGTemplateBase } from '@/og';

import { getGuideModule } from '../../_helpers';

interface GuideOpenGraphImageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Image = async ({ params }: GuideOpenGraphImageProps) => {
  const { slug } = await params;

  const title = (await getGuideModule(slug)).metadata.title;

  const src = await getOGTemplateBase('guide');
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
