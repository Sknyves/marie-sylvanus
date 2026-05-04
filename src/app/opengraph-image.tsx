import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KINKPON Marie Sylvanus Mahougnon — Creative Developer & AI Consultant, Cotonou Bénin';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent line gauche */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '4px',
            height: '100%',
            background: '#ffffff',
          }}
        />

        {/* Grid décoratif en arrière-plan */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            bottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            opacity: 0.08,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px' }}>
              {[...Array(8)].map((_, j) => (
                <div key={j} style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%' }} />
              ))}
            </div>
          ))}
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#ffffff',
            }}
          />
          <span style={{ color: '#888', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Portfolio · Cotonou, Bénin
          </span>
        </div>

        {/* Contenu principal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#444', fontSize: '18px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            KINKPON
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '96px',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-4px',
              textTransform: 'uppercase',
            }}
          >
            MARIE
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '96px',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-4px',
              textTransform: 'uppercase',
            }}
          >
            SYLVANUS
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            style={{
              color: '#555',
              fontSize: '16px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              borderTop: '1px solid #333',
              paddingTop: '16px',
            }}
          >
            Creative Developer & AI Consultant
          </div>
          <div
            style={{
              width: '80px',
              height: '80px',
              border: '1px solid #333',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ color: '#444', fontSize: '24px' }}>MS</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
