"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, springPop } from "@/lib/animations";
import { Send, Copy, Check, Radio } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrambleText from "@/components/ui/ScrambleText";
import TextReveal from "@/components/ui/TextReveal";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#e4e7ec] border-b border-[#cbd1dc] overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[960px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8"
      >
        
        {/* Main Stamped Transceiver Terminal Chassis */}
        <motion.div
          variants={springPop}
          className="p-5 sm:p-8 md:p-12 rounded-3xl neu-raised-thick space-y-6 sm:space-y-8 relative card-shine min-w-0"
        >
          
          {/* Top Chassis Bar */}
          <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full led-red" />
              <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest font-bold">
                <ScrambleText text="05 // TRANSCEIVER & DIRECT INTERFACE" />
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-500">
              <Radio className="w-3.5 h-3.5 text-neutral-700" />
              <span>PORT: 443 / SSL</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight leading-tight">
              <TextReveal text="Ready to Transmit?" as="span" />
            </h2>
            <p className="text-neutral-600 font-mono text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Open to enterprise AI engineering opportunities, LangGraph agent architectures, and full-stack cloud collaborations.
            </p>
          </div>

          {/* Physical Stamped Email Slot */}
          <div className="p-4 rounded-2xl neu-inset max-w-lg mx-auto flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full led-green shrink-0" />
              <span className="text-neutral-900 font-bold truncate">{personalInfo.email}</span>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="neu-button-secondary px-3 py-1.5 rounded-lg text-[10px] font-mono shrink-0 cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-1 text-emerald-600 font-bold"
                  >
                    <Check className="w-3 h-3" /> COPIED
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-1 text-neutral-700"
                  >
                    <Copy className="w-3 h-3" /> COPY
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="neu-button-primary px-5 sm:px-8 py-3.5 sm:py-4 text-xs font-mono font-bold tracking-widest rounded-xl flex items-center gap-2 max-w-full truncate cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>INITIATE TRANSMISSION</span>
            </motion.a>

            <div className="flex items-center gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl neu-raised flex items-center justify-center text-neutral-800 hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl neu-raised flex items-center justify-center text-neutral-800 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Stamped Ventilation Slots */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-10 h-1 rounded-full neu-inset-sm" />
            <div className="w-10 h-1 rounded-full neu-inset-sm" />
            <div className="w-10 h-1 rounded-full neu-inset-sm" />
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
