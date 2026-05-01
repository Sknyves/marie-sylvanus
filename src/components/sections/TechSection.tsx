'use client';

import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TECH_STACK = [
  { name: 'Next.js', icon: '/icons/nextdotjs.svg', category: 'Framework' },
  { name: 'React', icon: '/icons/react.svg', category: 'Library' },
  { name: 'Three.js', icon: '/icons/threedotjs.svg', category: 'Graphics' },
  { name: 'GSAP', icon: '/icons/gsap.svg', category: 'Animation' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'Language' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg', category: 'Backend' },
  { name: 'OpenAI', icon: '/icons/openai.svg', category: 'Intelligence' },
  { name: 'Tailwind', icon: '/icons/tailwindcss.svg', category: 'Styling' },
  { name: 'Framer', icon: '/icons/framer.svg', category: 'Motion' },
  { name: 'Python', icon: '/icons/python.svg', category: 'AI/Backend' },
  { name: 'Blender', icon: '/icons/blender.svg', category: '3D Modeling' },
  { name: 'Railway', icon: '/icons/railway.svg', category: 'DevOps' },
];

function TechGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  const particlesCount = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const r = 3 + Math.random() * 0.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (pointsRef.current) pointsRef.current.rotation.y = time * 0.05;
    if (sphereRef.current) sphereRef.current.rotation.y = -time * 0.08;
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[2.8, 32, 32]}>
        <meshBasicMaterial color="#000000" wireframe transparent opacity={0.03} />
      </Sphere>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial transparent color="#000000" size={0.015} sizeAttenuation opacity={0.1} />
      </points>
    </group>
  );
}

export default function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => setIsInView(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">TECHNOLOGIES</h2>
          <p className="tech-subtitle">Une sélection d&apos;outils pour des solutions performantes.</p>
        </div>

        <div className="tech-layout">
          {/* BACKGROUND GLOBE (Subtle) */}
          <div className="globe-bg">
            {isInView && (
              <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                  <TechGlobe />
                </Suspense>
              </Canvas>
            )}
          </div>

          {/* GRID OF CARDS */}
          <div className="tech-grid" ref={cardsRef}>
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="tech-card">
                <div className="card-inner">
                  <div className="card-top">
                    <span className="card-cat">{tech.category}</span>
                    <div className="card-icon-box">
                      <img src={tech.icon} alt={tech.name} className="card-icon" />
                    </div>
                  </div>
                  <div className="card-bottom">
                    <h3 className="card-name">{tech.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-section {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          padding: 10vh 5vw;
          position: relative;
          z-index: 40;
          overflow: hidden;
        }
        .tech-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .tech-header {
          margin-bottom: 8vh;
        }
        .tech-title {
          font-family: 'Perfect Dark', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          color: #000;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .tech-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          color: #666;
          max-width: 500px;
        }

        .tech-layout {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .globe-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
        }

        /* TECH CARD STYLES */
        .tech-card {
          aspect-ratio: 1 / 1.1;
          background: #fff;
          border: 1px solid #e5e5e5;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .tech-card:hover {
          border-color: #000;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .card-inner {
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-top {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .card-cat {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #999;
          font-weight: 600;
        }
        .card-icon-box {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          transition: all 0.4s ease;
        }
        .tech-card:hover .card-icon {
          filter: grayscale(0);
          transform: scale(1.1);
        }
        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .card-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          margin: 0;
        }


        /* BRUTALIST HOVER */
        .tech-card:hover {
          background: #000;
        }
        .tech-card:hover .card-name, 
        .tech-card:hover .card-cat {
          color: #fff;
        }
        .tech-card:hover .card-icon {
          filter: grayscale(1) invert(1) brightness(2);
        }

        @media (max-width: 1200px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
          .tech-title { font-size: 3.5rem; }
          .tech-section { padding: 8vh 5vw; }
        }
        @media (max-width: 500px) {
          .tech-grid { grid-template-columns: 1fr; }
          .tech-title { font-size: 2.8rem; }
          .tech-subtitle { font-size: 1rem; }
          .tech-card { aspect-ratio: 1 / 0.8; }
        }
      `}</style>
    </section>
  );
}
