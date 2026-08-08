"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-[#111111] overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1000px] mx-auto px-6 relative z-10 text-center"
      >
        
        {/* Wireframe decorations */}
        <div className="absolute left-0 top-10 opacity-30 pointer-events-none hidden md:block text-white">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="stroke-current stroke-1">
             <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" strokeDasharray="4 4" />
             <path d="M50 50 L10 30 M50 50 L90 30 M50 50 L50 90" />
          </svg>
        </div>
        
        <div className="absolute right-0 bottom-10 opacity-30 pointer-events-none hidden md:block text-accent">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="stroke-current stroke-1">
             <path d="M20 20 L80 20 L80 80 L20 80 Z" />
             <path d="M30 30 L90 30 L90 90 L30 90 Z" strokeDasharray="2 2" />
             <path d="M20 20 L30 30 M80 20 L90 30 M80 80 L90 90 M20 80 L30 90" />
          </svg>
        </div>

        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-8 leading-tight">
          Ready to Collaborate?
          <br />
          <span className="text-neutral-400 font-light">Let&apos;s Turn Your Ideas into Art!</span>
        </motion.h2>
        
        <motion.div variants={fadeInUp} className="mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="btn-accent px-10 py-4 text-base rounded-full inline-flex"
          >
            Contact Me <span className="font-sans text-xl leading-none ml-1">+</span>
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
