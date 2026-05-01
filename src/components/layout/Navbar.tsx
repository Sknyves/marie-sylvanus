'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const items = menuItemsRef.current;
    if (!items.length) return;
    if (isOpen) {
      gsap.fromTo(items,
        { y: 80, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, stagger: 0.07, duration: 0.9, ease: 'expo.out', delay: 0.2 }
      );
    } else {
      gsap.to(items, { y: -30, opacity: 0, duration: 0.4, ease: 'expo.in', stagger: 0.04 });
    }
  }, [isOpen]);

  // Scroll color change (Dynamic detection of light sections)
  useEffect(() => {
    const lightSections = document.querySelectorAll('.light-section, [data-theme="light"]');
    if (lightSections.length > 0) {
      const triggers: ScrollTrigger[] = [];
      lightSections.forEach(section => {
        const st = ScrollTrigger.create({
          trigger: section,
          start: 'top 80px',
          end: 'bottom 80px',
          onEnter: () => setIsScrolled(true),
          onLeave: () => setIsScrolled(false),
          onEnterBack: () => setIsScrolled(true),
          onLeaveBack: () => setIsScrolled(false),
        });
        triggers.push(st);
      });
      return () => triggers.forEach(t => t.kill());
    } else {
      // Default fallback
      const st = ScrollTrigger.create({
        start: '120vh top',
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });
      return () => st.kill();
    }
  }, []);

  const navLinks = [
    { label: 'Archive', href: '/', sub: 'Index' },
    { label: 'Works', href: '/#work', sub: 'Portfolio' },
    { label: 'About', href: '/about', sub: 'Profil' },
    { label: 'Contact', href: '/#contact', sub: 'Parlons' },
  ];

  return (
    <nav className="nav-container">
      <div className="perspective-wrapper">
        <div className="cube-bar" ref={cubeRef}>

          {/* FACE A — Default (dark) */}
          <div className="face face-a">
            <div className="nav-layout">
              <div className="nav-left">
                <button className={`menu-trigger ${isScrolled ? 'light' : ''}`} onClick={toggleMenu} aria-label="Ouvrir le menu">
                  <div className="icon-asym">
                    <span className="line l1" />
                    <span className="line l2" />
                  </div>
                  <span className="tiny-label">Menu</span>
                </button>
              </div>
              <div className="nav-right">
                <Link href="/#contact" className={`contact-btn ${isScrolled ? 'light' : ''}`}>
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
                    <span className="line c1" />
                    <span className="line c2" />
                  </div>
                  <span className="tiny-label">Close</span>
                </button>
              </div>

              <div className="nav-center desktop-only">
                <div className="nav-items-horizontal" ref={linksRef}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="nav-item-link"
                      onMouseEnter={handleLinkHover}
                      onMouseLeave={handleLinkLeave}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="link-text">{link.label}</span>
                    </Link>
                  ))}
                  <div className="nav-underline" ref={underlineRef} />
                </div>
              </div>

              <div className="nav-right">
                <Link href="/#contact" className="contact-btn light" onClick={() => setIsOpen(false)}>
                  <span className="contact-inner">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FULL-SCREEN MENU OVERLAY */}
        <div className={`menu-overlay ${isOpen ? 'is-open' : ''}`} ref={overlayRef}>
          <div className="overlay-inner">

            {/* Left column: main links */}
            <div className="overlay-links">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="overlay-link"
                  ref={(el) => { if (el) menuItemsRef.current[i] = el; }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="ol-num">0{i + 1}</span>
                  <span className="ol-divider" />
                  <span className="ol-label">{link.label}</span>
                  <span className="ol-arrow">→</span>
                </Link>
              ))}
            </div>

            {/* Right column: decorative info */}
            <div className="overlay-aside">
              <div className="aside-block">
                <span className="aside-tag">DISPONIBLE</span>
                <p className="aside-desc">Ouvert aux collaborations&nbsp;et projets créatifs.</p>
              </div>
              <div className="aside-block">
                <span className="aside-tag">STACK</span>
                <p className="aside-desc">Next.js · Three.js · GSAP · AI</p>
              </div>
              <div className="aside-copy">
                © {new Date().getFullYear()} K. Marie Sylvanus M.
              </div>
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
          z-index: 1000;
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
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
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
          color: #000000;
          padding: 0.6rem 4rem;
          /* Top pyramid (0 to 60%), Bottom pyramid (60% to 100%) */
          clip-path: polygon(0% 0%, 100% 0%, 85% 60%, 75% 60%, 65% 100%, 35% 100%, 25% 60%, 15% 60%);
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
          margin-top: 0;
        }
        .contact-btn.light {
          background: #000000;
          color: #ffffff;
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
          z-index: 50;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .menu-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .overlay-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
          padding: 12vh 5vw;
          gap: 4vw;
          max-width: 1400px;
          margin: 0 auto;
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
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          color: #fff;
          padding: 2rem 0;
          border-bottom: 1px solid #1a1a1a;
          overflow: hidden;
          transition: background 0.3s ease;
          position: relative;
        }
        .overlay-link:hover { padding-left: 1rem; background: #111; }

        .ol-num {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.65rem;
          color: #333;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          width: 28px;
        }
        .ol-divider {
          width: 1px;
          height: 24px;
          background: #222;
          flex-shrink: 0;
        }
        .ol-label {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          flex: 1;
          line-height: 1;
        }
        .ol-arrow {
          font-size: 1.5rem;
          color: #333;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s ease;
        }
        .overlay-link:hover .ol-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #fff;
        }

        /* Right: aside info */
        .overlay-aside {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 3rem;
          padding-bottom: 2rem;
          border-left: 1px solid #1a1a1a;
          padding-left: 4vw;
        }
        .aside-block {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .aside-tag {
          font-family: 'Perfect Dark', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: #444;
          text-transform: uppercase;
        }
        .aside-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          color: #666;
          line-height: 1.5;
        }
        .aside-copy {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          color: #2a2a2a;
          letter-spacing: 0.05em;
          margin-top: auto;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nav-container { left: 1.5rem; right: 1.5rem; }
          .contact-btn { padding: 0.6rem 2rem; }
          .overlay-inner { grid-template-columns: 1fr; }
          .overlay-aside { display: none; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .nav-container { left: 1rem; right: 1rem; top: 5px; }
          .contact-btn { padding: 0.5rem 1.5rem; }
          .menu-trigger .tiny-label { display: none; }
          .ol-label { font-size: clamp(1.8rem, 8vw, 3rem); }
          .overlay-inner { padding: 15vh 6vw; }
        }
      `}</style>
    </nav>
  );
}
