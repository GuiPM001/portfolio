import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Hero from "./components/sections/hero";
import Navbar from "./components/navbar";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
