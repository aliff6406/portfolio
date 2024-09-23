import About from "@/components/About";
import Divider from "@/components/Divider";
import { Experience } from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { links } from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-10">
      <div className="w-full max-w-7xl"></div>
      <FloatingNav navItems={links} />
      <Hero />
      <Divider />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
