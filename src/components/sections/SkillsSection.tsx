"use client";

import { useState } from "react";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleUp } from "@/lib/animations";

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skills[activeIndex];

  return (
    <section id="skills" className="px-6 py-24 relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto relative z-10"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="flex items-end gap-6 mb-16">
          <span className="text-7xl sm:text-9xl font-extrabold leading-none text-white/5 select-none">
            02
          </span>
          <div className="pb-2 sm:pb-4">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              Skills
            </h2>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Technical expertise
            </div>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
          {skills.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest cursor-pointer transition-all duration-300 border ${
                i === activeIndex
                  ? "bg-white text-black border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-sm">{cat.icon}</span> {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills wrapper */}
        <motion.div variants={fadeInUp} className="premium-glass p-1">
          <div className="bg-[#09090b]/80 rounded-[1.3rem] overflow-hidden">
            {/* Category description */}
            <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <span className="text-sm font-mono text-zinc-400">
                {activeCategory.description} — <span className="text-white">{activeCategory.skills.length}</span> skills
              </span>
            </div>

            {/* Skills grid */}
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 p-2" 
              key={activeIndex}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  variants={scaleUp}
                  whileHover={{ y: -5 }}
                  key={skill.name}
                  className="p-6 m-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-base font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    {skill.proficiency && (
                      <span className="text-xs font-mono text-zinc-500">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>

                  {/* Premium progress bar */}
                  {skill.proficiency && (
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-zinc-500 to-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
