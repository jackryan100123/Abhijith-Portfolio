"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconAward } from "@tabler/icons-react";

export default function AwardBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg border border-accent/25 bg-gradient-to-r from-accent/10 via-bg-surface to-accent/5 p-5 md:p-6"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative flex flex-col sm:flex-row gap-4 items-start">
        <div className="shrink-0 p-2.5 rounded-md bg-accent/15 border border-accent/30">
          <IconAward className="w-6 h-6 text-accent" stroke={1.5} />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Leadership recognition · Mission-critical delivery
          </p>
          <p className="font-serif text-lg md:text-xl text-text-hi italic leading-snug">
            Commended by government leadership for shipping secure, production-grade
            systems ahead of schedule — under high-stakes operational requirements
            comparable to enterprise SLA environments.
          </p>
          <p className="mt-3 font-mono text-xs text-text-muted leading-relaxed">
            Delivered ahead of timeline · Zero critical security findings at launch ·
            System in active operational use for real-time decision support
          </p>
        </div>
      </div>
    </motion.div>
  );
}
