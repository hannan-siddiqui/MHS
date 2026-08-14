"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="md:col-span-1">
             <a
              href="/"
              className="text-2xl font-heading font-bold uppercase tracking-widest text-white hover:text-accent transition-colors flex items-center mb-6"
            >
              {personalInfo.firstName + " " + personalInfo.lastName}
              <span className="text-accent">.</span>
            </a>
            <div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mb-2">
              Contact Information:
            </div>
            <a href={`mailto:${personalInfo.email}`} className="block text-sm text-neutral-400 hover:text-white transition-colors mb-1">
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="block text-sm text-neutral-400 hover:text-white transition-colors">
              {/* {personalInfo.phone} */}
            </a>
          </div>

          {/* Column 2: Socials */}
          <div className="md:col-span-1">
            <div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mb-6">
              Socials
            </div>
            <div className="flex flex-col gap-3">
               <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
            </div>
          </div>

          {/* Column 3: Back to Top */}
          <div className="md:col-span-1 flex items-start md:justify-end">
             <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer bg-transparent border-none"
            >
              Back to Top
              <span className="text-accent group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-semibold">
          <span>Copyright © {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}. All Rights Reserved.</span>
          <span>Designed with <span className="text-accent">♥</span></span>
        </div>
      </div>
    </footer>
  );
}
