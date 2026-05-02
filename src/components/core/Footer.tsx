'use client';

import React from 'react';
import Link from 'next/link';

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
              <Link href="/about" className="nav-link">À PROPOS</Link>
              <Link href="/work" className="nav-link">PROJETS</Link>
              <Link href="/#contact" className="nav-link">CONTACT</Link>
            </div>
            <div className="footer-nav-col">
              <span className="nav-label">SOCIAL</span>
              <a href="https://www.linkedin.com/in/marie-sylvanus-734b432a9/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LINKEDIN
              </a>
              <a href="mailto:mariesyl321@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                EMAIL
              </a>
              <a href="https://github.com/sknyves" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GITHUB
              </a>
              <a href="https://wa.me/+22943655721" target="_blank" rel="noopener noreferrer" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.373a9.945 9.945 0 0 0 4.779 1.214h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0 0 12.012 2zm0 18.33h-.003a8.307 8.307 0 0 1-4.232-1.157l-.304-.18-3.145.825.84-3.067-.197-.314a8.3 8.3 0 0 1-1.272-4.453c.001-4.577 3.725-8.3 8.304-8.3 2.217 0 4.302.863 5.864 2.426a8.243 8.243 0 0 1 2.43 5.877c-.001 4.577-3.725 8.301-8.304 8.301zm4.55-6.216c-.25-.124-1.477-.73-1.704-.811-.227-.082-.392-.124-.556.124-.165.247-.638.811-.782.977-.144.166-.288.187-.538.063-.25-.125-1.054-.388-2.008-1.239-.742-.662-1.243-1.48-1.388-1.73-.144-.25-.015-.385.11-.51.111-.11.25-.291.375-.437.125-.145.166-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.557-1.343-.763-1.841-.2-.487-.404-.421-.556-.429h-.475c-.165 0-.433.062-.659.312-.227.25-.865.846-.865 2.062 0 1.216.885 2.394 1.01 2.56.124.166 1.74 2.656 4.215 3.726.589.255 1.048.407 1.407.521.592.188 1.13.161 1.556.097.475-.07 1.477-.604 1.684-1.187.206-.584.206-1.084.144-1.188-.062-.104-.227-.166-.477-.29z" />
                </svg>
                WHATSAPP
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
          font-weight: 700;
          color: #ffffff !important;
          text-decoration: none;
          opacity: 0.5;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.2rem 0;
        }
        .nav-link:hover {
          opacity: 1;
          color: #ffffff !important;
          padding-left: 0.5rem;
        }
        .nav-icon {
          width: 16px;
          height: 16px;
          opacity: 0.5;
          transition: transform 0.4s ease;
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
          .footer-top { flex-direction: column; gap: 4rem; }
          .footer-nav { gap: 3rem; flex-wrap: wrap; }
          .footer-bottom { flex-direction: column-reverse; gap: 3rem; text-align: center; }
          .footer-legal { flex-direction: column; gap: 1rem; }
          .separator { display: none; }
        }
        @media (max-width: 480px) {
          .footer-logo { font-size: 1.2rem; }
          .footer-nav { gap: 2rem; }
        }
      `}</style>
    </footer>
  );
}
