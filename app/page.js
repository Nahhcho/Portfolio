import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
        <Nav />
    <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <About />
        <ProjectsSection />
        <EmailSection />
    </div>
      <Footer />
    </div>
  );
}
