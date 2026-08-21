"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  "> sys.mount('Mohd Hannan') -> AI & Software Engineer initialized",
  "> load.module('LangGraph') -> Multi-Agent Workflows: ACTIVE",
  "> load.module('pgvector') -> 1536-Dim Embeddings: SYNCHRONIZED",
  "> deploy.cloud(['AWS', 'Azure']) -> Microservices: PRODUCTION READY",
  "> eval.guardrails() -> Hallucination Rate: 0.0% [GROUNDED]",
];

export default function CommandTicker() {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % commands.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hannan-portfolio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full px-3 sm:px-4 py-2.5 rounded-xl neu-inset border border-[#cbd1dc]/50 flex items-center justify-between gap-2 sm:gap-3 text-xs font-mono select-none overflow-hidden min-w-0">
      <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
          <Terminal className="w-3.5 h-3.5 text-red-500" />
        </div>

        <div className="relative h-4 overflow-hidden flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-neutral-700 block truncate font-mono text-[10px] sm:text-[11px]"
            >
              {commands[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <span className="text-[10px] text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 hidden sm:inline font-mono">
          ● STABLE
        </span>
        <button
          onClick={handleCopy}
          title="Copy CLI command"
          className="p-1 rounded-lg neu-raised text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
}
