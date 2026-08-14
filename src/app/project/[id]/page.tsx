import React from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Code2, ArrowLeft, CheckCircle2, ShieldCheck, Layers, Cpu, Sparkles } from "lucide-react";
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
      <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-20 px-6 relative overflow-hidden">
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
                SYSTEM CASE STUDY & ARCHITECTURE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Diagram Box */}
          {project.architecture && (
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span>System Architecture & Data Flow</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                  Interactive Flow Map
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#111111]/90 backdrop-blur-md">
                <AnimatedFlowDiagram 
                  nodes={project.architecture.nodes} 
                  edges={project.architecture.edges} 
                />
              </div>
            </div>
          )}

          {/* Main Body: Overview & Sidebar */}
          <div className="grid lg:grid-cols-12 gap-12 pt-4">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <h2 className="text-2xl font-heading font-bold text-white">
                    System Overview
                  </h2>
                </div>

                <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-base">
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

              {/* Key Features */}
              {project.features && (
                <div className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Layers className="w-5 h-5 text-red-500" />
                    <h2 className="text-2xl font-heading font-bold text-white">
                      Key System Features
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-neutral-200 font-light text-base leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tech Stack Box */}
              <div className="wireframe-box p-6 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-mono text-neutral-400">
                  <Cpu className="w-4 h-4 text-red-500" />
                  <span className="text-white font-bold uppercase tracking-wider">Tech Stack & Infrastructure</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
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

              {/* Links & Source Code Box */}
              <div className="wireframe-box p-6 rounded-2xl bg-[#111111]/80 border border-white/10 space-y-4">
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
                      className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl text-white text-xs font-mono transition-all group"
                    >
                      <Code2 className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                      <span>View Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-mono transition-all font-medium shadow-lg shadow-red-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live System Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* System Specs Box */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Architecture Status</span>
                  <span className="text-red-400 font-bold">Verified</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Diagram Nodes</span>
                  <span className="text-white">{project.architecture?.nodes.length || 0} Components</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
