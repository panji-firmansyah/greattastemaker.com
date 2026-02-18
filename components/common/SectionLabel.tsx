"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionLabelProps {
  children: string;
  onDark?: boolean;
  className?: string;
}

export function SectionLabel({ children, onDark = false, className }: SectionLabelProps) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "font-sans text-[0.75rem] font-medium uppercase tracking-[0.1em] mb-4",
        "text-[var(--accent)]",
        className
      )}
    >
      {children}
    </motion.p>
  );
}
