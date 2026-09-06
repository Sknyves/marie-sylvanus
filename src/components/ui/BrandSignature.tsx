'use client';

import React from 'react';

interface BrandSignatureProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function BrandSignature({ theme = 'light', className = '' }: BrandSignatureProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`brand-signature-block ${className}`}>
      <div className="sig-icon-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sig-user-icon">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className="sig-text-group">
        <div className="sig-name">Marie Sylvanus KINKPON</div>
        <div className="sig-badge">AUTOMATISATION · IA · SOLUTIONS</div>
      </div>

      <style jsx>{`
        .brand-signature-block {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
        }
        .sig-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid ${isDark ? 'rgba(0, 168, 150, 0.6)' : 'rgba(9, 30, 58, 0.25)'};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${isDark ? '#00A896' : '#091E3A'};
          background: ${isDark ? 'rgba(0, 168, 150, 0.1)' : 'rgba(255, 255, 255, 0.8)'};
          flex-shrink: 0;
        }
        .sig-user-icon {
          width: 18px;
          height: 18px;
        }
        .sig-text-group {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .sig-name {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: 0.95rem;
          font-weight: 800;
          color: ${isDark ? '#FFFFFF' : '#091E3A'};
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .sig-badge {
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          font-size: 0.65rem;
          font-weight: 700;
          color: ${isDark ? '#00A896' : '#00A896'};
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
