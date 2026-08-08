"use client";

import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#111111]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 relative z-10"
      >
        
        {/* Section header */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            My Experience
            <br />
            <span className="text-xl sm:text-2xl font-sans font-light text-neutral-400 normal-case mt-2 block">
              Professional Journey
            </span>
          </h2>
        </motion.div>

        {/* Cards container */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              variants={slideInLeft}
              whileHover={{ x: 5 }}
              key={exp.id}
              className="wireframe-box p-8 rounded-lg group flex flex-col h-full"
            >
              <div className="w-10 h-10 mb-6 flex items-center justify-center text-accent shrink-0">
                <Briefcase strokeWidth={1.5} className="w-8 h-8" />
              </div>
              
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-mono text-neutral-500 mt-1">
                    @ {exp.company}
                  </h4>
                </div>
                <div className="text-[10px] text-accent uppercase tracking-widest font-bold mt-1 sm:mt-2 sm:text-right">
                  {exp.duration}
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> • </span>
                  {exp.location}
                </div>
              </div>

              <ul className="text-sm text-neutral-400 leading-relaxed font-light mb-6 flex-1 list-disc pl-5 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="marker:text-accent/50">
                    {highlight}
                  </li>
                ))}
              </ul>
              
              {/* Tech stack */}
              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-1 rounded"
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
