"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left pointer-events-none"
      style={{ scaleX }}
    >
      <div className="h-full w-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
    </motion.div>
  );
}
