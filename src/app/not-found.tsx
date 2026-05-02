'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.err-num', {
        opacity: 0,
        y: 100,
        skewX: 10,
        duration: 1.5,
        ease: 'expo.out'
      });
      gsap.from('.err-text', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="not-found-container" ref={containerRef}>
      <div className="content">
        <h1 className="err-num">404</h1>
        <p className="err-text">CETTE ARCHIVE N'EXISTE PAS OU A ÉTÉ DÉPLACÉE.</p>
        <Link href="/" className="back-home">
          <span>RETOUR À L'INDEX</span>
          <span className="arrow">↗</span>
        </Link>
      </div>

      <style jsx>{`
        .not-found-container {
          width: 100%;
          height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }
        .err-num {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(5rem, 20vw, 15rem);
          line-height: 0.8;
          margin-bottom: 2rem;
          background: linear-gradient(to bottom, #fff, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .err-text {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.8rem, 2vw, 1.2rem);
          font-weight: 700;
          letter-spacing: 0.3em;
          margin-bottom: 4rem;
          opacity: 0.5;
        }
        .back-home {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: #000;
          background: #fff;
          padding: 1.5rem 3rem;
          text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          transition: transform 0.3s ease;
        }
        .back-home:hover {
          transform: scale(1.05);
        }
        .arrow {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
