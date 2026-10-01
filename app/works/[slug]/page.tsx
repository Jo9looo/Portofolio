import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { WorkCover } from "@/components/WorkCover";
import { getWork, getWorkSlugs, works } from "@/data/works";

type WorkPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Karya" };
  return { title: work.title, description: work.excerpt };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const index = works.findIndex((w) => w.slug === work.slug);
  const previous = index > 0 ? works[index - 1] : null;
  const next = index < works.length - 1 ? works[index + 1] : null;

  return (
    <article className="px-5 pb-28 pt-28 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/#karya"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-ink"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">←</span>
            Kembali ke karya
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-6 bg-amber" aria-hidden />
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber">
              {work.category} · {work.year}
            </p>
          </div>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {work.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{work.excerpt}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <WorkCover kind={work.cover} className="mt-14 aspect-[16/8] w-full border border-line" />
        </Reveal>

        <Reveal delay={0.16}>
          <dl className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">Peran</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-ink">{work.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">Masalah</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-ink">{work.problem}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">Tools</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {work.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-line px-3 py-1 text-[11px] tracking-wide text-muted">
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 border-l-2 border-amber/25 pl-6 sm:pl-8">
            <p className="max-w-2xl text-base leading-[1.85] text-muted italic sm:text-lg">{work.outcome}</p>
          </div>
        </Reveal>

        {work.links.length > 0 && (
          <Reveal delay={0.24}>
            <ul className="mt-12 flex flex-wrap gap-3">
              {work.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-amber/30 px-5 py-2.5 text-[13px] text-amber transition-all duration-400 hover:bg-amber hover:text-bg hover:shadow-[0_4px_20px_rgba(212,160,86,0.15)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <nav className="mt-24 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/works/${previous.slug}`}
                className="card-shine group border border-line p-7 transition-all duration-600 hover:border-amber/15 hover:shadow-[0_4px_30px_rgba(212,160,86,0.04)] sm:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Sebelumnya</p>
                <p className="mt-3 font-display text-2xl text-ink transition-colors duration-400 group-hover:text-amber sm:text-3xl">
                  {previous.title}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/works/${next.slug}`}
                className="card-shine group border border-line p-7 transition-all duration-600 hover:border-teal/15 hover:shadow-[0_4px_30px_rgba(94,184,176,0.04)] sm:p-8 sm:text-right"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Berikutnya</p>
                <p className="mt-3 font-display text-2xl text-ink transition-colors duration-400 group-hover:text-teal sm:text-3xl">
                  {next.title}
                </p>
              </Link>
            ) : null}
          </nav>
        </Reveal>
      </div>
    </article>
  );
}
