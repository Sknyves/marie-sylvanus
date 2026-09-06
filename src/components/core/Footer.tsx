'use client';

import React from 'react';
import Link from 'next/link';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* TOP BANNER: Human first, Technology second */}
        <div className="footer-hero-banner">
          <div className="banner-left">
            <span className="banner-tag">PRINCIPE FONDATEUR</span>
            <h3 className="banner-quote">« Humain d'abord. Technologie ensuite. »</h3>
            <p className="banner-desc">
              Concevoir des automatisations et des systèmes intelligents qui simplifient réellement le quotidien des équipes et décuplent leur valeur.
            </p>
          </div>
          <div className="banner-right">
            <Link href="/#diagnostic" className="footer-cta-btn">
              <span>Réserver un Diagnostic Gratuit</span>
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <BrandSignature theme="dark" />
            <p className="brand-bio">
              Consultante en automatisation, IA et solutions digitales. J'accompagne les entreprises, commerces et cabinets dans leur transition vers des processus fluides et rentables.
            </p>
          </div>

          {/* Navigation Col */}
          <div className="footer-col">
            <h4 className="col-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Accueil</Link></li>
              <li><Link href="/#comparatif" className="footer-link">Avant / Après</Link></li>
              <li><Link href="/#methode" className="footer-link">La Méthode</Link></li>
              <li><Link href="/work" className="footer-link">Portfolio de Réalisations</Link></li>
              <li><Link href="/about" className="footer-link">À Propos & Parcours</Link></li>
            </ul>
          </div>

          {/* Expertises Col */}
          <div className="footer-col">
            <h4 className="col-title">SOLUTIONS</h4>
            <ul className="footer-links">
              <li className="service-item">✨ Diagnostic & Audit de Processus (15 min)</li>
              <li className="service-item">⚡ Workflows Automatisés (n8n, Make, APIs)</li>
              <li className="service-item">🤖 Assistants IA & RAG sur Mesure</li>
              <li className="service-item">💬 Intégration WhatsApp Business & CRM</li>
              <li className="service-item">🚀 Applications Web & SaaS Modernes</li>
            </ul>
          </div>

          {/* Contact & Social Col */}
          <div className="footer-col">
            <h4 className="col-title">CONTACT DIRECT</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/+22943655721" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                  <span className="icon-dot-turquoise" /> WhatsApp Direct (+229 43 65 57 21)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marie-sylvanus-kinkpon/" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                  <span className="icon-dot-turquoise" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mariesyl321@gmail.com" className="footer-link social-link">
                  <span className="icon-dot-turquoise" /> mariesyl321@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/sknyves" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                  <span className="icon-dot-turquoise" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="copyright">
            © {new Date().getFullYear()} <strong>Marie Sylvanus KINKPON</strong>. Tous droits réservés.
          </div>
          
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Retour en haut">
            <span>RETOUR EN HAUT</span>
            <span className="arrow">↑</span>
          </button>
        </div>
      </div>

      <BrandWaves position="bottom-right" opacity={0.35} />

      <style jsx>{`
        .footer-section {
          width: 100%;
          background: #061325;
          color: #FAF8F5;
          padding: 6rem 2rem 3rem;
          position: relative;
          z-index: 50;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        /* Hero Banner inside footer */
        .footer-hero-banner {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 5rem;
          backdrop-filter: blur(10px);
        }

        .banner-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #00A896;
          margin-bottom: 0.75rem;
        }

        .banner-quote {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .banner-desc {
          color: #94A3B8;
          font-size: 0.95rem;
          max-width: 650px;
          line-height: 1.6;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #FF6B35;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 1rem 1.8rem;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-cta-btn:hover {
          background: #F2571D;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 107, 53, 0.45);
        }

        .btn-arrow {
          font-size: 1.1rem;
        }

        /* Footer Grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.3fr 1.2fr;
          gap: 3.5rem;
          margin-bottom: 4.5rem;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .brand-bio {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.6;
          max-width: 320px;
        }

        .col-title {
          font-family: var(--font-display, sans-serif);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #00A896;
          margin-bottom: 1.25rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-link {
          color: #CBD5E1;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          color: #00A896;
          padding-left: 4px;
        }

        .service-item {
          color: #94A3B8;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .icon-dot-turquoise {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00A896;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: #64748B;
        }

        .copyright strong {
          color: #E2E8F0;
        }

        .back-top-btn {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #CBD5E1;
          font-family: var(--font-main, sans-serif);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .back-top-btn:hover {
          background: #00A896;
          border-color: #00A896;
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .footer-hero-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 1.25rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
