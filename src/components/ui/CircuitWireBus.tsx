"use client";

import React, { useEffect, useState, RefObject } from "react";

interface CircuitWireBusProps {
  containerRef: RefObject<HTMLDivElement | null>;
  leftCardRefs: RefObject<HTMLDivElement | null>[];
  centerRef: RefObject<HTMLDivElement | null>;
  rightCardRefs: RefObject<HTMLDivElement | null>[];
}

interface WirePath {
  id: string;
  d: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export default function CircuitWireBus({
  containerRef,
  leftCardRefs,
  centerRef,
  rightCardRefs,
}: CircuitWireBusProps) {
  const [paths, setPaths] = useState<WirePath[]>([]);

  useEffect(() => {
    const calculatePaths = () => {
      if (!containerRef.current || !centerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const centerRect = centerRef.current.getBoundingClientRect();

      const newPaths: WirePath[] = [];

      // Entry heights on the Center Panel for left wires
      const leftTargetRatios = [0.26, 0.48, 0.72];
      // Exit heights on the Center Panel for right wires
      const rightTargetRatios = [0.26, 0.48, 0.72];

      // 1. Calculate Left Cards -> Center Panel
      leftCardRefs.forEach((cardRef, index) => {
        if (!cardRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();

        const x1 = cardRect.right - containerRect.left;
        const y1 = cardRect.top + cardRect.height / 2 - containerRect.top;

        const x2 = centerRect.left - containerRect.left;
        const y2 = centerRect.top + centerRect.height * leftTargetRatios[index] - containerRect.top;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const midX = x1 + dx * 0.42;
        const chamfer = Math.min(Math.abs(dy), dx * 0.35);

        let d = "";
        if (Math.abs(dy) < 4) {
          d = `M ${x1} ${y1} L ${x2} ${y2}`;
        } else {
          d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX + chamfer} ${y2} L ${x2} ${y2}`;
        }

        newPaths.push({
          id: `left-${index}`,
          d,
          start: { x: x1, y: y1 },
          end: { x: x2, y: y2 },
        });
      });

      // 2. Calculate Center Panel -> Right Cards
      rightCardRefs.forEach((cardRef, index) => {
        if (!cardRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();

        const x1 = centerRect.right - containerRect.left;
        const y1 = centerRect.top + centerRect.height * rightTargetRatios[index] - containerRect.top;

        const x2 = cardRect.left - containerRect.left;
        const y2 = cardRect.top + cardRect.height / 2 - containerRect.top;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const midX = x1 + dx * 0.42;
        const chamfer = Math.min(Math.abs(dy), dx * 0.35);

        let d = "";
        if (Math.abs(dy) < 4) {
          d = `M ${x1} ${y1} L ${x2} ${y2}`;
        } else {
          d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX + chamfer} ${y2} L ${x2} ${y2}`;
        }

        newPaths.push({
          id: `right-${index}`,
          d,
          start: { x: x1, y: y1 },
          end: { x: x2, y: y2 },
        });
      });

      setPaths(newPaths);
    };

    calculatePaths();

    // Re-calculate on resize and after initial render layout settles
    window.addEventListener("resize", calculatePaths);
    const timeout = setTimeout(calculatePaths, 150);
    const timeout2 = setTimeout(calculatePaths, 500);

    return () => {
      window.removeEventListener("resize", calculatePaths);
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [containerRef, leftCardRefs, centerRef, rightCardRefs]);

  if (paths.length === 0) return null;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block overflow-visible"
    >
      {/* 1. Underlying Debossed Inset Wire Track */}
      <g stroke="#cbd1dc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {paths.map((p) => (
          <path key={`base-${p.id}`} d={p.d} />
        ))}
      </g>

      {/* 2. Inner Metallic Copper/Silver Trace Core */}
      <g stroke="#a8b2c2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {paths.map((p) => (
          <path key={`core-${p.id}`} d={p.d} />
        ))}
      </g>

      {/* 3. Animated Flowing Red Signal Data Packets */}
      <g stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
        {paths.map((p, idx) => (
          <path
            key={`flow-${p.id}`}
            d={p.d}
            className={idx % 2 === 0 ? "animate-wire-flow" : "animate-wire-flow-fast"}
          />
        ))}
      </g>

      {/* 4. Solder Junction Vias and Illuminated Indicator Ports at Terminals */}
      {paths.map((p) => (
        <g key={`vias-${p.id}`}>
          {/* Start Point Terminal Via */}
          <circle
            cx={p.start.x}
            cy={p.start.y}
            r="4.5"
            fill="#e4e7ec"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <circle
            cx={p.start.x}
            cy={p.start.y}
            r="2"
            fill="#ef4444"
          />

          {/* End Point Terminal Via */}
          <circle
            cx={p.end.x}
            cy={p.end.y}
            r="4.5"
            fill="#e4e7ec"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <circle
            cx={p.end.x}
            cy={p.end.y}
            r="2"
            fill="#ef4444"
          />
        </g>
      ))}
    </svg>
  );
}
