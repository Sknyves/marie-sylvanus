'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TechSection from '@/components/sections/TechSection';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import LogoMarquee from '@/components/sections/LogoMarquee';

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items
      gsap.from('.reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });

      // Signature drawing effect
      gsap.from('.sig-path', {
        strokeDasharray: 300,
        strokeDashoffset: 300,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.personal-signature',
          start: 'top 90%',
        }
      });

      // Fluid blobs movement
      gsap.to('.blob', {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 'random(10, 20)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 5,
          from: 'random'
        }
      });

      // Initial positions for technical nodes (avoid hydration mismatch)
      gsap.set('.tech-node', {
        attr: { 
          cx: () => `${gsap.utils.random(0, 100)}%`, 
          cy: () => `${gsap.utils.random(0, 100)}%`,
          r: () => gsap.utils.random(1, 2)
        }
      });

      // Technical nodes animation
      gsap.to('.tech-node', {
        attr: { 
          cx: 'random(0, 100)%', 
          cy: 'random(0, 100)%' 
        },
        duration: 'random(20, 40)',
        repeat: -1,
        yoyo: true,
        ease: 'none',
        stagger: {
          amount: 10,
          from: 'random'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="about-page">
      <Navbar />

      {/* BACKGROUND FLUID BLOBS & TECH NODES */}
      <div className="blobs-container">
        <svg className="tech-bg-svg" width="100%" height="100%">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {[...Array(20)].map((_, i) => (
            <circle 
              key={i}
              className="tech-node"
              fill="rgba(0,0,0,0.05)"
              cx="50%"
              cy="50%"
              r="1.5"
            />
          ))}
        </svg>

        <svg className="blob blob-1" viewBox="0 0 200 200">
          <path fill="rgba(0,0,0,0.03)" d="M45,-62.1C58.3,-53.4,69.1,-40.4,74.5,-25.6C79.9,-10.8,80,-5.8,77.5,8.1C75,22,70,44.8,57.7,58.4C45.3,71.9,25.7,76.2,7.3,74.9C-11,73.6,-28.1,66.7,-42.6,56.1C-57,45.4,-68.8,31,-73.2,14.6C-77.7,-1.8,-74.7,-20.2,-65.4,-34.5C-56.1,-48.8,-40.5,-59.1,-25,-66.6C-9.5,-74.1,5.9,-78.9,21.8,-76.3C37.8,-73.7,54.1,-63.7,45,-62.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob blob-2" viewBox="0 0 200 200">
          <path fill="rgba(0,0,0,0.02)" d="M42.7,-60.1C55.9,-53.7,67.6,-43.3,73.7,-30.3C79.8,-17.3,80.3,-1.7,77.6,13.5C74.9,28.7,69,43.5,58.3,55.1C47.6,66.7,32.2,75.1,16.2,77.6C0.1,80.1,-16.5,76.7,-30.6,69.5C-44.8,62.3,-56.3,51.2,-64.3,38.1C-72.3,25,-76.7,9.8,-76,-5.3C-75.3,-20.5,-69.5,-35.5,-59.4,-47.4C-49.4,-59.3,-35.1,-68.2,-20.5,-71.7C-5.9,-75.2,8.9,-73.4,22.2,-69.4C35.5,-65.4,47.3,-59.1,42.7,-60.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <section className="about-hero">
        <div className="container">
          <h1 className="reveal title-monument">L'ARCHITECTE<br/>NUMÉRIQUE</h1>
          <p className="reveal subtitle">KINKPON Marie Sylvanus Mahougnon — Développeur Full Stack & Consultant IA</p>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <div className="reveal">
        <LogoMarquee />
      </div>

      <section className="about-content">
        <div className="container grid-layout">
          <div className="left-col">
            <h2 className="reveal section-label">01 / PARCOURS</h2>
          </div>
          <div className="right-col">
            <p className="reveal bio-text">
              Originaire de Cotonou, Bénin, mon parcours est marqué par une quête constante d'excellence technique. J'ai débuté mon cursus universitaire aux <span className="highlight">Cours SOUNOU</span> à Caboma (Cotonou), où j'ai validé mes 3 années de Licence en Système Informatique et Logiciel, posant ainsi les bases solides de mon ingénierie.
            </p>
            <p className="reveal bio-text">
              Par la suite, mes premières expériences chez <span className="highlight">Blue Life Tech</span> et <span className="highlight">Tpapy</span> m'ont permis de confronter la théorie à la réalité du terrain, avant de m'envoler vers des horizons internationaux.
            </p>
            <p className="reveal bio-text">
              Mon passage chez <span className="highlight">Neural Bridge</span> à Londres a été le catalyseur de ma spécialisation en Intelligence Artificielle. J'y ai appris à fusionner des architectures logicielles complexes avec des modèles d'IA générative pour créer des solutions qui ne se contentent pas de fonctionner, mais qui innovent.
            </p>
            <div className="about-motto pd-reveal">
              <span className="motto-label">MA VISION —</span>
              <p className="motto-text">"Transformer des algorithmes complexes en expériences humaines mémorables."</p>
            </div>
          </div>
          
          <div className="portrait-side desktop-only pd-reveal">
            <div className="portrait-frame">
              <img src="/portrait.png" alt="Marie Sylvanus" className="portrait-img" />
            </div>
            <div className="personal-signature">
              {/* Signature manuscrite stylisée en SVG */}
              <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="sig-path" d="M10 45C25 40 40 10 55 15C70 20 60 50 85 45C110 40 130 20 140 25" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path className="sig-path" d="M45 25L55 35M65 25L55 35" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="sig-name">M. Sylvanus</span>
            </div>
          </div>
        </div>

        <div className="container grid-layout two-cols mt-12">
          <div className="left-col">
            <h2 className="reveal section-label">02 / EXPERTISE</h2>
          </div>
          <div className="right-col">
            <div className="expertise-grid">
              <div className="exp-item reveal">
                <h3>FULL-STACK DEVELOPMENT</h3>
                <p>Architecture d'applications robustes avec Next.js, TypeScript et Node.js. Focus sur la performance, la sécurité et l'évolutivité.</p>
              </div>
              <div className="exp-item reveal">
                <h3>ARTIFICIAL INTELLIGENCE</h3>
                <p>Intégration de modèles LLM avancés, développement d'agents autonomes et systèmes RAG pour des solutions intelligentes sur mesure.</p>
              </div>
              <div className="exp-item reveal">
                <h3>CREATIVE ENGINEERING</h3>
                <p>Expériences immersives utilisant Three.js et WebGL. Design brutaliste et animations GSAP pour une identité visuelle marquante.</p>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: VISION / PHILOSOPHY */}
        <div className="container grid-layout two-cols mt-12">
          <div className="left-col">
            <h2 className="reveal section-label">03 / VISION</h2>
          </div>
          <div className="right-col">
            <p className="reveal philosophy-text">
              Je crois en un web qui ne se contente pas d'être fonctionnel. Le numérique doit être une expérience sensorielle, une extension de l'identité de marque qui marque les esprits par sa fluidité et sa pertinence. 
            </p>
            <div className="values-grid">
              <div className="value-item reveal">
                <span className="value-num">01</span>
                <h4>PRÉCISION</h4>
                <p>Chaque pixel et chaque ligne de code ont une raison d'être.</p>
              </div>
              <div className="value-item reveal">
                <span className="value-num">02</span>
                <h4>INNOVATION</h4>
                <p>L'IA n'est pas un gadget, c'est le nouveau standard de productivité.</p>
              </div>
              <div className="value-item reveal">
                <span className="value-num">03</span>
                <h4>IMPACT</h4>
                <p>Créer des solutions qui génèrent une valeur réelle et mesurable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATE TECH SECTION HERE */}
      <div className="about-tech-wrapper reveal">
        <TechSection />
      </div>

      <Footer />

      <style jsx>{`
        .about-page {
          background: #fff;
          color: #000;
          min-height: 100vh;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }
        .about-hero {
          padding: 25vh 0 5vh; /* Reduced bottom padding from 10vh to 5vh */
        }
        .title-monument {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(3rem, 8vw, 8rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
        }
        .subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          margin-top: 2rem;
          opacity: 0.6;
        }

        .about-content {
          padding-bottom: 20vh;
        }
        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 4rem;
          margin-top: 15vh;
          align-items: start;
        }
        .grid-layout.two-cols {
          grid-template-columns: 1fr 2.5fr;
        }
        .section-label {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: #999;
        }
        .bio-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: #222;
          max-width: 90%;
        }
        .highlight {
          font-weight: 700;
          color: #000;
          border-bottom: 2px solid #000;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        .exp-item h3 {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        .exp-item p {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          opacity: 0.6;
          line-height: 1.6;
        }

        .mt-12 { margin-top: 12vh; }

        .philosophy-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .value-item {
          padding: 2rem;
          background: #f9f9f9;
          border-left: 2px solid #000;
        }
        .value-num {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.7rem;
          color: #999;
          display: block;
          margin-bottom: 1rem;
        }
        .value-item h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .value-item p {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          opacity: 0.6;
        }

        .about-tech-wrapper {
          background: #fff;
          margin-top: -5vh;
          position: relative;
          z-index: 5;
        }

        .portrait-side {
          position: sticky;
          top: 15vh;
        }
        .portrait-frame {
          width: 100%;
          aspect-ratio: 4/5;
          background: #f5f5f5;
          overflow: hidden;
          border-radius: 2px;
        }
        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.6s ease;
        }
        .portrait-frame:hover .portrait-img {
          filter: grayscale(0%);
        }

        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 900px) {
          .grid-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bio-text { font-size: 1.4rem; }
          .philosophy-text { font-size: 1.2rem; }
          .about-motto { margin-top: 2rem; border-top: 1px solid #eee; padding-top: 2rem; }
        }

        .about-motto {
          margin-top: 4rem;
        }
        .motto-label {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: #999;
          display: block;
          margin-bottom: 0.5rem;
        }
        .motto-text {
          font-family: 'Cormorant', serif;
          font-style: italic;
          font-size: 1.8rem;
          line-height: 1.2;
          color: #000;
        }
        .personal-signature {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          opacity: 0.8;
        }
        .sig-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: -10px;
        }
        @media (max-width: 600px) {
          .bio-text { font-size: 1.2rem; }
          .expertise-grid { grid-template-columns: 1fr; gap: 2rem; }
          .value-item { padding: 1.5rem; }
          .about-hero { padding-top: 15vh; }
        }
        .blobs-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          width: 40vw;
          height: 40vw;
          opacity: 0.5;
        }
        .blob-1 { top: -10%; right: -5%; }
        .blob-2 { bottom: 10%; left: -5%; }
        .tech-bg-svg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
      `}</style>
    </main>
  );
}
