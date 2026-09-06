'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Approche & Méthode', href: '/#methode' },
    { label: 'Projets & Solutions', href: '/work' },
    { label: 'À Propos', href: '/about' },
  ];

  return (
    <>
      <header className={`nav-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo / Brand Name */}
          <Link href="/" className="nav-logo">
            <span className="logo-icon">M</span>
            <div className="logo-text">
              <span className="name">Marie Sylvanus</span>
              <span className="role">AUTOMATISATION · IA</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-links">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="nav-item">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="nav-actions">
            <Link href="/#diagnostic" className="cta-diagnostic-btn">
              <span className="cta-dot" />
              <span>Diagnostic 15 min</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`hamburger-btn ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <span className="line" />
              <span className="line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-inner">
          <div className="drawer-header">
            <span className="drawer-tag">NAVIGATION</span>
            <button className="drawer-close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="drawer-links">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="drawer-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="drawer-link-num">0{i + 1}</span>
                <span className="drawer-link-text">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="drawer-footer">
            <Link
              href="/#diagnostic"
              className="drawer-cta"
              onClick={() => setIsOpen(false)}
            >
              <span>Réserver mon Diagnostic Gratuit</span>
              <span>→</span>
            </Link>
            <div className="drawer-sig">
              <strong>Marie Sylvanus KINKPON</strong>
              <span>AUTOMATISATION · IA · SOLUTIONS</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.25rem 2rem;
          transition: all 0.35s ease;
        }

        .nav-wrapper.is-scrolled {
          padding: 0.75rem 2rem;
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(234, 228, 218, 0.8);
          border-radius: 999px;
          padding: 0.6rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 8px 24px rgba(9, 30, 58, 0.05);
          transition: all 0.3s ease;
        }

        .nav-wrapper.is-scrolled .nav-container {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 12px 30px rgba(9, 30, 58, 0.08);
          border-color: #E2DBD0;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--color-navy, #091E3A);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display, sans-serif);
          font-weight: 800;
          font-size: 1rem;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-text .name {
          font-family: var(--font-display, sans-serif);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--color-navy, #091E3A);
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .logo-text .role {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--color-turquoise, #00A896);
          letter-spacing: 0.12em;
        }

        /* Desktop Nav */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-navy, #091E3A);
          opacity: 0.8;
          transition: all 0.25s ease;
          position: relative;
          padding: 0.2rem 0;
        }

        .nav-item:hover {
          opacity: 1;
          color: var(--color-turquoise, #00A896);
        }

        /* CTA Button */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cta-diagnostic-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-orange, #FF6B35);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.6rem 1.25rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(255, 107, 53, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-diagnostic-btn:hover {
          background: var(--color-orange-hover, #F2571D);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.45);
        }

        .cta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ffffff;
          animation: pulse 1.6s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        /* Hamburger */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger-btn .line {
          width: 22px;
          height: 2px;
          background: var(--color-navy, #091E3A);
          transition: all 0.3s ease;
        }

        .hamburger-btn.active .line:nth-child(1) {
          transform: translateY(3.5px) rotate(45deg);
        }

        .hamburger-btn.active .line:nth-child(2) {
          transform: translateY(-3.5px) rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(9, 30, 58, 0.5);
          backdrop-filter: blur(8px);
          z-index: 1100;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-drawer.drawer-open {
          opacity: 1;
          pointer-events: auto;
        }

        .drawer-inner {
          position: absolute;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 380px;
          height: 100%;
          background: #FAF8F5;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .mobile-drawer.drawer-open .drawer-inner {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #EAE4DA;
        }

        .drawer-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #8798AD;
        }

        .drawer-close-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #091E3A;
          cursor: pointer;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .drawer-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #091E3A;
          text-decoration: none;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(234, 228, 218, 0.5);
        }

        .drawer-link-num {
          font-size: 0.8rem;
          color: #00A896;
        }

        .drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .drawer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FF6B35;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 1rem 1.4rem;
          border-radius: 14px;
          text-decoration: none;
        }

        .drawer-sig {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          color: #54667D;
        }

        .drawer-sig strong {
          color: #091E3A;
        }

        @media (max-width: 900px) {
          .desktop-links {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
          .nav-wrapper {
            padding: 1rem;
          }
          .cta-diagnostic-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
