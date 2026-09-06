'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { gsap } from 'gsap';
import Link from 'next/link';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import { projectsData } from '@/data/projects';
import BrandWaves from '@/components/ui/BrandWaves';

export default function ProjectDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id] ?? {
    title: id?.replace(/-/g, ' ').toUpperCase() ?? 'PROJET',
    category: 'Étude de Cas',
    year: new Date().getFullYear().toString(),
    role: 'Consultante Automatisation & IA',
    description: 'Description détaillée de la solution développée.',
    longDesc: 'Ce projet illustre mon expertise en automatisation de processus, conception logicielle et intégration d\'intelligence artificielle.',
    challenge: 'Identifier les goulots d\'étranglement opérationnels et simplifier le quotidien des utilisateurs.',
    solution: 'Architecture moderne, workflows automatisés et gains de productivité immédiats.',
    stack: ['n8n', 'OpenAI', 'Next.js', 'PostgreSQL'],
    externalLink: '#',
    image: '',
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pd-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="project-detail">
      <Navbar />

      {/* HERO */}
      <section className="pd-hero">
        <div className="pd-container">
          <div className="pd-breadcrumb pd-reveal">
            <Link href="/work" className="breadcrumb-link">← Portfolio</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </div>

          <div className="pd-hero-grid">
            <div className="pd-hero-left">
              <span className="pd-reveal pd-cat">{project.category}</span>
              <h1 className="pd-reveal pd-title">{project.title}</h1>
              <p className="pd-reveal pd-desc">{project.description}</p>
            </div>
            <div className="pd-hero-right pd-reveal">
              <div className="pd-meta-block brand-card">
                <div className="pd-meta-item">
                  <span className="meta-label">ANNÉE</span>
                  <span className="meta-value">{project.year}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="meta-label">RÔLE</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="meta-label">LIEN DU SITE</span>
                  <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="meta-link">
                    VISITER ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP IMAGE */}
      {project.image && (
        <section className="pd-image-section pd-reveal">
          <div className="pd-container">
            <div className="pd-mockup brand-card">
              <div className="mockup-browser-bar">
                <span className="dot r" /><span className="dot y" /><span className="dot g" />
                <span className="mockup-url">{project.externalLink.replace('https://', '')}</span>
              </div>
              <img src={project.image} alt={`Aperçu de ${project.title}`} className="mockup-img" />
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="pd-content">
        <div className="pd-container">
          <div className="pd-content-grid">

            <div className="pd-content-block brand-card pd-reveal">
              <h2 className="content-label">01 — CONTEXTE & OBJECTIF</h2>
              <p className="content-body">{project.longDesc}</p>
            </div>

            <div className="pd-content-block brand-card pd-reveal">
              <h2 className="content-label">02 — DÉFI OPÉRATIONNEL</h2>
              <p className="content-body">{project.challenge}</p>
            </div>

            <div className="pd-content-block brand-card pd-reveal">
              <h2 className="content-label">03 — SOLUTION & AUTOMATISATION</h2>
              <p className="content-body">{project.solution}</p>
            </div>

            <div className="pd-content-block brand-card pd-reveal">
              <h2 className="content-label">04 — ÉCOSYSTÈME TECHNIQUE</h2>
              <div className="stack-grid">
                {project.stack?.map((tech) => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pd-cta pd-reveal">
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
              <span>VISITER LE PROJET EN DIRECT</span>
              <span className="cta-arrow">↗</span>
            </a>
            <Link href="/#diagnostic" className="secondary-cta-btn">
              <span>Demander un diagnostic similaire (15 min)</span>
            </Link>
          </div>
        </div>
      </section>

      <BrandWaves position="bottom-right" opacity={0.4} />

      <Footer />

      <style jsx>{`
        .project-detail {
          width: 100%;
          min-height: 100vh;
          background: #FAF8F5;
          color: #091E3A;
          padding-top: 100px;
        }

        .pd-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .pd-hero {
          padding: 3rem 0 4rem;
        }

        .pd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .breadcrumb-link {
          color: #FF6B35;
          text-decoration: none;
        }

        .breadcrumb-sep {
          color: #8798AD;
        }

        .breadcrumb-current {
          color: #54667D;
        }

        .pd-hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3rem;
          align-items: flex-end;
        }

        .pd-cat {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #00A896;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .pd-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #091E3A;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .pd-desc {
          font-size: 1.1rem;
          color: #54667D;
          line-height: 1.6;
        }

        .pd-meta-block {
          background: #FFFFFF;
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pd-meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #EAE4DA;
          padding-bottom: 0.75rem;
        }

        .pd-meta-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .meta-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #8798AD;
          letter-spacing: 0.1em;
        }

        .meta-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #091E3A;
        }

        .meta-link {
          color: #FF6B35;
          font-weight: 800;
          font-size: 0.85rem;
          text-decoration: none;
        }

        /* Mockup */
        .pd-image-section {
          padding: 2rem 0 4rem;
        }

        .pd-mockup {
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
        }

        .mockup-browser-bar {
          background: #F3EFEA;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid #EAE4DA;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.r { background: #FF5F56; }
        .dot.y { background: #FFBD2E; }
        .dot.g { background: #27C93F; }

        .mockup-url {
          margin-left: 1rem;
          font-size: 0.75rem;
          color: #8798AD;
          font-family: monospace;
        }

        .mockup-img {
          width: 100%;
          max-height: 650px;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* Content */
        .pd-content {
          padding: 3rem 0 6rem;
        }

        .pd-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .pd-content-block {
          background: #FFFFFF;
          padding: 2.5rem;
          border-radius: 20px;
        }

        .content-label {
          font-family: var(--font-display, sans-serif);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #00A896;
          margin-bottom: 1rem;
        }

        .content-body {
          font-size: 1rem;
          color: #54667D;
          line-height: 1.7;
        }

        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1rem;
        }

        .stack-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: #091E3A;
          background: #F3EFEA;
          padding: 0.4rem 0.9rem;
          border-radius: 8px;
        }

        /* CTA */
        .pd-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #FF6B35;
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 1.1rem 2.2rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #F2571D;
          transform: translateY(-2px);
        }

        .secondary-cta-btn {
          display: inline-flex;
          align-items: center;
          background: #091E3A;
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 1.1rem 2.2rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .secondary-cta-btn:hover {
          background: #00A896;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .pd-hero-grid {
            grid-template-columns: 1fr;
          }
          .pd-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
