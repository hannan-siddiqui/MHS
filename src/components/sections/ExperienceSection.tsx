"use client";

import { experiences } from "@/data/portfolio";
import { Briefcase, CheckCircle2, Calendar, MapPin, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer, cardHover, cardTap } from "@/lib/animations";
import ScrambleText from "@/components/ui/ScrambleText";
import TextReveal from "@/components/ui/TextReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-[#e4e7ec] border-b border-[#cbd1dc] overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16"
      >
        
        {/* Section header */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#cbd1dc]/60 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full led-red" />
              <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest font-bold">
                <ScrambleText text="04 // CAREER LOG & HARDWARE REGISTERS" />
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight">
              <TextReveal text="Execution Track Record" as="span" />
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="w-2 h-2 rounded-full led-green" />
            <span>2+ YEARS ACTIVE DEPLOYMENTS</span>
          </div>
        </motion.div>

        {/* Career Register Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 relative">
          {/* Timeline connector line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-red-500/60 via-[#cbd1dc] to-transparent hidden sm:block" />

          {experiences.map((exp, expIdx) => (
            <motion.div
              variants={slideInLeft}
              whileHover={cardHover}
              whileTap={cardTap}
              key={exp.id}
              className="p-5 sm:p-8 md:p-10 sm:ml-4 rounded-3xl neu-raised flex flex-col h-full relative overflow-hidden space-y-5 sm:space-y-6 card-shine min-w-0"
            >
              {/* Timeline node */}
              <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full led-red animate-led-pulse hidden sm:block" style={{ animationDelay: `${expIdx * 0.4}s` }} />
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#cbd1dc]/60 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-neutral-900 shrink-0">
                    <Cpu className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-black text-neutral-950 uppercase">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-mono text-red-500 font-bold tracking-wider">
                      @ {exp.company}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600">
                  <span className="px-3 py-1.5 rounded-lg neu-inset flex items-center gap-1.5 font-semibold text-neutral-800">
                    <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-lg neu-inset flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Highlights in Stamped Slots */}
              <div className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl neu-inset text-xs sm:text-sm font-mono text-neutral-800 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-[#cbd1dc]/60 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider text-neutral-800 bg-white/70 px-3 py-1 rounded-md border border-[#cbd1dc]/60 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}
