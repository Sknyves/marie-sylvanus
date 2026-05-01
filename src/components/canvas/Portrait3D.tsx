'use client';

import { useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export default function Portrait3D() {
  const texture = useLoader(THREE.TextureLoader, '/portrait.png');
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = texture.image;
    canvas.width = 150;
    canvas.height = 150;
    ctx.drawImage(img, 0, 0, 150, 150);
    const data = ctx.getImageData(0, 0, 150, 150).data;

    const positions = [];
    const colors = [];

    for (let y = 0; y < 150; y++) {
      for (let x = 0; x < 150; x++) {
        const i = (y * 150 + x) * 4;
        const r = data[i] / 255;
        const g = data[i + 1] / 255;
        const b = data[i + 2] / 255;
        const brightness = (r + g + b) / 3;

        if (brightness > 0.1) {
          positions.push((x - 75) * 0.05, (75 - y) * 0.05, brightness * 0.5);
          colors.push(r, g, b);
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
    };
  }, [texture]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    
    // Mouse interaction placeholder
    const mouse = state.mouse;
    pointsRef.current.rotation.x = -mouse.y * 0.2;
    pointsRef.current.rotation.y += mouse.x * 0.2;
  });

  return (
    <points ref={pointsRef} position={[3, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors sizeAttenuation />
    </points>
  );
}
