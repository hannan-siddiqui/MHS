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
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  useEffect(() => {
    setMounted(true);
    
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: (entry.target as HTMLElement).offsetWidth,
          height: (entry.target as HTMLElement).offsetHeight,
        });
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative w-full aspect-[16/10] sm:aspect-video bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden font-mono text-xs shadow-2xl">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-[5]" 
        viewBox={`0 0 1000 600`}
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

          // Use a fixed 1000x600 viewBox for consistent coordinates
          const sx = sourceNode.x * 10;
          const sy = sourceNode.y * 6;
          const tx = targetNode.x * 10;
          const ty = targetNode.y * 6;

          // Simple bezier curve from center to center
          const dx = tx - sx;
          const dy = ty - sy;
          let pathD: string;

          if (Math.abs(dx) > Math.abs(dy)) {
            // Mostly horizontal - use horizontal bezier
            const cx = sx + dx * 0.5;
            pathD = `M ${sx} ${sy} C ${cx} ${sy}, ${cx} ${ty}, ${tx} ${ty}`;
          } else {
            // Mostly vertical - use vertical bezier
            const cy = sy + dy * 0.5;
            pathD = `M ${sx} ${sy} C ${sx} ${cy}, ${tx} ${cy}, ${tx} ${ty}`;
          }

          // Label position at midpoint
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
                  {/* Background pill for label */}
                  <rect
                    x={mx - edge.label.length * 3.5 - 4}
                    y={my - 16}
                    width={edge.label.length * 7 + 8}
                    height={14}
                    rx="3"
                    fill="#0a0a0a"
                  />
                  <text
                    x={mx}
                    y={my - 6}
                    fill="#888"
                    fontSize="9"
                    textAnchor="middle"
                    className="hidden sm:block"
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
          <span className="font-mono font-medium text-[9px] sm:text-[10px] text-white/90">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
