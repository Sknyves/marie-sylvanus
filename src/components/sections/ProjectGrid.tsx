'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { projectsList } from '@/data/projects';

interface ProjectGridProps {
  limit?: number;
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const displayedProjects = limit ? projectsList.slice(0, limit) : projectsList;

  useEffect(() => {
    gsap.set('.project-card', { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.project-card', {
        start: 'top 92%',
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power3.out',
            overwrite: true
          });
        },
        once: true
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="project-section" id="work">
      <div className="project-container">
        <div className="project-header">
          <div className="project-tag">SÉLECTION DE PROJETS</div>
          <h2 className="project-title">PORTFOLIO</h2>
          <p className="project-subtitle">Des solutions sur mesure alliant esthétique et performance.</p>
        </div>

        <div className="project-grid">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="project-card" id={`project-card-${project.id}`}>
              {/* Image preview layer */}
              {project.image && (
                <div className="card-image-layer">
                  <img src={project.image} alt={project.title} className="card-preview-img" />
                  <div className="card-image-overlay" />
                </div>
              )}

              <div className="card-content">
                <div className="card-top">
                  <div className="card-meta">
                    <span className="project-num">0{index + 1}</span>
                    <span className="project-cat">{project.category}</span>
                  </div>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                    onClick={(e) => e.stopPropagation()}
                    title="Voir le site live"
                  >
                    <span className="external-arrow">↗</span>
                  </a>
                </div>

                <div className="card-middle">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div className="card-bottom">
                  <Link href={`/projects/${project.id}`} className="detail-btn" prefetch={false}>
                    <span className="detail-label">VOIR LE PROJET</span>
                  </Link>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="project-footer">
            <Link href="/work" className="view-all-btn">
              <span>EXPLORER TOUS LES PROJETS</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        )}
      </div>

      <style jsx global>{`
        .project-footer {
          margin-top: 6vh;
          display: flex;
          justify-content: center;
        }
        .view-all-btn {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.8rem;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 3rem;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s ease;
        }
        .view-all-btn:hover {
          background: #fff;
          color: #000;
          border-color: #fff;
        }
        .btn-arrow {
          transition: transform 0.4s ease;
        }
        .view-all-btn:hover .btn-arrow {
          transform: translateX(10px);
        }
        .project-section {
          width: 100%;
          background: #000;
          color: #fff;
          padding: 15vh 5vw;
          position: relative;
          z-index: 50;
        }
        .project-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .project-header {
          margin-bottom: 8vh;
        }
        .project-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: #444;
          margin-bottom: 1rem;
        }
        .project-title {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(2rem, 5vw, 4rem);
          margin-bottom: 1rem;
        }
        .project-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          opacity: 0.5;
          max-width: 500px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .project-card {
          background: #080808;
          border: 1px solid #1a1a1a;
          position: relative;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.5s ease;
        }

        .card-image-layer {
          position: absolute;
          inset: 0;
          opacity: 0.5; /* Visible par défaut */
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease;
          z-index: 0;
        }
        .project-card:hover .card-image-layer {
          transform: scale(1.05);
          opacity: 0.8;
        }
        .card-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
        }
        .project-card:hover {
          border-color: #333;
        }

        .card-content {
          position: relative;
          z-index: 1;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex: 1;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-num {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.6rem;
          color: #333;
          letter-spacing: 0.1em;
        }
        .project-cat {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.4;
          font-weight: 600;
        }

        .external-link {
          width: 40px;
          height: 40px;
          border: 1px solid #1f1f1f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .external-link:hover {
          background: #fff;
          color: #000;
          border-color: #fff;
          transform: rotate(45deg);
        }
        .external-arrow {
          font-size: 1rem;
          line-height: 1;
        }

        .card-middle {
          flex: 1;
          padding: 2rem 0;
        }
        .project-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 700;
          margin: 0 0 1rem;
          line-height: 1.1;
        }
        .project-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
          opacity: 0.5;
          max-width: 480px;
        }

        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid #141414;
        }
        .detail-btn {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          position: relative;
          color: #000000 !important;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.2rem 2.4rem;
          background: #ffffff;
          border: 1px solid #ffffff;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          z-index: 10;
        }
        .detail-label {
          position: relative;
          z-index: 5;
          color: #000000 !important;
          display: block;
        }
        .detail-btn::before {
          content: 'CLIQUER →';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .detail-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .detail-btn:hover::before {
          transform: translateY(0);
        }
        
        .detail-btn:active {
          transform: scale(0.95);
        }

        .project-card:hover .project-name {
          color: #fff;
        }

        .project-year {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          opacity: 0.2;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: 1fr; }
          .project-card { min-height: 400px; }
          .card-content { padding: 2rem; }
        }
        @media (max-width: 600px) {
          .project-section { padding: 8vh 5vw; }
          .project-name { font-size: 1.5rem; }
          .card-content { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
