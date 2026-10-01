"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber">Experience</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Perjalanan{" "}
            <span className="text-muted">sejauh ini</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-line lg:block" aria-hidden />

          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative border-t border-line py-10 transition-colors duration-500 hover:bg-elevated/30 sm:py-12 lg:pl-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-bg bg-amber transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(212,160,86,0.4)] lg:block" />

              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-10">
                <p className="text-[13px] tracking-wide text-muted">{item.period}</p>
                <div>
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] font-medium text-amber">{item.place}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
