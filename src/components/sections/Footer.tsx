"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, ChevronUp, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#dde0e6] border-t-2 border-[#cbd1dc] pt-16 pb-12 overflow-hidden select-none">
      
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #8c96a5 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10 space-y-12"
      >
        
        <motion.div variants={fadeInUp} className="p-5 sm:p-8 md:p-10 rounded-3xl neu-raised border border-white/80 space-y-8 bg-[#e4e7ec] min-w-0">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Hardware Model & Identity (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl neu-raised flex items-center justify-center text-neutral-900 border border-white">
                  <Cpu className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="text-lg font-heading font-black uppercase tracking-wider text-neutral-950 block">
                    {personalInfo.firstName} {personalInfo.lastName}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                    AI ENGINEER // FULL STACK ARCHITECT
                  </span>
                </div>
              </div>

              <p className="text-xs font-mono text-neutral-600 leading-relaxed max-w-sm">
                Custom intelligence engines, high-throughput LangGraph agent workflows, and mathematically grounded RAG pipelines.
              </p>

              {/* Hardware Status Strip */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full led-green" />
                  <span className="font-bold">SYSTEM ONLINE</span>
                </span>
                <span className="text-neutral-400">|</span>
                <span>REV 2.6.4</span>
                <span className="text-neutral-400">|</span>
                <span>BUS: 100% OK</span>
              </div>
            </div>

            {/* Column 2: System Navigation Channels (3 Cols) */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full led-red" />
                <span>BUS CHANNELS</span>
              </div>
              <ul className="space-y-2 text-xs font-mono font-semibold">
                <li>
                  <Link href="/#home" className="text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-1.5">
                    <span className="text-neutral-400">&gt;</span> 01 // HOME CENTERPIECE
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-1.5">
                    <span className="text-neutral-400">&gt;</span> 02 // CORE CAPABILITIES
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-1.5">
                    <span className="text-neutral-400">&gt;</span> 03 // SYSTEM ARCHITECTURES
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-1.5">
                    <span className="text-neutral-400">&gt;</span> 04 // CAREER TELEMETRY
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-neutral-700 hover:text-red-500 transition-colors flex items-center gap-1.5">
                    <span className="text-neutral-400">&gt;</span> 05 // COMMS TRANSCEIVER
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Communication Ports & Reset Actuator (4 Cols) */}
            <div className="md:col-span-4 space-y-4 md:text-right flex flex-col md:items-end">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5 md:justify-end">
                <span className="w-1.5 h-1.5 rounded-full led-green" />
                <span>DATA PORTS</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Port"
                  className="w-10 h-10 rounded-xl neu-raised flex items-center justify-center text-neutral-800 hover:text-blue-600 border border-white transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Port"
                  className="w-10 h-10 rounded-xl neu-raised flex items-center justify-center text-neutral-800 hover:text-neutral-950 border border-white transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Port"
                  className="w-10 h-10 rounded-xl neu-raised flex items-center justify-center text-neutral-800 hover:text-red-500 border border-white transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <button 
                onClick={scrollToTop}
                className="neu-button-secondary px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider flex items-center gap-2 cursor-pointer mt-2 group"
              >
                <span>RESET TO PIN 0</span>
                <ChevronUp className="w-4 h-4 text-red-500 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Solder Ground Line */}
          <div className="border-t border-[#cbd1dc]/70 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full led-red" />
              <span>© {new Date().getFullYear()} MOHD HANNAN. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <span>HARDWARE CHASSIS: INDUSTRIAL NEUMORPHIC</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700 font-bold">PCB REV 2.6.4</span>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </footer>
  );
}
