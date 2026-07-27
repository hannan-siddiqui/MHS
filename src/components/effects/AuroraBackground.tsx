"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let animFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Multiple aurora layers
      const layers = [
        { y: 0.3, hue: 180, amplitude: 80, speed: 1, opacity: 0.04 },
        { y: 0.4, hue: 160, amplitude: 60, speed: 1.3, opacity: 0.03 },
        { y: 0.35, hue: 190, amplitude: 100, speed: 0.8, opacity: 0.025 },
        { y: 0.45, hue: 150, amplitude: 50, speed: 1.5, opacity: 0.02 },
      ];

      for (const layer of layers) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 3) {
          const normalizedX = x / canvas.width;
          const baseY = canvas.height * layer.y;
          const wave1 =
            Math.sin(normalizedX * 4 + time * layer.speed) *
            layer.amplitude;
          const wave2 =
            Math.sin(normalizedX * 2.5 + time * layer.speed * 0.7 + 1) *
            layer.amplitude *
            0.6;
          const wave3 =
            Math.cos(normalizedX * 6 + time * layer.speed * 1.3) *
            layer.amplitude *
            0.3;

          const y = baseY + wave1 + wave2 + wave3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(
          0,
          canvas.height * layer.y - layer.amplitude * 2,
          0,
          canvas.height
        );
        gradient.addColorStop(
          0,
          `hsla(${layer.hue}, 80%, 60%, 0)`
        );
        gradient.addColorStop(
          0.3,
          `hsla(${layer.hue}, 80%, 60%, ${layer.opacity})`
        );
        gradient.addColorStop(
          0.7,
          `hsla(${layer.hue + 30}, 70%, 50%, ${layer.opacity * 0.5})`
        );
        gradient.addColorStop(
          1,
          `hsla(${layer.hue}, 80%, 60%, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
