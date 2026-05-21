"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Systems" },
  { href: "#projects", label: "Projects" },
  { href: "#infrastructure", label: "Infra" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg text-text-hi italic hover:text-accent transition-colors"
        >
          {SITE.initials}
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={SITE.cvPath}
          download={SITE.cvDownloadName}
          className="font-mono text-xs text-accent border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/10 transition-colors"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
