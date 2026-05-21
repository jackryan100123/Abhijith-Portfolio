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
    <section id="contact" className="section-padding border-t border-border pb-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-text-hi italic mb-6">
          Let&apos;s build something.
        </h2>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted mb-12">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          Open to opportunities
        </div>

        <ul className="space-y-4 max-w-md mx-auto text-left">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 font-mono text-sm hover:text-accent transition-colors"
              >
                <span className="text-text-dim w-20 shrink-0 uppercase text-xs tracking-wider">
                  {link.label}
                </span>
                <span className="text-text-base group-hover:text-accent border-b border-transparent group-hover:border-accent/30 pb-0.5">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-text-dim text-center">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </section>
  );
}
