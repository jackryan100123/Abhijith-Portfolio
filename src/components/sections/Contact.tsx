"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";

const links = [
  {
    label: "Email",
    href: "mailto:abhijithr962@gmail.com",
    display: "abhijithr962@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/jackryan100123",
    display: "github.com/jackryan100123",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhijith962",
    display: "linkedin.com/in/abhijith962",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding section-contained border-t border-border pb-20 sm:pb-28 md:pb-32 safe-bottom">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-hi italic mb-6 px-2">
          Let&apos;s build something.
        </h2>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted mb-8 sm:mb-12">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          Open to opportunities
        </div>

        <ul className="space-y-3 sm:space-y-4 max-w-md mx-auto text-left px-2 w-full">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 font-mono text-sm hover:text-accent transition-colors py-2"
              >
                <span className="text-text-dim sm:w-20 shrink-0 uppercase text-[10px] sm:text-xs tracking-wider">
                  {link.label}
                </span>
                <span className="text-text-base group-hover:text-accent border-b border-transparent group-hover:border-accent/30 pb-0.5 break-safe text-xs sm:text-sm">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-border px-4">
          <p className="font-mono text-xs text-text-dim text-center">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </section>
  );
}
