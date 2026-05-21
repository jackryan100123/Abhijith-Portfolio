"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

interface TimelineEntryProps {
  company: string;
  role: string;
  period: string;
  client?: string;
  children: ReactNode;
  diagram?: ReactNode;
  defaultOpen?: boolean;
}

export default function TimelineEntry({
  company,
  role,
  period,
  client,
  children,
  diagram,
  defaultOpen = false,
}: TimelineEntryProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card border-l-2 border-l-accent/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <div>
          <div className="font-mono text-xs text-accent mb-1">{period}</div>
          <h3 className="font-serif text-xl text-text-hi italic">{company}</h3>
          <p className="font-mono text-sm text-text-muted mt-1">{role}</p>
          {client && (
            <p className="font-mono text-xs text-text-dim mt-1">
              Client: {client}
            </p>
          )}
        </div>
        {diagram && (
          <IconChevronDown
            className={`w-5 h-5 text-text-muted shrink-0 mt-1 transition-transform group-hover:text-accent ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      <div className="mt-6 space-y-4">{children}</div>

      <AnimatePresence>
        {open && diagram && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-border">{diagram}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
