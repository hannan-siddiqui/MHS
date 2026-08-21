"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HardwareCursor() {
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with a precision mouse/trackpad
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setMounted(true);
    document.body.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicked = false;
    let isHidden = true;
    let hoverText = "";
    let animationFrameId: number;

    const updateRing = () => {
      // Snappy, high-refresh lerp for responsive tracking without sluggish drag
      const lerpFactor = 0.35;
      ringX += (mouseX - ringX) * lerpFactor;
      ringY += (mouseY - ringY) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isClicked ? 0.85 : isHovered ? 1.25 : 1
        })`;
        ringRef.current.style.borderColor = isHovered ? "rgba(239, 68, 68, 0.9)" : "rgba(120, 130, 150, 0.45)";
        ringRef.current.style.backgroundColor = isHovered ? "rgba(239, 68, 68, 0.08)" : "transparent";
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(22px, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);

    // Instant 0ms dot movement on mousemove (pure GPU transform, zero React re-renders)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isHidden) {
        isHidden = false;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
        if (labelRef.current) labelRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Ultra-fast event-based hover detection (only triggers on enter/exit, NOT every pixel move)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer, .neu-button-primary, .neu-button-secondary, [data-cursor]'
      );

      if (interactive) {
        isHovered = true;
        const customLabel = interactive.getAttribute("data-cursor");
        if (customLabel) {
          hoverText = customLabel;
        } else if (interactive.classList.contains("neu-button-primary")) {
          hoverText = "EXEC";
        } else if (interactive.tagName === "A") {
          hoverText = "LINK";
        } else if (interactive.tagName === "BUTTON") {
          hoverText = "ACTION";
        } else {
          hoverText = "SELECT";
        }

        if (labelRef.current) {
          labelRef.current.textContent = hoverText;
          labelRef.current.style.display = "flex";
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer, .neu-button-primary, .neu-button-secondary, [data-cursor]'
      );

      if (interactive) {
        isHovered = false;
        hoverText = "";
        if (labelRef.current) {
          labelRef.current.style.display = "none";
        }
      }
    };

    const handleMouseDown = () => {
      isClicked = true;
    };

    const handleMouseUp = () => {
      isClicked = false;
    };

    const handleMouseLeave = () => {
      isHidden = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (labelRef.current) labelRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isHidden = false;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none">
      {/* 1. Instant 0ms Red Laser Dot Diode */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444,0_0_14px_rgba(239,68,68,0.8)] opacity-0 transition-opacity duration-150 will-change-transform"
      />

      {/* 2. Snappy Hardware Targeting Reticle */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-neutral-500/50 opacity-0 transition-[border-color,background-color] duration-150 will-change-transform flex items-center justify-center"
      >
        {/* Cardinal Tick Marks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-red-500/70" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1.5 bg-red-500/70" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-0.5 w-1.5 bg-red-500/70" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-0.5 w-1.5 bg-red-500/70" />
      </div>

      {/* 3. Micro HUD Target Telemetry Tag */}
      <div
        ref={labelRef}
        className="absolute top-0 left-0 hidden items-center gap-1 bg-[#181a1e]/90 text-red-400 border border-red-500/40 px-2 py-0.5 rounded-md text-[8px] font-mono font-bold tracking-widest uppercase shadow-md backdrop-blur-sm opacity-0 will-change-transform"
      />
    </div>
  );
}
