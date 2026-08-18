"use client";

import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursor?: string;
  prefix?: string;
}

export default function Typewriter({
  words,
  className = "",
  cursorClassName = "text-red-500",
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2200,
  cursor = "|",
  prefix = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!words || words.length === 0 || !mounted) return;

    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        const nextText = currentWord.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          setIsPaused(true);
        }
      } else {
        // Deleting backward
        const prevText = currentWord.substring(0, text.length - 1);
        setText(prevText);

        if (prevText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, isPaused, mounted]);

  const displayText = mounted ? text : words[0] || "";

  return (
    <span className={`inline-flex items-center whitespace-nowrap ${className}`}>
      {prefix && <span className="mr-1.5 opacity-80 shrink-0">{prefix}</span>}
      <span className="relative inline-flex items-center whitespace-nowrap">
        <span className="whitespace-nowrap">{displayText}</span>
        <span 
          className={`inline-block ml-1 font-mono animate-blink-cursor select-none shrink-0 ${cursorClassName}`}
          style={{
            textShadow: "0 0 10px rgba(239, 68, 68, 0.8)",
          }}
        >
          {cursor}
        </span>
      </span>
    </span>
  );
}
