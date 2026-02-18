"use client";

import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="font-mono text-4xl font-bold text-zinc-50 lg:text-5xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
