import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Services />
      <Footer />
    </main>
  );
}
