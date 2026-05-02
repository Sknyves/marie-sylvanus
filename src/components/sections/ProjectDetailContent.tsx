'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { gsap } from 'gsap';
import Link from 'next/link';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import { projectsData } from '@/data/projects';


export default function ProjectDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id] ?? {
    title: id?.replace(/-/g, ' ').toUpperCase() ?? 'PROJET',
    category: 'Case Study',
    year: new Date().getFullYear().toString(),
    role: 'Developer',
    description: 'Description détaillée du projet en cours de rédaction.',
    longDesc: 'Ce projet illustre mon expertise en développement full stack et en conception d\'interfaces utilisateur performantes.',
    challenge: 'Répondre aux besoins spécifiques du client tout en respectant les contraintes techniques et budgétaires.',
    solution: 'Architecture moderne, code propre et livraison dans les délais.',
    stack: ['React', 'TypeScript', 'Node.js'],
    externalLink: '#',
    image: '',
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pd-reveal', {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
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
              <div className="pd-meta-block">
                <div className="pd-meta-item">
                  <span className="meta-label">ANNÉE</span>
                  <span className="meta-value">{project.year}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="meta-label">RÔLE</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="pd-meta-item">
                  <span className="meta-label">LIEN LIVE</span>
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
            <div className="pd-mockup">
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

            <div className="pd-content-block pd-reveal">
              <h2 className="content-label">01 — CONTEXTE</h2>
              <p className="content-body">{project.longDesc}</p>
            </div>

            <div className="pd-content-block pd-reveal">
              <h2 className="content-label">02 — DÉFI</h2>
              <p className="content-body">{project.challenge}</p>
            </div>

            <div className="pd-content-block pd-reveal">
              <h2 className="content-label">03 — SOLUTION</h2>
              <p className="content-body">{project.solution}</p>
            </div>

            <div className="pd-content-block pd-reveal">
              <h2 className="content-label">04 — STACK TECHNIQUE</h2>
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
              <span>VOIR LE PROJET LIVE</span>
              <span className="cta-arrow">↗</span>
            </a>
            <Link href="/work" className="back-btn">
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .project-detail {
          background: #000;
          color: #fff;
          min-height: 100vh;
        }

        .pd-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* HERO */
        .pd-hero {
          padding: 22vh 0 8vh;
          border-bottom: 1px solid #0f0f0f;
        }
        .pd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          opacity: 0.4;
          margin-bottom: 4rem;
        }
        .breadcrumb-link {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .breadcrumb-link:hover { opacity: 1; }
        .breadcrumb-sep { opacity: 0.3; }
        .breadcrumb-current { opacity: 0.6; }

        .pd-hero-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 6vw;
          align-items: start;
        }

        .pd-cat {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #555;
          display: block;
          margin-bottom: 1.5rem;
        }
        .pd-title {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }
        .pd-desc {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1rem, 1.4vw, 1.3rem);
          line-height: 1.6;
          opacity: 0.6;
          max-width: 560px;
        }

        .pd-meta-block {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 2.5rem;
          border: 1px solid #111;
          background: #050505;
        }
        .pd-meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .meta-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: #444;
          text-transform: uppercase;
        }
        .meta-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 600;
        }
        .meta-link {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.75rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #222;
          padding-bottom: 0.5rem;
          transition: border-color 0.3s ease;
          display: inline-block;
        }
        .meta-link:hover { border-color: #fff; }

        /* MOCKUP */
        .pd-image-section {
          padding: 6vh 0 0;
        }
        .pd-mockup {
          border: 1px solid #111;
          overflow: hidden;
          background: #070707;
        }
        .mockup-browser-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: #0a0a0a;
          border-bottom: 1px solid #111;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.r { background: #ff5f57; }
        .dot.y { background: #ffbd2e; }
        .dot.g { background: #28c940; }
        .mockup-url {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          color: #333;
          margin-left: 1rem;
          letter-spacing: 0.05em;
        }
        .mockup-img {
          width: 100%;
          height: auto;
          display: block;
          max-height: 70vh;
          object-fit: cover;
          object-position: top;
        }

        /* CONTENT */
        .pd-content {
          padding: 10vh 0 15vh;
        }
        .pd-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem 8vw;
          margin-bottom: 10vh;
        }
        .content-label {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: #333;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .content-body {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          line-height: 1.75;
          opacity: 0.65;
        }

        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .stack-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0.5rem 1.25rem;
          border: 1px solid #1f1f1f;
          color: #aaa;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .stack-tag:hover {
          border-color: #fff;
          color: #fff;
        }

        /* CTA */
        .pd-cta {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding-top: 6vh;
          border-top: 1px solid #0f0f0f;
        }
        .cta-btn {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          text-decoration: none;
          padding: 1.2rem 3rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-btn:hover {
          background: #111;
          color: #fff;
        }
        .cta-arrow {
          font-size: 1.1rem;
          transition: transform 0.4s ease;
        }
        .cta-btn:hover .cta-arrow {
          transform: translate(4px, -4px);
        }
        .back-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          color: #555;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }
        .back-btn:hover { color: #fff; }

        @media (max-width: 900px) {
          .pd-hero-grid { grid-template-columns: 1fr; gap: 4rem; }
          .pd-content-grid { grid-template-columns: 1fr; gap: 4rem; }
          .pd-cta { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .pd-title { font-size: 2.8rem; }
        }
        @media (max-width: 600px) {
          .pd-hero { padding: 18vh 0 6vh; }
          .pd-title { font-size: 2rem; }
          .pd-meta-block { padding: 1.5rem; gap: 1.5rem; }
          .pd-meta-item { border-bottom: 1px solid #111; padding-bottom: 1rem; }
          .pd-meta-item:last-child { border: none; }
          .pd-breadcrumb { margin-bottom: 2rem; }
        }
      `}</style>
    </main>
  );
}
