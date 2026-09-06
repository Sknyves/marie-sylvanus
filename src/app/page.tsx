'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import LogoMarquee from '@/components/sections/LogoMarquee';
import ComparisonSection from '@/components/sections/ComparisonSection';
import MethodologySection from '@/components/sections/MethodologySection';
import ProjectGrid from '@/components/sections/ProjectGrid';
import TechSection from '@/components/sections/TechSection';
import DiagnosticSection from '@/components/sections/DiagnosticSection';
import ContactSection from '@/components/sections/ContactSection';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main className="main-wrapper">
      <Navbar />

      {/* HERO SECTION — HUMAIN D'ABORD, TECHNOLOGIE ENSUITE */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-grid">
            
            {/* Left Hero Content */}
            <div className="hero-left">
              
              <div className="hero-badge-pill">
                <span className="pill-dot-orange" />
                <span>PRENONS 15 MINUTES · CONSULTANTE INDÉPENDANTE</span>
              </div>

              <h1 className="hero-title">
                Diagnostic<br />
                <span className="title-teal">gratuit<span className="dot-orange">.</span></span>
              </h1>

              <p className="hero-pitch">
                Des conseils clairs et sur mesure pour des solutions qui vous font <span className="highlight-text">gagner du temps</span> et décuplent votre impact.
              </p>

              {/* 3 Quick Value Props with round icon badges */}
              <div className="hero-value-props">
                <div className="prop-item">
                  <div className="prop-icon icon-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 14 14" />
                    </svg>
                  </div>
                  <div className="prop-text">
                    <strong>15 minutes</strong>
                    <span>Échange rapide et efficace</span>
                  </div>
                </div>

                <div className="prop-item">
                  <div className="prop-icon icon-navy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.24-4.24a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0L11 15.58" />
                      <path d="m7 13 2 2" />
                      <path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    </svg>
                  </div>
                  <div className="prop-text">
                    <strong>Sans engagement</strong>
                    <span>Vous décidez librement de la suite</span>
                  </div>
                </div>

                <div className="prop-item">
                  <div className="prop-icon icon-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                  </div>
                  <div className="prop-text">
                    <strong>Conseils concrets</strong>
                    <span>Pistes d'amélioration adaptées</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="hero-cta-group">
                <Link href="#diagnostic" className="hero-cta-primary">
                  <span>Réserver mon diagnostic (15 min)</span>
                  <span className="arrow-icon">→</span>
                </Link>
                <Link href="#comparatif" className="hero-cta-secondary">
                  <span>Voir la démarche</span>
                </Link>
              </div>

              {/* Signature */}
              <div className="hero-signature">
                <BrandSignature theme="light" />
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="hero-right">
              <div className="portrait-card-wrapper">
                
                {/* Background Ambient Glow Circles */}
                <div className="glow-aura aura-turquoise" />
                <div className="glow-aura aura-orange" />

                {/* Main Portrait Card */}
                <div className="portrait-card">
                  <div className="card-top-tag">
                    <span className="dot-live" />
                    <span>DISPONIBLE POUR ACCOMPAGNEMENT</span>
                  </div>

                  <div className="portrait-image-holder">
                    <Image
                      src="/portrait.png"
                      alt="Marie Sylvanus KINKPON — Consultante en Automatisation, IA et Solutions Digitales"
                      fill
                      sizes="(max-width: 768px) 90vw, 450px"
                      className="portrait-img"
                      priority
                      quality={90}
                    />
                  </div>

                  <div className="portrait-card-footer">
                    <div className="footer-name">Marie Sylvanus KINKPON</div>
                    <div className="footer-role">AUTOMATISATION · IA · SOLUTIONS</div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="floating-metric metric-1">
                  <span className="metric-icon">⚡</span>
                  <div className="metric-text">
                    <strong>+40% de temps gagné</strong>
                    <span>sur les tâches répétitives</span>
                  </div>
                </div>

                <div className="floating-metric metric-2">
                  <span className="metric-icon">🤝</span>
                  <div className="metric-text">
                    <strong>Humain d'abord</strong>
                    <span>Technologie ensuite</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <BrandWaves position="bottom-right" opacity={0.65} />
      </section>

      {/* SECTION 2: COMPARATIF AVANT / APRÈS (VISUEL 2) */}
      <ComparisonSection />

      {/* SECTION 3: LA DÉMARCHE EN 5 ÉTAPES */}
      <MethodologySection />

      {/* SECTION 4: PARTENAIRES & COLLABORATIONS */}
      <LogoMarquee />

      {/* SECTION 5: SÉLECTION DE PROJETS & SOLUTIONS */}
      <ProjectGrid limit={4} />

      {/* SECTION 6: TECHNOLOGIES & ÉCOSYSTÈME */}
      <TechSection />

      {/* SECTION 7: DIAGNOSTIC GRATUIT INTERACTIF (VISUEL 1) */}
      <DiagnosticSection />

      {/* SECTION 8: CONTACT & CANAUX DIRECTS */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

      <style jsx>{`
        .main-wrapper {
          width: 100%;
          min-height: 100vh;
          background: var(--bg-primary, #FAF8F5);
          color: var(--text-main, #091E3A);
          position: relative;
          overflow-x: hidden;
        }

        /* HERO SECTION */
        .hero-section {
          width: 100%;
          min-height: 90vh;
          padding: 8.5rem 2rem 5rem;
          display: flex;
          align-items: center;
          position: relative;
          background: #FAF8F5;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }

        /* Left Side */
        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #FFF2EB;
          color: #FF6B35;
          font-family: var(--font-main, sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          padding: 0.45rem 1.1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 107, 53, 0.25);
          margin-bottom: 1.5rem;
        }

        .pill-dot-orange {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FF6B35;
        }

        .hero-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(3rem, 6vw, 5.2rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin-bottom: 1.5rem;
        }

        .title-teal {
          color: #00A896;
        }

        .dot-orange {
          color: #FF6B35;
        }

        .hero-pitch {
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          color: #54667D;
          max-width: 580px;
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .highlight-text {
          color: #00A896;
          font-weight: 700;
        }

        /* Value Props */
        .hero-value-props {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .prop-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .prop-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .prop-icon svg {
          width: 20px;
          height: 20px;
        }

        .icon-teal {
          background: #E6F7F5;
          color: #00A896;
          border: 1px solid rgba(0, 168, 150, 0.25);
        }

        .icon-navy {
          background: #EEF2F6;
          color: #091E3A;
          border: 1px solid rgba(9, 30, 58, 0.2);
        }

        .icon-orange {
          background: #FFF2EB;
          color: #FF6B35;
          border: 1px solid rgba(255, 107, 53, 0.25);
        }

        .prop-text {
          display: flex;
          flex-direction: column;
        }

        .prop-text strong {
          font-size: 0.95rem;
          color: #091E3A;
        }

        .prop-text span {
          font-size: 0.82rem;
          color: #64748B;
        }

        /* CTA Buttons */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #FF6B35;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 1.05rem 2rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-cta-primary:hover {
          background: #F2571D;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 107, 53, 0.45);
        }

        .hero-cta-secondary {
          font-size: 0.92rem;
          font-weight: 700;
          color: #091E3A;
          text-decoration: none;
          padding: 1rem 1.5rem;
          border-radius: 999px;
          border: 1px solid #EAE4DA;
          background: #FFFFFF;
          transition: all 0.25s ease;
        }

        .hero-cta-secondary:hover {
          border-color: #00A896;
          color: #00A896;
        }

        /* Right Side Portrait Card */
        .portrait-card-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .glow-aura {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: 1;
        }

        .aura-turquoise {
          top: -30px;
          right: -20px;
          background: rgba(0, 168, 150, 0.2);
        }

        .aura-orange {
          bottom: -30px;
          left: -20px;
          background: rgba(255, 107, 53, 0.15);
        }

        .portrait-card {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 420px;
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 28px;
          padding: 1.5rem;
          box-shadow: 0 20px 50px rgba(9, 30, 58, 0.08);
          overflow: hidden;
        }

        .card-top-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #091E3A;
          margin-bottom: 1rem;
        }

        .dot-live {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00A896;
        }

        .portrait-image-holder {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #F3EFEA;
        }

        .portrait-img {
          object-fit: cover;
          object-position: top;
        }

        .portrait-card-footer {
          margin-top: 1.2rem;
          text-align: center;
        }

        .footer-name {
          font-family: var(--font-display, sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #091E3A;
        }

        .footer-role {
          font-size: 0.68rem;
          font-weight: 700;
          color: #00A896;
          letter-spacing: 0.15em;
          margin-top: 0.2rem;
        }

        /* Floating Metrics */
        .floating-metric {
          position: absolute;
          z-index: 10;
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 16px;
          padding: 0.85rem 1.25rem;
          box-shadow: 0 12px 30px rgba(9, 30, 58, 0.1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .metric-1 {
          top: 10%;
          left: -40px;
          animation: float 4s ease-in-out infinite;
        }

        .metric-2 {
          bottom: 12%;
          right: -30px;
          animation: float 5s ease-in-out infinite reverse;
        }

        .metric-icon {
          font-size: 1.4rem;
        }

        .metric-text {
          display: flex;
          flex-direction: column;
        }

        .metric-text strong {
          font-size: 0.85rem;
          color: #091E3A;
        }

        .metric-text span {
          font-size: 0.72rem;
          color: #64748B;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .hero-section {
            padding: 6.5rem 1.5rem 4rem;
          }
          .floating-metric {
            position: static;
            margin-top: 1rem;
          }
        }

        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-title {
            font-size: 2.8rem;
          }
        }
      `}</style>
    </main>
  );
}