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
    <div className="relative w-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Mobile scroll hint header */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-[11px] font-mono text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Architecture Flow
        </span>
        <span className="text-red-400/90 font-medium">Swipe diagram to scroll ↔</span>
      </div>

      {/* Scrollable Container on Mobile */}
      <div className="w-full overflow-x-auto touch-pan-x">
        <div 
          ref={containerRef} 
          className="relative min-w-[750px] sm:min-w-0 w-full aspect-[16/10] sm:aspect-video bg-[#0a0a0a] font-mono text-xs overflow-hidden select-none"
        >
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} 
          />

          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-[5]" 
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#555" />
              </marker>
            </defs>

            {edges.map((edge, idx) => {
              const sourceNode = nodes.find((n) => n.id === edge.source);
              const targetNode = nodes.find((n) => n.id === edge.target);

              if (!sourceNode || !targetNode) return null;

              // Use fixed 1000x600 viewBox for consistent coordinates matching node x,y percentages
              const sx = sourceNode.x * 10;
              const sy = sourceNode.y * 6;
              const tx = targetNode.x * 10;
              const ty = targetNode.y * 6;

              const dx = tx - sx;
              const dy = ty - sy;
              let pathD: string;

              if (Math.abs(dx) > Math.abs(dy)) {
                const cx = sx + dx * 0.5;
                pathD = `M ${sx} ${sy} C ${cx} ${sy}, ${cx} ${ty}, ${tx} ${ty}`;
              } else {
                const cy = sy + dy * 0.5;
                pathD = `M ${sx} ${sy} C ${sx} ${cy}, ${tx} ${cy}, ${tx} ${ty}`;
              }

              const mx = (sx + tx) / 2;
              const my = (sy + ty) / 2;

              return (
                <g key={`edge-${idx}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    markerEnd="url(#arrowhead)"
                  />
                  {edge.label && (
                    <>
                      <rect
                        x={mx - edge.label.length * 3.5 - 4}
                        y={my - 14}
                        width={edge.label.length * 7 + 8}
                        height={14}
                        rx="3"
                        fill="#0a0a0a"
                      />
                      <text
                        x={mx}
                        y={my - 4}
                        fill="#888"
                        fontSize="9"
                        textAnchor="middle"
                      >
                        {edge.label}
                      </text>
                    </>
                  )}
                  {edge.animated && (
                    <motion.circle
                      r="3"
                      fill="#fff"
                      style={{ filter: "drop-shadow(0 0 4px #fff)" }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute flex items-center justify-center px-3 py-1.5 bg-[#111] border border-white/20 rounded-md shadow-lg z-10 whitespace-nowrap"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="font-mono font-medium text-[10px] text-white/90">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

