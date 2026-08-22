"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = 
  | "stealth" 
  | "tokyo-noir" 
  | "cyber-gold" 
  | "cosmic-nebula" 
  | "toxic-matrix" 
  | "mariana-abyss" 
  | "magma-forge" 
  | "glacial-frost" 
  | "crimson";

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  codename: string;
  wavelength: string;
  color: string;
  glow: string;
  bgHex: string;
  badge: string;
  category: "dark" | "light";
}

export const themeOptions: ThemeOption[] = [
  {
    id: "stealth",
    name: "Stealth Void",
    codename: "OLED_CYBER_000",
    wavelength: "DARK",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.85)",
    bgHex: "#090b10",
    badge: "🌑 STEALTH",
    category: "dark",
  },
  {
    id: "tokyo-noir",
    name: "Tokyo Blood Noir",
    codename: "RUBY_LASER_660",
    wavelength: "660nm",
    color: "#ff2a4b",
    glow: "rgba(255, 42, 75, 0.85)",
    bgHex: "#0a0a0d",
    badge: "🩸 TOKYO NOIR",
    category: "dark",
  },
  {
    id: "cyber-gold",
    name: "Cyberpunk Gold",
    codename: "VOLT_NEON_580",
    wavelength: "580nm",
    color: "#facc15",
    glow: "rgba(250, 204, 21, 0.85)",
    bgHex: "#0d0e12",
    badge: "⚡ CYBER GOLD",
    category: "dark",
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    codename: "ASTRAL_VIOLET_410",
    wavelength: "410nm",
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.85)",
    bgHex: "#090616",
    badge: "🌌 NEBULA",
    category: "dark",
  },
  {
    id: "toxic-matrix",
    name: "Toxic Matrix",
    codename: "TERMINAL_520",
    wavelength: "520nm",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.85)",
    bgHex: "#040a06",
    badge: "🧪 MATRIX",
    category: "dark",
  },
  {
    id: "mariana-abyss",
    name: "Mariana Abyss",
    codename: "OCEAN_AQUA_470",
    wavelength: "470nm",
    color: "#00f5d4",
    glow: "rgba(0, 245, 212, 0.85)",
    bgHex: "#040b17",
    badge: "🌊 MARIANA",
    category: "dark",
  },
  {
    id: "magma-forge",
    name: "Magma Forge",
    codename: "BLAST_LAVA_610",
    wavelength: "610nm",
    color: "#ff5722",
    glow: "rgba(255, 87, 34, 0.85)",
    bgHex: "#100906",
    badge: "🌋 MAGMA",
    category: "dark",
  },
  {
    id: "glacial-frost",
    name: "Glacial Frost",
    codename: "ARCTIC_ICE_450",
    wavelength: "450nm",
    color: "#67e8f9",
    glow: "rgba(103, 232, 249, 0.85)",
    bgHex: "#080d14",
    badge: "❄️ GLACIAL",
    category: "dark",
  },
  {
    id: "crimson",
    name: "Titanium Industrial",
    codename: "CLASSIC_LIGHT_650",
    wavelength: "650nm",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.8)",
    bgHex: "#e4e7ec",
    badge: "🔴 TITANIUM",
    category: "light",
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
  currentTheme: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "crimson",
  setTheme: () => {},
  cycleTheme: () => {},
  currentTheme: themeOptions[0],
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("crimson");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("hannan-portfolio-theme") as ThemeMode | null;
    if (saved && themeOptions.some((t) => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "crimson");
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("hannan-portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const cycleTheme = () => {
    const currentIndex = themeOptions.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    setTheme(themeOptions[nextIndex].id);
  };

  const currentTheme = themeOptions.find((t) => t.id === theme) || themeOptions[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
