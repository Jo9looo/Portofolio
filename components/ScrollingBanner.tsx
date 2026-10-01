"use client";

import { motion, useReducedMotion } from "framer-motion";

const row1 = ["Frontend", "·", "UI/UX", "·", "Game Dev", "·", "Art", "·", "Design", "·", "Code", "·"];
const row2 = ["React", "·", "Unity", "·", "Figma", "·", "Next.js", "·", "C#", "·", "TypeScript", "·"];

export function ScrollingBanner() {
  const reduce = useReducedMotion();

  const track1 = [...row1, ...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <motion.section
      className="overflow-hidden border-y border-line"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Row 1 — disciplines */}
      <div className="py-4 sm:py-5">
        <div
          className="flex w-max items-center gap-5 sm:gap-8"
          style={{ animation: reduce ? "none" : "marquee 28s linear infinite" }}
        >
          {track1.map((w, i) => (
            <span
              key={i}
              className={`whitespace-nowrap font-display text-[clamp(1.8rem,4.5vw,4rem)] leading-none ${
                w === "·" ? "text-amber/40" : "text-ink/[0.15] transition-colors duration-700 hover:text-ink/30"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-line" />

      {/* Row 2 — tools, reverse direction */}
      <div className="py-4 sm:py-5">
        <div
          className="flex w-max items-center gap-5 sm:gap-8"
          style={{ animation: reduce ? "none" : "marquee-reverse 32s linear infinite" }}
        >
          {track2.map((w, i) => (
            <span
              key={i}
              className={`whitespace-nowrap font-display text-[clamp(1.4rem,3.5vw,3rem)] leading-none ${
                w === "·" ? "text-teal/35" : "text-ink/[0.12] transition-colors duration-700 hover:text-ink/25"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
