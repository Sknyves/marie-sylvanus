'use client';

import { useEffect, useRef, use, useState } from 'react';
import { gsap } from 'gsap';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/core/Footer';
import Navbar from '@/components/core/Navbar';
import ParticleBackground from '@/components/canvas/ParticleBackground';
import LogoMarquee from '@/components/sections/LogoMarquee';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home(props: any) {
  const params = use(props.params || Promise.resolve({}));
  const searchParams = use(props.searchParams || Promise.resolve({}));

  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const blackContentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const archGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WebGL Particles initialization handled in ParticleBackground component
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.5
        });
      }

      // Cursor Follow Effect for Portrait
      const handleMouseMove = (e: MouseEvent) => {
        if (portraitRef.current) {
          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 40;
          const yPos = (clientY / window.innerHeight - 0.5) * 40;

          gsap.to(portraitRef.current, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Scroll Parallax
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: -100,
        ease: 'none'
      });

      // ÉTAPE 1: L'overlay blanc grandit progressivement du centre
      // Pendant ce temps, le hero reste complètement intact
      if (whiteOverlayRef.current) {
        gsap.fromTo(whiteOverlayRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
          },
          {
            clipPath: 'circle(100% at 50% 50%)',
            ease: 'none',
            scrollTrigger: {
              trigger: heroWrapperRef.current,
              start: 'top top',
              end: 'bottom 80%', // Le blanc termine sa conquête à 80% du scroll
              scrub: 1.5,
            }
          }
        );
      }



      // ÉTAPE 2: Une fois que le blanc a totalement conquis (à la fin du scroll)
      // Le noir se rassemble BRUTALEMENT au centre
      if (blackContentRef.current) {
        // On crée une timeline qui ne se déclenche qu'à la fin
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroWrapperRef.current,
            start: 'bottom 80%', // Commence quand le blanc est presque fini
            end: 'bottom 100%',
            scrub: 1.5,
          }
        });

        // Le contenu noir se rassemble au centre
        tl.to(blackContentRef.current, {
          scale: 0.3,
          opacity: 0,
          duration: 1,
          ease: 'power2.in', // Accélération pour un effet "englouti"
        }, 0);

        // Les bords (bordures) se resserrent
        if (heroRef.current) {
          tl.to(heroRef.current, {
            borderWidth: '100px',
            duration: 1,
            ease: 'power2.in',
          }, 0);
        }

        // Les éléments s'estompent
        const sideLabels = document.querySelectorAll('.side-label');
        const socialLinks = document.querySelector('.social-links');

        if (sideLabels.length > 0) {
          tl.to(sideLabels, {
            opacity: 0,
            y: 30, // Less movement
            duration: 0.5,
            ease: 'power2.in',
          }, 0.2); // Start a bit later
        }

        if (socialLinks) {
          tl.to(socialLinks, {
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: 'power2.in',
          }, 0);
        }

        // Le portrait se contracte
        if (portraitRef.current) {
          tl.to(portraitRef.current, {
            scale: 0.2,
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
          }, 0);
        }

        // Le titre se contracte
        if (titleRef.current) {
          tl.to(titleRef.current, {
            scale: 0.1,
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
          }, 0);
        }
      }

      // About Section Glow & Text Reveal
      if (aboutRef.current && aboutTextRef.current && archGlowRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 1.8,
          }
        });

        // Arch animation
        tl.fromTo(archGlowRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out' },
          0
        );

        // Text reveal animation
        tl.fromTo(aboutTextRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
          0.2
        );
      }

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef}>


      <div className="hero-scroll-wrapper" ref={heroWrapperRef}>
        {/* White Overlay - conquiert progressivement */}
        <div ref={whiteOverlayRef} className="white-overlay" />

        {/* Contenu noir qui ne bouge qu'à la fin */}
        <div ref={blackContentRef} className="black-content">
          <section className="hero-monumental" ref={heroRef}>
            <div className="side-label left">Développeur Full Stack</div>
            <div className="side-label right">Consultant en IA</div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/marie-sylvanus-734b432a9/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:mariesyl321@gmail.com" className="social-link" title="Email">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a href="https://wa.me/+22943655721" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.373a9.945 9.945 0 0 0 4.779 1.214h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.33h-.003a8.307 8.307 0 0 1-4.232-1.157l-.304-.18-3.145.825.84-3.067-.197-.314a8.3 8.3 0 0 1-1.272-4.453c.001-4.577 3.725-8.3 8.304-8.3 2.217 0 4.302.863 5.864 2.426a8.243 8.243 0 0 1 2.43 5.877c-.001 4.577-3.725 8.301-8.304 8.301zm4.55-6.216c-.25-.124-1.477-.73-1.704-.811-.227-.082-.392-.124-.556.124-.165.247-.638.811-.782.977-.144.166-.288.187-.538.063-.25-.125-1.054-.388-2.008-1.239-.742-.662-1.243-1.48-1.388-1.73-.144-.25-.015-.385.11-.51.111-.11.25-.291.375-.437.125-.145.166-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.557-1.343-.763-1.841-.2-.487-.404-.421-.556-.429h-.475c-.165 0-.433.062-.659.312-.227.25-.865.846-.865 2.062 0 1.216.885 2.394 1.01 2.56.124.166 1.74 2.656 4.215 3.726.589.255 1.048.407 1.407.521.592.188 1.13.161 1.556.097.475-.07 1.477-.604 1.684-1.187.206-.584.206-1.084.144-1.188-.062-.104-.227-.166-.477-.29z" />
                </svg>
              </a>
            </div>

            <div ref={portraitRef} className="portrait-container">
              <img src="/portrait.png" alt="Marie Sylvanus" className="hero-portrait" />
            </div>
            <div className="title-wrapper">
              <h1 ref={titleRef} className="main-title">
                SYLVANUS
              </h1>
            </div>
          </section>
        </div>
      </div>

      {/* NEW ABOUT SECTION (ARCH & GLOW) */}
      <section className="about-section" ref={aboutRef}>
        <div className="about-glow" ref={archGlowRef}>
          <ParticleBackground />
        </div>
        <div className="about-container" ref={aboutTextRef}>
          <h2 className="about-title">
            Toute Innovation<br />Commence par une Vision
          </h2>
          <p className="about-subtitle" ref={aboutTextRef}>
            Basé à Cotonou et fort d'une expérience internationale chez <span className="highlight">Neural Bridge (Londres)</span>, <span className="highlight">Call Connect</span>, et ayant affiné mes compétences chez <span className="highlight">Tpapy</span> et <span className="highlight">Blue Life Tech</span>, je combine architecture technique de pointe et intelligence artificielle pour concevoir des écosystèmes numériques performants pour le monde entier.
          </p>
          <button className="about-btn" onClick={() => (window.location.href = '/about')}>
            <span className="btn-text-wrapper">
              <span className="btn-text" data-text="DÉCOUVRIR">DÉCOUVRIR</span>
            </span>
            <span className="btn-arrow">↗</span>
          </button>

          {/* Decorative lines at bottom */}
          <div className="about-decor">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE SECTION */}
      <LogoMarquee />

      {/* PROJECTS SECTION */}
      <ProjectGrid limit={4} />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

      <style jsx>{`
        main {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #111;
          overflow-x: clip;
        }

        /* ABOUT SECTION */
        .about-section {
          width: 100%;
          min-height: 80vh; /* Reduced from 100vh */
          background: #ffffff;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 30; /* Above the white overlay */
          padding: 10vh 0; /* Added padding for better spacing */
        }

        .about-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90vw;
          max-width: 1200px;
          height: 45vw; /* width/2 ensures a perfect semi-circle */
          max-height: 600px;
          /* Arch shape */
          border-top-left-radius: 50% 100%;
          border-top-right-radius: 50% 100%;
          border: 2px dotted rgba(0,0,0,0.15);
          border-bottom: none;
          background: radial-gradient(ellipse at bottom, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%);
          z-index: 0;
          pointer-events: none;
          will-change: transform, opacity; /* Hardware acceleration to prevent lag when animating */
        }

        .arch-deposit-dot {
          position: absolute;
          background: #000;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          bottom: -20px;
          background: rgba(0,0,0,0.25);
          border-radius: 50%;
          animation: rise infinite ease-in;
          will-change: transform, opacity;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.5);
            opacity: 0;
          }
        }

        .about-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          padding: 0 5vw;
        }

        .about-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 7vw, 7.5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #111;
          margin-bottom: 2rem;
        }

        .about-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1rem, 1.3vw, 1.25rem);
          font-weight: 400;
          line-height: 1.6;
          color: #555;
          max-width: 800px;
          margin-bottom: 4rem;
        }

        .highlight {
          color: #000;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #000;
          opacity: 0.2;
        }

        /* BRUTALIST TYPOGRAPHIC BUTTON */
        .about-btn {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(1rem, 2vw, 1.5rem);
          color: #111;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          margin-top: 1rem;
        }

        .btn-text-wrapper {
          position: relative;
          overflow: hidden;
          display: flex;
        }

        .btn-text {
          display: block;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .btn-text::after {
          content: attr(data-text);
          position: absolute;
          top: 100%;
          left: 0;
          color: transparent;
          -webkit-text-stroke: 1px #111;
        }

        .about-btn:hover .btn-text {
          transform: translateY(-100%);
        }

        .btn-arrow {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 300;
          color: #111;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .about-btn:hover .btn-arrow {
          transform: translateX(10px) rotate(45deg);
        }

        .about-btn::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 2px;
          background: #111;
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .about-btn:hover::after {
          width: 100%;
        }

        .about-decor {
          display: flex;
          gap: 2rem;
          margin-top: 3rem; /* Reduced from 5rem */
        }

        .about-decor span {
          width: 1px;
          height: 24px;
          background: #ccc;
        }

        @media (max-width: 768px) {
          .about-glow {
            width: 130vw;
            height: 130vw;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
          }
        }

        .hero-scroll-wrapper {
          position: relative;
          height: 250vh;
        }

        /* White Overlay - conquiert progressivement du centre */
        .white-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;
          z-index: 20;
          pointer-events: none;
          clip-path: circle(0% at 50% 50%);
          will-change: clip-path;
        }

        /* Contenu noir - reste intact jusqu'à la fin */
        .black-content {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          z-index: 10;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        .hero-monumental {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 0 4vw 4vh;
          overflow: hidden;
          position: relative;
          background: #000000;
          border: 10px solid #ffffff;
          border-radius: 1.5rem;
          transform-origin: center center;
        }

        .side-label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 140px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          line-height: 1.4;
          opacity: 0.9;
          color: #ffffff;
          white-space: normal;
          word-wrap: break-word;
          z-index: 20;
        }

        .side-label.left {
          left: 12vw;
          text-align: left;
        }

        .side-label.right {
          right: 12vw;
          text-align: right;
        }

        .social-links {
          position: absolute;
          right: 2.5vw;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          z-index: 10;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.3s ease, transform 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          color: #ffffff;
          transform: translateX(-4px);
        }

        .social-icon {
          width: 16px;
          height: 16px;
        }

        .portrait-container {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(80vh, 100%);
          height: 100vh;
          z-index: 5;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;
        }

        .hero-portrait {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: screen;
          mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
        }

        .title-wrapper {
          width: 100%;
          z-index: 10;
          overflow: visible;
          display: flex;
          justify-content: center;
          position: relative;
          margin-bottom: -1.5rem;
        }

        .main-title {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(3rem, 12vw, 10rem);
          font-weight: normal;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
          text-transform: uppercase;
          display: inline-block;
          text-align: center;
          background: linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform-origin: center;
        }

        @media (max-width: 1024px) {
          .hero-monumental {
            border-radius: 1rem;
            border-width: 6px;
            padding: 0 3vw 5vh;
          }
          .main-title {
            font-size: clamp(2.5rem, 10vw, 7rem);
          }
          .portrait-container {
            width: 65vh;
            height: 90vh;
          }
          .side-label {
            width: 110px;
            font-size: 0.65rem;
          }
          .side-label.left { left: 8vw; }
          .side-label.right { right: 8vw; }
          .social-links { right: 1.5vw; }
          .social-icon { width: 14px; height: 14px; }
        }

        @media (max-width: 768px) {
          .hero-monumental {
            border-radius: 0.75rem;
            border-width: 5px;
            padding: 0 2vw 6vh;
          }
          .main-title {
            font-size: clamp(1.8rem, 10vw, 4rem);
            letter-spacing: -0.01em;
            white-space: normal;
            line-height: 0.9;
          }
          .portrait-container {
            width: 95vw;
            height: 75vh;
            top: 42%;
          }
          .side-label {
            top: auto;
            bottom: 12vh;
            transform: none;
            width: auto;
            font-size: 0.6rem;
            letter-spacing: 0.12em;
            opacity: 0.5;
          }
          .side-label.left {
            left: 50%;
            transform: translateX(-110%);
            text-align: right;
          }
          .side-label.right {
            left: 50%;
            transform: translateX(10%);
            text-align: left;
          }
          .social-links {
            right: 1.5rem;
            top: auto;
            bottom: 18vh;
            transform: none;
            flex-direction: row;
            gap: 1.4rem;
            z-index: 20;
          }
          .social-icon { width: 20px; height: 20px; }
        }

        @media (max-width: 480px) {
          .hero-monumental {
            border-radius: 0.5rem;
            border-width: 4px;
            padding: 0 1vw 5vh;
          }
          .main-title {
            font-size: clamp(1.5rem, 14vw, 3.5rem);
          }
          .portrait-container {
            width: 100%;
            height: 60vh;
            top: 45%;
          }
          .side-label { display: none; }
          .social-links { right: 1rem; bottom: 12vh; gap: 1rem; }
        }
      `}</style>
      <Navbar />
    </main>
  );
}