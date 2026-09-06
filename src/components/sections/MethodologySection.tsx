'use client';

import React, { useState } from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Problème & Friction',
    tag: 'DIAGNOSTIC',
    desc: 'Identification des tâches répétitives, pertes de temps chronophages, erreurs manuelles et goulots d\'étranglement opérationnels.',
    icon: '🔍',
    accent: '#FF6B35'
  },
  {
    num: '02',
    title: 'Compréhension & Simplification',
    tag: 'ANALYSE',
    desc: 'Avant d\'automatiser, nous clarifions et épurons le workflow. Un mauvais processus automatisé reste un mauvais processus.',
    icon: '🧠',
    accent: '#091E3A'
  },
  {
    num: '03',
    title: 'Automatisation & IA',
    tag: 'DÉPLOIEMENT',
    desc: 'Mise en place de flux intelligents et d\'assistants IA sur mesure (n8n, Make, WhatsApp API, LLMs, Webhooks, CRM).',
    icon: '⚡',
    accent: '#00A896'
  },
  {
    num: '04',
    title: 'Mesure & Rentabilité',
    tag: 'KPI & ROI',
    desc: 'Quantification concrète des résultats : heures économisées par semaine, suppression des erreurs et fluidité d\'exécution.',
    icon: '📊',
    accent: '#028090'
  },
  {
    num: '05',
    title: 'Impact Humain',
    tag: 'VALEUR FINALE',
    desc: 'Moins de charge mentale pour vos équipes, plus de disponibilité pour vos clients, et une posture recentrée sur le conseil et la stratégie.',
    icon: '⭐',
    accent: '#FF6B35'
  }
];

export default function MethodologySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="method-section" id="methode">
      <div className="method-container">
        
        <div className="method-header">
          <span className="section-tag">NOTRE CADRE D'ACTION</span>
          <h2 className="section-title">
            De la friction à l'impact :<br />
            <span className="title-teal">la démarche en 5 étapes.</span>
          </h2>
          <p className="section-desc">
            Chaque projet suit une progression logique pour garantir une solution durable, adoptée facilement par vos équipes et immédiatement rentable.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="steps-grid">
          {STEPS.map((step, idx) => (
            <div 
              key={step.num}
              className={`step-card ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="step-top">
                <span className="step-num">{step.num}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <div className="step-badge" style={{ color: step.accent }}>
                {step.tag}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Narrative Flow Bar */}
        <div className="narrative-flow-bar">
          <span className="flow-step">Problème</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Compréhension</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Simplification</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Automatisation</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Mesure</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step highlight">Impact humain</span>
        </div>

      </div>

      <style jsx>{`
        .method-section {
          width: 100%;
          background: #F3EFEA;
          padding: 7rem 2rem;
          position: relative;
          z-index: 25;
        }

        .method-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .method-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #FF6B35;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .title-teal {
          color: #00A896;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #54667D;
          max-width: 680px;
          line-height: 1.6;
        }

        /* Steps Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .step-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 20px;
          padding: 1.8rem 1.4rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .step-card:hover, .step-card.active {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(9, 30, 58, 0.09);
          border-color: #00A896;
        }

        .step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .step-num {
          font-family: var(--font-display, sans-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: #091E3A;
          opacity: 0.25;
        }

        .step-icon {
          font-size: 1.5rem;
        }

        .step-badge {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          margin-bottom: 0.6rem;
        }

        .step-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.1rem;
          font-weight: 800;
          color: #091E3A;
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }

        .step-desc {
          font-size: 0.82rem;
          color: #54667D;
          line-height: 1.55;
        }

        /* Narrative Flow Bar */
        .narrative-flow-bar {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 999px;
          padding: 1.1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #091E3A;
          box-shadow: 0 6px 20px rgba(9, 30, 58, 0.04);
          overflow-x: auto;
          white-space: nowrap;
        }

        .flow-arrow {
          color: #FF6B35;
          font-size: 1.1rem;
        }

        .flow-step.highlight {
          color: #00A896;
          background: #E6F7F5;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
        }

        @media (max-width: 1100px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .narrative-flow-bar {
            justify-content: flex-start;
            padding: 1rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
