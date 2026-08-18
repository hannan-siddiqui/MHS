"use client";

import { useState } from "react";
import { navigation, personalInfo } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Terminal, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }

    const targetId = href.replace(/^[\/#]+/, "");
    const isHomePage = pathname === "/" || pathname === "";

    if (!isHomePage) {
      if (targetId === "home" || !targetId) {
        router.push("/");
      } else {
        router.push(`/#${targetId}`);
      }
      return;
    }

    // Smooth scroll to section after closing mobile drawer
    setTimeout(() => {
      if (targetId === "home" || !targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/#${targetId}`);
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e4e7ec]/90 backdrop-blur-md border-b border-[#cbd1dc] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Hardware Stamped Brand Logo with Biometric Avatar */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl neu-raised relative overflow-hidden flex items-center justify-center p-0.5 border border-white/80 group-hover:border-red-500/70 transition-colors shrink-0">
            <Image
              src="/profile.jpg"
              alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
              width={36}
              height={36}
              className="w-full h-full object-cover rounded-[10px] filter contrast-105 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full led-red pointer-events-none" />
          </div>
          <div>
            <div className="text-base font-heading font-extrabold tracking-wider text-neutral-900 flex items-center gap-1">
              <span>{personalInfo.firstName} {personalInfo.lastName}</span>
              <span className="w-1.5 h-1.5 rounded-full led-red ml-1" />
            </div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none font-semibold">
              AI Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Flush Minimalist Hardware Tabs */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item, idx) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-1.5 group"
            >
              <span className="text-[10px] text-neutral-400 group-hover:text-red-500 font-normal">
                0{idx + 1}.
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Right Telemetry LED Indicator & Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg neu-inset flex items-center gap-2 text-[10px] font-mono text-neutral-600">
            <span className="w-2 h-2 rounded-full led-green" />
            <span className="font-semibold text-neutral-700">SYS_ONLINE : 200 OK</span>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="neu-button-primary px-5 py-2.5 text-xs rounded-xl cursor-pointer"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden px-3.5 py-2 rounded-xl neu-raised text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 hover:text-red-500 transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#cbd1dc] bg-[#e4e7ec] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navigation.map((item, idx) => (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl neu-raised text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-red-500 font-mono text-[10px]">0{idx + 1}</span>
                </a>
              ))}

              <a
                href={`mailto:${personalInfo.email}`}
                onClick={(e) => handleNavClick(e, `mailto:${personalInfo.email}`)}
                className="neu-button-primary px-6 py-3.5 text-xs rounded-xl w-full text-center mt-2"
              >
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
