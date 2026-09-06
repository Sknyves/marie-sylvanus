'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ne jouer le preloader qu'une seule fois par session
    if (sessionStorage.getItem('hasLoaded')) {
      setIsFinished(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    const duration = 1600; // 1.6 secondes fluide
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      const easedProgress = gsap.parseEase("power2.out")(rawProgress / 100) * 100;
      
      setProgress(Math.floor(easedProgress));

      if (easedProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        finishLoading();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const finishLoading = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        document.body.style.overflow = '';
      }
    });

    tl.to(contentRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.75,
      ease: "expo.inOut"
    }, "-=0.1");
  };

  if (isFinished) return null;

  return (
    <div className="preloader-overlay" ref={containerRef}>
      <div className="preloader-content" ref={contentRef}>
        <div className="preloader-badge">
          <span className="dot"></span>
          <span>HUMAIN D'ABORD · TECHNOLOGIE ENSUITE</span>
        </div>
        
        <div className="preloader-title">Marie Sylvanus KINKPON</div>
        <div className="preloader-tag">AUTOMATISATION · IA · SOLUTIONS</div>
        
        <div className="preloader-progress-box">
          <div className="progress-number">{progress}%</div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #FAF8F5;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #091E3A;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          width: 100%;
          max-width: 380px;
          padding: 0 2rem;
        }

        .preloader-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFF2EB;
          color: #FF6B35;
          font-family: var(--font-main, sans-serif);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 107, 53, 0.2);
        }

        .preloader-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6B35;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .preloader-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: #091E3A;
          letter-spacing: -0.02em;
        }

        .preloader-tag {
          font-family: var(--font-main, sans-serif);
          font-size: 0.72rem;
          font-weight: 700;
          color: #00A896;
          letter-spacing: 0.15em;
        }

        .preloader-progress-box {
          width: 100%;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .progress-number {
          font-family: var(--font-display, sans-serif);
          font-size: 2.2rem;
          font-weight: 800;
          color: #091E3A;
          line-height: 1;
        }

        .progress-track {
          width: 100%;
          height: 4px;
          background: #EAE4DA;
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #FF6B35 0%, #00A896 100%);
          border-radius: 999px;
          transition: width 0.1s linear;
        }
      `}</style>
    </div>
  );
}
