import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Works } from "@/components/Works";
import { Organizations } from "@/components/Organizations";
import { Certificates } from "@/components/Certificates";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { Experience } from "@/components/Experience";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d14] text-slate-100 overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* Scrolling marquee */}
      <ScrollingBanner />

      {/* 2. About Me */}
      <About />

      {/* 3. Tech Stack */}
      <TechStack />

      {/* 4. Portfolio / Selected Works */}
      <Works />

      {/* 5. Organization Experience */}
      <Organizations />

      {/* 6. Certificates */}
      <Certificates />

      {/* 7. Work Experience + Capabilities + Contact */}
      <Experience />
      <Capabilities />
      <Contact />
    </main>
  );
}
