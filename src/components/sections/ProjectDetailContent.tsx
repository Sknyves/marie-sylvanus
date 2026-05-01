'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { gsap } from 'gsap';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface ProjectData {
  title: string;
  category: string;
  description: string;
  longDesc: string;
  challenge: string;
  solution: string;
  stack: string[];
  link: string;
  image: string;
  year: string;
  role: string;
}

const projectsData: Record<string, ProjectData> = {
  barika: {
    title: 'ONG Barika Bénin',
    category: 'Social / Culture',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Plateforme dédiée à l\'autonomisation des femmes par les AGR et à la promotion de la culture Waama à Natitingou.',
    longDesc: 'Barika Bénin est une ONG ancrée dans les réalités béninoises, œuvrant pour l\'autonomisation économique des femmes à travers les Activités Génératrices de Revenus (AGR) et la valorisation du patrimoine culturel Waama.',
    challenge: 'Concevoir une interface qui soit à la fois moderne pour les donateurs internationaux et accessible à un public local peu familier avec le digital, tout en reflétant l\'identité culturelle de l\'organisation.',
    solution: 'Architecture Next.js avec animations Framer Motion fluides, palette de couleurs inspirée des tissus Waama, et contenu bilingue. Optimisation des performances pour les connexions mobiles faibles.',
    stack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vercel'],
    link: 'https://barika-benin.vercel.app/',
    image: '/projects/barika.png',
  },
  roajelf: {
    title: 'Roajelf Bénin',
    category: 'Leadership / Féminisme',
    year: '2024',
    role: 'Lead Developer',
    description: 'Réseau Ouest Africain des Jeunes Femmes Leaders, mobilisant la jeunesse féminine pour le développement du Bénin.',
    longDesc: 'ROAJELF est un réseau panafricain structuré autour de la formation au leadership féminin, de l\'engagement civique et du développement durable. La plateforme sert de hub central pour les membres, événements et ressources.',
    challenge: 'Fédérer une communauté dispersée géographiquement autour d\'une plateforme unique qui serve à la fois de réseau social interne et de vitrine internationale pour l\'organisation.',
    solution: 'Développement d\'un système de gestion de contenu léger avec intégration d\'un espace membres sécurisé, d\'un agenda d\'événements et d\'une newsletter automatisée via des webhooks.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    link: 'https://roajelf.vercel.app/',
    image: '/projects/requestflow.png',
  },
  'france-recours': {
    title: 'France Recours',
    category: 'Expertise / Mobilité',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Solution digitale facilitant les démarches de visas et l\'assistance administrative pour la France.',
    longDesc: 'France Recours digitalise l\'accompagnement des demandes de visa et de régularisation administrative, un secteur traditionnellement opaque et chronophage. La plateforme guide les usagers pas à pas dans leurs démarches.',
    challenge: 'Simplifier un processus administratif complexe pour des utilisateurs souvent en situation de stress, tout en assurant la confidentialité des données personnelles sensibles.',
    solution: 'Interface conversationnelle étape par étape avec validation en temps réel, système de suivi de dossier, et intégration d\'un chatbot IA pour les questions fréquentes. Conformité RGPD stricte.',
    stack: ['Next.js', 'Node.js', 'OpenAI API', 'Stripe', 'Vercel'],
    link: 'https://france-recours.vercel.app/',
    image: '/projects/uptown.png',
  },
  'neon-mind': {
    title: 'Neon Mind AI',
    category: 'AI / Content Automation',
    year: '2025',
    role: 'AI Engineer & Developer',
    description: 'Ecosystème de blogging autonome propulsé par l\'IA, gérant la création et la publication sans intervention humaine.',
    longDesc: 'Neon Mind est un système d\'IA autonome qui génère, édite, optimise SEO et publie des articles de blog sans intervention humaine. Il combine des modèles de langage, des agents de recherche et un pipeline de publication automatisé.',
    challenge: 'Créer un contenu qui soit à la fois de haute qualité, factuellement fiable et optimisé pour le référencement naturel, tout en maintenant un ton cohérent et une voix de marque distinctive.',
    solution: 'Architecture multi-agents avec LangChain : un agent de recherche web, un rédacteur, un éditeur SEO et un publisher. Pipeline orchestré via n8n avec monitoring des performances de contenu.',
    stack: ['Python', 'LangChain', 'OpenAI GPT-4o', 'n8n', 'Next.js', 'Railway'],
    link: 'https://neon-mind-nu.vercel.app/',
    image: '/projects/aimusic.png',
  },
  'kola-son': {
    title: 'Kola Son',
    category: 'Audio / Digital Design',
    year: '2025',
    role: 'Creative Developer',
    description: 'Interface immersive pour la diffusion et la valorisation de productions audio et musicales.',
    longDesc: 'Kola Son est une vitrine numérique conçue pour un producteur musical indépendant. L\'expérience est centrée sur l\'audio : chaque élément de l\'interface réagit à la musique en temps réel, créant une expérience synesthésique.',
    challenge: 'Créer une expérience utilisateur où la musique est l\'élément central de l\'interface, et non simplement une fonctionnalité secondaire, sans dégrader les performances de lecture audio.',
    solution: 'Utilisation de l\'API Web Audio pour analyser les fréquences en temps réel et piloter des animations Three.js. Interface minimaliste sombre qui disparaît pour laisser place à la musique.',
    stack: ['Next.js', 'Three.js', 'Web Audio API', 'GSAP', 'Framer Motion'],
    link: 'https://kola-son.vercel.app/',
    image: '/projects/aimusic.png',
  },
  'ai-interview': {
    title: 'AI Interview Agent',
    category: 'AI / HR Tech',
    year: '2025',
    role: 'AI Engineer & Lead Developer',
    description: 'Assistant intelligent en temps réel pour l\'optimisation des performances lors d\'entretiens en ligne.',
    longDesc: 'AI Interview Agent est un copilote d\'entretien professionnel qui analyse les questions posées en temps réel, suggère des réponses structurées STAR, évalue la pertinence du discours et fournit un feedback post-entretien détaillé.',
    challenge: 'Analyser et répondre aux questions orales avec une latence inférieure à 1,5 secondes tout en maintenant un contexte conversationnel riche et des suggestions contextuellement précises.',
    solution: 'Pipeline de transcription temps réel avec Whisper, analyse contextuelle via GPT-4o avec mémoire de conversation, et interface discrète conçue pour ne pas distraire pendant l\'entretien.',
    stack: ['Python', 'OpenAI Whisper', 'GPT-4o', 'FastAPI', 'React', 'WebSockets'],
    link: 'https://ai-interview-mu-red.vercel.app/',
    image: '/projects/comptaia.png',
  },
  'ets-pro': {
    title: 'ETS Pro CRM',
    category: 'Enterprise / Gestion',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Système de gestion multi-structures unifié pour le pilotage centralisé d\'activités commerciales.',
    longDesc: 'ETS Pro est un CRM sur mesure conçu pour un groupe d\'entreprises béninoises gérant plusieurs entités commerciales. Il centralise la gestion des clients, des stocks, des factures et des rapports financiers.',
    challenge: 'Unifier des processus métiers disparates hérités de plusieurs outils (Excel, Google Sheets, papier) dans un seul système cohérent, adopté rapidement par des équipes peu téchniques.',
    solution: 'Interface épurée avec des workflows guidés, tableaux de bord KPI en temps réel, système de rôles granulaires et génération automatique de rapports PDF. Formation intégrée in-app.',
    stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Chart.js', 'Railway'],
    link: 'https://ets-pro.vercel.app/',
    image: '/projects/comptaia.png',
  },
  lbm: {
    title: 'LBM Drive',
    category: 'Transport / Location',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Application de réservation et de gestion de flotte automobile pour la société LBM.',
    longDesc: 'LBM Drive est une solution complète de location de véhicules pour une société de transport au Bénin. Elle couvre la réservation en ligne, la gestion de flotte, le suivi des locations en cours et la facturation automatisée.',
    challenge: 'Adapter les patterns UX standards de location de voitures (Airbnb for cars) au contexte béninois, avec des contraintes de connectivité et des modes de paiement locaux.',
    solution: 'Interface progressive web app (PWA) fonctionnant en mode dégradé hors ligne, intégration de Mobile Money, et système de caution digitale. Tableau de bord opérateur pour la gestion de flotte.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'PWA', 'Vercel'],
    link: 'https://lbm-drive.vercel.app/',
    image: '/projects/garage.png',
  },
  any: {
    title: 'Any Restaurant',
    category: 'FoodTech / Delivery',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Plateforme de commande en ligne intuitive conçue pour la transformation digitale des restaurateurs.',
    longDesc: 'Any Restaurant est une solution clé-en-main de commande en ligne pour les restaurants locaux. Elle inclut une interface client mémorielle, un tableau de bord restaurateur et un système de fidélité automatisé.',
    challenge: 'Créer un produit suffisamment flexible pour s\'adapter à des dizaines de restaurants différents (menu, identité visuelle, zone de livraison), tout en maintenant une codebase unique et maintenable.',
    solution: 'Architecture multi-tenant avec thèmes dynamiques par restaurant, éditeur de menu drag-and-drop, et module analytics pour aider les restaurateurs à identifier leurs plats les plus populaires.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'Vercel'],
    link: 'https://any-teal.vercel.app/',
    image: '/projects/uptown.png',
  },
  'garde-meuble': {
    title: 'Garde Meuble',
    category: 'Logistics / SaaS',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Optimisation de la gestion des espaces de stockage et du self-storage.',
    longDesc: 'Garde Meuble digitalise la gestion d\'un entrepôt de self-storage : réservation d\'espaces, suivi des occupations, facturation récurrente et accès client sécurisé. Premier acteur numérique de ce secteur au Bénin.',
    challenge: 'Digitaliser un secteur entièrement analogique, convaincre des propriétaires traditionnels d\'adopter un outil numérique, et gérer des contrats de location à durée variable avec facturation pro-rata.',
    solution: 'Dashboard opérateur avec visualisation graphique des espaces disponibles, contrats digitaux avec signature électronique, rappels automatiques et facturation récurrente programmée.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Node.js', 'Railway'],
    link: 'https://garde-meuble.vercel.app/',
    image: '/projects/garage.png',
  },
  'k-ta': {
    title: 'K-ta EdTech',
    category: 'Éducation / Outils',
    year: '2024',
    role: 'Full Stack Developer',
    description: 'Solution d\'accompagnement académique pour la structuration et la présentation d\'exposés.',
    longDesc: 'K-ta est un assistant éducatif pour lycéens et étudiants béninois. Il guide la structuration d\'exposés académiques avec des templates par matière, des outils de recherche intégrés et un mode présentation.',
    challenge: 'Créer un outil qui soit véritablement utile au quotidien pour des élèves aux ressources limitées, sans dépendre d\'une connexion internet permanente, avec une interface ultra-simple.',
    solution: 'Application PWA fonctionnant offline avec synchronisation différée, bibliothèque de templates académiques validés par des enseignants, et export PDF/PowerPoint des présentations finalisées.',
    stack: ['Next.js', 'TypeScript', 'IndexedDB', 'PWA', 'OpenAI API', 'Vercel'],
    link: 'https://k-ta.vercel.app/',
    image: '/projects/requestflow.png',
  }
};

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
    link: '#',
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
            <Link href="/#work" className="breadcrumb-link">← Portfolio</Link>
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="meta-link">
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
                <span className="mockup-url">{project.link.replace('https://', '')}</span>
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
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pd-cta pd-reveal">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-btn">
              <span>VOIR LE PROJET LIVE</span>
              <span className="cta-arrow">↗</span>
            </a>
            <Link href="/#work" className="back-btn">
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
          .pd-title { font-size: 2.2rem; }
        }
      `}</style>
    </main>
  );
}
