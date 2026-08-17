"use client";

import React, { useEffect, useState } from "react";

export default function AIBackgroundParallax() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.07) 0%, rgba(239, 68, 68, 0.02) 45%, transparent 70%)",
        }}
      />

      {/* Top Ambient Nebula Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/[0.04] blur-[140px] rounded-full animate-pulse-glow" 
      />

      {/* Cyber Micro-Dot Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025]" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Subtle Digital Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
