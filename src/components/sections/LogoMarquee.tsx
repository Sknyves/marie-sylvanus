'use client';

import React from 'react';

const PARTNERS = [
  { name: 'BARIKA', src: '/enterprises/barika.png', id: 'barika' },
  { name: 'BLUE LIFE TECH', src: '/enterprises/blt.png', id: 'blt' },
  { name: 'CALL CONNECT', src: '/enterprises/callconnect.png', id: 'callconnect' },
  { name: 'FRANCE RECOURS', src: '/enterprises/france-recours.png', id: 'fr' },
  { name: 'LES COURS SOUNOU', src: '/enterprises/lcs.png', id: 'lcs' },
  { name: 'NEURAL BRIDGE', src: '/enterprises/neural-bridge.png', id: 'nb' },
  { name: 'ROAJELF', src: '/enterprises/roajelf.png', id: 'roajelf' },
  { name: 'TPAPY', src: '/enterprises/tpapy.png', id: 'tpapy' },
  { name: 'YUSANET', src: '/enterprises/yusanet.png', id: 'yusanet' },
];

export default function LogoMarquee() {
  return (
    <section className="marquee-section">
      <div className="container">
        <h3 className="marquee-title">COLLABORATIONS SÉLECTIONNÉES</h3>
      </div>

      <div className="marquee-container">
        {/* Row 1: Moving Left */}
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {PARTNERS.map((partner) => (
              <div key={`${partner.id}-1`} className="logo-item">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
              </div>
            ))}
            {PARTNERS.map((partner) => (
              <div key={`${partner.id}-1-dup`} className="logo-item">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="marquee-row marquee-right">
          <div className="marquee-content">
            {[...PARTNERS].reverse().map((partner) => (
              <div key={`${partner.id}-2`} className="logo-item">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
              </div>
            ))}
            {[...PARTNERS].reverse().map((partner) => (
              <div key={`${partner.id}-2-dup`} className="logo-item">
                <img src={partner.src} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          width: 100%;
          background: #fff;
          padding: 20px 0;
          overflow: hidden;
          border-top: 1px solid #f5f5f5;
          border-bottom: 1px solid #f5f5f5;
          position: relative;
          z-index: 50;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
          margin-bottom: 15px;
        }
        .marquee-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: #bbb;
          text-transform: uppercase;
          text-align: center;
        }
        .marquee-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .marquee-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: flex;
          gap: 60px;
          padding-right: 60px;
          align-items: center;
        }
        
        .logo-item {
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .partner-logo {
          height: 100%;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          filter: grayscale(100%) brightness(0);
          opacity: 0.5;
          transition: all 0.4s ease;
        }
        
        .logo-item:hover .partner-logo {
          opacity: 1;
          filter: grayscale(0%) brightness(1);
        }

        .marquee-left .marquee-content {
          animation: scroll-left 40s linear infinite;
        }
        
        .marquee-right .marquee-content {
          animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .marquee-section { padding: 15px 0; }
          .marquee-title { font-size: 0.55rem; margin-bottom: 10px; }
          .logo-item { height: 30px; }
          .marquee-content { gap: 30px; padding-right: 30px; }
        }
      `}</style>
    </section>
  );
}
