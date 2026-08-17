"use client";

import React, { useEffect, useState } from "react";

export default function PCBBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden select-none bg-[#e4e7ec]">
      {/* Ambient Debossed Circuit Board Pattern SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="pcb-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* PCB Debossed Lines */}
            <path
              d="M 10 10 L 50 10 L 70 30 L 110 30 M 30 110 L 30 70 L 50 50 L 90 50 M 110 90 L 80 90 L 70 100 L 70 110"
              fill="none"
              stroke="#cbd1dc"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Circuit Vias / Solder Pads */}
            <circle cx="10" cy="10" r="2.5" fill="#dde2eb" stroke="#a0aab8" strokeWidth="1" />
            <circle cx="110" cy="30" r="2.5" fill="#dde2eb" stroke="#a0aab8" strokeWidth="1" />
            <circle cx="90" cy="50" r="2.5" fill="#dde2eb" stroke="#a0aab8" strokeWidth="1" />
            <circle cx="30" cy="110" r="2.5" fill="#dde2eb" stroke="#a0aab8" strokeWidth="1" />
            <circle cx="110" cy="90" r="2.5" fill="#dde2eb" stroke="#a0aab8" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#pcb-grid)" />

        {/* Global Structural Bus Lines with Animated Traveling Signals */}
        <g stroke="#b8c2d1" strokeWidth="2" fill="none" strokeLinecap="round">
          {/* Top-to-Bottom Data Highway Left */}
          <path d="M 120 0 L 120 400 L 180 460 L 180 1200" />
          {/* Top-to-Bottom Data Highway Right */}
          <path d="M 1320 0 L 1320 500 L 1260 560 L 1260 1200" />
        </g>

        {/* Pulsing Active Signal Packets */}
        <g stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8">
          <path
            d="M 120 0 L 120 400 L 180 460 L 180 1200"
            className="animate-wire-flow"
          />
          <path
            d="M 1320 0 L 1320 500 L 1260 560 L 1260 1200"
            className="animate-wire-flow"
          />
        </g>
      </svg>

      {/* Scattered Stamped Hardware Elements (Vent Grills, Screws, Microchips) */}
      <div className="absolute top-12 left-10 hidden xl:flex flex-col gap-1 opacity-60">
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <span className="text-[8px] font-mono text-neutral-400 mt-1 uppercase tracking-widest">VENT_01</span>
      </div>

      <div className="absolute top-12 right-12 hidden xl:flex flex-col gap-1 opacity-60">
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <div className="w-16 h-1 rounded-full neu-inset-sm" />
        <span className="text-[8px] font-mono text-neutral-400 mt-1 uppercase tracking-widest text-right">VENT_02</span>
      </div>

      {/* Decorative Motherboard Ground Screws */}
      <div className="absolute top-6 left-6 pcb-via opacity-70" />
      <div className="absolute top-6 right-6 pcb-via opacity-70" />
      <div className="absolute bottom-6 left-6 pcb-via opacity-70" />
      <div className="absolute bottom-6 right-6 pcb-via opacity-70" />
    </div>
  );
}
