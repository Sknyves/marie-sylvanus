'use client';

import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">K. MARIE SYLVANUS M.</h3>
            <p className="footer-desc">Digital Craftsman — Designing Futures</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-col">
              <span className="nav-label">NAVIGATION</span>
              <a href="#about" className="nav-link">À PROPOS</a>
              <a href="#work" className="nav-link">PROJETS</a>
              <a href="#contact" className="nav-link">CONTACT</a>
            </div>
            <div className="footer-nav-col">
              <span className="nav-label">SOCIAL</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LINKEDIN
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GITHUB
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
                TWITTER
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span className="legal-item">© {new Date().getFullYear()} KINKPON MARIE SYLVANUS MAHOUGNON</span>
            <span className="separator">/</span>
            <span className="legal-item">TOUS DROITS RÉSERVÉS</span>
          </div>
          
          <button onClick={scrollToTop} className="back-to-top">
            <span className="btn-label">RETOUR EN HAUT</span>
            <div className="btn-icon">
              <span className="arrow">↑</span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background: #000;
          color: #fff;
          padding: 12rem 5vw 4rem;
          position: relative;
          z-index: 70;
        }
        
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10rem;
        }
        
        .footer-logo {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
        }
        
        .footer-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          opacity: 0.4;
        }

        .footer-nav {
          display: flex;
          gap: 10rem;
        }
        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .nav-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.2);
          margin-bottom: 0.5rem;
        }
        .nav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          color: #fff;
          text-decoration: none;
          opacity: 0.6;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-icon {
          width: 18px;
          height: 18px;
          opacity: 0.6;
        }
        .nav-link:hover .nav-icon {
          opacity: 1;
          transform: scale(1.1);
        }
        .nav-link:hover {
          opacity: 1;
          transform: translateX(5px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer-legal {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .legal-item { opacity: 0.3; }
        .separator { opacity: 0.1; }

        .back-to-top {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }
        .btn-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          opacity: 0.5;
        }
        .btn-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .arrow {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .back-to-top:hover .btn-label { opacity: 1; }
        .back-to-top:hover .btn-icon {
          background: #fff;
          border-color: #fff;
        }
        .back-to-top:hover .arrow {
          color: #000;
          transform: translateY(-3px);
        }

        @media (max-width: 900px) {
          .footer-top { flex-direction: column; gap: 6rem; }
          .footer-nav { gap: 5rem; }
          .footer-bottom { flex-direction: column-reverse; gap: 4rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
