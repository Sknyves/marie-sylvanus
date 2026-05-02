'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const cols = 70;
    const rows = 40;
    const spacing = 35;
    const perspective = 600;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.5;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.7; // Lowered horizon for flatter look

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // 3D Plane coordinates
          const x3D = (c - cols / 2) * spacing;
          const z3D = (rows - r) * spacing; // Depth
          
          // Wave logic (Vertical displacement)
          const wave1 = Math.sin(c * 0.15 + time) * 20;
          const wave2 = Math.cos(r * 0.1 - time * 0.8) * 15;
          const wave3 = Math.sin((c + r) * 0.05 + time * 1.2) * 25;
          const y3D = wave1 + wave2 + wave3;

          // 3D to 2D Projection
          const scale = perspective / (perspective + z3D);
          const x2D = centerX + x3D * scale;
          const y2D = centerY + (y3D - z3D * 0.2) * scale; // Tilt the plane

          // Dynamic size and opacity
          const normalizedHeight = (y3D + 60) / 120;
          const size = (0.5 + normalizedHeight * 2.5) * scale * 1.5;
          const opacity = (0.1 + normalizedHeight * 0.6) * scale;

          // Edge fade
          const edgeFade = (r / rows) * (1 - Math.abs(c - cols/2) / (cols/2));
          const finalOpacity = opacity * edgeFade;

          if (finalOpacity > 0.01) {
            ctx.beginPath();
            ctx.arc(x2D, y2D, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="canvas-waves-container">
      <canvas ref={canvasRef} className="wave-canvas" />
      <style jsx>{`
        .canvas-waves-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 45vh;
          z-index: 0;
          pointer-events: none;
          mask-image: linear-gradient(to top, black 30%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 30%, transparent 100%);
        }
        .wave-canvas {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
