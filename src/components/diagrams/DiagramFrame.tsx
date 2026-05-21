"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export default function DiagramFrame({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-bg-surface/80 p-3 sm:p-4 w-full min-w-0 max-w-full overflow-hidden"
    >
      <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-text-muted text-center mb-1 px-1">
        {title}
      </p>
      {subtitle && (
        <p className="font-mono text-[8px] sm:text-[9px] text-text-dim text-center mb-3 sm:mb-4 px-1 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="diagram-scroll">
        {children}
      </div>
      <p className="diagram-hint">Swipe horizontally to explore →</p>
    </motion.div>
  );
}
