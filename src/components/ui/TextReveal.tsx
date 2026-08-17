"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function TextReveal({
  text,
  className = "",
  wordClassName = "",
  delay = 0.1,
  stagger = 0.05,
  duration = 0.5,
  as: Component = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
        duration: duration,
      },
    },
  };

  const MotionComponent = motion[Component as keyof typeof motion] as any;

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`inline-block ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
