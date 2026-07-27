"use client";

import { summary, personalInfo, skills } from "@/data/portfolio";
import Image from "next/image";

export default function HeroSection() {
  const allSkills = skills.flatMap((cat) => cat.skills.map((s) => s.name));
  const marqueeText = allSkills.join(" • ") + " • ";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-[100px] relative overflow-hidden"
    >
      {/* Main content area */}
      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left — Text content */}
        <div className="flex-1 flex flex-col justify-center lg:pt-10 min-w-0 w-full relative z-20">
          <h1 className="text-[clamp(1.8rem,6vw,4.2rem)] font-heading font-extrabold uppercase leading-[1.1] tracking-tight mb-8">
            <span className="whitespace-nowrap">AI<span className="text-accent">/</span>Software</span>
            <br />
            <span className="text-white">Engineer</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mb-10 font-mono">
            {summary.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-accent px-8 py-3.5 text-sm"
            >
              Explore My Portfolio <span className="font-sans">+</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-outline px-8 py-3.5 text-sm"
            >
              Hire Me <span className="text-accent font-sans">+</span>
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex-1 flex justify-center lg:justify-end w-full relative">
           <div 
             className="relative w-full max-w-[500px] aspect-[4/5]"
             style={{
               maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
               WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
             }}
           >
              <Image
                src="/hannan.jpg"
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                fill
                className="object-cover object-top opacity-80"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />
           </div>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="w-full border-t border-b border-white/5 bg-[#111111] mt-12 relative z-20 overflow-hidden">
        <div className="py-6 flex whitespace-nowrap animate-marquee">
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-600 mr-8 select-none">
            {marqueeText}
          </span>
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-600 mr-8 select-none">
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
