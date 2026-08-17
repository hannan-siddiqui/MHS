"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnMount?: boolean;
  delay?: number;
  duration?: number;
  chars?: string;
  as?: React.ElementType;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#_01010101XYZ";

export default function ScrambleText({
  text,
  className = "",
  scrambleOnHover = true,
  scrambleOnMount = true,
  delay = 200,
  duration = 600,
  chars = DEFAULT_CHARS,
  as: Component = "span",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    const length = text.length;
    let iteration = 0;
    const intervalTime = Math.max(20, Math.floor(duration / (length * 3)));

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

      iteration += 1 / 3;

      if (iteration >= length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, intervalTime);
  }, [text, isScrambling, duration, chars]);

  useEffect(() => {
    setDisplayText(text);
    if (scrambleOnMount) {
      const timeout = setTimeout(startScramble, delay);
      return () => {
        clearTimeout(timeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [text, scrambleOnMount, delay, startScramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Component
      className={`inline-block ${className}`}
      onMouseEnter={scrambleOnHover ? startScramble : undefined}
    >
      {displayText}
    </Component>
  );
}
