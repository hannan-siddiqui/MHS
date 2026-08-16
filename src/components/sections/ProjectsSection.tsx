"use client";

import { projects } from "@/data/portfolio";
import { ExternalLink, Code2, ArrowRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section id="projects" className="py-28 relative bg-[#0a0a0a] border-b border-white/5 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16"
      >
        
        {/* Section Header */}
        <motion.div variants={slideInLeft} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-500 block" />
              <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-bold">
                03 // FEATURED WORK & CASE STUDIES
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Architected Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-red-500">
                & Production Work
              </span>
            </h2>
          </div>

          <p className="text-xs font-mono text-neutral-400 max-w-xs leading-relaxed">
            Click any project to explore interactive architecture flow diagrams & deep-dive technical specs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              variants={fadeInUp}
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="wireframe-box p-8 rounded-2xl bg-[#111111]/80 border border-white/10 hover:border-red-500/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer backdrop-blur-md shadow-2xl relative overflow-hidden h-full"
            >
              <div>
                {/* Top Bar: Index & Links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-red-400">
                      CASE STUDY 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all"
                        aria-label="View Source Code"
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Features Highlights Bullet List */}
                {project.features && (
                  <div className="space-y-2 mb-6 pt-2 border-t border-white/5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] font-mono text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link Action */}
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-red-400 group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
