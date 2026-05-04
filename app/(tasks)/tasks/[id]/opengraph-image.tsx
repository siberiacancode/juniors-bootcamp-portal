import { ImageResponse } from 'next/og';

import { getOGImage } from '@/utils/server';

const Image = async () => {
  const src = await getOGImage('task');

  return new ImageResponse(
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyItems: 'flex-end',
          zIndex: '10',
          background: 'white'
          // width: '100%',
          // height: '100%'
        }}
      >
        TEST
      </div>
      <img src={src} />
    </>
  );
};

export default Image;
