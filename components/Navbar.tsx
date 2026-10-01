"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#works", label: "Works" },
  { href: "/#certificates", label: "Certificates" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-600 ${
        scrolled
          ? "border-b border-line/50 bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-2.5 tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl text-ink transition-colors duration-300 hover:text-amber">{profile.initials}</span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted/50 sm:inline">
            {profile.studio}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-hover text-[13px] text-muted transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={onHome ? "#kontak" : "/#kontak"}
              className="rounded-full border border-amber-500/30 px-5 py-2 text-[13px] text-amber-400 transition-all duration-400 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500"
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        <button
          type="button"
          className="text-[13px] text-muted transition-colors hover:text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu"
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/50 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-5">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
