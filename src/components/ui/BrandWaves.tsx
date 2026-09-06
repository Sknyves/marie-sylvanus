'use client';

import React from 'react';

interface BrandWavesProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right';
  opacity?: number;
}

export default function BrandWaves({ 
  className = '', 
  position = 'bottom-right',
  opacity = 0.85
}: BrandWavesProps) {
  const getPositionStyles = () => {
    switch (position) {
      case 'bottom-left':
        return { bottom: 0, left: 0, transform: 'scaleX(-1)' };
      case 'top-right':
        return { top: 0, right: 0, transform: 'scaleY(-1)' };
      case 'bottom-right':
      default:
        return { bottom: 0, right: 0 };
    }
  };

  return (
    <div 
      className={`brand-waves-wrapper ${className}`}
      style={{
        position: 'absolute',
        width: '320px',
        height: '180px',
        pointerEvents: 'none',
        zIndex: 1,
        opacity,
        ...getPositionStyles()
      }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 400 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Soft Orange Wave */}
        <path
          d="M0 160C120 160 180 80 300 110C350 122 380 150 400 170"
          stroke="#FF6B35"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Technological Turquoise Wave */}
        <path
          d="M20 200C140 195 210 110 320 135C360 144 385 175 400 200"
          stroke="#00A896"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Subtle Accent Glow Wave */}
        <path
          d="M50 215C160 210 230 140 340 160C375 168 395 190 400 215"
          stroke="#091E3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
