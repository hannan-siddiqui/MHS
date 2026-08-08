"use client";

import { summary, skills } from "@/data/portfolio";
import { Code2, Cpu, Sparkles, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer, scaleUp } from "@/lib/animations";

export default function AboutSection() {
  const topCategories = skills.slice(0, 4);
  const icons = [Code2, Cpu, Sparkles, Terminal]; // Using lucide-react icons for the red accents

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#111111]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24"
      >
        
        {/* Left — Intro & Geometric Shape */}
        <motion.div variants={slideInLeft} className="flex-1 lg:max-w-md">
          {/* Wireframe isometric SVG decoration */}
          <div className="mb-10 w-32 h-32 opacity-80 text-white">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-1">
              {/* Isometric Cube Wireframe */}
              <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" />
              <path d="M50 50 L10 30 M50 50 L90 30 M50 50 L50 90" strokeDasharray="4 4" />
              {/* Floating red accent box */}
              <path d="M70 15 L85 22.5 L85 37.5 L70 45 L55 37.5 L55 22.5 Z" className="stroke-accent" />
            </svg>
          </div>

          <div className="mb-2">
            <span className="text-[10px] text-accent uppercase tracking-widest font-bold">
              About Me
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
            A Passionate
            <br />
            AI & Software Engineer
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed font-light">
            {summary.description}
          </p>
        </motion.div>

        {/* Right — Expertise Grid */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-heading font-bold text-white text-center lg:text-left">
              Expertise
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {topCategories.map((cat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  variants={scaleUp}
                  whileHover={{ scale: 1.02 }}
                  key={cat.category}
                  className="wireframe-box p-8 rounded-lg group flex flex-col h-full"
                >
                  <div className="w-10 h-10 mb-6 flex items-center justify-center text-accent shrink-0">
                    <Icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light mb-6">
                    {cat.description}
                  </p>
                  
                  {/* Skills List */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-1 rounded"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
