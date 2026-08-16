import React from "react";
import { projects } from "@/data/portfolio";
import { 
  ExternalLink, 
  Code2, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Boxes,
  Workflow,
  Terminal,
  Database,
  Activity
} from "lucide-react";
import AnimatedFlowDiagram from "@/components/ui/AnimatedFlowDiagram";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24 px-6 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          
          {/* Top Bar: Back Link */}
          <div>
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/40"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-500" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Title Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                ENTERPRISE SYSTEM CASE STUDY & ARCHITECTURE
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Diagram Box (Full Width) */}
          {project.architecture && (
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span className="font-semibold text-white">System Architecture & Data Flow</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Interactive Neural Flow Map</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#111111]/90 backdrop-blur-md">
                <AnimatedFlowDiagram 
                  nodes={project.architecture.nodes} 
                  edges={project.architecture.edges} 
                />
              </div>
            </div>
          )}

          {/* Key Architecture Pillars & Business Impact Table/Cards (Full Width) */}
          {project.pillars && project.pillars.length > 0 && (
            <div className="wireframe-box p-6 sm:p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-red-500" />
                  <h2 className="text-2xl font-heading font-bold text-white">
                    Key Technical Highlights & Architecture Pillars
                  </h2>
                </div>
                <span className="text-xs font-mono text-red-400 hidden sm:inline">
                  Pillars & Impact
                </span>
              </div>

              <div className="grid gap-4">
                {project.pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all space-y-3 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                        <h3 className="font-heading font-bold text-base text-white group-hover:text-red-400 transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md self-start sm:self-auto">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Business Impact Verified</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-4 text-xs">
                      <div className="md:col-span-7 space-y-1">
                        <span className="font-mono text-neutral-500 uppercase tracking-wider text-[10px]">
                          Technical Implementation
                        </span>
                        <p className="text-neutral-300 font-light leading-relaxed">
                          {pillar.implementation}
                        </p>
                      </div>
                      <div className="md:col-span-5 space-y-1 bg-white/[0.01] p-3 rounded-lg border border-white/5">
                        <span className="font-mono text-red-400 uppercase tracking-wider text-[10px] font-bold">
                          Impact & Metrics
                        </span>
                        <p className="text-neutral-200 font-medium leading-relaxed">
                          {pillar.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Symmetrical Two-Column Section: Overview & Core Capabilities on Left | Specs & Links on Right */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Executive Summary */}
              <div className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <h2 className="text-2xl font-heading font-bold text-white">
                    Executive Summary & Scope
                  </h2>
                </div>

                <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
                  {project.detailedDescription ? (
                    project.detailedDescription.map((p, idx) => (
                      <p key={idx} className="border-l-2 border-red-500/50 pl-4 py-1">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="border-l-2 border-red-500/50 pl-4 py-1">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Core Features */}
              {project.features && (
                <div className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Layers className="w-5 h-5 text-red-500" />
                    <h2 className="text-2xl font-heading font-bold text-white">
                      Core Functional Capabilities
                    </h2>
                  </div>

                  <div className="grid gap-3.5">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all"
                      >
                        <div className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-neutral-200 font-light text-sm sm:text-base leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column (5 Cols) — Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              {/* Repository & Access Box */}
              <div className="wireframe-box p-6 sm:p-7 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-mono text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span className="text-white font-bold uppercase tracking-wider">Repository & Access</span>
                </div>

                <div className="space-y-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl text-white text-xs font-mono transition-all group w-full"
                    >
                      <Code2 className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">View Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-mono transition-all font-semibold shadow-lg shadow-red-500/20 w-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live System Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* System Specs & Telemetry Box */}
              <div className="wireframe-box p-6 sm:p-7 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-mono text-neutral-400">
                  <Activity className="w-4 h-4 text-red-500" />
                  <span className="text-white font-bold uppercase tracking-wider">System Specs & Telemetry</span>
                </div>

                <div className="space-y-3 text-xs font-mono pt-1">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400">Architecture Status</span>
                    <span className="text-red-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      Production Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400">Diagram Flow Nodes</span>
                    <span className="text-white font-medium">{project.architecture?.nodes.length || 0} Components</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400">Governance Guardrails</span>
                    <span className="text-emerald-400 font-medium">HITL Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-400">Vector Engine</span>
                    <span className="text-white font-medium">pgvector (1536-dim)</span>
                  </div>
                </div>
              </div>

              {/* Primary Tech Stack Summary Box */}
              <div className="wireframe-box p-6 sm:p-7 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-mono text-neutral-400">
                  <Cpu className="w-4 h-4 text-red-500" />
                  <span className="text-white font-bold uppercase tracking-wider">Primary Technologies</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Full-Width Symmetrical Technology Stack & Infrastructure Section */}
          {project.techStackCategories && project.techStackCategories.length > 0 && (
            <div className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-8 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Boxes className="w-5 h-5 text-red-500" />
                  <h2 className="text-2xl font-heading font-bold text-white">
                    Complete Technology Stack & Infrastructure
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {project.techStackCategories.length} Specialized Architecture Layers
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {project.techStackCategories.map((cat, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                        <span>{cat.category}</span>
                      </div>
                      <div className="h-[1px] w-full bg-white/5" />
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item, itemIdx) => (
                        <span 
                          key={itemIdx}
                          className="text-[11px] font-mono text-neutral-300 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

