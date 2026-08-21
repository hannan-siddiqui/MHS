"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-px w-full max-w-[1440px] mx-auto my-0 origin-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cbd1dc] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px overflow-hidden">
        <div className="absolute inset-0 w-8 bg-red-500 blur-[1px] animate-signal-sweep" />
      </div>
      {label && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 text-[8px] font-mono text-neutral-400 uppercase tracking-[0.3em] bg-[#e4e7ec]">
          {label}
        </span>
      )}
    </motion.div>
  );
}
