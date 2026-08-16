import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const alt = 'Adera SMS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoPath = path.join(process.cwd(), 'public', 'aderasms-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c1a12', // Very dark green
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={logoBase64} width={180} height={180} style={{ marginBottom: 40 }} />
        <h1
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: '#FAF6ED', // cream
            margin: 0,
          }}
        >
          Adera<span style={{ color: '#E8B65A' }}> SMS</span>
        </h1>
        <p
          style={{
            fontSize: 48,
            color: '#D4A373', // gold-soft
            marginTop: 40,
          }}
        >
          No more sorry I missed your call
        </p>
      </div>
    ),
    { ...size }
  );
}
