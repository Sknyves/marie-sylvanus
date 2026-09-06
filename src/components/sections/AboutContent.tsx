'use client';

import React from 'react';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import LogoMarquee from '@/components/sections/LogoMarquee';
import TechSection from '@/components/sections/TechSection';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="about-page">
      <Navbar />

      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="about-container">
          <div className="tag-pill">
            <span className="dot-orange" />
            <span>PARCOURS & PHILOSOPHIE</span>
          </div>

          <h1 className="hero-title">
            Humain d'abord.<br />
            <span className="title-teal">Technologie ensuite.</span>
          </h1>

          <p className="hero-subtitle">
            Basée à Cotonou et forte d'une expérience internationale (notamment chez Neural Bridge à Londres), j'accompagne les organisations dans la simplification de leurs opérations grâce à l'automatisation et à l'intelligence artificielle.
          </p>
        </div>

        <BrandWaves position="bottom-right" opacity={0.5} />
      </section>

      {/* PARTNERS */}
      <LogoMarquee />

      {/* STORY & METHODOLOGY */}
      <section className="about-story-section">
        <div className="about-container">
          
          <div className="story-grid">
            {/* Left Col */}
            <div className="story-col-left">
              <span className="section-step-num">01 / VISION</span>
              <h2 className="story-heading">Simplifier pour révéler la valeur</h2>
              <p className="story-text">
                Trop d'entreprises perdent des heures précieuses dans des tâches répétitives, des erreurs de saisie manuelles et des outils mal connectés.
              </p>
              <p className="story-text">
                Mon rôle est d'intervenir comme un pont entre vos enjeux métiers et les meilleures technologies d'automatisation (n8n, Make, LLMs, APIs) pour redonner du temps à vos équipes et fluidifier votre croissance.
              </p>

              <div className="motto-box">
                <span className="motto-tag">MON ENGAGEMENT</span>
                <p className="motto-quote">« L'automatisation réussie est invisible : elle allège la charge mentale et amplifie l'intelligence humaine. »</p>
              </div>
            </div>

            {/* Right Col: Portrait & Signature */}
            <div className="story-col-right">
              <div className="about-card brand-card">
                <div className="portrait-wrap">
                  <img src="/portrait.png" alt="Marie Sylvanus KINKPON" className="about-portrait-img" />
                </div>
                <div className="about-card-details">
                  <BrandSignature theme="light" />
                  <p className="about-tagline">
                    Consultante en Automatisation, IA & Solutions Digitales
                  </p>
                  <div className="about-badges">
                    <span className="badge-pill">Cotonou · Bénin</span>
                    <span className="badge-pill">International Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARCOURS EN ÉTAPES */}
          <div className="timeline-section">
            <span className="section-step-num">02 / ÉTAPES CLÉS</span>
            <h2 className="story-heading">Un socle technique solide et international</h2>

            <div className="timeline-grid">
              <div className="timeline-card brand-card">
                <span className="timeline-year">FORMATION ACADÉMIQUE</span>
                <h3 className="timeline-title">Licence en Système Informatique & Logiciel</h3>
                <p className="timeline-desc">
                  Diplômée des Cours SOUNOU à Cotonou, acquisition des bases fondamentales de l'ingénierie logicielle, des bases de données et de l'architecture système.
                </p>
              </div>

              <div className="timeline-card brand-card">
                <span className="timeline-year">PREMIÈRES EXPÉRIENCES</span>
                <h3 className="timeline-title">Développement & Solutions Digitales</h3>
                <p className="timeline-desc">
                  Missions chez Blue Life Tech et Tpapy, confrontation des acquis aux réalités du terrain et création d'applications web interactives.
                </p>
              </div>

              <div className="timeline-card brand-card">
                <span className="timeline-year">INTERNATIONAL · LONDRES</span>
                <h3 className="timeline-title">Neural Bridge (Londres) & Spécialisation IA</h3>
                <p className="timeline-desc">
                  Fusion de modèles de langage (LLMs), d'agents autonomes et de pipelines d'automatisation de workflows complexes pour des clients internationaux.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECH SECTION */}
      <TechSection />

      {/* CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-card brand-card">
            <h2 className="cta-heading">Prêt à libérer le potentiel de votre équipe ?</h2>
            <p className="cta-sub">
              Réservez 15 minutes d'échange gratuit et sans engagement pour identifier vos premiers leviers d'automatisation.
            </p>
            <Link href="/#diagnostic" className="about-cta-btn">
              <span>Prendre rendez-vous (15 min)</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .about-page {
          width: 100%;
          min-height: 100vh;
          background: #FAF8F5;
          color: #091E3A;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 5;
        }

        /* Hero */
        .about-hero {
          padding: 9rem 0 5rem;
          background: #FAF8F5;
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFF2EB;
          color: #FF6B35;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          padding: 0.4rem 1.1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 107, 53, 0.25);
          margin-bottom: 1.5rem;
        }

        .dot-orange {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6B35;
        }

        .hero-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.08;
          margin-bottom: 1.5rem;
        }

        .title-teal {
          color: #00A896;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: #54667D;
          max-width: 750px;
          line-height: 1.65;
        }

        /* Story Section */
        .about-story-section {
          padding: 6rem 0;
          background: #FFFFFF;
          border-top: 1px solid #EAE4DA;
          border-bottom: 1px solid #EAE4DA;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .section-step-num {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #00A896;
          margin-bottom: 0.75rem;
          display: inline-block;
        }

        .story-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .story-text {
          font-size: 1.05rem;
          color: #54667D;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .motto-box {
          background: #FAF8F5;
          border-left: 4px solid #FF6B35;
          border-radius: 0 16px 16px 0;
          padding: 1.5rem 2rem;
          margin-top: 2rem;
        }

        .motto-tag {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #FF6B35;
          display: block;
          margin-bottom: 0.4rem;
        }

        .motto-quote {
          font-size: 1rem;
          font-weight: 600;
          color: #091E3A;
          line-height: 1.5;
          font-style: italic;
        }

        /* Right Card */
        .about-card {
          padding: 1.5rem;
          background: #FAF8F5;
          border-radius: 28px;
        }

        .portrait-wrap {
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #EAE4DA;
          margin-bottom: 1.5rem;
        }

        .about-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .about-card-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .about-tagline {
          font-size: 0.85rem;
          color: #54667D;
        }

        .about-badges {
          display: flex;
          gap: 0.6rem;
        }

        .badge-pill {
          font-size: 0.72rem;
          font-weight: 700;
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          color: #091E3A;
        }

        /* Timeline */
        .timeline-section {
          padding-top: 3rem;
          border-top: 1px solid #EAE4DA;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .timeline-card {
          background: #FAF8F5;
          padding: 2.2rem;
          border-radius: 24px;
        }

        .timeline-year {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #00A896;
          display: block;
          margin-bottom: 0.75rem;
        }

        .timeline-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #091E3A;
          margin-bottom: 0.85rem;
          line-height: 1.3;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: #54667D;
          line-height: 1.6;
        }

        /* CTA Section */
        .about-cta-section {
          padding: 6rem 0 8rem;
          background: #FAF8F5;
        }

        .about-cta-card {
          background: #091E3A;
          color: #FFFFFF;
          border-radius: 32px;
          padding: 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .cta-sub {
          font-size: 1.05rem;
          color: #CBD5E1;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #FF6B35;
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          padding: 1.1rem 2.4rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-cta-btn:hover {
          background: #F2571D;
          transform: translateY(-3px);
        }

        @media (max-width: 990px) {
          .story-grid {
            grid-template-columns: 1fr;
          }
          .timeline-grid {
            grid-template-columns: 1fr;
          }
          .about-cta-card {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
