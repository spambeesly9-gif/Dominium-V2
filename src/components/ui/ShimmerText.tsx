"use client";

import { motion } from "motion/react";

type Variant =
  | "default"
  | "white"
  | "navy"
  | "lime";

interface ShimmerTextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: Variant;
  duration?: number;
  delay?: number;
}

const variantColors: Record<Variant, { base: string; highlight: string }> = {
  default: { base: "#121212",  highlight: "rgba(255,255,255,0.72)" },
  white:   { base: "#ffffff",  highlight: "rgba(200,220,255,0.95)" },
  navy:    { base: "#000435",  highlight: "rgba(255,255,255,0.72)" },
  lime:    { base: "#E3E3A6",  highlight: "rgba(255,255,255,0.8)"  },
};

export function ShimmerText({
  children,
  style,
  variant = "default",
  duration = 1.5,
  delay = 1.5,
}: ShimmerTextProps) {
  const { base, highlight } = variantColors[variant];

  return (
    <motion.span
      style={{
        WebkitTextFillColor: "transparent",
        background: `${base} linear-gradient(to right, ${base} 0%, ${highlight} 40%, ${highlight} 60%, ${base} 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 100%",
        display: "inline",
        ...style,
      } as React.CSSProperties}
      initial={{ backgroundPositionX: "250%" }}
      animate={{ backgroundPositionX: ["-100%", "250%"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

export default ShimmerText;
