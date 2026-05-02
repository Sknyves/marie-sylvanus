'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);

  const toggleMenu = () => setIsOpen(prev => !prev);

  // Magnetic underline handlers
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linksRef.current || !underlineRef.current) return;
    const item = e.currentTarget;
    const container = linksRef.current;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    gsap.to(underlineRef.current, {
      left: itemRect.left - containerRect.left,
      width: itemRect.width,
      opacity: 1,
      duration: 0.4,
      ease: 'expo.out'
    });
  };

  const handleLinkLeave = () => {
    if (!underlineRef.current) return;
    gsap.to(underlineRef.current, { opacity: 0, duration: 0.3, ease: 'expo.in' });
  };

  // Cube flip animation
  useEffect(() => {
    if (!cubeRef.current) return;
    gsap.to(cubeRef.current, {
      rotateX: isOpen ? -90 : 0,
      z: isOpen ? -20 : 0,
      duration: 0.8,
      ease: 'expo.inOut'
    });
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Menu items stagger in/out
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.overlay-link',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power4.out', delay: 0.2 }
      );
      gsap.fromTo('.aside-block',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.5, stagger: 0.1 }
      );
    } else {
      gsap.to('.overlay-link', { opacity: 0, y: -20, duration: 0.3 });
      gsap.to('.aside-block', { opacity: 0, duration: 0.3 });
    }
  }, [isOpen]);

  // Scroll color change (Dynamic detection of light sections)
  useEffect(() => {
    // We now use mix-blend-mode: difference for automatic color adaptation
  }, []);

  const navLinks = [
    { label: 'About', href: '/about', sub: 'Profil' },
    { label: 'Works', href: '/work', sub: 'Portfolio' },
    { label: 'Contact', href: '/#contact', sub: 'Parlons' },
  ];

  return (
    <>
    <nav className="nav-container" style={{ mixBlendMode: isOpen ? 'normal' : 'difference' as any }}>
      <div className="perspective-wrapper">
        <div className="cube-bar" ref={cubeRef}>

          {/* FACE A — Default (dark) */}
          <div className="face face-a">
            <div className="nav-layout">
              <div className="nav-left">
                <button className="menu-trigger" onClick={toggleMenu} aria-label="Ouvrir le menu">
                  <div className="icon-asym">
                    <span className="line l1" />
                    <span className="line l2" />
                  </div>
                  <span className="tiny-label">Menu</span>
                </button>
              </div>
              <div className="nav-right">
                <Link href="/#contact" className="contact-btn">
                  <span className="contact-inner">Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FACE B — Open (light) */}
          <div className="face face-b">
            <div className="nav-layout">
              <div className="nav-left">
                <button className="menu-trigger light" onClick={toggleMenu} aria-label="Fermer le menu">
                  <div className="icon-close">
                    <span className="line c1" style={{ background: '#fff' }} />
                    <span className="line c2" style={{ background: '#fff' }} />
                  </div>
                  <span className="tiny-label" style={{ color: '#fff' }}>Close</span>
                </button>
              </div>

              

              <div className="nav-right">
                <Link href="/#contact" className="contact-btn" style={{ background: '#fff', color: '#000' }} onClick={() => setIsOpen(false)}>
                  <span className="contact-inner">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* FULL-SCREEN MENU OVERLAY — TOTALLY DISCONNECTED FROM CONSTRAINED CONTAINERS */}
    <div className={`menu-overlay ${isOpen ? 'is-open' : ''}`} ref={overlayRef}>
      <div className="overlay-inner">
        <div className="overlay-links">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="overlay-link"
              ref={(el) => { if (el) menuItemsRef.current[i] = el; }}
              onClick={() => setIsOpen(false)}
            >
              <div className="ol-content">
                <span className="ol-num">0{i + 1}</span>
                <span className="ol-label">{link.label}</span>
              </div>
              <span className="ol-sub">{link.sub}</span>
              <span className="ol-arrow">↗</span>
            </Link>
          ))}
        </div>

        <div className="overlay-aside desktop-only">
          <div className="aside-block">
            <span className="aside-tag">STATUT</span>
            <p className="aside-desc">DISPONIBLE POUR NOUVEAUX PROJETS</p>
          </div>
          <div className="aside-block">
            <span className="aside-tag">EXPERTISE</span>
            <p className="aside-desc">NEXT.JS · THREE.JS · AI ARCHITECTURE</p>
          </div>
          <div className="aside-copy">
            © {new Date().getFullYear()} MARIE SYLVANUS
          </div>
        </div>
      </div>
    </div>

    <style jsx global>{`
        /* ── CONTAINER ── */
        .nav-container {
          position: fixed;
          top: 0;
          left: 3.5rem;
          right: 3.5rem;
          z-index: 2100;
          pointer-events: none;
        }
        .menu-trigger, .contact-btn {
          pointer-events: auto;
        }
        .menu-trigger {
          color: #ffffff; /* Use white for perfect difference inversion */
        }

        .perspective-wrapper {
          perspective: 1200px;
          height: 80px;
          position: relative;
        }

        /* ── CUBE ── */
        .cube-bar {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          will-change: transform;
          z-index: 100;
          pointer-events: auto;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          backface-visibility: hidden;
        }
        .face-a { 
          transform: translateZ(40px);
        }
        .face-b {
          transform: rotateX(90deg) translateZ(40px);
          background: transparent;
          /* No shadow or border here as it's part of the full screen menu */
        }

        /* ── NAV LAYOUT ── */
        .nav-layout {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 1.5rem;
        }
        .nav-left, .nav-right { flex: 1; display: flex; align-items: center; }
        .nav-center { flex: 2; display: flex; justify-content: center; }
        .nav-right { justify-content: flex-end; }

        /* ── MENU TRIGGER ── */
        .menu-trigger {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #ffffff;
          padding: 1.2rem 0 0 0;
          transition: opacity 0.3s ease;
        }
        .menu-trigger:hover { opacity: 0.6; }
        .menu-trigger.light { color: #000; }
        .tiny-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        /* Hamburger lines */
        .icon-asym, .icon-close { width: 24px; height: 10px; position: relative; }
        .line { position: absolute; height: 1.5px; background: currentColor; transition: all 0.4s ease; }
        .l1 { width: 24px; top: 0; left: 0; }
        .l2 { width: 14px; bottom: 0; left: 0; }
        .c1 { width: 20px; top: 50%; left: 0; transform: rotate(45deg); }
        .c2 { width: 20px; top: 50%; left: 0; transform: rotate(-45deg); }

        /* ── CONTACT BUTTON — 2 Pyramides coupées inversées ── */
        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: #ffffff;
          color: #000000 !important; /* Black text on White bg = Inverts to White text on Black bg */
          padding: 0.6rem 4rem;
          clip-path: polygon(0% 0%, 100% 0%, 85% 60%, 75% 60%, 65% 100%, 35% 100%, 25% 60%, 15% 60%);
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
          margin-top: 0;
        }
        .contact-btn:hover {
          transform: scale(1.05);
        }
        .contact-inner {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          white-space: nowrap;
          color: #000000 !important; /* Must be black to invert to white over black background */
        }

        /* ── DESKTOP NAV LINKS ── */
        .nav-items-horizontal {
          display: flex;
          gap: 2.5rem;
          position: relative;
          padding: 1.5rem 0;
        }
        .nav-item-link {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        .nav-underline {
          position: absolute;
          bottom: 10px;
          height: 3px;
          background: #000;
          opacity: 0;
          pointer-events: none;
        }

        /* ── FULL-SCREEN OVERLAY MENU ── */
        .menu-overlay {
          position: fixed;
          inset: 0;
          background: #0a0a0a;
          z-index: 2000;
          opacity: 0;
          display: none;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .menu-overlay.is-open {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }

        .overlay-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          height: 100%;
          padding: 12vh 5vw;
          gap: 4vw;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }

        /* Left: big links */
        .overlay-links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          border-top: 1px solid #1a1a1a;
        }

        .overlay-link {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-decoration: none;
          color: #ffffff !important;
          opacity: 1;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          position: relative;
        }
        .overlay-link:hover { padding-left: 2rem; background: rgba(255,255,255,0.02); }

        .ol-content {
          display: flex;
          align-items: baseline;
          gap: 2rem;
        }
        .ol-num {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.1em;
        }
        .ol-label {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          line-height: 0.9;
        }
        .ol-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }
        .overlay-link:hover .ol-sub { color: #fff; }
        .ol-arrow {
          font-size: 2rem;
          color: #fff;
          opacity: 0;
          transform: translate(-20px, 20px);
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .overlay-link:hover .ol-arrow {
          opacity: 1;
        }
        .overlay-aside {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding-left: 4vw;
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        .aside-block {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .aside-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3);
        }
        .aside-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #fff;
          font-weight: 500;
          line-height: 1.4;
        }
        .aside-copy {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          margin-top: auto;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nav-container { left: 1.5rem; right: 1.5rem; }
          .contact-btn { padding: 0.6rem 2rem; }
          .overlay-inner { grid-template-columns: 1fr; padding-top: 15vh; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .nav-container { left: 1rem; right: 1rem; top: 10px; }
          .contact-btn { display: none; }
          .menu-trigger .tiny-label { display: none; }
          .ol-label { font-size: 3rem; }
          .ol-content { gap: 1rem; }
          .ol-sub { display: none; }
          .overlay-inner { padding: 12vh 6vw; }
          .ol-label { font-size: 2.2rem; }
          .overlay-links { border: none; align-items: center; text-align: center; }
          .overlay-link { justify-content: center; width: 100%; border: none; padding: 1rem 0; }
          .ol-content { flex-direction: column; gap: 0.5rem; align-items: center; }
          .ol-num { margin-bottom: 0.5rem; }
          .overlay-link:hover { padding-left: 0; background: none; }
          .face { height: 70px; }
          .perspective-wrapper { height: 70px; }
          .face-a, .face-b { transform: translateZ(35px); }
          .face-b { transform: rotateX(90deg) translateZ(35px); }
        }
      `}</style>
    </>
  );
}
