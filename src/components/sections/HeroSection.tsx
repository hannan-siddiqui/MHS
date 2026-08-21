"use client";

import React, { useState, useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Brain, 
  Cloud, 
  Database, 
  Grid, 
  ChevronRight, 
  ChevronLeft,
  Send,
  Code2,
  ShieldCheck,
} from "lucide-react";
import CircuitWireBus from "@/components/ui/CircuitWireBus";
import ScrambleText from "@/components/ui/ScrambleText";
import GlitchText from "@/components/ui/GlitchText";
import CommandTicker from "@/components/ui/CommandTicker";
import { heroCardLeft, heroCardRight, springPop, staggerContainerFast } from "@/lib/animations";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"rag" | "agent" | "cloud">("agent");
  const [toggleCloud, setToggleCloud] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftCard1Ref = useRef<HTMLDivElement>(null);
  const leftCard2Ref = useRef<HTMLDivElement>(null);
  const leftCard3Ref = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const rightCard1Ref = useRef<HTMLDivElement>(null);
  const rightCard2Ref = useRef<HTMLDivElement>(null);
  const rightCard3Ref = useRef<HTMLDivElement>(null);

  const tabContent = {
    agent: "⚡ AGENTIC ORCHESTRATION",
    rag: "🧠 ENTERPRISE RAG & HYBRID SEARCH",
    cloud: "☁️ CLOUD NATIVE MICROSERVICES",
  };

  const leftCards = [
    {
      ref: leftCard1Ref,
      icon: Brain,
      badge: "GenAI & NLP",
      title: "GENERATIVE AI & RAG",
      tags: ["AWS Bedrock", "Azure OpenAI", "Hybrid RAG"],
      desc: "Prompt Engineering & Structured Outputs",
    },
    {
      ref: leftCard2Ref,
      icon: Bot,
      badge: "LangGraph",
      title: "AGENTIC WORKFLOWS",
      tags: ["Multi-Agent", "LangChain", "Tool Calling", "MCP"],
      desc: "Autonomous State Machines & Orchestration",
    },
    {
      ref: leftCard3Ref,
      icon: ShieldCheck,
      badge: "Governance",
      title: "EVALS & GUARDRAILS",
      tags: ["Pydantic v2", "HITL Gates", "LLM Evals"],
      desc: "Strict Schema Validation & Hallucination Defense",
    },
  ];

  const rightCards = [
    {
      ref: rightCard1Ref,
      icon: Code2,
      badge: "Web & APIs",
      title: "FULL STACK STACK",
      tags: ["Next.js 15", "React.js", "FastAPI", "Node.js"],
      desc: "TypeScript, Python, Java & REST/GraphQL",
      led: "green" as const,
      onClick: undefined,
    },
    {
      ref: rightCard2Ref,
      icon: Cloud,
      badge: "Cloud Native",
      title: "CLOUD & DEVOPS",
      tags: ["AWS", "Azure", "Docker", "CI/CD"],
      desc: "Microservices & Automated Deployments",
      led: toggleCloud ? ("green" as const) : ("red-dim" as const),
      onClick: () => setToggleCloud(!toggleCloud),
    },
    {
      ref: rightCard3Ref,
      icon: Database,
      badge: "Data Layer",
      title: "DATABASES & VECTOR STORES",
      tags: ["PostgreSQL", "pgvector", "MongoDB", "MySQL"],
      desc: "1536-D Vector Indices & Relational Schemas",
      led: "dual" as const,
      onClick: undefined,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden bg-[#e4e7ec]"
    >
      <div 
        ref={containerRef}
        className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 relative z-10 my-auto space-y-8"
      >
        {/* Animated Dynamic Circuit Wire Busses with Pixel-Perfect Precision */}
        <CircuitWireBus
          containerRef={containerRef}
          leftCardRefs={[leftCard1Ref, leftCard2Ref, leftCard3Ref]}
          centerRef={centerPanelRef}
          rightCardRefs={[rightCard1Ref, rightCard2Ref, rightCard3Ref]}
        />

        {/* Main 3-Column Industrial Hardware Grid */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full min-w-0"
        >
          
          {/* LEFT SIDE PANEL */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-4 z-10 w-full min-w-0">
            <motion.div variants={springPop} className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full led-red animate-led-pulse" />
              <span>AI & ML EXPERTISE</span>
            </motion.div>

            {leftCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  ref={card.ref}
                  variants={heroCardLeft(index)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-2xl neu-raised cursor-pointer group flex flex-col justify-between min-h-[125px] relative card-shine min-w-0"
                >
                  <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                      <Icon className="w-3.5 h-3.5 text-red-500" />
                      <span>{card.badge}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full led-red animate-led-pulse" />
                  </div>

                  <div className="space-y-1 my-1">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase group-hover:text-red-600 transition-colors">
                      {card.title}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05 }}
                          className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-neutral-500">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER HERO PANEL */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative z-20 flex flex-col items-center gap-4 sm:gap-5 w-full min-w-0">
            
            <motion.div
              ref={centerPanelRef}
              variants={springPop}
              className="w-full max-w-[560px] p-4 sm:p-7 md:p-8 rounded-3xl neu-raised-thick relative space-y-4 sm:space-y-6 animate-hardware-float card-shine min-w-0 overflow-hidden"
            >
              
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-3 sm:pb-4 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full led-red animate-led-pulse shrink-0" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full led-red animate-led-pulse shrink-0" style={{ animationDelay: "0.3s" }} />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full led-red animate-led-pulse shrink-0" style={{ animationDelay: "0.6s" }} />
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-1 sm:ml-2 font-bold truncate">
                    CORE PROCESSOR
                  </span>
                </div>

                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-7 h-7 rounded-lg neu-inset flex items-center justify-center text-neutral-700 shrink-0"
                >
                  <Grid className="w-3.5 h-3.5" />
                </motion.div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold text-red-500 tracking-[0.15em] sm:tracking-[0.25em] uppercase flex items-center gap-2 truncate">
                    <ScrambleText text="MOHD HANNAN" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md neu-inset text-[8px] sm:text-[9px] font-mono text-neutral-600 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full led-red animate-led-pulse" />
                    <span className="font-semibold text-neutral-700">CORE_V2.5</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-neutral-950 uppercase leading-tight cursor-pointer group flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <GlitchText
                      text="AI ENGINEER"
                      glitchOnHover={true}
                      className="group-hover:text-red-600 transition-colors"
                    />
                    <span className="w-2.5 h-2.5 rounded-full led-red ml-0.5 sm:ml-1 shrink-0 animate-led-pulse" />
                  </h1>

                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-2 h-2 rounded-full pcb-via shrink-0" />
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-red-500/80 via-neutral-300 to-transparent relative overflow-hidden rounded-full">
                      <div className="absolute inset-0 w-12 bg-red-400 blur-[1px] animate-wire-flow" />
                    </div>
                    <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest shrink-0">
                      SYS_ACTIVE
                    </span>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-xs sm:text-sm font-mono text-neutral-600 leading-relaxed pt-1"
                >
                  Software/AI Engineer with 2+ years of enterprise experience building Generative AI, LangGraph multi-agent workflows, and cloud native architectures.
                </motion.p>
              </div>

              <div className="p-1.5 rounded-2xl neu-inset flex items-center justify-between gap-1 overflow-hidden min-w-0">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTab(activeTab === "agent" ? "rag" : activeTab === "rag" ? "cloud" : "agent")}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl neu-raised flex items-center justify-center text-neutral-700 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                  aria-label="Previous tab"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.button>

                <div className="flex-1 text-center font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider text-neutral-900 h-5 relative overflow-hidden min-w-0 px-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeTab}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="block truncate"
                    >
                      {tabContent[activeTab]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTab(activeTab === "agent" ? "cloud" : activeTab === "cloud" ? "rag" : "agent")}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl neu-raised flex items-center justify-center text-neutral-700 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                  aria-label="Next tab"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.button>
              </div>

              <div className="pt-1 sm:pt-2 space-y-2.5 sm:space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button-secondary py-3 sm:py-3.5 px-2 sm:px-4 text-[11px] sm:text-xs font-mono font-bold tracking-wider rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 text-neutral-800 hover:text-red-500 transition-all cursor-pointer group truncate"
                  >
                    <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077b5] group-hover:scale-110 transition-transform shrink-0" />
                    <span>LINKEDIN</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button-secondary py-3 sm:py-3.5 px-2 sm:px-4 text-[11px] sm:text-xs font-mono font-bold tracking-wider rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 text-neutral-800 hover:text-red-500 transition-all cursor-pointer group truncate"
                  >
                    <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-800 group-hover:scale-110 transition-transform shrink-0" />
                    <span>GITHUB</span>
                  </motion.a>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                    className="flex-1 neu-button-secondary py-3 px-3 text-[11px] sm:text-xs font-mono font-bold tracking-wider rounded-xl text-center truncate"
                  >
                    EXPLORE PROJECTS →
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${personalInfo.email}`}
                    className="neu-button-secondary p-3 rounded-xl text-neutral-700 shrink-0"
                    title="Send Email"
                  >
                    <Send className="w-4 h-4 text-red-500" />
                  </motion.a>
                </div>
              </div>

              <div className="flex justify-center gap-2 pt-1 sm:pt-2">
                <div className="w-10 sm:w-12 h-1 rounded-full neu-inset-sm" />
                <div className="w-10 sm:w-12 h-1 rounded-full neu-inset-sm" />
                <div className="w-10 sm:w-12 h-1 rounded-full neu-inset-sm" />
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-full max-w-[560px] min-w-0"
            >
              <CommandTicker />
            </motion.div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col gap-4 z-10 w-full min-w-0">
            <motion.div variants={springPop} className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1 font-bold flex items-center gap-1.5 justify-between">
              <span>STACK & CLOUD RACK</span>
              <span className="text-[9px] font-mono text-neutral-400">BUS: 64-BIT</span>
            </motion.div>

            {rightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  ref={card.ref}
                  variants={heroCardRight(index)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={card.onClick}
                  className={`p-4 rounded-2xl neu-raised flex flex-col justify-between min-h-[125px] card-shine ${card.onClick ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                      <Icon className="w-3.5 h-3.5 text-red-500" />
                      <span>{card.badge}</span>
                    </div>
                    {card.led === "dual" ? (
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full led-red animate-led-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full led-green animate-led-green-pulse" />
                      </div>
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${card.led === "green" ? "led-green animate-led-green-pulse" : "led-red-dim"} transition-all`} />
                    )}
                  </div>

                  <div className="space-y-1 my-1">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase group-hover:text-red-600 transition-colors">
                      {card.title}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05 }}
                          className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-neutral-500">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
