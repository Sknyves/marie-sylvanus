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
              <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.373a9.945 9.945 0 0 0 4.779 1.214h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.33h-.003a8.307 8.307 0 0 1-4.232-1.157l-.304-.18-3.145.825.84-3.067-.197-.314a8.3 8.3 0 0 1-1.272-4.453c.001-4.577 3.725-8.3 8.304-8.3 2.217 0 4.302.863 5.864 2.426a8.243 8.243 0 0 1 2.43 5.877c-.001 4.577-3.725 8.301-8.304 8.301zm4.55-6.216c-.25-.124-1.477-.73-1.704-.811-.227-.082-.392-.124-.556.124-.165.247-.638.811-.782.977-.144.166-.288.187-.538.063-.25-.125-1.054-.388-2.008-1.239-.742-.662-1.243-1.48-1.388-1.73-.144-.25-.015-.385.11-.51.111-.11.25-.291.375-.437.125-.145.166-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.557-1.343-.763-1.841-.2-.487-.404-.421-.556-.429h-.475c-.165 0-.433.062-.659.312-.227.25-.865.846-.865 2.062 0 1.216.885 2.394 1.01 2.56.124.166 1.74 2.656 4.215 3.726.589.255 1.048.407 1.407.521.592.188 1.13.161 1.556.097.475-.07 1.477-.604 1.684-1.187.206-.584.206-1.084.144-1.188-.062-.104-.227-.166-.477-.29z" />
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
          .contact-title { font-size: 2.5rem; }
        }
        @media (max-width: 480px) {
          .contact-title { font-size: 2rem; }
          .contact-link { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
}
