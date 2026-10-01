import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-start justify-center px-5 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-amber">404</p>
        <h1 className="mt-4 font-display text-5xl text-ink">Halaman tidak ada</h1>
        <p className="mt-4 text-muted">Karya atau tautan itu belum masuk arsip.</p>
        <Link href="/" className="mt-8 inline-block text-amber hover:underline">
          Kembali ke beranda →
        </Link>
      </div>
    </div>
  );
}
