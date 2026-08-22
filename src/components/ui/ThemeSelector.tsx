"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, themeOptions, ThemeMode } from "@/lib/theme";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Sparkles, Check, ChevronDown } from "lucide-react";

export default function ThemeSelector({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-50">
      {/* Tactile Hardware Theme Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded-xl neu-raised flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-main)] transition-all cursor-pointer shadow-sm border border-white/80"
        title="Change Hardware Color Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
          style={{
            backgroundColor: currentTheme.color,
            boxShadow: `0 0 8px ${currentTheme.color}, 0 0 14px ${currentTheme.glow}`,
          }}
        />
        <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-semibold">
          {currentTheme.name}
        </span>
        <ChevronDown className={`w-3 h-3 text-[var(--text-subtle)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      {/* Hardware Theme Presets Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-72 max-h-[80vh] overflow-y-auto p-3 rounded-2xl neu-raised-thick shadow-2xl border border-[var(--border-highlight)] bg-[var(--bg-surface-thick)] space-y-2.5 z-50 font-mono"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)] px-1">
              <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-subtle)] font-bold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>CHASSIS THEMES</span>
              </div>
              <span className="text-[9px] text-[var(--text-subtle)] font-mono font-bold">9 PALETTES</span>
            </div>

            {/* Dark Themes Section */}
            <div className="space-y-1">
              <div className="text-[8px] uppercase tracking-widest text-[var(--text-subtle)] font-bold px-1.5 py-0.5 flex items-center gap-1">
                <span>🌑 DARK THEMES</span>
              </div>
              <div className="flex flex-col gap-1">
                {themeOptions
                  .filter((opt) => opt.category === "dark")
                  .map((opt) => {
                    const isSelected = opt.id === theme;

                    return (
                      <motion.button
                        key={opt.id}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setTheme(opt.id);
                          setIsOpen(false);
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-xl flex items-center justify-between transition-all cursor-pointer text-left ${
                          isSelected
                            ? "neu-inset bg-[var(--bg-inset)] text-[var(--text-main)] font-bold"
                            : "neu-raised hover:bg-[var(--bg-chip)] text-[var(--text-muted)] font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{
                              backgroundColor: opt.color,
                              boxShadow: isSelected
                                ? `0 0 8px ${opt.color}, 0 0 16px ${opt.glow}`
                                : `0 0 4px ${opt.color}`,
                            }}
                          />
                          <div>
                            <div className="text-xs leading-tight font-bold text-[var(--text-main)]">
                              {opt.name}
                            </div>
                            <div className="text-[8px] text-[var(--text-subtle)] font-mono leading-none mt-0.5">
                              {opt.codename}
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                            style={{ backgroundColor: opt.color }}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
              </div>
            </div>

            {/* Light Theme Section */}
            <div className="space-y-1 pt-1.5 border-t border-[var(--border-subtle)]">
              <div className="text-[8px] uppercase tracking-widest text-[var(--text-subtle)] font-bold px-1.5 py-0.5 flex items-center gap-1">
                <span>⚪ LIGHT THEME</span>
              </div>
              <div className="flex flex-col gap-1">
                {themeOptions
                  .filter((opt) => opt.category === "light")
                  .map((opt) => {
                    const isSelected = opt.id === theme;

                    return (
                      <motion.button
                        key={opt.id}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setTheme(opt.id);
                          setIsOpen(false);
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-xl flex items-center justify-between transition-all cursor-pointer text-left ${
                          isSelected
                            ? "neu-inset bg-[var(--bg-inset)] text-[var(--text-main)] font-bold"
                            : "neu-raised hover:bg-[var(--bg-chip)] text-[var(--text-muted)] font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{
                              backgroundColor: opt.color,
                              boxShadow: isSelected
                                ? `0 0 8px ${opt.color}, 0 0 16px ${opt.glow}`
                                : `0 0 4px ${opt.color}`,
                            }}
                          />
                          <div>
                            <div className="text-xs leading-tight font-bold text-[var(--text-main)]">
                              {opt.name}
                            </div>
                            <div className="text-[8px] text-[var(--text-subtle)] font-mono leading-none mt-0.5">
                              {opt.codename}
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                            style={{ backgroundColor: opt.color }}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
              </div>
            </div>

            {/* Quick Tip */}
            <div className="pt-1.5 border-t border-[var(--border-subtle)] text-[8px] text-[var(--text-subtle)] text-center uppercase tracking-wider font-semibold">
              PERSISTENT HARDWARE TELEMETRY
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
