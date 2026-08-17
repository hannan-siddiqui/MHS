"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HeroOrbitNodeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  statusColor?: string;
  pulse?: boolean;
  className?: string;
  delay?: number;
}

export default function HeroOrbitNode({
  icon: Icon,
  title,
  subtitle,
  statusColor = "bg-red-500",
  pulse = true,
  className = "",
  delay = 0,
}: HeroOrbitNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`p-3 rounded-2xl bg-[#0f0f13]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3 cursor-default select-none group hover:border-red-500/50 transition-all ${className}`}
    >
      <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all shrink-0">
        <Icon className="w-4 h-4" />
      </div>

      <div className="text-left">
        <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
          {pulse && (
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${statusColor}`} />
            </span>
          )}
          <span>{title}</span>
        </div>
        <div className="text-[9px] font-mono text-neutral-400 leading-tight mt-0.5">
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
}
