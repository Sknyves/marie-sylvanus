'use client';

import React from 'react';
import BrandWaves from '@/components/ui/BrandWaves';
import BrandSignature from '@/components/ui/BrandSignature';

export default function ComparisonSection() {
  return (
    <section className="comparison-section" id="comparatif">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="header-box">
          <div className="accent-bar-top" />
          <h2 className="section-title">
            De la saisie répétitive<br />
            <span className="title-highlight">à l'analyse et au conseil.</span>
          </h2>
          <p className="section-subtitle">
            L'automatisation ne remplace pas l'humain : elle élimine la friction opérationnelle pour vous permettre de vous concentrer sur ce qui a une vraie valeur.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="cards-grid">
          
          {/* Card Left: Problème / Avant */}
          <div className="comp-card card-before">
            <div className="card-badge badge-dark">
              SAISIE RÉPÉTITIVE
            </div>
            <p className="card-pitch">
              Du temps perdu sur des tâches manuelles et chronophages à faible valeur ajoutée.
            </p>

            <ul className="points-list list-before">
              <li className="point-item">
                <div className="point-icon icon-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span>Saisie manuelle chronophage et rébarbative</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <span>Risque d'erreurs, d'oublis et de doublons</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="18" height="12" x="2" y="6" rx="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" y1="12" x2="10" y2="12"/></svg>
                </div>
                <span>Fatigue mentale et baisse de concentration</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <span>Moins de temps pour l'essentiel et les clients</span>
              </li>
            </ul>
          </div>

          {/* Central Transformation Arrow */}
          <div className="arrow-connector">
            <div className="arrow-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-svg">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <span className="arrow-text">TRANSFORMATION</span>
          </div>

          {/* Card Right: Solution / Après */}
          <div className="comp-card card-after">
            <div className="card-badge badge-turquoise">
              ANALYSE ET CONSEIL
            </div>
            <p className="card-pitch">
              Du temps libéré pour comprendre, conseiller, décider et apporter un impact maximal.
            </p>

            <ul className="points-list list-after">
              <li className="point-item">
                <div className="point-icon icon-turquoise">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
                <span>Données fiables, centralisées et synchronisées en direct</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-turquoise">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </div>
                <span>Analyses claires, tableaux de bord et synthèses IA</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-turquoise">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <span>Conseils à haute valeur ajoutée et décisions éclairées</span>
              </li>
              <li className="point-item">
                <div className="point-icon icon-turquoise">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <span>Plus de sérénité, plus de valeur, plus d'impact</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Quote and Signature */}
        <div className="quote-banner-box">
          <div className="quote-content">
            <div className="heart-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="heart-svg">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div className="quote-text">
              <span className="quote-main">Automatiser l'opérationnel</span>
              <span className="quote-accent"> pour révéler le stratégique.</span>
            </div>
          </div>
          <div className="banner-sig-wrapper">
            <BrandSignature theme="light" />
          </div>
        </div>

      </div>

      <BrandWaves position="bottom-right" opacity={0.6} />

      <style jsx>{`
        .comparison-section {
          width: 100%;
          background: #FAF8F5;
          padding: 7rem 2rem;
          position: relative;
          z-index: 20;
          overflow: hidden;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .header-box {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .accent-bar-top {
          width: 50px;
          height: 3px;
          background: #FF6B35;
          border-radius: 999px;
          margin-bottom: 1.25rem;
        }

        .section-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.15;
          margin-bottom: 1.2rem;
        }

        .title-highlight {
          color: #00A896;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: #54667D;
          max-width: 700px;
          line-height: 1.6;
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .comp-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(9, 30, 58, 0.05);
          position: relative;
          transition: all 0.35s ease;
        }

        .comp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(9, 30, 58, 0.08);
        }

        .card-before {
          border-top: 4px solid #091E3A;
        }

        .card-after {
          border-top: 4px solid #00A896;
          background: #FDFFFE;
        }

        .card-badge {
          display: inline-block;
          font-family: var(--font-display, sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .badge-dark {
          background: #091E3A;
          color: #FFFFFF;
        }

        .badge-turquoise {
          background: #00A896;
          color: #FFFFFF;
        }

        .card-pitch {
          font-size: 0.95rem;
          color: #54667D;
          margin-bottom: 2rem;
          min-height: 48px;
          line-height: 1.5;
        }

        /* Points List */
        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .point-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #091E3A;
        }

        .point-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-icon svg {
          width: 18px;
          height: 18px;
        }

        .icon-red {
          background: #FEE2E2;
          color: #DC2626;
          border: 1px solid rgba(220, 38, 38, 0.2);
        }

        .icon-turquoise {
          background: #E6F7F5;
          color: #00A896;
          border: 1px solid rgba(0, 168, 150, 0.25);
        }

        /* Center Arrow */
        .arrow-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .arrow-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #FF6B35;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
          animation: bounce 2s infinite ease-in-out;
        }

        .arrow-svg {
          width: 24px;
          height: 24px;
        }

        .arrow-text {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #FF6B35;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }

        /* Quote Banner Box */
        .quote-banner-box {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 20px;
          padding: 1.5rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 8px 24px rgba(9, 30, 58, 0.04);
        }

        .quote-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .heart-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF2EB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .heart-svg {
          width: 22px;
          height: 22px;
        }

        .quote-text {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          font-weight: 700;
        }

        .quote-main {
          color: #091E3A;
        }

        .quote-accent {
          color: #00A896;
        }

        @media (max-width: 990px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .arrow-connector {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
          .quote-banner-box {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .quote-content {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
