'use client';

import React from 'react';
import { TECH_STACK } from '@/data/tech';
import BrandWaves from '@/components/ui/BrandWaves';

export default function TechSection() {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-container">
        
        {/* Header */}
        <div className="tech-header">
          <span className="section-tag">ÉCOSYSTÈME & OUTILS</span>
          <h2 className="section-title">
            Les technologies au service<br />
            <span className="title-teal">de votre efficacité.</span>
          </h2>
          <p className="section-subtitle">
            Une sélection d'outils éprouvés pour interconnecter vos logiciels, automatiser vos tâches sans friction et déployer des assistants IA fiables.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="tech-grid">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="tech-card">
              <div className="card-top">
                <span className="card-cat">{tech.category}</span>
                <div className="card-icon-wrap">
                  <img src={tech.icon} alt={tech.name} className="card-icon" />
                </div>
              </div>
              <div className="card-bottom">
                <h3 className="card-name">{tech.name}</h3>
                <span className="card-badge-dot" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <BrandWaves position="bottom-right" opacity={0.3} />

      <style jsx>{`
        .tech-section {
          width: 100%;
          background: #FAF8F5;
          padding: 7rem 2rem;
          position: relative;
          z-index: 30;
          overflow: hidden;
        }

        .tech-container {
          max-width: 1250px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .tech-header {
          text-align: center;
          margin-bottom: 4.5rem;
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

        .section-subtitle {
          font-size: 1.05rem;
          color: #54667D;
          max-width: 650px;
          line-height: 1.6;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .tech-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 20px;
          padding: 1.75rem 1.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          box-shadow: 0 8px 20px rgba(9, 30, 58, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 168, 150, 0.12);
          border-color: #00A896;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .card-cat {
          font-size: 0.68rem;
          font-weight: 700;
          color: #8798AD;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .card-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #F3EFEA;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .tech-card:hover .card-icon-wrap {
          background: #E6F7F5;
          transform: scale(1.1);
        }

        .card-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
        }

        .card-name {
          font-family: var(--font-display, sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #091E3A;
        }

        .card-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00A896;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover .card-badge-dot {
          opacity: 1;
        }

        @media (max-width: 1100px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .tech-card {
            padding: 1.25rem;
            min-height: 150px;
          }
          .card-name {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
