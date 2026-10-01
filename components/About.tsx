"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: 6, suffix: "+", label: "Projects", accent: "text-amber-400" },
  { value: 4, suffix: "", label: "Disciplines", accent: "text-slate-200" },
  { value: 2024, suffix: "", label: "Active Since", accent: "text-slate-200" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) { setDisplay(value); return; }
    const duration = 1400;
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - p, 4)) * value));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, value, reduce]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[20%] right-[5%] h-[400px] w-[400px] rounded-full bg-amber-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-[11px] uppercase font-semibold tracking-[0.3em] text-amber-500">About</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Four disciplines,{" "}
            <span className="text-slate-400">one direction.</span>
          </h2>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 border border-white/[0.08]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`p-6 text-center sm:p-8 ${i < 2 ? "border-r border-white/[0.08]" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className={`font-display text-4xl font-extrabold sm:text-5xl ${stat.accent}`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-[1.85] text-slate-400">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span className="text-sm text-slate-300">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span className="text-sm text-slate-300">Open to collaboration &amp; internships</span>
              </div>
              <div className="mt-6 border-l-2 border-amber-500/25 pl-5">
                <p className="text-sm italic leading-relaxed text-slate-500">
                  &ldquo;Good design isn&apos;t just about how it looks — it&apos;s about how it works, from pixels on screen to logic underneath.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
