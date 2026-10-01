"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  LinkedIn: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  "itch.io": <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3.13 1.338C2.076 1.922.947 3.15.504 3.795 0 4.53 0 4.858 0 5.628v.401c0 1.18.803 2.378 1.637 2.844.09.051.187.094.284.13a2.63 2.63 0 0 0 2.062-.322c.552-.345.96-.96 1.018-1.68.059.72.467 1.335 1.018 1.68a2.63 2.63 0 0 0 2.063.321 2.63 2.63 0 0 0 2.062-.321c.552-.345.96-.96 1.018-1.68.059.72.467 1.335 1.018 1.68a2.63 2.63 0 0 0 2.063.321 2.63 2.63 0 0 0 2.062-.321c.552-.345.96-.96 1.018-1.68.059.72.467 1.335 1.018 1.68a2.63 2.63 0 0 0 2.063.321c.097-.035.194-.078.284-.129C23.197 8.407 24 7.209 24 6.029v-.401c0-.77 0-1.098-.504-1.833-.443-.645-1.572-1.873-2.626-2.457C18.857.18 15.617 0 12 0 8.383 0 5.143.18 3.13 1.338z"/></svg>,
  ArtStation: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24-2.219a2.408 2.408 0 0 0-.467-1.426L15.541 1.467A2.433 2.433 0 0 0 13.462.44H9.462l10.138 17.569L24 15.504v.001zM4.823 18.662L9.8 9.385l4.976 8.628-4.976.649z"/></svg>,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="border border-line p-8 sm:p-14 lg:p-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-teal">Kontak</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Punya ide?{" "}
              <span className="text-gradient">Mari ngobrol.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              Terbuka untuk kolaborasi, magang, project kampus, atau percakapan soal desain dan game.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-hover font-display text-2xl text-amber sm:text-3xl"
                >
                  {profile.email}
                </a>
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted transition-all duration-300 hover:border-amber/30 hover:text-amber"
                >
                  {copied ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                      Copy
                    </>
                  )}
                </motion.button>
              </div>

              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {profile.socials.map((social, i) => (
                  <motion.li
                    key={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                  >
                    {social.href ? (
                      <a
                        href={social.href}
                        className="group flex items-center gap-2.5 text-[13px] text-muted transition-colors duration-300 hover:text-ink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="transition-transform duration-300 group-hover:scale-110">{socialIcons[social.label]}</span>
                        {social.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-2.5 text-[13px] text-muted/25" title="Isi di data/profile.ts">
                        {socialIcons[social.label]}
                        {social.label}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
