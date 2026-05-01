'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ne jouer le preloader qu'une seule fois par session pour l'UX
    if (sessionStorage.getItem('hasLoaded')) {
      setIsFinished(true);
      return;
    }

    // Bloquer le scroll
    document.body.style.overflow = 'hidden';

    const duration = 2000; // 2 secondes
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Easing simple pour un effet plus naturel (accélère puis ralentit)
      const easedProgress = gsap.parseEase("power2.inOut")(rawProgress / 100) * 100;
      
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
    
    // Séquence de sortie GSAP
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        document.body.style.overflow = '';
      }
    });

    tl.to(textRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "expo.inOut"
    }, "-=0.1");
  };

  if (isFinished) return null;

  return (
    <div className="preloader" ref={containerRef}>
      <div className="preloader-content" ref={textRef}>
        <div className="loading-text">SYSTEM BOOT</div>
        <div className="progress-number">{progress}%</div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #030303;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
          max-width: 300px;
          padding: 0 2rem;
        }

        .loading-text {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          opacity: 0.5;
        }

        .progress-number {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }

        .progress-bar-container {
          width: 100%;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: 1rem;
          position: relative;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #ffffff;
          /* Transition CSS fluide calée sur requestAnimationFrame */
          transition: width 0.1s linear; 
        }
      `}</style>
    </div>
  );
}
