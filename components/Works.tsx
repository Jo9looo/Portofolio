"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, works, type Category } from "@/data/works";
import { Reveal } from "@/components/Reveal";
import { WorkCover } from "@/components/WorkCover";

type Filter = "Semua" | Category;
const filters: Filter[] = ["Semua", ...categories];

export function Works() {
  const [filter, setFilter] = useState<Filter>("Semua");

  const visible = useMemo(() => {
    if (filter === "Semua") return works;
    return works.filter((w) => w.category === filter);
  }, [filter]);

  return (
    <section id="works" className="relative scroll-mt-24 px-4 py-24 sm:px-8 sm:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[20%] right-[10%] h-[450px] w-[450px] rounded-full bg-amber-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-500" />
                <p className="text-[11px] uppercase font-semibold tracking-[0.3em] text-amber-500">
                  Portfolio
                </p>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Selected Works
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-slate-400">
              A collection of Frontend, UI/UX, Game Dev, and Digital Art projects.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {filters.map((item) => {
              const active = item === filter;
              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-5 py-2 text-[12px] font-semibold tracking-wide transition-all duration-300 border ${
                    active
                      ? "border-amber-500 bg-amber-500 text-slate-950"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item}
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Works Grid */}
        <motion.ul layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((work, index) => {
              const featured = filter === "Semua" && work.featured;
              const span = featured
                ? "md:col-span-12"
                : filter === "Semua" && index < 3
                  ? "md:col-span-6"
                  : "md:col-span-4";

              return (
                <motion.li
                  layout
                  key={work.slug}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={span}
                >
                  <Link
                    href={`/works/${work.slug}`}
                    className="group relative block border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-amber-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="overflow-hidden relative">
                      <WorkCover
                        kind={work.cover}
                        className={`w-full transition-transform duration-700 ease-out group-hover:scale-[1.05] ${
                          featured ? "aspect-[16/8]" : "aspect-[16/10]"
                        }`}
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-slate-950/80 border border-slate-700/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-amber-300">
                          {work.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-400">
                            {work.year}
                          </p>
                          <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
                            {work.title}
                          </h3>
                        </div>

                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 group-hover:border-amber-500/50 group-hover:bg-amber-500 group-hover:text-slate-950">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-2">
                        {work.excerpt}
                      </p>

                      {work.tools && work.tools.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                          {work.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-md bg-slate-900/90 border border-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
