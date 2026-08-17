"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Edge {
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

interface AnimatedFlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
}

export default function AnimatedFlowDiagram({ nodes, edges }: AnimatedFlowDiagramProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full rounded-3xl neu-raised border border-white/80 overflow-hidden bg-[#e4e7ec] select-none">
      
      {/* Hardware Panel Telemetry Header */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#cbd1dc]/70 bg-[#dde0e6]/80">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full led-red" />
          <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
            SYSTEM ARCHITECTURE & DATA FLOW BUS
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-600">
          <span className="w-2 h-2 rounded-full led-green" />
          <span className="hidden sm:inline font-semibold">SIGNAL BUS : 200 OK</span>
          <span className="sm:hidden">SWIPE TO SCROLL ↔</span>
        </div>
      </div>

      {/* Scrollable Container on Mobile / High-Res View on Desktop */}
      <div className="w-full overflow-x-auto touch-pan-x">
        <div 
          ref={containerRef} 
          className="relative min-w-[850px] sm:min-w-0 w-full aspect-[16/9.5] bg-[#e4e7ec] font-mono text-xs overflow-hidden"
        >
          {/* Subtle PCB Dot Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle, #8c96a5 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} 
          />

          {/* SVG PCB Traces & Flowing Packets (Layer 1: Behind Nodes) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-[5]" 
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="pcb-arrow"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
              </marker>
            </defs>

            {edges.map((edge, idx) => {
              const sourceNode = nodes.find((n) => n.id === edge.source);
              const targetNode = nodes.find((n) => n.id === edge.target);

              if (!sourceNode || !targetNode) return null;

              const sx = sourceNode.x * 10;
              const sy = sourceNode.y * 6;
              const tx = targetNode.x * 10;
              const ty = targetNode.y * 6;

              const dx = tx - sx;
              const dy = ty - sy;
              let pathD: string;

              // Smooth 45-degree / Bezier PCB curve
              if (Math.abs(dx) >= Math.abs(dy)) {
                const cx = sx + dx * 0.5;
                pathD = `M ${sx} ${sy} C ${cx} ${sy}, ${cx} ${ty}, ${tx} ${ty}`;
              } else {
                const cy = sy + dy * 0.5;
                pathD = `M ${sx} ${sy} C ${sx} ${cy}, ${tx} ${cy}, ${tx} ${ty}`;
              }

              return (
                <g key={`edge-${idx}`}>
                  {/* 1. Underlying Debossed Wire Track */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#cbd1dc"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* 2. Copper PCB Trace Core */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#8c96a5"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    markerEnd="url(#pcb-arrow)"
                  />

                  {/* 3. Animated Traveling Red Signal Packet */}
                  {edge.animated && (
                    <motion.circle
                      r="3.5"
                      fill="#ef4444"
                      stroke="#ffffff"
                      strokeWidth="1"
                      style={{ filter: "drop-shadow(0 0 5px #ef4444)" }}
                    >
                      <animateMotion
                        dur="2.5s"
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Stamped Hardware Microchip Nodes (Layer 2: z-10) */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl neu-raised border border-white z-10 whitespace-nowrap cursor-default hover:border-red-500/80 transition-all shadow-sm"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full led-red shrink-0" />
              <span className="font-mono font-bold text-[11px] text-neutral-900 tracking-wide">
                {node.label}
              </span>
            </motion.div>
          ))}

          {/* Elevated Edge Labels (Layer 3: z-20 — ALWAYS on top of wires & nodes, perfectly clear) */}
          {edges.map((edge, idx) => {
            if (!edge.label) return null;
            const sourceNode = nodes.find((n) => n.id === edge.source);
            const targetNode = nodes.find((n) => n.id === edge.target);
            if (!sourceNode || !targetNode) return null;

            const midX = (sourceNode.x + targetNode.x) / 2;
            const isHorizontal = Math.abs(targetNode.y - sourceNode.y) < 10;
            // Float label above horizontal wires so it never touches or hides under nodes
            const midY = (sourceNode.y + targetNode.y) / 2 + (isHorizontal ? -3.8 : 0);

            return (
              <div
                key={`label-${idx}`}
                className="absolute px-2 py-0.5 rounded-md bg-[#e8ebf0] border border-[#b8c2d1] shadow-sm z-20 pointer-events-none whitespace-nowrap flex items-center justify-center"
                style={{
                  left: `${midX}%`,
                  top: `${midY}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="font-mono font-bold text-[9.5px] text-neutral-800 tracking-tight">
                  {edge.label}
                </span>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
