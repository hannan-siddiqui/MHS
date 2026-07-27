"use client";

import { useEffect, useRef, useState } from "react";

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

  const chars = "!<>-_\\/[]{}—=+*^?#_アイウエオカキクケコ";

  const startGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iteration = 0;
    const maxIterations = text.length;

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
    }, 30);
  };

  useEffect(() => {
    // Initial glitch on mount
    const timeout = setTimeout(startGlitch, 500);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className={`glitch-text ${className}`}
      onMouseEnter={glitchOnHover ? startGlitch : undefined}
      data-text={text}
    >
      {displayText}
    </span>
  );
}
