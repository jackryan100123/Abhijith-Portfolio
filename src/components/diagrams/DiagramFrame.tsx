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
      className="rounded-lg border border-border bg-bg-surface/80 p-4 overflow-x-auto"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted text-center mb-1">
        {title}
      </p>
      {subtitle && (
        <p className="font-mono text-[9px] text-text-dim text-center mb-4">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
