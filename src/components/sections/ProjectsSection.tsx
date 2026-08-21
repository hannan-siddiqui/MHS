"use client";

import { projects } from "@/data/portfolio";
import { ExternalLink, Code2, ArrowRight, CheckCircle2, Cpu, Grid } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, cardHover, cardTap } from "@/lib/animations";
import { useRouter } from "next/navigation";
import ScrambleText from "@/components/ui/ScrambleText";
import TextReveal from "@/components/ui/TextReveal";

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-[#e4e7ec] border-b border-[#cbd1dc] overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16"
      >
        
        {/* Section Header */}
        <motion.div variants={slideInLeft} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#cbd1dc]/60 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full led-red" />
              <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest font-bold">
                <ScrambleText text="03 // PRODUCTION HARDWARE & CASE STUDIES" />
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight">
              <TextReveal text="Architected AI Systems" as="span" />
            </h2>
          </div>

          <p className="text-xs font-mono text-neutral-500 max-w-sm leading-relaxed">
            Click any modular computing unit to open interactive neural data flow diagrams & technical telemetry.
          </p>
        </motion.div>

        {/* Modular Hardware Cartridges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              variants={fadeInUp}
              whileHover={cardHover}
              whileTap={cardTap}
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="p-5 sm:p-7 rounded-3xl neu-raised flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full card-shine min-w-0"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div>
                {/* Top Module Status Bar */}
                <div className="flex items-center justify-between border-b border-[#cbd1dc]/60 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full led-red" />
                    <span className="text-xs font-mono font-bold text-neutral-800">
                      UNIT 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 z-10">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="w-8 h-8 rounded-xl neu-raised flex items-center justify-center text-neutral-700 hover:text-red-500 transition-colors"
                        aria-label="View Source Code"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="w-8 h-8 rounded-xl neu-raised flex items-center justify-center text-red-500 hover:text-red-600 transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-black text-neutral-950 uppercase mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-mono text-neutral-600 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Features in Inset Slots */}
                {project.features && (
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] font-mono text-neutral-700 neu-inset p-2.5 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack SMD Chips */}
                <div className="pt-4 border-t border-[#cbd1dc]/60 flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -1 }}
                      className="text-[10px] font-mono uppercase tracking-wider text-neutral-700 bg-white/60 px-2.5 py-1 rounded-md border border-[#cbd1dc]/60 font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Tactile Action Button */}
                <div className="w-full neu-button-primary py-3 px-4 rounded-xl text-xs font-mono font-bold tracking-wider flex items-center justify-between group-hover:bg-neutral-950">
                  <span>EXPLORE ARCHITECTURE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
