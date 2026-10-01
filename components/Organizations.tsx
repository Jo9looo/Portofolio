"use client";

import { motion } from "framer-motion";
import { organizations } from "@/data/organizations";
import { Reveal } from "@/components/Reveal";

export function Organizations() {
  return (
    <section id="organizations" className="relative scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-500" />
            <p className="text-[11px] uppercase font-semibold tracking-[0.3em] text-amber-500">Organization</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Organizational <span className="text-slate-400">Experience</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid grid-cols-[1fr] sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 border-t border-white/[0.07] py-7 first:border-t-0 sm:first:border-t hover:border-white/[0.12] transition-colors"
            >
              {/* Period & Role badge */}
              <div className="flex sm:flex-col gap-3 sm:gap-1.5 items-start sm:pt-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                  {org.period}
                </span>
                <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-slate-400 font-medium">
                  {org.role}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {org.organization}
                </h3>
                <p className="mt-0.5 text-[13px] text-slate-500">{org.place}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                  {org.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
