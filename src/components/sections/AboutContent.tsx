'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="about-page">
      <Navbar />
      
      <section className="about-hero">
        <div className="container">
          <h1 className="reveal title-monument">L'ARCHITECTE<br/>NUMÉRIQUE</h1>
          <p className="reveal subtitle">KINKPON Marie Sylvanus Mahougnon — Développeur Full Stack & Consultant IA</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container grid-layout">
          <div className="left-col">
            <h2 className="reveal section-label">01 / PARCOURS</h2>
          </div>
          <div className="right-col">
            <p className="reveal bio-text">
              Originaire de Cotonou, Bénin, mon parcours est marqué par une quête constante d'excellence technique. De mes débuts chez <span className="highlight">Blue Life Tech</span> et <span className="highlight">Tpapy</span>, j'ai rapidement évolué vers des horizons internationaux.
            </p>
            <p className="reveal bio-text">
              Mon expérience chez <span className="highlight">Neural Bridge</span> à Londres a été le catalyseur de ma spécialisation en Intelligence Artificielle. J'y ai appris à fusionner des architectures logicielles complexes avec des modèles d'IA générative pour créer des solutions qui ne se contentent pas de fonctionner, mais qui innovent.
            </p>
          </div>
        </div>

        <div className="container grid-layout mt-12">
          <div className="left-col">
            <h2 className="reveal section-label">02 / EXPERTISE</h2>
          </div>
          <div className="right-col">
            <div className="expertise-grid">
              <div className="exp-item reveal">
                <h3>DEVELOPMENT</h3>
                <p>Next.js, TypeScript, Node.js, Python, Architecture Microservices.</p>
              </div>
              <div className="exp-item reveal">
                <h3>ARTIFICIAL INTELLIGENCE</h3>
                <p>LLMs, OpenAI API, LangChain, RAG, Automatisation intelligente.</p>
              </div>
              <div className="exp-item reveal">
                <h3>CREATIVE DESIGN</h3>
                <p>Three.js, GSAP, UI/UX Minimaliste, WebGL.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          padding: 25vh 0 10vh;
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
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-top: 15vh;
        }
        .section-label {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: #999;
        }
        .bio-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          line-height: 1.4;
          margin-bottom: 2rem;
          color: #111;
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

        @media (max-width: 900px) {
          .grid-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bio-text { font-size: 1.4rem; }
        }
      `}</style>
    </main>
  );
}
