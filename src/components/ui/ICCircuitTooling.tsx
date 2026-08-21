"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ICCircuitTooling() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Silicon Wafer & Microchip Substrate Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="ic-tooling-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Fine circuit routing tracks */}
            <path
              d="M 0 20 L 30 20 L 40 30 L 80 30 M 20 80 L 20 50 L 30 40 L 80 40 M 0 60 L 50 60 L 60 70 L 80 70"
              fill="none"
              stroke="#cbd1dc"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Micro Solder Pads / SMT Vias */}
            <circle cx="30" cy="20" r="2" fill="#dde0e6" stroke="#9ca3af" strokeWidth="1" />
            <circle cx="40" cy="30" r="2" fill="#dde0e6" stroke="#9ca3af" strokeWidth="1" />
            <circle cx="20" cy="50" r="2" fill="#dde0e6" stroke="#9ca3af" strokeWidth="1" />
            <circle cx="50" cy="60" r="2" fill="#dde0e6" stroke="#9ca3af" strokeWidth="1" />
            <circle cx="60" cy="70" r="2" fill="#dde0e6" stroke="#9ca3af" strokeWidth="1" />
          </pattern>

          {/* SMT Gold Finger Pattern */}
          <pattern
            id="gold-finger-strip"
            width="16"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <rect x="2" y="2" width="6" height="20" rx="1.5" fill="#d1d7e2" stroke="#b0b8c6" strokeWidth="1" />
            <rect x="10" y="2" width="4" height="12" rx="1" fill="#cbd3e0" />
          </pattern>
        </defs>

        {/* Global IC grid background */}
        <rect width="100%" height="100%" fill="url(#ic-tooling-grid)" />

        {/* Major PCB Data Highways / Differential Trace Pairs */}
        <g stroke="#b8c2d1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Top horizontal bus line */}
          <path d="M 0 45 L 240 45 L 280 85 L 850 85 L 890 45 L 1440 45" />
          {/* Middle interconnection bus */}
          <path d="M 0 320 L 400 320 L 440 360 L 980 360 L 1020 320 L 1440 320" />
          {/* Bottom ground rail */}
          <path d="M 0 680 L 320 680 L 360 640 L 1100 640 L 1140 680 L 1440 680" />
          {/* Vertical Highway 1 */}
          <path d="M 33.33% 0 L 33.33% 200 L calc(33.33% + 40px) 240 L calc(33.33% + 40px) 800" />
          {/* Vertical Highway 2 */}
          <path d="M 66.66% 0 L 66.66% 200 L calc(66.66% - 40px) 240 L calc(66.66% - 40px) 800" />
        </g>

        {/* Animated Traveling Data Pulses across the IC Busses */}
        <g stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85">
          <path
            d="M 0 45 L 240 45 L 280 85 L 850 85 L 890 45 L 1440 45"
            className="animate-wire-flow"
          />
          <path
            d="M 0 320 L 400 320 L 440 360 L 980 360 L 1020 320 L 1440 320"
            className="animate-wire-flow-fast"
          />
          <path
            d="M 0 680 L 320 680 L 360 640 L 1100 640 L 1140 680 L 1440 680"
            className="animate-wire-flow"
          />
        </g>

        <g stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75">
          <path
            d="M 33.33% 0 L 33.33% 200 L calc(33.33% + 40px) 240 L calc(33.33% + 40px) 800"
            className="animate-wire-flow-fast"
          />
          <path
            d="M 66.66% 0 L 66.66% 200 L calc(66.66% - 40px) 240 L calc(66.66% - 40px) 800"
            className="animate-wire-flow"
          />
        </g>
      </svg>

      {/* 2. SMT Fiducial Alignment Crosshairs & Pick-and-Place Tooling Targets */}
      {/* Top Left Fiducial */}
      <div className="absolute top-2 left-2 sm:left-4 flex items-center gap-1.5 opacity-60">
        <div className="w-5 h-5 rounded-full border border-neutral-400 neu-inset flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        </div>
        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
          FID_01 [SMT_ALIGN]
        </span>
      </div>

      {/* Top Right Fiducial */}
      <div className="absolute top-2 right-2 sm:right-4 flex items-center gap-1.5 opacity-60">
        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
          FID_02 [SMT_ALIGN]
        </span>
        <div className="w-5 h-5 rounded-full border border-neutral-400 neu-inset flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Bottom Left Fiducial */}
      <div className="absolute bottom-2 left-2 sm:left-4 flex items-center gap-1.5 opacity-60">
        <div className="w-5 h-5 rounded-full border border-neutral-400 neu-inset flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
        </div>
        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
          FID_03 [GND_PLANE]
        </span>
      </div>

      {/* Bottom Right Fiducial */}
      <div className="absolute bottom-2 right-2 sm:right-4 flex items-center gap-1.5 opacity-60">
        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
          FID_04 [REF_CLOCK]
        </span>
        <div className="w-5 h-5 rounded-full border border-neutral-400 neu-inset flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        </div>
      </div>

      {/* 3. Motherboard Silk-Screen Technical Legends & Pinout Telemetry */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-6 text-[9px] font-mono text-neutral-400 uppercase tracking-widest bg-[#dde0e6]/60 px-4 py-1 rounded-full border border-[#cbd1dc]/50 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full led-red" />
          <span>FAB_LINE: 3nm FINFET</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full led-green" />
          <span>BUS: 64-BIT DUAL-CH</span>
        </div>
        <span>|</span>
        <span>IMPEDANCE: 50Ω MATCHED</span>
        <span>|</span>
        <span>VDD_CORE: +1.20V</span>
      </div>

      {/* 4. Edge SMT Gold Finger Connectors (Motherboard Edge Strip) */}
      <div className="absolute -top-1 left-8 right-8 h-3 hidden md:flex justify-between overflow-hidden opacity-40">
        <div className="w-32 h-full bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)] [background-size:6px_6px]" />
        <div className="w-32 h-full bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)] [background-size:6px_6px]" />
        <div className="w-32 h-full bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)] [background-size:6px_6px]" />
      </div>

      {/* 5. Illuminated Test Point Nodes (Scattered throughout the circuit matrix) */}
      <div className="absolute top-[28%] left-[2%] hidden lg:flex items-center gap-1">
        <div className="w-2 h-2 rounded-full pcb-via" />
        <span className="text-[7px] font-mono text-neutral-400">TP_01:+3.3V</span>
      </div>
      <div className="absolute top-[52%] left-[2%] hidden lg:flex items-center gap-1">
        <div className="w-2 h-2 rounded-full pcb-via" />
        <span className="text-[7px] font-mono text-neutral-400">TP_02:CLK_A</span>
      </div>
      <div className="absolute top-[28%] right-[2%] hidden lg:flex items-center gap-1 flex-row-reverse">
        <div className="w-2 h-2 rounded-full pcb-via" />
        <span className="text-[7px] font-mono text-neutral-400">TP_03:DATA_TX</span>
      </div>
      <div className="absolute top-[52%] right-[2%] hidden lg:flex items-center gap-1 flex-row-reverse">
        <div className="w-2 h-2 rounded-full pcb-via" />
        <span className="text-[7px] font-mono text-neutral-400">TP_04:DATA_RX</span>
      </div>
    </div>
  );
}
