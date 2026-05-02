'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 800 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Create particle positions and other attributes
  const [positions, speeds, opacities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const opc = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Position logic inspired by the arch/semi-circle
      const theta = Math.random() * Math.PI; // 0 to 180 degrees
      const radius = 4 + Math.random() * 2; // Fixed radius with slight jitter
      
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(theta) * radius - 2; // Offset to look like an arch
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2; // Depth

      spd[i] = 0.002 + Math.random() * 0.005;
      opc[i] = 0.1 + Math.random() * 0.6;
    }
    return [pos, spd, opc];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Subtle float animation
    const time = state.clock.getElapsedTime();
    const positionsAttr = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      positionsAttr[i * 3 + 1] += Math.sin(time + i) * 0.001;
      positionsAttr[i * 3] += Math.cos(time + i) * 0.0005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation
    pointsRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#000000"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <Particles count={1000} />
      </Canvas>
    </div>
  );
}
