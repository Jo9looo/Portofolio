export const categories = ["Frontend", "UI/UX", "Game", "Art"] as const;

export type Category = (typeof categories)[number];

export type CoverKind = "atlas" | "ronda" | "lumen" | "nocturne" | "folio" | "echo";

export type Work = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  featured?: boolean;
  excerpt: string;
  role: string;
  problem: string;
  outcome: string;
  tools: string[];
  cover: CoverKind;
  links: { label: string; href: string }[];
};

export const works: Work[] = [
  {
    slug: "atlas-kampus",
    title: "Atlas Kampus",
    category: "Frontend",
    year: "2025",
    featured: true,
    excerpt:
      "Portal mahasiswa yang merapikan jadwal, pengumuman, dan ruang kelas dalam satu peta yang tenang.",
    role: "Frontend lead — arsitektur UI, komponen, dan interaksi.",
    problem:
      "Informasi kampus tersebar di banyak kanal. Mahasiswa harus berpindah aplikasi hanya untuk tahu di mana kelas berikutnya.",
    outcome:
      "Satu permukaan yang bisa discan dalam hitungan detik: jadwal hari ini, ruang, dan pengumuman penting tanpa kebisingan visual.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    cover: "atlas",
    links: [],
  },
  {
    slug: "ronda-app",
    title: "Ronda",
    category: "UI/UX",
    year: "2025",
    excerpt:
      "Case study aplikasi keamanan lingkungan: laporan cepat, peta ronda, dan kepercayaan antarwarga.",
    role: "UI/UX designer — riset, alur, dan sistem visual.",
    problem:
      "Laporan warga sering terlambat sampai, dan petugas sulit melihat pola kejadian di peta yang sama.",
    outcome:
      "Alur lapor tiga langkah, status yang transparan, dan peta yang menolong koordinasi tanpa terasa seperti dashboard militer.",
    tools: ["Riset pengguna", "Wireframe", "Prototype", "Design system"],
    cover: "ronda",
    links: [],
  },
  {
    slug: "lumen-shift",
    title: "Lumen Shift",
    category: "Game",
    year: "2024",
    excerpt:
      "Puzzle platformer tentang memindahkan cahaya. Setiap sumber cahaya mengubah geometri level.",
    role: "Game designer & programmer — feel, puzzle, dan prototipe.",
    problem:
      "Banyak puzzle platformer terasa kaku: pemain memecahkan soal, bukan merasakan ruang.",
    outcome:
      "Loop singkat di mana memindahkan lampu langsung mengubah platform, bayangan, dan rute — puzzle yang bisa 'dirasakan'.",
    tools: ["Unity", "C#", "Level design"],
    cover: "lumen",
    links: [],
  },
  {
    slug: "nocturnal-studies",
    title: "Nocturnal Studies",
    category: "Art",
    year: "2024",
    excerpt:
      "Serial studi malam: bentuk, grain, dan cahaya hangat di atas kanvas gelap.",
    role: "Artist — konsep, komposisi, dan finishing.",
    problem:
      "Saya ingin latihan visual yang bukan sekadar latihan teknik, tapi membangun bahasa gambar yang konsisten.",
    outcome:
      "Serangkaian studi yang memakai palet terbatas, tekstur kasar, dan siluet yang bisa dibaca dari jauh.",
    tools: ["Digital painting", "Color script", "Texture study"],
    cover: "nocturne",
    links: [],
  },
  {
    slug: "studio-folio",
    title: "Studio Folio",
    category: "Frontend",
    year: "2026",
    excerpt:
      "Situs ini: portfolio yang diperlakukan sebagai karya, bukan template kartu biru.",
    role: "Desain & frontend — sistem visual, motion, dan struktur konten.",
    problem:
      "Banyak portfolio mahasiswa terlihat sama, sehingga karya yang berbeda tetap terasa generik.",
    outcome:
      "Satu ruang yang menaruh frontend, UI/UX, game, dan art dalam hierarki yang sama — tenang, gelap, dan mudah diisi ulang.",
    tools: ["Next.js", "TypeScript", "Framer Motion"],
    cover: "folio",
    links: [],
  },
  {
    slug: "echo-protocol",
    title: "Echo Protocol",
    category: "Game",
    year: "2025",
    excerpt:
      "Prototipe naratif: pemain merekam gema di reruntuhan, lalu memutarnya untuk membuka jalur.",
    role: "Narrative & systems — mekanik rekam-putar dan mood dunia.",
    problem:
      "Mekanik 'rekam jejak' sering jadi gimmick, bukan bahasa level.",
    outcome:
      "Gema menjadi alat baca ruang. Memutar rekaman bukan cutscene, melainkan cara berjalan di level yang sama untuk kedua kalinya.",
    tools: ["Unity", "Narrative design", "Sound motif"],
    cover: "echo",
    links: [],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getWorkSlugs() {
  return works.map((work) => work.slug);
}
