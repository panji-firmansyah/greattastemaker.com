"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { startContent } from "@/lib/content";

export function ThankYouState() {
  const { thankYou } = startContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-content-form mx-auto"
    >
      <div className="rounded-lg border border-[var(--success)] bg-bg-primary p-6 lg:p-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-[var(--success)]" />
          <h2 className="font-serif font-semibold text-[var(--text-h3)] leading-[1.15] tracking-[-0.02em] text-text-primary">
            {thankYou.headline}
          </h2>
        </div>

        <div className="space-y-4">
          {thankYou.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2">
          {thankYou.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
