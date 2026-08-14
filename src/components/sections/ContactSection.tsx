"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-[#08080a] border-b border-white/10 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1000px] mx-auto px-6 relative z-10 text-center"
      >
        
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-8 leading-tight">
          Ready to Collaborate?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-red-500 font-light">
            Let&apos;s Build Intelligent Systems Together.
          </span>
        </motion.h2>
        
        <motion.div variants={fadeInUp} className="mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="btn-accent px-10 py-4 text-xs tracking-wider rounded-xl shadow-xl shadow-red-500/25 inline-flex"
          >
            Get In Touch <span className="font-sans text-base leading-none ml-1">→</span>
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
