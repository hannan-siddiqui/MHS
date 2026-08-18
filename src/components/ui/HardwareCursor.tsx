"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function HardwareCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isText, setIsText] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string>("");
  const [pings, setPings] = useState<{ id: number; x: number; y: number }[]>([]);
  const pingIdRef = useRef(0);

  // Exact immediate mouse positions for central laser dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth fluid follower reticle
  const springConfig = { damping: 26, stiffness: 320, mass: 0.45 };
  const reticleX = useSpring(mouseX, springConfig);
  const reticleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touch screens
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setMounted(true);
    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element is currently under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for text inputs / editable areas
      const isTextInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest("input") !== null ||
        target.closest("textarea") !== null;

      if (isTextInput) {
        setIsText(true);
        setIsHovered(false);
        setHoverLabel("EDIT");
        return;
      }
      setIsText(false);

      // Check for clickable interactive elements
      const clickable = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer, .neu-button-primary, .neu-button-secondary, [data-cursor]'
      );

      if (clickable) {
        setIsHovered(true);

        // Determine context-aware tactical label
        const customDataLabel = clickable.getAttribute("data-cursor");
        if (customDataLabel) {
          setHoverLabel(customDataLabel);
        } else if (clickable.classList.contains("neu-button-primary")) {
          setHoverLabel("EXEC");
        } else if (clickable.classList.contains("neu-button-secondary")) {
          setHoverLabel("SELECT");
        } else if (clickable.tagName === "A") {
          const href = (clickable as HTMLAnchorElement).getAttribute("href") || "";
          if (href.startsWith("mailto:")) {
            setHoverLabel("MAIL");
          } else if (href.startsWith("http")) {
            setHoverLabel("EXT_LINK");
          } else if (href.startsWith("#") || href.startsWith("/")) {
            setHoverLabel("NAV");
          } else {
            setHoverLabel("LINK");
          }
        } else if (clickable.tagName === "BUTTON") {
          const ariaLabel = clickable.getAttribute("aria-label")?.toUpperCase();
          if (ariaLabel && ariaLabel.length <= 8) {
            setHoverLabel(ariaLabel);
          } else {
            setHoverLabel("ACTION");
          }
        } else {
          setHoverLabel("TARGET");
        }
        return;
      }

      // Check for interactive cards or modules
      const isCard = target.closest(".neu-raised, .neu-inset, .group");
      if (isCard && (isCard.classList.contains("cursor-pointer") || isCard.getAttribute("onClick"))) {
        setIsHovered(true);
        setHoverLabel("INSPECT");
        return;
      }

      setIsHovered(false);
      setHoverLabel("");
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      // Trigger tactile red radar ping pulse
      const id = ++pingIdRef.current;
      setPings((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setPings((prev) => prev.filter((p) => p.id !== id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Click Radar Pings */}
      {pings.map((ping) => (
        <div
          key={ping.id}
          className="absolute rounded-full border border-red-500/80 -translate-x-1/2 -translate-y-1/2 animate-ping-once pointer-events-none"
          style={{
            left: ping.x,
            top: ping.y,
            width: 48,
            height: 48,
          }}
        />
      ))}

      {/* Immediate Precision Laser Diode Core */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicked
              ? "w-2.5 h-2.5 bg-red-400 shadow-[0_0_12px_#ef4444,0_0_24px_#ef4444]"
              : isHovered
              ? "w-2 h-2 bg-red-500 shadow-[0_0_8px_#ef4444,0_0_16px_rgba(239,68,68,0.9)] scale-125"
              : isText
              ? "w-1 h-4 bg-red-500 rounded-sm shadow-[0_0_8px_#ef4444]"
              : "w-1.5 h-1.5 bg-red-500 shadow-[0_0_6px_#ef4444,0_0_12px_rgba(239,68,68,0.7)]"
          }`}
        />
      </motion.div>

      {/* Trailing Hardware Reticle / HUD Lock-on Frame */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
        style={{
          x: reticleX,
          y: reticleY,
        }}
      >
        <div
          className={`relative rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
            isText
              ? "w-7 h-9 rounded-md border border-red-500/50 bg-red-500/[0.04]"
              : isHovered
              ? "w-13 h-13 border border-red-500/80 bg-red-500/[0.06] shadow-[0_0_16px_rgba(239,68,68,0.25)] scale-105"
              : isClicked
              ? "w-7 h-7 border border-red-500/90 bg-red-500/[0.12] scale-90"
              : "w-8 h-8 border border-neutral-600/40 bg-neutral-900/[0.02]"
          }`}
        >
          {/* Cardinal Crosshair Tick Marks */}
          {!isText && (
            <>
              {/* North Tick */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  isHovered || isClicked ? "w-0.5 h-2 bg-red-500" : "w-0.5 h-1.5 bg-neutral-500/60"
                }`}
              />
              {/* South Tick */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition-colors duration-200 ${
                  isHovered || isClicked ? "w-0.5 h-2 bg-red-500" : "w-0.5 h-1.5 bg-neutral-500/60"
                }`}
              />
              {/* West Tick */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-colors duration-200 ${
                  isHovered || isClicked ? "h-0.5 w-2 bg-red-500" : "h-0.5 w-1.5 bg-neutral-500/60"
                }`}
              />
              {/* East Tick */}
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transition-colors duration-200 ${
                  isHovered || isClicked ? "h-0.5 w-2 bg-red-500" : "h-0.5 w-1.5 bg-neutral-500/60"
                }`}
              />
            </>
          )}

          {/* Tactical Target Lock Brackets (When hovering interactive elements) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-[-4px] pointer-events-none"
              >
                {/* Top-Left Bracket */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-1.5 border-l-1.5 border-red-500 rounded-tl-sm" />
                {/* Top-Right Bracket */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t-1.5 border-r-1.5 border-red-500 rounded-tr-sm" />
                {/* Bottom-Left Bracket */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-1.5 border-l-1.5 border-red-500 rounded-bl-sm" />
                {/* Bottom-Right Bracket */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-1.5 border-r-1.5 border-red-500 rounded-br-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Micro HUD Telemetry Badge on Hover */}
          <AnimatePresence>
            {isHovered && hoverLabel && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 2, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#181a1e]/90 text-red-400 border border-red-500/40 px-2 py-0.5 rounded-md text-[8px] font-mono font-bold tracking-widest uppercase shadow-lg backdrop-blur-sm whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
                <span>{hoverLabel}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
