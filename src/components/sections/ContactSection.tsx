'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optimized Magnetic effect using quickTo for 60fps
      const items = document.querySelectorAll('.contact-link');
      items.forEach((item: any) => {
        const xTo = gsap.quickTo(item, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(item, "y", { duration: 0.6, ease: "power3.out" });
        const bg = item.querySelector('.link-bg');
        
        item.addEventListener('mousemove', (e: MouseEvent) => {
          const { left, top, width, height } = item.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) * 0.2;
          const y = (e.clientY - top - height / 2) * 0.2;
          xTo(x);
          yTo(y);
        });

        item.addEventListener('mouseleave', () => {
          xTo(0);
          yTo(0);
        });
      });

      // Interactive dot grid background (Optimized)
      const dots = document.querySelectorAll('.grid-dot');
      const handleGridMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        dots.forEach((dot: any) => {
          const rect = dot.getBoundingClientRect();
          const dotX = rect.left + rect.width / 2;
          const dotY = rect.top + rect.height / 2;
          const dist = Math.hypot(clientX - dotX, clientY - dotY);
          
          if (dist < 100) {
            const angle = Math.atan2(clientY - dotY, clientX - dotX);
            gsap.to(dot, {
              x: Math.cos(angle) * -10,
              y: Math.sin(angle) * -10,
              opacity: 0.8,
              duration: 0.4,
              overwrite: 'auto'
            });
          } else {
            gsap.to(dot, {
              x: 0,
              y: 0,
              opacity: 0.1,
              duration: 1,
              overwrite: 'auto'
            });
          }
        });
      };

      sectionRef.current?.addEventListener('mousemove', handleGridMove);

      // Reveal animation
      gsap.from('.contact-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      {/* Optimized Interactive Grid Background */}
      <div className="dot-grid">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="grid-dot"></div>
        ))}
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title contact-reveal">
            CONCEVONS<br />L'AVENIR.
          </h2>
          <p className="contact-subtitle contact-reveal">
            Disponible pour des collaborations sélectives et des projets innovants.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:mariesyl321@gmail.com" className="contact-link contact-reveal">
            <span className="link-bg"></span>
            <div className="link-content">
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="link-text">Email</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/marie-sylvanus-734b432a9/" target="_blank" rel="noopener noreferrer" className="contact-link contact-reveal">
            <span className="link-bg"></span>
            <div className="link-content">
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <span className="link-text">LinkedIn</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
          <a href="https://wa.me/+22943655721" target="_blank" rel="noopener noreferrer" className="contact-link contact-reveal">
            <span className="link-bg"></span>
            <div className="link-content">
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/>
              </svg>
              <span className="link-text">WhatsApp</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          width: 100%;
          min-height: 80vh;
          background: #ffffff;
          color: #000000;
          padding: 12vh 5vw;
          position: relative;
          z-index: 60;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .dot-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(5, 1fr);
          padding: 5vw;
          pointer-events: none;
        }
        .grid-dot {
          width: 2px;
          height: 2px;
          background: #000;
          border-radius: 50%;
          justify-self: center;
          align-self: center;
          opacity: 0.1;
          will-change: transform, opacity;
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 8vw;
          position: relative;
          z-index: 10;
        }

        .contact-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .contact-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #666;
          max-width: 350px;
          line-height: 1.5;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .contact-link {
          position: relative;
          padding: 2rem;
          background: #fcfcfc;
          border: 1px solid #f0f0f0;
          text-decoration: none;
          color: inherit;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          will-change: transform;
        }
        .link-content {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          position: relative;
          z-index: 2;
        }
        .link-icon {
          width: 20px;
          height: 20px;
        }
        .link-text {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .link-arrow {
          font-size: 1.2rem;
          position: relative;
          z-index: 2;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .link-bg {
          position: absolute;
          inset: 0;
          background: #000;
          transform: translateX(-101%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-link:hover {
          color: #fff;
          border-color: #000;
        }
        .contact-link:hover .link-bg {
          transform: translateX(0);
        }
        .contact-link:hover .link-arrow {
          transform: translate(8px, -8px);
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-section { padding: 8vh 5vw; }
        }
      `}</style>
    </section>
  );
}
