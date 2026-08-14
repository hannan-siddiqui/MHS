"use client";

import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import hannanImg from "@/data/Hannan.jpg";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";
import { ArrowRight, Send, Sparkles, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden bg-[#0a0a0c]"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto"
      >
        
        {/* Left Content Area (7 Cols) */}
        <motion.div variants={slideInLeft} className="lg:col-span-7 space-y-8 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white font-medium">{personalInfo.availability}</span>
          </div>

          {/* Title Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-500 block" />
              <span className="text-xs font-mono uppercase tracking-[0.35em] text-red-500 font-bold">
                01 // SOFTWARE / AI ENGINEER
              </span>
            </div>

            <h1 
              className="text-[clamp(3.5rem,7.5vw,7rem)] font-heading font-extrabold uppercase leading-[0.98] tracking-tight text-white select-none"
              style={{
                filter: "drop-shadow(0 0 35px rgba(239, 68, 68, 0.35))",
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-500">
                Hannan
              </span>
              <span className="text-red-500">.</span>
            </h1>
          </div>

          {/* Bio Paragraph — Robotic AI Telemetry Font */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-['Chakra_Petch',sans-serif] tracking-wider max-w-2xl border-l-2 border-red-500/80 pl-4 py-1 bg-white/[0.01] rounded-r-lg">
            Software/AI Engineer with <span className="text-white font-semibold underline decoration-red-500/60 underline-offset-4">2+ years of experience</span> building enterprise AI and full stack applications. Experienced in developing Generative AI and Agentic AI solutions with strong expertise in AWS, Azure, Microservices, and cloud native application development.
          </p>

          {/* Action CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="btn-accent px-9 py-4 text-xs tracking-wider rounded-xl shadow-xl shadow-red-500/25 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${personalInfo.email}`}
              className="btn-outline px-8 py-4 text-xs tracking-wider rounded-xl flex items-center gap-2 backdrop-blur-sm"
            >
              <Send className="w-4 h-4 text-red-500" />
              <span>Get In Touch</span>
            </motion.a>

            {/* GitHub Link */}
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-white transition-all backdrop-blur-sm group"
            >
              <FaGithub className="w-4.5 h-4.5 group-hover:text-red-400 transition-colors" />
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-white transition-all backdrop-blur-sm group"
            >
              <FaLinkedin className="w-4.5 h-4.5 group-hover:text-red-400 transition-colors" />
            </motion.a>
          </div>

        </motion.div>

        {/* Right Futuristic Portrait Card (5 Cols) */}
        <motion.div variants={fadeInUp} className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-white/[0.02] border border-white/10 shadow-2xl hover:border-red-500/40 transition-all duration-500 group overflow-hidden">
            
            {/* Top Telemetry Chip */}
            <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/15 text-[10px] font-mono text-neutral-300 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>AI ARCHITECT</span>
              </div>
            </div>

            {/* Image Container with Ambient Mask */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={hannanImg}
                alt="Mohd Hannan Siddiqui"
                fill
                className="object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />
            </div>

            {/* Bottom Floating Specialization Pill */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="p-4 rounded-2xl bg-[#0a0a0c]/90 border border-white/15 backdrop-blur-xl shadow-2xl space-y-1">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span>2+ Years Experience</span>
                </div>
                <p className="text-[11px] font-mono text-neutral-400">
                  Agentic Workflows • RAG • AWS & Azure
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
