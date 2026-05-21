import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contributions from "@/components/sections/Contributions";
import Projects from "@/components/sections/Projects";
import Infrastructure from "@/components/sections/Infrastructure";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Contributions />
      <Projects />
      <Infrastructure />
      <Contact />
    </main>
  );
}
