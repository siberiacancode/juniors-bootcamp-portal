import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

import { guidesSource } from '@/lib/source';
import { getNunitoBold, getOGTemplateBase } from '@/og';

interface GuideOpenGraphImageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Image = async ({ params }: GuideOpenGraphImageProps) => {
  const { slug } = await params;
  const page = guidesSource.getPage([slug]);

  if (!page) notFound();

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
        {page.data.title}
      </div>
    </>,
    {
      fonts: [nunito]
    }
  );
};

export default Image;
