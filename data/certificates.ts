export const certificates = [
  {
    title: "AI Foundations for Everyone",
    issuer: "Coursera",
    date: "2024",
    credential: "",
    category: "AI & ML",
  },
  {
    title: "Applied Cryptography",
    issuer: "Coursera",
    date: "2024",
    credential: "",
    category: "Security",
  },
  {
    title: "DevOps Foundation",
    issuer: "Coursera",
    date: "2024",
    credential: "",
    category: "DevOps",
  },
  {
    title: "Google Project Management",
    issuer: "Coursera",
    date: "2024",
    credential: "",
    category: "Management",
  },
] as const;

export type Certificate = (typeof certificates)[number];
