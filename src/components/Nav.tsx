"use client";

import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          scrolled || menuOpen
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 sm:py-4 flex items-center justify-between gap-3">
          <a
            href="#"
            onClick={closeMenu}
            className="font-serif text-base sm:text-lg text-text-hi italic hover:text-accent transition-colors shrink-0"
          >
            {SITE.initials}
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={SITE.cvPath}
              download={SITE.cvDownloadName}
              className="font-mono text-[10px] sm:text-xs text-accent border border-accent/30 px-2.5 sm:px-3 py-1.5 rounded hover:bg-accent/10 transition-colors whitespace-nowrap"
            >
              <span className="md:hidden">CV</span>
              <span className="hidden md:inline">Download CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <IconX className="w-5 h-5" />
              ) : (
                <IconMenu2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
          onClick={closeMenu}
          aria-label="Close menu"
        />
        <div
          className={`absolute top-[57px] left-0 right-0 bg-bg-card border-b border-border shadow-2xl transition-transform duration-300 safe-top ${
            menuOpen ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block font-mono text-sm text-text-base hover:text-accent py-3 px-3 rounded-lg hover:bg-bg-surface transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 pt-2 border-t border-border">
            <a
              href={SITE.cvPath}
              download={SITE.cvDownloadName}
              onClick={closeMenu}
              className="block w-full text-center font-mono text-sm text-accent border border-accent/30 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
