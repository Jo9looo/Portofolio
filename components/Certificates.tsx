"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Reveal } from "@/components/Reveal";

const categoryColor: Record<string, string> = {
  "AI & ML":    "text-amber-400 border-amber-500/30 bg-amber-500/[0.07]",
  Security:     "text-slate-300 border-white/15 bg-white/[0.04]",
  DevOps:       "text-slate-300 border-white/15 bg-white/[0.04]",
  Management:   "text-slate-300 border-white/15 bg-white/[0.04]",
};

export function Certificates() {
  return (
    <section id="certificates" className="relative scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute bottom-0 left-[20%] h-[350px] w-[350px] rounded-full bg-amber-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-[11px] uppercase font-semibold tracking-[0.3em] text-amber-500">Credentials</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Certificates <span className="text-slate-400">&amp; Licenses</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-400 hover:border-amber-500/25 hover:bg-white/[0.04]"
            >
              {/* Category badge */}
              <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${categoryColor[cert.category] ?? "text-slate-400 border-white/10"}`}>
                {cert.category}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-[15px] font-semibold leading-snug text-white group-hover:text-amber-300 transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Issuer + date */}
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[12px] text-slate-500">{cert.issuer}</span>
                <span className="text-[11px] font-medium text-slate-600">{cert.date}</span>
              </div>

              {/* Credential link */}
              {cert.credential ? (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-amber-500 hover:text-amber-400 transition-colors"
                >
                  View Credential
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <p className="mt-4 text-[12px] text-slate-600 italic">No link yet</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
