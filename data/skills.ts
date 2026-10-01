export const skills = [
  {
    id: "01",
    title: "Frontend",
    accent: "amber" as const,
    description:
      "Membangun antarmuka yang cepat, rapi, dan nyaman dipakai — dari layout sampai state dan animasi.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "02",
    title: "UI/UX",
    accent: "teal" as const,
    description:
      "Merancang alur, hierarki, dan sistem visual supaya produk terasa jelas sebelum kodenya ditulis.",
    tools: ["Riset", "Wireframe", "Design system", "Prototype"],
  },
  {
    id: "03",
    title: "Game Dev",
    accent: "teal" as const,
    description:
      "Membuat prototipe yang punya feel: loop yang ketat, kontrol yang responsif, dan dunia yang ingin dijelajahi.",
    tools: ["Unity", "C#", "Game design", "Level feel"],
  },
  {
    id: "04",
    title: "Art",
    accent: "amber" as const,
    description:
      "Mengolah bentuk, cahaya, dan tekstur — ilustrasi, key visual, dan mood yang menopang sebuah karya.",
    tools: ["Ilustrasi", "Color script", "Key visual", "Texture"],
  },
] as const;
