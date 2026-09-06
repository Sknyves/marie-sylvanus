'use client';

import React from 'react';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-box">
          <div className="contact-grid">
            
            {/* Left Header */}
            <div className="contact-info">
              <span className="contact-tag">COMMENÇONS UN PROJET</span>
              <h2 className="contact-title">
                Prêt à automatiser<br />
                <span className="title-teal">votre activité ?</span>
              </h2>
              <p className="contact-desc">
                Que ce soit pour un audit de vos processus existants, la création d'un assistant IA sur mesure ou la digitalisation complète d'un service, échangeons directement.
              </p>

              <div className="location-pill">
                <span className="loc-dot" />
                <span>Basé à Cotonou, Bénin — Disponible à l'international</span>
              </div>

              <div className="signature-wrap">
                <BrandSignature theme="light" />
              </div>
            </div>

            {/* Right Contact Cards */}
            <div className="contact-cards-list">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+22943655721"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card card-whatsapp"
              >
                <div className="card-icon icon-green">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.373a9.945 9.945 0 0 0 4.779 1.214h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.33h-.003a8.307 8.307 0 0 1-4.232-1.157l-.304-.18-3.145.825.84-3.067-.197-.314a8.3 8.3 0 0 1-1.272-4.453c.001-4.577 3.725-8.3 8.304-8.3 2.217 0 4.302.863 5.864 2.426a8.243 8.243 0 0 1 2.43 5.877c-.001 4.577-3.725 8.301-8.304 8.301z" />
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-tag">CANAL PRIORITAIRE</span>
                  <h3 className="card-name">WhatsApp Direct</h3>
                  <span className="card-val">+229 43 65 57 21</span>
                </div>
                <span className="card-arrow">↗</span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:mariesyl321@gmail.com"
                className="contact-card"
              >
                <div className="card-icon icon-orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-tag">EMAIL PROFESSIONNEL</span>
                  <h3 className="card-name">Messagerie Directe</h3>
                  <span className="card-val">mariesyl321@gmail.com</span>
                </div>
                <span className="card-arrow">↗</span>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/marie-sylvanus-kinkpon/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="card-icon icon-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-tag">RÉSEAU PROFESSIONNEL</span>
                  <h3 className="card-name">Profil LinkedIn</h3>
                  <span className="card-val">Marie Sylvanus</span>
                </div>
                <span className="card-arrow">↗</span>
              </a>

            </div>

          </div>

          <BrandWaves position="bottom-right" opacity={0.6} />
        </div>

      </div>

      <style jsx>{`
        .contact-section {
          width: 100%;
          background: #FAF8F5;
          padding: 6rem 2rem 8rem;
          position: relative;
          z-index: 40;
        }

        .contact-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .contact-box {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 32px;
          padding: 4rem;
          box-shadow: 0 20px 50px rgba(9, 30, 58, 0.06);
          position: relative;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 5;
        }

        .contact-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #FF6B35;
          margin-bottom: 0.75rem;
          display: inline-block;
        }

        .contact-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.12;
          margin-bottom: 1.25rem;
        }

        .title-teal {
          color: #00A896;
        }

        .contact-desc {
          font-size: 1.05rem;
          color: #54667D;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #F3EFEA;
          color: #091E3A;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          margin-bottom: 2rem;
        }

        .loc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00A896;
        }

        .signature-wrap {
          margin-top: 1rem;
        }

        /* Right Cards List */
        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-card {
          background: #FAF8F5;
          border: 1px solid #EAE4DA;
          border-radius: 20px;
          padding: 1.5rem 1.8rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(9, 30, 58, 0.08);
          border-color: #00A896;
          background: #FFFFFF;
        }

        .card-whatsapp {
          border-left: 4px solid #00A896;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-icon svg {
          width: 24px;
          height: 24px;
        }

        .icon-green {
          background: #E6F7F5;
          color: #00A896;
        }

        .icon-orange {
          background: #FFF2EB;
          color: #FF6B35;
        }

        .icon-blue {
          background: #EEF2F6;
          color: #091E3A;
        }

        .card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #8798AD;
          margin-bottom: 0.15rem;
        }

        .card-name {
          font-family: var(--font-display, sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #091E3A;
          line-height: 1.2;
        }

        .card-val {
          font-size: 0.85rem;
          font-weight: 600;
          color: #54667D;
        }

        .card-arrow {
          font-size: 1.3rem;
          color: #8798AD;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .contact-card:hover .card-arrow {
          color: #00A896;
          transform: translate(4px, -4px);
        }

        @media (max-width: 990px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-box {
            padding: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .contact-box {
            padding: 1.5rem;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}
