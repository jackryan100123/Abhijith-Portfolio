"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TerminalCursor from "@/components/ui/TerminalCursor";
import FadeIn from "@/components/ui/FadeIn";
import { SITE } from "@/lib/site";

const roles = [
  "Backend Systems Architect",
  "Platform & DevOps Engineer",
  "Agentic AI / RAG Engineer",
  "AWS Cloud Practitioner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        aria-hidden
      >
        <defs>
          <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#222222" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-accent-2/5 blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative section-padding pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1 min-w-0">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="badge badge-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 pulse-dot inline-block" />
                  available for impact roles
                </span>
                <span className="badge badge-orange">AWS Certified</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-hi italic leading-[1.1] break-words">
                {SITE.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-4 sm:mt-6 min-h-[2rem] sm:min-h-[2.25rem] flex flex-wrap items-center font-mono text-sm sm:text-lg md:text-xl text-text-muted">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <TerminalCursor />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-xl font-mono text-sm text-text-muted leading-relaxed">
                I design production systems end-to-end — real-time data platforms,
                multi-terabyte ingestion, DevSecOps pipelines, and agentic AI that
                operators actually trust.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href="#projects"
                  whileTap={{ scale: 0.98 }}
                  className="font-mono text-xs sm:text-sm px-5 sm:px-6 py-3 bg-accent text-bg rounded font-medium text-center w-full sm:w-auto"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#experience"
                  whileTap={{ scale: 0.98 }}
                  className="font-mono text-xs sm:text-sm px-5 sm:px-6 py-3 border border-border text-text-hi rounded transition-colors hover:text-accent text-center w-full sm:w-auto"
                >
                  Architecture Work
                </motion.a>
                <a
                  href={SITE.cvPath}
                  download={SITE.cvDownloadName}
                  className="font-mono text-xs sm:text-sm px-5 sm:px-6 py-3 text-text-muted hover:text-accent transition-colors text-center w-full sm:w-auto"
                >
                  CV ↓
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-accent-2/30 blur-sm opacity-60" />
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border bg-bg-surface mx-auto">
                <Image
                  src={SITE.photoPath}
                  alt={SITE.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 px-2 py-1 rounded bg-bg-card border border-accent/30 font-mono text-[8px] sm:text-[9px] text-accent whitespace-nowrap"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                software engineer
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
