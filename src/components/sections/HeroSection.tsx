"use client";

import React, { useState, useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Brain, 
  Cloud, 
  Database, 
  Sparkles, 
  Terminal, 
  Grid, 
  Sliders, 
  ChevronRight, 
  ChevronLeft,
  Send,
  Check,
  Activity,
  Code2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu
} from "lucide-react";
import CircuitWireBus from "@/components/ui/CircuitWireBus";
import Typewriter from "@/components/ui/Typewriter";
import ScrambleText from "@/components/ui/ScrambleText";
import GlitchText from "@/components/ui/GlitchText";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"rag" | "agent" | "cloud">("agent");
  const [toggleCloud, setToggleCloud] = useState(true);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Refs for Pixel-Perfect Dynamic Wire Bus Connections
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCard1Ref = useRef<HTMLDivElement>(null);
  const leftCard2Ref = useRef<HTMLDivElement>(null);
  const leftCard3Ref = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const rightCard1Ref = useRef<HTMLDivElement>(null);
  const rightCard2Ref = useRef<HTMLDivElement>(null);
  const rightCard3Ref = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEarlyAccessOpen(false);
      setUserEmail("");
    }, 2500);
  };

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
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* =============================================================== */}
          {/* 1. LEFT SIDE PANEL: AI & INTELLIGENCE EXPERTISE (3 COLS)        */}
          {/* =============================================================== */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-4 z-10">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full led-red" />
              <span>AI & ML EXPERTISE</span>
            </div>

            {/* Expertise Card 1: Generative AI & Enterprise RAG */}
            <motion.div
              ref={leftCard1Ref}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl neu-raised cursor-pointer group flex flex-col justify-between min-h-[125px] relative"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <Brain className="w-3.5 h-3.5 text-red-500" />
                  <span>GenAI & NLP</span>
                </div>
                <div className="w-2 h-2 rounded-full led-red" />
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  GENERATIVE AI & RAG
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["AWS Bedrock", "Azure OpenAI", "Hybrid RAG"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                Prompt Engineering & Structured Outputs
              </p>
            </motion.div>

            {/* Expertise Card 2: Agentic AI & Workflows */}
            <motion.div
              ref={leftCard2Ref}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl neu-raised cursor-pointer group flex flex-col justify-between min-h-[125px] relative"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <Bot className="w-3.5 h-3.5 text-red-500" />
                  <span>LangGraph</span>
                </div>
                <div className="w-2 h-2 rounded-full led-red" />
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  AGENTIC WORKFLOWS
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["Multi-Agent", "LangChain", "Tool Calling", "MCP"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                Autonomous State Machines & Orchestration
              </p>
            </motion.div>

            {/* Expertise Card 3: Evals & Guardrails */}
            <motion.div
              ref={leftCard3Ref}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl neu-raised cursor-pointer group flex flex-col justify-between min-h-[125px] relative"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  <span>Governance</span>
                </div>
                <div className="w-2 h-2 rounded-full led-red" />
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  EVALS & GUARDRAILS
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["Pydantic v2", "HITL Gates", "LLM Evals"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                Strict Schema Validation & Hallucination Defense
              </p>
            </motion.div>
          </div>

          {/* =============================================================== */}
          {/* 2. CENTER HERO PANEL: THE CORE COMPUTE UNIT (6 COLS)             */}
          {/* =============================================================== */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative z-20 flex flex-col items-center">
            
            {/* The Main Raised Heavy Hardware Module */}
            <div 
              ref={centerPanelRef}
              className="w-full max-w-[560px] p-6 sm:p-8 rounded-3xl neu-raised-thick relative space-y-6"
            >
              
              {/* Header: 3 LEDs + Grid Stamped Icon */}
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-2 font-bold">
                    CORE PROCESSOR
                  </span>
                </div>

                <div className="w-7 h-7 rounded-lg neu-inset flex items-center justify-center text-neutral-700">
                  <Grid className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Stamped Hardware Name Heading */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono font-bold text-red-500 tracking-[0.25em] uppercase flex items-center gap-2">
                    <ScrambleText text="MOHD HANNAN" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md neu-inset text-[9px] font-mono text-neutral-600">
                    <span className="w-1.5 h-1.5 rounded-full led-red animate-pulse" />
                    <span className="font-semibold text-neutral-700">CORE_V2.5</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-neutral-950 uppercase leading-none cursor-pointer group flex items-center gap-2">
                    <GlitchText
                      text="AI ENGINEER"
                      glitchOnHover={true}
                      className="group-hover:text-red-600 transition-colors"
                    />
                    <span className="w-2.5 h-2.5 rounded-full led-red ml-1 shrink-0" />
                  </h1>

                  {/* High-Tech PCB Laser Bus Underline */}
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

                {/* Subtitle */}
                <div className="pt-1">
                  <p className="text-xs sm:text-sm font-mono text-neutral-600 leading-relaxed">
                    Software/AI Engineer with 2+ years of enterprise experience building Generative AI, LangGraph multi-agent workflows, and cloud native architectures.
                  </p>
                </div>
              </div>

              {/* Dynamic Mode Bar with Arrows */}
              <div className="p-1.5 rounded-2xl neu-inset flex items-center justify-between gap-1">
                <button
                  onClick={() => setActiveTab(activeTab === "agent" ? "rag" : activeTab === "rag" ? "cloud" : "agent")}
                  className="w-8 h-8 rounded-xl neu-raised flex items-center justify-center text-neutral-700 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 text-center font-mono font-bold text-xs uppercase tracking-wider text-neutral-900">
                  {activeTab === "agent" && "⚡ AGENTIC ORCHESTRATION"}
                  {activeTab === "rag" && "🧠 ENTERPRISE RAG & HYBRID SEARCH"}
                  {activeTab === "cloud" && "☁️ CLOUD NATIVE MICROSERVICES"}
                </div>

                <button
                  onClick={() => setActiveTab(activeTab === "agent" ? "cloud" : activeTab === "cloud" ? "rag" : "agent")}
                  className="w-8 h-8 rounded-xl neu-raised flex items-center justify-center text-neutral-700 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Primary Profiles & Action Row: LinkedIn & GitHub */}
              <div className="pt-2 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button-secondary py-3.5 px-4 text-xs font-mono font-bold tracking-wider rounded-2xl flex items-center justify-center gap-2 text-neutral-800 hover:text-red-500 transition-all cursor-pointer group"
                  >
                    <FaLinkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button-secondary py-3.5 px-4 text-xs font-mono font-bold tracking-wider rounded-2xl flex items-center justify-center gap-2 text-neutral-800 hover:text-red-500 transition-all cursor-pointer group"
                  >
                    <FaGithub className="w-4 h-4 text-neutral-800 group-hover:scale-110 transition-transform" />
                    <span>GITHUB</span>
                  </a>
                </div>

                {/* Secondary Action Row: Projects & Direct Email */}
                <div className="flex items-center gap-3">
                  <a
                    href="#projects"
                    className="flex-1 neu-button-secondary py-3 text-xs font-mono font-bold tracking-wider rounded-xl text-center"
                  >
                    EXPLORE PROJECTS →
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="neu-button-secondary p-3 rounded-xl text-neutral-700"
                    title="Send Email"
                  >
                    <Send className="w-4 h-4 text-red-500" />
                  </a>
                </div>
              </div>

              {/* Stamped Ventilation Slot Details on Module Bottom */}
              <div className="flex justify-center gap-2 pt-2">
                <div className="w-12 h-1 rounded-full neu-inset-sm" />
                <div className="w-12 h-1 rounded-full neu-inset-sm" />
                <div className="w-12 h-1 rounded-full neu-inset-sm" />
              </div>

            </div>
          </div>

          {/* =============================================================== */}
          {/* 3. RIGHT SIDE PANEL: FULL STACK & CLOUD ARCHITECTURE (3 COLS)   */}
          {/* =============================================================== */}
          <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col gap-4 z-10">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1 font-bold flex items-center gap-1.5 justify-between">
              <span>STACK & CLOUD RACK</span>
              <span className="text-[9px] font-mono text-neutral-400">BUS: 64-BIT</span>
            </div>

            {/* Expertise Card 4: Full Stack Engineering */}
            <motion.div
              ref={rightCard1Ref}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl neu-raised flex flex-col justify-between min-h-[125px]"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <Code2 className="w-3.5 h-3.5 text-red-500" />
                  <span>Web & APIs</span>
                </div>
                <span className="w-2 h-2 rounded-full led-green" />
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  FULL STACK STACK
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["Next.js 15", "React.js", "FastAPI", "Node.js"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                TypeScript, Python, Java & REST/GraphQL
              </p>
            </motion.div>

            {/* Expertise Card 5: Cloud & DevOps */}
            <motion.div
              ref={rightCard2Ref}
              whileHover={{ y: -2 }}
              onClick={() => setToggleCloud(!toggleCloud)}
              className="p-4 rounded-2xl neu-raised cursor-pointer flex flex-col justify-between min-h-[125px]"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <Cloud className="w-3.5 h-3.5 text-red-500" />
                  <span>Cloud Native</span>
                </div>
                <span className={`w-2 h-2 rounded-full ${toggleCloud ? "led-green" : "led-red-dim"} transition-all`} />
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  CLOUD & DEVOPS
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["AWS", "Azure", "Docker", "CI/CD"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                Microservices & Automated Deployments
              </p>
            </motion.div>

            {/* Expertise Card 6: Databases & Vector Stores */}
            <motion.div
              ref={rightCard3Ref}
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl neu-raised flex flex-col justify-between min-h-[125px]"
            >
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/50 pb-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg neu-inset text-[10px] font-mono text-neutral-800 font-bold">
                  <Database className="w-3.5 h-3.5 text-neutral-800" />
                  <span>Data Layer</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full led-red" />
                  <span className="w-1.5 h-1.5 rounded-full led-green" />
                </div>
              </div>

              <div className="space-y-1 my-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                  DATABASES & VECTOR STORES
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["PostgreSQL", "pgvector", "MongoDB", "MySQL"].map((t) => (
                    <span key={t} className="text-[9px] font-mono text-neutral-700 bg-white/70 px-1.5 py-0.5 rounded border border-[#cbd1dc]/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-mono text-neutral-500">
                1536-D Vector Indices & Relational Schemas
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
