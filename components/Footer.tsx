import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="px-5 pb-12 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[11px] tracking-wider text-muted/35 sm:flex-row sm:items-center sm:justify-between">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-muted/25">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
