import About from "./components/About";
import Contact from "./components/Contact";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--sand-50)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Collaboration />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
