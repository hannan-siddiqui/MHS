"use client";

import { useState } from "react";
import { summary, skills } from "@/data/portfolio";
import { Bot, Brain, Cloud, Code2, Cpu, Database, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import RealTechIcon from "@/components/ui/RealTechIcon";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";

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
    <section id="about" className="py-28 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-24"
      >
        
        {/* ========================================================= */}
        {/* TOP SECTION: EDITORIAL HEADER & ABOUT INTRO              */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Title & Bio (7 Cols) */}
          <motion.div variants={slideInLeft} className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-500 block" />
                <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-bold">
                  02 // ABOUT & EXPERTISE
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Architecting Intelligent Systems <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-red-500">
                  & Cloud-Native Applications
                </span>
              </h2>

              <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                {summary.description}
              </p>
            </div>

            {/* Key Accomplishment Pills */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {summary.highlights.map((highlight, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 text-xs font-mono text-neutral-300 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 hover:border-red-500/30 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — 3 Core Pillars (5 Cols, Vertically Equalized) */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-red-500 font-bold mt-1">01</span>
                <div>
                  <h3 className="text-base font-heading font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    Agentic AI Orchestration
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    LangGraph, multi-agent graphs, human-in-the-loop validation & guardrails.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-red-500 font-bold mt-1">02</span>
                <div>
                  <h3 className="text-base font-heading font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    Generative AI & Enterprise RAG
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    AWS Bedrock, Azure OpenAI, pgvector hybrid search & structured LLM output.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-red-500 font-bold mt-1">03</span>
                <div>
                  <h3 className="text-base font-heading font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    Full Stack & Cloud Architecture
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    React.js, Next.js 15, FastAPI, Node.js, AWS Microservices & Docker.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: NON-CARD EDITORIAL DOMAIN STRIP MATRIX   */}
        {/* ========================================================= */}
        <div className="space-y-12 pt-8 border-t border-white/10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-bold block mb-2">
                Technical Capabilities
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Engineering Stack & Tooling
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-500">
              Structured across core AI & cloud engineering domains
            </p>
          </div>

          {/* Un-boxed Editorial Rows Divider Layout */}
          <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
            {skills.map((category, idx) => {
              const CategoryIcon = categoryIcons[category.category] || Code2;

              return (
                <motion.div 
                  variants={fadeInUp}
                  key={category.category}
                  className="py-8 md:py-10 grid md:grid-cols-12 gap-6 items-start group hover:bg-white/[0.01] transition-colors px-4 -mx-4 rounded-2xl"
                >
                  {/* Left Domain Title & Info (4 Cols) */}
                  <div className="md:col-span-4 space-y-2">
                    <div className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                      <span>0{idx + 1} //</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                        {category.category}
                      </h4>
                    </div>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Right Flowing Skill Badge Matrix (8 Cols) */}
                  <div className="md:col-span-8 flex flex-wrap gap-3 items-center pt-1 md:pt-0">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-200 bg-white/[0.03] border border-white/10 hover:border-red-500/60 hover:bg-red-500/10 hover:text-white transition-all duration-200 select-none flex items-center gap-2.5 group/chip"
                      >
                        <RealTechIcon 
                          name={skill.name} 
                          className="w-4 h-4 text-red-400 group-hover/chip:text-white transition-colors shrink-0" 
                        />
                        <span className="font-medium">{skill.name}</span>
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
