"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const roles = ["Frontend Dev", "UI/UX Design", "Game Dev", "Digital Artist"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-8">
      {/* Subtle ambient — single amber + neutral, no rainbow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[10%] left-[15%] h-[480px] w-[480px] rounded-full bg-amber-500/[0.07] blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[380px] w-[380px] rounded-full bg-amber-400/[0.05] blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col items-center text-center">

        {/* Status badge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.18em] text-amber-300/90 uppercase">
            {profile.headline}
          </span>
        </motion.div>

        {/* Giant background text — tasteful, single line, not "Web Developer" */}
        <div className="relative w-full mt-6 flex flex-col items-center">
          <div className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center gap-0 z-0">
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="font-display text-[17vw] sm:text-[14vw] lg:text-[11rem] font-extrabold uppercase leading-none tracking-tight"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.10)",
                color: "transparent",
              }}
            >
              CREATIVE
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.18 }}
              className="font-display text-[17vw] sm:text-[14vw] lg:text-[11rem] font-extrabold uppercase leading-none tracking-tight"
              style={{
                WebkitTextStroke: "1.5px rgba(245,158,11,0.22)",
                color: "transparent",
              }}
            >
              BUILDER
            </motion.p>
          </div>

          {/* Profile Photo — larger */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] sm:w-[390px] md:w-[460px] lg:w-[500px] aspect-[3/4]"
          >
            {/* Subtle glow halo behind photo */}
            <div className="absolute inset-x-12 bottom-0 top-16 rounded-full bg-amber-500/[0.12] blur-[60px] -z-10" />
            <div className="relative w-full h-full">
              <Image
                src="/profile-satria.png"
                alt={profile.name}
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 390px, 500px"
              />
              {/* Bottom fade so photo blends into background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Name & tagline */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="relative z-20 -mt-8 max-w-2xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Hi, I&apos;m{" "}
              <span className="text-amber-400">{profile.name}</span>
            </h1>
            <p className="mt-4 text-[15px] sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
              {profile.summary}
            </p>
          </motion.div>

          {/* Role pills — clean, monochrome */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px] font-medium tracking-wide text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:text-amber-300"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="relative z-20 mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-2.5 rounded-full bg-amber-500 px-7 py-3 text-[13px] font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.35)] active:scale-95"
            >
              View My Work
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-[13px] font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
