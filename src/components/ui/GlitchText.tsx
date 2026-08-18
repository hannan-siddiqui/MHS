"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

export default function GlitchText({
  text,
  className = "",
  glitchOnHover = true,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const chars = "!<>-_/[]{}—=+*^?#010101XYZ_";

  const startGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iteration = 0;
    const maxIterations = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 28);
  }, [text, isGlitching, chars]);

  useEffect(() => {
    setDisplayText(text);
    const timeout = setTimeout(startGlitch, 400);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, startGlitch]);

  return (
    <span
      className={`inline-block select-none transition-colors ${className}`}
      onMouseEnter={glitchOnHover ? startGlitch : undefined}
      data-text={text}
    >
      {displayText}
    </span>
  );
}
