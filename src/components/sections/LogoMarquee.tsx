'use client';

import React from 'react';

const PARTNERS = [
  { name: 'BARIKA BÉNIN', src: '/enterprises/barika.png', id: 'barika' },
  { name: 'BLUE LIFE TECH', src: '/enterprises/blt.png', id: 'blt' },
  { name: 'CALL CONNECT', src: '/enterprises/callconnect.png', id: 'callconnect' },
  { name: 'FRANCE RECOURS', src: '/enterprises/france-recours.png', id: 'fr' },
  { name: 'LES COURS SOUNOU', src: '/enterprises/lcs.png', id: 'lcs' },
  { name: 'NEURAL BRIDGE (LONDRES)', src: '/enterprises/neural-bridge.png', id: 'nb' },
  { name: 'ROAJELF', src: '/enterprises/roajelf.png', id: 'roajelf' },
  { name: 'TPAPY', src: '/enterprises/tpapy.png', id: 'tpapy' },
  { name: 'YUSANET', src: '/enterprises/yusanet.png', id: 'yusanet' },
];

export default function LogoMarquee() {
  return (
    <section className="marquee-section">
      <div className="container">
        <div className="marquee-label-group">
          <span className="dot-orange" />
          <h3 className="marquee-title">ILS ONT FAIT CONFIANCE À MON EXPERTISE</h3>
          <span className="dot-turquoise" />
        </div>
      </div>

      <div className="marquee-container">
        {/* Row: Moving Left */}
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {PARTNERS.map((partner) => (
              <div key={`${partner.id}-1`} className="logo-card">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
            {PARTNERS.map((partner) => (
              <div key={`${partner.id}-1-dup`} className="logo-card">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          width: 100%;
          background: #FAF8F5;
          padding: 3rem 0;
          overflow: hidden;
          border-top: 1px solid #EAE4DA;
          border-bottom: 1px solid #EAE4DA;
          position: relative;
          z-index: 20;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .marquee-label-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dot-orange {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6B35;
        }

        .dot-turquoise {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00A896;
        }

        .marquee-title {
          font-family: var(--font-main, sans-serif);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #54667D;
          text-transform: uppercase;
          text-align: center;
        }

        .marquee-container {
          display: flex;
          flex-direction: column;
        }

        .marquee-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          padding-right: 2rem;
          align-items: center;
        }

        .logo-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 16px;
          padding: 0.75rem 1.5rem;
          height: 60px;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(9, 30, 58, 0.03);
          transition: all 0.3s ease;
        }

        .logo-card:hover {
          border-color: #00A896;
          box-shadow: 0 8px 20px rgba(0, 168, 150, 0.15);
          transform: translateY(-2px);
        }

        .partner-logo {
          height: 32px;
          width: auto;
          max-width: 90px;
          object-fit: contain;
          filter: grayscale(100%) contrast(1.2);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .logo-card:hover .partner-logo {
          opacity: 1;
          filter: grayscale(0%);
        }

        .partner-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #091E3A;
          letter-spacing: 0.05em;
        }

        .marquee-left .marquee-content {
          animation: scroll-left 35s linear infinite;
        }

        .marquee-left:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-section { padding: 2rem 0; }
          .logo-card { height: 50px; padding: 0.5rem 1rem; }
          .partner-logo { height: 26px; }
          .partner-name { font-size: 0.68rem; }
        }
      `}</style>
    </section>
  );
}
