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
      <div className="min-h-screen bg-[#e4e7ec] pt-28 pb-24 px-6 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10 space-y-10">
          
          {/* Top Bar: Back Link */}
          <div>
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-800 hover:text-red-600 transition-colors group px-4 py-2 rounded-xl neu-raised"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-500" />
              <span>Back to Hardware Cartridges</span>
            </Link>
          </div>

          {/* Project Title Header in Raised Module */}
          <div className="p-8 rounded-3xl neu-raised space-y-4">
            <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full led-red" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
                  CASE STUDY UNIT // ARCHITECTURE SPECIFICATION
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">ID: {project.id}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 font-mono leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Diagram Box (Full Width) */}
          {project.architecture && (
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-800 font-bold">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span>System Architecture & Data Bus Flow</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-600">
                  <span className="w-2 h-2 rounded-full led-green" />
                  <span>Interactive Flow Map</span>
                </div>
              </div>

              <div className="rounded-3xl neu-raised p-4 overflow-hidden">
                <div className="rounded-2xl border border-[#cbd1dc] overflow-hidden bg-white/80">
                  <AnimatedFlowDiagram 
                    nodes={project.architecture.nodes} 
                    edges={project.architecture.edges} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Key Architecture Pillars & Business Impact */}
          {project.pillars && project.pillars.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl neu-raised space-y-6">
              <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl sm:text-2xl font-heading font-black text-neutral-950 uppercase">
                    Architecture Pillars & Impact
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
                  HARDWARE VALIDATED
                </span>
              </div>

              <div className="grid gap-4">
                {project.pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl neu-inset space-y-3 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#cbd1dc]/50 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full led-red" />
                        <h3 className="font-heading font-bold text-base text-neutral-950 uppercase">
                          {pillar.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        <span>Metrics Verified</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-4 text-xs font-mono">
                      <div className="md:col-span-7 space-y-1">
                        <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                          Technical Implementation
                        </span>
                        <p className="text-neutral-800 leading-relaxed font-sans text-xs">
                          {pillar.implementation}
                        </p>
                      </div>
                      <div className="md:col-span-5 space-y-1 bg-white/70 p-3 rounded-xl border border-[#cbd1dc]/60">
                        <span className="text-red-600 uppercase tracking-wider text-[10px] font-bold">
                          Impact & Metrics
                        </span>
                        <p className="text-neutral-900 font-semibold leading-relaxed font-sans text-xs">
                          {pillar.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Symmetrical Two-Column Section */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Executive Summary */}
              <div className="p-8 rounded-3xl neu-raised space-y-5">
                <div className="flex items-center gap-2 border-b border-[#cbd1dc]/60 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full led-red" />
                  <h2 className="text-xl font-heading font-black text-neutral-950 uppercase">
                    Executive Scope
                  </h2>
                </div>

                <div className="space-y-3 text-neutral-700 font-mono text-xs sm:text-sm leading-relaxed">
                  {project.detailedDescription ? (
                    project.detailedDescription.map((p, idx) => (
                      <p key={idx} className="p-3 rounded-xl neu-inset">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="p-3 rounded-xl neu-inset">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Core Features */}
              {project.features && (
                <div className="p-8 rounded-3xl neu-raised space-y-5">
                  <div className="flex items-center gap-2 border-b border-[#cbd1dc]/60 pb-3">
                    <Layers className="w-4 h-4 text-red-500" />
                    <h2 className="text-xl font-heading font-black text-neutral-950 uppercase">
                      Functional Capabilities
                    </h2>
                  </div>

                  <div className="grid gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 rounded-xl neu-inset text-xs font-mono text-neutral-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Repository & Access Box */}
              <div className="p-6 rounded-3xl neu-raised space-y-4">
                <div className="flex items-center gap-2 border-b border-[#cbd1dc]/60 pb-3 text-xs font-mono text-neutral-600 font-bold">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span className="uppercase">Repository Access</span>
                </div>

                <div className="space-y-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-button-secondary py-3 px-4 rounded-xl text-xs font-mono font-bold w-full"
                    >
                      <Code2 className="w-4 h-4 text-red-500" />
                      <span>View Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-button-primary py-3 px-4 rounded-xl text-xs font-mono font-bold w-full"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Launch Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* System Specs Box */}
              <div className="p-6 rounded-3xl neu-raised space-y-4">
                <div className="flex items-center gap-2 border-b border-[#cbd1dc]/60 pb-3 text-xs font-mono text-neutral-600 font-bold">
                  <Activity className="w-4 h-4 text-red-500" />
                  <span className="uppercase">Hardware Telemetry</span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
                    <span className="text-neutral-500">Status</span>
                    <span className="text-neutral-900 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full led-green" />
                      VERIFIED
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
                    <span className="text-neutral-500">Flow Nodes</span>
                    <span className="text-neutral-900 font-bold">{project.architecture?.nodes.length || 0} Modules</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
                    <span className="text-neutral-500">Vector Engine</span>
                    <span className="text-neutral-900 font-bold">pgvector 1536-D</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Box */}
              <div className="p-6 rounded-3xl neu-raised space-y-4">
                <div className="flex items-center gap-2 border-b border-[#cbd1dc]/60 pb-3 text-xs font-mono text-neutral-600 font-bold">
                  <Cpu className="w-4 h-4 text-red-500" />
                  <span className="uppercase">Primary Components</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-neutral-800 bg-white/70 border border-[#cbd1dc] px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Full-Width Technology Stack & Infrastructure Section */}
          {project.techStackCategories && project.techStackCategories.length > 0 && (
            <div className="p-8 rounded-3xl neu-raised space-y-6 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#cbd1dc]/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <Boxes className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl sm:text-2xl font-heading font-black text-neutral-950 uppercase">
                    Integrated Stack Layers
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500">
                  {project.techStackCategories.length} Architecture Layers
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {project.techStackCategories.map((cat, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl neu-inset flex flex-col justify-between space-y-3"
                  >
                    <div className="text-xs font-mono text-neutral-900 font-bold uppercase tracking-wider border-b border-[#cbd1dc]/60 pb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full led-red" />
                      <span>{cat.category}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item, itemIdx) => (
                        <span 
                          key={itemIdx}
                          className="text-[11px] font-mono text-neutral-800 bg-white/80 px-2 py-0.5 rounded border border-[#cbd1dc]/70"
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
