/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            fontSize: 100,
            fontWeight: 900
          }}
        >
          <img
            alt=""
            style={{ height: '100%', width: '100%', position: 'absolute', objectFit: 'cover' }}
            src="https://www.worldofcryptopups.com/background.png"
          />
          <div style={{ color: '#fff' }}>{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
