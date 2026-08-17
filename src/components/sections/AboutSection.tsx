"use client";

import { summary, skills } from "@/data/portfolio";
import { Bot, Brain, Cloud, Code2, Cpu, Database, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import RealTechIcon from "@/components/ui/RealTechIcon";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";
import ScrambleText from "@/components/ui/ScrambleText";

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
        {/* TOP SECTION: HARDWARE SPECIFICATION HEADER               */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Summary Module (7 Cols) */}
          <motion.div variants={slideInLeft} className="lg:col-span-7 p-8 rounded-3xl neu-raised flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest font-bold">
                    <ScrambleText text="02 // SPECIFICATION & CORE CAPABILITIES" />
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
          </motion.div>

          {/* Right — 3 Hardware Accelerator Core Units (5 Cols) */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="flex-1 p-6 rounded-2xl neu-raised flex flex-col justify-center relative group">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl neu-inset flex items-center justify-center text-neutral-900 shrink-0">
                  <Bot className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-heading font-bold text-neutral-950 uppercase">
                      Agentic AI Orchestration
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full led-red" />
                  </div>
                  <p className="text-xs text-neutral-600 font-mono mt-1 leading-relaxed">
                    LangGraph state graphs, deterministic tool calling, HITL verification gates & evaluations.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-2xl neu-raised flex flex-col justify-center relative group">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl neu-inset flex items-center justify-center text-neutral-900 shrink-0">
                  <Brain className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-heading font-bold text-neutral-950 uppercase">
                      Generative AI & Enterprise RAG
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full led-red" />
                  </div>
                  <p className="text-xs text-neutral-600 font-mono mt-1 leading-relaxed">
                    AWS Bedrock, Azure OpenAI, pgvector 1536-D hybrid search & structured schema validation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-2xl neu-raised flex flex-col justify-center relative group">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl neu-inset flex items-center justify-center text-neutral-900 shrink-0">
                  <Cloud className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-heading font-bold text-neutral-950 uppercase">
                      Full Stack & Cloud Architecture
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full led-green" />
                  </div>
                  <p className="text-xs text-neutral-600 font-mono mt-1 leading-relaxed">
                    Next.js 15, React.js, FastAPI, Node.js, AWS Microservices, Docker & CI/CD.
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
