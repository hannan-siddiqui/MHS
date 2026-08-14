"use client";

import { useState } from "react";
import { navigation, personalInfo } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();

    // Close mobile dropdown
    setMobileOpen(false);

    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }

    const targetId = href.replace(/^[\/#]+/, "");

    // Defer scroll calculation slightly so touch unmount sequence doesn't block scroll
    setTimeout(() => {
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (typeof window !== "undefined") {
        window.location.href = `/${href}`;
      }
    }, 50);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-2xl font-heading font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors flex items-center"
        >
          {personalInfo.lastName}
          <span className="text-red-500">.</span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA - Right */}
        <div className="hidden md:block">
           <a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline px-6 py-2.5 text-xs rounded-full"
          >
            Contact Me <span className="text-red-500 font-sans">+</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none py-2 px-3 rounded-lg hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion AnimatePresence Open/Close Transitions */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/10 bg-[#0a0a0c]/95 backdrop-blur-xl absolute w-full left-0 right-0 overflow-hidden shadow-2xl z-50"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="px-6 py-8 flex flex-col items-center gap-6"
            >
              {navigation.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:text-red-500 transition-colors cursor-pointer py-2 px-4 w-full text-center active:text-red-500"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                href={`mailto:${personalInfo.email}`}
                onClick={(e) => handleNavClick(e, `mailto:${personalInfo.email}`)}
                className="btn-accent px-8 py-3.5 text-xs tracking-wider rounded-xl w-full mt-2 text-center block"
              >
                Contact Me <span className="font-sans text-sm ml-1">+</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
