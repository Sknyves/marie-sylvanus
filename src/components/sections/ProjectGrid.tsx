'use client';

import React from 'react';
import Link from 'next/link';
import { projectsList } from '@/data/projects';
import BrandWaves from '@/components/ui/BrandWaves';

interface ProjectGridProps {
  limit?: number;
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const displayedProjects = limit ? projectsList.slice(0, limit) : projectsList;

  return (
    <section className="project-section" id="work">
      <div className="project-container">
        
        {/* Header */}
        <div className="project-header">
          <div className="header-left">
            <span className="section-tag">SOLUTIONS & ÉTUDES DE CAS</span>
            <h2 className="section-title">
              Des réalisations concrètes,<br />
              <span className="title-teal">mesurables et durables.</span>
            </h2>
          </div>
          <p className="header-right-desc">
            Chaque système développé résout un problème précis : automatiser des processus administratifs, orchestrer des assistants IA ou propulser des plateformes digitales performantes.
          </p>
        </div>

        {/* Grid */}
        <div className="project-grid">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="project-card brand-card">
              {/* Image Preview Layer */}
              {project.image && (
                <div className="card-image-box">
                  <img src={project.image} alt={project.title} className="card-img" />
                  <div className="card-img-badge">
                    <span>{project.category}</span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="card-body">
                <div className="card-meta">
                  <span className="project-num">0{index + 1}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Solution Key Highlight */}
                {project.solution && (
                  <div className="project-solution-pill">
                    <span className="pill-star">✨</span>
                    <span className="pill-text">{project.solution.slice(0, 85)}...</span>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {project.stack && (
                  <div className="stack-pills">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="card-actions">
                  <Link href={`/projects/${project.id}`} className="view-detail-link">
                    <span>Découvrir l'étude de cas</span>
                    <span className="arrow">→</span>
                  </Link>

                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-btn"
                      title="Visiter le site"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="ext-icon">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {limit && (
          <div className="project-footer">
            <Link href="/work" className="view-all-btn">
              <span>Consulter l'ensemble des {projectsList.length} projets</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        )}

      </div>

      <BrandWaves position="bottom-left" opacity={0.3} />

      <style jsx>{`
        .project-section {
          width: 100%;
          background: #FAF8F5;
          padding: 7rem 2rem;
          position: relative;
          z-index: 35;
        }

        .project-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .section-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #FF6B35;
          margin-bottom: 0.6rem;
          display: inline-block;
        }

        .section-title {
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.15;
        }

        .title-teal {
          color: #00A896;
        }

        .header-right-desc {
          font-size: 1rem;
          color: #54667D;
          max-width: 480px;
          line-height: 1.6;
        }

        /* Grid */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card {
          background: #FFFFFF;
          border: 1px solid #EAE4DA;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(9, 30, 58, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(9, 30, 58, 0.1);
          border-color: rgba(0, 168, 150, 0.4);
        }

        .card-image-box {
          position: relative;
          width: 100%;
          height: 240px;
          background: #F3EFEA;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .card-img {
          transform: scale(1.04);
        }

        .card-img-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(9, 30, 58, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
        }

        .card-body {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .project-num {
          font-family: var(--font-display, sans-serif);
          font-size: 0.8rem;
          font-weight: 800;
          color: #00A896;
          letter-spacing: 0.1em;
        }

        .project-year {
          font-size: 0.75rem;
          font-weight: 700;
          color: #8798AD;
        }

        .project-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.55rem;
          font-weight: 800;
          color: #091E3A;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .project-desc {
          font-size: 0.92rem;
          color: #54667D;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .project-solution-pill {
          background: #E6F7F5;
          color: #00A896;
          border: 1px solid rgba(0, 168, 150, 0.2);
          border-radius: 12px;
          padding: 0.6rem 0.9rem;
          font-size: 0.78rem;
          line-height: 1.4;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .pill-star {
          font-size: 0.9rem;
        }

        .stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .tech-tag {
          font-size: 0.72rem;
          font-weight: 600;
          color: #54667D;
          background: #F3EFEA;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        /* Action Links */
        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid #EAE4DA;
        }

        .view-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #091E3A;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .view-detail-link:hover {
          color: #FF6B35;
        }

        .view-detail-link:hover .arrow {
          transform: translateX(4px);
        }

        .arrow {
          transition: transform 0.25s ease;
          font-size: 1rem;
        }

        .external-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F3EFEA;
          color: #091E3A;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .external-btn:hover {
          background: #00A896;
          color: #FFFFFF;
          transform: scale(1.08);
        }

        .ext-icon {
          width: 16px;
          height: 16px;
        }

        /* View all button */
        .project-footer {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          background: #091E3A;
          color: #FFFFFF;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 1.1rem 2.2rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(9, 30, 58, 0.15);
        }

        .view-all-btn:hover {
          background: #00A896;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 168, 150, 0.3);
        }

        .view-all-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        @media (max-width: 900px) {
          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
