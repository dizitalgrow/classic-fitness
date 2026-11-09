import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Classic Fitness - Archival Noir HSR Layout Bengaluru';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0e0e11',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '12px solid #16161a',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#111014',
              borderRadius: '4px',
              border: '2px solid #ffc526',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              color: '#f3f4f2',
              fontSize: '32px',
              fontWeight: 900,
            }}
          >
            CF
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#f3f4f2', letterSpacing: '-1px' }}>
              CLASSIC
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#ffc526', letterSpacing: '4px' }}>
              FITNESS
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            backgroundColor: '#16161a',
            color: '#ffc526',
            border: '1px solid rgba(255, 197, 38, 0.4)',
            borderRadius: '9999px',
            padding: '6px 16px',
            fontSize: '15px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '20px',
          }}
        >
          HSR LAYOUT • SECTOR 1 • BENGALURU
        </div>

        <div
          style={{
            display: 'flex',
            color: '#f3f4f2',
            fontSize: '60px',
            fontWeight: 900,
            lineHeight: 1.02,
            marginBottom: '20px',
            maxWidth: '960px',
            textTransform: 'uppercase',
          }}
        >
          BUILT THROUGH DISCIPLINE.
        </div>

        <div
          style={{
            display: 'flex',
            color: '#b3b2b2',
            fontSize: '24px',
            maxWidth: '900px',
            lineHeight: 1.5,
          }}
        >
          Strength is earned. Progress is built. High-contrast coaching opposite HSR Government School.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
