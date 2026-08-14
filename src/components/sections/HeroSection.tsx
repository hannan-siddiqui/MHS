"use client";

import { summary, personalInfo } from "@/data/portfolio";
import Image from "next/image";
import hannanImg from "@/data/Hannan.jpg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Dark Vignette & Radial Mask */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden flex justify-center items-center">
        <div 
          className="relative w-full max-w-[700px] aspect-[3/4] sm:aspect-square opacity-30 mix-blend-luminosity scale-110"
          style={{
            maskImage: 'radial-gradient(ellipse at 50% 35%, black 25%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 25%, transparent 75%)'
          }}
        >
          <Image
            src={hannanImg}
            alt="Hannan"
            fill
            className="object-cover object-top filter contrast-125"
            priority
            sizes="(max-width: 1024px) 100vw, 700px"
          />
        </div>
      </div>

      {/* Centered Main Content Area */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center space-y-8 my-auto"
      >
        
        {/* Status Badge */}
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white font-medium">{personalInfo.availability}</span>
        </motion.div>

        {/* Title Header: HANNAN. with Glowing Text & Aura Effect */}
        <motion.div variants={fadeInUp} className="space-y-4 max-w-4xl">
          <div className="text-xs font-mono uppercase tracking-[0.4em] text-red-500 font-bold">
            AI Engineer
          </div>

          <h1 
            className="text-[clamp(3rem,11.5vw,8.5rem)] font-heading font-extrabold uppercase leading-none tracking-tight text-white select-none whitespace-nowrap"
            style={{
              filter: "drop-shadow(0 0 45px rgba(239, 68, 68, 0.45))",
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-500">
              Hannan
            </span>
            <span className="text-red-500">.</span>
          </h1>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p variants={fadeInUp} className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light max-w-3xl">
          Software/AI Engineer with <span className="text-white font-semibold">2+ years of experience</span> building enterprise AI and full stack applications. Experienced in developing Generative AI and Agentic AI solutions with strong expertise in AWS, Azure, Microservices, and cloud native application development.
        </motion.p>

        {/* Action CTAs & Social Links */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
        </motion.div>

        {/* Bottom Feature Pill Badge */}
        <motion.div variants={fadeInUp} className="pt-6">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-mono text-neutral-400">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>2+ Years Building Enterprise AI & Full Stack Applications</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
