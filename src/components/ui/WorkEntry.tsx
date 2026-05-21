"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

interface WorkEntryProps {
  title: string;
  subtitle: string;
  impact: string;
  decisions: string[];
  problems: string[];
  children?: ReactNode;
  diagram?: ReactNode;
  defaultOpen?: boolean;
  accent?: "green" | "orange" | "purple";
}

const accentMap = {
  green: "border-l-accent/50 hover:border-l-accent",
  orange: "border-l-accent-3/50 hover:border-l-accent-3",
  purple: "border-l-accent-2/50 hover:border-l-accent-2",
};

export default function WorkEntry({
  title,
  subtitle,
  impact,
  decisions,
  problems,
  children,
  diagram,
  defaultOpen = false,
  accent = "green",
}: WorkEntryProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      className={`card border-l-2 ${accentMap[accent]} transition-colors duration-300 md:hover:-translate-y-0.5`}
    >
      <button
        type="button"
        onClick={() => diagram && setOpen(!open)}
        className={`w-full text-left ${diagram ? "cursor-pointer" : "cursor-default"}`}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-text-hi italic leading-snug pr-2">
              {title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-accent mt-1">{subtitle}</p>
            <p className="font-mono text-xs text-text-muted mt-3 leading-relaxed max-w-2xl">
              {impact}
            </p>
          </div>
          {diagram && (
            <IconChevronDown
              className={`w-5 h-5 text-text-muted shrink-0 mt-2 transition-transform duration-300 ${
                open ? "rotate-180 text-accent" : ""
              }`}
            />
          )}
        </div>
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-dim mb-3">
            Architecture decisions
          </p>
          <ul className="space-y-2">
            {decisions.map((d) => (
              <li
                key={d}
                className="font-mono text-xs text-text-base flex gap-2 leading-relaxed"
              >
                <span className="text-accent shrink-0">▸</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-dim mb-3">
            Problems solved
          </p>
          <ul className="space-y-2">
            {problems.map((p) => (
              <li
                key={p}
                className="font-mono text-xs text-text-muted flex gap-2 leading-relaxed"
              >
                <span className="text-accent-3 shrink-0">◆</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {children && <div className="mt-6">{children}</div>}

      <AnimatePresence>
        {open && diagram && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-border">{diagram}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
