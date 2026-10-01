"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, React.ReactNode> = {
  Frontend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7"><path d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  "UI/UX": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  "Game Dev": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  Art: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="10.5" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="17.5" cy="10" r="1" fill="currentColor" stroke="none" /></svg>,
};

const spans = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3"];

export function Capabilities() {
  return (
    <section id="kemampuan" className="scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-amber">Capabilities</p>
              <h2 className="mt-3 font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Yang saya kerjakan
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Empat area yang saling menopang — teknis dan visual dalam satu alur kerja.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.article
              key={skill.id}
              className={`card-shine group border border-line p-7 transition-all duration-600 hover:border-amber/15 hover:bg-elevated/50 hover:shadow-[0_4px_30px_rgba(212,160,86,0.04)] sm:p-8 ${spans[i]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <p className={`font-mono text-[11px] tracking-[0.22em] ${skill.accent === "amber" ? "text-amber" : "text-teal"}`}>
                  {skill.id}
                </p>
                <span className="text-muted/12 transition-all duration-600 group-hover:scale-110 group-hover:text-amber/50">
                  {icons[skill.title]}
                </span>
              </div>

              <h3 className="mt-5 font-display text-3xl text-ink lg:text-4xl">{skill.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{skill.description}</p>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted/40 transition-colors duration-400 group-hover:text-muted/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
