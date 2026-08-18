"use client";

import { summary, skills, personalInfo } from "@/data/portfolio";
import { Bot, Brain, Cloud, Code2, Cpu, Database, CheckCircle2, ShieldCheck, Zap, User, Radio } from "lucide-react";
import RealTechIcon from "@/components/ui/RealTechIcon";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";
import ScrambleText from "@/components/ui/ScrambleText";
import Image from "next/image";

const categoryIcons: Record<string, any> = {
  "Agentic AI & Orchestration": Bot,
  "Generative AI & NLP": Brain,
  "Cloud & DevOps": Cloud,
  "Frameworks": Cpu,
  "Languages": Code2,
  "Databases & Tools": Database,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#e4e7ec] border-b border-[#cbd1dc]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-20"
      >
        
        {/* ========================================================= */}
        {/* TOP SECTION: OPERATOR BIOMETRICS & HARDWARE SPECIFICATION */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Operator Biometric Hologram & Telemetry Card (4 Cols) */}
          <motion.div 
            variants={slideInLeft} 
            className="lg:col-span-4 p-6 sm:p-7 rounded-3xl neu-raised flex flex-col justify-between space-y-5 relative overflow-hidden group"
          >
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full led-red animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest font-bold">
                  OPERATOR BIOMETRICS
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded neu-inset text-neutral-700 font-semibold flex items-center gap-1">
                <Radio className="w-2.5 h-2.5 text-red-500" /> ID: MHS-01
              </span>
            </div>

            {/* Cinematic Portrait with Hardware Optic HUD Overlays */}
            <div className="relative rounded-2xl overflow-hidden neu-inset p-1.5 border border-white/70 shadow-inner">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-950">
                <Image
                  src="/profile.jpg"
                  alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Dark Vignette & Cyber Atmospheric Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* 4 Corner Optic Reticle Brackets */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500/90 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-red-500/90 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-red-500/90 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/90 rounded-br-sm pointer-events-none" />

                {/* Live Biometric Status Bar at Bottom of Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90 bg-[#181a1e]/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/15 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full led-green" />
                    <span className="font-bold tracking-wider text-neutral-100">
                      {personalInfo.firstName} {personalInfo.lastName}
                    </span>
                  </div>
                  <span className="text-red-400 font-bold tracking-wide">
                    AI ENGINEER
                  </span>
                </div>
              </div>
            </div>

            {/* Hardware Telemetry Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2.5 rounded-xl neu-inset">
                <span className="text-neutral-500 block text-[9px] font-semibold">EXPERIENCE</span>
                <span className="font-bold text-neutral-900">2+ YRS ENTERPRISE</span>
              </div>
              <div className="p-2.5 rounded-xl neu-inset">
                <span className="text-neutral-500 block text-[9px] font-semibold">CLEARANCE</span>
                <span className="font-bold text-red-600">SYS_ONLINE : LVL 5</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Architectural Specifications & Core Units (8 Cols) */}
          <motion.div 
            variants={fadeInUp} 
            className="lg:col-span-8 p-8 rounded-3xl neu-raised flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest font-bold">
                    <ScrambleText text="02 // SPECIFICATION & ARCHITECTURAL OVERVIEW" />
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">REV 2.6.4</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight leading-tight">
                Architecting Intelligent Systems & Cloud Native Platforms
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-mono">
                {summary.description}
              </p>
            </div>

            {/* Key Highlights: Stamped Inset Slots */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {summary.highlights.map((highlight, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 text-xs font-mono text-neutral-800 neu-inset rounded-xl px-4 py-3 cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* 3 Hardware Accelerator Sub-Units */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl neu-inset flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <Bot className="w-4 h-4 text-red-500" />
                  <span className="w-1.5 h-1.5 rounded-full led-red" />
                </div>
                <div>
                  <h4 className="text-xs font-heading font-bold text-neutral-950 uppercase">
                    Agentic AI
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5 leading-tight">
                    LangGraph state machines & tool calling
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl neu-inset flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <Brain className="w-4 h-4 text-red-500" />
                  <span className="w-1.5 h-1.5 rounded-full led-red" />
                </div>
                <div>
                  <h4 className="text-xs font-heading font-bold text-neutral-950 uppercase">
                    Generative AI & RAG
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5 leading-tight">
                    AWS Bedrock & pgvector hybrid search
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl neu-inset flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <Cloud className="w-4 h-4 text-red-500" />
                  <span className="w-1.5 h-1.5 rounded-full led-green" />
                </div>
                <div>
                  <h4 className="text-xs font-heading font-bold text-neutral-950 uppercase">
                    Cloud Native
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5 leading-tight">
                    Next.js, FastAPI & AWS microservices
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: HARDWARE IC CHIP STACK MATRIX             */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#cbd1dc]/60 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-bold block mb-1">
                INTEGRATED CIRCUIT TOOLING
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-neutral-950 uppercase">
                Technical Stack & Microchip Components
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-full led-green" />
              <span>ALL BUSSES OPERATIONAL</span>
            </div>
          </div>

          {/* Stamped Hardware Rack Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, idx) => {
              const CategoryIcon = categoryIcons[category.category] || Code2;

              return (
                <motion.div 
                  variants={fadeInUp} 
                  key={category.category}
                  className="p-6 rounded-2xl neu-raised flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg neu-inset flex items-center justify-center text-neutral-800">
                        <CategoryIcon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-heading font-bold text-neutral-950 uppercase">
                        {category.category}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">
                      SLOT 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-neutral-500 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tactile SMD Surface Mount Component Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg neu-inset text-xs font-mono font-semibold text-neutral-800 flex items-center gap-2 hover:text-red-600 transition-colors cursor-default"
                      >
                        <RealTechIcon 
                          name={skill.name} 
                          className="w-3.5 h-3.5 text-neutral-700 shrink-0" 
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </motion.div>
    </section>
  );
}
