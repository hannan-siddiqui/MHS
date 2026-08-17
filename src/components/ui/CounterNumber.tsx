"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterNumberProps {
  from?: number;
  to: number;
  duration?: number; // in seconds
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CounterNumber({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: CounterNumberProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = from + (to - from) * easeProgress;
            
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
