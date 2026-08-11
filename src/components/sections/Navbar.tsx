"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navigation, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (pathname !== "/") {
      router.push(href === "#home" ? "/" : `/${href}`);
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="text-2xl font-heading font-bold uppercase tracking-widest text-white hover:text-accent transition-colors flex items-center"
        >
          {personalInfo.lastName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA - Right */}
        <div className="hidden md:block">
           <a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline px-6 py-2.5 text-xs rounded-full"
          >
            Contact Me <span className="text-accent font-sans">+</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#111111] absolute w-full animate-in slide-in-from-top-2">
          <div className="px-6 py-8 flex flex-col items-center gap-6">
            {navigation.map((item) => (
               <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-accent px-8 py-3 text-sm rounded-full w-full mt-4"
            >
              Contact Me <span className="font-sans">+</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
