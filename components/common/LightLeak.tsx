"use client";

import { motion } from "framer-motion";

export function LightLeak() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <motion.div
                className="absolute -top-[20%] -left-[10%] h-[80vh] w-[80vh] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]"
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-[40%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-[var(--accent-hover)] opacity-[0.04] blur-[100px]"
                animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 0.9, 1.05, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
}
